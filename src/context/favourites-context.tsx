'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { useCollection } from '@/firebase/firestore/use-collection';
import { addDoc, collection, deleteDoc, doc, getDocs, query, where, Firestore, writeBatch } from 'firebase/firestore';

interface FavouritesContextType {
  favouritedTools: Set<string>;
  handleFavouriteToggle: (toolName: string) => void;
  isLoading: boolean;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

// --- Helper Functions ---

const getGuestFavourites = (): Set<string> => {
  if (typeof window === 'undefined') return new Set();
  try {
    const item = window.localStorage.getItem('favourites_guest');
    return item ? new Set(JSON.parse(item)) : new Set();
  } catch (error) {
    console.error("Error reading guest favourites from localStorage", error);
    return new Set();
  }
};

const setGuestFavourites = (newFavourites: Set<string>) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem('favourites_guest', JSON.stringify(Array.from(newFavourites)));
  } catch (error) {
    console.error("Error saving guest favourites to localStorage", error);
  }
};

// --- Provider Component ---

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const [favouritedTools, setFavouritedTools] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Firestore query for logged-in user
  const favouritesQuery = useMemoFirebase(() => {
    if (user && firestore) {
      return collection(firestore, 'users', user.uid, 'favourites');
    }
    return null;
  }, [user, firestore]);

  const { data: firestoreFavourites, isLoading: firestoreLoading } = useCollection<{ toolName: string }>(favouritesQuery);

  // Effect for initial load and syncing between guest and user states
  useEffect(() => {
    setIsLoading(true);

    if (isUserLoading) {
      return; // Wait until user auth state is resolved
    }

    if (user && firestore) {
      // USER IS LOGGED IN
      if (firestoreLoading) {
        return; // Wait for firestore data to load
      }

      const firestoreTools = new Set(firestoreFavourites?.map(fav => fav.toolName) || []);
      const guestTools = getGuestFavourites();

      if (guestTools.size > 0) {
        // Merge guest favourites into Firestore
        const newToolsToSync = Array.from(guestTools).filter(tool => !firestoreTools.has(tool));
        if (newToolsToSync.length > 0) {
          const batch = writeBatch(firestore);
          const userFavouritesRef = collection(firestore, 'users', user.uid, 'favourites');
          newToolsToSync.forEach(toolName => {
            batch.set(doc(userFavouritesRef), { toolName, userId: user.uid });
          });
          batch.commit().then(() => {
            if (typeof window !== 'undefined') {
              window.localStorage.removeItem('favourites_guest');
            }
          }).catch(err => console.error("Error merging guest favourites:", err));
        } else {
             if (typeof window !== 'undefined') {
              window.localStorage.removeItem('favourites_guest');
            }
        }
      }
      
      const combinedTools = new Set([...Array.from(firestoreTools), ...Array.from(guestTools)]);
      setFavouritedTools(combinedTools);
      setIsLoading(false);

    } else {
      // GUEST USER
      setFavouritedTools(getGuestFavourites());
      setIsLoading(false);
    }
  }, [user, isUserLoading, firestore, firestoreFavourites, firestoreLoading]);


  const handleFavouriteToggle = useCallback(async (toolName: string) => {
    const isCurrentlyFavourited = favouritedTools.has(toolName);

    // Optimistically update the UI state
    setFavouritedTools(prev => {
        const newSet = new Set(prev);
        if (isCurrentlyFavourited) {
            newSet.delete(toolName);
        } else {
            newSet.add(toolName);
        }
        return newSet;
    });

    if (user && firestore) {
      // Logged-in user: Update Firestore
      const favouritesCollectionRef = collection(firestore, 'users', user.uid, 'favourites');
      try {
        if (isCurrentlyFavourited) {
          const q = query(favouritesCollectionRef, where('toolName', '==', toolName));
          const querySnapshot = await getDocs(q);
          const batch = writeBatch(firestore);
          querySnapshot.forEach(document => batch.delete(document.ref));
          await batch.commit();
        } else {
          await addDoc(favouritesCollectionRef, { toolName, userId: user.uid });
        }
      } catch (error) {
          console.error("Error updating Firestore favourites:", error);
          // Revert optimistic update on error
           setFavouritedTools(prev => {
                const newSet = new Set(prev);
                if (isCurrentlyFavourited) { // If it was favourited, the optimistic update removed it, so add it back
                    newSet.add(toolName);
                } else { // If it wasn't favourited, the optimistic update added it, so remove it
                    newSet.delete(toolName);
                }
                return newSet;
            });
      }
    } else {
      // Guest user: Update localStorage
      const newFavourites = new Set(favouritedTools);
      if(isCurrentlyFavourited) {
        newFavourites.delete(toolName);
      } else {
        newFavourites.add(toolName);
      }
      setGuestFavourites(newFavourites);
    }
  }, [user, firestore, favouritedTools]);

  const value = useMemo(() => ({
    favouritedTools,
    handleFavouriteToggle,
    isLoading,
  }), [favouritedTools, handleFavouriteToggle, isLoading]);

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (context === undefined) {
    throw new Error('useFavourites must be used within a FavouritesProvider');
  }
  return context;
};

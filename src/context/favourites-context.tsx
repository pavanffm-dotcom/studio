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
    const favouritesArray = Array.from(newFavourites);
    window.localStorage.setItem('favourites_guest', JSON.stringify(favouritesArray));
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

  // Firestore query for logged-in user's favourites
  const favouritesQuery = useMemoFirebase(() => {
    if (user && firestore) {
      return collection(firestore, 'users', user.uid, 'favourites');
    }
    return null;
  }, [user, firestore]);

  const { data: firestoreFavourites, isLoading: firestoreLoading } = useCollection<{ toolName: string }>(favouritesQuery);

  // Effect to handle initial load and user state changes
  useEffect(() => {
    if (isUserLoading) {
      setIsLoading(true);
      return;
    }

    if (user && firestore) {
        // User is logged in
        if (firestoreLoading) {
            setIsLoading(true);
            return;
        }

        const firestoreSet = new Set(firestoreFavourites?.map(fav => fav.toolName) || []);
        const guestSet = getGuestFavourites();
        
        if (guestSet.size > 0) {
            const mergedSet = new Set([...firestoreSet, ...guestSet]);
            setFavouritedTools(mergedSet);

            // Sync guest favourites to Firestore
            const newToolsToSync = Array.from(guestSet).filter(tool => !firestoreSet.has(tool));
            if (newToolsToSync.length > 0 && firestore) {
                const batch = writeBatch(firestore);
                const userFavouritesRef = collection(firestore, 'users', user.uid, 'favourites');
                newToolsToSync.forEach(toolName => {
                    const newDocRef = doc(userFavouritesRef); // Create a new doc with a unique ID
                    batch.set(newDocRef, { toolName, userId: user.uid });
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
        } else {
            setFavouritedTools(firestoreSet);
        }
    } else {
      // Guest user
      setFavouritedTools(getGuestFavourites());
    }
    setIsLoading(false);
  }, [user, isUserLoading, firestore, firestoreFavourites, firestoreLoading]);


  const handleFavouriteToggle = useCallback(async (toolName: string) => {
    const isFavourited = favouritedTools.has(toolName);

    // Optimistically update UI
    const newFavourites = new Set(favouritedTools);
    if (isFavourited) {
        newFavourites.delete(toolName);
    } else {
        newFavourites.add(toolName);
    }
    setFavouritedTools(newFavourites);

    if (user && firestore) {
        // Logged-in: Update Firestore
        const favCollection = collection(firestore, 'users', user.uid, 'favourites');
        if (isFavourited) {
            const q = query(favCollection, where('toolName', '==', toolName));
            const querySnapshot = await getDocs(q);
            const batch = writeBatch(firestore);
            querySnapshot.forEach(doc => batch.delete(doc.ref));
            await batch.commit().catch(err => {
                console.error("Firestore delete failed:", err);
                setFavouritedTools(favouritedTools); // Revert on failure
            });
        } else {
            await addDoc(favCollection, { toolName, userId: user.uid }).catch(err => {
                console.error("Firestore add failed:", err);
                setFavouritedTools(favouritedTools); // Revert on failure
            });
        }
    } else {
        // Guest: Update localStorage
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

'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { useCollection } from '@/firebase/firestore/use-collection';
import { addDoc, collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';

interface FavouritesContextType {
  favouritedTools: Set<string>;
  handleFavouriteToggle: (toolName: string) => void;
  isLoading: boolean;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const [favouritedTools, setFavouritedTools] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Firestore query for logged-in user
  const favouritesCollectionRef = useMemoFirebase(() => {
    if (user && firestore) {
      return collection(firestore, 'users', user.uid, 'favourites');
    }
    return null;
  }, [user, firestore]);

  const { data: firestoreFavourites, isLoading: firestoreLoading } = useCollection<{ toolName: string }>(favouritesCollectionRef);

  // Effect to sync favourites from either Firestore or localStorage
  useEffect(() => {
    if (isUserLoading) {
      setIsLoading(true);
      return;
    }

    if (user) {
      // User is logged in, use Firestore data
      if (!firestoreLoading) {
        if (firestoreFavourites) {
          const newFavourites = new Set(firestoreFavourites.map(fav => fav.toolName));
          setFavouritedTools(newFavourites);
        } else {
          setFavouritedTools(new Set());
        }
        setIsLoading(false);
      }
    } else {
      // User is a guest, use localStorage
      setIsLoading(true);
      try {
        const item = window.localStorage.getItem('favourites_guest');
        setFavouritedTools(item ? new Set(JSON.parse(item)) : new Set());
      } catch (error) {
        console.error("Error reading guest favourites from localStorage", error);
        setFavouritedTools(new Set());
      }
      setIsLoading(false);
    }
  }, [user, isUserLoading, firestoreFavourites, firestoreLoading]);


  const handleFavouriteToggle = useCallback(async (toolName: string) => {
    const isFavourited = favouritedTools.has(toolName);

    // Optimistically update the UI
    setFavouritedTools(prev => {
        const newSet = new Set(prev);
        if (isFavourited) {
            newSet.delete(toolName);
        } else {
            newSet.add(toolName);
        }
        return newSet;
    });

    if (user && firestore) {
        // Firestore logic for logged-in user
        const q = query(collection(firestore, 'users', user.uid, 'favourites'), where('toolName', '==', toolName));
        try {
            if (isFavourited) {
                const querySnapshot = await getDocs(q);
                const deletePromises = querySnapshot.docs.map((document) => 
                    deleteDoc(doc(firestore, 'users', user.uid, 'favourites', document.id))
                );
                await Promise.all(deletePromises);
            } else {
                await addDoc(collection(firestore, 'users', user.uid, 'favourites'), { toolName });
            }
        } catch (error) {
            console.error("Error updating favourites in Firestore:", error);
            // Revert optimistic update on error
            setFavouritedTools(prev => {
                const reverted = new Set(prev);
                if (isFavourited) {
                    reverted.add(toolName);
                } else {
                    reverted.delete(toolName);
                }
                return reverted;
            });
        }
    } else {
      // localStorage logic for guest user
      const newFavouritedTools = new Set(favouritedTools);
      if (isFavourited) {
        newFavouritedTools.delete(toolName);
      } else {
        newFavouritedTools.add(toolName);
      }
      // This is now redundant due to optimistic update, but safe to keep for non-logged-in flow
      setFavouritedTools(newFavouritedTools); 
      try {
        window.localStorage.setItem('favourites_guest', JSON.stringify(Array.from(newFavouritedTools)));
      } catch (error) {
        console.error("Error saving guest favourites to localStorage", error);
         // Revert optimistic update on error
         setFavouritedTools(prev => {
            const reverted = new Set(prev);
            if (isFavourited) {
                reverted.add(toolName);
            } else {
                reverted.delete(toolName);
            }
            return reverted;
        });
      }
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

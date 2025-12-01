'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { useCollection } from '@/firebase/firestore/use-collection';
import { addDoc, collection, deleteDoc, doc, getDocs, query, where, writeBatch } from 'firebase/firestore';

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

  // Firestore query for the logged-in user's favourites
  const favouritesQuery = useMemoFirebase(() => {
    if (user && firestore) {
      return collection(firestore, 'users', user.uid, 'favourites');
    }
    return null; // No query if there's no user
  }, [user, firestore]);

  const { data: firestoreFavourites, isLoading: firestoreLoading } = useCollection<{ toolName: string }>(favouritesQuery);

  // Effect to sync Firestore favourites to local state
  useEffect(() => {
    // Overall loading is true if we are waiting for user or firestore data
    setIsLoading(isUserLoading || firestoreLoading);

    if (!isUserLoading && user) {
        // If user is logged in, and firestore data has loaded
        if (!firestoreLoading && firestoreFavourites) {
            const firestoreSet = new Set(firestoreFavourites.map(fav => fav.toolName));
            setFavouritedTools(firestoreSet);
        }
    } else if (!isUserLoading && !user) {
        // If user is logged out, clear the favourites
        setFavouritedTools(new Set());
    }
  }, [user, isUserLoading, firestoreFavourites, firestoreLoading]);


  const handleFavouriteToggle = useCallback(async (toolName: string) => {
    // Only allow favouriting if the user is logged in
    if (!user || !firestore) {
      console.log("User must be logged in to favourite tools.");
      // Optionally, you could trigger a toast or modal to prompt login here.
      return;
    }

    const isFavourited = favouritedTools.has(toolName);

    // Optimistically update the UI state
    setFavouritedTools(prev => {
        const newSet = new Set(prev);
        if (isFavourited) {
            newSet.delete(toolName);
        } else {
            newSet.add(toolName);
        }
        return newSet;
    });

    // Perform the Firestore operation
    const favCollection = collection(firestore, 'users', user.uid, 'favourites');
    try {
        if (isFavourited) {
            // If it was favourited, we need to find and delete it
            const q = query(favCollection, where('toolName', '==', toolName));
            const querySnapshot = await getDocs(q);
            const batch = writeBatch(firestore);
            querySnapshot.forEach(doc => batch.delete(doc.ref));
            await batch.commit();
        } else {
            // If it was not favourited, add it
            await addDoc(favCollection, { toolName, userId: user.uid });
        }
    } catch (error) {
        console.error("Failed to update favourites in Firestore:", error);
        // If the operation fails, revert the optimistic UI update
        setFavouritedTools(prev => {
            const revertedSet = new Set(prev);
            if (isFavourited) {
                revertedSet.add(toolName); // It was there before, add it back
            } else {
                revertedSet.delete(toolName); // It wasn't there before, remove it
            }
            return revertedSet;
        });
        // Optionally, show an error toast to the user
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

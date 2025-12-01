'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { useCollection } from '@/firebase/firestore/use-collection';
import { addDoc, collection, deleteDoc, doc, getDocs, query, where, Firestore } from 'firebase/firestore';

interface FavouritesContextType {
  favouritedTools: Set<string>;
  handleFavouriteToggle: (toolName: string) => void;
  isLoading: boolean;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

const updateLocalStorage = (newFavourites: Set<string>) => {
  try {
    window.localStorage.setItem('favourites_guest', JSON.stringify(Array.from(newFavourites)));
  } catch (error) {
    console.error("Error saving guest favourites to localStorage", error);
  }
};

const updateFirestoreFavourite = async (
  firestore: Firestore,
  userId: string,
  toolName: string,
  isFavourited: boolean
) => {
  const favouritesCollectionRef = collection(firestore, 'users', userId, 'favourites');
  const q = query(favouritesCollectionRef, where('toolName', '==', toolName));

  if (isFavourited) {
    // Remove from favourites
    const querySnapshot = await getDocs(q);
    const deletePromises = querySnapshot.docs.map((document) => deleteDoc(document.ref));
    await Promise.all(deletePromises);
  } else {
    // Add to favourites
    await addDoc(favouritesCollectionRef, { toolName, userId });
  }
};


export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();
  const [favouritedTools, setFavouritedTools] = useState<Set<string>>(new Set());
  const [isSyncing, setIsSyncing] = useState(true);

  // Firestore query for logged-in user
  const favouritesQuery = useMemoFirebase(() => {
    if (user && firestore) {
      return query(collection(firestore, 'users', user.uid, 'favourites'));
    }
    return null;
  }, [user, firestore]);

  const { data: firestoreFavourites, isLoading: firestoreLoading } = useCollection<{ toolName: string }>(favouritesQuery);

  // Effect to load initial data from localStorage or Firestore
  useEffect(() => {
    setIsSyncing(true);
    if (!isUserLoading) {
      if (user) {
        // User is logged in, wait for Firestore data
        if (!firestoreLoading) {
          const newFavourites = new Set(firestoreFavourites?.map(fav => fav.toolName) || []);
          setFavouritedTools(newFavourites);
          setIsSyncing(false);
        }
      } else {
        // User is a guest, use localStorage
        try {
          const item = window.localStorage.getItem('favourites_guest');
          setFavouritedTools(item ? new Set(JSON.parse(item)) : new Set());
        } catch (error) {
          console.error("Error reading guest favourites from localStorage", error);
          setFavouritedTools(new Set());
        }
        setIsSyncing(false);
      }
    }
  }, [user, isUserLoading, firestoreFavourites, firestoreLoading]);


  const handleFavouriteToggle = useCallback(async (toolName: string) => {
    const isCurrentlyFavourited = favouritedTools.has(toolName);

    // Optimistically update the UI state
    const newFavouritedTools = new Set(favouritedTools);
    if (isCurrentlyFavourited) {
      newFavouritedTools.delete(toolName);
    } else {
      newFavouritedTools.add(toolName);
    }
    setFavouritedTools(newFavouritedTools);

    if (user && firestore) {
      // Logged-in user: Update Firestore
      try {
        await updateFirestoreFavourite(firestore, user.uid, toolName, isCurrentlyFavourited);
      } catch (error) {
        console.error("Error updating favourites in Firestore:", error);
        // Revert optimistic update on error
        setFavouritedTools(new Set(favouritedTools));
      }
    } else {
      // Guest user: Update localStorage
      updateLocalStorage(newFavouritedTools);
    }
  }, [user, firestore, favouritedTools]);

  const value = useMemo(() => ({
    favouritedTools,
    handleFavouriteToggle,
    isLoading: isSyncing,
  }), [favouritedTools, handleFavouriteToggle, isSyncing]);

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

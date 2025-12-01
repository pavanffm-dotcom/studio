'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useUser, useFirestore, useMemoFirebase } from '@/firebase';
import { 
  addDoc, 
  collection, 
  deleteDoc, 
  doc, 
  getDocs, 
  onSnapshot, 
  query, 
  where, 
  writeBatch 
} from 'firebase/firestore';

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

  useEffect(() => {
    setIsLoading(isUserLoading);
    if (isUserLoading || !user || !firestore) {
      if (!isUserLoading && !user) {
        // If logged out, clear favourites and stop loading
        setFavouritedTools(new Set());
        setIsLoading(false);
      }
      return;
    }

    const favCollection = collection(firestore, 'users', user.uid, 'favourites');
    const unsubscribe = onSnapshot(favCollection, (snapshot) => {
      const firestoreSet = new Set(snapshot.docs.map(doc => doc.data().toolName));
      setFavouritedTools(firestoreSet);
      setIsLoading(false); // Stop loading once we get the data
    }, (error) => {
      console.error("Error listening to favourites:", error);
      setIsLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [user, isUserLoading, firestore]);

  const handleFavouriteToggle = useCallback(async (toolName: string) => {
    if (!user || !firestore) {
      // Here you could trigger a toast to prompt login
      console.error("User not logged in. Cannot favourite.");
      return;
    }

    const isCurrentlyFavourited = favouritedTools.has(toolName);
    const userFavouritesRef = collection(firestore, 'users', user.uid, 'favourites');

    // Optimistic UI update
    setFavouritedTools(prev => {
      const newSet = new Set(prev);
      if (isCurrentlyFavourited) {
        newSet.delete(toolName);
      } else {
        newSet.add(toolName);
      }
      return newSet;
    });

    try {
      if (isCurrentlyFavourited) {
        const q = query(userFavouritesRef, where('toolName', '==', toolName));
        const querySnapshot = await getDocs(q);
        const batch = writeBatch(firestore);
        querySnapshot.forEach(doc => {
          batch.delete(doc.ref);
        });
        await batch.commit();
      } else {
        await addDoc(userFavouritesRef, { toolName, userId: user.uid });
      }
    } catch (error) {
      console.error("Error updating favourite status:", error);
      // Revert optimistic update on error
      setFavouritedTools(prev => {
        const revertedSet = new Set(prev);
        if (isCurrentlyFavourited) {
          revertedSet.add(toolName);
        } else {
          revertedSet.delete(toolName);
        }
        return revertedSet;
      });
      // Optionally show an error toast to the user
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

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
  const { user } = useUser();
  const firestore = useFirestore();
  const [favouritedTools, setFavouritedTools] = useState<Set<string>>(new Set());

  const favouritesQuery = useMemoFirebase(() => {
    if (user && firestore) {
      return collection(firestore, 'users', user.uid, 'favourites');
    }
    return null;
  }, [user, firestore]);

  const { data: firestoreFavourites, isLoading: firestoreLoading } = useCollection<{ toolName: string }>(favouritesQuery);
  
  useEffect(() => {
    if (user && firestoreFavourites) {
      const newFavourites = new Set(firestoreFavourites.map(fav => fav.toolName));
      setFavouritedTools(newFavourites);
    } else if (!user) {
      try {
        const item = window.localStorage.getItem('favourites_guest');
        setFavouritedTools(item ? new Set(JSON.parse(item)) : new Set());
      } catch (error) {
        console.error("Error reading guest favourites from localStorage", error);
        setFavouritedTools(new Set());
      }
    }
  }, [user, firestoreFavourites]);

  const handleFavouriteToggle = useCallback(async (toolName: string) => {
    if (user && firestore) {
        const isFavourited = favouritedTools.has(toolName);
        const q = query(collection(firestore, 'users', user.uid, 'favourites'), where('toolName', '==', toolName));
        
        try {
            if (isFavourited) {
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((document) => {
                    deleteDoc(doc(firestore, 'users', user.uid, 'favourites', document.id));
                });
            } else {
                await addDoc(collection(firestore, 'users', user.uid, 'favourites'), { toolName });
            }
        } catch (error) {
            console.error("Error updating favourites in Firestore:", error);
        }
    } else {
      setFavouritedTools(prevFavouritedTools => {
        const newFavouritedTools = new Set(prevFavouritedTools);
        if (newFavouritedTools.has(toolName)) {
          newFavouritedTools.delete(toolName);
        } else {
          newFavouritedTools.add(toolName);
        }
        try {
          window.localStorage.setItem('favourites_guest', JSON.stringify(Array.from(newFavouritedTools)));
        } catch (error) {
          console.error("Error saving guest favourites to localStorage", error);
        }
        return newFavouritedTools;
      });
    }
  }, [user, firestore, favouritedTools]);

  const value = useMemo(() => ({
    favouritedTools,
    handleFavouriteToggle,
    isLoading: firestoreLoading,
  }), [favouritedTools, handleFavouriteToggle, firestoreLoading]);

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

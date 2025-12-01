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
  const [localFavourites, setLocalFavourites] = useState<Set<string>>(new Set());

  // Memoize the query to the user's favourites collection
  const favouritesQuery = useMemoFirebase(() => {
    if (user && firestore) {
      return collection(firestore, 'users', user.uid, 'favourites');
    }
    return null;
  }, [user, firestore]);

  // useCollection hook to get real-time updates
  const { data: firestoreFavourites, isLoading: firestoreLoading } = useCollection<{ toolName: string }>(favouritesQuery);
  
  useEffect(() => {
    // If the user is logged in, use Firestore data
    if (user && firestoreFavourites) {
      const newFavourites = new Set(firestoreFavourites.map(fav => fav.toolName));
      setLocalFavourites(newFavourites);
    } else if (!user) {
      // Handle guest user with localStorage
      try {
        const item = window.localStorage.getItem('favourites_guest');
        setLocalFavourites(item ? new Set(JSON.parse(item)) : new Set());
      } catch (error) {
        console.error("Error reading guest favourites from localStorage", error);
        setLocalFavourites(new Set());
      }
    }
  }, [user, firestoreFavourites]);

  const handleFavouriteToggle = useCallback(async (toolName: string) => {
    if (user && firestore) {
        // User is logged in, interact with Firestore
        const isFavourited = localFavourites.has(toolName);
        const q = query(collection(firestore, 'users', user.uid, 'favourites'), where('toolName', '==', toolName));
        
        try {
            const querySnapshot = await getDocs(q);
            if (isFavourited) {
                // Remove from favourites
                querySnapshot.forEach((document) => {
                    deleteDoc(doc(firestore, 'users', user.uid, 'favourites', document.id));
                });
            } else {
                // Add to favourites
                if (querySnapshot.empty) {
                    await addDoc(collection(firestore, 'users', user.uid, 'favourites'), { toolName });
                }
            }
        } catch (error) {
            console.error("Error updating favourites in Firestore:", error);
        }

    } else {
      // Guest user, use localStorage
      setLocalFavourites(prevFavouritedTools => {
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
  }, [user, firestore, localFavourites]);

  const value = useMemo(() => ({
    favouritedTools: localFavourites,
    handleFavouriteToggle,
    isLoading: firestoreLoading,
  }), [localFavourites, handleFavouriteToggle, firestoreLoading]);

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

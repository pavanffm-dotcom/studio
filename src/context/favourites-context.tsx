'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, doc, deleteDoc, setDoc } from 'firebase/firestore';
import { addFavourite, removeFavourite } from '@/firebase/firestore/favourites';

interface FavouritesContextType {
  favouritedTools: Set<string>;
  handleFavouriteToggle: (toolName: string) => void;
  isLoading: boolean;
}

type FavouriteDoc = {
  id: string;
  toolName: string;
};

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const firestore = useFirestore();

  const favouritesCollectionRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return collection(firestore, 'users', user.uid, 'favourites');
  }, [firestore, user]);

  const { data: favouriteDocs, isLoading } = useCollection<FavouriteDoc>(favouritesCollectionRef);

  const favouritedTools = useMemo(() => {
    if (!favouriteDocs) return new Set<string>();
    return new Set(favouriteDocs.map(doc => doc.toolName));
  }, [favouriteDocs]);

  const handleFavouriteToggle = useCallback((toolName: string) => {
    if (!firestore || !user) return;

    const isFavourited = favouritedTools.has(toolName);
    const favouriteDocId = favouriteDocs?.find(doc => doc.toolName === toolName)?.id || toolName;

    if (isFavourited) {
      removeFavourite(firestore, user.uid, favouriteDocId);
    } else {
      addFavourite(firestore, user.uid, toolName, { toolName, userId: user.uid });
    }
  }, [firestore, user, favouritedTools, favouriteDocs]);

  const value = useMemo(() => ({
    favouritedTools,
    handleFavouriteToggle,
    isLoading
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

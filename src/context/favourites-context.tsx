'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useUser } from '@/firebase';

interface FavouritesContextType {
  favouritedTools: Set<string>;
  handleFavouriteToggle: (toolName: string) => void;
  isLoading: boolean;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const [favouritedTools, setFavouritedTools] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  const getStorageKey = useCallback(() => {
    // Use a generic key if user is not logged in, or a user-specific key if they are.
    return user ? `favourites_${user.uid}` : 'favourites_guest';
  }, [user]);

  useEffect(() => {
    setIsLoading(true);
    const storageKey = getStorageKey();
    try {
      const item = window.localStorage.getItem(storageKey);
      if (item) {
        setFavouritedTools(new Set(JSON.parse(item)));
      } else {
        setFavouritedTools(new Set());
      }
    } catch (error) {
      console.error("Error reading favourites from localStorage", error);
      setFavouritedTools(new Set());
    }
    setIsLoading(false);
  }, [getStorageKey]);

  const handleFavouriteToggle = useCallback((toolName: string) => {
    const storageKey = getStorageKey();
    if (!storageKey) return;

    setFavouritedTools(prevFavouritedTools => {
      const newFavouritedTools = new Set(prevFavouritedTools);
      if (newFavouritedTools.has(toolName)) {
        newFavouritedTools.delete(toolName);
      } else {
        newFavouritedTools.add(toolName);
      }

      try {
        window.localStorage.setItem(storageKey, JSON.stringify(Array.from(newFavouritedTools)));
      } catch (error) {
        console.error("Error saving favourites to localStorage", error);
      }
      
      return newFavouritedTools;
    });
  }, [getStorageKey]);

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

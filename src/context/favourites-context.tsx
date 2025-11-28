'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';

interface FavouritesContextType {
  favouritedTools: Set<string>;
  handleFavouriteToggle: (toolName: string) => void;
}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favouritedTools, setFavouritedTools] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    try {
      const savedFavourites = localStorage.getItem('favouritedTools');
      if (savedFavourites) {
        setFavouritedTools(new Set(JSON.parse(savedFavourites)));
      }
    } catch (error) {
      console.error("Failed to load favourites from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('favouritedTools', JSON.stringify(Array.from(favouritedTools)));
    } catch (error) {
      console.error("Failed to save favourites to localStorage", error);
    }
  }, [favouritedTools]);

  const handleFavouriteToggle = useCallback((toolName: string) => {
    setFavouritedTools(prev => {
      const newFavourites = new Set(prev);
      if (newFavourites.has(toolName)) {
        newFavourites.delete(toolName);
      } else {
        newFavourites.add(toolName);
      }
      return newFavourites;
    });
  }, []);

  const value = useMemo(() => ({
    favouritedTools,
    handleFavouriteToggle
  }), [favouritedTools, handleFavouriteToggle]);

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

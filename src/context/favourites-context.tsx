'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';

// This context is now effectively empty as per the user's request
interface FavouritesContextType {}

const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  // All logic related to fetching, adding, and removing favourites has been removed.
  const value = useMemo(() => ({
    // No values are provided to the context anymore.
  }), []);

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (context === undefined) {
    // Return a dummy object to avoid crashing the app
    return { favouritedTools: new Set(), handleFavouriteToggle: () => {} };
  }
  return context;
};

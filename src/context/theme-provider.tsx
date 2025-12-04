
'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useFirestore, useUser } from '@/firebase';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

export type Theme = 'default' | 'neoglass' | 'cyberwave' | 'minimal-white' | 'claymorphic';

interface ThemeContextType {
  selectedTheme: Theme;
  handleThemeChange: (themeId: Theme) => void;
  isThemeLoading: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const firestore = useFirestore();
  const [selectedTheme, setSelectedTheme] = useState<Theme>('default');
  const [isThemeLoading, setIsThemeLoading] = useState(true);

  // Effect to apply theme to the document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', selectedTheme);
  }, [selectedTheme]);

  // Effect to load theme from Firestore on user change
  useEffect(() => {
    let unsubscribe: () => void = () => {};

    if (user && firestore) {
      setIsThemeLoading(true);
      const userDocRef = doc(firestore, 'users', user.uid);
      
      unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        const data = docSnap.data();
        const dbTheme = data?.theme as Theme | undefined;
        setSelectedTheme(dbTheme || 'default');
        setIsThemeLoading(false);
      }, (error) => {
        console.error("Error listening to theme preference:", error);
        setSelectedTheme('default'); // Fallback theme
        setIsThemeLoading(false);
      });

    } else if (!user) {
      // Handle logged-out state: maybe use localStorage or just a default
      // For now, we just reset to default and stop loading.
      setSelectedTheme('default');
      setIsThemeLoading(false);
    }
    
    return () => unsubscribe();
  }, [user, firestore]);

  const handleThemeChange = useCallback(async (themeId: Theme) => {
    // Optimistically update UI
    setSelectedTheme(themeId);
    
    if (!user || !firestore) {
      // Optionally save to localStorage for logged-out users
      localStorage.setItem('app-theme', themeId);
      return;
    }

    const userDocRef = doc(firestore, 'users', user.uid);
    try {
      // Non-blocking write to Firestore
      setDoc(userDocRef, { theme: themeId }, { merge: true });
    } catch (error) {
      console.error("Error saving theme to Firestore:", error);
      // Optional: handle error, maybe revert optimistic update
    }
  }, [user, firestore]);

  const value = useMemo(() => ({
    selectedTheme,
    handleThemeChange,
    isThemeLoading
  }), [selectedTheme, handleThemeChange, isThemeLoading]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

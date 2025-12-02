'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useFirestore, useUser } from '@/firebase';
import { doc, getDoc, setDoc, onSnapshot, arrayUnion, arrayRemove } from 'firebase/firestore';

interface SavedToolsContextType {
  savedTools: Set<string>;
  handleSaveToggle: (toolName: string) => void;
  isLoading: boolean;
}

const SavedToolsContext = createContext<SavedToolsContextType | undefined>(undefined);

export const SavedToolsProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const firestore = useFirestore();
  const [savedTools, setSavedTools] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let unsubscribe: () => void = () => {};

    if (user && firestore) {
      setIsLoading(true);
      const userDocRef = doc(firestore, 'users', user.uid);
      
      unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists() && Array.isArray(docSnap.data().savedTools)) {
          setSavedTools(new Set(docSnap.data().savedTools));
        } else {
          setSavedTools(new Set());
        }
        setIsLoading(false);
      }, (error) => {
        console.error("Error listening to saved tools:", error);
        setIsLoading(false);
      });

    } else if (!user) {
      // If user is logged out, clear the tools and stop loading.
      setSavedTools(new Set());
      setIsLoading(false);
    }
    
    // Cleanup subscription on unmount or when user/firestore changes
    return () => unsubscribe();
  }, [user, firestore]);

  const handleSaveToggle = useCallback(async (toolName: string) => {
    if (!user || !firestore) {
      console.log("User must be logged in to save tools.");
      return;
    }

    const userDocRef = doc(firestore, 'users', user.uid);
    const isCurrentlySaved = savedTools.has(toolName);

    // Optimistically update UI
    const newSavedTools = new Set(savedTools);
    if (isCurrentlySaved) {
      newSavedTools.delete(toolName);
    } else {
      newSavedTools.add(toolName);
    }
    setSavedTools(newSavedTools);

    try {
      await setDoc(userDocRef, { 
        savedTools: isCurrentlySaved ? arrayRemove(toolName) : arrayUnion(toolName) 
      }, { merge: true });
    } catch (error) {
      console.error("Error updating saved tools in Firestore:", error);
      // Revert optimistic update on error
      const revertedTools = new Set(savedTools);
      if (isCurrentlySaved) {
        revertedTools.add(toolName);
      } else {
        revertedTools.delete(toolName);
      }
      setSavedTools(revertedTools);
    }
  }, [savedTools, user, firestore]);

  const value = useMemo(() => ({
    savedTools,
    handleSaveToggle,
    isLoading
  }), [savedTools, handleSaveToggle, isLoading]);

  return (
    <SavedToolsContext.Provider value={value}>
      {children}
    </SavedToolsContext.Provider>
  );
};

export const useSavedTools = () => {
  const context = useContext(SavedToolsContext);
  if (context === undefined) {
    throw new Error('useSavedTools must be used within a SavedToolsProvider');
  }
  return context;
};

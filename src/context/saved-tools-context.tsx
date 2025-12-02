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
    if (user && firestore) {
      setIsLoading(true);
      const userDocRef = doc(firestore, 'users', user.uid);
      
      const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists() && docSnap.data().savedTools) {
          setSavedTools(new Set(docSnap.data().savedTools));
        } else {
          // If the doc doesn't exist or has no savedTools, ensure the local state is empty
          setSavedTools(new Set());
        }
        setIsLoading(false);
      }, (error) => {
        console.error("Error listening to saved tools:", error);
        setIsLoading(false);
      });

      return () => unsubscribe();
    } else {
      // Not logged in or Firestore not available, clear saved tools and loading state
      setSavedTools(new Set());
      setIsLoading(false);
    }
  }, [user, firestore]);

  const handleSaveToggle = useCallback(async (toolName: string) => {
    if (!user || !firestore) {
      // TODO: Maybe prompt the user to log in
      console.log("User must be logged in to save tools.");
      return;
    }

    const userDocRef = doc(firestore, 'users', user.uid);
    
    // Optimistically update UI
    const newSavedTools = new Set(savedTools);
    const isCurrentlySaved = newSavedTools.has(toolName);
    
    if (isCurrentlySaved) {
      newSavedTools.delete(toolName);
    } else {
      newSavedTools.add(toolName);
    }
    setSavedTools(newSavedTools);

    // Update Firestore in the background
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
      // Optionally show a toast notification for the error
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

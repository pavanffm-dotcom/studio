'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useAuth, useFirestore, useUser } from '@/firebase';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';

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
          setSavedTools(new Set());
        }
        setIsLoading(false);
      }, (error) => {
        console.error("Error listening to saved tools:", error);
        setIsLoading(false);
      });

      return () => unsubscribe(); // Cleanup listener on unmount
    } else {
      // Not logged in, so no saved tools from firestore
      setSavedTools(new Set());
      setIsLoading(false);
    }
  }, [user, firestore]);

  const handleSaveToggle = useCallback(async (toolName: string) => {
    if (!user || !firestore) {
      // Or redirect to login
      alert("Please log in to save tools.");
      return;
    }

    const newSavedTools = new Set(savedTools);
    const userDocRef = doc(firestore, 'users', user.uid);

    try {
        const docSnap = await getDoc(userDocRef);
        const currentSavedTools = docSnap.exists() && docSnap.data().savedTools ? docSnap.data().savedTools : [];
        
        let updatedTools;
        if (currentSavedTools.includes(toolName)) {
            updatedTools = currentSavedTools.filter((t: string) => t !== toolName);
            newSavedTools.delete(toolName);
        } else {
            updatedTools = [...currentSavedTools, toolName];
            newSavedTools.add(toolName);
        }
        
        await setDoc(userDocRef, { savedTools: updatedTools }, { merge: true });
        setSavedTools(newSavedTools);

    } catch (error) {
        console.error("Error updating saved tools:", error);
        // Optionally revert UI change on error
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

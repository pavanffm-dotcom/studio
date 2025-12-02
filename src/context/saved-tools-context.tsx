'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useAuth, useFirestore, useUser } from '@/firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

interface SavedToolsContextType {
  savedTools: Set<string>;
  handleSaveToggle: (toolName: string) => void;
  isLoading: boolean;
}

const SavedToolsContext = createContext<SavedToolsContextType | undefined>(undefined);

export const SavedToolsProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const firestore = useFirestore();
  const auth = useAuth();
  
  const [savedTools, setSavedTools] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  // Fetch saved tools from Firestore when user logs in
  useEffect(() => {
    if (user && firestore) {
      setIsLoading(true);
      const userDocRef = doc(firestore, 'users', user.uid);
      getDoc(userDocRef).then(docSnap => {
        if (docSnap.exists() && docSnap.data().savedTools) {
          setSavedTools(new Set(docSnap.data().savedTools));
        } else {
          setSavedTools(new Set());
        }
        setIsLoading(false);
      }).catch(error => {
        console.error("Error fetching saved tools:", error);
        setIsLoading(false);
      });
    } else if (!user) {
      // For guest users, load from localStorage
      const localSaved = localStorage.getItem('savedTools');
      setSavedTools(localSaved ? new Set(JSON.parse(localSaved)) : new Set());
      setIsLoading(false);
    }
  }, [user, firestore]);

  const handleSaveToggle = useCallback((toolName: string) => {
    const newSavedTools = new Set(savedTools);
    if (newSavedTools.has(toolName)) {
      newSavedTools.delete(toolName);
    } else {
      newSavedTools.add(toolName);
    }
    setSavedTools(newSavedTools);

    if (user && firestore) {
      const userDocRef = doc(firestore, 'users', user.uid);
      if (savedTools.has(toolName)) {
        updateDoc(userDocRef, {
          savedTools: arrayRemove(toolName)
        }).catch(err => console.error("Error removing from firestore", err));
      } else {
        setDoc(userDocRef, { savedTools: arrayUnion(toolName) }, { merge: true })
        .catch(err => console.error("Error adding to firestore", err));
      }
    } else {
      localStorage.setItem('savedTools', JSON.stringify(Array.from(newSavedTools)));
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

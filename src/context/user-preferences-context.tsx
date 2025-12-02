'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from 'react';
import { useFirestore, useUser } from '@/firebase';
import { doc, onSnapshot, setDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

interface UserPreferencesContextType {
  heartedTools: Set<string>;
  starredTools: Set<string>;
  handleHeartToggle: (toolName: string) => void;
  handleStarToggle: (toolName: string) => void;
  isLoading: boolean;
}

const UserPreferencesContext = createContext<UserPreferencesContextType | undefined>(undefined);

export const UserPreferencesProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const firestore = useFirestore();
  const [heartedTools, setHeartedTools] = useState<Set<string>>(new Set());
  const [starredTools, setStarredTools] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let unsubscribe: () => void = () => {};

    if (user && firestore) {
      setIsLoading(true);
      const userDocRef = doc(firestore, 'users', user.uid);
      
      unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        const data = docSnap.data();
        setHeartedTools(new Set(data?.heartedTools || []));
        setStarredTools(new Set(data?.starredTools || []));
        setIsLoading(false);
      }, (error) => {
        console.error("Error listening to user preferences:", error);
        setIsLoading(false);
      });

    } else if (!user) {
      setHeartedTools(new Set());
      setStarredTools(new Set());
      setIsLoading(false);
    }
    
    return () => unsubscribe();
  }, [user, firestore]);

  const createToggleHandler = (
    toolSet: Set<string>, 
    setToolSet: React.Dispatch<React.SetStateAction<Set<string>>>,
    firestoreField: 'heartedTools' | 'starredTools'
  ) => async (toolName: string) => {
    if (!user || !firestore) {
      console.log("User must be logged in to save tools.");
      return;
    }

    const userDocRef = doc(firestore, 'users', user.uid);
    const isCurrentlySaved = toolSet.has(toolName);
    
    const newToolSet = new Set(toolSet);
    if (isCurrentlySaved) {
      newToolSet.delete(toolName);
    } else {
      newToolSet.add(toolName);
    }
    setToolSet(newToolSet);

    try {
      await setDoc(userDocRef, { 
        [firestoreField]: isCurrentlySaved ? arrayRemove(toolName) : arrayUnion(toolName) 
      }, { merge: true });
    } catch (error) {
      console.error(`Error updating ${firestoreField} in Firestore:`, error);
      // Revert optimistic update on error
      const revertedTools = new Set(toolSet);
       if (isCurrentlySaved) {
        revertedTools.add(toolName);
      } else {
        revertedTools.delete(toolName);
      }
      setToolSet(revertedTools);
    }
  };

  const handleHeartToggle = useCallback(createToggleHandler(heartedTools, setHeartedTools, 'heartedTools'), [heartedTools, user, firestore]);
  const handleStarToggle = useCallback(createToggleHandler(starredTools, setStarredTools, 'starredTools'), [starredTools, user, firestore]);

  const value = useMemo(() => ({
    heartedTools,
    starredTools,
    handleHeartToggle,
    handleStarToggle,
    isLoading
  }), [heartedTools, starredTools, handleHeartToggle, handleStarToggle, isLoading]);

  return (
    <UserPreferencesContext.Provider value={value}>
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (context === undefined) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
};

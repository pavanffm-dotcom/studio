'use client';

import { Auth, onAuthStateChanged, User, signInWithRedirect, GoogleAuthProvider, getApps } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useAuth, useFirebase } from '@/firebase/provider';
import { FirebaseApp } from 'firebase/app';

export interface UserHookResult {
  user: User | null;
  firebaseApp: FirebaseApp | null;
  isUserLoading: boolean;
  userError: Error | null;
}

export const useUser = (): UserHookResult => {
  const { user, firebaseApp, isUserLoading, userError } = useFirebase();
  return { user, firebaseApp, isUserLoading, userError };
};


export function initiateGoogleSignIn(auth: Auth) {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
}

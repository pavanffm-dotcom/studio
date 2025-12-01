'use client';

import { Auth, onAuthStateChanged, User, signInWithRedirect, GoogleAuthProvider } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { useAuth, useFirebase } from '@/firebase/provider';

export interface UserHookResult {
  user: User | null;
  isUserLoading: boolean;
  userError: Error | null;
}

export const useUser = (): UserHookResult => {
  const { user, isUserLoading, userError } = useFirebase();
  return { user, isUserLoading, userError };
};


export function initiateGoogleSignIn(auth: Auth) {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
}

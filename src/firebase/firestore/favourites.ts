'use client';

// This file is no longer used. Logic is now in user-preferences-context.tsx
import { doc, setDoc, deleteDoc, Firestore } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

/**
 * Adds a tool to a user's heartedTools array in Firestore.
 */
export function addHeartedTool(firestore: Firestore, userId: string, toolName: string) {
  const userDocRef = doc(firestore, 'users', userId);
  setDoc(userDocRef, { heartedTools: arrayUnion(toolName) }, { merge: true })
    .catch((error) => {
      errorEmitter.emit(
        'permission-error',
        new FirestorePermissionError({
          path: userDocRef.path,
          operation: 'update',
          requestResourceData: { heartedTools: [toolName] },
        })
      );
    });
}

/**
 * Removes a tool from a user's heartedTools array in Firestore.
 */
export function removeHeartedTool(firestore: Firestore, userId: string, toolName: string) {
  const userDocRef = doc(firestore, 'users', userId);
  setDoc(userDocRef, { heartedTools: arrayRemove(toolName) }, { merge: true })
    .catch((error) => {
      errorEmitter.emit(
        'permission-error',
        new FirestorePermissionError({
          path: userDocRef.path,
          operation: 'update',
          requestResourceData: { heartedTools: [toolName] },
        })
      );
    });
}

/**
 * Adds a tool to a user's starredTools array in Firestore.
 */
export function addStarredTool(firestore: Firestore, userId: string, toolName: string) {
  const userDocRef = doc(firestore, 'users', userId);
  setDoc(userDocRef, { starredTools: arrayUnion(toolName) }, { merge: true })
    .catch((error) => {
      errorEmitter.emit(
        'permission-error',
        new FirestorePermissionError({
          path: userDocRef.path,
          operation: 'update',
          requestResourceData: { starredTools: [toolName] },
        })
      );
    });
}

/**
 * Removes a tool from a user's starredTools array in Firestore.
 */
export function removeStarredTool(firestore: Firestore, userId: string, toolName: string) {
    const userDocRef = doc(firestore, 'users', userId);
    setDoc(userDocRef, { starredTools: arrayRemove(toolName) }, { merge: true })
        .catch((error) => {
        errorEmitter.emit(
            'permission-error',
            new FirestorePermissionError({
            path: userDocRef.path,
            operation: 'update',
            requestResourceData: { starredTools: [toolName] },
            })
        );
        });
}

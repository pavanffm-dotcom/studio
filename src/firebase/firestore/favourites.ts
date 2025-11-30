'use client';

// This file is no longer used for local storage implementation, but kept for future reference if needed.
import { doc, setDoc, deleteDoc, Firestore } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

/**
 * Adds a tool to a user's favourites subcollection in Firestore.
 * This is a non-blocking operation.
 * @param firestore The Firestore instance.
 * @param userId The ID of the user.
 * @param toolName The name of the tool to add, used as the document ID.
 * @param data The data for the favourite entry.
 */
export function addFavourite(firestore: Firestore, userId: string, toolName: string, data: { toolName: string; userId: string; }) {
  const favouriteRef = doc(firestore, 'users', userId, 'favourites', toolName);
  
  setDoc(favouriteRef, data)
    .catch((error) => {
      errorEmitter.emit(
        'permission-error',
        new FirestorePermissionError({
          path: favouriteRef.path,
          operation: 'create',
          requestResourceData: data,
        })
      );
    });
}

/**
 * Removes a tool from a user's favourites subcollection in Firestore.
 * This is a non-blocking operation.
 * @param firestore The Firestore instance.
 * @param userId The ID of the user.
 * @param favouriteId The document ID of the favourite to remove.
 */
export function removeFavourite(firestore: Firestore, userId: string, favouriteId: string) {
  const favouriteRef = doc(firestore, 'users', userId, 'favourites', favouriteId);

  deleteDoc(favouriteRef)
    .catch((error) => {
      errorEmitter.emit(
        'permission-error',
        new FirestorePermissionError({
          path: favouriteRef.path,
          operation: 'delete',
        })
      );
    });
}

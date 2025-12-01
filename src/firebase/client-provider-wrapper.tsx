'use client';

import { FirebaseClientProvider } from '@/firebase';
import { ReactNode } from 'react';

export function FirebaseProviderWrapper({ children }: { children: ReactNode }) {
  return <FirebaseClientProvider>{children}</FirebaseClientProvider>;
}

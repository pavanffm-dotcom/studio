'use client';

import { useUser } from '@/firebase';
import AuthPage from '@/app/auth/page';
import { ReactNode } from 'react';

export function AuthGate({ children }: { children: ReactNode }) {
  const { user, isUserLoading } = useUser();

  if (isUserLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <AuthPage />;
  }

  return <>{children}</>;
}

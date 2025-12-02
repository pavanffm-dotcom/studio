'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ClubPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/community');
  }, [router]);

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-center justify-center">
      <p>Redirecting to the community page...</p>
    </div>
  );
}

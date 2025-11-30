'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Club } from 'lucide-react';

export default function ModePage() {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4">
       <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <Link href="/club">
        <Button size="lg" className="relative z-10 h-20 px-10 text-2xl rounded-3xl glow-shadow">
          <Club className="mr-3 h-8 w-8" />
          Club
        </Button>
      </Link>
    </div>
  );
}

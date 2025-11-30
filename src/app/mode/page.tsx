'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Club } from 'lucide-react';

export default function ModePage() {
  return (
    <div className="min-h-screen w-full bg-background p-4">
       <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 flex justify-start p-4">
        <div className="flex flex-col items-center gap-2">
            <Link href="/club" passHref>
                <Button variant="secondary" size="icon" className="w-16 h-16 rounded-full shadow-lg soft-shadow">
                    <Club className="h-8 w-8 text-primary" />
                </Button>
            </Link>
            <span className="text-sm font-medium text-foreground">Club</span>
        </div>
      </div>
    </div>
  );
}

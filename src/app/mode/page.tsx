'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Club, Palette, X } from 'lucide-react';

export default function ModePage() {
  return (
    <div className="min-h-screen w-full bg-background p-4 relative">
       <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 flex justify-end p-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
            <X className="h-6 w-6 text-foreground" />
          </Button>
        </Link>
      </div>
      <div className="relative z-10 flex justify-center items-center gap-8 pt-16">
        <div className="flex flex-col items-center gap-2">
            <Link href="/club" passHref>
                <Button variant="secondary" size="icon" className="w-20 h-20 rounded-full shadow-lg soft-shadow">
                    <Club className="h-10 w-10 text-primary" />
                </Button>
            </Link>
            <span className="text-base font-medium text-foreground">Club</span>
        </div>
        <div className="flex flex-col items-center gap-2">
            <Link href="/ui-themes" passHref>
                <Button variant="secondary" size="icon" className="w-20 h-20 rounded-full shadow-lg soft-shadow">
                    <Palette className="h-10 w-10 text-primary" />
                </Button>
            </Link>
            <span className="text-base font-medium text-foreground">UI</span>
        </div>
      </div>
    </div>
  );
}

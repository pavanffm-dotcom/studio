'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function UiThemesPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
            <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
        </div>
        <div className="relative z-10 w-full max-w-sm pt-6 px-4">
            <header className="flex items-center gap-4">
                <Link href="/mode" passHref>
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
                        <ArrowLeft />
                    </Button>
                </Link>
                <h1 className="text-2xl font-bold text-foreground">
                    UI Themes
                </h1>
            </header>
        </div>

        <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
            <div className="flex-grow overflow-y-auto no-scrollbar p-4">
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <p className="text-muted-foreground">
                        Theme selection will be available here soon.
                    </p>
                </div>
            </div>
        </main>
    </div>
  );
}

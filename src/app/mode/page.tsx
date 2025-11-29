'use client';

import Link from 'next/link';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ModePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-mint via-soft-blue to-lavender p-4 text-center">
      <div className="absolute top-6 left-4">
        <Link href="/" passHref>
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
            <ArrowLeft />
          </Button>
        </Link>
      </div>

      <Card className="w-full max-w-md bg-card/80 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl border-t-2 border-white/50 soft-shadow p-8">
        <CardContent className="p-0">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cute-purple to-lavender flex items-center justify-center text-white glow-shadow">
              <Sparkles className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground">
            Special Mode Activated
          </h1>
          <p className="text-muted-foreground mt-4 text-lg">
            Welcome to a fresh new experience. This is a special mode page you requested!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

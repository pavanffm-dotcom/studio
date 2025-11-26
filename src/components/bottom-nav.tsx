'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Plus, Wand2, Mic, Send } from 'lucide-react';

export function BottomNav() {
  return (
    <div className="flex-shrink-0 border-t-2 border-white/50 bg-card/80 backdrop-blur-xl p-3">
      <div className="flex items-center gap-2">
        <Button variant="secondary" size="icon" className="rounded-2xl w-12 h-12 soft-shadow">
          <Plus />
        </Button>
        <Button variant="secondary" size="icon" className="rounded-2xl w-12 h-12 soft-shadow">
          <Wand2 />
        </Button>
        <div className="flex-grow relative">
          <Input placeholder="Message your assistant..." className="bg-secondary rounded-full h-12 text-base pr-28 border-none soft-shadow" />
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center">
            <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
                <Mic className="w-5 h-5 text-muted-foreground"/>
            </Button>
            <Button size="icon" className="rounded-full w-10 h-10 bg-gradient-to-br from-cute-purple to-lavender glow-shadow">
                <Send className="w-5 h-5"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

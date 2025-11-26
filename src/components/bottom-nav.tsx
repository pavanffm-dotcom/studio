'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Plus, Wand2, Mic, Send } from 'lucide-react';

export function BottomNav() {
  return (
    <div className="flex-shrink-0 border-t bg-card p-2">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Plus />
        </Button>
        <Button variant="ghost" size="icon">
          <Wand2 />
        </Button>
        <div className="flex-grow relative">
          <Input placeholder="Message" className="bg-secondary rounded-full pr-20" />
          <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center">
            <Button variant="ghost" size="icon" className="rounded-full">
                <Mic className="w-4 h-4 text-muted-foreground"/>
            </Button>
            <Button size="icon" className="rounded-full w-8 h-8">
                <Send className="w-4 h-4"/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

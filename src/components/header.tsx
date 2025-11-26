'use client';

import { AiAtlasLogo } from './ai-atlas-logo';
import { AddToolDialog } from './add-tool-dialog';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-20 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <AiAtlasLogo className="w-8 h-8"/>
            <span className="text-xl font-bold tracking-tight">AI Atlas</span>
          </div>
          <AddToolDialog />
        </div>
      </div>
    </header>
  );
}

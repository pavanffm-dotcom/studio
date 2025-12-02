'use client';

import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowLeft, Club, Plus } from 'lucide-react';
import { GalaxyLogo } from './galaxy-logo';
import { useRouter } from 'next/navigation';

type ClubHeaderProps = {
  title: string;
  showBackButton?: boolean;
  showCreateButton?: boolean;
};

export function ClubHeader({
  title,
  showBackButton = false,
  showCreateButton = false,
}: ClubHeaderProps) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/community');
    }
  };

  return (
    <header className="flex justify-between items-center py-2">
      <div className="flex items-center gap-2">
        {showBackButton ? (
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm" onClick={handleBack}>
            <ArrowLeft />
          </Button>
        ) : (
          <Club className="w-8 h-8 text-primary" />
        )}
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        {showCreateButton && (
           <Link href="/community/create">
             <Button variant="outline" className="rounded-full h-12 text-base">
               <Plus className="w-4 h-4 mr-2" />
               Create Club
             </Button>
           </Link>
        )}
        <GalaxyLogo className="w-10 h-10" />
      </div>
    </header>
  );
}

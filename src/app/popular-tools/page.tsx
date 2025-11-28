'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Video, Clapperboard, Mic, UserSquare, ImageIcon, TrendingUp, Share2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/language';

type Tool = {
    name: string;
    image?: string;
    icon?: React.ReactNode;
    isTrending?: boolean;
    category?: string;
    dataAiHint?: string;
    url: string;
};

const popularTools: Tool[] = [
  { name: 'Runway', icon: <Video className="w-8 h-8" />, url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-pop/300/200', category: 'Video', dataAiHint: 'abstract animation', isTrending: true },
  { name: 'Pika', icon: <Clapperboard className="w-8 h-8" />, url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-pop/300/200', category: 'Video', dataAiHint: 'cinematic video', isTrending: true },
  { name: 'ElevenLabs', icon: <Mic className="w-8 h-8" />, url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-pop/300/200', category: 'Audio', dataAiHint: 'sound waves', isTrending: true },
  { name: 'Lensa AI', icon: <UserSquare className="w-8 h-8" />, url: 'https://prisma-ai.com/lensa', image: 'https://picsum.photos/seed/lensa-pop/300/200', category: 'Image', dataAiHint: 'ai avatar', isTrending: true },
  { name: 'Midjourney', icon: <ImageIcon className="w-8 h-8" />, url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-pop/300/200', category: 'Image', dataAiHint: 'generative art', isTrending: true },
];

const ToolCard = React.memo(({ tool, isFavourited, onFavouriteToggle, onShare, t }: { tool: Tool, isFavourited: boolean, onFavouriteToggle: (toolName: string) => void, onShare: (e: React.MouseEvent, tool: Tool) => void, t: (key: string) => string }) => {
  const handleFavouriteClick = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onFavouriteToggle(tool.name);
  }, [tool.name, onFavouriteToggle]);

  return (
    <Link href={tool.url} target="_blank" rel="noopener noreferrer">
      <Card className="relative overflow-hidden group cursor-pointer bg-white/50 border-white/20 border-2 rounded-3xl h-full soft-shadow transition-transform hover:scale-105 duration-300">
        {tool.image && <Image src={tool.image} alt={tool.name} width={300} height={200} className="w-full aspect-[4/3] object-cover" data-ai-hint={tool.dataAiHint} />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {tool.isTrending && (
          <Badge className="absolute top-2 left-2 bg-cute-purple/80 text-white backdrop-blur-sm text-xs rounded-full border-none shadow-lg">
            <TrendingUp className="w-3 h-3 mr-1"/>
            {t('tools.trendingBadge')}
          </Badge>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <div className="flex justify-between items-end">
            <h5 className="font-semibold text-white text-base leading-tight">{tool.name}</h5>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm" onClick={onShare}>
                <Share2 />
              </Button>
              <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm" onClick={handleFavouriteClick}>
                <Star className={cn('w-5 h-5 transition-all', isFavourited ? 'fill-yellow-300 text-yellow-300' : 'text-white')}/>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
});
ToolCard.displayName = 'ToolCard';


export default function PopularToolsPage() {
    const { t } = useLanguage();
    const { toast } = useToast();
    const [favouritedTools, setFavouritedTools] = React.useState<Set<string>>(() => new Set(['Runway', 'Pika']));

    const handleFavouriteToggle = React.useCallback((toolName: string) => {
        setFavouritedTools(prev => {
          const newFavourites = new Set(prev);
          if (newFavourites.has(toolName)) {
            newFavourites.delete(toolName);
          } else {
            newFavourites.add(toolName);
          }
          return newFavourites;
        });
    }, []);

    const handleShareTool = React.useCallback(async (e: React.MouseEvent, tool: Tool) => {
        e.preventDefault();
        e.stopPropagation();
    
        const shareData = {
          title: tool.name,
          text: `Check out this AI tool: ${tool.name}`,
          url: tool.url,
        };
    
        if (navigator.share) {
          try {
            await navigator.share(shareData);
          } catch (err) {
            console.error("Error sharing:", err);
          }
        } else {
          navigator.clipboard.writeText(tool.url);
          toast({
            title: "Link Copied!",
            description: `${tool.name}'s URL has been copied to your clipboard.`,
          });
        }
      }, [toast]);


  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-sm pt-6 px-4">
        <header className="flex items-center gap-4">
          <Link href="/" passHref>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
              <ArrowLeft />
            </Button>
          </Link>
          <div className='flex items-center gap-2'>
            <TrendingUp className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              {t('home.popularTools.title')}
            </h1>
          </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4">
            <div className="grid grid-cols-2 gap-4">
                {popularTools.map((tool) => (
                    <ToolCard
                        key={tool.name}
                        tool={tool}
                        isFavourited={favouritedTools.has(tool.name)}
                        onFavouriteToggle={handleFavouriteToggle}
                        onShare={(e) => handleShareTool(e, tool)}
                        t={t}
                    />
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}

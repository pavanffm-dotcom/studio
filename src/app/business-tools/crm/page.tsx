'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Users, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useSavedTools } from '@/context/saved-tools-context';
import { cn } from '@/lib/utils';

const crmTools = [
  {
    name: 'Pipedrive',
    description: 'The first CRM platform made for salespeople, by salespeople.',
    url: 'https://www.pipedrive.com/',
    image: 'https://picsum.photos/seed/pipedrive/600/400',
    dataAiHint: 'sales pipeline'
  },
  {
    name: 'Zoho CRM',
    description: 'An award-winning CRM to attract, retain, and delight customers.',
    url: 'https://www.zoho.com/crm/',
    image: 'https://picsum.photos/seed/zohocrm/600/400',
    dataAiHint: 'customer relationship'
  },
  {
    name: 'Insightly',
    description: 'The modern CRM for building lifelong customer relationships.',
    url: 'https://www.insightly.com/',
    image: 'https://picsum.photos/seed/insightly/600/400',
    dataAiHint: 'crm dashboard'
  },
];

export default function CrmToolsPage() {
    const { toast } = useToast();
    const { savedTools, handleSaveToggle } = useSavedTools();

    const handleShareTool = React.useCallback(async (e: React.MouseEvent, tool: typeof crmTools[0]) => {
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
          <Link href="/business-tools" passHref>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
              <ArrowLeft />
            </Button>
          </Link>
          <div className='flex items-center gap-2'>
            <Users className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              CRM Tools
            </h1>
          </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4">
          <div className="space-y-4">
            {crmTools.map((tool, index) => {
              const isSaved = savedTools.has(tool.name);
              const handleHeartClick = (e: React.MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleSaveToggle(tool.name);
              };
              return (
              <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group">
                <Card 
                  className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                      <Image
                        src={tool.image}
                        alt={tool.name}
                        width={600}
                        height={400}
                        className="w-full h-auto aspect-[16/9] object-cover"
                        data-ai-hint={tool.dataAiHint}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-2 right-2 bg-primary/80 text-primary-foreground rounded-full p-2 backdrop-blur-sm">
                          <ExternalLink className="w-4 h-4"/>
                      </div>
                  </div>
                  <div className='p-4'>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-lg font-bold text-foreground">{tool.name}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0 pl-2">
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleShareTool(e, tool)}>
                                <Share2 className="w-4 h-4" />
                            </Button>
                             <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={handleHeartClick}>
                              <Heart className={cn('w-4 h-4 transition-all', isSaved ? 'fill-red-500 text-red-500' : 'text-foreground/60')}/>
                            </Button>
                        </div>
                    </div>
                  </div>
                </Card>
              </Link>
            )})}
          </div>
        </div>
      </main>
    </div>
  );
}

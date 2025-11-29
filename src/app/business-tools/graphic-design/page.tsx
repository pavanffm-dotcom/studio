'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Paintbrush, Star, Share2, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useFavourites } from '@/context/favourites-context';

const logoDesignTools = [
  {
    name: 'Looka',
    description: 'Use AI to design a logo and build a brand you love.',
    url: 'https://looka.com/',
    image: 'https://picsum.photos/seed/looka-logo/600/400',
    dataAiHint: 'ai logo'
  },
  {
    name: 'Logo.com',
    description: 'The easy and professional way to make a logo.',
    url: 'https://logo.com/',
    image: 'https://picsum.photos/seed/logocom/600/400',
    dataAiHint: 'brand logo'
  },
  {
    name: 'Designs.ai',
    description: 'Create logos, videos, and more with AI.',
    url: 'https://designs.ai/logomaker',
    image: 'https://picsum.photos/seed/designsai-logo/600/400',
    dataAiHint: 'design suite'
  },
  {
    name: 'Brandmark.io',
    description: 'Create a unique, professional logo for your business.',
    url: 'https://brandmark.io/',
    image: 'https://picsum.photos/seed/brandmark/600/400',
    dataAiHint: 'professional logo'
  },
  {
    name: 'SmashingLogo',
    description: 'Design a unique logo that you\'ll love.',
    url: 'https://smashinglogo.com/',
    image: 'https://picsum.photos/seed/smashinglogo/600/400',
    dataAiHint: 'logo ideas'
  },
  {
    name: 'Tailor Brands',
    description: 'The world\'s most advanced logo maker.',
    url: 'https://www.tailorbrands.com/logo-maker',
    image: 'https://picsum.photos/seed/tailorbrands/600/400',
    dataAiHint: 'business branding'
  },
  {
    name: 'LogoAI',
    description: 'Let AI-powered design create your new logo.',
    url: 'https://www.logoai.com/',
    image: 'https://picsum.photos/seed/logoai/600/400',
    dataAiHint: 'ai branding'
  },
  {
    name: 'Hatchful',
    description: 'Shopify\'s free logo maker. No design experience required.',
    url: 'https://hatchful.shopify.com/',
    image: 'https://picsum.photos/seed/hatchful/600/400',
    dataAiHint: 'shopify logo'
  },
  {
    name: 'Canva Logo Maker',
    description: 'Create a logo for free in minutes.',
    url: 'https://www.canva.com/create/logos/',
    image: 'https://picsum.photos/seed/canva-logo/600/400',
    dataAiHint: 'free logo'
  },
  {
    name: 'Uizard',
    description: 'AI-powered design tool for creating stunning logos.',
    url: 'https://uizard.io/ai-logo-generator/',
    image: 'https://picsum.photos/seed/uizard-logo/600/400',
    dataAiHint: 'ui design'
  },
];

export default function GraphicDesignToolsPage() {
    const { toast } = useToast();
    const { favouritedTools, handleFavouriteToggle } = useFavourites();

    const handleFavouriteClick = (e: React.MouseEvent, toolName: string) => {
        e.preventDefault();
        e.stopPropagation();
        handleFavouriteToggle(toolName);
    };

    const handleShareTool = React.useCallback(async (e: React.MouseEvent, tool: typeof logoDesignTools[0]) => {
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
            <Paintbrush className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              Graphic Design
            </h1>
          </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4">
            <section>
                <div className="flex justify-between items-center mb-3 px-2">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Palette className="w-5 h-5 text-primary"/>
                        Logo Design
                    </h2>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                    {logoDesignTools.map((tool, index) => (
                      <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block w-[280px] shrink-0 opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                        <Card 
                          className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 h-full group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden"
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
                                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{tool.description}</p>
                                </div>
                                <div className="flex items-center gap-1 shrink-0 pl-2">
                                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleShareTool(e, tool)}>
                                        <Share2 className="w-4 h-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleFavouriteClick(e, tool.name)}>
                                        <Star className={cn('w-5 h-5 transition-all', favouritedTools.has(tool.name) ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
                                    </Button>
                                </div>
                            </div>
                          </div>
                        </Card>
                      </Link>
                    ))}
                </div>
            </section>
        </div>
      </main>
    </div>
  );
}

'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Brush, Star, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const contentCreationTools = [
  { name: 'Canva', url: 'https://www.canva.com/', dataAiHint: 'graphic design' },
  { name: 'Adobe Express', url: 'https://www.adobe.com/express/', dataAiHint: 'design software' },
  { name: 'Picsart', url: 'https://picsart.com/', dataAiHint: 'photo editor' },
  { name: 'CapCut', url: 'https://www.capcut.com/', dataAiHint: 'video editor' },
  { name: 'Descript', url: 'https://www.descript.com/', dataAiHint: 'audio video editing' },
  { name: 'Audacity', url: 'https://www.audacityteam.org/', dataAiHint: 'audio software' },
  { name: 'Google Docs', url: 'https://docs.google.com/', dataAiHint: 'document editor' },
  { name: 'Freepik', url: 'https://www.freepik.com/', dataAiHint: 'stock photos' },
  { name: 'Piktochart', url: 'https://piktochart.com/', dataAiHint: 'infographic maker' },
  { name: 'Social Bee CoPilot', url: 'https://socialbee.com/copilot/', dataAiHint: 'social media' },
  { name: 'Loomly', url: 'https://www.loomly.com/', dataAiHint: 'brand success' },
  { name: 'Buffer', url: 'https://buffer.com/', dataAiHint: 'social scheduler' },
  { name: 'Hootsuite', url: 'https://www.hootsuite.com/', dataAiHint: 'social media management' },
  { name: 'RunwayML', url: 'https://runwayml.com/', dataAiHint: 'ai video' },
  { name: 'FlexClip', url: 'https://www.flexclip.com/', dataAiHint: 'video maker' },
  { name: 'Pixlr', url: 'https://pixlr.com/', dataAiHint: 'online photo editor' },
  { name: 'Photopea', url: 'https://www.photopea.com/', dataAiHint: 'advanced editor' },
  { name: 'Lumen5', url: 'https://lumen5.com/', dataAiHint: 'video creator' },
  { name: 'Google Trends', url: 'https://trends.google.com/', dataAiHint: 'search trends' },
  { name: 'Grammarly', url: 'https://www.grammarly.com/', dataAiHint: 'writing assistant' },
  { name: 'Notion', url: 'https://www.notion.so/', dataAiHint: 'workspace app' },
  { name: 'Jasper', url: 'https://www.jasper.ai/', dataAiHint: 'ai writer' },
  { name: 'Copy.ai', url: 'https://www.copy.ai/', dataAiHint: 'copywriting tool' },
  { name: 'Writesonic', url: 'https://writesonic.com/', dataAiHint: 'seo content' },
  { name: 'InShot', url: 'https://inshot.com/', dataAiHint: 'mobile video editor' },
  { name: 'Kinemaster', url: 'https://www.kinemaster.com/', dataAiHint: 'pro video editor' },
  { name: 'Veed.io', url: 'https://www.veed.io/', dataAiHint: 'online video suite' },
  { name: 'Filmora', url: 'https://filmora.wondershare.com/', dataAiHint: 'video editing software' },
  { name: 'Adobe Premiere Rush', url: 'https://www.adobe.com/products/premiere-rush.html', dataAiHint: 'mobile video app' },
  { name: 'Figma', url: 'https://www.figma.com/', dataAiHint: 'ui design' },
  { name: 'Sketch', url: 'https://www.sketch.com/', dataAiHint: 'vector design' },
  { name: 'Crello', url: 'https://crello.com/', dataAiHint: 'vista create' },
  { name: 'Snappa', url: 'https://snappa.com/', dataAiHint: 'graphic creator' },
  { name: 'Venngage', url: 'https://venngage.com/', dataAiHint: 'infographics' },
  { name: 'Animoto', url: 'https://animoto.com/', dataAiHint: 'slideshow video' },
  { name: 'Biteable', url: 'https://biteable.com/', dataAiHint: 'video maker' },
  { name: 'Renderforest', url: 'https://www.renderforest.com/', dataAiHint: 'branding videos' },
  { name: 'Ripl', url: 'https://www.ripl.com/', dataAiHint: 'social videos' },
  { name: 'Clipchamp', url: 'https://clipchamp.com/', dataAiHint: 'microsoft video' },
  { name: 'OBS Studio', url: 'https://obsproject.com/', dataAiHint: 'streaming software' },
  { name: 'Streamlabs', url: 'https://streamlabs.com/', dataAiHint: 'live streaming' },
  { name: 'Kapwing', url: 'https://www.kapwing.com/', dataAiHint: 'collaborative video' },
  { name: 'StoryArt', url: 'https://www.storyart.com/', dataAiHint: 'story editor' },
  { name: 'Mojo', url: 'https://www.mojo-app.com/', dataAiHint: 'animated stories' },
  { name: 'Remove.bg', url: 'https://www.remove.bg/', dataAiHint: 'background remover' },
  { name: 'Midjourney', url: 'https://www.midjourney.com/', dataAiHint: 'ai image' },
  { name: 'Stable Diffusion', url: 'https://stablediffusionweb.com/', dataAiHint: 'image generation' },
  { name: 'DALL·E', url: 'https://openai.com/dall-e-3/', dataAiHint: 'ai art' },
  { name: 'Trello', url: 'https://trello.com/', dataAiHint: 'project board' },
  { name: 'Airtable', url: 'https://www.airtable.com/', dataAiHint: 'spreadsheet database' },
];

export default function ContentCreationToolsPage() {
    const { toast } = useToast();
    const [favouritedTools, setFavouritedTools] = React.useState<Set<string>>(() => new Set());

    React.useEffect(() => {
        try {
            const savedFavourites = localStorage.getItem('favouritedTools');
            if (savedFavourites) {
                setFavouritedTools(new Set(JSON.parse(savedFavourites)));
            }
        } catch (error) {
            console.error("Failed to load favourites from localStorage", error);
        }
    }, []);

    React.useEffect(() => {
        try {
            localStorage.setItem('favouritedTools', JSON.stringify(Array.from(favouritedTools)));
        } catch (error) {
            console.error("Failed to save favourites to localStorage", error);
        }
    }, [favouritedTools]);

    const handleFavouriteToggle = React.useCallback((e: React.MouseEvent, toolName: string) => {
        e.preventDefault();
        e.stopPropagation();
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

    const handleShareTool = React.useCallback(async (e: React.MouseEvent, tool: typeof contentCreationTools[0]) => {
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
            <Brush className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              Content Creation Tools
            </h1>
          </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4">
          <div className="space-y-4">
            {contentCreationTools.map((tool, index) => (
              <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group">
                <Card 
                  className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative">
                      <Image
                        src={`https://picsum.photos/seed/${tool.name.replace(/\s/g, '-')}/600/400`}
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
                        <CardTitle className="text-lg font-bold text-foreground">{tool.name}</CardTitle>
                        <div className="flex items-center gap-1 shrink-0 pl-2">
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleShareTool(e, tool)}>
                                <Share2 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleFavouriteToggle(e, tool.name)}>
                                <Star className={cn('w-5 h-5 transition-all', favouritedTools.has(tool.name) ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
                            </Button>
                        </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

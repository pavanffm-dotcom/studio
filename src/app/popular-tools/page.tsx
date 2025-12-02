'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Share2, TrendingUp, Video, ImageIcon, Film, Mic, Voicemail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/language';
import { Tool } from '@/lib/tools-data';
import { useSavedTools } from '@/context/saved-tools-context';
import { cn } from '@/lib/utils';

const textToVideoTools: Tool[] = [
  { name: 'Runway', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-pop/300/200', category: 'Video', dataAiHint: 'abstract animation', isTrending: true },
  { name: 'Pika', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-pop/300/200', category: 'Video', dataAiHint: 'cinematic video', isTrending: true },
  { name: 'InVideo', url: 'https://invideo.io/', image: 'https://picsum.photos/seed/invideo-video/300/200', category: 'Video', dataAiHint: 'ai video editor', isTrending: true },
  { name: 'Synthesia', url: 'https://www.synthesia.io/', image: 'https://picsum.photos/seed/synthesia-video/300/200', category: 'Video', dataAiHint: 'ai avatars', isTrending: true },
  { name: 'HeyGen', url: 'https://www.heygen.com/', image: 'https://picsum.photos/seed/heygen-video/300/200', category: 'Video', dataAiHint: 'generative video', isTrending: true },
  { name: 'Pictory', url: 'https://pictory.ai/', image: 'https://picsum.photos/seed/pictory-video/300/200', category: 'Video', dataAiHint: 'video from script', isTrending: true },
];

const textToImageTools: Tool[] = [
    { name: 'Bing Image Creator', url: 'https://www.bing.com/images/create', image: 'https://picsum.photos/seed/bing-creator/300/200', category: 'Image', dataAiHint: 'dalle ai', isTrending: true },
    { name: 'Adobe Firefly', url: 'https://firefly.adobe.com/', image: 'https://picsum.photos/seed/adobe-firefly/300/200', category: 'Image', dataAiHint: 'generative fill', isTrending: true },
    { name: 'Canva AI', url: 'https://www.canva.com/ai-image-generator/', image: 'https://picsum.photos/seed/canva-ai/300/200', category: 'Image', dataAiHint: 'design tool', isTrending: true },
    { name: 'Stable Diffusion Online', url: 'https://stablediffusionweb.com/', image: 'https://picsum.photos/seed/stable-diffusion/300/200', category: 'Image', dataAiHint: 'open source ai', isTrending: false },
    { name: 'Leonardo AI', url: 'https://leonardo.ai/', image: 'https://picsum.photos/seed/leonardo-ai/300/200', category: 'Image', dataAiHint: 'game assets', isTrending: true },
];

const imageToVideoTools: Tool[] = [
    { name: 'Pika Labs', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-labs/300/200', category: 'Video', dataAiHint: 'generative video', isTrending: true },
    { name: 'Runway Gen-2', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-gen2/300/200', category: 'Video', dataAiHint: 'ai magic tools', isTrending: true },
    { name: 'Kaiber AI', url: 'https://www.kaiber.ai/', image: 'https://picsum.photos/seed/kaiber-ai/300/200', category: 'Video', dataAiHint: 'visual storytelling', isTrending: true },
    { name: 'CapCut', url: 'https://www.capcut.com/', image: 'https://picsum.photos/seed/capcut-anim/300/200', category: 'Video', dataAiHint: 'image animation', isTrending: true },
    { name: 'Animaker AI', url: 'https://www.animaker.com/', image: 'https://picsum.photos/seed/animaker-ai/300/200', category: 'Video', dataAiHint: 'animation maker', isTrending: false },
];

const textToSpeechTools: Tool[] = [
    { name: 'ElevenLabs', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-tts/300/200', category: 'Audio', dataAiHint: 'ai voice', isTrending: true },
    { name: 'Voicemod', url: 'https://www.voicemod.net/', image: 'https://picsum.photos/seed/voicemod-tts/300/200', category: 'Audio', dataAiHint: 'voice changer', isTrending: true },
    { name: 'Google TTS', url: 'https://cloud.google.com/text-to-speech', image: 'https://picsum.photos/seed/google-tts/300/200', category: 'Audio', dataAiHint: 'cloud voice', isTrending: false },
    { name: 'Murf.ai', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murf-tts/300/200', category: 'Audio', dataAiHint: 'voiceover', isTrending: true },
    { name: 'TTSMaker', url: 'https://ttsmaker.com/', image: 'https://picsum.photos/seed/ttsmaker-tts/300/200', category: 'Audio', dataAiHint: 'free tts', isTrending: false },
];

const voiceCloningTools: Tool[] = [
    { name: 'ElevenLabs', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-vc/300/200', category: 'Audio', dataAiHint: 'voice cloning', isTrending: true },
    { name: 'Voicemod', url: 'https://www.voicemod.net/', image: 'https://picsum.photos/seed/voicemod-vc/300/200', category: 'Audio', dataAiHint: 'ai voice', isTrending: true },
    { name: 'Resemble AI', url: 'https://www.resemble.ai/', image: 'https://picsum.photos/seed/resemble-vc/300/200', category: 'Audio', dataAiHint: 'custom voice', isTrending: false },
    { name: 'Uberduck', url: 'https://uberduck.ai/', image: 'https://picsum.photos/seed/uberduck-vc/300/200', category: 'Audio', dataAiHint: 'text to rap', isTrending: false },
];

const ToolCard = React.memo(({ tool, onShare, t }: { tool: Tool, onShare: (e: React.MouseEvent, tool: Tool) => void, t: (key: string) => string }) => {
  const { savedTools, handleSaveToggle } = useSavedTools();
  const isSaved = savedTools.has(tool.name);

  const handleHeartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    handleSaveToggle(tool.name);
  }

  return (
    <Link href={tool.url} target="_blank" rel="noopener noreferrer" className="block w-40 shrink-0">
      <Card className="relative overflow-hidden group cursor-pointer bg-white/50 border-white/20 border-2 rounded-3xl h-full soft-shadow transition-transform hover:scale-105 duration-300">
        {tool.image && <Image src={tool.image} alt={tool.name} width={300} height={200} className="w-full aspect-[4/3] object-cover" data-ai-hint={tool.dataAiHint} />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        {tool.isTrending && (
          <Badge className="absolute top-2 left-2 bg-cute-purple/80 text-white backdrop-blur-sm text-xs rounded-full border-none shadow-lg">
            <TrendingUp className="w-3 h-3 mr-1"/>
            {t('tools.trendingBadge')}
          </Badge>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <div className="flex justify-between items-end">
            <h5 className="font-semibold text-white text-sm leading-tight">{tool.name}</h5>
            <div className="flex items-center gap-1 scale-90">
              <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm" onClick={(e) => onShare(e, tool)}>
                <Share2 className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm" onClick={handleHeartClick}>
                <Heart className={cn('w-4 h-4 transition-all', isSaved ? 'fill-red-500 text-red-500' : 'text-white')}/>
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
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-6">
            <section>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Video className="w-5 h-5 text-primary"/>
                        Text to Video
                    </h2>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                    {textToVideoTools.map((tool) => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={(e) => handleShareTool(e, tool)}
                            t={t}
                        />
                    ))}
                </div>
            </section>
            
            <section>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <ImageIcon className="w-5 h-5 text-primary"/>
                        Text to Image
                    </h2>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                    {textToImageTools.map((tool) => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={(e) => handleShareTool(e, tool)}
                            t={t}
                        />
                    ))}
                </div>
            </section>
            
            <section>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Film className="w-5 h-5 text-primary"/>
                        Image to video
                    </h2>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                    {imageToVideoTools.map((tool) => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={(e) => handleShareTool(e, tool)}
                            t={t}
                        />
                    ))}
                </div>
            </section>
            <section>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Mic className="w-5 h-5 text-primary"/>
                        Text to Speech
                    </h2>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                    {textToSpeechTools.map((tool) => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={(e) => handleShareTool(e, tool)}
                            t={t}
                        />
                    ))}
                </div>
            </section>
             <section>
                <div className="flex justify-between items-center mb-3">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Voicemail className="w-5 h-5 text-primary"/>
                        Voice Cloning
                    </h2>
                    <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                    {voiceCloningTools.map((tool) => (
                        <ToolCard
                            key={tool.name}
                            tool={tool}
                            onShare={(e) => handleShareTool(e, tool)}
                            t={t}
                        />
                    ))}
                </div>
            </section>
        </div>
      </main>
    </div>
  );
}

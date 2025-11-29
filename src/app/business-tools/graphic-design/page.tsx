'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Paintbrush, Star, Share2, Palette, Instagram, Youtube, Clapperboard, Megaphone } from 'lucide-react';
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

const instagramPostTools = [
    { name: 'Canva', description: 'Design anything for your Instagram feed.', url: 'https://www.canva.com/instagram-posts/', image: 'https://picsum.photos/seed/canva-ig/600/400', dataAiHint: 'social media design' },
    { name: 'Adobe Express', description: 'Free Instagram post maker.', url: 'https://www.adobe.com/express/create/post/instagram', image: 'https://picsum.photos/seed/adobe-ig/600/400', dataAiHint: 'creative posts' },
    { name: 'VistaCreate', description: 'Create stunning posts in minutes.', url: 'https://create.vista.com/themes/instagram-post/', image: 'https://picsum.photos/seed/vista-ig/600/400', dataAiHint: 'animated posts' },
    { name: 'Fotor', description: 'Make your Instagram posts pop.', url: 'https://www.fotor.com/features/instagram-post-maker.html', image: 'https://picsum.photos/seed/fotor-ig/600/400', dataAiHint: 'photo editor' },
    { name: 'Snappa', description: 'The best-looking Instagram posts.', url: 'https://snappa.com/create/instagram-posts', image: 'https://picsum.photos/seed/snappa-ig/600/400', dataAiHint: 'graphic creator' },
    { name: 'Piktochart', description: 'Easy-to-use Instagram post creator.', url: 'https://piktochart.com/formats/instagram-posts/', image: 'https://picsum.photos/seed/pikto-ig/600/400', dataAiHint: 'infographic posts' },
    { name: 'Simplified', description: 'AI-powered design for Instagram.', url: 'https://simplified.com/instagram-post-maker/', image: 'https://picsum.photos/seed/simplified-ig/600/400', dataAiHint: 'ai content' },
    { name: 'Kapwing', description: 'Create image and video posts.', url: 'https://www.kapwing.com/uses/instagram', image: 'https://picsum.photos/seed/kapwing-ig/600/400', dataAiHint: 'video posts' },
    { name: 'Visme', description: 'Engaging Instagram post templates.', url: 'https://www.visme.co/instagram-post-templates/', image: 'https://picsum.photos/seed/visme-ig/600/400', dataAiHint: 'brand templates' },
    { name: 'Later', description: 'Plan and design your Instagram posts.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-ig/600/400', dataAiHint: 'social scheduler' },
];

const youtubeThumbnailTools = [
    { name: 'Canva', description: 'Eye-catching YouTube thumbnail maker.', url: 'https://www.canva.com/youtube-thumbnails/', image: 'https://picsum.photos/seed/canva-yt/600/400', dataAiHint: 'thumbnail design' },
    { name: 'Fotor', description: 'Free YouTube thumbnail maker.', url: 'https://www.fotor.com/features/youtube-thumbnail-maker.html', image: 'https://picsum.photos/seed/fotor-yt/600/400', dataAiHint: 'youtube art' },
    { name: 'Snappa', description: 'Create professional-looking thumbnails.', url: 'https://snappa.com/create/youtube-thumbnails', image: 'https://picsum.photos/seed/snappa-yt/600/400', dataAiHint: 'channel graphics' },
    { name: 'Adobe Express', description: 'Stunning YouTube thumbnails in seconds.', url: 'https://www.adobe.com/express/create/thumbnail/youtube', image: 'https://picsum.photos/seed/adobe-yt/600/400', dataAiHint: 'creative thumbnails' },
    { name: 'Visme', description: 'Make custom thumbnails for your videos.', url: 'https://www.visme.co/youtube-thumbnail-maker/', image: 'https://picsum.photos/seed/visme-yt/600/400', dataAiHint: 'video branding' },
    { name: 'Picmaker', description: 'AI-powered YouTube thumbnail creator.', url: 'https://www.picmaker.com/youtube-thumbnail-maker', image: 'https://picsum.photos/seed/picmaker-yt/600/400', dataAiHint: 'ai thumbnail' },
    { name: 'Simplified', description: 'Free AI thumbnail maker.', url: 'https://simplified.com/youtube-thumbnail-maker/', image: 'https://picsum.photos/seed/simplified-yt/600/400', dataAiHint: 'design automation' },
    { name: 'VistaCreate', description: 'Design click-worthy thumbnails.', url: 'https://create.vista.com/create/youtube-thumbnail/', image: 'https://picsum.photos/seed/vista-yt/600/400', dataAiHint: 'template library' },
    { name: 'Pixlr', description: 'Online photo editor for thumbnails.', url: 'https://pixlr.com/youtube-thumbnail/', image: 'https://picsum.photos/seed/pixlr-yt/600/400', dataAiHint: 'photo editing' },
    { name: 'Placeit', description: 'Thumbnail templates for every niche.', url: 'https://placeit.net/youtube-thumbnail-maker', image: 'https://picsum.photos/seed/placeit-yt/600/400', dataAiHint: 'template mockups' },
];

const reelsCoverTools = [
    { name: 'Canva', description: 'Design amazing Reels covers.', url: 'https://www.canva.com/instagram-reels-covers/', image: 'https://picsum.photos/seed/canva-reels/600/400', dataAiHint: 'reels template' },
    { name: 'Adobe Express', description: 'Free Reels cover templates.', url: 'https://www.adobe.com/express/create/video/instagram-reels', image: 'https://picsum.photos/seed/adobe-reels/600/400', dataAiHint: 'video cover' },
    { name: 'InShot', description: 'Video editor with cover options.', url: 'https://inshot.com/', image: 'https://picsum.photos/seed/inshot-reels/600/400', dataAiHint: 'mobile video' },
    { name: 'Fotor', description: 'Create a custom cover for your Reel.', url: 'https://www.fotor.com/design', image: 'https://picsum.photos/seed/fotor-reels/600/400', dataAiHint: 'cover design' },
    { name: 'Kapwing', description: 'Online editor for Reels and covers.', url: 'https://www.kapwing.com/uses/instagram-reels-cover-image', image: 'https://picsum.photos/seed/kapwing-reels/600/400', dataAiHint: 'online editor' },
    { name: 'Visme', description: 'Design engaging covers for your content.', url: 'https://www.visme.co/', image: 'https://picsum.photos/seed/visme-reels/600/400', dataAiHint: 'brand content' },
    { name: 'Piktochart', description: 'Create branded Reels covers easily.', url: 'https://piktochart.com/', image: 'https://picsum.photos/seed/pikto-reels/600/400', dataAiHint: 'brand visuals' },
    { name: 'GoDaddy Studio', description: 'Formerly Over. Design on the go.', url: 'https://www.godaddy.com/studio', image: 'https://picsum.photos/seed/godaddy-reels/600/400', dataAiHint: 'mobile design' },
    { name: 'Veed.io', description: 'Add a custom cover to your video.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-reels/600/400', dataAiHint: 'video tools' },
    { name: 'Picsart', description: 'Edit photos and create covers.', url: 'https://picsart.com/', image: 'https://picsum.photos/seed/picsart-reels/600/400', dataAiHint: 'creative editing' },
];

const adsCreativeTools = [
    { name: 'AdCreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative/600/400', dataAiHint: 'ai advertising' },
    { name: 'Celtra', description: 'Creative automation for enterprise.', url: 'https://www.celtra.com/', image: 'https://picsum.photos/seed/celtra-ads/600/400', dataAiHint: 'automation platform' },
    { name: 'Creatopy', description: 'The efficient ad design platform.', url: 'https://www.creatopy.com/', image: 'https://picsum.photos/seed/creatopy-ads/600/400', dataAiHint: 'ad design' },
    { name: 'Marpipe', description: 'Test your ad creatives at scale.', url: 'https://www.marpipe.com/', image: 'https://picsum.photos/seed/marpipe-ads/600/400', dataAiHint: 'creative testing' },
    { name: 'Pencil', description: 'Generative AI for ads.', url: 'https://www.trypencil.com/', image: 'https://picsum.photos/seed/pencil-ads/600/400', dataAiHint: 'generative ai' },
    { name: 'Bannerflow', description: 'Creative management platform.', url: 'https://www.bannerflow.com/', image: 'https://picsum.photos/seed/bannerflow-ads/600/400', dataAiHint: 'ad production' },
    { name: 'Adacado', description: 'Dynamic creative optimization.', url: 'https://www.adacado.com/', image: 'https://picsum.photos/seed/adacado-ads/600/400', dataAiHint: 'dynamic ads' },
    { name: 'Vidsy', description: 'Creator-powered video ads.', url: 'https://vidsy.co/', image: 'https://picsum.photos/seed/vidsy-ads/600/400', dataAiHint: 'video ads' },
    { name: 'Shuttlerock', description: 'Mobile-first video ad creatives.', url: 'https://www.shuttlerock.com/', image: 'https://picsum.photos/seed/shuttlerock-ads/600/400', dataAiHint: 'mobile creative' },
    { name: 'Omneky', description: 'AI-powered personalized advertising.', url: 'https://www.omneky.com/', image: 'https://picsum.photos/seed/omneky-ads/600/400', dataAiHint: 'personalized ads' },
];

export default function GraphicDesignToolsPage() {
    const { toast } = useToast();
    const { favouritedTools, handleFavouriteToggle } = useFavourites();

    const handleFavouriteClick = (e: React.MouseEvent, toolName: string) => {
        e.preventDefault();
        e.stopPropagation();
        handleFavouriteToggle(toolName);
    };

    const handleShareTool = React.useCallback(async (e: React.MouseEvent, tool: {name: string, url: string}) => {
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

  const ToolCard = ({ tool }: { tool: { name: string, description: string, url: string, image: string, dataAiHint: string }}) => (
    <Link href={tool.url} target="_blank" rel="noopener noreferrer" className="block w-[280px] shrink-0 opacity-0 animate-fade-in-up">
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
  );

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
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-8">
            <section>
                <div className="flex justify-between items-center mb-3 px-2">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Palette className="w-5 h-5 text-primary"/>
                        Logo Design
                    </h2>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                    {logoDesignTools.map((tool, index) => (
                      <ToolCard tool={tool} key={tool.name + index}/>
                    ))}
                </div>
            </section>

            <section>
                <div className="flex justify-between items-center mb-3 px-2">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Instagram className="w-5 h-5 text-primary"/>
                        Instagram Posts
                    </h2>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                    {instagramPostTools.map((tool, index) => (
                      <ToolCard tool={tool} key={tool.name + index}/>
                    ))}
                </div>
            </section>

            <section>
                <div className="flex justify-between items-center mb-3 px-2">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Youtube className="w-5 h-5 text-primary"/>
                        YouTube Thumbnails
                    </h2>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                    {youtubeThumbnailTools.map((tool, index) => (
                      <ToolCard tool={tool} key={tool.name + index}/>
                    ))}
                </div>
            </section>

            <section>
                <div className="flex justify-between items-center mb-3 px-2">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Clapperboard className="w-5 h-5 text-primary"/>
                        Reels Covers
                    </h2>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                    {reelsCoverTools.map((tool, index) => (
                      <ToolCard tool={tool} key={tool.name + index}/>
                    ))}
                </div>
            </section>

            <section>
                <div className="flex justify-between items-center mb-3 px-2">
                    <h2 className="font-semibold text-xl flex items-center gap-2">
                        <Megaphone className="w-5 h-5 text-primary"/>
                        Ads Creatives
                    </h2>
                </div>
                <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                    {adsCreativeTools.map((tool, index) => (
                      <ToolCard tool={tool} key={tool.name + index}/>
                    ))}
                </div>
            </section>
        </div>
      </main>
    </div>
  );
}

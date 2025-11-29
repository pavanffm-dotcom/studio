'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Paintbrush, Star, Share2, Palette, Instagram, Youtube, Clapperboard, Megaphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useFavourites } from '@/context/favourites-context';

type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
};

type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

const toolData: ToolCategory[] = [
    {
        title: "Logo Design",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Looka', description: 'AI-powered platform to design a logo and build a brand you love.', url: 'https://looka.com/', image: 'https://picsum.photos/seed/looka/600/400', dataAiHint: 'ai logo' },
          { name: 'Logo.com', description: 'Generate a professional logo with AI, in minutes.', url: 'https://logo.com/', image: 'https://picsum.photos/seed/logocom/600/400', dataAiHint: 'professional logo' },
          { name: 'Designs.ai', description: 'An all-in-one platform to create logos, videos, and more with AI.', url: 'https://designs.ai/', image: 'https://picsum.photos/seed/designsai/600/400', dataAiHint: 'design suite' },
          { name: 'Tailor Brands', description: 'The world’s most advanced automated logo maker and design tool.', url: 'https://www.tailorbrands.com/logo-maker', image: 'https://picsum.photos/seed/tailorbrands/600/400', dataAiHint: 'brand maker' },
          { name: 'Canva Logo Maker', description: 'Create a professional logo for free in just a few clicks.', url: 'https://www.canva.com/create/logos/', image: 'https://picsum.photos/seed/canva-logo/600/400', dataAiHint: 'free logo' },
          { name: 'Fotor Logo Maker', description: 'Make a stunning logo with Fotor’s free AI logo generator.', url: 'https://www.fotor.com/features/logo-maker.html', image: 'https://picsum.photos/seed/fotor-logo/600/400', dataAiHint: 'logo generator' },
          { name: 'Hatchful', description: 'A free logo maker from Shopify. No design experience required.', url: 'https://hatchful.shopify.com/', image: 'https://picsum.photos/seed/hatchful/600/400', dataAiHint: 'shopify logo' },
          { name: 'Uizard', description: 'AI-powered design tool for creating stunning logos and mockups.', url: 'https://uizard.io/ai-logo-generator/', image: 'https://picsum.photos/seed/uizard-logo/600/400', dataAiHint: 'ui design' },
          { name: 'Brandmark.io', description: 'Create a unique, professional logo for your business.', url: 'https://brandmark.io/', image: 'https://picsum.photos/seed/brandmark/600/400', dataAiHint: 'business logo' },
          { name: 'LogoAI', description: 'Let AI-powered design create your new logo, and brand identity.', url: 'https://www.logoai.com/', image: 'https://picsum.photos/seed/logoai/600/400', dataAiHint: 'intelligent logo' },
        ]
    },
    {
        title: "Instagram Posts",
        icon: <Instagram className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Design anything for your Instagram feed.', url: 'https://www.canva.com/instagram-posts/', image: 'https://picsum.photos/seed/canva-ig/600/400', dataAiHint: 'social media design' },
            { name: 'Adobe Express', description: 'Free Instagram post maker with thousands of templates.', url: 'https://www.adobe.com/express/create/post/instagram', image: 'https://picsum.photos/seed/adobe-ig/600/400', dataAiHint: 'creative posts' },
            { name: 'Fotor', description: 'Make your Instagram posts pop with AI editing tools.', url: 'https://www.fotor.com/features/instagram-post-maker.html', image: 'https://picsum.photos/seed/fotor-ig/600/400', dataAiHint: 'photo editor' },
            { name: 'VistaCreate', description: 'Create stunning, animated posts in minutes.', url: 'https://create.vista.com/themes/instagram-post/', image: 'https://picsum.photos/seed/vista-ig/600/400', dataAiHint: 'animated posts' },
            { name: 'Simplified', description: 'AI-powered design for all your social media content.', url: 'https://simplified.com/instagram-post-maker/', image: 'https://picsum.photos/seed/simplified-ig/600/400', dataAiHint: 'ai content' },
            { name: 'Piktochart', description: 'Easy-to-use creator for infographics and social posts.', url: 'https://piktochart.com/formats/instagram-posts/', image: 'https://picsum.photos/seed/pikto-ig/600/400', dataAiHint: 'infographic posts' },
            { name: 'Snappa', description: 'Create the best-looking Instagram posts in a snap.', url: 'https://snappa.com/create/instagram-posts', image: 'https://picsum.photos/seed/snappa-ig/600/400', dataAiHint: 'graphic creator' },
            { name: 'Later', description: 'Plan, schedule, and design your Instagram posts in one place.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-ig/600/400', dataAiHint: 'social scheduler' },
            { name: 'Buffer', description: 'Plan and schedule your content for Instagram.', url: 'https://buffer.com/instagram', image: 'https://picsum.photos/seed/buffer-ig/600/400', dataAiHint: 'scheduling tool' },
            { name: 'Kapwing', description: 'Create image and video posts for your feed.', url: 'https://www.kapwing.com/uses/instagram', image: 'https://picsum.photos/seed/kapwing-ig/600/400', dataAiHint: 'video posts' },
        ]
    },
    {
        title: "YouTube Thumbnails",
        icon: <Youtube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Eye-catching YouTube thumbnail maker.', url: 'https://www.canva.com/youtube-thumbnails/', image: 'https://picsum.photos/seed/canva-yt/600/400', dataAiHint: 'thumbnail design' },
            { name: 'Fotor', description: 'Free YouTube thumbnail maker with AI.', url: 'https://www.fotor.com/features/youtube-thumbnail-maker.html', image: 'https://picsum.photos/seed/fotor-yt/600/400', dataAiHint: 'youtube art' },
            { name: 'Adobe Express', description: 'Stunning YouTube thumbnails in seconds.', url: 'https://www.adobe.com/express/create/thumbnail/youtube', image: 'https://picsum.photos/seed/adobe-yt/600/400', dataAiHint: 'creative thumbnails' },
            { name: 'Snappa', description: 'Create professional-looking thumbnails in a snap.', url: 'https://snappa.com/create/youtube-thumbnails', image: 'https://picsum.photos/seed/snappa-yt/600/400', dataAiHint: 'channel graphics' },
            { name: 'Picmaker', description: 'AI-powered YouTube thumbnail creator.', url: 'https://www.picmaker.com/youtube-thumbnail-maker', image: 'https://picsum.photos/seed/picmaker-yt/600/400', dataAiHint: 'ai thumbnail' },
            { name: 'Simplified', description: 'Free AI thumbnail maker to boost your CTR.', url: 'https://simplified.com/youtube-thumbnail-maker/', image: 'https://picsum.photos/seed/simplified-yt/600/400', dataAiHint: 'design automation' },
            { name: 'Visme', description: 'Make custom thumbnails for your videos.', url: 'https://www.visme.co/youtube-thumbnail-maker/', image: 'https://picsum.photos/seed/visme-yt/600/400', dataAiHint: 'video branding' },
            { name: 'Pixlr', description: 'Powerful online photo editor for thumbnails.', url: 'https://pixlr.com/youtube-thumbnail/', image: 'https://picsum.photos/seed/pixlr-yt/600/400', dataAiHint: 'photo editing' },
            { name: 'Placeit', description: 'Thumbnail templates for every niche.', url: 'https://placeit.net/youtube-thumbnail-maker', image: 'https://picsum.photos/seed/placeit-yt/600/400', dataAiHint: 'template mockups' },
            { name: 'VistaCreate', description: 'Design click-worthy thumbnails with templates.', url: 'https://create.vista.com/create/youtube-thumbnail/', image: 'https://picsum.photos/seed/vista-yt/600/400', dataAiHint: 'template library' },
        ]
    },
    {
        title: "Reels Covers",
        icon: <Clapperboard className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Design amazing Reels covers in minutes.', url: 'https://www.canva.com/instagram-reels-covers/', image: 'https://picsum.photos/seed/canva-reels/600/400', dataAiHint: 'reels template' },
            { name: 'Adobe Express', description: 'Free Reels cover templates for your videos.', url: 'https://www.adobe.com/express/create/video/instagram-reels', image: 'https://picsum.photos/seed/adobe-reels/600/400', dataAiHint: 'video cover' },
            { name: 'InShot', description: 'Popular mobile video editor with cover options.', url: 'https://inshot.com/', image: 'https://picsum.photos/seed/inshot-reels/600/400', dataAiHint: 'mobile video' },
            { name: 'Fotor', description: 'Create a custom cover for your Reel.', url: 'https://www.fotor.com/design', image: 'https://picsum.photos/seed/fotor-reels/600/400', dataAiHint: 'cover design' },
            { name: 'Kapwing', description: 'Online editor for creating Reels and covers.', url: 'https://www.kapwing.com/uses/instagram-reels-cover-image', image: 'https://picsum.photos/seed/kapwing-reels/600/400', dataAiHint: 'online editor' },
            { name: 'Veed.io', description: 'Add a custom, animated cover to your video.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-reels/600/400', dataAiHint: 'video tools' },
            { name: 'GoDaddy Studio', description: 'Formerly Over. A powerful mobile design app.', url: 'https://www.godaddy.com/studio', image: 'https://picsum.photos/seed/godaddy-reels/600/400', dataAiHint: 'mobile design' },
            { name: 'Picsart', description: 'All-in-one editor for photos, videos, and covers.', url: 'https://picsart.com/', image: 'https://picsum.photos/seed/picsart-reels/600/400', dataAiHint: 'creative editing' },
            { name: 'Mojo', description: 'Create stunning, animated stories and reel covers.', url: 'https://www.mojo-app.com/', image: 'https://picsum.photos/seed/mojo-reels/600/400', dataAiHint: 'animated social' },
            { name: 'Unfold', description: 'A toolkit for storytellers to create beautiful content.', url: 'https://unfold.com/', image: 'https://picsum.photos/seed/unfold-reels/600/400', dataAiHint: 'story templates' },
        ]
    },
    {
        title: "Ads Creatives",
        icon: <Megaphone className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AdCreative.ai', description: 'Generate conversion-focused ad creatives with AI.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative/600/400', dataAiHint: 'ai advertising' },
            { name: 'Creatopy', description: 'The efficient ad design platform for teams and agencies.', url: 'https://www.creatopy.com/', image: 'https://picsum.photos/seed/creatopy-ads/600/400', dataAiHint: 'ad design' },
            { name: 'Pencil', description: 'Generative AI for ads that learn and get better.', url: 'https://www.trypencil.com/', image: 'https://picsum.photos/seed/pencil-ads/600/400', dataAiHint: 'generative ai' },
            { name: 'Celtra', description: 'Creative automation for scaling ad production.', url: 'https://www.celtra.com/', image: 'https://picsum.photos/seed/celtra-ads/600/400', dataAiHint: 'automation platform' },
            { name: 'Bannerflow', description: 'A leading creative management platform (CMP).', url: 'https://www.bannerflow.com/', image: 'https://picsum.photos/seed/bannerflow-ads/600/400', dataAiHint: 'ad production' },
            { name: 'Omneky', description: 'AI-powered personalized advertising at scale.', url: 'https://www.omneky.com/', image: 'https://picsum.photos/seed/omneky-ads/600/400', dataAiHint: 'personalized ads' },
            { name: 'Vidsy', description: 'Creator-powered video ads for brands.', url: 'https://vidsy.co/', image: 'https://picsum.photos/seed/vidsy-ads/600/400', dataAiHint: 'video ads' },
            { name: 'Shuttlerock', description: 'Mobile-first video ad creatives made easy.', url: 'https://www.shuttlerock.com/', image: 'https://picsum.photos/seed/shuttlerock-ads/600/400', dataAiHint: 'mobile creative' },
            { name: 'Bannersnack', description: 'Now part of Creatopy, an online banner maker.', url: 'https://www.creatopy.com/online-banner-maker/', image: 'https://picsum.photos/seed/bannersnack-ads/600/400', dataAiHint: 'banner maker' },
            { name: 'Marpipe', description: 'Test your ad creatives at scale to find what works.', url: 'https://www.marpipe.com/', image: 'https://picsum.photos/seed/marpipe-ads/600/400', dataAiHint: 'creative testing' },
        ]
    }
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

  const ToolCard = ({ tool }: { tool: Tool }) => (
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
            {toolData.map((category, index) => (
              <section key={index}>
                  <div className="flex justify-between items-center mb-3 px-2">
                      <h2 className="font-semibold text-xl flex items-center gap-2">
                          {category.icon}
                          {category.title}
                      </h2>
                  </div>
                  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                      {category.tools.map((tool, toolIndex) => (
                        <ToolCard tool={tool} key={`${category.title}-${tool.name}-${toolIndex}`}/>
                      ))}
                  </div>
              </section>
            ))}
        </div>
      </main>
    </div>
  );
}

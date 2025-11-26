'use client';

import React from 'react';
import Image from 'next/image';
import {
  Clapperboard,
  Heart,
  ImageIcon,
  Mic,
  Bot,
  Wand2,
  Search,
  LayoutGrid,
  Video,
  Type,
  Star,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { GalaxyLogo } from '@/components/galaxy-logo';
import { BottomNav } from '@/components/bottom-nav';
import { Badge } from '@/components/ui/badge';

const popularTools = [
  { name: 'AI Image Generator', icon: <ImageIcon className="w-6 h-6" /> },
  { name: 'AI Video Generator', icon: <Clapperboard className="w-6 h-6" /> },
  { name: 'AI Music Generator', icon: <Mic className="w-6 h-6" /> },
  { name: 'AI Voice Cloner', icon: <Image src="https://picsum.photos/seed/voice-clone/48/48" alt="AI Voice Cloner" width={24} height={24} className="rounded-md" data-ai-hint="voice wave" /> },
  { name: 'AI Icon Generator', icon: <Bot className="w-6 h-6" /> },
];

const libraries = [
  { name: 'Image Library', color: 'bg-indigo-500/30', icon: <ImageIcon/> },
  { name: 'Video Library', color: 'bg-red-500/30', icon: <Clapperboard/> },
  { name: 'Audio Library', color: 'bg-cyan-500/30', icon: <Mic/> },
];

const allTools = [
    { name: 'AI Video Generator', image: 'https://picsum.photos/seed/teddy-bear/300/200', isFavourite: true, isTrending: true, category: 'Video', dataAiHint: 'teddy bear guitar' },
    { name: 'AI Image Generator', image: 'https://picsum.photos/seed/eye/300/200', isFavourite: true, isTrending: true, category: 'Image', dataAiHint: 'eye glitter' },
    { name: 'Text to Speech', image: 'https://picsum.photos/seed/tts/300/200', isFavourite: false, isTrending: true, category: 'Text', dataAiHint: 'woman headphones' },
    { name: 'AI Voice Changer', image: 'https://picsum.photos/seed/voice-changer/300/200', isFavourite: false, isTrending: true, category: 'Audio', dataAiHint: 'sound wave' },
    { name: 'AI Voice Cloner', image: 'https://picsum.photos/seed/voice-cloner/300/200', isFavourite: false, isTrending: true, category: 'Audio', dataAiHint: 'woman voice wave' },
    { name: 'AI Clothes Changer', image: 'https://picsum.photos/seed/clothes-changer/300/200', isFavourite: false, isTrending: true, category: 'Image', dataAiHint: 'man changing clothes' },
]

const imageToVideoTools = [
  { name: 'Runway', image: 'https://picsum.photos/seed/runway/300/200', isFavourite: true, isTrending: true, category: 'Image', dataAiHint: 'abstract animation' },
  { name: 'Pika', image: 'https://picsum.photos/seed/pika/300/200', isFavourite: true, isTrending: true, category: 'Image', dataAiHint: 'cinematic video' },
  { name: 'Kaiber', image: 'https://picsum.photos/seed/kaiber/300/200', isFavourite: false, isTrending: true, category: 'Image', dataAiHint: 'artistic motion' },
  { name: 'D-ID', image: 'https://picsum.photos/seed/d-id/300/200', isFavourite: false, isTrending: true, category: 'Image', dataAiHint: 'talking avatar' },
  { name: 'HeyGen', image: 'https://picsum.photos/seed/heygen/300/200', isFavourite: false, isTrending: true, category: 'Image', dataAiHint: 'ai presenter' },
  { name: 'Synthesia', image: 'https://picsum.photos/seed/synthesia/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'ai video' },
  { name: 'Lumen5', image: 'https://picsum.photos/seed/lumen5/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video creation' },
  { name: 'InVideo', image: 'https://picsum.photos/seed/invideo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'online editor' },
  { name: 'Pictory', image: 'https://picsum.photos/seed/pictory/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video marketing' },
  { name: 'Designs.ai', image: 'https://picsum.photos/seed/designsai/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'creative suite' },
  { name: 'Veed.io', image: 'https://picsum.photos/seed/veedio/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video editing' },
  { name: 'Wave.video', image: 'https://picsum.photos/seed/wavevideo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video hosting' },
  { name: 'Animoto', image: 'https://picsum.photos/seed/animoto/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'slideshow video' },
  { name: 'Magisto', image: 'https://picsum.photos/seed/magisto/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'smart editor' },
  { name: 'FlexClip', image: 'https://picsum.photos/seed/flexclip/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'easy video' },
  { name: 'Clipchamp', image: 'https://picsum.photos/seed/clipchamp/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'microsoft video' },
  { name: 'Moovly', image: 'https://picsum.photos/seed/moovly/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'animation tool' },
  { name: 'Powtoon', image: 'https://picsum.photos/seed/powtoon/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'presentation video' },
  { name: 'Biteable', image: 'https://picsum.photos/seed/biteable/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'short video' },
  { name: 'Renderforest', image: 'https://picsum.photos/seed/renderforest/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'branding videos' },
  { name: 'Kapwing', image: 'https://picsum.photos/seed/kapwing/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'collaborative video' },
  { name: 'Genmo', image: 'https://picsum.photos/seed/genmo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'generative video' },
  { name: 'Moonvalley', image: 'https://picsum.photos/seed/moonvalley/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'ai film' },
  { name: 'InstaVid', image: 'https://picsum.photos/seed/instavid/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'social video' },
  { name: 'Storykit', image: 'https://picsum.photos/seed/storykit/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video storytelling' },
  { name: 'Wibbitz', image: 'https://picsum.photos/seed/wibbitz/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'automated video' },
  { name: 'GliaCloud', image: 'https://picsum.photos/seed/gliacloud/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'news video' },
  { name: 'Typito', image: 'https://picsum.photos/seed/typito/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'text video' },
  { name: 'Offeo', image: 'https://picsum.photos/seed/offeo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'ad maker' },
  { name: 'Rocketium', image: 'https://picsum.photos/seed/rocketium/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'business video' },
  { name: 'Shakr', image: 'https://picsum.photos/seed/shakr/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'facebook ads' },
  { name: 'Raw Shorts', image: 'https://picsum.photos/seed/rawshorts/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'animated video' },
  { name: 'Animaker', image: 'https://picsum.photos/seed/animaker/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'diy video' },
  { name: 'Vyond', image: 'https://picsum.photos/seed/vyond/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'professional animation' },
  { name: 'Wideo', image: 'https://picsum.photos/seed/wideo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'marketing animation' },
  { name: 'Easil', image: 'https://picsum.photos/seed/easil/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'visual content' },
  { name: 'PosterMyWall', image: 'https://picsum.photos/seed/postermywall/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'promo graphics' },
  { name: 'Flixpress', image: 'https://picsum.photos/seed/flixpress/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'intro maker' },
  { name: 'Kizoa', image: 'https://picsum.photos/seed/kizoa/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'movie maker' },
  { name: 'WeVideo', image: 'https://picsum.photos/seed/wevideo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'cloud editor' },
  { name: 'Stupeflix', image: 'https://picsum.photos/seed/stupeflix/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'fast video' },
  { name: 'Slidely', image: 'https://picsum.photos/seed/slidely/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'visual media' },
  { name: 'PhotoSnack', image: 'https://picsum.photos/seed/photosnack/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'photo slideshow' },
  { name: 'Promo.com', image: 'https://picsum.photos/seed/promo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video ads' },
  { name: 'Vidnami', image: 'https://picsum.photos/seed/vidnami/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'ai content' },
  { name: 'Crello', image: 'https://picsum.photos/seed/crello/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'vista create' },
  { name: 'MotionDen', image: 'https://picsum.photos/seed/motionden/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video templates' },
  { name: 'Camtasia', image: 'https://picsum.photos/seed/camtasia/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'screen recorder' },
  { name: 'Filmora', image: 'https://picsum.photos/seed/filmora/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'wondershare editor' },
  { name: 'Adobe Premiere Rush', image: 'https://picsum.photos/seed/premiererush/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'adobe video' },
];


const toolCategories = [
    { name: 'All', icon: <LayoutGrid />, color: 'bg-primary text-primary-foreground' },
    { name: 'Image', icon: <ImageIcon />, color: 'bg-green-500/20 text-green-400' },
    { name: 'Video', icon: <Video />, color: 'bg-red-500/20 text-red-400' },
    { name: 'Text', icon: <Type />, color: 'bg-blue-500/20 text-blue-400' },
];


export default function GalaxyApp() {
  const [activeTab, setActiveTab] = React.useState('tools');
  const [activeCategory, setActiveCategory] = React.useState('All');

  const getFilteredTools = () => {
    switch (activeCategory) {
        case 'All':
            return allTools;
        case 'Image':
            return imageToVideoTools;
        default:
            return allTools.filter(tool => tool.category === activeCategory);
    }
  };

  const filteredTools = getFilteredTools();

  return (
    <div className="bg-background h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image 
                src="https://picsum.photos/seed/space/1080/1920"
                alt="Galaxy background"
                fill
                className="object-cover"
                data-ai-hint="galaxy space"
            />
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        </div>
      <div className="relative z-10 text-center text-white pt-12 pb-4 px-4 w-full max-w-sm shrink-0">
        <h1 className="text-3xl font-bold tracking-tight">
          AI Tools for Text, Image, Video & More
        </h1>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card rounded-t-3xl shadow-2xl flex flex-col min-h-0">
        <div className="flex-shrink-0 px-4 pt-4">
          <header className="flex justify-between items-center py-2">
            <div className="flex items-center gap-2">
              <GalaxyLogo className="w-7 h-7" />
              <span className="text-xl font-bold">Galaxy.ai</span>
            </div>
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
          </header>
          <nav className="mt-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-transparent p-0">
                <TabsTrigger value="home" className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-3">Home</TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-3">Tools</TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-3">Settings</TabsTrigger>
              </TabsList>
            </Tabs>
          </nav>
        </div>
        
        <Tabs value={activeTab} className="flex-grow flex flex-col overflow-hidden">
            <TabsContent value="home" className="flex-grow overflow-y-auto px-4 pb-4 no-scrollbar mt-0">
                <div className="bg-primary text-primary-foreground p-4 rounded-2xl my-4 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-10 w-32 h-32 opacity-80">
                        <Image src="https://picsum.photos/seed/ai-person/200/200" alt="AI illustration" width={128} height={128} className="object-contain" data-ai-hint="AI illustration person"/>
                    </div>
                    <h3 className="font-bold text-lg">Welcome To Galaxy.ai</h3>
                    <p className="text-sm opacity-90 mt-1 max-w-[60%]">Discover 2113 powerful AI tools to enhance your productivity</p>
                    <Button variant="secondary" className="mt-4 bg-white text-primary hover:bg-white/90">Explore Tools</Button>
                </div>

                <section>
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Popular Tools</h4>
                        <Button variant="link" className="text-primary p-0 h-auto">See all</Button>
                    </div>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                        {popularTools.map(tool => (
                            <div key={tool.name} className="flex flex-col items-center shrink-0 w-20">
                                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                                    {tool.icon}
                                </div>
                                <p className="text-xs text-center mt-2 text-muted-foreground">{tool.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="mt-4">
                    <h4 className="font-semibold mb-2">Libraries</h4>
                     <div className="grid grid-cols-3 gap-3">
                        {libraries.map(lib => (
                            <div key={lib.name} className={`p-3 rounded-xl flex flex-col justify-between aspect-square ${lib.color}`}>
                                <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-white">
                                    {lib.icon}
                                </div>
                                <p className="text-white font-semibold text-sm mt-4">{lib.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="mt-4">
                    <Tabs defaultValue="recent" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-secondary">
                            <TabsTrigger value="recent">Recent</TabsTrigger>
                            <TabsTrigger value="favourites">Favourites</TabsTrigger>
                        </TabsList>
                        <TabsContent value="recent" className="mt-4">
                             <Card className="p-3 flex items-center gap-3 bg-secondary">
                                <Image src="https://picsum.photos/seed/ai-face/80/80" alt="AI Image" width={56} height={56} className="rounded-lg" data-ai-hint="AI face"/>
                                <div className="flex-grow">
                                    <h5 className="font-semibold">AI Image Generator</h5>
                                    <p className="text-xs text-muted-foreground">Produce stunning AI-generated images and artwork to visualize your ideas.</p>
                                </div>
                                <Button variant="ghost" size="icon" className="text-muted-foreground">
                                    &gt;
                                </Button>
                             </Card>
                        </TabsContent>
                        <TabsContent value="favourites" className="mt-4">
                            <div className="text-center py-8 text-muted-foreground">
                                <Heart className="mx-auto" />
                                <p className="mt-2 text-sm">No Favourites yet.</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>
            </TabsContent>

            <TabsContent value="tools" className="flex-grow overflow-hidden flex flex-col mt-0">
                <div className="px-4 pt-2 pb-2">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {toolCategories.map(cat => (
                           <Button 
                                key={cat.name} 
                                variant={activeCategory === cat.name ? 'default' : 'secondary'}
                                className={`flex items-center gap-2 rounded-full h-9 ${activeCategory !== cat.name ? cat.color : ''}`}
                                onClick={() => setActiveCategory(cat.name)}
                            >
                                {cat.icon}
                                <span>{cat.name}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto px-4 no-scrollbar">
                    <div className="grid grid-cols-2 gap-4">
                        {filteredTools.map(tool => (
                             <Card key={tool.name} className="relative overflow-hidden group cursor-pointer bg-secondary border-none">
                                <Image src={tool.image} alt={tool.name} width={300} height={200} className="w-full aspect-square object-cover" data-ai-hint={tool.dataAiHint} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                {tool.isTrending && (
                                     <Badge className="absolute top-2 left-2 bg-primary/80 text-primary-foreground backdrop-blur-sm text-xs">
                                        <TrendingUp className="w-3 h-3 mr-1"/>
                                        Trending
                                    </Badge>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 p-2">
                                    <div className="flex justify-between items-end">
                                        <h5 className="font-semibold text-white text-sm">{tool.name}</h5>
                                        <Button variant="ghost" size="icon" className="w-6 h-6 text-white hover:text-yellow-400">
                                            <Star className={`w-4 h-4 ${tool.isFavourite ? 'fill-yellow-400 text-yellow-400' : 'text-white'}`}/>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </TabsContent>
            
            <TabsContent value="settings" className="flex-grow overflow-y-auto px-4 pb-4 no-scrollbar mt-0">
                <div className="text-center py-16 text-muted-foreground">
                    <p>Settings will be here.</p>
                </div>
            </TabsContent>
        </Tabs>

        <BottomNav />
      </main>
    </div>
  );
}

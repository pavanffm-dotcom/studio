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

const toolCategories = [
    { name: 'All', icon: <LayoutGrid />, color: 'bg-primary text-primary-foreground' },
    { name: 'Image', icon: <ImageIcon />, color: 'bg-green-500/20 text-green-400' },
    { name: 'Video', icon: <Video />, color: 'bg-red-500/20 text-red-400' },
    { name: 'Text', icon: <Type />, color: 'bg-blue-500/20 text-blue-400' },
];


export default function GalaxyApp() {
  const [activeTab, setActiveTab] = React.useState('tools');
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredTools = activeCategory === 'All' ? allTools : allTools.filter(tool => tool.category === activeCategory);

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

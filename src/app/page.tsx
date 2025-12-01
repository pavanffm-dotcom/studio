'use client';

import React, { useCallback, useMemo } from 'react';
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
  Sparkles,
  ChevronRight,
  History,
  Voicemail,
  Text,
  UserSquare,
  Share2,
  BookOpen,
  BrainCircuit,
  Presentation,
  Feather,
  GraduationCap,
  Scissors,
  Youtube,
  Paintbrush,
  ExternalLink,
  X,
  MessageSquare,
  ImageDown,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GalaxyLogo } from '@/components/galaxy-logo';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { SettingsPage } from '@/components/settings-page';
import { cn } from '@/lib/utils';
import { AuthGate } from '@/components/auth-gate';
import { chat, ChatOutput } from '@/ai/flows/chat';
import { Skeleton } from '@/components/ui/skeleton';
import { suggestAiTool, SuggestAiToolOutput } from '@/ai/flows/suggest-ai-tool';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/language';
import { useFavourites } from '@/context/favourites-context';
import { Input } from '@/components/ui/input';
import { 
    Tool,
    popularTools,
    libraries,
    quickToolCategories,
    imageToVideoTools,
    textToVideoTools,
    textToSpeechTools,
    voiceCloningTools,
    aiAvatarTools,
    textToImageTools,
    toolCategories,
    allTools,
} from '@/lib/tools-data';
import { ToolIcon } from '@/lib/tool-icons';


type ChatMessage = {
  id: number;
  role: 'user' | 'assistant' | 'assistant-loading' | 'tool-suggestion';
  content: string | SuggestAiToolOutput;
};

const getFilteredTools = (activeCategory: string): Tool[] => {
    switch (activeCategory) {
        case 'All':
            return allTools;
        case 'Img2vid':
            return imageToVideoTools;
        case 'Txt2vid':
            return textToVideoTools;
        case 'Text to Speech':
            return textToSpeechTools;
        case 'Text to Image':
            return textToImageTools;
        case 'Voice Cloning':
            return voiceCloningTools;
        case 'AI Avatar':
            return aiAvatarTools;
        default:
            return allTools.filter(tool => tool.category === activeCategory);
    }
};

const ChatInputComponent = ({ chatInput, setChatInput, handleSendMessage, isGenerating }: { chatInput: string, setChatInput: (value: string) => void, handleSendMessage: (message: string) => void, isGenerating: boolean }) => {
    const handleSend = () => {
        if (!isGenerating) {
            handleSendMessage(chatInput);
        }
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && !isGenerating) {
            handleSend();
        }
    };

    return (
        <div className="my-4">
            <label className="block text-center text-muted-foreground text-sm mb-2">Ask what AI you want</label>
            <div className="relative">
                <Input
                    placeholder="e.g. 'AI to clone my voice for free?'"
                    className="bg-background rounded-full h-14 text-base pl-5 pr-14 border-2 border-primary/20 shadow-lg"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={isGenerating}
                />
                <Button
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-primary text-primary-foreground glow-shadow"
                    onClick={handleSend}
                    disabled={isGenerating}
                >
                    <Send className="w-5 h-5"/>
                </Button>
            </div>
        </div>
    );
};

const ToolCard = React.memo(({ tool, isFavourited, onFavouriteToggle, onShare, onClick, t }: { tool: Tool, isFavourited: boolean, onFavouriteToggle: (toolName: string) => void, onShare: (e: React.MouseEvent, tool: Tool) => void, onClick: (tool: Tool) => void, t: (key: string) => string }) => {
    const handleFavouriteClick = useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      onFavouriteToggle(tool.name);
    }, [tool.name, onFavouriteToggle]);
  
    const handleCardClick = useCallback((e: React.MouseEvent) => {
        e.preventDefault();
        onClick(tool);
        window.open(tool.url, '_blank', 'noopener,noreferrer');
    }, [tool, onClick]);
  
    return (
      <a href={tool.url} target="_blank" rel="noopener noreferrer" onClick={handleCardClick}>
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
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm" onClick={(e) => onShare(e, tool)}>
                  <Share2 />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm" onClick={handleFavouriteClick}>
                  <Star className={cn('w-5 h-5 transition-all', isFavourited ? 'fill-yellow-300 text-yellow-300' : 'text-white')}/>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </a>
    );
});
ToolCard.displayName = 'ToolCard';


function App() {
  const { t } = useLanguage();
  const { favouritedTools, handleFavouriteToggle } = useFavourites();
  const [activeTab, setActiveTab] = React.useState('home');
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [recentTools, setRecentTools] = React.useState<Tool[]>([]);
  const [toolClicks, setToolClicks] = React.useState<Record<string, number>>({});
  const [chatMessages, setChatMessages] = React.useState<ChatMessage[]>([]);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [showChat, setShowChat] = React.useState(false);
  const [chatInput, setChatInput] = React.useState('');
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const handleShareTool = useCallback(async (e: React.MouseEvent, tool: Tool) => {
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

  const handleToolClick = useCallback((tool: Tool) => {
    setRecentTools(prev => {
      const newRecents = [tool, ...prev.filter(t => t.name !== tool.name)];
      return newRecents.slice(0, 5); 
    });

    setToolClicks(prev => ({
      ...prev,
      [tool.name]: (prev[tool.name] || 0) + 1,
    }));
  }, []);

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = useCallback(async (message: string) => {
    if (!message.trim()) return;
    if (!showChat) setShowChat(true);

    const newUserMessage: ChatMessage = {
      id: Date.now(),
      role: 'user',
      content: message,
    };
  
    setChatMessages((prev) => [
      ...prev,
      newUserMessage,
      { id: Date.now() + 1, role: 'assistant-loading', content: 'Thinking...' },
    ]);
  
    setIsGenerating(true);
    setChatInput('');
  
    let finalAnswer: ChatMessage | null = null;
  
    try {
      const toolSuggestion = await suggestAiTool({ query: message });
      if (toolSuggestion && toolSuggestion.suggestions && toolSuggestion.suggestions.length > 0) {
        finalAnswer = {
          id: Date.now() + 2,
          role: 'tool-suggestion',
          content: toolSuggestion,
        };
      } else {
        throw new Error('No tool suggestion found, fallback to chat.');
      }
    } catch (toolError) {
      console.log(
        'Tool suggestion failed or was not specific enough, falling back to regular chat:',
        toolError
      );
      try {
        const result = await chat({ message });
        finalAnswer = {
          id: Date.now() + 2,
          role: 'assistant',
          content: result.response,
        };
      } catch (chatError) {
        console.error('Error in chat flow:', chatError);
        finalAnswer = {
          id: Date.now() + 2,
          role: 'assistant',
          content: 'Sorry, I had some trouble. Please try again.',
        };
      }
    } finally {
      if (finalAnswer) {
        setChatMessages((prev) => {
          const newMessages = prev.filter((m) => m.role !== 'assistant-loading');
          return [...newMessages, finalAnswer!];
        });
      }
      setIsGenerating(false);
    }
  }, [showChat]);

  const filteredTools = useMemo(() => getFilteredTools(activeCategory), [activeCategory]);
  const favouriteToolsList = useMemo(() => allTools.filter(tool => favouritedTools.has(tool.name)), [favouritedTools]);
  
  const trendingTools: Tool[] = [];

  const handleCloseChat = () => {
    setShowChat(false);
    setChatMessages([]);
  }

  const renderChatInterface = () => (
    <div className="space-y-4">
    {chatMessages.map((msg) => {
      if (msg.role === 'user') {
        return (
          <div key={msg.id} className="flex justify-end">
            <div className="bg-primary text-primary-foreground p-3 rounded-3xl rounded-br-none max-w-xs break-words">
              {msg.content as string}
            </div>
          </div>
        );
      }
      if (msg.role === 'assistant') {
        return (
          <div key={msg.id} className="flex justify-start">
             <Card className="p-4 rounded-3xl rounded-bl-none bg-white/80 max-w-xs break-words soft-shadow">
              <CardContent className="p-0">
                 <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary soft-shadow flex-shrink-0 mt-1">
                      <Sparkles className="w-6 h-6"/>
                  </div>
                  <p className="text-foreground text-base">{msg.content as string}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      }
      if (msg.role === 'tool-suggestion') {
        const toolSuggestion = msg.content as SuggestAiToolOutput;
        return (
          <div key={msg.id} className="flex justify-start">
            <Card className="p-4 rounded-3xl rounded-bl-none bg-white/80 w-full max-w-xs break-words soft-shadow">
              <CardContent className="p-0">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary soft-shadow flex-shrink-0 mt-1">
                      <Wand2 className="w-6 h-6"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-foreground">{t('chat.toolSuggestion')}</h4>
                    <p className="text-muted-foreground text-sm">Here are a few tools I found:</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-3">
                  {toolSuggestion.suggestions.map((tool, index) => (
                    <Link href={tool.url} key={index} target="_blank" rel="noopener noreferrer" className="block group">
                      <Card className="p-3 bg-white/50 border-white/20 hover:bg-white/80 transition-colors duration-200 rounded-xl">
                        <div className="flex justify-between items-start">
                            <p className="font-bold text-foreground">{tool.toolName}</p>
                            <ExternalLink className="w-4 h-4 text-muted-foreground ml-2 shrink-0"/>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{tool.reason}</p>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      }
      if (msg.role === 'assistant-loading') {
        return (
          <div key={msg.id} className="flex justify-start">
            <Card className="p-4 rounded-3xl rounded-bl-none bg-white/80 max-w-xs break-words soft-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10 rounded-xl"/>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[150px]"/>
                      <Skeleton className="h-4 w-[100px]"/>
                    </div>
                  </div>
                </CardContent>
            </Card>
          </div>
        );
      }
      return null;
    })}
    </div>
  );
  
  const renderHomeScreen = () => (
    <>
      <ChatInputComponent
        chatInput={chatInput}
        setChatInput={setChatInput}
        handleSendMessage={handleSendMessage}
        isGenerating={isGenerating}
      />
      
      <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground p-6 rounded-3xl my-4 relative overflow-hidden soft-shadow">
          <div className="absolute -right-4 -bottom-10 w-36 h-36 opacity-30">
              <Image src="https://picsum.photos/seed/ai-person/200/200" alt="AI illustration" width={144} height={144} className="object-contain" data-ai-hint="AI illustration person"/>
          </div>
          <Sparkles className="absolute top-4 right-4 w-8 h-8 text-white/50"/>
          <h3 className="font-bold text-2xl">{t('home.welcome.title')}</h3>
          <p className="text-base opacity-90 mt-2 max-w-[65%]">{t('home.welcome.subtitle')}</p>
          <Button variant="secondary" className="mt-6 bg-white text-primary hover:bg-white/90 rounded-full h-12 px-6 font-bold text-base glow-shadow" onClick={() => setActiveTab('tools')}>{t('home.welcome.button')}</Button>
      </div>

      <section>
          <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-xl">{t('home.popularTools.title')}</h4>
              <Link href="/popular-tools" passHref>
                <Button variant="link" className="text-primary p-0 h-auto font-semibold">{t('home.seeAll')}</Button>
              </Link>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6">
              {popularTools.map(tool => (
                  <a href={tool.url} target="_blank" rel="noopener noreferrer" key={tool.name} className="flex flex-col items-center shrink-0 w-24 text-center cursor-pointer" onClick={() => handleToolClick(tool)}>
                      <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center text-primary soft-shadow">
                          {tool.icon && <ToolIcon name={tool.icon} className="w-8 h-8" />}
                      </div>
                      <p className="text-sm font-medium text-center mt-2 text-muted-foreground">{tool.name}</p>
                  </a>
              ))}
          </div>
      </section>

      <section className="mt-8">
        <h4 className="font-semibold text-xl mb-4">{t('home.quickTools.title')}</h4>
        <div className="space-y-4">
          {quickToolCategories.map((category) => (
            <Link href={category.url} key={category.name} className="block group">
              <Card className="relative overflow-hidden rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={600}
                  height={400}
                  className="w-full h-auto aspect-[3/1] object-cover"
                  data-ai-hint={category.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h5 className="text-white font-bold text-xl">{t(`home.quickTools.categories.${category.name.replace(/ & | /g, '')}`)}</h5>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="mt-8">
          <h4 className="font-semibold text-xl mb-3">{t('home.libraries.title')}</h4>
          <div className="grid grid-cols-3 gap-4">
              {libraries.map(lib => (
                  <div key={lib.name} className={cn('p-4 rounded-3xl flex flex-col justify-between aspect-square soft-shadow bg-gradient-to-br', lib.gradient)}>
                      <div className="bg-white/30 rounded-full w-10 h-10 flex items-center justify-center text-white backdrop-blur-sm">
                          {lib.icon && <ToolIcon name={lib.icon} />}
                      </div>
                      <p className="text-white font-semibold text-base mt-4">{t(`home.libraries.${lib.name.replace(' ', '')}`)}</p>
                  </div>
              ))}
          </div>
      </section>
      
      <section className="mt-6 mb-16">
          <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-secondary rounded-full h-12 p-1">
                  <TabsTrigger value="recent" className="rounded-full h-full text-base">{t('home.recents.title')}</TabsTrigger>
                  <TabsTrigger value="favourites" className="rounded-full h-full text-base">{t('home.favourites.title')}</TabsTrigger>
              </TabsList>
              <TabsContent value="recent" className="mt-4">
                  {recentTools.length > 0 ? (
                      <div className="space-y-3">
                      {recentTools.map(tool => (
                          <Card key={tool.name} className="p-3 flex items-center gap-4 bg-white/80 border-none rounded-3xl soft-shadow">
                              {tool.image && <Image src={tool.image} alt={tool.name} width={56} height={56} className="rounded-2xl" data-ai-hint={tool.dataAiHint} />}
                              <div className="flex-grow">
                                  <h5 className="font-semibold text-base">{tool.name}</h5>
                                  <p className="text-sm text-muted-foreground">{tool.category}</p>
                              </div>
                              <Link href={tool.url} target="_blank">
                                  <Button variant="ghost" size="icon" className="text-muted-foreground rounded-full w-10 h-10">
                                      <ChevronRight />
                                  </Button>
                              </Link>
                          </Card>
                      ))}
                      </div>
                  ) : (
                      <div className="text-center py-10 text-muted-foreground">
                          <History className="mx-auto w-10 h-10" />
                          <p className="mt-4 text-base">{t('home.recents.empty')}</p>
                          <p className="text-sm">{t('home.recents.emptyDescription')}</p>
                      </div>
                  )}
              </TabsContent>
              <TabsContent value="favourites" className="mt-4">
                  {favouriteToolsList.length > 0 ? (
                      <div className="space-y-3">
                          {favouriteToolsList.map(tool => (
                              <Card key={tool.name} className="p-3 flex items-center gap-4 bg-white/80 border-none rounded-3xl soft-shadow">
                                  {tool.image && <Image src={tool.image} alt={tool.name} width={56} height={56} className="rounded-2xl" data-ai-hint={tool.dataAiHint} />}
                                  <div className="flex-grow">
                                      <h5 className="font-semibold text-base">{tool.name}</h5>
                                      <p className="text-sm text-muted-foreground">{tool.category}</p>
                                  </div>
                                  <Button variant="ghost" size="icon" className="text-muted-foreground rounded-full w-10 h-10" onClick={() => handleFavouriteToggle(tool.name)}>
                                      <Star className={cn('w-6 h-6 text-yellow-400 fill-yellow-400')}/>
                                  </Button>
                              </Card>
                          ))}
                      </div>
                  ) : (
                      <div className="text-center py-10 text-muted-foreground">
                          <Heart className="mx-auto w-10 h-10" />
                          <p className="mt-4 text-base">{t('home.favourites.empty')}</p>
                      </div>
                  )}
              </TabsContent>
          </Tabs>
      </section>
    </>
  )

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative pt-16">
      
      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow">
        <div className={cn("flex-shrink-0 px-6 pt-6")}>
          <header className="flex justify-between items-center py-2">
            <div className="flex flex-col">
                <h1 className="text-xl font-bold text-foreground">World's first web to web ai service</h1>
                <div className="flex items-center gap-2 mt-2">
                  <GalaxyLogo className="w-8 h-8" />
                  <span className="text-2xl font-bold text-foreground">AI Atlas</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
              {(showChat || chatMessages.length > 0) ? (
                  <Button variant="ghost" size="icon" onClick={handleCloseChat} className='rounded-full w-10 h-10'>
                      <X className="w-6 h-6"/>
                      <span className="sr-only">End Chat</span>
                  </Button>
              ) : (
                <div className="flex flex-col items-center gap-1">
                  <Link href="/mode" passHref>
                    <Button variant="ghost" size="icon" className="rounded-full w-10 h-10 bg-secondary">
                      <Wand2 className="w-5 h-5 text-primary"/>
                    </Button>
                  </Link>
                  <span className="text-xs font-medium text-muted-foreground">Modes</span>
                </div>
              )}
            </div>
          </header>
          <nav className={cn("mt-4", (showChat || chatMessages.length > 0) && 'hidden')}>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-transparent p-0">
                <TabsTrigger value="home" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.home')}</TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.tools')}</TabsTrigger>
                <TabsTrigger value="trending" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.trending')}</TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.settings')}</TabsTrigger>
              </TabsList>
            </Tabs>
          </nav>
        </div>
        
        <Tabs value={activeTab} className="flex-grow flex flex-col overflow-hidden">
            <TabsContent value="home" className="flex-grow overflow-y-auto px-6 pb-24 no-scrollbar mt-0" ref={chatContainerRef}>
                {(showChat || chatMessages.length > 0) ? renderChatInterface() : renderHomeScreen()}
                 {(showChat || chatMessages.length > 0) &&
                    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm p-4 bg-card/80 backdrop-blur-3xl">
                        <ChatInputComponent
                          chatInput={chatInput}
                          setChatInput={setChatInput}
                          handleSendMessage={handleSendMessage}
                          isGenerating={isGenerating}
                        />
                    </div>
                }
            </TabsContent>

            <TabsContent value="tools" className="flex-grow overflow-hidden flex flex-col mt-4 pb-24">
                <div className="px-4 pb-2">
                    <div className="flex gap-3 overflow-x-auto no-scrollbar py-2 -mx-4 px-4">
                        {toolCategories.map(cat => (
                           <Button 
                                key={cat.name} 
                                variant={'ghost'}
                                className={cn(
                                    'flex items-center gap-2 rounded-full h-12 px-6 text-base font-semibold transition-all duration-300 soft-shadow whitespace-nowrap',
                                    activeCategory === cat.name
                                        ? 'glow-shadow bg-primary text-primary-foreground'
                                        : 'text-black',
                                        cat.gradient
                                )}
                                onClick={() => setActiveCategory(cat.name)}
                            >
                                {cat.icon && <ToolIcon name={cat.icon} />}
                                <span>{cat.name}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto px-4 no-scrollbar pt-2 pb-4">
                    <div className="grid grid-cols-2 gap-4">
                        {filteredTools.map(tool => (
                            <ToolCard
                                key={tool.name}
                                tool={tool}
                                isFavourited={favouritedTools.has(tool.name)}
                                onFavouriteToggle={handleFavouriteToggle}
                                onShare={(e) => handleShareTool(e, tool)}
                                onClick={handleToolClick}
                                t={t}
                            />
                        ))}
                    </div>
                </div>
            </TabsContent>
            
            <TabsContent value="trending" className="flex-grow overflow-y-auto no-scrollbar mt-4 px-6 pb-24">
                <div className="space-y-4">
                    <Link href="https://explodingtopics.com/blog/most-popular-ai-tools" target="_blank" rel="noopener noreferrer" className="block group">
                        <Card className="bg-white/80 border-none rounded-3xl soft-shadow overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                            <div className="relative">
                                <Image 
                                    src="https://picsum.photos/seed/trending-ai/600/300"
                                    alt="Trending AI Tools"
                                    width={600}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                    data-ai-hint="data chart"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground rounded-full p-2 backdrop-blur-sm">
                                    <ExternalLink className="w-5 h-5"/>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg text-foreground">Trending AI Tools</h3>
                                <p className="text-muted-foreground text-sm mt-1">Discover the fastest-growing AI tools of the past months. Provided by Exploding Topics.</p>
                            </div>
                        </Card>
                    </Link>
                    <Link href="https://www.producthunt.com/" target="_blank" rel="noopener noreferrer" className="block group">
                        <Card className="bg-white/80 border-none rounded-3xl soft-shadow overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                            <div className="relative">
                                <Image 
                                    src="https://picsum.photos/seed/new-ai/600/300"
                                    alt="New AI Tools"
                                    width={600}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                    data-ai-hint="rocket launch"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground rounded-full p-2 backdrop-blur-sm">
                                    <ExternalLink className="w-5 h-5"/>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg text-foreground">New AI Tools</h3>
                                <p className="text-muted-foreground text-sm mt-1">Find the latest and greatest AI tools fresh from the launchpad. Provided by Product Hunt.</p>
                            </div>
                        </Card>
                    </Link>
                </div>
            </TabsContent>

            <TabsContent value="settings" className="flex-grow overflow-y-auto no-scrollbar mt-0 bg-secondary/30 pb-24">
                <SettingsPage />
            </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

export default function GalaxyApp() {
  return (
    <AuthGate>
      <App />
    </AuthGate>
  );
}

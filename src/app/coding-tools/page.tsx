'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Code, Star, Share2, Terminal, Braces, Server, Database, Link2, CloudCog, GitBranch, Bug, Paintbrush, Box, Bot, TerminalSquare, PackageCheck, Shield, Smartphone, Gamepad2, BrainCircuit, Gauge, ChevronRight
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
        title: "Code Editors / IDEs",
        icon: <Terminal className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'VS Code', description: 'Free. Built on open source. Runs everywhere.', url: 'https://code.visualstudio.com/', image: 'https://picsum.photos/seed/vscode/600/400', dataAiHint: 'code editor' },
          { name: 'Sublime Text', description: 'A sophisticated text editor for code, markup and prose.', url: 'https://www.sublimetext.com/', image: 'https://picsum.photos/seed/sublime/600/400', dataAiHint: 'text editor' },
          { name: 'WebStorm', description: 'The smartest JavaScript IDE by JetBrains.', url: 'https://www.jetbrains.com/webstorm/', image: 'https://picsum.photos/seed/webstorm/600/400', dataAiHint: 'javascript ide' },
          { name: 'IntelliJ IDEA', description: 'Capable and ergonomic IDE for JVM.', url: 'https://www.jetbrains.com/idea/', image: 'https://picsum.photos/seed/intellij/600/400', dataAiHint: 'java ide' },
          { name: 'Vim', description: 'The ubiquitous text editor.', url: 'https://www.vim.org/', image: 'https://picsum.photos/seed/vim/600/400', dataAiHint: 'terminal editor' },
          { name: 'Neovim', description: 'Vim-fork focused on extensibility and usability.', url: 'https://neovim.io/', image: 'https://picsum.photos/seed/neovim/600/400', dataAiHint: 'modern vim' },
          { name: 'Atom', description: 'A hackable text editor for the 21st Century.', url: 'https://atom.io/', image: 'https://picsum.photos/seed/atom/600/400', dataAiHint: 'github editor' },
          { name: 'PyCharm', description: 'Python IDE for professional developers.', url: 'https://www.jetbrains.com/pycharm/', image: 'https://picsum.photos/seed/pycharm/600/400', dataAiHint: 'python ide' },
        ]
    },
    {
        title: "Frontend Development",
        icon: <Braces className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'React', description: 'The library for web and native user interfaces.', url: 'https://react.dev/', image: 'https://picsum.photos/seed/react/600/400', dataAiHint: 'javascript library' },
            { name: 'Vue.js', description: 'The Progressive JavaScript Framework.', url: 'https://vuejs.org/', image: 'https://picsum.photos/seed/vuejs/600/400', dataAiHint: 'frontend framework' },
            { name: 'Angular', description: 'The web development framework for building the future.', url: 'https://angular.io/', image: 'https://picsum.photos/seed/angular/600/400', dataAiHint: 'web components' },
            { name: 'Svelte', description: 'Cybernetically enhanced web apps.', url: 'https://svelte.dev/', image: 'https://picsum.photos/seed/svelte/600/400', dataAiHint: 'compiler framework' },
            { name: 'Next.js', description: 'The React Framework for the Web.', url: 'https://nextjs.org/', image: 'https://picsum.photos/seed/nextjs/600/400', dataAiHint: 'react framework' },
            { name: 'Vite', description: 'Next Generation Frontend Tooling.', url: 'https://vitejs.dev/', image: 'https://picsum.photos/seed/vite/600/400', dataAiHint: 'build tool' },
            { name: 'Tailwind CSS', description: 'A utility-first CSS framework.', url: 'https://tailwindcss.com/', image: 'https://picsum.photos/seed/tailwind/600/400', dataAiHint: 'css framework' },
            { name: 'Storybook', description: 'Build UIs in isolation.', url: 'https://storybook.js.org/', image: 'https://picsum.photos/seed/storybook/600/400', dataAiHint: 'ui components' },
        ]
    },
    {
        title: "Backend Development",
        icon: <Server className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 engine.', url: 'https://nodejs.org/', image: 'https://picsum.photos/seed/nodejs/600/400', dataAiHint: 'javascript runtime' },
            { name: 'Express.js', description: 'Fast, unopinionated, minimalist web framework for Node.js.', url: 'https://expressjs.com/', image: 'https://picsum.photos/seed/expressjs/600/400', dataAiHint: 'node framework' },
            { name: 'Django', description: 'The web framework for perfectionists with deadlines.', url: 'https://www.djangoproject.com/', image: 'https://picsum.photos/seed/django/600/400', dataAiHint: 'python framework' },
            { name: 'Ruby on Rails', description: 'A web-application framework for programmer happiness.', url: 'https://rubyonrails.org/', image: 'https://picsum.photos/seed/rails/600/400', dataAiHint: 'web framework' },
            { name: 'Laravel', description: 'The PHP Framework for Web Artisans.', url: 'https://laravel.com/', image: 'https://picsum.photos/seed/laravel/600/400', dataAiHint: 'php framework' },
            { name: 'Go', description: 'An open-source programming language that makes it easy to build simple, reliable, and efficient software.', url: 'https://go.dev/', image: 'https://picsum.photos/seed/golang/600/400', dataAiHint: 'programming language' },
            { name: 'Spring Boot', description: 'Makes it easy to create stand-alone, production-grade Spring based Applications.', url: 'https://spring.io/projects/spring-boot', image: 'https://picsum.photos/seed/springboot/600/400', dataAiHint: 'java framework' },
        ]
    },
];

export default function CodingToolsPage() {
    const { toast } = useToast();
    const { favouritedTools, handleFavouriteToggle } = useFavourites();

    const handleFavouriteClick = (e: React.MouseEvent, toolName: string) => {
        e.preventDefault();
        e.stopPropagation();
        handleFavouriteToggle(toolName);
    };

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

  const ToolCard = ({ tool }: { tool: Tool }) => (
    <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group w-40 shrink-0">
      <Card 
        className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden h-full flex flex-col"
      >
        <div className="relative">
            <Image
              src={tool.image}
              alt={tool.name}
              width={300}
              height={200}
              className="w-full h-auto aspect-[4/3] object-cover"
              data-ai-hint={tool.dataAiHint}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-1 right-1 bg-primary/80 text-primary-foreground rounded-full p-1 backdrop-blur-sm">
                <ExternalLink className="w-3 h-3"/>
            </div>
        </div>
        <div className='p-3 flex flex-col flex-grow'>
          <div className="flex justify-between items-start flex-grow">
              <div>
                  <CardTitle className="text-base font-bold text-foreground leading-tight line-clamp-2">{tool.name}</CardTitle>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{tool.description}</p>
              </div>
              <div className="flex flex-col items-center gap-1 shrink-0 pl-1">
                  <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleShareTool(e, tool)}>
                      <Share2 className="w-3 h-3" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleFavouriteClick(e, tool.name)}>
                      <Star className={cn('w-4 h-4 transition-all', favouritedTools.has(tool.name) ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
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
          <Link href="/" passHref>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
              <ArrowLeft />
            </Button>
          </Link>
          <div className='flex items-center gap-2'>
            <Code className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              Coding & Dev Tools
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

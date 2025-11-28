'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Bot,
  BrainCircuit,
  Presentation,
  GraduationCap,
  Feather,
  BookOpen,
  Mic,
  Scissors,
  Youtube,
  Paintbrush,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/language';

const studentTools = [
  { name: 'ChatGPT', icon: <Bot className="w-8 h-8" />, url: 'https://chat.openai.com/' },
  { name: 'Perplexity', icon: <BrainCircuit className="w-8 h-8" />, url: 'https://www.perplexity.ai/' },
  { name: 'Curipod', icon: <Presentation className="w-8 h-8" />, url: 'https://curipod.com/' },
  { name: 'Education Copilot', icon: <GraduationCap className="w-8 h-8" />, url: 'https://educationcopilot.com/' },
  { name: 'Yippity', icon: <Feather className="w-8 h-8" />, url: 'https://yippity.io/' },
  { name: 'QuillBot', icon: <BookOpen className="w-8 h-8" />, url: 'https://quillbot.com/' },
  { name: 'Speaker Coach', icon: <Mic className="w-8 h-8" />, url: 'https://support.microsoft.com/en-us/office/rehearse-your-slide-show-with-speaker-coach-cd7fc56a-b262-4f86-84c1-92b641d4a8e8' },
  { name: 'Grammarly', icon: <BookOpen className="w-8 h-8" />, url: 'https://www.grammarly.com/' },
  { name: 'Canva BG Remover', icon: <Scissors className="w-8 h-8" />, url: 'https://www.canva.com/background-remover/' },
  { name: 'YouTube Summary', icon: <Youtube className="w-8 h-8" />, url: 'https://youtubesummary.com/' },
  { name: 'SlidesAI.io', icon: <Presentation className="w-8 h-8" />, url: 'https://www.slidesai.io/' },
  { name: 'Adobe BG Remover', icon: <Scissors className="w-8 h-8" />, url: 'https://www.adobe.com/express/feature/image/remove-background' },
  { name: 'Speechify', icon: <Mic className="w-8 h-8" />, url: 'https://speechify.com/' },
  { name: 'DALL·E', icon: <Paintbrush className="w-8 h-8" />, url: 'https://openai.com/dall-e-3/' },
  { name: 'Canva Magic Write', icon: <Feather className="w-8 h-8" />, url: 'https://www.canva.com/magic-write/' },
];

export default function StudentToolsPage() {
  const { t } = useLanguage();

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
                <h1 className="text-2xl font-bold text-foreground">
                    {t('home.quickTools.categories.StudentsTools')}
                </h1>
            </header>
        </div>

        <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
            <div className="flex-grow overflow-y-auto no-scrollbar p-6">
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                    {studentTools.map((tool) => (
                        <Link href={tool.url} target="_blank" rel="noopener noreferrer" key={tool.name} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center text-primary soft-shadow transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                                {React.cloneElement(tool.icon, { className: "w-10 h-10" })}
                            </div>
                            <p className="text-sm font-medium text-center mt-2 text-muted-foreground">{tool.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    </div>
  );
}

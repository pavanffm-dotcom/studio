'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const backendTools = [
  {
    name: 'Back4App',
    description: 'A flexible low-code backend to build apps faster.',
    url: 'https://www.back4app.com/',
    image: 'https://picsum.photos/seed/back4app/600/400',
    dataAiHint: 'cloud database'
  },
  {
    name: 'Firebase',
    description: 'Google\'s mobile platform to build and grow apps.',
    url: 'https://firebase.google.com/',
    image: 'https://picsum.photos/seed/firebase/600/400',
    dataAiHint: 'app development'
  },
  {
    name: 'Backendless',
    description: 'A leading visual app development platform.',
    url: 'https://backendless.com/',
    image: 'https://picsum.photos/seed/backendless/600/400',
    dataAiHint: 'visual coding'
  },
];

export default function BackendToolsPage() {
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
            <Server className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              Backend Tools
            </h1>
          </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4">
          <div className="space-y-4">
            {backendTools.map((tool) => (
              <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden">
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
                    <CardTitle className="text-lg font-bold text-foreground">{tool.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{tool.description}</p>
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

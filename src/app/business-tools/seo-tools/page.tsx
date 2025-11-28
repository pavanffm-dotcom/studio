'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';

const seoTools = [
  {
    name: 'Moz',
    description: 'Your all-in-one suite of SEO tools.',
    url: 'https://moz.com/',
    image: 'https://picsum.photos/seed/moz/600/400',
    dataAiHint: 'seo dashboard'
  },
  {
    name: 'Ahrefs',
    description: 'A popular SEO tool to help you rank higher and get more traffic.',
    url: 'https://ahrefs.com/',
    image: 'https://picsum.photos/seed/ahrefs/600/400',
    dataAiHint: 'seo analytics'
  },
  {
    name: 'SEMrush',
    description: 'Online visibility management and content marketing platform.',
    url: 'https://www.semrush.com/',
    image: 'https://picsum.photos/seed/semrush/600/400',
    dataAiHint: 'marketing platform'
  },
];

export default function SeoToolsPage() {
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
            <BarChart className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              SEO Tools
            </h1>
          </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4">
          <div className="space-y-4">
            {seoTools.map((tool, index) => (
              <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group">
                <Card 
                  className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
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

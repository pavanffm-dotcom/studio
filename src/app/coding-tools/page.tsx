
'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Code,
  Terminal,
  GitBranch,
  Database,
  Cloud,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const codingCategories = [
  { name: 'CODE EDITORS / IDES', icon: <Terminal />, url: '/coding-tools/code-editors' },
  { name: 'VERSION CONTROL', icon: <GitBranch />, url: '#' },
  { name: 'DATABASES', icon: <Database />, url: '#' },
  { name: 'CLOUD SERVICES', icon: <Cloud />, url: '#' },
];

export default function CodingToolsPage() {
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
                        Coding &amp; Dev Tools
                    </h1>
                </div>
            </header>
        </div>

        <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
            <div className="flex-grow overflow-y-auto no-scrollbar p-4">
                <div className="space-y-3">
                    {codingCategories.map((category) => (
                        <Link href={category.url} key={category.name} className="block group">
                            <Card className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                                <CardHeader className="flex flex-row items-center justify-between p-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary soft-shadow flex-shrink-0">
                                            {React.cloneElement(category.icon, { className: "w-6 h-6" })}
                                        </div>
                                        <CardTitle className="text-base font-semibold text-foreground">{category.name}</CardTitle>
                                    </div>
                                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                                </CardHeader>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    </div>
  );
}

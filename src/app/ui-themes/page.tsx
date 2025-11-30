'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, LayoutDashboard, Cpu, PanelTop, Shapes } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const themes = [
    { name: 'NeoGlass Dashboard UI', icon: <LayoutDashboard className="w-8 h-8" /> },
    { name: 'CyberWave AI Interface', icon: <Cpu className="w-8 h-8" /> },
    { name: 'Minimal White Pro UI', icon: <PanelTop className="w-8 h-8" /> },
    { name: '3D Claymorphic UI', icon: <Shapes className="w-8 h-8" /> },
];

export default function UiThemesPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
            <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
        </div>
        <div className="relative z-10 w-full max-w-sm pt-6 px-4">
            <header className="flex items-center gap-4">
                <Link href="/mode" passHref>
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
                        <ArrowLeft />
                    </Button>
                </Link>
                <h1 className="text-2xl font-bold text-foreground">
                    UI Themes
                </h1>
            </header>
        </div>

        <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
            <div className="flex-grow overflow-y-auto no-scrollbar p-4">
                <div className="grid grid-cols-2 gap-4">
                    {themes.map((theme, index) => (
                        <Card key={index} className="bg-white/80 border-none rounded-3xl soft-shadow aspect-square flex flex-col items-center justify-center text-center p-4 group hover:scale-105 transition-transform duration-300 cursor-pointer">
                            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary soft-shadow mb-3">
                                {theme.icon}
                            </div>
                            <CardTitle className="text-sm font-semibold text-foreground">{theme.name}</CardTitle>
                        </Card>
                    ))}
                </div>
                <p className="text-muted-foreground text-center text-sm mt-6">
                    Theme selection will be implemented soon.
                </p>
            </div>
        </main>
    </div>
  );
}

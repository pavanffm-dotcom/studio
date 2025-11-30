'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, LayoutDashboard, Cpu, PanelTop, Shapes, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Theme = 'default' | 'neoglass' | 'cyberwave' | 'minimal-white' | 'claymorphic';

const themes: { name: string; id: Theme; icon: React.ReactNode }[] = [
    { name: 'Default Pastel', id: 'default', icon: <LayoutDashboard className="w-8 h-8" /> },
    { name: 'NeoGlass Dashboard UI', id: 'neoglass', icon: <LayoutDashboard className="w-8 h-8" /> },
    { name: 'CyberWave AI Interface', id: 'cyberwave', icon: <Cpu className="w-8 h-8" /> },
    { name: 'Minimal White Pro UI', id: 'minimal-white', icon: <PanelTop className="w-8 h-8" /> },
    { name: '3D Claymorphic UI', id: 'claymorphic', icon: <Shapes className="w-8 h-8" /> },
];

export default function UiThemesPage() {
  const [activeTheme, setActiveTheme] = useState<Theme>('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') as Theme | null;
    const initialTheme = savedTheme || 'default';
    setActiveTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const handleThemeChange = (themeId: Theme) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('app-theme', themeId);
  };

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-sm pt-6 px-4">
        <header className="flex items-center gap-4">
          <Link href="/mode" passHref>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm">
              <ArrowLeft />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">
            UI Themes
          </h1>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-border/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4">
          <div className="grid grid-cols-2 gap-4">
            {themes.map((theme) => (
              <Card 
                key={theme.id} 
                className={cn(
                    "bg-card/80 border-2 rounded-3xl soft-shadow aspect-square flex flex-col items-center justify-center text-center p-4 group hover:scale-105 transition-all duration-300 cursor-pointer",
                    activeTheme === theme.id ? 'border-ring glow-shadow' : 'border-border/50'
                )}
                onClick={() => handleThemeChange(theme.id)}
              >
                {activeTheme === theme.id && (
                  <div className="absolute top-3 right-3 bg-ring text-primary-foreground rounded-full p-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                )}
                <div className={cn("w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-muted-foreground soft-shadow mb-3 transition-colors", activeTheme === theme.id && 'bg-primary text-primary-foreground')}>
                  {theme.icon}
                </div>
                <CardTitle className="text-sm font-semibold text-foreground">{theme.name}</CardTitle>
              </Card>
            ))}
          </div>
          <p className="text-muted-foreground text-center text-sm mt-6">
            Select a theme to change the application's appearance.
          </p>
        </div>
      </main>
    </div>
  );
}

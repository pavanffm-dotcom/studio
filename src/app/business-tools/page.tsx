'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Briefcase,
  Server,
  Calendar,
  Layers,
  Megaphone,
  BarChart,
  Link2,
  ListChecks,
  CreditCard,
  Video,
  Users,
  MessageSquare,
  Paintbrush,
  Lightbulb,
  Cpu,
  UserCog,
  Code,
  DollarSign,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const businessCategories = [
  { name: 'BEST FREE STARTUP TOOLS', icon: <Briefcase />, url: '#' },
  { name: 'BACKEND', icon: <Server />, url: '/business-tools/backend' },
  { name: 'SCHEDULING', icon: <Calendar />, url: '#' },
  { name: 'LOW CODE PLATFORM', icon: <Layers />, url: '#' },
  { name: 'MARKETING TOOLS', icon: <Megaphone />, url: '#' },
  { name: 'SALES TOOLS', icon: <BarChart />, url: '#' },
  { name: 'SEO TOOLS', icon: <BarChart />, url: '#' },
  { name: 'INTEGRATIONS', icon: <Link2 />, url: '#' },
  { name: 'PROJECT MANAGEMENT', icon: <ListChecks />, url: '#' },
  { name: 'PAYMENTS', icon: <CreditCard />, url: '#' },
  { name: 'VIDEO CONFERENCING', icon: <Video />, url: '#' },
  { name: 'CRM', icon: <Users />, url: '#' },
  { name: 'MESSAGING', icon: <MessageSquare />, url: '#' },
  { name: 'GRAPHIC DESIGN', icon: <Paintbrush />, url: '#' },
  { name: 'BUSINESS PLANNING', icon: <Lightbulb />, url: '#' },
  { name: 'RESOURCE PLANNING', icon: <Cpu />, url: '#' },
  { name: 'ACCOUNTING', icon: <DollarSign />, url: '#' },
  { name: 'HR', icon: <UserCog />, url: '#' },
  { name: 'FRAMEWORKS', icon: <Code />, url: '#' },
];

export default function BusinessToolsPage() {
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
                    Business Tools
                </h1>
            </header>
        </div>

        <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
            <div className="flex-grow overflow-y-auto no-scrollbar p-4">
                <div className="space-y-3">
                    {businessCategories.map((category) => (
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

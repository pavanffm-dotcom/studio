
'use client';

import React from 'react';
import Link from 'next/link';
import { 
    ArrowLeft, Briefcase, DollarSign, UserCog, CreditCard, Users, MessageSquare, Video, Megaphone, BarChart, GitBranch, ListChecks, Lightbulb, Cpu, Code, TrendingUp, Link2, Server, Layers, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const categories = [
    { title: "Accounting", icon: <DollarSign className="w-6 h-6"/>, url: '/business-tools/accounting' },
    { title: "HR", icon: <UserCog className="w-6 h-6"/>, url: '/business-tools/hr' },
    { title: "Payments", icon: <CreditCard className="w-6 h-6"/>, url: '/business-tools/payments' },
    { title: "CRM", icon: <Users className="w-6 h-6"/>, url: '/business-tools/crm' },
    { title: "Messaging", icon: <MessageSquare className="w-6 h-6"/>, url: '/business-tools/messaging' },
    { title: "Video Conferencing", icon: <Video className="w-6 h-6"/>, url: '/business-tools/video-conferencing' },
    { title: "Marketing Tools", icon: <Megaphone className="w-6 h-6"/>, url: '/business-tools/marketing-tools' },
    { title: "Sales Tools", icon: <BarChart className="w-6 h-6"/>, url: '/business-tools/sales-tools' },
    { title: "Project Management", icon: <ListChecks className="w-6 h-6"/>, url: '/business-tools/project-management' },
    { title: "Business Planning", icon: <Lightbulb className="w-6 h-6"/>, url: '/business-tools/business-planning' },
    { title: "Resource Planning", icon: <Cpu className="w-6 h-6"/>, url: '/business-tools/resource-planning' },
    { title: "Frameworks", icon: <Code className="w-6 h-6"/>, url: '/business-tools/frameworks' },
    { title: "SEO Tools", icon: <TrendingUp className="w-6 h-6"/>, url: '/business-tools/seo-tools' },
    { title: "Integrations", icon: <Link2 className="w-6 h-6"/>, url: '/business-tools/integrations' },
    { title: "Backend", icon: <Server className="w-6 h-6"/>, url: '/business-tools/backend' },
    { title: "Low Code Platform", icon: <Layers className="w-6 h-6"/>, url: '/business-tools/low-code-platform' },
];

export default function BusinessToolsPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-sm pt-6 px-4">
        <header className="flex items-center justify-between gap-4">
            <div className='flex items-center gap-4'>
                <Link href="/" passHref>
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
                    <ArrowLeft />
                    </Button>
                </Link>
                <div className='flex items-center gap-2'>
                    <Briefcase className="w-6 h-6 text-foreground" />
                    <h1 className="text-2xl font-bold text-foreground">
                    Business Tools
                    </h1>
                </div>
            </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-3">
            {categories.map((category, index) => (
              <Link href={category.url} key={index} className="block group">
                <Card 
                  className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden opacity-0 animate-fade-in-up p-4"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center text-primary">
                                {category.icon}
                            </div>
                            <span className="font-semibold text-lg text-foreground">{category.title}</span>
                        </div>
                        <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:translate-x-1 transition-transform"/>
                    </div>
                </Card>
              </Link>
            ))}
        </div>
      </main>
    </div>
  );
}

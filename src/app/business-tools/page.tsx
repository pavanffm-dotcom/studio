'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';

type Category = {
  name: string;
  url: string;
  image: string;
  dataAiHint: string;
};

type GroupedCategory = {
  title: string;
  icon: React.ReactNode;
  categories: Category[];
};

const groupedCategories: GroupedCategory[] = [
    {
        title: 'Core Operations',
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        categories: [
            { name: 'ACCOUNTING', url: '/business-tools/accounting', image: 'https://picsum.photos/seed/accounting/600/400', dataAiHint: 'financial calculator' },
            { name: 'HR', url: '/business-tools/hr', image: 'https://picsum.photos/seed/hr/600/400', dataAiHint: 'human resources' },
            { name: 'PAYMENTS', url: '/business-tools/payments', image: 'https://picsum.photos/seed/payments/600/400', dataAiHint: 'credit card' },
            { name: 'CRM', url: '/business-tools/crm', image: 'https://picsum.photos/seed/crm/600/400', dataAiHint: 'customer database' },
            { name: 'MESSAGING', url: '/business-tools/messaging', image: 'https://picsum.photos/seed/messaging/600/400', dataAiHint: 'chat bubbles' },
            { name: 'VIDEO CONFERENCING', url: '/business-tools/video-conferencing', image: 'https://picsum.photos/seed/video-conferencing/600/400', dataAiHint: 'online meeting' },
        ],
    },
    {
        title: 'Growth & Marketing',
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        categories: [
            { name: 'MARKETING TOOLS', url: '/business-tools/marketing-tools', image: 'https://picsum.photos/seed/marketing-tools/600/400', dataAiHint: 'marketing chart' },
            { name: 'SALES TOOLS', url: '/business-tools/sales-tools', image: 'https://picsum.photos/seed/sales-tools/600/400', dataAiHint: 'sales graph' },
            { name: 'SEO TOOLS', url: '/business-tools/seo-tools', image: 'https://picsum.photos/seed/seo-tools/600/400', dataAiHint: 'search engine' },
        ]
    },
    {
        title: 'Development & Tech',
        icon: <Code className="w-5 h-5 text-primary"/>,
        categories: [
            { name: 'BACKEND', url: '/business-tools/backend', image: 'https://picsum.photos/seed/backend/600/400', dataAiHint: 'server code' },
            { name: 'LOW CODE PLATFORM', url: '/business-tools/low-code-platform', image: 'https://picsum.photos/seed/low-code/600/400', dataAiHint: 'visual programming' },
            { name: 'FRAMEWORKS', url: '/business-tools/frameworks', image: 'https://picsum.photos/seed/frameworks/600/400', dataAiHint: 'code framework' },
            { name: 'INTEGRATIONS', url: '/business-tools/integrations', image: 'https://picsum.photos/seed/integrations/600/400', dataAiHint: 'api connections' },
            { name: 'CODING & DEVELOPER TOOLS', url: '/coding-tools', image: 'https://picsum.photos/seed/coding-dev/600/400', dataAiHint: 'developer screen' },
            { name: 'GRAPHIC DESIGN', url: '/business-tools/graphic-design', image: 'https://picsum.photos/seed/graphic-design-cat/600/400', dataAiHint: 'design tools' },
        ]
    },
    {
        title: 'Project & Planning',
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        categories: [
            { name: 'PROJECT MANAGEMENT', url: '/business-tools/project-management', image: 'https://picsum.photos/seed/project-management/600/400', dataAiHint: 'team tasks' },
            { name: 'BUSINESS PLANNING', url: '/business-tools/business-planning', image: 'https://picsum.photos/seed/business-planning/600/400', dataAiHint: 'business strategy' },
            { name: 'RESOURCE PLANNING', url: '/business-tools/resource-planning', image: 'https://picsum.photos/seed/resource-planning/600/400', dataAiHint: 'resource chart' },
            { name: 'SCHEDULING', url: '/business-tools/scheduling', image: 'https://picsum.photos/seed/scheduling/600/400', dataAiHint: 'calendar appointment' },
        ]
    },
     {
        title: 'Startup Specials',
        icon: <Lightbulb className="w-5 h-5 text-primary"/>,
        categories: [
             { name: 'BEST FREE STARTUP TOOLS', url: '#', image: 'https://picsum.photos/seed/startup-tools/600/400', dataAiHint: 'startup launch' },
        ]
    }
];

const CategoryCard = ({ category }: { category: Category }) => (
    <Link href={category.url} key={category.name} className="block group w-48 shrink-0">
        <Card className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden">
            <div className="relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={200}
                  className="w-full h-auto aspect-video object-cover"
                  data-ai-hint={category.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-1 right-1 bg-primary/80 text-primary-foreground rounded-full p-1 backdrop-blur-sm">
                    <ExternalLink className="w-3 h-3"/>
                </div>
                 <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h5 className="font-semibold text-white text-base leading-tight truncate">{category.name}</h5>
                </div>
            </div>
        </Card>
    </Link>
);


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
            <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-8">
                {groupedCategories.map((group, index) => (
                  <section key={index}>
                      <div className="flex justify-between items-center mb-3 px-2">
                          <h2 className="font-semibold text-xl flex items-center gap-2">
                              {group.icon}
                              {group.title}
                          </h2>
                      </div>
                      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                          {group.categories.map((category) => (
                            <CategoryCard category={category} key={category.name}/>
                          ))}
                      </div>
                  </section>
                ))}
            </div>
        </main>
    </div>
  );
}

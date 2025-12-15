


import { 
    Briefcase, DollarSign, UserCog, CreditCard, Users, MessageSquare, Video, Megaphone, BarChart, GitBranch, ListChecks, Lightbulb, Cpu, Code, Filter, TrendingUp, Link2, Server, Layers,
    Paintbrush, Youtube, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, GraduationCap, Scissors, Film, ImageIcon, Palette, Bot, Mic2, FileText,
    Terminal, Database, CloudCog, Bug, Box, TerminalSquare, PackageCheck, Shield, Smartphone, Gamepad2, TestTube, Gauge,
    LayoutDashboard, BookOpen, Contact, Gem, MonitorPlay, Wallet, Receipt, FileSignature, Folder, Workflow, Clock, Timer, Hourglass, Share, Copy, RotateCw, Cloud, Sparkles, BookCopy, Mail, ShoppingCart, Layout, ImagePlay, Shapes, UserCircle, BrainCircuit, Newspaper, BoxSelect, MousePointerClick, BookCopy as BookCopyIcon, Wallpaper, Car, Store, TowerControl, Truck, SquareParking, PenTool, Feather, Key, Quote, Tv, Building, FileCheck, Scale,
    Settings, Target, ClipboardCheck, Eye, UploadCloud, Globe, Webhook, HardDrive, Component, GanttChartSquare, FunctionSquare, RefreshCw, Laptop, Router, BarChart3
} from 'lucide-react';
import React from 'react';
import { businessToolData } from './business-tools-data';
import { studentToolData } from './student-tools-data';
import { contentCreationToolData } from './content-creation-data';
import { graphicDesignToolData } from './graphic-design-data';
import { codingToolData } from './coding-tools-data';
import { productivityToolData } from './productivity-tools-data';

// Helper to get the correct icon for packaging since it's not in lucide-react by default
const Package = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
);

const FileHeart = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <path d="M12 18l-3-3a3 3 0 1 1 4.24-4.24l.76.76.76-.76A3 3 0 1 1 15 15l-3 3z"></path>
    </svg>
);


export type Tool = {
    name: string;
    description?: string;
    url: string;
    image: string;
    dataAiHint: string;
    icon?: string; 
    pricing?: 'Free' | 'Paid' | 'Freemium';
    isTrending?: boolean;
    category?: string;
};

export type QuickToolCategory = {
  name: string;
  image: string;
  dataAiHint: string;
  url: string;
  translationKey: string;
};

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};


export const popularTools: Tool[] = [
  { name: 'Runway', icon: 'Video', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-pop/300/200', category: 'Video', dataAiHint: 'abstract animation' },
  { name: 'Pika', icon: 'Clapperboard', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-pop/300/200', category: 'Video', dataAiHint: 'cinematic video' },
  { name: 'ElevenLabs', icon: 'Mic', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-pop/300/200', category: 'Audio', dataAiHint: 'sound waves' },
  { name: 'Lensa AI', icon: 'UserSquare', url: 'https://prisma-ai.com/lensa', image: 'https://picsum.photos/seed/lensa-pop/300/200', category: 'Image', dataAiHint: 'ai avatar' },
  { name: 'Midjourney', icon: 'ImageIcon', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-pop/300/200', category: 'Image', dataAiHint: 'generative art' },
];

export const libraries = [
  { name: 'Image Library', gradient: 'from-pink-300 to-rose-300', icon: 'ImageIcon' },
  { name: 'Video Library', gradient: 'from-sky-300 to-blue-300', icon: 'Clapperboard' },
  { name: 'Audio Library', gradient: 'from-teal-200 to-emerald-300', icon: 'Mic' },
];

export const quickToolCategories: QuickToolCategory[] = [
    { name: 'Students Tools', image: 'https://picsum.photos/seed/students/600/400', dataAiHint: 'students studying', url: '/student-tools', translationKey: 'StudentsTools' },
    { name: 'Business Tools', image: 'https://picsum.photos/seed/business/600/400', dataAiHint: 'business meeting', url: '/business-tools', translationKey: 'BusinessTools' },
    { name: 'Content Creation Tools', image: 'https://picsum.photos/seed/content/600/400', dataAiHint: 'creator studio', url: '/content-creation', translationKey: 'ContentCreationTools' },
    { name: 'Graphic Design Tools', image: 'https://picsum.photos/seed/graphic-design/600/400', dataAiHint: 'design tablet', url: '/business-tools/graphic-design', translationKey: 'GraphicDesignTools' },
    { name: 'Coding & Developer Tools', image: 'https://picsum.photos/seed/coding/600/400', dataAiHint: 'coding screen', url: '/coding-tools', translationKey: 'CodingDeveloperTools' },
    { name: 'Productivity Tools', image: 'https://picsum.photos/seed/productivity/600/400', dataAiHint: 'focused work', url: '/productivity-tools', translationKey: 'ProductivityTools' },
    { name: 'Writing Tools', image: 'https://picsum.photos/seed/writing/600/400', dataAiHint: 'writing hand', url: '/writing-tools', translationKey: 'WritingTools' },
    { name: 'Marketing & SEO Tools', image: 'https://picsum.photos/seed/marketing/600/400', dataAiHint: 'seo chart', url: '/marketing-seo-tools', translationKey: 'MarketingSEOTools' },
];

export const imageToVideoTools: Tool[] = [];
export const textToVideoTools: Tool[] = [];
export const textToSpeechTools: Tool[] = [];
export const voiceCloningTools: Tool[] = [];
export const aiAvatarTools: Tool[] = [];
export const textToImageTools: Tool[] = [];
export const marketingSeoToolData: ToolCategory[] = [];
export const writingToolData: ToolCategory[] = [];


const allData = [
    ...popularTools,
    ...imageToVideoTools,
    ...textToVideoTools,
    ...textToSpeechTools,
    ...voiceCloningTools,
    ...aiAvatarTools,
    ...textToImageTools,
    ...businessToolData.flatMap(cat => cat.tools),
    ...graphicDesignToolData.flatMap(cat => cat.tools),
    ...marketingSeoToolData.flatMap(cat => cat.tools),
    ...productivityToolData.flatMap(cat => cat.tools),
    ...writingToolData.flatMap(cat => cat.tools),
    ...codingToolData.flatMap(cat => cat.tools),
    ...contentCreationToolData.flatMap(cat => cat.tools),
    ...studentToolData.flatMap(cat => cat.tools),
];

export const allTools: Tool[] = Array.from(new Set(allData.map(t => t.name))).map(name => {
    return allData.find(t => t.name === name)!
});

export const toolCategories = [
    { name: 'All', icon: 'LayoutGrid', color: 'bg-primary text-primary-foreground' },
    { name: 'Img2vid', icon: 'ImageIcon', gradient: 'bg-gradient-to-br from-pink-400 to-rose-400' },
    { name: 'Txt2vid', icon: 'Video', gradient: 'bg-gradient-to-br from-sky-400 to-blue-400' },
    { name: 'Text to Speech', icon: 'Text', gradient: 'bg-gradient-to-br from-teal-400 to-emerald-400' },
    { name: 'Text to Image', icon: 'ImageDown', gradient: 'bg-gradient-to-br from-orange-400 to-amber-400' },
    { name: 'Voice Cloning', icon: 'Voicemail', gradient: 'bg-gradient-to-br from-purple-400 to-indigo-400' },
    { name: 'AI Avatar', icon: 'UserSquare', gradient: 'bg-gradient-to-br from-yellow-400 to-amber-400' },
];

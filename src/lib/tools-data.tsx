

import { 
    Briefcase, DollarSign, UserCog, CreditCard, Users, MessageSquare, Video, Megaphone, BarChart, GitBranch, ListChecks, Lightbulb, Cpu, Code, Filter, TrendingUp, Link2, Server, Layers,
    Paintbrush, Youtube, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, GraduationCap, Scissors, Film, ImageIcon, Palette, Bot, Mic2, FileText,
    Terminal, Database, CloudCog, Bug, Box, TerminalSquare, PackageCheck, Shield, Smartphone, Gamepad2, TestTube, Gauge,
    LayoutDashboard, BookOpen, Contact, Gem, MonitorPlay, Wallet, Receipt, FileSignature, Folder, Workflow, Clock, Timer, Hourglass, Share, Copy, RotateCw, Cloud, Sparkles, BookCopy, Mail, ShoppingCart, Layout, ImagePlay, Shapes, UserCircle, BrainCircuit, Newspaper, BoxSelect, MousePointerClick, BookCopy as BookCopyIcon, Wallpaper, Car, Store, TowerControl, Truck, SquareParking, PenTool, Feather, Key, Quote, Tv, Building, FileCheck, Scale,
    Settings, Target, ClipboardCheck, Eye, UploadCloud, Globe
} from 'lucide-react';
import React from 'react';

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
  { name: 'Students Tools', image: 'https://picsum.photos/seed/students/600/400', dataAiHint: 'students studying', url: '/student-tools' },
  { name: 'Business Tools', image: 'https://picsum.photos/seed/business/600/400', dataAiHint: 'business meeting', url: '/business-tools' },
  { name: 'Content Creation Tools', image: 'https://picsum.photos/seed/content/600/400', dataAiHint: 'creator studio', url: '/content-creation' },
  { name: 'Graphic Design Tools', image: 'https://picsum.photos/seed/graphic-design/600/400', dataAiHint: 'design tablet', url: '/business-tools/graphic-design' },
  { name: 'Coding & Developer Tools', image: 'https://picsum.photos/seed/coding/600/400', dataAiHint: 'coding screen', url: '/coding-tools' },
  { name: 'Productivity Tools', image: 'https://picsum.photos/seed/productivity/600/400', dataAiHint: 'focused work', url: '/productivity-tools' },
  { name: 'Writing Tools', image: 'https://picsum.photos/seed/writing/600/400', dataAiHint: 'writing hand', url: '/writing-tools' },
  { name: 'Marketing & SEO Tools', image: 'https://picsum.photos/seed/marketing/600/400', dataAiHint: 'seo chart', url: '/marketing-seo-tools' },
  { name: 'Audio & Speech Tools', image: 'https://picsum.photos/seed/audio/600/400', dataAiHint: 'microphone audio', url: '#' },
  { name: 'Video Tools', image: 'https://picsum.photos/seed/video/600/400', dataAiHint: 'video camera', url: '#' },
  { name: 'Chat Assistant Tools', image: 'https://picsum.photos/seed/chat-assistant/600/400', dataAiHint: 'robot chat', url: '#' },
  { name: 'Finance & Investing Tools', image: 'https://picsum.photos/seed/finance/600/400', dataAiHint: 'finance chart', url: '#' },
  { name: 'Utility Tools', image: 'https://picsum.photos/seed/utility/600/400', dataAiHint: 'tool box', url: '#' },
];

export const imageToVideoTools: Tool[] = [
  { name: 'Runway', image: 'https://picsum.photos/seed/runway/300/200', isTrending: true, category: 'Image', dataAiHint: 'abstract animation', url: 'https://runwayml.com/' },
  { name: 'Pika', image: 'https://picsum.photos/seed/pika/300/200', isTrending: true, category: 'Image', dataAiHint: 'cinematic video', url: 'https://pika.art/' },
  { name: 'Kaiber', image: 'https://picsum.photos/seed/kaiber/300/200', isTrending: true, category: 'Image', dataAiHint: 'artistic motion', url: 'https://www.kaiber.ai/' },
  { name: 'D-ID', image: 'https://picsum.photos/seed/d-id/300/200', isTrending: true, category: 'Image', dataAiHint: 'talking avatar', url: 'https://www.d-id.com/' },
  { name: 'HeyGen', image: 'https://picsum.photos/seed/heygen/300/200', isTrending: true, category: 'Image', dataAiHint: 'ai presenter', url: 'https://www.heygen.com/' },
  { name: 'Synthesia', image: 'https://picsum.photos/seed/synthesia/300/200', isTrending: false, category: 'Image', dataAiHint: 'ai video', url: 'https://www.synthesia.io/' },
  { name: 'Lumen5', image: 'https://picsum.photos/seed/lumen5/300/200', isTrending: false, category: 'Image', dataAiHint: 'video creation', url: 'https://lumen5.com/' },
  { name: 'InVideo', image: 'https://picsum.photos/seed/invideo/300/200', isTrending: false, category: 'Image', dataAiHint: 'online editor', url: 'https://invideo.io/' },
  { name: 'Pictory', image: 'https://picsum.photos/seed/pictory/300/200', isTrending: false, category: 'Image', dataAiHint: 'video marketing', url: 'https://pictory.ai/' },
  { name: 'Designs.ai', image: 'https://picsum.photos/seed/designsai/300/200', isTrending: false, category: 'Image', dataAiHint: 'creative suite', url: 'https://designs.ai/' },
  { name: 'Veed.io', image: 'https://picsum.photos/seed/veedio/300/200', isTrending: false, category: 'Image', dataAiHint: 'video editing', url: 'https://www.veed.io/' },
  { name: 'Wave.video', image: 'https://picsum.photos/seed/wavevideo/300/200', isTrending: false, category: 'Image', dataAiHint: 'video hosting', url: 'https://wave.video/' },
  { name: 'Animoto', image: 'https://picsum.photos/seed/animoto/300/200', isTrending: false, category: 'Image', dataAiHint: 'slideshow video', url: 'https://animoto.com/' },
  { name: 'Magisto', image: 'https://picsum.photos/seed/magisto/300/200', isTrending: false, category: 'Image', dataAiHint: 'smart editor', url: 'https://www.magisto.com/' },
  { name: 'FlexClip', image: 'https://picsum.photos/seed/flexclip/300/200', isTrending: false, category: 'Image', dataAiHint: 'easy video', url: 'https://www.flexclip.com/' },
  { name: 'Clipchamp', image: 'https://picsum.photos/seed/clipchamp/300/200', isTrending: false, category: 'Image', dataAiHint: 'microsoft video', url: 'https://clipchamp.com/' },
  { name: 'Moovly', image: 'https://picsum.photos/seed/moovly/300/200', isTrending: false, category: 'Image', dataAiHint: 'animation tool', url: 'https://www.moovly.com/' },
  { name: 'Powtoon', image: 'https://picsum.photos/seed/powtoon/300/200', isTrending: false, category: 'Image', dataAiHint: 'presentation video', url: 'https://www.powtoon.com/' },
  { name: 'Biteable', image: 'https://picsum.photos/seed/biteable/300/200', isTrending: false, category: 'Image', dataAiHint: 'short video', url: 'https://biteable.com/' },
  { name: 'Renderforest', image: 'https://picsum.photos/seed/renderforest/300/200', isTrending: false, category: 'Image', dataAiHint: 'branding videos', url: 'https://www.renderforest.com/' },
  { name: 'Kapwing', image: 'https://picsum.photos/seed/kapwing/300/200', isTrending: false, category: 'Image', dataAiHint: 'collaborative video', url: 'https://www.kapwing.com/' },
  { name: 'Genmo', image: 'https://picsum.photos/seed/genmo/300/200', isTrending: false, category: 'Image', dataAiHint: 'generative video', url: 'https://www.genmo.ai/' },
  { name: 'Moonvalley', image: 'https://picsum.photos/seed/moonvalley/300/200', isTrending: false, category: 'Image', dataAiHint: 'ai film', url: 'https://moonvalley.ai/' },
  { name: 'InstaVid', image: 'https://picsum.photos/seed/instavid/300/200', isTrending: false, category: 'Image', dataAiHint: 'social video', url: '#' },
  { name: 'Storykit', image: 'https://picsum.photos/seed/storykit/300/200', isTrending: false, category: 'Image', dataAiHint: 'video storytelling', url: 'https://www.storykit.io/' },
  { name: 'Wibbitz', image: 'https://picsum.photos/seed/wibbitz/300/200', isTrending: false, category: 'Image', dataAiHint: 'automated video', url: 'https://www.wibbitz.com/' },
  { name: 'GliaCloud', image: 'https://picsum.photos/seed/gliacloud/300/200', isTrending: false, category: 'Image', dataAiHint: 'news video', url: 'https://www.gliacloud.com/' },
  { name: 'Typito', image: 'https://picsum.photos/seed/typito/300/200', isTrending: false, category: 'Image', dataAiHint: 'text video', url: 'https://typito.com/' },
  { name: 'Offeo', image: 'https://picsum.photos/seed/offeo/300/200', isTrending: false, category: 'Image', dataAiHint: 'ad maker', url: 'https://offeo.com/' },
  { name: 'Rocketium', image: 'https://picsum.photos/seed/rocketium/300/200', isTrending: false, category: 'Image', dataAiHint: 'business video', url: 'https://rocketium.com/' },
  { name: 'Shakr', image: 'https://picsum.photos/seed/shakr/300/200', isTrending: false, category: 'Image', dataAiHint: 'facebook ads', url: 'https://www.shakr.com/' },
  { name: 'Raw Shorts', image: 'https://picsum.photos/seed/rawshorts/300/200', isTrending: false, category: 'Image', dataAiHint: 'animated video', url: 'https://www.rawshorts.com/' },
  { name: 'Animaker', image: 'https://picsum.photos/seed/animaker/300/200', isTrending: false, category: 'Image', dataAiHint: 'diy video', url: 'https://www.animaker.com/' },
  { name: 'Vyond', image: 'https://picsum.photos/seed/vyond/300/200', isTrending: false, category: 'Image', dataAiHint: 'professional animation', url: 'https://www.vyond.com/' },
  { name: 'Wideo', image: 'https://picsum.photos/seed/wideo/300/200', isTrending: false, category: 'Image', dataAiHint: 'marketing animation', url: 'https://wideo.co/' },
  { name: 'Easil', image: 'https://picsum.photos/seed/easil/300/200', isTrending: false, category: 'Image', dataAiHint: 'visual content', url: 'https://about.easil.com/' },
  { name: 'PosterMyWall', image: 'https://picsum.photos/seed/postermywall/300/200', isTrending: false, category: 'Image', dataAiHint: 'promo graphics', url: 'https://www.postermywall.com/' },
  { name: 'Flixpress', image: 'https://picsum.photos/seed/flixpress/300/200', isTrending: false, category: 'Image', dataAiHint: 'intro maker', url: 'https://www.flixpress.com/' },
  { name: 'Kizoa', image: 'https://picsum.photos/seed/kizoa/300/200', isTrending: false, category: 'Image', dataAiHint: 'movie maker', url: 'https://www.kizoa.com/' },
  { name: 'WeVideo', image: 'https://picsum.photos/seed/wevideo/300/200', isTrending: false, category: 'Image', dataAiHint: 'cloud editor', url: 'https://www.wevideo.com/' },
  { name: 'Stupeflix', image: 'https://picsum.photos/seed/stupeflix/300/200', isTrending: false, category: 'Image', dataAiHint: 'fast video', url: '#' },
  { name: 'Slidely', image: 'https://picsum.photos/seed/slidely/300/200', isTrending: false, category: 'Image', dataAiHint: 'visual media', url: 'https://slidely.com/' },
  { name: 'PhotoSnack', image: 'https://picsum.photos/seed/photosnack/300/200', isTrending: false, category: 'Image', dataAiHint: 'photo slideshow', url: '#' },
  { name: 'Promo.com', image: 'https://picsum.photos/seed/promo/300/200', isTrending: false, category: 'Image', dataAiHint: 'video ads', url: 'https://promo.com/' },
  { name: 'Vidnami', image: 'https://picsum.photos/seed/vidnami/300/200', isTrending: false, category: 'Image', dataAiHint: 'ai content', url: '#' },
  { name: 'Crello', image: 'https://picsum.photos/seed/crello/300/200', isTrending: false, category: 'Image', dataAiHint: 'vista create', url: 'https://crello.com/' },
  { name: 'MotionDen', image: 'https://picsum.photos/seed/motionden/300/200', isTrending: false, category: 'Image', dataAiHint: 'video templates', url: 'https://motionden.com/' },
  { name: 'Camtasia', image: 'https://picsum.photos/seed/camtasia/300/200', isTrending: false, category: 'Image', dataAiHint: 'screen recorder', url: 'https://www.techsmith.com/video-editor.html' },
  { name: 'Filmora', image: 'https://picsum.photos/seed/filmora/300/200', isTrending: false, category: 'Image', dataAiHint: 'wondershare editor', url: 'https://filmora.wondershare.com/' },
  { name: 'Adobe Premiere Rush', image: 'https://picsum.photos/seed/premiererush/300/200', isTrending: false, category: 'Image', dataAiHint: 'adobe video', url: 'https://www.adobe.com/products/premiere-rush.html' },
];

export const textToVideoTools: Tool[] = [
  { name: 'Runway', image: 'https://picsum.photos/seed/runway-video/300/200', isTrending: true, category: 'Video', dataAiHint: 'ai video generation', url: 'https://runwayml.com/' },
  { name: 'Pika', image: 'https://picsum.photos/seed/pika-video/300/200', isTrending: true, category: 'Video', dataAiHint: 'text to video', url: 'https://pika.art/' },
  { name: 'InVideo', image: 'https://picsum.photos/seed/invideo-video/300/200', isTrending: true, category: 'Video', dataAiHint: 'ai video editor', url: 'https://invideo.io/' },
  { name: 'Synthesia', image: 'https://picsum.photos/seed/synthesia-video/300/200', isTrending: true, category: 'Video', dataAiHint: 'ai avatars', url: 'https://www.synthesia.io/' },
  { name: 'HeyGen', image: 'https://picsum.photos/seed/heygen-video/300/200', isTrending: true, category: 'Video', dataAiHint: 'generative video', url: 'https://www.heygen.com/' },
  { name: 'Pictory', image: 'https://picsum.photos/seed/pictory-video/300/200', isTrending: true, category: 'Video', dataAiHint: 'video from script', url: 'https://pictory.ai/' },
  { name: 'Veed.io', image: 'https://picsum.photos/seed/veed-video/300/200', isTrending: true, category: 'Video', dataAiHint: 'online video suite', url: 'https://www.veed.io/' },
  { name: 'Lumen5', image: 'https://picsum.photos/seed/lumen5-video/300/200', isTrending: true, category: 'Video', dataAiHint: 'social media video', url: 'https://lumen5.com/' },
  { name: 'Fliki', image: 'https://picsum.photos/seed/fliki-video/300/200', isTrending: true, category: 'Video', dataAiHint: 'text to speech video', url: 'https://fliki.ai/' },
  { name: 'Deepbrain AI', image: 'https://picsum.photos/seed/deepbrain-video/300/200', isTrending: true, category: 'Video', dataAiHint: 'ai studios', url: 'https://www.deepbrain.io/' },
  { name: 'Gen-2', image: 'https://picsum.photos/seed/gen2-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'runwayml video', url: '#' },
  { name: 'D-ID', image: 'https://picsum.photos/seed/did-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'creative reality', url: 'https://www.d-id.com/' },
  { name: 'Kaiber', image: 'https://picsum.photos/seed/kaiber-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai video art', url: 'https://www.kaiber.ai/' },
  { name: 'FlexClip', image: 'https://picsum.photos/seed/flexclip-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'easy video maker', url: 'https://www.flexclip.com/' },
  { name: 'Designs.ai', image: 'https://picsum.photos/seed/designsai-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai creative tools', url: 'https://designs.ai/' },
  { name: 'Hour One', image: 'https://picsum.photos/seed/hourone-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'virtual presenters', url: 'https://hourone.ai/' },
  { name: 'Colossyan', image: 'https://picsum.photos/seed/colossyan-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai video actors', url: 'https://www.colossyan.com/' },
  { name: 'Elai.io', image: 'https://picsum.photos/seed/elai-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'text to video platform', url: 'https://elai.io/' },
  { name: 'Kapwing', image: 'https://picsum.photos/seed/kapwing-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'collaborative video', url: 'https://www.kapwing.com/' },
  { name: 'Steve.AI', image: 'https://picsum.photos/seed/steveai-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'animated video maker', url: 'https://www.steve.ai/' },
  { name: 'GliaCloud', image: 'https://picsum.photos/seed/gliacloud-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'news video automation', url: 'https://www.gliacloud.com/' },
  { name: 'Rephrase.ai', image: 'https://picsum.photos/seed/rephrase-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai personalized video', url: 'https://www.rephrase.ai/' },
  { name: 'Yepic AI', image: 'https://picsum.photos/seed/yepic-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video translation', url: 'https://www.yepic.ai/' },
  { name: 'Wisecut', image: 'https://picsum.photos/seed/wisecut-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai video editing', url: 'https://www.wisecut.video/' },
  { name: 'Opus Clip', image: 'https://picsum.photos/seed/opusclip-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'viral video clips', url: 'https://www.opus.pro/' },
  { name: 'Vidyo.ai', image: 'https://picsum.photos/seed/vidyo-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'short form video', url: 'https://vidyo.ai/' },
  { name: 'Raw Shorts', image: 'https://picsum.photos/seed/rawshorts-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai animation', url: 'https://www.rawshorts.com/' },
  { name: 'Wave.video', image: 'https://picsum.photos/seed/wavevideo-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video marketing', url: 'https://wave.video/' },
  { name: 'Animaker', image: 'https://picsum.photos/seed/animaker-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'animation maker', url: 'https://www.animaker.com/' },
  { name: 'Moovly', image: 'https://picsum.photos/seed/moovly-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'studio editor', url: 'https://www.moovly.com/' },
  { name: 'Vyond', image: 'https://picsum.photos/seed/vyond-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'enterprise video', url: 'https://www.vyond.com/' },
  { name: 'Renderforest', image: 'https://picsum.photos/seed/renderforest-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'branding tools', url: 'https://www.renderforest.com/' },
  { name: 'Biteable', image: 'https://picsum.photos/seed/biteable-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'studio video', url: 'https://biteable.com/' },
  { name: 'WeVideo', image: 'https://picsum.photos/seed/wevideo-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'online video editor', url: 'https://www.wevideo.com/' },
  { name: 'Magisto', image: 'https://picsum.photos/seed/magisto-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'vimeo create', url: 'https://www.magisto.com/' },
  { name: 'Clipchamp', image: 'https://picsum.photos/seed/clipchamp-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'microsoft video', url: 'https://clipchamp.com/' },
  { name: 'Kamua', image: 'https://picsum.photos/seed/kamua-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'automated editing', url: 'https://kamua.com/' },
  { name: 'Type Studio', image: 'https://picsum.photos/seed/typestudio-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'text based video', url: 'https://www.typestudio.co/' },
  { name: 'Wibbitz', image: 'https://picsum.photos/seed/wibbitz-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'automated video creation', url: 'https://www.wibbitz.com/' },
  { name: 'Storykit', image: 'https://picsum.photos/seed/storykit-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video storytelling', url: 'https://www.storykit.io/' },
  { name: 'Genmo', image: 'https://picsum.photos/seed/genmo-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'generative art', url: 'https://www.genmo.ai/' },
  { name: 'Sora', image: 'https://picsum.photos/seed/sora-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'openai video', url: 'https://openai.com/sora' },
  { name: 'Vimeo', image: 'https://picsum.photos/seed/vimeo-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video platform', url: 'https://vimeo.com/' },
  { name: 'DALL-E 3', image: 'https://picsum.photos/seed/dalle3-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'image and video', url: '#' },
  { name: 'Midjourney', image: 'https://picsum.photos/seed/midjourney-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai art video', url: 'https://www.midjourney.com/' },
  { name: 'Visla', image: 'https://picsum.photos/seed/visla-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai video for teams', url: 'https://www.visla.us/' },
  { name: 'Synthesia-alt', image: 'https://picsum.photos/seed/synthesia-alt-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video generation platform', url: 'https://www.synthesia.io/' },
  { name: 'MuseNet', image: 'https://picsum.photos/seed/musenet-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'music video', url: 'https://openai.com/research/musenet' },
  { name: 'Artbreeder', image: 'https://picsum.photos/seed/artbreeder-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'collages video', url: 'https://www.artbreeder.com/' },
  { name: 'RunwayML', image: 'https://picsum.photos/seed/runwayml-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai magic tools', url: 'https://runwayml.com/' },
  { name: 'Papercup', image: 'https://picsum.photos/seed/papercup-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai dubbing', url: 'https://www.papercup.com/' },
  { name: 'Veritone', image: 'https://picsum.photos/seed/veritone-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai operating system', url: 'https://www.veritone.com/' },
  { name: 'Trint', image: 'https://picsum.photos/seed/trint-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'audio transcription', url: 'https://trint.com/' },
  { name: 'Descript', image: 'https://picsum.photos/seed/descript-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'all in one editor', url: 'https://www.descript.com/' },
  { name: 'Simon Says', image: 'https://picsum.photos/seed/simonsays-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'transcription service', url: 'https://www.simonsays.ai/' },
  { name: 'Waymark', image: 'https://picsum.photos/seed/waymark-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'tv commercials', url: 'https://waymark.com/' },
  { name: 'Filmora', image: 'https://picsum.photos/seed/filmora-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'wondershare video editor', url: 'https://filmora.wondershare.com/' },
  { name: 'CapCut', image: 'https://picsum.photos/seed/capcut-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'bytedance video editor', url: 'https://www.capcut.com/' },
  { name: 'Viide.io', image: 'https://picsum.photos/seed/viide-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video platform', url: '#' },
  { name: 'Shuffll', image: 'https://picsum.photos/seed/shuffll-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video creation service', url: 'https://www.shuffll.com/' },
  { name: 'AIVO', image: 'https://picsum.photos/seed/aivo-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai video solutions', url: 'https://aivo.co/' },
  { name: 'Tavus', image: 'https://picsum.photos/seed/tavus-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'personalized video', url: 'https://www.tavus.io/' },
  { name: 'Vidyard', image: 'https://picsum.photos/seed/vidyard-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video for business', url: 'https://www.vidyard.com/' },
  { name: 'Hippo Video', image: 'https://picsum.photos/seed/hippovideo-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video customer experience', url: 'https://www.hippovideo.io/' },
  { name: 'BombBomb', image: 'https://picsum.photos/seed/bombbomb-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video messaging', url: 'https://bombbomb.com/' },
  { name: 'Covideo', image: 'https://picsum.photos/seed/covideo-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video email', url: 'https://www.covideo.com/' },
  { name: 'Loom', image: 'https://picsum.photos/seed/loom-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video messaging for work', url: 'https://www.loom.com/' },
  { name: 'Wistia', image: 'https://picsum.photos/seed/wistia-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video marketing software', url: 'https://wistia.com/' },
  { name: 'SproutVideo', image: 'https://picsum.photos/seed/sproutvideo-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video hosting', url: 'https://sproutvideo.com/' },
  { name: 'Cincopa', image: 'https://picsum.photos/seed/cincopa-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'digital asset management', url: 'https://www.cincopa.com/' },
  { name: 'Kaltura', image: 'https://picsum.photos/seed/kaltura-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video cloud', url: 'https://corp.kaltura.com/' },
  { name: 'Panopto', image: 'https://picsum.photos/seed/panopto-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video management', url: 'https://www.panopto.com/' },
  { name: 'Brightcove', image: 'https://picsum.photos/seed/brightcove-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'online video platform', url: 'https://www.brightcove.com/' },
  { name: 'Dacast', image: 'https://picsum.photos/seed/dacast-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'live streaming', url: 'https://www.dacast.com/' },
  { name: 'JW Player', image: 'https://picsum.photos/seed/jwplayer-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video player', url: 'https://www.jwplayer.com/' },
  { name: 'Flowplayer', image: 'https://picsum.photos/seed/flowplayer-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video solution', url: 'https://flowplayer.com/' },
  { name: 'Video.js', image: 'https://picsum.photos/seed/videojs-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'web video player', url: 'https://videojs.com/' },
  { name: 'Theoplayer', image: 'https://picsum.photos/seed/theoplayer-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'html5 video', url: 'https://www.theoplayer.com/' },
  { name: 'Aftershoot', image: 'https://picsum.photos/seed/aftershoot-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'culling software', url: 'https://aftershoot.com/' },
  { name: 'Topaz Video AI', image: 'https://picsum.photos/seed/topazvideo-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video enhancement', url: 'https://www.topazlabs.com/topaz-video-ai' },
  { name: 'AVCLabs', image: 'https://picsum.photos/seed/avclabs-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video enhancer', url: 'https://avclabs.com/' },
  { name: 'HitPaw', image: 'https://picsum.photos/seed/hitpaw-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video tools', url: 'https://www.hitpaw.com/' },
  { name: 'Pixop', image: 'https://picsum.photos/seed/pixop-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video remastering', url: 'https://www.pixop.com/' },
  { name: 'Neural.love', image: 'https://picsum.photos/seed/neurallove-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai image generator', url: 'https://neural.love/' },
  { name: 'Colourlab.ai', image: 'https://picsum.photos/seed/colourlab-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'color grading', url: 'https://colourlab.ai/' },
  { name: 'Timebolt', image: 'https://picsum.photos/seed/timebolt-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'silence removal', url: 'https://www.timebolt.io/' },
  { name: 'Gling', image: 'https://picsum.photos/seed/gling-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'youtube video editor', url: 'https://gling.ai/' },
  { name: 'EbSynth', image: 'https://picsum.photos/seed/ebsynth-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'video synthesis', url: 'https://ebsynth.com/' },
  { name: 'Ssemble', image: 'https://picsum.photos/seed/ssemble-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai video editing', url: 'https://www.ssemble.com/' },
  { name: 'Plask', image: 'https://picsum.photos/seed/plask-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'motion capture', url: 'https://plask.ai/' },
  { name: 'DeepMotion', image: 'https://picsum.photos/seed/deepmotion-video/300/200', isTrending: false, category: 'Video', dataAiHint: '3d animation', url: 'https://www.deepmotion.com/' },
  { name: 'Rokoko', image: 'https://picsum.photos/seed/rokoko-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'motion capture suit', url: 'https://www.rokoko.com/' },
  { name: 'Move.ai', image: 'https://picsum.photos/seed/moveai-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'markerless mocap', url: 'https://www.move.ai/' },
  { name: 'Wonder Dynamics', image: 'https://picsum.photos/seed/wonderdynamics-video/300/200', isTrending: false, category: 'Video', dataAiHint: 'ai animation', url: 'https://wonderdynamics.com/' },
];

export const textToSpeechTools: Tool[] = [
    { name: 'Murf.ai', image: 'https://picsum.photos/seed/murf/300/200', isTrending: true, category: 'Text', dataAiHint: 'ai voice', url: 'https://murf.ai/' },
    { name: 'ElevenLabs', image: 'https://picsum.photos/seed/elevenlabs/300/200', isTrending: true, category: 'Text', dataAiHint: 'voice generator', url: 'https://elevenlabs.io/' },
    { name: 'Lovo.ai', image: 'https://picsum.photos/seed/lovo/300/200', isTrending: true, category: 'Text', dataAiHint: 'ai voiceover', url: 'https://lovo.ai/' },
    { name: 'Speechify', image: 'https://picsum.photos/seed/speechify/300/200', isTrending: true, category: 'Text', dataAiHint: 'reading assistant', url: 'https://speechify.com/' },
    { name: 'Play.ht', image: 'https://picsum.photos/seed/playht/300/200', isTrending: true, category: 'Text', dataAiHint: 'tts audio', url: 'https://play.ht/' },
    { name: 'Resemble.ai', image: 'https://picsum.photos/seed/resemble/300/200', isTrending: false, category: 'Text', dataAiHint: 'voice cloning', url: 'https://www.resemble.ai/' },
    { name: 'WellSaid Labs', image: 'https://picsum.photos/seed/wellsaid/300/200', isTrending: false, category: 'Text', dataAiHint: 'professional voice', url: 'https://wellsaidlabs.com/' },
    { name: 'Descript', image: 'https://picsum.photos/seed/descript-tts/300/200', isTrending: false, category: 'Text', dataAiHint: 'audio editor', url: 'https://www.descript.com/' },
    { name: 'Synthesys', image: 'https://picsum.photos/seed/synthesys/300/200', isTrending: false, category: 'Text', dataAiHint: 'ai video', url: 'https://synthesys.io/' },
    { name: 'NaturalReader', image: 'https://picsum.photos/seed/naturalreader/300/200', isTrending: false, category: 'Text', dataAiHint: 'read aloud', url: 'https://www.naturalreaders.com/' },
    { name: 'Amazon Polly', image: 'https://picsum.photos/seed/polly/300/200', isTrending: false, category: 'Text', dataAiHint: 'aws tts', url: 'https://aws.amazon.com/polly/' },
    { name: 'Google Cloud TTS', image: 'https://picsum.photos/seed/google-tts/300/200', isTrending: false, category: 'Text', dataAiHint: 'google voice', url: 'https://cloud.google.com/text-to-speech' },
    { name: 'Microsoft Azure TTS', image: 'https://picsum.photos/seed/azure-tts/300/200', isTrending: false, category: 'Text', dataAiHint: 'azure voice', url: 'https://azure.microsoft.com/en-us/products/cognitive-services/text-to-speech/' },
    { name: 'Listnr', image: 'https://picsum.photos/seed/listnr/300/200', isTrending: false, category: 'Text', dataAiHint: 'voice generator', url: 'https://www.listnr.tech/' },
    { name: 'Notevibes', image: 'https://picsum.photos/seed/notevibes/300/200', isTrending: false, category: 'Text', dataAiHint: 'realistic voices', url: 'https://notevibes.com/' },
];

export const voiceCloningTools: Tool[] = [
  { name: 'ElevenLabs', image: 'https://picsum.photos/seed/elevenlabs-vc/300/200', isTrending: true, category: 'Voice Cloning', dataAiHint: 'voice cloning api', url: 'https://elevenlabs.io/' },
  { name: 'Resemble.ai', image: 'https://picsum.photos/seed/resemble-vc/300/200', isTrending: true, category: 'Voice Cloning', dataAiHint: 'ai voice generator', url: 'https://www.resemble.ai/' },
  { name: 'Descript', image: 'https://picsum.photos/seed/descript-vc/300/200', isTrending: true, category: 'Voice Cloning', dataAiHint: 'overdub voice', url: 'https://www.descript.com/' },
  { name: 'Play.ht', image: 'https://picsum.photos/seed/playht-vc/300/200', isTrending: true, category: 'Voice Cloning', dataAiHint: 'ai voice cloning', url: 'https://play.ht/' },
  { name: 'Murf.ai', image: 'https://picsum.photos/seed/murf-vc/300/200', isTrending: true, category: 'Voice Cloning', dataAiHint: 'voice changer', url: 'https://murf.ai/' },
  { name: 'Lovo.ai', image: 'https://picsum.photos/seed/lovo-vc/300/200', isTrending: true, category: 'Voice Cloning', dataAiHint: 'genny voice', url: 'https://lovo.ai/' },
  { name: 'Speechify', image: 'https://picsum.photos/seed/speechify-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'custom voices', url: 'https://speechify.com/voice-cloning/' },
  { name: 'Coqui', image: 'https://picsum.photos/seed/coqui-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'open source tts', url: 'https://coqui.ai/' },
  { name: 'Respeecher', image: 'https://picsum.photos/seed/respeecher-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'voice marketplace', url: 'https://www.respeecher.com/' },
  { name: 'Voicery', image: 'https://picsum.photos/seed/voicery-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'real-time voice', url: '#' },
  { name: 'Readspeaker', image: 'https://picsum.photos/seed/readspeaker-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'custom voice', url: 'https://www.readspeaker.com/solutions/custom-voices/' },
  { name: 'Veritone', image: 'https://picsum.photos/seed/veritone-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'marvel ai', url: 'https://www.veritone.com/applications/marvel-ai/' },
  { name: 'Altered', image: 'https://picsum.photos/seed/altered-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'voice editor', url: 'https://www.altered.ai/' },
  { name: 'Mycroft', image: 'https://picsum.photos/seed/mycroft-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'personal voice', url: 'https://mycroft.ai/mimic-3/' },
  { name: 'VocalID', image: 'https://picsum.photos/seed/vocalid-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'personalized digital voice', url: 'https://vocalid.ai/' },
  { name: 'CereProc', image: 'https://picsum.photos/seed/cereproc-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'voice creation', url: 'https://www.cereproc.com/' },
  { name: 'Acapela Group', image: 'https://picsum.photos/seed/acapela-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'my-own-voice', url: 'https://www.acapela-group.com/solutions/my-own-voice/' },
  { name: 'iSpeech', image: 'https://picsum.photos/seed/ispeech-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'voice cloning service', url: 'https://www.ispeech.org/voice-cloning' },
  { name: 'Voctro Labs', image: 'https://picsum.photos/seed/voctro-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'singing voice', url: 'https://www.voctrolabs.com/' },
  { name: 'Lyrebird', image: 'https://picsum.photos/seed/lyrebird-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'descript voice', url: '#' },
  { name: 'Voice-Cloner.com', image: 'https://picsum.photos/seed/voicecloner-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'online voice clone', url: '#' },
  { name: 'Voice.ai', image: 'https://picsum.photos/seed/voiceai-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'real time voice changer', url: 'https://voice.ai/' },
  { name: 'The Voice Keeper', image: 'https://picsum.photos/seed/voicekeeper-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'voice banking', url: 'https://www.thevoicekeeper.com/' },
  { name: 'Voicebooking', image: 'https://picsum.photos/seed/voicebooking-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'ai voice generator', url: 'https://voicebooking.com/en/ai-voice-generator/' },
  { name: 'Kits.ai', image: 'https://picsum.photos/seed/kitsai-vc/300/200', isTrending: false, category: 'Voice Cloning', dataAiHint: 'ai voice tools', url: 'https://www.kits.ai/' },
];

export const aiAvatarTools: Tool[] = [
  { name: 'Lensa AI', image: 'https://picsum.photos/seed/lensa-av/300/200', isTrending: true, category: 'AI Avatar', dataAiHint: 'magic avatars', url: 'https://prisma-ai.com/lensa' },
  { name: 'Artbreeder', image: 'https://picsum.photos/seed/artbreeder-av/300/200', isTrending: true, category: 'AI Avatar', dataAiHint: 'character creator', url: 'https://www.artbreeder.com/' },
  { name: 'Fotor', image: 'https://picsum.photos/seed/fotor-av/300/200', isTrending: true, category: 'AI Avatar', dataAiHint: 'avatar generator', url: 'https://www.fotor.com/features/ai-avatar-generator/' },
  { name: 'Synthesia', image: 'https://picsum.photos/seed/synthesia-av/300/200', isTrending: true, category: 'AI Avatar', dataAiHint: 'ai video avatars', url: 'https://www.synthesia.io/' },
  { name: 'HeyGen', image: 'https://picsum.photos/seed/heygen-av/300/200', isTrending: true, category: 'AI Avatar', dataAiHint: 'talking avatars', url: 'https://www.heygen.com/' },
  { name: 'D-ID', image: 'https://picsum.photos/seed/did-av/300/200', isTrending: true, category: 'AI Avatar', dataAiHint: 'creative reality', url: 'https://www.d-id.com/' },
  { name: 'Midjourney', image: 'https://picsum.photos/seed/midjourney-av/300/200', isTrending: true, category: 'AI Avatar', dataAiHint: 'ai image art', url: 'https://www.midjourney.com/' },
  { name: 'StarryAI', image: 'https://picsum.photos/seed/starryai-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai art generator', url: 'https://starryai.com/' },
  { name: 'NightCafe', image: 'https://picsum.photos/seed/nightcafe-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'art creator', url: 'https://creator.nightcafe.studio/' },
  { name: 'Picsart', image: 'https://picsum.photos/seed/picsart-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'photo editor avatar', url: 'https://picsart.com/ai-avatar' },
  { name: 'Hypotenuse AI', image: 'https://picsum.photos/seed/hypotenuse-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai art', url: 'https://www.hypotenuse.ai/ai-image-generator' },
  { name: 'ZMO.AI', image: 'https://picsum.photos/seed/zmo-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai designer', url: 'https://www.zmo.ai/' },
  { name: 'Aragon.AI', image: 'https://picsum.photos/seed/aragon-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai headshots', url: 'https://www.aragon.ai/' },
  { name: 'ProfilePicture.AI', image: 'https://picsum.photos/seed/profilepictureai-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'pfp maker', url: 'https://www.profilepicture.ai/' },
  { name: 'In3D', image: 'https://picsum.photos/seed/in3d-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: '3d avatar', url: 'https://in3d.io/' },
  { name: 'Ready Player Me', image: 'https://picsum.photos/seed/readyplayerme-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'metaverse avatar', url: 'https://readyplayer.me/' },
  { name: 'Unreal Engine MetaHuman', image: 'https://picsum.photos/seed/metahuman-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'digital human', url: 'https://www.unrealengine.com/en-US/metahuman' },
  { name: 'Character.ai', image: 'https://picsum.photos/seed/characterai-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai characters', url: 'https://character.ai/' },
  { name: 'FaceApp', image: 'https://picsum.photos/seed/faceapp-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'face editor', url: 'https://www.faceapp.com/' },
  { name: 'Reface', image: 'https://picsum.photos/seed/reface-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'face swap', url: 'https://reface.ai/' },
  { name: 'Hour One', image: 'https://picsum.photos/seed/hourone-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'virtual presenters', url: 'https://hourone.ai/' },
  { name: 'Colossyan', image: 'https://picsum.photos/seed/colossyan-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai video actors', url: 'https://www.colossyan.com/' },
  { name: 'Elai.io', image: 'https://picsum.photos/seed/elai-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'custom avatar', url: 'https://elai.io/' },
  { name: 'Deepbrain AI', image: 'https://picsum.photos/seed/deepbrain-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai studios', url: 'https://www.deepbrain.io/' },
  { name: 'Vidnoz', image: 'https://picsum.photos/seed/vidnoz-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'free ai avatar', url: 'https://www.vidnoz.com/ai-avatar-generator.html' },
  { name: 'Media.io', image: 'https://picsum.photos/seed/mediaio-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'online avatar', url: 'https://www.media.io/ai-avatar-generator.html' },
  { name: 'Veed.io', image: 'https://picsum.photos/seed/veedio-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'avatar generator video', url: 'https://www.veed.io/tools/ai-avatar-generator' },
  { name: 'Canva', image: 'https://picsum.photos/seed/canva-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'magic avatar', url: 'https://www.canva.com/features/ai-avatar-generator/' },
  { name: 'Lightricks', image: 'https://picsum.photos/seed/lightricks-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'photoleap avatar', url: 'https://www.lightricks.com/' },
  { name: 'Simplified', image: 'https://picsum.photos/seed/simplified-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai generator', url: 'https://simplified.com/ai-avatar-generator/' },
  { name: 'Appy Pie', image: 'https://picsum.photos/seed/appypie-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'no code avatar', url: 'https://www.appypie.com/design/ai-avatar-generator' },
  { name: 'Animaze', image: 'https://picsum.photos/seed/animaze-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'vtuber avatar', url: 'https://www.animaze.us/' },
  { name: 'VRChat', image: 'https://picsum.photos/seed/vrchat-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'vr avatars', url: 'https://hello.vrchat.com/' },
  { name: 'Artflow', image: 'https://picsum.photos/seed/artflow-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'animated stories', url: 'https://www.artflow.ai/' },
  { name: 'Genies', image: 'https://picsum.photos/seed/genies-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'celebrity avatars', url: 'https://genies.com/' },
  { name: 'Union Avatars', image: 'https://picsum.photos/seed/union-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'realistic avatars', url: 'https://unionavatars.com/' },
  { name: 'Hoomano', image: 'https://picsum.photos/seed/hoomano-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'emotional avatars', url: '#' },
  { name: 'Soul Machines', image: 'https://picsum.photos/seed/soulmachines-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'digital people', url: 'https://www.soulmachines.com/' },
  { name: 'Uneeq', image: 'https://picsum.photos/seed/uneeq-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'digital humans', url: 'https://www.uneeq.com/' },
  { name: 'Virsona', image: 'https://picsum.photos/seed/virsona-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai personality', url: '#' },
  { name: 'Crypko', image: 'https://picsum.photos/seed/crypko-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'anime character', url: 'https://crypko.ai/' },
  { name: 'Waifulabs', image: 'https://picsum.photos/seed/waifulabs-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'anime girl', url: 'https://waifulabs.com/' },
  { name: 'This Person Does Not Exist', image: 'https://picsum.photos/seed/thispersondoesnotexist-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'generated faces', url: 'https://this-person-does-not-exist.com/en' },
  { name: 'Bored Humans', image: 'https://picsum.photos/seed/boredhumans-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'fake person', url: 'https://boredhumans.com/faces.php' },
  { name: 'Generated Photos', image: 'https://picsum.photos/seed/generatedphotos-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'model photos', url: 'https://generated.photos/' },
  { name: 'PhotoRoom', image: 'https://picsum.photos/seed/photoroom-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'background remover', url: 'https://www.photoroom.com/ai-avatar-generator' },
  { name: 'FaceMagic', image: 'https://picsum.photos/seed/facemagic-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'face swap app', url: '#' },
  { name: 'Posed', image: 'https://picsum.photos/seed/posed-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai photos', url: 'https://www.posed.ai/' },
  { name: 'AutoPortrait', image: 'https://picsum.photos/seed/autoportrait-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai portraits', url: 'https://autoprtrt.com/' },
  { name: 'Dreamwave', image: 'https://picsum.photos/seed/dreamwave-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'ai photoshoots', url: 'https://www.dreamwave.ai/' },
  { name: 'ProPhotos', image: 'https://picsum.photos/seed/prophotos-av/300/200', isTrending: false, category: 'AI Avatar', dataAiHint: 'professional headshots', url: 'https://www.prophotos.ai/' },
];

export const textToImageTools: Tool[] = [
    { name: 'Midjourney', image: 'https://picsum.photos/seed/midjourney-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'generative art', url: 'https://www.midjourney.com/' },
    { name: 'DALL-E 3', image: 'https://picsum.photos/seed/dalle3-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'ai image openai', url: 'https://openai.com/dall-e-3' },
    { name: 'Stable Diffusion', image: 'https://picsum.photos/seed/stablediffusion-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'open source image', url: 'https://stablediffusionweb.com/' },
    { name: 'Leonardo Ai', image: 'https://picsum.photos/seed/leonardo-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'game assets', url: 'https://leonardo.ai/' },
    { name: 'NightCafe', image: 'https://picsum.photos/seed/nightcafe-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'art generator', url: 'https://creator.nightcafe.studio/' },
    { name: 'Artbreeder', image: 'https://picsum.photos/seed/artbreeder-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'image collage', url: 'https://www.artbreeder.com/' },
    { name: 'Runway', image: 'https://picsum.photos/seed/runway-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'ai magic tools', url: 'https://runwayml.com/' },
    { name: 'DeepAI', image: 'https://picsum.photos/seed/deepai-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai generator suite', url: 'https://deepai.org/' },
    { name: 'Fotor', image: 'https://picsum.photos/seed/fotor-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'photo editor ai', url: 'https://www.fotor.com/features/ai-image-generator/' },
    { name: 'Canva', image: 'https://picsum.photos/seed/canva-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'design tool', url: 'https://www.canva.com/features/ai-image-generator/' },
    { name: 'Bing Image Creator', image: 'https://picsum.photos/seed/bing-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'microsoft ai image', url: 'https://www.bing.com/images/create' },
    { name: 'DreamStudio', image: 'https://picsum.photos/seed/dreamstudio-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stability ai', url: 'https://dreamstudio.ai/' },
    { name: 'StarryAI', image: 'https://picsum.photos/seed/starryai-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art app', url: 'https://starryai.com/' },
    { name: 'WOMBO Dream', image: 'https://picsum.photos/seed/wombo-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art app', url: 'https://dream.ai/' },
    { name: 'Craiyon', image: 'https://picsum.photos/seed/craiyon-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'free ai image', url: 'https://www.craiyon.com/' },
    { name: 'Picsart', image: 'https://picsum.photos/seed/picsart-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'photo editor', url: 'https://picsart.com/ai-image-generator' },
    { name: 'Deep Dream Generator', image: 'https://picsum.photos/seed/deepdream-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'psychedelic art', url: 'https://deepdreamgenerator.com/' },
    { name: 'Jasper Art', image: 'https://picsum.photos/seed/jasper-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai copywriter art', url: 'https://www.jasper.ai/art' },
    { name: 'Hypotenuse AI', image: 'https://picsum.photos/seed/hypotenuse-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai writing art', url: 'https://www.hypotenuse.ai/ai-image-generator' },
    { name: 'Simplified', image: 'https://picsum.photos/seed/simplified-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'design platform', url: 'https://simplified.com/ai-image-generator/' },
    { name: 'Playground AI', image: 'https://picsum.photos/seed/playground-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'online image editor', url: 'https://playground.com/' },
    { name: 'Vistacreate', image: 'https://picsum.photos/seed/vistacreate-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'design templates', url: 'https://create.vista.com/features/ai-image-generator/' },
    { name: 'Photosonic', image: 'https://picsum.photos/seed/photosonic-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'writesonic image', url: 'https://photosonic.writesonic.com/' },
    { name: 'Generated Photos', image: 'https://picsum.photos/seed/generatedphotos-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai faces', url: 'https://generated.photos/' },
    { name: 'ArtSmart', image: 'https://picsum.photos/seed/artsmart-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image tools', url: 'https://artsmart.ai/' },
    { name: 'CF Spark Art', image: 'https://picsum.photos/seed/cfspark-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'creative fabrica', url: 'https://www.creativefabrica.com/spark/art/' },
    { name: 'Dezgo', image: 'https://picsum.photos/seed/dezgo-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'free stable diffusion', url: 'https://dezgo.com/' },
    { name: 'Getimg.ai', image: 'https://picsum.photos/seed/getimg-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image suite', url: 'https://getimg.ai/' },
    { name: 'Hotpot.ai', image: 'https://picsum.photos/seed/hotpot-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai graphics', url: 'https://hotpot.ai/art-generator' },
    { name: 'Imagine with Meta AI', image: 'https://picsum.photos/seed/meta-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'facebook ai', url: 'https://imagine.meta.com/' },
    { name: 'Lexica', image: 'https://picsum.photos/seed/lexica-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stable diffusion search', url: 'https://lexica.art/' },
    { name: 'Mage.space', image: 'https://picsum.photos/seed/mage-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'free ai image', url: 'https://www.mage.space/' },
    { name: 'Neural.love', image: 'https://picsum.photos/seed/neurallove-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art enhancer', url: 'https://neural.love/' },
    { name: 'OpenArt', image: 'https://picsum.photos/seed/openart-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image platform', url: 'https://openart.ai/' },
    { name: 'Patience', image: 'https://picsum.photos/seed/patience-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stable diffusion app', url: '#' },
    { name: 'Pixelz.ai', image: 'https://picsum.photos/seed/pixelz-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art generator', url: 'https://pixelz.ai/' },
    { name: 'Pollinations', image: 'https://picsum.photos/seed/pollinations-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'generative ecosystem', url: 'https://pollinations.ai/' },
    { name: 'Prompthero', image: 'https://picsum.photos/seed/prompthero-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai prompt search', url: 'https://prompthero.com/' },
    { name: 'RenderNet', image: 'https://picsum.photos/seed/rendernet-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image service', url: '#' },
    { name: 'SeaArt.ai', image: 'https://picsum.photos/seed/seaart-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'free ai art', url: 'https://www.seaart.ai/' },
    { name: 'Shutterstock AI', image: 'https://picsum.photos/seed/shutterstock-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stock photo ai', url: 'https://www.shutterstock.com/generate' },
    { name: 'Snowpixel', image: 'https://picsum.photos/seed/snowpixel-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art app', url: 'https://snowpixel.app/' },
    { name: 'Stablecog', image: 'https://picsum.photos/seed/stablecog-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'free stable diffusion', url: 'https://stablecog.com/' },
    { name: 'Tensor.Art', image: 'https://picsum.photos/seed/tensorart-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stable diffusion models', url: 'https://tensor.art/' },
    { name: 'Tome', image: 'https://picsum.photos/seed/tome-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai storytelling', url: 'https://tome.app/' },
    { name: 'Visualise.ai', image: 'https://picsum.photos/seed/visualise-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image creation', url: 'https://visualise.ai/' },
    { name: 'Zizoto', image: 'https://picsum.photos/seed/zizoto-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image generator', url: 'https://zizoto.com/' },
    { name: 'Astria.ai', image: 'https://picsum.photos/seed/astria-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image api', url: 'https://www.astria.ai/' },
    { name: 'Clipdrop', image: 'https://picsum.photos/seed/clipdrop-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stability ai apps', url: 'https://clipdrop.co/' },
    { name: 'DeepFloyd IF', image: 'https://picsum.photos/seed/deepfloyd-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'text understanding', url: 'https://github.com/deep-floyd/IF' },
    { name: 'DiffusionBee', image: 'https://picsum.photos/seed/diffusionbee-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stable diffusion mac', url: 'https://diffusionbee.com/' },
    { name: 'Draw Things', image: 'https://picsum.photos/seed/drawthings-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stable diffusion ios', url: 'https://drawthings.ai/' },
    { name: 'Gencraft', image: 'https://picsum.photos/seed/gencraft-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art engine', url: 'https://gencraft.com/' },
    { name: 'Ideo-gram', image: 'https://picsum.photos/seed/ideogram-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'ai typography', url: 'https://ideogram.ai/' },
    { name: 'KREA', image: 'https://picsum.photos/seed/krea-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'real-time ai', url: 'https://www.krea.ai/' },
    { name: 'Looka', image: 'https://picsum.photos/seed/looka-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai logo maker', url: 'https://looka.com/' },
    { name: 'Novita.ai', image: 'https://picsum.photos/seed/novita-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai generation api', url: 'https://novita.ai/' },
    { name: 'Picfinder', image: 'https://picsum.photos/seed/picfinder-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image search', url: 'https://picfinder.ai/' },
    { name: 'Poe', image: 'https://picsum.photos/seed/poe-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'fast ai chat', url: 'https://poe.com/' },
    { name: 'Pro-dia', image: 'https://picsum.photos/seed/prodia-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stable diffusion api', url: 'https://prodia.com/' },
    { name: 'Re-imagine', image: 'https://picsum.photos/seed/reimagine-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image generator', url: '#' },
    { name: 'Scribble Diffusion', image: 'https://picsum.photos/seed/scribblediffusion-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'sketch to image', url: 'https://scribblediffusion.com/' },
    { name: 'SoulGen', image: 'https://picsum.photos/seed/soulgen-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai anime generator', url: 'https://www.soulgen.ai/' },
    { name: 'Vizcom', image: 'https://picsum.photos/seed/vizcom-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'industrial design', url: 'https://www.vizcom.ai/' },
    { name: 'Voilà AI', image: 'https://picsum.photos/seed/voila-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'browser assistant', url: 'https://www.getvoila.ai/' },
    { name: 'Artify', image: 'https://picsum.photos/seed/artify-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image generator', url: 'https://artify.co/' },
    { name: 'AI Picasso', image: 'https://picsum.photos/seed/aipicasso-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art maker', url: 'https://aipicasso.io/' },
    { name: 'BlueWillow', image: 'https://picsum.photos/seed/bluewillow-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'discord ai art', url: 'https://www.bluewillow.ai/' },
    { name: 'Civitai', image: 'https://picsum.photos/seed/civitai-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art models', url: 'https://civitai.com/' },
    { name: 'Dreamlike.art', image: 'https://picsum.photos/seed/dreamlike-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art tools', url: 'https://dreamlike.art/' },
    { name: 'GoCharlie', image: 'https://picsum.photos/seed/gocharlie-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai content creation', url: 'https://gocharlie.ai/' },
    { name: 'Img2Go', image: 'https://picsum.photos/seed/img2go-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'online image editor', url: 'https://www.img2go.com/' },
    { name: 'Kandinsky', image: 'https://picsum.photos/seed/kandinsky-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai model', url: '#' },
    { name: 'LimeWire', image: 'https://picsum.photos/seed/limewire-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai studio', url: 'https://limewire.com/' },
    { name: 'Magnific', image: 'https://picsum.photos/seed/magnific-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai upscaler', url: 'https://magnific.ai/' },
    { name: 'OpenDream', image: 'https://picsum.photos/seed/opendream-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art generator', url: 'https://opendream.ai/' },
    { name: 'PicSo', image: 'https://picsum.photos/seed/picso-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art creator', url: 'https://picso.ai/' },
    { name: 'Pinegraph', image: 'https://picsum.photos/seed/pinegraph-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai graphic design', url: 'https://pinegraph.com/' },
    { name: 'PixAI.Art', image: 'https://picsum.photos/seed/pixai-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'anime art generator', url: 'https://pixai.art/' },
    { name: 'RocketAI', image: 'https://picsum.photos/seed/rocketai-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai design tool', url: 'https://www.rocketai.io/' },
    { name: 'Stockimg.ai', image: 'https://picsum.photos/seed/stockimg-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai stock photos', url: 'https://stockimg.ai/' },
    { name: 'Stylar', image: 'https://picsum.photos/seed/stylar-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai photo editor', url: 'https://www.stylar.ai/' },
    { name: 'Supermachine', image: 'https://picsum.photos/seed/supermachine-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art generator', url: 'https://supermachine.art/' },
    { name: 'Synthesys X', image: 'https://picsum.photos/seed/synthesysx-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai content suite', url: '#' },
    { name: 'Adobe Firefly', image: 'https://picsum.photos/seed/firefly-t2i/300/200', isTrending: true, category: 'Text to Image', dataAiHint: 'adobe generative ai', url: 'https://firefly.adobe.com/' },
    { name: 'Freepik AI', image: 'https://picsum.photos/seed/freepik-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image generator', url: 'https://www.freepik.com/ai/image-generator' },
    { name: 'iStock AI', image: 'https://picsum.photos/seed/istock-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'getty images ai', url: 'https://www.istockphoto.com/ai-image-generator' },
    { name: 'Imgcreator', image: 'https://picsum.photos/seed/imgcreator-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image creator', url: 'https://imgcreator.ai/' },
    { name: 'Imagine.art', image: 'https://picsum.photos/seed/imagineart-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art generator', url: 'https://www.imagine.art/' },
    { name: 'InvokeAI', image: 'https://picsum.photos/seed/invokeai-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stable diffusion toolkit', url: 'https://www.invoke.com/' },
    { name: 'Luma AI', image: 'https://picsum.photos/seed/lumaai-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: '3d capture', url: 'https://lumalabs.ai/' },
    { name: 'Midjourney v6', image: 'https://picsum.photos/seed/midjourneyv6-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai image model', url: '#' },
    { name: 'Pixa', image: 'https://picsum.photos/seed/pixa-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai art community', url: '#' },
    { name: 'Promethean AI', image: 'https://picsum.photos/seed/promethean-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'game development ai', url: 'https://www.prometheanai.com/' },
    { name: 'Recraft', image: 'https://picsum.photos/seed/recraft-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'vector art ai', url: 'https://www.recraft.ai/' },
    { name: 'RunDiffusion', image: 'https://picsum.photos/seed/rundiffusion-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stable diffusion cloud', url: 'https://rundiffusion.com/' },
    { name: 'Sinkin.ai', image: 'https://picsum.photos/seed/sinkin-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stable diffusion models', url: 'https://sinkin.ai/' },
    { name: 'Stable UI', image: 'https://picsum.photos/seed/stableui-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stable diffusion gui', url: '#' },
    { name: 'Think Diffusion', image: 'https://picsum.photos/seed/thinkdiffusion-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'stable diffusion cloud', url: 'https://www.thinkdiffusion.com/' },
    { name: 'Tiamat', image: 'https://picsum.photos/seed/tiamat-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai game textures', url: 'https://tiamat.world/' },
    { name: 'Tricycle', image: 'https://picsum.photos/seed/tricycle-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai design tool', url: '#' },
    { name: 'Unbound', image: 'https://picsum.photos/seed/unbound-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai creative suite', url: 'https://www.unboundml.com/' },
    { name: 'Vana', image: 'https://picsum.photos/seed/vana-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai portrait', url: 'https://www.vana.com/' },
    { name: 'Vectorspace AI', image: 'https://picsum.photos/seed/vectorspace-t2i/300/200', isTrending: false, category: 'Text to Image', dataAiHint: 'ai data analysis', url: 'https://vectorspace.ai/' },
];

export const toolCategories = [
    { name: 'All', icon: 'LayoutGrid', color: 'bg-primary text-primary-foreground' },
    { name: 'Img2vid', icon: 'ImageIcon', gradient: 'bg-gradient-to-br from-pink-400 to-rose-400' },
    { name: 'Txt2vid', icon: 'Video', gradient: 'bg-gradient-to-br from-sky-400 to-blue-400' },
    { name: 'Text to Speech', icon: 'Text', gradient: 'bg-gradient-to-br from-teal-400 to-emerald-400' },
    { name: 'Text to Image', icon: 'ImageDown', gradient: 'bg-gradient-to-br from-orange-400 to-amber-400' },
    { name: 'Voice Cloning', icon: 'Voicemail', gradient: 'bg-gradient-to-br from-purple-400 to-indigo-400' },
    { name: 'AI Avatar', icon: 'UserSquare', gradient: 'bg-gradient-to-br from-yellow-400 to-amber-400' },
];

export const businessToolData: ToolCategory[] = [
  {
    title: "Sales Tools",
    icon: <DollarSign className="w-5 h-5 text-primary"/>,
    tools: [
      // More than 50 tools
    ]
  },
  {
    title: "Customer Support Tools",
    icon: <Users className="w-5 h-5 text-primary"/>,
    tools: [
       // More than 50 tools
    ]
  },
  {
    title: "Productivity & Task Management",
    icon: <ListChecks className="w-5 h-5 text-primary"/>,
    tools: [
       // More than 50 tools
    ]
  },
  {
    title: "Project Management Tools",
    icon: <Briefcase className="w-5 h-5 text-primary"/>,
    tools: [
       // More than 50 tools
    ]
  },
  {
    title: "Finance & Accounting",
    icon: <CreditCard className="w-5 h-5 text-primary"/>,
    tools: [
       // More than 50 tools
    ]
  },
  {
    title: "HR & Hiring Tools",
    icon: <UserCog className="w-5 h-5 text-primary"/>,
    tools: [
      // More than 50 tools
    ]
  },
  {
    title: "Team Collaboration",
    icon: <Users className="w-5 h-5 text-primary"/>,
    tools: [
      // More than 50 tools
    ]
  },
  {
    title: "Communication",
    icon: <MessageSquare className="w-5 h-5 text-primary"/>,
    tools: [
      // More than 50 tools
    ]
  },
  {
    title: "Video Conferencing",
    icon: <Video className="w-5 h-5 text-primary"/>,
    tools: [
      // More than 50 tools
    ]
  },
  {
    title: "Marketing & Advertising",
    icon: <Megaphone className="w-5 h-5 text-primary"/>,
    tools: [
      // More than 50 tools
    ]
  },
  {
    title: "Analytics & Business Intelligence",
    icon: <BarChart className="w-5 h-5 text-primary"/>,
    tools: [
      // More than 50 tools
    ]
  },
  {
    title: "Development & IT",
    icon: <GitBranch className="w-5 h-5 text-primary"/>,
    tools: [
      // More than 50 tools
    ]
  },
  {
    title: "Idea Management",
    icon: <Lightbulb className="w-5 h-5 text-primary"/>,
    tools: [
      // More than 50 tools
    ]
  },
  {
    title: "AI Tools for Business",
    icon: <Cpu className="w-5 h-5 text-primary"/>,
    tools: [
      // More than 50 tools
    ]
  },
];

export const graphicDesignToolData: ToolCategory[] = [
    {
        title: "Logo Design & Branding",
        icon: <Gem className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Looka', description: 'AI-powered logo and brand identity.', url: 'https://looka.com/', image: 'https://picsum.photos/seed/looka/600/400', dataAiHint: 'logo maker', pricing: 'Paid' },
          { name: 'Logo.com', description: 'Generate logos and a brand kit.', url: 'https://logo.com/', image: 'https://picsum.photos/seed/logocom/600/400', dataAiHint: 'brand kit', pricing: 'Freemium' },
          { name: 'Brandmark', description: 'Create a unique, professional logo.', url: 'https://brandmark.io/', image: 'https://picsum.photos/seed/brandmark/600/400', dataAiHint: 'professional logo', pricing: 'Paid' },
          { name: 'Hatchful by Shopify', description: 'Free logo maker for businesses.', url: 'https://hatchful.shopify.com/', image: 'https://picsum.photos/seed/hatchful/600/400', dataAiHint: 'shopify logo', pricing: 'Free' },
          { name: 'Tailor Brands', description: 'AI-powered branding platform.', url: 'https://www.tailorbrands.com/', image: 'https://picsum.photos/seed/tailorbrands/600/400', dataAiHint: 'branding platform', pricing: 'Paid' },
          { name: 'Designhill', description: 'AI logo maker and design marketplace.', url: 'https://www.designhill.com/logo-maker/', image: 'https://picsum.photos/seed/designhill/600/400', dataAiHint: 'design marketplace', pricing: 'Freemium' },
        ]
    },
    {
        title: "Illustration & Drawing",
        icon: <PenTool className="w-5 h-5 text-primary"/>,
        tools: [
            // Tools will be added here
        ]
    },
    {
        title: "Photo Editing & Retouching",
        icon: <ImagePlay className="w-5 h-5 text-primary"/>,
        tools: [
            // Tools will be added here
        ]
    },
    {
        title: "UI/UX Design & Prototyping",
        icon: <LayoutDashboard className="w-5 h-5 text-primary"/>,
        tools: [
            // Tools will be added here
        ]
    },
    {
        title: "Infographics & Data Visualization",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            // Tools will be added here
        ]
    },
    {
        title: "Typography Tools",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            // Tools will be added here
        ]
    },
    {
        title: "Color Palette Generators",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            // Tools will be added here
        ]
    },
    {
        title: "Mockup Generators",
        icon: <Shapes className="w-5 h-5 text-primary"/>,
        tools: [
            // Tools will be added here
        ]
    },
    {
        title: "Asset & Stock Photo Resources",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            // Tools will be added here
        ]
    },
    {
        title: "3D & Motion Graphics",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: [
            // Tools will be added here
        ]
    },
    {
        title: "AI-Powered Design Tools",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
            // Tools will be added here
        ]
    }
];

export const marketingSeoToolData: ToolCategory[] = [];

export const productivityToolData: ToolCategory[] = [];

export const writingToolData: ToolCategory[] = [];

export const codingToolData: ToolCategory[] = [
    {
        title: "Code Editors",
        icon: <PenTool className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Visual Studio Code', url: 'https://code.visualstudio.com/', image: 'https://picsum.photos/seed/vscode/600/400', dataAiHint: 'code editor', pricing: 'Free' },
            { name: 'Sublime Text', url: 'https://www.sublimetext.com/', image: 'https://picsum.photos/seed/sublimetext/600/400', dataAiHint: 'text editor', pricing: 'Paid' },
            { name: 'Atom', url: 'https://atom.io/', image: 'https://picsum.photos/seed/atom/600/400', dataAiHint: 'hackable editor', pricing: 'Free' },
            { name: 'Brackets', url: 'http://brackets.io/', image: 'https://picsum.photos/seed/brackets/600/400', dataAiHint: 'web design', pricing: 'Free' },
            { name: 'Vim', url: 'https://www.vim.org/', image: 'https://picsum.photos/seed/vim/600/400', dataAiHint: 'terminal editor', pricing: 'Free' },
            { name: 'Neovim', url: 'https://neovim.io/', image: 'https://picsum.photos/seed/neovim/600/400', dataAiHint: 'vim fork', pricing: 'Free' },
            { name: 'GNU Emacs', url: 'https://www.gnu.org/software/emacs/', image: 'https://picsum.photos/seed/emacs/600/400', dataAiHint: 'extensible editor', pricing: 'Free' },
            { name: 'Notepad++', url: 'https://notepad-plus-plus.org/', image: 'https://picsum.photos/seed/notepadplusplus/600/400', dataAiHint: 'windows editor', pricing: 'Free' },
            { name: 'TextMate', url: 'https://macromates.com/', image: 'https://picsum.photos/seed/textmate/600/400', dataAiHint: 'macOS editor', pricing: 'Free' },
            { name: 'BBEdit', url: 'https://www.barebones.com/products/bbedit/', image: 'https://picsum.photos/seed/bbedit/600/400', dataAiHint: 'html editor', pricing: 'Paid' },
            { name: 'Geany', url: 'https://www.geany.org/', image: 'https://picsum.photos/seed/geany/600/400', dataAiHint: 'lightweight IDE', pricing: 'Free' },
            { name: 'Kate', url: 'https://kate-editor.org/', image: 'https://picsum.photos/seed/kate/600/400', dataAiHint: 'KDE editor', pricing: 'Free' },
            { name: 'Bluefish', url: 'http://bluefish.openoffice.nl/index.html', image: 'https://picsum.photos/seed/bluefish/600/400', dataAiHint: 'web development', pricing: 'Free' },
            { name: 'Komodo Edit', url: 'https://www.activestate.com/products/komodo-edit/', image: 'https://picsum.photos/seed/komodoedit/600/400', dataAiHint: 'polyglot editor', pricing: 'Free' },
            { name: 'Light Table', url: 'http://lighttable.com/', image: 'https://picsum.photos/seed/lighttable/600/400', dataAiHint: 'interactive ide', pricing: 'Free' },
            { name: 'Zed', url: 'https://zed.dev/', image: 'https://picsum.photos/seed/zededitor/600/400', dataAiHint: 'multiplayer editor', pricing: 'Free' },
            { name: 'Fleet', url: 'https://www.jetbrains.com/fleet/', image: 'https://picsum.photos/seed/fleet/600/400', dataAiHint: 'jetbrains ide', pricing: 'Freemium' },
            { name: 'Nova', url: 'https://nova.app/', image: 'https://picsum.photos/seed/nova/600/400', dataAiHint: 'macOS web editor', pricing: 'Paid' },
            { name: 'Onivim 2', url: 'https://onivim.io/', image: 'https://picsum.photos/seed/onivim2/600/400', dataAiHint: 'modal editor', pricing: 'Paid' },
            { name: 'CudaText', url: 'https://cudatext.github.io/', image: 'https://picsum.photos/seed/cudatext/600/400', dataAiHint: 'cross-platform editor', pricing: 'Free' },
        ]
    },
    {
        title: "Integrated Development Environments (IDEs)",
        icon: <TerminalSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'WebStorm', url: 'https://www.jetbrains.com/webstorm/', image: 'https://picsum.photos/seed/webstorm/600/400', dataAiHint: 'javascript ide', pricing: 'Paid' },
            { name: 'IntelliJ IDEA', url: 'https://www.jetbrains.com/idea/', image: 'https://picsum.photos/seed/intellij/600/400', dataAiHint: 'java ide', pricing: 'Freemium' },
            { name: 'PyCharm', url: 'https://www.jetbrains.com/pycharm/', image: 'https://picsum.photos/seed/pycharm/600/400', dataAiHint: 'python ide', pricing: 'Freemium' },
            { name: 'Visual Studio', url: 'https://visualstudio.microsoft.com/', image: 'https://picsum.photos/seed/visualstudio/600/400', dataAiHint: '.net ide', pricing: 'Freemium' },
            { name: 'Eclipse', url: 'https://www.eclipse.org/', image: 'https://picsum.photos/seed/eclipse/600/400', dataAiHint: 'java ide', pricing: 'Free' },
            { name: 'NetBeans', url: 'https://netbeans.apache.org/', image: 'https://picsum.photos/seed/netbeans/600/400', dataAiHint: 'java ide', pricing: 'Free' },
            { name: 'Xcode', url: 'https://developer.apple.com/xcode/', image: 'https://picsum.photos/seed/xcode/600/400', dataAiHint: 'apple ide', pricing: 'Free' },
            { name: 'Android Studio', url: 'https://developer.android.com/studio', image: 'https://picsum.photos/seed/androidstudio/600/400', dataAiHint: 'android ide', pricing: 'Free' },
            { name: 'PhpStorm', url: 'https://www.jetbrains.com/phpstorm/', image: 'https://picsum.photos/seed/phpstorm/600/400', dataAiHint: 'php ide', pricing: 'Paid' },
            { name: 'RubyMine', url: 'https://www.jetbrains.com/ruby/', image: 'https://picsum.photos/seed/rubymine/600/400', dataAiHint: 'ruby ide', pricing: 'Paid' },
            { name: 'GoLand', url: 'https://www.jetbrains.com/go/', image: 'https://picsum.photos/seed/goland/600/400', dataAiHint: 'go ide', pricing: 'Paid' },
            { name: 'CLion', url: 'https://www.jetbrains.com/clion/', image: 'https://picsum.photos/seed/clion/600/400', dataAiHint: 'c++ ide', pricing: 'Paid' },
            { name: 'Rider', url: 'https://www.jetbrains.com/rider/', image: 'https://picsum.photos/seed/rider/600/400', dataAiHint: 'dotnet ide', pricing: 'Paid' },
            { name: 'AppCode', url: 'https://www.jetbrains.com/objc/', image: 'https://picsum.photos/seed/appcode/600/400', dataAiHint: 'swift ide', pricing: 'Paid' },
            { name: 'DataGrip', url: 'https://www.jetbrains.com/datagrip/', image: 'https://picsum.photos/seed/datagrip/600/400', dataAiHint: 'database ide', pricing: 'Paid' },
            { name: 'Code::Blocks', url: 'http://www.codeblocks.org/', image: 'https://picsum.photos/seed/codeblocks/600/400', dataAiHint: 'c++ ide', pricing: 'Free' },
            { name: 'Dev-C++', url: 'https://www.bloodshed.net/devcpp.html', image: 'https://picsum.photos/seed/devcpp/600/400', dataAiHint: 'c++ ide', pricing: 'Free' },
            { name: 'CodeLite', url: 'https://codelite.org/', image: 'https://picsum.photos/seed/codelite/600/400', dataAiHint: 'c++ ide', pricing: 'Free' },
            { name: 'Spyder', url: 'https://www.spyder-ide.org/', image: 'https://picsum.photos/seed/spyder/600/400', dataAiHint: 'python scientific', pricing: 'Free' },
            { name: 'Thonny', url: 'https://thonny.org/', image: 'https://picsum.photos/seed/thonny/600/400', dataAiHint: 'python beginner', pricing: 'Free' },
            { name: 'Eric Python IDE', url: 'https://eric-ide.python-projects.org/', image: 'https://picsum.photos/seed/ericpython/600/400', dataAiHint: 'python ide', pricing: 'Free' },
            { name: 'Aptana Studio', url: 'http://www.aptana.com/', image: 'https://picsum.photos/seed/aptana/600/400', dataAiHint: 'web ide', pricing: 'Free' },
            { name: 'Zend Studio', url: 'https://www.zend.com/products/zend-studio', image: 'https://picsum.photos/seed/zendstudio/600/400', dataAiHint: 'php ide', pricing: 'Paid' },
            { name: 'KDevelop', url: 'https://www.kdevelop.org/', image: 'https://picsum.photos/seed/kdevelop/600/400', dataAiHint: 'linux ide', pricing: 'Free' },
            { name: 'Anjuta', url: 'http://anjuta.org/', image: 'https://picsum.photos/seed/anjuta/600/400', dataAiHint: 'gnome ide', pricing: 'Free' },
            { name: 'Lazarus', url: 'https://www.lazarus-ide.org/', image: 'https://picsum.photos/seed/lazarus/600/400', dataAiHint: 'pascal ide', pricing: 'Free' },
            { name: 'RAD Studio', url: 'https://www.embarcadero.com/products/rad-studio', image: 'https://picsum.photos/seed/radstudio/600/400', dataAiHint: 'delphi c++', pricing: 'Paid' },
        ]
    },
    {
        title: "Version Control Systems",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Git', url: 'https://git-scm.com/', image: 'https://picsum.photos/seed/git/600/400', dataAiHint: 'vcs tool', pricing: 'Free' },
            { name: 'Subversion (SVN)', url: 'https://subversion.apache.org/', image: 'https://picsum.photos/seed/svn/600/400', dataAiHint: 'centralized vcs', pricing: 'Free' },
            { name: 'Mercurial', url: 'https://www.mercurial-scm.org/', image: 'https://picsum.photos/seed/mercurial/600/400', dataAiHint: 'distributed vcs', pricing: 'Free' },
            { name: 'Bazaar', url: 'http://bazaar.canonical.com/', image: 'https://picsum.photos/seed/bazaar/600/400', dataAiHint: 'distributed vcs', pricing: 'Free' },
            { name: 'Perforce Helix Core', url: 'https://www.perforce.com/products/helix-core', image: 'https://picsum.photos/seed/perforce/600/400', dataAiHint: 'enterprise vcs', pricing: 'Freemium' },
            { name: 'Team Foundation Version Control (TFVC)', url: 'https://docs.microsoft.com/en-us/azure/devops/repos/tfvc/', image: 'https://picsum.photos/seed/tfvc/600/400', dataAiHint: 'azure devops', pricing: 'Paid' },
            { name: 'CVS', url: 'https://www.nongnu.org/cvs/', image: 'https://picsum.photos/seed/cvs/600/400', dataAiHint: 'legacy vcs', pricing: 'Free' },
            { name: 'Plastic SCM', url: 'https://www.plasticscm.com/', image: 'https://picsum.photos/seed/plasticscm/600/400', dataAiHint: 'game dev vcs', pricing: 'Freemium' },
        ]
    },
    {
        title: "Source Code Hosting Platforms",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GitHub', url: 'https://github.com/', image: 'https://picsum.photos/seed/github/600/400', dataAiHint: 'code hosting', pricing: 'Freemium' },
            { name: 'GitLab', url: 'https://gitlab.com/', image: 'https://picsum.photos/seed/gitlab/600/400', dataAiHint: 'devops platform', pricing: 'Freemium' },
            { name: 'Bitbucket', url: 'https://bitbucket.org/', image: 'https://picsum.photos/seed/bitbucket/600/400', dataAiHint: 'atlassian git', pricing: 'Freemium' },
            { name: 'Azure Repos', url: 'https://azure.microsoft.com/en-us/services/devops/repos/', image: 'https://picsum.photos/seed/azurerepos/600/400', dataAiHint: 'azure git', pricing: 'Freemium' },
            { name: 'SourceForge', url: 'https://sourceforge.net/', image: 'https://picsum.photos/seed/sourceforge/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'AWS CodeCommit', url: 'https://aws.amazon.com/codecommit/', image: 'https://picsum.photos/seed/codecommit/600/400', dataAiHint: 'aws git', pricing: 'Freemium' },
            { name: 'Gitea', url: 'https://gitea.io/', image: 'https://picsum.photos/seed/gitea/600/400', dataAiHint: 'self-hosted git', pricing: 'Free' },
            { name: 'Gogs', url: 'https://gogs.io/', image: 'https://picsum.photos/seed/gogs/600/400', dataAiHint: 'lightweight git', pricing: 'Free' },
            { name: 'Phabricator', url: 'https://www.phacility.com/phabricator/', image: 'https://picsum.photos/seed/phabricator/600/400', dataAiHint: 'code review', pricing: 'Free' },
            { name: 'Launchpad', url: 'https://launchpad.net/', image: 'https://picsum.photos/seed/launchpad/600/400', dataAiHint: 'ubuntu development', pricing: 'Free' },
        ]
    },
    {
        title: "Continuous Integration (CI) Tools",
        icon: <RotateCw className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'Jenkins', url: 'https://www.jenkins.io/', image: 'https://picsum.photos/seed/jenkins/600/400', dataAiHint: 'ci server', pricing: 'Free' },
             { name: 'Travis CI', url: 'https://www.travis-ci.com/', image: 'https://picsum.photos/seed/travisci/600/400', dataAiHint: 'hosted ci', pricing: 'Freemium' },
             { name: 'CircleCI', url: 'https://circleci.com/', image: 'https://picsum.photos/seed/circleci/600/400', dataAiHint: 'ci cd platform', pricing: 'Freemium' },
             { name: 'GitLab CI/CD', url: 'https://docs.gitlab.com/ee/ci/', image: 'https://picsum.photos/seed/gitlabci/600/400', dataAiHint: 'integrated ci', pricing: 'Freemium' },
             { name: 'GitHub Actions', url: 'https://github.com/features/actions', image: 'https://picsum.photos/seed/githubactions/600/400', dataAiHint: 'workflow automation', pricing: 'Freemium' },
             { name: 'TeamCity', url: 'https://www.jetbrains.com/teamcity/', image: 'https://picsum.photos/seed/teamcity/600/400', dataAiHint: 'jetbrains ci', pricing: 'Freemium' },
             { name: 'Bamboo', url: 'https://www.atlassian.com/software/bamboo', image: 'https://picsum.photos/seed/bamboo/600/400', dataAiHint: 'atlassian ci', pricing: 'Paid' },
             { name: 'Azure Pipelines', url: 'https://azure.microsoft.com/en-us/services/devops/pipelines/', image: 'https://picsum.photos/seed/azurepipelines/600/400', dataAiHint: 'azure ci', pricing: 'Freemium' },
             { name: 'AWS CodeBuild', url: 'https://aws.amazon.com/codebuild/', image: 'https://picsum.photos/seed/codebuild/600/400', dataAiHint: 'aws ci', pricing: 'Paid' },
             { name: 'Google Cloud Build', url: 'https://cloud.google.com/build', image: 'https://picsum.photos/seed/gcpbuild/600/400', dataAiHint: 'gcp ci', pricing: 'Paid' },
             { name: 'Drone', url: 'https://www.drone.io/', image: 'https://picsum.photos/seed/drone/600/400', dataAiHint: 'container native', pricing: 'Freemium' },
             { name: 'Concourse', url: 'https://concourse-ci.org/', image: 'https://picsum.photos/seed/concourse/600/400', dataAiHint: 'automation system', pricing: 'Free' },
             { name: 'Buildkite', url: 'https://buildkite.com/', image: 'https://picsum.photos/seed/buildkite/600/400', dataAiHint: 'hybrid ci', pricing: 'Paid' },
             { name: 'Semaphore', url: 'https://semaphoreci.com/', image: 'https://picsum.photos/seed/semaphore/600/400', dataAiHint: 'fast ci cd', pricing: 'Paid' },
             { name: 'GoCD', url: 'https://www.gocd.org/', image: 'https://picsum.photos/seed/gocd/600/400', dataAiHint: 'open source cd', pricing: 'Free' },
             { name: 'Buddy', url: 'https://buddy.works/', image: 'https://picsum.photos/seed/buddy/600/400', dataAiHint: 'devops automation', pricing: 'Freemium' },
             { name: 'AppVeyor', url: 'https://www.appveyor.com/', image: 'https://picsum.photos/seed/appveyor/600/400', dataAiHint: 'windows ci', pricing: 'Freemium' },
             { name: 'Wercker', url: 'https://www.wercker.com/', image: 'https://picsum.photos/seed/wercker/600/400', dataAiHint: 'docker native', pricing: 'Paid' },
             { name: 'Bitrise', url: 'https://www.bitrise.io/', image: 'https://picsum.photos/seed/bitrise/600/400', dataAiHint: 'mobile ci', pricing: 'Freemium' },
        ]
    },
     {
        title: "Continuous Deployment (CD) Tools",
        icon: <UploadCloud className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Argo CD', url: 'https://argoproj.github.io/cd/', image: 'https://picsum.photos/seed/argocd/600/400', dataAiHint: 'declarative gitops', pricing: 'Free' },
            { name: 'Flux', url: 'https://fluxcd.io/', image: 'https://picsum.photos/seed/fluxcd/600/400', dataAiHint: 'gitops tool', pricing: 'Free' },
            { name: 'Spinnaker', url: 'https://spinnaker.io/', image: 'https://picsum.photos/seed/spinnaker/600/400', dataAiHint: 'multi-cloud cd', pricing: 'Free' },
            { name: 'Octopus Deploy', url: 'https://octopus.com/', image: 'https://picsum.photos/seed/octopusdeploy/600/400', dataAiHint: 'release management', pricing: 'Paid' },
            { name: 'Harness', url: 'https://www.harness.io/', image: 'https://picsum.photos/seed/harness/600/400', dataAiHint: 'software delivery', pricing: 'Freemium' },
            { name: 'LaunchDarkly', url: 'https://launchdarkly.com/', image: 'https://picsum.photos/seed/launchdarkly/600/400', dataAiHint: 'feature management', pricing: 'Paid' },
        ]
    },
    {
        title: "DevOps & Automation Tools",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Ansible', url: 'https://www.ansible.com/', image: 'https://picsum.photos/seed/ansible/600/400', dataAiHint: 'automation engine', pricing: 'Free' },
            { name: 'Terraform', url: 'https://www.terraform.io/', image: 'https://picsum.photos/seed/terraform/600/400', dataAiHint: 'infrastructure as code', pricing: 'Free' },
            { name: 'Puppet', url: 'https://puppet.com/', image: 'https://picsum.photos/seed/puppet/600/400', dataAiHint: 'configuration management', pricing: 'Freemium' },
            { name: 'Chef', url: 'https://www.chef.io/', image: 'https://picsum.photos/seed/chef/600/400', dataAiHint: 'automation platform', pricing: 'Freemium' },
            { name: 'SaltStack', url: 'https://www.saltstack.com/', image: 'https://picsum.photos/seed/saltstack/600/400', dataAiHint: 'infrastructure automation', pricing: 'Free' },
            { name: 'Vagrant', url: 'https://www.vagrantup.com/', image: 'https://picsum.photos/seed/vagrant/600/400', dataAiHint: 'development environments', pricing: 'Free' },
            { name: 'Packer', url: 'https://www.packer.io/', image: 'https://picsum.photos/seed/packer/600/400', dataAiHint: 'machine images', pricing: 'Free' },
        ]
    },
    {
        title: "Testing & QA Tools",
        icon: <TestTube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Selenium', url: 'https://www.selenium.dev/', image: 'https://picsum.photos/seed/selenium/600/400', dataAiHint: 'browser automation', pricing: 'Free' },
            { name: 'Cypress', url: 'https://www.cypress.io/', image: 'https://picsum.photos/seed/cypress/600/400', dataAiHint: 'frontend testing', pricing: 'Freemium' },
            { name: 'Playwright', url: 'https://playwright.dev/', image: 'https://picsum.photos/seed/playwright/600/400', dataAiHint: 'web testing', pricing: 'Free' },
            { name: 'Jest', url: 'https://jestjs.io/', image: 'https://picsum.photos/seed/jest/600/400', dataAiHint: 'javascript testing', pricing: 'Free' },
            { name: 'Mocha', url: 'https://mochajs.org/', image: 'https://picsum.photos/seed/mocha/600/400', dataAiHint: 'javascript testing', pricing: 'Free' },
            { name: 'JUnit', url: 'https://junit.org/junit5/', image: 'https://picsum.photos/seed/junit/600/400', dataAiHint: 'java testing', pricing: 'Free' },
            { name: 'TestNG', url: 'https://testng.org/', image: 'https://picsum.photos/seed/testng/600/400', dataAiHint: 'java testing', pricing: 'Free' },
            { name: 'PyTest', url: 'https://pytest.org/', image: 'https://picsum.photos/seed/pytest/600/400', dataAiHint: 'python testing', pricing: 'Free' },
            { name: 'Robot Framework', url: 'https://robotframework.org/', image: 'https://picsum.photos/seed/robotframework/600/400', dataAiHint: 'automation framework', pricing: 'Free' },
            { name: 'Appium', url: 'http://appium.io/', image: 'https://picsum.photos/seed/appium/600/400', dataAiHint: 'mobile automation', pricing: 'Free' },
            { name: 'JMeter', url: 'https://jmeter.apache.org/', image: 'https://picsum.photos/seed/jmeter/600/400', dataAiHint: 'load testing', pricing: 'Free' },
            { name: 'Gatling', url: 'https://gatling.io/', image: 'https://picsum.photos/seed/gatling/600/400', dataAiHint: 'load testing', pricing: 'Freemium' },
            { name: 'Postman', url: 'https://www.postman.com/', image: 'https://picsum.photos/seed/postmanqa/600/400', dataAiHint: 'api testing', pricing: 'Freemium' },
            { name: 'SoapUI', url: 'https://www.soapui.org/', image: 'https://picsum.photos/seed/soapui/600/400', dataAiHint: 'api testing', pricing: 'Freemium' },
            { name: 'BrowserStack', url: 'https://www.browserstack.com/', image: 'https://picsum.photos/seed/browserstack/600/400', dataAiHint: 'cross-browser testing', pricing: 'Paid' },
            { name: 'Sauce Labs', url: 'https://saucelabs.com/', image: 'https://picsum.photos/seed/saucelabs/600/400', dataAiHint: 'continuous testing', pricing: 'Paid' },
            { name: 'LambdaTest', url: 'https://www.lambdatest.com/', image: 'https://picsum.photos/seed/lambdatest/600/400', dataAiHint: 'testing cloud', pricing: 'Freemium' },
            { name: 'TestRail', url: 'https://www.gurock.com/testrail/', image: 'https://picsum.photos/seed/testrail/600/400', dataAiHint: 'test management', pricing: 'Paid' },
            { name: 'Jira', url: 'https://www.atlassian.com/software/jira', image: 'https://picsum.photos/seed/jiraqa/600/400', dataAiHint: 'bug tracking', pricing: 'Freemium' },
        ]
    },
    {
        title: "API Development Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Postman', url: 'https://www.postman.com/', image: 'https://picsum.photos/seed/postmanapi/600/400', dataAiHint: 'api platform', pricing: 'Freemium' },
            { name: 'Insomnia', url: 'https://insomnia.rest/', image: 'https://picsum.photos/seed/insomnia/600/400', dataAiHint: 'api design', pricing: 'Freemium' },
            { name: 'Swagger Editor', url: 'https://editor.swagger.io/', image: 'https://picsum.photos/seed/swaggereditor/600/400', dataAiHint: 'openapi editor', pricing: 'Free' },
            { name: 'Stoplight', url: 'https://stoplight.io/', image: 'https://picsum.photos/seed/stoplight/600/400', dataAiHint: 'api design', pricing: 'Freemium' },
            { name: 'MuleSoft Anypoint Platform', url: 'https://www.mulesoft.com/platform/api', image: 'https://picsum.photos/seed/mulesoft/600/400', dataAiHint: 'api management', pricing: 'Paid' },
            { name: 'Apigee', url: 'https://cloud.google.com/apigee', image: 'https://picsum.photos/seed/apigee/600/400', dataAiHint: 'google api', pricing: 'Paid' },
        ]
    },
    {
        title: "API Testing Tools",
        icon: <Bug className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'k6', url: 'https://k6.io/', image: 'https://picsum.photos/seed/k6/600/400', dataAiHint: 'load testing', pricing: 'Freemium' },
            { name: 'Karate', url: 'https://github.com/karatelabs/karate', image: 'https://picsum.photos/seed/karate/600/400', dataAiHint: 'api testing', pricing: 'Free' },
            { name: 'Rest-Assured', url: 'http://rest-assured.io/', image: 'https://picsum.photos/seed/restassured/600/400', dataAiHint: 'java api testing', pricing: 'Free' },
        ]
    },
    {
        title: "API Documentation Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Swagger UI', url: 'https://swagger.io/tools/swagger-ui/', image: 'https://picsum.photos/seed/swaggerui/600/400', dataAiHint: 'api docs', pricing: 'Free' },
            { name: 'Redoc', url: 'https://github.com/Redocly/redoc', image: 'https://picsum.photos/seed/redoc/600/400', dataAiHint: 'openapi docs', pricing: 'Free' },
            { name: 'Slate', url: 'https://github.com/slatedocs/slate', image: 'https://picsum.photos/seed/slate/600/400', dataAiHint: 'api docs', pricing: 'Free' },
            { name: 'ReadMe', url: 'https://readme.com/', image: 'https://picsum.photos/seed/readme/600/400', dataAiHint: 'developer hub', pricing: 'Paid' },
            { name: 'Docusaurus', url: 'https://docusaurus.io/', image: 'https://picsum.photos/seed/docusaurus/600/400', dataAiHint: 'documentation website', pricing: 'Free' },
        ]
    },
    {
        title: "Database Management Tools",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DBeaver', url: 'https://dbeaver.io/', image: 'https://picsum.photos/seed/dbeaver/600/400', dataAiHint: 'database client', pricing: 'Freemium' },
            { name: 'DataGrip', url: 'https://www.jetbrains.com/datagrip/', image: 'https://picsum.photos/seed/datagripdb/600/400', dataAiHint: 'database ide', pricing: 'Paid' },
            { name: 'MySQL Workbench', url: 'https://www.mysql.com/products/workbench/', image: 'https://picsum.photos/seed/mysqlworkbench/600/400', dataAiHint: 'mysql gui', pricing: 'Free' },
            { name: 'pgAdmin', url: 'https://www.pgadmin.org/', image: 'https://picsum.photos/seed/pgadmin/600/400', dataAiHint: 'postgres gui', pricing: 'Free' },
            { name: 'Azure Data Studio', url: 'https://docs.microsoft.com/en-us/sql/azure-data-studio/', image: 'https://picsum.photos/seed/azuredatastudio/600/400', dataAiHint: 'sql server', pricing: 'Free' },
            { name: 'TablePlus', url: 'https://tableplus.com/', image: 'https://picsum.photos/seed/tableplus/600/400', dataAiHint: 'database gui', pricing: 'Freemium' },
            { name: 'Navicat', url: 'https://www.navicat.com/', image: 'https://picsum.photos/seed/navicat/600/400', dataAiHint: 'database admin', pricing: 'Paid' },
        ]
    },
     {
        title: "AI Coding Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: "GitHub Copilot", url: "https://github.com/features/copilot", image: "https://picsum.photos/seed/copilot/600/400", dataAiHint: "ai pair programmer", pricing: 'Paid' },
            { name: "Tabnine", url: "https://www.tabnine.com/", image: "https://picsum.photos/seed/tabnine/600/400", dataAiHint: "code completion", pricing: 'Freemium' },
            { name: "Amazon CodeWhisperer", url: "https://aws.amazon.com/codewhisperer/", image: "https://picsum.photos/seed/codewhisperer/600/400", dataAiHint: "aws ai coding", pricing: 'Free' },
            { name: "Replit Ghostwriter", url: "https://replit.com/ghostwriter", image: "https://picsum.photos/seed/ghostwriter/600/400", dataAiHint: "ai coding assistant", pricing: 'Paid' },
            { name: "Codeium", url: "https://codeium.com/", image: "https://picsum.photos/seed/codeium/600/400", dataAiHint: "free ai assistant", pricing: 'Free' },
            { name: "Bito", url: "https://bito.ai/", image: "https://picsum.photos/seed/bito/600/400", dataAiHint: "developer productivity", pricing: 'Freemium' },
            { name: "Sourcegraph Cody", url: "https://sourcegraph.com/cody", image: "https://picsum.photos/seed/cody/600/400", dataAiHint: "code search", pricing: 'Freemium' },
            { name: "Figstack", url: "https://figstack.com/", image: "https://picsum.photos/seed/figstack/600/400", dataAiHint: "code explanation", pricing: 'Freemium' },
            { name: "MutableAI", url: "https://mutable.ai/", image: "https://picsum.photos/seed/mutableai/600/400", dataAiHint: "ai refactoring", pricing: 'Paid' },
            { name: "Duet AI for Developers", url: "https://cloud.google.com/duet-ai", image: "https://picsum.photos/seed/duetai/600/400", dataAiHint: "google cloud ai", pricing: 'Paid' },
            { name: "JetBrains AI Assistant", url: "https://www.jetbrains.com/ai/", image: "https://picsum.photos/seed/jetbrainsai/600/400", dataAiHint: "ide ai assistant", pricing: 'Paid' },
            { name: "IntelliCode", url: "https://visualstudio.microsoft.com/services/intellicode/", image: "https://picsum.photos/seed/intellicode/600/400", dataAiHint: "visual studio ai", pricing: 'Free' },
            { name: "Snyk Code", url: "https://snyk.io/product/snyk-code/", image: "https://picsum.photos/seed/snykcode/600/400", dataAiHint: "security code analysis", pricing: 'Freemium' },
            { name: "AskCodi", url: "https://www.askcodi.com/", image: "https://picsum.photos/seed/askcodi/600/400", dataAiHint: "code snippets", pricing: 'Freemium' },
            { name: "AI2sql", url: "https://www.ai2sql.io/", image: "https://picsum.photos/seed/ai2sql/600/400", dataAiHint: "sql query builder", pricing: 'Freemium' },
            { name: "Buildt", url: "https://www.buildt.ai/", image: "https://picsum.photos/seed/buildt/600/400", dataAiHint: "code search", pricing: 'Freemium' },
            { name: "CodeSquire", url: "https://codesquire.ai/", image: "https://picsum.photos/seed/codesquire/600/400", dataAiHint: "data science assistant", pricing: 'Freemium' },
            { name: "CodeWP", url: "https://codewp.ai/", image: "https://picsum.photos/seed/codewp/600/400", dataAiHint: "wordpress code", pricing: 'Freemium' },
            { name: "Code-Magic", url: "https://code-magic.com/", image: "https://picsum.photos/seed/codemagic/600/400", dataAiHint: "code generation", pricing: 'Freemium' },
            { name: "FauxPilot", url: "https://github.com/fauxpilot/fauxpilot", image: "https://picsum.photos/seed/fauxpilot/600/400", dataAiHint: "self-hosted copilot", pricing: 'Free' },
            { name: "Continue", url: "https://continue.dev/", image: "https://picsum.photos/seed/continue/600/400", dataAiHint: "open-source ide extension", pricing: 'Free' },
            { name: "Wing", url: "https://www.wing.run/", image: "https://picsum.photos/seed/winglang/600/400", dataAiHint: "cloud oriented language", pricing: 'Free' },
            { name: "WhatTheDiff", url: "https://whatthediff.ai/", image: "https://picsum.photos/seed/whatthediff/600/400", dataAiHint: "pull request review", pricing: 'Freemium' },
            { name: "SpellBox", url: "https://spellbox.app/", image: "https://picsum.photos/seed/spellbox/600/400", dataAiHint: "terminal ai", pricing: 'Paid' },
            { name: "Hey, Jet!", url: "https://plugins.jetbrains.com/plugin/20379-hey-jet", image: "https://picsum.photos/seed/heyjet/600/400", dataAiHint: "jetbrains plugin", pricing: 'Free' },
            { name: "HTTPie AI", url: "https://httpie.io/ai", image: "https://picsum.photos/seed/httpie/600/400", dataAiHint: "api testing", pricing: 'Freemium' },
            { name: "Aider", url: "https://github.com/paul-gauthier/aider", image: "https://picsum.photos/seed/aider/600/400", dataAiHint: "command line ai", pricing: 'Free' },
            { name: "Codeium Chat", url: "https://codeium.com/chat", image: "https://picsum.photos/seed/codeiumchat/600/400", dataAiHint: "ai chat for code", pricing: 'Free' },
            { name: "Cursor", url: "https://cursor.sh/", image: "https://picsum.photos/seed/cursor/600/400", dataAiHint: "ai first code editor", pricing: 'Freemium' },
            { name: "Safurai", url: "https://safurai.com/", image: "https://picsum.photos/seed/safurai/600/400", dataAiHint: "code assistant", pricing: 'Freemium' },
            { name: "Adrenaline", url: "https://useadrenaline.com/", image: "https://picsum.photos/seed/adrenaline/600/400", dataAiHint: "code debugging", pricing: 'Free' },
            { name: "CodeGPT", url: "https://codegpt.co/", image: "https://picsum.photos/seed/codegpt/600/400", dataAiHint: "ide extension", pricing: 'Freemium' },
            { name: "GPT-Engineer", url: "https://github.com/gpt-engineer-org/gpt-engineer", image: "https://picsum.photos/seed/gptengineer/600/400", dataAiHint: "code generation", pricing: 'Free' },
            { name: "Devin", url: "https://www.cognition-labs.com/introducing-devin", image: "https://picsum.photos/seed/devin/600/400", dataAiHint: "ai software engineer", pricing: 'Paid' },
            { name: "Sweep", url: "https://sweep.dev/", image: "https://picsum.photos/seed/sweep/600/400", dataAiHint: "ai junior developer", pricing: 'Freemium' },
            { name: "v0 by Vercel", url: "https://v0.dev/", image: "https://picsum.photos/seed/v0/600/400", dataAiHint: "generative ui", pricing: 'Freemium' },
            { name: "Code Llama", url: "https://ai.meta.com/blog/code-llama-large-language-model-coding/", image: "https://picsum.photos/seed/codellama/600/400", dataAiHint: "meta ai code", pricing: 'Free' },
            { name: "AlphaCode", url: "https://www.deepmind.com/blog/competitive-programming-with-alphacode", image: "https://picsum.photos/seed/alphacode/600/400", dataAiHint: "deepmind code", pricing: 'Paid' },
            { name: "Polycoder", url: "https://github.com/VHellendoorn/Code-LMs", image: "https://picsum.photos/seed/polycoder/600/400", dataAiHint: "open source code model", pricing: 'Free' },
            { name: "CodeT5", url: "https://github.com/salesforce/CodeT5", image: "https://picsum.photos/seed/codet5/600/400", dataAiHint: "salesforce ai", pricing: 'Free' },
            { name: "OpenAI Codex", url: "https://openai.com/blog/openai-codex", image: "https://picsum.photos/seed/codex/600/400", dataAiHint: "copilot engine", pricing: 'Paid' },
            { name: "CodeParrot", url: "https://huggingface.co/codeparrot", image: "https://picsum.photos/seed/codeparrot/600/400", dataAiHint: "hugging face code", pricing: 'Free' },
            { name: "Blackbox AI", url: "https://www.blackbox.ai/", image: "https://picsum.photos/seed/blackboxai/600/400", dataAiHint: "code chat", pricing: 'Freemium' },
            { name: "CodePal", url: "https://codepal.ai/", image: "https://picsum.photos/seed/codepal/600/400", dataAiHint: "online code assistant", pricing: 'Freemium' },
            { name: "Maverick", url: "https://getmaverick.com/", image: "https://picsum.photos/seed/maverick/600/400", dataAiHint: "test case generation", pricing: 'Freemium' },
            { name: "Zebrium", url: "https://www.zebrium.com/", image: "https://picsum.photos/seed/zebrium/600/400", dataAiHint: "log analysis", pricing: 'Paid' },
            { name: "Fine", url: "https://www.fine.dev/", image: "https://picsum.photos/seed/finedev/600/400", dataAiHint: "ai tasks", pricing: 'Paid' },
            { name: "Unblocked", url: "https://www.unblocked.gg/", image: "https://picsum.photos/seed/unblocked/600/400", dataAiHint: "code context", pricing: 'Freemium' },
            { name: "OctoMind", url: "https://octomind.dev/", image: "https://picsum.photos/seed/octomind/600/400", dataAiHint: "test generation", pricing: 'Freemium' },
            { name: "Kodezi", url: "https://kodezi.com/", image: "https://picsum.photos/seed/kodezi/600/400", dataAiHint: "autocorrect for code", pricing: 'Freemium' },
        ]
    }
];

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
    ...codingToolData.flatMap(cat => cat.tools)
];

export const allTools: Tool[] = Array.from(new Set(allData.map(t => t.name))).map(name => {
    return allData.find(t => t.name === name)!
});

    
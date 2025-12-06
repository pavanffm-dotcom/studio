
import { 
    Briefcase, DollarSign, UserCog, CreditCard, Users, MessageSquare, Video, Megaphone, BarChart, GitBranch, ListChecks, Lightbulb, Cpu, Code, Filter, TrendingUp, Link2, Server, Layers,
    Paintbrush, Youtube, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, GraduationCap, Scissors, Film, ImageIcon, Palette, Bot, Mic2, FileText,
    Terminal, Database, CloudCog, Bug, Box, TerminalSquare, PackageCheck, Shield, Smartphone, Gamepad2, TestTube, Gauge,
    LayoutDashboard, BookOpen, Contact, Gem, MonitorPlay, Wallet, Receipt, FileSignature, Folder, Workflow, Clock, Timer, Hourglass, Share, Copy, RotateCw, Cloud, Sparkles, BookCopy, Mail, ShoppingCart, Layout, ImagePlay, Shapes, UserCircle, BrainCircuit, Newspaper, BoxSelect, MousePointerClick, BookCopy as BookCopyIcon, Wallpaper, Car, Store, TowerControl, Truck, SquareParking, PenTool, Feather, Key, Quote, Tv, Building, FileCheck, Scale,
    Settings, Target, ClipboardCheck
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

export const businessToolData: ToolCategory[] = [];
export const codingToolData: ToolCategory[] = [];
export const writingToolData: ToolCategory[] = [];
export const productivityToolData: ToolCategory[] = [];
export const marketingSeoToolData: ToolCategory[] = [];

export const graphicDesignToolData: ToolCategory[] = [
    {
        title: "Logo Design & Branding",
        icon: <PenTool className="w-5 h-5"/>,
        tools: [
            { name: 'Looka', description: 'AI-powered logo maker and branding kit.', url: 'https://looka.com/', image: 'https://picsum.photos/seed/looka-logo/600/400', dataAiHint: 'ai logo', pricing: 'Paid' },
            { name: 'Brandmark.io', description: 'Create a unique, professional logo for your business.', url: 'https://brandmark.io/', image: 'https://picsum.photos/seed/brandmark/600/400', dataAiHint: 'logo design', pricing: 'Paid' },
            { name: 'Hatchful by Shopify', description: 'Free logo maker.', url: 'https://hatchful.shopify.com/', image: 'https://picsum.photos/seed/hatchful/600/400', dataAiHint: 'free logo', pricing: 'Free' },
            { name: 'Tailor Brands', description: 'AI-powered branding platform.', url: 'https://www.tailorbrands.com/', image: 'https://picsum.photos/seed/tailorbrands/600/400', dataAiHint: 'branding tools', pricing: 'Paid' },
            { name: 'Namecheap Logo Maker', description: 'Free logo maker.', url: 'https://www.namecheap.com/logo-maker/', image: 'https://picsum.photos/seed/namecheap-logo/600/400', dataAiHint: 'logo creator', pricing: 'Free' },
            { name: 'Canva Logo Maker', description: 'Design a custom logo for free.', url: 'https://www.canva.com/logo-maker/', image: 'https://picsum.photos/seed/canva-logo/600/400', dataAiHint: 'free logo design', pricing: 'Free' },
            { name: 'Adobe Express Logo Maker', description: 'Create a logo in minutes.', url: 'https://www.adobe.com/express/create/logo', image: 'https://picsum.photos/seed/adobe-logo/600/400', dataAiHint: 'adobe logo', pricing: 'Free' },
            { name: 'Fotor Logo Maker', description: 'Make your own logo for free.', url: 'https://www.fotor.com/features/logo-maker.html', image: 'https://picsum.photos/seed/fotor-logo/600/400', dataAiHint: 'online logo maker', pricing: 'Free' },
            { name: 'Squarespace Logo Maker', description: 'Create a professional logo for your business.', url: 'https://www.squarespace.com/logo', image: 'https://picsum.photos/seed/squarespace-logo/600/400', dataAiHint: 'business logo', pricing: 'Free' },
            { name: 'Wix Logo Maker', description: 'Design a logo you\'ll love.', url: 'https://www.wix.com/logo/maker', image: 'https://picsum.photos/seed/wix-logo/600/400', dataAiHint: 'wix design', pricing: 'Paid' },
            { name: 'FreeLogoDesign', description: 'Create your logo for free.', url: 'https://www.freelogodesign.org/', image: 'https://picsum.photos/seed/freelogodesign/600/400', dataAiHint: 'logo creator', pricing: 'Free' },
            { name: 'Logo.com', description: 'Free logo maker and brand building platform.', url: 'https://logo.com/', image: 'https://picsum.photos/seed/logocom/600/400', dataAiHint: 'brand builder', pricing: 'Freemium' },
            { name: 'Designhill Logo Maker', description: 'AI-powered logo generator.', url: 'https://www.designhill.com/logo-maker', image: 'https://picsum.photos/seed/designhill-logo/600/400', dataAiHint: 'ai logo generator', pricing: 'Paid' },
            { name: 'BrandCrowd', description: 'Custom logo design.', url: 'https://www.brandcrowd.com/', image: 'https://picsum.photos/seed/brandcrowd/600/400', dataAiHint: 'custom logo', pricing: 'Paid' },
            { name: 'Logaster', description: 'Online brand identity builder.', url: 'https://www.logaster.com/', image: 'https://picsum.photos/seed/logaster/600/400', dataAiHint: 'brand identity', pricing: 'Paid' },
            { name: 'Ucraft Logo Maker', description: 'Free online logo maker.', url: 'https://www.ucraft.com/logo-maker', image: 'https://picsum.photos/seed/ucraft-logo/600/400', dataAiHint: 'free online logo', pricing: 'Free' },
            { name: 'LogoMakr', description: 'Create custom logos for free.', url: 'https://logomakr.com/', image: 'https://picsum.photos/seed/logomakr/600/400', dataAiHint: 'custom logo free', pricing: 'Free' },
            { name: 'Zyro Logo Maker', description: 'Free AI logo maker.', url: 'https://zyro.com/logo-maker', image: 'https://picsum.photos/seed/zyro-logo/600/400', dataAiHint: 'ai logo free', pricing: 'Free' },
            { name: 'Turbologo', description: 'Online logo generator.', url: 'https://turbologo.com/', image: 'https://picsum.photos/seed/turbologo/600/400', dataAiHint: 'logo generator', pricing: 'Paid' },
            { name: 'Placeit by Envato', description: 'Create mockups, logos, videos and designs.', url: 'https://placeit.net/logo-maker', image: 'https://picsum.photos/seed/placeit-logo/600/400', dataAiHint: 'envato logo', pricing: 'Paid' },
            { name: 'GraphicSprings', description: 'Free logo maker & logo design tool.', url: 'https://www.graphicsprings.com/', image: 'https://picsum.photos/seed/graphicsprings/600/400', dataAiHint: 'logo design tool', pricing: 'Paid' },
            { name: 'DesignEvo', description: 'Free online logo maker.', url: 'https://www.designevo.com/', image: 'https://picsum.photos/seed/designevo/600/400', dataAiHint: 'online logo free', pricing: 'Free' },
            { name: 'SmashingLogo', description: 'Professional logo design.', url: 'https://smashinglogo.com/', image: 'https://picsum.photos/seed/smashinglogo/600/400', dataAiHint: 'professional logo', pricing: 'Paid' },
            { name: 'Logogenie', description: 'Online logo maker.', url: 'https://www.logogenie.net/', image: 'https://picsum.photos/seed/logogenie/600/400', dataAiHint: 'logo online', pricing: 'Paid' },
            { name: 'Logomaker', description: 'Create a logo in minutes.', url: 'https://www.logomaker.com/', image: 'https://picsum.photos/seed/logomaker-tool/600/400', dataAiHint: 'logo minutes', pricing: 'Paid' },
            { name: 'LogotypeMaker', description: 'Online logo generator.', url: 'https://logotypemaker.com/', image: 'https://picsum.photos/seed/logotypemaker/600/400', dataAiHint: 'logotype tool', pricing: 'Paid' },
            { name: 'WithUptime Logo Maker', description: 'Free logo design tool.', url: 'https://withuptime.com/tools/logo-maker', image: 'https://picsum.photos/seed/withuptime-logo/600/400', dataAiHint: 'uptime logo', pricing: 'Free' },
            { name: '99designs', description: 'The global creative platform.', url: 'https://99designs.com/', image: 'https://picsum.photos/seed/99designs/600/400', dataAiHint: 'design contest', pricing: 'Paid' },
            { name: 'Fiverr', description: 'Freelance services. On-demand.', url: 'https://www.fiverr.com/categories/graphics-design/logo-design', image: 'https://picsum.photos/seed/fiverr-logo/600/400', dataAiHint: 'freelance logo', pricing: 'Paid' },
            { name: 'Upwork', description: 'The world\'s work marketplace.', url: 'https://www.upwork.com/hire/logo-designers/', image: 'https://picsum.photos/seed/upwork-logo/600/400', dataAiHint: 'hire designer', pricing: 'Paid' },
            { name: 'Dribbble', description: 'Discover the world’s top designers & creatives.', url: 'https://dribbble.com/shots/popular/branding', image: 'https://picsum.photos/seed/dribbble-branding/600/400', dataAiHint: 'design inspiration', pricing: 'Free' },
            { name: 'Behance', description: 'Showcase and discover the latest work.', url: 'https://www.behance.net/search/projects/?field=branding', image: 'https://picsum.photos/seed/behance-branding/600/400', dataAiHint: 'creative portfolio', pricing: 'Free' },
            { name: 'Jimdo Logo Creator', description: 'Create a logo for your website.', url: 'https://www.jimdo.com/logo-creator/', image: 'https://picsum.photos/seed/jimdo-logo/600/400', dataAiHint: 'website logo', pricing: 'Free' },
            { name: 'Name.com Logo Maker', description: 'Create a logo for your new domain.', url: 'https://www.name.com/logo-maker', image: 'https://picsum.photos/seed/namedotcom-logo/600/400', dataAiHint: 'domain logo', pricing: 'Free' },
            { name: 'Logo Garden', description: 'Free online logo maker.', url: 'https://www.logogarden.com/', image: 'https://picsum.photos/seed/logogarden/600/400', dataAiHint: 'garden logo', pricing: 'Free' },
            { name: 'LogoYes', description: 'Free logo design.', url: 'https://www.logoyes.com/', image: 'https://picsum.photos/seed/logoyes/600/400', dataAiHint: 'yes logo', pricing: 'Paid' },
            { name: 'Renderforest Logo Maker', description: 'Create your logo online in minutes.', url: 'https://www.renderforest.com/logo-maker.html', image: 'https://picsum.photos/seed/renderforest-logo/600/400', dataAiHint: 'logo minutes online', pricing: 'Freemium' },
            { name: 'DesignMantic', description: 'Free logo design & logo maker tool.', url: 'https://www.designmantic.com/', image: 'https://picsum.photos/seed/designmantic/600/400', dataAiHint: 'mantic design', pricing: 'Paid' },
            { name: 'LogoMyWay', description: 'Logo design contests.', url: 'https://www.logomyway.com/', image: 'https://picsum.photos/seed/logomyway/600/400', dataAiHint: 'design contest', pricing: 'Paid' },
            { name: '48hourslogo', description: 'Affordable logo design contests.', url: 'https://www.48hourslogo.com/', image: 'https://picsum.photos/seed/48hourslogo/600/400', dataAiHint: 'logo contest', pricing: 'Paid' },
            { name: 'The Logo Company', description: 'Custom logo design service.', url: 'https://thelogocompany.net/', image: 'https://picsum.photos/seed/thelogocompany/600/400', dataAiHint: 'custom design', pricing: 'Paid' },
            { name: 'Deluxe Logo Design', description: 'Professional logo and website design.', url: 'https://www.deluxe.com/logo-design/', image: 'https://picsum.photos/seed/deluxe-logo/600/400', dataAiHint: 'deluxe branding', pricing: 'Paid' },
            { name: 'Vistaprint Logo Maker', description: 'Create a logo for your small business.', url: 'https://www.vistaprint.com/logo-maker', image: 'https://picsum.photos/seed/vistaprint-logo/600/400', dataAiHint: 'small business logo', pricing: 'Free' },
            { name: 'Logopony', description: 'AI logo maker that generates thousands of logos.', url: 'https://www.logopony.com/', image: 'https://picsum.photos/seed/logopony/600/400', dataAiHint: 'ai logo maker', pricing: 'Paid' },
            { name: 'LogoAi', description: 'An AI engine that designs your logo.', url: 'https://www.logoai.com/', image: 'https://picsum.photos/seed/logoai-tool/600/400', dataAiHint: 'ai logo engine', pricing: 'Paid' },
            { name: 'Mojomox', description: 'Modern logo maker & branding tools.', url: 'https://mojomox.com/', image: 'https://picsum.photos/seed/mojomox/600/400', dataAiHint: 'modern branding', pricing: 'Paid' },
            { name: 'BrandBuilder', description: 'AI-powered branding platform.', url: 'https://brandbuilder.ai/', image: 'https://picsum.photos/seed/brandbuilder/600/400', dataAiHint: 'ai brand', pricing: 'Paid' },
            { name: 'LogoIpsum', description: 'Placeholder logos for your designs.', url: 'https://logoipsum.com/', image: 'https://picsum.photos/seed/logoipsum/600/400', dataAiHint: 'placeholder logo', pricing: 'Free' },
            { name: 'Fontjoy', description: 'AI to help you pair fonts.', url: 'https://fontjoy.com/', image: 'https://picsum.photos/seed/fontjoy-brand/600/400', dataAiHint: 'font pairing', pricing: 'Free' },
            { name: 'Coolors', description: 'The super fast color palettes generator.', url: 'https://coolors.co/', image: 'https://picsum.photos/seed/coolors-brand/600/400', dataAiHint: 'color palette', pricing: 'Freemium' },
            { name: 'Adobe Color', description: 'Create color palettes with the color wheel.', url: 'https://color.adobe.com/', image: 'https://picsum.photos/seed/adobecolor-brand/600/400', dataAiHint: 'color wheel', pricing: 'Free' },
        ]
    },
    {
        title: "Illustration & Drawing",
        icon: <Paintbrush className="w-5 h-5"/>,
        tools: [
            { name: 'Adobe Illustrator', description: 'The industry-standard vector graphics software.', url: 'https://www.adobe.com/products/illustrator.html', image: 'https://picsum.photos/seed/illustrator/600/400', dataAiHint: 'vector graphics', pricing: 'Paid' },
            { name: 'Procreate', description: 'A powerful digital illustration app for iPad.', url: 'https://procreate.art/', image: 'https://picsum.photos/seed/procreate/600/400', dataAiHint: 'ipad drawing', pricing: 'Paid' },
            { name: 'Affinity Designer', description: 'Professional graphic design software.', url: 'https://affinity.serif.com/en-us/designer/', image: 'https://picsum.photos/seed/affinity-designer/600/400', dataAiHint: 'vector editor', pricing: 'Paid' },
            { name: 'CorelDRAW', description: 'Professional graphic design software.', url: 'https://www.coreldraw.com/', image: 'https://picsum.photos/seed/coreldraw/600/400', dataAiHint: 'graphic suite', pricing: 'Paid' },
            { name: 'Inkscape', description: 'A free and open-source vector graphics editor.', url: 'https://inkscape.org/', image: 'https://picsum.photos/seed/inkscape/600/400', dataAiHint: 'open source vector', pricing: 'Free' },
        ]
    },
    {
        title: "Photo Editing & Retouching",
        icon: <ImageIcon className="w-5 h-5"/>,
        tools: [
            { name: 'Adobe Photoshop', description: 'The industry standard for photo editing and raster graphics.', url: 'https://www.adobe.com/products/photoshop.html', image: 'https://picsum.photos/seed/photoshop/600/400', dataAiHint: 'photo editor', pricing: 'Paid' },
            { name: 'Adobe Lightroom', description: 'Cloud-based service for photo editing and management.', url: 'https://lightroom.adobe.com/', image: 'https://picsum.photos/seed/lightroom/600/400', dataAiHint: 'photo management', pricing: 'Paid' },
            { name: 'Canva Photo Editor', description: 'Free online photo editor.', url: 'https://www.canva.com/photo-editor/', image: 'https://picsum.photos/seed/canva-photo/600/400', dataAiHint: 'online editor', pricing: 'Free' },
            { name: 'Fotor', description: 'Online photo editor and design maker.', url: 'https://www.fotor.com/', image: 'https://picsum.photos/seed/fotor-edit/600/400', dataAiHint: 'photo effects', pricing: 'Freemium' },
            { name: 'GIMP', description: 'A free and open-source raster graphics editor.', url: 'https://www.gimp.org/', image: 'https://picsum.photos/seed/gimp/600/400', dataAiHint: 'open source editor', pricing: 'Free' },
        ]
    },
    {
        title: "UI/UX Design & Prototyping",
        icon: <LayoutDashboard className="w-5 h-5"/>,
        tools: [
            { name: 'Figma', description: 'The collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-ui/600/400', dataAiHint: 'ui ux design', pricing: 'Freemium' },
            { name: 'Sketch', description: 'The design toolkit for Mac.', url: 'https://www.sketch.com/', image: 'https://picsum.photos/seed/sketch/600/400', dataAiHint: 'mac design', pricing: 'Paid' },
            { name: 'Adobe XD', description: 'UI/UX design and collaboration tool.', url: 'https://www.adobe.com/products/xd.html', image: 'https://picsum.photos/seed/adobexd/600/400', dataAiHint: 'prototyping tool', pricing: 'Paid' },
            { name: 'InVision', description: 'Digital product design and development platform.', url: 'https://www.invisionapp.com/', image: 'https://picsum.photos/seed/invision/600/400', dataAiHint: 'collaboration platform', pricing: 'Freemium' },
            { name: 'Framer', description: 'The professional design tool for websites.', url: 'https://www.framer.com/', image: 'https://picsum.photos/seed/framer-ui/600/400', dataAiHint: 'interactive design', pricing: 'Freemium' },
        ]
    },
    {
        title: "Infographics & Data Visualization",
        icon: <BarChart className="w-5 h-5"/>,
        tools: [
            { name: 'Venngage', description: 'Infographic maker and design platform.', url: 'https://venngage.com/', image: 'https://picsum.photos/seed/venngage-viz/600/400', dataAiHint: 'infographics', pricing: 'Freemium' },
            { name: 'Piktochart', description: 'Create infographics, reports, presentations.', url: 'https://piktochart.com/', image: 'https://picsum.photos/seed/piktochart-viz/600/400', dataAiHint: 'data visualization', pricing: 'Freemium' },
            { name: 'Infogram', description: 'Create engaging infographics and reports in minutes.', url: 'https://infogram.com/', image: 'https://picsum.photos/seed/infogram/600/400', dataAiHint: 'charts maps', pricing: 'Freemium' },
            { name: 'Easel.ly', description: 'Create and share visual ideas.', url: 'https://www.easel.ly/', image: 'https://picsum.photos/seed/easelly/600/400', dataAiHint: 'visual ideas', pricing: 'Freemium' },
            { name: 'Datawrapper', description: 'Create charts, maps, and tables.', url: 'https://www.datawrapper.de/', image: 'https://picsum.photos/seed/datawrapper/600/400', dataAiHint: 'interactive charts', pricing: 'Free' },
        ]
    },
    {
        title: "Typography Tools",
        icon: <Type className="w-5 h-5"/>,
        tools: [
            { name: 'Google Fonts', description: 'Making the web more beautiful, fast, and open through great typography.', url: 'https://fonts.google.com/', image: 'https://picsum.photos/seed/google-fonts/600/400', dataAiHint: 'free fonts', pricing: 'Free' },
            { name: 'Adobe Fonts', description: 'Thousands of beautiful fonts.', url: 'https://fonts.adobe.com/', image: 'https://picsum.photos/seed/adobe-fonts/600/400', dataAiHint: 'font library', pricing: 'Paid' },
            { name: 'Fontjoy', description: 'AI-powered font pairing tool.', url: 'https://fontjoy.com/', image: 'https://picsum.photos/seed/fontjoy/600/400', dataAiHint: 'font pairing', pricing: 'Free' },
            { name: 'WhatTheFont', description: 'Identify fonts from an image.', url: 'https://www.myfonts.com/WhatTheFont/', image: 'https://picsum.photos/seed/whatthefont/600/400', dataAiHint: 'font identifier', pricing: 'Free' },
            { name: 'Type-scale.com', description: 'A visual calculator for typography.', url: 'https://type-scale.com/', image: 'https://picsum.photos/seed/typescale/600/400', dataAiHint: 'font scale', pricing: 'Free' },
        ]
    },
    {
        title: "Color Palette Generators",
        icon: <Palette className="w-5 h-5"/>,
        tools: [
            { name: 'Coolors', description: 'The super fast color palettes generator.', url: 'https://coolors.co/', image: 'https://picsum.photos/seed/coolors/600/400', dataAiHint: 'color schemes', pricing: 'Freemium' },
            { name: 'Adobe Color', description: 'Create color palettes with the color wheel.', url: 'https://color.adobe.com/', image: 'https://picsum.photos/seed/adobe-color/600/400', dataAiHint: 'color wheel', pricing: 'Free' },
            { name: 'Paletton', description: 'A tool for creating color combinations.', url: 'https://paletton.com/', image: 'https://picsum.photos/seed/paletton/600/400', dataAiHint: 'color harmony', pricing: 'Free' },
            { name: 'Colormind', description: 'The AI-powered color palette generator.', url: 'http://colormind.io/', image: 'https://picsum.photos/seed/colormind/600/400', dataAiHint: 'ai color', pricing: 'Free' },
            { name: 'Color Hunt', description: 'A free and open platform for color inspiration.', url: 'https://colorhunt.co/', image: 'https://picsum.photos/seed/colorhunt/600/400', dataAiHint: 'color inspiration', pricing: 'Free' },
        ]
    },
    {
        title: "Mockup Generators",
        icon: <Smartphone className="w-5 h-5"/>,
        tools: [
            { name: 'Smartmockups', description: 'Create stunning product mockups.', url: 'https://smartmockups.com/', image: 'https://picsum.photos/seed/smartmockups/600/400', dataAiHint: 'product mockups', pricing: 'Freemium' },
            { name: 'Placeit', description: 'Mockups, designs, logos & videos.', url: 'https://placeit.net/', image: 'https://picsum.photos/seed/placeit/600/400', dataAiHint: 'apparel mockups', pricing: 'Paid' },
            { name: 'Mockup World', description: 'Free mockup templates.', url: 'https://www.mockupworld.co/', image: 'https://picsum.photos/seed/mockupworld/600/400', dataAiHint: 'psd mockups', pricing: 'Free' },
            { name: 'Artboard Studio', description: 'Online mockup generator.', url: 'https://artboard.studio/', image: 'https://picsum.photos/seed/artboardstudio/600/400', dataAiHint: 'animated mockups', pricing: 'Freemium' },
            { name: 'Rotato', description: 'Create animated 3D mockups for your apps.', url: 'https://rotato.app/', image: 'https://picsum.photos/seed/rotato/600/400', dataAiHint: '3d mockups', pricing: 'Paid' },
        ]
    },
    {
        title: "Asset & Stock Photo Resources",
        icon: <BookOpen className="w-5 h-5"/>,
        tools: [
            { name: 'Unsplash', description: 'The internet’s source of freely-usable images.', url: 'https://unsplash.com/', image: 'https://picsum.photos/seed/unsplash/600/400', dataAiHint: 'free photos', pricing: 'Free' },
            { name: 'Pexels', description: 'Free stock photos & videos.', url: 'https://www.pexels.com/', image: 'https://picsum.photos/seed/pexels/600/400', dataAiHint: 'stock videos', pricing: 'Free' },
            { name: 'Pixabay', description: 'Stunning free images & royalty free stock.', url: 'https://pixabay.com/', image: 'https://picsum.photos/seed/pixabay/600/400', dataAiHint: 'royalty-free', pricing: 'Free' },
            { name: 'Adobe Stock', description: 'High-quality stock photos, vectors, videos, and more.', url: 'https://stock.adobe.com/', image: 'https://picsum.photos/seed/adobestock/600/400', dataAiHint: 'stock assets', pricing: 'Paid' },
            { name: 'Getty Images', description: 'High-quality, royalty-free stock images.', url: 'https://www.gettyimages.com/', image: 'https://picsum.photos/seed/gettyimages/600/400', dataAiHint: 'premium stock', pricing: 'Paid' },
        ]
    },
    {
        title: "3D & Motion Graphics",
        icon: <Layers className="w-5 h-5"/>,
        tools: [
            { name: 'Blender', description: 'Free and open source 3D creation suite.', url: 'https://www.blender.org/', image: 'https://picsum.photos/seed/blender/600/400', dataAiHint: '3d modeling', pricing: 'Free' },
            { name: 'Cinema 4D', description: '3D software for motion graphics, VFX, and more.', url: 'https://www.maxon.net/en/cinema-4d', image: 'https://picsum.photos/seed/cinema4d/600/400', dataAiHint: 'mograph', pricing: 'Paid' },
            { name: 'Adobe After Effects', description: 'Create motion graphics and visual effects.', url: 'https://www.adobe.com/products/aftereffects.html', image: 'https://picsum.photos/seed/aftereffects/600/400', dataAiHint: 'visual effects', pricing: 'Paid' },
            { name: 'Spline', description: 'A collaborative 3D design tool for the web.', url: 'https://spline.design/', image: 'https://picsum.photos/seed/spline-3d/600/400', dataAiHint: 'web 3d', pricing: 'Freemium' },
            { name: 'LottieFiles', description: 'Free animations for your websites and apps.', url: 'https://lottiefiles.com/', image: 'https://picsum.photos/seed/lottiefiles/600/400', dataAiHint: 'json animation', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI-Powered Design Tools",
        icon: <Wand2 className="w-5 h-5"/>,
        tools: [
            { name: 'Khroma', description: 'The AI color tool for designers.', url: 'http://khroma.co/', image: 'https://picsum.photos/seed/khroma/600/400', dataAiHint: 'ai color', pricing: 'Free' },
            { name: 'Designs.ai', description: 'Create logos, videos, mockups with AI.', url: 'https://designs.ai/', image: 'https://picsum.photos/seed/designs-ai/600/400', dataAiHint: 'ai creative', pricing: 'Paid' },
            { name: 'Uizard', description: 'AI-powered UI design tool.', url: 'https://uizard.io/', image: 'https://picsum.photos/seed/uizard/600/400', dataAiHint: 'wireframe design', pricing: 'Freemium' },
            { name: 'Let\'s Enhance', description: 'AI image upscaler and enhancer.', url: 'https://letsenhance.io/', image: 'https://picsum.photos/seed/letsenhance/600/400', dataAiHint: 'image upscaler', pricing: 'Freemium' },
            { name: 'Remove.bg', description: 'Remove image backgrounds automatically.', url: 'https://www.remove.bg/', image: 'https://picsum.photos/seed/removebg/600/400', dataAiHint: 'background remover', pricing: 'Freemium' },
        ]
    },
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
    ...graphicDesignToolData.flatMap(cat => cat.tools)
];

export const allTools: Tool[] = Array.from(new Set(allData.map(t => t.name))).map(name => {
    return allData.find(t => t.name === name)!
});

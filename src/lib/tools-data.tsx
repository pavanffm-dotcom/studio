
import { 
    Briefcase, DollarSign, UserCog, CreditCard, Users, MessageSquare, Video, Megaphone, BarChart, GitBranch, ListChecks, Lightbulb, Cpu, Code, Filter, TrendingUp, Link2, Server, Layers,
    Paintbrush, Youtube, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, GraduationCap, Scissors, Film, ImageIcon, Palette, Bot, Mic2, FileText,
    Terminal, Database, CloudCog, Bug, Box, TerminalSquare, PackageCheck, Shield, Smartphone, Gamepad2, TestTube, Gauge,
    LayoutDashboard, BookOpen, Contact, Gem, MonitorPlay, Wallet, Receipt, FileSignature, Folder, Workflow, Clock, Timer, Hourglass, Share, Copy, RotateCw, Cloud, Sparkles, BookCopy, Mail, ShoppingCart, Layout, ImagePlay, Shapes, UserCircle, BrainCircuit, Newspaper, BoxSelect, MousePointerClick, BookCopy as BookCopyIcon, Wallpaper, Car, Store, TowerControl, Truck, SquareParking, PenTool, Feather, Key, Quote, Tv, Building, FileCheck, Scale, ClipboardCheck, Settings, Target
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
        title: "Marketing & Advertising Tools",
        icon: <Megaphone className="w-5 h-5"/>,
        tools: [
            // Marketing Automation & Suites
            { name: 'HubSpot', description: 'All-in-one marketing, sales, and service software.', url: 'https://www.hubspot.com/', image: 'https://picsum.photos/seed/hubspot-mktg/600/400', dataAiHint: 'crm marketing', pricing: 'Freemium' },
            { name: 'Marketo', description: 'Marketing automation for account-based marketing.', url: 'https://www.marketo.com/', image: 'https://picsum.photos/seed/marketo-mktg/600/400', dataAiHint: 'b2b marketing', pricing: 'Paid' },
            { name: 'Salesforce Marketing Cloud', description: 'Digital marketing automation and analytics software.', url: 'https://www.salesforce.com/products/marketing-cloud/overview/', image: 'https://picsum.photos/seed/sfmc-mktg/600/400', dataAiHint: 'marketing cloud', pricing: 'Paid' },
            { name: 'Adobe Marketing Cloud', description: 'A complete set of marketing solutions.', url: 'https://business.adobe.com/products/marketing-cloud/adobe-marketing-cloud.html', image: 'https://picsum.photos/seed/adobe-mktg-cloud/600/400', dataAiHint: 'adobe suite', pricing: 'Paid' },
            { name: 'Pardot', description: 'B2B marketing automation by Salesforce.', url: 'https://www.pardot.com/', image: 'https://picsum.photos/seed/pardot-mktg/600/400', dataAiHint: 'b2b automation', pricing: 'Paid' },
            
            // SEO Tools
            { name: 'SEMrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-mktg/600/400', dataAiHint: 'seo tools', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'All-in-one SEO toolset.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-mktg/600/400', dataAiHint: 'backlink analysis', pricing: 'Paid' },
            { name: 'Moz Pro', description: 'SEO software and data.', url: 'https://moz.com/products/pro', image: 'https://picsum.photos/seed/mozpro-mktg/600/400', dataAiHint: 'search engine', pricing: 'Paid' },
            { name: 'Screaming Frog SEO Spider', description: 'Website crawler for improving onsite SEO.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog-mktg/600/400', dataAiHint: 'technical seo', pricing: 'Freemium' },
            { name: 'Yoast SEO', description: 'The #1 WordPress SEO Plugin.', url: 'https://yoast.com/', image: 'https://picsum.photos/seed/yoast-mktg/600/400', dataAiHint: 'wordpress seo', pricing: 'Freemium' },

            // Content Marketing
            { name: 'BuzzSumo', description: 'Find the most shared content.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-mktg/600/400', dataAiHint: 'content marketing', pricing: 'Freemium' },
            { name: 'SurferSEO', description: 'Content intelligence tool to help you write better content.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-mktg/600/400', dataAiHint: 'on-page seo', pricing: 'Paid' },
            { name: 'Frase', description: 'AI to research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-mktg/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-mktg/600/400', dataAiHint: 'content strategy', pricing: 'Paid' },
            { name: 'Clearscope', description: 'Best-in-class SEO content optimization.', url: 'https://www.clearscope.io/', image: 'https://picsum.photos/seed/clearscope-mktg/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            
            // Advertising
            { name: 'Google Ads', description: 'Online advertising platform.', url: 'https://ads.google.com/', image: 'https://picsum.photos/seed/googleads-mktg/600/400', dataAiHint: 'ppc advertising', pricing: 'Paid' },
            { name: 'Facebook Ads Manager', description: 'Create and manage Facebook ads.', url: 'https://www.facebook.com/business/tools/ads-manager', image: 'https://picsum.photos/seed/fbads-mktg/600/400', dataAiHint: 'social media ads', pricing: 'Paid' },
            { name: 'LinkedIn Marketing Solutions', description: 'Reach a professional audience.', url: 'https://business.linkedin.com/marketing-solutions', image: 'https://picsum.photos/seed/linkedin-mktg-sol/600/400', dataAiHint: 'b2b advertising', pricing: 'Paid' },
            { name: 'Twitter Ads', description: 'Promote your brand on Twitter.', url: 'https://ads.twitter.com/', image: 'https://picsum.photos/seed/twitterads-mktg/600/400', dataAiHint: 'twitter marketing', pricing: 'Paid' },
            { name: 'Pinterest Ads', description: 'Reach people looking for inspiration.', url: 'https://ads.pinterest.com/', image: 'https://picsum.photos/seed/pinterestads-mktg/600/400', dataAiHint: 'visual discovery', pricing: 'Paid' },

            // Analytics & Testing
            { name: 'Optimizely', description: 'The world\'s leading experimentation platform.', url: 'https://www.optimizely.com/', image: 'https://picsum.photos/seed/optimizely-mktg/600/400', dataAiHint: 'a/b testing', pricing: 'Paid' },
            { name: 'VWO', description: 'A/B testing and conversion optimization platform.', url: 'https://vwo.com/', image: 'https://picsum.photos/seed/vwo-mktg/600/400', dataAiHint: 'cro platform', pricing: 'Paid' },
            { name: 'Hotjar', description: 'Understand how users behave on your site.', url: 'https://www.hotjar.com/', image: 'https://picsum.photos/seed/hotjar-mktg/600/400', dataAiHint: 'heatmaps', pricing: 'Freemium' },
            { name: 'Crazy Egg', description: 'Website optimization and heatmaps.', url: 'https://www.crazyegg.com/', image: 'https://picsum.photos/seed/crazyegg-mktg/600/400', dataAiHint: 'user behavior', pricing: 'Paid' },
            
            // Landing Pages & Funnels
            { name: 'Unbounce', description: 'Build, test, and optimize landing pages.', url: 'https://unbounce.com/', image: 'https://picsum.photos/seed/unbounce-mktg/600/400', dataAiHint: 'landing page builder', pricing: 'Paid' },
            { name: 'Leadpages', description: 'Website & landing page builder.', url: 'https://www.leadpages.com/', image: 'https://picsum.photos/seed/leadpages-mktg/600/400', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Instapage', description: 'Landing page platform for advertisers.', url: 'https://instapage.com/', image: 'https://picsum.photos/seed/instapage-mktg/600/400', dataAiHint: 'ad landing pages', pricing: 'Paid' },
            
            // Additional Marketing Tools
            { name: 'SpyFu', description: 'Competitor keyword research tools for AdWords.', url: 'https://www.spyfu.com/', image: 'https://picsum.photos/seed/spyfu-mktg/600/400', dataAiHint: 'adwords tool', pricing: 'Paid' },
            { name: 'Majestic', description: 'The planet\'s largest link index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic-mktg/600/400', dataAiHint: 'link building', pricing: 'Paid' },
            { name: 'CognitiveSEO', description: 'A complete SEO software suite.', url: 'https://cognitiveseo.com/', image: 'https://picsum.photos/seed/cognitiveseo-mktg/600/400', dataAiHint: 'seo analysis', pricing: 'Paid' },
            { name: 'Advanced Web Ranking', description: 'Fresh SERP rankings for your SEO campaigns.', url: 'https://www.awrcloud.com/', image: 'https://picsum.photos/seed/awrcloud-mktg/600/400', dataAiHint: 'rank tracking', pricing: 'Paid' },
            { name: 'Sitebulb', description: 'Website crawler for SEO professionals.', url: 'https://sitebulb.com/', image: 'https://picsum.photos/seed/sitebulb-mktg/600/400', dataAiHint: 'website audit', pricing: 'Paid' },
            { name: 'Rank Math', description: 'The Swiss Army Knife of WordPress SEO.', url: 'https://rankmath.com/', image: 'https://picsum.photos/seed/rankmath-mktg/600/400', dataAiHint: 'wordpress seo plugin', pricing: 'Freemium' },
            { name: 'Google Search Console', description: 'Tools and reports for website search performance.', url: 'https://search.google.com/search-console/', image: 'https://picsum.photos/seed/gsc-mktg/600/400', dataAiHint: 'google webmaster', pricing: 'Free' },
            { name: 'Bing Webmaster Tools', description: 'Free tools to help you with your site.', url: 'https://www.bing.com/webmasters/', image: 'https://picsum.photos/seed/bing-webmaster-mktg/600/400', dataAiHint: 'bing seo', pricing: 'Free' },
            { name: 'DeepCrawl', description: 'Technical SEO platform for enterprise sites.', url: 'https://www.lyst.com/deepcrawl/', image: 'https://picsum.photos/seed/deepcrawl-mktg/600/400', dataAiHint: 'enterprise technical seo', pricing: 'Paid' },
            { name: 'Botify', description: 'The leading enterprise SEO platform.', url: 'https://www.botify.com/', image: 'https://picsum.photos/seed/botify-mktg/600/400', dataAiHint: 'enterprise seo platform', pricing: 'Paid' },
            { name: 'Pitchbox', description: 'Influencer outreach & content marketing platform.', url: 'https://pitchbox.com/', image: 'https://picsum.photos/seed/pitchbox-mktg/600/400', dataAiHint: 'outreach platform', pricing: 'Paid' },
            { name: 'HARO (Help a Reporter Out)', description: 'Get featured in the media.', url: 'https://www.helpareporter.com/', image: 'https://picsum.photos/seed/haro-mktg/600/400', dataAiHint: 'media outreach', pricing: 'Free' },
            { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://picsum.photos/seed/brand24-mktg/600/400', dataAiHint: 'brand mentions', pricing: 'Paid' },
            { name: 'Mention', description: 'Social media and web monitoring.', url: 'https://mention.com/', image: 'https://picsum.photos/seed/mention-mktg/600/400', dataAiHint: 'web monitoring', pricing: 'Freemium' },
            { name: 'Google Alerts', description: 'Monitor the web for interesting new content.', url: 'https://www.google.com/alerts', image: 'https://picsum.photos/seed/googlealerts-mktg/600/400', dataAiHint: 'web alerts', pricing: 'Free' },
            { name: 'BrightLocal', description: 'Local SEO tools for agencies and businesses.', url: 'https://www.brightlocal.com/', image: 'https://picsum.photos/seed/brightlocal-mktg/600/400', dataAiHint: 'local marketing', pricing: 'Paid' },
            { name: 'Yext', description: 'The AI Search Company.', url: 'https://www.yext.com/', image: 'https://picsum.photos/seed/yext-mktg/600/400', dataAiHint: 'search company', pricing: 'Paid' },
            { name: 'Whitespark', description: 'Tools and services to help you win at local search.', url: 'https://whitespark.ca/', image: 'https://picsum.photos/seed/whitespark-mktg/600/400', dataAiHint: 'local search', pricing: 'Freemium' },
            { name: 'AnswerThePublic', description: 'Search listening tool for content ideas.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/answerthepublic-mktg/600/400', dataAiHint: 'keyword ideas', pricing: 'Freemium' },
            { name: 'Google Trends', description: 'Explore what the world is searching for.', url: 'https://trends.google.com/', image: 'https://picsum.photos/seed/gtrends-mktg/600/400', dataAiHint: 'search trends', pricing: 'Free' },
            { name: 'Similarweb', description: 'Measure your digital world.', url: 'https://www.similarweb.com/', image: 'https://picsum.photos/seed/similarweb/600/400', dataAiHint: 'competitor analysis', pricing: 'Freemium' },
            { name: 'AdRoll', description: 'E-commerce marketing platform.', url: 'https://www.adroll.com/', image: 'https://picsum.photos/seed/adroll/600/400', dataAiHint: 'retargeting ads', pricing: 'Paid' },
            { name: 'Criteo', description: 'The Commerce Media Platform.', url: 'https://www.criteo.com/', image: 'https://picsum.photos/seed/criteo/600/400', dataAiHint: 'commerce media', pricing: 'Paid' },
        ]
    },
    {
        title: "Sales Tools",
        icon: <TrendingUp className="w-5 h-5"/>,
        tools: [
            { name: 'Salesforce', description: 'The Customer Company. #1 CRM.', url: 'https://www.salesforce.com/', image: 'https://picsum.photos/seed/salesforce-crm/600/400', dataAiHint: 'customer 360', pricing: 'Paid' },
            { name: 'HubSpot CRM', description: 'Free CRM software with everything you need to grow.', url: 'https://www.hubspot.com/products/crm', image: 'https://picsum.photos/seed/hubspot-crm/600/400', dataAiHint: 'sales software', pricing: 'Free' },
            { name: 'Pipedrive', description: 'CRM and sales pipeline management tool.', url: 'https://www.pipedrive.com/', image: 'https://picsum.photos/seed/pipedrive/600/400', dataAiHint: 'sales pipeline', pricing: 'Paid' },
            { name: 'Zoho CRM', description: 'Convert more leads, engage with customers, and grow.', url: 'https://www.zoho.com/crm/', image: 'https://picsum.photos/seed/zoho-crm/600/400', dataAiHint: 'business crm', pricing: 'Freemium' },
            { name: 'ClickFunnels', description: 'Sales funnel builder.', url: 'https://www.clickfunnels.com/', image: 'https://picsum.photos/seed/clickfunnels-digital/600/400', dataAiHint: 'sales funnels', pricing: 'Paid' },
            { name: 'Copper', description: 'The CRM for Google Workspace.', url: 'https://www.copper.com/', image: 'https://picsum.photos/seed/copper/600/400', dataAiHint: 'google crm', pricing: 'Paid' },
            { name: 'Insightly', description: 'A modern CRM to align sales, marketing, and projects.', url: 'https://www.insightly.com/', image: 'https://picsum.photos/seed/insightly/600/400', dataAiHint: 'modern crm', pricing: 'Freemium' },
            { name: 'Capsule', description: 'The smart simple CRM.', url: 'https://capsulecrm.com/', image: 'https://picsum.photos/seed/capsule/600/400', dataAiHint: 'simple crm', pricing: 'Freemium' },
        ]
    },
    {
        title: "Customer Support Tools",
        icon: <Users className="w-5 h-5"/>,
        tools: [
            { name: 'Zendesk', description: 'Customer service software & sales CRM.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/zendesk/600/400', dataAiHint: 'support tickets', pricing: 'Paid' },
            { name: 'Freshdesk', description: 'Customer service software by Freshworks.', url: 'https://freshdesk.com/', image: 'https://picsum.photos/seed/freshdesk/600/400', dataAiHint: 'helpdesk software', pricing: 'Freemium' },
            { name: 'Intercom', description: 'Customer messaging platform.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-digital/600/400', dataAiHint: 'live chat', pricing: 'Paid' },
            { name: 'Drift', description: 'Revenue acceleration platform.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-digital/600/400', dataAiHint: 'conversational marketing', pricing: 'Paid' },
        ]
    },
    {
        title: "Productivity & Task Management",
        icon: <ListChecks className="w-5 h-5"/>,
        tools: [
            { name: 'Trello', description: 'Collaborate, manage projects, and reach new productivity peaks.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-prod/600/400', dataAiHint: 'kanban board', pricing: 'Freemium' },
            { name: 'Asana', description: 'Manage your team’s work, projects, & tasks online.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-prod/600/400', dataAiHint: 'work management', pricing: 'Freemium' },
            { name: 'Todoist', description: 'The to-do list to organize work & life.', url: 'https://todoist.com/', image: 'https://picsum.photos/seed/todoist-prod/600/400', dataAiHint: 'task list', pricing: 'Freemium' },
            { name: 'ClickUp', description: 'One app to replace them all. It\'s the future of work.', url: 'https://clickup.com/', image: 'https://picsum.photos/seed/clickup/600/400', dataAiHint: 'productivity platform', pricing: 'Freemium' },
        ]
    },
    {
        title: "Project Management Tools",
        icon: <Layers className="w-5 h-5"/>,
        tools: [
            { name: 'Monday.com', description: 'A work operating system where teams run their projects.', url: 'https://monday.com/', image: 'https://picsum.photos/seed/monday/600/400', dataAiHint: 'work os', pricing: 'Paid' },
            { name: 'Jira', description: 'The #1 software development tool used by agile teams.', url: 'https://www.atlassian.com/software/jira', image: 'https://picsum.photos/seed/jira/600/400', dataAiHint: 'agile development', pricing: 'Freemium' },
            { name: 'Basecamp', description: 'The All-In-One Toolkit for Working Remotely.', url: 'https://basecamp.com/', image: 'https://picsum.photos/seed/basecamp/600/400', dataAiHint: 'remote work', pricing: 'Paid' },
        ]
    },
    {
        title: "Finance & Accounting",
        icon: <DollarSign className="w-5 h-5"/>,
        tools: [
            { name: 'QuickBooks', description: 'Smart, simple online accounting software.', url: 'https://quickbooks.intuit.com/', image: 'https://picsum.photos/seed/quickbooks/600/400', dataAiHint: 'accounting software', pricing: 'Paid' },
            { name: 'Xero', description: 'Online accounting software for your small business.', url: 'https://www.xero.com/', image: 'https://picsum.photos/seed/xero/600/400', dataAiHint: 'small business', pricing: 'Paid' },
            { name: 'FreshBooks', description: 'Accounting software built for owners.', url: 'https://www.freshbooks.com/', image: 'https://picsum.photos/seed/freshbooks/600/400', dataAiHint: 'invoicing freelance', pricing: 'Paid' },
            { name: 'Wave', description: 'Free invoicing & accounting software for small businesses.', url: 'https://www.waveapps.com/', image: 'https://picsum.photos/seed/wave/600/400', dataAiHint: 'free accounting', pricing: 'Free' },
            { name: 'Stripe', description: 'Online payment processing for internet businesses.', url: 'https://stripe.com/', image: 'https://picsum.photos/seed/stripe/600/400', dataAiHint: 'payment processing', pricing: 'Paid' },
            { name: 'PayPal', description: 'A simpler, safer way to pay and get paid.', url: 'https://www.paypal.com/', image: 'https://picsum.photos/seed/paypal/600/400', dataAiHint: 'online payments', pricing: 'Paid' },
        ]
    },
    {
        title: "HR & Hiring Tools",
        icon: <UserCog className="w-5 h-5"/>,
        tools: [
            { name: 'Gusto', description: 'An all-in-one platform for payroll, benefits, and HR.', url: 'https://gusto.com/', image: 'https://picsum.photos/seed/gusto/600/400', dataAiHint: 'payroll hr', pricing: 'Paid' },
            { name: 'Rippling', description: 'The first way to manage all your HR & IT.', url: 'https://www.rippling.com/', image: 'https://picsum.photos/seed/rippling/600/400', dataAiHint: 'hr it', pricing: 'Paid' },
            { name: 'BambooHR', description: 'The #1 Online HR Software for Small and Medium Business.', url: 'https://www.bamboohr.com/', image: 'https://picsum.photos/seed/bamboohr/600/400', dataAiHint: 'hr software', pricing: 'Paid' },
            { name: 'Deel', description: 'The all-in-one HR platform for global teams.', url: 'https://www.deel.com/', image: 'https://picsum.photos/seed/deel/600/400', dataAiHint: 'global payroll', pricing: 'Paid' },
            { name: 'Greenhouse', description: 'Hiring software for growing companies.', url: 'https://www.greenhouse.io/', image: 'https://picsum.photos/seed/greenhouse/600/400', dataAiHint: 'recruiting software', pricing: 'Paid' },
            { name: 'Lever', description: 'Talent acquisition suite.', url: 'https://www.lever.co/', image: 'https://picsum.photos/seed/lever/600/400', dataAiHint: 'applicant tracking', pricing: 'Paid' },
        ]
    },
    {
        title: "Content Creation",
        icon: <Paintbrush className="w-5 h-5"/>,
        tools: [
            { name: 'Canva', description: 'Design anything.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-digital/600/400', dataAiHint: 'graphic design', pricing: 'Freemium' },
            { name: 'Adobe Express', description: 'Quickly and easily make standout content.', url: 'https://www.adobe.com/express/', image: 'https://picsum.photos/seed/adobe-express/600/400', dataAiHint: 'quick content', pricing: 'Freemium' },
            { name: 'Veed.io', description: 'Online video editor with AI features.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-editing/600/400', dataAiHint: 'online editor', pricing: 'Freemium' },
            { name: 'Descript', description: 'Edit video by editing text.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-editing/600/400', dataAiHint: 'text-based editing', pricing: 'Freemium' },
        ]
    },
    {
        title: "Website & App Development",
        icon: <Code className="w-5 h-5"/>,
        tools: [
            { name: 'Webflow', description: 'Build responsive websites visually.', url: 'https://webflow.com/', image: 'https://picsum.photos/seed/webflow/600/400', dataAiHint: 'no-code website', pricing: 'Freemium' },
            { name: 'Bubble', description: 'The best way to build web apps without code.', url: 'https://bubble.io/', image: 'https://picsum.photos/seed/bubble/600/400', dataAiHint: 'no-code app', pricing: 'Freemium' },
            { name: 'GitHub', description: 'Where the world builds software.', url: 'https://github.com/', image: 'https://picsum.photos/seed/github/600/400', dataAiHint: 'code hosting', pricing: 'Freemium' },
            { name: 'GitLab', description: 'The One DevOps Platform.', url: 'https://about.gitlab.com/', image: 'https://picsum.photos/seed/gitlab/600/400', dataAiHint: 'devops platform', pricing: 'Freemium' },
        ]
    },
    {
        title: "Data Analytics & Automation",
        icon: <BarChart className="w-5 h-5"/>,
        tools: [
            { name: 'Google Analytics', description: 'Web analytics service.', url: 'https://analytics.google.com/', image: 'https://picsum.photos/seed/ga-digital/600/400', dataAiHint: 'website traffic', pricing: 'Free' },
            { name: 'Tableau', description: 'A visual analytics platform.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-digital/600/400', dataAiHint: 'data visualization', pricing: 'Paid' },
            { name: 'Zapier', description: 'Easy automation for busy people.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-digital/600/400', dataAiHint: 'workflow automation', pricing: 'Freemium' },
            { name: 'Make (Integromat)', description: 'A visual platform for any workflow.', url: 'https://www.make.com/en', image: 'https://picsum.photos/seed/make-digital/600/400', dataAiHint: 'visual automation', pricing: 'Freemium' },
        ]
    },
    {
        title: "Email Marketing Tools",
        icon: <Mail className="w-5 h-5"/>,
        tools: [
             { name: 'Mailchimp', description: 'Marketing automation and email marketing service.', url: 'https://mailchimp.com/', image: 'https://picsum.photos/seed/mailchimp-mktg/600/400', dataAiHint: 'email campaigns', pricing: 'Freemium' },
             { name: 'ActiveCampaign', description: 'Customer experience automation platform.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign-mktg/600/400', dataAiHint: 'marketing automation', pricing: 'Paid' },
             { name: 'Klaviyo', description: 'Email marketing and SMS for eCommerce.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo-mktg/600/400', dataAiHint: 'ecommerce marketing', pricing: 'Freemium' },
             { name: 'Constant Contact', description: 'Email & digital marketing platform.', url: 'https://www.constantcontact.com/', image: 'https://picsum.photos/seed/constantcontact-digital/600/400', dataAiHint: 'digital platform', pricing: 'Paid' },
        ]
    },
    {
        title: "Cybersecurity Tools",
        icon: <Shield className="w-5 h-5"/>,
        tools: [
            { name: 'Norton', description: 'Cyber Safety for your digital life.', url: 'https://us.norton.com/', image: 'https://picsum.photos/seed/norton/600/400', dataAiHint: 'antivirus software', pricing: 'Paid' },
            { name: 'McAfee', description: 'Antivirus and VPN - Security for your digital world.', url: 'https://www.mcafee.com/', image: 'https://picsum.photos/seed/mcafee/600/400', dataAiHint: 'internet security', pricing: 'Paid' },
            { name: 'CrowdStrike', description: 'Cloud-native endpoint security platform.', url: 'https://www.crowdstrike.com/', image: 'https://picsum.photos/seed/crowdstrike/600/400', dataAiHint: 'endpoint security', pricing: 'Paid' },
        ]
    },
    {
        title: "Business Planning & Strategy",
        icon: <Building className="w-5 h-5"/>,
        tools: [
            { name: 'LivePlan', description: 'Business plan software.', url: 'https://www.liveplan.com/', image: 'https://picsum.photos/seed/liveplan/600/400', dataAiHint: 'business planning', pricing: 'Paid' },
            { name: 'Aha!', description: 'Roadmap software for agile product development.', url: 'https://www.aha.io/', image: 'https://picsum.photos/seed/aha/600/400', dataAiHint: 'product roadmap', pricing: 'Paid' },
        ]
    },
    {
        title: "E-commerce Tools",
        icon: <ShoppingCart className="w-5 h-5"/>,
        tools: [
            { name: 'Shopify', description: 'The platform commerce is built on.', url: 'https://www.shopify.com/', image: 'https://picsum.photos/seed/shopify/600/400', dataAiHint: 'online store', pricing: 'Paid' },
            { name: 'BigCommerce', description: 'A leading Open SaaS ecommerce platform.', url: 'https://www.bigcommerce.com/', image: 'https://picsum.photos/seed/bigcommerce/600/400', dataAiHint: 'ecommerce platform', pricing: 'Paid' },
            { name: 'WooCommerce', description: 'An open-source eCommerce platform built on WordPress.', url: 'https://woocommerce.com/', image: 'https://picsum.photos/seed/woocommerce/600/400', dataAiHint: 'wordpress store', pricing: 'Free' },
        ]
    },
    {
        title: "Social Media Management",
        icon: <Users className="w-5 h-5"/>,
        tools: [
            { name: 'Buffer', description: 'Social media management platform.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-digital/600/400', dataAiHint: 'social scheduling', pricing: 'Freemium' },
            { name: 'Hootsuite', description: 'Manage all your social media.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-digital/600/400', dataAiHint: 'social media tool', pricing: 'Paid' },
            { name: 'Sprout Social', description: 'Social media management solutions.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sproutsocial-digital/600/400', dataAiHint: 'social analytics', pricing: 'Paid' },
        ]
    },
    {
        title: "Legal & Compliance Tools",
        icon: <Scale className="w-5 h-5"/>,
        tools: [
            { name: 'LegalZoom', description: 'Online legal services.', url: 'https://www.legalzoom.com/', image: 'https://picsum.photos/seed/legalzoom/600/400', dataAiHint: 'legal documents', pricing: 'Paid' },
            { name: 'DocuSign', description: 'The #1 way to sign and send documents.', url: 'https://www.docusign.com/', image: 'https://picsum.photos/seed/docusign/600/400', dataAiHint: 'e-signature', pricing: 'Paid' },
        ]
    },
    {
        title: "Document & Office Tools",
        icon: <FileCheck className="w-5 h-5"/>,
        tools: [
            { name: 'Microsoft 365', description: 'The world\'s productivity cloud.', url: 'https://www.microsoft.com/en-us/microsoft-365', image: 'https://picsum.photos/seed/m365/600/400', dataAiHint: 'office suite', pricing: 'Paid' },
            { name: 'Google Workspace', description: 'Gmail, Docs, Drive, Calendar for business.', url: 'https://workspace.google.com/', image: 'https://picsum.photos/seed/gworkspace/600/400', dataAiHint: 'collaboration tools', pricing: 'Paid' },
            { name: 'Notion', description: 'The all-in-one workspace for your notes, tasks, wikis.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-digital/600/400', dataAiHint: 'team collaboration', pricing: 'Freemium' },
        ]
    },
    {
        title: "Communication Tools",
        icon: <MessageSquare className="w-5 h-5"/>,
        tools: [
            { name: 'Slack', description: 'Where work happens.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack-comm/600/400', dataAiHint: 'team chat', pricing: 'Freemium' },
            { name: 'Microsoft Teams', description: 'The hub for teamwork in Microsoft 365.', url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', image: 'https://picsum.photos/seed/msteams/600/400', dataAiHint: 'video conferencing', pricing: 'Freemium' },
            { name: 'Zoom', description: 'Video conferencing, cloud phone, webinars, chat.', url: 'https://zoom.us/', image: 'https://picsum.photos/seed/zoom/600/400', dataAiHint: 'virtual meetings', pricing: 'Freemium' },
            { name: 'Discord', description: 'Your place to talk and hang out.', url: 'https://discord.com/', image: 'https://picsum.photos/seed/discord/600/400', dataAiHint: 'community chat', pricing: 'Free' },
        ]
    }
];


export const productivityToolData: ToolCategory[] = [
    {
        title: "Task & Project Management",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Trello', description: 'Collaborate, manage projects, and reach new productivity peaks.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-prod/600/400', dataAiHint: 'kanban board', pricing: 'Freemium' },
            { name: 'Asana', description: 'Manage your team’s work, projects, & tasks online.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-prod/600/400', dataAiHint: 'work management', pricing: 'Freemium' },
            { name: 'Todoist', description: 'The to-do list to organize work & life.', url: 'https://todoist.com/', image: 'https://picsum.photos/seed/todoist-prod/600/400', dataAiHint: 'task list', pricing: 'Freemium' },
            { name: 'ClickUp', description: 'One app to replace them all. It\'s the future of work.', url: 'https://clickup.com/', image: 'https://picsum.photos/seed/clickup/600/400', dataAiHint: 'productivity platform', pricing: 'Freemium' },
            { name: 'Monday.com', description: 'A work operating system where teams run their projects and workflows.', url: 'https://monday.com/', image: 'https://picsum.photos/seed/monday/600/400', dataAiHint: 'work os', pricing: 'Paid' },
        ]
    },
    {
        title: "Note-Taking & Knowledge Management",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion', description: 'The all-in-one workspace for your notes, tasks, wikis, and databases.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-prod/600/400', dataAiHint: 'workspace app', pricing: 'Freemium' },
            { name: 'Evernote', description: 'Remember everything. Accomplish anything.', url: 'https://evernote.com/', image: 'https://picsum.photos/seed/evernote/600/400', dataAiHint: 'digital notebook', pricing: 'Freemium' },
            { name: 'Obsidian', description: 'A powerful knowledge base on top of a local folder of plain text files.', url: 'https://obsidian.md/', image: 'https://picsum.photos/seed/obsidian/600/400', dataAiHint: 'second brain', pricing: 'Free' },
            { name: 'Roam Research', description: 'A note-taking tool for networked thought.', url: 'https://roamresearch.com/', image: 'https://picsum.photos/seed/roam/600/400', dataAiHint: 'networked thought', pricing: 'Paid' },
            { name: 'Airtable', description: 'Connect everything. Achieve anything.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable/600/400', dataAiHint: 'spreadsheet database', pricing: 'Freemium' },
        ]
    },
    {
        title: "Time Management & Focus",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'RescueTime', description: 'Find your ideal work-life balance.', url: 'https://www.rescuetime.com/', image: 'https://picsum.photos/seed/rescuetime/600/400', dataAiHint: 'time tracking', pricing: 'Freemium' },
            { name: 'Toggl Track', description: 'Effortless time tracking and reporting.', url: 'https://toggl.com/track/', image: 'https://picsum.photos/seed/toggl/600/400', dataAiHint: 'work timer', pricing: 'Freemium' },
            { name: 'Forest', description: 'Stay focused, be present.', url: 'https://www.forestapp.cc/', image: 'https://picsum.photos/seed/forest/600/400', dataAiHint: 'focus timer', pricing: 'Freemium' },
            { name: 'Focus@Will', description: 'Music scientifically optimized for focus.', url: 'https://www.focusatwill.com/', image: 'https://picsum.photos/seed/focusatwill/600/400', dataAiHint: 'focus music', pricing: 'Paid' },
            { name: 'Freedom', description: 'Block websites, apps, and the internet to be more productive.', url: 'https://freedom.to/', image: 'https://picsum.photos/seed/freedom/600/400', dataAiHint: 'distraction blocker', pricing: 'Paid' },
        ]
    }
];


export const graphicDesignToolData: ToolCategory[] = [
    {
        title: 'Social Media',
        icon: <Youtube className="w-5 h-5" />,
        tools: [
            { name: 'Canva', description: 'Design anything. Publish anywhere.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-design/600/400', dataAiHint: 'social media design', pricing: 'Freemium' },
            { name: 'Adobe Express', description: 'Quickly and easily make standout content.', url: 'https://www.adobe.com/express/', image: 'https://picsum.photos/seed/adobe-express/600/400', dataAiHint: 'quick content', pricing: 'Freemium' },
            { name: 'Fotor', description: 'Online photo editor and design maker.', url: 'https://www.fotor.com/', image: 'https://picsum.photos/seed/fotor-design/600/400', dataAiHint: 'photo design', pricing: 'Freemium' },
            { name: 'Visme', description: 'Create presentations, infographics, and more.', url: 'https://www.visme.co/', image: 'https://picsum.photos/seed/visme-design/600/400', dataAiHint: 'visual content', pricing: 'Freemium' },
            { name: 'Snappa', description: 'Create online graphics in a snap.', url: 'https://snappa.com/', image: 'https://picsum.photos/seed/snappa-design/600/400', dataAiHint: 'fast graphics', pricing: 'Freemium' },
            { name: 'Piktochart', description: 'Create infographics, reports, presentations.', url: 'https://piktochart.com/', image: 'https://picsum.photos/seed/piktochart-design/600/400', dataAiHint: 'data visualization', pricing: 'Freemium' },
            { name: 'Easil', description: 'Drag-and-drop design tool.', url: 'https://about.easil.com/', image: 'https://picsum.photos/seed/easil-design/600/400', dataAiHint: 'design templates', pricing: 'Freemium' },
            { name: 'Stencil', description: 'The fastest way to create beautiful visuals.', url: 'https://getstencil.com/', image: 'https://picsum.photos/seed/stencil-design/600/400', dataAiHint: 'image creator', pricing: 'Freemium' },
        ],
    },
    {
        title: 'Logo Makers',
        icon: <Gem className="w-5 h-5" />,
        tools: [
            { name: 'Looka', description: 'AI-powered logo maker and branding platform.', url: 'https://looka.com/', image: 'https://picsum.photos/seed/looka-design/600/400', dataAiHint: 'logo branding', pricing: 'Paid' },
            { name: 'Tailor Brands', description: 'An all-in-one branding platform.', url: 'https://www.tailorbrands.com/', image: 'https://picsum.photos/seed/tailor-brands/600/400', dataAiHint: 'branding platform', pricing: 'Paid' },
            { name: 'Brandmark.io', description: 'Create a unique and professional logo.', url: 'https://brandmark.io/', image: 'https://picsum.photos/seed/brandmark-design/600/400', dataAiHint: 'professional logo', pricing: 'Paid' },
            { name: 'Hatchful', description: 'Shopify\'s free logo maker.', url: 'https://hatchful.shopify.com/', image: 'https://picsum.photos/seed/hatchful-design/600/400', dataAiHint: 'shopify logo', pricing: 'Free' },
            { name: 'Wix Logo Maker', description: 'Create a logo you\'ll love.', url: 'https://www.wix.com/logo/maker', image: 'https://picsum.photos/seed/wix-logo/600/400', dataAiHint: 'wix logo', pricing: 'Free' },
        ],
    },
    {
        title: 'Illustration & Drawing',
        icon: <PenTool className="w-5 h-5" />,
        tools: [
            { name: 'Adobe Illustrator', description: 'The industry-standard vector graphics software.', url: 'https://www.adobe.com/products/illustrator.html', image: 'https://picsum.photos/seed/illustrator-design/600/400', dataAiHint: 'vector art', pricing: 'Paid' },
            { name: 'Procreate', description: 'Create beautiful sketches, paintings, and illustrations.', url: 'https://procreate.art/', image: 'https://picsum.photos/seed/procreate-design/600/400', dataAiHint: 'ipad drawing', pricing: 'Paid' },
            { name: 'Affinity Designer', description: 'Professional graphic design software.', url: 'https://affinity.serif.com/en-us/designer/', image: 'https://picsum.photos/seed/affinity-design/600/400', dataAiHint: 'vector illustration', pricing: 'Paid' },
            { name: 'Krita', description: 'A professional FREE and open source painting program.', url: 'https://krita.org/en/', image: 'https://picsum.photos/seed/krita-design/600/400', dataAiHint: 'digital painting', pricing: 'Free' },
        ],
    },
    {
        title: 'UI/UX Design',
        icon: <LayoutDashboard className="w-5 h-5" />,
        tools: [
            { name: 'Figma', description: 'The collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-design/600/400', dataAiHint: 'ui design', pricing: 'Freemium' },
            { name: 'Sketch', description: 'The design toolkit for product designers.', url: 'https://www.sketch.com/', image: 'https://picsum.photos/seed/sketch-design/600/400', dataAiHint: 'product design', pricing: 'Paid' },
            { name: 'Adobe XD', description: 'UI/UX design and collaboration tool.', url: 'https://www.adobe.com/products/xd.html', image: 'https://picsum.photos/seed/adobexd-design/600/400', dataAiHint: 'ux design', pricing: 'Paid' },
            { name: 'InVision', description: 'Digital product design and development platform.', url: 'https://www.invisionapp.com/', image: 'https://picsum.photos/seed/invision-design/600/400', dataAiHint: 'prototyping tool', pricing: 'Freemium' },
        ],
    },
];

export const codingToolData: ToolCategory[] = [
    {
        title: "Code Editors / IDEs",
        icon: <Terminal className="w-5 h-5"/>,
        tools: [
            { name: 'Visual Studio Code', description: 'Free. Built on open source. Runs everywhere.', url: 'https://code.visualstudio.com/', image: 'https://picsum.photos/seed/vscode/600/400', dataAiHint: 'code editor', pricing: 'Free' },
            { name: 'WebStorm', description: 'The smartest JavaScript IDE by JetBrains.', url: 'https://www.jetbrains.com/webstorm/', image: 'https://picsum.photos/seed/webstorm/600/400', dataAiHint: 'javascript ide', pricing: 'Paid' },
            { name: 'Sublime Text', description: 'A sophisticated text editor for code, markup and prose.', url: 'https://www.sublimetext.com/', image: 'https://picsum.photos/seed/sublime/600/400', dataAiHint: 'text editor', pricing: 'Freemium' },
        ]
    },
];

export const writingToolData: ToolCategory[] = [
    {
        title: "Content Writing Tools",
        icon: <Feather className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper AI', description: 'AI Content Platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-content/600/400', dataAiHint: 'ai content', pricing: 'Paid' },
            { name: 'Writesonic', description: 'Create SEO-friendly content.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-content/600/400', dataAiHint: 'seo writing', pricing: 'Freemium' },
            { name: 'Rytr', description: 'A better, 10x faster way to write.', url: 'https://rytr.me/', image: 'https://picsum.photos/seed/rytr-content/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Copy.ai', description: 'Write better marketing copy.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-content/600/400', dataAiHint: 'copywriting tool', pricing: 'Freemium' },
            { name: 'Anyword', description: 'AI that converts.', url: 'https://anyword.com/', image: 'https://picsum.photos/seed/anyword-content/600/400', dataAiHint: 'ad copy', pricing: 'Paid' },
        ]
    },
    {
        title: "Blog Writing Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer AI', description: 'Write and optimize articles with AI.', url: 'https://surferseo.com/surfer-ai', image: 'https://picsum.photos/seed/surferai-blog/600/400', dataAiHint: 'ai article', pricing: 'Paid' },
            { name: 'Frase', description: 'Research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-blog/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'ContentBot', description: 'AI writer for bloggers and marketers.', url: 'https://contentbot.ai/', image: 'https://picsum.photos/seed/contentbot-blog/600/400', dataAiHint: 'ai blogger', pricing: 'Freemium' },
        ]
    },
    {
        title: "SEO Writing Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SurferSEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-seo/600/400', dataAiHint: 'seo audit', pricing: 'Paid' },
            { name: 'NeuronWriter', description: 'Optimize your content for Google.', url: 'https://neuronwriter.com/', image: 'https://picsum.photos/seed/neuronwriter-seo/600/400', dataAiHint: 'content optimizer', pricing: 'Paid' },
            { name: 'PageOptimizer Pro AI', description: 'On-page SEO tool for professionals.', url: 'https://pageoptimizer.pro/', image: 'https://picsum.photos/seed/pop-seo/600/400', dataAiHint: 'on-page seo', pricing: 'Paid' },
        ]
    },
    {
        title: "Article Rewriting / Paraphrasing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'QuillBot', description: 'AI-powered paraphrasing tool.', url: 'https://quillbot.com/', image: 'https://picsum.photos/seed/quillbot-rewrite/600/400', dataAiHint: 'paraphraser', pricing: 'Freemium' },
            { name: 'Spinbot', description: 'Article spinning, text rewriting, and content creation tool.', url: 'https://spinbot.com/', image: 'https://picsum.photos/seed/spinbot-rewrite/600/400', dataAiHint: 'text spinner', pricing: 'Freemium' },
            { name: 'Wordtune', description: 'Your personal writing companion.', url: 'https://www.wordtune.com/', image: 'https://picsum.photos/seed/wordtune-rewrite/600/400', dataAiHint: 'ai editor', pricing: 'Freemium' },
        ]
    },
    {
        title: "Script Writing Tools",
        icon: <Tv className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper Script Generator', description: 'Generate video scripts with AI.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-script/600/400', dataAiHint: 'video script', pricing: 'Paid' },
            { name: 'Writesonic Script AI', description: 'AI script writer for videos and podcasts.', url: 'https://writesonic.com/ai-script-writer', image: 'https://picsum.photos/seed/writesonic-script/600/400', dataAiHint: 'podcast script', pricing: 'Freemium' },
            { name: 'DeepStory', description: 'AI story and script generation.', url: 'https://deepstory.ai/', image: 'https://picsum.photos/seed/deepstory/600/400', dataAiHint: 'story generator', pricing: 'Paid' },
        ]
    },
    {
        title: "Social Media Writing Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Predis.ai', description: 'AI Social Media Marketing tool.', url: 'https://predis.ai/', image: 'https://picsum.photos/seed/predis-social/600/400', dataAiHint: 'social marketing', pricing: 'Freemium' },
            { name: 'Hypefury AI', description: 'Grow and monetize your Twitter account.', url: 'https://hypefury.com/', image: 'https://picsum.photos/seed/hypefury-social/600/400', dataAiHint: 'twitter growth', pricing: 'Paid' },
            { name: 'Buffer', description: 'Plan and schedule your social media campaigns.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-social/600/400', dataAiHint: 'social media campaigns', pricing: 'Freemium' },
        ]
    },
    {
        title: "Email Writing Tools",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Flowrite', description: 'Turn your instructions into ready-to-send emails.', url: 'https://www.flowrite.com/', image: 'https://picsum.photos/seed/flowrite-email/600/400', dataAiHint: 'ai email', pricing: 'Paid' },
            { name: 'Lavender AI', description: 'The AI email assistant.', url: 'https://www.lavender.ai/', image: 'https://picsum.photos/seed/lavender-email/600/400', dataAiHint: 'email assistant', pricing: 'Freemium' },
            { name: 'Gmass AI Writer', description: 'AI to write emails inside Gmail.', url: 'https://www.gmass.co/blog/ai-writer/', image: 'https://picsum.photos/seed/gmass-email/600/400', dataAiHint: 'gmail writer', pricing: 'Freemium' },
        ]
    },
    {
        title: "Ad Copywriting Tools",
        icon: <MonitorPlay className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Anyword Ad Copy', description: 'AI that generates and optimizes your copy.', url: 'https://anyword.com/', image: 'https://picsum.photos/seed/anyword-ad/600/400', dataAiHint: 'optimize copy', pricing: 'Paid' },
            { name: 'Jasper Ads', description: 'Generate high-converting ad copy.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-ad/600/400', dataAiHint: 'ad generator', pricing: 'Paid' },
            { name: 'Adcreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative-ad/600/400', dataAiHint: 'ad creatives', pricing: 'Paid' },
        ]
    },
    {
        title: "Creative Writing Tools",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sudowrite', description: 'The AI writing partner for fiction writers.', url: 'https://www.sudowrite.com/', image: 'https://picsum.photos/seed/sudowrite-creative/600/400', dataAiHint: 'fiction writer', pricing: 'Paid' },
            { name: 'NovelAI', description: 'AI-assisted authorship.', url: 'https://novelai.net/', image: 'https://picsum.photos/seed/novelai-creative/600/400', dataAiHint: 'ai authorship', pricing: 'Paid' },
            { name: 'AI Dungeon', description: 'A text-based AI adventure game.', url: 'https://aidungeon.io/', image: 'https://picsum.photos/seed/aidungeon/600/400', dataAiHint: 'ai game', pricing: 'Free' },
        ]
    }
];



export const allTools: Tool[] = Array.from(new Set([
    ...popularTools,
    ...imageToVideoTools,
    ...textToVideoTools,
    ...textToSpeechTools,
    ...voiceCloningTools,
    ...aiAvatarTools,
    ...textToImageTools,
    ...businessToolData.flatMap(cat => cat.tools),
    ...productivityToolData.flatMap(cat => cat.tools),
    ...graphicDesignToolData.flatMap(cat => cat.tools),
    ...codingToolData.flatMap(cat => cat.tools),
    ...writingToolData.flatMap(cat => cat.tools)
].map(t => t.name))).map(name => {
    return [
        ...popularTools,
        ...imageToVideoTools,
        ...textToVideoTools,
        ...textToSpeechTools,
        ...voiceCloningTools,
        ...aiAvatarTools,
        ...textToImageTools,
        ...businessToolData.flatMap(cat => cat.tools),
        ...productivityToolData.flatMap(cat => cat.tools),
        ...graphicDesignToolData.flatMap(cat => cat.tools),
        ...codingToolData.flatMap(cat => cat.tools),
        ...writingToolData.flatMap(cat => cat.tools),
    ].find(t => t.name === name)!
});

export const marketingSeoToolData: ToolCategory[] = [
    {
        title: "Digital Marketing Tools",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot', description: 'All-in-one marketing, sales, and service software.', url: 'https://www.hubspot.com/', image: 'https://picsum.photos/seed/hubspot-digital/600/400', dataAiHint: 'crm marketing', pricing: 'Freemium' },
            { name: 'Marketo', description: 'Marketing automation for account-based marketing.', url: 'https://www.marketo.com/', image: 'https://picsum.photos/seed/marketo-digital/600/400', dataAiHint: 'b2b marketing', pricing: 'Paid' },
            { name: 'ActiveCampaign', description: 'Customer experience automation platform.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign-digital/600/400', dataAiHint: 'email automation', pricing: 'Paid' },
            { name: 'Mailchimp', description: 'Marketing automation and email marketing service.', url: 'https://mailchimp.com/', image: 'https://picsum.photos/seed/mailchimp-digital/600/400', dataAiHint: 'email campaigns', pricing: 'Freemium' },
            { name: 'GetResponse', description: 'Inbound marketing software for businesses.', url: 'https://www.getresponse.com/', image: 'https://picsum.photos/seed/getresponse-digital/600/400', dataAiHint: 'inbound marketing', pricing: 'Freemium' },
            { name: 'Brevo (SendinBlue)', description: 'All-in-one marketing platform.', url: 'https://www.brevo.com/', image: 'https://picsum.photos/seed/sendinblue-digital/600/400', dataAiHint: 'marketing platform', pricing: 'Freemium' },
            { name: 'Zoho Campaigns', description: 'Email and social media marketing software.', url: 'https://www.zoho.com/campaigns/', image: 'https://picsum.photos/seed/zoho-campaigns/600/400', dataAiHint: 'social marketing', pricing: 'Freemium' },
            { name: 'Salesforce Marketing Cloud', description: 'Digital marketing automation and analytics software.', url: 'https://www.salesforce.com/products/marketing-cloud/overview/', image: 'https://picsum.photos/seed/sfmc-digital/600/400', dataAiHint: 'marketing cloud', pricing: 'Paid' },
            { name: 'Adobe Marketing Cloud', description: 'A complete set of marketing solutions.', url: 'https://business.adobe.com/products/marketing-cloud/adobe-marketing-cloud.html', image: 'https://picsum.photos/seed/adobe-mktg/600/400', dataAiHint: 'adobe suite', pricing: 'Paid' },
            { name: 'Pardot', description: 'B2B marketing automation by Salesforce.', url: 'https://www.pardot.com/', image: 'https://picsum.photos/seed/pardot-digital/600/400', dataAiHint: 'b2b automation', pricing: 'Paid' },
            { name: 'Klaviyo', description: 'Email marketing and SMS for eCommerce.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo-digital/600/400', dataAiHint: 'ecommerce marketing', pricing: 'Freemium' },
            { name: 'AWeber', description: 'Email marketing for small businesses.', url: 'https://www.aweber.com/', image: 'https://picsum.photos/seed/aweber-digital/600/400', dataAiHint: 'small business email', pricing: 'Freemium' },
            { name: 'Constant Contact', description: 'Email & digital marketing platform.', url: 'https://www.constantcontact.com/', image: 'https://picsum.photos/seed/constantcontact-digital/600/400', dataAiHint: 'digital platform', pricing: 'Paid' },
            { name: 'Drift', description: 'Revenue acceleration platform.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-digital/600/400', dataAiHint: 'conversational marketing', pricing: 'Paid' },
            { name: 'Intercom', description: 'Customer messaging platform.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-digital/600/400', dataAiHint: 'customer support', pricing: 'Paid' },
            { name: 'Google Ads', description: 'Online advertising platform.', url: 'https://ads.google.com/', image: 'https://picsum.photos/seed/googleads-digital/600/400', dataAiHint: 'ppc advertising', pricing: 'Paid' },
            { name: 'Facebook Ads Manager', description: 'Create and manage Facebook ads.', url: 'https://www.facebook.com/business/tools/ads-manager', image: 'https://picsum.photos/seed/fbads-digital/600/400', dataAiHint: 'social media ads', pricing: 'Paid' },
            { name: 'LinkedIn Marketing Solutions', description: 'Reach a professional audience.', url: 'https://business.linkedin.com/marketing-solutions', image: 'https://picsum.photos/seed/linkedin-mktg/600/400', dataAiHint: 'b2b advertising', pricing: 'Paid' },
            { name: 'Twitter Ads', description: 'Promote your brand on Twitter.', url: 'https://ads.twitter.com/', image: 'https://picsum.photos/seed/twitterads/600/400', dataAiHint: 'twitter marketing', pricing: 'Paid' },
            { name: 'Pinterest Ads', description: 'Reach people looking for inspiration.', url: 'https://ads.pinterest.com/', image: 'https://picsum.photos/seed/pinterestads/600/400', dataAiHint: 'visual discovery', pricing: 'Paid' },
            { name: 'SEMrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-digital/600/400', dataAiHint: 'seo tools', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'All-in-one SEO toolset.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-digital/600/400', dataAiHint: 'backlink analysis', pricing: 'Paid' },
            { name: 'Moz Pro', description: 'SEO software and data.', url: 'https://moz.com/products/pro', image: 'https://picsum.photos/seed/mozpro-digital/600/400', dataAiHint: 'search engine', pricing: 'Paid' },
            { name: 'BuzzSumo', description: 'Find the most shared content.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-digital/600/400', dataAiHint: 'content marketing', pricing: 'Freemium' },
            { name: 'Canva', description: 'Design anything.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-digital/600/400', dataAiHint: 'graphic design', pricing: 'Freemium' },
            { name: 'Buffer', description: 'Social media management platform.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-digital/600/400', dataAiHint: 'social scheduling', pricing: 'Freemium' },
            { name: 'Hootsuite', description: 'Manage all your social media.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-digital/600/400', dataAiHint: 'social media tool', pricing: 'Paid' },
            { name: 'Sprout Social', description: 'Social media management solutions.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sproutsocial-digital/600/400', dataAiHint: 'social analytics', pricing: 'Paid' },
            { name: 'Optimizely', description: 'The world\'s leading experimentation platform.', url: 'https://www.optimizely.com/', image: 'https://picsum.photos/seed/optimizely-digital/600/400', dataAiHint: 'a/b testing', pricing: 'Paid' },
            { name: 'VWO', description: 'A/B testing and conversion optimization platform.', url: 'https://vwo.com/', image: 'https://picsum.photos/seed/vwo-digital/600/400', dataAiHint: 'cro platform', pricing: 'Paid' },
            { name: 'Hotjar', description: 'Understand how users behave on your site.', url: 'https://www.hotjar.com/', image: 'https://picsum.photos/seed/hotjar-digital/600/400', dataAiHint: 'heatmaps', pricing: 'Freemium' },
            { name: 'Crazy Egg', description: 'Website optimization and heatmaps.', url: 'https://www.crazyegg.com/', image: 'https://picsum.photos/seed/crazyegg-digital/600/400', dataAiHint: 'user behavior', pricing: 'Paid' },
            { name: 'Unbounce', description: 'Build, test, and optimize landing pages.', url: 'https://unbounce.com/', image: 'https://picsum.photos/seed/unbounce-digital/600/400', dataAiHint: 'landing page builder', pricing: 'Paid' },
            { name: 'Leadpages', description: 'Website & landing page builder.', url: 'https://www.leadpages.com/', image: 'https://picsum.photos/seed/leadpages-digital/600/400', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Instapage', description: 'Landing page platform for advertisers.', url: 'https://instapage.com/', image: 'https://picsum.photos/seed/instapage-digital/600/400', dataAiHint: 'ad landing pages', pricing: 'Paid' },
            { name: 'ClickFunnels', description: 'Sales funnel builder.', url: 'https://www.clickfunnels.com/', image: 'https://picsum.photos/seed/clickfunnels-digital/600/400', dataAiHint: 'sales funnels', pricing: 'Paid' },
            { name: 'Typeform', description: 'Create forms, surveys, and quizzes.', url: 'https://www.typeform.com/', image: 'https://picsum.photos/seed/typeform-digital/600/400', dataAiHint: 'online forms', pricing: 'Freemium' },
            { name: 'SurveyMonkey', description: 'Survey software.', url: 'https://www.surveymonkey.com/', image: 'https://picsum.photos/seed/surveymonkey-digital/600/400', dataAiHint: 'online surveys', pricing: 'Freemium' },
            { name: 'Trello', description: 'Collaborate, manage projects, and reach new productivity peaks.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-digital/600/400', dataAiHint: 'project management', pricing: 'Freemium' },
            { name: 'Asana', description: 'Manage your team’s work, projects, & tasks.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-digital/600/400', dataAiHint: 'work management', pricing: 'Freemium' },
            { name: 'Slack', description: 'Where work happens.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack-digital/600/400', dataAiHint: 'team communication', pricing: 'Freemium' },
            { name: 'Zapier', description: 'Easy automation for busy people.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-digital/600/400', dataAiHint: 'workflow automation', pricing: 'Freemium' },
            { name: 'Make (Integromat)', description: 'A visual platform for any workflow.', url: 'https://www.make.com/en', image: 'https://picsum.photos/seed/make-digital/600/400', dataAiHint: 'visual automation', pricing: 'Freemium' },
            { name: 'Airtable', description: 'Connect everything. Achieve anything.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-digital/600/400', dataAiHint: 'spreadsheet database', pricing: 'Freemium' },
            { name: 'Notion', description: 'The all-in-one workspace.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-digital/600/400', dataAiHint: 'team collaboration', pricing: 'Freemium' },
            { name: 'Google Analytics', description: 'Web analytics service.', url: 'https://analytics.google.com/', image: 'https://picsum.photos/seed/ga-digital/600/400', dataAiHint: 'website traffic', pricing: 'Free' },
            { name: 'Mixpanel', description: 'Product analytics for converting, engaging, and retaining users.', url: 'https://mixpanel.com/', image: 'https://picsum.photos/seed/mixpanel-digital/600/400', dataAiHint: 'product analytics', pricing: 'Freemium' },
            { name: 'Amplitude', description: 'Digital Optimization System.', url: 'https://amplitude.com/', image: 'https://picsum.photos/seed/amplitude-digital/600/400', dataAiHint: 'user behavior', pricing: 'Freemium' },
            { name: 'Segment', description: 'Customer data platform.', url: 'https://segment.com/', image: 'https://picsum.photos/seed/segment-digital/600/400', dataAiHint: 'data platform', pricing: 'Freemium' },
            { name: 'Tableau', description: 'A visual analytics platform.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-digital/600/400', dataAiHint: 'data visualization', pricing: 'Paid' },
            { name: 'Looker', description: 'Business intelligence and big data analytics platform.', url: 'https://looker.com/', image: 'https://picsum.photos/seed/looker-digital/600/400', dataAiHint: 'data analytics', pricing: 'Paid' },
            { name: 'Power BI', description: 'Business analytics service by Microsoft.', url: 'https://powerbi.microsoft.com/', image: 'https://picsum.photos/seed/powerbi-digital/600/400', dataAiHint: 'microsoft bi', pricing: 'Freemium' },
        ]
    },
    {
        title: "SEO Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Ahrefs', description: 'All-in-one SEO toolset.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-seo-tools/600/400', dataAiHint: 'backlink analysis', pricing: 'Paid' },
            { name: 'SEMrush', description: 'Online visibility management and content marketing platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-seo-tools/600/400', dataAiHint: 'keyword research', pricing: 'Paid' },
            { name: 'Moz Pro', description: 'SEO software and data to help you increase traffic, rankings, and visibility.', url: 'https://moz.com/products/pro', image: 'https://picsum.photos/seed/mozpro-seo-tools/600/400', dataAiHint: 'seo software', pricing: 'Paid' },
            { name: 'Ubersuggest', description: 'Free keyword tool to generate new keyword ideas.', url: 'https://neilpatel.com/ubersuggest/', image: 'https://picsum.photos/seed/ubersuggest-seo/600/400', dataAiHint: 'keyword generator', pricing: 'Freemium' },
            { name: 'Mangools', description: 'Juicy SEO tools you will love.', url: 'https://mangools.com/', image: 'https://picsum.photos/seed/mangools-seo/600/400', dataAiHint: 'seo tools', pricing: 'Freemium' },
            { name: 'SE Ranking', description: 'All-in-one SEO software for business owners, pros, and agencies.', url: 'https://seranking.com/', image: 'https://picsum.photos/seed/seranking-seo/600/400', dataAiHint: 'agency seo', pricing: 'Paid' },
            { name: 'SpyFu', description: 'Competitor keyword research tools for AdWords.', url: 'https://www.spyfu.com/', image: 'https://picsum.photos/seed/spyfu-seo/600/400', dataAiHint: 'adwords tool', pricing: 'Paid' },
            { name: 'Screaming Frog SEO Spider', description: 'Website crawler for improving onsite SEO.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog-seo-tool/600/400', dataAiHint: 'technical seo', pricing: 'Freemium' },
            { name: 'Majestic', description: 'The planet\'s largest link index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic-seo/600/400', dataAiHint: 'link building', pricing: 'Paid' },
            { name: 'CognitiveSEO', description: 'A complete SEO software suite.', url: 'https://cognitiveseo.com/', image: 'https://picsum.photos/seed/cognitiveseo-seo/600/400', dataAiHint: 'seo analysis', pricing: 'Paid' },
            { name: 'Advanced Web Ranking', description: 'Fresh SERP rankings for your SEO campaigns.', url: 'https://www.awrcloud.com/', image: 'https://picsum.photos/seed/awrcloud-seo/600/400', dataAiHint: 'rank tracking', pricing: 'Paid' },
            { name: 'Linkody', description: 'Backlink tracker for SEO professionals.', url: 'https://linkody.com/', image: 'https://picsum.photos/seed/linkody-seo/600/400', dataAiHint: 'backlink monitoring', pricing: 'Paid' },
            { name: 'Sitebulb', description: 'Website crawler for SEO professionals.', url: 'https://sitebulb.com/', image: 'https://picsum.photos/seed/sitebulb-seo/600/400', dataAiHint: 'website audit', pricing: 'Paid' },
            { name: 'SurferSEO', description: 'Content intelligence tool to help you write better content.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-seo-tool/600/400', dataAiHint: 'on-page seo', pricing: 'Paid' },
            { name: 'Frase', description: 'AI to research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-seo-tool/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-seo-tool/600/400', dataAiHint: 'content strategy', pricing: 'Paid' },
            { name: 'Yoast SEO', description: 'The #1 WordPress SEO Plugin.', url: 'https://yoast.com/', image: 'https://picsum.photos/seed/yoast-seo-tool/600/400', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'Rank Math', description: 'The Swiss Army Knife of WordPress SEO.', url: 'https://rankmath.com/', image: 'https://picsum.photos/seed/rankmath-seo-tool/600/400', dataAiHint: 'wordpress seo plugin', pricing: 'Freemium' },
            { name: 'Google Search Console', description: 'Tools and reports for website search performance.', url: 'https://search.google.com/search-console/', image: 'https://picsum.photos/seed/gsc-seo/600/400', dataAiHint: 'google webmaster', pricing: 'Free' },
            { name: 'Bing Webmaster Tools', description: 'Free tools to help you with your site.', url: 'https://www.bing.com/webmasters/', image: 'https://picsum.photos/seed/bing-webmaster/600/400', dataAiHint: 'bing seo', pricing: 'Free' },
            { name: 'Yandex.Webmaster', description: 'Tools for Yandex search engine.', url: 'https://webmaster.yandex.com/', image: 'https://picsum.photos/seed/yandex-webmaster/600/400', dataAiHint: 'russian seo', pricing: 'Free' },
            { name: 'Baidu Webmaster Tools', description: 'Tools for Baidu search engine.', url: 'https://ziyuan.baidu.com/', image: 'https://picsum.photos/seed/baidu-webmaster/600/400', dataAiHint: 'chinese seo', pricing: 'Free' },
            { name: 'DeepCrawl', description: 'Technical SEO platform for enterprise sites.', url: 'https://www.lyst.com/deepcrawl/', image: 'https://picsum.photos/seed/deepcrawl-seo/600/400', dataAiHint: 'enterprise technical seo', pricing: 'Paid' },
            { name: 'Botify', description: 'The leading enterprise SEO platform.', url: 'https://www.botify.com/', image: 'https://picsum.photos/seed/botify-seo/600/400', dataAiHint: 'enterprise seo platform', pricing: 'Paid' },
            { name: 'OnCrawl', description: 'Technical & Data SEO Platform.', url: 'https://www.oncrawl.com/', image: 'https://picsum.photos/seed/oncrawl-seo/600/400', dataAiHint: 'data seo', pricing: 'Paid' },
        ]
    },
    {
        title: "Keyword Research Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Keyword Planner', description: 'Choose the right keywords with this free tool.', url: 'https://ads.google.com/home/tools/keyword-planner/', image: 'https://picsum.photos/seed/gkp/600/400', dataAiHint: 'adwords keywords', pricing: 'Free' },
            { name: 'Ahrefs Keywords Explorer', description: 'Get relevant keyword ideas and traffic estimates.', url: 'https://ahrefs.com/keywords-explorer', image: 'https://picsum.photos/seed/ahrefs-keywords/600/400', dataAiHint: 'traffic estimates', pricing: 'Paid' },
            { name: 'SEMrush Keyword Magic', description: 'The easiest way to find the best keywords.', url: 'https://www.semrush.com/features/keyword-magic-tool/', image: 'https://picsum.photos/seed/semrush-keyword/600/400', dataAiHint: 'keyword tool', pricing: 'Paid' },
            { name: 'KeywordTool.io', description: 'Free alternative to Google Keyword Planner.', url: 'https://keywordtool.io/', image: 'https://picsum.photos/seed/keywordtoolio/600/400', dataAiHint: 'free keyword', pricing: 'Freemium' },
            { name: 'KWFinder', description: 'Find long-tail keywords with low SEO difficulty.', url: 'https://kwfinder.com/', image: 'https://picsum.photos/seed/kwfinder/600/400', dataAiHint: 'long-tail keywords', pricing: 'Freemium' },
            { name: 'LongTailPro', description: 'The best keyword research tool for long-tail keywords.', url: 'https://longtailpro.com/', image: 'https://picsum.photos/seed/longtailpro-keywords/600/400', dataAiHint: 'keyword research', pricing: 'Paid' },
            { name: 'WordTracker', description: 'Reveal 10,000 keywords in minutes.', url: 'https://www.wordtracker.com/', image: 'https://picsum.photos/seed/wordtracker/600/400', dataAiHint: 'keyword minutes', pricing: 'Freemium' },
            { name: 'Ubersuggest', description: 'Keyword tracking & SEO tool.', url: 'https://neilpatel.com/ubersuggest/', image: 'https://picsum.photos/seed/ubersuggest-kw/600/400', dataAiHint: 'keyword suggestions', pricing: 'Freemium' },
            { name: 'Moz Keyword Explorer', description: 'Keyword research tool by Moz.', url: 'https://moz.com/explorer', image: 'https://picsum.photos/seed/moz-kw/600/400', dataAiHint: 'moz tool', pricing: 'Paid' },
            { name: 'AnswerThePublic', description: 'Search listening tool for content ideas.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/answerthepublic-kw/600/400', dataAiHint: 'question keywords', pricing: 'Freemium' },
            { name: 'Keywords Everywhere', description: 'Browser addon for keyword research.', url: 'https://keywordseverywhere.com/', image: 'https://picsum.photos/seed/keywordseverywhere-kw/600/400', dataAiHint: 'browser extension', pricing: 'Paid' },
            { name: 'Soovle', description: 'Get suggestions from multiple sources.', url: 'https://soovle.com/', image: 'https://picsum.photos/seed/soovle-kw/600/400', dataAiHint: 'suggestion tool', pricing: 'Free' },
            { name: 'Jaaxy', description: 'The World\'s Most Advanced Keyword Research Tool.', url: 'https://www.jaaxy.com/', image: 'https://picsum.photos/seed/jaaxy-kw/600/400', dataAiHint: 'advanced tool', pricing: 'Paid' },
            { name: 'SpyFu Keyword Research', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/keyword-research', image: 'https://picsum.photos/seed/spyfu-kw/600/400', dataAiHint: 'competitor keywords', pricing: 'Paid' },
            { name: 'SERPstat', description: 'All-in-one SEO platform for professionals.', url: 'https://serpstat.com/', image: 'https://picsum.photos/seed/serpstat-kw/600/400', dataAiHint: 'seo platform', pricing: 'Paid' },
            { name: 'QuestionDB', description: 'Find the questions your audience is asking.', url: 'https://questiondb.io/', image: 'https://picsum.photos/seed/questiondb-kw/600/400', dataAiHint: 'audience questions', pricing: 'Freemium' },
            { name: 'AlsoAsked', description: 'Discover the questions people are asking.', url: 'https://alsoasked.com/', image: 'https://picsum.photos/seed/alsoasked-kw/600/400', dataAiHint: 'people also ask', pricing: 'Freemium' },
            { name: 'Keyword Sheeter', description: 'Free bulk keyword generator.', url: 'https://keywordsheeter.com/', image: 'https://picsum.photos/seed/keywordsheeter/600/400', dataAiHint: 'bulk keywords', pricing: 'Free' },
            { name: 'Keyworddit', description: 'Extract keywords from Reddit.', url: 'https://www.keyworddit.com/', image: 'https://picsum.photos/seed/keyworddit/600/400', dataAiHint: 'reddit keywords', pricing: 'Free' },
            { name: 'WordStream Free Keyword Tool', description: 'Free tool for keyword research.', url: 'https://www.wordstream.com/keywords', image: 'https://picsum.photos/seed/wordstream-kw/600/400', dataAiHint: 'wordstream tool', pricing: 'Free' },
            { name: 'TermExplorer', description: 'Bulk keyword research tool.', url: 'https://termexplorer.com/', image: 'https://picsum.photos/seed/termexplorer/600/400', dataAiHint: 'bulk research', pricing: 'Paid' },
            { name: 'GrowthBar', description: 'AI writing tool for SEO.', url: 'https://www.growthbarseo.com/', image: 'https://picsum.photos/seed/growthbar-kw/600/400', dataAiHint: 'ai seo', pricing: 'Paid' },
            { name: 'RankIQ', description: 'AI-powered SEO toolset for bloggers.', url: 'https://www.rankiq.com/', image: 'https://picsum.photos/seed/rankiq-kw/600/400', dataAiHint: 'blogger seo', pricing: 'Paid' },
            { name: 'SurferSEO Keyword Research', description: 'Find the best keywords to target.', url: 'https://surferseo.com/keyword-research-tool/', image: 'https://picsum.photos/seed/surfer-kw/600/400', dataAiHint: 'target keywords', pricing: 'Paid' },
            { name: 'WriterZen', description: 'Content workflow that simplifies your processes.', url: 'https://writerzen.net/', image: 'https://picsum.photos/seed/writerzen-kw/600/400', dataAiHint: 'content workflow', pricing: 'Paid' },
            { name: 'LowFruits', description: 'Find low competition keywords.', url: 'https://lowfruits.io/', image: 'https://picsum.photos/seed/lowfruits-kw/600/400', dataAiHint: 'easy keywords', pricing: 'Paid' },
        ]
    },
    {
        title: "On-Page SEO Tools",
        icon: <ClipboardCheck className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'RankMath AI', description: 'The Swiss Army Knife of WordPress SEO.', url: 'https://rankmath.com/', image: 'https://picsum.photos/seed/rankmath/600/400', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'Yoast SEO', description: 'The #1 WordPress SEO Plugin.', url: 'https://yoast.com/', image: 'https://picsum.photos/seed/yoast/600/400', dataAiHint: 'plugin seo', pricing: 'Freemium' },
            { name: 'SurferSEO', description: 'Content intelligence tool to help you write better content.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-onpage/600/400', dataAiHint: 'content intelligence', pricing: 'Paid' },
            { name: 'PageOptimizer Pro', description: 'On-page SEO tool for professionals.', url: 'https://pageoptimizer.pro/', image: 'https://picsum.photos/seed/pop-onpage/600/400', dataAiHint: 'seo pro', pricing: 'Paid' },
            { name: 'Clearscope', description: 'Best-in-class SEO content optimization.', url: 'https://www.clearscope.io/', image: 'https://picsum.photos/seed/clearscope-onpage/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'NeuronWriter', description: 'Content optimization with semantic SEO and NLP.', url: 'https://neuronwriter.com/', image: 'https://picsum.photos/seed/neuronwriter-onpage/600/400', dataAiHint: 'semantic seo', pricing: 'Paid' },
            { name: 'Outranking', description: 'AI writing platform for higher rankings.', url: 'https://www.outranking.io/', image: 'https://picsum.photos/seed/outranking-onpage/600/400', dataAiHint: 'higher rankings', pricing: 'Paid' },
            { name: 'Frase', description: 'AI to research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-onpage/600/400', dataAiHint: 'ai research', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-onpage/600/400', dataAiHint: 'ai planning', pricing: 'Paid' },
            { name: 'All in One SEO Pack', description: 'The original WordPress SEO plugin.', url: 'https://aioseo.com/', image: 'https://picsum.photos/seed/aioseo-onpage/600/400', dataAiHint: 'original wordpress seo', pricing: 'Freemium' },
            { name: 'SEOPress', description: 'Simple, fast & powerful SEO plugin for WordPress.', url: 'https://www.seopress.org/', image: 'https://picsum.photos/seed/seopress-onpage/600/400', dataAiHint: 'wordpress plugin', pricing: 'Freemium' },
            { name: 'The SEO Framework', description: 'The fast, automated, and clean SEO plugin for WordPress.', url: 'https://theseoframework.com/', image: 'https://picsum.photos/seed/seoframework-onpage/600/400', dataAiHint: 'clean seo', pricing: 'Free' },
            { name: 'Copywritely', description: 'SEO content analysis software.', url: 'https://copywritely.com/', image: 'https://picsum.photos/seed/copywritely-onpage/600/400', dataAiHint: 'content analysis', pricing: 'Paid' },
            { name: 'Website Auditor', description: 'Part of SEO PowerSuite for on-page audits.', url: 'https://www.link-assistant.com/website-auditor/', image: 'https://picsum.photos/seed/websiteauditor/600/400', dataAiHint: 'on-page audit', pricing: 'Freemium' },
            { name: 'SEMrush On Page SEO Checker', description: 'Get actionable tips to improve your pages.', url: 'https://www.semrush.com/on-page-seo-checker/', image: 'https://picsum.photos/seed/semrush-onpage/600/400', dataAiHint: 'actionable tips', pricing: 'Paid' },
            { name: 'Ahrefs Site Audit', description: 'Check your website for 100+ pre-defined SEO issues.', url: 'https://ahrefs.com/site-audit', image: 'https://picsum.photos/seed/ahrefs-onpage/600/400', dataAiHint: 'site audit', pricing: 'Paid' },
            { name: 'Google Search Console', description: 'Tools to measure your site\'s Search traffic and performance.', url: 'https://search.google.com/search-console/', image: 'https://picsum.photos/seed/gsc-onpage/600/400', dataAiHint: 'google tools', pricing: 'Free' },
            { name: 'Ryte', description: 'The leading platform for website quality management.', url: 'https://en.ryte.com/', image: 'https://picsum.photos/seed/ryte-onpage/600/400', dataAiHint: 'quality management', pricing: 'Paid' },
            { name: 'Screaming Frog SEO Spider', description: 'Website crawler for improving onsite SEO.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/sf-onpage/600/400', dataAiHint: 'seo spider', pricing: 'Freemium' },
            { name: 'Dashword', description: 'Content optimization software for SEO teams.', url: 'https://dashword.com/', image: 'https://picsum.photos/seed/dashword-onpage/600/400', dataAiHint: 'seo teams', pricing: 'Paid' },
            { name: 'NeuralText', description: 'AI-powered content lifecycle platform.', url: 'https://www.neuraltext.com/', image: 'https://picsum.photos/seed/neuraltext-onpage/600/400', dataAiHint: 'content lifecycle', pricing: 'Paid' },
            { name: 'INK', description: 'AI writer, content optimizer, and SEO assistant.', url: 'https://inkforall.com/', image: 'https://picsum.photos/seed/ink-onpage/600/400', dataAiHint: 'seo assistant', pricing: 'Freemium' },
        ]
    },
    {
        title: "Off-Page SEO Tools",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'BuzzSumo', description: 'Find the most shared content and key influencers.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-offpage/600/400', dataAiHint: 'influencer marketing', pricing: 'Freemium' },
            { name: 'Pitchbox', description: 'Influencer outreach & content marketing platform.', url: 'https://pitchbox.com/', image: 'https://picsum.photos/seed/pitchbox-offpage/600/400', dataAiHint: 'outreach platform', pricing: 'Paid' },
            { name: 'NinjaOutreach', description: 'Blogger outreach software for marketers.', url: 'https://ninjaoutreach.com/', image: 'https://picsum.photos/seed/ninjaoutreach/600/400', dataAiHint: 'blogger outreach', pricing: 'Paid' },
            { name: 'LinkHunter', description: 'Automated link building and email outreach.', url: 'https://linkhunter.com/', image: 'https://picsum.photos/seed/linkhunter/600/400', dataAiHint: 'link building', pricing: 'Paid' },
            { name: 'Respona', description: 'All-in-one blogger outreach platform.', url: 'https://respona.com/', image: 'https://picsum.photos/seed/respona/600/400', dataAiHint: 'blogger platform', pricing: 'Paid' },
            { name: 'Postaga', description: 'AI-powered outreach platform for link building.', url: 'https://postaga.com/', image: 'https://picsum.photos/seed/postaga/600/400', dataAiHint: 'ai outreach', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'Analyze your competitors\' backlink profiles.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-offpage/600/400', dataAiHint: 'competitor analysis', pricing: 'Paid' },
            { name: 'Majestic', description: 'The planet\'s largest link index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic-offpage/600/400', dataAiHint: 'backlink checker', pricing: 'Paid' },
            { name: 'SEMrush', description: 'Backlink analysis and link building tools.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-offpage/600/400', dataAiHint: 'link tools', pricing: 'Paid' },
            { name: 'Moz Link Explorer', description: 'A complete overview of your backlink profile.', url: 'https://moz.com/link-explorer', image: 'https://picsum.photos/seed/moz-offpage/600/400', dataAiHint: 'link profile', pricing: 'Freemium' },
            { name: 'Hunter.io', description: 'Find professional email addresses in seconds.', url: 'https://hunter.io/', image: 'https://picsum.photos/seed/hunter-offpage/600/400', dataAiHint: 'email finder', pricing: 'Freemium' },
            { name: 'Snov.io', description: 'Email finder and cold outreach automation.', url: 'https://snov.io/', image: 'https://picsum.photos/seed/snovio-offpage/600/400', dataAiHint: 'cold outreach', pricing: 'Freemium' },
            { name: 'HARO (Help a Reporter Out)', description: 'Get featured in the media.', url: 'https://www.helpareporter.com/', image: 'https://picsum.photos/seed/haro/600/400', dataAiHint: 'media requests', pricing: 'Free' },
            { name: 'Muck Rack', description: 'Find journalists, monitor news, and build reports.', url: 'https://muckrack.com/', image: 'https://picsum.photos/seed/muckrack/600/400', dataAiHint: 'pr software', pricing: 'Paid' },
            { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://picsum.photos/seed/brand24-offpage/600/400', dataAiHint: 'brand mentions', pricing: 'Paid' },
            { name: 'Mention', description: 'Social media and web monitoring.', url: 'https://mention.com/', image: 'https://picsum.photos/seed/mention-offpage/600/400', dataAiHint: 'web monitoring', pricing: 'Freemium' },
            { name: 'Google Alerts', description: 'Monitor the web for interesting new content.', url: 'https://www.google.com/alerts', image: 'https://picsum.photos/seed/googlealerts/600/400', dataAiHint: 'web alerts', pricing: 'Free' },
            { name: 'GroupHigh', description: 'Find and manage blogger outreach.', url: 'https://www.grouphigh.com/', image: 'https://picsum.photos/seed/grouphigh/600/400', dataAiHint: 'blogger database', pricing: 'Paid' },
            { name: 'BuzzStream', description: 'Build relationships and links.', url: 'https://www.buzzstream.com/', image: 'https://picsum.photos/seed/buzzstream-link/600/400', dataAiHint: 'relationship building', pricing: 'Paid' },
            { name: 'JustReachOut', description: 'Do your own PR.', url: 'https://justreachout.io/', image: 'https://picsum.photos/seed/jro-link/600/400', dataAiHint: 'pr outreach', pricing: 'Paid' },
            { name: 'NeverBounce', description: 'Email verification & list cleaning service.', url: 'https://neverbounce.com/', image: 'https://picsum.photos/seed/neverbounce/600/400', dataAiHint: 'email verification', pricing: 'Paid' },
            { name: 'ZeroBounce', description: 'Email validation service.', url: 'https://www.zerobounce.net/', image: 'https://picsum.photos/seed/zerobounce/600/400', dataAiHint: 'email validation', pricing: 'Freemium' },
            { name: 'Mailshake', description: 'Sales engagement & automation for sending cold emails.', url: 'https://mailshake.com/', image: 'https://picsum.photos/seed/mailshake-offpage/600/400', dataAiHint: 'sales engagement', pricing: 'Paid' },
            { name: 'Lemlist', description: 'Get more replies to your cold emails.', url: 'https://www.lemlist.com/', image: 'https://picsum.photos/seed/lemlist-offpage/600/400', dataAiHint: 'email personalization', pricing: 'Paid' },
        ]
    },
    {
        title: "Link-Building Tools",
        icon: <Link2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Ahrefs Backlink Checker', description: 'The world\'s biggest index of live backlinks.', url: 'https://ahrefs.com/backlink-checker', image: 'https://picsum.photos/seed/ahrefs-backlink/600/400', dataAiHint: 'backlink index', pricing: 'Freemium' },
            { name: 'Majestic', description: 'The planet\'s largest link index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic-link/600/400', dataAiHint: 'link database', pricing: 'Paid' },
            { name: 'LinkMiner', description: 'Find backlinks you can replicate.', url: 'https://linkminer.com/', image: 'https://picsum.photos/seed/linkminer/600/400', dataAiHint: 'replicate backlinks', pricing: 'Paid' },
            { name: 'Monitor Backlinks', description: 'The easiest way to check your backlinks.', url: 'https://monitorbacklinks.com/', image: 'https://picsum.photos/seed/monitorbacklinks/600/400', dataAiHint: 'check backlinks', pricing: 'Paid' },
            { name: 'CognitiveSEO', description: 'A complete SEO software suite.', url: 'https://cognitiveseo.com/', image: 'https://picsum.photos/seed/cognitiveseo-link/600/400', dataAiHint: 'seo software', pricing: 'Paid' },
            { name: 'Linkody', description: 'Backlink tracker for SEO professionals.', url: 'https://linkody.com/', image: 'https://picsum.photos/seed/linkody-link/600/400', dataAiHint: 'backlink tracker', pricing: 'Paid' },
            { name: 'SEMrush Backlink Analytics', description: 'Analyze any domain\'s backlink profile.', url: 'https://www.semrush.com/analytics/backlinks/', image: 'https://picsum.photos/seed/semrush-backlink/600/400', dataAiHint: 'domain analysis', pricing: 'Paid' },
            { name: 'Moz Link Explorer', description: 'The world\'s best backlink checker with over 40 trillion links.', url: 'https://moz.com/link-explorer', image: 'https://picsum.photos/seed/moz-link/600/400', dataAiHint: 'link checker', pricing: 'Freemium' },
            { name: 'BuzzStream', description: 'Build relationships, and links.', url: 'https://www.buzzstream.com/', image: 'https://picsum.photos/seed/buzzstream-link/600/400', dataAiHint: 'outreach tool', pricing: 'Paid' },
            { name: 'Pitchbox', description: 'Influencer outreach & content marketing platform.', url: 'https://pitchbox.com/', image: 'https://picsum.photos/seed/pitchbox-link/600/400', dataAiHint: 'content marketing', pricing: 'Paid' },
            { name: 'HARO', description: 'Help A Reporter Out.', url: 'https://www.helpareporter.com/', image: 'https://picsum.photos/seed/haro-link/600/400', dataAiHint: 'media requests', pricing: 'Free' },
            { name: 'Check My Links', description: 'A Chrome extension for checking broken links.', url: 'https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaaebeafeKDDYjRObA/detail/check-my-links/ojkcdipcgfaaebeafeKDDYjRObA', image: 'https://picsum.photos/seed/checkmylinks/600/400', dataAiHint: 'broken links', pricing: 'Free' },
            { name: 'Disavow Tool', description: 'Google\'s tool to disavow bad links.', url: 'https://search.google.com/search-console/disavow-links', image: 'https://picsum.photos/seed/disavow/600/400', dataAiHint: 'google tool', pricing: 'Free' },
            { name: 'Link Research Tools', description: 'A big data platform for SEO.', url: 'https://www.linkresearchtools.com/', image: 'https://picsum.photos/seed/lrt/600/400', dataAiHint: 'big data seo', pricing: 'Paid' },
            { name: 'Link Prospector', description: 'Find link building opportunities.', url: 'https://linkprospector.citationlabs.com/', image: 'https://picsum.photos/seed/linkprospector/600/400', dataAiHint: 'link opportunities', pricing: 'Paid' },
            { name: 'Hunter.io', description: 'Find email addresses for outreach.', url: 'https://hunter.io/', image: 'https://picsum.photos/seed/hunter-link/600/400', dataAiHint: 'email finder', pricing: 'Freemium' },
            { name: 'JustReachOut', description: 'PR and outreach tool.', url: 'https://justreachout.io/', image: 'https://picsum.photos/seed/jro-link/600/400', dataAiHint: 'pr tool', pricing: 'Paid' },
            { name: 'OpenLinkProfiler', description: 'Free backlink checker.', url: 'http://openlinkprofiler.org/', image: 'https://picsum.photos/seed/olp-link/600/400', dataAiHint: 'free checker', pricing: 'Free' },
            { name: 'Whitespark', description: 'Local citation finder and builder.', url: 'https://whitespark.ca/', image: 'https://picsum.photos/seed/whitespark-link/600/400', dataAiHint: 'local seo', pricing: 'Paid' },
            { name: 'The Hoth', description: 'SEO and link building services.', url: 'https://www.thehoth.com/', image: 'https://picsum.photos/seed/thehoth/600/400', dataAiHint: 'seo services', pricing: 'Paid' },
        ]
    },
    {
        title: "Technical SEO Tools",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Screaming Frog', description: 'The industry leading SEO Spider software.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog-tech/600/400', dataAiHint: 'seo spider', pricing: 'Freemium' },
            { name: 'Sitebulb', description: 'Website crawler for SEO professionals.', url: 'https://sitebulb.com/', image: 'https://picsum.photos/seed/sitebulb-tech/600/400', dataAiHint: 'website crawler', pricing: 'Paid' },
            { name: 'DeepCrawl', description: 'Technical SEO platform for enterprise sites.', url: 'https://www.lyst.com/deepcrawl/', image: 'https://picsum.photos/seed/deepcrawl-tech/600/400', dataAiHint: 'enterprise seo', pricing: 'Paid' },
            { name: 'JetOctopus', description: 'Cloud-based SEO crawler and logs analyser.', url: 'https://jetoctopus.com/', image: 'https://picsum.photos/seed/jetoctopus/600/400', dataAiHint: 'log analyser', pricing: 'Paid' },
            { name: 'Botify', description: 'The leading enterprise SEO platform.', url: 'https://www.botify.com/', image: 'https://picsum.photos/seed/botify-tech/600/400', dataAiHint: 'enterprise seo', pricing: 'Paid' },
            { name: 'Google Search Console', description: 'Tools and reports for website search performance.', url: 'https://search.google.com/search-console/', image: 'https://picsum.photos/seed/gsc-tech/600/400', dataAiHint: 'search performance', pricing: 'Free' },
            { name: 'GTmetrix', description: 'See how your site performs and get recommendations.', url: 'https://gtmetrix.com/', image: 'https://picsum.photos/seed/gtmetrix-tech/600/400', dataAiHint: 'speed test', pricing: 'Freemium' },
            { name: 'Google PageSpeed Insights', description: 'Make your web pages fast on all devices.', url: 'https://pagespeed.web.dev/', image: 'https://picsum.photos/seed/pagespeed-tech/600/400', dataAiHint: 'page speed', pricing: 'Free' },
            { name: 'Pingdom', description: 'Website monitoring and speed test.', url: 'https://www.pingdom.com/', image: 'https://picsum.photos/seed/pingdom-tech/600/400', dataAiHint: 'website monitoring', pricing: 'Paid' },
            { name: 'WebPageTest', description: 'Run a free website speed test.', url: 'https://www.webpagetest.org/', image: 'https://picsum.photos/seed/webpagetest-tech/600/400', dataAiHint: 'performance test', pricing: 'Free' },
            { name: 'Cloudflare', description: 'Web performance & security company.', url: 'https://www.cloudflare.com/', image: 'https://picsum.photos/seed/cloudflare-tech/600/400', dataAiHint: 'cdn', pricing: 'Freemium' },
            { name: 'Ahrefs Site Audit', description: 'Find and fix technical SEO issues.', url: 'https://ahrefs.com/site-audit', image: 'https://picsum.photos/seed/ahrefs-tech/600/400', dataAiHint: 'site audit', pricing: 'Paid' },
            { name: 'SEMrush Site Audit', description: 'Crawl your website and find issues.', url: 'https://www.semrush.com/site-audit/', image: 'https://picsum.photos/seed/semrush-tech/600/400', dataAiHint: 'site audit', pricing: 'Paid' },
            { name: 'Moz Site Crawl', description: 'Find and fix issues on your site.', url: 'https://moz.com/products/pro/site-crawl', image: 'https://picsum.photos/seed/moz-tech/600/400', dataAiHint: 'site crawl', pricing: 'Paid' },
            { name: 'Schema Pro', description: 'The best WordPress schema markup plugin.', url: 'https://wpschema.com/', image: 'https://picsum.photos/seed/schemapro-tech/600/400', dataAiHint: 'schema markup', pricing: 'Paid' },
            { name: 'Merkle Schema Tool', description: 'Schema markup generator.', url: 'https://www.merkle.com/en/services/technical-seo', image: 'https://picsum.photos/seed/merkle-tech/600/400', dataAiHint: 'structured data', pricing: 'Free' },
            { name: 'Rich Results Test', description: 'Google\'s tool to test your structured data.', url: 'https://search.google.com/test/rich-results', image: 'https://picsum.photos/seed/richresults-tech/600/400', dataAiHint: 'google test', pricing: 'Free' },
            { name: 'Hreflang Tags Generator Tool', description: 'Generate hreflang tags.', url: 'https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/', image: 'https://picsum.photos/seed/hreflang-tech/600/400', dataAiHint: 'international seo', pricing: 'Free' },
            { name: 'Redirect Path', description: 'Chrome extension for redirect path analysis.', url: 'https://chrome.google.com/webstore/detail/redirect-path/aomidfkchockcldjlmedpcimgfpgodpl', image: 'https://picsum.photos/seed/redirectpath-tech/600/400', dataAiHint: 'chrome extension', pricing: 'Free' },
            { name: 'LogFileAnaliser.com', description: 'Analyze your server logs.', url: 'https://logfileanaliser.com/', image: 'https://picsum.photos/seed/loganaliser/600/400', dataAiHint: 'log analysis', pricing: 'Paid' },
            { name: 'XML-Sitemaps.com', description: 'Free online sitemap generator.', url: 'https://www.xml-sitemaps.com/', image: 'https://picsum.photos/seed/xmlsitemaps-tech/600/400', dataAiHint: 'sitemap generator', pricing: 'Free' },
            { name: 'Robots.txt Generator', description: 'Generate a robots.txt file.', url: 'https://www.seobook.com/robots-txt-generator', image: 'https://picsum.photos/seed/robotstxt-tech/600/400', dataAiHint: 'robots txt', pricing: 'Free' },
        ]
    },
    {
        title: "Local SEO Tools",
        icon: <Target className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'BrightLocal', description: 'Local SEO tools for agencies and businesses.', url: 'https://www.brightlocal.com/', image: 'https://picsum.photos/seed/brightlocal/600/400', dataAiHint: 'local marketing', pricing: 'Paid' },
            { name: 'Moz Local', description: 'Local SEO software and tools.', url: 'https://moz.com/products/local', image: 'https://picsum.photos/seed/mozlocal/600/400', dataAiHint: 'local search', pricing: 'Paid' },
            { name: 'Yext', description: 'The AI Search Company.', url: 'https://www.yext.com/', image: 'https://picsum.photos/seed/yext-local/600/400', dataAiHint: 'search company', pricing: 'Paid' },
            { name: 'Whitespark', description: 'Tools and services to help you win at local search.', url: 'https://whitespark.ca/', image: 'https://picsum.photos/seed/whitespark/600/400', dataAiHint: 'local search', pricing: 'Freemium' },
            { name: 'Synup', description: 'Digital profile and reputation management.', url: 'https://www.synup.com/', image: 'https://picsum.photos/seed/synup/600/400', dataAiHint: 'reputation management', pricing: 'Paid' },
            { name: 'Semrush Local', description: 'Suite of tools for local SEO.', url: 'https://www.semrush.com/local-seo/', image: 'https://picsum.photos/seed/semrush-local/600/400', dataAiHint: 'local suite', pricing: 'Paid' },
            { name: 'Google Business Profile', description: 'Manage your online presence across Google.', url: 'https://www.google.com/business/', image: 'https://picsum.photos/seed/gbp-local/600/400', dataAiHint: 'google local', pricing: 'Free' },
            { name: 'ReviewTrackers', description: 'Customer review software.', url: 'https://www.reviewtrackers.com/', image: 'https://picsum.photos/seed/reviewtrackers-local/600/400', dataAiHint: 'customer reviews', pricing: 'Paid' },
            { name: 'Podium', description: 'Interaction management platform.', url: 'https://www.podium.com/', image: 'https://picsum.photos/seed/podium-local/600/400', dataAiHint: 'local business chat', pricing: 'Paid' },
            { name: 'GatherUp', description: 'Customer experience and online review management.', url: 'https://gatherup.com/', image: 'https://picsum.photos/seed/gatherup/600/400', dataAiHint: 'review management', pricing: 'Paid' },
            { name: 'PlePer', description: 'Local SEO tools for Google Business Profile.', url: 'https://pleper.com/', image: 'https://picsum.photos/seed/pleper/600/400', dataAiHint: 'gmb tools', pricing: 'Freemium' },
            { name: 'Local Falcon', description: 'Google Maps Rank Tracker.', url: 'https://www.localfalcon.com/', image: 'https://picsum.photos/seed/localfalcon/600/400', dataAiHint: 'map rank tracker', pricing: 'Paid' },
            { name: 'PlacesScout', description: 'Local SEO & review management software.', url: 'https://www.placesscout.com/', image: 'https://picsum.photos/seed/placesscout/600/400', dataAiHint: 'review software', pricing: 'Paid' },
            { name: 'GeoRanker', description: 'Local rank tracking and SEO tools.', url: 'https://www.georanker.com/', image: 'https://picsum.photos/seed/georanker/600/400', dataAiHint: 'rank tracking', pricing: 'Paid' },
            { name: 'Local SEO Checkup', description: 'Free local SEO report.', url: 'https://www.localseocheckup.com/', image: 'https://picsum.photos/seed/localseocheckup/600/400', dataAiHint: 'seo report', pricing: 'Free' },
            { name: 'Advice Local', description: 'Local presence management solutions.', url: 'https://www.advicelocal.com/', image: 'https://picsum.photos/seed/advicelocal/600/400', dataAiHint: 'listing management', pricing: 'Paid' },
            { name: 'GMB Everywhere', description: 'Chrome extension for GBP audit.', url: 'https://gmbeverywhere.com/', image: 'https://picsum.photos/seed/gmbeverywhere/600/400', dataAiHint: 'gmb audit', pricing: 'Freemium' },
            { name: 'Uberall', description: 'Near Me Customer Experience.', url: 'https://uberall.com/', image: 'https://picsum.photos/seed/uberall/600/400', dataAiHint: 'customer experience', pricing: 'Paid' },
            { name: 'Rio SEO', description: 'Local marketing platform for enterprise brands.', url: 'https://www.rioseo.com/', image: 'https://picsum.photos/seed/rioseo/600/400', dataAiHint: 'enterprise local', pricing: 'Paid' },
        ]
    },
    {
        title: "Content Marketing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper AI', description: 'AI Content Platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-content-marketing/600/400', dataAiHint: 'ai content', pricing: 'Paid' },
            { name: 'Writesonic', description: 'Create SEO-friendly content with AI.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-content-marketing/600/400', dataAiHint: 'seo content', pricing: 'Freemium' },
            { name: 'Copy.ai', description: 'Write better marketing copy and content.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-content-marketing/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Frase', description: 'AI to research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-content-marketing/600/400', dataAiHint: 'content research', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-content/600/400', dataAiHint: 'content planning', pricing: 'Paid' },
            { name: 'WriterZen', description: 'Content workflow that simplifies your processes.', url: 'https://writerzen.net/', image: 'https://picsum.photos/seed/writerzen-content/600/400', dataAiHint: 'content workflow', pricing: 'Paid' },
            { name: 'Scalenut', description: 'AI-powered content research and writing platform.', url: 'https://www.scalenut.com/', image: 'https://picsum.photos/seed/scalenut-content/600/400', dataAiHint: 'ai writing', pricing: 'Paid' },
            { name: 'BuzzSumo', description: 'Find the most shared content and key influencers.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-content/600/400', dataAiHint: 'content ideas', pricing: 'Freemium' },
            { name: 'CoSchedule', description: 'The marketing calendar for everything.', url: 'https://coschedule.com/', image: 'https://picsum.photos/seed/coschedule-content/600/400', dataAiHint: 'editorial calendar', pricing: 'Freemium' },
            { name: 'Canva', description: 'Design anything.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-content-mktg/600/400', dataAiHint: 'visual content', pricing: 'Freemium' },
            { name: 'Visme', description: 'Create presentations, infographics, and other visual content.', url: 'https://www.visme.co/', image: 'https://picsum.photos/seed/visme-content/600/400', dataAiHint: 'infographics', pricing: 'Freemium' },
            { name: 'Venngage', description: 'Infographic maker and design platform.', url: 'https://venngage.com/', image: 'https://picsum.photos/seed/venngage-content/600/400', dataAiHint: 'data visualization', pricing: 'Freemium' },
            { name: 'Loom', description: 'Video messaging for work.', url: 'https://www.loom.com/', image: 'https://picsum.photos/seed/loom-content/600/400', dataAiHint: 'screen recording', pricing: 'Freemium' },
            { name: 'Vidyard', description: 'Video for business.', url: 'https://www.vidyard.com/', image: 'https://picsum.photos/seed/vidyard-content/600/400', dataAiHint: 'video marketing', pricing: 'Freemium' },
            { name: 'Grammarly', description: 'Great writing, simplified.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-content/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Hemingway App', description: 'Makes your writing bold and clear.', url: 'https://hemingwayapp.com/', image: 'https://picsum.photos/seed/hemingway-content/600/400', dataAiHint: 'readability checker', pricing: 'Free' },
            { name: 'Trello', description: 'Manage your content calendar.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-content/600/400', dataAiHint: 'kanban board', pricing: 'Freemium' },
            { name: 'Airtable', description: 'Powerful database for content calendars.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-content/600/400', dataAiHint: 'content operations', pricing: 'Freemium' },
            { name: 'Asana', description: 'Manage your team’s work, projects, & tasks.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-content/600/400', dataAiHint: 'project management', pricing: 'Freemium' },
            { name: 'StoryChief', description: 'Collaborative content marketing platform.', url: 'https://storychief.io/', image: 'https://picsum.photos/seed/storychief/600/400', dataAiHint: 'content distribution', pricing: 'Paid' },
            { name: 'Quora', description: 'A place to share knowledge and better understand the world.', url: 'https://www.quora.com/', image: 'https://picsum.photos/seed/quora-content/600/400', dataAiHint: 'q&a platform', pricing: 'Free' },
            { name: 'Reddit', description: 'The front page of the internet.', url: 'https://www.reddit.com/', image: 'https://picsum.photos/seed/reddit-content/600/400', dataAiHint: 'community forums', pricing: 'Free' },
            { name: 'Feedly', description: 'Organize, read and share what matters to you.', url: 'https://feedly.com/', image: 'https://picsum.photos/seed/feedly-content/600/400', dataAiHint: 'content curation', pricing: 'Freemium' },
            { name: 'Curata', description: 'Content curation and marketing platform.', url: 'https://www.curata.com/', image: 'https://picsum.photos/seed/curata-content/600/400', dataAiHint: 'curation software', pricing: 'Paid' },
            { name: 'Pocket', description: 'Save articles, videos and stories from any publication.', url: 'https://getpocket.com/', image: 'https://picsum.photos/seed/pocket-content/600/400', dataAiHint: 'read it later', pricing: 'Freemium' },
            { name: 'Flipboard', description: 'Your personal magazine.', url: 'https://flipboard.com/', image: 'https://picsum.photos/seed/flipboard-content/600/400', dataAiHint: 'content discovery', pricing: 'Free' },
            { name: 'SEMrush', description: 'Content marketing toolkit.', url: 'https://www.semrush.com/features/content-marketing/', image: 'https://picsum.photos/seed/semrush-content-mktg/600/400', dataAiHint: 'seo toolkit', pricing: 'Paid' },
            { name: 'Ahrefs Content Explorer', description: 'Discover popular content.', url: 'https://ahrefs.com/content-explorer', image: 'https://picsum.photos/seed/ahrefs-content/600/400', dataAiHint: 'content analysis', pricing: 'Paid' },
            { name: 'AnswerThePublic', description: 'Search listening tool for content ideas.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/answerthepublic-content/600/400', dataAiHint: 'keyword ideas', pricing: 'Freemium' },
            { name: 'Google Trends', description: 'Explore what the world is searching for.', url: 'https://trends.google.com/', image: 'https://picsum.photos/seed/gtrends-content/600/400', dataAiHint: 'search trends', pricing: 'Free' },
            { name: 'HubSpot Blog Ideas Generator', description: 'Generate blog post ideas.', url: 'https://www.hubspot.com/blog-topic-generator', image: 'https://picsum.photos/seed/hubspot-blog-ideas/600/400', dataAiHint: 'idea generator', pricing: 'Free' },
        ]
    }
];

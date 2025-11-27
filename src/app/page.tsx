'use client';

import React from 'react';
import Image from 'next/image';
import {
  Clapperboard,
  Heart,
  ImageIcon,
  Mic,
  Bot,
  Wand2,
  Search,
  LayoutGrid,
  Video,
  Type,
  Star,
  TrendingUp,
  Sparkles,
  ChevronRight,
  History,
  Voicemail,
  Text,
  UserSquare,
  Link as LinkIcon,
  Share2,
  BookOpen,
  BrainCircuit,
  Presentation,
  Feather,
  GraduationCap,
  Scissors,
  Youtube,
  Paintbrush,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GalaxyLogo } from '@/components/galaxy-logo';
import { BottomNav } from '@/components/bottom-nav';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { SettingsPage } from '@/components/settings-page';
import { cn } from '@/lib/utils';
import { AuthGate } from '@/components/auth-gate';
import { chat, ChatOutput } from '@/ai/flows/chat';
import { Skeleton } from '@/components/ui/skeleton';
import { suggestAiTool, SuggestAiToolOutput } from '@/ai/flows/suggest-ai-tool';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/language';


type Tool = {
    name: string;
    image: string;
    isTrending: boolean;
    category: string;
    dataAiHint: string;
    url: string;
};

type ChatMessage = {
  id: number;
  role: 'user' | 'assistant' | 'assistant-loading' | 'tool-suggestion';
  content: string | SuggestAiToolOutput;
};

type QuickToolCategory = {
  name: string;
  image: string;
  dataAiHint: string;
};

const popularTools = [
  { name: 'Runway', icon: <Video className="w-8 h-8" />, url: 'https://runwayml.com/' },
  { name: 'Pika', icon: <Clapperboard className="w-8 h-8" />, url: 'https://pika.art/' },
  { name: 'ElevenLabs', icon: <Mic className="w-8 h-8" />, url: 'https://elevenlabs.io/' },
  { name: 'Lensa AI', icon: <UserSquare className="w-8 h-8" />, url: 'https://prisma-ai.com/lensa' },
  { name: 'Midjourney', icon: <ImageIcon className="w-8 h-8" />, url: 'https://www.midjourney.com/' },
];

const libraries = [
  { name: 'Image Library', gradient: 'from-pink-300 to-rose-300', icon: <ImageIcon/> },
  { name: 'Video Library', gradient: 'from-sky-300 to-blue-300', icon: <Clapperboard/> },
  { name: 'Audio Library', gradient: 'from-teal-200 to-emerald-300', icon: <Mic/> },
];

const allTools: Tool[] = [
    { name: 'AI Video Generator', image: 'https://picsum.photos/seed/teddy-bear/300/200', isTrending: true, category: 'Video', dataAiHint: 'teddy bear guitar', url: '#' },
    { name: 'AI Image Generator', image: 'https://picsum.photos/seed/eye/300/200', isTrending: true, category: 'Image', dataAiHint: 'eye glitter', url: '#' },
    { name: 'Text to Speech', image: 'https://picsum.photos/seed/tts/300/200', isTrending: true, category: 'Text', dataAiHint: 'woman headphones', url: '#' },
    { name: 'AI Voice Changer', image: 'https://picsum.photos/seed/voice-changer/300/200', isTrending: true, category: 'Audio', dataAiHint: 'sound wave', url: '#' },
    { name: 'AI Voice Cloner', image: 'https://picsum.photos/seed/voice-cloner/300/200', isTrending: true, category: 'Audio', dataAiHint: 'woman voice wave', url: '#' },
    { name: 'AI Clothes Changer', image: 'https://picsum.photos/seed/clothes-changer/300/200', isTrending: true, category: 'Image', dataAiHint: 'man changing clothes', url: '#' },
]

const quickToolCategories: QuickToolCategory[] = [
  { name: 'Business Tools', image: 'https://picsum.photos/seed/business/600/400', dataAiHint: 'business meeting' },
  { name: 'Content Creation Tools', image: 'https://picsum.photos/seed/content/600/400', dataAiHint: 'creator studio' },
  { name: 'Graphic Design Tools', image: 'https://picsum.photos/seed/graphic-design/600/400', dataAiHint: 'design tablet' },
  { name: 'Coding & Developer Tools', image: 'https://picsum.photos/seed/coding/600/400', dataAiHint: 'coding screen' },
  { name: 'Productivity Tools', image: 'https://picsum.photos/seed/productivity/600/400', dataAiHint: 'focused work' },
  { name: 'Writing Tools', image: 'https://picsum.photos/seed/writing/600/400', dataAiHint: 'writing hand' },
  { name: 'Marketing & SEO Tools', image: 'https://picsum.photos/seed/marketing/600/400', dataAiHint: 'seo chart' },
  { name: 'Audio & Speech Tools', image: 'https://picsum.photos/seed/audio/600/400', dataAiHint: 'microphone audio' },
  { name: 'Video Tools', image: 'https://picsum.photos/seed/video/600/400', dataAiHint: 'video camera' },
  { name: 'Chat Assistant Tools', image: 'https://picsum.photos/seed/chat-assistant/600/400', dataAiHint: 'robot chat' },
  { name: 'Finance & Investing Tools', image: 'https://picsum.photos/seed/finance/600/400', dataAiHint: 'finance chart' },
  { name: 'Utility Tools', image: 'https://picsum.photos/seed/utility/600/400', dataAiHint: 'tool box' },
];

const imageToVideoTools: Tool[] = [
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

const textToVideoTools: Tool[] = [
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

const textToSpeechTools: Tool[] = [
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

const voiceCloningTools: Tool[] = [
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

const aiAvatarTools: Tool[] = [
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

const toolCategories = [
    { name: 'All', icon: <LayoutGrid />, color: 'bg-primary text-primary-foreground' },
    { name: 'Img2vid', icon: <ImageIcon />, gradient: 'bg-gradient-to-br from-pink-400 to-rose-400 text-white' },
    { name: 'Txt2vid', icon: <Video />, gradient: 'bg-gradient-to-br from-sky-400 to-blue-400 text-white' },
    { name: 'Text to Speech', icon: <Text />, gradient: 'bg-gradient-to-br from-teal-400 to-emerald-400 text-white' },
    { name: 'Voice Cloning', icon: <Voicemail />, gradient: 'bg-gradient-to-br from-purple-400 to-indigo-400 text-white' },
    { name: 'AI Avatar', icon: <UserSquare />, gradient: 'bg-gradient-to-br from-yellow-400 to-amber-400 text-white' },
];

const combinedTools = [...allTools, ...imageToVideoTools, ...textToVideoTools, ...textToSpeechTools, ...voiceCloningTools, ...aiAvatarTools];


function App() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = React.useState('home');
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [favouritedTools, setFavouritedTools] = React.useState<string[]>(['Runway', 'Pika']);
  const [recentTools, setRecentTools] = React.useState<Tool[]>([]);
  const [toolClicks, setToolClicks] = React.useState<Record<string, number>>({});
  const [chatMessages, setChatMessages] = React.useState<ChatMessage[]>([]);
  const [isGenerating, setIsGenerating] = React.useState(false);
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const { toast } = useToast();


  const handleFavouriteToggle = (toolName: string) => {
    setFavouritedTools(prev => 
      prev.includes(toolName) 
        ? prev.filter(t => t !== toolName)
        : [...prev, toolName]
    );
  };
  
  const handleShareTool = async (e: React.MouseEvent, tool: Tool) => {
    e.preventDefault();
    e.stopPropagation();

    const shareData = {
      title: tool.name,
      text: `Check out this AI tool: ${tool.name}`,
      url: tool.url,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(tool.url);
      toast({
        title: "Link Copied!",
        description: `${tool.name}'s URL has been copied to your clipboard.`,
      });
    }
  };

  const handleToolClick = (tool: Tool) => {
    // Update recents
    setRecentTools(prev => {
      const newRecents = [tool, ...prev.filter(t => t.name !== tool.name)];
      return newRecents.slice(0, 5); // Keep only the 5 most recent
    });

    // Update click count for trending
    setToolClicks(prev => ({
      ...prev,
      [tool.name]: (prev[tool.name] || 0) + 1,
    }));
  };
  
  const getFilteredTools = () => {
    switch (activeCategory) {
        case 'All':
            return allTools;
        case 'Img2vid':
            return imageToVideoTools;
        case 'Txt2vid':
            return textToVideoTools;
        case 'Text to Speech':
            return textToSpeechTools;
        case 'Voice Cloning':
            return voiceCloningTools;
        case 'AI Avatar':
            return aiAvatarTools;
        default:
            return allTools.filter(tool => tool.category === activeCategory);
    }
  };

  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSendMessage = async (message: string) => {
    if (activeTab !== 'home' || chatMessages.length > 0) {
      // We are in a chat session
    } else {
      // This is the first message from the home screen, treat it as a new chat session
      setActiveTab('home'); 
    }
  
    const newUserMessage: ChatMessage = {
      id: Date.now(),
      role: 'user',
      content: message,
    };
  
    setChatMessages((prev) => [
      ...prev,
      newUserMessage,
      { id: Date.now() + 1, role: 'assistant-loading', content: 'Thinking...' },
    ]);
  
    setIsGenerating(true);
  
    let finalAnswer: ChatMessage | null = null;
  
    try {
      const toolSuggestion = await suggestAiTool({ query: message });
      if (toolSuggestion && toolSuggestion.toolName && toolSuggestion.url) {
        finalAnswer = {
          id: Date.now() + 2,
          role: 'tool-suggestion',
          content: toolSuggestion,
        };
      } else {
        throw new Error('No tool suggestion found, fallback to chat.');
      }
    } catch (toolError) {
      console.log(
        'Tool suggestion failed or was not specific enough, falling back to regular chat:',
        toolError
      );
      try {
        const result = await chat({ message });
        finalAnswer = {
          id: Date.now() + 2,
          role: 'assistant',
          content: result.response,
        };
      } catch (chatError) {
        console.error('Error in chat flow:', chatError);
        finalAnswer = {
          id: Date.now() + 2,
          role: 'assistant',
          content: 'Sorry, I had some trouble. Please try again.',
        };
      }
    } finally {
      if (finalAnswer) {
        setChatMessages((prev) => {
          const newMessages = prev.filter((m) => m.role !== 'assistant-loading');
          return [...newMessages, finalAnswer!];
        });
      }
      setIsGenerating(false);
    }
  };

  const filteredTools = getFilteredTools();
  const favouriteToolsList = combinedTools.filter(tool => favouritedTools.includes(tool.name));
  
  const trendingTools = React.useMemo(() => {
    const allUniqueTools = [...new Map(combinedTools.map(item => [item['name'], item])).values()];

    const sortedTools = allUniqueTools
      .map(tool => ({
        ...tool,
        clicks: toolClicks[tool.name] || 0,
      }))
      .sort((a, b) => b.clicks - a.clicks);

    // Also include hardcoded isTrending tools at the top if they haven't been clicked
    const hardcodedTrending = sortedTools.filter(t => t.isTrending && t.clicks === 0);
    const clickedTools = sortedTools.filter(t => t.clicks > 0);
    const otherTools = sortedTools.filter(t => !t.isTrending && t.clicks === 0);

    const finalTrendingList = [...new Set([...clickedTools, ...hardcodedTrending, ...otherTools])];

    return finalTrendingList;
  }, [toolClicks, combinedTools, favouritedTools]);


  const renderChatInterface = () => (
    <div className="space-y-4">
    {chatMessages.map((msg) => {
      if (msg.role === 'user') {
        return (
          <div key={msg.id} className="flex justify-end">
            <div className="bg-primary text-primary-foreground p-3 rounded-3xl rounded-br-none max-w-xs break-words">
              {msg.content as string}
            </div>
          </div>
        );
      }
      if (msg.role === 'assistant') {
        return (
          <div key={msg.id} className="flex justify-start">
             <Card className="p-4 rounded-3xl rounded-bl-none bg-white/80 max-w-xs break-words soft-shadow">
              <CardContent className="p-0">
                 <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary soft-shadow flex-shrink-0 mt-1">
                      <Sparkles className="w-6 h-6"/>
                  </div>
                  <p className="text-foreground text-base">{msg.content as string}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      }
      if (msg.role === 'tool-suggestion') {
        const tool = msg.content as SuggestAiToolOutput;
        return (
          <div key={msg.id} className="flex justify-start">
            <Card className="p-4 rounded-3xl rounded-bl-none bg-white/80 w-full max-w-xs break-words soft-shadow">
              <CardContent className="p-0">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-primary soft-shadow flex-shrink-0 mt-1">
                      <Wand2 className="w-6 h-6"/>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-foreground">{t('chat.toolSuggestion')}</h4>
                    <p className="text-muted-foreground text-sm">{tool.reason}</p>
                  </div>
                </div>
                <Link href={tool.url} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full h-12 text-base font-bold glow-shadow gap-2">
                    <LinkIcon />
                    {tool.toolName}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        );
      }
      if (msg.role === 'assistant-loading') {
        return (
          <div key={msg.id} className="flex justify-start">
            <Card className="p-4 rounded-3xl rounded-bl-none bg-white/80 max-w-xs break-words soft-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10 rounded-xl"/>
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[150px]"/>
                      <Skeleton className="h-4 w-[100px]"/>
                    </div>
                  </div>
                </CardContent>
            </Card>
          </div>
        );
      }
      return null;
    })}
    </div>
  );
  
  const renderHomeScreen = () => (
    <>
      <div className="bg-gradient-to-br from-cute-purple to-lavender text-primary-foreground p-6 rounded-3xl my-4 relative overflow-hidden soft-shadow">
          <div className="absolute -right-4 -bottom-10 w-36 h-36 opacity-30">
              <Image src="https://picsum.photos/seed/ai-person/200/200" alt="AI illustration" width={144} height={144} className="object-contain" data-ai-hint="AI illustration person"/>
          </div>
          <Sparkles className="absolute top-4 right-4 w-8 h-8 text-white/50"/>
          <h3 className="font-bold text-2xl">{t('home.welcome.title')}</h3>
          <p className="text-base opacity-90 mt-2 max-w-[65%]">{t('home.welcome.subtitle')}</p>
          <Button variant="secondary" className="mt-6 bg-white text-primary hover:bg-white/90 rounded-full h-12 px-6 font-bold text-base glow-shadow" onClick={() => setActiveTab('tools')}>{t('home.welcome.button')}</Button>
      </div>

      <section>
          <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-xl">{t('home.popularTools.title')}</h4>
              <Button variant="link" className="text-primary p-0 h-auto font-semibold" onClick={() => setActiveTab('tools')}>{t('home.seeAll')}</Button>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6">
              {popularTools.map(tool => (
                  <Link href={tool.url} target="_blank" rel="noopener noreferrer" key={tool.name} className="flex flex-col items-center shrink-0 w-24 text-center cursor-pointer">
                      <div className="w-20 h-20 rounded-3xl bg-secondary flex items-center justify-center text-primary soft-shadow">
                          {tool.icon}
                      </div>
                      <p className="text-sm font-medium text-center mt-2 text-muted-foreground">{tool.name}</p>
                  </Link>
              ))}
          </div>
      </section>

      <section className="mt-8">
        <h4 className="font-semibold text-xl mb-4">{t('home.quickTools.title')}</h4>
        <div className="space-y-4">
          <Link href="/student-tools" className="block group">
            <Card className="bg-card/80 backdrop-blur-sm rounded-3xl soft-shadow p-4 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
              <CardHeader className="p-2">
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center text-indigo-600">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <span className="text-xl font-bold">{t(`home.quickTools.categories.StudentsTools`)}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-2">
                 <p className="text-muted-foreground">The best AI tools to help you with your studies.</p>
              </CardContent>
            </Card>
          </Link>
          {quickToolCategories.map((category) => (
            <Link href="#" key={category.name} className="block group">
              <Card className="relative overflow-hidden rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={600}
                  height={400}
                  className="w-full h-auto aspect-[3/1] object-cover"
                  data-ai-hint={category.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h5 className="text-white font-bold text-xl">{t(`home.quickTools.categories.${category.name.replace(/ & | /g, '')}`)}</h5>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      
      <section className="mt-8">
          <h4 className="font-semibold text-xl mb-3">{t('home.libraries.title')}</h4>
          <div className="grid grid-cols-3 gap-4">
              {libraries.map(lib => (
                  <div key={lib.name} className={cn('p-4 rounded-3xl flex flex-col justify-between aspect-square soft-shadow bg-gradient-to-br', lib.gradient)}>
                      <div className="bg-white/30 rounded-full w-10 h-10 flex items-center justify-center text-white backdrop-blur-sm">
                          {lib.icon}
                      </div>
                      <p className="text-white font-semibold text-base mt-4">{t(`home.libraries.${lib.name.replace(' ', '')}`)}</p>
                  </div>
              ))}
          </div>
      </section>
      
      <section className="mt-6 mb-16">
          <Tabs defaultValue="recent" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-secondary rounded-full h-12 p-1">
                  <TabsTrigger value="recent" className="rounded-full h-full text-base">{t('home.recents.title')}</TabsTrigger>
                  <TabsTrigger value="favourites" className="rounded-full h-full text-base">{t('home.favourites.title')}</TabsTrigger>
              </TabsList>
              <TabsContent value="recent" className="mt-4">
                  {recentTools.length > 0 ? (
                      <div className="space-y-3">
                      {recentTools.map(tool => (
                          <Card key={tool.name} className="p-3 flex items-center gap-4 bg-white/80 border-none rounded-3xl soft-shadow">
                              <Image src={tool.image} alt={tool.name} width={56} height={56} className="rounded-2xl" data-ai-hint={tool.dataAiHint} />
                              <div className="flex-grow">
                                  <h5 className="font-semibold text-base">{tool.name}</h5>
                                  <p className="text-sm text-muted-foreground">{tool.category}</p>
                              </div>
                              <Link href={tool.url} target="_blank">
                                  <Button variant="ghost" size="icon" className="text-muted-foreground rounded-full w-10 h-10">
                                      <ChevronRight />
                                  </Button>
                              </Link>
                          </Card>
                      ))}
                      </div>
                  ) : (
                      <div className="text-center py-10 text-muted-foreground">
                          <History className="mx-auto w-10 h-10" />
                          <p className="mt-4 text-base">{t('home.recents.empty')}</p>
                          <p className="text-sm">{t('home.recents.emptyDescription')}</p>
                      </div>
                  )}
              </TabsContent>
              <TabsContent value="favourites" className="mt-4">
                  {favouriteToolsList.length > 0 ? (
                      <div className="space-y-3">
                          {favouriteToolsList.map(tool => (
                              <Card key={tool.name} className="p-3 flex items-center gap-4 bg-white/80 border-none rounded-3xl soft-shadow">
                                  <Image src={tool.image} alt={tool.name} width={56} height={56} className="rounded-2xl" data-ai-hint={tool.dataAiHint} />
                                  <div className="flex-grow">
                                      <h5 className="font-semibold text-base">{tool.name}</h5>
                                      <p className="text-sm text-muted-foreground">{tool.category}</p>
                                  </div>
                                  <Button variant="ghost" size="icon" className="text-muted-foreground rounded-full w-10 h-10" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleFavouriteToggle(tool.name); }}>
                                      <Star className={cn('w-6 h-6 text-yellow-400 fill-yellow-400')}/>
                                  </Button>
                              </Card>
                          ))}
                      </div>
                  ) : (
                      <div className="text-center py-10 text-muted-foreground">
                          <Heart className="mx-auto w-10 h-10" />
                          <p className="mt-4 text-base">{t('home.favourites.empty')}</p>
                      </div>
                  )}
              </TabsContent>
          </Tabs>
      </section>
    </>
  )

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
             <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
        </div>
      <div className={cn("relative z-10 text-center text-foreground pt-16 pb-6 px-4 w-full max-w-sm shrink-0 transition-all duration-300", chatMessages.length > 0 && "pt-6")}>
        <h1 className={cn("text-3xl font-bold tracking-tight", chatMessages.length > 0 && "hidden")}>
          {t('header.title')}
        </h1>
        <p className={cn("text-muted-foreground mt-2", chatMessages.length > 0 && "hidden")}>{t('header.subtitle')}</p>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow">
        <div className={cn("flex-shrink-0 px-6 pt-6", chatMessages.length > 0 && "hidden")}>
          <header className="flex justify-between items-center py-2">
            <div className="flex items-center gap-2">
              <GalaxyLogo className="w-8 h-8" />
              <span className="text-2xl font-bold text-foreground">AI Atlas</span>
            </div>
          </header>
          <nav className="mt-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-transparent p-0">
                <TabsTrigger value="home" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.home')}</TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.tools')}</TabsTrigger>
                <TabsTrigger value="trending" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.trending')}</TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:border-primary data-[state=active]:text-primary text-lg font-semibold border-b-4 border-transparent rounded-none pb-3 transition-all duration-300">{t('tabs.settings')}</TabsTrigger>
              </TabsList>
            </Tabs>
          </nav>
        </div>
        
        <Tabs value={activeTab} className="flex-grow flex flex-col overflow-hidden">
            <TabsContent value="home" className="flex-grow overflow-y-auto px-6 pb-4 no-scrollbar mt-0" ref={chatContainerRef}>
                {chatMessages.length === 0 ? renderHomeScreen() : renderChatInterface()}
            </TabsContent>

            <TabsContent value="tools" className="flex-grow overflow-hidden flex flex-col mt-4">
                <div className="px-4 pb-2">
                    <div className="flex gap-3 overflow-x-auto no-scrollbar py-2 -mx-4 px-4">
                        {toolCategories.map(cat => (
                           <Button 
                                key={cat.name} 
                                variant={activeCategory === cat.name ? 'default' : 'secondary'}
                                className={cn(
                                    'flex items-center gap-2 rounded-full h-12 px-6 text-base font-semibold transition-all duration-300 soft-shadow whitespace-nowrap',
                                    activeCategory === cat.name ? 'glow-shadow' : 'text-foreground/70',
                                    activeCategory !== cat.name && cat.gradient
                                )}
                                onClick={() => setActiveCategory(cat.name)}
                            >
                                {cat.icon}
                                <span>{cat.name}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto px-4 no-scrollbar pt-2 pb-4">
                    <div className="grid grid-cols-2 gap-4">
                        {filteredTools.map(tool => (
                            <Link key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" onClick={() => handleToolClick(tool)}>
                                <Card className="relative overflow-hidden group cursor-pointer bg-white/50 border-white/20 border-2 rounded-3xl h-full soft-shadow transition-transform hover:scale-105 duration-300">
                                    <Image src={tool.image} alt={tool.name} width={300} height={200} className="w-full aspect-[4/3] object-cover" data-ai-hint={tool.dataAiHint} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    {tool.isTrending && (
                                        <Badge className="absolute top-2 left-2 bg-cute-purple/80 text-white backdrop-blur-sm text-xs rounded-full border-none shadow-lg">
                                            <TrendingUp className="w-3 h-3 mr-1"/>
                                            {t('tools.trendingBadge')}
                                        </Badge>
                                    )}
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <div className="flex justify-between items-end">
                                            <h5 className="font-semibold text-white text-base leading-tight">{tool.name}</h5>
                                             <div className="flex items-center gap-1">
                                                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm" onClick={(e) => handleShareTool(e, tool)}>
                                                    <Share2 />
                                                </Button>
                                                <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm" onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleFavouriteToggle(tool.name); }}>
                                                    <Star className={cn('w-5 h-5 transition-all', favouritedTools.includes(tool.name) ? 'fill-yellow-300 text-yellow-300' : 'text-white')}/>
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </TabsContent>
            
            <TabsContent value="trending" className="flex-grow overflow-y-auto no-scrollbar mt-4 px-6 pb-4">
                <div className="space-y-3">
                    {trendingTools.map(tool => (
                        <Card key={tool.name} className="p-3 flex items-center gap-4 bg-white/80 border-none rounded-3xl soft-shadow">
                            <Image src={tool.image} alt={tool.name} width={56} height={56} className="rounded-2xl" data-ai-hint={tool.dataAiHint} />
                            <div className="flex-grow">
                                <h5 className="font-semibold text-base">{tool.name}</h5>
                                <p className="text-sm text-muted-foreground">{tool.category}</p>
                            </div>
                            <Link href={tool.url} target="_blank" onClick={() => handleToolClick(tool)}>
                                <Button variant="ghost" size="icon" className="text-muted-foreground rounded-full w-10 h-10">
                                    <ChevronRight />
                                </Button>
                            </Link>
                        </Card>
                    ))}
                </div>
            </TabsContent>

            <TabsContent value="settings" className="flex-grow overflow-y-auto no-scrollbar mt-0 bg-secondary/30">
                <SettingsPage />
            </TabsContent>
        </Tabs>

        <BottomNav onSendMessage={handleSendMessage} isGenerating={isGenerating} />
      </main>
    </div>
  );
}

export default function GalaxyApp() {
  return (
    <AuthGate>
      <App />
    </AuthGate>
  );
}

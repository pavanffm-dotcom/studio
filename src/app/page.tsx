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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { GalaxyLogo } from '@/components/galaxy-logo';
import { BottomNav } from '@/components/bottom-nav';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const popularTools = [
  { name: 'AI Image Generator', icon: <ImageIcon className="w-6 h-6" /> },
  { name: 'AI Video Generator', icon: <Clapperboard className="w-6 h-6" /> },
  { name: 'AI Music Generator', icon: <Mic className="w-6 h-6" /> },
  { name: 'AI Voice Cloner', icon: <Image src="https://picsum.photos/seed/voice-clone/48/48" alt="AI Voice Cloner" width={24} height={24} className="rounded-md" data-ai-hint="voice wave" /> },
  { name: 'AI Icon Generator', icon: <Bot className="w-6 h-6" /> },
];

const libraries = [
  { name: 'Image Library', color: 'bg-indigo-500/30', icon: <ImageIcon/> },
  { name: 'Video Library', color: 'bg-red-500/30', icon: <Clapperboard/> },
  { name: 'Audio Library', color: 'bg-cyan-500/30', icon: <Mic/> },
];

const allTools = [
    { name: 'AI Video Generator', image: 'https://picsum.photos/seed/teddy-bear/300/200', isFavourite: true, isTrending: true, category: 'Video', dataAiHint: 'teddy bear guitar', url: '#' },
    { name: 'AI Image Generator', image: 'https://picsum.photos/seed/eye/300/200', isFavourite: true, isTrending: true, category: 'Image', dataAiHint: 'eye glitter', url: '#' },
    { name: 'Text to Speech', image: 'https://picsum.photos/seed/tts/300/200', isFavourite: false, isTrending: true, category: 'Text', dataAiHint: 'woman headphones', url: '#' },
    { name: 'AI Voice Changer', image: 'https://picsum.photos/seed/voice-changer/300/200', isFavourite: false, isTrending: true, category: 'Audio', dataAiHint: 'sound wave', url: '#' },
    { name: 'AI Voice Cloner', image: 'https://picsum.photos/seed/voice-cloner/300/200', isFavourite: false, isTrending: true, category: 'Audio', dataAiHint: 'woman voice wave', url: '#' },
    { name: 'AI Clothes Changer', image: 'https://picsum.photos/seed/clothes-changer/300/200', isFavourite: false, isTrending: true, category: 'Image', dataAiHint: 'man changing clothes', url: '#' },
]

const imageToVideoTools = [
  { name: 'Runway', image: 'https://picsum.photos/seed/runway/300/200', isFavourite: true, isTrending: true, category: 'Image', dataAiHint: 'abstract animation', url: 'https://runwayml.com/' },
  { name: 'Pika', image: 'https://picsum.photos/seed/pika/300/200', isFavourite: true, isTrending: true, category: 'Image', dataAiHint: 'cinematic video', url: 'https://pika.art/' },
  { name: 'Kaiber', image: 'https://picsum.photos/seed/kaiber/300/200', isFavourite: false, isTrending: true, category: 'Image', dataAiHint: 'artistic motion', url: 'https://www.kaiber.ai/' },
  { name: 'D-ID', image: 'https://picsum.photos/seed/d-id/300/200', isFavourite: false, isTrending: true, category: 'Image', dataAiHint: 'talking avatar', url: 'https://www.d-id.com/' },
  { name: 'HeyGen', image: 'https://picsum.photos/seed/heygen/300/200', isFavourite: false, isTrending: true, category: 'Image', dataAiHint: 'ai presenter', url: 'https://www.heygen.com/' },
  { name: 'Synthesia', image: 'https://picsum.photos/seed/synthesia/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'ai video', url: 'https://www.synthesia.io/' },
  { name: 'Lumen5', image: 'https://picsum.photos/seed/lumen5/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video creation', url: 'https://lumen5.com/' },
  { name: 'InVideo', image: 'https://picsum.photos/seed/invideo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'online editor', url: 'https://invideo.io/' },
  { name: 'Pictory', image: 'https://picsum.photos/seed/pictory/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video marketing', url: 'https://pictory.ai/' },
  { name: 'Designs.ai', image: 'https://picsum.photos/seed/designsai/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'creative suite', url: 'https://designs.ai/' },
  { name: 'Veed.io', image: 'https://picsum.photos/seed/veedio/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video editing', url: 'https://www.veed.io/' },
  { name: 'Wave.video', image: 'https://picsum.photos/seed/wavevideo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video hosting', url: 'https://wave.video/' },
  { name: 'Animoto', image: 'https://picsum.photos/seed/animoto/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'slideshow video', url: 'https://animoto.com/' },
  { name: 'Magisto', image: 'https://picsum.photos/seed/magisto/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'smart editor', url: 'https://www.magisto.com/' },
  { name: 'FlexClip', image: 'https://picsum.photos/seed/flexclip/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'easy video', url: 'https://www.flexclip.com/' },
  { name: 'Clipchamp', image: 'https://picsum.photos/seed/clipchamp/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'microsoft video', url: 'https://clipchamp.com/' },
  { name: 'Moovly', image: 'https://picsum.photos/seed/moovly/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'animation tool', url: 'https://www.moovly.com/' },
  { name: 'Powtoon', image: 'https://picsum.photos/seed/powtoon/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'presentation video', url: 'https://www.powtoon.com/' },
  { name: 'Biteable', image: 'https://picsum.photos/seed/biteable/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'short video', url: 'https://biteable.com/' },
  { name: 'Renderforest', image: 'https://picsum.photos/seed/renderforest/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'branding videos', url: 'https://www.renderforest.com/' },
  { name: 'Kapwing', image: 'https://picsum.photos/seed/kapwing/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'collaborative video', url: 'https://www.kapwing.com/' },
  { name: 'Genmo', image: 'https://picsum.photos/seed/genmo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'generative video', url: 'https://www.genmo.ai/' },
  { name: 'Moonvalley', image: 'https://picsum.photos/seed/moonvalley/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'ai film', url: 'https://moonvalley.ai/' },
  { name: 'InstaVid', image: 'https://picsum.photos/seed/instavid/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'social video', url: '#' },
  { name: 'Storykit', image: 'https://picsum.photos/seed/storykit/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video storytelling', url: 'https://www.storykit.io/' },
  { name: 'Wibbitz', image: 'https://picsum.photos/seed/wibbitz/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'automated video', url: 'https://www.wibbitz.com/' },
  { name: 'GliaCloud', image: 'https://picsum.photos/seed/gliacloud/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'news video', url: 'https://www.gliacloud.com/' },
  { name: 'Typito', image: 'https://picsum.photos/seed/typito/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'text video', url: 'https://typito.com/' },
  { name: 'Offeo', image: 'https://picsum.photos/seed/offeo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'ad maker', url: 'https://offeo.com/' },
  { name: 'Rocketium', image: 'https://picsum.photos/seed/rocketium/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'business video', url: 'https://rocketium.com/' },
  { name: 'Shakr', image: 'https://picsum.photos/seed/shakr/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'facebook ads', url: 'https://www.shakr.com/' },
  { name: 'Raw Shorts', image: 'https://picsum.photos/seed/rawshorts/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'animated video', url: 'https://www.rawshorts.com/' },
  { name: 'Animaker', image: 'https://picsum.photos/seed/animaker/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'diy video', url: 'https://www.animaker.com/' },
  { name: 'Vyond', image: 'https://picsum.photos/seed/vyond/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'professional animation', url: 'https://www.vyond.com/' },
  { name: 'Wideo', image: 'https://picsum.photos/seed/wideo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'marketing animation', url: 'https://wideo.co/' },
  { name: 'Easil', image: 'https://picsum.photos/seed/easil/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'visual content', url: 'https://about.easil.com/' },
  { name: 'PosterMyWall', image: 'https://picsum.photos/seed/postermywall/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'promo graphics', url: 'https://www.postermywall.com/' },
  { name: 'Flixpress', image: 'https://picsum.photos/seed/flixpress/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'intro maker', url: 'https://www.flixpress.com/' },
  { name: 'Kizoa', image: 'https://picsum.photos/seed/kizoa/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'movie maker', url: 'https://www.kizoa.com/' },
  { name: 'WeVideo', image: 'https://picsum.photos/seed/wevideo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'cloud editor', url: 'https://www.wevideo.com/' },
  { name: 'Stupeflix', image: 'https://picsum.photos/seed/stupeflix/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'fast video', url: '#' },
  { name: 'Slidely', image: 'https://picsum.photos/seed/slidely/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'visual media', url: 'https://slidely.com/' },
  { name: 'PhotoSnack', image: 'https://picsum.photos/seed/photosnack/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'photo slideshow', url: '#' },
  { name: 'Promo.com', image: 'https://picsum.photos/seed/promo/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video ads', url: 'https://promo.com/' },
  { name: 'Vidnami', image: 'https://picsum.photos/seed/vidnami/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'ai content', url: '#' },
  { name: 'Crello', image: 'https://picsum.photos/seed/crello/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'vista create', url: 'https://crello.com/' },
  { name: 'MotionDen', image: 'https://picsum.photos/seed/motionden/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'video templates', url: 'https://motionden.com/' },
  { name: 'Camtasia', image: 'https://picsum.photos/seed/camtasia/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'screen recorder', url: 'https://www.techsmith.com/video-editor.html' },
  { name: 'Filmora', image: 'https://picsum.photos/seed/filmora/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'wondershare editor', url: 'https://filmora.wondershare.com/' },
  { name: 'Adobe Premiere Rush', image: 'https://picsum.photos/seed/premiererush/300/200', isFavourite: false, isTrending: false, category: 'Image', dataAiHint: 'adobe video', url: 'https://www.adobe.com/products/premiere-rush.html' },
];

const textToVideoTools = [
  { name: 'Runway', image: 'https://picsum.photos/seed/runway-video/300/200', isFavourite: true, isTrending: true, category: 'Video', dataAiHint: 'ai video generation', url: 'https://runwayml.com/' },
  { name: 'Pika', image: 'https://picsum.photos/seed/pika-video/300/200', isFavourite: true, isTrending: true, category: 'Video', dataAiHint: 'text to video', url: 'https://pika.art/' },
  { name: 'InVideo', image: 'https://picsum.photos/seed/invideo-video/300/200', isFavourite: true, isTrending: true, category: 'Video', dataAiHint: 'ai video editor', url: 'https://invideo.io/' },
  { name: 'Synthesia', image: 'https://picsum.photos/seed/synthesia-video/300/200', isFavourite: true, isTrending: true, category: 'Video', dataAiHint: 'ai avatars', url: 'https://www.synthesia.io/' },
  { name: 'HeyGen', image: 'https://picsum.photos/seed/heygen-video/300/200', isFavourite: true, isTrending: true, category: 'Video', dataAiHint: 'generative video', url: 'https://www.heygen.com/' },
  { name: 'Pictory', image: 'https://picsum.photos/seed/pictory-video/300/200', isFavourite: false, isTrending: true, category: 'Video', dataAiHint: 'video from script', url: 'https://pictory.ai/' },
  { name: 'Veed.io', image: 'https://picsum.photos/seed/veed-video/300/200', isFavourite: false, isTrending: true, category: 'Video', dataAiHint: 'online video suite', url: 'https://www.veed.io/' },
  { name: 'Lumen5', image: 'https://picsum.photos/seed/lumen5-video/300/200', isFavourite: false, isTrending: true, category: 'Video', dataAiHint: 'social media video', url: 'https://lumen5.com/' },
  { name: 'Fliki', image: 'https://picsum.photos/seed/fliki-video/300/200', isFavourite: false, isTrending: true, category: 'Video', dataAiHint: 'text to speech video', url: 'https://fliki.ai/' },
  { name: 'Deepbrain AI', image: 'https://picsum.photos/seed/deepbrain-video/300/200', isFavourite: false, isTrending: true, category: 'Video', dataAiHint: 'ai studios', url: 'https://www.deepbrain.io/' },
  { name: 'Gen-2', image: 'https://picsum.photos/seed/gen2-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'runwayml video', url: '#' },
  { name: 'D-ID', image: 'https://picsum.photos/seed/did-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'creative reality', url: 'https://www.d-id.com/' },
  { name: 'Kaiber', image: 'https://picsum.photos/seed/kaiber-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai video art', url: 'https://www.kaiber.ai/' },
  { name: 'FlexClip', image: 'https://picsum.photos/seed/flexclip-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'easy video maker', url: 'https://www.flexclip.com/' },
  { name: 'Designs.ai', image: 'https://picsum.photos/seed/designsai-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai creative tools', url: 'https://designs.ai/' },
  { name: 'Hour One', image: 'https://picsum.photos/seed/hourone-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'virtual presenters', url: 'https://hourone.ai/' },
  { name: 'Colossyan', image: 'https://picsum.photos/seed/colossyan-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai video actors', url: 'https://www.colossyan.com/' },
  { name: 'Elai.io', image: 'https://picsum.photos/seed/elai-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'text to video platform', url: 'https://elai.io/' },
  { name: 'Kapwing', image: 'https://picsum.photos/seed/kapwing-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'collaborative video', url: 'https://www.kapwing.com/' },
  { name: 'Steve.AI', image: 'https://picsum.photos/seed/steveai-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'animated video maker', url: 'https://www.steve.ai/' },
  { name: 'GliaCloud', image: 'https://picsum.photos/seed/gliacloud-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'news video automation', url: 'https://www.gliacloud.com/' },
  { name: 'Rephrase.ai', image: 'https://picsum.photos/seed/rephrase-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai personalized video', url: 'https://www.rephrase.ai/' },
  { name: 'Yepic AI', image: 'https://picsum.photos/seed/yepic-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video translation', url: 'https://www.yepic.ai/' },
  { name: 'Wisecut', image: 'https://picsum.photos/seed/wisecut-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai video editing', url: 'https://www.wisecut.video/' },
  { name: 'Opus Clip', image: 'https://picsum.photos/seed/opusclip-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'viral video clips', url: 'https://www.opus.pro/' },
  { name: 'Vidyo.ai', image: 'https://picsum.photos/seed/vidyo-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'short form video', url: 'https://vidyo.ai/' },
  { name: 'Raw Shorts', image: 'https://picsum.photos/seed/rawshorts-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai animation', url: 'https://www.rawshorts.com/' },
  { name: 'Wave.video', image: 'https://picsum.photos/seed/wavevideo-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video marketing', url: 'https://wave.video/' },
  { name: 'Animaker', image: 'https://picsum.photos/seed/animaker-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'animation maker', url: 'https://www.animaker.com/' },
  { name: 'Moovly', image: 'https://picsum.photos/seed/moovly-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'studio editor', url: 'https://www.moovly.com/' },
  { name: 'Vyond', image: 'https://picsum.photos/seed/vyond-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'enterprise video', url: 'https://www.vyond.com/' },
  { name: 'Renderforest', image: 'https://picsum.photos/seed/renderforest-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'branding tools', url: 'https://www⚫renderforest.com/' },
  { name: 'Biteable', image: 'https://picsum.photos/seed/biteable-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'studio video', url: 'https://biteable.com/' },
  { name: 'WeVideo', image: 'https://picsum.photos/seed/wevideo-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'online video editor', url: 'https://www.wevideo.com/' },
  { name: 'Magisto', image: 'https://picsum.photos/seed/magisto-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'vimeo create', url: 'https://www.magisto.com/' },
  { name: 'Clipchamp', image: 'https://picsum.photos/seed/clipchamp-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'microsoft video', url: 'https://clipchamp.com/' },
  { name: 'Kamua', image: 'https://picsum.photos/seed/kamua-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'automated editing', url: 'https://kamua.com/' },
  { name: 'Type Studio', image: 'https://picsum.photos/seed/typestudio-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'text based video', url: 'https://www.typestudio.co/' },
  { name: 'Wibbitz', image: 'https://picsum.photos/seed/wibbitz-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'automated video creation', url: 'https://www.wibbitz.com/' },
  { name: 'Storykit', image: 'https://picsum.photos/seed/storykit-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video storytelling', url: 'https://www.storykit.io/' },
  { name: 'Genmo', image: 'https://picsum.photos/seed/genmo-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'generative art', url: 'https://www.genmo.ai/' },
  { name: 'Sora', image: 'https://picsum.photos/seed/sora-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'openai video', url: 'https://openai.com/sora' },
  { name: 'Vimeo', image: 'https://picsum.photos/seed/vimeo-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video platform', url: 'https://vimeo.com/' },
  { name: 'DALL-E 3', image: 'https://picsum.photos/seed/dalle3-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'image and video', url: '#' },
  { name: 'Midjourney', image: 'https://picsum.photos/seed/midjourney-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai art video', url: 'https://www.midjourney.com/' },
  { name: 'Visla', image: 'https://picsum.photos/seed/visla-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai video for teams', url: 'https://www.visla.us/' },
  { name: 'Synthesia', image: 'https://picsum.photos/seed/synthesia-alt-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video generation platform', url: 'https://www.synthesia.io/' },
  { name: 'MuseNet', image: 'https://picsum.photos/seed/musenet-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'music video', url: 'https://openai.com/research/musenet' },
  { name: 'Artbreeder', image: 'https://picsum.photos/seed/artbreeder-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'collages video', url: 'https://www⚫artbreeder.com/' },
  { name: 'RunwayML', image: 'https://picsum.photos/seed/runwayml-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai magic tools', url: 'https://runwayml.com/' },
  { name: 'Papercup', image: 'https://picsum.photos/seed/papercup-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai dubbing', url: 'https://www.papercup.com/' },
  { name: 'Veritone', image: 'https://picsum.photos/seed/veritone-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai operating system', url: 'https://www.veritone.com/' },
  { name: 'Trint', image: 'https://picsum.photos/seed/trint-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'audio transcription', url: 'https://trint.com/' },
  { name: 'Descript', image: 'https://picsum.photos/seed/descript-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'all in one editor', url: 'https://www.descript.com/' },
  { name: 'Simon Says', image: 'https://picsum.photos/seed/simonsays-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'transcription service', url: 'https://www.simonsays.ai/' },
  { name: 'Waymark', image: 'https://picsum.photos/seed/waymark-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'tv commercials', url: 'https://waymark.com/' },
  { name: 'Filmora', image: 'https://picsum.photos/seed/filmora-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'wondershare video editor', url: 'https://filmora.wondershare.com/' },
  { name: 'CapCut', image: 'https://picsum.photos/seed/capcut-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'bytedance video editor', url: 'https://www.capcut.com/' },
  { name: 'Viide.io', image: 'https://picsum.photos/seed/viide-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video platform', url: '#' },
  { name: 'Shuffll', image: 'https://picsum.photos/seed/shuffll-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video creation service', url: 'https://www.shuffll.com/' },
  { name: 'AIVO', image: 'https://picsum.photos/seed/aivo-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai video solutions', url: 'https://aivo.co/' },
  { name: 'Tavus', image: 'https://picsum.photos/seed/tavus-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'personalized video', url: 'https://www.tavus.io/' },
  { name: 'Vidyard', image: 'https://picsum.photos/seed/vidyard-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video for business', url: 'https://www.vidyard.com/' },
  { name: 'Hippo Video', image: 'https://picsum.photos/seed/hippovideo-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video customer experience', url: 'https://www.hippovideo.io/' },
  { name: 'BombBomb', image: 'https://picsum.photos/seed/bombbomb-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video messaging', url: 'https://bombbomb.com/' },
  { name: 'Covideo', image: 'https://picsum.photos/seed/covideo-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video email', url: 'https://www.covideo.com/' },
  { name: 'Loom', image: 'https://picsum.photos/seed/loom-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video messaging for work', url: 'https://www.loom.com/' },
  { name: 'Wistia', image: 'https://picsum.photos/seed/wistia-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video marketing software', url: 'https://wistia.com/' },
  { name: 'SproutVideo', image: 'https://picsum.photos/seed/sproutvideo-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video hosting', url: 'https://sproutvideo.com/' },
  { name: 'Cincopa', image: 'https://picsum.photos/seed/cincopa-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'digital asset management', url: 'https://www.cincopa.com/' },
  { name: 'Kaltura', image: 'https://picsum.photos/seed/kaltura-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video cloud', url: 'https://corp.kaltura.com/' },
  { name: 'Panopto', image: 'https://picsum.photos/seed/panopto-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video management', url: 'https://www.panopto.com/' },
  { name: 'Brightcove', image: 'https://picsum.photos/seed/brightcove-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'online video platform', url: 'https://www.brightcove.com/' },
  { name: 'Dacast', image: 'https://picsum.photos/seed/dacast-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'live streaming', url: 'https://www.dacast.com/' },
  { name: 'JW Player', image: 'https://picsum.photos/seed/jwplayer-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video player', url: 'https://www.jwplayer.com/' },
  { name: 'Flowplayer', image: 'https://picsum.photos/seed/flowplayer-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video solution', url: 'https://flowplayer.com/' },
  { name: 'Video.js', image: 'https://picsum.photos/seed/videojs-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'web video player', url: 'https://videojs.com/' },
  { name: 'Theoplayer', image: 'https://picsum.photos/seed/theoplayer-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'html5 video', url: 'https://www.theoplayer.com/' },
  { name: 'Aftershoot', image: 'https://picsum.photos/seed/aftershoot-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'culling software', url: 'https://aftershoot.com/' },
  { name: 'Topaz Video AI', image: 'https://picsum.photos/seed/topazvideo-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video enhancement', url: 'https://www.topazlabs.com/topaz-video-ai' },
  { name: 'AVCLabs', image: 'https://picsum.photos/seed/avclabs-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video enhancer', url: 'https://avclabs.com/' },
  { name: 'HitPaw', image: 'https://picsum.photos/seed/hitpaw-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video tools', url: 'https://www.hitpaw.com/' },
  { name: 'Pixop', image: 'https://picsum.photos/seed/pixop-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video remastering', url: 'https://www.pixop.com/' },
  { name: 'Neural.love', image: 'https://picsum.photos/seed/neurallove-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai image generator', url: 'https://neural.love/' },
  { name: 'Colourlab.ai', image: 'https://picsum.photos/seed/colourlab-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'color grading', url: 'https://colourlab.ai/' },
  { name: 'Timebolt', image: 'https://picsum.photos/seed/timebolt-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'silence removal', url: 'https://www.timebolt.io/' },
  { name: 'Gling', image: 'https://picsum.photos/seed/gling-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'youtube video editor', url: 'https://gling.ai/' },
  { name: 'EbSynth', image: 'https://picsum.photos/seed/ebsynth-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'video synthesis', url: 'https://ebsynth.com/' },
  { name: 'Ssemble', image: 'https://picsum.photos/seed/ssemble-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai video editing', url: 'https://www.ssemble.com/' },
  { name: 'Plask', image: 'https://picsum.photos/seed/plask-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'motion capture', url: 'https://plask.ai/' },
  { name: 'DeepMotion', image: 'https://picsum.photos/seed/deepmotion-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: '3d animation', url: 'https://www.deepmotion.com/' },
  { name: 'Rokoko', image: 'https://picsum.photos/seed/rokoko-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'motion capture suit', url: 'https://www.rokoko.com/' },
  { name: 'Move.ai', image: 'https://picsum.photos/seed/moveai-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'markerless mocap', url: 'https://www.move.ai/' },
  { name: 'Wonder Dynamics', image: 'https://picsum.photos/seed/wonderdynamics-video/300/200', isFavourite: false, isTrending: false, category: 'Video', dataAiHint: 'ai animation', url: 'https://wonderdynamics.com/' },
];

const toolCategories = [
    { name: 'All', icon: <LayoutGrid />, color: 'bg-primary text-primary-foreground' },
    { name: 'Image', icon: <ImageIcon />, color: 'bg-green-500/20 text-green-400' },
    { name: 'Video', icon: <Video />, color: 'bg-red-500/20 text-red-400' },
    { name: 'Text', icon: <Type />, color: 'bg-blue-500/20 text-blue-400' },
];


export default function GalaxyApp() {
  const [activeTab, setActiveTab] = React.useState('tools');
  const [activeCategory, setActiveCategory] = React.useState('All');

  const getFilteredTools = () => {
    switch (activeCategory) {
        case 'All':
            return allTools;
        case 'Image':
            return imageToVideoTools;
        case 'Video':
            return textToVideoTools;
        default:
            return allTools.filter(tool => tool.category === activeCategory);
    }
  };

  const filteredTools = getFilteredTools();

  return (
    <div className="bg-background h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
        <div className="absolute inset-0 z-0">
            <Image 
                src="https://picsum.photos/seed/space/1080/1920"
                alt="Galaxy background"
                fill
                className="object-cover"
                data-ai-hint="galaxy space"
            />
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        </div>
      <div className="relative z-10 text-center text-white pt-12 pb-4 px-4 w-full max-w-sm shrink-0">
        <h1 className="text-3xl font-bold tracking-tight">
          AI Tools for Text, Image, Video & More
        </h1>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card rounded-t-3xl shadow-2xl flex flex-col min-h-0">
        <div className="flex-shrink-0 px-4 pt-4">
          <header className="flex justify-between items-center py-2">
            <div className="flex items-center gap-2">
              <GalaxyLogo className="w-7 h-7" />
              <span className="text-xl font-bold">Galaxy.ai</span>
            </div>
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
          </header>
          <nav className="mt-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-transparent p-0">
                <TabsTrigger value="home" className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-3">Home</TabsTrigger>
                <TabsTrigger value="tools" className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-3">Tools</TabsTrigger>
                <TabsTrigger value="settings" className="data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent rounded-none pb-3">Settings</TabsTrigger>
              </TabsList>
            </Tabs>
          </nav>
        </div>
        
        <Tabs value={activeTab} className="flex-grow flex flex-col overflow-hidden">
            <TabsContent value="home" className="flex-grow overflow-y-auto px-4 pb-4 no-scrollbar mt-0">
                <div className="bg-primary text-primary-foreground p-4 rounded-2xl my-4 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-10 w-32 h-32 opacity-80">
                        <Image src="https://picsum.photos/seed/ai-person/200/200" alt="AI illustration" width={128} height={128} className="object-contain" data-ai-hint="AI illustration person"/>
                    </div>
                    <h3 className="font-bold text-lg">Welcome To Galaxy.ai</h3>
                    <p className="text-sm opacity-90 mt-1 max-w-[60%]">Discover 2113 powerful AI tools to enhance your productivity</p>
                    <Button variant="secondary" className="mt-4 bg-white text-primary hover:bg-white/90">Explore Tools</Button>
                </div>

                <section>
                    <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold">Popular Tools</h4>
                        <Button variant="link" className="text-primary p-0 h-auto">See all</Button>
                    </div>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                        {popularTools.map(tool => (
                            <div key={tool.name} className="flex flex-col items-center shrink-0 w-20">
                                <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center">
                                    {tool.icon}
                                </div>
                                <p className="text-xs text-center mt-2 text-muted-foreground">{tool.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="mt-4">
                    <h4 className="font-semibold mb-2">Libraries</h4>
                     <div className="grid grid-cols-3 gap-3">
                        {libraries.map(lib => (
                            <div key={lib.name} className={`p-3 rounded-xl flex flex-col justify-between aspect-square ${lib.color}`}>
                                <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-white">
                                    {lib.icon}
                                </div>
                                <p className="text-white font-semibold text-sm mt-4">{lib.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                <section className="mt-4">
                    <Tabs defaultValue="recent" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 bg-secondary">
                            <TabsTrigger value="recent">Recent</TabsTrigger>
                            <TabsTrigger value="favourites">Favourites</TabsTrigger>
                        </TabsList>
                        <TabsContent value="recent" className="mt-4">
                             <Card className="p-3 flex items-center gap-3 bg-secondary">
                                <Image src="https://picsum.photos/seed/ai-face/80/80" alt="AI Image" width={56} height={56} className="rounded-lg" data-ai-hint="AI face"/>
                                <div className="flex-grow">
                                    <h5 className="font-semibold">AI Image Generator</h5>
                                    <p className="text-xs text-muted-foreground">Produce stunning AI-generated images and artwork to visualize your ideas.</p>
                                </div>
                                <Button variant="ghost" size="icon" className="text-muted-foreground">
                                    &gt;
                                </Button>
                             </Card>
                        </TabsContent>
                        <TabsContent value="favourites" className="mt-4">
                            <div className="text-center py-8 text-muted-foreground">
                                <Heart className="mx-auto" />
                                <p className="mt-2 text-sm">No Favourites yet.</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </section>
            </TabsContent>

            <TabsContent value="tools" className="flex-grow overflow-hidden flex flex-col mt-0">
                <div className="px-4 pt-2 pb-2">
                    <div className="flex gap-2 overflow-x-auto no-scrollbar">
                        {toolCategories.map(cat => (
                           <Button 
                                key={cat.name} 
                                variant={activeCategory === cat.name ? 'default' : 'secondary'}
                                className={`flex items-center gap-2 rounded-full h-9 ${activeCategory !== cat.name ? cat.color : ''}`}
                                onClick={() => setActiveCategory(cat.name)}
                            >
                                {cat.icon}
                                <span>{cat.name}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto px-4 no-scrollbar">
                    <div className="grid grid-cols-2 gap-4">
                        {filteredTools.map(tool => (
                            <Link key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer">
                                <Card className="relative overflow-hidden group cursor-pointer bg-secondary border-none h-full">
                                    <Image src={tool.image} alt={tool.name} width={300} height={200} className="w-full aspect-square object-cover" data-ai-hint={tool.dataAiHint} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    {tool.isTrending && (
                                        <Badge className="absolute top-2 left-2 bg-primary/80 text-primary-foreground backdrop-blur-sm text-xs">
                                            <TrendingUp className="w-3 h-3 mr-1"/>
                                            Trending
                                        </Badge>
                                    )}
                                    <div className="absolute bottom-0 left-0 right-0 p-2">
                                        <div className="flex justify-between items-end">
                                            <h5 className="font-semibold text-white text-sm">{tool.name}</h5>
                                            <Button variant="ghost" size="icon" className="w-6 h-6 text-white hover:text-yellow-400" onClick={(e) => { e.preventDefault(); e.stopPropagation(); /* Handle favorite logic */ }}>
                                                <Star className={`w-4 h-4 ${tool.isFavourite ? 'fill-yellow-400 text-yellow-400' : 'text-white'}`}/>
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </TabsContent>
            
            <TabsContent value="settings" className="flex-grow overflow-y-auto px-4 pb-4 no-scrollbar mt-0">
                <div className="text-center py-16 text-muted-foreground">
                    <p>Settings will be here.</p>
                </div>
            </TabsContent>
        </Tabs>

        <BottomNav />
      </main>
    </div>
  );
}

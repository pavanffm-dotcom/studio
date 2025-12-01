'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Brush, Youtube, MessageSquare, BookOpen, FileText, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, Video, Image as ImageIcon, Film, Scissors, Mic2, BarChart, Tv, Users, Bot, Palette, Paintbrush
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useFavourites } from '@/context/favourites-context';

type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
};

type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

const toolData: ToolCategory[] = [
    {
        title: "Text-to-Image Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Midjourney', description: 'Generate high-quality images from text prompts.', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-t2i/600/400', dataAiHint: 'ai art' },
            { name: 'DALL·E', description: 'Create realistic images and art from a description in natural language.', url: 'https://openai.com/dall-e-3/', image: 'https://picsum.photos/seed/dalle-t2i/600/400', dataAiHint: 'openai image' },
            { name: 'Leonardo AI', description: 'Produce stunning game assets, concept art, and more.', url: 'https://leonardo.ai/', image: 'https://picsum.photos/seed/leonardo-t2i/600/400', dataAiHint: 'game assets' },
            { name: 'Stable Diffusion', description: 'A powerful open-source text-to-image model.', url: 'https://stablediffusionweb.com/', image: 'https://picsum.photos/seed/stable-diffusion-t2i/600/400', dataAiHint: 'image generation' },
            { name: 'BlueWillow', description: 'A free-to-use AI image generator on Discord.', url: 'https://www.bluewillow.ai/', image: 'https://picsum.photos/seed/bluewillow-t2i/600/400', dataAiHint: 'discord ai' },
        ]
    },
    {
        title: "Image-to-Image Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stable Diffusion img2img', description: 'Transform existing images with text prompts.', url: 'https://stablediffusionweb.com/img2img', image: 'https://picsum.photos/seed/sd-img2img/600/400', dataAiHint: 'image transform' },
            { name: 'Adobe Firefly', description: 'Generative Fill and image expansion features.', url: 'https://firefly.adobe.com/', image: 'https://picsum.photos/seed/firefly-img2img/600/400', dataAiHint: 'generative fill' },
            { name: 'Midjourney Variations', description: 'Create variations of an existing Midjourney image.', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-variations/600/400', dataAiHint: 'image variations' },
            { name: 'Playground AI', description: 'Edit and remix images with AI.', url: 'https://playground.com/', image: 'https://picsum.photos/seed/playground-img2img/600/400', dataAiHint: 'image remix' },
            { name: 'Recraft AI', description: 'AI tool for generating and editing vector art.', url: 'https://www.recraft.ai/', image: 'https://picsum.photos/seed/recraft-img2img/600/400', dataAiHint: 'vector art' },
        ]
    },
    {
        title: "Text-to-Video Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway Gen-2', description: 'Generate video from text, images, or video clips.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-gen2/600/400', dataAiHint: 'ai video' },
            { name: 'Pika Labs', description: 'AI video generator for creative ideas.', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pikalabs-t2v/600/400', dataAiHint: 'creative video' },
            { name: 'Synthesia', description: 'Create AI videos with AI avatars and voiceovers.', url: 'https://www.synthesia.io/', image: 'https://picsum.photos/seed/synthesia-t2v/600/400', dataAiHint: 'ai avatar' },
            { name: 'Luma Dream Machine', description: 'Create high-quality, realistic videos from text.', url: 'https://lumalabs.ai/dream-machine', image: 'https://picsum.photos/seed/luma-dream/600/400', dataAiHint: 'realistic video' },
            { name: 'HeyGen AI', description: 'AI video generator with talking avatars.', url: 'https://www.heygen.com/', image: 'https://picsum.photos/seed/heygen-t2v/600/400', dataAiHint: 'talking avatar' },
        ]
    },
    {
        title: "Image-to-Video Tools",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway Motion Brush', description: 'Add controlled motion to still images.', url: 'https://runwayml.com/motion-brush/', image: 'https://picsum.photos/seed/runway-motionbrush/600/400', dataAiHint: 'image animation' },
            { name: 'Pika Image Animation', description: 'Animate parts of your images with ease.', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-animation/600/400', dataAiHint: 'photo animation' },
            { name: 'Kaiber AI', description: 'Transform your images into stunning videos.', url: 'https://www.kaiber.ai/', image: 'https://picsum.photos/seed/kaiber-i2v/600/400', dataAiHint: 'visual storytelling' },
            { name: 'Genmo', description: 'Create videos from images and text prompts.', url: 'https://www.genmo.ai/', image: 'https://picsum.photos/seed/genmo-i2v/600/400', dataAiHint: 'generative video' },
            { name: 'Viggle AI', description: 'AI video generator with character consistency.', url: 'https://viggle.ai/', image: 'https://picsum.photos/seed/viggle-ai/600/400', dataAiHint: 'character animation' },
        ]
    },
    {
        title: "Text-to-Voice Tools",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ElevenLabs', description: 'The most realistic and versatile AI speech software.', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-t2v/600/400', dataAiHint: 'ai speech' },
            { name: 'Play.ht', description: 'AI-powered text to voice generator.', url: 'https://play.ht/', image: 'https://picsum.photos/seed/playht-t2v/600/400', dataAiHint: 'voice generator' },
            { name: 'Speechify', description: 'The #1 text-to-speech reader.', url: 'https://speechify.com/', image: 'https://picsum.photos/seed/speechify-t2v/600/400', dataAiHint: 'text reader' },
            { name: 'Murf AI', description: 'Go from text to speech with a versatile AI voice generator.', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murfai-t2v/600/400', dataAiHint: 'ai voiceover' },
            { name: 'NaturalReader', description: 'Powerful text-to-speech for home, work, and on the go.', url: 'https://www.naturalreaders.com/', image: 'https://picsum.photos/seed/naturalreader-t2v/600/400', dataAiHint: 'read aloud' },
        ]
    },
    {
        title: "Voice-to-Voice Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Voicemod', description: 'Real-time AI voice changer and soundboard.', url: 'https://www.voicemod.net/', image: 'https://picsum.photos/seed/voicemod-v2v/600/400', dataAiHint: 'voice changer' },
            { name: 'ElevenLabs Voice Clone', description: 'Create a digital copy of your own voice.', url: 'https://elevenlabs.io/voice-cloning', image: 'https://picsum.photos/seed/elevenlabs-v2v/600/400', dataAiHint: 'voice cloning' },
            { name: 'Descript Overdub', description: 'Create a text-to-speech model of your voice.', url: 'https://www.descript.com/overdub', image: 'https://picsum.photos/seed/descript-v2v/600/400', dataAiHint: 'ai voice' },
            { name: 'RVC', description: 'Retrieval-based Voice Conversion models and tools.', url: 'https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI', image: 'https://picsum.photos/seed/rvc/600/400', dataAiHint: 'open source' },
            { name: 'CleanVoice AI', description: 'Automatically edit your podcast episodes.', url: 'https://cleanvoice.ai/', image: 'https://picsum.photos/seed/cleanvoice/600/400', dataAiHint: 'podcast editing' },
        ]
    },
    {
        title: "Script Writing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatGPT', description: 'Generative AI for brainstorming and writing scripts.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-script/600/400', dataAiHint: 'ai script' },
            { name: 'Jasper.ai', description: 'AI content platform to help write video scripts.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-script/600/400', dataAiHint: 'video scripts' },
            { name: 'Copy.ai', description: 'Generate high-quality marketing and script copy.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-script/600/400', dataAiHint: 'marketing copy' },
            { name: 'Writesonic', description: 'AI writer for creating SEO-friendly scripts.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-script/600/400', dataAiHint: 'seo script' },
            { name: 'Rytr', description: 'An AI writing assistant for fast, affordable content.', url: 'https://rytr.me/', image: 'https://picsum.photos/seed/rytr-script/600/400', dataAiHint: 'writing assistant' },
        ]
    },
    {
        title: "Video Editing Tools",
        icon: <Scissors className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CapCut', description: 'Free all-in-one video editor for everyone.', url: 'https://www.capcut.com/', image: 'https://picsum.photos/seed/capcut-editing/600/400', dataAiHint: 'video editor' },
            { name: 'Adobe Premiere Pro', description: 'Professional video editing software.', url: 'https://www.adobe.com/products/premiere.html', image: 'https://picsum.photos/seed/premierepro/600/400', dataAiHint: 'pro editing' },
            { name: 'DaVinci Resolve', description: 'Color correction, visual effects, and audio post-production.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', image: 'https://picsum.photos/seed/davinci/600/400', dataAiHint: 'color grading' },
            { name: 'Filmora', description: 'Easy-to-use video editing software.', url: 'https://filmora.wondershare.com/', image: 'https://picsum.photos/seed/filmora-editing/600/400', dataAiHint: 'user friendly' },
            { name: 'Final Cut Pro', description: 'Professional video editing for Apple devices.', url: 'https://www.apple.com/final-cut-pro/', image: 'https://picsum.photos/seed/finalcut/600/400', dataAiHint: 'apple editing' },
        ]
    },
    {
        title: "Reels/Shorts Creation Tools",
        icon: <Youtube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CapCut Templates', description: 'Use trending templates to create short videos quickly.', url: 'https://www.capcut.com/templates', image: 'https://picsum.photos/seed/capcut-templates/600/400', dataAiHint: 'trending templates' },
            { name: 'VN Editor', description: 'Free and professional video editor for mobile.', url: 'https://www.vlognow.me/', image: 'https://picsum.photos/seed/vn-editor/600/400', dataAiHint: 'mobile editor' },
            { name: 'InShot', description: 'A powerful mobile video and photo editor.', url: 'https://inshot.com/', image: 'https://picsum.photos/seed/inshot-reels/600/400', dataAiHint: 'photo video' },
            { name: 'Mojo', description: 'Create stunning animated social stories and videos.', url: 'https://www.mojo-app.com/', image: 'https://picsum.photos/seed/mojo-reels/600/400', dataAiHint: 'animated stories' },
            { name: 'BeatSync', description: 'Automatically sync your video clips to the beat of music.', url: '#', image: 'https://picsum.photos/seed/beatsync/600/400', dataAiHint: 'music sync' },
        ]
    },
    {
        title: "AI Video Generation Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Pictory', description: 'Create videos from scripts or blog posts automatically.', url: 'https://pictory.ai/', image: 'https://picsum.photos/seed/pictory-ai-gen/600/400', dataAiHint: 'script to video' },
            { name: 'InVideo AI', description: 'Generate videos from text prompts.', url: 'https://invideo.io/ai', image: 'https://picsum.photos/seed/invideo-ai-gen/600/400', dataAiHint: 'text prompt' },
            { name: 'Lumen5', description: 'AI-powered video creation platform for brands.', url: 'https://lumen5.com/', image: 'https://picsum.photos/seed/lumen5-ai-gen/600/400', dataAiHint: 'brand video' },
            { name: 'Synthesia', description: 'Create professional videos with AI avatars.', url: 'https://www.synthesia.io/', image: 'https://picsum.photos/seed/synthesia-ai-gen/600/400', dataAiHint: 'professional video' },
            { name: 'Runway ML', description: 'Advanced AI magic tools for video generation and editing.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-ai-gen/600/400', dataAiHint: 'video editing' },
        ]
    },
    {
        title: "Thumbnail & Graphic Tools",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Easy-to-use design tool for thumbnails, posts, and more.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-thumbnail/600/400', dataAiHint: 'thumbnail maker' },
            { name: 'Photoshop', description: 'Industry-standard tool for professional graphic design.', url: 'https://www.adobe.com/products/photoshop.html', image: 'https://picsum.photos/seed/photoshop-thumbnail/600/400', dataAiHint: 'professional design' },
            { name: 'Photopea', description: 'Free online editor supporting PSD, XCF, and Sketch formats.', url: 'https://www.photopea.com/', image: 'https://picsum.photos/seed/photopea-thumbnail/600/400', dataAiHint: 'free editor' },
            { name: 'Pixlr', description: 'Free online photo editor with AI tools.', url: 'https://pixlr.com/', image: 'https://picsum.photos/seed/pixlr-thumbnail/600/400', dataAiHint: 'ai photo editor' },
            { name: 'Fotor', description: 'Online designer for photo editing and graphic creation.', url: 'https://www.fotor.com/', image: 'https://picsum.photos/seed/fotor-thumbnail/600/400', dataAiHint: 'graphic creation' },
        ]
    },
    {
        title: "Photo Editing Tools",
        icon: <Paintbrush className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lightroom', description: 'Cloud-based service for professional photographers.', url: 'https://www.adobe.com/products/photoshop-lightroom.html', image: 'https://picsum.photos/seed/lightroom-editing/600/400', dataAiHint: 'photo management' },
            { name: 'VSCO', description: 'Photo and video editor with presets and creative tools.', url: 'https://vsco.co/', image: 'https://picsum.photos/seed/vsco-editing/600/400', dataAiHint: 'creative presets' },
            { name: 'Snapseed', description: 'A complete and professional photo editor by Google.', url: 'https://snapseed.online/', image: 'https://picsum.photos/seed/snapseed-editing/600/400', dataAiHint: 'google photo' },
            { name: 'PicsArt', description: 'All-in-one photo and video editing platform.', url: 'https://picsart.com/', image: 'https://picsum.photos/seed/picsart-editing/600/400', dataAiHint: 'video platform' },
            { name: 'Remini', description: 'AI-powered photo and video enhancer.', url: 'https://remini.ai/', image: 'https://picsum.photos/seed/remini-editing/600/400', dataAiHint: 'photo enhancer' },
        ]
    },
    {
        title: "YouTube Tools",
        icon: <Youtube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'TubeBuddy', description: 'Browser extension for managing and growing your channel.', url: 'https://www.tubebuddy.com/', image: 'https://picsum.photos/seed/tubebuddy/600/400', dataAiHint: 'channel growth' },
            { name: 'VidIQ', description: 'AI-powered tools for YouTube creators.', url: 'https://vidiq.com/', image: 'https://picsum.photos/seed/vidiq-youtube/600/400', dataAiHint: 'youtube creators' },
            { name: 'YT Studio', description: 'Official app to manage your YouTube channel.', url: 'https://studio.youtube.com/', image: 'https://picsum.photos/seed/ytstudio/600/400', dataAiHint: 'channel management' },
            { name: 'Social Blade', description: 'Track statistics and analytics for YouTube channels.', url: 'https://socialblade.com/', image: 'https://picsum.photos/seed/socialblade-youtube/600/400', dataAiHint: 'youtube stats' },
            { name: 'Thumbnail Maker', description: 'Various apps and tools for creating YouTube thumbnails.', url: '#', image: 'https://picsum.photos/seed/thumbnail-maker/600/400', dataAiHint: 'custom thumbnail' },
        ]
    },
    {
        title: "Captions & Subtitle Tools",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'VEED.io', description: 'Online video editor with automatic subtitle generation.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veedio-captions/600/400', dataAiHint: 'auto subtitles' },
            { name: 'Kapwing', description: 'Add subtitles to video online for free.', url: 'https://www.kapwing.com/tools/add-subtitles-to-video', image: 'https://picsum.photos/seed/kapwing-captions/600/400', dataAiHint: 'free subtitles' },
            { name: 'SubtitleBee', description: 'Automatically add subtitles to your videos.', url: 'https://subtitlebee.com/', image: 'https://picsum.photos/seed/subtitlebee/600/400', dataAiHint: 'video subtitles' },
            { name: 'Nova AI', description: 'Online video editor with subtitle generation.', url: 'https://wearenova.ai/', image: 'https://picsum.photos/seed/nova-ai/600/400', dataAiHint: 'video tools' },
            { name: 'AutoSub', description: 'Automatic video subtitle generator.', url: 'https://autosub.io/', image: 'https://picsum.photos/seed/autosub/600/400', dataAiHint: 'caption generator' },
        ]
    },
    {
        title: "Audio Editing Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Audacity', description: 'Free, open-source, cross-platform audio software.', url: 'https://www.audacityteam.org/', image: 'https://picsum.photos/seed/audacity-audio/600/400', dataAiHint: 'audio editor' },
            { name: 'Adobe Audition', description: 'Professional audio workstation for mixing, and restoration.', url: 'https://www.adobe.com/products/audition.html', image: 'https://picsum.photos/seed/audition/600/400', dataAiHint: 'audio mixing' },
            { name: 'Reaper', description: 'A complete digital audio production application.', url: 'https://www.reaper.fm/', image: 'https://picsum.photos/seed/reaper/600/400', dataAiHint: 'digital audio' },
            { name: 'Soundtrap', description: 'Online collaborative music and podcast studio.', url: 'https://www.soundtrap.com/', image: 'https://picsum.photos/seed/soundtrap/600/400', dataAiHint: 'music studio' },
            { name: 'BandLab', description: 'Free music creation platform.', url: 'https://www.bandlab.com/', image: 'https://picsum.photos/seed/bandlab/600/400', dataAiHint: 'music creation' },
        ]
    },
    {
        title: "Podcast Tools",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Riverside.fm', description: 'Record studio-quality podcasts and videos from anywhere.', url: 'https://riverside.fm/', image: 'https://picsum.photos/seed/riverside/600/400', dataAiHint: 'podcast recording' },
            { name: 'Anchor', description: 'The easiest way to make a podcast, by Spotify.', url: 'https://anchor.fm/', image: 'https://picsum.photos/seed/anchor/600/400', dataAiHint: 'make a podcast' },
            { name: 'Zencastr', description: 'High-fidelity podcasting.', url: 'https://zencastr.com/', image: 'https://picsum.photos/seed/zencastr/600/400', dataAiHint: 'hi-fi podcast' },
            { name: 'Podbean', description: 'Podcast hosting and monetization.', url: 'https://www.podbean.com/', image: 'https://picsum.photos/seed/podbean/600/400', dataAiHint: 'podcast hosting' },
            { name: 'Spotify Podcasters', description: 'The all-in-one platform to create and grow your podcast.', url: 'https://podcasters.spotify.com/', image: 'https://picsum.photos/seed/spotify-podcasters/600/400', dataAiHint: 'grow podcast' },
        ]
    },
    {
        title: "Content Research Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AnswerThePublic', description: 'A search listening tool for content ideas.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/answerthepublic-research/600/400', dataAiHint: 'content ideas' },
            { name: 'Google Trends', description: 'Explore what the world is searching for.', url: 'https://trends.google.com/', image: 'https://picsum.photos/seed/google-trends/600/400', dataAiHint: 'search trends' },
            { name: 'BuzzSumo', description: 'Find what content is popular by topic or on any website.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-research/600/400', dataAiHint: 'popular content' },
            { name: 'Perplexity AI', description: 'An answer engine that provides sources for its answers.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-research/600/400', dataAiHint: 'answer engine' },
            { name: 'KeywordTool.io', description: 'Find keywords that people are typing into Google.', url: 'https://keywordtool.io/', image: 'https://picsum.photos/seed/keywordtool-research/600/400', dataAiHint: 'keyword research' },
        ]
    },
    {
        title: "SEO Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Ahrefs', description: 'All-in-one SEO toolset.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-seo/600/400', dataAiHint: 'seo tools' },
            { name: 'SEMrush', description: 'Online visibility management and content marketing platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-seo/600/400', dataAiHint: 'visibility management' },
            { name: 'Surfer SEO', description: 'Content intelligence tool for on-page optimization.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo/600/400', dataAiHint: 'content intelligence' },
            { name: 'Moz', description: 'SEO software and data to help you increase traffic.', url: 'https://moz.com/', image: 'https://picsum.photos/seed/moz-seo/600/400', dataAiHint: 'seo software' },
            { name: 'Ubersuggest', description: 'Keyword tracking & SEO tool.', url: 'https://neilpatel.com/ubersuggest/', image: 'https://picsum.photos/seed/ubersuggest-seo/600/400', dataAiHint: 'keyword tool' },
        ]
    },
    {
        title: "Social Media Scheduling Tools",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Buffer', description: 'A simpler way to manage social media.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-scheduling/600/400', dataAiHint: 'social scheduler' },
            { name: 'Hootsuite', description: 'Manage all your social media in one place.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-scheduling/600/400', dataAiHint: 'social media dashboard' },
            { name: 'Later', description: 'Visually plan and schedule your social posts.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-scheduling/600/400', dataAiHint: 'instagram scheduler' },
            { name: 'Metricool', description: 'Analyze, manage, and grow your digital presence.', url: 'https://metricool.com/', image: 'https://picsum.photos/seed/metricool/600/400', dataAiHint: 'digital presence' },
            { name: 'SocialPilot', description: 'Social media marketing & scheduling tool.', url: 'https://www.socialpilot.co/', image: 'https://picsum.photos/seed/socialpilot/600/400', dataAiHint: 'marketing tool' },
        ]
    },
    {
        title: "Branding & Templates Tools",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva Brand Kit', description: 'Create and manage your brand identity.', url: 'https://www.canva.com/pro/brand-kit/', image: 'https://picsum.photos/seed/canva-brand/600/400', dataAiHint: 'brand identity' },
            { name: 'Envato Elements', description: 'Unlimited downloads of creative assets and templates.', url: 'https://elements.envato.com/', image: 'https://picsum.photos/seed/envato/600/400', dataAiHint: 'creative assets' },
            { name: 'Creative Market', description: 'Ready-to-use design assets from independent creators.', url: 'https://creativemarket.com/', image: 'https://picsum.photos/seed/creativemarket/600/400', dataAiHint: 'design assets' },
            { name: 'Placeit', description: 'Create mockups, logos, videos, and designs.', url: 'https://placeit.net/', image: 'https://picsum.photos/seed/placeit-brand/600/400', dataAiHint: 'mockup generator' },
            { name: 'Snappa', description: 'Create online graphics in a snap.', url: 'https://snappa.com/', image: 'https://picsum.photos/seed/snappa-brand/600/400', dataAiHint: 'online graphics' },
        ]
    }
];

export default function ContentCreationToolsPage() {
    const { toast } = useToast();
    const { favouritedTools, handleFavouriteToggle } = useFavourites();

    const handleShareTool = React.useCallback(async (e: React.MouseEvent, tool: Tool) => {
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
          navigator.clipboard.writeText(tool.url);
          toast({
            title: "Link Copied!",
            description: `${tool.name}'s URL has been copied to your clipboard.`,
          });
        }
    }, [toast]);

    const handleFavouriteClick = (e: React.MouseEvent, toolName: string) => {
        e.preventDefault();
        e.stopPropagation();
        handleFavouriteToggle(toolName);
    };

    const ToolCard = ({ tool }: { tool: Tool }) => (
        <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group w-40 shrink-0">
          <Card 
            className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden h-full flex flex-col"
          >
            <div className="relative">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={300}
                  height={200}
                  className="w-full h-auto aspect-[4/3] object-cover"
                  data-ai-hint={tool.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-1 right-1 bg-primary/80 text-primary-foreground rounded-full p-1 backdrop-blur-sm">
                    <ExternalLink className="w-3 h-3"/>
                </div>
            </div>
            <div className='p-3 flex flex-col flex-grow'>
              <div className="flex justify-between items-start flex-grow">
                  <div>
                      <CardTitle className="text-base font-bold text-foreground leading-tight line-clamp-2">{tool.name}</CardTitle>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{tool.description}</p>
                  </div>
                  <div className="flex flex-col items-center gap-1 shrink-0 pl-1">
                      <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleShareTool(e, tool)}>
                          <Share2 className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleFavouriteClick(e, tool.name)}>
                          <Star className={cn('w-4 h-4 transition-all', favouritedTools.has(tool.name) ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
                      </Button>
                  </div>
              </div>
            </div>
          </Card>
        </Link>
    );

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
          <div className='flex items-center gap-2'>
            <Brush className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              Content Creation Tools
            </h1>
          </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-8">
            {toolData.map((category, index) => {
              if (category.tools.length === 0) return null;

              return (
              <section key={index}>
                  <div className="flex justify-between items-center mb-3 px-2">
                      <h2 className="font-semibold text-xl flex items-center gap-2">
                          {category.icon}
                          {category.title}
                      </h2>
                  </div>
                  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                      {category.tools.map((tool) => (
                        <ToolCard tool={tool} key={tool.name} />
                      ))}
                  </div>
              </section>
            )})}
        </div>
      </main>
    </div>
  );
}

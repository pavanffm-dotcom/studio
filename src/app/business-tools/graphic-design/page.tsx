'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Paintbrush, Star, Share2, Palette, Instagram, Youtube, Clapperboard, Megaphone, Tv, Layout, FileText, Globe, Gem, Braces, Smartphone, LayoutDashboard, BookOpen, Contact, Type, PenTool, ImagePlay, Sparkles, Shapes, UserCircle, BrainCircuit, Newspaper, BoxSelect, MousePointerClick, BookCopy, Wallpaper, Car, Store, TowerControl, Box, Truck, Film, SquareParking
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


const toolData: ToolCategory[] = [
    {
        title: "Logo Design",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Looka', description: 'AI-powered platform to design a logo and build a brand you love.', url: 'https://looka.com/', image: 'https://picsum.photos/seed/looka/600/400', dataAiHint: 'ai logo' },
          { name: 'Logo.com', description: 'Generate a professional logo with AI, in minutes.', url: 'https://logo.com/', image: 'https://picsum.photos/seed/logocom/600/400', dataAiHint: 'professional logo' },
          { name: 'Designs.ai', description: 'An all-in-one platform to create logos, videos, and more with AI.', url: 'https://designs.ai/', image: 'https://picsum.photos/seed/designsai/600/400', dataAiHint: 'design suite' },
          { name: 'Tailor Brands', description: 'The world’s most advanced automated logo maker and design tool.', url: 'https://www.tailorbrands.com/logo-maker', image: 'https://picsum.photos/seed/tailorbrands/600/400', dataAiHint: 'brand maker' },
          { name: 'Canva Logo Maker', description: 'Create a professional logo for free in just a few clicks.', url: 'https://www.canva.com/create/logos/', image: 'https://picsum.photos/seed/canva-logo/600/400', dataAiHint: 'free logo' },
          { name: 'Fotor Logo Maker', description: 'Make a stunning logo with Fotor’s free AI logo generator.', url: 'https://www.fotor.com/features/logo-maker.html', image: 'https://picsum.photos/seed/fotor-logo/600/400', dataAiHint: 'logo generator' },
          { name: 'Hatchful', description: 'A free logo maker from Shopify. No design experience required.', url: 'https://hatchful.shopify.com/', image: 'https://picsum.photos/seed/hatchful/600/400', dataAiHint: 'shopify logo' },
          { name: 'Uizard', description: 'AI-powered design tool for creating stunning logos and mockups.', url: 'https://uizard.io/ai-logo-generator/', image: 'https://picsum.photos/seed/uizard-logo/600/400', dataAiHint: 'ui design' },
          { name: 'Brandmark.io', description: 'Create a unique, professional logo for your business.', url: 'https://brandmark.io/', image: 'https://picsum.photos/seed/brandmark/600/400', dataAiHint: 'business logo' },
          { name: 'LogoAI', description: 'Let AI-powered design create your new logo, and brand identity.', url: 'https://www.logoai.com/', image: 'https://picsum.photos/seed/logoai/600/400', dataAiHint: 'intelligent logo' },
        ]
    },
    {
        title: "Social Media Graphics",
        icon: <Layout className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'The go-to tool for creating any kind of social media graphic.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-social/600/400', dataAiHint: 'social graphics' },
            { name: 'Adobe Express', description: 'Free content creator with thousands of templates.', url: 'https://www.adobe.com/express/', image: 'https://picsum.photos/seed/adobe-social/600/400', dataAiHint: 'template library' },
            { name: 'Fotor', description: 'Online designer for social media posts, covers, and stories.', url: 'https://www.fotor.com/design', image: 'https://picsum.photos/seed/fotor-social/600/400', dataAiHint: 'online design' },
            { name: 'VistaCreate', description: 'Easy-to-use design tool for social media content.', url: 'https://create.vista.com/', image: 'https://picsum.photos/seed/vista-social/600/400', dataAiHint: 'content creator' },
            { name: 'Snappa', description: 'Create online graphics in a snap for social media.', url: 'https://snappa.com/', image: 'https://picsum.photos/seed/snappa-social/600/400', dataAiHint: 'fast graphics' },
            { name: 'Piktochart', description: 'Make infographics, reports, and social graphics.', url: 'https://piktochart.com/', image: 'https://picsum.photos/seed/pikto-social/600/400', dataAiHint: 'infographics' },
            { name: 'Easil', description: 'Brand-focused design tool with team collaboration.', url: 'https://about.easil.com/', image: 'https://picsum.photos/seed/easil-social/600/400', dataAiHint: 'brand design' },
            { name: 'Simplified', description: 'The all-in-one AI platform for modern marketing teams.', url: 'https://simplified.com/', image: 'https://picsum.photos/seed/simplified-social/600/400', dataAiHint: 'ai marketing' },
        ]
    },
    {
        title: "Posters",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva Poster Maker', description: 'Create stunning posters with thousands of templates.', url: 'https://www.canva.com/create/posters/', image: 'https://picsum.photos/seed/canva-poster/600/400', dataAiHint: 'poster design' },
            { name: 'Adobe Express Poster Maker', description: 'Free online poster maker with professional templates.', url: 'https://www.adobe.com/express/create/poster', image: 'https://picsum.photos/seed/adobe-poster/600/400', dataAiHint: 'event poster' },
            { name: 'Fotor Poster Maker', description: 'Design eye-catching posters in minutes with AI.', url: 'https://www.fotor.com/features/poster-maker.html', image: 'https://picsum.photos/seed/fotor-poster/600/400', dataAiHint: 'ai poster' },
            { name: 'VistaCreate Poster Maker', description: 'Design custom posters for any occasion.', url: 'https://create.vista.com/create/poster/', image: 'https://picsum.photos/seed/vista-poster/600/400', dataAiHint: 'custom poster' },
            { name: 'Piktochart Poster Maker', description: 'Create beautiful posters and infographics easily.', url: 'https://piktochart.com/formats/posters/', image: 'https://picsum.photos/seed/pikto-poster/600/400', dataAiHint: 'info poster' },
            { name: 'PosterMyWall', description: 'Easy-to-use tool for posters, flyers, and videos.', url: 'https://www.postermywall.com/index.php/g/poster-maker', image: 'https://picsum.photos/seed/postermywall-poster/600/400', dataAiHint: 'promo poster' },
            { name: 'Scribus', description: 'Free and open-source desktop publishing software.', url: 'https://www.scribus.net/', image: 'https://picsum.photos/seed/scribus-poster/600/400', dataAiHint: 'desktop publishing' },
            { name: 'GIMP', description: 'Free & open source image editor for advanced designs.', url: 'https://www.gimp.org/', image: 'https://picsum.photos/seed/gimp-poster/600/400', dataAiHint: 'image editor' },
        ]
    },
    {
        title: "Flyers",
        icon: <FileText className="w-5 h-5 text-primary" style={{transform: 'rotate(15deg)'}}/>,
        tools: [
            { name: 'Canva Flyer Maker', description: 'Design professional flyers for free online.', url: 'https://www.canva.com/create/flyers/', image: 'https://picsum.photos/seed/canva-flyer/600/400', dataAiHint: 'flyer design' },
            { name: 'Adobe Express Flyer Maker', description: 'Free flyer creator with thousands of templates.', url: 'https://www.adobe.com/express/create/flyer', image: 'https://picsum.photos/seed/adobe-flyer/600/400', dataAiHint: 'business flyer' },
            { name: 'Fotor Flyer Maker', description: 'Create custom flyers for your business or event.', url: 'https://www.fotor.com/features/flyer-maker.html', image: 'https://picsum.photos/seed/fotor-flyer/600/400', dataAiHint: 'event flyer' },
            { name: 'VistaCreate Flyer Maker', description: 'Easy online flyer maker with tons of templates.', url: 'https://create.vista.com/create/flyer/', image: 'https://picsum.photos/seed/vista-flyer/600/400', dataAiHint: 'flyer template' },
            { name: 'PosterMyWall Flyer Maker', description: 'Make stunning flyers, posters, and graphics.', url: 'https://www.postermywall.com/index.php/g/flyer-maker', image: 'https://picsum.photos/seed/postermywall-flyer/600/400', dataAiHint: 'marketing flyer' },
            { name: 'Smore', description: 'Create beautiful, interactive online newsletters and flyers.', url: 'https://www.smore.com/', image: 'https://picsum.photos/seed/smore-flyer/600/400', dataAiHint: 'online newsletter' },
            { name: 'Microsoft Designer', description: 'Stunning designs in a flash with AI.', url: 'https://designer.microsoft.com/', image: 'https://picsum.photos/seed/msdesigner-flyer/600/400', dataAiHint: 'ai designer' },
            { name: 'Lucidpress', description: 'Brand templating platform to create on-brand content.', url: 'https://www.lucidpress.com/', image: 'https://picsum.photos/seed/lucidpress-flyer/600/400', dataAiHint: 'brand templates' },
        ]
    },
    {
        title: "Website Design",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Framer', description: 'Design and publish professional websites, no code required.', url: 'https://www.framer.com/', image: 'https://picsum.photos/seed/framer-web/600/400', dataAiHint: 'website builder' },
            { name: 'Webflow', description: 'A visual way to build the web for designers and developers.', url: 'https://webflow.com/', image: 'https://picsum.photos/seed/webflow-web/600/400', dataAiHint: 'visual development' },
            { name: 'Wix', description: 'Free website builder to create stunning websites.', url: 'https://www.wix.com/', image: 'https://picsum.photos/seed/wix-web/600/400', dataAiHint: 'site builder' },
            { name: 'Squarespace', description: 'The all-in-one platform to build a beautiful online presence.', url: 'https://www.squarespace.com/', image: 'https://picsum.photos/seed/squarespace-web/600/400', dataAiHint: 'online presence' },
            { name: 'Figma', description: 'The collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-web/600/400', dataAiHint: 'ui design' },
            { name: 'Sketch', description: 'The design toolkit for creating your best work.', url: 'https://www.sketch.com/', image: 'https://picsum.photos/seed/sketch-web/600/400', dataAiHint: 'design toolkit' },
            { name: 'Uizard', description: 'AI-powered design tool for creating apps and websites.', url: 'https://uizard.io/', image: 'https://picsum.photos/seed/uizard-web/600/400', dataAiHint: 'ai design' },
            { name: 'Dorik', description: 'Create beautiful websites without code, fast.', url: 'https://dorik.com/', image: 'https://picsum.photos/seed/dorik-web/600/400', dataAiHint: 'no-code builder' },
        ]
    },
     {
        title: "Brand Identity",
        icon: <Gem className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Looka', description: 'Design a logo and build a brand identity you love with AI.', url: 'https://looka.com/', image: 'https://picsum.photos/seed/looka-brand/600/400', dataAiHint: 'brand kit' },
            { name: 'Tailor Brands', description: 'An all-in-one branding platform for small businesses.', url: 'https://www.tailorbrands.com/', image: 'https://picsum.photos/seed/tailorbrands-brand/600/400', dataAiHint: 'branding platform' },
            { name: 'Brandmark.io', description: 'Create a unique and professional brand identity with AI.', url: 'https://brandmark.io/', image: 'https://picsum.photos/seed/brandmark-brand/600/400', dataAiHint: 'ai branding' },
            { name: 'Designs.ai', description: 'Generate logos, videos, and brand guidelines in minutes.', url: 'https://designs.ai/', image: 'https://picsum.photos/seed/designsai-brand/600/400', dataAiHint: 'brand generator' },
            { name: 'Canva', description: 'Create your brand kit with logos, colors, and fonts.', url: 'https://www.canva.com/pro/brand-kit/', image: 'https://picsum.photos/seed/canva-brand/600/400', dataAiHint: 'visual identity' },
            { name: 'Frontify', description: 'The all-in-one brand management platform.', url: 'https://www.frontify.com/en/', image: 'https://picsum.photos/seed/frontify-brand/600/400', dataAiHint: 'brand management' },
            { name: 'Bynder', description: 'A leading digital asset and brand management platform.', url: 'https://www.bynder.com/', image: 'https://picsum.photos/seed/bynder-brand/600/400', dataAiHint: 'dam platform' },
            { name: 'LogoAI', description: 'AI-powered engine that understands logo design data.', url: 'https://www.logoai.com/', image: 'https://picsum.photos/seed/logoai-brand/600/400', dataAiHint: 'smart logo' },
        ]
    },
    {
        title: "Banners",
        icon: <Braces className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva Banner Maker', description: 'Design stunning banners for web, social, and print.', url: 'https://www.canva.com/create/banners/', image: 'https://picsum.photos/seed/canva-banner/600/400', dataAiHint: 'web banner' },
            { name: 'Adobe Express Banner Maker', description: 'Create custom banners for free in minutes.', url: 'https://www.adobe.com/express/create/banner', image: 'https://picsum.photos/seed/adobe-banner/600/400', dataAiHint: 'custom banner' },
            { name: 'Fotor Banner Maker', description: 'Make amazing banners for any purpose with templates.', url: 'https://www.fotor.com/features/banner-maker.html', image: 'https://picsum.photos/seed/fotor-banner/600/400', dataAiHint: 'banner template' },
            { name: 'Creatopy', description: 'The efficient ad design and banner creation platform.', url: 'https://www.creatopy.com/online-banner-maker/', image: 'https://picsum.photos/seed/creatopy-banner/600/400', dataAiHint: 'ad banner' },
            { name: 'Snappa', description: 'Create eye-catching banners in a snap.', url: 'https://snappa.com/create/banners', image: 'https://picsum.photos/seed/snappa-banner/600/400', dataAiHint: 'channel art' },
            { name: 'VistaCreate Banners', description: 'A quick and easy tool for banner design.', url: 'https://create.vista.com/create/banner/', image: 'https://picsum.photos/seed/vista-banner/600/400', dataAiHint: 'design tool' },
            { name: 'Piktochart', description: 'Make professional banners and infographics.', url: 'https://piktochart.com/formats/banners/', image: 'https://picsum.photos/seed/pikto-banner/600/400', dataAiHint: 'professional banner' },
            { name: 'Mybannermaker', description: 'Free and simple online banner generator.', url: 'https://www.mybannermaker.com/', image: 'https://picsum.photos/seed/mybanner-banner/600/400', dataAiHint: 'banner generator' },
        ]
    },
    {
        title: "Instagram Posts",
        icon: <Instagram className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Design anything for your Instagram feed.', url: 'https://www.canva.com/instagram-posts/', image: 'https://picsum.photos/seed/canva-ig/600/400', dataAiHint: 'social media design' },
            { name: 'Adobe Express', description: 'Free Instagram post maker with thousands of templates.', url: 'https://www.adobe.com/express/create/post/instagram', image: 'https://picsum.photos/seed/adobe-ig/600/400', dataAiHint: 'creative posts' },
            { name: 'Fotor', description: 'Make your Instagram posts pop with AI editing tools.', url: 'https://www.fotor.com/features/instagram-post-maker.html', image: 'https://picsum.photos/seed/fotor-ig/600/400', dataAiHint: 'photo editor' },
            { name: 'VistaCreate', description: 'Create stunning, animated posts in minutes.', url: 'https://create.vista.com/themes/instagram-post/', image: 'https://picsum.photos/seed/vista-ig/600/400', dataAiHint: 'animated posts' },
            { name: 'Simplified', description: 'AI-powered design for all your social media content.', url: 'https://simplified.com/instagram-post-maker/', image: 'https://picsum.photos/seed/simplified-ig/600/400', dataAiHint: 'ai content' },
            { name: 'Piktochart', description: 'Easy-to-use creator for infographics and social posts.', url: 'https://piktochart.com/formats/instagram-posts/', image: 'https://picsum.photos/seed/pikto-ig/600/400', dataAiHint: 'infographic posts' },
            { name: 'Snappa', description: 'Create the best-looking Instagram posts in a snap.', url: 'https://snappa.com/create/instagram-posts', image: 'https://picsum.photos/seed/snappa-ig/600/400', dataAiHint: 'graphic creator' },
            { name: 'Later', description: 'Plan, schedule, and design your Instagram posts in one place.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-ig/600/400', dataAiHint: 'social scheduler' },
            { name: 'Buffer', description: 'Plan and schedule your content for Instagram.', url: 'https://buffer.com/instagram', image: 'https://picsum.photos/seed/buffer-ig/600/400', dataAiHint: 'scheduling tool' },
            { name: 'Kapwing', description: 'Create image and video posts for your feed.', url: 'https://www.kapwing.com/uses/instagram', image: 'https://picsum.photos/seed/kapwing-ig/600/400', dataAiHint: 'video posts' },
        ]
    },
    {
        title: "YouTube Thumbnails",
        icon: <Youtube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Eye-catching YouTube thumbnail maker.', url: 'https://www.canva.com/youtube-thumbnails/', image: 'https://picsum.photos/seed/canva-yt/600/400', dataAiHint: 'thumbnail design' },
            { name: 'Fotor', description: 'Free YouTube thumbnail maker with AI.', url: 'https://www.fotor.com/features/youtube-thumbnail-maker.html', image: 'https://picsum.photos/seed/fotor-yt/600/400', dataAiHint: 'youtube art' },
            { name: 'Adobe Express', description: 'Stunning YouTube thumbnails in seconds.', url: 'https://www.adobe.com/express/create/thumbnail/youtube', image: 'https://picsum.photos/seed/adobe-yt/600/400', dataAiHint: 'creative thumbnails' },
            { name: 'Snappa', description: 'Create professional-looking thumbnails in a snap.', url: 'https://snappa.com/create/youtube-thumbnails', image: 'https://picsum.photos/seed/snappa-yt/600/400', dataAiHint: 'channel graphics' },
            { name: 'Picmaker', description: 'AI-powered YouTube thumbnail creator.', url: 'https://www.picmaker.com/youtube-thumbnail-maker', image: 'https://picsum.photos/seed/picmaker-yt/600/400', dataAiHint: 'ai thumbnail' },
            { name: 'Simplified', description: 'Free AI thumbnail maker to boost your CTR.', url: 'https://simplified.com/youtube-thumbnail-maker/', image: 'https://picsum.photos/seed/simplified-yt/600/400', dataAiHint: 'design automation' },
            { name: 'Visme', description: 'Make custom thumbnails for your videos.', url: 'https://www.visme.co/youtube-thumbnail-maker/', image: 'https://picsum.photos/seed/visme-yt/600/400', dataAiHint: 'video branding' },
            { name: 'Pixlr', description: 'Powerful online photo editor for thumbnails.', url: 'https://pixlr.com/youtube-thumbnail/', image: 'https://picsum.photos/seed/pixlr-yt/600/400', dataAiHint: 'photo editing' },
            { name: 'Placeit', description: 'Thumbnail templates for every niche.', url: 'https://placeit.net/youtube-thumbnail-maker', image: 'https://picsum.photos/seed/placeit-yt/600/400', dataAiHint: 'template mockups' },
            { name: 'VistaCreate', description: 'Design click-worthy thumbnails with templates.', url: 'https://create.vista.com/create/youtube-thumbnail/', image: 'https://picsum.photos/seed/vista-yt/600/400', dataAiHint: 'template library' },
        ]
    },
    {
        title: "Reels Covers",
        icon: <Clapperboard className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Design amazing Reels covers in minutes.', url: 'https://www.canva.com/instagram-reels-covers/', image: 'https://picsum.photos/seed/canva-reels/600/400', dataAiHint: 'reels template' },
            { name: 'Adobe Express', description: 'Free Reels cover templates for your videos.', url: 'https://www.adobe.com/express/create/video/instagram-reels', image: 'https://picsum.photos/seed/adobe-reels/600/400', dataAiHint: 'video cover' },
            { name: 'InShot', description: 'Popular mobile video editor with cover options.', url: 'https://inshot.com/', image: 'https://picsum.photos/seed/inshot-reels/600/400', dataAiHint: 'mobile video' },
            { name: 'Fotor', description: 'Create a custom cover for your Reel.', url: 'https://www.fotor.com/design', image: 'https://picsum.photos/seed/fotor-reels/600/400', dataAiHint: 'cover design' },
            { name: 'Kapwing', description: 'Online editor for creating Reels and covers.', url: 'https://www.kapwing.com/uses/instagram-reels-cover-image', image: 'https://picsum.photos/seed/kapwing-reels/600/400', dataAiHint: 'online editor' },
            { name: 'Veed.io', description: 'Add a custom, animated cover to your video.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-reels/600/400', dataAiHint: 'video tools' },
            { name: 'GoDaddy Studio', description: 'Formerly Over. A powerful mobile design app.', url: 'https://www.godaddy.com/studio', image: 'https://picsum.photos/seed/godaddy-reels/600/400', dataAiHint: 'mobile design' },
            { name: 'Picsart', description: 'All-in-one editor for photos, videos, and covers.', url: 'https://picsart.com/', image: 'https://picsum.photos/seed/picsart-reels/600/400', dataAiHint: 'creative editing' },
            { name: 'Mojo', description: 'Create stunning, animated stories and reel covers.', url: 'https://www.mojo-app.com/', image: 'https://picsum.photos/seed/mojo-reels/600/400', dataAiHint: 'animated social' },
            { name: 'Unfold', description: 'A toolkit for storytellers to create beautiful content.', url: 'https://unfold.com/', image: 'https://picsum.photos/seed/unfold-reels/600/400', dataAiHint: 'story templates' },
        ]
    },
    {
        title: "Ads Creatives",
        icon: <Megaphone className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AdCreative.ai', description: 'Generate conversion-focused ad creatives with AI.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative/600/400', dataAiHint: 'ai advertising' },
            { name: 'Creatopy', description: 'The efficient ad design platform for teams and agencies.', url: 'https://www.creatopy.com/', image: 'https://picsum.photos/seed/creatopy-ads/600/400', dataAiHint: 'ad design' },
            { name: 'Pencil', description: 'Generative AI for ads that learn and get better.', url: 'https://www.trypencil.com/', image: 'https://picsum.photos/seed/pencil-ads/600/400', dataAiHint: 'generative ai' },
            { name: 'Celtra', description: 'Creative automation for scaling ad production.', url: 'https://www.celtra.com/', image: 'https://picsum.photos/seed/celtra-ads/600/400', dataAiHint: 'automation platform' },
            { name: 'Bannerflow', description: 'A leading creative management platform (CMP).', url: 'https://www.bannerflow.com/', image: 'https://picsum.photos/seed/bannerflow-ads/600/400', dataAiHint: 'ad production' },
            { name: 'Omneky', description: 'AI-powered personalized advertising at scale.', url: 'https://www.omneky.com/', image: 'https://picsum.photos/seed/omneky-ads/600/400', dataAiHint: 'personalized ads' },
            { name: 'Vidsy', description: 'Creator-powered video ads for brands.', url: 'https://vidsy.co/', image: 'https://picsum.photos/seed/vidsy-ads/600/400', dataAiHint: 'video ads' },
            { name: 'Shuttlerock', description: 'Mobile-first video ad creatives made easy.', url: 'https://www.shuttlerock.com/', image: 'https://picsum.photos/seed/shuttlerock-ads/600/400', dataAiHint: 'mobile creative' },
            { name: 'Bannersnack', description: 'Now part of Creatopy, an online banner maker.', url: 'https://www.creatopy.com/online-banner-maker/', image: 'https://picsum.photos/seed/bannersnack-ads/600/400', dataAiHint: 'banner maker' },
            { name: 'Marpipe', description: 'Test your ad creatives at scale to find what works.', url: 'https://www.marpipe.com/', image: 'https://picsum.photos/seed/marpipe-ads/600/400', dataAiHint: 'creative testing' },
        ]
    },
    {
        title: "App Design",
        icon: <Smartphone className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Figma', description: 'The collaborative interface design tool for teams.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-app/600/400', dataAiHint: 'ui design' },
            { name: 'Sketch', description: 'A powerful vector-based design tool for macOS.', url: 'https://www.sketch.com/', image: 'https://picsum.photos/seed/sketch-app/600/400', dataAiHint: 'vector design' },
            { name: 'Adobe XD', description: 'Design, prototype, and share user experiences.', url: 'https://www.adobe.com/products/xd.html', image: 'https://picsum.photos/seed/adobexd-app/600/400', dataAiHint: 'ux design' },
            { name: 'InVision', description: 'Digital product design and development platform.', url: 'https://www.invisionapp.com/', image: 'https://picsum.photos/seed/invision-app/600/400', dataAiHint: 'prototyping tool' },
            { name: 'Framer', description: 'Interactive design tool for websites and apps.', url: 'https://www.framer.com/', image: 'https://picsum.photos/seed/framer-app/600/400', dataAiHint: 'interactive prototype' },
            { name: 'Uizard', description: 'AI-powered design tool to go from idea to mockup.', url: 'https://uizard.io/', image: 'https://picsum.photos/seed/uizard-app/600/400', dataAiHint: 'ai design' },
            { name: 'Balsamiq', description: 'The rapid, low-fidelity wireframing tool.', url: 'https://balsamiq.com/', image: 'https://picsum.photos/seed/balsamiq-app/600/400', dataAiHint: 'wireframe' },
            { name: 'Proto.io', description: 'Create fully-interactive high-fidelity prototypes.', url: 'https://proto.io/', image: 'https://picsum.photos/seed/protoio-app/600/400', dataAiHint: 'high-fidelity' },
            { name: 'Axure RP', description: 'Powerful prototyping for complex solutions.', url: 'https://www.axure.com/', image: 'https://picsum.photos/seed/axure-app/600/400', dataAiHint: 'ux prototype' },
            { name: 'Origami Studio', description: 'A free design tool by Facebook for creating prototypes.', url: 'https://origami.design/', image: 'https://picsum.photos/seed/origami-app/600/400', dataAiHint: 'facebook design' },
        ]
    },
    {
        title: "Dashboard Design",
        icon: <LayoutDashboard className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Figma', description: 'Collaborative tool for designing data-rich dashboards.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-dash/600/400', dataAiHint: 'dashboard ui' },
            { name: 'Tableau', description: 'Leading data visualization tool for business intelligence.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-dash/600/400', dataAiHint: 'data visualization' },
            { name: 'Microsoft Power BI', description: 'Turn data into opportunities with interactive dashboards.', url: 'https://powerbi.microsoft.com/en-us/', image: 'https://picsum.photos/seed/powerbi-dash/600/400', dataAiHint: 'business analytics' },
            { name: 'Looker Studio', description: 'Formerly Google Data Studio. Free dashboarding tool.', url: 'https://lookerstudio.google.com/', image: 'https://picsum.photos/seed/looker-dash/600/400', dataAiHint: 'google data' },
            { name: 'Grafana', description: 'The open-source platform for monitoring and observability.', url: 'https://grafana.com/', image: 'https://picsum.photos/seed/grafana-dash/600/400', dataAiHint: 'data monitoring' },
            { name: 'Klipfolio', description: 'Build real-time business dashboards for your team.', url: 'https://www.klipfolio.com/', image: 'https://picsum.photos/seed/klipfolio-dash/600/400', dataAiHint: 'business dashboard' },
            { name: 'Geckoboard', description: 'Share live data from all your tools on TV dashboards.', url: 'https://www.geckoboard.com/', image: 'https://picsum.photos/seed/geckoboard-dash/600/400', dataAiHint: 'tv dashboard' },
            { name: 'Databox', description: 'Business analytics platform with stunning dashboards.', url: 'https://databox.com/', image: 'https://picsum.photos/seed/databox-dash/600/400', dataAiHint: 'kpi dashboard' },
            { name: 'Uizard', description: 'AI-powered wireframing for dashboard UI design.', url: 'https://uizard.io/', image: 'https://picsum.photos/seed/uizard-dash/600/400', dataAiHint: 'ui wireframe' },
            { name: 'Adobe XD', description: 'Design and prototype dashboards and data apps.', url: 'https://www.adobe.com/products/xd.html', image: 'https://picsum.photos/seed/adobexd-dash/600/400', dataAiHint: 'ux dashboard' },
        ]
    },
    {
        title: "Book Covers",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Create stunning book covers with free templates.', url: 'https://www.canva.com/create/book-covers/', image: 'https://picsum.photos/seed/canva-book/600/400', dataAiHint: 'book design' },
            { name: 'Adobe Express', description: 'Free book cover maker with professional templates.', url: 'https://www.adobe.com/express/create/book-cover', image: 'https://picsum.photos/seed/adobe-book/600/400', dataAiHint: 'cover template' },
            { name: 'Fotor', description: 'Design a book cover that captures readers\' attention.', url: 'https://www.fotor.com/features/book-cover-maker.html', image: 'https://picsum.photos/seed/fotor-book/600/400', dataAiHint: 'ebook cover' },
            { name: 'Placeit', description: 'Create book cover mockups and designs easily.', url: 'https://placeit.net/book-cover-maker', image: 'https://picsum.photos/seed/placeit-book/600/400', dataAiHint: 'mockup generator' },
            { name: 'Snappa', description: 'Make eye-catching book covers in a snap.', url: 'https://snappa.com/create/book-covers', image: 'https://picsum.photos/seed/snappa-book/600/400', dataAiHint: 'cover creator' },
            { name: 'MiblArt', description: 'Professional book cover design services for authors.', url: 'https://miblart.com/', image: 'https://picsum.photos/seed/miblart-book/600/400', dataAiHint: 'author services' },
            { name: 'PosterMyWall', description: 'Easy-to-use tool for creating book covers.', url: 'https://www.postermywall.com/', image: 'https://picsum.photos/seed/postermywall-book/600/400', dataAiHint: 'design tool' },
            { name: 'Book Brush', description: 'Tools for creating book covers and marketing images.', url: 'https://bookbrush.com/', image: 'https://picsum.photos/seed/bookbrush-book/600/400', dataAiHint: 'author marketing' },
            { name: 'DIY Book Covers', description: 'The premier online book cover maker for authors.', url: 'https://diybookcovers.com/', image: 'https://picsum.photos/seed/diybookcovers-book/600/400', dataAiHint: 'self-publishing' },
            { name: 'GIMP', description: 'Free and open-source image editor for custom designs.', url: 'https://www.gimp.org/', image: 'https://picsum.photos/seed/gimp-book/600/400', dataAiHint: 'image editor' },
        ]
    },
    {
        title: "Brochures",
        icon: <FileText className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Canva', description: 'Design professional brochures with free templates.', url: 'https://www.canva.com/create/brochures/', image: 'https://picsum.photos/seed/canva-brochure/600/400', dataAiHint: 'brochure template' },
            { name: 'Adobe Express', description: 'Free online brochure maker with stunning layouts.', url: 'https://www.adobe.com/express/create/brochure', image: 'https://picsum.photos/seed/adobe-brochure/600/400', dataAiHint: 'layout design' },
            { name: 'VistaCreate', description: 'Create brochures for your business in minutes.', url: 'https://create.vista.com/create/brochure/', image: 'https://picsum.photos/seed/vista-brochure/600/400', dataAiHint: 'business brochure' },
            { name: 'Marq (Lucidpress)', description: 'Brand templating platform to create on-brand brochures.', url: 'https://www.marq.com/pages/brochures', image: 'https://picsum.photos/seed/lucidpress-brochure/600/400', dataAiHint: 'brand templates' },
            { name: 'MyCreativeShop', description: 'The easiest way to create amazing brochures.', url: 'https://www.mycreativeshop.com/brochure-maker.html', image: 'https://picsum.photos/seed/mycreative-brochure/600/400', dataAiHint: 'custom brochure' },
            { name: 'Flipsnack', description: 'Turn your PDFs into interactive digital brochures.', url: 'https://www.flipsnack.com/brochure-maker', image: 'https://picsum.photos/seed/flipsnack-brochure/600/400', dataAiHint: 'digital brochure' },
            { name: 'Venngage', description: 'The simple design tool for business communications.', url: 'https://venngage.com/features/brochure-maker', image: 'https://picsum.photos/seed/venngage-brochure/600/400', dataAiHint: 'infographic brochure' },
            { name: 'Publitas', description: 'Create beautiful online catalogs and brochures.', url: 'https://www.publitas.com/', image: 'https://picsum.photos/seed/publitas-brochure/600/400', dataAiHint: 'online catalog' },
            { name: 'Microsoft Publisher', description: 'Desktop publishing software for creating brochures.', url: 'https://www.microsoft.com/en-us/microsoft-365/publisher', image: 'https://picsum.photos/seed/publisher-brochure/600/400', dataAiHint: 'desktop publishing' },
            { name: 'Scribus', description: 'Free, open-source professional page layout software.', url: 'https://www.scribus.net/', image: 'https://picsum.photos/seed/scribus-brochure/600/400', dataAiHint: 'page layout' },
        ]
    },
    {
        title: "Business Cards",
        icon: <Contact className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Design custom business cards for free.', url: 'https://www.canva.com/create/business-cards/', image: 'https://picsum.photos/seed/canva-card/600/400', dataAiHint: 'card design' },
            { name: 'VistaPrint', description: 'A leading provider of custom business cards.', url: 'https://www.vistaprint.com/business-cards', image: 'https://picsum.photos/seed/vistaprint-card/600/400', dataAiHint: 'card printing' },
            { name: 'MOO', description: 'Premium quality, custom business cards and more.', url: 'https://www.moo.com/us/business-cards', image: 'https://picsum.photos/seed/moo-card/600/400', dataAiHint: 'premium cards' },
            { name: 'Adobe Express', description: 'Free business card maker with stunning templates.', url: 'https://www.adobe.com/express/create/business-card', image: 'https://picsum.photos/seed/adobe-card/600/400', dataAiHint: 'professional card' },
            { name: 'Zazzle', description: 'Create your own business cards from thousands of templates.', url: 'https://www.zazzle.com/business_cards', image: 'https://picsum.photos/seed/zazzle-card/600/400', dataAiHint: 'custom design' },
            { name: 'Jukebox', description: 'High-quality, creative business card printing.', url: 'https://www.jukebox.com/business-cards', image: 'https://picsum.photos/seed/jukebox-card/600/400', dataAiHint: 'creative printing' },
            { name: 'PsPrint', description: 'Online printing services for business cards.', url: 'https://www.psprint.com/business-cards', image: 'https://picsum.photos/seed/psprint-card/600/400', dataAiHint: 'online printing' },
            { name: 'GotPrint', description: 'Affordable, high-quality business card printing.', url: 'https://www.gotprint.com/business-cards.html', image: 'https://picsum.photos/seed/gotprint-card/600/400', dataAiHint: 'affordable printing' },
            { name: 'UPrinting', description: 'Custom online printing for business cards.', url: 'https://www.uprinting.com/business-card-printing.html', image: 'https://picsum.photos/seed/uprinting-card/600/400', dataAiHint: 'custom printing' },
            { name: 'Staples', description: 'Same-day business card printing and design services.', url: 'https://www.staples.com/services/printing/business-cards/', image: 'https://picsum.photos/seed/staples-card/600/400', dataAiHint: 'same-day printing' },
        ]
    },
    {
        title: "Packaging",
        icon: <Package className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Packlane', description: 'Design and order custom packaging online.', url: 'https://packlane.com/', image: 'https://picsum.photos/seed/packlane-pack/600/400', dataAiHint: 'custom box' },
            { name: 'Packhelp', description: 'Custom packaging for brands and businesses.', url: 'https://packhelp.com/', image: 'https://picsum.photos/seed/packhelp-pack/600/400', dataAiHint: 'brand packaging' },
            { name: 'Arka', description: 'Your one-stop-shop for custom packaging.', url: 'https://www.arka.com/', image: 'https://picsum.photos/seed/arka-pack/600/400', dataAiHint: 'packaging solutions' },
            { name: 'BoxUp', description: 'Design custom boxes with instant pricing.', url: 'https://www.boxup.com/', image: 'https://picsum.photos/seed/boxup-pack/600/400', dataAiHint: 'box designer' },
            { name: 'Lumi', description: 'Packaging and supply chain solutions for e-commerce.', url: 'https://www.lumi.com/', image: 'https://picsum.photos/seed/lumi-pack/600/400', dataAiHint: 'ecommerce packaging' },
            { name: 'Fantastapack', description: 'Custom labels, boxes, and pouches online.', url: 'https://www.fantastapack.com/', image: 'https://picsum.photos/seed/fantastapack-pack/600/400', dataAiHint: 'custom labels' },
            { name: 'Canva', description: 'Design product labels and packaging mockups.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-pack/600/400', dataAiHint: 'label design' },
            { name: 'Adobe Illustrator', description: 'Industry-standard vector graphics for packaging design.', url: 'https://www.adobe.com/products/illustrator.html', image: 'https://picsum.photos/seed/illustrator-pack/600/400', dataAiHint: 'vector graphics' },
            { name: 'Esko', description: 'Packaging management, design, and prepress software.', url: 'https://www.esko.com/en', image: 'https://picsum.photos/seed/esko-pack/600/400', dataAiHint: 'prepress software' },
            { name: 'Boxshot', description: '3D packaging and mockup software.', url: 'https://boxshot.com/', image: 'https://picsum.photos/seed/boxshot-pack/600/400', dataAiHint: '3d mockup' },
        ]
    },
    {
        title: "Color Palettes",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Coolors', description: 'The super fast color palettes generator.', url: 'https://coolors.co/', image: 'https://picsum.photos/seed/coolors/600/400', dataAiHint: 'color scheme' },
            { name: 'Adobe Color', description: 'Create color themes and browse thousands of color combinations.', url: 'https://color.adobe.com/', image: 'https://picsum.photos/seed/adobecolor/600/400', dataAiHint: 'color wheel' },
            { name: 'Paletton', description: 'A tool for creating color combinations that work together well.', url: 'https://paletton.com/', image: 'https://picsum.photos/seed/paletton/600/400', dataAiHint: 'color theory' },
            { name: 'Color Hunt', description: 'A free and open platform for color inspiration with thousands of palettes.', url: 'https://colorhunt.co/', image: 'https://picsum.photos/seed/colorhunt/600/400', dataAiHint: 'trendy colors' },
            { name: 'Huemint', description: 'AI-powered color palette generator for your brand or website.', url: 'https://huemint.com/', image: 'https://picsum.photos/seed/huemint/600/400', dataAiHint: 'ai color' },
            { name: 'Khroma', description: 'The AI color tool for designers to discover and save color combos.', url: 'http://khroma.co/', image: 'https://picsum.photos/seed/khroma/600/400', dataAiHint: 'color algorithm' },
            { name: 'Colormind', description: 'A color scheme generator that uses deep learning.', url: 'http://colormind.io/', image: 'https://picsum.photos/seed/colormind/600/400', dataAiHint: 'deep learning' },
            { name: 'Canva Color Palette Generator', description: 'Generate color palettes from your photos.', url: 'https://www.canva.com/colors/color-palette-generator/', image: 'https://picsum.photos/seed/canvacolor/600/400', dataAiHint: 'image palette' },
            { name: 'DataColor', description: 'Color management solutions for professionals.', url: 'https://www.datacolor.com/', image: 'https://picsum.photos/seed/datacolor/600/400', dataAiHint: 'color calibration' },
            { name: 'Material Design Colors', description: 'Official color tool for Google\'s Material Design system.', url: 'https://material.io/resources/color/', image: 'https://picsum.photos/seed/materialcolor/600/400', dataAiHint: 'ui colors' },
        ]
    },
    {
        title: "Brand Guidelines",
        icon: <FileHeart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Frontify', description: 'The all-in-one brand management platform.', url: 'https://www.frontify.com/en/', image: 'https://picsum.photos/seed/frontify-guide/600/400', dataAiHint: 'brand management' },
            { name: 'Bynder', description: 'Digital asset and brand management platform.', url: 'https://www.bynder.com/', image: 'https://picsum.photos/seed/bynder-guide/600/400', dataAiHint: 'dam platform' },
            { name: 'Canva Brand Kit', description: 'Store your brand assets for a consistent design.', url: 'https://www.canva.com/pro/brand-kit/', image: 'https://picsum.photos/seed/canva-guide/600/400', dataAiHint: 'visual identity' },
            { name: 'Marq (Lucidpress)', description: 'Brand templating platform for consistent content.', url: 'https://www.marq.com/', image: 'https://picsum.photos/seed/marq-guide/600/400', dataAiHint: 'brand templates' },
            { name: 'Pulp', description: 'Simple, beautiful, and shareable brand guidelines.', url: 'https://pulp.style/', image: 'https://picsum.photos/seed/pulp-guide/600/400', dataAiHint: 'style guide' },
            { name: 'Corebook', description: 'Create and share digital brand books.', url: 'https://www.corebook.io/', image: 'https://picsum.photos/seed/corebook-guide/600/400', dataAiHint: 'digital brand' },
            { name: 'Brandpad', description: 'The simplest way to create brand guidelines.', url: 'https://brandpad.io/', image: 'https://picsum.photos/seed/brandpad-guide/600/400', dataAiHint: 'simple guidelines' },
            { name: 'Figma', description: 'Design and document your brand system in one place.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-guide/600/400', dataAiHint: 'design system' },
            { name: 'Miro', description: 'Collaborative whiteboard to map out brand strategy.', url: 'https://miro.com/', image: 'https://picsum.photos/seed/miro-guide/600/400', dataAiHint: 'brand strategy' },
            { name: 'Gingersauce', description: 'A smart tool for creating professional brand books.', url: 'https://gingersauce.co/', image: 'https://picsum.photos/seed/gingersauce-guide/600/400', dataAiHint: 'brand book' },
        ]
    },
    {
        title: "Typography Selections",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Fonts', description: 'Making the web more beautiful, fast, and open through great typography.', url: 'https://fonts.google.com/', image: 'https://picsum.photos/seed/googlefonts/600/400', dataAiHint: 'free fonts' },
            { name: 'Adobe Fonts', description: 'Thousands of beautiful fonts for all your design projects.', url: 'https://fonts.adobe.com/', image: 'https://picsum.photos/seed/adobefonts/600/400', dataAiHint: 'font library' },
            { name: 'Fontjoy', description: 'Generate font combinations with deep learning.', url: 'https://fontjoy.com/', image: 'https://picsum.photos/seed/fontjoy/600/400', dataAiHint: 'font pairing' },
            { name: 'Typewolf', description: 'The definitive guide to typography on the web.', url: 'https://www.typewolf.com/', image: 'https://picsum.photos/seed/typewolf/600/400', dataAiHint: 'web typography' },
            { name: 'FontPair', description: 'A simple tool to help you pair Google Fonts together.', url: 'https://fontpair.co/', image: 'https://picsum.photos/seed/fontpair/600/400', dataAiHint: 'google fonts' },
            { name: 'Typespiration', description: 'A resource for web designers and developers to find inspiration.', url: 'https://typespiration.com/', image: 'https://picsum.photos/seed/typespiration/600/400', dataAiHint: 'font inspiration' },
            { name: 'Fonts In Use', description: 'A searchable archive of typography in use.', url: 'https://fontsinuse.com/', image: 'https://picsum.photos/seed/fontsinuse/600/400', dataAiHint: 'real world typography' },
            { name: 'MyFonts', description: 'The #1 place to download great @font-face webfonts.', url: 'https://www.myfonts.com/', image: 'https://picsum.photos/seed/myfonts/600/400', dataAiHint: 'font marketplace' },
            { name: 'DaFont', description: 'Archive of freely downloadable fonts.', url: 'https://www.dafont.com/', image: 'https://picsum.photos/seed/dafont/600/400', dataAiHint: 'free download fonts' },
            { name: 'Font Squirrel', description: '100% free fonts for commercial use.', url: 'https://www.fontsquirrel.com/', image: 'https://picsum.photos/seed/fontsquirrel/600/400', dataAiHint: 'commercial fonts' },
        ]
    },
    {
        title: "Brand Templates",
        icon: <PenTool className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Thousands of professionally designed templates for any brand.', url: 'https://www.canva.com/templates/', image: 'https://picsum.photos/seed/canva-templates/600/400', dataAiHint: 'design templates' },
            { name: 'Adobe Express', description: 'Free online content creator with thousands of templates.', url: 'https://www.adobe.com/express/templates', image: 'https://picsum.photos/seed/adobe-templates/600/400', dataAiHint: 'free templates' },
            { name: 'VistaCreate', description: 'A vast collection of design templates for your brand.', url: 'https://create.vista.com/themes/', image: 'https://picsum.photos/seed/vista-templates/600/400', dataAiHint: 'template library' },
            { name: 'Envato Elements', description: 'Unlimited downloads of graphic templates, stock photos & more.', url: 'https://elements.envato.com/graphic-templates', image: 'https://picsum.photos/seed/envato-templates/600/400', dataAiHint: 'stock templates' },
            { name: 'Marq (Lucidpress)', description: 'Lockable brand templates to ensure brand consistency.', url: 'https://www.marq.com/', image: 'https://picsum.photos/seed/marq-templates/600/400', dataAiHint: 'brand consistency' },
            { name: 'Figma Community', description: 'Browse thousands of templates and files from the community.', url: 'https://www.figma.com/community/templates', image: 'https://picsum.photos/seed/figma-templates/600/400', dataAiHint: 'ui templates' },
            { name: 'Behance', description: 'Discover creative work and templates from top designers.', url: 'https://www.behance.net/', image: 'https://picsum.photos/seed/behance-templates/600/400', dataAiHint: 'design portfolio' },
            { name: 'Dribbble', description: 'Find inspiration and templates from the world’s top designers.', url: 'https://dribbble.com/', image: 'https://picsum.photos/seed/dribbble-templates/600/400', dataAiHint: 'designer community' },
            { name: 'Creative Market', description: 'Ready-to-use design assets from independent creators.', url: 'https://creativemarket.com/templates', image: 'https://picsum.photos/seed/creativemarket-templates/600/400', dataAiHint: 'design market' },
            { name: 'Freepik', description: 'Free graphic resources, vectors, and templates.', url: 'https://www.freepik.com/', image: 'https://picsum.photos/seed/freepik-templates/600/400', dataAiHint: 'free vectors' },
        ]
    },
    {
        title: "Animated Logos",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Renderforest', description: 'Create stunning animated logos in minutes.', url: 'https://www.renderforest.com/animated-logo-maker', image: 'https://picsum.photos/seed/renderforest-logos/600/400', dataAiHint: 'logo animation' },
            { name: 'Canva', description: 'Animate your logo with just one click.', url: 'https://www.canva.com/features/animate-logo/', image: 'https://picsum.photos/seed/canva-logos/600/400', dataAiHint: 'easy animation' },
            { name: 'Viddyoze', description: 'Create studio-quality animations in just a few clicks.', url: 'https://viddyoze.com/', image: 'https://picsum.photos/seed/viddyoze-logos/600/400', dataAiHint: '3d animation' },
            { name: 'Animaker', description: 'A platform for beginners, non-designers & professionals to create animated videos.', url: 'https://www.animaker.com/logo-animation', image: 'https://picsum.photos/seed/animaker-logos/600/400', dataAiHint: 'diy animation' },
            { name: 'Offeo', description: 'Online video ad maker for social media marketing.', url: 'https://offeo.com/tools/animated-logo-maker', image: 'https://picsum.photos/seed/offeo-logos/600/400', dataAiHint: 'video ad' },
            { name: 'Adobe Express', description: 'Animate text and photos for your logo.', url: 'https://www.adobe.com/express/feature/animation/animate-text', image: 'https://picsum.photos/seed/adobe-logos/600/400', dataAiHint: 'text animation' },
            { name: 'Placeit', description: 'Create animated logos and intros for your videos.', url: 'https://placeit.net/animated-logo-maker', image: 'https://picsum.photos/seed/placeit-logos/600/400', dataAiHint: 'intro maker' },
            { name: 'FlexClip', description: 'Free online logo animation maker.', url: 'https://www.flexclip.com/tools/animated-logo-maker/', image: 'https://picsum.photos/seed/flexclip-logos/600/400', dataAiHint: 'free tool' },
            { name: 'MotionDen', description: 'Create studio-quality intro videos in minutes.', url: 'https://motionden.com/animated-logo-maker', image: 'https://picsum.photos/seed/motionden-logos/600/400', dataAiHint: 'video intro' },
            { name: 'Vectary', description: 'The 3D and Augmented Reality design platform.', url: 'https://www.vectary.com/', image: 'https://picsum.photos/seed/vectary-logos/600/400', dataAiHint: '3d design' },
        ]
    },
    {
        title: "Motion Posters",
        icon: <ImagePlay className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Bring your posters to life with animation.', url: 'https://www.canva.com/create/posters/', image: 'https://picsum.photos/seed/canva-motion/600/400', dataAiHint: 'animated design' },
            { name: 'Adobe Express', description: 'Create animated social graphics and posters for free.', url: 'https://www.adobe.com/express/', image: 'https://picsum.photos/seed/adobe-motion/600/400', dataAiHint: 'social animation' },
            { name: 'PosterMyWall', description: 'Create amazing motion graphics, posters, and videos.', url: 'https://www.postermywall.com/', image: 'https://picsum.photos/seed/postermywall-motion/600/400', dataAiHint: 'video posters' },
            { name: 'Bannersnack (Creatopy)', description: 'Online animated banner and poster maker.', url: 'https://www.creatopy.com/', image: 'https://picsum.photos/seed/bannersnack-motion/600/400', dataAiHint: 'banner maker' },
            { name: 'Tyle.io', description: 'Turn your photos and text into high-quality videos.', url: 'https://www.tyle.io/', image: 'https://picsum.photos/seed/tyle-motion/600/400', dataAiHint: 'video story' },
            { name: 'Wave.video', description: 'Create animated graphics and videos for any marketing channel.', url: 'https://wave.video/', image: 'https://picsum.photos/seed/wave-motion/600/400', dataAiHint: 'marketing video' },
            { name: 'Adobe After Effects', description: 'Industry-standard motion graphics and visual effects software.', url: 'https://www.adobe.com/products/aftereffects.html', image: 'https://picsum.photos/seed/aftereffects-motion/600/400', dataAiHint: 'vfx software' },
            { name: 'Runway', description: 'AI magic tools for video editing and motion graphics.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-motion/600/400', dataAiHint: 'ai video' },
            { name: 'Kapwing', description: 'Collaborative platform for creating images, videos, and GIFs.', url: 'https://www.kapwing.com/', image: 'https://picsum.photos/seed/kapwing-motion/600/400', dataAiHint: 'online editor' },
            { name: 'Piktochart', description: 'Create engaging infographics, presentations, and posters.', url: 'https://piktochart.com/', image: 'https://picsum.photos/seed/piktochart-motion/600/400', dataAiHint: 'infographics' },
        ]
    },
    {
        title: "Vector Illustrations",
        icon: <Shapes className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Illustrator', description: 'The industry-standard vector graphics software.', url: 'https://www.adobe.com/products/illustrator.html', image: 'https://picsum.photos/seed/illustrator/600/400', dataAiHint: 'vector art' },
            { name: 'Figma', description: 'A collaborative interface design tool for vector work.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-vector/600/400', dataAiHint: 'ui design' },
            { name: 'Sketch', description: 'The design toolkit for creating your best vector work.', url: 'https://www.sketch.com/', image: 'https://picsum.photos/seed/sketch-vector/600/400', dataAiHint: 'macOS design' },
            { name: 'Affinity Designer', description: 'A professional graphic design app for desktop and iPad.', url: 'https://affinity.serif.com/en-us/designer/', image: 'https://picsum.photos/seed/affinity/600/400', dataAiHint: 'graphic design' },
            { name: 'Inkscape', description: 'A powerful, free and open-source vector graphics editor.', url: 'https://inkscape.org/', image: 'https://picsum.photos/seed/inkscape/600/400', dataAiHint: 'open source' },
            { name: 'CorelDRAW', description: 'A complete suite of professional graphic design applications.', url: 'https://www.coreldraw.com/', image: 'https://picsum.photos/seed/coreldraw/600/400', dataAiHint: 'design suite' },
            { name: 'Vectr', description: 'A simple yet powerful free graphics editor.', url: 'https://vectr.com/', image: 'https://picsum.photos/seed/vectr/600/400', dataAiHint: 'free editor' },
            { name: 'Gravit Designer', description: 'A full-featured vector graphic design app.', url: 'https://www.designer.io/', image: 'https://picsum.photos/seed/gravit/600/400', dataAiHint: 'cross-platform' },
            { name: 'Canva', description: 'Create vector-like graphics with an easy-to-use interface.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-vector/600/400', dataAiHint: 'easy graphics' },
            { name: 'Linearity Curve', description: 'Formerly Vectornator. Powerful vector design for Apple devices.', url: 'https://www.linearity.io/curve', image: 'https://picsum.photos/seed/linearity/600/400', dataAiHint: 'ipad design' },
        ]
    },
    {
        title: "Character Design",
        icon: <UserCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Procreate', description: 'A powerful digital illustration app for iPad.', url: 'https://procreate.art/', image: 'https://picsum.photos/seed/procreate-char/600/400', dataAiHint: 'digital art' },
            { name: 'Blender', description: 'Free and open source 3D creation suite.', url: 'https://www.blender.org/', image: 'https://picsum.photos/seed/blender-char/600/400', dataAiHint: '3d model' },
            { name: 'ZBrush', description: 'The industry standard for digital sculpting.', url: 'https://www.maxon.net/en/zbrush', image: 'https://picsum.photos/seed/zbrush-char/600/400', dataAiHint: 'digital sculpt' },
            { name: 'Character Creator', description: 'A full character creation solution for designers.', url: 'https://www.reallusion.com/character-creator/', image: 'https://picsum.photos/seed/reallusion/600/400', dataAiHint: '3d character' },
            { name: 'Artbreeder', description: 'Create and breed characters using AI.', url: 'https://www.artbreeder.com/', image: 'https://picsum.photos/seed/artbreeder-char/600/400', dataAiHint: 'ai generator' },
            { name: 'Adobe Photoshop', description: 'The essential tool for image editing and digital painting.', url: 'https://www.adobe.com/products/photoshop.html', image: 'https://picsum.photos/seed/photoshop-char/600/400', dataAiHint: 'digital paint' },
            { name: 'Clip Studio Paint', description: 'The artist\'s software for drawing and painting.', url: 'https://www.clipstudio.net/en/', image: 'https://picsum.photos/seed/clipstudio/600/400', dataAiHint: 'comic art' },
            { name: 'MakeHuman', description: 'An open source tool to make 3D characters.', url: 'http://www.makehumancommunity.org/', image: 'https://picsum.photos/seed/makehuman/600/400', dataAiHint: 'human model' },
            { name: 'Hero Forge', description: 'Design custom miniatures for tabletop RPGs.', url: 'https://www.heroforge.com/', image: 'https://picsum.photos/seed/heroforge/600/400', dataAiHint: 'custom miniature' },
            { name: 'Midjourney', description: 'Generate unique character concepts with AI.', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-char/600/400', dataAiHint: 'ai concept' },
        ]
    },
    {
        title: "Concept Art",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Photoshop', description: 'Industry-standard for digital painting and photo manipulation.', url: 'https://www.adobe.com/products/photoshop.html', image: 'https://picsum.photos/seed/photoshop-concept/600/400', dataAiHint: 'digital paint' },
            { name: 'Procreate', description: 'Powerful and intuitive digital illustration app for iPad.', url: 'https://procreate.art/', image: 'https://picsum.photos/seed/procreate-concept/600/400', dataAiHint: 'ipad drawing' },
            { name: 'ArtStation', description: 'The leading showcase platform for games, film, and media.', url: 'https://www.artstation.com/', image: 'https://picsum.photos/seed/artstation-concept/600/400', dataAiHint: 'art portfolio' },
            { name: 'Midjourney', description: 'AI-powered tool to rapidly generate visual concepts.', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-concept/600/400', dataAiHint: 'ai art' },
            { name: 'Blender', description: 'Free 3D software for creating models and scenes.', url: 'https://www.blender.org/', image: 'https://picsum.photos/seed/blender-concept/600/400', dataAiHint: '3d creation' },
            { name: 'Corel Painter', description: 'Digital art software trusted by professional artists.', url: 'https://www.painterartist.com/en/', image: 'https://picsum.photos/seed/painter-concept/600/400', dataAiHint: 'digital paint' },
            { name: 'Clip Studio Paint', description: 'Versatile tool for illustration, comics, and animation.', url: 'https://www.clipstudio.net/en/', image: 'https://picsum.photos/seed/clipstudio-concept/600/400', dataAiHint: 'illustration' },
            { name: '3DCoat', description: 'The one application for all your 3D art needs.', url: 'https://3dcoat.com/', image: 'https://picsum.photos/seed/3dcoat-concept/600/400', dataAiHint: '3d sculpting' },
            { name: 'Keyshot', description: 'Real-time 3D rendering to create amazing visuals.', url: 'https://www.keyshot.com/', image: 'https://picsum.photos/seed/keyshot-concept/600/400', dataAiHint: '3d rendering' },
            { name: 'PureRef', description: 'A simple tool for organizing reference images.', url: 'https://www.pureref.com/', image: 'https://picsum.photos/seed/pureref-concept/600/400', dataAiHint: 'reference board' },
        ]
    },
    {
        title: "Comics & Manga",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Clip Studio Paint', description: 'The all-in-one tool for creating comics and manga.', url: 'https://www.clipstudio.net/en/', image: 'https://picsum.photos/seed/clipstudio-comic/600/400', dataAiHint: 'manga art' },
            { name: 'Procreate', description: 'Powerful iPad app for drawing and illustration.', url: 'https://procreate.art/', image: 'https://picsum.photos/seed/procreate-comic/600/400', dataAiHint: 'ipad drawing' },
            { name: 'Adobe Photoshop', description: 'Versatile tool for coloring, lettering, and effects.', url: 'https://www.adobe.com/products/photoshop.html', image: 'https://picsum.photos/seed/photoshop-comic/600/400', dataAiHint: 'digital coloring' },
            { name: 'MediBang Paint', description: 'Free digital painting and comic creation software.', url: 'https://medibangpaint.com/en/', image: 'https://picsum.photos/seed/medibang-comic/600/400', dataAiHint: 'free comic' },
            { name: 'Krita', description: 'A free and open-source professional painting program.', url: 'https://krita.org/en/', image: 'https://picsum.photos/seed/krita-comic/600/400', dataAiHint: 'open source' },
            { name: 'Corel Painter', description: 'Digital art software with realistic brushes.', url: 'https://www.painterartist.com/en/', image: 'https://picsum.photos/seed/painter-comic/600/400', dataAiHint: 'natural media' },
            { name: 'Blambot', description: 'A resource for comic book fonts and lettering.', url: 'https://blambot.com/', image: 'https://picsum.photos/seed/blambot-comic/600/400', dataAiHint: 'comic fonts' },
            { name: 'Comic Life', description: 'The app for turning your pictures into comics.', url: 'https://plasq.com/apps/comiclife/macwin/', image: 'https://picsum.photos/seed/comiclife/600/400', dataAiHint: 'photo comic' },
            { name: 'Ibis Paint X', description: 'A popular drawing app with comic creation features.', url: 'https://ibispaint.com/', image: 'https://picsum.photos/seed/ibispaint/600/400', dataAiHint: 'mobile drawing' },
            { name: 'Jump Paint', description: 'The official Shonen Jump manga production app.', url: 'https://medibangpaint.com/en/jumppaint/', image: 'https://picsum.photos/seed/jumppaint/600/400', dataAiHint: 'shonen jump' },
        ]
    },
    {
        title: "Wireframes",
        icon: <BoxSelect className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Balsamiq', description: 'The rapid, low-fidelity wireframing tool.', url: 'https://balsamiq.com/', image: 'https://picsum.photos/seed/balsamiq-wire/600/400', dataAiHint: 'lo-fi wireframe' },
            { name: 'Figma', description: 'Design and collaborate on wireframes in one tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-wire/600/400', dataAiHint: 'collaborative design' },
            { name: 'Sketch', description: 'A powerful vector tool for creating wireframes on Mac.', url: 'https://www.sketch.com/', image: 'https://picsum.photos/seed/sketch-wire/600/400', dataAiHint: 'macOS design' },
            { name: 'Adobe XD', description: 'Design, prototype, and share user experiences.', url: 'https://www.adobe.com/products/xd.html', image: 'https://picsum.photos/seed/adobexd-wire/600/400', dataAiHint: 'ux design' },
            { name: 'Miro', description: 'An online whiteboard for brainstorming and wireframing.', url: 'https://miro.com/', image: 'https://picsum.photos/seed/miro-wire/600/400', dataAiHint: 'online whiteboard' },
            { name: 'Lucidchart', description: 'Intelligent diagramming for flowcharts and wireframes.', url: 'https://www.lucidchart.com/', image: 'https://picsum.photos/seed/lucidchart-wire/600/400', dataAiHint: 'diagramming' },
            { name: 'Whimsical', description: 'The visual workspace for collaboration.', url: 'https://whimsical.com/', image: 'https://picsum.photos/seed/whimsical-wire/600/400', dataAiHint: 'visual workspace' },
            { name: 'Uizard', description: 'AI-powered tool to turn sketches into wireframes.', url: 'https://uizard.io/', image: 'https://picsum.photos/seed/uizard-wire/600/400', dataAiHint: 'ai wireframe' },
            { name: 'MockFlow', description: 'An online suite for wireframing and UI design.', url: 'https://www.mockflow.com/', image: 'https://picsum.photos/seed/mockflow-wire/600/400', dataAiHint: 'ui suite' },
            { name: 'Justinmind', description: 'Prototyping tool for web and mobile apps.', url: 'https://www.justinmind.com/', image: 'https://picsum.photos/seed/justinmind-wire/600/400', dataAiHint: 'app prototype' },
        ]
    },
    {
        title: "Prototypes",
        icon: <MousePointerClick className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Figma', description: 'Design and create interactive prototypes in one place.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-proto/600/400', dataAiHint: 'interactive prototype' },
            { name: 'InVision', description: 'Digital product design platform for creating prototypes.', url: 'https://www.invisionapp.com/', image: 'https://picsum.photos/seed/invision-proto/600/400', dataAiHint: 'design platform' },
            { name: 'Adobe XD', description: 'A powerful tool for UI/UX design and prototyping.', url: 'https://www.adobe.com/products/xd.html', image: 'https://picsum.photos/seed/adobexd-proto/600/400', dataAiHint: 'ux prototype' },
            { name: 'Framer', description: 'The best tool for building interactive websites and apps.', url: 'https://www.framer.com/', image: 'https://picsum.photos/seed/framer-proto/600/400', dataAiHint: 'no-code' },
            { name: 'Proto.io', description: 'Create fully-interactive, high-fidelity prototypes.', url: 'https://proto.io/', image: 'https://picsum.photos/seed/protoio-proto/600/400', dataAiHint: 'hi-fi prototype' },
            { name: 'Marvel', description: 'The all-in-one design platform for prototyping.', url: 'https://marvelapp.com/', image: 'https://picsum.photos/seed/marvel-proto/600/400', dataAiHint: 'design platform' },
            { name: 'Axure RP', description: 'Prototyping tool for complex solutions and apps.', url: 'https://www.axure.com/', image: 'https://picsum.photos/seed/axure-proto/600/400', dataAiHint: 'complex app' },
            { name: 'Principle', description: 'Easy to design animated and interactive user interfaces.', url: 'https://principle.app/', image: 'https://picsum.photos/seed/principle-proto/600/400', dataAiHint: 'ui animation' },
            { name: 'Webflow', description: 'Build responsive websites with interactive prototypes.', url: 'https://webflow.com/', image: 'https://picsum.photos/seed/webflow-proto/600/400', dataAiHint: 'web design' },
            { name: 'Origami Studio', description: 'A free design tool by Facebook for creating prototypes.', url: 'https://origami.design/', image: 'https://picsum.photos/seed/origami-proto/600/400', dataAiHint: 'facebook design' },
        ]
    },
    {
        title: "Magazines",
        icon: <Newspaper className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe InDesign', description: 'The industry-leading layout and page design software.', url: 'https://www.adobe.com/products/indesign.html', image: 'https://picsum.photos/seed/indesign-mag/600/400', dataAiHint: 'page layout' },
            { name: 'Canva', description: 'Create beautiful magazine covers and layouts online.', url: 'https://www.canva.com/create/magazines/', image: 'https://picsum.photos/seed/canva-mag/600/400', dataAiHint: 'online design' },
            { name: 'Scribus', description: 'Free and open-source professional page layout software.', url: 'https://www.scribus.net/', image: 'https://picsum.photos/seed/scribus-mag/600/400', dataAiHint: 'desktop publishing' },
            { name: 'Lucidpress (Marq)', description: 'Brand templating platform for magazines and catalogs.', url: 'https://www.marq.com/', image: 'https://picsum.photos/seed/marq-mag/600/400', dataAiHint: 'brand templates' },
            { name: 'Flipsnack', description: 'An online tool for creating interactive digital magazines.', url: 'https://www.flipsnack.com/magazine-maker', image: 'https://picsum.photos/seed/flipsnack-mag/600/400', dataAiHint: 'digital magazine' },
            { name: 'Affinity Publisher', description: 'Professional publishing software for desktop and iPad.', url: 'https://affinity.serif.com/en-us/publisher/', image: 'https://picsum.photos/seed/affinity-mag/600/400', dataAiHint: 'publishing app' },
            { name: 'Joomag', description: 'Digital publishing platform for magazines and catalogs.', url: 'https://www.joomag.com/', image: 'https://picsum.photos/seed/joomag-mag/600/400', dataAiHint: 'digital publishing' },
            { name: 'Madmagz', description: 'Create magazines collaboratively, in print or web format.', url: 'https://madmagz.com/ ', image: 'https://picsum.photos/seed/madmagz/600/400', dataAiHint: 'collaborative' },
            { name: 'QuarkXPress', description: 'The powerful page layout and digital publishing software.', url: 'https://www.quark.com/', image: 'https://picsum.photos/seed/quark-mag/600/400', dataAiHint: 'content design' },
            { name: 'MagLoft', description: 'Digital magazine publishing software for mobile apps.', url: 'https://www.magloft.com/', image: 'https://picsum.photos/seed/magloft/600/400', dataAiHint: 'mobile publishing' },
        ]
    },
    {
        title: "Catalogs",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Flipsnack', description: 'Create stunning digital catalogs and brochures.', url: 'https://www.flipsnack.com/catalog-maker', image: 'https://picsum.photos/seed/flipsnack-cat/600/400', dataAiHint: 'digital catalog' },
            { name: 'Publitas', description: 'Publish your catalogs online with a seamless experience.', url: 'https://www.publitas.com/', image: 'https://picsum.photos/seed/publitas-cat/600/400', dataAiHint: 'online catalog' },
            { name: 'Canva', description: 'Design professional product catalogs with ease.', url: 'https://www.canva.com/create/catalogs/', image: 'https://picsum.photos/seed/canva-cat/600/400', dataAiHint: 'product catalog' },
            { name: 'Adobe InDesign', description: 'Industry-standard software for creating print and digital catalogs.', url: 'https://www.adobe.com/products/indesign.html', image: 'https://picsum.photos/seed/indesign-cat/600/400', dataAiHint: 'print design' },
            { name: 'Marq (Lucidpress)', description: 'Brand templating platform to create consistent catalogs.', url: 'https://www.marq.com/', image: 'https://picsum.photos/seed/marq-cat/600/400', dataAiHint: 'brand templates' },
            { name: 'DCatalog', description: 'Digital publishing platform to convert PDFs to catalogs.', url: 'https://www.dcatalog.com/', image: 'https://picsum.photos/seed/dcatalog-cat/600/400', dataAiHint: 'pdf conversion' },
            { name: 'FlippingBook', description: 'Create professional online catalogs with a realistic page-flip effect.', url: 'https://flippingbook.com/online-catalog-maker', image: 'https://picsum.photos/seed/flippingbook-cat/600/400', dataAiHint: 'page flip' },
            { name: 'Catalog Machine', description: 'A simple solution for creating and sharing product catalogs.', url: 'https://www.catalogmachine.com/', image: 'https://picsum.photos/seed/catalogmachine-cat/600/400', dataAiHint: 'product database' },
            { name: 'Akeneo', description: 'Product Information Management (PIM) for creating catalogs.', url: 'https://www.akeneo.com/', image: 'https://picsum.photos/seed/akeneo-cat/600/400', dataAiHint: 'pim software' },
            { name: 'Salsify', description: 'A commerce experience management platform.', url: 'https://www.salsify.com/', image: 'https://picsum.photos/seed/salsify-cat/600/400', dataAiHint: 'commerce management' },
        ]
    },
    {
        title: "Wall Graphics",
        icon: <Wallpaper className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Walls.io', description: 'Create large-scale wall murals and graphics.', url: 'https://walls.io/', image: 'https://picsum.photos/seed/wallsio-wall/600/400', dataAiHint: 'social wall' },
            { name: 'MegaPrint', description: 'Large format printing for custom wall graphics and decals.', url: 'https://www.megaprint.com/wall-graphics.php', image: 'https://picsum.photos/seed/megaprint-wall/600/400', dataAiHint: 'large format' },
            { name: 'WallMonkeys', description: 'Peel and stick wall decals and murals.', url: 'https://www.wallmonkeys.com/', image: 'https://picsum.photos/seed/wallmonkeys-wall/600/400', dataAiHint: 'wall decal' },
            { name: 'Signs.com', description: 'Design custom wall graphics and lettering online.', url: 'https://www.signs.com/wall-graphics/', image: 'https://picsum.photos/seed/signscom-wall/600/400', dataAiHint: 'vinyl lettering' },
            { name: 'Fathead', description: 'Life-size wall decals and graphics.', url: 'https://fathead.com/', image: 'https://picsum.photos/seed/fathead-wall/600/400', dataAiHint: 'life-size decal' },
            { name: 'Canva', description: 'Design custom wall art and prints.', url: 'https://www.canva.com/create/wall-art/', image: 'https://picsum.photos/seed/canva-wall/600/400', dataAiHint: 'custom art' },
            { name: 'Adobe Illustrator', description: 'Professional tool for creating scalable vector graphics.', url: 'https://www.adobe.com/products/illustrator.html', image: 'https://picsum.photos/seed/illustrator-wall/600/400', dataAiHint: 'vector graphic' },
            { name: 'Photowall', description: 'Create custom wallpaper and murals from your images.', url: 'https://www.photowall.com/', image: 'https://picsum.photos/seed/photowall-wall/600/400', dataAiHint: 'custom wallpaper' },
            { name: 'Murals Your Way', description: 'Custom wallpaper murals for any space.', url: 'https://www.muralsyourway.com/', image: 'https://picsum.photos/seed/muralsyourway-wall/600/400', dataAiHint: 'wallpaper mural' },
            { name: 'UPrinting', description: 'Print custom wall decals and graphics.', url: 'https://www.uprinting.com/wall-decal-printing.html', image: 'https://picsum.photos/seed/uprinting-wall/600/400', dataAiHint: 'decal printing' },
        ]
    },
    {
        title: "Vehicle Wraps",
        icon: <Car className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Wrapmate', description: 'Design, print, and install vehicle wraps online.', url: 'https://wrapmate.com/', image: 'https://picsum.photos/seed/wrapmate-wrap/600/400', dataAiHint: 'car wrap' },
            { name: '3M Graphics', description: 'Materials and solutions for vehicle wraps.', url: 'https://www.3m.com/3M/en_US/graphics-signage-us/applications/vehicles-and-wraps/', image: 'https://picsum.photos/seed/3m-wrap/600/400', dataAiHint: 'wrap material' },
            { name: 'Avery Dennison', description: 'Vinyl wrap films and materials.', url: 'https://graphics.averydennison.com/en/home/uses-and-applications/vehicle-wrapping.html', image: 'https://picsum.photos/seed/avery-wrap/600/400', dataAiHint: 'vinyl film' },
            { name: 'Car Wrapper', description: 'Online tool to visualize vehicle wraps.', url: 'https://www.car-wrapper.com/', image: 'https://picsum.photos/seed/carwrapper-wrap/600/400', dataAiHint: 'wrap visualizer' },
            { name: 'The Bad Wrap', description: 'Vehicle wrap design templates and software.', url: 'https://thebadwrap.com/', image: 'https://picsum.photos/seed/thebadwrap-wrap/600/400', dataAiHint: 'wrap template' },
            { name: 'Adobe Illustrator', description: 'Professional design tool for creating wrap graphics.', url: 'https://www.adobe.com/products/illustrator.html', image: 'https://picsum.photos/seed/illustrator-wrap/600/400', dataAiHint: 'vector design' },
            { name: 'CorelDRAW', description: 'Graphic design software for vehicle wrap design.', url: 'https://www.coreldraw.com/', image: 'https://picsum.photos/seed/coreldraw-wrap/600/400', dataAiHint: 'graphic software' },
            { name: 'Vehicle Templates', description: 'A library of vehicle outlines for design.', url: 'https://www.vehicle-templates.com/', image: 'https://picsum.photos/seed/vehicletemplates-wrap/600/400', dataAiHint: 'car template' },
            { name: 'Signs.com', description: 'Custom vehicle magnets and decals.', url: 'https://www.signs.com/vehicle-magnets/', image: 'https://picsum.photos/seed/signscom-wrap/600/400', dataAiHint: 'car magnet' },
            { name: 'VistaPrint', description: 'Car door decals and vehicle advertising.', url: 'https://www.vistaprint.com/signs-posters/car-signs', image: 'https://picsum.photos/seed/vistaprint-wrap/600/400', dataAiHint: 'car decal' },
        ]
    },
    {
        title: "Exhibition Design",
        icon: <Store className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SketchUp', description: '3D modeling software for exhibition and booth design.', url: 'https://www.sketchup.com/', image: 'https://picsum.photos/seed/sketchup-exhibit/600/400', dataAiHint: '3d model' },
            { name: 'AutoCAD', description: 'CAD software for precise 2D and 3D drafting.', url: 'https://www.autodesk.com/products/autocad/overview', image: 'https://picsum.photos/seed/autocad-exhibit/600/400', dataAiHint: 'cad software' },
            { name: 'Vectorworks', description: 'All-in-one design software for entertainment and events.', url: 'https://www.vectorworks.net/', image: 'https://picsum.photos/seed/vectorworks-exhibit/600/400', dataAiHint: 'event design' },
            { name: 'ExhibitCore', description: 'Online trade show floor plan and design tool.', url: 'https://www.exhibitcore.com/', image: 'https://picsum.photos/seed/exhibitcore-exhibit/600/400', dataAiHint: 'floor plan' },
            { name: 'Expocad', description: 'Floor plan management software for expos.', url: 'https://www.expocad.com/', image: 'https://picsum.photos/seed/expocad-exhibit/600/400', dataAiHint: 'expo management' },
            { name: 'BricsCAD', description: 'A powerful CAD platform with familiar features.', url: 'https://www.bricsys.com/en-intl/bricscad/', image: 'https://picsum.photos/seed/bricscad-exhibit/600/400', dataAiHint: 'cad platform' },
            { name: 'Canva', description: 'Design banners, posters, and materials for your exhibit.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-exhibit/600/400', dataAiHint: 'exhibit materials' },
            { name: 'Adobe Illustrator', description: 'Create graphics and signage for your booth.', url: 'https://www.adobe.com/products/illustrator.html', image: 'https://picsum.photos/seed/illustrator-exhibit/600/400', dataAiHint: 'booth graphics' },
            { name: 'formZ', description: '3D design application for modeling and rendering.', url: 'http://www.formz.com/', image: 'https://picsum.photos/seed/formz-exhibit/600/400', dataAiHint: '3d design' },
            { name: 'Cinema 4D', description: '3D modeling, animation, and rendering software.', url: 'https://www.maxon.net/en/cinema-4d', image: 'https://picsum.photos/seed/cinema4d-exhibit/600/400', dataAiHint: '3d animation' },
        ]
    },
    {
        title: "Signage",
        icon: <SquareParking className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Signs.com', description: 'Design and order custom signs online.', url: 'https://www.signs.com/', image: 'https://picsum.photos/seed/signscom-sign/600/400', dataAiHint: 'custom signs' },
            { name: 'Canva', description: 'Create printable signs for business and events.', url: 'https://www.canva.com/create/signs/', image: 'https://picsum.photos/seed/canva-sign/600/400', dataAiHint: 'printable signs' },
            { name: 'Adobe Illustrator', description: 'Professional design software for creating signage.', url: 'https://www.adobe.com/products/illustrator.html', image: 'https://picsum.photos/seed/illustrator-sign/600/400', dataAiHint: 'vector design' },
            { name: 'VistaPrint', description: 'Custom signs, banners, and marketing materials.', url: 'https://www.vistaprint.com/signs-posters', image: 'https://picsum.photos/seed/vistaprint-sign/600/400', dataAiHint: 'business signs' },
            { name: 'Sign.com', description: 'A platform to find and work with local sign companies.', url: 'https://www.sign.com/', image: 'https://picsum.photos/seed/signcom-sign/600/400', dataAiHint: 'local signs' },
            { name: 'EasySigns', description: 'Online sign printing with fast turnaround.', url: 'https://www.easysigns.com/', image: 'https://picsum.photos/seed/easysigns-sign/600/400', dataAiHint: 'sign printing' },
            { name: 'CorelDRAW', description: 'Graphic design software for professional sign making.', url: 'https://www.coreldraw.com/', image: 'https://picsum.photos/seed/coreldraw-sign/600/400', dataAiHint: 'graphic software' },
            { name: 'BuildASign', description: 'Custom signs and banners for personal and business use.', url: 'https://www.buildasign.com/', image: 'https://picsum.photos/seed/buildasign-sign/600/400', dataAiHint: 'online signs' },
            { name: 'FedEx Office', description: 'Printing services for signs, posters, and banners.', url: 'https://www.office.fedex.com/default/signs-posters.html', image: 'https://picsum.photos/seed/fedex-sign/600/400', dataAiHint: 'printing services' },
            { name: 'SmartDraw', description: 'Create diagrams and signs with templates.', url: 'https://www.smartdraw.com/', image: 'https://picsum.photos/seed/smartdraw-sign/600/400', dataAiHint: 'diagram maker' },
        ]
    },
    {
        title: "3D Posters",
        icon: <TowerControl className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Dimension', description: 'Create photorealistic 3D images and posters.', url: 'https://www.adobe.com/products/dimension.html', image: 'https://picsum.photos/seed/dimension-3d/600/400', dataAiHint: '3d design' },
            { name: 'Blender', description: 'Free and open-source 3D creation suite.', url: 'https://www.blender.org/', image: 'https://picsum.photos/seed/blender-3d/600/400', dataAiHint: '3d modeling' },
            { name: 'Cinema 4D', description: 'Professional 3D modeling, animation, and rendering software.', url: 'https://www.maxon.net/en/cinema-4d', image: 'https://picsum.photos/seed/cinema4d-3d/600/400', dataAiHint: 'motion graphics' },
            { name: 'Vectary', description: 'Online 3D design and augmented reality platform.', url: 'https://www.vectary.com/', image: 'https://picsum.photos/seed/vectary-3d/600/400', dataAiHint: 'ar design' },
            { name: 'Spline', description: 'A friendly 3D design tool for the web.', url: 'https://spline.design/', image: 'https://picsum.photos/seed/spline-3d/600/400', dataAiHint: 'web 3d' },
            { name: 'Photoshop', description: 'Use 3D features to create posters with depth.', url: 'https://www.adobe.com/products/photoshop.html', image: 'https://picsum.photos/seed/photoshop-3d/600/400', dataAiHint: 'image editing' },
            { name: 'Canva', description: 'Add 3D elements and text effects to your posters.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-3d/600/400', dataAiHint: 'design elements' },
            { name: 'Fotor', description: 'Create 3D text and effects for your designs.', url: 'https://www.fotor.com/', image: 'https://picsum.photos/seed/fotor-3d/600/400', dataAiHint: 'text effects' },
            { name: 'Postermywall', description: 'Add 3D text and shapes to your poster designs.', url: 'https://www.postermywall.com/', image: 'https://picsum.photos/seed/postermywall-3d/600/400', dataAiHint: 'poster maker' },
            { name: 'Womp', description: 'A fun and easy 3D creation tool.', url: 'https://womp.com/', image: 'https://picsum.photos/seed/womp-3d/600/400', dataAiHint: 'easy 3d' },
        ]
    },
    {
        title: "3D Modeling",
        icon: <Box className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Blender', description: 'Free and open source 3D creation suite.', url: 'https://www.blender.org/', image: 'https://picsum.photos/seed/blender-model/600/400', dataAiHint: '3d suite' },
            { name: 'Autodesk Maya', description: '3D computer animation, modeling, simulation, and rendering software.', url: 'https://www.autodesk.com/products/maya/overview', image: 'https://picsum.photos/seed/maya-model/600/400', dataAiHint: '3d animation' },
            { name: 'Cinema 4D', description: 'Professional 3D software for modeling, animation, and rendering.', url: 'https://www.maxon.net/en/cinema-4d', image: 'https://picsum.photos/seed/cinema4d-model/600/400', dataAiHint: 'motion graphics' },
            { name: 'ZBrush', description: 'The industry standard for digital sculpting and painting.', url: 'https://www.maxon.net/en/zbrush', image: 'https://picsum.photos/seed/zbrush-model/600/400', dataAiHint: 'digital sculpting' },
            { name: 'SketchUp', description: 'Easy-to-use 3D modeling software.', url: 'https://www.sketchup.com/', image: 'https://picsum.photos/seed/sketchup-model/600/400', dataAiHint: 'architectural design' },
            { name: '3ds Max', description: '3D modeling and rendering software for design visualization.', url: 'https://www.autodesk.com/products/3ds-max/overview', image: 'https://picsum.photos/seed/3dsmax-model/600/400', dataAiHint: 'game assets' },
            { name: 'Houdini', description: 'Advanced 3D animation and visual effects software.', url: 'https://www.sidefx.com/', image: 'https://picsum.photos/seed/houdini-model/600/400', dataAiHint: 'visual effects' },
            { name: 'Modo', description: 'A powerful and flexible 3D modeling, texturing, and rendering toolset.', url: 'https://www.foundry.com/products/modo', image: 'https://picsum.photos/seed/modo-model/600/400', dataAiHint: '3d toolset' },
            { name: 'Vectary', description: 'The online 3D design and augmented reality platform.', url: 'https://www.vectary.com/', image: 'https://picsum.photos/seed/vectary-model/600/400', dataAiHint: 'online 3d' },
            { name: 'Tinkercad', description: 'A free, easy-to-use app for 3D design, electronics, and coding.', url: 'https://www.tinkercad.com/', image: 'https://picsum.photos/seed/tinkercad-model/600/400', dataAiHint: 'beginner 3d' },
        ]
    },
    {
        title: "3D Product Render",
        icon: <Truck className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Keyshot', description: 'Real-time 3D rendering software to create amazing visuals.', url: 'https://www.keyshot.com/', image: 'https://picsum.photos/seed/keyshot-render/600/400', dataAiHint: 'product rendering' },
            { name: 'Blender (Cycles)', description: 'Powerful rendering engine within the free Blender suite.', url: 'https://www.blender.org/', image: 'https://picsum.photos/seed/blender-render/600/400', dataAiHint: 'ray tracing' },
            { name: 'V-Ray', description: 'A leading rendering plugin for major 3D design software.', url: 'https://www.chaos.com/vray', image: 'https://picsum.photos/seed/vray-render/600/400', dataAiHint: 'photorealistic rendering' },
            { name: 'Marmoset Toolbag', description: 'A full-featured 3D real-time rendering and animation tool.', url: 'https://marmoset.co/toolbag/', image: 'https://picsum.photos/seed/marmoset-render/600/400', dataAiHint: 'real-time rendering' },
            { name: 'Adobe Dimension', description: 'Easy-to-use 3D rendering for graphic designers.', url: 'https://www.adobe.com/products/dimension.html', image: 'https://picsum.photos/seed/dimension-render/600/400', dataAiHint: '3d mockup' },
            { name: 'Substance 3D Stager', description: 'Compose and render photorealistic 3D scenes.', url: 'https://www.adobe.com/products/substance3d-stager.html', image: 'https://picsum.photos/seed/stager-render/600/400', dataAiHint: 'scene composition' },
            { name: 'Octane Render', description: 'The world’s first and fastest unbiased, spectrally correct GPU render engine.', url: 'https://home.otoy.com/render/octane-render/', image: 'https://picsum.photos/seed/octane-render/600/400', dataAiHint: 'gpu rendering' },
            { name: 'Redshift', description: 'A powerful GPU-accelerated renderer, built to meet the demands of contemporary high-end production rendering.', url: 'https://www.maxon.net/en/redshift', image: 'https://picsum.photos/seed/redshift-render/600/400', dataAiHint: 'production rendering' },
            { name: 'Arnold', description: 'An advanced Monte Carlo ray tracing renderer.', url: 'https://www.autodesk.com/products/arnold/overview', image: 'https://picsum.photos/seed/arnold-render/600/400', dataAiHint: 'ray tracing' },
            { name: 'Corona Renderer', description: 'A modern high-performance photorealistic renderer.', url: 'https://corona-renderer.com/', image: 'https://picsum.photos/seed/corona-render/600/400', dataAiHint: 'photorealistic' },
        ]
    },
    {
        title: "CGI Graphics",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Houdini', description: 'Node-based software for 3D animation and visual effects.', url: 'https://www.sidefx.com/', image: 'https://picsum.photos/seed/houdini-cgi/600/400', dataAiHint: 'visual effects' },
            { name: 'Autodesk Maya', description: 'Comprehensive 3D software for animation, modeling, and VFX.', url: 'https://www.autodesk.com/products/maya/overview', image: 'https://picsum.photos/seed/maya-cgi/600/400', dataAiHint: '3d animation' },
            { name: 'Blender', description: 'Free and open-source 3D suite for modeling, VFX, and animation.', url: 'https://www.blender.org/', image: 'https://picsum.photos/seed/blender-cgi/600/400', dataAiHint: 'open source' },
            { name: 'Nuke', description: 'The industry-standard node-based compositing toolkit.', url: 'https://www.foundry.com/products/nuke', image: 'https://picsum.photos/seed/nuke-cgi/600/400', dataAiHint: 'compositing' },
            { name: 'Adobe After Effects', description: 'Motion graphics and visual effects software.', url: 'https://www.adobe.com/products/aftereffects.html', image: 'https://picsum.photos/seed/aftereffects-cgi/600/400', dataAiHint: 'motion graphics' },
            { name: 'ZBrush', description: 'Digital sculpting tool for creating high-resolution models.', url: 'https://www.maxon.net/en/zbrush', image: 'https://picsum.photos/seed/zbrush-cgi/600/400', dataAiHint: 'digital sculpting' },
            { name: 'Substance 3D Painter', description: '3D painting software for texturing models.', url: 'https://www.adobe.com/products/substance3d-painter.html', image: 'https://picsum.photos/seed/painter-cgi/600/400', dataAiHint: '3d painting' },
            { name: 'Unreal Engine', description: 'Real-time 3D creation tool for realistic visuals.', url: 'https://www.unrealengine.com/', image: 'https://picsum.photos/seed/unreal-cgi/600/400', dataAiHint: 'real-time rendering' },
            { name: 'Unity', description: 'Real-time development platform for creating 2D and 3D experiences.', url: 'https://unity.com/', image: 'https://picsum.photos/seed/unity-cgi/600/400', dataAiHint: 'game engine' },
            { name: 'Foundry Mari', description: 'High-resolution 3D painting and texturing.', url: 'https://www.foundry.com/products/mari', image: 'https://picsum.photos/seed/mari-cgi/600/400', dataAiHint: 'texture painting' },
        ]
    }
];


export default function GraphicDesignToolsPage() {
    const { toast } = useToast();
    const { favouritedTools, handleFavouriteToggle } = useFavourites();

    const handleFavouriteClick = (e: React.MouseEvent, toolName: string) => {
        e.preventDefault();
        e.stopPropagation();
        handleFavouriteToggle(toolName);
    };

    const handleShareTool = React.useCallback(async (e: React.MouseEvent, tool: {name: string, url: string}) => {
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

  const ToolCard = ({ tool }: { tool: Tool }) => (
    <Link href={tool.url} key={tool.name} target="_blank" rel="noopener noreferrer" className="block group w-40 shrink-0">
      <Card 
        className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden"
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
        <div className='p-3'>
          <div className="flex justify-between items-start">
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
          <Link href="/business-tools" passHref>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
              <ArrowLeft />
            </Button>
          </Link>
          <div className='flex items-center gap-2'>
            <Paintbrush className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              Graphic Design
            </h1>
          </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-8">
            {toolData.map((category, index) => (
              <section key={index}>
                  <div className="flex justify-between items-center mb-3 px-2">
                      <h2 className="font-semibold text-xl flex items-center gap-2">
                          {category.icon}
                          {category.title}
                      </h2>
                  </div>
                  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                      {category.tools.slice(0, 10).map((tool, toolIndex) => (
                        <ToolCard tool={tool} key={`${category.title}-${tool.name}-${toolIndex}`}/>
                      ))}
                  </div>
              </section>
            ))}
        </div>
      </main>
    </div>
  );
}

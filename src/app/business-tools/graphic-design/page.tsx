'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Paintbrush, Star, Share2, Palette, Instagram, Youtube, Clapperboard, Megaphone, Tv, Layout, FileText, Globe, Gem, Braces, Smartphone, LayoutDashboard, BookOpen, Contact
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
            { name: 'Lucidpress (Marq)', description: 'Brand templating platform to create on-brand brochures.', url: 'https://www.marq.com/pages/brochures', image: 'https://picsum.photos/seed/lucidpress-brochure/600/400', dataAiHint: 'brand templates' },
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
    }
];

// Helper to get the correct icon for packaging since it's not in lucide-react by default
const Package = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
      <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
);


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
    <Link href={tool.url} target="_blank" rel="noopener noreferrer" className="block w-[280px] shrink-0 opacity-0 animate-fade-in-up">
        <Card 
            className="bg-white/80 border-none rounded-3xl soft-shadow transition-all duration-300 h-full group-hover:scale-[1.02] group-hover:shadow-lg overflow-hidden"
        >
            <div className="relative">
                <Image
                    src={tool.image}
                    alt={tool.name}
                    width={600}
                    height={400}
                    className="w-full h-auto aspect-[16/9] object-cover"
                    data-ai-hint={tool.dataAiHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-2 right-2 bg-primary/80 text-primary-foreground rounded-full p-2 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4"/>
                </div>
            </div>
            <div className='p-4'>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg font-bold text-foreground">{tool.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{tool.description}</p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 pl-2">
                        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleShareTool(e, tool)}>
                            <Share2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={(e) => handleFavouriteClick(e, tool.name)}>
                            <Star className={cn('w-5 h-5 transition-all', favouritedTools.has(tool.name) ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
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

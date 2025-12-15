
'use client';

import React from 'react';
import { 
    Gem, PenTool, ImagePlay, LayoutDashboard, BarChart, Type, Palette, Shapes, ImageIcon, Film, Sparkles
} from 'lucide-react';


export type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
    pricing: 'Free' | 'Paid' | 'Freemium';
};

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

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
        ]
    },
    {
        title: "Illustration & Drawing",
        icon: <PenTool className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Procreate', description: 'Powerful digital illustration app for iPad.', url: 'https://procreate.art/', image: 'https://picsum.photos/seed/procreate/600/400', dataAiHint: 'ipad drawing', pricing: 'Paid' },
            { name: 'Adobe Illustrator', description: 'Vector graphics and illustration.', url: 'https://www.adobe.com/products/illustrator.html', image: 'https://picsum.photos/seed/illustrator/600/400', dataAiHint: 'vector art', pricing: 'Paid' },
            { name: 'Fresco', description: 'Adobe\'s digital painting and drawing app.', url: 'https://www.adobe.com/products/fresco.html', image: 'https://picsum.photos/seed/fresco/600/400', dataAiHint: 'digital painting', pricing: 'Freemium' },
            { name: 'Clip Studio Paint', description: 'For drawing, painting, and animation.', url: 'https://www.clipstudio.net/en/', image: 'https://picsum.photos/seed/clipstudio/600/400', dataAiHint: 'manga art', pricing: 'Paid' },
            { name: 'Krita', description: 'Free and open source painting program.', url: 'https://krita.org/', image: 'https://picsum.photos/seed/krita/600/400', dataAiHint: 'open source paint', pricing: 'Free' },
        ]
    },
    {
        title: "Photo Editing & Retouching",
        icon: <ImagePlay className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Adobe Photoshop', description: 'The industry standard for image editing.', url: 'https://www.adobe.com/products/photoshop.html', image: 'https://picsum.photos/seed/photoshop-edit/600/400', dataAiHint: 'image editor', pricing: 'Paid' },
            { name: 'Luminar Neo', description: 'AI-powered photo editor.', url: 'https://skylum.com/luminar', image: 'https://picsum.photos/seed/luminar-neo/600/400', dataAiHint: 'ai photo', pricing: 'Paid' },
            { name: 'Topaz Photo AI', description: 'Maximize image quality on autopilot.', url: 'https://www.topazlabs.com/topaz-photo-ai', image: 'https://picsum.photos/seed/topaz-photo/600/400', dataAiHint: 'image quality', pricing: 'Paid' },
            { name: 'Affinity Photo', description: 'Professional image editing software.', url: 'https://affinity.serif.com/en-us/photo/', image: 'https://picsum.photos/seed/affinity-photo/600/400', dataAiHint: 'photo software', pricing: 'Paid' },
            { name: 'GIMP', description: 'Free &amp; open source image editor.', url: 'https://www.gimp.org/', image: 'https://picsum.photos/seed/gimp/600/400', dataAiHint: 'free editor', pricing: 'Free' },
        ]
    },
    {
        title: "UI/UX Design & Prototyping",
        icon: <LayoutDashboard className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Figma', description: 'Collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-ui/600/400', dataAiHint: 'ui design', pricing: 'Freemium' },
            { name: 'Sketch', description: 'The design platform for digital products.', url: 'https://www.sketch.com/', image: 'https://picsum.photos/seed/sketch-ui/600/400', dataAiHint: 'mac design', pricing: 'Paid' },
            { name: 'Adobe XD', description: 'UI/UX design and collaboration tool.', url: 'https://www.adobe.com/products/xd.html', image: 'https://picsum.photos/seed/adobexd-ui/600/400', dataAiHint: 'ux tool', pricing: 'Freemium' },
            { name: 'InVision', description: 'Digital product design and development platform.', url: 'https://www.invisionapp.com/', image: 'https://picsum.photos/seed/invision-ui/600/400', dataAiHint: 'prototyping tool', pricing: 'Freemium' },
            { name: 'Framer', description: 'Design, prototype, and build websites.', url: 'https://www.framer.com/', image: 'https://picsum.photos/seed/framer-ui/600/400', dataAiHint: 'website builder', pricing: 'Freemium' },
        ]
    },
    {
        title: "Infographics & Data Visualization",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Create infographics with an easy-to-use tool.', url: 'https://www.canva.com/create/infographics/', image: 'https://picsum.photos/seed/canva-info/600/400', dataAiHint: 'infographic maker', pricing: 'Freemium' },
            { name: 'Piktochart', description: 'Infographic, presentation, and report maker.', url: 'https://piktochart.com/', image: 'https://picsum.photos/seed/piktochart/600/400', dataAiHint: 'visual stories', pricing: 'Freemium' },
            { name: 'Venngage', description: 'Free infographic maker.', url: 'https://venngage.com/', image: 'https://picsum.photos/seed/venngage/600/400', dataAiHint: 'infographics', pricing: 'Freemium' },
            { name: 'Infogram', description: 'Create engaging infographics and reports.', url: 'https://infogram.com/', image: 'https://picsum.photos/seed/infogram/600/400', dataAiHint: 'data reports', pricing: 'Freemium' },
            { name: 'Visme', description: 'All-in-one visual content platform.', url: 'https://www.visme.co/', image: 'https://picsum.photos/seed/visme/600/400', dataAiHint: 'visual content', pricing: 'Freemium' },
        ]
    },
    {
        title: "Typography Tools",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Fonts', description: 'A library of free licensed font families.', url: 'https://fonts.google.com/', image: 'https://picsum.photos/seed/google-fonts/600/400', dataAiHint: 'free fonts', pricing: 'Free' },
            { name: 'Adobe Fonts', description: 'Thousands of beautiful fonts.', url: 'https://fonts.adobe.com/', image: 'https://picsum.photos/seed/adobe-fonts/600/400', dataAiHint: 'font library', pricing: 'Paid' },
            { name: 'Fontjoy', description: 'Font pairing made simple.', url: 'https://fontjoy.com/', image: 'https://picsum.photos/seed/fontjoy/600/400', dataAiHint: 'font pairing', pricing: 'Free' },
            { name: 'WhatFont', description: 'Browser extension to identify fonts on web pages.', url: 'https://www.chengyinliu.com/whatfont.html', image: 'https://picsum.photos/seed/whatfont/600/400', dataAiHint: 'identify font', pricing: 'Free' },
            { name: 'MyFonts', description: 'The #1 place for web fonts.', url: 'https://www.myfonts.com/', image: 'https://picsum.photos/seed/myfonts/600/400', dataAiHint: 'font store', pricing: 'Paid' },
        ]
    },
    {
        title: "Color Palette Generators",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Coolors', description: 'The super fast color palettes generator.', url: 'https://coolors.co/', image: 'https://picsum.photos/seed/coolors/600/400', dataAiHint: 'color schemes', pricing: 'Freemium' },
            { name: 'Adobe Color', description: 'Create color palettes with the color wheel.', url: 'https://color.adobe.com/', image: 'https://picsum.photos/seed/adobe-color/600/400', dataAiHint: 'color wheel', pricing: 'Free' },
            { name: 'Paletton', description: 'A tool for creating color combinations.', url: 'https://paletton.com/', image: 'https://picsum.photos/seed/paletton/600/400', dataAiHint: 'color combination', pricing: 'Free' },
            { name: 'Color Hunt', description: 'A free and open platform for color inspiration.', url: 'https://colorhunt.co/', image: 'https://picsum.photos/seed/colorhunt/600/400', dataAiHint: 'color inspiration', pricing: 'Free' },
            { name: 'Colormind', description: 'The AI-powered color palette generator.', url: 'http://colormind.io/', image: 'https://picsum.photos/seed/colormind/600/400', dataAiHint: 'ai color', pricing: 'Free' },
        ]
    },
    {
        title: "Mockup Generators",
        icon: <Shapes className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Smartmockups', description: 'Create stunning product mockups.', url: 'https://smartmockups.com/', image: 'https://picsum.photos/seed/smartmockups/600/400', dataAiHint: 'product mockups', pricing: 'Freemium' },
            { name: 'Placeit', description: 'Mockups, designs, logos and videos.', url: 'https://placeit.net/', image: 'https://picsum.photos/seed/placeit/600/400', dataAiHint: 'design mockups', pricing: 'Paid' },
            { name: 'Mockup World', description: 'Tons of free and legal, fully layered mockups.', url: 'https://www.mockupworld.co/', image: 'https://picsum.photos/seed/mockupworld/600/400', dataAiHint: 'free mockups', pricing: 'Free' },
            { name: 'Rotato', description: 'Create beautiful 3D mockups for your app.', url: 'https://rotato.app/', image: 'https://picsum.photos/seed/rotato/600/400', dataAiHint: '3d mockups', pricing: 'Paid' },
            { name: 'Artboard Studio', description: 'Online mockup and design tool.', url: 'https://artboard.studio/', image: 'https://picsum.photos/seed/artboard-studio/600/400', dataAiHint: 'online mockup', pricing: 'Freemium' },
        ]
    },
    {
        title: "Asset & Stock Photo Resources",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Unsplash', description: 'The internet’s source of freely-usable images.', url: 'https://unsplash.com/', image: 'https://picsum.photos/seed/unsplash-assets/600/400', dataAiHint: 'free images', pricing: 'Free' },
            { name: 'Pexels', description: 'Free stock photos and videos.', url: 'https://www.pexels.com/', image: 'https://picsum.photos/seed/pexels-assets/600/400', dataAiHint: 'free video', pricing: 'Free' },
            { name: 'Freepik', description: 'Find free vector art, illustrations, icons, PSD and photos.', url: 'https://www.freepik.com/', image: 'https://picsum.photos/seed/freepik-assets/600/400', dataAiHint: 'vector graphics', pricing: 'Freemium' },
            { name: 'Adobe Stock', description: 'High-quality, royalty-free stock images, photos, and videos.', url: 'https://stock.adobe.com/', image: 'https://picsum.photos/seed/adobestock-assets/600/400', dataAiHint: 'stock photos', pricing: 'Paid' },
            { name: 'Getty Images', description: 'Find high-resolution royalty-free images.', url: 'https://www.gettyimages.com/', image: 'https://picsum.photos/seed/gettyimages/600/400', dataAiHint: 'royalty-free', pricing: 'Paid' },
        ]
    },
    {
        title: "3D & Motion Graphics",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Blender', description: 'Free and open source 3D creation suite.', url: 'https://www.blender.org/', image: 'https://picsum.photos/seed/blender-3d/600/400', dataAiHint: '3d modeling', pricing: 'Free' },
            { name: 'Cinema 4D', description: '3D software for modeling, animation, and rendering.', url: 'https://www.maxon.net/en/cinema-4d', image: 'https://picsum.photos/seed/cinema4d/600/400', dataAiHint: 'motion graphics', pricing: 'Paid' },
            { name: 'Adobe After Effects', description: 'Visual effects and motion graphics software.', url: 'https://www.adobe.com/products/aftereffects.html', image: 'https://picsum.photos/seed/aftereffects/600/400', dataAiHint: 'visual effects', pricing: 'Paid' },
            { name: 'Houdini', description: '3D procedural software for VFX artists.', url: 'https://www.sidefx.com/', image: 'https://picsum.photos/seed/houdini/600/400', dataAiHint: 'vfx software', pricing: 'Paid' },
            { name: 'Spline', description: 'A 3D design tool for the web.', url: 'https://spline.design/', image: 'https://picsum.photos/seed/spline/600/400', dataAiHint: 'web 3d', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI-Powered Design Tools",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Uizard', description: 'AI-powered design tool for creating apps and websites.', url: 'https://uizard.io/', image: 'https://picsum.photos/seed/uizard/600/400', dataAiHint: 'ai design', pricing: 'Freemium' },
            { name: 'Khroma', description: 'The AI color tool for designers.', url: 'http://khroma.co/', image: 'https://picsum.photos/seed/khroma/600/400', dataAiHint: 'ai color', pricing: 'Free' },
            { name: 'Designs.ai', description: 'Create logos, videos, and more with AI.', url: 'https://designs.ai/', image: 'https://picsum.photos/seed/designsai-power/600/400', dataAiHint: 'creative ai', pricing: 'Freemium' },
            { name: 'Recraft', description: 'Generate and edit vector art, icons, and 3D images.', url: 'https://www.recraft.ai/', image: 'https://picsum.photos/seed/recraft-ai/600/400', dataAiHint: 'vector art', pricing: 'Freemium' },
            { name: 'Microsoft Designer', description: 'Stunning designs in a flash.', url: 'https://designer.microsoft.com/', image: 'https://picsum.photos/seed/ms-designer/600/400', dataAiHint: 'microsoft design', pricing: 'Free' },
        ]
    }
];

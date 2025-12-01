'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Brush, Youtube, MessageSquare, BookOpen, FileText, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, Video, ImageIcon, Film, Scissors, Mic2, BarChart, Tv, Users, Bot, Palette, Paintbrush, Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useFavourites } from '@/context/favourites-context';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';


type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
    pricing: 'Free' | 'Paid' | 'Freemium';
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
            { name: 'Midjourney', description: 'Generate high-quality images from text prompts.', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-t2i/600/400', dataAiHint: 'ai art', pricing: 'Paid' },
            { name: 'DALL·E 3', description: 'Create realistic images and art from a description.', url: 'https://openai.com/dall-e-3/', image: 'https://picsum.photos/seed/dalle-t2i/600/400', dataAiHint: 'openai image', pricing: 'Freemium' },
            { name: 'Leonardo AI', description: 'Produce stunning game assets, concept art, and more.', url: 'https://leonardo.ai/', image: 'https://picsum.photos/seed/leonardo-t2i/600/400', dataAiHint: 'game assets', pricing: 'Freemium' },
            { name: 'Stable Diffusion', description: 'A powerful open-source text-to-image model.', url: 'https://stablediffusionweb.com/', image: 'https://picsum.photos/seed/stable-diffusion-t2i/600/400', dataAiHint: 'image generation', pricing: 'Free' },
            { name: 'BlueWillow', description: 'A free-to-use AI image generator on Discord.', url: 'https://www.bluewillow.ai/', image: 'https://picsum.photos/seed/bluewillow-t2i/600/400', dataAiHint: 'discord ai', pricing: 'Freemium' },
            { name: 'Adobe Firefly', description: 'Generative AI for creative expression.', url: 'https://firefly.adobe.com/', image: 'https://picsum.photos/seed/firefly-t2i/600/400', dataAiHint: 'adobe ai', pricing: 'Freemium' },
            { name: 'Canva AI Image Generator', description: 'Create stunning visuals from text.', url: 'https://www.canva.com/ai-image-generator/', image: 'https://picsum.photos/seed/canva-t2i/600/400', dataAiHint: 'design ai', pricing: 'Freemium' },
            { name: 'NightCafe Creator', description: 'AI Art Generator. Create amazing artworks.', url: 'https://creator.nightcafe.studio/', image: 'https://picsum.photos/seed/nightcafe-t2i/600/400', dataAiHint: 'art creator', pricing: 'Freemium' },
            { name: 'Fotor AI Image Generator', description: 'Turn words into images in seconds.', url: 'https://www.fotor.com/features/ai-image-generator.html', image: 'https://picsum.photos/seed/fotor-t2i/600/400', dataAiHint: 'photo editor', pricing: 'Freemium' },
            { name: 'Bing Image Creator', description: 'Create AI images with DALL·E 3.', url: 'https://www.bing.com/images/create', image: 'https://picsum.photos/seed/bing-t2i/600/400', dataAiHint: 'microsoft ai', pricing: 'Free' },
            { name: 'DreamStudio', description: 'Stability AI\'s official image generation tool.', url: 'https://dreamstudio.ai/', image: 'https://picsum.photos/seed/dreamstudio/600/400', dataAiHint: 'stability ai', pricing: 'Paid' },
            { name: 'Artbreeder', description: 'Create and breed characters and scenes.', url: 'https://www.artbreeder.com/', image: 'https://picsum.photos/seed/artbreeder-t2i/600/400', dataAiHint: 'ai collage', pricing: 'Freemium' },
            { name: 'Playground AI', description: 'A free-to-use online AI image creator.', url: 'https://playground.com/', image: 'https://picsum.photos/seed/playground-t2i/600/400', dataAiHint: 'image creator', pricing: 'Freemium' },
            { name: 'WOMBO Dream', description: 'High quality artwork in seconds.', url: 'https://dream.ai/', image: 'https://picsum.photos/seed/wombo-t2i/600/400', dataAiHint: 'art app', pricing: 'Freemium' },
            { name: 'StarryAI', description: 'Generate art simply by describing what you want to see.', url: 'https://starryai.com/', image: 'https://picsum.photos/seed/starryai-t2i/600/400', dataAiHint: 'ai art', pricing: 'Freemium' },
            { name: 'Craiyon', description: 'Free AI image generator from text.', url: 'https://www.craiyon.com/', image: 'https://picsum.photos/seed/craiyon-t2i/600/400', dataAiHint: 'dalle mini', pricing: 'Freemium' },
            { name: 'DeepAI', description: 'AI-powered image generation.', url: 'https://deepai.org/machine-learning-model/text2img', image: 'https://picsum.photos/seed/deepai-t2i/600/400', dataAiHint: 'ml model', pricing: 'Freemium' },
            { name: 'Picsart', description: 'Turn your words into art with the AI Image Generator.', url: 'https://picsart.com/ai-image-generator', image: 'https://picsum.photos/seed/picsart-t2i/600/400', dataAiHint: 'photo editing', pricing: 'Freemium' },
            { name: 'Deep Dream Generator', description: 'Create inspiring visual content in a collaboration with our AI.', url: 'https://deepdreamgenerator.com/', image: 'https://picsum.photos/seed/deepdream-t2i/600/400', dataAiHint: 'visual content', pricing: 'Freemium' },
            { name: 'Jasper Art', description: 'AI image generator for teams.', url: 'https://www.jasper.ai/art', image: 'https://picsum.photos/seed/jasper-t2i/600/400', dataAiHint: 'team art', pricing: 'Paid' },
            { name: 'Photosonic', description: 'Writesonic\'s AI art generator.', url: 'https://writesonic.com/photosonic-ai-art-generator', image: 'https://picsum.photos/seed/photosonic-t2i/600/400', dataAiHint: 'art generator', pricing: 'Freemium' },
            { name: 'Simplified', description: 'Free AI Image Generator.', url: 'https://simplified.com/ai-image-generator/', image: 'https://picsum.photos/seed/simplified-t2i/600/400', dataAiHint: 'marketing ai', pricing: 'Freemium' },
            { name: 'CF Spark Art', description: 'AI Art Generator by Creative Fabrica.', url: 'https://www.creativefabrica.com/spark/art/', image: 'https://picsum.photos/seed/cfspark-t2i/600/400', dataAiHint: 'creative ai', pricing: 'Freemium' },
            { name: 'Dezgo', description: 'Text-to-Image Stable Diffusion AI.', url: 'https://dezgo.com/', image: 'https://picsum.photos/seed/dezgo-t2i/600/400', dataAiHint: 'stable diffusion', pricing: 'Freemium' },
            { name: 'Getimg.ai', description: 'Create amazing images with the power of AI.', url: 'https://getimg.ai/', image: 'https://picsum.photos/seed/getimg-t2i/600/400', dataAiHint: 'ai images', pricing: 'Freemium' },
            { name: 'Hotpot.ai', description: 'AI Art Generator. Turn imagination into art.', url: 'https://hotpot.ai/art-generator', image: 'https://picsum.photos/seed/hotpot-t2i/600/400', dataAiHint: 'ai graphics', pricing: 'Freemium' },
            { name: 'Imagine with Meta AI', description: 'Generate images with Meta\'s AI.', url: 'https://imagine.meta.com/', image: 'https://picsum.photos/seed/meta-t2i/600/400', dataAiHint: 'facebook ai', pricing: 'Free' },
            { name: 'Lexica', description: 'The Stable Diffusion search engine.', url: 'https://lexica.art/', image: 'https://picsum.photos/seed/lexica-t2i/600/400', dataAiHint: 'prompt search', pricing: 'Freemium' },
            { name: 'Mage.space', description: 'Free, fast & unfiltered Stable Diffusion.', url: 'https://www.mage.space/', image: 'https://picsum.photos/seed/mage-t2i/600/400', dataAiHint: 'unfiltered ai', pricing: 'Freemium' },
            { name: 'Neural.love', description: 'Free AI Image Generator & AI Enhance.', url: 'https://neural.love/', image: 'https://picsum.photos/seed/neurallove-t2i/600/400', dataAiHint: 'ai enhance', pricing: 'Freemium' },
            { name: 'OpenArt', description: 'Discover and generate AI art.', url: 'https://openart.ai/', image: 'https://picsum.photos/seed/openart-t2i/600/400', dataAiHint: 'art discovery', pricing: 'Freemium' },
            { name: 'Pinegraph', description: 'A magical AI art generator.', url: 'https://pinegraph.com/', image: 'https://picsum.photos/seed/pinegraph-t2i/600/400', dataAiHint: 'magic art', pricing: 'Freemium' },
            { name: 'PixAI.Art', description: 'High-quality anime AI art generator.', url: 'https://pixai.art/', image: 'https://picsum.photos/seed/pixai-t2i/600/400', dataAiHint: 'anime ai', pricing: 'Freemium' },
            { name: 'Pollinations', description: 'Your engine for personalized, AI-generated media.', url: 'https://pollinations.ai/', image: 'https://picsum.photos/seed/pollinations-t2i/600/400', dataAiHint: 'ai media', pricing: 'Free' },
            { name: 'Prompthero', description: 'Search the best AI prompts.', url: 'https://prompthero.com/', image: 'https://picsum.photos/seed/prompthero-t2i/600/400', dataAiHint: 'prompt engineering', pricing: 'Freemium' },
            { name: 'SeaArt.ai', description: 'A superior and free AI art generator.', url: 'https://www.seaart.ai/', image: 'https://picsum.photos/seed/seaart-t2i/600/400', dataAiHint: 'free art', pricing: 'Freemium' },
            { name: 'Shutterstock AI Image Generator', description: 'Create stunning visuals for your projects.', url: 'https://www.shutterstock.com/ai-image-generator', image: 'https://picsum.photos/seed/shutterstock-t2i/600/400', dataAiHint: 'stock ai', pricing: 'Paid' },
            { name: 'Snowpixel', description: 'Turn your text into artwork.', url: 'https://snowpixel.app/', image: 'https://picsum.photos/seed/snowpixel-t2i/600/400', dataAiHint: 'text to artwork', pricing: 'Paid' },
            { name: 'Stablecog', description: 'Free, easy to use, and open source AI image generator.', url: 'https://stablecog.com/', image: 'https://picsum.photos/seed/stablecog-t2i/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Tensor.Art', description: 'Free online Stable Diffusion AI Image Generator.', url: 'https://tensor.art/', image: 'https://picsum.photos/seed/tensorart-t2i/600/400', dataAiHint: 'sd models', pricing: 'Freemium' },
            { name: 'Vizcom', description: 'Bring your drawings to life in seconds.', url: 'https://www.vizcom.ai/', image: 'https://picsum.photos/seed/vizcom-t2i/600/400', dataAiHint: 'design rendering', pricing: 'Freemium' },
            { name: 'ArtSmart', description: 'AI Image Generator to create unique images.', url: 'https://artsmart.ai/', image: 'https://picsum.photos/seed/artsmart-t2i/600/400', dataAiHint: 'unique images', pricing: 'Paid' },
            { name: 'DiffusionBee', description: 'Stable Diffusion app for M1 Mac.', url: 'https://diffusionbee.com/', image: 'https://picsum.photos/seed/diffusionbee-t2i/600/400', dataAiHint: 'mac app', pricing: 'Free' },
            { name: 'Draw Things', description: 'AI-assisted image generation app for iOS.', url: 'https://drawthings.ai/', image: 'https://picsum.photos/seed/drawthings-t2i/600/400', dataAiHint: 'ios app', pricing: 'Free' },
            { name: 'Gencraft', description: 'The world\'s most powerful AI art generator.', url: 'https://gencraft.com/', image: 'https://picsum.photos/seed/gencraft-t2i/600/400', dataAiHint: 'art engine', pricing: 'Freemium' },
            { name: 'Ideo-gram', description: 'Generate images with reliable text.', url: 'https://ideogram.ai/', image: 'https://picsum.photos/seed/ideogram-t2i/600/400', dataAiHint: 'ai typography', pricing: 'Freemium' },
            { name: 'KREA', description: 'Real-time AI image generation.', url: 'https://www.krea.ai/', image: 'https://picsum.photos/seed/krea-t2i/600/400', dataAiHint: 'real-time', pricing: 'Freemium' },
            { name: 'Looka', description: 'AI-powered logo and brand identity.', url: 'https://looka.com/', image: 'https://picsum.photos/seed/looka-t2i/600/400', dataAiHint: 'logo maker', pricing: 'Paid' },
            { name: 'PicSo', description: 'AI Art Generator & Creative platform.', url: 'https://picso.ai/', image: 'https://picsum.photos/seed/picso-t2i/600/400', dataAiHint: 'creative platform', pricing: 'Freemium' },
            { name: 'Scribble Diffusion', description: 'Turn your sketch into a refined image.', url: 'https://scribblediffusion.com/', image: 'https://picsum.photos/seed/scribblediffusion-t2i/600/400', dataAiHint: 'sketch to image', pricing: 'Free' },
            { name: 'SoulGen', description: 'Create your soulmate with AI.', url: 'https://www.soulgen.ai/', image: 'https://picsum.photos/seed/soulgen-t2i/600/400', dataAiHint: 'anime generator', pricing: 'Freemium' },
        ]
    },
    {
        title: "Image-to-Image Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Stable Diffusion img2img', description: 'Transform existing images with text prompts.', url: 'https://stablediffusionweb.com/img2img', image: 'https://picsum.photos/seed/sd-img2img/600/400', dataAiHint: 'image transform', pricing: 'Free' },
            { name: 'Adobe Firefly', description: 'Generative Fill and image expansion features.', url: 'https://firefly.adobe.com/', image: 'https://picsum.photos/seed/firefly-img2img/600/400', dataAiHint: 'generative fill', pricing: 'Freemium' },
            { name: 'Midjourney Variations', description: 'Create variations of an existing Midjourney image.', url: 'https://docs.midjourney.com/docs/variations', image: 'https://picsum.photos/seed/midjourney-variations/600/400', dataAiHint: 'image variations', pricing: 'Paid' },
            { name: 'Playground AI', description: 'Edit and remix images with AI.', url: 'https://playground.com/', image: 'https://picsum.photos/seed/playground-img2img/600/400', dataAiHint: 'image remix', pricing: 'Freemium' },
            { name: 'Recraft AI', description: 'AI tool for generating and editing vector art.', url: 'https://www.recraft.ai/', image: 'https://picsum.photos/seed/recraft-img2img/600/400', dataAiHint: 'vector art', pricing: 'Freemium' },
            { name: 'KREA AI', description: 'Real-time image enhancement and generation.', url: 'https://www.krea.ai/', image: 'https://picsum.photos/seed/krea-img2img/600/400', dataAiHint: 'real-time enhance', pricing: 'Freemium' },
            { name: 'Luminar Neo', description: 'AI-driven photo editor with sky replacement and portrait tools.', url: 'https://skylum.com/luminar', image: 'https://picsum.photos/seed/luminar-img2img/600/400', dataAiHint: 'photo editor', pricing: 'Paid' },
            { name: 'Topaz Photo AI', description: 'Maximize image quality on autopilot.', url: 'https://www.topazlabs.com/topaz-photo-ai', image: 'https://picsum.photos/seed/topaz-img2img/600/400', dataAiHint: 'image quality', pricing: 'Paid' },
            { name: 'Runway ML Image Editing', description: 'A suite of AI magic tools for image manipulation.', url: 'https://runwayml.com/image-editing/', image: 'https://picsum.photos/seed/runway-img2img/600/400', dataAiHint: 'magic tools', pricing: 'Freemium' },
            { name: 'Pika Labs Image to Video', description: 'Animate your images to create videos.', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-img2img/600/400', dataAiHint: 'image animation', pricing: 'Freemium' },
            { name: 'Artbreeder Collager & Splicer', description: 'Combine images to create new ones.', url: 'https://www.artbreeder.com/', image: 'https://picsum.photos/seed/artbreeder-img2img/600/400', dataAiHint: 'image splice', pricing: 'Freemium' },
            { name: 'DeepArt.io', description: 'Turn any photo into artwork using AI.', url: 'https://deepart.io/', image: 'https://picsum.photos/seed/deepart-img2img/600/400', dataAiHint: 'neural style transfer', pricing: 'Freemium' },
            { name: 'Ostagram', description: 'Merge images to create unique artworks.', url: 'https://www.ostagram.me/', image: 'https://picsum.photos/seed/ostagram/600/400', dataAiHint: 'image merge', pricing: 'Freemium' },
            { name: 'GoArt', description: 'Fotor\'s AI art generator from photos.', url: 'https://www.fotor.com/goart/', image: 'https://picsum.photos/seed/goart/600/400', dataAiHint: 'photo to art', pricing: 'Freemium' },
            { name: 'Prisma', description: 'Turn your photos into art.', url: 'https://prisma-ai.com/', image: 'https://picsum.photos/seed/prisma-img2img/600/400', dataAiHint: 'photo effects', pricing: 'Freemium' },
            { name: 'Clipdrop', description: 'An ecosystem of apps, plugins & resources for all creators.', url: 'https://clipdrop.co/', image: 'https://picsum.photos/seed/clipdrop-img2img/600/400', dataAiHint: 'remove background', pricing: 'Freemium' },
            { name: 'Erase.bg', description: 'Free background remover.', url: 'https://www.erase.bg/', image: 'https://picsum.photos/seed/erasebg/600/400', dataAiHint: 'background remover', pricing: 'Freemium' },
            { name: 'Remove.bg', description: 'Remove image backgrounds automatically.', url: 'https://www.remove.bg/', image: 'https://picsum.photos/seed/removebg/600/400', dataAiHint: 'auto remove', pricing: 'Freemium' },
            { name: 'Magic Eraser', description: 'Remove unwanted things from images in seconds.', url: 'https://www.magiceraser.io/', image: 'https://picsum.photos/seed/magiceraser/600/400', dataAiHint: 'object removal', pricing: 'Freemium' },
            { name: 'Inpaint', description: 'Remove objects from your photos.', url: 'https://theinpaint.com/', image: 'https://picsum.photos/seed/inpaint/600/400', dataAiHint: 'photo restoration', pricing: 'Paid' },
            { name: 'Let\'s Enhance', description: 'Image enhancement and upscaling.', url: 'https://letsenhance.io/', image: 'https://picsum.photos/seed/letsenhance/600/400', dataAiHint: 'image upscaler', pricing: 'Freemium' },
            { name: 'Bigjpg', description: 'AI image enlarger.', url: 'https://bigjpg.com/', image: 'https://picsum.photos/seed/bigjpg/600/400', dataAiHint: 'anime upscale', pricing: 'Freemium' },
            { name: 'Waifu2x', description: 'Image scaling and noise reduction for anime-style art.', url: 'http://waifu2x.udp.jp/', image: 'https://picsum.photos/seed/waifu2x/600/400', dataAiHint: 'image scaling', pricing: 'Free' },
            { name: 'AI. Image Enlarger', description: 'Enlarge images without losing quality.', url: 'https://imglarger.com/', image: 'https://picsum.photos/seed/imglarger/600/400', dataAiHint: 'quality upscale', pricing: 'Freemium' },
            { name: 'MyHeritage Photo Tools', description: 'Colorize, enhance, and animate old photos.', url: 'https://www.myheritage.com/photo-enhancer', image: 'https://picsum.photos/seed/myheritage/600/400', dataAiHint: 'old photos', pricing: 'Freemium' },
            { name: 'Hotpot.ai AI Tools', description: 'Tools for colorizing, restoring, and more.', url: 'https://hotpot.ai/', image: 'https://picsum.photos/seed/hotpot-img2img/600/400', dataAiHint: 'photo restoration', pricing: 'Freemium' },
            { name: 'Palette.fm', description: 'AI colorizer for black and white photos.', url: 'https://palette.fm/', image: 'https://picsum.photos/seed/palettefm/600/400', dataAiHint: 'photo colorizer', pricing: 'Freemium' },
            { name: 'GFP-GAN', description: 'Practical algorithm for real-world face restoration.', url: 'https://replicate.com/tencentarc/gfpgan', image: 'https://picsum.photos/seed/gfpgan/600/400', dataAiHint: 'face restoration', pricing: 'Free' },
            { name: 'Codeformer', description: 'Robust face restoration algorithm.', url: 'https://replicate.com/sczhou/codeformer', image: 'https://picsum.photos/seed/codeformer/600/400', dataAiHint: 'face enhancement', pricing: 'Free' },
            { name: 'Autoenhance.ai', description: 'AI photo editing for real estate.', url: 'https://www.autoenhance.ai/', image: 'https://picsum.photos/seed/autoenhance/600/400', dataAiHint: 'real estate', pricing: 'Paid' },
            { name: 'Photoleap', description: 'Powerful photo editing app.', url: 'https://www.photoleap.com/', image: 'https://picsum.photos/seed/photoleap/600/400', dataAiHint: 'photo app', pricing: 'Freemium' },
            { name: 'FaceApp', description: 'AI face editor.', url: 'https://www.faceapp.com/', image: 'https://picsum.photos/seed/faceapp-img2img/600/400', dataAiHint: 'face editor', pricing: 'Freemium' },
            { name: 'Remini', description: 'AI photo and video enhancer.', url: 'https://remini.ai/', image: 'https://picsum.photos/seed/remini-img2img/600/400', dataAiHint: 'photo enhancer', pricing: 'Freemium' },
            { name: 'Ebsynth', description: 'Bring paintings to life.', url: 'https://ebsynth.com/', image: 'https://picsum.photos/seed/ebsynth-img2img/600/400', dataAiHint: 'video synthesis', pricing: 'Free' },
            { name: 'Vision of Chaos', description: 'GUI for various text-to-image models.', url: 'https://softology.pro/voc.html', image: 'https://picsum.photos/seed/voc/600/400', dataAiHint: 'ai gui', pricing: 'Free' },
            { name: 'PaintsChainer', description: 'AI-powered automatic colorization.', url: 'https://paintschainer.preferred.tech/index_en.html', image: 'https://picsum.photos/seed/paintschainer/600/400', dataAiHint: 'line art colorization', pricing: 'Free' },
            { name: 'Petalica Paint', description: 'Automatic coloring for line drawings.', url: 'https://petalica-paint.pixiv.dev/', image: 'https://picsum.photos/seed/petalica/600/400', dataAiHint: 'pixiv ai', pricing: 'Free' },
            { name: 'StyleGAN', description: 'NVIDIA\'s generative adversarial network for images.', url: 'https://github.com/NVlabs/stylegan', image: 'https://picsum.photos/seed/stylegan/600/400', dataAiHint: 'nvidia ai', pricing: 'Free' },
            { name: 'This Person Does Not Exist', description: 'Generates fake human faces.', url: 'https://this-person-does-not-exist.com/en', image: 'https://picsum.photos/seed/tpdne/600/400', dataAiHint: 'fake faces', pricing: 'Free' },
            { name: 'Face Swapper', description: 'Online tool to swap faces in photos.', url: 'https://faceswapper.online/', image: 'https://picsum.photos/seed/faceswapper/600/400', dataAiHint: 'face swap', pricing: 'Freemium' },
            { name: 'Reface', description: 'Face swap videos and memes.', url: 'https://reface.ai/', image: 'https://picsum.photos/seed/reface-img2img/600/400', dataAiHint: 'video face swap', pricing: 'Freemium' },
            { name: 'PhotoFunia', description: 'Free photo effects and online photo editor.', url: 'https://photofunia.com/', image: 'https://picsum.photos/seed/photofunia/600/400', dataAiHint: 'photo effects', pricing: 'Free' },
            { name: 'Deep Nostalgia', description: 'Animate the faces in your family photos.', url: 'https://www.myheritage.com/deep-nostalgia', image: 'https://picsum.photos/seed/deepnostalgia/600/400', dataAiHint: 'animate photos', pricing: 'Freemium' },
            { name: 'Avatarify', description: 'Animate a photo of a person to become a puppet.', url: 'https://github.com/alievk/avatarify-python', image: 'https://picsum.photos/seed/avatarify/600/400', dataAiHint: 'photo puppet', pricing: 'Free' },
            { name: 'ToonMe', description: 'Turn your portrait into a cartoon.', url: 'https://toonme.com/', image: 'https://picsum.photos/seed/toonme/600/400', dataAiHint: 'cartoon yourself', pricing: 'Freemium' },
            { name: 'VanceAI', description: 'AI photo enhancement and editing tools.', url: 'https://vanceai.com/', image: 'https://picsum.photos/seed/vanceai/600/400', dataAiHint: 'photo tools', pricing: 'Freemium' },
            { name: 'Cutout.Pro', description: 'AI photo and video editing.', url: 'https://www.cutout.pro/', image: 'https://picsum.photos/seed/cutoutpro/600/400', dataAiHint: 'video editing', pricing: 'Freemium' },
            { name: 'Slazzer', description: 'Instantly remove background from image.', url: 'https://www.slazzer.com/', image: 'https://picsum.photos/seed/slazzer/600/400', dataAiHint: 'background remover', pricing: 'Freemium' },
            { name: 'PhotoRoom', description: 'Create product pictures, remove backgrounds.', url: 'https://www.photoroom.com/', image: 'https://picsum.photos/seed/photoroom-img2img/600/400', dataAiHint: 'product photos', pricing: 'Freemium' },
            { name: 'Pixelcut', description: 'AI graphic designer.', url: 'https://www.pixelcut.ai/', image: 'https://picsum.photos/seed/pixelcut/600/400', dataAiHint: 'graphic designer', pricing: 'Freemium' },
        ]
    },
    {
        title: "Text-to-Video Tools",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway Gen-2', description: 'Generate video from text, images, or video clips.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-gen2/600/400', dataAiHint: 'ai video', pricing: 'Freemium' },
            { name: 'Pika Labs', description: 'AI video generator for creative ideas.', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pikalabs-t2v/600/400', dataAiHint: 'creative video', pricing: 'Freemium' },
            { name: 'Synthesia', description: 'Create AI videos with AI avatars and voiceovers.', url: 'https://www.synthesia.io/', image: 'https://picsum.photos/seed/synthesia-t2v/600/400', dataAiHint: 'ai avatar', pricing: 'Paid' },
            { name: 'Luma Dream Machine', description: 'Create high-quality, realistic videos from text.', url: 'https://lumalabs.ai/dream-machine', image: 'https://picsum.photos/seed/luma-dream/600/400', dataAiHint: 'realistic video', pricing: 'Freemium' },
            { name: 'HeyGen AI', description: 'AI video generator with talking avatars.', url: 'https://www.heygen.com/', image: 'https://picsum.photos/seed/heygen-t2v/600/400', dataAiHint: 'talking avatar', pricing: 'Freemium' },
            { name: 'InVideo AI', description: 'Generate publish-ready videos with text prompts.', url: 'https://invideo.io/ai', image: 'https://picsum.photos/seed/invideo-t2v/600/400', dataAiHint: 'video automation', pricing: 'Freemium' },
            { name: 'Pictory', description: 'Create videos from scripts or articles.', url: 'https://pictory.ai/', image: 'https://picsum.photos/seed/pictory-t2v/600/400', dataAiHint: 'article to video', pricing: 'Paid' },
            { name: 'Lumen5', description: 'Transform blog posts into videos.', url: 'https://lumen5.com/', image: 'https://picsum.photos/seed/lumen5-t2v/600/400', dataAiHint: 'blog to video', pricing: 'Freemium' },
            { name: 'Fliki', description: 'Turn text into videos with AI voices.', url: 'https://fliki.ai/', image: 'https://picsum.photos/seed/fliki-t2v/600/400', dataAiHint: 'ai voice video', pricing: 'Freemium' },
            { name: 'Deepbrain AI', description: 'Create realistic AI avatar videos.', url: 'https://www.deepbrain.io/', image: 'https://picsum.photos/seed/deepbrain-t2v/600/400', dataAiHint: 'hyperrealistic', pricing: 'Paid' },
            { name: 'Kaiber', description: 'Transform your ideas into visual stories.', url: 'https://www.kaiber.ai/', image: 'https://picsum.photos/seed/kaiber-t2v/600/400', dataAiHint: 'visual stories', pricing: 'Freemium' },
            { name: 'Veed.io', description: 'Online video editor with text-to-video features.', url: 'https://www.veed.io/tools/text-to-video-converter', image: 'https://picsum.photos/seed/veedio-t2v/600/400', dataAiHint: 'video converter', pricing: 'Freemium' },
            { name: 'Designs.ai Videomaker', description: 'Create videos instantly from text.', url: 'https://designs.ai/videomaker', image: 'https://picsum.photos/seed/designsai-t2v/600/400', dataAiHint: 'instant video', pricing: 'Freemium' },
            { name: 'Hour One', description: 'Turn text into presenter-led videos.', url: 'https://hourone.ai/', image: 'https://picsum.photos/seed/hourone-t2v/600/400', dataAiHint: 'presenter video', pricing: 'Paid' },
            { name: 'Colossyan Creator', description: 'Create videos with AI actors.', url: 'https://www.colossyan.com/', image: 'https://picsum.photos/seed/colossyan-t2v/600/400', dataAiHint: 'ai actors', pricing: 'Paid' },
            { name: 'Elai.io', description: 'Generate videos from text with a digital presenter.', url: 'https://elai.io/', image: 'https://picsum.photos/seed/elai-t2v/600/400', dataAiHint: 'digital presenter', pricing: 'Paid' },
            { name: 'Steve.AI', description: 'AI video maker for social media.', url: 'https://www.steve.ai/', image: 'https://picsum.photos/seed/steveai-t2v/600/400', dataAiHint: 'social media', pricing: 'Freemium' },
            { name: 'GliaCloud', description: 'Generate videos from news articles and stats.', url: 'https://www.gliacloud.com/', image: 'https://picsum.photos/seed/gliacloud-t2v/600/400', dataAiHint: 'news videos', pricing: 'Paid' },
            { name: 'Rephrase.ai', description: 'Create personalized videos at scale.', url: 'https://www.rephrase.ai/', image: 'https://picsum.photos/seed/rephrase-t2v/600/400', dataAiHint: 'personalized video', pricing: 'Paid' },
            { name: 'Yepic AI', description: 'Video translation and creation platform.', url: 'https://www.yepic.ai/', image: 'https://picsum.photos/seed/yepic-t2v/600/400', dataAiHint: 'video translation', pricing: 'Paid' },
            { name: 'Raw Shorts', description: 'AI-powered animated video maker.', url: 'https://www.rawshorts.com/', image: 'https://picsum.photos/seed/rawshorts-t2v/600/400', dataAiHint: 'animated video', pricing: 'Freemium' },
            { name: 'Wave.video', description: 'Online video maker with text-to-video.', url: 'https://wave.video/', image: 'https://picsum.photos/seed/wavevideo-t2v/600/400', dataAiHint: 'video marketing', pricing: 'Freemium' },
            { name: 'Animaker', description: 'Animated video maker with text-to-speech.', url: 'https://www.animaker.com/', image: 'https://picsum.photos/seed/animaker-t2v/600/400', dataAiHint: 'animation maker', pricing: 'Freemium' },
            { name: 'Moovly', description: 'Create videos from text templates.', url: 'https://www.moovly.com/', image: 'https://picsum.photos/seed/moovly-t2v/600/400', dataAiHint: 'video templates', pricing: 'Freemium' },
            { name: 'Vyond', description: 'Professional animated video software.', url: 'https://www.vyond.com/', image: 'https://picsum.photos/seed/vyond-t2v/600/400', dataAiHint: 'professional animation', pricing: 'Paid' },
            { name: 'Renderforest Video Maker', description: 'Create videos from text and scenes.', url: 'https://www.renderforest.com/video-maker.html', image: 'https://picsum.photos/seed/renderforest-t2v/600/400', dataAiHint: 'intro maker', pricing: 'Freemium' },
            { name: 'Biteable', description: 'Make videos from text and templates.', url: 'https://biteable.com/', image: 'https://picsum.photos/seed/biteable-t2v/600/400', dataAiHint: 'video templates', pricing: 'Freemium' },
            { name: 'Genmo', description: 'The creative copilot for video.', url: 'https://www.genmo.ai/', image: 'https://picsum.photos/seed/genmo-t2v/600/400', dataAiHint: 'video copilot', pricing: 'Freemium' },
            { name: 'Moonvalley', description: 'AI model for generating videos from text.', url: 'https://moonvalley.ai/', image: 'https://picsum.photos/seed/moonvalley-t2v/600/400', dataAiHint: 'cinematic video', pricing: 'Freemium' },
            { name: 'Sora by OpenAI', description: 'AI model that can create realistic and imaginative scenes.', url: 'https://openai.com/sora', image: 'https://picsum.photos/seed/sora-t2v/600/400', dataAiHint: 'realistic scenes', pricing: 'Paid' },
            { name: 'Vimeo AI', description: 'AI-powered video creation tools.', url: 'https://vimeo.com/features/ai-tools', image: 'https://picsum.photos/seed/vimeo-t2v/600/400', dataAiHint: 'video tools', pricing: 'Paid' },
            { name: 'Wibbitz', description: 'Automated video creation for publishers.', url: 'https://www.wibbitz.com/', image: 'https://picsum.photos/seed/wibbitz-t2v/600/400', dataAiHint: 'publisher video', pricing: 'Paid' },
            { name: 'Synthesizer V', description: 'Singing voice synthesis technology.', url: 'https://dreamtonics.com/en/synthesizerv/', image: 'https://picsum.photos/seed/synthv-t2v/600/400', dataAiHint: 'singing voice', pricing: 'Freemium' },
            { name: 'Artflow', description: 'Create animated stories with AI-generated assets.', url: 'https://www.artflow.ai/', image: 'https://picsum.photos/seed/artflow-t2v/600/400', dataAiHint: 'animated stories', pricing: 'Freemium' },
            { name: 'Vizard', description: 'AI video editor for content creators.', url: 'https://vizard.ai/', image: 'https://picsum.photos/seed/vizard-t2v/600/400', dataAiHint: 'content creator', pricing: 'Freemium' },
            { name: 'Make-A-Video by Meta', description: 'Meta\'s research on text-to-video generation.', url: 'https://makeavideo.studio/', image: 'https://picsum.photos/seed/makeavideo/600/400', dataAiHint: 'meta research', pricing: 'Free' },
            { name: 'Phenaki', description: 'Google\'s text-to-video model for longer videos.', url: 'https://phenaki.video/', image: 'https://picsum.photos/seed/phenaki/600/400', dataAiHint: 'google research', pricing: 'Free' },
            { name: 'Imagen Video by Google', description: 'High definition video generation model.', url: 'https://imagen.research.google/video/', image: 'https://picsum.photos/seed/imagen-t2v/600/400', dataAiHint: 'hd video', pricing: 'Free' },
            { name: 'NVIDIA AI Video', description: 'Research in AI-driven video synthesis.', url: 'https://www.nvidia.com/en-us/research/ai-video/', image: 'https://picsum.photos/seed/nvidia-t2v/600/400', dataAiHint: 'nvidia research', pricing: 'Free' },
            { name: 'Waymark', description: 'Instantly produce TV commercials.', url: 'https://waymark.com/', image: 'https://picsum.photos/seed/waymark-t2v/600/400', dataAiHint: 'tv commercials', pricing: 'Paid' },
            { name: 'Shuffll', description: 'AI-powered video creation service.', url: 'https://www.shuffll.com/', image: 'https://picsum.photos/seed/shuffll-t2v/600/400', dataAiHint: 'video service', pricing: 'Paid' },
            { name: 'Tavus', description: 'AI-powered personalized video generation.', url: 'https://www.tavus.io/', image: 'https://picsum.photos/seed/tavus-t2v/600/400', dataAiHint: 'ai personalization', pricing: 'Paid' },
            { name: 'MuseNet by OpenAI', description: 'Generate musical compositions.', url: 'https://openai.com/research/musenet', image: 'https://picsum.photos/seed/musenet-t2v/600/400', dataAiHint: 'music generation', pricing: 'Free' },
            { name: 'Jukebox by OpenAI', description: 'A neural net that generates music.', url: 'https://openai.com/research/jukebox', image: 'https://picsum.photos/seed/jukebox-t2v/600/400', dataAiHint: 'neural music', pricing: 'Free' },
            { name: 'Soundraw', description: 'AI music generator.', url: 'https://soundraw.io/', image: 'https://picsum.photos/seed/soundraw-t2v/600/400', dataAiHint: 'royalty-free music', pricing: 'Freemium' },
            { name: 'Boomy', description: 'Make instant music with artificial intelligence.', url: 'https://boomy.com/', image: 'https://picsum.photos/seed/boomy-t2v/600/400', dataAiHint: 'instant music', pricing: 'Freemium' },
            { name: 'AIVA', description: 'The AI composing emotional soundtrack music.', url: 'https://www.aiva.ai/', image: 'https://picsum.photos/seed/aiva-t2v/600/400', dataAiHint: 'soundtrack music', pricing: 'Freemium' },
            { name: 'Ecrett Music', description: 'AI music composer for creators.', url: 'https://ecrettmusic.com/', image: 'https://picsum.photos/seed/ecrett-t2v/600/400', dataAiHint: 'creator music', pricing: 'Paid' },
            { name: 'Amper Music', description: 'AI music composition tools (acquired by Shutterstock).', url: 'https://www.shutterstock.com/music/discover/amper-music', image: 'https://picsum.photos/seed/amper-t2v/600/400', dataAiHint: 'shutterstock music', pricing: 'Paid' },
        ]
    },
    {
        title: "Image-to-Video Tools",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Runway Motion Brush', description: 'Add controlled motion to still images.', url: 'https://runwayml.com/motion-brush/', image: 'https://picsum.photos/seed/runway-motionbrush/600/400', dataAiHint: 'image animation', pricing: 'Freemium' },
            { name: 'Pika Image Animation', description: 'Animate parts of your images with ease.', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-animation/600/400', dataAiHint: 'photo animation', pricing: 'Freemium' },
            { name: 'Kaiber AI', description: 'Transform your images into stunning videos.', url: 'https://www.kaiber.ai/', image: 'https://picsum.photos/seed/kaiber-i2v/600/400', dataAiHint: 'visual storytelling', pricing: 'Freemium' },
            { name: 'Genmo', description: 'Create videos from images and text prompts.', url: 'https://www.genmo.ai/', image: 'https://picsum.photos/seed/genmo-i2v/600/400', dataAiHint: 'generative video', pricing: 'Freemium' },
            { name: 'Viggle AI', description: 'AI video generator with character consistency.', url: 'https://viggle.ai/', image: 'https://picsum.photos/seed/viggle-ai/600/400', dataAiHint: 'character animation', pricing: 'Freemium' },
            { name: 'LeiaPix Converter', description: 'Convert 2D images to 3D lightfield images.', url: 'https://convert.leiapix.com/', image: 'https://picsum.photos/seed/leiapix/600/400', dataAiHint: '3d photo', pricing: 'Free' },
            { name: 'MyHeritage Deep Nostalgia', description: 'Animate the faces in your family photos.', url: 'https://www.myheritage.com/deep-nostalgia', image: 'https://picsum.photos/seed/deepnostalgia-i2v/600/400', dataAiHint: 'animate faces', pricing: 'Freemium' },
            { name: 'D-ID Creative Reality', description: 'Create videos from a single image.', url: 'https://www.d-id.com/', image: 'https://picsum.photos/seed/did-i2v/600/400', dataAiHint: 'talking photos', pricing: 'Freemium' },
            { name: 'CapCut Photo Animation', description: 'Add various animation effects to photos.', url: 'https://www.capcut.com/', image: 'https://picsum.photos/seed/capcut-i2v/600/400', dataAiHint: 'photo effects', pricing: 'Free' },
            { name: 'PhotoVibrance', description: 'Create moving images from static photos.', url: 'https://photovibrance.io/', image: 'https://picsum.photos/seed/photovibrance/600/400', dataAiHint: 'cinemagraph', pricing: 'Paid' },
            { name: 'Plotagraph', description: 'The leading photo animation software.', url: 'https://plotagraphs.com/', image: 'https://picsum.photos/seed/plotagraph/600/400', dataAiHint: 'looping photos', pricing: 'Paid' },
            { name: 'Motionleap by Lightricks', description: 'Photo animator and motion editor.', url: 'https://www.lightricks.com/motionleap', image: 'https://picsum.photos/seed/motionleap/600/400', dataAiHint: 'photo animator', pricing: 'Freemium' },
            { name: 'ImgPlay', description: 'GIF maker and video editor.', url: 'https://imgplay.net/', image: 'https://picsum.photos/seed/imgplay/600/400', dataAiHint: 'gif maker', pricing: 'Freemium' },
            { name: 'StoryZ', description: 'Photo video maker & cinemagraph.', url: 'https://storyzapp.com/', image: 'https://picsum.photos/seed/storyz/600/400', dataAiHint: 'ripple effect', pricing: 'Freemium' },
            { name: 'Vimage', description: 'Cinemagraph animator & live photo editor.', url: 'https://vimageapp.com/', image: 'https://picsum.photos/seed/vimage/600/400', dataAiHint: 'live photo', pricing: 'Freemium' },
            { name: 'Enlight Pixaloop', description: 'Now Motionleap. Photo animation app.', url: 'https://www.lightricks.com/motionleap', image: 'https://picsum.photos/seed/pixaloop/600/400', dataAiHint: 'photo motion', pricing: 'Freemium' },
            { name: 'Ebsynth', description: 'Bring paintings to life.', url: 'https://ebsynth.com/', image: 'https://picsum.photos/seed/ebsynth-i2v/600/400', dataAiHint: 'paint animation', pricing: 'Free' },
            { name: 'Artbreeder', description: 'Create and breed images, then animate them.', url: 'https://www.artbreeder.com/', image: 'https://picsum.photos/seed/artbreeder-i2v/600/400', dataAiHint: 'image breeding', pricing: 'Freemium' },
            { name: 'Animated Drawings by Meta', description: 'Bring children\'s drawings to life.', url: 'https://sketch.metademolab.com/', image: 'https://picsum.photos/seed/metadrawings/600/400', dataAiHint: 'drawing animation', pricing: 'Free' },
            { name: 'Reface', description: 'Swap faces in videos and GIFs.', url: 'https://reface.ai/', image: 'https://picsum.photos/seed/reface-i2v/600/400', dataAiHint: 'face swap video', pricing: 'Freemium' },
            { name: 'Avatarify', description: 'Animate a photo of a person to become a puppet.', url: 'https://github.com/alievk/avatarify-python', image: 'https://picsum.photos/seed/avatarify-i2v/600/400', dataAiHint: 'photo puppet', pricing: 'Free' },
            { name: 'Wombo', description: 'Make your selfies sing.', url: 'https://www.wombo.ai/', image: 'https://picsum.photos/seed/wombo-i2v/600/400', dataAiHint: 'lip sync', pricing: 'Freemium' },
            { name: 'Mug Life', description: '3D face animator.', url: 'https://www.muglife.com/', image: 'https://picsum.photos/seed/muglife/600/400', dataAiHint: 'face animation', pricing: 'Freemium' },
            { name: 'Talking Photos by Movio', description: 'Create talking photo videos.', url: 'https://www.movio.la/talking-photo', image: 'https://picsum.photos/seed/movio-i2v/600/400', dataAiHint: 'talking photo', pricing: 'Freemium' },
            { name: 'Synthesia', description: 'Create videos from text with a photo avatar.', url: 'https://www.synthesia.io/', image: 'https://picsum.photos/seed/synthesia-i2v/600/400', dataAiHint: 'photo avatar', pricing: 'Paid' },
            { name: 'HeyGen Photo Avatar', description: 'Turn a photo into a talking avatar.', url: 'https://www.heygen.com/photo-avatar', image: 'https://picsum.photos/seed/heygen-i2v/600/400', dataAiHint: 'avatar from photo', pricing: 'Freemium' },
            { name: 'Stable WarpFusion', description: 'A script for creating image-to-video animations.', url: 'https://github.com/Sxela/WarpFusion', image: 'https://picsum.photos/seed/warpfusion/600/400', dataAiHint: 'stable diffusion', pricing: 'Free' },
            { name: 'Deforum Stable Diffusion', description: 'Generate animations with Stable Diffusion.', url: 'https://github.com/deforum-art/deforum-stable-diffusion', image: 'https://picsum.photos/seed/deforum/600/400', dataAiHint: 'sd animation', pricing: 'Free' },
            { name: 'Photoshop Timeline', description: 'Create animations from image layers.', url: 'https://helpx.adobe.com/photoshop/using/creating-timeline-animations.html', image: 'https://picsum.photos/seed/photoshop-i2v/600/400', dataAiHint: 'frame animation', pricing: 'Paid' },
        ]
    },
    {
        title: "Text-to-Voice Tools",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ElevenLabs', description: 'The most realistic and versatile AI speech software.', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-t2v/600/400', dataAiHint: 'ai speech', pricing: 'Freemium' },
            { name: 'Play.ht', description: 'AI-powered text to voice generator.', url: 'https://play.ht/', image: 'https://picsum.photos/seed/playht-t2v/600/400', dataAiHint: 'voice generator', pricing: 'Freemium' },
            { name: 'Speechify', description: 'The #1 text-to-speech reader.', url: 'https://speechify.com/', image: 'https://picsum.photos/seed/speechify-t2v/600/400', dataAiHint: 'text reader', pricing: 'Freemium' },
            { name: 'Murf AI', description: 'Go from text to speech with a versatile AI voice generator.', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murfai-t2v/600/400', dataAiHint: 'ai voiceover', pricing: 'Freemium' },
            { name: 'NaturalReader', description: 'Powerful text-to-speech for home, work, and on the go.', url: 'https://www.naturalreaders.com/', image: 'https://picsum.photos/seed/naturalreader-t2v/600/400', dataAiHint: 'read aloud', pricing: 'Freemium' },
            { name: 'Lovo.ai', description: 'AI voice generator and text-to-speech platform.', url: 'https://lovo.ai/', image: 'https://picsum.photos/seed/lovo-t2v/600/400', dataAiHint: 'realistic voices', pricing: 'Freemium' },
            { name: 'Resemble.ai', description: 'AI voice generator for real-time voice cloning.', url: 'https://www.resemble.ai/', image: 'https://picsum.photos/seed/resemble-t2v/600/400', dataAiHint: 'voice cloning', pricing: 'Paid' },
            { name: 'WellSaid Labs', description: 'Create voiceovers with realistic AI voices.', url: 'https://wellsaidlabs.com/', image: 'https://picsum.photos/seed/wellsaid-t2v/600/400', dataAiHint: 'studio quality', pricing: 'Paid' },
            { name: 'Descript', description: 'All-in-one editor with Overdub voice cloning.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-t2v/600/400', dataAiHint: 'podcast editor', pricing: 'Freemium' },
            { name: 'Synthesys', description: 'AI video and voiceover generator.', url: 'https://synthesys.io/', image: 'https://picsum.photos/seed/synthesys-t2v/600/400', dataAiHint: 'commercial use', pricing: 'Paid' },
            { name: 'Google Cloud Text-to-Speech', description: 'Convert text into natural-sounding speech.', url: 'https://cloud.google.com/text-to-speech', image: 'https://picsum.photos/seed/google-t2s/600/400', dataAiHint: 'developer api', pricing: 'Paid' },
            { name: 'Amazon Polly', description: 'Turn text into lifelike speech.', url: 'https://aws.amazon.com/polly/', image: 'https://picsum.photos/seed/polly-t2s/600/400', dataAiHint: 'aws service', pricing: 'Paid' },
            { name: 'Microsoft Azure TTS', description: 'Lifelike speech synthesis.', url: 'https://azure.microsoft.com/en-us/products/ai-services/text-to-speech/', image: 'https://picsum.photos/seed/azure-t2s/600/400', dataAiHint: 'cognitive services', pricing: 'Paid' },
            { name: 'IBM Watson Text to Speech', description: 'Synthesize natural-sounding speech from text.', url: 'https://www.ibm.com/cloud/watson-text-to-speech', image: 'https://picsum.photos/seed/ibm-t2s/600/400', dataAiHint: 'watson ai', pricing: 'Freemium' },
            { name: 'Voicemaker', description: 'Online text to speech converter.', url: 'https://voicemaker.in/', image: 'https://picsum.photos/seed/voicemaker/600/400', dataAiHint: 'ssml support', pricing: 'Freemium' },
            { name: 'TTSMaker', description: 'Free online text-to-speech tool.', url: 'https://ttsmaker.com/', image: 'https://picsum.photos/seed/ttsmaker/600/400', dataAiHint: 'free tts', pricing: 'Free' },
            { name: 'FakeYou', description: 'Deep fake text to speech.', url: 'https://fakeyou.com/', image: 'https://picsum.photos/seed/fakeyou-t2s/600/400', dataAiHint: 'celebrity voices', pricing: 'Freemium' },
            { name: 'Uberduck', description: 'AI rap generator and voice automation.', url: 'https://uberduck.ai/', image: 'https://picsum.photos/seed/uberduck-t2s/600/400', dataAiHint: 'rap generator', pricing: 'Freemium' },
            { name: 'Notevibes', description: 'Realistic AI text to speech online.', url: 'https://notevibes.com/', image: 'https://picsum.photos/seed/notevibes-t2s/600/400', dataAiHint: 'mp3 download', pricing: 'Freemium' },
            { name: 'Speechelo', description: 'AI software that instantly transforms any text into a human-sounding voiceover.', url: 'https://speechelo.com/', image: 'https://picsum.photos/seed/speechelo/600/400', dataAiHint: 'voiceover tool', pricing: 'Paid' },
            { name: 'Voicepods', description: 'Create realistic, human-like voiceovers.', url: 'https://www.voicepods.com/', image: 'https://picsum.photos/seed/voicepods/600/400', dataAiHint: 'human-like', pricing: 'Paid' },
            { name: 'Wideo', description: 'Text-to-speech feature for animated videos.', url: 'https://wideo.co/', image: 'https://picsum.photos/seed/wideo-t2s/600/400', dataAiHint: 'video maker', pricing: 'Freemium' },
            { name: 'Woord', description: 'Turn your text into audio.', url: 'https://www.getwoord.com/', image: 'https://picsum.photos/seed/woord/600/400', dataAiHint: 'chrome extension', pricing: 'Freemium' },
            { name: 'Balabolka', description: 'Free text-to-speech program for Windows.', url: 'http://www.cross-plus-a.com/balabolka.htm', image: 'https://picsum.photos/seed/balabolka/600/400', dataAiHint: 'windows app', pricing: 'Free' },
            { name: 'Read Aloud', description: 'A Text to Speech voice reader browser extension.', url: 'https://readaloud.app/', image: 'https://picsum.photos/seed/readaloud-t2s/600/400', dataAiHint: 'browser extension', pricing: 'Free' },
            { name: 'Capti Voice', description: 'Listen to documents, books, and web pages.', url: 'https://www.captivoice.com/', image: 'https://picsum.photos/seed/capti/600/400', dataAiHint: 'dyslexia support', pricing: 'Freemium' },
            { name: 'VozFly', description: 'Online text to speech reader.', url: 'https://vozfly.com/', image: 'https://picsum.photos/seed/vozfly/600/400', dataAiHint: 'online reader', pricing: 'Free' },
            { name: 'Text-to-speech.online', description: 'Free and simple text to speech converter.', url: 'https://text-to-speech.online/', image: 'https://picsum.photos/seed/tts-online/600/400', dataAiHint: 'simple tts', pricing: 'Free' },
            { name: 'Fromtexttospeech.com', description: 'Free online TTS service.', url: 'https://www.fromtexttospeech.com/', image: 'https://picsum.photos/seed/ftts/600/400', dataAiHint: 'online service', pricing: 'Free' },
            { name: 'CereProc', description: 'Text-to-speech solutions for developers.', url: 'https://www.cereproc.com/', image: 'https://picsum.photos/seed/cereproc-t2s/600/400', dataAiHint: 'developer tts', pricing: 'Paid' },
            { name: 'Acapela Group', description: 'Text to speech solutions for various applications.', url: 'https://www.acapela-group.com/', image: 'https://picsum.photos/seed/acapela-t2s/600/400', dataAiHint: 'voice solutions', pricing: 'Paid' },
            { name: 'Readspeaker', description: 'Online text-to-speech solutions.', url: 'https://www.readspeaker.com/', image: 'https://picsum.photos/seed/readspeaker-t2s/600/400', dataAiHint: 'web accessibility', pricing: 'Paid' },
            { name: 'iSpeech', description: 'Text to speech and speech recognition.', url: 'https://www.ispeech.org/', image: 'https://picsum.photos/seed/ispeech-t2s/600/400', dataAiHint: 'speech recognition', pricing: 'Freemium' },
            { name: 'Trinity Audio', description: 'Turn readers into listeners.', url: 'https://trinityaudio.ai/', image: 'https://picsum.photos/seed/trinity-t2s/600/400', dataAiHint: 'audio articles', pricing: 'Paid' },
            { name: 'WebsiteVoice', description: 'Add voice to your website or blog.', url: 'https://websitevoice.com/', image: 'https://picsum.photos/seed/websitevoice/600/400', dataAiHint: 'website voice', pricing: 'Freemium' },
            { name: 'Vocalware', description: 'Text-to-Speech demo.', url: 'https://www.vocalware.com/index/demo', image: 'https://picsum.photos/seed/vocalware/600/400', dataAiHint: 'tts demo', pricing: 'Paid' },
            { name: 'TextAloud', description: 'Text to speech software for your PC.', url: 'https://nextup.com/textaloud/', image: 'https://picsum.photos/seed/textaloud/600/400', dataAiHint: 'pc software', pricing: 'Paid' },
            { name: 'Voice Dream Reader', description: 'Text-to-speech for mobile devices.', url: 'https://www.voicedream.com/reader/', image: 'https://picsum.photos/seed/voicedream/600/400', dataAiHint: 'mobile reader', pricing: 'Paid' },
            { name: 'Listnr', description: 'AI Voice Generator & Text to Speech Converter.', url: 'https://www.listnr.tech/', image: 'https://picsum.photos/seed/listnr-t2s/600/400', dataAiHint: 'podcast voices', pricing: 'Freemium' },
            { name: 'Voicera', description: 'Create lifelike voiceovers in minutes.', url: 'https://voicera.co/', image: 'https://picsum.photos/seed/voicera-t2s/600/400', dataAiHint: 'lifelike voice', pricing: 'Freemium' },
        ]
    },
    {
        title: "Voice-to-Voice Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Voicemod', description: 'Real-time AI voice changer and soundboard.', url: 'https://www.voicemod.net/', image: 'https://picsum.photos/seed/voicemod-v2v/600/400', dataAiHint: 'voice changer', pricing: 'Freemium' },
            { name: 'ElevenLabs Voice Clone', description: 'Create a digital copy of your own voice.', url: 'https://elevenlabs.io/voice-cloning', image: 'https://picsum.photos/seed/elevenlabs-v2v/600/400', dataAiHint: 'voice cloning', pricing: 'Paid' },
            { name: 'Descript Overdub', description: 'Create a text-to-speech model of your voice.', url: 'https://www.descript.com/overdub', image: 'https://picsum.photos/seed/descript-v2v/600/400', dataAiHint: 'ai voice', pricing: 'Freemium' },
            { name: 'RVC', description: 'Retrieval-based Voice Conversion models and tools.', url: 'https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI', image: 'https://picsum.photos/seed/rvc/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Cleanvoice AI', description: 'Automatically edit your podcast episodes.', url: 'https://cleanvoice.ai/', image: 'https://picsum.photos/seed/cleanvoice/600/400', dataAiHint: 'podcast editing', pricing: 'Paid' },
            { name: 'Respeecher', description: 'Voice cloning for content creators.', url: 'https://www.respeecher.com/', image: 'https://picsum.photos/seed/respeecher-v2v/600/400', dataAiHint: 'speech to speech', pricing: 'Paid' },
            { name: 'Altered Studio', description: 'Professional AI voice performance editor.', url: 'https://www.altered.ai/', image: 'https://picsum.photos/seed/altered-v2v/600/400', dataAiHint: 'voice performance', pricing: 'Paid' },
            { name: 'Voice.ai', description: 'Real-time voice changer for PC.', url: 'https://voice.ai/', image: 'https://picsum.photos/seed/voiceai-v2v/600/400', dataAiHint: 'pc voice changer', pricing: 'Freemium' },
            { name: 'Dubverse', description: 'AI-powered video dubbing.', url: 'https://dubverse.ai/', image: 'https://picsum.photos/seed/dubverse-v2v/600/400', dataAiHint: 'video dubbing', pricing: 'Freemium' },
            { name: 'Papercup', description: 'AI dubbing and video translation.', url: 'https://www.papercup.com/', image: 'https://picsum.photos/seed/papercup-v2v/600/400', dataAiHint: 'ai dubbing', pricing: 'Paid' },
            { name: 'Audo Studio', description: 'One-click audio cleaning and enhancement.', url: 'https://audo.ai/', image: 'https://picsum.photos/seed/audo-v2v/600/400', dataAiHint: 'noise removal', pricing: 'Freemium' },
            { name: 'Adobe Podcast Enhance', description: 'Remove noise and echo from voice recordings.', url: 'https://podcast.adobe.com/enhance', image: 'https://picsum.photos/seed/adobepodcast-v2v/600/400', dataAiHint: 'audio enhance', pricing: 'Free' },
            { name: 'Lalal.ai', description: 'Stem splitter and voice cleaner.', url: 'https://www.lalal.ai/', image: 'https://picsum.photos/seed/lalalai/600/400', dataAiHint: 'vocal remover', pricing: 'Freemium' },
            { name: 'Vocal Remover', description: 'Separate voice from music.', url: 'https://vocalremover.org/', image: 'https://picsum.photos/seed/vocalremover-v2v/600/400', dataAiHint: 'karaoke maker', pricing: 'Free' },
            { name: 'VoiceSwap', description: 'Transform your voice with AI.', url: 'https://www.voiceswap.ai/', image: 'https://picsum.photos/seed/voiceswap/600/400', dataAiHint: 'artist voices', pricing: 'Paid' },
            { name: 'Parodist', description: 'Celebrity voice pranks.', url: 'https://parodist.ai/', image: 'https://picsum.photos/seed/parodist/600/400', dataAiHint: 'celebrity voice', pricing: 'Freemium' },
            { name: 'Clownfish Voice Changer', description: 'Voice changing application for Windows.', url: 'https://clownfish-translator.com/voicechanger/', image: 'https://picsum.photos/seed/clownfish/600/400', dataAiHint: 'windows voice', pricing: 'Free' },
            { name: 'MorphVOX', description: 'Voice changer software.', url: 'https://screamingbee.com/morphvox-voice-changer', image: 'https://picsum.photos/seed/morphvox/600/400', dataAiHint: 'online games', pricing: 'Freemium' },
            { name: 'AV Voice Changer', description: 'Change your voice in real time.', url: 'https://www.audio4fun.com/voice-changer.htm', image: 'https://picsum.photos/seed/avvoice/600/400', dataAiHint: 'voice mastering', pricing: 'Paid' },
            { name: 'Voxal Voice Changer', description: 'Modify, change and disguise your voice.', url: 'https://www.nchsoftware.com/voicechanger/index.html', image: 'https://picsum.photos/seed/voxal/600/400', dataAiHint: 'voice disguise', pricing: 'Freemium' },
            { name: 'Revoice', description: 'The ultimate vocal production toolbox.', url: 'https://www.synchroarts.com/products/revoice-pro/overview', image: 'https://picsum.photos/seed/revoice/600/400', dataAiHint: 'vocal tuning', pricing: 'Paid' },
            { name: 'Melodyne', description: 'Correct and shape audio like never before.', url: 'https://www.celemony.com/en/melodyne', image: 'https://picsum.photos/seed/melodyne/600/400', dataAiHint: 'pitch correction', pricing: 'Paid' },
            { name: 'Auto-Tune', description: 'The industry standard for pitch correction.', url: 'https://www.antarestech.com/products/auto-tune', image: 'https://picsum.photos/seed/autotune/600/400', dataAiHint: 'vocal effects', pricing: 'Paid' },
            { name: 'iZotope RX', description: 'The industry standard for audio repair.', url: 'https://www.izotope.com/en/products/rx.html', image: 'https://picsum.photos/seed/izotoperx/600/400', dataAiHint: 'audio repair', pricing: 'Paid' },
            { name: 'Soundraw', description: 'AI music generator for videos.', url: 'https://soundraw.io/', image: 'https://picsum.photos/seed/soundraw-v2v/600/400', dataAiHint: 'ai music', pricing: 'Freemium' },
        ]
    },
    {
        title: "Script Writing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatGPT', description: 'Generative AI for brainstorming and writing scripts.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-script/600/400', dataAiHint: 'ai script', pricing: 'Freemium' },
            { name: 'Jasper.ai', description: 'AI content platform to help write video scripts.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-script/600/400', dataAiHint: 'video scripts', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'Generate high-quality marketing and script copy.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-script/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Writesonic', description: 'AI writer for creating SEO-friendly scripts.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-script/600/400', dataAiHint: 'seo script', pricing: 'Freemium' },
            { name: 'Rytr', description: 'An AI writing assistant for fast, affordable content.', url: 'https://rytr.me/', image: 'https://picsum.photos/seed/rytr-script/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Final Draft', description: 'The industry-standard screenwriting software.', url: 'https://www.finaldraft.com/', image: 'https://picsum.photos/seed/finaldraft/600/400', dataAiHint: 'screenwriting', pricing: 'Paid' },
            { name: 'Celtx', description: 'All-in-one studio for writing, planning, and shooting.', url: 'https://www.celtx.com/', image: 'https://picsum.photos/seed/celtx/600/400', dataAiHint: 'pre-production', pricing: 'Freemium' },
            { name: 'Scrivener', description: 'A powerful content-generation tool for writers.', url: 'https://www.literatureandlatte.com/scrivener/overview', image: 'https://picsum.photos/seed/scrivener-script/600/400', dataAiHint: 'novel writing', pricing: 'Paid' },
            { name: 'Trelby', description: 'Free, simple, and elegantly laid out screenwriting program.', url: 'https://www.trelby.org/', image: 'https://picsum.photos/seed/trelby/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'WriterDuet', description: 'Real-time collaborative screenwriting software.', url: 'https://writerduet.com/', image: 'https://picsum.photos/seed/writerduet/600/400', dataAiHint: 'collaboration', pricing: 'Freemium' },
            { name: 'Fade In', description: 'Professional screenwriting software.', url: 'https://www.fadeinpro.com/', image: 'https://picsum.photos/seed/fadein/600/400', dataAiHint: 'pro screenwriting', pricing: 'Paid' },
            { name: 'Arc Studio Pro', description: 'Screenwriting software for the 21st century.', url: 'https://www.arcstudiopro.com/', image: 'https://picsum.photos/seed/arcstudio/600/400', dataAiHint: 'modern writing', pricing: 'Freemium' },
            { name: 'Highland 2', description: 'A better way to write. For Mac.', url: 'https://quoteunquoteapps.com/highland-2/', image: 'https://picsum.photos/seed/highland2-script/600/400', dataAiHint: 'mac writing', pricing: 'Paid' },
            { name: 'Slugline', description: 'Simple, elegant screenwriting for Mac.', url: 'https://slugline.co/', image: 'https://picsum.photos/seed/slugline-script/600/400', dataAiHint: 'minimalist', pricing: 'Paid' },
            { name: 'KIT Scenarist', description: 'Free and open-source screenwriting software.', url: 'https://kitscenarist.ru/en/', image: 'https://picsum.photos/seed/kitscenarist/600/400', dataAiHint: 'scenarist tool', pricing: 'Free' },
            { name: 'Plottr', description: 'Visually plot your books and movie scripts.', url: 'https://plottr.com/', image: 'https://picsum.photos/seed/plottr-script/600/400', dataAiHint: 'visual outlining', pricing: 'Paid' },
            { name: 'Save the Cat!', description: 'Story structure software for screenwriters.', url: 'https://savethecat.com/', image: 'https://picsum.photos/seed/savethecat-script/600/400', dataAiHint: 'beat sheet', pricing: 'Paid' },
            { name: 'StudioBinder', description: 'Production management software with scriptwriting features.', url: 'https://www.studiobinder.com/', image: 'https://picsum.photos/seed/studiobinder-script/600/400', dataAiHint: 'call sheets', pricing: 'Freemium' },
            { name: 'Squibler', description: 'The writing app for authors and screenwriters.', url: 'https://www.squibler.io/', image: 'https://picsum.photos/seed/squibler-script/600/400', dataAiHint: 'book writing', pricing: 'Paid' },
            { name: 'Boords', description: 'The modern storyboarding & animatic tool.', url: 'https://boords.com/', image: 'https://picsum.photos/seed/boords-script/600/400', dataAiHint: 'storyboarding', pricing: 'Paid' },
            { name: 'Notion', description: 'Use templates for scriptwriting and story planning.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-script/600/400', dataAiHint: 'writing templates', pricing: 'Freemium' },
            { name: 'Milanote', description: 'An easy-to-use tool to organize your ideas and projects.', url: 'https://milanote.com/', image: 'https://picsum.photos/seed/milanote-script/600/400', dataAiHint: 'visual board', pricing: 'Freemium' },
            { name: 'Causality', description: 'A new kind of writing app where you develop your story visually.', url: 'https://www.causality.io/', image: 'https://picsum.photos/seed/causality-script/600/400', dataAiHint: 'story visualization', pricing: 'Paid' },
            { name: 'DramaQueen', description: 'The author\'s software for plot, characters, and story.', url: 'https://dramaqueen.info/en/', image: 'https://picsum.photos/seed/dramaqueen-script/600/400', dataAiHint: 'plot development', pricing: 'Freemium' },
            { name: 'Wavemaker Cards', description: 'Free novel writing & planning software.', url: 'https://wavemaker.co.uk/', image: 'https://picsum.photos/seed/wavemaker-script/600/400', dataAiHint: 'planning software', pricing: 'Free' },
        ]
    },
    {
        title: "Video Editing Tools",
        icon: <Scissors className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CapCut', description: 'Free all-in-one video editor for everyone.', url: 'https://www.capcut.com/', image: 'https://picsum.photos/seed/capcut-editing/600/400', dataAiHint: 'video editor', pricing: 'Free' },
            { name: 'Adobe Premiere Pro', description: 'Professional video editing software.', url: 'https://www.adobe.com/products/premiere.html', image: 'https://picsum.photos/seed/premierepro/600/400', dataAiHint: 'pro editing', pricing: 'Paid' },
            { name: 'DaVinci Resolve', description: 'Color correction, visual effects, and audio post-production.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', image: 'https://picsum.photos/seed/davinci/600/400', dataAiHint: 'color grading', pricing: 'Freemium' },
            { name: 'Filmora', description: 'Easy-to-use video editing software.', url: 'https://filmora.wondershare.com/', image: 'https://picsum.photos/seed/filmora-editing/600/400', dataAiHint: 'user friendly', pricing: 'Freemium' },
            { name: 'Final Cut Pro', description: 'Professional video editing for Apple devices.', url: 'https://www.apple.com/final-cut-pro/', image: 'https://picsum.photos/seed/finalcut/600/400', dataAiHint: 'apple editing', pricing: 'Paid' },
            { name: 'Veed.io', description: 'Online video editor with AI features.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-editing/600/400', dataAiHint: 'online editor', pricing: 'Freemium' },
            { name: 'Descript', description: 'Edit video by editing text.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-editing/600/400', dataAiHint: 'text-based editing', pricing: 'Freemium' },
            { name: 'Runway', description: 'AI Magic Tools for video makers.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-editing/600/400', dataAiHint: 'ai magic', pricing: 'Freemium' },
            { name: 'InVideo', description: 'Online video editor and maker.', url: 'https://invideo.io/', image: 'https://picsum.photos/seed/invideo-editing/600/400', dataAiHint: 'video templates', pricing: 'Freemium' },
            { name: 'Clipchamp', description: 'Microsoft\'s free video editor.', url: 'https://clipchamp.com/', image: 'https://picsum.photos/seed/clipchamp-editing/600/400', dataAiHint: 'free editor', pricing: 'Free' },
            { name: 'Kapwing', description: 'Collaborative online video editor.', url: 'https://www.kapwing.com/', image: 'https://picsum.photos/seed/kapwing-editing/600/400', dataAiHint: 'team editor', pricing: 'Freemium' },
            { name: 'Wisecut', description: 'AI-powered video editor that automatically removes pauses.', url: 'https://www.wisecut.video/', image: 'https://picsum.photos/seed/wisecut-editing/600/400', dataAiHint: 'auto editor', pricing: 'Freemium' },
            { name: 'Gling', description: 'AI that cuts silences and bad takes for you.', url: 'https://gling.ai/', image: 'https://picsum.photos/seed/gling-editing/600/400', dataAiHint: 'youtube editor', pricing: 'Freemium' },
            { name: 'Timebolt', description: 'Automatically cut silences in videos.', url: 'https://www.timebolt.io/', image: 'https://picsum.photos/seed/timebolt-editing/600/400', dataAiHint: 'silence cutter', pricing: 'Paid' },
            { name: 'Kdenlive', description: 'Free and open source video editor.', url: 'https://kdenlive.org/', image: 'https://picsum.photos/seed/kdenlive/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Shotcut', description: 'Free, open source, cross-platform video editor.', url: 'https://shotcut.org/', image: 'https://picsum.photos/seed/shotcut/600/400', dataAiHint: 'cross-platform', pricing: 'Free' },
            { name: 'OpenShot', description: 'Easy to use, quick to learn, and surprisingly powerful video editor.', url: 'https://www.openshot.org/', image: 'https://picsum.photos/seed/openshot/600/400', dataAiHint: 'powerful editor', pricing: 'Free' },
            { name: 'Blender', description: 'Free and open source 3D creation suite with a built-in video editor.', url: 'https://www.blender.org/features/video-editing/', image: 'https://picsum.photos/seed/blender-editing/600/400', dataAiHint: '3d editor', pricing: 'Free' },
            { name: 'LumaFusion', description: 'Professional video editing for mobile.', url: 'https://luma-touch.com/lumafusion-for-ios/', image: 'https://picsum.photos/seed/lumafusion/600/400', dataAiHint: 'mobile editing', pricing: 'Paid' },
            { name: 'PowerDirector', description: 'Video editing software for all skill levels.', url: 'https://www.cyberlink.com/products/powerdirector-video-editing-software/', image: 'https://picsum.photos/seed/powerdirector/600/400', dataAiHint: 'all levels', pricing: 'Freemium' },
            { name: 'Pinnacle Studio', description: 'Advanced video editing and screen recording.', url: 'https://www.pinnaclesys.com/', image: 'https://picsum.photos/seed/pinnacle/600/400', dataAiHint: 'advanced editing', pricing: 'Paid' },
            { name: 'Corel VideoStudio', description: 'Fun and easy video editing software.', url: 'https://www.videostudiopro.com/', image: 'https://picsum.photos/seed/videostudio/600/400', dataAiHint: 'fun editing', pricing: 'Paid' },
            { name: 'Vegas Pro', description: 'Professional video & audio editing and disc authoring.', url: 'https://www.vegascreativesoftware.com/', image: 'https://picsum.photos/seed/vegaspro/600/400', dataAiHint: 'audio editing', pricing: 'Paid' },
            { name: 'HitFilm', description: 'The all-in-one video editor & VFX software.', url: 'https://fxhome.com/hitfilm', image: 'https://picsum.photos/seed/hitfilm/600/400', dataAiHint: 'vfx software', pricing: 'Freemium' },
            { name: 'Lightworks', description: 'The professional video editor for everyone.', url: 'https://lwks.com/', image: 'https://picsum.photos/seed/lightworks/600/400', dataAiHint: 'hollywood editor', pricing: 'Freemium' },
            { name: 'Avid Media Composer', description: 'The industry\'s most trusted video editing software.', url: 'https://www.avid.com/media-composer', image: 'https://picsum.photos/seed/avid/600/400', dataAiHint: 'film editing', pricing: 'Paid' },
            { name: 'WeVideo', description: 'The online video editor for everyone.', url: 'https://www.wevideo.com/', image: 'https://picsum.photos/seed/wevideo-editing/600/400', dataAiHint: 'education video', pricing: 'Freemium' },
            { name: 'Movavi Video Editor', description: 'Your go-to video creator.', url: 'https://www.movavi.com/video-editor-plus/', image: 'https://picsum.photos/seed/movavi/600/400', dataAiHint: 'video creator', pricing: 'Paid' },
            { name: 'Magisto', description: 'Smart video editor powered by A.I.', url: 'https://www.magisto.com/', image: 'https://picsum.photos/seed/magisto-editing/600/400', dataAiHint: 'vimeo create', pricing: 'Freemium' },
            { name: 'FlexClip', description: 'Free online video editor & maker.', url: 'https://www.flexclip.com/', image: 'https://picsum.photos/seed/flexclip-editing/600/400', dataAiHint: 'video maker', pricing: 'Freemium' },
            { name: 'Opus Clip', description: 'Turn long videos into viral shorts.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opusclip-editing/600/400', dataAiHint: 'short clips', pricing: 'Freemium' },
            { name: 'Vidyo.ai', description: 'Make short videos from long ones instantly.', url: 'https://vidyo.ai/', image: 'https://picsum.photos/seed/vidyo-editing/600/400', dataAiHint: 'repurpose content', pricing: 'Freemium' },
            { name: 'Type Studio', description: 'Text-based video editor.', url: 'https://www.typestudio.co/', image: 'https://picsum.photos/seed/typestudio-editing/600/400', dataAiHint: 'video transcript', pricing: 'Freemium' },
            { name: 'Kamua', description: 'Automated video editing for creators.', url: 'https://kamua.com/', image: 'https://picsum.photos/seed/kamua-editing/600/400', dataAiHint: 'creator tool', pricing: 'Paid' },
            { name: 'Topaz Video AI', description: 'Video enhancement and upscaling.', url: 'https://www.topazlabs.com/topaz-video-ai', image: 'https://picsum.photos/seed/topaz-editing/600/400', dataAiHint: 'video enhance', pricing: 'Paid' },
        ]
    },
    {
        title: "Reels/Shorts Creation Tools",
        icon: <Youtube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CapCut Templates', description: 'Use trending templates to create short videos quickly.', url: 'https://www.capcut.com/templates', image: 'https://picsum.photos/seed/capcut-templates/600/400', dataAiHint: 'trending templates', pricing: 'Free' },
            { name: 'VN Editor', description: 'Free and professional video editor for mobile.', url: 'https://www.vlognow.me/', image: 'https://picsum.photos/seed/vn-editor/600/400', dataAiHint: 'mobile editor', pricing: 'Free' },
            { name: 'InShot', description: 'A powerful mobile video and photo editor.', url: 'https://inshot.com/', image: 'https://picsum.photos/seed/inshot-reels/600/400', dataAiHint: 'photo video', pricing: 'Freemium' },
            { name: 'Mojo', description: 'Create stunning animated social stories and videos.', url: 'https://www.mojo-app.com/', image: 'https://picsum.photos/seed/mojo-reels/600/400', dataAiHint: 'animated stories', pricing: 'Freemium' },
            { name: 'Opus Clip', description: 'Turn long videos into viral short clips with AI.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opus-reels/600/400', dataAiHint: 'ai clipping', pricing: 'Freemium' },
            { name: 'Vidyo.ai', description: 'Make short videos from long ones instantly.', url: 'https://vidyo.ai/', image: 'https://picsum.photos/seed/vidyo-reels/600/400', dataAiHint: 'content repurposing', pricing: 'Freemium' },
            { name: 'Veed.io', description: 'Online editor for creating short-form video content.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-reels/600/400', dataAiHint: 'online shorts', pricing: 'Freemium' },
            { name: 'Canva', description: 'Design engaging Reels and TikTok videos.', url: 'https://www.canva.com/videos/', image: 'https://picsum.photos/seed/canva-reels/600/400', dataAiHint: 'tiktok video', pricing: 'Freemium' },
            { name: 'Adobe Express', description: 'Free online video editor for social content.', url: 'https://www.adobe.com/express/create/video', image: 'https://picsum.photos/seed/express-reels/600/400', dataAiHint: 'social video', pricing: 'Freemium' },
            { name: 'Lumen5', description: 'AI-powered platform for creating social videos.', url: 'https://lumen5.com/', image: 'https://picsum.photos/seed/lumen5-reels/600/400', dataAiHint: 'social video', pricing: 'Freemium' },
            { name: 'GoPro Quik', description: 'Auto-edits your footage.', url: 'https://gopro.com/en/us/shop/quik-app-video-photo-editor', image: 'https://picsum.photos/seed/quik-reels/600/400', dataAiHint: 'auto edit', pricing: 'Freemium' },
            { name: 'Magisto', description: 'Smart video editor and maker.', url: 'https://www.magisto.com/', image: 'https://picsum.photos/seed/magisto-reels/600/400', dataAiHint: 'smart editor', pricing: 'Freemium' },
            { name: 'Splice', description: 'Powerful mobile video editor.', url: 'https://spliceapp.com/', image: 'https://picsum.photos/seed/splice-reels/600/400', dataAiHint: 'mobile video', pricing: 'Freemium' },
            { name: 'FilmoraGo', description: 'Mobile version of Filmora video editor.', url: 'https://filmora.wondershare.com/filmorago-video-editing-app/', image: 'https://picsum.photos/seed/filmorago-reels/600/400', dataAiHint: 'mobile filmora', pricing: 'Freemium' },
            { name: 'KineMaster', description: 'Pro video editor for mobile.', url: 'https://www.kinemaster.com/', image: 'https://picsum.photos/seed/kinemaster-reels/600/400', dataAiHint: 'pro mobile', pricing: 'Freemium' },
            { name: 'PowerDirector App', description: 'Mobile video editor with powerful features.', url: 'https://www.cyberlink.com/products/powerdirector-mobile-video-editor-app/', image: 'https://picsum.photos/seed/powerdirector-reels/600/400', dataAiHint: 'powerful mobile', pricing: 'Freemium' },
            { name: 'Funimate', description: 'Video editor with transitions, effects, and music.', url: 'https://funimate.com/', image: 'https://picsum.photos/seed/funimate/600/400', dataAiHint: 'video effects', pricing: 'Freemium' },
            { name: 'Likee', description: 'Short video creation platform.', url: 'https://likee.video/', image: 'https://picsum.photos/seed/likee/600/400', dataAiHint: 'short video app', pricing: 'Free' },
            { name: 'Triller', description: 'AI-powered music video app.', url: 'https://triller.co/', image: 'https://picsum.photos/seed/triller/600/400', dataAiHint: 'music video', pricing: 'Free' },
            { name: 'Beat.ly', description: 'Music video maker with effects.', url: '#', image: 'https://picsum.photos/seed/beatly/600/400', dataAiHint: 'music effects', pricing: 'Freemium' },
            { name: 'Clash', description: 'Short-form video platform for creators.', url: 'https://clashapp.co/', image: 'https://picsum.photos/seed/clash/600/400', dataAiHint: 'creator platform', pricing: 'Free' },
            { name: 'Lomotif', description: 'Edit videos with music and effects.', url: 'https://lomotif.com/', image: 'https://picsum.photos/seed/lomotif/600/400', dataAiHint: 'video music', pricing: 'Free' },
            { name: 'Unfold', description: 'Create beautiful stories & posts.', url: 'https://unfold.com/', image: 'https://picsum.photos/seed/unfold-reels/600/400', dataAiHint: 'story templates', pricing: 'Freemium' },
            { name: 'StoryArt', description: 'Instagram story editor.', url: '#', image: 'https://picsum.photos/seed/storyart/600/400', dataAiHint: 'insta story', pricing: 'Freemium' },
            { name: 'Tezza', description: 'Photo & video editor with aesthetic presets.', url: 'https://www.shoptezza.com/app', image: 'https://picsum.photos/seed/tezza-reels/600/400', dataAiHint: 'aesthetic presets', pricing: 'Freemium' },
            { name: 'Prequel', description: 'Aesthetic editor with effects & filters.', url: 'https://prequel.app/', image: 'https://picsum.photos/seed/prequel/600/400', dataAiHint: 'aesthetic filters', pricing: 'Freemium' },
            { name: 'Efectum', description: 'Slow motion, fast motion, and reverse video editor.', url: '#', image: 'https://picsum.photos/seed/efectum/600/400', dataAiHint: 'slow motion', pricing: 'Freemium' },
            { name: 'Videoshop', description: 'Personalized video editor.', url: 'http://www.videoshop.net/', image: 'https://picsum.photos/seed/videoshop/600/400', dataAiHint: 'personalized video', pricing: 'Freemium' },
            { name: 'VLLO', description: 'Easy video editing app.', url: 'https://www.vllo.io/', image: 'https://picsum.photos/seed/vllo/600/400', dataAiHint: 'easy editing', pricing: 'Freemium' },
            { name: 'YouCut', description: 'Video editor & video maker, no watermark.', url: '#', image: 'https://picsum.photos/seed/youcut/600/400', dataAiHint: 'no watermark', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Video Generation Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Pictory', description: 'Create videos from scripts or blog posts automatically.', url: 'https://pictory.ai/', image: 'https://picsum.photos/seed/pictory-ai-gen/600/400', dataAiHint: 'script to video', pricing: 'Paid' },
            { name: 'InVideo AI', description: 'Generate videos from text prompts.', url: 'https://invideo.io/ai', image: 'https://picsum.photos/seed/invideo-ai-gen/600/400', dataAiHint: 'text prompt', pricing: 'Freemium' },
            { name: 'Lumen5', description: 'AI-powered video creation platform for brands.', url: 'https://lumen5.com/', image: 'https://picsum.photos/seed/lumen5-ai-gen/600/400', dataAiHint: 'brand video', pricing: 'Freemium' },
            { name: 'Synthesia', description: 'Create professional videos with AI avatars.', url: 'https://www.synthesia.io/', image: 'https://picsum.photos/seed/synthesia-ai-gen/600/400', dataAiHint: 'professional video', pricing: 'Paid' },
            { name: 'Runway ML', description: 'Advanced AI magic tools for video generation and editing.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-ai-gen/600/400', dataAiHint: 'video editing', pricing: 'Freemium' },
            { name: 'Pika Labs', description: 'Idea-to-video platform.', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-ai-gen/600/400', dataAiHint: 'idea to video', pricing: 'Freemium' },
            { name: 'HeyGen', description: 'AI video generator with talking avatars.', url: 'https://www.heygen.com/', image: 'https://picsum.photos/seed/heygen-ai-gen/600/400', dataAiHint: 'talking avatar', pricing: 'Freemium' },
            { name: 'Fliki', description: 'Turn text into videos with AI voices.', url: 'https://fliki.ai/', image: 'https://picsum.photos/seed/fliki-ai-gen/600/400', dataAiHint: 'ai voice', pricing: 'Freemium' },
            { name: 'Deepbrain AI', description: 'AI Studios for hyperrealistic videos.', url: 'https://www.deepbrain.io/', image: 'https://picsum.photos/seed/deepbrain-ai-gen/600/400', dataAiHint: 'hyperrealistic', pricing: 'Paid' },
            { name: 'Kaiber', description: 'An AI creative lab for artists.', url: 'https://www.kaiber.ai/', image: 'https://picsum.photos/seed/kaiber-ai-gen/600/400', dataAiHint: 'music videos', pricing: 'Freemium' },
            { name: 'Genmo', description: 'The creative copilot for video.', url: 'https://www.genmo.ai/', image: 'https://picsum.photos/seed/genmo-ai-gen/600/400', dataAiHint: 'creative copilot', pricing: 'Freemium' },
            { name: 'Luma Dream Machine', description: 'High-quality, realistic videos from text.', url: 'https://lumalabs.ai/dream-machine', image: 'https://picsum.photos/seed/luma-ai-gen/600/400', dataAiHint: 'realistic video', pricing: 'Freemium' },
            { name: 'Sora by OpenAI', description: 'AI model that can create realistic and imaginative scenes.', url: 'https://openai.com/sora', image: 'https://picsum.photos/seed/sora-ai-gen/600/400', dataAiHint: 'openai video', pricing: 'Paid' },
            { name: 'Viggle AI', description: 'Mix image with video with character consistency.', url: 'https://viggle.ai/', image: 'https://picsum.photos/seed/viggle-ai-gen/600/400', dataAiHint: 'character control', pricing: 'Freemium' },
            { name: 'D-ID', description: 'Create videos from a single image.', url: 'https://www.d-id.com/', image: 'https://picsum.photos/seed/did-ai-gen/600/400', dataAiHint: 'talking photo', pricing: 'Freemium' },
            { name: 'Hour One', description: 'Turn text into presenter-led videos.', url: 'https://hourone.ai/', image: 'https://picsum.photos/seed/hourone-ai-gen/600/400', dataAiHint: 'presenter video', pricing: 'Paid' },
            { name: 'Colossyan', description: 'Create videos with AI actors.', url: 'https://www.colossyan.com/', image: 'https://picsum.photos/seed/colossyan-ai-gen/600/400', dataAiHint: 'ai actors', pricing: 'Paid' },
            { name: 'Elai.io', description: 'Generate videos from text with a digital presenter.', url: 'https://elai.io/', image: 'https://picsum.photos/seed/elai-ai-gen/600/400', dataAiHint: 'digital presenter', pricing: 'Paid' },
            { name: 'Steve.AI', description: 'AI video maker for social media.', url: 'https://www.steve.ai/', image: 'https://picsum.photos/seed/steveai-ai-gen/600/400', dataAiHint: 'social media', pricing: 'Freemium' },
            { name: 'Rephrase.ai', description: 'Create personalized videos at scale.', url: 'https://www.rephrase.ai/', image: 'https://picsum.photos/seed/rephrase-ai-gen/600/400', dataAiHint: 'personalized video', pricing: 'Paid' },
            { name: 'Yepic AI', description: 'Video translation and creation platform.', url: 'https://www.yepic.ai/', image: 'https://picsum.photos/seed/yepic-ai-gen/600/400', dataAiHint: 'video translation', pricing: 'Paid' },
        ]
    },
    {
        title: "Thumbnail & Graphic Tools",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Easy-to-use design tool for thumbnails, posts, and more.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-thumbnail/600/400', dataAiHint: 'thumbnail maker', pricing: 'Freemium' },
            { name: 'Photoshop', description: 'Industry-standard tool for professional graphic design.', url: 'https://www.adobe.com/products/photoshop.html', image: 'https://picsum.photos/seed/photoshop-thumbnail/600/400', dataAiHint: 'professional design', pricing: 'Paid' },
            { name: 'Photopea', description: 'Free online editor supporting PSD, XCF, and Sketch formats.', url: 'https://www.photopea.com/', image: 'https://picsum.photos/seed/photopea-thumbnail/600/400', dataAiHint: 'free editor', pricing: 'Free' },
            { name: 'Pixlr', description: 'Free online photo editor with AI tools.', url: 'https://pixlr.com/', image: 'https://picsum.photos/seed/pixlr-thumbnail/600/400', dataAiHint: 'ai photo editor', pricing: 'Freemium' },
            { name: 'Fotor', description: 'Online designer for photo editing and graphic creation.', url: 'https://www.fotor.com/', image: 'https://picsum.photos/seed/fotor-thumbnail/600/400', dataAiHint: 'graphic creation', pricing: 'Freemium' },
            { name: 'Snappa', description: 'Create online graphics in a snap.', url: 'https://snappa.com/', image: 'https://picsum.photos/seed/snappa-thumbnail/600/400', dataAiHint: 'quick graphics', pricing: 'Freemium' },
            { name: 'Adobe Express', description: 'Free content creator for social graphics and more.', url: 'https://www.adobe.com/express/', image: 'https://picsum.photos/seed/express-thumbnail/600/400', dataAiHint: 'social graphics', pricing: 'Freemium' },
            { name: 'VistaCreate', description: 'Free graphic design software.', url: 'https://create.vista.com/', image: 'https://picsum.photos/seed/vistacreate-thumbnail/600/400', dataAiHint: 'design software', pricing: 'Freemium' },
            { name: 'Easil', description: 'Drag-and-drop design tool.', url: 'https://about.easil.com/', image: 'https://picsum.photos/seed/easil-thumbnail/600/400', dataAiHint: 'drag and drop', pricing: 'Freemium' },
            { name: 'PicMonkey', description: 'Photo editor and design maker.', url: 'https://www.picmonkey.com/', image: 'https://picsum.photos/seed/picmonkey-thumbnail/600/400', dataAiHint: 'design maker', pricing: 'Freemium' },
            { name: 'Befunky', description: 'Online Photo Editor, Collage Maker, and Graphic Designer.', url: 'https://www.befunky.com/', image: 'https://picsum.photos/seed/befunky-thumbnail/600/400', dataAiHint: 'collage maker', pricing: 'Freemium' },
            { name: 'Stencil', description: 'The fastest way to create and share visual content.', url: 'https://getstencil.com/', image: 'https://picsum.photos/seed/stencil-thumbnail/600/400', dataAiHint: 'visual content', pricing: 'Freemium' },
            { name: 'DesignCap', description: 'Free online poster and flyer maker.', url: 'https://www.designcap.com/', image: 'https://picsum.photos/seed/designcap-thumbnail/600/400', dataAiHint: 'flyer maker', pricing: 'Freemium' },
            { name: 'PosterMyWall', description: 'Create amazing posters and social media graphics.', url: 'https://www.postermywall.com/', image: 'https://picsum.photos/seed/postermywall-thumbnail/600/400', dataAiHint: 'poster maker', pricing: 'Freemium' },
            { name: 'Piktochart', description: 'Infographic, presentation, and report maker.', url: 'https://piktochart.com/', image: 'https://picsum.photos/seed/piktochart-thumbnail/600/400', dataAiHint: 'infographics', pricing: 'Freemium' },
            { name: 'Visme', description: 'All-in-one platform for creating presentations, infographics, and other visuals.', url: 'https://www.visme.co/', image: 'https://picsum.photos/seed/visme-thumbnail/600/400', dataAiHint: 'presentations', pricing: 'Freemium' },
            { name: 'Glorify', description: 'Product-focused design tool for e-commerce.', url: 'https://www.glorify.com/', image: 'https://picsum.photos/seed/glorify-thumbnail/600/400', dataAiHint: 'ecommerce design', pricing: 'Freemium' },
            { name: 'Tyle', description: 'Smart video and image editor.', url: 'https://www.tyle.io/', image: 'https://picsum.photos/seed/tyle-thumbnail/600/400', dataAiHint: 'smart editor', pricing: 'Freemium' },
            { name: 'Placeit', description: 'Mockups, designs, logos & videos.', url: 'https://placeit.net/', image: 'https://picsum.photos/seed/placeit-thumbnail/600/400', dataAiHint: 'mockup generator', pricing: 'Freemium' },
            { name: 'Thumbnail.ai', description: 'Generate YouTube thumbnails with AI.', url: 'https://thumbnail.ai/', image: 'https://picsum.photos/seed/thumbnailai/600/400', dataAiHint: 'youtube thumbnail', pricing: 'Paid' },
            { name: 'TubeBuddy Thumbnail Generator', description: 'Create professional thumbnails inside YouTube.', url: 'https://www.tubebuddy.com/thumbnail-generator', image: 'https://picsum.photos/seed/tubebuddy-thumbnail/600/400', dataAiHint: 'pro thumbnails', pricing: 'Freemium' },
            { name: 'VidIQ Thumbnail Creator', description: 'Create custom thumbnails that get clicks.', url: 'https://vidiq.com/features/thumbnail-creator/', image: 'https://picsum.photos/seed/vidiq-thumbnail/600/400', dataAiHint: 'custom thumbnails', pricing: 'Freemium' },
            { name: 'Figma', description: 'The collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-thumbnail/600/400', dataAiHint: 'ui design', pricing: 'Freemium' },
            { name: 'Sketch', description: 'The design toolkit for creating your best work.', url: 'https://www.sketch.com/', image: 'https://picsum.photos/seed/sketch-thumbnail/600/400', dataAiHint: 'vector design', pricing: 'Paid' },
            { name: 'Affinity Designer', description: 'Professional graphic design software.', url: 'https://affinity.serif.com/en-us/designer/', image: 'https://picsum.photos/seed/affinity-thumbnail/600/400', dataAiHint: 'graphic software', pricing: 'Paid' },
            { name: 'GIMP', description: 'Free & Open Source Image Editor.', url: 'https://www.gimp.org/', image: 'https://picsum.photos/seed/gimp-thumbnail/600/400', dataAiHint: 'open source editor', pricing: 'Free' },
            { name: 'Krita', description: 'A professional free and open source painting program.', url: 'https://krita.org/', image: 'https://picsum.photos/seed/krita-thumbnail/600/400', dataAiHint: 'digital painting', pricing: 'Free' },
            { name: 'Inkscape', description: 'Free and open-source vector graphics editor.', url: 'https://inkscape.org/', image: 'https://picsum.photos/seed/inkscape-thumbnail/600/400', dataAiHint: 'vector editor', pricing: 'Free' },
            { name: 'Gravit Designer', description: 'A full-featured vector graphic design app.', url: 'https://www.designer.io/', image: 'https://picsum.photos/seed/gravit-thumbnail/600/400', dataAiHint: 'vector app', pricing: 'Freemium' },
            { name: 'Vectr', description: 'Free online vector graphics editor.', url: 'https://vectr.com/', image: 'https://picsum.photos/seed/vectr-thumbnail/600/400', dataAiHint: 'online vector', pricing: 'Free' },
        ]
    },
    {
        title: "Photo Editing Tools",
        icon: <Paintbrush className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lightroom', description: 'Cloud-based service for professional photographers.', url: 'https://www.adobe.com/products/photoshop-lightroom.html', image: 'https://picsum.photos/seed/lightroom-editing/600/400', dataAiHint: 'photo management', pricing: 'Paid' },
            { name: 'VSCO', description: 'Photo and video editor with presets and creative tools.', url: 'https://vsco.co/', image: 'https://picsum.photos/seed/vsco-editing/600/400', dataAiHint: 'creative presets', pricing: 'Freemium' },
            { name: 'Snapseed', description: 'A complete and professional photo editor by Google.', url: 'https://snapseed.online/', image: 'https://picsum.photos/seed/snapseed-editing/600/400', dataAiHint: 'google photo', pricing: 'Free' },
            { name: 'PicsArt', description: 'All-in-one photo and video editing platform.', url: 'https://picsart.com/', image: 'https://picsum.photos/seed/picsart-editing/600/400', dataAiHint: 'video platform', pricing: 'Freemium' },
            { name: 'Remini', description: 'AI-powered photo and video enhancer.', url: 'https://remini.ai/', image: 'https://picsum.photos/seed/remini-editing/600/400', dataAiHint: 'photo enhancer', pricing: 'Freemium' },
            { name: 'Adobe Photoshop', description: 'The industry standard for image editing.', url: 'https://www.adobe.com/products/photoshop.html', image: 'https://picsum.photos/seed/photoshop-editing/600/400', dataAiHint: 'image editing', pricing: 'Paid' },
            { name: 'Fotor', description: 'Online photo editor and design maker.', url: 'https://www.fotor.com/', image: 'https://picsum.photos/seed/fotor-editing/600/400', dataAiHint: 'design maker', pricing: 'Freemium' },
            { name: 'Pixlr', description: 'Free online photo editor with AI tools.', url: 'https://pixlr.com/', image: 'https://picsum.photos/seed/pixlr-editing/600/400', dataAiHint: 'ai tools', pricing: 'Freemium' },
            { name: 'Befunky', description: 'Online Photo Editor, Collage Maker, and Graphic Designer.', url: 'https://www.befunky.com/', image: 'https://picsum.photos/seed/befunky-editing/600/400', dataAiHint: 'collage maker', pricing: 'Freemium' },
            { name: 'Photopea', description: 'Free online editor supporting PSD, XCF, and Sketch.', url: 'https://www.photopea.com/', image: 'https://picsum.photos/seed/photopea-editing/600/400', dataAiHint: 'psd editor', pricing: 'Free' },
            { name: 'GIMP', description: 'Free & Open Source Image Editor.', url: 'https://www.gimp.org/', image: 'https://picsum.photos/seed/gimp-editing/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Luminar Neo', description: 'AI-driven photo editor.', url: 'https://skylum.com/luminar', image: 'https://picsum.photos/seed/luminar-editing/600/400', dataAiHint: 'ai photo', pricing: 'Paid' },
            { name: 'Topaz Photo AI', description: 'Maximize your image quality on autopilot.', url: 'https://www.topazlabs.com/topaz-photo-ai', image: 'https://picsum.photos/seed/topaz-editing/600/400', dataAiHint: 'image quality', pricing: 'Paid' },
            { name: 'Capture One', description: 'Professional photo editing software.', url: 'https://www.captureone.com/', image: 'https://picsum.photos/seed/captureone/600/400', dataAiHint: 'raw editor', pricing: 'Paid' },
            { name: 'DxO PhotoLab', description: 'The most advanced photo editing software.', url: 'https://www.dxo.com/dxo-photolab/', image: 'https://picsum.photos/seed/dxo/600/400', dataAiHint: 'lens correction', pricing: 'Paid' },
            { name: 'Affinity Photo', description: 'Professional image editing software.', url: 'https://affinity.serif.com/en-us/photo/', image: 'https://picsum.photos/seed/affinity-editing/600/400', dataAiHint: 'photoshop alternative', pricing: 'Paid' },
            { name: 'Polarr', description: 'Photo editor for every platform.', url: 'https://polarr.com/', image: 'https://picsum.photos/seed/polarr/600/400', dataAiHint: 'photo filters', pricing: 'Freemium' },
            { name: 'Darktable', description: 'An open source photography workflow application and raw developer.', url: 'https://www.darktable.org/', image: 'https://picsum.photos/seed/darktable/600/400', dataAiHint: 'raw developer', pricing: 'Free' },
            { name: 'RawTherapee', description: 'A powerful, cross-platform raw photo processing system.', url: 'https://rawtherapee.com/', image: 'https://picsum.photos/seed/rawtherapee/600/400', dataAiHint: 'photo processing', pricing: 'Free' },
            { name: 'Afterlight', description: 'Photo editing app with filters and textures.', url: 'https://afterlight.co/', image: 'https://picsum.photos/seed/afterlight/600/400', dataAiHint: 'photo textures', pricing: 'Freemium' },
            { name: 'Tezza', description: 'Aesthetic presets and editing tools.', url: 'https://www.shoptezza.com/app', image: 'https://picsum.photos/seed/tezza-editing/600/400', dataAiHint: 'aesthetic editor', pricing: 'Freemium' },
            { name: 'Prequel', description: 'Aesthetic editor with effects & filters.', url: 'https://prequel.app/', image: 'https://picsum.photos/seed/prequel-editing/600/400', dataAiHint: 'video effects', pricing: 'Freemium' },
            { name: 'AirBrush', description: 'The easy photo editor.', url: 'https://www.airbrush.com/', image: 'https://picsum.photos/seed/airbrush/600/400', dataAiHint: 'retouching tool', pricing: 'Freemium' },
            { name: 'FaceTune', description: 'Selfie editor for photos and videos.', url: 'https://www.facetuneapp.com/', image: 'https://picsum.photos/seed/facetune/600/400', dataAiHint: 'selfie editor', pricing: 'Freemium' },
            { name: 'YouCam Perfect', description: 'The best selfie camera & photo editor.', url: 'https://www.perfectcorp.com/consumer/apps/ycp', image: 'https://picsum.photos/seed/youcam/600/400', dataAiHint: 'selfie camera', pricing: 'Freemium' },
        ]
    },
    {
        title: "YouTube Tools",
        icon: <Youtube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'TubeBuddy', description: 'Browser extension for managing and growing your channel.', url: 'https://www.tubebuddy.com/', image: 'https://picsum.photos/seed/tubebuddy/600/400', dataAiHint: 'channel growth', pricing: 'Freemium' },
            { name: 'VidIQ', description: 'AI-powered tools for YouTube creators.', url: 'https://vidiq.com/', image: 'https://picsum.photos/seed/vidiq-youtube/600/400', dataAiHint: 'youtube creators', pricing: 'Freemium' },
            { name: 'YT Studio', description: 'Official app to manage your YouTube channel.', url: 'https://studio.youtube.com/', image: 'https://picsum.photos/seed/ytstudio/600/400', dataAiHint: 'channel management', pricing: 'Free' },
            { name: 'Social Blade', description: 'Track statistics and analytics for YouTube channels.', url: 'https://socialblade.com/', image: 'https://picsum.photos/seed/socialblade-youtube/600/400', dataAiHint: 'youtube stats', pricing: 'Freemium' },
            { name: 'Opus Clip', description: 'Turn long videos into viral shorts.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opus-youtube/600/400', dataAiHint: 'short clips', pricing: 'Freemium' },
            { name: 'Canva', description: 'Create stunning YouTube thumbnails, banners, and intros.', url: 'https://www.canva.com/youtube/', image: 'https://picsum.photos/seed/canva-youtube/600/400', dataAiHint: 'youtube graphics', pricing: 'Freemium' },
            { name: 'Epidemic Sound', description: 'Royalty-free music and sound effects.', url: 'https://www.epidemicsound.com/', image: 'https://picsum.photos/seed/epidemic-youtube/600/400', dataAiHint: 'channel music', pricing: 'Paid' },
            { name: 'Artlist', description: 'High-quality royalty-free music and sound effects.', url: 'https://artlist.io/', image: 'https://picsum.photos/seed/artlist-youtube/600/400', dataAiHint: 'music licensing', pricing: 'Paid' },
            { name: 'Envato Elements', description: 'Unlimited downloads of stock video, music, and more.', url: 'https://elements.envato.com/', image: 'https://picsum.photos/seed/envato-youtube/600/400', dataAiHint: 'creative assets', pricing: 'Paid' },
            { name: 'Morningfame', description: 'Analytics tool to help you grow your channel.', url: 'https://morningfa.me/', image: 'https://picsum.photos/seed/morningfame/600/400', dataAiHint: 'youtube analytics', pricing: 'Paid' },
            { name: 'Keyword Tool', description: 'Find keywords for your YouTube videos.', url: 'https://keywordtool.io/youtube', image: 'https://picsum.photos/seed/keywordtool-youtube/600/400', dataAiHint: 'video seo', pricing: 'Freemium' },
            { name: 'Agorapulse', description: 'Social media management tool for YouTube.', url: 'https://www.agorapulse.com/', image: 'https://picsum.photos/seed/agorapulse-youtube/600/400', dataAiHint: 'community management', pricing: 'Paid' },
            { name: 'Sprout Social', description: 'Manage your YouTube presence alongside other networks.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sprout-youtube/600/400', dataAiHint: 'social management', pricing: 'Paid' },
            { name: 'Genie', description: 'Comment management tool for YouTube.', url: 'https://www.ytgenie.com/', image: 'https://picsum.photos/seed/genie-youtube/600/400', dataAiHint: 'comment tool', pricing: 'Paid' },
            { name: 'Fiverr', description: 'Hire freelancers for thumbnails, editing, and more.', url: 'https://www.fiverr.com/', image: 'https://picsum.photos/seed/fiverr-youtube/600/400', dataAiHint: 'freelance services', pricing: 'Paid' },
            { name: 'Upwork', description: 'Find freelancers for your YouTube channel.', url: 'https://www.upwork.com/', image: 'https://picsum.photos/seed/upwork-youtube/600/400', dataAiHint: 'hire talent', pricing: 'Paid' },
            { name: 'Rev', description: 'Professional captions, subtitles, and transcriptions.', url: 'https://www.rev.com/', image: 'https://picsum.photos/seed/rev-youtube/600/400', dataAiHint: 'video captions', pricing: 'Paid' },
            { name: 'SponsorBlock', description: 'Browser extension to skip sponsored segments.', url: 'https://sponsor.ajay.app/', image: 'https://picsum.photos/seed/sponsorblock-youtube/600/400', dataAiHint: 'skip ads', pricing: 'Free' },
            { name: 'Gleam', description: 'Run contests and giveaways on YouTube.', url: 'https://gleam.io/', image: 'https://picsum.photos/seed/gleam-youtube/600/400', dataAiHint: 'giveaways', pricing: 'Freemium' },
            { name: 'Patreon', description: 'Membership platform for creators.', url: 'https://www.patreon.com/', image: 'https://picsum.photos/seed/patreon-youtube/600/400', dataAiHint: 'fan funding', pricing: 'Paid' },
            { name: 'Ko-fi', description: 'Receive support from fans of your work.', url: 'https://ko-fi.com/', image: 'https://picsum.photos/seed/kofi-youtube/600/400', dataAiHint: 'creator donations', pricing: 'Free' },
            { name: 'TubeSpanner', description: 'Project management for YouTube creators.', url: 'https://tubespanner.com/', image: 'https://picsum.photos/seed/tubespanner/600/400', dataAiHint: 'video planning', pricing: 'Paid' },
            { name: 'Thumbly', description: 'AI-powered thumbnail testing.', url: 'https://thumbly.ai/', image: 'https://picsum.photos/seed/thumbly/600/400', dataAiHint: 'a/b testing', pricing: 'Paid' },
            { name: 'Thumbnail Blaster', description: 'Create click-bait thumbnails.', url: 'https://thumbnailblaster.com/', image: 'https://picsum.photos/seed/thumbnailblaster/600/400', dataAiHint: 'click-bait', pricing: 'Paid' },
            { name: 'StreamYard', description: 'The easiest way to create professional live streams.', url: 'https://streamyard.com/', image: 'https://picsum.photos/seed/streamyard/600/400', dataAiHint: 'live streaming', pricing: 'Freemium' },
            { name: 'OBS Studio', description: 'Free and open source software for video recording and live streaming.', url: 'https://obsproject.com/', image: 'https://picsum.photos/seed/obs-youtube/600/400', dataAiHint: 'streaming software', pricing: 'Free' },
            { name: 'Restream', description: 'Stream live to multiple social media platforms.', url: 'https://restream.io/', image: 'https://picsum.photos/seed/restream/600/400', dataAiHint: 'multistreaming', pricing: 'Freemium' },
            { name: 'TubeRanker', description: 'YouTube SEO tools.', url: 'https://tuberanker.com/', image: 'https://picsum.photos/seed/tuberanker/600/400', dataAiHint: 'rank tracking', pricing: 'Freemium' },
            { name: 'YTRank', description: 'Free YouTube keyword tool.', url: 'https://www.ytrank.net/', image: 'https://picsum.photos/seed/ytrank/600/400', dataAiHint: 'keyword tool', pricing: 'Free' },
            { name: 'H-supertools', description: 'Free YouTube keyword tool.', url: 'https://h-supertools.com/youtube/keyword-tool', image: 'https://picsum.photos/seed/hsupertools/600/400', dataAiHint: 'free tools', pricing: 'Free' },
        ]
    },
    {
        title: "Captions & Subtitle Tools",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'VEED.io', description: 'Online video editor with automatic subtitle generation.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veedio-captions/600/400', dataAiHint: 'auto subtitles', pricing: 'Freemium' },
            { name: 'Kapwing', description: 'Add subtitles to video online for free.', url: 'https://www.kapwing.com/tools/add-subtitles-to-video', image: 'https://picsum.photos/seed/kapwing-captions/600/400', dataAiHint: 'free subtitles', pricing: 'Freemium' },
            { name: 'SubtitleBee', description: 'Automatically add subtitles to your videos.', url: 'https://subtitlebee.com/', image: 'https://picsum.photos/seed/subtitlebee/600/400', dataAiHint: 'video subtitles', pricing: 'Paid' },
            { name: 'Nova AI', description: 'Online video editor with subtitle generation.', url: 'https://wearenova.ai/', image: 'https://picsum.photos/seed/nova-ai/600/400', dataAiHint: 'video tools', pricing: 'Freemium' },
            { name: 'AutoSub', description: 'Automatic video subtitle generator.', url: 'https://autosub.io/', image: 'https://picsum.photos/seed/autosub/600/400', dataAiHint: 'caption generator', pricing: 'Paid' },
            { name: 'Rev', description: 'Human-powered transcription and captions.', url: 'https://www.rev.com/', image: 'https://picsum.photos/seed/rev-captions/600/400', dataAiHint: 'human transcription', pricing: 'Paid' },
            { name: 'Scribie', description: 'Manual and automated transcription services.', url: 'https://scribie.com/', image: 'https://picsum.photos/seed/scribie-captions/600/400', dataAiHint: 'transcription service', pricing: 'Paid' },
            { name: 'Happy Scribe', description: 'Transcription & Subtitles.', url: 'https://www.happyscribe.com/', image: 'https://picsum.photos/seed/happyscribe/600/400', dataAiHint: 'subtitles service', pricing: 'Paid' },
            { name: 'Trint', description: 'AI-powered audio transcription.', url: 'https://trint.com/', image: 'https://picsum.photos/seed/trint/600/400', dataAiHint: 'audio transcription', pricing: 'Paid' },
            { name: 'Sonix', description: 'Automated transcription, translation, and subtitling.', url: 'https://sonix.ai/', image: 'https://picsum.photos/seed/sonix/600/400', dataAiHint: 'automated subtitling', pricing: 'Paid' },
            { name: 'Aegisub', description: 'Free, cross-platform open source tool for creating and modifying subtitles.', url: 'http://www.aegisub.org/', image: 'https://picsum.photos/seed/aegisub/600/400', dataAiHint: 'subtitle editor', pricing: 'Free' },
            { name: 'Subtitle Edit', description: 'A free editor for video subtitles.', url: 'https://www.nikse.dk/subtitleedit/', image: 'https://picsum.photos/seed/subtitleedit/600/400', dataAiHint: 'free editor', pricing: 'Free' },
            { name: 'Amara', description: 'A platform for captioning and translating video.', url: 'https://amara.org/', image: 'https://picsum.photos/seed/amara/600/400', dataAiHint: 'community captions', pricing: 'Freemium' },
            { name: 'Zubtitle', description: 'Automated social media video tool.', url: 'https://zubtitle.com/', image: 'https://picsum.photos/seed/zubtitle/600/400', dataAiHint: 'social video', pricing: 'Paid' },
            { name: 'Subly', description: 'Automatically add subtitles to your videos.', url: 'https://www.getsubly.com/', image: 'https://picsum.photos/seed/subly/600/400', dataAiHint: 'auto captions', pricing: 'Paid' },
            { name: 'Adobe Premiere Pro', description: 'Built-in captioning and transcription tools.', url: 'https://www.adobe.com/products/premiere.html', image: 'https://picsum.photos/seed/premiere-captions/600/400', dataAiHint: 'pro captions', pricing: 'Paid' },
            { name: 'Final Cut Pro', description: 'Captioning tools for professional video editing.', url: 'https://www.apple.com/final-cut-pro/', image: 'https://picsum.photos/seed/finalcut-captions/600/400', dataAiHint: 'apple captions', pricing: 'Paid' },
            { name: 'DaVinci Resolve', description: 'Subtitle and caption support.', url: 'https://www.blackmagicdesign.com/products/davinciresolve', image: 'https://picsum.photos/seed/davinci-captions/600/400', dataAiHint: 'resolve captions', pricing: 'Freemium' },
            { name: 'GoTranscript', description: 'Human-powered transcription services.', url: 'https://gotranscript.com/', image: 'https://picsum.photos/seed/gotranscript/600/400', dataAiHint: '100% human', pricing: 'Paid' },
            { name: '3Play Media', description: 'Captioning, transcription, and translation services.', url: 'https://www.3playmedia.com/', image: 'https://picsum.photos/seed/3playmedia/600/400', dataAiHint: 'accessibility', pricing: 'Paid' },
        ]
    },
    {
        title: "Audio Editing Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Audacity', description: 'Free, open-source, cross-platform audio software.', url: 'https://www.audacityteam.org/', image: 'https://picsum.photos/seed/audacity-audio/600/400', dataAiHint: 'audio editor', pricing: 'Free' },
            { name: 'Adobe Audition', description: 'Professional audio workstation for mixing, and restoration.', url: 'https://www.adobe.com/products/audition.html', image: 'https://picsum.photos/seed/audition/600/400', dataAiHint: 'audio mixing', pricing: 'Paid' },
            { name: 'Reaper', description: 'A complete digital audio production application.', url: 'https://www.reaper.fm/', image: 'https://picsum.photos/seed/reaper/600/400', dataAiHint: 'digital audio', pricing: 'Paid' },
            { name: 'Soundtrap', description: 'Online collaborative music and podcast studio.', url: 'https://www.soundtrap.com/', image: 'https://picsum.photos/seed/soundtrap/600/400', dataAiHint: 'music studio', pricing: 'Freemium' },
            { name: 'BandLab', description: 'Free music creation platform.', url: 'https://www.bandlab.com/', image: 'https://picsum.photos/seed/bandlab/600/400', dataAiHint: 'music creation', pricing: 'Free' },
            { name: 'Descript', description: 'Audio editing as easy as a doc.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-audio/600/400', dataAiHint: 'podcast editor', pricing: 'Freemium' },
            { name: 'Hindenburg Journalist', description: 'Audio editor for storytellers.', url: 'https://hindenburg.com/', image: 'https://picsum.photos/seed/hindenburg/600/400', dataAiHint: 'radio editor', pricing: 'Paid' },
            { name: 'Logic Pro', description: 'Professional music production for Mac.', url: 'https://www.apple.com/logic-pro/', image: 'https://picsum.photos/seed/logicpro/600/400', dataAiHint: 'mac music', pricing: 'Paid' },
            { name: 'GarageBand', description: 'A fully equipped music creation studio inside your Apple device.', url: 'https://www.apple.com/mac/garageband/', image: 'https://picsum.photos/seed/garageband/600/400', dataAiHint: 'free daw', pricing: 'Free' },
            { name: 'FL Studio', description: 'A complete software music production environment.', url: 'https://www.image-line.com/', image: 'https://picsum.photos/seed/flstudio/600/400', dataAiHint: 'beat maker', pricing: 'Paid' },
            { name: 'Ableton Live', description: 'Music production software.', url: 'https://www.ableton.com/en/live/', image: 'https://picsum.photos/seed/ableton/600/400', dataAiHint: 'live performance', pricing: 'Paid' },
            { name: 'Cubase', description: 'DAW for composing, recording, mixing and editing music.', url: 'https://www.steinberg.net/cubase/', image: 'https://picsum.photos/seed/cubase/600/400', dataAiHint: 'music daw', pricing: 'Paid' },
            { name: 'Pro Tools', description: 'The industry-standard digital audio workstation.', url: 'https://www.avid.com/pro-tools', image: 'https://picsum.photos/seed/protools/600/400', dataAiHint: 'audio post', pricing: 'Paid' },
            { name: 'Reason', description: 'Music-making software.', url: 'https://www.reasonstudios.com/', image: 'https://picsum.photos/seed/reason/600/400', dataAiHint: 'virtual studio', pricing: 'Paid' },
            { name: 'Bitwig Studio', description: 'Modern music production and performance.', url: 'https://www.bitwig.com/', image: 'https://picsum.photos/seed/bitwig/600/400', dataAiHint: 'modular daw', pricing: 'Paid' },
            { name: 'Ocenaudio', description: 'An easy, fast and powerful audio editor.', url: 'https://www.ocenaudio.com/', image: 'https://picsum.photos/seed/ocenaudio/600/400', dataAiHint: 'free audio', pricing: 'Free' },
            { name: 'WavePad', description: 'Professional audio and music editor.', url: 'https://www.nch.com.au/wavepad/index.html', image: 'https://picsum.photos/seed/wavepad/600/400', dataAiHint: 'audio editor', pricing: 'Freemium' },
            { name: 'Acoustica', description: 'Audio editor with premium tools.', url: 'https://acondigital.com/products/acoustica-audio-editor/', image: 'https://picsum.photos/seed/acoustica/600/400', dataAiHint: 'audio restoration', pricing: 'Paid' },
            { name: 'Sound Forge', description: 'Professional audio editing software.', url: 'https://www.magix.com/us/music-editing/sound-forge/', image: 'https://picsum.photos/seed/soundforge/600/400', dataAiHint: 'audio mastering', pricing: 'Paid' },
            { name: 'iZotope RX', description: 'The industry standard for audio repair.', url: 'https://www.izotope.com/en/products/rx.html', image: 'https://picsum.photos/seed/izotope/600/400', dataAiHint: 'noise reduction', pricing: 'Paid' },
            { name: 'Auphonic', description: 'Automatic audio post production.', url: 'https://auphonic.com/', image: 'https://picsum.photos/seed/auphonic/600/400', dataAiHint: 'podcast audio', pricing: 'Freemium' },
            { name: 'Audo Studio', description: 'One-click audio cleaning and enhancement.', url: 'https://audo.ai/', image: 'https://picsum.photos/seed/audo/600/400', dataAiHint: 'audio enhancement', pricing: 'Freemium' },
            { name: 'Cleanvoice AI', description: 'Removes filler words, stuttering, and mouth sounds.', url: 'https://cleanvoice.ai/', image: 'https://picsum.photos/seed/cleanvoice-audio/600/400', dataAiHint: 'podcast editing', pricing: 'Paid' },
            { name: 'TwistedWave', description: 'An easy to use and powerful audio editor for Mac, iPhone/iPad, and online.', url: 'https://twistedwave.com/', image: 'https://picsum.photos/seed/twistedwave/600/400', dataAiHint: 'online audio', pricing: 'Freemium' },
            { name: 'Fission', description: 'Fast & lossless audio editing.', url: 'https://rogueamoeba.com/fission/', image: 'https://picsum.photos/seed/fission/600/400', dataAiHint: 'mac audio', pricing: 'Paid' },
        ]
    },
    {
        title: "Podcast Tools",
        icon: <Mic2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Riverside.fm', description: 'Record studio-quality podcasts and videos from anywhere.', url: 'https://riverside.fm/', image: 'https://picsum.photos/seed/riverside/600/400', dataAiHint: 'podcast recording', pricing: 'Paid' },
            { name: 'Anchor', description: 'The easiest way to make a podcast, by Spotify.', url: 'https://podcasters.spotify.com/', image: 'https://picsum.photos/seed/anchor/600/400', dataAiHint: 'make a podcast', pricing: 'Free' },
            { name: 'Zencastr', description: 'High-fidelity podcasting.', url: 'https://zencastr.com/', image: 'https://picsum.photos/seed/zencastr/600/400', dataAiHint: 'hi-fi podcast', pricing: 'Freemium' },
            { name: 'Podbean', description: 'Podcast hosting and monetization.', url: 'https://www.podbean.com/', image: 'https://picsum.photos/seed/podbean/600/400', dataAiHint: 'podcast hosting', pricing: 'Freemium' },
            { name: 'Descript', description: 'All-in-one audio & video editor for podcasts.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-podcast/600/400', dataAiHint: 'audio editing', pricing: 'Freemium' },
            { name: 'Buzzsprout', description: 'Podcast hosting, promotion, and stats.', url: 'https://www.buzzsprout.com/', image: 'https://picsum.photos/seed/buzzsprout/600/400', dataAiHint: 'podcast stats', pricing: 'Freemium' },
            { name: 'Transistor', description: 'Podcast hosting for professionals.', url: 'https://transistor.fm/', image: 'https://picsum.photos/seed/transistor/600/400', dataAiHint: 'pro hosting', pricing: 'Paid' },
            { name: 'Simplecast', description: 'The podcast management and analytics platform.', url: 'https://www.simplecast.com/', image: 'https://picsum.photos/seed/simplecast/600/400', dataAiHint: 'podcast analytics', pricing: 'Paid' },
            { name: 'Captivate', description: 'The world\'s only growth-oriented podcast host.', url: 'https://www.captivate.fm/', image: 'https://picsum.photos/seed/captivate/600/400', dataAiHint: 'podcast growth', pricing: 'Paid' },
            { name: 'Libsyn', description: 'Podcast hosting, distribution, and monetization.', url: 'https://libsyn.com/', image: 'https://picsum.photos/seed/libsyn/600/400', dataAiHint: 'podcast distribution', pricing: 'Paid' },
            { name: 'Spreaker', description: 'Podcast hosting, creation, and distribution.', url: 'https://www.spreaker.com/', image: 'https://picsum.photos/seed/spreaker/600/400', dataAiHint: 'podcast creation', pricing: 'Freemium' },
            { name: 'Sounder', description: 'The end-to-end podcast management platform.', url: 'https://sounder.fm/', image: 'https://picsum.photos/seed/sounder/600/400', dataAiHint: 'podcast management', pricing: 'Freemium' },
            { name: 'RedCircle', description: 'The podcast platform for independent creators.', url: 'https://redcircle.com/', image: 'https://picsum.photos/seed/redcircle/600/400', dataAiHint: 'independent creators', pricing: 'Freemium' },
            { name: 'Castos', description: 'Podcast hosting for serious podcasters.', url: 'https://castos.com/', image: 'https://picsum.photos/seed/castos/600/400', dataAiHint: 'wordpress podcasting', pricing: 'Paid' },
            { name: 'Podcastle', description: 'AI-powered audio creation platform.', url: 'https://podcastle.ai/', image: 'https://picsum.photos/seed/podcastle/600/400', dataAiHint: 'audio creation', pricing: 'Freemium' },
            { name: 'Alitu', description: 'The podcast maker.', url: 'https://alitu.com/', image: 'https://picsum.photos/seed/alitu/600/400', dataAiHint: 'podcast maker', pricing: 'Paid' },
            { name: 'Hindenburg Journalist Pro', description: 'Audio editor for storytellers.', url: 'https://hindenburg.com/', image: 'https://picsum.photos/seed/hindenburg-podcast/600/400', dataAiHint: 'storytelling audio', pricing: 'Paid' },
            { name: 'Audacity', description: 'Free, open source, cross-platform audio software.', url: 'https://www.audacityteam.org/', image: 'https://picsum.photos/seed/audacity-podcast/600/400', dataAiHint: 'free audio editor', pricing: 'Free' },
            { name: 'Adobe Audition', description: 'Professional audio workstation.', url: 'https://www.adobe.com/products/audition.html', image: 'https://picsum.photos/seed/audition-podcast/600/400', dataAiHint: 'audio mixing', pricing: 'Paid' },
            { name: 'SquadCast', description: 'Record studio-quality remote interviews.', url: 'https://squadcast.fm/', image: 'https://picsum.photos/seed/squadcast/600/400', dataAiHint: 'remote interviews', pricing: 'Paid' },
            { name: 'Iris', description: 'Record remote interviews in HD.', url: 'https://iris.fm/', image: 'https://picsum.photos/seed/iris-podcast/600/400', dataAiHint: 'hd recording', pricing: 'Paid' },
            { name: 'Cleanfeed', description: 'Live audio and recording in your browser.', url: 'https://cleanfeed.net/', image: 'https://picsum.photos/seed/cleanfeed/600/400', dataAiHint: 'live audio', pricing: 'Freemium' },
            { name: 'Headliner', description: 'Create social video to promote your podcast.', url: 'https://www.headliner.app/', image: 'https://picsum.photos/seed/headliner-podcast/600/400', dataAiHint: 'audiograms', pricing: 'Freemium' },
            { name: 'Wavve', description: 'Turn audio into shareable social videos.', url: 'https://wavve.co/', image: 'https://picsum.photos/seed/wavve-podcast/600/400', dataAiHint: 'social video', pricing: 'Paid' },
            { name: 'Podigee', description: 'Podcast hosting and analytics.', url: 'https://www.podigee.com/', image: 'https://picsum.photos/seed/podigee/600/400', dataAiHint: 'podcast hosting', pricing: 'Paid' },
        ]
    },
    {
        title: "Content Research Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AnswerThePublic', description: 'A search listening tool for content ideas.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/answerthepublic-research/600/400', dataAiHint: 'content ideas', pricing: 'Freemium' },
            { name: 'Google Trends', description: 'Explore what the world is searching for.', url: 'https://trends.google.com/', image: 'https://picsum.photos/seed/google-trends/600/400', dataAiHint: 'search trends', pricing: 'Free' },
            { name: 'BuzzSumo', description: 'Find what content is popular by topic or on any website.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-research/600/400', dataAiHint: 'popular content', pricing: 'Freemium' },
            { name: 'Perplexity AI', description: 'An answer engine that provides sources for its answers.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-research/600/400', dataAiHint: 'answer engine', pricing: 'Freemium' },
            { name: 'KeywordTool.io', description: 'Find keywords that people are typing into Google.', url: 'https://keywordtool.io/', image: 'https://picsum.photos/seed/keywordtool-research/600/400', dataAiHint: 'keyword research', pricing: 'Freemium' },
            { name: 'Ahrefs', description: 'All-in-one SEO toolset for content research.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-research/600/400', dataAiHint: 'seo tools', pricing: 'Paid' },
            { name: 'SEMrush', description: 'Content marketing toolkit.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-research/600/400', dataAiHint: 'marketing toolkit', pricing: 'Paid' },
            { name: 'Ubersuggest', description: 'Keyword ideas and content suggestions.', url: 'https://neilpatel.com/ubersuggest/', image: 'https://picsum.photos/seed/ubersuggest-research/600/400', dataAiHint: 'content suggestions', pricing: 'Freemium' },
            { name: 'Frase', description: 'AI tool to research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-research/600/400', dataAiHint: 'content outline', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-research/600/400', dataAiHint: 'content strategy', pricing: 'Paid' },
            { name: 'SparkToro', description: 'Discover what your audience reads, watches, and listens to.', url: 'https://sparktoro.com/', image: 'https://picsum.photos/seed/sparktoro/600/400', dataAiHint: 'audience intelligence', pricing: 'Freemium' },
            { name: 'Feedly', description: 'Organize, read and share what matters to you.', url: 'https://feedly.com/', image: 'https://picsum.photos/seed/feedly-research/600/400', dataAiHint: 'content curation', pricing: 'Freemium' },
            { name: 'Pocket', description: 'Save articles and videos to view later.', url: 'https://getpocket.com/', image: 'https://picsum.photos/seed/pocket-research/600/400', dataAiHint: 'read later', pricing: 'Freemium' },
            { name: 'Quora', description: 'Find questions your audience is asking.', url: 'https://www.quora.com/', image: 'https://picsum.photos/seed/quora-research/600/400', dataAiHint: 'q&a platform', pricing: 'Free' },
            { name: 'Reddit', description: 'Discover trends and conversations in niche communities.', url: 'https://www.reddit.com/', image: 'https://picsum.photos/seed/reddit-research/600/400', dataAiHint: 'community forums', pricing: 'Free' },
            { name: 'AlsoAsked', description: 'Discover "People Also Ask" questions.', url: 'https://alsoasked.com/', image: 'https://picsum.photos/seed/alsoasked-research/600/400', dataAiHint: 'search insights', pricing: 'Freemium' },
            { name: 'Exploding Topics', description: 'Discover rapidly growing topics.', url: 'https://explodingtopics.com/', image: 'https://picsum.photos/seed/exploding-research/600/400', dataAiHint: 'trend spotting', pricing: 'Freemium' },
            { name: 'Glimpse', description: 'The future of trends.', url: 'https://meetglimpse.com/', image: 'https://picsum.photos/seed/glimpse/600/400', dataAiHint: 'google trends+', pricing: 'Freemium' },
            { name: 'QuestionDB', description: 'Find the questions your audience is asking.', url: 'https://questiondb.io/', image: 'https://picsum.photos/seed/questiondb/600/400', dataAiHint: 'audience questions', pricing: 'Freemium' },
            { name: 'SimilarWeb', description: 'Analyze website traffic statistics.', url: 'https://www.similarweb.com/', image: 'https://picsum.photos/seed/similarweb/600/400', dataAiHint: 'competitor analysis', pricing: 'Freemium' },
            { name: 'Google Scholar', description: 'Search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://picsum.photos/seed/googlescholar-research/600/400', dataAiHint: 'academic research', pricing: 'Free' },
            { name: 'Zotero', description: 'Your personal research assistant.', url: 'https://www.zotero.org/', image: 'https://picsum.photos/seed/zotero-research/600/400', dataAiHint: 'reference management', pricing: 'Free' },
            { name: 'Mendeley', description: 'Reference manager and academic social network.', url: 'https://www.mendeley.com/', image: 'https://picsum.photos/seed/mendeley-research/600/400', dataAiHint: 'citation tool', pricing: 'Freemium' },
            { name: 'Keywords Everywhere', description: 'Browser addon for keyword research.', url: 'https://keywordseverywhere.com/', image: 'https://picsum.photos/seed/keywordseverywhere-research/600/400', dataAiHint: 'browser addon', pricing: 'Paid' },
            { name: 'Google Alerts', description: 'Monitor the web for mentions of specific keywords.', url: 'https://www.google.com/alerts', image: 'https://picsum.photos/seed/googlealerts-research/600/400', dataAiHint: 'web monitoring', pricing: 'Free' },
        ]
    },
    {
        title: "SEO Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Ahrefs', description: 'All-in-one SEO toolset.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-seo/600/400', dataAiHint: 'seo tools', pricing: 'Paid' },
            { name: 'SEMrush', description: 'Online visibility management and content marketing platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-seo/600/400', dataAiHint: 'visibility management', pricing: 'Paid' },
            { name: 'Surfer SEO', description: 'Content intelligence tool for on-page optimization.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo/600/400', dataAiHint: 'content intelligence', pricing: 'Paid' },
            { name: 'Moz', description: 'SEO software and data to help you increase traffic.', url: 'https://moz.com/', image: 'https://picsum.photos/seed/moz-seo/600/400', dataAiHint: 'seo software', pricing: 'Freemium' },
            { name: 'Ubersuggest', description: 'Keyword tracking & SEO tool.', url: 'https://neilpatel.com/ubersuggest/', image: 'https://picsum.photos/seed/ubersuggest-seo/600/400', dataAiHint: 'keyword tool', pricing: 'Freemium' },
            { name: 'Screaming Frog SEO Spider', description: 'Website crawler for improving onsite SEO.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog-seo/600/400', dataAiHint: 'technical seo', pricing: 'Freemium' },
            { name: 'Google Search Console', description: 'Tools and reports for website search performance.', url: 'https://search.google.com/search-console/', image: 'https://picsum.photos/seed/gsc-seo/600/400', dataAiHint: 'google webmaster', pricing: 'Free' },
            { name: 'Yoast SEO', description: 'The #1 WordPress SEO Plugin.', url: 'https://yoast.com/', image: 'https://picsum.photos/seed/yoast-seo/600/400', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'Rank Math', description: 'The Swiss Army Knife of WordPress SEO.', url: 'https://rankmath.com/', image: 'https://picsum.photos/seed/rankmath/600/400', dataAiHint: 'wordpress plugin', pricing: 'Freemium' },
            { name: 'Majestic', description: 'The planet\'s largest link index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic-seo/600/400', dataAiHint: 'backlink checker', pricing: 'Paid' },
            { name: 'SpyFu', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/', image: 'https://picsum.photos/seed/spyfu-seo/600/400', dataAiHint: 'competitor analysis', pricing: 'Paid' },
            { name: 'SE Ranking', description: 'All-in-one SEO software for businesses.', url: 'https://seranking.com/', image: 'https://picsum.photos/seed/seranking-seo/600/400', dataAiHint: 'rank tracker', pricing: 'Paid' },
            { name: 'Mangools', description: 'Juicy SEO tools you will love (KWFinder, SERPChecker, etc.).', url: 'https://mangools.com/', image: 'https://picsum.photos/seed/mangools-seo/600/400', dataAiHint: 'keyword finder', pricing: 'Paid' },
            { name: 'Long Tail Pro', description: 'Find less competitive long-tail keywords.', url: 'https://longtailpro.com/', image: 'https://picsum.photos/seed/longtailpro-seo/600/400', dataAiHint: 'long-tail keywords', pricing: 'Paid' },
            { name: 'Sitebulb', description: 'Website crawler and SEO audit tool.', url: 'https://sitebulb.com/', image: 'https://picsum.photos/seed/sitebulb-seo/600/400', dataAiHint: 'website audit', pricing: 'Paid' },
            { name: 'GTmetrix', description: 'Analyze your page\'s speed performance.', url: 'https://gtmetrix.com/', image: 'https://picsum.photos/seed/gtmetrix-seo/600/400', dataAiHint: 'page speed', pricing: 'Freemium' },
            { name: 'Google PageSpeed Insights', description: 'Make your web pages fast on all devices.', url: 'https://pagespeed.web.dev/', image: 'https://picsum.photos/seed/pagespeed-seo/600/400', dataAiHint: 'performance insights', pricing: 'Free' },
            { name: 'BrightLocal', description: 'Local SEO tools for agencies and businesses.', url: 'https://www.brightlocal.com/', image: 'https://picsum.photos/seed/brightlocal-seo/600/400', dataAiHint: 'local seo', pricing: 'Paid' },
            { name: 'Whitespark', description: 'Tools and services for local search.', url: 'https://whitespark.ca/', image: 'https://picsum.photos/seed/whitespark-seo/600/400', dataAiHint: 'citation builder', pricing: 'Freemium' },
            { name: 'Linkody', description: 'Backlink tracker for SEO professionals.', url: 'https://linkody.com/', image: 'https://picsum.photos/seed/linkody-seo/600/400', dataAiHint: 'backlink monitoring', pricing: 'Paid' },
        ]
    },
    {
        title: "Social Media Scheduling Tools",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Buffer', description: 'A simpler way to manage social media.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-scheduling/600/400', dataAiHint: 'social scheduler', pricing: 'Freemium' },
            { name: 'Hootsuite', description: 'Manage all your social media in one place.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-scheduling/600/400', dataAiHint: 'social media dashboard', pricing: 'Paid' },
            { name: 'Later', description: 'Visually plan and schedule your social posts.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-scheduling/600/400', dataAiHint: 'instagram scheduler', pricing: 'Freemium' },
            { name: 'Metricool', description: 'Analyze, manage, and grow your digital presence.', url: 'https://metricool.com/', image: 'https://picsum.photos/seed/metricool/600/400', dataAiHint: 'digital presence', pricing: 'Freemium' },
            { name: 'SocialPilot', description: 'Social media marketing & scheduling tool.', url: 'https://www.socialpilot.co/', image: 'https://picsum.photos/seed/socialpilot/600/400', dataAiHint: 'marketing tool', pricing: 'Paid' },
            { name: 'Sprout Social', description: 'Social media management solutions.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sproutsocial-scheduling/600/400', dataAiHint: 'social analytics', pricing: 'Paid' },
            { name: 'Agorapulse', description: 'Social media management software.', url: 'https://www.agorapulse.com/', image: 'https://picsum.photos/seed/agorapulse-scheduling/600/400', dataAiHint: 'team collaboration', pricing: 'Paid' },
            { name: 'CoSchedule', description: 'The marketing calendar for everything.', url: 'https://coschedule.com/', image: 'https://picsum.photos/seed/coschedule-scheduling/600/400', dataAiHint: 'content calendar', pricing: 'Freemium' },
            { name: 'Sendible', description: 'Leading social media management tool for agencies.', url: 'https://www.sendible.com/', image: 'https://picsum.photos/seed/sendible-scheduling/600/400', dataAiHint: 'agency tool', pricing: 'Paid' },
            { name: 'Publer', description: 'Social media superhero.', url: 'https://publer.io/', image: 'https://picsum.photos/seed/publer/600/400', dataAiHint: 'auto scheduling', pricing: 'Freemium' },
            { name: 'Loomly', description: 'Brand success platform for marketing teams.', url: 'https://www.loomly.com/', image: 'https://picsum.photos/seed/loomly-scheduling/600/400', dataAiHint: 'brand success', pricing: 'Paid' },
            { name: 'Planable', description: 'Social media collaboration tool.', url: 'https://planable.io/', image: 'https://picsum.photos/seed/planable-scheduling/600/400', dataAiHint: 'content approval', pricing: 'Freemium' },
            { name: 'MeetEdgar', description: 'Automate your social media.', url: 'https://meetedgar.com/', image: 'https://picsum.photos/seed/meetedgar-scheduling/600/400', dataAiHint: 'evergreen content', pricing: 'Paid' },
            { name: 'Crowdfire', description: 'The super-smart social media manager.', url: 'https://www.crowdfireapp.com/', image: 'https://picsum.photos/seed/crowdfire-scheduling/600/400', dataAiHint: 'content curation', pricing: 'Freemium' },
            { name: 'Tailwind', description: 'Pinterest & Instagram scheduler.', url: 'https://www.tailwindapp.com/', image: 'https://picsum.photos/seed/tailwind-scheduling/600/400', dataAiHint: 'pinterest tool', pricing: 'Freemium' },
            { name: 'SocialBee', description: 'Social media management tools, training, and teams.', url: 'https://socialbee.com/', image: 'https://picsum.photos/seed/socialbee-scheduling/600/400', dataAiHint: 'category-based', pricing: 'Paid' },
            { name: 'Zoho Social', description: 'Your social media marketing software.', url: 'https://www.zoho.com/social/', image: 'https://picsum.photos/seed/zoho-scheduling/600/400', dataAiHint: 'zoho suite', pricing: 'Freemium' },
            { name: 'ContentStudio', description: 'Content marketing and social media management platform.', url: 'https://contentstudio.io/', image: 'https://picsum.photos/seed/contentstudio-scheduling/600/400', dataAiHint: 'content discovery', pricing: 'Paid' },
            { name: 'Missinglettr', description: 'Turn blog posts into social media campaigns.', url: 'https://missinglettr.com/', image: 'https://picsum.photos/seed/missinglettr-scheduling/600/400', dataAiHint: 'drip campaigns', pricing: 'Paid' },
            { name: 'SmarterQueue', description: 'The smartest social media scheduler.', url: 'https://smarterqueue.com/', image: 'https://picsum.photos/seed/smarterqueue/600/400', dataAiHint: 'content recycling', pricing: 'Paid' },
        ]
    },
    {
        title: "Branding & Templates Tools",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva Brand Kit', description: 'Create and manage your brand identity.', url: 'https://www.canva.com/pro/brand-kit/', image: 'https://picsum.photos/seed/canva-brand/600/400', dataAiHint: 'brand identity', pricing: 'Freemium' },
            { name: 'Envato Elements', description: 'Unlimited downloads of creative assets and templates.', url: 'https://elements.envato.com/', image: 'https://picsum.photos/seed/envato/600/400', dataAiHint: 'creative assets', pricing: 'Paid' },
            { name: 'Creative Market', description: 'Ready-to-use design assets from independent creators.', url: 'https://creativemarket.com/', image: 'https://picsum.photos/seed/creativemarket/600/400', dataAiHint: 'design assets', pricing: 'Freemium' },
            { name: 'Placeit', description: 'Create mockups, logos, videos, and designs.', url: 'https://placeit.net/', image: 'https://picsum.photos/seed/placeit-brand/600/400', dataAiHint: 'mockup generator', pricing: 'Freemium' },
            { name: 'Snappa', description: 'Create online graphics in a snap.', url: 'https://snappa.com/', image: 'https://picsum.photos/seed/snappa-brand/600/400', dataAiHint: 'online graphics', pricing: 'Freemium' },
            { name: 'Looka', description: 'AI-powered logo maker and branding platform.', url: 'https://looka.com/', image: 'https://picsum.photos/seed/looka-brand/600/400', dataAiHint: 'logo maker', pricing: 'Freemium' },
            { name: 'Tailor Brands', description: 'An all-in-one branding platform.', url: 'https://www.tailorbrands.com/', image: 'https://picsum.photos/seed/tailorbrands/600/400', dataAiHint: 'business branding', pricing: 'Paid' },
            { name: 'Brandmark.io', description: 'Create a unique and professional logo.', url: 'https://brandmark.io/', image: 'https://picsum.photos/seed/brandmark-brand/600/400', dataAiHint: 'professional logo', pricing: 'Paid' },
            { name: 'Adobe Express', description: 'Templates for social posts, flyers, and more.', url: 'https://www.adobe.com/express/templates', image: 'https://picsum.photos/seed/express-brand/600/400', dataAiHint: 'free templates', pricing: 'Freemium' },
            { name: 'VistaCreate', description: 'Free design tool with thousands of templates.', url: 'https://create.vista.com/', image: 'https://picsum.photos/seed/vistacreate-brand/600/400', dataAiHint: 'design tool', pricing: 'Freemium' },
            { name: 'Fotor', description: 'Templates for social media, cards, and more.', url: 'https://www.fotor.com/templates/', image: 'https://picsum.photos/seed/fotor-brand/600/400', dataAiHint: 'photo templates', pricing: 'Freemium' },
            { name: 'Piktochart', description: 'Templates for infographics, reports, and posters.', url: 'https://piktochart.com/templates/', image: 'https://picsum.photos/seed/piktochart-brand/600/400', dataAiHint: 'infographic templates', pricing: 'Freemium' },
            { name: 'Marq', description: 'Brand templating platform to lock down your brand.', url: 'https://www.marq.com/', image: 'https://picsum.photos/seed/marq-brand/600/400', dataAiHint: 'brand templating', pricing: 'Paid' },
            { name: 'Frontify', description: 'The all-in-one brand management platform.', url: 'https://www.frontify.com/', image: 'https://picsum.photos/seed/frontify-brand/600/400', dataAiHint: 'brand guidelines', pricing: 'Paid' },
            { name: 'Bynder', description: 'Digital asset management and brand templates.', url: 'https://www.bynder.com/', image: 'https://picsum.photos/seed/bynder-brand/600/400', dataAiHint: 'digital assets', pricing: 'Paid' },
            { name: 'Freepik', description: 'Free vectors, stock photos & PSD.', url: 'https://www.freepik.com/', image: 'https://picsum.photos/seed/freepik-brand/600/400', dataAiHint: 'free graphics', pricing: 'Freemium' },
            { name: 'Pixeden', description: 'Premium and free design resources.', url: 'https://www.pixeden.com/', image: 'https://picsum.photos/seed/pixeden/600/400', dataAiHint: 'psd templates', pricing: 'Freemium' },
            { name: 'GraphicRiver', description: 'Hand-reviewed graphic assets from a community of designers.', url: 'https://graphicriver.net/', image: 'https://picsum.photos/seed/graphicriver/600/400', dataAiHint: 'design community', pricing: 'Paid' },
            { name: 'Vecteezy', description: 'Free vector art, stock photos & videos.', url: 'https://www.vecteezy.com/', image: 'https://picsum.photos/seed/vecteezy/600/400', dataAiHint: 'vector art', pricing: 'Freemium' },
            { name: 'Behance', description: 'Showcase and discover creative work.', url: 'https://www.behance.net/', image: 'https://picsum.photos/seed/behance-brand/600/400', dataAiHint: 'design inspiration', pricing: 'Free' },
            { name: 'Dribbble', description: 'Discover the world’s top designers & creatives.', url: 'https://dribbble.com/', image: 'https://picsum.photos/seed/dribbble-brand/600/400', dataAiHint: 'creative portfolio', pricing: 'Freemium' },
        ]
    }
];

export default function ContentCreationToolsPage() {
    const { toast } = useToast();
    const { favouritedTools, handleFavouriteToggle } = useFavourites();
    const [priceFilter, setPriceFilter] = React.useState('All');
    const [open, setOpen] = React.useState(false);

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
    
    const filteredToolData = React.useMemo(() => {
        if (priceFilter === 'All') {
            return toolData;
        }
        return toolData.map(category => ({
            ...category,
            tools: category.tools.filter(tool => tool.pricing === 'Free' || tool.pricing === 'Freemium')
        })).filter(category => category.tools.length > 0);
    }, [priceFilter]);


  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-sm pt-6 px-4">
        <header className="flex items-center justify-between gap-4">
            <div className='flex items-center gap-4'>
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
            </div>
            <DropdownMenu open={open} onOpenChange={setOpen}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="bg-white/50">
                        <Filter className="w-4 h-4 mr-2" />
                        Filter
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Filter by Price</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value={priceFilter} onValueChange={setPriceFilter}>
                        <DropdownMenuRadioItem value="All">All (Free & Paid)</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Free">Free Only</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-8">
            {filteredToolData.map((category, index) => {
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

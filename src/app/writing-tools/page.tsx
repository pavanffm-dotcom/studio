
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Feather, Type, Bot, Book, Search, FileText, Mic, Mail, MonitorPlay, MessageSquare, Briefcase, FileSignature, Dna, PenTool, Globe, StickyNote, BrainCircuit, Quote, Tv, Newspaper, Users, Key, BookOpen, ClipboardList, CheckCircle2, Lightbulb, GraduationCap, Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUserPreferences } from '@/context/user-preferences-context';
import { type Tool, type ToolCategory } from '@/lib/tools-data.tsx';

// Helper icons since they are not in lucide-react by default
const ShoppingCart = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
);

const Tag = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12.586 2.586a2 2 0 0 0-2.828 0L2.586 9.757a2 2 0 0 0 0 2.828l9.172 9.172a2 2 0 0 0 2.828 0l7.171-7.171a2 2 0 0 0 0-2.828L12.586 2.586z"></path>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
    </svg>
);

const toolData: ToolCategory[] = [
    {
        title: "Content Writing Tools",
        icon: <Feather className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper AI', description: 'AI Content Platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-content/600/400', dataAiHint: 'ai content', pricing: 'Paid' },
            { name: 'Writesonic', description: 'Create SEO-friendly content.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-content/600/400', dataAiHint: 'seo writing', pricing: 'Freemium' },
            { name: 'Rytr', description: 'A better, 10x faster way to write.', url: 'https://rytr.me/', image: 'https://picsum.photos/seed/rytr-content/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Copy.ai', description: 'Write better marketing copy.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-content/600/400', dataAiHint: 'copywriting tool', pricing: 'Freemium' },
            { name: 'Anyword', description: 'AI that converts.', url: 'https://anyword.com/', image: 'https://picsum.photos/seed/anyword-content/600/400', dataAiHint: 'ad copy', pricing: 'Paid' },
            { name: 'Texta.ai', description: 'Generate blog posts from a prompt.', url: 'https://www.texta.ai/', image: 'https://picsum.photos/seed/texta-content/600/400', dataAiHint: 'blog generator', pricing: 'Paid' },
            { name: 'NeuralText', description: 'The AI-powered content lifecycle platform.', url: 'https://www.neuraltext.com/', image: 'https://picsum.photos/seed/neuraltext-content/600/400', dataAiHint: 'content platform', pricing: 'Paid' },
            { name: 'Peppertype.ai', description: 'Your virtual content assistant.', url: 'https://www.peppertype.ai/', image: 'https://picsum.photos/seed/peppertype/600/400', dataAiHint: 'content assistant', pricing: 'Paid' },
            { name: 'GoCharlie', description: 'Create amazing content in seconds.', url: 'https://gocharlie.ai/', image: 'https://picsum.photos/seed/gocharlie/600/400', dataAiHint: 'amazing content', pricing: 'Paid' },
            { name: 'Simplified', description: 'All-in-one platform for modern marketing teams.', url: 'https://simplified.com/', image: 'https://picsum.photos/seed/simplified-cw/600/400', dataAiHint: 'marketing platform', pricing: 'Freemium' },
            { name: 'ClosersCopy', description: 'The most advanced AI copywriting platform.', url: 'https://www.closerscopy.com/', image: 'https://picsum.photos/seed/closerscopy/600/400', dataAiHint: 'sales copy', pricing: 'Paid' },
            { name: 'Copysmith', description: 'AI content creation for eCommerce.', url: 'https://copysmith.ai/', image: 'https://picsum.photos/seed/copysmith/600/400', dataAiHint: 'ecommerce content', pricing: 'Paid' },
            { name: 'LongShot AI', description: 'Create blogs that humans and search engines love.', url: 'https://www.longshot.ai/', image: 'https://picsum.photos/seed/longshot/600/400', dataAiHint: 'seo blog', pricing: 'Paid' },
            { name: 'Kafkai', description: 'Unique Article Generator.', url: 'https://kafkai.com/', image: 'https://picsum.photos/seed/kafkai/600/400', dataAiHint: 'article generator', pricing: 'Paid' },
            { name: 'AI Writer', description: 'The most accurate content generation platform.', url: 'https://ai-writer.com/', image: 'https://picsum.photos/seed/aiwriter/600/400', dataAiHint: 'content platform', pricing: 'Paid' },
            { name: 'Article Forge', description: 'High quality, AI-powered content generator.', url: 'https://articleforge.com/', image: 'https://picsum.photos/seed/articleforge/600/400', dataAiHint: 'content generator', pricing: 'Paid' },
            { name: 'WordAI', description: 'AI text rewriter.', url: 'https://wordai.com/', image: 'https://picsum.photos/seed/wordai/600/400', dataAiHint: 'text rewriter', pricing: 'Paid' },
            { name: 'Hypotenuse AI', description: 'AI writing assistant and text generator.', url: 'https://www.hypotenuse.ai/', image: 'https://picsum.photos/seed/hypotenuse/600/400', dataAiHint: 'text generator', pricing: 'Paid' },
            { name: 'ContentForge', description: 'Generate high-quality content in seconds.', url: 'https://contentforge.ai/', image: 'https://picsum.photos/seed/contentforge/600/400', dataAiHint: 'quality content', pricing: 'Paid' },
            { name: 'Headlime', description: 'AI-powered copywriter for marketers.', url: 'https://headlime.com/', image: 'https://picsum.photos/seed/headlime/600/400', dataAiHint: 'marketing copy', pricing: 'Paid' },
            { name: 'Smart Copy', description: 'Formerly Snazzy AI, by Unbounce.', url: 'https://unbounce.com/product/smart-copy/', image: 'https://picsum.photos/seed/smartcopy/600/400', dataAiHint: 'landing page', pricing: 'Paid' },
            { name: 'ShortlyAI', description: 'Your AI writing partner.', url: 'https://www.shortlyai.com/', image: 'https://picsum.photos/seed/shortlyai/600/400', dataAiHint: 'writing partner', pricing: 'Paid' },
            { name: 'Sassbook', description: 'AI story writer, text summarizer, and more.', url: 'https://sassbook.com/', image: 'https://picsum.photos/seed/sassbook/600/400', dataAiHint: 'story writer', pricing: 'Freemium' },
            { name: 'TextWizard', description: 'AI content generator for all your needs.', url: 'https://textwizard.io/', image: 'https://picsum.photos/seed/textwizard/600/400', dataAiHint: 'content needs', pricing: 'Paid' },
            { name: 'Typely', description: 'Free online proofreading and grammar checker.', url: 'https://typely.com/', image: 'https://picsum.photos/seed/typely/600/400', dataAiHint: 'proofreading tool', pricing: 'Free' },
            { name: 'Nichesss', description: 'Find profitable niches and business ideas.', url: 'https://nichesss.com/', image: 'https://picsum.photos/seed/nichesss-content/600/400', dataAiHint: 'business ideas', pricing: 'Paid' },
            { name: 'Thundercontent', description: 'Generate high quality articles in a flash.', url: 'https://thundercontent.com/', image: 'https://picsum.photos/seed/thundercontent/600/400', dataAiHint: 'flash articles', pricing: 'Paid' },
            { name: 'Chibi AI', description: 'The AI writing assistant that helps you write better.', url: 'https://chibi.ai/', image: 'https://picsum.photos/seed/chibiai/600/400', dataAiHint: 'better writing', pricing: 'Paid' },
            { name: 'Copywritely', description: 'SEO content analysis software.', url: 'https://copywritely.com/', image: 'https://picsum.photos/seed/copywritely/600/400', dataAiHint: 'seo analysis', pricing: 'Paid' },
            { name: 'Craftly.ai', description: 'Your AI-powered copywriting assistant.', url: 'https://www.craftly.ai/', image: 'https://picsum.photos/seed/craftly/600/400', dataAiHint: 'copywriting assistant', pricing: 'Paid' },
            { name: 'Creaitor.ai', description: 'The most affordable AI writer.', url: 'https://www.creaitor.ai/', image: 'https://picsum.photos/seed/creaitor/600/400', dataAiHint: 'affordable ai', pricing: 'Paid' },
            { name: 'Elephas', description: 'Personal AI writing assistant for Mac.', url: 'https://elephas.app/', image: 'https://picsum.photos/seed/elephas/600/400', dataAiHint: 'mac assistant', pricing: 'Paid' },
            { name: 'Friday AI', description: 'The AI writing assistant that saves you time.', url: 'https://www.friday.ai/', image: 'https://picsum.photos/seed/fridayai/600/400', dataAiHint: 'save time', pricing: 'Paid' },
            { name: 'GetGenie', description: 'AI content assistant for WordPress.', url: 'https://getgenie.ai/', image: 'https://picsum.photos/seed/getgenie/600/400', dataAiHint: 'wordpress ai', pricing: 'Freemium' },
            { name: 'GPT-3 Playground', description: 'Experiment with OpenAI\'s most powerful models.', url: 'https://platform.openai.com/playground', image: 'https://picsum.photos/seed/gpt3playground/600/400', dataAiHint: 'openai models', pricing: 'Paid' },
            { name: 'HelloScribe', description: 'AI-powered creative assistant for PR.', url: 'https://www.helloscribe.ai/', image: 'https://picsum.photos/seed/helloscribe/600/400', dataAiHint: 'pr assistant', pricing: 'Paid' },
            { name: 'Ideas AI', description: 'AI-powered idea generator.', url: 'https://ideasai.com/', image: 'https://picsum.photos/seed/ideasai/600/400', dataAiHint: 'idea generator', pricing: 'Freemium' },
            { name: 'InstaNovel', description: 'Generate a mini-novel with AI.', url: 'https://instanovel.ai/', image: 'https://picsum.photos/seed/instanovel/600/400', dataAiHint: 'mini novel', pricing: 'Freemium' },
            { name: 'Jarvis', description: 'Now known as Jasper AI.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jarvis-cw/600/400', dataAiHint: 'ai rebrand', pricing: 'Paid' },
            { name: 'Kuki AI', description: 'An embodied AI being to talk to.', url: 'https://www.kuki.ai/', image: 'https://picsum.photos/seed/kukiai/600/400', dataAiHint: 'ai chatbot', pricing: 'Free' },
            { name: 'Lex', description: 'A modern writing experience.', url: 'https://lex.page/', image: 'https://picsum.photos/seed/lexpage/600/400', dataAiHint: 'writing experience', pricing: 'Free' },
            { name: 'Lek', description: 'The fastest way to write anything.', url: 'https://lek.ai/', image: 'https://picsum.photos/seed/lekai/600/400', dataAiHint: 'fast writing', pricing: 'Paid' },
            { name: 'Lightkey', description: 'AI-powered text prediction for Windows.', url: 'https://www.lightkey.io/', image: 'https://picsum.photos/seed/lightkey/600/400', dataAiHint: 'text prediction', pricing: 'Freemium' },
            { name: 'Magic Write', description: 'Canva\'s AI text generator.', url: 'https://www.canva.com/magic-write/', image: 'https://picsum.photos/seed/magicwrite/600/400', dataAiHint: 'canva ai', pricing: 'Freemium' },
            { name: 'Moonbeam', description: 'Never write from scratch again.', url: 'https://www.gomoonbeam.com/', image: 'https://picsum.photos/seed/moonbeam/600/400', dataAiHint: 'writing outline', pricing: 'Paid' },
            { name: 'ParagraphAI', description: 'AI Writing Assistant for everyone.', url: 'https://paragraphai.com/', image: 'https://picsum.photos/seed/paragraphai/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Rasa', description: 'Conversational AI platform.', url: 'https://rasa.com/', image: 'https://picsum.photos/seed/rasa-cw/600/400', dataAiHint: 'ai platform', pricing: 'Freemium' },
            { name: 'BotDistrikt', description: 'AI chatbot builder.', url: 'https://botdistrikt.com/', image: 'https://picsum.photos/seed/botdistrikt/600/400', dataAiHint: 'chatbot builder', pricing: 'Paid' },
            { name: 'Cohere', description: 'Large language models for the enterprise.', url: 'https://cohere.com/', image: 'https://picsum.photos/seed/cohere-cw/600/400', dataAiHint: 'enterprise llm', pricing: 'Paid' },
            { name: 'ClickUp AI', description: 'AI in the all-in-one productivity platform.', url: 'https://clickup.com/features/ai', image: 'https://picsum.photos/seed/clickupai/600/400', dataAiHint: 'productivity ai', pricing: 'Paid' },
        ]
    },
    {
        title: "Blog Writing Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer AI', description: 'Write and optimize articles with AI.', url: 'https://surferseo.com/surfer-ai', image: 'https://picsum.photos/seed/surferai-blog/600/400', dataAiHint: 'ai article', pricing: 'Paid' },
            { name: 'Frase', description: 'Research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-blog/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'ContentBot', description: 'AI writer for bloggers and marketers.', url: 'https://contentbot.ai/', image: 'https://picsum.photos/seed/contentbot-blog/600/400', dataAiHint: 'ai blogger', pricing: 'Freemium' },
            { name: 'Scalenut', description: 'AI-powered content research and writing.', url: 'https://www.scalenut.com/', image: 'https://picsum.photos/seed/scalenut-blog/600/400', dataAiHint: 'content cruise', pricing: 'Paid' },
            { name: 'GrowthBar', description: 'The #1 AI writing tool for SEO.', url: 'https://www.growthbarseo.com/', image: 'https://picsum.photos/seed/growthbar-blog/600/400', dataAiHint: 'seo writing', pricing: 'Paid' },
            { name: 'WriterZen', description: 'Content workflow that simplifies your process.', url: 'https://writerzen.net/', image: 'https://picsum.photos/seed/writerzen-blog/600/400', dataAiHint: 'keyword research', pricing: 'Paid' },
            { name: 'Bramework', description: 'AI writer that helps you write blogs faster.', url: 'https://www.bramework.com/', image: 'https://picsum.photos/seed/bramework/600/400', dataAiHint: 'blog faster', pricing: 'Paid' },
            { name: 'Copy.ai Blog Post Wizard', description: 'Generate a blog post in minutes.', url: 'https://www.copy.ai/tools/blog-post-wizard', image: 'https://picsum.photos/seed/copyai-blog/600/400', dataAiHint: 'blog wizard', pricing: 'Freemium' },
            { name: 'Jasper Blog Post Writer', description: 'Create high-quality blog content.', url: 'https://www.jasper.ai/use-cases/blog-post-writer', image: 'https://picsum.photos/seed/jasper-blog/600/400', dataAiHint: 'quality content', pricing: 'Paid' },
            { name: 'Writesonic Article Writer', description: 'Generate long-form articles instantly.', url: 'https://writesonic.com/ai-article-writer', image: 'https://picsum.photos/seed/writesonic-blog/600/400', dataAiHint: 'long-form', pricing: 'Freemium' },
            { name: 'Rytr Blog Idea', description: 'Generate catchy blog, article, and essay ideas.', url: 'https://rytr.me/use-cases/blog-idea-outline', image: 'https://picsum.photos/seed/rytr-blog/600/400', dataAiHint: 'catchy ideas', pricing: 'Freemium' },
            { name: 'Texta.ai', description: 'Your blog posts written by AI.', url: 'https://www.texta.ai/', image: 'https://picsum.photos/seed/texta-blog/600/400', dataAiHint: 'ai written', pricing: 'Paid' },
            { name: 'KoalaWriter', description: 'Create SEO-optimized articles in one click.', url: 'https://koala.sh/writer', image: 'https://picsum.photos/seed/koalawriter/600/400', dataAiHint: 'one-click article', pricing: 'Paid' },
            { name: 'Agility Writer', description: 'Create high-quality, factual, and long-form content.', url: 'https://agilitywriter.ai/', image: 'https://picsum.photos/seed/agilitywriter/600/400', dataAiHint: 'factual content', pricing: 'Paid' },
            { name: 'SEO Writing AI', description: '1-click blog posts, with images, videos, and more.', url: 'https://seowriting.ai/', image: 'https://picsum.photos/seed/seowriting/600/400', dataAiHint: '1-click blog', pricing: 'Paid' },
            { name: 'Copymatic', description: 'Generate content, copy & images with AI.', url: 'https://copymatic.ai/', image: 'https://picsum.photos/seed/copymatic/600/400', dataAiHint: 'generate copy', pricing: 'Freemium' },
            { name: 'Byword.ai', description: 'Generate high-quality, AI-written articles.', url: 'https://byword.ai/', image: 'https://picsum.photos/seed/bywordai/600/400', dataAiHint: 'ai articles', pricing: 'Paid' },
            { name: 'Jenni AI', description: 'The AI assistant for students and bloggers.', url: 'https://jenni.ai/', image: 'https://picsum.photos/seed/jenniai-blog/600/400', dataAiHint: 'student blogger', pricing: 'Paid' },
            { name: 'Wordplay', description: 'The highest quality AI content generator.', url: 'https://wordplay.ai/', image: 'https://picsum.photos/seed/wordplay/600/400', dataAiHint: 'highest quality', pricing: 'Paid' },
            { name: 'AISEO', description: 'AI writing assistant, SEO and copywriting tool.', url: 'https://aiseo.ai/', image: 'https://picsum.photos/seed/aiseo/600/400', dataAiHint: 'copywriting tool', pricing: 'Freemium' },
            { name: 'Zupyak', description: 'Create content that ranks on Google.', url: 'https://www.zupyak.com/', image: 'https://picsum.photos/seed/zupyak/600/400', dataAiHint: 'google rank', pricing: 'Freemium' },
            { name: 'Typli.ai', description: 'The most intuitive AI Content tool.', url: 'https://typli.ai/', image: 'https://picsum.photos/seed/typli/600/400', dataAiHint: 'intuitive tool', pricing: 'Paid' },
            { name: 'Creator.ai', description: 'The future of content creation.', url: 'https://www.creator.ai/', image: 'https://picsum.photos/seed/creatorai-blog/600/400', dataAiHint: 'content creation', pricing: 'Freemium' },
            { name: 'CrawlQ', description: 'AI-powered content creation & SEO platform.', url: 'https://crawlq.ai/', image: 'https://picsum.photos/seed/crawlq/600/400', dataAiHint: 'seo platform', pricing: 'Paid' },
            { name: 'Yaara.ai', description: 'AI-powered content generation tool.', url: 'https://yaara.ai/', image: 'https://picsum.photos/seed/yaara/600/400', dataAiHint: 'content generation', pricing: 'Paid' },
            { name: 'GoCopy', description: 'AI-powered copywriting tools.', url: 'https://gocopy.io/', image: 'https://picsum.photos/seed/gocopy/600/400', dataAiHint: 'copywriting tools', pricing: 'Paid' },
            { name: 'Topic', description: 'Content optimization tool for writers.', url: 'https://www.usetopic.com/', image: 'https://picsum.photos/seed/topic/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'ShortlyAI', description: 'Your AI writing partner.', url: 'https://www.shortlyai.com/', image: 'https://picsum.photos/seed/shortlyai-blog/600/400', dataAiHint: 'writing partner', pricing: 'Paid' },
            { name: 'ContentForge', description: 'Generate high-quality marketing copy.', url: 'https://contentforge.ai/', image: 'https://picsum.photos/seed/contentforge-blog/600/400', dataAiHint: 'marketing copy', pricing: 'Paid' },
            { name: 'Kafkai', description: 'AI Article Writer for niche sites.', url: 'https://kafkai.com/', image: 'https://picsum.photos/seed/kafkai-blog/600/400', dataAiHint: 'niche sites', pricing: 'Paid' },
            { name: 'Articoolo', description: 'Creating unique articles from scratch.', url: 'https://articoolo.com/', image: 'https://picsum.photos/seed/articoolo/600/400', dataAiHint: 'unique articles', pricing: 'Paid' },
            { name: 'INK', description: 'AI writer, content optimizer, and SEO assistant.', url: 'https://inkforall.com/', image: 'https://picsum.photos/seed/ink/600/400', dataAiHint: 'seo assistant', pricing: 'Freemium' },
            { name: 'Copywritely', description: 'SEO Content & Copywriting Software.', url: 'https://copywritely.com/', image: 'https://picsum.photos/seed/copywritely-blog/600/400', dataAiHint: 'copywriting software', pricing: 'Paid' },
            { name: 'Hypotenuse AI', description: 'Turn a few keywords into original articles.', url: 'https://www.hypotenuse.ai/', image: 'https://picsum.photos/seed/hypotenuse-blog/600/400', dataAiHint: 'original articles', pricing: 'Paid' },
            { name: 'Unbound', description: 'AI Content Generation Platform.', url: 'https://www.unbound.ai/', image: 'https://picsum.photos/seed/unbound/600/400', dataAiHint: 'content platform', pricing: 'Freemium' },
            { name: 'Dashword', description: 'Content optimization software for SEO teams.', url: 'https://dashword.com/', image: 'https://picsum.photos/seed/dashword/600/400', dataAiHint: 'seo teams', pricing: 'Paid' },
            { name: 'WordHero', description: 'Generate AI-powered content in 1 click.', url: 'https://wordhero.co/', image: 'https://picsum.photos/seed/wordhero/600/400', dataAiHint: '1-click content', pricing: 'Paid' },
            { name: 'Copyspace', description: 'Generate any copy in seconds.', url: 'https://copyspace.ai/', image: 'https://picsum.photos/seed/copyspace/600/400', dataAiHint: 'generate copy', pricing: 'Paid' },
            { name: 'Eilla', description: 'AI writer for creating quality content.', url: 'https://eilla.ai/', image: 'https://picsum.photos/seed/eilla/600/400', dataAiHint: 'quality content', pricing: 'Paid' },
            { name: 'SmartWriter', description: 'Personalized outreach with AI.', url: 'https://www.smartwriter.ai/', image: 'https://picsum.photos/seed/smartwriter-blog/600/400', dataAiHint: 'personalized outreach', pricing: 'Paid' },
            { name: 'Zyro AI Writer', description: 'Generate professional text in seconds.', url: 'https://zyro.com/ai/writer', image: 'https://picsum.photos/seed/zyro-blog/600/400', dataAiHint: 'professional text', pricing: 'Freemium' },
            { name: 'Textcortex', description: 'AI writing assistant for all your needs.', url: 'https://textcortex.com/', image: 'https://picsum.photos/seed/textcortex/600/400', dataAiHint: 'writing needs', pricing: 'Freemium' },
            { name: 'Textio', description: 'Augmented writing platform.', url: 'https://textio.com/', image: 'https://picsum.photos/seed/textio-blog/600/400', dataAiHint: 'augmented writing', pricing: 'Paid' },
            { name: 'Textmetrics', description: 'AI-based text improvement software.', url: 'https://www.textmetrics.com/', image: 'https://picsum.photos/seed/textmetrics/600/400', dataAiHint: 'text improvement', pricing: 'Paid' },
            { name: 'Bertha.ai', description: 'AI writing assistant for WordPress.', url: 'https://bertha.ai/', image: 'https://picsum.photos/seed/bertha/600/400', dataAiHint: 'wordpress assistant', pricing: 'Paid' },
            { name: 'BlogNLP', description: 'AI-powered blog writing tool.', url: 'https://www.blognlp.com/', image: 'https://picsum.photos/seed/blognlp/600/400', dataAiHint: 'nlp tool', pricing: 'Freemium' },
            { name: 'Botowski', description: 'AI writer and content generator.', url: 'https://botowski.com/', image: 'https://picsum.photos/seed/botowski/600/400', dataAiHint: 'content generator', pricing: 'Paid' },
            { name: 'Content Villain', description: 'The AI content generator you need.', url: 'https://contentvillain.com/', image: 'https://picsum.photos/seed/contentvillain/600/400', dataAiHint: 'ai content', pricing: 'Paid' },
            { name: 'Cowriter', description: 'AI-powered writing partner.', url: 'https://cowriter.org/', image: 'https://picsum.photos/seed/cowriter/600/400', dataAiHint: 'writing partner', pricing: 'Paid' },
            { name: 'Enwrite', description: 'AI writer for businesses.', url: 'https://enwrite.co/', image: 'https://picsum.photos/seed/enwrite/600/400', dataAiHint: 'business writer', pricing: 'Paid' },
        ]
    },
    {
        title: "SEO Writing Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SurferSEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-seo/600/400', dataAiHint: 'seo audit', pricing: 'Paid' },
            { name: 'NeuronWriter', description: 'Optimize your content for Google.', url: 'https://neuronwriter.com/', image: 'https://picsum.photos/seed/neuronwriter-seo/600/400', dataAiHint: 'content optimizer', pricing: 'Paid' },
            { name: 'PageOptimizer Pro AI', description: 'On-page SEO tool for professionals.', url: 'https://pageoptimizer.pro/', image: 'https://picsum.photos/seed/pop-seo/600/400', dataAiHint: 'on-page seo', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-seo/600/400', dataAiHint: 'content strategy', pricing: 'Paid' },
            { name: 'Clearscope AI', description: 'The best-in-class SEO content optimization.', url: 'https://www.clearscope.io/', image: 'https://picsum.photos/seed/clearscope-seo/600/400', dataAiHint: 'seo content', pricing: 'Paid' },
            { name: 'Outranking', description: 'AI writing platform for higher rankings.', url: 'https://www.outranking.io/', image: 'https://picsum.photos/seed/outranking-seo/600/400', dataAiHint: 'ai seo', pricing: 'Paid' },
            { name: 'GrowthBar', description: 'AI for SEO. Write SEO-optimized blog content.', url: 'https://www.growthbarseo.com/', image: 'https://picsum.photos/seed/growthbar-seo/600/400', dataAiHint: 'seo blog', pricing: 'Paid' },
            { name: 'Frase', description: 'AI that helps you research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-seo/600/400', dataAiHint: 'content research', pricing: 'Paid' },
            { name: 'Scalenut', description: 'Cruise Mode for creating long-form content.', url: 'https://www.scalenut.com/', image: 'https://picsum.photos/seed/scalenut-seo/600/400', dataAiHint: 'long-form content', pricing: 'Paid' },
            { name: 'WriterZen', description: 'All-in-one content workflow for SEO.', url: 'https://writerzen.net/', image: 'https://picsum.photos/seed/writerzen-seo/600/400', dataAiHint: 'content workflow', pricing: 'Paid' },
            { name: 'SEMrush Writing Assistant', description: 'Check your content for SEO friendliness.', url: 'https://www.semrush.com/writing-assistant/', image: 'https://picsum.photos/seed/semrush-seo/600/400', dataAiHint: 'seo friendly', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'All-in-one SEO toolset.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-seo/600/400', dataAiHint: 'seo toolset', pricing: 'Paid' },
            { name: 'Moz Pro', description: 'The proven, all-in-one SEO toolset.', url: 'https://moz.com/products/pro', image: 'https://picsum.photos/seed/mozpro-seo/600/400', dataAiHint: 'all-in-one seo', pricing: 'Paid' },
            { name: 'Ubersuggest', description: 'Keyword tracking & SEO tool.', url: 'https://neilpatel.com/ubersuggest/', image: 'https://picsum.photos/seed/ubersuggest-seo/600/400', dataAiHint: 'keyword tracking', pricing: 'Freemium' },
            { name: 'SpyFu', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/', image: 'https://picsum.photos/seed/spyfu-seo/600/400', dataAiHint: 'competitor research', pricing: 'Paid' },
            { name: 'Keywords Everywhere', description: 'Browser addon for keyword research.', url: 'https://keywordseverywhere.com/', image: 'https://picsum.photos/seed/keywordseverywhere/600/400', dataAiHint: 'keyword addon', pricing: 'Paid' },
            { name: 'AnswerThePublic', description: 'Search listening tool for content ideas.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/answerthepublic-seo/600/400', dataAiHint: 'content ideas', pricing: 'Freemium' },
            { name: 'AlsoAsked', description: 'Discover the questions people are asking.', url: 'https://alsoasked.com/', image: 'https://picsum.photos/seed/alsoasked/600/400', dataAiHint: 'discover questions', pricing: 'Freemium' },
            { name: 'Screaming Frog SEO Spider', description: 'Website crawler for SEO audits.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog-seo/600/400', dataAiHint: 'website crawler', pricing: 'Freemium' },
            { name: 'Sitebulb', description: 'Website crawler for SEO professionals.', url: 'https://sitebulb.com/', image: 'https://picsum.photos/seed/sitebulb/600/400', dataAiHint: 'seo professionals', pricing: 'Paid' },
            { name: 'Yoast SEO', description: 'The #1 WordPress SEO plugin.', url: 'https://yoast.com/', image: 'https://picsum.photos/seed/yoast-seo/600/400', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'Rank Math', description: 'The Swiss Army Knife of WordPress SEO.', url: 'https://rankmath.com/', image: 'https://picsum.photos/seed/rankmath-seo/600/400', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'All in One SEO', description: 'The original WordPress SEO plugin.', url: 'https://aioseo.com/', image: 'https://picsum.photos/seed/aioseo-seo/600/400', dataAiHint: 'original seo', pricing: 'Freemium' },
            { name: 'Mangools', description: 'Juicy SEO tools you will love.', url: 'https://mangools.com/', image: 'https://picsum.photos/seed/mangools/600/400', dataAiHint: 'juicy seo', pricing: 'Freemium' },
            { name: 'Long Tail Pro', description: 'Find long-tail keywords.', url: 'https://longtailpro.com/', image: 'https://picsum.photos/seed/longtailpro/600/400', dataAiHint: 'long-tail keywords', pricing: 'Paid' },
            { name: 'SE Ranking', description: 'All-in-one SEO software.', url: 'https://seranking.com/', image: 'https://picsum.photos/seed/seranking/600/400', dataAiHint: 'seo software', pricing: 'Paid' },
            { name: 'CognitiveSEO', description: 'A complete SEO software suite.', url: 'https://cognitiveseo.com/', image: 'https://picsum.photos/seed/cognitiveseo/600/400', dataAiHint: 'seo suite', pricing: 'Paid' },
            { name: 'WebCEO', description: 'SEO software for digital agencies.', url: 'https://www.webceo.com/', image: 'https://picsum.photos/seed/webceo/600/400', dataAiHint: 'digital agencies', pricing: 'Paid' },
            { name: 'SEO PowerSuite', description: 'Desktop SEO software.', url: 'https://www.link-assistant.com/', image: 'https://picsum.photos/seed/seopowersuite/600/400', dataAiHint: 'desktop seo', pricing: 'Freemium' },
            { name: 'Raven Tools', description: 'White label SEO reports and tools.', url: 'https://raventools.com/', image: 'https://picsum.photos/seed/raventools/600/400', dataAiHint: 'white label', pricing: 'Paid' },
            { name: 'Majestic', description: 'The planet\'s largest link index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic/600/400', dataAiHint: 'link index', pricing: 'Paid' },
            { name: 'Linkody', description: 'Backlink tracker.', url: 'https://linkody.com/', image: 'https://picsum.photos/seed/linkody/600/400', dataAiHint: 'backlink tracker', pricing: 'Paid' },
            { name: 'Netpeak Spider', description: 'SEO crawler and auditor.', url: 'https://netpeaksoftware.com/spider', image: 'https://picsum.photos/seed/netpeakspider/600/400', dataAiHint: 'seo crawler', pricing: 'Paid' },
            { name: 'Diib', description: 'Answer your "what\'s next?" for growth.', url: 'https://diib.com/', image: 'https://picsum.photos/seed/diib/600/400', dataAiHint: 'growth tool', pricing: 'Freemium' },
            { name: 'Google Search Console', description: 'Tools and reports for your website\'s search traffic.', url: 'https://search.google.com/search-console/', image: 'https://picsum.photos/seed/gsc/600/400', dataAiHint: 'search traffic', pricing: 'Free' },
            { name: 'Bing Webmaster Tools', description: 'Tools to improve your site\'s performance in search.', url: 'https://www.bing.com/webmasters/', image: 'https://picsum.photos/seed/bingwebmaster/600/400', dataAiHint: 'site performance', pricing: 'Free' },
            { name: 'Google Analytics', description: 'Web analytics service by Google.', url: 'https://analytics.google.com/', image: 'https://picsum.photos/seed/googleanalytics-seo/600/400', dataAiHint: 'web analytics', pricing: 'Free' },
            { name: 'Matomo', description: 'Google Analytics alternative that protects your data.', url: 'https://matomo.org/', image: 'https://picsum.photos/seed/matomo/600/400', dataAiHint: 'privacy analytics', pricing: 'Freemium' },
            { name: 'Clicky', description: 'Real-time web analytics.', url: 'https://clicky.com/', image: 'https://picsum.photos/seed/clicky/600/400', dataAiHint: 'real-time analytics', pricing: 'Freemium' },
            { name: 'Plausible Analytics', description: 'Simple and privacy-friendly Google Analytics alternative.', url: 'https://plausible.io/', image: 'https://picsum.photos/seed/plausible/600/400', dataAiHint: 'privacy friendly', pricing: 'Paid' },
            { name: 'Fathom Analytics', description: 'Simple, privacy-focused website analytics.', url: 'https://usefathom.com/', image: 'https://picsum.photos/seed/fathom/600/400', dataAiHint: 'simple analytics', pricing: 'Paid' },
            { name: 'PostHog', description: 'The open-source product analytics suite.', url: 'https://posthog.com/', image: 'https://picsum.photos/seed/posthog/600/400', dataAiHint: 'product analytics', pricing: 'Freemium' },
            { name: 'Heap', description: 'Digital insights for everyone.', url: 'https://heap.io/', image: 'https://picsum.photos/seed/heap/600/400', dataAiHint: 'digital insights', pricing: 'Freemium' },
            { name: 'Mixpanel', description: 'Product analytics for converting, engaging, and retaining users.', url: 'https://mixpanel.com/', image: 'https://picsum.photos/seed/mixpanel/600/400', dataAiHint: 'user analytics', pricing: 'Freemium' },
            { name: 'Amplitude', description: 'Digital Optimization System.', url: 'https://amplitude.com/', image: 'https://picsum.photos/seed/amplitude/600/400', dataAiHint: 'optimization system', pricing: 'Freemium' },
            { name: 'Hotjar', description: 'Understand how users behave on your site.', url: 'https://www.hotjar.com/', image: 'https://picsum.photos/seed/hotjar/600/400', dataAiHint: 'user behavior', pricing: 'Freemium' },
            { name: 'Crazy Egg', description: 'Website optimization and heatmaps.', url: 'https://www.crazyegg.com/', image: 'https://picsum.photos/seed/crazyegg/600/400', dataAiHint: 'website heatmaps', pricing: 'Paid' },
            { name: 'VWO', description: 'A/B testing and conversion optimization platform.', url: 'https://vwo.com/', image: 'https://picsum.photos/seed/vwo/600/400', dataAiHint: 'ab testing', pricing: 'Paid' },
            { name: 'Optimizely', description: 'The world\'s leading experimentation platform.', url: 'https://www.optimizely.com/', image: 'https://picsum.photos/seed/optimizely/600/400', dataAiHint: 'experimentation', pricing: 'Paid' },
            { name: 'Google Optimize', description: 'A/B testing tool from Google.', url: 'https://marketingplatform.google.com/about/optimize/', image: 'https://picsum.photos/seed/googleoptimize/600/400', dataAiHint: 'google testing', pricing: 'Free' },
            { name: 'Unbounce', description: 'Smart landing page builder.', url: 'https://unbounce.com/', image: 'https://picsum.photos/seed/unbounce-seo/600/400', dataAiHint: 'landing pages', pricing: 'Paid' },
        ]
    },
    {
        title: "Article Rewriting / Paraphrasing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'QuillBot', description: 'AI-powered paraphrasing tool.', url: 'https://quillbot.com/', image: 'https://picsum.photos/seed/quillbot-rewrite/600/400', dataAiHint: 'paraphraser', pricing: 'Freemium' },
            { name: 'Spinbot', description: 'Article spinning, text rewriting, and content creation tool.', url: 'https://spinbot.com/', image: 'https://picsum.photos/seed/spinbot-rewrite/600/400', dataAiHint: 'text spinner', pricing: 'Freemium' },
            { name: 'Wordtune', description: 'Your personal writing companion.', url: 'https://www.wordtune.com/', image: 'https://picsum.photos/seed/wordtune-rewrite/600/400', dataAiHint: 'ai editor', pricing: 'Freemium' },
            { name: 'Paraphraser.io', description: 'Online paraphrasing tool to rephrase sentences.', url: 'https://www.paraphraser.io/', image: 'https://picsum.photos/seed/paraphraserio/600/400', dataAiHint: 'sentence rephraser', pricing: 'Freemium' },
            { name: 'PrepostSEO Paraphraser', description: 'Free online tool to rewrite articles.', url: 'https://www.prepostseo.com/paraphrasing-tool', image: 'https://picsum.photos/seed/prepostseo/600/400', dataAiHint: 'article rewriter', pricing: 'Free' },
            { name: 'AI Article Spinner', description: 'Rewrite your articles with AI.', url: 'https://aiarticlespinner.co/', image: 'https://picsum.photos/seed/aiarticlespinner/600/400', dataAiHint: 'content spinner', pricing: 'Paid' },
            { name: 'Chimp Rewriter', description: 'AI-powered article rewriter software.', url: 'https://chimprewriter.com/', image: 'https://picsum.photos/seed/chimprewriter/600/400', dataAiHint: 'rewriter software', pricing: 'Paid' },
            { name: 'Spinner Chief', description: 'The best article spinner on the planet.', url: 'http://www.spinnerchief.com/', image: 'https://picsum.photos/seed/spinnerchief/600/400', dataAiHint: 'best spinner', pricing: 'Paid' },
            { name: 'The Best Spinner 4', description: 'The world\'s best automatic article spinner.', url: 'https://thebestspinner.com/', image: 'https://picsum.photos/seed/thebestspinner/600/400', dataAiHint: 'automatic spinner', pricing: 'Paid' },
            { name: 'WordAI', description: 'AI text rewriter that creates human quality content.', url: 'https://wordai.com/', image: 'https://picsum.photos/seed/wordai-rewrite/600/400', dataAiHint: 'human quality', pricing: 'Paid' },
            { name: 'CleverSpinner', description: 'AI article spinner that rewrites content.', url: 'https://cleverspinner.com/', image: 'https://picsum.photos/seed/cleverspinner/600/400', dataAiHint: 'rewrite content', pricing: 'Paid' },
            { name: 'SmallSEOTools Paraphrasing', description: 'A free paraphrasing tool.', url: 'https://smallseotools.com/plagiarism-rewriter/', image: 'https://picsum.photos/seed/smallseotools-rewrite/600/400', dataAiHint: 'free tool', pricing: 'Free' },
            { name: 'DupliChecker', description: 'Free online paraphrasing tool.', url: 'https://www.duplichecker.com/paraphrasing-tool.php', image: 'https://picsum.photos/seed/duplichecker/600/400', dataAiHint: 'online tool', pricing: 'Free' },
            { name: 'RewriteGuru', description: 'Online article rewriter and spinner.', url: 'https://rewriteguru.com/', image: 'https://picsum.photos/seed/rewriteguru/600/400', dataAiHint: 'online rewriter', pricing: 'Paid' },
            { name: 'Article Rewriter Tool', description: 'Free online article rewriter.', url: 'https://articlerewritertool.com/', image: 'https://picsum.photos/seed/articlerewritertool/600/400', dataAiHint: 'free rewriter', pricing: 'Free' },
            { name: 'SEO Wagon Article Rewriter', description: 'Free article rewriter.', url: 'https://seowagon.com/article-rewriter', image: 'https://picsum.photos/seed/seowagon/600/400', dataAiHint: 'seo wagon', pricing: 'Free' },
            { name: 'Spin Rewriter', description: 'AI-powered article spinner.', url: 'https://www.spinrewriter.com/', image: 'https://picsum.photos/seed/spinrewriter/600/400', dataAiHint: 'ai spinner', pricing: 'Paid' },
            { name: 'CoderDuck Paraphrasing', description: 'Free online paraphrasing tool.', url: 'https://www.coderduck.com/paraphrasing-tool', image: 'https://picsum.photos/seed/coderduck/600/400', dataAiHint: 'free online tool', pricing: 'Free' },
            { name: 'Ref-N-Write', description: 'Academic writing assistant.', url: 'https://www.ref-n-write.com/', image: 'https://picsum.photos/seed/refnwrite/600/400', dataAiHint: 'academic assistant', pricing: 'Paid' },
            { name: 'Paraphrase Online', description: 'Free text rephrasing tool.', url: 'https://paraphrase-online.com/', image: 'https://picsum.photos/seed/paraphraseonline/600/400', dataAiHint: 'rephrasing tool', pricing: 'Free' },
            { name: 'Paraphrasing Tool', description: 'The best paraphrasing tool.', url: 'https://paraphrasing-tool.com/', image: 'https://picsum.photos/seed/paraphrasingtool/600/400', dataAiHint: 'best paraphrasing', pricing: 'Free' },
            { name: 'Plagiarism Detector', description: 'Paraphrasing tool to avoid plagiarism.', url: 'https://plagiarismdetector.net/paraphrasing-tool', image: 'https://picsum.photos/seed/plagiarismdetector/600/400', dataAiHint: 'avoid plagiarism', pricing: 'Free' },
            { name: 'EduBirdie Paraphrasing', description: 'Free online paraphrasing tool for students.', url: 'https://edubirdie.com/paraphrasing-tool', image: 'https://picsum.photos/seed/edubirdie/600/400', dataAiHint: 'student tool', pricing: 'Free' },
            { name: 'Essay-Services-Reviews', description: 'A paraphrasing tool.', url: 'https://www.essay-services-reviews.com/paraphrasing-tool/', image: 'https://picsum.photos/seed/essayservices/600/400', dataAiHint: 'essay tool', pricing: 'Free' },
            { name: 'Custom-writing.org', description: 'Free online paraphrasing tool.', url: 'https://custom-writing.org/paraphrasing-tool', image: 'https://picsum.photos/seed/customwriting/600/400', dataAiHint: 'custom tool', pricing: 'Free' },
            { name: 'MyAssignmentHelp', description: 'Online paraphrasing tool.', url: 'https://myassignmenthelp.com/paraphrasing-tool.php', image: 'https://picsum.photos/seed/myassignmenthelp/600/400', dataAiHint: 'assignment help', pricing: 'Freemium' },
            { name: 'Grammarly Paraphrasing', description: 'Rewrite sentences with Grammarly.', url: 'https://www.grammarly.com/paraphrasing-tool', image: 'https://picsum.photos/seed/grammarly-rewrite/600/400', dataAiHint: 'grammarly tool', pricing: 'Freemium' },
            { name: 'Project Topic', description: 'Free online paraphrasing tool.', url: 'https://www.projecttopics.org/paraphrasing-tool.php', image: 'https://picsum.photos/seed/projecttopic/600/400', dataAiHint: 'project tool', pricing: 'Free' },
            { name: 'Rephrase.info', description: 'Free online paraphrasing tool.', url: 'https://www.rephrase.info/', image: 'https://picsum.photos/seed/rephraseinfo/600/400', dataAiHint: 'rephrase tool', pricing: 'Free' },
            { name: 'StudyCrumb', description: 'Free paraphrasing tool for students.', url: 'https://studycrumb.com/paraphrasing-tool', image: 'https://picsum.photos/seed/studycrumb/600/400', dataAiHint: 'crumb tool', pricing: 'Free' },
            { name: 'GoParaphrase', description: 'Online paraphrasing tool.', url: 'https://goparaphrase.com/', image: 'https://picsum.photos/seed/goparaphrase/600/400', dataAiHint: 'go paraphrase', pricing: 'Free' },
            { name: 'Frase Rephraser', description: 'Rephrase sentences and paragraphs.', url: 'https://www.frase.io/tools/sentence-rewriter', image: 'https://picsum.photos/seed/frase-rewrite/600/400', dataAiHint: 'frase tool', pricing: 'Paid' },
            { name: 'WordAi Article Rewriter', description: 'AI text rewriter.', url: 'https://wordai.com/', image: 'https://picsum.photos/seed/wordai-article/600/400', dataAiHint: 'wordai tool', pricing: 'Paid' },
            { name: 'Copy.ai Rewriter', description: 'Rewrite content with AI.', url: 'https://www.copy.ai/tools/paragraph-rewriter', image: 'https://picsum.photos/seed/copyai-rewrite/600/400', dataAiHint: 'copyai tool', pricing: 'Freemium' },
            { name: 'Jasper Rewriter', description: 'Rephrase your content with AI.', url: 'https://www.jasper.ai/use-cases/rephraser', image: 'https://picsum.photos/seed/jasper-rewrite/600/400', dataAiHint: 'jasper tool', pricing: 'Paid' },
            { name: 'Writesonic Rewriter', description: 'AI-powered paraphrasing tool.', url: 'https://writesonic.com/paraphrasing-tool', image: 'https://picsum.photos/seed/writesonic-rewrite/600/400', dataAiHint: 'writesonic tool', pricing: 'Freemium' },
            { name: 'NeuralWriter', description: 'AI-powered content rewriter.', url: 'https://neuralwriter.com/', image: 'https://picsum.photos/seed/neuralwriter-rewrite/600/400', dataAiHint: 'neural tool', pricing: 'Freemium' },
            { name: 'Semrush Paraphrasing', description: 'Paraphrasing tool for SEO.', url: 'https://www.semrush.com/features/paraphrasing-tool/', image: 'https://picsum.photos/seed/semrush-rewrite/600/400', dataAiHint: 'semrush tool', pricing: 'Paid' },
            { name: 'Scribens', description: 'Free grammar and spell checker.', url: 'https://www.scribens.com/', image: 'https://picsum.photos/seed/scribens/600/400', dataAiHint: 'scribens tool', pricing: 'Freemium' },
            { name: 'Text-Helper', description: 'Free paraphrasing tool.', url: 'https://text-helper.com/paraphrasing-tool', image: 'https://picsum.photos/seed/texthelper/600/400', dataAiHint: 'helper tool', pricing: 'Free' },
            { name: 'Content Professor', description: 'Article spinning software.', url: 'http://contentprofessor.com/', image: 'https://picsum.photos/seed/contentprofessor/600/400', dataAiHint: 'professor tool', pricing: 'Paid' },
            { name: 'SEO Tool Station Rewriter', description: 'Free article rewriter tool.', url: 'https://seotoolstation.com/article-rewriter', image: 'https://picsum.photos/seed/seotoolstation/600/400', dataAiHint: 'station tool', pricing: 'Free' },
            { name: 'Free Article Spinner', description: 'Spin articles for free.', url: 'https://free-article-spinner.com/', image: 'https://picsum.photos/seed/freearticlespinner/600/400', dataAiHint: 'free spinner', pricing: 'Free' },
            { name: 'Plagiarisma', description: 'Plagiarism checker and article rewriter.', url: 'http://plagiarisma.net/spinner.php', image: 'https://picsum.photos/seed/plagiarisma/600/400', dataAiHint: 'plagiarism tool', pricing: 'Freemium' },
            { name: 'Rewriter Tools', description: 'A collection of rewriting tools.', url: 'https://rewritertools.com/', image: 'https://picsum.photos/seed/rewritertools/600/400', dataAiHint: 'collection tool', pricing: 'Free' },
            { name: 'The Artipot Rewriter', description: 'Free article spinner tool.', url: '#', image: 'https://picsum.photos/seed/artipot/600/400', dataAiHint: 'artipot tool', pricing: 'Free' },
            { name: 'Online-Paraphraser', description: 'Paraphrase text online.', url: 'https://www.online-paraphraser.com/', image: 'https://picsum.photos/seed/onlineparaphraser/600/400', dataAiHint: 'online tool', pricing: 'Free' },
            { name: 'Paraphrasing.io', description: 'Free paraphrasing tool.', url: 'https://www.paraphrasing.io/', image: 'https://picsum.photos/seed/paraphrasingio/600/400', dataAiHint: 'io tool', pricing: 'Free' },
            { name: 'Rephrase Tool', description: 'Free online paraphrasing tool.', url: 'https://rephrasetool.net/', image: 'https://picsum.photos/seed/rephrasetool/600/400', dataAiHint: 'net tool', pricing: 'Free' },
            { name: 'Paperial', description: 'Paraphrasing tool for essays.', url: 'https://paperial.com/paraphrasing-tool', image: 'https://picsum.photos/seed/paperial/600/400', dataAiHint: 'paperial tool', pricing: 'Free' },
            { name: 'IVY Panda', description: 'Free paraphrasing tool.', url: 'https://ivypanda.com/paraphrasing-tool', image: 'https://picsum.photos/seed/ivypanda/600/400', dataAiHint: 'ivy tool', pricing: 'Free' },
        ]
    },
    {
        title: "Script Writing Tools",
        icon: <Tv className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper Script Generator', description: 'Generate video scripts with AI.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-script/600/400', dataAiHint: 'video script', pricing: 'Paid' },
            { name: 'Writesonic Script AI', description: 'AI script writer for videos and podcasts.', url: 'https://writesonic.com/ai-script-writer', image: 'https://picsum.photos/seed/writesonic-script/600/400', dataAiHint: 'podcast script', pricing: 'Freemium' },
            { name: 'DeepStory', description: 'AI story and script generation.', url: 'https://deepstory.ai/', image: 'https://picsum.photos/seed/deepstory/600/400', dataAiHint: 'story generator', pricing: 'Paid' },
            { name: 'ScriptBook AI', description: 'AI-driven script analysis.', url: 'https://www.scriptbook.io/', image: 'https://picsum.photos/seed/scriptbook/600/400', dataAiHint: 'script analysis', pricing: 'Paid' },
            { name: 'HyperWrite Script AI', description: 'Your personal AI writing assistant.', url: 'https://www.hyperwriteai.com/', image: 'https://picsum.photos/seed/hyperwrite-script/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Nichesss Script Maker', description: 'Find profitable niches and generate content.', url: 'https://nichesss.com/', image: 'https://picsum.photos/seed/nichesss-script/600/400', dataAiHint: 'content maker', pricing: 'Paid' },
            { name: 'Final Draft', description: 'The industry standard for screenwriting.', url: 'https://www.finaldraft.com/', image: 'https://picsum.photos/seed/finaldraft-script/600/400', dataAiHint: 'screenwriting software', pricing: 'Paid' },
            { name: 'Celtx', description: 'All-in-one studio for writing and pre-production.', url: 'https://www.celtx.com/', image: 'https://picsum.photos/seed/celtx/600/400', dataAiHint: 'pre-production', pricing: 'Freemium' },
            { name: 'Trelby', description: 'Free, simple, and elegantly laid out screenwriting program.', url: 'https://www.trelby.org/', image: 'https://picsum.photos/seed/trelby/600/400', dataAiHint: 'free screenwriting', pricing: 'Free' },
            { name: 'Fade In', description: 'Professional screenwriting software.', url: 'https://www.fadeinpro.com/', image: 'https://picsum.photos/seed/fadein/600/400', dataAiHint: 'pro software', pricing: 'Paid' },
            { name: 'WriterDuet', description: 'Real-time collaborative screenwriting software.', url: 'https://writerduet.com/', image: 'https://picsum.photos/seed/writerduet/600/400', dataAiHint: 'collaborative writing', pricing: 'Freemium' },
            { name: 'Scrivener', description: 'The go-to app for writers of all kinds.', url: 'https://www.literatureandlatte.com/scrivener/overview', image: 'https://picsum.photos/seed/scrivener-script/600/400', dataAiHint: 'novel writing', pricing: 'Paid' },
            { name: 'Movie Magic Screenwriter', description: 'Award-winning screenwriting software.', url: 'https://www.write-bros.com/movie-magic-screenwriter', image: 'https://picsum.photos/seed/moviemagic/600/400', dataAiHint: 'award-winning', pricing: 'Paid' },
            { name: 'Highland 2', description: 'A better way to write.', url: 'https://quoteunquoteapps.com/highland-2/', image: 'https://picsum.photos/seed/highland2/600/400', dataAiHint: 'mac screenwriting', pricing: 'Paid' },
            { name: 'Arc Studio Pro', description: 'Screenwriting software for the 21st century.', url: 'https://www.arcstudiopro.com/', image: 'https://picsum.photos/seed/arcstudiopro/600/400', dataAiHint: 'modern screenwriting', pricing: 'Freemium' },
            { name: 'KIT Scenarist', description: 'Free and open-source screenwriting software.', url: 'https://kitscenarist.ru/en/', image: 'https://picsum.photos/seed/kitscenarist/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Squibler', description: 'The writing app for authors and screenwriters.', url: 'https://www.squibler.io/', image: 'https://picsum.photos/seed/squibler/600/400', dataAiHint: 'writing app', pricing: 'Paid' },
            { name: 'Causality', description: 'A new kind of writing app for stories.', url: 'https://www.causality.io/', image: 'https://picsum.photos/seed/causality/600/400', dataAiHint: 'story app', pricing: 'Paid' },
            { name: 'Slugline', description: 'Simple, elegant screenwriting.', url: 'https://slugline.co/', image: 'https://picsum.photos/seed/slugline/600/400', dataAiHint: 'simple screenwriting', pricing: 'Paid' },
            { name: 'DramaQueen', description: 'The author\'s software for plot, characters, and story.', url: 'https://dramaqueen.info/en/', image: 'https://picsum.photos/seed/dramaqueen/600/400', dataAiHint: 'plot software', pricing: 'Freemium' },
            { name: 'Plottr', description: 'Visually plot your books.', url: 'https://plottr.com/', image: 'https://picsum.photos/seed/plottr-script/600/400', dataAiHint: 'visual plotting', pricing: 'Paid' },
            { name: 'Save the Cat!', description: 'The #1 story development software.', url: 'https://savethecat.com/', image: 'https://picsum.photos/seed/savethecat/600/400', dataAiHint: 'story development', pricing: 'Paid' },
            { name: 'StudioBinder', description: 'Production management software.', url: 'https://www.studiobinder.com/', image: 'https://picsum.photos/seed/studiobinder/600/400', dataAiHint: 'production management', pricing: 'Freemium' },
            { name: 'Prewrite', description: 'Visual outlining for screenwriters.', url: 'https://www.prewrite.com/', image: 'https://picsum.photos/seed/prewrite/600/400', dataAiHint: 'visual outlining', pricing: 'Paid' },
            { name: 'Boords', description: 'The modern storyboarding & animatic tool.', url: 'https://boords.com/', image: 'https://picsum.photos/seed/boords/600/400', dataAiHint: 'storyboarding tool', pricing: 'Paid' },
            { name: 'Toon Boom Storyboard Pro', description: 'The industry standard for storyboarding.', url: 'https://www.toonboom.com/products/storyboard-pro', image: 'https://picsum.photos/seed/storyboardpro/600/400', dataAiHint: 'industry standard', pricing: 'Paid' },
            { name: 'Notion', description: 'The all-in-one workspace for notes, tasks, and scripts.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-script/600/400', dataAiHint: 'workspace app', pricing: 'Freemium' },
            { name: 'Milanote', description: 'An easy-to-use tool to organize your ideas.', url: 'https://milanote.com/', image: 'https://picsum.photos/seed/milanote-script/600/400', dataAiHint: 'idea organization', pricing: 'Freemium' },
            { name: 'Google Docs', description: 'Create and collaborate on online documents.', url: 'https://docs.google.com/', image: 'https://picsum.photos/seed/gdocs-script/600/400', dataAiHint: 'online documents', pricing: 'Free' },
            { name: 'Microsoft Word', description: 'The standard for word processing.', url: 'https://www.microsoft.com/en-us/microsoft-365/word', image: 'https://picsum.photos/seed/word-script/600/400', dataAiHint: 'word processor', pricing: 'Paid' },
            { name: 'Descript', description: 'All-in-one audio & video editing.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-script/600/400', dataAiHint: 'audio editing', pricing: 'Freemium' },
            { name: 'Otter.ai', description: 'AI-powered transcription service.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-script/600/400', dataAiHint: 'transcription service', pricing: 'Freemium' },
            { name: 'Trint', description: 'AI-powered audio transcription.', url: 'https://trint.com/', image: 'https://picsum.photos/seed/trint-script/600/400', dataAiHint: 'audio transcription', pricing: 'Paid' },
            { name: 'Scribie', description: 'Manual and automated transcription service.', url: 'https://scribie.com/', image: 'https://picsum.photos/seed/scribie/600/400', dataAiHint: 'manual transcription', pricing: 'Paid' },
            { name: 'Rev', description: 'Transcription, captions, and subtitles.', url: 'https://www.rev.com/', image: 'https://picsum.photos/seed/rev-script/600/400', dataAiHint: 'caption service', pricing: 'Paid' },
            { name: 'Sonix', description: 'Automated transcription, translation, and subtitling.', url: 'https://sonix.ai/', image: 'https://picsum.photos/seed/sonix/600/400', dataAiHint: 'automated subtitling', pricing: 'Paid' },
            { name: 'Audext', description: 'AI-powered audio to text transcription.', url: 'https://audext.com/', image: 'https://picsum.photos/seed/audext/600/400', dataAiHint: 'audio to text', pricing: 'Paid' },
            { name: 'Happy Scribe', description: 'Transcription & Subtitles.', url: 'https://www.happyscribe.com/', image: 'https://picsum.photos/seed/happyscribe/600/400', dataAiHint: 'subtitles service', pricing: 'Paid' },
        ]
    },
    {
        title: "Social Media Writing Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Predis.ai', description: 'AI Social Media Marketing tool.', url: 'https://predis.ai/', image: 'https://picsum.photos/seed/predis-social/600/400', dataAiHint: 'social marketing', pricing: 'Freemium' },
            { name: 'CopyMonkey', description: 'AI-generated product descriptions.', url: 'https://copymonkey.ai/', image: 'https://picsum.photos/seed/copymonkey-social/600/400', dataAiHint: 'product description', pricing: 'Paid' },
            { name: 'Ocoya', description: 'Create and schedule social media content faster.', url: 'https://www.ocoya.net/', image: 'https://picsum.photos/seed/ocoya-social/600/400', dataAiHint: 'content scheduler', pricing: 'Paid' },
            { name: 'Hypefury AI', description: 'Grow and monetize your Twitter account.', url: 'https://hypefury.com/', image: 'https://picsum.photos/seed/hypefury-social/600/400', dataAiHint: 'twitter growth', pricing: 'Paid' },
            { name: 'Lately.ai', description: 'AI-powered content creation and publishing.', url: 'https://www.lately.ai/', image: 'https://picsum.photos/seed/lately-social/600/400', dataAiHint: 'content publishing', pricing: 'Paid' },
            { name: 'Postwise', description: 'Write, schedule, and grow on Twitter with AI.', url: 'https://postwise.ai/', image: 'https://picsum.photos/seed/postwise-social/600/400', dataAiHint: 'twitter ai', pricing: 'Paid' },
            { name: 'Buffer', description: 'Plan and schedule your social media campaigns.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-social/600/400', dataAiHint: 'social media campaigns', pricing: 'Freemium' },
            { name: 'Hootsuite', description: 'Manage all your social media in one place.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-social/600/400', dataAiHint: 'social media management', pricing: 'Paid' },
            { name: 'Sprout Social', description: 'Social media management solutions.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sproutsocial-social/600/400', dataAiHint: 'social solutions', pricing: 'Paid' },
            { name: 'Agorapulse', description: 'Social media management software.', url: 'https://www.agorapulse.com/', image: 'https://picsum.photos/seed/agorapulse/600/400', dataAiHint: 'management software', pricing: 'Paid' },
            { name: 'Sendible', description: 'The leading social media management tool for agencies.', url: 'https://www.sendible.com/', image: 'https://picsum.photos/seed/sendible/600/400', dataAiHint: 'agency tool', pricing: 'Paid' },
            { name: 'e-clincher', description: 'Social media management tool with post scheduling.', url: 'https://eclincher.com/', image: 'https://picsum.photos/seed/eclincher/600/400', dataAiHint: 'post scheduling', pricing: 'Paid' },
            { name: 'CoSchedule', description: 'The marketing calendar for everything.', url: 'https://coschedule.com/', image: 'https://picsum.photos/seed/coschedule-social/600/400', dataAiHint: 'marketing calendar', pricing: 'Freemium' },
            { name: 'Tailwind', description: 'Pinterest & Instagram scheduler, creator & manager.', url: 'https://www.tailwindapp.com/', image: 'https://picsum.photos/seed/tailwind/600/400', dataAiHint: 'instagram scheduler', pricing: 'Freemium' },
            { name: 'Later', description: 'Plan, schedule, and analyze posts for social media.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-social/600/400', dataAiHint: 'analyze posts', pricing: 'Freemium' },
            { name: 'Canva', description: 'Create beautiful designs for social media.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-social/600/400', dataAiHint: 'beautiful designs', pricing: 'Freemium' },
            { name: 'Adobe Express', description: 'Quickly and easily make standout content.', url: 'https://www.adobe.com/express/', image: 'https://picsum.photos/seed/adobeexpress-social/600/400', dataAiHint: 'standout content', pricing: 'Freemium' },
            { name: 'Loomly', description: 'The Brand Success Platform for marketing teams.', url: 'https://www.loomly.com/', image: 'https://picsum.photos/seed/loomly-social/600/400', dataAiHint: 'brand success', pricing: 'Paid' },
            { name: 'MeetEdgar', description: 'Automate your social media.', url: 'https://meetedgar.com/', image: 'https://picsum.photos/seed/meetedgar/600/400', dataAiHint: 'automate social', pricing: 'Paid' },
            { name: 'SocialPilot', description: 'Social media marketing & scheduling tool.', url: 'https://www.socialpilot.co/', image: 'https://picsum.photos/seed/socialpilot/600/400', dataAiHint: 'marketing tool', pricing: 'Paid' },
            { name: 'Crowdfire', description: 'The super-smart social media manager.', url: 'https://www.crowdfireapp.com/', image: 'https://picsum.photos/seed/crowdfire/600/400', dataAiHint: 'smart manager', pricing: 'Freemium' },
            { name: 'MavSocial', description: 'Social media management & advertising.', url: 'https://mavsocial.com/', image: 'https://picsum.photos/seed/mavsocial/600/400', dataAiHint: 'advertising tool', pricing: 'Paid' },
            { name: 'Post Planner', description: 'Find, plan, and post better content.', url: 'https://www.postplanner.com/', image: 'https://picsum.photos/seed/postplanner/600/400', dataAiHint: 'better content', pricing: 'Paid' },
            { name: 'TweetDeck', description: 'The most powerful Twitter tool for real-time tracking.', url: 'https://tweetdeck.twitter.com/', image: 'https://picsum.photos/seed/tweetdeck/600/400', dataAiHint: 'twitter tool', pricing: 'Free' },
            { name: 'BuzzSumo', description: 'Find the most shared content across social.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-social/600/400', dataAiHint: 'shared content', pricing: 'Freemium' },
            { name: 'Feedly', description: 'Organize, read and share what matters to you.', url: 'https://feedly.com/', image: 'https://picsum.photos/seed/feedly/600/400', dataAiHint: 'read and share', pricing: 'Freemium' },
            { name: 'Socialbakers', description: 'AI-powered social media marketing suite.', url: 'https://www.socialbakers.com/', image: 'https://picsum.photos/seed/socialbakers/600/400', dataAiHint: 'marketing suite', pricing: 'Paid' },
            { name: 'Brandwatch', description: 'Digital consumer intelligence.', url: 'https://www.brandwatch.com/', image: 'https://picsum.photos/seed/brandwatch/600/400', dataAiHint: 'consumer intelligence', pricing: 'Paid' },
            { name: 'Talkwalker', description: 'Social listening and analytics.', url: 'https://www.talkwalker.com/', image: 'https://picsum.photos/seed/talkwalker/600/400', dataAiHint: 'social listening', pricing: 'Paid' },
            { name: 'Mention', description: 'Media monitoring and social listening.', url: 'https://mention.com/', image: 'https://picsum.photos/seed/mention/600/400', dataAiHint: 'media monitoring', pricing: 'Freemium' },
            { name: 'Keyhole', description: 'Hashtag tracking and social media analytics.', url: 'https://keyhole.co/', image: 'https://picsum.photos/seed/keyhole/600/400', dataAiHint: 'hashtag tracking', pricing: 'Paid' },
            { name: 'RiteTag', description: 'Hashtag suggestions for images and text.', url: 'https://ritetag.com/', image: 'https://picsum.photos/seed/ritetag/600/400', dataAiHint: 'hashtag suggestions', pricing: 'Freemium' },
            { name: 'Hashtagify', description: 'Find the best hashtags to reach your audience.', url: 'https://hashtagify.me/', image: 'https://picsum.photos/seed/hashtagify/600/400', dataAiHint: 'best hashtags', pricing: 'Freemium' },
            { name: 'Social Blade', description: 'Social media statistics.', url: 'https://socialblade.com/', image: 'https://picsum.photos/seed/socialblade/600/400', dataAiHint: 'media statistics', pricing: 'Freemium' },
            { name: 'Social Animal', description: 'Content marketing and influencer marketing platform.', url: 'https://socialanimal.com/', image: 'https://picsum.photos/seed/socialanimal/600/400', dataAiHint: 'influencer marketing', pricing: 'Paid' },
            { name: 'Quuu', description: 'Hand-curated content suggestions.', url: 'https://quuu.co/', image: 'https://picsum.photos/seed/quuu/600/400', dataAiHint: 'content suggestions', pricing: 'Freemium' },
            { name: 'PromoRepublic', description: 'Social media marketing platform with content calendar.', url: 'https://promorepublic.com/', image: 'https://picsum.photos/seed/promorepublic/600/400', dataAiHint: 'content calendar', pricing: 'Paid' },
            { name: 'Kontentino', description: 'Social media tool for agencies.', url: 'https://www.kontentino.com/', image: 'https://picsum.photos/seed/kontentino/600/400', dataAiHint: 'agency tool', pricing: 'Paid' },
            { name: 'Metricool', description: 'Analyze, manage, and grow your digital presence.', url: 'https://metricool.com/', image: 'https://picsum.photos/seed/metricool/600/400', dataAiHint: 'digital presence', pricing: 'Freemium' },
            { name: 'Planable', description: 'Social media collaboration tool.', url: 'https://planable.io/', image: 'https://picsum.photos/seed/planable/600/400', dataAiHint: 'collaboration tool', pricing: 'Freemium' },
            { name: 'Zoho Social', description: 'Social media management software.', url: 'https://www.zoho.com/social/', image: 'https://picsum.photos/seed/zohosocial/600/400', dataAiHint: 'zoho social', pricing: 'Freemium' },
            { name: 'Heyday', description: 'AI chatbot for customer messaging.', url: 'https://www.heyday.ai/', image: 'https://picsum.photos/seed/heyday/600/400', dataAiHint: 'ai chatbot', pricing: 'Paid' },
            { name: 'Sociality.io', description: 'A complete social media management platform.', url: 'https://sociality.io/', image: 'https://picsum.photos/seed/socialityio/600/400', dataAiHint: 'complete platform', pricing: 'Paid' },
            { name: 'Flick', description: 'Hashtag tool for Instagram.', url: 'https://www.flick.tech/', image: 'https://picsum.photos/seed/flick/600/400', dataAiHint: 'instagram tool', pricing: 'Paid' },
            { name: 'ContentStudio', description: 'Content marketing and social media management platform.', url: 'https://contentstudio.io/', image: 'https://picsum.photos/seed/contentstudio/600/400', dataAiHint: 'marketing platform', pricing: 'Paid' },
            { name: 'Missinglettr', description: 'Turn blog posts into social media campaigns.', url: 'https://missinglettr.com/', image: 'https://picsum.photos/seed/missinglettr/600/400', dataAiHint: 'blog campaigns', pricing: 'Paid' },
            { name: 'Repurpose.io', description: 'Automate content repurposing.', url: 'https://repurpose.io/', image: 'https://picsum.photos/seed/repurposeio/600/400', dataAiHint: 'content repurposing', pricing: 'Paid' },
            { name: 'dlvrit', description: 'Automate your social media posting.', url: 'https://dlvrit.com/', image: 'https://picsum.photos/seed/dlvrit/600/400', dataAiHint: 'automate posting', pricing: 'Freemium' },
            { name: 'Vista Social', description: 'Modern social media management.', url: 'https://www.vistasocial.com/', image: 'https://picsum.photos/seed/vistasocial/600/400', dataAiHint: 'modern management', pricing: 'Paid' },
            { name: 'Sociamonials', description: 'Social media marketing software.', url: 'https://www.sociamonials.com/', image: 'https://picsum.photos/seed/sociamonials/600/400', dataAiHint: 'marketing software', pricing: 'Paid' },
        ]
    },
    {
        title: "Email Writing Tools",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Flowrite', description: 'Turn your instructions into ready-to-send emails.', url: 'https://www.flowrite.com/', image: 'https://picsum.photos/seed/flowrite-email/600/400', dataAiHint: 'ai email', pricing: 'Paid' },
            { name: 'Lavender AI', description: 'The AI email assistant.', url: 'https://www.lavender.ai/', image: 'https://picsum.photos/seed/lavender-email/600/400', dataAiHint: 'email assistant', pricing: 'Freemium' },
            { name: 'Gmass AI Writer', description: 'AI to write emails inside Gmail.', url: 'https://www.gmass.co/blog/ai-writer/', image: 'https://picsum.photos/seed/gmass-email/600/400', dataAiHint: 'gmail writer', pricing: 'Freemium' },
            { name: 'Smartwriter.ai', description: 'Generate personalized sales emails.', url: 'https://www.smartwriter.ai/', image: 'https://picsum.photos/seed/smartwriter-email/600/400', dataAiHint: 'sales emails', pricing: 'Paid' },
            { name: 'Instantly AI Writer', description: 'Cold email automation with AI.', url: 'https://instantly.ai/', image: 'https://picsum.photos/seed/instantly-email/600/400', dataAiHint: 'cold email', pricing: 'Paid' },
            { name: 'Dripify AI Templates', description: 'LinkedIn automation and lead generation.', url: 'https://dripify.io/', image: 'https://picsum.photos/seed/dripify-email/600/400', dataAiHint: 'linkedin automation', pricing: 'Paid' },
            { name: 'Mailchimp', description: 'All-in-one marketing platform.', url: 'https://mailchimp.com/', image: 'https://picsum.photos/seed/mailchimp-email/600/400', dataAiHint: 'email marketing', pricing: 'Freemium' },
            { name: 'Constant Contact', description: 'Email & digital marketing platform.', url: 'https://www.constantcontact.com/', image: 'https://picsum.photos/seed/constantcontact/600/400', dataAiHint: 'digital marketing', pricing: 'Paid' },
            { name: 'HubSpot Email Marketing', description: 'Email marketing tools.', url: 'https://www.hubspot.com/products/marketing/email', image: 'https://picsum.photos/seed/hubspot-email/600/400', dataAiHint: 'hubspot marketing', pricing: 'Freemium' },
            { name: 'ConvertKit', description: 'The creator marketing platform.', url: 'https://convertkit.com/', image: 'https://picsum.photos/seed/convertkit-email/600/400', dataAiHint: 'creator marketing', pricing: 'Paid' },
            { name: 'AWeber', description: 'Email marketing for small businesses.', url: 'https://www.aweber.com/', image: 'https://picsum.photos/seed/aweber/600/400', dataAiHint: 'small business', pricing: 'Freemium' },
            { name: 'GetResponse', description: 'Powerful, simplified tool to send emails.', url: 'https://www.getresponse.com/', image: 'https://picsum.photos/seed/getresponse/600/400', dataAiHint: 'send emails', pricing: 'Freemium' },
            { name: 'MailerLite', description: 'Advanced email marketing.', url: 'https://www.mailerlite.com/', image: 'https://picsum.photos/seed/mailerlite-email/600/400', dataAiHint: 'advanced email', pricing: 'Freemium' },
            { name: 'Sendinblue (Brevo)', description: 'The smartest all-in-one marketing platform.', url: 'https://www.brevo.com/', image: 'https://picsum.photos/seed/brevo-email/600/400', dataAiHint: 'marketing platform', pricing: 'Freemium' },
            { name: 'Campaign Monitor', description: 'Email marketing & automation.', url: 'https://www.campaignmonitor.com/', image: 'https://picsum.photos/seed/campaignmonitor/600/400', dataAiHint: 'email automation', pricing: 'Paid' },
            { name: 'Drip', description: 'Marketing automation for eCommerce.', url: 'https://www.drip.com/', image: 'https://picsum.photos/seed/drip-email/600/400', dataAiHint: 'ecommerce marketing', pricing: 'Paid' },
            { name: 'Klaviyo', description: 'Email marketing and SMS for eCommerce.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo/600/400', dataAiHint: 'ecommerce sms', pricing: 'Freemium' },
            { name: 'ActiveCampaign', description: 'Customer experience automation.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign/600/400', dataAiHint: 'customer experience', pricing: 'Paid' },
            { name: 'Keap (Infusionsoft)', description: 'Sales & marketing automation.', url: 'https://keap.com/', image: 'https://picsum.photos/seed/keap/600/400', dataAiHint: 'sales automation', pricing: 'Paid' },
            { name: 'SendGrid', description: 'Email delivery service.', url: 'https://sendgrid.com/', image: 'https://picsum.photos/seed/sendgrid-email/600/400', dataAiHint: 'email delivery', pricing: 'Freemium' },
            { name: 'Mailgun', description: 'Transactional email API service.', url: 'https://www.mailgun.com/', image: 'https://picsum.photos/seed/mailgun/600/400', dataAiHint: 'email api', pricing: 'Paid' },
            { name: 'Postmark', description: 'Fast, reliable email delivery for developers.', url: 'https://postmarkapp.com/', image: 'https://picsum.photos/seed/postmark/600/400', dataAiHint: 'developer email', pricing: 'Paid' },
            { name: 'Amazon SES', description: 'Amazon Simple Email Service.', url: 'https://aws.amazon.com/ses/', image: 'https://picsum.photos/seed/amazonses/600/400', dataAiHint: 'aws email', pricing: 'Paid' },
            { name: 'SparkPost', description: 'The world\'s most trusted email sending platform.', url: 'https://www.sparkpost.com/', image: 'https://picsum.photos/seed/sparkpost/600/400', dataAiHint: 'sending platform', pricing: 'Paid' },
            { name: 'Elastic Email', description: 'Reliable email delivery.', url: 'https://elasticemail.com/', image: 'https://picsum.photos/seed/elasticemail/600/400', dataAiHint: 'reliable delivery', pricing: 'Freemium' },
            { name: 'Superhuman', description: 'The fastest email experience ever made.', url: 'https://superhuman.com/', image: 'https://picsum.photos/seed/superhuman-email/600/400', dataAiHint: 'fastest email', pricing: 'Paid' },
            { name: 'Boomerang for Gmail', description: 'Schedule emails and get reminders.', url: 'https://www.boomeranggmail.com/', image: 'https://picsum.photos/seed/boomerang/600/400', dataAiHint: 'email reminders', pricing: 'Freemium' },
            { name: 'Mixmax', description: 'Sales engagement platform for Gmail.', url: 'https://www.mixmax.com/', image: 'https://picsum.photos/seed/mixmax/600/400', dataAiHint: 'gmail platform', pricing: 'Paid' },
            { name: 'Yesware', description: 'All-in-one toolkit for sales professionals.', url: 'https://www.yesware.com/', image: 'https://picsum.photos/seed/yesware/600/400', dataAiHint: 'sales toolkit', pricing: 'Paid' },
            { name: 'Bananatag', description: 'Employee email communication.', url: 'https://bananatag.com/', image: 'https://picsum.photos/seed/bananatag/600/400', dataAiHint: 'employee email', pricing: 'Paid' },
            { name: 'Gmelius', description: 'Turns Gmail into your team\'s workspace.', url: 'https://gmelius.com/', image: 'https://picsum.photos/seed/gmelius/600/400', dataAiHint: 'team workspace', pricing: 'Freemium' },
            { name: 'Right Inbox', description: 'The #1 email extension for Gmail.', url: 'https://www.rightinbox.com/', image: 'https://picsum.photos/seed/rightinbox/600/400', dataAiHint: 'email extension', pricing: 'Freemium' },
            { name: 'MailTrack', description: 'Email tracking for Gmail.', url: 'https://mailtrack.io/', image: 'https://picsum.photos/seed/mailtrack/600/400', dataAiHint: 'email tracking', pricing: 'Freemium' },
            { name: 'Hunter MailTracker', description: 'Email tracking for Gmail.', url: 'https://hunter.io/mailtracker', image: 'https://picsum.photos/seed/hunter-mailtracker/600/400', dataAiHint: 'gmail tracking', pricing: 'Free' },
            { name: 'Streak', description: 'CRM for Gmail.', url: 'https://www.streak.com/', image: 'https://picsum.photos/seed/streak/600/400', dataAiHint: 'gmail crm', pricing: 'Freemium' },
            { name: 'Saleshandy', description: 'Cold email outreach software.', url: 'https://www.saleshandy.com/', image: 'https://picsum.photos/seed/saleshandy/600/400', dataAiHint: 'outreach software', pricing: 'Freemium' },
            { name: 'Woodpecker.co', description: 'Cold email software for B2B.', url: 'https://woodpecker.co/', image: 'https://picsum.photos/seed/woodpecker/600/400', dataAiHint: 'b2b email', pricing: 'Paid' },
            { name: 'Lemlist', description: 'Get more replies to your cold emails.', url: 'https://www.lemlist.com/', image: 'https://picsum.photos/seed/lemlist/600/400', dataAiHint: 'more replies', pricing: 'Paid' },
            { name: 'QuickMail', description: 'Cold email software for agencies.', url: 'https://quickmail.io/', image: 'https://picsum.photos/seed/quickmail/600/400', dataAiHint: 'agency software', pricing: 'Paid' },
            { name: 'Outreach.io', description: 'The #1 sales engagement platform.', url: 'https://www.outreach.io/', image: 'https://picsum.photos/seed/outreachio/600/400', dataAiHint: 'engagement platform', pricing: 'Paid' },
            { name: 'SalesLoft', description: 'The modern revenue workflow.', url: 'https://salesloft.com/', image: 'https://picsum.photos/seed/salesloft/600/400', dataAiHint: 'revenue workflow', pricing: 'Paid' },
            { name: 'Reply.io', description: 'Sales engagement platform.', url: 'https://reply.io/', image: 'https://picsum.photos/seed/replyio/600/400', dataAiHint: 'engagement platform', pricing: 'Paid' },
            { name: 'Mailshake', description: 'Sales engagement & automation.', url: 'https://mailshake.com/', image: 'https://picsum.photos/seed/mailshake/600/400', dataAiHint: 'sales automation', pricing: 'Paid' },
            { name: 'Apollo.io', description: 'Your all-in-one sales intelligence platform.', url: 'https://www.apollo.io/', image: 'https://picsum.photos/seed/apolloio/600/400', dataAiHint: 'intelligence platform', pricing: 'Freemium' },
            { name: 'ZoomInfo', description: 'B2B contact database.', url: 'https://www.zoominfo.com/', image: 'https://picsum.photos/seed/zoominfo-email/600/400', dataAiHint: 'contact database', pricing: 'Paid' },
            { name: 'Lusha', description: 'The easiest way to find B2B contact information.', url: 'https://www.lusha.com/', image: 'https://picsum.photos/seed/lusha/600/400', dataAiHint: 'contact information', pricing: 'Freemium' },
            { name: 'Snov.io', description: 'All-in-one cold outreach automation platform.', url: 'https://snov.io/', image: 'https://picsum.photos/seed/snovio/600/400', dataAiHint: 'outreach platform', pricing: 'Freemium' },
            { name: 'Prospect.io', description: 'Sales Automation Platform for outreach.', url: 'https://prospect.io/', image: 'https://picsum.photos/seed/prospectio/600/400', dataAiHint: 'sales outreach', pricing: 'Paid' },
            { name: 'Klenty', description: 'Sales engagement platform.', url: 'https://www.klenty.com/', image: 'https://picsum.photos/seed/klenty/600/400', dataAiHint: 'sales engagement', pricing: 'Paid' },
            { name: 'Autoklose', description: 'Sales engagement platform.', url: 'https://autoklose.com/', image: 'https://picsum.photos/seed/autoklose/600/400', dataAiHint: 'sales engagement', pricing: 'Paid' },
        ]
    },
    {
        title: "Ad Copywriting Tools",
        icon: <MonitorPlay className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Anyword Ad Copy', description: 'AI that generates and optimizes your copy.', url: 'https://anyword.com/', image: 'https://picsum.photos/seed/anyword-ad/600/400', dataAiHint: 'optimize copy', pricing: 'Paid' },
            { name: 'Jasper Ads', description: 'Generate high-converting ad copy.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-ad/600/400', dataAiHint: 'ad generator', pricing: 'Paid' },
            { name: 'Copy.ai Ad Tool', description: 'Write better ad copy with AI.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-ad/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Adcreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative-ad/600/400', dataAiHint: 'ad creatives', pricing: 'Paid' },
            { name: 'Pencil AI', description: 'Generative AI for ads that learn.', url: 'https://www.trypencil.com/', image: 'https://picsum.photos/seed/pencil-ad/600/400', dataAiHint: 'generative ads', pricing: 'Paid' },
            { name: 'Smartly.io AI Copy', description: 'Creative and media automation for advertisers.', url: 'https://www.smartly.io/', image: 'https://picsum.photos/seed/smartly-ad/600/400', dataAiHint: 'ad automation', pricing: 'Paid' },
            { name: 'Writesonic Ad Copy', description: 'Generate ad copy that converts.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-ad/600/400', dataAiHint: 'copy that converts', pricing: 'Freemium' },
            { name: 'Rytr Ad Copywriting', description: 'Generate catchy copy for ads.', url: 'https://rytr.me/use-cases/ad-copywriting', image: 'https://picsum.photos/seed/rytr-ad/600/400', dataAiHint: 'catchy copy', pricing: 'Freemium' },
            { name: 'Celtra', description: 'Creative Automation for brands.', url: 'https://www.celtra.com/', image: 'https://picsum.photos/seed/celtra-ad/600/400', dataAiHint: 'creative automation', pricing: 'Paid' },
            { name: 'Bannerflow', description: 'Creative management platform.', url: 'https://www.bannerflow.com/', image: 'https://picsum.photos/seed/bannerflow-ad/600/400', dataAiHint: 'management platform', pricing: 'Paid' },
            { name: 'Creatopy', description: 'Ad design platform.', url: 'https://www.creatopy.com/', image: 'https://picsum.photos/seed/creatopy-ad/600/400', dataAiHint: 'ad design', pricing: 'Paid' },
            { name: 'AdEspresso', description: 'Facebook and Instagram Ads Manager.', url: 'https://adespresso.com/', image: 'https://picsum.photos/seed/adespresso/600/400', dataAiHint: 'facebook ads', pricing: 'Paid' },
            { name: 'Qwaya', description: 'Ad tool for Facebook and Instagram.', url: 'https://www.qwaya.com/', image: 'https://picsum.photos/seed/qwaya/600/400', dataAiHint: 'instagram ads', pricing: 'Paid' },
            { name: 'WordStream', description: 'Online advertising made easy.', url: 'https://www.wordstream.com/', image: 'https://picsum.photos/seed/wordstream/600/400', dataAiHint: 'online advertising', pricing: 'Paid' },
            { name: 'Optmyzr', description: 'PPC Management Software for Agencies.', url: 'https://www.optmyzr.com/', image: 'https://picsum.photos/seed/optmyzr/600/400', dataAiHint: 'ppc management', pricing: 'Paid' },
            { name: 'AdRoll', description: 'E-commerce marketing platform.', url: 'https://www.adroll.com/', image: 'https://picsum.photos/seed/adroll/600/400', dataAiHint: 'ecommerce marketing', pricing: 'Paid' },
            { name: 'Criteo', description: 'Commerce media platform.', url: 'https://www.criteo.com/', image: 'https://picsum.photos/seed/criteo/600/400', dataAiHint: 'commerce media', pricing: 'Paid' },
            { name: 'Taboola', description: 'Native advertising platform.', url: 'https://www.taboola.com/', image: 'https://picsum.photos/seed/taboola/600/400', dataAiHint: 'native advertising', pricing: 'Paid' },
            { name: 'Outbrain', description: 'Native advertising platform.', url: 'https://www.outbrain.com/', image: 'https://picsum.photos/seed/outbrain/600/400', dataAiHint: 'native advertising', pricing: 'Paid' },
            { name: 'Vidalytics', description: 'Video hosting for marketers.', url: 'https://vidalytics.com/', image: 'https://picsum.photos/seed/vidalytics/600/400', dataAiHint: 'video hosting', pricing: 'Paid' },
            { name: 'Instapage', description: 'Landing page platform.', url: 'https://instapage.com/', image: 'https://picsum.photos/seed/instapage-ad/600/400', dataAiHint: 'landing page', pricing: 'Paid' },
            { name: 'Unbounce', description: 'Landing page builder.', url: 'https://unbounce.com/', image: 'https://picsum.photos/seed/unbounce-ad/600/400', dataAiHint: 'page builder', pricing: 'Paid' },
            { name: 'Leadpages', description: 'Website & landing page builder.', url: 'https://www.leadpages.com/', image: 'https://picsum.photos/seed/leadpages-ad/600/400', dataAiHint: 'website builder', pricing: 'Paid' },
            { name: 'ClickFunnels', description: 'Sales funnel builder.', url: 'https://www.clickfunnels.com/', image: 'https://picsum.photos/seed/clickfunnels-ad/600/400', dataAiHint: 'funnel builder', pricing: 'Paid' },
            { name: 'Kartra', description: 'All-in-one marketing platform.', url: 'https://home.kartra.com/', image: 'https://picsum.photos/seed/kartra-ad/600/400', dataAiHint: 'marketing platform', pricing: 'Paid' },
            { name: 'Systeme.io', description: 'All-in-one marketing platform.', url: 'https://systeme.io/', image: 'https://picsum.photos/seed/systemeio-ad/600/400', dataAiHint: 'all-in-one platform', pricing: 'Freemium' },
            { name: 'Builderall', description: 'Digital marketing platform.', url: 'https://builderall.com/', image: 'https://picsum.photos/seed/builderall-ad/600/400', dataAiHint: 'digital platform', pricing: 'Paid' },
            { name: 'GoHighLevel', description: 'All-in-one sales and marketing platform.', url: 'https://www.gohighlevel.com/', image: 'https://picsum.photos/seed/gohighlevel-ad/600/400', dataAiHint: 'sales platform', pricing: 'Paid' },
            { name: 'SharpSpring', description: 'Revenue growth marketing platform.', url: 'https://sharpspring.com/', image: 'https://picsum.photos/seed/sharpspring-ad/600/400', dataAiHint: 'revenue growth', pricing: 'Paid' },
            { name: 'Wishpond', description: 'Marketing made simple.', url: 'https://www.wishpond.com/', image: 'https://picsum.photos/seed/wishpond-ad/600/400', dataAiHint: 'marketing simple', pricing: 'Paid' },
            { name: 'GetResponse', description: 'Email marketing and more.', url: 'https://www.getresponse.com/', image: 'https://picsum.photos/seed/getresponse-ad/600/400', dataAiHint: 'email and more', pricing: 'Freemium' },
            { name: 'ActiveCampaign', description: 'Customer experience automation.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign-ad/600/400', dataAiHint: 'customer experience', pricing: 'Paid' },
            { name: 'Automizy', description: 'Email marketing software.', url: 'https://automizy.com/', image: 'https://picsum.photos/seed/automizy-ad/600/400', dataAiHint: 'email software', pricing: 'Paid' },
            { name: 'VWO', description: 'A/B testing and conversion optimization.', url: 'https://vwo.com/', image: 'https://picsum.photos/seed/vwo-ad/600/400', dataAiHint: 'conversion optimization', pricing: 'Paid' },
            { name: 'Optimizely', description: 'Experimentation platform.', url: 'https://www.optimizely.com/', image: 'https://picsum.photos/seed/optimizely-ad/600/400', dataAiHint: 'experimentation platform', pricing: 'Paid' },
            { name: 'Google Optimize', description: 'A/B testing tool from Google.', url: 'https://marketingplatform.google.com/about/optimize/', image: 'https://picsum.photos/seed/googleoptimize-ad/600/400', dataAiHint: 'google testing', pricing: 'Free' },
            { name: 'Hotjar', description: 'Understand how users behave on your site.', url: 'https://www.hotjar.com/', image: 'https://picsum.photos/seed/hotjar-ad/600/400', dataAiHint: 'user behavior', pricing: 'Freemium' },
            { name: 'Crazy Egg', description: 'Website optimization and heatmaps.', url: 'https://www.crazyegg.com/', image: 'https://picsum.photos/seed/crazyegg-ad/600/400', dataAiHint: 'website optimization', pricing: 'Paid' },
            { name: 'FullStory', description: 'Digital experience intelligence.', url: 'https://www.fullstory.com/', image: 'https://picsum.photos/seed/fullstory-ad/600/400', dataAiHint: 'experience intelligence', pricing: 'Paid' },
            { name: 'Mouseflow', description: 'Behavior analytics.', url: 'https://mouseflow.com/', image: 'https://picsum.photos/seed/mouseflow-ad/600/400', dataAiHint: 'behavior analytics', pricing: 'Paid' },
            { name: 'Heap', description: 'Digital insights for everyone.', url: 'https://heap.io/', image: 'https://picsum.photos/seed/heap-ad/600/400', dataAiHint: 'digital insights', pricing: 'Freemium' },
            { name: 'Mixpanel', description: 'Product analytics.', url: 'https://mixpanel.com/', image: 'https://picsum.photos/seed/mixpanel-ad/600/400', dataAiHint: 'product analytics', pricing: 'Freemium' },
            { name: 'Amplitude', description: 'Digital optimization system.', url: 'https://amplitude.com/', image: 'https://picsum.photos/seed/amplitude-ad/600/400', dataAiHint: 'digital optimization', pricing: 'Freemium' },
            { name: 'Pendo', description: 'Product experience platform.', url: 'https://www.pendo.io/', image: 'https://picsum.photos/seed/pendo-ad/600/400', dataAiHint: 'experience platform', pricing: 'Paid' },
            { name: 'Segment', description: 'Customer data platform.', url: 'https://segment.com/', image: 'https://picsum.photos/seed/segment-ad/600/400', dataAiHint: 'customer data', pricing: 'Freemium' },
            { name: 'mParticle', description: 'Customer data platform.', url: 'https://www.mparticle.com/', image: 'https://picsum.photos/seed/mparticle-ad/600/400', dataAiHint: 'data platform', pricing: 'Paid' },
            { name: 'Tealium', description: 'Customer data platform.', url: 'https://tealium.com/', image: 'https://picsum.photos/seed/tealium-ad/600/400', dataAiHint: 'customer data platform', pricing: 'Paid' },
            { name: 'Branch', description: 'Mobile linking platform.', url: 'https://www.branch.io/', image: 'https://picsum.photos/seed/branch-ad/600/400', dataAiHint: 'mobile linking', pricing: 'Paid' },
            { name: 'AppsFlyer', description: 'Marketing attribution platform.', url: 'https://www.appsflyer.com/', image: 'https://picsum.photos/seed/appsflyer-ad/600/400', dataAiHint: 'attribution platform', pricing: 'Paid' },
            { name: 'Adjust', description: 'Mobile measurement partner.', url: 'https://www.adjust.com/', image: 'https://picsum.photos/seed/adjust-ad/600/400', dataAiHint: 'mobile measurement', pricing: 'Paid' },
        ]
    },
    {
        title: "Creative Writing Tools",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sudowrite', description: 'The AI writing partner for fiction writers.', url: 'https://www.sudowrite.com/', image: 'https://picsum.photos/seed/sudowrite-creative/600/400', dataAiHint: 'fiction writer', pricing: 'Paid' },
            { name: 'NovelAI', description: 'AI-assisted authorship.', url: 'https://novelai.net/', image: 'https://picsum.photos/seed/novelai-creative/600/400', dataAiHint: 'ai authorship', pricing: 'Paid' },
            { name: 'AI Dungeon', description: 'A text-based AI adventure game.', url: 'https://aidungeon.io/', image: 'https://picsum.photos/seed/aidungeon/600/400', dataAiHint: 'ai game', pricing: 'Free' },
            { name: 'StoryLab.ai', description: 'More than an AI content generator.', url: 'https://storylab.ai/', image: 'https://picsum.photos/seed/storylab/600/400', dataAiHint: 'story tools', pricing: 'Freemium' },
            { name: 'Plot Generator AI', description: 'Generate story plots with AI.', url: 'https://www.plot-generator.org.uk/', image: 'https://picsum.photos/seed/plotgenerator/600/400', dataAiHint: 'story plot', pricing: 'Free' },
            { name: 'Charisma AI', description: 'Powering virtual characters.', url: 'https://charisma.ai/', image: 'https://picsum.photos/seed/charisma/600/400', dataAiHint: 'virtual characters', pricing: 'Freemium' },
            { name: 'The Infinite Story', description: 'A never-ending, AI-written story.', url: 'https://www.infinitestory.com/', image: 'https://picsum.photos/seed/infinitestory/600/400', dataAiHint: 'never-ending story', pricing: 'Free' },
            { name: 'GPT-3 Creative Writing', description: 'Use GPT-3 for creative writing.', url: 'https://platform.openai.com/', image: 'https://picsum.photos/seed/gpt3-creative/600/400', dataAiHint: 'gpt-3 writing', pricing: 'Paid' },
            { name: 'Artbreeder', description: 'Create and breed characters and scenes.', url: 'https://www.artbreeder.com/', image: 'https://picsum.photos/seed/artbreeder-creative/600/400', dataAiHint: 'character scenes', pricing: 'Freemium' },
            { name: 'Jasper (Boss Mode)', description: 'Long-form creative writing with AI.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-creative/600/400', dataAiHint: 'boss mode', pricing: 'Paid' },
            { name: 'Writesonic Story Writer', description: 'AI story generator.', url: 'https://writesonic.com/ai-story-generator', image: 'https://picsum.photos/seed/writesonic-creative/600/400', dataAiHint: 'story generator', pricing: 'Freemium' },
            { name: 'Rytr Story Plot', description: 'Generate story plots.', url: 'https://rytr.me/use-cases/story-plot', image: 'https://picsum.photos/seed/rytr-creative/600/400', dataAiHint: 'story plot', pricing: 'Freemium' },
            { name: 'Sassbook AI Story Writer', description: 'AI writer for stories.', url: 'https://sassbook.com/ai-story-writer', image: 'https://picsum.photos/seed/sassbook-creative/600/400', dataAiHint: 'stories writer', pricing: 'Freemium' },
            { name: 'ShortlyAI', description: 'Your AI writing partner.', url: 'https://www.shortlyai.com/', image: 'https://picsum.photos/seed/shortlyai-creative/600/400', dataAiHint: 'ai partner', pricing: 'Paid' },
            { name: 'Inferkit', description: 'A state-of-the-art text generation tool.', url: 'https://inferkit.com/', image: 'https://picsum.photos/seed/inferkit/600/400', dataAiHint: 'text generation', pricing: 'Paid' },
            { name: 'Laika', description: 'AI for creative writers.', url: 'https://www.writewithlaika.com/', image: 'https://picsum.photos/seed/laika/600/400', dataAiHint: 'creative ai', pricing: 'Paid' },
            { name: 'GPT-2 Creative Writing', description: 'Older model for creative writing.', url: 'https://transformer.huggingface.co/doc/gpt2-large', image: 'https://picsum.photos/seed/gpt2-creative/600/400', dataAiHint: 'gpt-2 writing', pricing: 'Free' },
            { name: 'Story Path', description: 'A visual story planner.', url: 'https://storyplanner.com/', image: 'https://picsum.photos/seed/storypath/600/400', dataAiHint: 'visual planner', pricing: 'Paid' },
            { name: 'Campfire', description: 'Write better stories, faster.', url: 'https://www.campfirewriting.com/', image: 'https://picsum.photos/seed/campfire-creative/600/400', dataAiHint: 'better stories', pricing: 'Freemium' },
            { name: 'World Anvil', description: 'Worldbuilding tools & writing software.', url: 'https://www.worldanvil.com/', image: 'https://picsum.photos/seed/worldanvil-creative/600/400', dataAiHint: 'worldbuilding tools', pricing: 'Freemium' },
            { name: 'Scrivener', description: 'Writing app for novelists and screenwriters.', url: 'https://www.literatureandlatte.com/scrivener/overview', image: 'https://picsum.photos/seed/scrivener-creative/600/400', dataAiHint: 'novelists app', pricing: 'Paid' },
            { name: 'Ulysses', description: 'The ultimate writing app.', url: 'https://ulysses.app/', image: 'https://picsum.photos/seed/ulysses-creative/600/400', dataAiHint: 'ultimate app', pricing: 'Paid' },
            { name: 'iA Writer', description: 'The focused writing app.', url: 'https://ia.net/writer', image: 'https://picsum.photos/seed/iawriter-creative/600/400', dataAiHint: 'focused app', pricing: 'Paid' },
            { name: 'LivingWriter', description: 'The best writing app for authors.', url: 'https://livingwriter.com/', image: 'https://picsum.photos/seed/livingwriter-creative/600/400', dataAiHint: 'authors app', pricing: 'Paid' },
            { name: 'Atticus', description: 'Writing and formatting tool.', url: 'https://www.atticus.io/', image: 'https://picsum.photos/seed/atticus-creative/600/400', dataAiHint: 'formatting tool', pricing: 'Paid' },
            { name: 'Vellum', description: 'Create beautiful books.', url: 'https://vellum.pub/', image: 'https://picsum.photos/seed/vellum-creative/600/400', dataAiHint: 'beautiful books', pricing: 'Paid' },
            { name: 'Reedsy Book Editor', description: 'A powerful production tool for books.', url: 'https://reedsy.com/write-a-book', image: 'https://picsum.photos/seed/reedsy-creative/600/400', dataAiHint: 'production tool', pricing: 'Free' },
            { name: 'Storyist', description: 'A powerful writing environment.', url: 'https://storyist.com/', image: 'https://picsum.photos/seed/storyist-creative/600/400', dataAiHint: 'writing environment', pricing: 'Paid' },
            { name: 'Squibler', description: 'The writing app for authors.', url: 'https://www.squibler.io/', image: 'https://picsum.photos/seed/squibler-creative/600/400', dataAiHint: 'authors writing', pricing: 'Paid' },
            { name: 'Plottr', description: 'Visually plot your books.', url: 'https://plottr.com/', image: 'https://picsum.photos/seed/plottr-creative/600/400', dataAiHint: 'visual books', pricing: 'Paid' },
            { name: 'Wavemaker Cards', description: 'Free novel writing software.', url: 'https://wavemaker.co.uk/', image: 'https://picsum.photos/seed/wavemaker/600/400', dataAiHint: 'free software', pricing: 'Free' },
            { name: 'yWriter', description: 'Free writing software designed by an author.', url: 'http://www.spacejock.com/yWriter.html', image: 'https://picsum.photos/seed/ywriter/600/400', dataAiHint: 'author software', pricing: 'Free' },
            { name: 'Manuskript', description: 'Open-source tool for writers.', url: 'https://www.theologeek.ch/manuskript/', image: 'https://picsum.photos/seed/manuskript/600/400', dataAiHint: 'open-source tool', pricing: 'Free' },
            { name: 'Bibisco', description: 'Novel writing software.', url: 'https://bibisco.com/', image: 'https://picsum.photos/seed/bibisco/600/400', dataAiHint: 'novel software', pricing: 'Freemium' },
            { name: 'oStorybook', description: 'Free software for writers.', url: 'https://ostorybook.tuxfamily.org/', image: 'https://picsum.photos/seed/ostorybook/600/400', dataAiHint: 'writers software', pricing: 'Free' },
            { name: 'FocusWriter', description: 'A simple, distraction-free writing environment.', url: 'https://gottcode.org/focuswriter/', image: 'https://picsum.photos/seed/focuswriter/600/400', dataAiHint: 'distraction-free', pricing: 'Free' },
            { name: 'WriteMonkey', description: 'Distraction-free writing.', url: 'https://writemonkey.com/', image: 'https://picsum.photos/seed/writemonkey/600/400', dataAiHint: 'free writing', pricing: 'Free' },
            { name: 'Coggle', description: 'Simple collaborative mind maps.', url: 'https://coggle.it/', image: 'https://picsum.photos/seed/coggle-creative/600/400', dataAiHint: 'mind maps', pricing: 'Freemium' },
            { name: 'XMind', description: 'Full-featured mind mapping and brainstorming tool.', url: 'https://www.xmind.net/', image: 'https://picsum.photos/seed/xmind-creative/600/400', dataAiHint: 'brainstorming tool', pricing: 'Freemium' },
            { name: 'MindNode', description: 'Mind mapping for Mac and iOS.', url: 'https://www.mindnode.com/', image: 'https://picsum.photos/seed/mindnode-creative/600/400', dataAiHint: 'mac mind mapping', pricing: 'Freemium' },
            { name: 'Miro', description: 'Online collaborative whiteboard.', url: 'https://miro.com/', image: 'https://picsum.photos/seed/miro-creative/600/400', dataAiHint: 'collaborative whiteboard', pricing: 'Freemium' },
            { name: 'Mural', description: 'Digital workspace for visual collaboration.', url: 'https://www.mural.co/', image: 'https://picsum.photos/seed/mural-creative/600/400', dataAiHint: 'visual collaboration', pricing: 'Freemium' },
            { name: 'Poem-Generator.org.uk', description: 'AI poem generator.', url: 'https://www.poem-generator.org.uk/', image: 'https://picsum.photos/seed/poemgenerator/600/400', dataAiHint: 'poem generator', pricing: 'Free' },
            { name: 'Verse by Verse', description: 'An AI poetry experiment from Google.', url: 'https://sites.research.google/versebyverse/', image: 'https://picsum.photos/seed/versebyverse/600/400', dataAiHint: 'poetry experiment', pricing: 'Free' },
            { name: 'DeepBeat', description: 'A rap lyrics generator.', url: 'https://deepbeat.org/', image: 'https://picsum.photos/seed/deepbeat/600/400', dataAiHint: 'rap lyrics', pricing: 'Free' },
            { name: 'Botnik', description: 'A human-machine entertainment studio.', url: 'https://botnik.org/', image: 'https://picsum.photos/seed/botnik/600/400', dataAiHint: 'entertainment studio', pricing: 'Free' },
            { name: 'Talk to Transformer', description: 'A smaller, older text generation model.', url: 'https://talktotransformer.com/', image: 'https://picsum.photos/seed/talktotransformer/600/400', dataAiHint: 'text generation', pricing: 'Free' },
            { name: 'AI Writer (by Picsart)', description: 'AI Writer from Picsart.', url: 'https://picsart.com/ai-writer/', image: 'https://picsum.photos/seed/picsartwriter/600/400', dataAiHint: 'picsart ai', pricing: 'Freemium' },
            { name: 'Poet.ai', description: 'AI tools for creative writing.', url: '#', image: 'https://picsum.photos/seed/poetai/600/400', dataAiHint: 'creative tools', pricing: 'Freemium' },
            { name: 'DeepL Write', description: 'An AI writing assistant.', url: 'https://www.deepl.com/write', image: 'https://picsum.photos/seed/deeplwrite/600/400', dataAiHint: 'deepl writing', pricing: 'Freemium' },
            { name: 'Hugging Face Spaces', description: 'Host and share ML apps.', url: 'https://huggingface.co/spaces', image: 'https://picsum.photos/seed/hfspaces/600/400', dataAiHint: 'ml apps', pricing: 'Freemium' },
        ]
    }
];


export default function WritingToolsPage() {
    const { toast } = useToast();
    const [priceFilter, setPriceFilter] = React.useState('All');
    const [open, setOpen] = React.useState(false);
    const { starredTools, handleStarToggle } = useUserPreferences();


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

    const ToolCard = ({ tool }: { tool: Tool }) => {
        const isStarred = starredTools.has(tool.name);
    
        const handleStarClick = (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            handleStarToggle(tool.name);
        }

        return (
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
                      <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full text-foreground/80 bg-white/30 hover:bg-white/50" onClick={handleStarClick}>
                        <Star className={cn('w-4 h-4 transition-all', isStarred ? 'fill-yellow-300 text-yellow-300' : 'text-foreground/60')}/>
                      </Button>
                  </div>
              </div>
            </div>
          </Card>
        </Link>
    )};
    
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
                    <Feather className="w-6 h-6 text-foreground" />
                    <h1 className="text-2xl font-bold text-foreground">
                        Writing Tools
                    </h1>
                </div>
            </div>
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
                      {index === 0 && (
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
                      )}
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

    

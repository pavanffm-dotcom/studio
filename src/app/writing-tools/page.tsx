'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Feather, Type, Bot, Book, Search, FileText, Mic, Mail, MonitorPlay, MessageSquare, Briefcase, FileSignature, Dna, PenTool, Globe, StickyNote, BrainCircuit, Quote, Tv, Newspaper, Users, Key, BookOpen, ClipboardList, CheckCircle2, Lightbulb, GraduationCap
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
        title: "Content Writing Tools",
        icon: <Feather className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper AI', description: 'AI Content Platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-content/600/400', dataAiHint: 'ai content' },
            { name: 'Writesonic', description: 'Create SEO-friendly content.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-content/600/400', dataAiHint: 'seo writing' },
            { name: 'Rytr', description: 'A better, 10x faster way to write.', url: 'https://rytr.me/', image: 'https://picsum.photos/seed/rytr-content/600/400', dataAiHint: 'writing assistant' },
            { name: 'Copy.ai', description: 'Write better marketing copy.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-content/600/400', dataAiHint: 'copywriting tool' },
            { name: 'Anyword', description: 'AI that converts.', url: 'https://anyword.com/', image: 'https://picsum.photos/seed/anyword-content/600/400', dataAiHint: 'ad copy' },
            { name: 'Texta.ai', description: 'Generate blog posts from a prompt.', url: 'https://www.texta.ai/', image: 'https://picsum.photos/seed/texta-content/600/400', dataAiHint: 'blog generator' },
            { name: 'NeuralText', description: 'The AI-powered content lifecycle platform.', url: 'https://www.neuraltext.com/', image: 'https://picsum.photos/seed/neuraltext-content/600/400', dataAiHint: 'content platform' },
        ]
    },
    {
        title: "Blog Writing Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer AI', description: 'Write and optimize articles with AI.', url: 'https://surferseo.com/surfer-ai', image: 'https://picsum.photos/seed/surferai-blog/600/400', dataAiHint: 'ai article' },
            { name: 'Frase', description: 'Research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-blog/600/400', dataAiHint: 'content optimization' },
            { name: 'ContentBot', description: 'AI writer for bloggers and marketers.', url: 'https://contentbot.ai/', image: 'https://picsum.photos/seed/contentbot-blog/600/400', dataAiHint: 'ai blogger' },
            { name: 'Scalenut', description: 'AI-powered content research and writing.', url: 'https://www.scalenut.com/', image: 'https://picsum.photos/seed/scalenut-blog/600/400', dataAiHint: 'content cruise' },
            { name: 'GrowthBar', description: 'The #1 AI writing tool for SEO.', url: 'https://www.growthbarseo.com/', image: 'https://picsum.photos/seed/growthbar-blog/600/400', dataAiHint: 'seo writing' },
            { name: 'WriterZen', description: 'Content workflow that simplifies your process.', url: 'https://writerzen.net/', image: 'https://picsum.photos/seed/writerzen-blog/600/400', dataAiHint: 'keyword research' },
        ]
    },
    {
        title: "SEO Writing Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SurferSEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-seo/600/400', dataAiHint: 'seo audit' },
            { name: 'NeuronWriter', description: 'Optimize your content for Google.', url: 'https://neuronwriter.com/', image: 'https://picsum.photos/seed/neuronwriter-seo/600/400', dataAiHint: 'content optimizer' },
            { name: 'PageOptimizer Pro AI', description: 'On-page SEO tool for professionals.', url: 'https://pageoptimizer.pro/', image: 'https://picsum.photos/seed/pop-seo/600/400', dataAiHint: 'on-page seo' },
            { name: 'MarketMuse', description: 'AI content planning and optimization.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-seo/600/400', dataAiHint: 'content strategy' },
            { name: 'Clearscope AI', description: 'The best-in-class SEO content optimization.', url: 'https://www.clearscope.io/', image: 'https://picsum.photos/seed/clearscope-seo/600/400', dataAiHint: 'seo content' },
            { name: 'Outranking', description: 'AI writing platform for higher rankings.', url: 'https://www.outranking.io/', image: 'https://picsum.photos/seed/outranking-seo/600/400', dataAiHint: 'ai seo' },
        ]
    },
    {
        title: "Article Rewriting / Paraphrasing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'QuillBot', description: 'AI-powered paraphrasing tool.', url: 'https://quillbot.com/', image: 'https://picsum.photos/seed/quillbot-rewrite/600/400', dataAiHint: 'paraphraser' },
            { name: 'Spinbot', description: 'Article spinning, text rewriting, and content creation tool.', url: 'https://spinbot.com/', image: 'https://picsum.photos/seed/spinbot-rewrite/600/400', dataAiHint: 'text spinner' },
            { name: 'Wordtune', description: 'Your personal writing companion.', url: 'https://www.wordtune.com/', image: 'https://picsum.photos/seed/wordtune-rewrite/600/400', dataAiHint: 'ai editor' },
            { name: 'Paraphraser.io', description: 'Online paraphrasing tool to rephrase sentences.', url: 'https://www.paraphraser.io/', image: 'https://picsum.photos/seed/paraphraserio/600/400', dataAiHint: 'sentence rephraser' },
            { name: 'PrepostSEO Paraphraser', description: 'Free online tool to rewrite articles.', url: 'https://www.prepostseo.com/paraphrasing-tool', image: 'https://picsum.photos/seed/prepostseo/600/400', dataAiHint: 'article rewriter' },
            { name: 'AI Article Spinner', description: 'Rewrite your articles with AI.', url: 'https://aiarticlespinner.co/', image: 'https://picsum.photos/seed/aiarticlespinner/600/400', dataAiHint: 'content spinner' },
        ]
    },
    {
        title: "Script Writing Tools",
        icon: <Tv className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper Script Generator', description: 'Generate video scripts with AI.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-script/600/400', dataAiHint: 'video script' },
            { name: 'Writesonic Script AI', description: 'AI script writer for videos and podcasts.', url: 'https://writesonic.com/ai-script-writer', image: 'https://picsum.photos/seed/writesonic-script/600/400', dataAiHint: 'podcast script' },
            { name: 'DeepStory', description: 'AI story and script generation.', url: 'https://deepstory.ai/', image: 'https://picsum.photos/seed/deepstory/600/400', dataAiHint: 'story generator' },
            { name: 'ScriptBook AI', description: 'AI-driven script analysis.', url: 'https://www.scriptbook.io/', image: 'https://picsum.photos/seed/scriptbook/600/400', dataAiHint: 'script analysis' },
            { name: 'HyperWrite Script AI', description: 'Your personal AI writing assistant.', url: 'https://www.hyperwriteai.com/', image: 'https://picsum.photos/seed/hyperwrite-script/600/400', dataAiHint: 'writing assistant' },
            { name: 'Nichesss Script Maker', description: 'Find profitable niches and generate content.', url: 'https://nichesss.com/', image: 'https://picsum.photos/seed/nichesss-script/600/400', dataAiHint: 'content maker' },
        ]
    },
    {
        title: "Social Media Writing Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Predis.ai', description: 'AI Social Media Marketing tool.', url: 'https://predis.ai/', image: 'https://picsum.photos/seed/predis-social/600/400', dataAiHint: 'social marketing' },
            { name: 'CopyMonkey', description: 'AI-generated product descriptions.', url: 'https://copymonkey.ai/', image: 'https://picsum.photos/seed/copymonkey-social/600/400', dataAiHint: 'product description' },
            { name: 'Ocoya', description: 'Create and schedule social media content faster.', url: 'https://www.ocoya.net/', image: 'https://picsum.photos/seed/ocoya-social/600/400', dataAiHint: 'content scheduler' },
            { name: 'Hypefury AI', description: 'Grow and monetize your Twitter account.', url: 'https://hypefury.com/', image: 'https://picsum.photos/seed/hypefury-social/600/400', dataAiHint: 'twitter growth' },
            { name: 'Lately.ai', description: 'AI-powered content creation and publishing.', url: 'https://www.lately.ai/', image: 'https://picsum.photos/seed/lately-social/600/400', dataAiHint: 'content publishing' },
            { name: 'Postwise', description: 'Write, schedule, and grow on Twitter with AI.', url: 'https://postwise.ai/', image: 'https://picsum.photos/seed/postwise-social/600/400', dataAiHint: 'twitter ai' },
        ]
    },
    {
        title: "Email Writing Tools",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Flowrite', description: 'Turn your instructions into ready-to-send emails.', url: 'https://www.flowrite.com/', image: 'https://picsum.photos/seed/flowrite-email/600/400', dataAiHint: 'ai email' },
            { name: 'Lavender AI', description: 'The AI email assistant.', url: 'https://www.lavender.ai/', image: 'https://picsum.photos/seed/lavender-email/600/400', dataAiHint: 'email assistant' },
            { name: 'Gmass AI Writer', description: 'AI to write emails inside Gmail.', url: 'https://www.gmass.co/blog/ai-writer/', image: 'https://picsum.photos/seed/gmass-email/600/400', dataAiHint: 'gmail writer' },
            { name: 'Smartwriter.ai', description: 'Generate personalized sales emails.', url: 'https://www.smartwriter.ai/', image: 'https://picsum.photos/seed/smartwriter-email/600/400', dataAiHint: 'sales emails' },
            { name: 'Instantly AI Writer', description: 'Cold email automation with AI.', url: 'https://instantly.ai/', image: 'https://picsum.photos/seed/instantly-email/600/400', dataAiHint: 'cold email' },
            { name: 'Dripify AI Templates', description: 'LinkedIn automation and lead generation.', url: 'https://dripify.io/', image: 'https://picsum.photos/seed/dripify-email/600/400', dataAiHint: 'linkedin automation' },
        ]
    },
    {
        title: "Ad Copywriting Tools",
        icon: <MonitorPlay className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Anyword Ad Copy', description: 'AI that generates and optimizes your copy.', url: 'https://anyword.com/', image: 'https://picsum.photos/seed/anyword-ad/600/400', dataAiHint: 'optimize copy' },
            { name: 'Jasper Ads', description: 'Generate high-converting ad copy.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-ad/600/400', dataAiHint: 'ad generator' },
            { name: 'Copy.ai Ad Tool', description: 'Write better ad copy with AI.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-ad/600/400', dataAiHint: 'marketing copy' },
            { name: 'Adcreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative-ad/600/400', dataAiHint: 'ad creatives' },
            { name: 'Pencil AI', description: 'Generative AI for ads that learn.', url: 'https://www.trypencil.com/', image: 'https://picsum.photos/seed/pencil-ad/600/400', dataAiHint: 'generative ads' },
            { name: 'Smartly.io AI Copy', description: 'Creative and media automation for advertisers.', url: 'https://www.smartly.io/', image: 'https://picsum.photos/seed/smartly-ad/600/400', dataAiHint: 'ad automation' },
        ]
    },
    {
        title: "Creative Writing Tools",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sudowrite', description: 'The AI writing partner for fiction writers.', url: 'https://www.sudowrite.com/', image: 'https://picsum.photos/seed/sudowrite-creative/600/400', dataAiHint: 'fiction writer' },
            { name: 'NovelAI', description: 'AI-assisted authorship.', url: 'https://novelai.net/', image: 'https://picsum.photos/seed/novelai-creative/600/400', dataAiHint: 'ai authorship' },
            { name: 'AI Dungeon', description: 'A text-based AI adventure game.', url: 'https://aidungeon.io/', image: 'https://picsum.photos/seed/aidungeon/600/400', dataAiHint: 'ai game' },
            { name: 'StoryLab.ai', description: 'More than an AI content generator.', url: 'https://storylab.ai/', image: 'https://picsum.photos/seed/storylab/600/400', dataAiHint: 'story tools' },
            { name: 'Plot Generator AI', description: 'Generate story plots with AI.', url: 'https://www.plot-generator.org.uk/', image: 'https://picsum.photos/seed/plotgenerator/600/400', dataAiHint: 'story plot' },
            { name: 'Charisma AI', description: 'Powering virtual characters.', url: 'https://charisma.ai/', image: 'https://picsum.photos/seed/charisma/600/400', dataAiHint: 'virtual characters' },
        ]
    },
    {
        title: "Academic Writing Tools",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Grammarly', description: 'Great writing, simplified.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-academic/600/400', dataAiHint: 'grammar check' },
            { name: 'Paperpal', description: 'The AI academic writing assistant.', url: 'https://paperpal.com/', image: 'https://picsum.photos/seed/paperpal/600/400', dataAiHint: 'academic writing' },
            { name: 'Writefull', description: 'AI-based language feedback.', url: 'https://www.writefull.com/', image: 'https://picsum.photos/seed/writefull/600/400', dataAiHint: 'language feedback' },
            { name: 'Scribbr AI', description: 'Your path to academic success.', url: 'https://www.scribbr.com/', image: 'https://picsum.photos/seed/scribbr/600/400', dataAiHint: 'proofreading service' },
            { name: 'Jenni.ai', description: 'The AI assistant for students.', url: 'https://jenni.ai/', image: 'https://picsum.photos/seed/jenniai/600/400', dataAiHint: 'student assistant' },
            { name: 'Trinka AI', description: 'AI-powered grammar checker for academic writing.', url: 'https://www.trinka.ai/', image: 'https://picsum.photos/seed/trinka/600/400', dataAiHint: 'academic grammar' },
        ]
    },
    {
        title: "Research Writing Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Elicit.org', description: 'The AI Research Assistant.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit/600/400', dataAiHint: 'research assistant' },
            { name: 'Scite.ai', description: 'See how research has been cited.', url: 'https://scite.ai/', image: 'https://picsum.photos/seed/scite/600/400', dataAiHint: 'citation analysis' },
            { name: 'Scholarcy', description: 'The online article summarizer tool.', url: 'https://www.scholarcy.com/', image: 'https://picsum.photos/seed/scholarcy-research/600/400', dataAiHint: 'article summarizer' },
            { name: 'Iris.ai', description: 'Your AI Science Assistant.', url: 'https://iris.ai/', image: 'https://picsum.photos/seed/irisai/600/400', dataAiHint: 'science assistant' },
            { name: 'Inciteful', description: 'Build a literature network.', url: 'https://inciteful.xyz/', image: 'https://picsum.photos/seed/inciteful/600/400', dataAiHint: 'literature map' },
            { name: 'Raxter AI', description: 'AI platform for scientific research.', url: 'https://raxter.io/', image: 'https://picsum.photos/seed/raxter/600/400', dataAiHint: 'scientific research' },
        ]
    },
    {
        title: "Summarizing Tools",
        icon: <ClipboardList className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'TLDR This', description: 'Summarize any piece of text.', url: 'https://tldrthis.com/', image: 'https://picsum.photos/seed/tldrthis/600/400', dataAiHint: 'text summarizer' },
            { name: 'Summarizer.org', description: 'Free online text summarizer.', url: 'https://www.summarizer.org/', image: 'https://picsum.photos/seed/summarizer-org/600/400', dataAiHint: 'free summarizer' },
            { name: 'SMMRY', description: 'Summarize text for a more efficient reading experience.', url: 'https://smmry.com/', image: 'https://picsum.photos/seed/smmry/600/400', dataAiHint: 'efficient reading' },
            { name: 'Scholarcy Summarizer', description: 'The online article summarizer tool.', url: 'https://www.scholarcy.com/', image: 'https://picsum.photos/seed/scholarcy-summary/600/400', dataAiHint: 'article summary' },
            { name: 'SplitBrain AI', description: 'AI-powered mind-mapping and summarization.', url: 'https://www.splitbrain.org/', image: 'https://picsum.photos/seed/splitbrain-summary/600/400', dataAiHint: 'mind map' },
            { name: 'SummryBot', description: 'A bot that summarizes articles.', url: '#', image: 'https://picsum.photos/seed/summrybot/600/400', dataAiHint: 'summary bot' },
        ]
    },
    {
        title: "Grammar & Proofreading Tools",
        icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Grammarly', description: 'Great writing, simplified.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-proof/600/400', dataAiHint: 'grammar check' },
            { name: 'ProWritingAid', description: 'A grammar checker, style editor, and writing mentor.', url: 'https://prowritingaid.com/', image: 'https://picsum.photos/seed/prowritingaid/600/400', dataAiHint: 'style editor' },
            { name: 'Ginger', description: 'AI-powered writing assistant.', url: 'https://www.gingersoftware.com/', image: 'https://picsum.photos/seed/ginger-proof/600/400', dataAiHint: 'writing assistant' },
            { name: 'LanguageTool', description: 'Multilingual grammar, style, and spell checker.', url: 'https://languagetool.org/', image: 'https://picsum.photos/seed/languagetool/600/400', dataAiHint: 'multilingual checker' },
            { name: 'SlickWrite', description: 'A powerful, free tool that makes it easy to check your writing.', url: 'https://www.slickwrite.com/', image: 'https://picsum.photos/seed/slickwrite/600/400', dataAiHint: 'free writing tool' },
            { name: 'Hemingway AI', description: 'Makes your writing bold and clear.', url: 'https://hemingwayapp.com/', image: 'https://picsum.photos/seed/hemingway-proof/600/400', dataAiHint: 'clarity checker' },
        ]
    },
    {
        title: "Resume / CV Writing Tools",
        icon: <FileSignature className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Kickresume AI', description: 'AI resume and cover letter builder.', url: 'https://www.kickresume.com/', image: 'https://picsum.photos/seed/kickresume/600/400', dataAiHint: 'resume builder' },
            { name: 'Resumaker.ai', description: 'Create a professional resume in minutes.', url: 'https://resumaker.ai/', image: 'https://picsum.photos/seed/resumaker/600/400', dataAiHint: 'professional resume' },
            { name: 'Rezi.ai', description: 'The AI resume builder that gets you hired.', url: 'https://www.rezi.ai/', image: 'https://picsum.photos/seed/rezi/600/400', dataAiHint: 'ats resume' },
            { name: 'Resume.io AI Writer', description: 'Online resume builder with professional templates.', url: 'https://resume.io/', image: 'https://picsum.photos/seed/resumeio/600/400', dataAiHint: 'resume templates' },
            { name: 'Teal Resume AI', description: 'All-in-one career platform.', url: 'https://www.tealhq.com/resume-builder', image: 'https://picsum.photos/seed/teal-resume/600/400', dataAiHint: 'career platform' },
            { name: 'Enhancv AI', description: 'Standout resumes, made easy.', url: 'https://enhancv.com/', image: 'https://picsum.photos/seed/enhancv/600/400', dataAiHint: 'cv builder' },
        ]
    },
    {
        title: "Business Writing Tools",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion AI', description: 'Your connected workspace with AI.', url: 'https://www.notion.so/product/ai', image: 'https://picsum.photos/seed/notion-business/600/400', dataAiHint: 'ai workspace' },
            { name: 'HyperWrite', description: 'Your personal AI writing assistant.', url: 'https://www.hyperwriteai.com/', image: 'https://picsum.photos/seed/hyperwrite-business/600/400', dataAiHint: 'writing assistant' },
            { name: 'Jasper Business Writer', description: 'AI Content Platform for business.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-business/600/400', dataAiHint: 'business content' },
            { name: 'Taskade AI', description: 'Your second brain for teams.', url: 'https://www.taskade.com/', image: 'https://picsum.photos/seed/taskade-business/600/400', dataAiHint: 'team productivity' },
            { name: 'Writer.com', description: 'Generative AI for the enterprise.', url: 'https://writer.com/', image: 'https://picsum.photos/seed/writercom/600/400', dataAiHint: 'enterprise ai' },
        ]
    },
    {
        title: "Legal Writing Tools",
        icon: <Key className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Spellbook AI', description: 'AI for legal professionals.', url: 'https://www.spellbook.legal/', image: 'https://picsum.photos/seed/spellbook/600/400', dataAiHint: 'legal ai' },
            { name: 'BriefPoint AI', description: 'AI-powered legal drafting.', url: '#', image: 'https://picsum.photos/seed/briefpoint/600/400', dataAiHint: 'legal drafting' },
            { name: 'Legalese Decoder AI', description: 'Translate legal documents into plain English.', url: '#', image: 'https://picsum.photos/seed/legalesedecoder/600/400', dataAiHint: 'legal translation' },
            { name: 'Legal Robot', description: 'AI-powered legal document analysis.', url: 'https://legalrobot.com/', image: 'https://picsum.photos/seed/legalrobot/600/400', dataAiHint: 'document analysis' },
            { name: 'Clause AI', description: 'Automated contract analysis.', url: 'https://www.clause.com/', image: 'https://picsum.photos/seed/clauseai/600/400', dataAiHint: 'contract analysis' },
        ]
    },
    {
        title: "Technical Writing Tools",
        icon: <Dna className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion AI', description: 'Plan and write technical docs with AI.', url: 'https://www.notion.so/product/ai', image: 'https://picsum.photos/seed/notion-tech/600/400', dataAiHint: 'technical docs' },
            { name: 'Bearly.ai', description: 'AI assistant for reading, writing, and creating.', url: 'https://bearly.ai/', image: 'https://picsum.photos/seed/bearly/600/400', dataAiHint: 'research assistant' },
            { name: 'Docusaurus AI Writer', description: 'Build optimized websites quickly.', url: 'https://docusaurus.io/', image: 'https://picsum.photos/seed/docusaurus/600/400', dataAiHint: 'documentation site' },
            { name: 'HelpKit AI', description: 'Turn Notion pages into a help center.', url: 'https://www.helpkit.so/', image: 'https://picsum.photos/seed/helpkit/600/400', dataAiHint: 'help center' },
            { name: 'mkdocs AI Writer', description: 'Project documentation with Markdown.', url: 'https://www.mkdocs.org/', image: 'https://picsum.photos/seed/mkdocs/600/400', dataAiHint: 'markdown docs' },
        ]
    },
    {
        title: "UX/UI Writing Tools",
        icon: <PenTool className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Frontitude Copy', description: 'The UX copy management platform.', url: 'https://www.frontitude.com/', image: 'https://picsum.photos/seed/frontitude/600/400', dataAiHint: 'ux copy' },
            { name: 'Ditto AI', description: 'Manage your team’s words.', url: 'https://www.dittowords.com/', image: 'https://picsum.photos/seed/ditto/600/400', dataAiHint: 'copy management' },
            { name: 'UX Writing Hub AI', description: 'Tools and resources for UX writers.', url: 'https://uxwritinghub.com/', image: 'https://picsum.photos/seed/uxwritinghub/600/400', dataAiHint: 'ux resources' },
            { name: 'Typedream AI Writer', description: 'Build your website in minutes.', url: 'https://typedream.com/', image: 'https://picsum.photos/seed/typedream-ux/600/400', dataAiHint: 'website builder' },
            { name: 'Flowset AI', description: 'Create user flows with AI.', url: 'https://www.flowset.com/', image: 'https://picsum.photos/seed/flowset/600/400', dataAiHint: 'user flow' },
        ]
    },
    {
        title: "Product Description Tools",
        icon: <ShoppingCart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CopyMonkey', description: 'AI-generated product descriptions.', url: 'https://copymonkey.ai/', image: 'https://picsum.photos/seed/copymonkey-prod/600/400', dataAiHint: 'ecommerce copy' },
            { name: 'Jasper Product Copy', description: 'Write compelling product descriptions.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-prod/600/400', dataAiHint: 'product copy' },
            { name: 'Writesonic Ecom Writer', description: 'AI writer for e-commerce.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-ecom/600/400', dataAiHint: 'ecommerce writer' },
            { name: 'Shopia AI', description: 'SEO-optimized content for e-commerce.', url: 'https://www.shopia.ai/', image: 'https://picsum.photos/seed/shopia/600/400', dataAiHint: 'seo content' },
            { name: 'Describely.ai', description: 'Generate product descriptions, titles, and more.', url: 'https://describely.ai/', image: 'https://picsum.photos/seed/describely/600/400', dataAiHint: 'catalog content' },
        ]
    },
    {
        title: "Branding & Tagline Tools",
        icon: <Tag className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Namelix', description: 'Business name generator.', url: 'https://namelix.com/', image: 'https://picsum.photos/seed/namelix/600/400', dataAiHint: 'name generator' },
            { name: 'Zyro AI Slogan', description: 'Free AI slogan generator.', url: 'https://zyro.com/tools/slogan-generator', image: 'https://picsum.photos/seed/zyro-slogan/600/400', dataAiHint: 'slogan generator' },
            { name: 'Copy.ai Tagline', description: 'Generate taglines with AI.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-tagline/600/400', dataAiHint: 'tagline tool' },
            { name: 'Hipster Business Name Generator', description: 'A creative name generator.', url: 'https://www.hipsterlogogenerator.com/business-name-generator', image: 'https://picsum.photos/seed/hipstername/600/400', dataAiHint: 'creative names' },
            { name: 'BrandCrowd Slogan AI', description: 'Generate slogans for your business.', url: 'https://www.brandcrowd.com/slogan-maker', image: 'https://picsum.photos/seed/brandcrowd-slogan/600/400', dataAiHint: 'slogan maker' },
        ]
    },
    {
        title: "Long-Form Book Writing Tools",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sudowrite Story Engine', description: 'Your AI partner for writing fiction.', url: 'https://www.sudowrite.com/', image: 'https://picsum.photos/seed/sudowrite-book/600/400', dataAiHint: 'fiction writing' },
            { name: 'NovelAI', description: 'AI-assisted authorship.', url: 'https://novelai.net/', image: 'https://picsum.photos/seed/novelai-book/600/400', dataAiHint: 'story writing' },
            { name: 'Atticus AI', description: 'Writing and formatting tool for authors.', url: 'https://www.atticus.io/', image: 'https://picsum.photos/seed/atticus/600/400', dataAiHint: 'author tool' },
            { name: 'Ulysses with AI', description: 'The ultimate writing app.', url: 'https://ulysses.app/', image: 'https://picsum.photos/seed/ulysses-book/600/400', dataAiHint: 'writing app' },
            { name: 'LivingWriter AI', description: 'The best writing app for authors.', url: 'https://livingwriter.com/', image: 'https://picsum.photos/seed/livingwriter/600/400', dataAiHint: 'novel app' },
        ]
    },
    {
        title: "Translation Tools",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DeepL', description: 'The world\'s most accurate translator.', url: 'https://www.deepl.com/translator', image: 'https://picsum.photos/seed/deepl/600/400', dataAiHint: 'ai translator' },
            { name: 'Lingvanex', description: 'Translate text, voice, and images.', url: 'https://lingvanex.com/', image: 'https://picsum.photos/seed/lingvanex/600/400', dataAiHint: 'multilingual translation' },
            { name: 'Lokalise AI', description: 'AI-powered localization platform.', url: 'https://lokalise.com/', image: 'https://picsum.photos/seed/lokalise/600/400', dataAiHint: 'localization' },
            { name: 'Unbabel', description: 'AI-powered language operations.', url: 'https://unbabel.com/', image: 'https://picsum.photos/seed/unbabel/600/400', dataAiHint: 'language operations' },
        ]
    },
    {
        title: "Note-Taking AI Tools",
        icon: <StickyNote className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion AI', description: 'Your connected workspace with AI.', url: 'https://www.notion.so/product/ai', image: 'https://picsum.photos/seed/notion-notes/600/400', dataAiHint: 'ai notes' },
            { name: 'Mem.ai', description: 'The self-organizing workspace.', url: 'https://mem.ai/', image: 'https://picsum.photos/seed/memai/600/400', dataAiHint: 'organizing workspace' },
            { name: 'Obsidian Copilot', description: 'A powerful knowledge base with AI.', url: 'https://obsidian.md/', image: 'https://picsum.photos/seed/obsidian-notes/600/400', dataAiHint: 'knowledge base' },
            { name: 'ReflectAI', description: 'A note-taking tool for networked thought.', url: 'https://reflect.app/', image: 'https://picsum.photos/seed/reflectai/600/400', dataAiHint: 'networked thought' },
            { name: 'Roam Research AI', description: 'A note-taking tool with AI features.', url: 'https://roamresearch.com/', image: 'https://picsum.photos/seed/roam-notes/600/400', dataAiHint: 'research notes' },
        ]
    },
     {
        title: "Interview Writing Tools",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Kickresume Interview AI', description: 'Practice interviews with AI.', url: 'https://www.kickresume.com/en/ai-interview-practice', image: 'https://picsum.photos/seed/kickresume-interview/600/400', dataAiHint: 'interview practice' },
            { name: 'QuestionPro AI', description: 'AI-powered survey and research tools.', url: 'https://www.questionpro.com/', image: 'https://picsum.photos/seed/questionpro/600/400', dataAiHint: 'survey tools' },
            { name: 'HireQuotient AI', description: 'Skills assessment platform.', url: 'https://hirequotient.com/', image: 'https://picsum.photos/seed/hirequotient/600/400', dataAiHint: 'skills assessment' },
            { name: 'InterviewAI', description: 'Your AI interview coach.', url: '#', image: 'https://picsum.photos/seed/interviewai/600/400', dataAiHint: 'interview coach' },
        ]
    },
    {
        title: "Caption & Quotes Writing Tools",
        icon: <Quote className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CaptionPlus AI', description: 'AI-powered caption generator.', url: '#', image: 'https://picsum.photos/seed/captionplus/600/400', dataAiHint: 'caption generator' },
            { name: 'CaptionWriter', description: 'Generate captions for your photos.', url: '#', image: 'https://picsum.photos/seed/captionwriter/600/400', dataAiHint: 'photo captions' },
            { name: 'Sizle Caption AI', description: 'Create engaging captions for social media.', url: 'https://www.sizle.io/', image: 'https://picsum.photos/seed/sizle-caption/600/400', dataAiHint: 'social captions' },
            { name: 'Hootsuite Caption AI', description: 'AI assistant for social media captions.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-caption/600/400', dataAiHint: 'ai assistant' },
            { name: 'InstaCaption AI', description: 'Captions for Instagram posts.', url: '#', image: 'https://picsum.photos/seed/instacaption/600/400', dataAiHint: 'instagram captions' },
        ]
    },
    {
        title: "Newsletter Writing Tools",
        icon: <Newspaper className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Beehiiv AI', description: 'The newsletter platform built for growth.', url: 'https://www.beehiiv.com/', image: 'https://picsum.photos/seed/beehiiv/600/400', dataAiHint: 'newsletter platform' },
            { name: 'Substack AI Draft', description: 'A place for independent writing.', url: 'https://substack.com/', image: 'https://picsum.photos/seed/substack-ai/600/400', dataAiHint: 'independent writing' },
            { name: 'MailerLite AI Writer', description: 'Email marketing and automation.', url: 'https://www.mailerlite.com/', image: 'https://picsum.photos/seed/mailerlite-ai/600/400', dataAiHint: 'email marketing' },
            { name: 'Brevo AI Assistant', description: 'All-in-one marketing platform.', url: 'https://www.brevo.com/', image: 'https://picsum.photos/seed/brevo-ai/600/400', dataAiHint: 'marketing platform' },
            { name: 'ConvertKit AI', description: 'The creator marketing platform.', url: 'https://convertkit.com/', image: 'https://picsum.photos/seed/convertkit-ai/600/400', dataAiHint: 'creator marketing' },
        ]
    },
    {
        title: "Website Content Writing Tools",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Writesonic Website Copy', description: 'Generate website copy with AI.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-web/600/400', dataAiHint: 'website copy' },
            { name: 'Jasper Website Content', description: 'Create amazing website content.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-web/600/400', dataAiHint: 'web content' },
            { name: 'Copy.ai Web Copy', description: 'Generate copy for your website.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-web/600/400', dataAiHint: 'web copy ai' },
            { name: 'Frase Site Content', description: 'AI for SEO content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-web/600/400', dataAiHint: 'seo content' },
            { name: 'Outranking Web Writer', description: 'AI writing platform for higher rankings.', url: 'https://www.outranking.io/', image: 'https://picsum.photos/seed/outranking-web/600/400', dataAiHint: 'ai writing' },
        ]
    },
    {
        title: "Press Release Writing Tools",
        icon: <Newspaper className="w-5 h-5 text-primary" />,
        tools: [
            { name: 'Prowly AI', description: 'PR and media relations software.', url: 'https://prowly.com/', image: 'https://picsum.photos/seed/prowly/600/400', dataAiHint: 'pr software' },
            { name: 'PressKitHero AI', description: 'Create a press kit in minutes.', url: 'https://presskithero.com/', image: 'https://picsum.photos/seed/presskithero/600/400', dataAiHint: 'press kit' },
            { name: 'Prezly AI', description: 'The all-in-one PR software.', url: 'https://www.prezly.com/', image: 'https://picsum.photos/seed/prezly/600/400', dataAiHint: 'pr software' },
            { name: 'NewsAI PR Writer', description: 'AI-powered PR assistant.', url: '#', image: 'https://picsum.photos/seed/newsai-pr/600/400', dataAiHint: 'pr assistant' },
        ]
    },
    {
        title: "Essay Writing Tools",
        icon: <Feather className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jenni.ai', description: 'The AI assistant for students.', url: 'https://jenni.ai/', image: 'https://picsum.photos/seed/jenniai-essay/600/400', dataAiHint: 'student ai' },
            { name: 'Grammarly AI Writing', description: 'AI writing assistance for essays.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-essay/600/400', dataAiHint: 'essay writer' },
            { name: 'Paperpal Essay AI', description: 'The AI academic writing assistant.', url: 'https://paperpal.com/', image: 'https://picsum.photos/seed/paperpal-essay/600/400', dataAiHint: 'academic writer' },
            { name: 'EssayGenius', description: 'Generate essays with AI.', url: '#', image: 'https://picsum.photos/seed/essaygenius/600/400', dataAiHint: 'essay generator' },
            { name: 'EssayAI.net', description: 'AI-powered essay writing service.', url: 'https://www.essayai.net/', image: 'https://picsum.photos/seed/essayai/600/400', dataAiHint: 'writing service' },
        ]
    },
    {
        title: "Story Idea / Plot Generator Tools",
        icon: <Lightbulb className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'PlotFactory', description: 'Organize your story and characters.', url: 'https://plotfactory.com/', image: 'https://picsum.photos/seed/plotfactory/600/400', dataAiHint: 'story organizer' },
            { name: 'StoryLab', description: 'AI content ideas and writing tools.', url: 'https://storylab.ai/', image: 'https://picsum.photos/seed/storylab-plot/600/400', dataAiHint: 'content ideas' },
            { name: 'Reedsy Plot Generator', description: 'Generate plot ideas for your story.', url: 'https://reedsy.com/plot-generator', image: 'https://picsum.photos/seed/reedsy-plot/600/400', dataAiHint: 'plot ideas' },
            { name: 'NovelAI Ideas', description: 'AI-assisted story generation.', url: 'https://novelai.net/', image: 'https://picsum.photos/seed/novelai-ideas/600/400', dataAiHint: 'story generation' },
            { name: 'FictionFusion', description: 'AI story generator and writing assistant.', url: '#', image: 'https://picsum.photos/seed/fictionfusion/600/400', dataAiHint: 'writing assistant' },
        ]
    },
];

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


export default function WritingToolsPage() {
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

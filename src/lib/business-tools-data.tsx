
'use client';

import React from 'react';
import { 
    MessageSquare, Users, Bot, Mail, FileText, ListChecks, Workflow, Zap, BarChart, Brain, Search, TrendingUp, Presentation, Star, Link2, Copy, Cpu, Shield, Filter, TrendingUp as TrendingUpIcon, Target, Eye, ThumbsUp, ZoomIn, CheckSquare, Palette, Film, Mic, UserPlus, DollarSign, Wallet, Receipt, FileSignature, CreditCard, UserCog, Key, GitBranch, Terminal, HardDrive, RefreshCw, UploadCloud, Settings, Bug, Component, TestTube, BookOpen, Database, Layers, Cloud, Server, MonitorPlay, Smartphone, Globe, Gamepad2, Box, Webhook, Laptop, GanttChartSquare, FunctionSquare, BarChart3, Router, ClipboardCheck, MessageCircle as MessageCircleIcon, LineChart, Info, Megaphone, ImageIcon, Video
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

export const businessToolData: ToolCategory[] = [
    {
        title: "AI Chatbots & Virtual Assistants",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(50)].map((_, i) => ({ name: `Chatbot Tool ${i + 1}`, description: `Advanced tool for chatbot solution #${i + 1}`, url: '#', image: `https://picsum.photos/seed/chatbottool${i}/600/400`, dataAiHint: 'chatbot solution', pricing: 'Freemium' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Customer Support AI",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
             ...[...Array(52)].map((_, i) => ({ name: `Support AI Tool ${i + 1}`, description: `Tool for customer support automation #${i + 1}`, url: '#', image: `https://picsum.photos/seed/supportai${i}/600/400`, dataAiHint: 'support automation', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Sales AI Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(55)].map((_, i) => ({ name: `Sales AI Tool ${i + 1}`, description: `AI assistant for sales teams #${i + 1}`, url: '#', image: `https://picsum.photos/seed/salesai${i}/600/400`, dataAiHint: 'sales assistant', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI Email Assistants",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(53)].map((_, i) => ({ name: `Email AI Tool ${i + 1}`, description: `Tool for smart email management #${i + 1}`, url: '#', image: `https://picsum.photos/seed/emailai${i}/600/400`, dataAiHint: 'email management', pricing: 'Freemium' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI Meeting Notes & Transcription",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
             ...[...Array(51)].map((_, i) => ({ name: `Meeting AI Tool ${i + 1}`, description: `AI tool for meeting transcription #${i + 1}`, url: '#', image: `https://picsum.photos/seed/meetingai${i}/600/400`, dataAiHint: 'meeting transcription', pricing: 'Freemium' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI Project Management Tools",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(58)].map((_, i) => ({ name: `Project AI Tool ${i + 1}`, description: `AI for better project management #${i + 1}`, url: '#', image: `https://picsum.photos/seed/projectai${i}/600/400`, dataAiHint: 'project management', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Workflow Automation AI",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(54)].map((_, i) => ({ name: `Workflow AI Tool ${i + 1}`, description: `Tool for automating workflows #${i + 1}`, url: '#', image: `https://picsum.photos/seed/workflowai${i}/600/400`, dataAiHint: 'workflow automation', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Robotic Process Automation (RPA + AI)",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(56)].map((_, i) => ({ name: `RPA AI Tool ${i + 1}`, description: `RPA tool with AI capabilities #${i + 1}`, url: '#', image: `https://picsum.photos/seed/rpaai${i}/600/400`, dataAiHint: 'robotic process', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI Data Analytics Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(57)].map((_, i) => ({ name: `Analytics AI Tool ${i + 1}`, description: `AI tool for data analytics #${i + 1}`, url: '#', image: `https://picsum.photos/seed/analyticsai${i}/600/400`, dataAiHint: 'data analytics', pricing: 'Freemium' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Business Intelligence AI",
        icon: <Brain className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(59)].map((_, i) => ({ name: `BI AI Tool ${i + 1}`, description: `AI for business intelligence #${i + 1}`, url: '#', image: `https://picsum.photos/seed/biai${i}/600/400`, dataAiHint: 'business intelligence', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Market Research AI",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(50)].map((_, i) => ({ name: `Market Research AI ${i + 1}`, description: `AI tool for market research #${i + 1}`, url: '#', image: `https://picsum.photos/seed/marketresearchai${i}/600/400`, dataAiHint: 'market research', pricing: 'Freemium' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Competitive Intelligence AI",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(52)].map((_, i) => ({ name: `Competitive Intel AI ${i + 1}`, description: `AI for competitive intelligence #${i + 1}`, url: '#', image: `https://picsum.photos/seed/competitiveai${i}/600/400`, dataAiHint: 'competitive intel', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Predictive Analytics & Forecasting AI",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(55)].map((_, i) => ({ name: `Forecasting AI ${i + 1}`, description: `AI for predictive analytics #${i + 1}`, url: '#', image: `https://picsum.photos/seed/forecastingai${i}/600/400`, dataAiHint: 'predictive analytics', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI CRM Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(53)].map((_, i) => ({ name: `CRM AI Tool ${i + 1}`, description: `AI-powered CRM tool #${i + 1}`, url: '#', image: `https://picsum.photos/seed/crmai${i}/600/400`, dataAiHint: 'crm tool', pricing: 'Freemium' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Lead Generation AI",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(51)].map((_, i) => ({ name: `Lead Gen AI ${i + 1}`, description: `AI for lead generation #${i + 1}`, url: '#', image: `https://picsum.photos/seed/leadgenai${i}/600/400`, dataAiHint: 'lead generation', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI Copywriting Tools",
        icon: <Copy className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(58)].map((_, i) => ({ name: `Copywriting AI ${i + 1}`, description: `AI tool for copywriting #${i + 1}`, url: '#', image: `https://picsum.photos/seed/copywritingai${i}/600/400`, dataAiHint: 'copywriting tool', pricing: 'Freemium' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "SEO & Content Optimization AI",
        icon: <TrendingUpIcon className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(54)].map((_, i) => ({ name: `SEO AI Tool ${i + 1}`, description: `AI tool for SEO optimization #${i + 1}`, url: '#', image: `https://picsum.photos/seed/seoai${i}/600/400`, dataAiHint: 'seo optimization', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Social Media Management AI",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(56)].map((_, i) => ({ name: `Social Media AI ${i + 1}`, description: `AI tool for social media management #${i + 1}`, url: '#', image: `https://picsum.photos/seed/socialmediaai${i}/600/400`, dataAiHint: 'social media', pricing: 'Freemium' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI Ad Creation & Optimization",
        icon: <Megaphone className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(57)].map((_, i) => ({ name: `Ad AI Tool ${i + 1}`, description: `AI tool for ad creation #${i + 1}`, url: '#', image: `https://picsum.photos/seed/adai${i}/600/400`, dataAiHint: 'ad creation', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Brand Monitoring & Sentiment AI",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(59)].map((_, i) => ({ name: `Brand AI Tool ${i + 1}`, description: `AI for brand monitoring #${i + 1}`, url: '#', image: `https://picsum.photos/seed/brandai${i}/600/400`, dataAiHint: 'brand monitoring', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI Image Generation Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(50)].map((_, i) => ({ name: `Image Gen AI ${i + 1}`, description: `AI tool for image generation #${i + 1}`, url: '#', image: `https://picsum.photos/seed/imagegenai${i}/600/400`, dataAiHint: 'image generation', pricing: 'Freemium' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI Video Creation & Editing",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(52)].map((_, i) => ({ name: `Video AI Tool ${i + 1}`, description: `AI tool for video creation #${i + 1}`, url: '#', image: `https://picsum.photos/seed/videoai${i}/600/400`, dataAiHint: 'video creation', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Presentation & Slide AI",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(55)].map((_, i) => ({ name: `Presentation AI ${i + 1}`, description: `AI tool for presentations #${i + 1}`, url: '#', image: `https://picsum.photos/seed/presentationai${i}/600/400`, dataAiHint: 'presentation tool', pricing: 'Freemium' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Logo & Brand Design AI",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(53)].map((_, i) => ({ name: `Logo AI Tool ${i + 1}`, description: `AI tool for logo design #${i + 1}`, url: '#', image: `https://picsum.photos/seed/logoai${i}/600/400`, dataAiHint: 'logo design', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Voice & Speech AI",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(51)].map((_, i) => ({ name: `Voice AI Tool ${i + 1}`, description: `AI tool for voice and speech #${i + 1}`, url: '#', image: `https://picsum.photos/seed/voiceai${i}/600/400`, dataAiHint: 'voice speech', pricing: 'Freemium' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI Finance & Accounting Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(58)].map((_, i) => ({ name: `Finance AI Tool ${i + 1}`, description: `AI tool for finance and accounting #${i + 1}`, url: '#', image: `https://picsum.photos/seed/financeai${i}/600/400`, dataAiHint: 'finance accounting', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "Fraud Detection & Risk AI",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(54)].map((_, i) => ({ name: `Fraud AI Tool ${i + 1}`, description: `AI tool for fraud detection #${i + 1}`, url: '#', image: `https://picsum.photos/seed/fraudai${i}/600/400`, dataAiHint: 'fraud detection', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI HR & Recruitment Tools",
        icon: <UserCog className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(56)].map((_, i) => ({ name: `HR AI Tool ${i + 1}`, description: `AI tool for HR and recruitment #${i + 1}`, url: '#', image: `https://picsum.photos/seed/hrai${i}/600/400`, dataAiHint: 'hr recruitment', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI Legal & Compliance Tools",
        icon: <FileSignature className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(57)].map((_, i) => ({ name: `Legal AI Tool ${i + 1}`, description: `AI tool for legal and compliance #${i + 1}`, url: '#', image: `https://picsum.photos/seed/legalai${i}/600/400`, dataAiHint: 'legal compliance', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    },
    {
        title: "AI Cybersecurity Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            ...[...Array(59)].map((_, i) => ({ name: `Cybersecurity AI Tool ${i + 1}`, description: `AI tool for cybersecurity #${i + 1}`, url: '#', image: `https://picsum.photos/seed/cybersecurityai${i}/600/400`, dataAiHint: 'cybersecurity', pricing: 'Paid' as 'Paid' | 'Free' | 'Freemium' }))
        ]
    }
];

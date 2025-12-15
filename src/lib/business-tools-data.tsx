
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
            { name: 'Tidio', description: 'A comprehensive live chat and chatbot solution for businesses.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Intercom', description: 'The customer service platform for scaling businesses.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom/600/400', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'Drift', description: 'Revenue acceleration platform with conversational AI.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift/600/400', dataAiHint: 'revenue platform', pricing: 'Paid' },
            { name: 'Zendesk', description: 'Customer service software and sales CRM.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/zendesk/600/400', dataAiHint: 'support crm', pricing: 'Paid' },
            { name: 'ChatGPT', description: 'Conversational AI for a variety of tasks.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-biz/600/400', dataAiHint: 'openai chat', pricing: 'Freemium' },
        ]
    },
    {
        title: "Customer Support AI",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Gorgias', description: 'Customer service platform for e-commerce.', url: 'https://www.gorgias.com/', image: 'https://picsum.photos/seed/gorgias/600/400', dataAiHint: 'ecommerce support', pricing: 'Paid' },
            { name: 'Kustomer', description: 'Top-rated CRM for customer service.', url: 'https://www.kustomer.com/', image: 'https://picsum.photos/seed/kustomer/600/400', dataAiHint: 'customer crm', pricing: 'Paid' },
            { name: 'HappyFox', description: 'All-in-one help desk software.', url: 'https://www.happyfox.com/', image: 'https://picsum.photos/seed/happyfox/600/400', dataAiHint: 'help desk', pricing: 'Paid' },
            { name: 'Freshdesk', description: 'Cloud-based customer service software.', url: 'https://freshdesk.com/', image: 'https://picsum.photos/seed/freshdesk/600/400', dataAiHint: 'support software', pricing: 'Freemium' },
            { name: 'Ada', description: 'AI-powered customer service automation.', url: 'https://www.ada.cx/', image: 'https://picsum.photos/seed/ada/600/400', dataAiHint: 'service automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Sales AI Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Outreach', description: 'The Sales Execution Platform for intelligent revenue workflows.', url: 'https://www.outreach.io/', image: 'https://picsum.photos/seed/outreach/600/400', dataAiHint: 'sales execution', pricing: 'Paid' },
            { name: 'SalesLoft', description: 'The #1 Sales Engagement Platform.', url: 'https://salesloft.com/', image: 'https://picsum.photos/seed/salesloft/600/400', dataAiHint: 'sales engagement', pricing: 'Paid' },
            { name: 'Gong.io', description: 'Revenue intelligence platform.', url: 'https://www.gong.io/', image: 'https://picsum.photos/seed/gong-sales/600/400', dataAiHint: 'revenue intelligence', pricing: 'Paid' },
            { name: 'Chorus.ai', description: 'Conversation intelligence for sales teams.', url: 'https://www.chorus.ai/', image: 'https://picsum.photos/seed/chorus/600/400', dataAiHint: 'conversation intelligence', pricing: 'Paid' },
            { name: 'Clari', description: 'The leading revenue operations platform.', url: 'https://www.clari.com/', image: 'https://picsum.photos/seed/clari/600/400', dataAiHint: 'revenue operations', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Email Assistants",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Superhuman', description: 'The fastest email experience ever made.', url: 'https://superhuman.com/', image: 'https://picsum.photos/seed/superhuman/600/400', dataAiHint: 'fast email', pricing: 'Paid' },
            { name: 'SaneBox', description: 'Smart email filtering and organization.', url: 'https://www.sanebox.com/', image: 'https://picsum.photos/seed/sanebox/600/400', dataAiHint: 'email filter', pricing: 'Paid' },
            { name: 'Lavender', description: 'The #1 AI Sales Email Coach.', url: 'https://www.lavender.ai/', image: 'https://picsum.photos/seed/lavender/600/400', dataAiHint: 'email coach', pricing: 'Freemium' },
            { name: 'Boomerang for Gmail', description: 'Schedule emails and track responses.', url: 'https://www.boomeranggmail.com/', image: 'https://picsum.photos/seed/boomerang/600/400', dataAiHint: 'gmail extension', pricing: 'Freemium' },
            { name: 'Regie.ai', description: 'AI-powered content platform for sales teams.', url: 'https://www.regie.ai/', image: 'https://picsum.photos/seed/regie/600/400', dataAiHint: 'sales content', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Meeting Notes & Transcription",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Otter.ai', description: 'AI meeting assistant that records audio and writes notes.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otter-meeting/600/400', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'Fireflies.ai', description: 'AI assistant for your meetings.', url: 'https://fireflies.ai/', image: 'https://picsum.photos/seed/fireflies/600/400', dataAiHint: 'meeting assistant', pricing: 'Freemium' },
            { name: 'Descript', description: 'All-in-one audio & video editor with transcription.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-meeting/600/400', dataAiHint: 'video transcription', pricing: 'Freemium' },
            { name: 'Fathom', description: 'Free AI Notetaker for Zoom meetings.', url: 'https://fathom.video/', image: 'https://picsum.photos/seed/fathom/600/400', dataAiHint: 'zoom notes', pricing: 'Free' },
            { name: 'Sembly AI', description: 'Turns your meetings into text, summaries, and insights.', url: 'https://www.sembly.ai/', image: 'https://picsum.photos/seed/sembly/600/400', dataAiHint: 'meeting insights', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Project Management Tools",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Motion', description: 'Uses AI to intelligently plan your day.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/motion-pm/600/400', dataAiHint: 'ai planner', pricing: 'Paid' },
            { name: 'ClickUp', description: 'One app to replace them all.', url: 'https://clickup.com/', image: 'https://picsum.photos/seed/clickup-pm/600/400', dataAiHint: 'productivity platform', pricing: 'Freemium' },
            { name: 'Asana', description: 'Work management for teams.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-pm/600/400', dataAiHint: 'team management', pricing: 'Freemium' },
            { name: 'Notion AI', description: 'AI features integrated into Notion workspace.', url: 'https://www.notion.so/product/ai', image: 'https://picsum.photos/seed/notionai-pm/600/400', dataAiHint: 'workspace assistant', pricing: 'Paid' },
            { name: 'Monday.com', description: 'Work OS that powers teams to run projects and workflows.', url: 'https://monday.com/', image: 'https://picsum.photos/seed/monday-pm/600/400', dataAiHint: 'work os', pricing: 'Paid' },
        ]
    },
    {
        title: "Workflow Automation AI",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zapier', description: 'Automation for busy people.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-workflow/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Make (formerly Integromat)', description: 'Visually create, build, and automate.', url: 'https://www.make.com/', image: 'https://picsum.photos/seed/make-workflow/600/400', dataAiHint: 'visual automation', pricing: 'Freemium' },
            { name: 'n8n', description: 'Extendable workflow automation.', url: 'https://n8n.io/', image: 'https://picsum.photos/seed/n8n-workflow/600/400', dataAiHint: 'open source automation', pricing: 'Freemium' },
            { name: 'UiPath', description: 'The leader in enterprise automation.', url: 'https://www.uipath.com/', image: 'https://picsum.photos/seed/uipath-workflow/600/400', dataAiHint: 'rpa automation', pricing: 'Paid' },
            { name: 'Automation Anywhere', description: 'The #1 cloud automation platform.', url: 'https://www.automationanywhere.com/', image: 'https://picsum.photos/seed/automationanywhere/600/400', dataAiHint: 'cloud automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Robotic Process Automation (RPA + AI)",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
             { name: 'UiPath', description: 'The leader in enterprise automation.', url: 'https://www.uipath.com/', image: 'https://picsum.photos/seed/uipath-rpa/600/400', dataAiHint: 'rpa automation', pricing: 'Paid' },
            { name: 'Automation Anywhere', description: 'The #1 cloud automation platform.', url: 'https://www.automationanywhere.com/', image: 'https://picsum.photos/seed/automationanywhere-rpa/600/400', dataAiHint: 'cloud automation', pricing: 'Paid' },
            { name: 'Blue Prism', description: 'Intelligent automation for the enterprise.', url: 'https://www.blueprism.com/', image: 'https://picsum.photos/seed/blueprism/600/400', dataAiHint: 'enterprise automation', pricing: 'Paid' },
            { name: 'Power Automate', description: 'Microsoft\'s platform for workflow automation.', url: 'https://powerautomate.microsoft.com/', image: 'https://picsum.photos/seed/powerautomate/600/400', dataAiHint: 'microsoft flow', pricing: 'Freemium' },
            { name: 'Robocorp', description: 'Open-source stack for RPA.', url: 'https://robocorp.com/', image: 'https://picsum.photos/seed/robocorp/600/400', dataAiHint: 'python rpa', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Data Analytics Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tableau', description: 'Leading data visualization and BI software.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-analytics/600/400', dataAiHint: 'data visualization', pricing: 'Paid' },
            { name: 'Power BI', description: 'Microsoft\'s interactive data visualization BI tools.', url: 'https://powerbi.microsoft.com/', image: 'https://picsum.photos/seed/powerbi-analytics/600/400', dataAiHint: 'microsoft analytics', pricing: 'Freemium' },
            { name: 'Looker', description: 'Business intelligence and big data analytics platform.', url: 'https://looker.com/', image: 'https://picsum.photos/seed/looker/600/400', dataAiHint: 'google cloud bi', pricing: 'Paid' },
            { name: 'ThoughtSpot', description: 'Search and AI-driven analytics platform.', url: 'https://www.thoughtspot.com/', image: 'https://picsum.photos/seed/thoughtspot/600/400', dataAiHint: 'search analytics', pricing: 'Paid' },
            { name: 'Alteryx', description: 'Analytics Automation Platform.', url: 'https://www.alteryx.com/', image: 'https://picsum.photos/seed/alteryx/600/400', dataAiHint: 'analytics automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Business Intelligence AI",
        icon: <Brain className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sisense', description: 'Infuse analytics everywhere.', url: 'https://www.sisense.com/', image: 'https://picsum.photos/seed/sisense/600/400', dataAiHint: 'embedded analytics', pricing: 'Paid' },
            { name: 'Qlik Sense', description: 'Complete data analytics platform.', url: 'https://www.qlik.com/us/products/qlik-sense', image: 'https://picsum.photos/seed/qlik-sense/600/400', dataAiHint: 'associative engine', pricing: 'Paid' },
            { name: 'Domo', description: 'BI & data apps on a single platform.', url: 'https://www.domo.com/', image: 'https://picsum.photos/seed/domo/600/400', dataAiHint: 'data apps', pricing: 'Paid' },
            { name: 'MicroStrategy', description: 'Enterprise analytics and mobility platform.', url: 'https://www.microstrategy.com/', image: 'https://picsum.photos/seed/microstrategy/600/400', dataAiHint: 'enterprise bi', pricing: 'Paid' },
            { name: 'Pyramid Analytics', description: 'The Decision Intelligence Platform.', url: 'https://www.pyramidanalytics.com/', image: 'https://picsum.photos/seed/pyramid-analytics/600/400', dataAiHint: 'decision intelligence', pricing: 'Paid' },
        ]
    },
    {
        title: "Market Research AI",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SimilarWeb', description: 'Digital intelligence for market and competitive analysis.', url: 'https://www.similarweb.com/', image: 'https://picsum.photos/seed/similarweb/600/400', dataAiHint: 'website traffic', pricing: 'Freemium' },
            { name: 'SEMrush', description: 'Online visibility management and content marketing platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-market/600/400', dataAiHint: 'seo tools', pricing: 'Paid' },
            { name: 'Brandwatch', description: 'Consumer intelligence and social media listening.', url: 'https://www.brandwatch.com/', image: 'https://picsum.photos/seed/brandwatch/600/400', dataAiHint: 'consumer intelligence', pricing: 'Paid' },
            { name: 'Attest', description: 'Consumer research platform.', url: 'https://www.askattest.com/', image: 'https://picsum.photos/seed/attest/600/400', dataAiHint: 'consumer research', pricing: 'Paid' },
            { name: 'SurveyMonkey', description: 'Online survey software.', url: 'https://www.surveymonkey.com/', image: 'https://picsum.photos/seed/surveymonkey-market/600/400', dataAiHint: 'online surveys', pricing: 'Freemium' },
        ]
    },
    {
        title: "Competitive Intelligence AI",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Crayon', description: 'Market and competitive intelligence software.', url: 'https://www.crayon.co/', image: 'https://picsum.photos/seed/crayon/600/400', dataAiHint: 'competitive intel', pricing: 'Paid' },
            { name: 'Kompyte', description: 'Track your competitors and their strategies.', url: 'https://www.kompyte.com/', image: 'https://picsum.photos/seed/kompyte/600/400', dataAiHint: 'competitor tracking', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'SEO tools and resources to grow your search traffic.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-competitive/600/400', dataAiHint: 'backlink checker', pricing: 'Paid' },
            { name: 'SpyFu', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/', image: 'https://picsum.photos/seed/spyfu/600/400', dataAiHint: 'keyword research', pricing: 'Paid' },
            { name: 'Owletter', description: 'Capture and analyze competitor emails.', url: 'https://www.owletter.com/', image: 'https://picsum.photos/seed/owletter/600/400', dataAiHint: 'email tracking', pricing: 'Paid' },
        ]
    },
    {
        title: "Predictive Analytics & Forecasting AI",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DataRobot', description: 'Enterprise AI platform.', url: 'https://www.datarobot.com/', image: 'https://picsum.photos/seed/datarobot/600/400', dataAiHint: 'enterprise ai', pricing: 'Paid' },
            { name: 'H2O.ai', description: 'AI Cloud for building, deploying, and managing AI models.', url: 'https://h2o.ai/', image: 'https://picsum.photos/seed/h2oai/600/400', dataAiHint: 'ai cloud', pricing: 'Freemium' },
            { name: 'RapidMiner', description: 'A data science platform for teams.', url: 'https://rapidminer.com/', image: 'https://picsum.photos/seed/rapidminer/600/400', dataAiHint: 'data science', pricing: 'Paid' },
            { name: 'Aviso', description: 'The AI-powered revenue intelligence platform.', url: 'https://www.aviso.com/', image: 'https://picsum.photos/seed/aviso/600/400', dataAiHint: 'revenue intelligence', pricing: 'Paid' },
            { name: 'Anaplan', description: 'Platform for connected planning.', url: 'https://www.anaplan.com/', image: 'https://picsum.photos/seed/anaplan/600/400', dataAiHint: 'connected planning', pricing: 'Paid' },
        ]
    },
    {
        title: "AI CRM Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Salesforce Einstein', description: 'AI for the world\'s #1 CRM.', url: 'https://www.salesforce.com/products/einstein/', image: 'https://picsum.photos/seed/einstein/600/400', dataAiHint: 'salesforce ai', pricing: 'Paid' },
            { name: 'HubSpot AI', description: 'AI-powered tools for the HubSpot platform.', url: 'https://www.hubspot.com/artificial-intelligence', image: 'https://picsum.photos/seed/hubspot-ai/600/400', dataAiHint: 'hubspot tools', pricing: 'Freemium' },
            { name: 'Zoho Zia', description: 'An AI-powered assistant for your Zoho apps.', url: 'https://www.zoho.com/zia/', image: 'https://picsum.photos/seed/zia/600/400', dataAiHint: 'zoho assistant', pricing: 'Freemium' },
            { name: 'Affinity', description: 'Relationship intelligence platform.', url: 'https://www.affinity.co/', image: 'https://picsum.photos/seed/affinity/600/400', dataAiHint: 'relationship intelligence', pricing: 'Paid' },
            { name: 'Pipedrive', description: 'Sales CRM & pipeline management software.', url: 'https://www.pipedrive.com/', image: 'https://picsum.photos/seed/pipedrive-ai/600/400', dataAiHint: 'sales crm', pricing: 'Paid' },
        ]
    },
    {
        title: "Lead Generation AI",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ZoomInfo', description: 'B2B contact and company intelligence.', url: 'https://www.zoominfo.com/', image: 'https://picsum.photos/seed/zoominfo/600/400', dataAiHint: 'b2b database', pricing: 'Paid' },
            { name: 'Apollo.io', description: 'Sales intelligence and engagement platform.', url: 'https://www.apollo.io/', image: 'https://picsum.photos/seed/apollo/600/400', dataAiHint: 'sales platform', pricing: 'Freemium' },
            { name: 'Leadfeeder', description: 'Identify companies visiting your website.', url: 'https://www.leadfeeder.com/', image: 'https://picsum.photos/seed/leadfeeder/600/400', dataAiHint: 'website visitors', pricing: 'Freemium' },
            { name: 'Clearbit', description: 'Marketing data engine for all of your customer interactions.', url: 'https://clearbit.com/', image: 'https://picsum.photos/seed/clearbit/600/400', dataAiHint: 'marketing data', pricing: 'Paid' },
            { name: 'Hunter', description: 'Find email addresses in seconds.', url: 'https://hunter.io/', image: 'https://picsum.photos/seed/hunter/600/400', dataAiHint: 'email finder', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Copywriting Tools",
        icon: <Copy className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper', description: 'AI content platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-copy/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'AI-powered copywriter that generates high-quality copy.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Writesonic', description: 'AI writer for creating SEO-friendly content.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-copy/600/400', dataAiHint: 'content generator', pricing: 'Freemium' },
            { name: 'Rytr', description: 'An AI writing assistant that helps you create content.', url: 'https://rytr.me/', image: 'https://picsum.photos/seed/rytr/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Anyword', description: 'AI copywriting tool for marketing results.', url: 'https://anyword.com/', image: 'https://picsum.photos/seed/anyword/600/400', dataAiHint: 'performance marketing', pricing: 'Paid' },
        ]
    },
    {
        title: "SEO & Content Optimization AI",
        icon: <TrendingUpIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Surfer SEO', description: 'Content intelligence tool for SEO.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo/600/400', dataAiHint: 'seo content', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse/600/400', dataAiHint: 'content strategy', pricing: 'Paid' },
            { name: 'Frase', description: 'AI for content that answers questions.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'Clearscope', description: 'The best content optimization software.', url: 'https://www.clearscope.io/', image: 'https://picsum.photos/seed/clearscope/600/400', dataAiHint: 'seo writing', pricing: 'Paid' },
            { name: 'Alli AI', description: 'Automate SEO and drive organic traffic.', url: 'https://alli.ai/', image: 'https://picsum.photos/seed/alli-ai/600/400', dataAiHint: 'seo automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Social Media Management AI",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lately', description: 'AI-powered social media marketing platform.', url: 'https://www.lately.ai/', image: 'https://picsum.photos/seed/lately/600/400', dataAiHint: 'social content', pricing: 'Paid' },
            { name: 'Sprout Social', description: 'Social media management solutions.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sprout-social/600/400', dataAiHint: 'social media', pricing: 'Paid' },
            { name: 'Hootsuite', description: 'Manage all your social media in one place.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite/600/400', dataAiHint: 'social dashboard', pricing: 'Paid' },
            { name: 'Agorapulse', description: 'Social media management software.', url: 'https://www.agorapulse.com/', image: 'https://picsum.photos/seed/agorapulse/600/400', dataAiHint: 'social inbox', pricing: 'Paid' },
            { name: 'Buffer', description: 'Social media toolkit for small businesses.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-social/600/400', dataAiHint: 'social scheduling', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Ad Creation & Optimization",
        icon: <Megaphone className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AdCreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative/600/400', dataAiHint: 'ad creatives', pricing: 'Paid' },
            { name: 'Pencil', description: 'AI ad generator for e-commerce.', url: 'https://www.trypencil.com/', image: 'https://picsum.photos/seed/pencil-ad/600/400', dataAiHint: 'ecommerce ads', pricing: 'Paid' },
            { name: 'Omneky', description: 'AI-powered personalized advertising.', url: 'https://www.omneky.com/', image: 'https://picsum.photos/seed/omneky/600/400', dataAiHint: 'personalized ads', pricing: 'Paid' },
            { name: 'Smartly.io', description: 'Social advertising automation platform.', url: 'https://www.smartly.io/', image: 'https://picsum.photos/seed/smartly/600/400', dataAiHint: 'ad automation', pricing: 'Paid' },
            { name: 'Albert AI', description: 'Self-learning digital marketing ally.', url: 'https://albert.ai/', image: 'https://picsum.photos/seed/albert-ai/600/400', dataAiHint: 'marketing ai', pricing: 'Paid' },
        ]
    },
    {
        title: "Brand Monitoring & Sentiment AI",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://picsum.photos/seed/brand24/600/400', dataAiHint: 'media monitoring', pricing: 'Paid' },
            { name: 'Talkwalker', description: 'Consumer intelligence acceleration.', url: 'https://www.talkwalker.com/', image: 'https://picsum.photos/seed/talkwalker/600/400', dataAiHint: 'consumer insights', pricing: 'Paid' },
            { name: 'Mention', description: 'Social media and web monitoring.', url: 'https://mention.com/', image: 'https://picsum.photos/seed/mention/600/400', dataAiHint: 'web monitoring', pricing: 'Freemium' },
            { name: 'Meltwater', description: 'Media intelligence and social listening.', url: 'https://www.meltwater.com/', image: 'https://picsum.photos/seed/meltwater/600/400', dataAiHint: 'media intelligence', pricing: 'Paid' },
            { name: 'Critical Mention', description: 'Earned media monitoring.', url: 'https://www.criticalmention.com/', image: 'https://picsum.photos/seed/critical-mention/600/400', dataAiHint: 'media tracking', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Image Generation Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Midjourney', description: 'AI art generator via Discord.', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-biz/600/400', dataAiHint: 'discord art', pricing: 'Paid' },
            { name: 'DALL·E 3', description: 'OpenAI\'s image generation model.', url: 'https://openai.com/dall-e-3', image: 'https://picsum.photos/seed/dalle3-biz/600/400', dataAiHint: 'openai image', pricing: 'Freemium' },
            { name: 'Stable Diffusion', description: 'Open-source text-to-image model.', url: 'https://stablediffusionweb.com/', image: 'https://picsum.photos/seed/stablediffusion-biz/600/400', dataAiHint: 'open source art', pricing: 'Free' },
            { name: 'Adobe Firefly', description: 'Generative AI for creatives.', url: 'https://firefly.adobe.com/', image: 'https://picsum.photos/seed/firefly-biz/600/400', dataAiHint: 'adobe ai', pricing: 'Freemium' },
            { name: 'Canva', description: 'Design anything. Publish anywhere.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-biz/600/400', dataAiHint: 'design platform', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Video Creation & Editing",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Synthesia', description: 'AI video generation platform.', url: 'https://www.synthesia.io/', image: 'https://picsum.photos/seed/synthesia-video-biz/600/400', dataAiHint: 'ai presenter', pricing: 'Paid' },
            { name: 'Runway', description: 'AI Magic Tools for video makers.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-video-biz/600/400', dataAiHint: 'video magic', pricing: 'Freemium' },
            { name: 'Pika', description: 'Idea-to-video platform.', url: 'https://pika.art/', image: 'https://picsum.photos/seed/pika-biz/600/400', dataAiHint: 'text to video', pricing: 'Freemium' },
            { name: 'InVideo', description: 'Online video editor and maker.', url: 'https://invideo.io/', image: 'https://picsum.photos/seed/invideo-biz/600/400', dataAiHint: 'video templates', pricing: 'Freemium' },
            { name: 'Descript', description: 'All-in-one audio and video editor.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-video-biz/600/400', dataAiHint: 'edit by text', pricing: 'Freemium' },
        ]
    },
    {
        title: "Presentation & Slide AI",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tome', description: 'The AI-powered storytelling format.', url: 'https://tome.app/', image: 'https://picsum.photos/seed/tome-slides/600/400', dataAiHint: 'ai presentation', pricing: 'Freemium' },
            { name: 'Beautiful.ai', description: 'Presentation software that designs for you.', url: 'https://www.beautiful.ai/', image: 'https://picsum.photos/seed/beautifulai/600/400', dataAiHint: 'design slides', pricing: 'Paid' },
            { name: 'Pitch', description: 'Collaborative presentation software.', url: 'https://pitch.com/', image: 'https://picsum.photos/seed/pitch/600/400', dataAiHint: 'team presentations', pricing: 'Freemium' },
            { name: 'Gamma', description: 'A new medium for presenting ideas.', url: 'https://gamma.app/', image: 'https://picsum.photos/seed/gamma/600/400', dataAiHint: 'ai slides', pricing: 'Freemium' },
            { name: 'SlidesAI.io', description: 'Create presentation slides with AI in seconds.', url: 'https://www.slidesai.io/', image: 'https://picsum.photos/seed/slidesai/600/400', dataAiHint: 'google slides ai', pricing: 'Freemium' },
        ]
    },
    {
        title: "Logo & Brand Design AI",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Looka', description: 'AI-powered logo and brand identity.', url: 'https://looka.com/', image: 'https://picsum.photos/seed/looka-logo/600/400', dataAiHint: 'logo maker', pricing: 'Paid' },
            { name: 'Brandmark', description: 'Create a unique, professional logo.', url: 'https://brandmark.io/', image: 'https://picsum.photos/seed/brandmark-logo/600/400', dataAiHint: 'professional logo', pricing: 'Paid' },
            { name: 'Hatchful', description: 'Free logo maker by Shopify.', url: 'https://hatchful.shopify.com/', image: 'https://picsum.photos/seed/hatchful-logo/600/400', dataAiHint: 'shopify logo', pricing: 'Free' },
            { name: 'Tailor Brands', description: 'AI-powered branding platform.', url: 'https://www.tailorbrands.com/', image: 'https://picsum.photos/seed/tailorbrands-logo/600/400', dataAiHint: 'branding platform', pricing: 'Paid' },
            { name: 'Designs.ai', description: 'Create logos, videos, and more with AI.', url: 'https://designs.ai/', image: 'https://picsum.photos/seed/designsai-logo/600/400', dataAiHint: 'creative suite', pricing: 'Freemium' },
        ]
    },
    {
        title: "Voice & Speech AI",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ElevenLabs', description: 'The most realistic AI speech software.', url: 'https://elevenlabs.io/', image: 'https://picsum.photos/seed/elevenlabs-speech/600/400', dataAiHint: 'voice cloning', pricing: 'Freemium' },
            { name: 'Murf.ai', description: 'Go from text to speech with a versatile AI voice generator.', url: 'https://murf.ai/', image: 'https://picsum.photos/seed/murf-speech/600/400', dataAiHint: 'ai voiceover', pricing: 'Freemium' },
            { name: 'Lovo.ai', description: 'AI voice generator and text-to-speech platform.', url: 'https://lovo.ai/', image: 'https://picsum.photos/seed/lovo-speech/600/400', dataAiHint: 'realistic voices', pricing: 'Freemium' },
            { name: 'Speechify', description: 'The #1 text-to-speech reader.', url: 'https://speechify.com/', image: 'https://picsum.photos/seed/speechify-speech/600/400', dataAiHint: 'text reader', pricing: 'Freemium' },
            { name: 'Play.ht', description: 'AI-powered text to voice generator.', url: 'https://play.ht/', image: 'https://picsum.photos/seed/playht-speech/600/400', dataAiHint: 'tts audio', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Finance & Accounting Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Datarails', description: 'FP&A software for Excel users.', url: 'https://www.datarails.com/', image: 'https://picsum.photos/seed/datarails/600/400', dataAiHint: 'financial planning', pricing: 'Paid' },
            { name: 'Vic.ai', description: 'AI for accounts payable.', url: 'https://www.vic.ai/', image: 'https://picsum.photos/seed/vicai/600/400', dataAiHint: 'invoice processing', pricing: 'Paid' },
            { name: 'Docyt', description: 'AI-powered accounting automation.', url: 'https://www.docyt.com/', image: 'https://picsum.photos/seed/docyt/600/400', dataAiHint: 'bookkeeping automation', pricing: 'Paid' },
            { name: 'Indy', description: 'Freelance admin platform with invoicing.', url: 'https://indy.com/', image: 'https://picsum.photos/seed/indy/600/400', dataAiHint: 'freelance tools', pricing: 'Freemium' },
            { name: 'Zeni', description: 'AI-powered bookkeeping and accounting.', url: 'https://www.zeni.ai/', image: 'https://picsum.photos/seed/zeni/600/400', dataAiHint: 'startup finance', pricing: 'Paid' },
        ]
    },
    {
        title: "Fraud Detection & Risk AI",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Signifyd', description: 'Guaranteed fraud protection for e-commerce.', url: 'https://www.signifyd.com/', image: 'https://picsum.photos/seed/signifyd/600/400', dataAiHint: 'ecommerce fraud', pricing: 'Paid' },
            { name: 'Sift', description: 'Digital Trust & Safety Suite.', url: 'https://sift.com/', image: 'https://picsum.photos/seed/sift/600/400', dataAiHint: 'fraud prevention', pricing: 'Paid' },
            { name: 'Kount', description: 'Digital fraud prevention and identity trust.', url: 'https://www.kount.com/', image: 'https://picsum.photos/seed/kount/600/400', dataAiHint: 'identity trust', pricing: 'Paid' },
            { name: 'Riskified', description: 'AI-powered e-commerce fraud prevention.', url: 'https://www.riskified.com/', image: 'https://picsum.photos/seed/riskified/600/400', dataAiHint: 'ecommerce risk', pricing: 'Paid' },
            { name: 'SEON', description: 'Fraud detection for ambitious businesses.', url: 'https://seon.io/', image: 'https://picsum.photos/seed/seon/600/400', dataAiHint: 'online fraud', pricing: 'Paid' },
        ]
    },
    {
        title: "AI HR & Recruitment Tools",
        icon: <UserCog className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HireVue', description: 'Video interviewing and assessment platform.', url: 'https://www.hirevue.com/', image: 'https://picsum.photos/seed/hirevue/600/400', dataAiHint: 'video interviews', pricing: 'Paid' },
            { name: 'Paradox', description: 'Conversational recruiting software.', url: 'https://www.paradox.ai/', image: 'https://picsum.photos/seed/paradox/600/400', dataAiHint: 'recruiting assistant', pricing: 'Paid' },
            { name: 'Eightfold.ai', description: 'Talent Intelligence Platform.', url: 'https://eightfold.ai/', image: 'https://picsum.photos/seed/eightfold/600/400', dataAiHint: 'talent intelligence', pricing: 'Paid' },
            { name: 'SeekOut', description: 'Talent search engine and engagement platform.', url: 'https://www.seekout.com/', image: 'https://picsum.photos/seed/seekout/600/400', dataAiHint: 'talent search', pricing: 'Paid' },
            { name: 'Pymetrics', description: 'Soft skills platform to build the workforce of the future.', url: 'https://www.pymetrics.ai/', image: 'https://picsum.photos/seed/pymetrics/600/400', dataAiHint: 'talent assessment', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Legal & Compliance Tools",
        icon: <FileSignature className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'LawGeex', description: 'AI-powered contract review automation.', url: 'https://www.lawgeex.com/', image: 'https://picsum.photos/seed/lawgeex/600/400', dataAiHint: 'contract review', pricing: 'Paid' },
            { name: 'Kira Systems', description: 'AI for contract analysis.', url: 'https://kirasystems.com/', image: 'https://picsum.photos/seed/kira-systems/600/400', dataAiHint: 'due diligence', pricing: 'Paid' },
            { name: 'Everlaw', description: 'Cloud-based e-discovery and litigation platform.', url: 'https://www.everlaw.com/', image: 'https://picsum.photos/seed/everlaw/600/400', dataAiHint: 'e-discovery', pricing: 'Paid' },
            { name: 'LegalMation', description: 'Automates early-stage litigation tasks.', url: 'https://www.legalmation.com/', image: 'https://picsum.photos/seed/legalmation/600/400', dataAiHint: 'litigation automation', pricing: 'Paid' },
            { name: 'Casetext', description: 'Modern legal research with AI.', url: 'https://casetext.com/', image: 'https://picsum.photos/seed/casetext/600/400', dataAiHint: 'legal research', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Cybersecurity Tools",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Darktrace', description: 'Cyber AI for the real world.', url: 'https://www.darktrace.com/', image: 'https://picsum.photos/seed/darktrace/600/400', dataAiHint: 'cyber ai', pricing: 'Paid' },
            { name: 'Vectra AI', description: 'AI-driven threat detection and response.', url: 'https://www.vectra.ai/', image: 'https://picsum.photos/seed/vectra/600/400', dataAiHint: 'threat detection', pricing: 'Paid' },
            { name: 'Cynet', description: 'Autonomous XDR Platform.', url: 'https://www.cynet.com/', image: 'https://picsum.photos/seed/cynet/600/400', dataAiHint: 'xdr platform', pricing: 'Paid' },
            { name: 'CrowdStrike', description: 'Cloud-native endpoint security platform.', url: 'https://www.crowdstrike.com/', image: 'https://picsum.photos/seed/crowdstrike/600/400', dataAiHint: 'endpoint security', pricing: 'Paid' },
            { name: 'SentinelOne', description: 'AI-powered endpoint protection.', url: 'https://www.sentinelone.com/', image: 'https://picsum.photos/seed/sentinelone/600/400', dataAiHint: 'ai security', pricing: 'Paid' },
        ]
    }
];

    
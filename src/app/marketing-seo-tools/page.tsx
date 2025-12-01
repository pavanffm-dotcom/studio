'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Filter,
    Briefcase, TrendingUp, Search, MonitorPlay, BarChart, Users, Mail, Bot, Link2, GitBranch,
    ClipboardCheck, MessageCircle, BarChart2, Zap, Settings, RefreshCw, LineChart, Target, Eye,
    ThumbsUp, ZoomIn, CheckSquare, Palette, Film, Mic, UserPlus, DollarSign,
    FileText, Code, Shield, Video, Gamepad, TestTube, Cloud, Info, HelpCircle,
    Send, LayoutDashboard, ImageIcon
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
        title: "Digital Marketing Tools",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot', description: 'All-in-one marketing, sales, and service software.', url: 'https://www.hubspot.com/', image: 'https://picsum.photos/seed/hubspot-digital/600/400', dataAiHint: 'crm marketing', pricing: 'Freemium' },
            { name: 'Marketo', description: 'Marketing automation for account-based marketing.', url: 'https://www.marketo.com/', image: 'https://picsum.photos/seed/marketo-digital/600/400', dataAiHint: 'b2b marketing', pricing: 'Paid' },
            { name: 'ActiveCampaign', description: 'Customer experience automation platform.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign-digital/600/400', dataAiHint: 'email automation', pricing: 'Paid' },
            { name: 'Mailchimp', description: 'Marketing automation and email marketing service.', url: 'https://mailchimp.com/', image: 'https://picsum.photos/seed/mailchimp-digital/600/400', dataAiHint: 'email campaigns', pricing: 'Freemium' },
            { name: 'GetResponse', description: 'Inbound marketing software for businesses.', url: 'https://www.getresponse.com/', image: 'https://picsum.photos/seed/getresponse-digital/600/400', dataAiHint: 'inbound marketing', pricing: 'Freemium' },
            { name: 'SendinBlue', description: 'All-in-one marketing platform (now Brevo).', url: 'https://www.brevo.com/', image: 'https://picsum.photos/seed/sendinblue-digital/600/400', dataAiHint: 'marketing platform', pricing: 'Freemium' },
            { name: 'Zoho Campaigns', description: 'Email and social media marketing software.', url: 'https://www.zoho.com/campaigns/', image: 'https://picsum.photos/seed/zoho-campaigns/600/400', dataAiHint: 'social marketing', pricing: 'Freemium' },
        ]
    },
    {
        title: "SEO Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Ahrefs', description: 'All-in-one SEO toolset.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-seo-tools/600/400', dataAiHint: 'backlink analysis', pricing: 'Paid' },
            { name: 'SEMrush', description: 'Online visibility management and content marketing platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-seo-tools/600/400', dataAiHint: 'keyword research', pricing: 'Paid' },
            { name: 'Moz Pro', description: 'SEO software and data to help you increase traffic, rankings, and visibility.', url: 'https://moz.com/products/pro', image: 'https://picsum.photos/seed/mozpro-seo-tools/600/400', dataAiHint: 'seo software', pricing: 'Paid' },
            { name: 'Ubersuggest', description: 'Free keyword tool to generate new keyword ideas.', url: 'https://neilpatel.com/ubersuggest/', image: 'https://picsum.photos/seed/ubersuggest-seo/600/400', dataAiHint: 'keyword generator', pricing: 'Freemium' },
            { name: 'Mangools', description: 'Juicy SEO tools you will love.', url: 'https://mangools.com/', image: 'https://picsum.photos/seed/mangools-seo/600/400', dataAiHint: 'seo tools', pricing: 'Freemium' },
            { name: 'SE Ranking', description: 'All-in-one SEO software for business owners, pros, and agencies.', url: 'https://seranking.com/', image: 'https://picsum.photos/seed/seranking-seo/600/400', dataAiHint: 'agency seo', pricing: 'Paid' },
            { name: 'SpyFu', description: 'Competitor keyword research tools for AdWords.', url: 'https://www.spyfu.com/', image: 'https://picsum.photos/seed/spyfu-seo/600/400', dataAiHint: 'adwords tool', pricing: 'Paid' },
        ]
    },
    {
        title: "Keyword Research Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Keyword Planner', description: 'Choose the right keywords with this free tool.', url: 'https://ads.google.com/home/tools/keyword-planner/', image: 'https://picsum.photos/seed/gkp/600/400', dataAiHint: 'adwords keywords', pricing: 'Free' },
            { name: 'Ahrefs Keywords Explorer', description: 'Get relevant keyword ideas and traffic estimates.', url: 'https://ahrefs.com/keywords-explorer', image: 'https://picsum.photos/seed/ahrefs-keywords/600/400', dataAiHint: 'traffic estimates', pricing: 'Paid' },
            { name: 'SEMrush Keyword Magic', description: 'The easiest way to find the best keywords.', url: 'https://www.semrush.com/features/keyword-magic-tool/', image: 'https://picsum.photos/seed/semrush-keyword/600/400', dataAiHint: 'keyword tool', pricing: 'Paid' },
            { name: 'KeywordTool.io', description: 'Free alternative to Google Keyword Planner.', url: 'https://keywordtool.io/', image: 'https://picsum.photos/seed/keywordtoolio/600/400', dataAiHint: 'free keyword', pricing: 'Freemium' },
            { name: 'KWFinder', description: 'Find long-tail keywords with low SEO difficulty.', url: 'https://kwfinder.com/', image: 'https://picsum.photos/seed/kwfinder/600/400', dataAiHint: 'long-tail keywords', pricing: 'Freemium' },
            { name: 'LongTailPro', description: 'The best keyword research tool for long-tail keywords.', url: 'https://longtailpro.com/', image: 'https://picsum.photos/seed/longtailpro-keywords/600/400', dataAiHint: 'keyword research', pricing: 'Paid' },
            { name: 'WordTracker', description: 'Reveal 10,000 keywords in minutes.', url: 'https://www.wordtracker.com/', image: 'https://picsum.photos/seed/wordtracker/600/400', dataAiHint: 'keyword minutes', pricing: 'Freemium' },
        ]
    },
    {
        title: "On-Page SEO Tools",
        icon: <ClipboardCheck className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'RankMath AI', description: 'The Swiss Army Knife of WordPress SEO.', url: 'https://rankmath.com/', image: 'https://picsum.photos/seed/rankmath/600/400', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'Yoast SEO', description: 'The #1 WordPress SEO Plugin.', url: 'https://yoast.com/', image: 'https://picsum.photos/seed/yoast/600/400', dataAiHint: 'plugin seo', pricing: 'Freemium' },
            { name: 'SurferSEO', description: 'Content intelligence tool to help you write better content.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-onpage/600/400', dataAiHint: 'content intelligence', pricing: 'Paid' },
            { name: 'PageOptimizer Pro', description: 'On-page SEO tool for professionals.', url: 'https://pageoptimizer.pro/', image: 'https://picsum.photos/seed/pop-onpage/600/400', dataAiHint: 'seo pro', pricing: 'Paid' },
            { name: 'Clearscope', description: 'Best-in-class SEO content optimization.', url: 'https://www.clearscope.io/', image: 'https://picsum.photos/seed/clearscope-onpage/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'NeuronWriter', description: 'Content optimization with semantic SEO and NLP.', url: 'https://neuronwriter.com/', image: 'https://picsum.photos/seed/neuronwriter-onpage/600/400', dataAiHint: 'semantic seo', pricing: 'Paid' },
            { name: 'Outranking', description: 'AI writing platform for higher rankings.', url: 'https://www.outranking.io/', image: 'https://picsum.photos/seed/outranking-onpage/600/400', dataAiHint: 'higher rankings', pricing: 'Paid' },
        ]
    },
    {
        title: "Off-Page SEO Tools",
        icon: <MessageCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'BuzzSumo', description: 'Find the most shared content and key influencers.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-offpage/600/400', dataAiHint: 'influencer marketing', pricing: 'Freemium' },
            { name: 'Pitchbox', description: 'Influencer outreach & content marketing platform.', url: 'https://pitchbox.com/', image: 'https://picsum.photos/seed/pitchbox-offpage/600/400', dataAiHint: 'outreach platform', pricing: 'Paid' },
            { name: 'NinjaOutreach', description: 'Blogger outreach software for marketers.', url: 'https://ninjaoutreach.com/', image: 'https://picsum.photos/seed/ninjaoutreach/600/400', dataAiHint: 'blogger outreach', pricing: 'Paid' },
            { name: 'LinkHunter', description: 'Automated link building and email outreach.', url: 'https://linkhunter.com/', image: 'https://picsum.photos/seed/linkhunter/600/400', dataAiHint: 'link building', pricing: 'Paid' },
            { name: 'Respona', description: 'All-in-one blogger outreach platform.', url: 'https://respona.com/', image: 'https://picsum.photos/seed/respona/600/400', dataAiHint: 'blogger platform', pricing: 'Paid' },
            { name: 'Postaga', description: 'AI-powered outreach platform for link building.', url: 'https://postaga.com/', image: 'https://picsum.photos/seed/postaga/600/400', dataAiHint: 'ai outreach', pricing: 'Paid' },
        ]
    },
    {
        title: "Link-Building Tools",
        icon: <Link2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Ahrefs Backlink Checker', description: 'The world\'s biggest index of live backlinks.', url: 'https://ahrefs.com/backlink-checker', image: 'https://picsum.photos/seed/ahrefs-backlink/600/400', dataAiHint: 'backlink index', pricing: 'Freemium' },
            { name: 'Majestic', description: 'The planet\'s largest link index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic-link/600/400', dataAiHint: 'link database', pricing: 'Paid' },
            { name: 'LinkMiner', description: 'Find backlinks you can replicate.', url: 'https://linkminer.com/', image: 'https://picsum.photos/seed/linkminer/600/400', dataAiHint: 'replicate backlinks', pricing: 'Paid' },
            { name: 'Monitor Backlinks', description: 'The easiest way to check your backlinks.', url: 'https://monitorbacklinks.com/', image: 'https://picsum.photos/seed/monitorbacklinks/600/400', dataAiHint: 'check backlinks', pricing: 'Paid' },
            { name: 'CognitiveSEO', description: 'A complete SEO software suite.', url: 'https://cognitiveseo.com/', image: 'https://picsum.photos/seed/cognitiveseo-link/600/400', dataAiHint: 'seo software', pricing: 'Paid' },
            { name: 'Linkody', description: 'Backlink tracker for SEO professionals.', url: 'https://linkody.com/', image: 'https://picsum.photos/seed/linkody-link/600/400', dataAiHint: 'backlink tracker', pricing: 'Paid' },
        ]
    },
    {
        title: "Technical SEO Tools",
        icon: <Settings className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Screaming Frog', description: 'The industry leading SEO Spider software.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog-tech/600/400', dataAiHint: 'seo spider', pricing: 'Freemium' },
            { name: 'Sitebulb', description: 'Website crawler for SEO professionals.', url: 'https://sitebulb.com/', image: 'https://picsum.photos/seed/sitebulb-tech/600/400', dataAiHint: 'website crawler', pricing: 'Paid' },
            { name: 'DeepCrawl', description: 'Technical SEO platform for enterprise sites.', url: 'https://www.lyst.com/deepcrawl/', image: 'https://picsum.photos/seed/deepcrawl-tech/600/400', dataAiHint: 'enterprise seo', pricing: 'Paid' },
            { name: 'JetOctopus', description: 'Cloud-based SEO crawler and logs analyser.', url: 'https://jetoctopus.com/', image: 'https://picsum.photos/seed/jetoctopus/600/400', dataAiHint: 'log analyser', pricing: 'Paid' },
            { name: 'Botify', description: 'The leading enterprise SEO platform.', url: 'https://www.botify.com/', image: 'https://picsum.photos/seed/botify-tech/600/400', dataAiHint: 'enterprise seo', pricing: 'Paid' },
            { name: 'Google Search Console', description: 'Tools and reports for website search performance.', url: 'https://search.google.com/search-console/', image: 'https://picsum.photos/seed/gsc-tech/600/400', dataAiHint: 'search performance', pricing: 'Free' },
        ]
    },
    {
        title: "Local SEO Tools",
        icon: <Target className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'BrightLocal', description: 'Local SEO tools for agencies and businesses.', url: 'https://www.brightlocal.com/', image: 'https://picsum.photos/seed/brightlocal/600/400', dataAiHint: 'local marketing', pricing: 'Paid' },
            { name: 'Moz Local', description: 'Local SEO software and tools.', url: 'https://moz.com/products/local', image: 'https://picsum.photos/seed/mozlocal/600/400', dataAiHint: 'local search', pricing: 'Paid' },
            { name: 'Yext', description: 'The AI Search Company.', url: 'https://www.yext.com/', image: 'https://picsum.photos/seed/yext-local/600/400', dataAiHint: 'search company', pricing: 'Paid' },
            { name: 'Whitespark', description: 'Tools and services to help you win at local search.', url: 'https://whitespark.ca/', image: 'https://picsum.photos/seed/whitespark/600/400', dataAiHint: 'local search', pricing: 'Freemium' },
            { name: 'Synup', description: 'Digital profile and reputation management.', url: 'https://www.synup.com/', image: 'https://picsum.photos/seed/synup/600/400', dataAiHint: 'reputation management', pricing: 'Paid' },
            { name: 'Semrush Local', description: 'Suite of tools for local SEO.', url: 'https://www.semrush.com/local-seo/', image: 'https://picsum.photos/seed/semrush-local/600/400', dataAiHint: 'local suite', pricing: 'Paid' },
        ]
    },
    {
        title: "Content Marketing Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper AI', description: 'AI Content Platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-content-marketing/600/400', dataAiHint: 'ai content', pricing: 'Paid' },
            { name: 'Writesonic', description: 'Create SEO-friendly content with AI.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-content-marketing/600/400', dataAiHint: 'seo content', pricing: 'Freemium' },
            { name: 'Copy.ai', description: 'Write better marketing copy and content.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-content-marketing/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Frase', description: 'AI to research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-content-marketing/600/400', dataAiHint: 'content research', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-content/600/400', dataAiHint: 'content planning', pricing: 'Paid' },
            { name: 'WriterZen', description: 'Content workflow that simplifies your processes.', url: 'https://writerzen.net/', image: 'https://picsum.photos/seed/writerzen-content/600/400', dataAiHint: 'content workflow', pricing: 'Paid' },
            { name: 'Scalenut', description: 'AI-powered content research and writing platform.', url: 'https://www.scalenut.com/', image: 'https://picsum.photos/seed/scalenut-content/600/400', dataAiHint: 'ai writing', pricing: 'Paid' },
        ]
    },
    {
        title: "Social Media Marketing Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Buffer', description: 'The all-you-need social media toolkit.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-social/600/400', dataAiHint: 'social toolkit', pricing: 'Freemium' },
            { name: 'Hootsuite', description: 'Manage all your social media in one place.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-social/600/400', dataAiHint: 'social management', pricing: 'Paid' },
            { name: 'Sprout Social', description: 'Social media management solutions.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sproutsocial-social/600/400', dataAiHint: 'media solutions', pricing: 'Paid' },
            { name: 'SocialBee', description: 'Social media management tools, training, and teams.', url: 'https://socialbee.io/', image: 'https://picsum.photos/seed/socialbee/600/400', dataAiHint: 'media tools', pricing: 'Paid' },
            { name: 'Later', description: 'The #1 social media marketing platform.', url: 'https://later.com/', image: 'https://picsum.photos/seed/later-social/600/400', dataAiHint: 'marketing platform', pricing: 'Freemium' },
            { name: 'Metricool', description: 'Analyze, manage, and grow your digital presence.', url: 'https://metricool.com/', image: 'https://picsum.photos/seed/metricool/600/400', dataAiHint: 'digital presence', pricing: 'Freemium' },
            { name: 'Zoho Social', description: 'Social media management software for businesses.', url: 'https://www.zoho.com/social/', image: 'https://picsum.photos/seed/zoho-social/600/400', dataAiHint: 'business software', pricing: 'Freemium' },
        ]
    },
    {
        title: "Social Media Analytics Tools",
        icon: <BarChart2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Brandwatch', description: 'Digital consumer intelligence.', url: 'https://www.brandwatch.com/', image: 'https://picsum.photos/seed/brandwatch-analytics/600/400', dataAiHint: 'consumer intelligence', pricing: 'Paid' },
            { name: 'Keyhole', description: 'Hashtag tracking and social media analytics.', url: 'https://keyhole.co/', image: 'https://picsum.photos/seed/keyhole-analytics/600/400', dataAiHint: 'hashtag tracking', pricing: 'Paid' },
            { name: 'Sprout Social Analytics', description: 'Deep social media analytics.', url: 'https://sproutsocial.com/features/social-media-analytics/', image: 'https://picsum.photos/seed/sproutsocial-analytics/600/400', dataAiHint: 'deep analytics', pricing: 'Paid' },
            { name: 'Quintly', description: 'Professional social media analytics.', url: 'https://www.quintly.com/', image: 'https://picsum.photos/seed/quintly/600/400', dataAiHint: 'pro analytics', pricing: 'Paid' },
            { name: 'RivalIQ', description: 'Social media competitive analysis.', url: 'https://www.rivaliq.com/', image: 'https://picsum.photos/seed/rivaliq/600/400', dataAiHint: 'competitive analysis', pricing: 'Paid' },
            { name: 'Emplifi', description: 'Unified customer experience platform.', url: 'https://emplifi.io/', image: 'https://picsum.photos/seed/emplifi/600/400', dataAiHint: 'customer experience', pricing: 'Paid' },
        ]
    },
    {
        title: "Social Media Automation Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Publer', description: 'Social Media Superhero.', url: 'https://publer.io/', image: 'https://picsum.photos/seed/publer/600/400', dataAiHint: 'media superhero', pricing: 'Freemium' },
            { name: 'Missinglettr', description: 'Turn blog posts into social media campaigns.', url: 'https://missinglettr.com/', image: 'https://picsum.photos/seed/missinglettr-automation/600/400', dataAiHint: 'social campaigns', pricing: 'Freemium' },
            { name: 'SocialPilot', description: 'Social media marketing & scheduling tool.', url: 'https://www.socialpilot.co/', image: 'https://picsum.photos/seed/socialpilot-automation/600/400', dataAiHint: 'scheduling tool', pricing: 'Paid' },
            { name: 'Loomly', description: 'The Brand Success Platform for marketing teams.', url: 'https://www.loomly.com/', image: 'https://picsum.photos/seed/loomly-automation/600/400', dataAiHint: 'brand success', pricing: 'Paid' },
            { name: 'NapoleonCat', description: 'Social media management tool for businesses.', url: 'https://napoleoncat.com/', image: 'https://picsum.photos/seed/napoleoncat/600/400', dataAiHint: 'business tool', pricing: 'Paid' },
        ]
    },
    {
        title: "Email Marketing Tools",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Mailchimp', description: 'All-in-one marketing platform.', url: 'https://mailchimp.com/', image: 'https://picsum.photos/seed/mailchimp-email/600/400', dataAiHint: 'email automation', pricing: 'Freemium' },
            { name: 'Brevo (SendinBlue)', description: 'The smartest all-in-one marketing platform.', url: 'https://www.brevo.com/', image: 'https://picsum.photos/seed/brevo-email/600/400', dataAiHint: 'marketing platform', pricing: 'Freemium' },
            { name: 'GetResponse', description: 'Simplified tool to send emails.', url: 'https://www.getresponse.com/', image: 'https://picsum.photos/seed/getresponse-email/600/400', dataAiHint: 'email tool', pricing: 'Freemium' },
            { name: 'ConvertKit', description: 'The creator marketing platform.', url: 'https://convertkit.com/', image: 'https://picsum.photos/seed/convertkit-email/600/400', dataAiHint: 'creator platform', pricing: 'Freemium' },
            { name: 'Aweber', description: 'Email marketing for small businesses.', url: 'https://www.aweber.com/', image: 'https://picsum.photos/seed/aweber-email/600/400', dataAiHint: 'small business', pricing: 'Freemium' },
            { name: 'Sendgrid', description: 'Email delivery service.', url: 'https://sendgrid.com/', image: 'https://picsum.photos/seed/sendgrid-email/600/400', dataAiHint: 'email delivery', pricing: 'Freemium' },
            { name: 'Constant Contact', description: 'Email & digital marketing platform.', url: 'https://www.constantcontact.com/', image: 'https://picsum.photos/seed/constantcontact-email/600/400', dataAiHint: 'digital marketing', pricing: 'Paid' },
        ]
    },
    {
        title: "Cold Email Outreach Tools",
        icon: <Send className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Instantly.ai', description: 'Cold email automation with AI.', url: 'https://instantly.ai/', image: 'https://picsum.photos/seed/instantly-email/600/400', dataAiHint: 'ai cold email', pricing: 'Paid' },
            { name: 'Smartlead.ai', description: 'Unlimited scale cold email outreach.', url: 'https://smartlead.ai/', image: 'https://picsum.photos/seed/smartlead-email/600/400', dataAiHint: 'email outreach', pricing: 'Paid' },
            { name: 'Reply.io', description: 'Multichannel sales engagement platform.', url: 'https://reply.io/', image: 'https://picsum.photos/seed/replyio-email/600/400', dataAiHint: 'sales engagement', pricing: 'Paid' },
            { name: 'Mailshake', description: 'Sales engagement & automation for sending cold emails.', url: 'https://mailshake.com/', image: 'https://picsum.photos/seed/mailshake-email/600/400', dataAiHint: 'email automation', pricing: 'Paid' },
            { name: 'Apollo.io', description: 'All-in-one sales intelligence platform.', url: 'https://www.apollo.io/', image: 'https://picsum.photos/seed/apolloio-email/600/400', dataAiHint: 'sales intelligence', pricing: 'Freemium' },
            { name: 'Saleshandy', description: 'Cold email outreach software to get more replies.', url: 'https://www.saleshandy.com/', image: 'https://picsum.photos/seed/saleshandy-email/600/400', dataAiHint: 'outreach software', pricing: 'Freemium' },
        ]
    },
    {
        title: "Marketing Automation Tools",
        icon: <RefreshCw className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot', description: 'Marketing, sales, and service software.', url: 'https://www.hubspot.com/', image: 'https://picsum.photos/seed/hubspot-automation/600/400', dataAiHint: 'automation software', pricing: 'Freemium' },
            { name: 'ActiveCampaign', description: 'Customer experience automation platform.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign-automation/600/400', dataAiHint: 'customer experience', pricing: 'Paid' },
            { name: 'Marketo', description: 'Marketing automation for account-based marketing.', url: 'https://www.marketo.com/', image: 'https://picsum.photos/seed/marketo-automation/600/400', dataAiHint: 'b2b marketing', pricing: 'Paid' },
            { name: 'Autopilot', description: 'Visual marketing automation that\'s easy to use.', url: 'https://www.autopilothq.com/', image: 'https://picsum.photos/seed/autopilot-automation/600/400', dataAiHint: 'visual automation', pricing: 'Paid' },
            { name: 'Salesforce Pardot', description: 'B2B marketing automation by Salesforce.', url: 'https://www.pardot.com/', image: 'https://picsum.photos/seed/pardot-automation/600/400', dataAiHint: 'salesforce automation', pricing: 'Paid' },
            { name: 'Klaviyo', description: 'Marketing automation for eCommerce.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo-automation/600/400', dataAiHint: 'ecommerce automation', pricing: 'Freemium' },
        ]
    },
    {
        title: "PPC Advertising Tools",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Ads', description: 'Online advertising platform by Google.', url: 'https://ads.google.com/', image: 'https://picsum.photos/seed/googleads-ppc/600/400', dataAiHint: 'online advertising', pricing: 'Paid' },
            { name: 'Facebook Ads Manager', description: 'Create and manage Facebook ads.', url: 'https://www.facebook.com/business/tools/ads-manager', image: 'https://picsum.photos/seed/facebookads-ppc/600/400', dataAiHint: 'social ads', pricing: 'Paid' },
            { name: 'AdEspresso', description: 'Facebook and Instagram Ads Manager for marketers.', url: 'https://adespresso.com/', image: 'https://picsum.photos/seed/adespresso-ppc/600/400', dataAiHint: 'instagram ads', pricing: 'Paid' },
            { name: 'WordStream', description: 'Online advertising made easy.', url: 'https://www.wordstream.com/', image: 'https://picsum.photos/seed/wordstream-ppc/600/400', dataAiHint: 'easy advertising', pricing: 'Paid' },
            { name: 'Optmyzr', description: 'PPC Management Software for Agencies.', url: 'https://www.optmyzr.com/', image: 'https://picsum.photos/seed/optmyzr-ppc/600/400', dataAiHint: 'ppc management', pricing: 'Paid' },
            { name: 'Skai', description: 'Omnichannel marketing platform.', url: 'https://skai.io/', image: 'https://picsum.photos/seed/skai-ppc/600/400', dataAiHint: 'omnichannel marketing', pricing: 'Paid' },
        ]
    },
    {
        title: "Competitor Analysis Tools",
        icon: <Eye className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SEMrush', description: 'Competitor analysis tools.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-competitor/600/400', dataAiHint: 'seo competitor', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'See what your competitors are ranking for.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-competitor/600/400', dataAiHint: 'competitor ranking', pricing: 'Paid' },
            { name: 'SimilarWeb', description: 'Measure and track your digital market share.', url: 'https://www.similarweb.com/', image: 'https://picsum.photos/seed/similarweb/600/400', dataAiHint: 'market share', pricing: 'Freemium' },
            { name: 'SpyFu', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/', image: 'https://picsum.photos/seed/spyfu-competitor/600/400', dataAiHint: 'keyword research', pricing: 'Paid' },
            { name: 'BuzzSumo', description: 'Analyze what content performs best for any topic or competitor.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-competitor/600/400', dataAiHint: 'content analysis', pricing: 'Freemium' },
            { name: 'SERPstat', description: 'All-in-one SEO platform for professionals.', url: 'https://serpstat.com/', image: 'https://picsum.photos/seed/serpstat-competitor/600/400', dataAiHint: 'seo platform', pricing: 'Paid' },
        ]
    },
    {
        title: "Brand Monitoring Tools",
        icon: <ZoomIn className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://picsum.photos/seed/brand24/600/400', dataAiHint: 'media monitoring', pricing: 'Paid' },
            { name: 'Mention', description: 'Social media and web monitoring.', url: 'https://mention.com/', image: 'https://picsum.photos/seed/mention-brand/600/400', dataAiHint: 'web monitoring', pricing: 'Freemium' },
            { name: 'Awario', description: 'Social media monitoring & listening tool.', url: 'https://awario.com/', image: 'https://picsum.photos/seed/awario/600/400', dataAiHint: 'social listening', pricing: 'Paid' },
            { name: 'Talkwalker', description: 'Social listening and analytics.', url: 'https://www.talkwalker.com/', image: 'https://picsum.photos/seed/talkwalker-brand/600/400', dataAiHint: 'social analytics', pricing: 'Paid' },
            { name: 'Meltwater', description: 'Media monitoring and social listening platform.', url: 'https://www.meltwater.com/', image: 'https://picsum.photos/seed/meltwater/600/400', dataAiHint: 'listening platform', pricing: 'Paid' },
        ]
    },
    {
        title: "Reputation Management Tools",
        icon: <ThumbsUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Birdeye', description: 'All-in-one experience marketing platform.', url: 'https://birdeye.com/', image: 'https://picsum.photos/seed/birdeye/600/400', dataAiHint: 'experience marketing', pricing: 'Paid' },
            { name: 'Podium', description: 'Interaction management platform.', url: 'https://www.podium.com/', image: 'https://picsum.photos/seed/podium-reputation/600/400', dataAiHint: 'interaction management', pricing: 'Paid' },
            { name: 'Reputation.com', description: 'Reputation experience management.', url: 'https://www.reputation.com/', image: 'https://picsum.photos/seed/reputationcom/600/400', dataAiHint: 'experience management', pricing: 'Paid' },
            { name: 'ReviewTrackers', description: 'Customer review software.', url: 'https://www.reviewtrackers.com/', image: 'https://picsum.photos/seed/reviewtrackers/600/400', dataAiHint: 'review software', pricing: 'Paid' },
            { name: 'Grade.us', description: 'Review management and marketing platform.', url: 'https://www.grade.us/', image: 'https://picsum.photos/seed/gradeus/600/400', dataAiHint: 'marketing platform', pricing: 'Paid' },
        ]
    },
    {
        title: "Conversion Rate Optimization (CRO) Tools",
        icon: <CheckSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Optimize', description: 'A/B testing and personalization tool from Google.', url: 'https://marketingplatform.google.com/about/optimize/', image: 'https://picsum.photos/seed/googleoptimize-cro/600/400', dataAiHint: 'ab testing', pricing: 'Free' },
            { name: 'VWO', description: 'A/B testing and conversion optimization platform.', url: 'https://vwo.com/', image: 'https://picsum.photos/seed/vwo-cro/600/400', dataAiHint: 'conversion platform', pricing: 'Paid' },
            { name: 'Unbounce', description: 'Build, test, and optimize landing pages.', url: 'https://unbounce.com/', image: 'https://picsum.photos/seed/unbounce-cro/600/400', dataAiHint: 'landing pages', pricing: 'Paid' },
            { name: 'Optimizely', description: 'The world\'s leading experimentation platform.', url: 'https://www.optimizely.com/', image: 'https://picsum.photos/seed/optimizely-cro/600/400', dataAiHint: 'experimentation platform', pricing: 'Paid' },
            { name: 'ConvertBox', description: 'On-site engagement platform for lead generation.', url: 'https://convertbox.com/', image: 'https://picsum.photos/seed/convertbox/600/400', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Hotjar', description: 'Understand how users behave on your site.', url: 'https://www.hotjar.com/', image: 'https://picsum.photos/seed/hotjar-cro/600/400', dataAiHint: 'user behavior', pricing: 'Freemium' },
        ]
    },
    {
        title: "Heatmap & Behavior Tools",
        icon: <Palette className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Hotjar', description: 'See how users behave on your site.', url: 'https://www.hotjar.com/', image: 'https://picsum.photos/seed/hotjar-heatmap/600/400', dataAiHint: 'behavior analytics', pricing: 'Freemium' },
            { name: 'CrazyEgg', description: 'Website optimization and heatmaps.', url: 'https://www.crazyegg.com/', image: 'https://picsum.photos/seed/crazyegg-heatmap/600/400', dataAiHint: 'website heatmaps', pricing: 'Paid' },
            { name: 'Microsoft Clarity', description: 'Free user behavior analytics tool.', url: 'https://clarity.microsoft.com/', image: 'https://picsum.photos/seed/clarity-heatmap/600/400', dataAiHint: 'behavior analytics', pricing: 'Free' },
            { name: 'Mouseflow', description: 'Behavior analytics: heatmaps, session replay, funnels.', url: 'https://mouseflow.com/', image: 'https://picsum.photos/seed/mouseflow-heatmap/600/400', dataAiHint: 'session replay', pricing: 'Freemium' },
            { name: 'Lucky Orange', description: 'Improve your website\'s conversion rate.', url: 'https://www.luckyorange.com/', image: 'https://picsum.photos/seed/luckyorange/600/400', dataAiHint: 'conversion rate', pricing: 'Paid' },
        ]
    },
    {
        title: "Funnel Building Tools",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ClickFunnels', description: 'Sales funnel builder for entrepreneurs.', url: 'https://www.clickfunnels.com/', image: 'https://picsum.photos/seed/clickfunnels-funnel/600/400', dataAiHint: 'sales funnel', pricing: 'Paid' },
            { name: 'Systeme.io', description: 'All-in-one marketing platform to launch your online business.', url: 'https://systeme.io/', image: 'https://picsum.photos/seed/systemeio-funnel/600/400', dataAiHint: 'online business', pricing: 'Freemium' },
            { name: 'GrooveFunnels', description: 'Sales funnel builder platform.', url: 'https://groove.cm/', image: 'https://picsum.photos/seed/groovefunnels/600/400', dataAiHint: 'funnel platform', pricing: 'Freemium' },
            { name: 'Kartra', description: 'All-in-one marketing platform to sell online.', url: 'https://home.kartra.com/', image: 'https://picsum.photos/seed/kartra-funnel/600/400', dataAiHint: 'sell online', pricing: 'Paid' },
            { name: 'Leadpages', description: 'Website & landing page builder.', url: 'https://www.leadpages.com/', image: 'https://picsum.photos/seed/leadpages-funnel/600/400', dataAiHint: 'page builder', pricing: 'Paid' },
        ]
    },
    {
        title: "Analytics Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Analytics', description: 'Web analytics service by Google.', url: 'https://analytics.google.com/', image: 'https://picsum.photos/seed/googleanalytics-analytics/600/400', dataAiHint: 'web analytics', pricing: 'Free' },
            { name: 'Mixpanel', description: 'Product analytics for converting, engaging, and retaining users.', url: 'https://mixpanel.com/', image: 'https://picsum.photos/seed/mixpanel-analytics/600/400', dataAiHint: 'product analytics', pricing: 'Freemium' },
            { name: 'Amplitude', description: 'Digital Optimization System.', url: 'https://amplitude.com/', image: 'https://picsum.photos/seed/amplitude-analytics/600/400', dataAiHint: 'digital optimization', pricing: 'Freemium' },
            { name: 'Heap Analytics', description: 'Digital insights for everyone.', url: 'https://heap.io/', image: 'https://picsum.photos/seed/heap-analytics/600/400', dataAiHint: 'digital insights', pricing: 'Freemium' },
            { name: 'Plausible', description: 'Simple and privacy-friendly Google Analytics alternative.', url: 'https://plausible.io/', image: 'https://picsum.photos/seed/plausible-analytics/600/400', dataAiHint: 'privacy friendly', pricing: 'Paid' },
            { name: 'Matomo', description: 'Google Analytics alternative that protects your data.', url: 'https://matomo.org/', image: 'https://picsum.photos/seed/matomo-analytics/600/400', dataAiHint: 'data protection', pricing: 'Freemium' },
        ]
    },
    {
        title: "Marketing Dashboard Tools",
        icon: <LayoutDashboard className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Databox', description: 'Business analytics platform to track performance.', url: 'https://databox.com/', image: 'https://picsum.photos/seed/databox-dashboard/600/400', dataAiHint: 'kpi dashboard', pricing: 'Freemium' },
            { name: 'Whatagraph', description: 'Automated marketing reports.', url: 'https://whatagraph.com/', image: 'https://picsum.photos/seed/whatagraph/600/400', dataAiHint: 'marketing reports', pricing: 'Paid' },
            { name: 'DashThis', description: 'Marketing dashboard tool for agencies.', url: 'https://dashthis.com/', image: 'https://picsum.photos/seed/dashthis/600/400', dataAiHint: 'agency dashboard', pricing: 'Paid' },
            { name: 'Klipfolio', description: 'Business dashboards for your team.', url: 'https://www.klipfolio.com/', image: 'https://picsum.photos/seed/klipfolio-dashboard/600/400', dataAiHint: 'team dashboards', pricing: 'Paid' },
        ]
    },
    {
        title: "Influencer Marketing Tools",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AspireIQ', description: 'Influencer marketing platform.', url: 'https://www.aspire.io/', image: 'https://picsum.photos/seed/aspireiq/600/400', dataAiHint: 'influencer platform', pricing: 'Paid' },
            { name: 'Upfluence', description: 'All-in-one influencer marketing platform.', url: 'https://www.upfluence.com/', image: 'https://picsum.photos/seed/upfluence-influencer/600/400', dataAiHint: 'influencer software', pricing: 'Paid' },
            { name: 'Heepsy', description: 'Find influencers for your campaigns.', url: 'https://www.heepsy.com/', image: 'https://picsum.photos/seed/heepsy/600/400', dataAiHint: 'influencer search', pricing: 'Freemium' },
            { name: 'CreatorIQ', description: 'Enterprise creator cloud.', url: 'https://creatoriq.com/', image: 'https://picsum.photos/seed/creatoriq/600/400', dataAiHint: 'creator cloud', pricing: 'Paid' },
            { name: 'Grin', description: 'The #1 creator management platform.', url: 'https://grin.co/', image: 'https://picsum.photos/seed/grin-influencer/600/400', dataAiHint: 'creator management', pricing: 'Paid' },
            { name: 'Influence.co', description: 'The professional network for influencers.', url: 'https://influence.co/', image: 'https://picsum.photos/seed/influenceco/600/400', dataAiHint: 'influencer network', pricing: 'Freemium' },
        ]
    },
    {
        title: "Affiliate Marketing Tools",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tapfiliate', description: 'Affiliate tracking software.', url: 'https://tapfiliate.com/', image: 'https://picsum.photos/seed/tapfiliate/600/400', dataAiHint: 'affiliate tracking', pricing: 'Paid' },
            { name: 'Post Affiliate Pro', description: 'Affiliate software for your business.', url: 'https://www.postaffiliatepro.com/', image: 'https://picsum.photos/seed/postaffiliatepro/600/400', dataAiHint: 'affiliate software', pricing: 'Paid' },
            { name: 'Refersion', description: 'Affiliate marketing and tracking software.', url: 'https://www.refersion.com/', image: 'https://picsum.photos/seed/refersion/600/400', dataAiHint: 'marketing software', pricing: 'Paid' },
            { name: 'Impact.com', description: 'Partnership management platform.', url: 'https://impact.com/', image: 'https://picsum.photos/seed/impactcom/600/400', dataAiHint: 'partnership platform', pricing: 'Paid' },
            { name: 'PartnerStack', description: 'The #1 platform for B2B SaaS partnerships.', url: 'https://partnerstack.com/', image: 'https://picsum.photos/seed/partnerstack/600/400', dataAiHint: 'saas partnerships', pricing: 'Paid' },
        ]
    },
    {
        title: "Video Marketing Tools",
        icon: <Film className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'VidIQ', description: 'Helps you get more views on YouTube.', url: 'https://vidiq.com/', image: 'https://picsum.photos/seed/vidiq-video/600/400', dataAiHint: 'youtube views', pricing: 'Freemium' },
            { name: 'TubeBuddy', description: 'The premier YouTube channel management toolkit.', url: 'https://www.tubebuddy.com/', image: 'https://picsum.photos/seed/tubebuddy/600/400', dataAiHint: 'youtube toolkit', pricing: 'Freemium' },
            { name: 'InVideo', description: 'Online video editor.', url: 'https://invideo.io/', image: 'https://picsum.photos/seed/invideo-marketing/600/400', dataAiHint: 'video editor', pricing: 'Freemium' },
            { name: 'Pictory AI', description: 'AI video generator.', url: 'https://pictory.ai/', image: 'https://picsum.photos/seed/pictory-marketing/600/400', dataAiHint: 'ai video', pricing: 'Paid' },
            { name: 'Lumen5', description: 'Video creation platform for brands and businesses.', url: 'https://lumen5.com/', image: 'https://picsum.photos/seed/lumen5-marketing/600/400', dataAiHint: 'video platform', pricing: 'Freemium' },
            { name: 'VEED.io', description: 'Online video suite for professionals.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veedio-marketing/600/400', dataAiHint: 'video suite', pricing: 'Freemium' },
        ]
    },
    {
        title: "Ad Copywriting Tools",
        icon: <MonitorPlay className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Anyword', description: 'AI that generates and optimizes your copy.', url: 'https://anyword.com/', image: 'https://picsum.photos/seed/anyword-ad-copy/600/400', dataAiHint: 'optimize copy', pricing: 'Paid' },
            { name: 'Jasper Ads', description: 'Generate high-converting ad copy.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-ad-copy/600/400', dataAiHint: 'ad copy', pricing: 'Paid' },
            { name: 'Copy.ai Ads', description: 'Write better ad copy with AI.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-ad-copy/600/400', dataAiHint: 'ai ads', pricing: 'Freemium' },
            { name: 'Pencil AI', description: 'Generative AI for ads that learn.', url: 'https://www.trypencil.com/', image: 'https://picsum.photos/seed/pencil-ad-copy/600/400', dataAiHint: 'generative ai', pricing: 'Paid' },
            { name: 'Adcreative.ai', description: 'Generate conversion-focused ad creatives.', url: 'https://www.adcreative.ai/', image: 'https://picsum.photos/seed/adcreative-ad-copy/600/400', dataAiHint: 'ad creatives', pricing: 'Paid' },
            { name: 'Smartly.io AI Copy', description: 'Creative and media automation for advertisers.', url: 'https://www.smartly.io/', image: 'https://picsum.photos/seed/smartlyio-ad/600/400', dataAiHint: 'ad automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Landing Page Builder Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Unbounce', description: 'Smart landing page builder.', url: 'https://unbounce.com/', image: 'https://picsum.photos/seed/unbounce-builder/600/400', dataAiHint: 'page builder', pricing: 'Paid' },
            { name: 'Leadpages', description: 'Website & landing page builder.', url: 'https://www.leadpages.com/', image: 'https://picsum.photos/seed/leadpages-builder/600/400', dataAiHint: 'website builder', pricing: 'Paid' },
            { name: 'Instapage', description: 'Landing page platform for advertisers.', url: 'https://instapage.com/', image: 'https://picsum.photos/seed/instapage-builder/600/400', dataAiHint: 'advertiser platform', pricing: 'Paid' },
            { name: 'Carrd', description: 'Simple, free, fully responsive one-page sites.', url: 'https://carrd.co/', image: 'https://picsum.photos/seed/carrd-builder/600/400', dataAiHint: 'one-page sites', pricing: 'Freemium' },
            { name: 'SwipePages', description: 'Fast landing page builder for ROI.', url: 'https://swipepages.com/', image: 'https://picsum.photos/seed/swipepages/600/400', dataAiHint: 'fast builder', pricing: 'Paid' },
            { name: 'ClickFunnels Pages', description: 'Sales funnel and landing page builder.', url: 'https://www.clickfunnels.com/', image: 'https://picsum.photos/seed/clickfunnels-builder/600/400', dataAiHint: 'sales funnel', pricing: 'Paid' },
        ]
    },
    {
        title: "A/B Testing Tools",
        icon: <TestTube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Optimizely', description: 'The world\'s leading experimentation platform.', url: 'https://www.optimizely.com/', image: 'https://picsum.photos/seed/optimizely-testing/600/400', dataAiHint: 'experimentation', pricing: 'Paid' },
            { name: 'VWO', description: 'A/B testing and conversion optimization platform.', url: 'https://vwo.com/', image: 'https://picsum.photos/seed/vwo-testing/600/400', dataAiHint: 'conversion platform', pricing: 'Paid' },
            { name: 'Google Optimize', description: 'A/B testing tool from Google.', url: 'https://marketingplatform.google.com/about/optimize/', image: 'https://picsum.photos/seed/googleoptimize-testing/600/400', dataAiHint: 'google testing', pricing: 'Free' },
            { name: 'Convert.com', description: 'A/B testing software for agencies and enterprises.', url: 'https://www.convert.com/', image: 'https://picsum.photos/seed/convertcom/600/400', dataAiHint: 'agency software', pricing: 'Paid' },
            { name: 'Omniconvert', description: 'CRO platform with A/B testing, personalization, and surveys.', url: 'https://www.omniconvert.com/', image: 'https://picsum.photos/seed/omniconvert/600/400', dataAiHint: 'cro platform', pricing: 'Paid' },
        ]
    },
    {
        title: "Customer Support Marketing Tools",
        icon: <HelpCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Intercom', description: 'Customer messaging platform.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-support/600/400', dataAiHint: 'messaging platform', pricing: 'Paid' },
            { name: 'Drift', description: 'Revenue acceleration platform.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-support/600/400', dataAiHint: 'revenue platform', pricing: 'Paid' },
            { name: 'Crisp', description: 'All-in-one multichannel customer support platform.', url: 'https://crisp.chat/', image: 'https://picsum.photos/seed/crisp-support/600/400', dataAiHint: 'multichannel support', pricing: 'Freemium' },
            { name: 'Freshchat', description: 'Modern messaging software.', url: 'https://www.freshworks.com/live-chat-software/', image: 'https://picsum.photos/seed/freshchat/600/400', dataAiHint: 'messaging software', pricing: 'Freemium' },
            { name: 'Tawk.to', description: 'Free live chat software.', url: 'https://www.tawk.to/', image: 'https://picsum.photos/seed/tawkto/600/400', dataAiHint: 'live chat', pricing: 'Free' },
        ]
    },
    {
        title: "Chatbot & AI Marketing Tools",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ManyChat', description: 'Chat marketing platform.', url: 'https://manychat.com/', image: 'https://picsum.photos/seed/manychat/600/400', dataAiHint: 'chat marketing', pricing: 'Freemium' },
            { name: 'Chatfuel', description: 'No-code chatbot platform for Facebook, Instagram, and Messenger.', url: 'https://chatfuel.com/', image: 'https://picsum.photos/seed/chatfuel/600/400', dataAiHint: 'no-code chatbot', pricing: 'Freemium' },
            { name: 'Botpress', description: 'Open-source conversational AI platform.', url: 'https://botpress.com/', image: 'https://picsum.photos/seed/botpress-ai/600/400', dataAiHint: 'conversational ai', pricing: 'Freemium' },
            { name: 'Tidio AI', description: 'AI-powered live chat and chatbots.', url: 'https://www.tidio.com/', image: 'https://picsum.photos/seed/tidio-ai/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Landbot', description: 'No-code chatbot builder.', url: 'https://landbot.io/', image: 'https://picsum.photos/seed/landbot-ai/600/400', dataAiHint: 'chatbot builder', pricing: 'Freemium' },
        ]
    },
    {
        title: "Lead Generation Tools",
        icon: <UserPlus className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Hunter.io', description: 'Find professional email addresses.', url: 'https://hunter.io/', image: 'https://picsum.photos/seed/hunterio-lead/600/400', dataAiHint: 'email finder', pricing: 'Freemium' },
            { name: 'Apollo.io', description: 'All-in-one sales intelligence platform.', url: 'https://www.apollo.io/', image: 'https://picsum.photos/seed/apolloio-lead/600/400', dataAiHint: 'sales intelligence', pricing: 'Freemium' },
            { name: 'Snov.io', description: 'All-in-one cold outreach automation platform.', url: 'https://snov.io/', image: 'https://picsum.photos/seed/snovio-lead/600/400', dataAiHint: 'outreach automation', pricing: 'Freemium' },
            { name: 'Lusha', description: 'The easiest way to find B2B contact information.', url: 'https://www.lusha.com/', image: 'https://picsum.photos/seed/lusha-lead/600/400', dataAiHint: 'b2b contacts', pricing: 'Freemium' },
            { name: 'Clearbit', description: 'Marketing data engine for all of your customer interactions.', url: 'https://clearbit.com/', image: 'https://picsum.photos/seed/clearbit-lead/600/400', dataAiHint: 'data engine', pricing: 'Paid' },
            { name: 'Leadfeeder', description: 'Identify companies visiting your website.', url: 'https://www.leadfeeder.com/', image: 'https://picsum.photos/seed/leadfeeder/600/400', dataAiHint: 'website visitors', pricing: 'Paid' },
        ]
    },
    {
        title: "CRM Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'HubSpot CRM', description: 'Free CRM software.', url: 'https://www.hubspot.com/products/crm', image: 'https://picsum.photos/seed/hubspot-crm/600/400', dataAiHint: 'free crm', pricing: 'Freemium' },
            { name: 'Zoho CRM', description: 'An award-winning CRM to attract, retain, and delight customers.', url: 'https://www.zoho.com/crm/', image: 'https://picsum.photos/seed/zoho-crm/600/400', dataAiHint: 'customer crm', pricing: 'Freemium' },
            { name: 'Salesforce', description: 'The world\'s #1 CRM platform.', url: 'https://www.salesforce.com/', image: 'https://picsum.photos/seed/salesforce-crm/600/400', dataAiHint: 'crm platform', pricing: 'Paid' },
            { name: 'Pipedrive', description: 'The first CRM platform made for salespeople.', url: 'https://www.pipedrive.com/', image: 'https://picsum.photos/seed/pipedrive-crm/600/400', dataAiHint: 'sales crm', pricing: 'Paid' },
            { name: 'Freshsales', description: 'Sales CRM software.', url: 'https://www.freshworks.com/crm/', image: 'https://picsum.photos/seed/freshsales/600/400', dataAiHint: 'sales software', pricing: 'Freemium' },
        ]
    },
    {
        title: "Survey & Feedback Tools",
        icon: <MessageCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Typeform', description: 'Create forms, surveys, and quizzes that people enjoy answering.', url: 'https://www.typeform.com/', image: 'https://picsum.photos/seed/typeform-survey/600/400', dataAiHint: 'interactive forms', pricing: 'Freemium' },
            { name: 'SurveyMonkey', description: 'A global leader in survey software.', url: 'https://www.surveymonkey.com/', image: 'https://picsum.photos/seed/surveymonkey/600/400', dataAiHint: 'survey software', pricing: 'Freemium' },
            { name: 'Google Forms', description: 'Create custom forms for surveys and questionnaires.', url: 'https://www.google.com/forms/about/', image: 'https://picsum.photos/seed/googleforms/600/400', dataAiHint: 'custom forms', pricing: 'Free' },
            { name: 'Jotform', description: 'Free online form builder.', url: 'https://www.jotform.com/', image: 'https://picsum.photos/seed/jotform/600/400', dataAiHint: 'form builder', pricing: 'Freemium' },
            { name: 'Qualtrics', description: 'Experience management platform.', url: 'https://www.qualtrics.com/', image: 'https://picsum.photos/seed/qualtrics/600/400', dataAiHint: 'experience management', pricing: 'Paid' },
        ]
    },
    {
        title: "Website SEO Audit Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Screaming Frog', description: 'The industry leading SEO Spider software.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog-audit/600/400', dataAiHint: 'seo spider', pricing: 'Freemium' },
            { name: 'Sitebulb', description: 'Website crawler for SEO professionals.', url: 'https://sitebulb.com/', image: 'https://picsum.photos/seed/sitebulb-audit/600/400', dataAiHint: 'website crawler', pricing: 'Paid' },
            { name: 'SE Ranking Audit', description: 'In-depth website audit to find and fix issues.', url: 'https://seranking.com/website-audit.html', image: 'https://picsum.photos/seed/seranking-audit/600/400', dataAiHint: 'website audit', pricing: 'Paid' },
            { name: 'Semrush Audit', description: 'Comprehensive site audit tool.', url: 'https://www.semrush.com/features/site-audit/', image: 'https://picsum.photos/seed/semrush-audit/600/400', dataAiHint: 'site audit', pricing: 'Paid' },
            { name: 'Ahrefs Site Audit', description: 'Find and fix technical and on-page SEO issues.', url: 'https://ahrefs.com/site-audit', image: 'https://picsum.photos/seed/ahrefs-audit/600/400', dataAiHint: 'on-page seo', pricing: 'Paid' },
        ]
    },
    {
        title: "SERP Tracking Tools",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'AccuRanker', description: 'The world\'s fastest rank tracker.', url: 'https://www.accuranker.com/', image: 'https://picsum.photos/seed/accuranker/600/400', dataAiHint: 'rank tracker', pricing: 'Paid' },
            { name: 'SERPWatcher', description: 'SERP tracking tool by Mangools.', url: 'https://serpwatcher.com/', image: 'https://picsum.photos/seed/serpwatcher/600/400', dataAiHint: 'serp tool', pricing: 'Paid' },
            { name: 'ProRankTracker', description: 'The most accurate SERP tracker.', url: 'https://proranktracker.com/', image: 'https://picsum.photos/seed/proranktracker/600/400', dataAiHint: 'serp tracker', pricing: 'Paid' },
            { name: 'AWR Cloud', description: 'Advanced Web Ranking.', url: 'https://www.awrcloud.com/', image: 'https://picsum.photos/seed/awrcloud/600/400', dataAiHint: 'web ranking', pricing: 'Paid' },
            { name: 'Zutrix', description: 'AI-powered SERP tracker.', url: 'https://zutrix.com/', image: 'https://picsum.photos/seed/zutrix/600/400', dataAiHint: 'ai serp', pricing: 'Freemium' },
        ]
    },
    {
        title: "Schema Markup Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Schema Pro', description: 'The best WordPress schema markup plugin.', url: 'https://wpschema.com/', image: 'https://picsum.photos/seed/schemapro/600/400', dataAiHint: 'wordpress schema', pricing: 'Paid' },
            { name: 'TechnicalSEO.com Schema Generator', description: 'Free schema markup generator.', url: 'https://technicalseo.com/tools/schema-markup-generator/', image: 'https://picsum.photos/seed/technicalseo-schema/600/400', dataAiHint: 'schema generator', pricing: 'Free' },
            { name: 'RankMath Schema', description: 'Advanced schema generator for WordPress.', url: 'https://rankmath.com/features/schema/', image: 'https://picsum.photos/seed/rankmath-schema/600/400', dataAiHint: 'advanced schema', pricing: 'Freemium' },
            { name: 'Merkle Schema Tool', description: 'Schema markup generator.', url: 'https://www.merkle.com/en/services/technical-seo', image: 'https://picsum.photos/seed/merkle-schema/600/400', dataAiHint: 'markup generator', pricing: 'Free' },
        ]
    },
    {
        title: "Image SEO Tools",
        icon: <ImageIcon className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'TinyPNG', description: 'Smart PNG and JPEG compression.', url: 'https://tinypng.com/', image: 'https://picsum.photos/seed/tinypng/600/400', dataAiHint: 'image compression', pricing: 'Freemium' },
            { name: 'ShortPixel', description: 'Image optimizer for WordPress.', url: 'https://shortpixel.com/', image: 'https://picsum.photos/seed/shortpixel/600/400', dataAiHint: 'image optimizer', pricing: 'Freemium' },
            { name: 'Imagify', description: 'Speed up your website with lighter images.', url: 'https://imagify.io/', image: 'https://picsum.photos/seed/imagify/600/400', dataAiHint: 'lighter images', pricing: 'Freemium' },
            { name: 'Kraken.io', description: 'Image optimizer and compressor.', url: 'https://kraken.io/', image: 'https://picsum.photos/seed/krakenio/600/400', dataAiHint: 'image compressor', pricing: 'Paid' },
            { name: 'Cloudinary', description: 'Image and video management.', url: 'https://cloudinary.com/', image: 'https://picsum.photos/seed/cloudinary-seo/600/400', dataAiHint: 'video management', pricing: 'Freemium' },
        ]
    },
    {
        title: "Speed Optimization Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GTmetrix', description: 'See how your site performs, and get recommendations.', url: 'https://gtmetrix.com/', image: 'https://picsum.photos/seed/gtmetrix/600/400', dataAiHint: 'site performance', pricing: 'Freemium' },
            { name: 'Google PageSpeed Insights', description: 'Make your web pages fast on all devices.', url: 'https://pagespeed.web.dev/', image: 'https://picsum.photos/seed/pagespeed/600/400', dataAiHint: 'web pages', pricing: 'Free' },
            { name: 'Pingdom Tools', description: 'Website speed test.', url: 'https://tools.pingdom.com/', image: 'https://picsum.photos/seed/pingdom/600/400', dataAiHint: 'speed test', pricing: 'Free' },
            { name: 'WebPageTest', description: 'Website performance and optimization test.', url: 'https://www.webpagetest.org/', image: 'https://picsum.photos/seed/webpagetest/600/400', dataAiHint: 'performance test', pricing: 'Free' },
            { name: 'NitroPack', description: 'The leading all-in-one site speed solution.', url: 'https://nitropack.io/', image: 'https://picsum.photos/seed/nitropack/600/400', dataAiHint: 'speed solution', pricing: 'Paid' },
        ]
    },
    {
        title: "E-commerce Marketing Tools",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Shopify Marketing', description: 'Marketing tools for your Shopify store.', url: 'https://www.shopify.com/marketing', image: 'https://picsum.photos/seed/shopify-marketing/600/400', dataAiHint: 'shopify store', pricing: 'Paid' },
            { name: 'Klaviyo', description: 'Email marketing and SMS for eCommerce.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo-ecommerce/600/400', dataAiHint: 'ecommerce sms', pricing: 'Freemium' },
            { name: 'Omnisend', description: 'Email & SMS marketing automation for eCommerce.', url: 'https://www.omnisend.com/', image: 'https://picsum.photos/seed/omnisend-ecommerce/600/400', dataAiHint: 'sms marketing', pricing: 'Freemium' },
            { name: 'Yotpo', description: 'eCommerce marketing platform.', url: 'https://www.yotpo.com/', image: 'https://picsum.photos/seed/yotpo/600/400', dataAiHint: 'marketing platform', pricing: 'Paid' },
            { name: 'Privy', description: 'Email marketing & SMS for eCommerce.', url: 'https://www.privy.com/', image: 'https://picsum.photos/seed/privy/600/400', dataAiHint: 'email sms', pricing: 'Freemium' },
            { name: 'Mailchimp for Ecommerce', description: 'Email and marketing automation for online stores.', url: 'https://mailchimp.com/ecommerce/', image: 'https://picsum.photos/seed/mailchimp-ecommerce/600/400', dataAiHint: 'online stores', pricing: 'Freemium' },
        ]
    }
];

export default function MarketingSeoToolsPage() {
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
                    <TrendingUp className="w-6 h-6 text-foreground" />
                    <h1 className="text-2xl font-bold text-foreground">
                        Marketing & SEO
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

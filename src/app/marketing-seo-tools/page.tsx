
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
    Send, LayoutDashboard, ImageIcon, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUserPreferences } from '@/context/user-preferences-context';

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
            { name: 'Brevo (SendinBlue)', description: 'All-in-one marketing platform.', url: 'https://www.brevo.com/', image: 'https://picsum.photos/seed/sendinblue-digital/600/400', dataAiHint: 'marketing platform', pricing: 'Freemium' },
            { name: 'Zoho Campaigns', description: 'Email and social media marketing software.', url: 'https://www.zoho.com/campaigns/', image: 'https://picsum.photos/seed/zoho-campaigns/600/400', dataAiHint: 'social marketing', pricing: 'Freemium' },
            { name: 'Salesforce Marketing Cloud', description: 'Digital marketing automation and analytics software.', url: 'https://www.salesforce.com/products/marketing-cloud/overview/', image: 'https://picsum.photos/seed/sfmc-digital/600/400', dataAiHint: 'marketing cloud', pricing: 'Paid' },
            { name: 'Adobe Marketing Cloud', description: 'A complete set of marketing solutions.', url: 'https://business.adobe.com/products/marketing-cloud/adobe-marketing-cloud.html', image: 'https://picsum.photos/seed/adobe-mktg/600/400', dataAiHint: 'adobe suite', pricing: 'Paid' },
            { name: 'Pardot', description: 'B2B marketing automation by Salesforce.', url: 'https://www.pardot.com/', image: 'https://picsum.photos/seed/pardot-digital/600/400', dataAiHint: 'b2b automation', pricing: 'Paid' },
            { name: 'Klaviyo', description: 'Email marketing and SMS for eCommerce.', url: 'https://www.klaviyo.com/', image: 'https://picsum.photos/seed/klaviyo-digital/600/400', dataAiHint: 'ecommerce marketing', pricing: 'Freemium' },
            { name: 'AWeber', description: 'Email marketing for small businesses.', url: 'https://www.aweber.com/', image: 'https://picsum.photos/seed/aweber-digital/600/400', dataAiHint: 'small business email', pricing: 'Freemium' },
            { name: 'Constant Contact', description: 'Email & digital marketing platform.', url: 'https://www.constantcontact.com/', image: 'https://picsum.photos/seed/constantcontact-digital/600/400', dataAiHint: 'digital platform', pricing: 'Paid' },
            { name: 'Drift', description: 'Revenue acceleration platform.', url: 'https://www.drift.com/', image: 'https://picsum.photos/seed/drift-digital/600/400', dataAiHint: 'conversational marketing', pricing: 'Paid' },
            { name: 'Intercom', description: 'Customer messaging platform.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-digital/600/400', dataAiHint: 'customer support', pricing: 'Paid' },
            { name: 'Google Ads', description: 'Online advertising platform.', url: 'https://ads.google.com/', image: 'https://picsum.photos/seed/googleads-digital/600/400', dataAiHint: 'ppc advertising', pricing: 'Paid' },
            { name: 'Facebook Ads Manager', description: 'Create and manage Facebook ads.', url: 'https://www.facebook.com/business/tools/ads-manager', image: 'https://picsum.photos/seed/fbads-digital/600/400', dataAiHint: 'social media ads', pricing: 'Paid' },
            { name: 'LinkedIn Marketing Solutions', description: 'Reach a professional audience.', url: 'https://business.linkedin.com/marketing-solutions', image: 'https://picsum.photos/seed/linkedin-mktg/600/400', dataAiHint: 'b2b advertising', pricing: 'Paid' },
            { name: 'Twitter Ads', description: 'Promote your brand on Twitter.', url: 'https://ads.twitter.com/', image: 'https://picsum.photos/seed/twitterads/600/400', dataAiHint: 'twitter marketing', pricing: 'Paid' },
            { name: 'Pinterest Ads', description: 'Reach people looking for inspiration.', url: 'https://ads.pinterest.com/', image: 'https://picsum.photos/seed/pinterestads/600/400', dataAiHint: 'visual discovery', pricing: 'Paid' },
            { name: 'SEMrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-digital/600/400', dataAiHint: 'seo tools', pricing: 'Paid' },
            { name: 'Ahrefs', description: 'All-in-one SEO toolset.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-digital/600/400', dataAiHint: 'backlink analysis', pricing: 'Paid' },
            { name: 'Moz Pro', description: 'SEO software and data.', url: 'https://moz.com/products/pro', image: 'https://picsum.photos/seed/mozpro-digital/600/400', dataAiHint: 'search engine', pricing: 'Paid' },
            { name: 'BuzzSumo', description: 'Find the most shared content.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-digital/600/400', dataAiHint: 'content marketing', pricing: 'Freemium' },
            { name: 'Canva', description: 'Design anything.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-digital/600/400', dataAiHint: 'graphic design', pricing: 'Freemium' },
            { name: 'Buffer', description: 'Social media management platform.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-digital/600/400', dataAiHint: 'social scheduling', pricing: 'Freemium' },
            { name: 'Hootsuite', description: 'Manage all your social media.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite-digital/600/400', dataAiHint: 'social media tool', pricing: 'Paid' },
            { name: 'Sprout Social', description: 'Social media management solutions.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sproutsocial-digital/600/400', dataAiHint: 'social analytics', pricing: 'Paid' },
            { name: 'Optimizely', description: 'The world\'s leading experimentation platform.', url: 'https://www.optimizely.com/', image: 'https://picsum.photos/seed/optimizely-digital/600/400', dataAiHint: 'a/b testing', pricing: 'Paid' },
            { name: 'VWO', description: 'A/B testing and conversion optimization platform.', url: 'https://vwo.com/', image: 'https://picsum.photos/seed/vwo-digital/600/400', dataAiHint: 'cro platform', pricing: 'Paid' },
            { name: 'Hotjar', description: 'Understand how users behave on your site.', url: 'https://www.hotjar.com/', image: 'https://picsum.photos/seed/hotjar-digital/600/400', dataAiHint: 'heatmaps', pricing: 'Freemium' },
            { name: 'Crazy Egg', description: 'Website optimization and heatmaps.', url: 'https://www.crazyegg.com/', image: 'https://picsum.photos/seed/crazyegg-digital/600/400', dataAiHint: 'user behavior', pricing: 'Paid' },
            { name: 'Unbounce', description: 'Build, test, and optimize landing pages.', url: 'https://unbounce.com/', image: 'https://picsum.photos/seed/unbounce-digital/600/400', dataAiHint: 'landing page builder', pricing: 'Paid' },
            { name: 'Leadpages', description: 'Website & landing page builder.', url: 'https://www.leadpages.com/', image: 'https://picsum.photos/seed/leadpages-digital/600/400', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Instapage', description: 'Landing page platform for advertisers.', url: 'https://instapage.com/', image: 'https://picsum.photos/seed/instapage-digital/600/400', dataAiHint: 'ad landing pages', pricing: 'Paid' },
            { name: 'ClickFunnels', description: 'Sales funnel builder.', url: 'https://www.clickfunnels.com/', image: 'https://picsum.photos/seed/clickfunnels-digital/600/400', dataAiHint: 'sales funnels', pricing: 'Paid' },
            { name: 'Typeform', description: 'Create forms, surveys, and quizzes.', url: 'https://www.typeform.com/', image: 'https://picsum.photos/seed/typeform-digital/600/400', dataAiHint: 'online forms', pricing: 'Freemium' },
            { name: 'SurveyMonkey', description: 'Survey software.', url: 'https://www.surveymonkey.com/', image: 'https://picsum.photos/seed/surveymonkey-digital/600/400', dataAiHint: 'online surveys', pricing: 'Freemium' },
            { name: 'Trello', description: 'Collaborate, manage projects, and reach new productivity peaks.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-digital/600/400', dataAiHint: 'project management', pricing: 'Freemium' },
            { name: 'Asana', description: 'Manage your team’s work, projects, & tasks.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-digital/600/400', dataAiHint: 'work management', pricing: 'Freemium' },
            { name: 'Slack', description: 'Where work happens.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack-digital/600/400', dataAiHint: 'team communication', pricing: 'Freemium' },
            { name: 'Zapier', description: 'Easy automation for busy people.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-digital/600/400', dataAiHint: 'workflow automation', pricing: 'Freemium' },
            { name: 'Make (Integromat)', description: 'A visual platform for any workflow.', url: 'https://www.make.com/en', image: 'https://picsum.photos/seed/make-digital/600/400', dataAiHint: 'visual automation', pricing: 'Freemium' },
            { name: 'Airtable', description: 'Connect everything. Achieve anything.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-digital/600/400', dataAiHint: 'spreadsheet database', pricing: 'Freemium' },
            { name: 'Notion', description: 'The all-in-one workspace.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-digital/600/400', dataAiHint: 'team collaboration', pricing: 'Freemium' },
            { name: 'Google Analytics', description: 'Web analytics service.', url: 'https://analytics.google.com/', image: 'https://picsum.photos/seed/ga-digital/600/400', dataAiHint: 'website traffic', pricing: 'Free' },
            { name: 'Mixpanel', description: 'Product analytics for converting, engaging, and retaining users.', url: 'https://mixpanel.com/', image: 'https://picsum.photos/seed/mixpanel-digital/600/400', dataAiHint: 'product analytics', pricing: 'Freemium' },
            { name: 'Amplitude', description: 'Digital Optimization System.', url: 'https://amplitude.com/', image: 'https://picsum.photos/seed/amplitude-digital/600/400', dataAiHint: 'user behavior', pricing: 'Freemium' },
            { name: 'Segment', description: 'Customer data platform.', url: 'https://segment.com/', image: 'https://picsum.photos/seed/segment-digital/600/400', dataAiHint: 'data platform', pricing: 'Freemium' },
            { name: 'Tableau', description: 'A visual analytics platform.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-digital/600/400', dataAiHint: 'data visualization', pricing: 'Paid' },
            { name: 'Looker', description: 'Business intelligence and big data analytics platform.', url: 'https://looker.com/', image: 'https://picsum.photos/seed/looker-digital/600/400', dataAiHint: 'data analytics', pricing: 'Paid' },
            { name: 'Power BI', description: 'Business analytics service by Microsoft.', url: 'https://powerbi.microsoft.com/', image: 'https://picsum.photos/seed/powerbi-digital/600/400', dataAiHint: 'microsoft bi', pricing: 'Freemium' },
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
            { name: 'Screaming Frog SEO Spider', description: 'Website crawler for improving onsite SEO.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog-seo-tool/600/400', dataAiHint: 'technical seo', pricing: 'Freemium' },
            { name: 'Majestic', description: 'The planet\'s largest link index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic-seo/600/400', dataAiHint: 'link building', pricing: 'Paid' },
            { name: 'CognitiveSEO', description: 'A complete SEO software suite.', url: 'https://cognitiveseo.com/', image: 'https://picsum.photos/seed/cognitiveseo-seo/600/400', dataAiHint: 'seo analysis', pricing: 'Paid' },
            { name: 'Advanced Web Ranking', description: 'Fresh SERP rankings for your SEO campaigns.', url: 'https://www.awrcloud.com/', image: 'https://picsum.photos/seed/awrcloud-seo/600/400', dataAiHint: 'rank tracking', pricing: 'Paid' },
            { name: 'Linkody', description: 'Backlink tracker for SEO professionals.', url: 'https://linkody.com/', image: 'https://picsum.photos/seed/linkody-seo/600/400', dataAiHint: 'backlink monitoring', pricing: 'Paid' },
            { name: 'Sitebulb', description: 'Website crawler for SEO professionals.', url: 'https://sitebulb.com/', image: 'https://picsum.photos/seed/sitebulb-seo/600/400', dataAiHint: 'website audit', pricing: 'Paid' },
            { name: 'SurferSEO', description: 'Content intelligence tool to help you write better content.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo-seo-tool/600/400', dataAiHint: 'on-page seo', pricing: 'Paid' },
            { name: 'Frase', description: 'AI to research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-seo-tool/600/400', dataAiHint: 'content optimization', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-seo-tool/600/400', dataAiHint: 'content strategy', pricing: 'Paid' },
            { name: 'Yoast SEO', description: 'The #1 WordPress SEO Plugin.', url: 'https://yoast.com/', image: 'https://picsum.photos/seed/yoast-seo-tool/600/400', dataAiHint: 'wordpress seo', pricing: 'Freemium' },
            { name: 'Rank Math', description: 'The Swiss Army Knife of WordPress SEO.', url: 'https://rankmath.com/', image: 'https://picsum.photos/seed/rankmath-seo-tool/600/400', dataAiHint: 'wordpress seo plugin', pricing: 'Freemium' },
            { name: 'Google Search Console', description: 'Tools and reports for website search performance.', url: 'https://search.google.com/search-console/', image: 'https://picsum.photos/seed/gsc-seo/600/400', dataAiHint: 'google webmaster', pricing: 'Free' },
            { name: 'Bing Webmaster Tools', description: 'Free tools to help you with your site.', url: 'https://www.bing.com/webmasters/', image: 'https://picsum.photos/seed/bing-webmaster/600/400', dataAiHint: 'bing seo', pricing: 'Free' },
            { name: 'Yandex.Webmaster', description: 'Tools for Yandex search engine.', url: 'https://webmaster.yandex.com/', image: 'https://picsum.photos/seed/yandex-webmaster/600/400', dataAiHint: 'russian seo', pricing: 'Free' },
            { name: 'Baidu Webmaster Tools', description: 'Tools for Baidu search engine.', url: 'https://ziyuan.baidu.com/', image: 'https://picsum.photos/seed/baidu-webmaster/600/400', dataAiHint: 'chinese seo', pricing: 'Free' },
            { name: 'DeepCrawl', description: 'Technical SEO platform for enterprise sites.', url: 'https://www.lyst.com/deepcrawl/', image: 'https://picsum.photos/seed/deepcrawl-seo/600/400', dataAiHint: 'enterprise technical seo', pricing: 'Paid' },
            { name: 'Botify', description: 'The leading enterprise SEO platform.', url: 'https://www.botify.com/', image: 'https://picsum.photos/seed/botify-seo/600/400', dataAiHint: 'enterprise seo platform', pricing: 'Paid' },
            { name: 'OnCrawl', description: 'Technical & Data SEO Platform.', url: 'https://www.oncrawl.com/', image: 'https://picsum.photos/seed/oncrawl-seo/600/400', dataAiHint: 'data seo', pricing: 'Paid' },
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
            { name: 'Ubersuggest', description: 'Keyword tracking & SEO tool.', url: 'https://neilpatel.com/ubersuggest/', image: 'https://picsum.photos/seed/ubersuggest-kw/600/400', dataAiHint: 'keyword suggestions', pricing: 'Freemium' },
            { name: 'Moz Keyword Explorer', description: 'Keyword research tool by Moz.', url: 'https://moz.com/explorer', image: 'https://picsum.photos/seed/moz-kw/600/400', dataAiHint: 'moz tool', pricing: 'Paid' },
            { name: 'AnswerThePublic', description: 'Search listening tool for content ideas.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/answerthepublic-kw/600/400', dataAiHint: 'question keywords', pricing: 'Freemium' },
            { name: 'Keywords Everywhere', description: 'Browser addon for keyword research.', url: 'https://keywordseverywhere.com/', image: 'https://picsum.photos/seed/keywordseverywhere-kw/600/400', dataAiHint: 'browser extension', pricing: 'Paid' },
            { name: 'Soovle', description: 'Get suggestions from multiple sources.', url: 'https://soovle.com/', image: 'https://picsum.photos/seed/soovle-kw/600/400', dataAiHint: 'suggestion tool', pricing: 'Free' },
            { name: 'Jaaxy', description: 'The World\'s Most Advanced Keyword Research Tool.', url: 'https://www.jaaxy.com/', image: 'https://picsum.photos/seed/jaaxy-kw/600/400', dataAiHint: 'advanced tool', pricing: 'Paid' },
            { name: 'SpyFu Keyword Research', description: 'Competitor keyword research tools.', url: 'https://www.spyfu.com/keyword-research', image: 'https://picsum.photos/seed/spyfu-kw/600/400', dataAiHint: 'competitor keywords', pricing: 'Paid' },
            { name: 'SERPstat', description: 'All-in-one SEO platform for professionals.', url: 'https://serpstat.com/', image: 'https://picsum.photos/seed/serpstat-kw/600/400', dataAiHint: 'seo platform', pricing: 'Paid' },
            { name: 'QuestionDB', description: 'Find the questions your audience is asking.', url: 'https://questiondb.io/', image: 'https://picsum.photos/seed/questiondb-kw/600/400', dataAiHint: 'audience questions', pricing: 'Freemium' },
            { name: 'AlsoAsked', description: 'Discover the questions people are asking.', url: 'https://alsoasked.com/', image: 'https://picsum.photos/seed/alsoasked-kw/600/400', dataAiHint: 'people also ask', pricing: 'Freemium' },
            { name: 'Keyword Sheeter', description: 'Free bulk keyword generator.', url: 'https://keywordsheeter.com/', image: 'https://picsum.photos/seed/keywordsheeter/600/400', dataAiHint: 'bulk keywords', pricing: 'Free' },
            { name: 'Keyworddit', description: 'Extract keywords from Reddit.', url: 'https://www.keyworddit.com/', image: 'https://picsum.photos/seed/keyworddit/600/400', dataAiHint: 'reddit keywords', pricing: 'Free' },
            { name: 'WordStream Free Keyword Tool', description: 'Free tool for keyword research.', url: 'https://www.wordstream.com/keywords', image: 'https://picsum.photos/seed/wordstream-kw/600/400', dataAiHint: 'wordstream tool', pricing: 'Free' },
            { name: 'TermExplorer', description: 'Bulk keyword research tool.', url: 'https://termexplorer.com/', image: 'https://picsum.photos/seed/termexplorer/600/400', dataAiHint: 'bulk research', pricing: 'Paid' },
            { name: 'GrowthBar', description: 'AI writing tool for SEO.', url: 'https://www.growthbarseo.com/', image: 'https://picsum.photos/seed/growthbar-kw/600/400', dataAiHint: 'ai seo', pricing: 'Paid' },
            { name: 'RankIQ', description: 'AI-powered SEO toolset for bloggers.', url: 'https://www.rankiq.com/', image: 'https://picsum.photos/seed/rankiq-kw/600/400', dataAiHint: 'blogger seo', pricing: 'Paid' },
            { name: 'SurferSEO Keyword Research', description: 'Find the best keywords to target.', url: 'https://surferseo.com/keyword-research-tool/', image: 'https://picsum.photos/seed/surfer-kw/600/400', dataAiHint: 'target keywords', pricing: 'Paid' },
            { name: 'WriterZen', description: 'Content workflow that simplifies your processes.', url: 'https://writerzen.net/', image: 'https://picsum.photos/seed/writerzen-kw/600/400', dataAiHint: 'content workflow', pricing: 'Paid' },
            { name: 'LowFruits', description: 'Find low competition keywords.', url: 'https://lowfruits.io/', image: 'https://picsum.photos/seed/lowfruits-kw/600/400', dataAiHint: 'easy keywords', pricing: 'Paid' },
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
            { name: 'Frase', description: 'AI to research, write, and optimize content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase-onpage/600/400', dataAiHint: 'ai research', pricing: 'Paid' },
            { name: 'MarketMuse', description: 'AI content planning and optimization software.', url: 'https://www.marketmuse.com/', image: 'https://picsum.photos/seed/marketmuse-onpage/600/400', dataAiHint: 'ai planning', pricing: 'Paid' },
            { name: 'All in One SEO Pack', description: 'The original WordPress SEO plugin.', url: 'https://aioseo.com/', image: 'https://picsum.photos/seed/aioseo-onpage/600/400', dataAiHint: 'original wordpress seo', pricing: 'Freemium' },
            { name: 'SEOPress', description: 'Simple, fast & powerful SEO plugin for WordPress.', url: 'https://www.seopress.org/', image: 'https://picsum.photos/seed/seopress-onpage/600/400', dataAiHint: 'wordpress plugin', pricing: 'Freemium' },
            { name: 'The SEO Framework', description: 'The fast, automated, and clean SEO plugin for WordPress.', url: 'https://theseoframework.com/', image: 'https://picsum.photos/seed/seoframework-onpage/600/400', dataAiHint: 'clean seo', pricing: 'Free' },
            { name: 'Copywritely', description: 'SEO content analysis software.', url: 'https://copywritely.com/', image: 'https://picsum.photos/seed/copywritely-onpage/600/400', dataAiHint: 'content analysis', pricing: 'Paid' },
            { name: 'Website Auditor', description: 'Part of SEO PowerSuite for on-page audits.', url: 'https://www.link-assistant.com/website-auditor/', image: 'https://picsum.photos/seed/websiteauditor/600/400', dataAiHint: 'on-page audit', pricing: 'Freemium' },
            { name: 'SEMrush On Page SEO Checker', description: 'Get actionable tips to improve your pages.', url: 'https://www.semrush.com/on-page-seo-checker/', image: 'https://picsum.photos/seed/semrush-onpage/600/400', dataAiHint: 'actionable tips', pricing: 'Paid' },
            { name: 'Ahrefs Site Audit', description: 'Check your website for 100+ pre-defined SEO issues.', url: 'https://ahrefs.com/site-audit', image: 'https://picsum.photos/seed/ahrefs-onpage/600/400', dataAiHint: 'site audit', pricing: 'Paid' },
            { name: 'Google Search Console', description: 'Tools to measure your site\'s Search traffic and performance.', url: 'https://search.google.com/search-console/', image: 'https://picsum.photos/seed/gsc-onpage/600/400', dataAiHint: 'google tools', pricing: 'Free' },
            { name: 'Ryte', description: 'The leading platform for website quality management.', url: 'https://en.ryte.com/', image: 'https://picsum.photos/seed/ryte-onpage/600/400', dataAiHint: 'quality management', pricing: 'Paid' },
            { name: 'Screaming Frog SEO Spider', description: 'Website crawler for improving onsite SEO.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/sf-onpage/600/400', dataAiHint: 'seo spider', pricing: 'Freemium' },
            { name: 'Dashword', description: 'Content optimization software for SEO teams.', url: 'https://dashword.com/', image: 'https://picsum.photos/seed/dashword-onpage/600/400', dataAiHint: 'seo teams', pricing: 'Paid' },
            { name: 'NeuralText', description: 'AI-powered content lifecycle platform.', url: 'https://www.neuraltext.com/', image: 'https://picsum.photos/seed/neuraltext-onpage/600/400', dataAiHint: 'content lifecycle', pricing: 'Paid' },
            { name: 'INK', description: 'AI writer, content optimizer, and SEO assistant.', url: 'https://inkforall.com/', image: 'https://picsum.photos/seed/ink-onpage/600/400', dataAiHint: 'seo assistant', pricing: 'Freemium' },
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
            { name: 'Ahrefs', description: 'Analyze your competitors\' backlink profiles.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs-offpage/600/400', dataAiHint: 'competitor analysis', pricing: 'Paid' },
            { name: 'Majestic', description: 'The planet\'s largest link index database.', url: 'https://majestic.com/', image: 'https://picsum.photos/seed/majestic-offpage/600/400', dataAiHint: 'backlink checker', pricing: 'Paid' },
            { name: 'SEMrush', description: 'Backlink analysis and link building tools.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush-offpage/600/400', dataAiHint: 'link tools', pricing: 'Paid' },
            { name: 'Moz Link Explorer', description: 'A complete overview of your backlink profile.', url: 'https://moz.com/link-explorer', image: 'https://picsum.photos/seed/moz-offpage/600/400', dataAiHint: 'link profile', pricing: 'Freemium' },
            { name: 'Hunter.io', description: 'Find professional email addresses in seconds.', url: 'https://hunter.io/', image: 'https://picsum.photos/seed/hunter-offpage/600/400', dataAiHint: 'email finder', pricing: 'Freemium' },
            { name: 'Snov.io', description: 'Email finder and cold outreach automation.', url: 'https://snov.io/', image: 'https://picsum.photos/seed/snovio-offpage/600/400', dataAiHint: 'cold outreach', pricing: 'Freemium' },
            { name: 'HARO (Help a Reporter Out)', description: 'Get featured in the media.', url: 'https://www.helpareporter.com/', image: 'https://picsum.photos/seed/haro/600/400', dataAiHint: 'media outreach', pricing: 'Free' },
            { name: 'Muck Rack', description: 'Find journalists, monitor news, and build reports.', url: 'https://muckrack.com/', image: 'https://picsum.photos/seed/muckrack/600/400', dataAiHint: 'pr software', pricing: 'Paid' },
            { name: 'Brand24', description: 'Social media monitoring tool.', url: 'https://brand24.com/', image: 'https://picsum.photos/seed/brand24-offpage/600/400', dataAiHint: 'brand mentions', pricing: 'Paid' },
            { name: 'Mention', description: 'Social media and web monitoring.', url: 'https://mention.com/', image: 'https://picsum.photos/seed/mention-offpage/600/400', dataAiHint: 'web monitoring', pricing: 'Freemium' },
            { name: 'Google Alerts', description: 'Monitor the web for interesting new content.', url: 'https://www.google.com/alerts', image: 'https://picsum.photos/seed/googlealerts/600/400', dataAiHint: 'web alerts', pricing: 'Free' },
            { name: 'GroupHigh', description: 'Find and manage blogger outreach.', url: 'https://www.grouphigh.com/', image: 'https://picsum.photos/seed/grouphigh/600/400', dataAiHint: 'blogger database', pricing: 'Paid' },
            { name: 'BuzzStream', description: 'Build relationships and links.', url: 'https://www.buzzstream.com/', image: 'https://picsum.photos/seed/buzzstream/600/400', dataAiHint: 'relationship building', pricing: 'Paid' },
            { name: 'JustReachOut', description: 'Do your own PR.', url: 'https://justreachout.io/', image: 'https://picsum.photos/seed/justreachout/600/400', dataAiHint: 'pr outreach', pricing: 'Paid' },
            { name: 'NeverBounce', description: 'Email verification & list cleaning service.', url: 'https://neverbounce.com/', image: 'https://picsum.photos/seed/neverbounce/600/400', dataAiHint: 'email verification', pricing: 'Paid' },
            { name: 'ZeroBounce', description: 'Email validation service.', url: 'https://www.zerobounce.net/', image: 'https://picsum.photos/seed/zerobounce/600/400', dataAiHint: 'email validation', pricing: 'Freemium' },
            { name: 'Mailshake', description: 'Sales engagement & automation for sending cold emails.', url: 'https://mailshake.com/', image: 'https://picsum.photos/seed/mailshake-offpage/600/400', dataAiHint: 'sales engagement', pricing: 'Paid' },
            { name: 'Lemlist', description: 'Get more replies to your cold emails.', url: 'https://www.lemlist.com/', image: 'https://picsum.photos/seed/lemlist-offpage/600/400', dataAiHint: 'email personalization', pricing: 'Paid' },
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
            { name: 'SEMrush Backlink Analytics', description: 'Analyze any domain\'s backlink profile.', url: 'https://www.semrush.com/analytics/backlinks/', image: 'https://picsum.photos/seed/semrush-backlink/600/400', dataAiHint: 'domain analysis', pricing: 'Paid' },
            { name: 'Moz Link Explorer', description: 'The world\'s best backlink checker with over 40 trillion links.', url: 'https://moz.com/link-explorer', image: 'https://picsum.photos/seed/moz-link/600/400', dataAiHint: 'link checker', pricing: 'Freemium' },
            { name: 'BuzzStream', description: 'Build relationships, and links.', url: 'https://www.buzzstream.com/', image: 'https://picsum.photos/seed/buzzstream-link/600/400', dataAiHint: 'outreach tool', pricing: 'Paid' },
            { name: 'Pitchbox', description: 'Influencer outreach & content marketing platform.', url: 'https://pitchbox.com/', image: 'https://picsum.photos/seed/pitchbox-link/600/400', dataAiHint: 'content marketing', pricing: 'Paid' },
            { name: 'HARO', description: 'Help A Reporter Out.', url: 'https://www.helpareporter.com/', image: 'https://picsum.photos/seed/haro-link/600/400', dataAiHint: 'media requests', pricing: 'Free' },
            { name: 'Check My Links', description: 'A Chrome extension for checking broken links.', url: 'https://chrome.google.com/webstore/detail/check-my-links/ojkcdipcgfaaebeafeKDDYjRObA/detail/check-my-links/ojkcdipcgfaaebeafeKDDYjRObA', image: 'https://picsum.photos/seed/checkmylinks/600/400', dataAiHint: 'broken links', pricing: 'Free' },
            { name: 'Disavow Tool', description: 'Google\'s tool to disavow bad links.', url: 'https://search.google.com/search-console/disavow-links', image: 'https://picsum.photos/seed/disavow/600/400', dataAiHint: 'google tool', pricing: 'Free' },
            { name: 'Link Research Tools', description: 'A big data platform for SEO.', url: 'https://www.linkresearchtools.com/', image: 'https://picsum.photos/seed/lrt/600/400', dataAiHint: 'big data seo', pricing: 'Paid' },
            { name: 'Link Prospector', description: 'Find link building opportunities.', url: 'https://linkprospector.citationlabs.com/', image: 'https://picsum.photos/seed/linkprospector/600/400', dataAiHint: 'link opportunities', pricing: 'Paid' },
            { name: 'Hunter.io', description: 'Find email addresses for outreach.', url: 'https://hunter.io/', image: 'https://picsum.photos/seed/hunter-link/600/400', dataAiHint: 'email finder', pricing: 'Freemium' },
            { name: 'JustReachOut', description: 'PR and outreach tool.', url: 'https://justreachout.io/', image: 'https://picsum.photos/seed/jro-link/600/400', dataAiHint: 'pr tool', pricing: 'Paid' },
            { name: 'OpenLinkProfiler', description: 'Free backlink checker.', url: 'http://openlinkprofiler.org/', image: 'https://picsum.photos/seed/olp-link/600/400', dataAiHint: 'free checker', pricing: 'Free' },
            { name: 'Whitespark', description: 'Local citation finder and builder.', url: 'https://whitespark.ca/', image: 'https://picsum.photos/seed/whitespark-link/600/400', dataAiHint: 'local seo', pricing: 'Paid' },
            { name: 'The Hoth', description: 'SEO and link building services.', url: 'https://www.thehoth.com/', image: 'https://picsum.photos/seed/thehoth/600/400', dataAiHint: 'seo services', pricing: 'Paid' },
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
            { name: 'GTmetrix', description: 'See how your site performs and get recommendations.', url: 'https://gtmetrix.com/', image: 'https://picsum.photos/seed/gtmetrix-tech/600/400', dataAiHint: 'speed test', pricing: 'Freemium' },
            { name: 'Google PageSpeed Insights', description: 'Make your web pages fast on all devices.', url: 'https://pagespeed.web.dev/', image: 'https://picsum.photos/seed/pagespeed-tech/600/400', dataAiHint: 'page speed', pricing: 'Free' },
            { name: 'Pingdom', description: 'Website monitoring and speed test.', url: 'https://www.pingdom.com/', image: 'https://picsum.photos/seed/pingdom-tech/600/400', dataAiHint: 'website monitoring', pricing: 'Paid' },
            { name: 'WebPageTest', description: 'Run a free website speed test.', url: 'https://www.webpagetest.org/', image: 'https://picsum.photos/seed/webpagetest-tech/600/400', dataAiHint: 'performance test', pricing: 'Free' },
            { name: 'Cloudflare', description: 'Web performance & security company.', url: 'https://www.cloudflare.com/', image: 'https://picsum.photos/seed/cloudflare-tech/600/400', dataAiHint: 'cdn', pricing: 'Freemium' },
            { name: 'Ahrefs Site Audit', description: 'Find and fix technical SEO issues.', url: 'https://ahrefs.com/site-audit', image: 'https://picsum.photos/seed/ahrefs-tech/600/400', dataAiHint: 'site audit', pricing: 'Paid' },
            { name: 'SEMrush Site Audit', description: 'Crawl your website and find issues.', url: 'https://www.semrush.com/site-audit/', image: 'https://picsum.photos/seed/semrush-tech/600/400', dataAiHint: 'site audit', pricing: 'Paid' },
            { name: 'Moz Site Crawl', description: 'Find and fix issues on your site.', url: 'https://moz.com/products/pro/site-crawl', image: 'https://picsum.photos/seed/moz-tech/600/400', dataAiHint: 'site crawl', pricing: 'Paid' },
            { name: 'Schema Pro', description: 'The best WordPress schema markup plugin.', url: 'https://wpschema.com/', image: 'https://picsum.photos/seed/schemapro-tech/600/400', dataAiHint: 'schema markup', pricing: 'Paid' },
            { name: 'Merkle Schema Tool', description: 'Schema markup generator.', url: 'https://www.merkle.com/en/services/technical-seo', image: 'https://picsum.photos/seed/merkle-tech/600/400', dataAiHint: 'structured data', pricing: 'Free' },
            { name: 'Rich Results Test', description: 'Google\'s tool to test your structured data.', url: 'https://search.google.com/test/rich-results', image: 'https://picsum.photos/seed/richresults-tech/600/400', dataAiHint: 'google test', pricing: 'Free' },
            { name: 'Hreflang Tags Generator Tool', description: 'Generate hreflang tags.', url: 'https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/', image: 'https://picsum.photos/seed/hreflang-tech/600/400', dataAiHint: 'international seo', pricing: 'Free' },
            { name: 'Redirect Path', description: 'Chrome extension for redirect path analysis.', url: 'https://chrome.google.com/webstore/detail/redirect-path/aomidfkchockcldjlmedpcimgfpgodpl', image: 'https://picsum.photos/seed/redirectpath-tech/600/400', dataAiHint: 'chrome extension', pricing: 'Free' },
            { name: 'LogFileAnaliser.com', description: 'Analyze your server logs.', url: 'https://logfileanaliser.com/', image: 'https://picsum.photos/seed/loganaliser/600/400', dataAiHint: 'log analysis', pricing: 'Paid' },
            { name: 'XML-Sitemaps.com', description: 'Free online sitemap generator.', url: 'https://www.xml-sitemaps.com/', image: 'https://picsum.photos/seed/xmlsitemaps-tech/600/400', dataAiHint: 'sitemap generator', pricing: 'Free' },
            { name: 'Robots.txt Generator', description: 'Generate a robots.txt file.', url: 'https://www.seobook.com/robots-txt-generator', image: 'https://picsum.photos/seed/robotstxt-tech/600/400', dataAiHint: 'robots txt', pricing: 'Free' },
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
            { name: 'Google Business Profile', description: 'Manage your online presence across Google.', url: 'https://www.google.com/business/', image: 'https://picsum.photos/seed/gbp-local/600/400', dataAiHint: 'google local', pricing: 'Free' },
            { name: 'ReviewTrackers', description: 'Customer review software.', url: 'https://www.reviewtrackers.com/', image: 'https://picsum.photos/seed/reviewtrackers-local/600/400', dataAiHint: 'customer reviews', pricing: 'Paid' },
            { name: 'Podium', description: 'Interaction management platform.', url: 'https://www.podium.com/', image: 'https://picsum.photos/seed/podium-local/600/400', dataAiHint: 'local business chat', pricing: 'Paid' },
            { name: 'GatherUp', description: 'Customer experience and online review management.', url: 'https://gatherup.com/', image: 'https://picsum.photos/seed/gatherup/600/400', dataAiHint: 'review management', pricing: 'Paid' },
            { name: 'PlePer', description: 'Local SEO tools for Google Business Profile.', url: 'https://pleper.com/', image: 'https://picsum.photos/seed/pleper/600/400', dataAiHint: 'gmb tools', pricing: 'Freemium' },
            { name: 'Local Falcon', description: 'Google Maps Rank Tracker.', url: 'https://www.localfalcon.com/', image: 'https://picsum.photos/seed/localfalcon/600/400', dataAiHint: 'map rank tracker', pricing: 'Paid' },
            { name: 'PlacesScout', description: 'Local SEO & review management software.', url: 'https://www.placesscout.com/', image: 'https://picsum.photos/seed/placesscout/600/400', dataAiHint: 'review software', pricing: 'Paid' },
            { name: 'GeoRanker', description: 'Local rank tracking and SEO tools.', url: 'https://www.georanker.com/', image: 'https://picsum.photos/seed/georanker/600/400', dataAiHint: 'rank tracking', pricing: 'Paid' },
            { name: 'Local SEO Checkup', description: 'Free local SEO report.', url: 'https://www.localseocheckup.com/', image: 'https://picsum.photos/seed/localseocheckup/600/400', dataAiHint: 'seo report', pricing: 'Free' },
            { name: 'Advice Local', description: 'Local presence management solutions.', url: 'https://www.advicelocal.com/', image: 'https://picsum.photos/seed/advicelocal/600/400', dataAiHint: 'listing management', pricing: 'Paid' },
            { name: 'GMB Everywhere', description: 'Chrome extension for GBP audit.', url: 'https://gmbeverywhere.com/', image: 'https://picsum.photos/seed/gmbeverywhere/600/400', dataAiHint: 'gmb audit', pricing: 'Freemium' },
            { name: 'Uberall', description: 'Near Me Customer Experience.', url: 'https://uberall.com/', image: 'https://picsum.photos/seed/uberall/600/400', dataAiHint: 'customer experience', pricing: 'Paid' },
            { name: 'Rio SEO', description: 'Local marketing platform for enterprise brands.', url: 'https://www.rioseo.com/', image: 'https://picsum.photos/seed/rioseo/600/400', dataAiHint: 'enterprise local', pricing: 'Paid' },
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
            { name: 'BuzzSumo', description: 'Find the most shared content and key influencers.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo-content/600/400', dataAiHint: 'content ideas', pricing: 'Freemium' },
            { name: 'CoSchedule', description: 'The marketing calendar for everything.', url: 'https://coschedule.com/', image: 'https://picsum.photos/seed/coschedule-content/600/400', dataAiHint: 'editorial calendar', pricing: 'Freemium' },
            { name: 'Canva', description: 'Design anything.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-content-mktg/600/400', dataAiHint: 'visual content', pricing: 'Freemium' },
            { name: 'Visme', description: 'Create presentations, infographics, and other visual content.', url: 'https://www.visme.co/', image: 'https://picsum.photos/seed/visme-content/600/400', dataAiHint: 'infographics', pricing: 'Freemium' },
            { name: 'Venngage', description: 'Infographic maker and design platform.', url: 'https://venngage.com/', image: 'https://picsum.photos/seed/venngage-content/600/400', dataAiHint: 'data visualization', pricing: 'Freemium' },
            { name: 'Loom', description: 'Video messaging for work.', url: 'https://www.loom.com/', image: 'https://picsum.photos/seed/loom-content/600/400', dataAiHint: 'screen recording', pricing: 'Freemium' },
            { name: 'Vidyard', description: 'Video for business.', url: 'https://www.vidyard.com/', image: 'https://picsum.photos/seed/vidyard-content/600/400', dataAiHint: 'video marketing', pricing: 'Freemium' },
            { name: 'Grammarly', description: 'Great writing, simplified.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-content/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Hemingway App', description: 'Makes your writing bold and clear.', url: 'https://hemingwayapp.com/', image: 'https://picsum.photos/seed/hemingway-content/600/400', dataAiHint: 'readability checker', pricing: 'Free' },
            { name: 'Trello', description: 'Manage your content calendar.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-content/600/400', dataAiHint: 'kanban board', pricing: 'Freemium' },
            { name: 'Airtable', description: 'Powerful database for content calendars.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-content/600/400', dataAiHint: 'content operations', pricing: 'Freemium' },
            { name: 'Asana', description: 'Manage your team’s work, projects, & tasks.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-content/600/400', dataAiHint: 'project management', pricing: 'Freemium' },
            { name: 'StoryChief', description: 'Collaborative content marketing platform.', url: 'https://storychief.io/', image: 'https://picsum.photos/seed/storychief/600/400', dataAiHint: 'content distribution', pricing: 'Paid' },
            { name: 'Quora', description: 'A place to share knowledge and better understand the world.', url: 'https://www.quora.com/', image: 'https://picsum.photos/seed/quora-content/600/400', dataAiHint: 'q&a platform', pricing: 'Free' },
            { name: 'Reddit', description: 'The front page of the internet.', url: 'https://www.reddit.com/', image: 'https://picsum.photos/seed/reddit-content/600/400', dataAiHint: 'community forums', pricing: 'Free' },
            { name: 'Feedly', description: 'Organize, read and share what matters to you.', url: 'https://feedly.com/', image: 'https://picsum.photos/seed/feedly-content/600/400', dataAiHint: 'content curation', pricing: 'Freemium' },
            { name: 'Curata', description: 'Content curation and marketing platform.', url: 'https://www.curata.com/', image: 'https://picsum.photos/seed/curata-content/600/400', dataAiHint: 'curation software', pricing: 'Paid' },
            { name: 'Pocket', description: 'Save articles, videos and stories from any publication.', url: 'https://getpocket.com/', image: 'https://picsum.photos/seed/pocket-content/600/400', dataAiHint: 'read it later', pricing: 'Freemium' },
            { name: 'Flipboard', description: 'Your personal magazine.', url: 'https://flipboard.com/', image: 'https://picsum.photos/seed/flipboard-content/600/400', dataAiHint: 'content discovery', pricing: 'Free' },
            { name: 'SEMrush', description: 'Content marketing toolkit.', url: 'https://www.semrush.com/features/content-marketing/', image: 'https://picsum.photos/seed/semrush-content-mktg/600/400', dataAiHint: 'seo toolkit', pricing: 'Paid' },
            { name: 'Ahrefs Content Explorer', description: 'Discover popular content.', url: 'https://ahrefs.com/content-explorer', image: 'https://picsum.photos/seed/ahrefs-content/600/400', dataAiHint: 'content analysis', pricing: 'Paid' },
            { name: 'AnswerThePublic', description: 'Search listening tool for content ideas.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/answerthepublic-content/600/400', dataAiHint: 'keyword ideas', pricing: 'Freemium' },
            { name: 'Google Trends', description: 'Explore what the world is searching for.', url: 'https://trends.google.com/', image: 'https://picsum.photos/seed/gtrends-content/600/400', dataAiHint: 'search trends', pricing: 'Free' },
            { name: 'HubSpot Blog Ideas Generator', description: 'Generate blog post ideas.', url: 'https://www.hubspot.com/blog-topic-generator', image: 'https://picsum.photos/seed/hubspot-blog-ideas/600/400', dataAiHint: 'idea generator', pricing: 'Free' },
        ]
    }
];

export default function MarketingSeoToolsPage() {
    const { toast } = useToast();
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

    const ToolCard = ({ tool }: { tool: Tool }) => {
        const { starredTools, handleStarToggle } = useUserPreferences();
        const isStarred = starredTools.has(tool.name);

        const handleStarClick = (e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            handleStarToggle(tool.name);
        };

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
        );
    }
    
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
                      {category.tools.slice(0, 50).map((tool) => (
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

    
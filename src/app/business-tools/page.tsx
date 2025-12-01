'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, Briefcase, DollarSign, UserCog, CreditCard, Users, MessageSquare, Video, Megaphone, BarChart, GitBranch, ListChecks, Lightbulb, Cpu, Code, Filter, TrendingUp, Link2, Server, Layers, ExternalLink, Star, Share2
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
        title: "Accounting",
        icon: <DollarSign className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'FreshBooks', description: 'Accounting software built for owners.', url: 'https://www.freshbooks.com/', image: 'https://picsum.photos/seed/freshbooks/600/400', dataAiHint: 'accounting software', pricing: 'Paid' },
          { name: 'QuickBooks', description: 'Smart, simple accounting software.', url: 'https://quickbooks.intuit.com/', image: 'https://picsum.photos/seed/quickbooks/600/400', dataAiHint: 'business accounting', pricing: 'Paid' },
          { name: 'Xero', description: 'Online accounting software for business.', url: 'https://www.xero.com/', image: 'https://picsum.photos/seed/xero/600/400', dataAiHint: 'online accounting', pricing: 'Paid' },
          { name: 'Wave', description: 'Free invoicing & accounting software.', url: 'https://www.waveapps.com/', image: 'https://picsum.photos/seed/wave/600/400', dataAiHint: 'free accounting', pricing: 'Free' },
          { name: 'Zoho Books', description: 'Powerful financial platform for your business.', url: 'https://www.zoho.com/books/', image: 'https://picsum.photos/seed/zohobooks/600/400', dataAiHint: 'financial platform', pricing: 'Freemium' },
          { name: 'Sage', description: 'Accounting and business management software.', url: 'https://www.sage.com/', image: 'https://picsum.photos/seed/sage/600/400', dataAiHint: 'business management', pricing: 'Paid' },
          { name: 'GnuCash', description: 'Free and open-source accounting software.', url: 'https://www.gnucash.org/', image: 'https://picsum.photos/seed/gnucash/600/400', dataAiHint: 'open source', pricing: 'Free' },
        ]
    },
    {
        title: "HR",
        icon: <UserCog className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Gusto', description: 'All-in-one people platform.', url: 'https://gusto.com/', image: 'https://picsum.photos/seed/gusto/600/400', dataAiHint: 'payroll platform', pricing: 'Paid' },
          { name: 'Zenefits', description: 'The all-in-one HR platform.', url: 'https://www.zenefits.com/', image: 'https://picsum.photos/seed/zenefits/600/400', dataAiHint: 'hr platform', pricing: 'Paid' },
          { name: 'Breezy HR', description: 'Modern recruiting software.', url: 'https://breezy.hr/', image: 'https://picsum.photos/seed/breezyhr/600/400', dataAiHint: 'recruiting software', pricing: 'Freemium' },
          { name: 'BambooHR', description: 'HR software with heart.', url: 'https://www.bamboohr.com/', image: 'https://picsum.photos/seed/bamboohr/600/400', dataAiHint: 'employee management', pricing: 'Paid' },
          { name: 'Rippling', description: 'Manage HR, IT, and Finance in one platform.', url: 'https://www.rippling.com/', image: 'https://picsum.photos/seed/rippling/600/400', dataAiHint: 'workforce platform', pricing: 'Paid' },
          { name: 'OrangeHRM', description: 'Open source HR management.', url: 'https://www.orangehrm.com/', image: 'https://picsum.photos/seed/orangehrm/600/400', dataAiHint: 'open source hr', pricing: 'Freemium' },
        ]
    },
    {
        title: "Payments",
        icon: <CreditCard className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Stripe', description: 'Payment processing for businesses.', url: 'https://stripe.com/', image: 'https://picsum.photos/seed/stripe/600/400', dataAiHint: 'payment processing', pricing: 'Paid' },
          { name: 'PayPal', description: 'A simpler, safer way to pay online.', url: 'https://www.paypal.com/', image: 'https://picsum.photos/seed/paypal/600/400', dataAiHint: 'online payment', pricing: 'Freemium' },
          { name: 'Square', description: 'Tools to run and grow your business.', url: 'https://squareup.com/', image: 'https://picsum.photos/seed/square/600/400', dataAiHint: 'business payment', pricing: 'Paid' },
          { name: 'Adyen', description: 'The payments platform built for growth.', url: 'https://www.adyen.com/', image: 'https://picsum.photos/seed/adyen/600/400', dataAiHint: 'enterprise payments', pricing: 'Paid' },
          { name: 'Braintree', description: 'A PayPal service for online payments.', url: 'https://www.braintreepayments.com/', image: 'https://picsum.photos/seed/braintree/600/400', dataAiHint: 'payment gateway', pricing: 'Paid' },
        ]
    },
    {
        title: "CRM",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'HubSpot', description: 'Free CRM for your business.', url: 'https://www.hubspot.com/products/crm', image: 'https://picsum.photos/seed/hubspot/600/400', dataAiHint: 'free crm', pricing: 'Freemium' },
          { name: 'Pipedrive', description: 'CRM for salespeople.', url: 'https://www.pipedrive.com/', image: 'https://picsum.photos/seed/pipedrive/600/400', dataAiHint: 'sales pipeline', pricing: 'Paid' },
          { name: 'Zoho CRM', description: 'Award-winning CRM to retain customers.', url: 'https://www.zoho.com/crm/', image: 'https://picsum.photos/seed/zohocrm/600/400', dataAiHint: 'customer relationship', pricing: 'Freemium' },
          { name: 'Insightly', description: 'Modern CRM for customer relationships.', url: 'https://www.insightly.com/', image: 'https://picsum.photos/seed/insightly/600/400', dataAiHint: 'crm dashboard', pricing: 'Paid' },
          { name: 'Salesforce', description: 'The world\'s #1 CRM platform.', url: 'https://www.salesforce.com/', image: 'https://picsum.photos/seed/salesforce/600/400', dataAiHint: 'cloud crm', pricing: 'Paid' },
          { name: 'Bitrix24', description: 'Free CRM and project management.', url: 'https://www.bitrix24.com/', image: 'https://picsum.photos/seed/bitrix24/600/400', dataAiHint: 'collaboration platform', pricing: 'Free' },
        ]
    },
    {
        title: "Messaging",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Slack', description: 'The collaboration hub for work.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack/600/400', dataAiHint: 'team chat', pricing: 'Freemium' },
          { name: 'Skype', description: 'Free video and audio calls.', url: 'https://www.skype.com/', image: 'https://picsum.photos/seed/skype/600/400', dataAiHint: 'video call', pricing: 'Free' },
          { name: 'WhatsApp', description: 'Simple, secure, reliable messaging.', url: 'https://www.whatsapp.com/', image: 'https://picsum.photos/seed/whatsapp/600/400', dataAiHint: 'mobile chat', pricing: 'Free' },
          { name: 'Discord', description: 'Your place to talk and hang out.', url: 'https://discord.com/', image: 'https://picsum.photos/seed/discord/600/400', dataAiHint: 'community chat', pricing: 'Freemium' },
          { name: 'Telegram', description: 'A focus on speed and security.', url: 'https://telegram.org/', image: 'https://picsum.photos/seed/telegram/600/400', dataAiHint: 'secure chat', pricing: 'Free' },
        ]
    },
    {
        title: "Video Conferencing",
        icon: <Video className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Zoom', description: 'Conferencing, webinars, screen sharing.', url: 'https://zoom.us/', image: 'https://picsum.photos/seed/zoom/600/400', dataAiHint: 'video meeting', pricing: 'Freemium' },
          { name: 'Google Meet', description: 'Secure video meetings for teams.', url: 'https://meet.google.com/', image: 'https://picsum.photos/seed/googlemeet/600/400', dataAiHint: 'team meeting', pricing: 'Free' },
          { name: 'Microsoft Teams', description: 'The hub for teamwork in Microsoft 365.', url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', image: 'https://picsum.photos/seed/msteams/600/400', dataAiHint: 'team collaboration', pricing: 'Freemium' },
          { name: 'Whereby', description: 'Easy video meetings, no login needed.', url: 'https://whereby.com/', image: 'https://picsum.photos/seed/whereby/600/400', dataAiHint: 'simple video call', pricing: 'Freemium' },
          { name: 'Jitsi Meet', description: 'Free, open source video conferencing.', url: 'https://meet.jit.si/', image: 'https://picsum.photos/seed/jitsi/600/400', dataAiHint: 'open source meeting', pricing: 'Free' },
        ]
    },
     {
        title: "Marketing Tools",
        icon: <Megaphone className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Mailchimp', description: 'All-in-one marketing platform.', url: 'https://mailchimp.com/', image: 'https://picsum.photos/seed/mailchimp/600/400', dataAiHint: 'email marketing', pricing: 'Freemium' },
          { name: 'Hootsuite', description: 'Manage all your social media.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite/600/400', dataAiHint: 'social media dashboard', pricing: 'Paid' },
          { name: 'Google Analytics', description: 'Track and report website traffic.', url: 'https://analytics.google.com/', image: 'https://picsum.photos/seed/googleanalytics/600/400', dataAiHint: 'data analytics', pricing: 'Free' },
          { name: 'Buffer', description: 'Social media management platform.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer/600/400', dataAiHint: 'social scheduler', pricing: 'Freemium' },
          { name: 'SendGrid', description: 'Email Delivery Service.', url: 'https://sendgrid.com/', image: 'https://picsum.photos/seed/sendgrid/600/400', dataAiHint: 'transactional email', pricing: 'Freemium' },
        ]
    },
    {
        title: "Sales Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Clearbit', description: 'Marketing data engine for interactions.', url: 'https://clearbit.com/', image: 'https://picsum.photos/seed/clearbit/600/400', dataAiHint: 'data enrichment', pricing: 'Paid' },
          { name: 'Hunter', description: 'Find professional email addresses.', url: 'https://hunter.io/', image: 'https://picsum.photos/seed/hunter/600/400', dataAiHint: 'email finder', pricing: 'Freemium' },
          { name: 'LinkedIn Sales Navigator', description: 'Build and nurture sales relationships.', url: 'https://www.linkedin.com/sales/index', image: 'https://picsum.photos/seed/linkedin-sales/600/400', dataAiHint: 'sales network', pricing: 'Paid' },
          { name: 'DocuSign', description: 'Electronic signature and agreement cloud.', url: 'https://www.docusign.com/', image: 'https://picsum.photos/seed/docusign/600/400', dataAiHint: 'e-signature', pricing: 'Paid' },
          { name: 'Calendly', description: 'Automated scheduling software.', url: 'https://calendly.com/', image: 'https://picsum.photos/seed/calendly/600/400', dataAiHint: 'meeting scheduler', pricing: 'Freemium' },
        ]
    },
     {
        title: "SEO Tools",
        icon: <TrendingUp className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Moz', description: 'Your all-in-one suite of SEO tools.', url: 'https://moz.com/', image: 'https://picsum.photos/seed/moz/600/400', dataAiHint: 'seo dashboard', pricing: 'Freemium' },
          { name: 'Ahrefs', description: 'Rank higher and get more traffic.', url: 'https://ahrefs.com/', image: 'https://picsum.photos/seed/ahrefs/600/400', dataAiHint: 'seo analytics', pricing: 'Paid' },
          { name: 'SEMrush', description: 'Online visibility management platform.', url: 'https://www.semrush.com/', image: 'https://picsum.photos/seed/semrush/600/400', dataAiHint: 'marketing platform', pricing: 'Freemium' },
          { name: 'Ubersuggest', description: 'Keyword tracking & SEO tool.', url: 'https://neilpatel.com/ubersuggest/', image: 'https://picsum.photos/seed/ubersuggest/600/400', dataAiHint: 'keyword research', pricing: 'Freemium' },
          { name: 'Screaming Frog', description: 'Website crawler and SEO spider.', url: 'https://www.screamingfrog.co.uk/seo-spider/', image: 'https://picsum.photos/seed/screamingfrog/600/400', dataAiHint: 'site audit', pricing: 'Freemium' },
          { name: 'AnswerThePublic', description: 'Search listening tool for content ideas.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/answerthepublic/600/400', dataAiHint: 'content ideas', pricing: 'Free' },
        ]
    },
     {
        title: "Backend Tools",
        icon: <Server className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Back4App', description: 'Low-code backend to build apps faster.', url: 'https://www.back4app.com/', image: 'https://picsum.photos/seed/back4app/600/400', dataAiHint: 'cloud database', pricing: 'Freemium' },
          { name: 'Firebase', description: 'Google\'s mobile platform to build apps.', url: 'https://firebase.google.com/', image: 'https://picsum.photos/seed/firebase/600/400', dataAiHint: 'app development', pricing: 'Freemium' },
          { name: 'Backendless', description: 'Visual app development platform.', url: 'https://backendless.com/', image: 'https://picsum.photos/seed/backendless/600/400', dataAiHint: 'visual coding', pricing: 'Freemium' },
          { name: 'Supabase', description: 'The open source Firebase alternative.', url: 'https://supabase.com/', image: 'https://picsum.photos/seed/supabase/600/400', dataAiHint: 'postgres database', pricing: 'Freemium' },
          { name: 'Amplify', description: 'Build scalable full-stack apps.', url: 'https://aws.amazon.com/amplify/', image: 'https://picsum.photos/seed/amplify/600/400', dataAiHint: 'aws backend', pricing: 'Freemium' },
        ]
    },
     {
        title: "Low Code Platforms",
        icon: <Layers className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Bubble.io', description: 'A no-code tool to build digital products.', url: 'https://bubble.io/', image: 'https://picsum.photos/seed/bubble/600/400', dataAiHint: 'visual programming', pricing: 'Freemium' },
          { name: 'Retool', description: 'The fast way to build internal tools.', url: 'https://retool.com/', image: 'https://picsum.photos/seed/retool/600/400', dataAiHint: 'internal tools', pricing: 'Paid' },
          { name: 'Airtable', description: 'Connect everything. Achieve anything.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable/600/400', dataAiHint: 'spreadsheet database', pricing: 'Freemium' },
          { name: 'Webflow', description: 'Build better business websites, faster.', url: 'https://webflow.com/', image: 'https://picsum.photos/seed/webflow/600/400', dataAiHint: 'website builder', pricing: 'Freemium' },
          { name: 'Glide', description: 'Create apps from Google Sheets, for free.', url: 'https://www.glideapps.com/', image: 'https://picsum.photos/seed/glide/600/400', dataAiHint: 'app builder', pricing: 'Free' },
          { name: 'Adalo', description: 'Turn your app idea into reality without code.', url: 'https://www.adalo.com/', image: 'https://picsum.photos/seed/adalo/600/400', dataAiHint: 'mobile app builder', pricing: 'Freemium' },
        ]
    },
    {
        title: "Frameworks",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'React Native', description: 'Learn once, write anywhere.', url: 'https://reactnative.dev/', image: 'https://picsum.photos/seed/reactnative/600/400', dataAiHint: 'mobile framework', pricing: 'Free' },
          { name: 'Flutter', description: 'Build apps for any screen.', url: 'https://flutter.dev/', image: 'https://picsum.photos/seed/flutter/600/400', dataAiHint: 'ui toolkit', pricing: 'Free' },
          { name: 'Ruby on Rails', description: 'Web-application framework.', url: 'https://rubyonrails.org/', image: 'https://picsum.photos/seed/rails/600/400', dataAiHint: 'web framework', pricing: 'Free' },
          { name: 'Next.js', description: 'The React Framework for the Web.', url: 'https://nextjs.org/', image: 'https://picsum.photos/seed/nextjs/600/400', dataAiHint: 'react framework', pricing: 'Free' },
          { name: 'Vue.js', description: 'The Progressive JavaScript Framework.', url: 'https://vuejs.org/', image: 'https://picsum.photos/seed/vuejs/600/400', dataAiHint: 'javascript framework', pricing: 'Free' },
          { name: 'Angular', description: 'The modern web developer\'s platform.', url: 'https://angular.io/', image: 'https://picsum.photos/seed/angular/600/400', dataAiHint: 'web platform', pricing: 'Free' },
        ]
    },
     {
        title: "Integrations",
        icon: <Link2 className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Zapier', description: 'Easy automation for busy people.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier/600/400', dataAiHint: 'automation workflow', pricing: 'Freemium' },
          { name: 'RapidAPI', description: 'The world\'s largest API hub.', url: 'https://rapidapi.com/', image: 'https://picsum.photos/seed/rapidapi/600/400', dataAiHint: 'api hub', pricing: 'Freemium' },
          { name: 'Integrately', description: '1-click integrations for your business.', url: 'https://integrately.com/', image: 'https://picsum.photos/seed/integrately/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
          { name: 'Make (Integromat)', description: 'A visual platform for any workflow.', url: 'https://www.make.com/en', image: 'https://picsum.photos/seed/make/600/400', dataAiHint: 'visual workflow', pricing: 'Freemium' },
          { name: 'Pipedream', description: 'The integration platform for developers.', url: 'https://pipedream.com/', image: 'https://picsum.photos/seed/pipedream/600/400', dataAiHint: 'developer platform', pricing: 'Free' },
        ]
    },
    {
        title: "Project Management",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Trello', description: 'Empowers your team to manage projects.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello/600/400', dataAiHint: 'kanban board', pricing: 'Freemium' },
          { name: 'Asana', description: 'Manage your team’s work, projects, & tasks.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana/600/400', dataAiHint: 'work management', pricing: 'Freemium' },
          { name: 'Jira', description: 'Software development tool for agile teams.', url: 'https://www.atlassian.com/software/jira', image: 'https://picsum.photos/seed/jira/600/400', dataAiHint: 'agile project', pricing: 'Freemium' },
          { name: 'Monday.com', description: 'Work OS that powers teams.', url: 'https://monday.com/', image: 'https://picsum.photos/seed/monday/600/400', dataAiHint: 'team workflow', pricing: 'Paid' },
          { name: 'Notion', description: 'The connected workspace.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion/600/400', dataAiHint: 'workspace tool', pricing: 'Freemium' },
          { name: 'ClickUp', description: 'One app to replace them all.', url: 'https://clickup.com/', image: 'https://picsum.photos/seed/clickup/600/400', dataAiHint: 'productivity platform', pricing: 'Freemium' },
        ]
    },
     {
        title: "Business Planning",
        icon: <Lightbulb className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Enloop', description: 'Free business plan writing app.', url: 'https://enloop.com/', image: 'https://picsum.photos/seed/enloop/600/400', dataAiHint: 'business plan', pricing: 'Freemium' },
          { name: 'LivePlan', description: 'The fastest way to write a business plan.', url: 'https://www.liveplan.com/', image: 'https://picsum.photos/seed/liveplan/600/400', dataAiHint: 'financial forecast', pricing: 'Paid' },
          { name: 'IdeaBuddy', description: 'Innovative business planning software.', url: 'https://ideabuddy.com/', image: 'https://picsum.photos/seed/ideabuddy/600/400', dataAiHint: 'startup idea', pricing: 'Paid' },
          { name: 'Cuttles', description: 'Build your startup with guides.', url: 'https://cuttles.io/', image: 'https://picsum.photos/seed/cuttles/600/400', dataAiHint: 'startup builder', pricing: 'Freemium' },
          { name: 'Bizplan', description: 'A better way to build a business plan.', url: 'https://bizplan.com/', image: 'https://picsum.photos/seed/bizplan/600/400', dataAiHint: 'business builder', pricing: 'Paid' },
        ]
    },
    {
        title: "Resource Planning",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Ganttic', description: 'High-level resource planning software.', url: 'https://www.ganttic.com/', image: 'https://picsum.photos/seed/ganttic/600/400', dataAiHint: 'planning chart', pricing: 'Paid' },
          { name: 'Float', description: 'Resource management software.', url: 'https://www.float.com/', image: 'https://picsum.photos/seed/float/600/400', dataAiHint: 'team schedule', pricing: 'Paid' },
          { name: 'TeamGantt', description: 'The easiest way for teams to plan.', url: 'https://www.teamgantt.com/', image: 'https://picsum.photos/seed/teamgantt/600/400', dataAiHint: 'gantt chart', pricing: 'Freemium' },
          { name: 'Saviom', description: 'Enterprise resource management solution.', url: 'https://www.saviom.com/', image: 'https://picsum.photos/seed/saviom/600/400', dataAiHint: 'enterprise resource', pricing: 'Paid' },
          { name: 'Runn', description: 'Resource and capacity planning.', url: 'https://www.runn.io/', image: 'https://picsum.photos/seed/runn/600/400', dataAiHint: 'capacity planning', pricing: 'Freemium' },
        ]
    },
];


export default function BusinessToolsPage() {
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
                    <Briefcase className="w-6 h-6 text-foreground" />
                    <h1 className="text-2xl font-bold text-foreground">
                    Business Tools
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

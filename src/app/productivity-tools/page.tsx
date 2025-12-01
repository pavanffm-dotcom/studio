'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Filter,
    ListChecks, ClipboardList, KanbanSquare, CheckCircle2, Goal,
    Book, StickyNote, Library, BrainCircuit, Bot,
    Clock, Timer, Calendar, Repeat, Hourglass,
    Folder, FileText, File, Share, Users,
    MessageCircle, Video, Mail, Briefcase,
    Zap, Workflow, Link2, Code,
    Terminal, GitBranch, UploadCloud, TestTube, MonitorPlay,
    PenTool, Type, CalendarPlus,
    BellOff, Headphones, Smartphone, BarChart,
    Wallet, Receipt, FileSignature, CreditCard,
    Contact, UserCog, Eye, LayoutDashboard,
    GraduationCap, BookOpen, Brain, Dna,
    MousePointer, Copy, RotateCw, Cloud,
    Sparkles, Search
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
        title: "Task & Project Management",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Trello', description: 'Collaborate, manage projects, and reach new productivity peaks.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-prod/600/400', dataAiHint: 'kanban board', pricing: 'Freemium' },
          { name: 'Asana', description: 'Manage your team’s work, projects, & tasks online.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-prod/600/400', dataAiHint: 'work management', pricing: 'Freemium' },
          { name: 'Jira', description: 'The #1 software development tool used by agile teams.', url: 'https://www.atlassian.com/software/jira', image: 'https://picsum.photos/seed/jira-prod/600/400', dataAiHint: 'agile tool', pricing: 'Freemium' },
          { name: 'Todoist', description: 'The to-do list to organize work & life.', url: 'https://todoist.com/', image: 'https://picsum.photos/seed/todoist-prod/600/400', dataAiHint: 'task list', pricing: 'Freemium' },
          { name: 'Things', description: 'The award-winning personal task manager.', url: 'https://culturedcode.com/things/', image: 'https://picsum.photos/seed/things-prod/600/400', dataAiHint: 'task manager', pricing: 'Paid' },
          { name: 'Monday.com', description: 'An open platform where anyone can create the tools they need to run every aspect of their work.', url: 'https://monday.com/', image: 'https://picsum.photos/seed/monday-prod/600/400', dataAiHint: 'work os', pricing: 'Paid' },
          { name: 'ClickUp', description: 'One app to replace them all.', url: 'https://clickup.com/', image: 'https://picsum.photos/seed/clickup-prod/600/400', dataAiHint: 'productivity platform', pricing: 'Freemium' },
        ]
    },
    {
        title: "Note-Taking & Knowledge Management",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion', description: 'The all-in-one workspace for your notes, tasks, wikis, and databases.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-prod/600/400', dataAiHint: 'workspace app', pricing: 'Freemium' },
            { name: 'Evernote', description: 'Remember everything and tackle any project.', url: 'https://evernote.com/', image: 'https://picsum.photos/seed/evernote-prod/600/400', dataAiHint: 'note taking', pricing: 'Freemium' },
            { name: 'Obsidian', description: 'A powerful knowledge base that works on top of a local folder of plain text Markdown files.', url: 'https://obsidian.md/', image: 'https://picsum.photos/seed/obsidian-prod/600/400', dataAiHint: 'second brain', pricing: 'Free' },
            { name: 'Roam Research', description: 'A note-taking tool for networked thought.', url: 'https://roamresearch.com/', image: 'https://picsum.photos/seed/roam-prod/600/400', dataAiHint: 'networked thought', pricing: 'Paid' },
            { name: 'Logseq', description: 'A privacy-first, open-source knowledge base.', url: 'https://logseq.com/', image: 'https://picsum.photos/seed/logseq-prod/600/400', dataAiHint: 'knowledge management', pricing: 'Free' },
            { name: 'Microsoft OneNote', description: 'Your digital notebook.', url: 'https://www.onenote.com/', image: 'https://picsum.photos/seed/onenote-prod/600/400', dataAiHint: 'digital notebook', pricing: 'Free' },
        ]
    },
    {
        title: "Time Management",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Toggl Track', description: 'Effortless time tracking to get your work done.', url: 'https://toggl.com/track/', image: 'https://picsum.photos/seed/toggl-prod/600/400', dataAiHint: 'time tracking', pricing: 'Freemium' },
            { name: 'Clockify', description: 'The most popular free time tracker for teams.', url: 'https://clockify.me/', image: 'https://picsum.photos/seed/clockify-prod/600/400', dataAiHint: 'team time', pricing: 'Free' },
            { name: 'Pomofocus', description: 'A simple Pomodoro timer that works on desktop & mobile browser.', url: 'https://pomofocus.io/', image: 'https://picsum.photos/seed/pomofocus-prod/600/400', dataAiHint: 'pomodoro timer', pricing: 'Free' },
            { name: 'RescueTime', description: 'The ultimate automated time-tracking and productivity tool.', url: 'https://www.rescuetime.com/', image: 'https://picsum.photos/seed/rescuetime-prod/600/400', dataAiHint: 'automated tracking', pricing: 'Freemium' },
            { name: 'Forest', description: 'Stay focused, be present. A unique way to beat phone addiction.', url: 'https://www.forestapp.cc/', image: 'https://picsum.photos/seed/forest-prod/600/400', dataAiHint: 'focus app', pricing: 'Paid' },
        ]
    },
    {
        title: "File & Document Management",
        icon: <Folder className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Drive', description: 'A safe place for all your files.', url: 'https://www.google.com/drive/', image: 'https://picsum.photos/seed/gdrive-prod/600/400', dataAiHint: 'cloud storage', pricing: 'Freemium' },
            { name: 'Dropbox', description: 'Keep your files, and your team, in sync.', url: 'https://www.dropbox.com/', image: 'https://picsum.photos/seed/dropbox-prod/600/400', dataAiHint: 'file sync', pricing: 'Freemium' },
            { name: 'iLovePDF', description: 'Every tool you need to work with PDFs in one place.', url: 'https://www.ilovepdf.com/', image: 'https://picsum.photos/seed/ilovepdf-prod/600/400', dataAiHint: 'pdf tools', pricing: 'Freemium' },
            { name: 'Google Docs', description: 'Create and collaborate on online documents.', url: 'https://www.google.com/docs/about/', image: 'https://picsum.photos/seed/gdocs-prod/600/400', dataAiHint: 'document editor', pricing: 'Free' },
            { name: 'WeTransfer', description: 'The simplest way to send your files around the world.', url: 'https://wetransfer.com/', image: 'https://picsum.photos/seed/wetransfer-prod/600/400', dataAiHint: 'file sharing', pricing: 'Freemium' },
        ]
    },
    {
        title: "Communication & Collaboration",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Slack', description: 'Where work happens.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack-prod/600/400', dataAiHint: 'team chat', pricing: 'Freemium' },
          { name: 'Zoom', description: 'Video conferencing, webinars, and screen sharing.', url: 'https://zoom.us/', image: 'https://picsum.photos/seed/zoom-prod/600/400', dataAiHint: 'video meetings', pricing: 'Freemium' },
          { name: 'Microsoft Teams', description: 'The hub for teamwork in Microsoft 365.', url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', image: 'https://picsum.photos/seed/teams-prod/600/400', dataAiHint: 'collaboration platform', pricing: 'Freemium' },
          { name: 'Discord', description: 'Your place to talk and hang out.', url: 'https://discord.com/', image: 'https://picsum.photos/seed/discord-prod/600/400', dataAiHint: 'community chat', pricing: 'Freemium' },
          { name: 'Superhuman', description: 'The fastest email experience ever made.', url: 'https://superhuman.com/', image: 'https://picsum.photos/seed/superhuman-prod/600/400', dataAiHint: 'email management', pricing: 'Paid' },
        ]
    },
    {
        title: "Automation & Workflow",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Zapier', description: 'Easy automation for busy people.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-prod/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
          { name: 'Make (Integromat)', description: 'A visual platform to design, build, and automate anything.', url: 'https://www.make.com/en', image: 'https://picsum.photos/seed/make-prod/600/400', dataAiHint: 'workflow automation', pricing: 'Freemium' },
          { name: 'n8n.io', description: 'Free and source-available workflow automation tool.', url: 'https://n8n.io/', image: 'https://picsum.photos/seed/n8n-prod/600/400', dataAiHint: 'open source automation', pricing: 'Free' },
          { name: 'Bardeen', description: 'Automate your manual tasks with one click.', url: 'https://www.bardeen.ai/', image: 'https://picsum.photos/seed/bardeen-prod/600/400', dataAiHint: 'browser automation', pricing: 'Free' },
        ]
    },
    {
        title: "Productivity for Developers",
        icon: <Terminal className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: 'https://picsum.photos/seed/copilot-prod/600/400', dataAiHint: 'ai coding', pricing: 'Paid' },
            { name: 'VS Code', description: 'Free. Built on open source. Runs everywhere.', url: 'https://code.visualstudio.com/', image: 'https://picsum.photos/seed/vscode-prod/600/400', dataAiHint: 'code editor', pricing: 'Free' },
            { name: 'Postman', description: 'The collaboration platform for API development.', url: 'https://www.postman.com/', image: 'https://picsum.photos/seed/postman-prod/600/400', dataAiHint: 'api testing', pricing: 'Freemium' },
            { name: 'Fig', description: 'Adds IDE-style autocomplete to your terminal.', url: 'https://fig.io/', image: 'https://picsum.photos/seed/fig-prod/600/400', dataAiHint: 'terminal autocomplete', pricing: 'Freemium' },
        ]
    },
    {
        title: "Writing & Content Productivity",
        icon: <PenTool className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Grammarly', description: 'Great writing, simplified.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-prod/600/400', dataAiHint: 'grammar checker', pricing: 'Freemium' },
            { name: 'Jasper', description: 'The AI Content Platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-prod/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'Write better marketing copy and content with AI.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-prod/600/400', dataAiHint: 'copywriting tool', pricing: 'Freemium' },
            { name: 'Buffer', description: 'Plan and schedule your content for social media.', url: 'https://buffer.com/', image: 'https://picsum.photos/seed/buffer-prod/600/400', dataAiHint: 'social scheduler', pricing: 'Freemium' },
        ]
    },
    {
        title: "Focus & Distraction Blocking",
        icon: <BellOff className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Freedom', description: 'Block websites, apps, and the whole internet.', url: 'https://freedom.to/', image: 'https://picsum.photos/seed/freedom-prod/600/400', dataAiHint: 'website blocker', pricing: 'Paid' },
            { name: 'Cold Turkey', description: 'The toughest website blocker on the internet.', url: 'https://getcoldturkey.com/', image: 'https://picsum.photos/seed/coldturkey-prod/600/400', dataAiHint: 'distraction free', pricing: 'Freemium' },
            { name: 'Krisp', description: 'AI-powered noise cancelling app.', url: 'https://krisp.ai/', image: 'https://picsum.photos/seed/krisp-prod/600/400', dataAiHint: 'noise cancellation', pricing: 'Freemium' },
            { name: 'Brain.fm', description: 'Functional music to improve focus.', url: 'https://www.brain.fm/', image: 'https://picsum.photos/seed/brainfm-prod/600/400', dataAiHint: 'focus music', pricing: 'Paid' },
        ]
    },
    {
        title: "Financial Productivity",
        icon: <Wallet className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'YNAB (You Need A Budget)', description: 'A proven method and budgeting app that gives you real results.', url: 'https://www.youneedabudget.com/', image: 'https://picsum.photos/seed/ynab-prod/600/400', dataAiHint: 'budgeting app', pricing: 'Paid' },
          { name: 'Mint', description: 'Manage your money, budgets & crypto all in one place.', url: 'https://mint.intuit.com/', image: 'https://picsum.photos/seed/mint-prod/600/400', dataAiHint: 'expense tracker', pricing: 'Free' },
          { name: 'Wave', description: 'Free invoicing & accounting software.', url: 'https://www.waveapps.com/', image: 'https://picsum.photos/seed/wave-prod/600/400', dataAiHint: 'invoice tools', pricing: 'Free' },
          { name: 'Gusto', description: 'The all-in-one people platform for payroll, benefits, and more.', url: 'https://gusto.com/', image: 'https://picsum.photos/seed/gusto-fin-prod/600/400', dataAiHint: 'payroll software', pricing: 'Paid' },
        ]
    },
    {
        title: "Team & Business Management",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'HubSpot', description: 'A full platform of marketing, sales, customer service, and CRM software.', url: 'https://www.hubspot.com/', image: 'https://picsum.photos/seed/hubspot-biz-prod/600/400', dataAiHint: 'crm platform', pricing: 'Freemium' },
          { name: 'BambooHR', description: 'HR software with heart.', url: 'https://www.bamboohr.com/', image: 'https://picsum.photos/seed/bamboohr-biz-prod/600/400', dataAiHint: 'hr tools', pricing: 'Paid' },
          { name: 'Loom', description: 'Video messaging for work.', url: 'https://www.loom.com/', image: 'https://picsum.photos/seed/loom-biz-prod/600/400', dataAiHint: 'team productivity', pricing: 'Freemium' },
          { name: 'Time Doctor', description: 'Productivity monitoring and time tracking software.', url: 'https://www.timedoctor.com/', image: 'https://picsum.photos/seed/timedoctor-prod/600/400', dataAiHint: 'employee monitoring', pricing: 'Paid' },
        ]
    },
    {
        title: "Learning & Skill Productivity",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Coursera', description: 'Build skills with courses, certificates, and degrees online.', url: 'https://www.coursera.org/', image: 'https://picsum.photos/seed/coursera-prod/600/400', dataAiHint: 'online courses', pricing: 'Freemium' },
          { name: 'Anki', description: 'Powerful, intelligent flashcards.', url: 'https://apps.ankiweb.net/', image: 'https://picsum.photos/seed/anki-prod/600/400', dataAiHint: 'flashcards app', pricing: 'Free' },
          { name: 'Brilliant.org', description: 'Build quantitative skills in math, science, and computer science.', url: 'https://brilliant.org/', image: 'https://picsum.photos/seed/brilliant-prod/600/400', dataAiHint: 'mind training', pricing: 'Freemium' },
        ]
    },
    {
        title: "System & Device Productivity",
        icon: <MonitorPlay className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Alfred', description: 'Award-winning app for macOS which boosts your efficiency.', url: 'https://www.alfredapp.com/', image: 'https://picsum.photos/seed/alfred-prod/600/400', dataAiHint: 'app launcher', pricing: 'Freemium' },
          { name: 'Raycast', description: 'A blazingly fast, totally extendable launcher.', url: 'https://www.raycast.com/', image: 'https://picsum.photos/seed/raycast-prod/600/400', dataAiHint: 'mac launcher', pricing: 'Free' },
          { name: 'CleanMyMac X', description: 'Your Mac. As good as new.', url: 'https://macpaw.com/cleanmymac', image: 'https://picsum.photos/seed/cleanmymac-prod/600/400', dataAiHint: 'file cleanup', pricing: 'Paid' },
          { name: 'Syncthing', description: 'Continuous file synchronization program.', url: 'https://syncthing.net/', image: 'https://picsum.photos/seed/syncthing-prod/600/400', dataAiHint: 'system sync', pricing: 'Free' },
        ]
    },
    {
        title: "AI Productivity Tools",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'ChatGPT', description: 'Optimizing Language Models for Dialogue.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-prod/600/400', dataAiHint: 'ai assistant', pricing: 'Freemium' },
          { name: 'Zapier', description: 'AI-powered automation.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-ai-prod/600/400', dataAiHint: 'ai automation', pricing: 'Freemium' },
          { name: 'Perplexity AI', description: 'The answer engine.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-prod/600/400', dataAiHint: 'ai research', pricing: 'Freemium' },
          { name: 'Bard', description: 'Your creative and helpful collaborator.', url: 'https://bard.google.com/', image: 'https://picsum.photos/seed/bard-prod/600/400', dataAiHint: 'ai productivity bot', pricing: 'Free' },
        ]
    },
];

export default function ProductivityToolsPage() {
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

    const getFilteredTools = (tools: Tool[]) => {
        if (priceFilter === 'All') return tools;
        return tools.filter(t => t.pricing === 'Free' || t.pricing === 'Freemium');
    }

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
                    <Zap className="w-6 h-6 text-foreground" />
                    <h1 className="text-2xl font-bold text-foreground">
                    Productivity Tools
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
            {toolData.map((category, index) => {
              const filteredTools = getFilteredTools(category.tools);
              if (filteredTools.length === 0) return null;

              return (
              <section key={index}>
                  <div className="flex justify-between items-center mb-3 px-2">
                      <h2 className="font-semibold text-xl flex items-center gap-2">
                          {category.icon}
                          {category.title}
                      </h2>
                  </div>
                  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                      {filteredTools.map((tool) => (
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

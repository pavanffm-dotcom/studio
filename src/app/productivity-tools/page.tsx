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
            { name: 'Basecamp', description: 'The all-in-one toolkit for working remotely.', url: 'https://basecamp.com/', image: 'https://picsum.photos/seed/basecamp-prod/600/400', dataAiHint: 'remote work', pricing: 'Paid' },
            { name: 'Wrike', description: 'A versatile work management platform for teams.', url: 'https://www.wrike.com/', image: 'https://picsum.photos/seed/wrike-prod/600/400', dataAiHint: 'team management', pricing: 'Freemium' },
            { name: 'Airtable', description: 'Connect everything. Achieve anything.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-prod/600/400', dataAiHint: 'spreadsheet database', pricing: 'Freemium' },
            { name: 'Microsoft Planner', description: 'Create Kanban boards using task cards with files, checklists, and labels.', url: 'https://www.microsoft.com/en-us/microsoft-365/planner', image: 'https://picsum.photos/seed/msplanner/600/400', dataAiHint: 'microsoft tasks', pricing: 'Paid' },
            { name: 'Smartsheet', description: 'The enterprise platform for dynamic work.', url: 'https://www.smartsheet.com/', image: 'https://picsum.photos/seed/smartsheet/600/400', dataAiHint: 'enterprise work', pricing: 'Paid' },
            { name: 'Notion', description: 'The all-in-one workspace for your notes, tasks, wikis, and databases.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-tasks/600/400', dataAiHint: 'workspace tool', pricing: 'Freemium' },
            { name: 'Zenkit', description: 'A project management platform that grows with you.', url: 'https://zenkit.com/en/base/', image: 'https://picsum.photos/seed/zenkit/600/400', dataAiHint: 'project suite', pricing: 'Freemium' },
            { name: 'MeisterTask', description: 'Beautifully designed task management for teams.', url: 'https://www.meistertask.com/', image: 'https://picsum.photos/seed/meistertask/600/400', dataAiHint: 'kanban app', pricing: 'Freemium' },
            { name: 'Teamwork', description: 'The project management software for client work.', url: 'https://www.teamwork.com/', image: 'https://picsum.photos/seed/teamwork/600/400', dataAiHint: 'client projects', pricing: 'Paid' },
            { name: 'Pivotal Tracker', description: 'The agile project management tool for developers.', url: 'https://www.pivotaltracker.com/', image: 'https://picsum.photos/seed/pivotal/600/400', dataAiHint: 'agile development', pricing: 'Paid' },
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
            { name: 'Bear', description: 'A beautiful, flexible writing app for crafting notes and prose.', url: 'https://bear.app/', image: 'https://picsum.photos/seed/bear-prod/600/400', dataAiHint: 'writing app', pricing: 'Freemium' },
            { name: 'Google Keep', description: 'Quickly capture what\'s on your mind.', url: 'https://keep.google.com/', image: 'https://picsum.photos/seed/gkeep-prod/600/400', dataAiHint: 'sticky notes', pricing: 'Free' },
            { name: 'Coda', description: 'A new doc that brings words, data, and teams together.', url: 'https://coda.io/', image: 'https://picsum.photos/seed/coda/600/400', dataAiHint: 'all-in-one doc', pricing: 'Freemium' },
            { name: 'Slite', description: 'The fastest way to share knowledge in your team.', url: 'https://slite.com/', image: 'https://picsum.photos/seed/slite/600/400', dataAiHint: 'team knowledge', pricing: 'Freemium' },
            { name: 'Craft', description: 'A new take on documents.', url: 'https://www.craft.do/', image: 'https://picsum.photos/seed/craft/600/400', dataAiHint: 'document editor', pricing: 'Freemium' },
            { name: 'Simplenote', description: 'The simplest way to keep notes.', url: 'https://simplenote.com/', image: 'https://picsum.photos/seed/simplenote/600/400', dataAiHint: 'lightweight notes', pricing: 'Free' },
            { name: 'Joplin', description: 'An open source note taking and to-do application.', url: 'https://joplinapp.org/', image: 'https://picsum.photos/seed/joplin/600/400', dataAiHint: 'open source notes', pricing: 'Free' },
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
            { name: 'Harvest', description: 'Simple time tracking, powerful reporting.', url: 'https://www.getharvest.com/', image: 'https://picsum.photos/seed/harvest-prod/600/400', dataAiHint: 'invoice tracking', pricing: 'Freemium' },
            { name: 'Timeular', description: 'Track your time effortlessly with a physical tracker.', url: 'https://timeular.com/', image: 'https://picsum.photos/seed/timeular-prod/600/400', dataAiHint: 'time tracker', pricing: 'Paid' },
            { name: 'MyLifeOrganized', description: 'A powerful task management system.', url: 'https://www.mylifeorganized.net/', image: 'https://picsum.photos/seed/mlo/600/400', dataAiHint: 'task organizer', pricing: 'Freemium' },
            { name: 'Focus@Will', description: 'Music scientifically optimized for focus.', url: 'https://www.focusatwill.com/', image: 'https://picsum.photos/seed/focusatwill/600/400', dataAiHint: 'focus music', pricing: 'Paid' },
            { name: 'TickTick', description: 'A to-do list app with calendar, Pomodoro, and habit tracker.', url: 'https://ticktick.com/', image: 'https://picsum.photos/seed/ticktick/600/400', dataAiHint: 'all-in-one productivity', pricing: 'Freemium' },
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
            { name: 'Box', description: 'Secure content management and collaboration.', url: 'https://www.box.com/', image: 'https://picsum.photos/seed/box-prod/600/400', dataAiHint: 'enterprise storage', pricing: 'Freemium' },
            { name: 'Microsoft OneDrive', description: 'Save your files and photos to OneDrive and access them from any device, anywhere.', url: 'https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage', image: 'https://picsum.photos/seed/onedrive-prod/600/400', dataAiHint: 'microsoft cloud', pricing: 'Freemium' },
            { name: 'Smallpdf', description: 'We make PDF easy.', url: 'https://smallpdf.com/', image: 'https://picsum.photos/seed/smallpdf/600/400', dataAiHint: 'pdf converter', pricing: 'Freemium' },
            { name: 'DocuSign', description: 'The fast, reliable way to make every agreement digital.', url: 'https://www.docusign.com/', image: 'https://picsum.photos/seed/docusign/600/400', dataAiHint: 'e-signature', pricing: 'Paid' },
            { name: 'pCloud', description: 'The secure cloud storage from Europe.', url: 'https://www.pcloud.com/', image: 'https://picsum.photos/seed/pcloud/600/400', dataAiHint: 'secure storage', pricing: 'Freemium' },
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
          { name: 'Loom', description: 'Video messaging for work.', url: 'https://www.loom.com/', image: 'https://picsum.photos/seed/loom-prod/600/400', dataAiHint: 'screen recording', pricing: 'Freemium' },
          { name: 'Miro', description: 'The online collaborative whiteboard platform.', url: 'https://miro.com/', image: 'https://picsum.photos/seed/miro-prod/600/400', dataAiHint: 'online whiteboard', pricing: 'Freemium' },
          { name: 'Twist', description: 'A calmer, more organized, more productive way to work together.', url: 'https://twist.com/', image: 'https://picsum.photos/seed/twist/600/400', dataAiHint: 'async communication', pricing: 'Freemium' },
          { name: 'Telegram', description: 'A new era of messaging.', url: 'https://telegram.org/', image: 'https://picsum.photos/seed/telegram/600/400', dataAiHint: 'secure messaging', pricing: 'Free' },
          { name: 'Mattermost', description: 'Open-source collaboration platform for developers.', url: 'https://mattermost.com/', image: 'https://picsum.photos/seed/mattermost/600/400', dataAiHint: 'developer chat', pricing: 'Freemium' },
        ]
    },
    {
        title: "Automation & Workflow",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zapier', description: 'Easy automation for busy people.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier/600/400', dataAiHint: 'automation workflow', pricing: 'Freemium' },
            { name: 'Make', description: 'A visual platform to design, build, and automate anything.', url: 'https://www.make.com/', image: 'https://picsum.photos/seed/make/600/400', dataAiHint: 'visual workflow', pricing: 'Freemium' },
            { name: 'Power Automate', description: 'Streamline repetitive tasks and paperless processes.', url: 'https://powerautomate.microsoft.com/', image: 'https://picsum.photos/seed/power-automate/600/400', dataAiHint: 'microsoft automation', pricing: 'Paid' },
            { name: 'n8n', description: 'Free and source-available workflow automation tool.', url: 'https://n8n.io/', image: 'https://picsum.photos/seed/n8n/600/400', dataAiHint: 'self-hosted automation', pricing: 'Freemium' },
            { name: 'IFTTT', description: 'Helps your apps and devices work together in new ways.', url: 'https://ifttt.com/', image: 'https://picsum.photos/seed/ifttt/600/400', dataAiHint: 'applets service', pricing: 'Freemium' },
            { name: 'Workato', description: 'A single platform for integration and automation.', url: 'https://www.workato.com/', image: 'https://picsum.photos/seed/workato/600/400', dataAiHint: 'enterprise automation', pricing: 'Paid' },
            { name: 'UiPath', description: 'A leading Robotic Process Automation vendor.', url: 'https://www.uipath.com/', image: 'https://picsum.photos/seed/uipath/600/400', dataAiHint: 'rpa software', pricing: 'Paid' },
            { name: 'Automation Anywhere', description: 'The #1 cloud automation platform.', url: 'https://www.automationanywhere.com/', image: 'https://picsum.photos/seed/automation-anywhere/600/400', dataAiHint: 'rpa cloud', pricing: 'Paid' },
            { name: 'Pabbly Connect', description: 'Affordable workflow automation software.', url: 'https://www.pabbly.com/connect/', image: 'https://picsum.photos/seed/pabbly-connect/600/400', dataAiHint: 'zapier alternative', pricing: 'Paid' },
            { name: 'Tray.io', description: 'A leader in low-code, enterprise automation.', url: 'https://tray.io/', image: 'https://picsum.photos/seed/tray-io/600/400', dataAiHint: 'api integration', pricing: 'Paid' },
            { name: 'Integrately', description: '1-click integrations for your business.', url: 'https://integrately.com/', image: 'https://picsum.photos/seed/integrately/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Apache Airflow', description: 'Programmatically author, schedule, and monitor workflows.', url: 'https://airflow.apache.org/', image: 'https://picsum.photos/seed/apache-airflow/600/400', dataAiHint: 'data pipelines', pricing: 'Free' },
            { name: 'AWS Step Functions', description: 'Visual workflows for distributed applications.', url: 'https://aws.amazon.com/step-functions/', image: 'https://picsum.photos/seed/aws-step-functions/600/400', dataAiHint: 'serverless orchestration', pricing: 'Paid' },
            { name: 'Google Vertex AI Pipelines', description: 'Build and run machine learning pipelines.', url: 'https://cloud.google.com/vertex-ai/docs/pipelines', image: 'https://picsum.photos/seed/google-vertex-ai-pipelines/600/400', dataAiHint: 'mlops pipeline', pricing: 'Paid' },
            { name: 'Selenium', description: 'An umbrella project for a range of tools for browser automation.', url: 'https://www.selenium.dev/', image: 'https://picsum.photos/seed/selenium/600/400', dataAiHint: 'browser testing', pricing: 'Free' },
            { name: 'Blue Prism', description: 'Intelligent automation for the enterprise.', url: 'https://www.blueprism.com/', image: 'https://picsum.photos/seed/blue-prism/600/400', dataAiHint: 'digital workforce', pricing: 'Paid' },
            { name: 'Kissflow', description: 'Work platform to manage all your work.', url: 'https://kissflow.com/', image: 'https://picsum.photos/seed/kissflow/600/400', dataAiHint: 'process management', pricing: 'Paid' },
            { name: 'Process Street', description: 'A simple, free and powerful way to manage your team\'s recurring checklists.', url: 'https://www.process.st/', image: 'https://picsum.photos/seed/process-street/600/400', dataAiHint: 'checklist software', pricing: 'Freemium' },
            { name: 'Pipefy', description: 'The workflow management software that empowers teams to do more.', url: 'https://www.pipefy.com/', image: 'https://picsum.photos/seed/pipefy/600/400', dataAiHint: 'business process', pricing: 'Freemium' },
            { name: 'Asana Rules', description: 'Automate manual work to spend more time on the work that matters.', url: 'https://asana.com/features/rules', image: 'https://picsum.photos/seed/asana-rules/600/400', dataAiHint: 'work automation', pricing: 'Paid' },
            { name: 'ClickUp Automations', description: 'Save time and automate routine work in ClickUp.', url: 'https://clickup.com/features/automations', image: 'https://picsum.photos/seed/clickup-automations/600/400', dataAiHint: 'task automation', pricing: 'Freemium' },
            { name: 'Notion Automations', description: 'Automate your Notion workflows with the API and integrations.', url: 'https://www.notion.so/integrations', image: 'https://picsum.photos/seed/notion-automations/600/400', dataAiHint: 'workspace automation', pricing: 'Freemium' },
            { name: 'Monday Automations', description: 'Save time, avoid errors, and focus on what matters.', url: 'https://monday.com/features/automations', image: 'https://picsum.photos/seed/monday-automations/600/400', dataAiHint: 'work os automation', pricing: 'Paid' },
            { name: 'Trello Butler', description: 'Automation for your Trello boards.', url: 'https://trello.com/butler', image: 'https://picsum.photos/seed/trello-butler/600/400', dataAiHint: 'board automation', pricing: 'Freemium' },
            { name: 'Airtable Automations', description: 'Automate your team\'s workflows within Airtable.', url: 'https://www.airtable.com/features/automations', image: 'https://picsum.photos/seed/airtable-automations/600/400', dataAiHint: 'database automation', pricing: 'Freemium' },
            { name: 'TaskMagic', description: 'Record and automate any web task.', url: 'https://www.taskmagic.com/', image: 'https://picsum.photos/seed/taskmagic/600/400', dataAiHint: 'web scraping', pricing: 'Paid' },
            { name: 'Bardeen AI', description: 'Automate your manual tasks with one click.', url: 'https://www.bardeen.ai/', image: 'https://picsum.photos/seed/bardeen-ai/600/400', dataAiHint: 'browser automation', pricing: 'Free' },
            { name: 'Axiom.ai', description: 'Browser automation. Quickly, without code.', url: 'https://axiom.ai/', image: 'https://picsum.photos/seed/axiom-ai/600/400', dataAiHint: 'rpa browser', pricing: 'Freemium' },
            { name: 'Robomotion', description: 'RPA for automating web and desktop applications.', url: 'https://robomotion.io/', image: 'https://picsum.photos/seed/robomotion/600/400', dataAiHint: 'robot automation', pricing: 'Freemium' },
            { name: 'Appian', description: 'A low-code automation platform.', url: 'https://appian.com/', image: 'https://picsum.photos/seed/appian/600/400', dataAiHint: 'low-code automation', pricing: 'Paid' },
            { name: 'Celonis', description: 'Process mining and execution management.', url: 'https://www.celonis.com/', image: 'https://picsum.photos/seed/celonis/600/400', dataAiHint: 'process mining', pricing: 'Paid' },
            { name: 'Nintex', description: 'Process management and automation software.', url: 'https://www.nintex.com/', image: 'https://picsum.photos/seed/nintex/600/400', dataAiHint: 'workflow cloud', pricing: 'Paid' },
            { name: 'Tibco Automation', description: 'Connect, unify, and confidently predict business outcomes.', url: 'https://www.tibco.com/solutions/automation', image: 'https://picsum.photos/seed/tibco-automation/600/400', dataAiHint: 'business automation', pricing: 'Paid' },
            { name: 'IBM Automation', description: 'AI-powered automation for business and IT.', url: 'https://www.ibm.com/automation', image: 'https://picsum.photos/seed/ibm-automation/600/400', dataAiHint: 'intelligent automation', pricing: 'Paid' },
            { name: 'Alteryx', description: 'Analytics automation platform.', url: 'https://www.alteryx.com/', image: 'https://picsum.photos/seed/alteryx/600/400', dataAiHint: 'data analytics', pricing: 'Paid' },
            { name: 'KNIME', description: 'Open source data science and machine learning platform.', url: 'https://www.knime.com/', image: 'https://picsum.photos/seed/knime/600/400', dataAiHint: 'data science', pricing: 'Free' },
            { name: 'Dataiku', description: 'The platform for Everyday AI.', url: 'https://www.dataiku.com/', image: 'https://picsum.photos/seed/dataiku/600/400', dataAiHint: 'enterprise ai', pricing: 'Paid' },
            { name: 'Databricks Workflows', description: 'Orchestrate data processing, machine learning, and analytics pipelines.', url: 'https://www.databricks.com/product/workflows', image: 'https://picsum.photos/seed/databricks-workflows/600/400', dataAiHint: 'data lakehouse', pricing: 'Paid' },
            { name: 'HuggingFace Workflows', description: 'Build, train and deploy state-of-the-art models powered by the reference open source in machine learning.', url: 'https://huggingface.co/docs/hub/workflows', image: 'https://picsum.photos/seed/huggingface-workflows/600/400', dataAiHint: 'nlp automation', pricing: 'Freemium' },
            { name: 'OpenAI Workflows', description: 'Integrate OpenAI models into your workflows.', url: 'https://openai.com/', image: 'https://picsum.photos/seed/openai-workflows/600/400', dataAiHint: 'ai api', pricing: 'Paid' },
            { name: 'Claude Workflows', description: 'Integrate Claude models into your workflows.', url: 'https://www.anthropic.com/', image: 'https://picsum.photos/seed/claude-workflows/600/400', dataAiHint: 'ai assistant', pricing: 'Paid' },
            { name: 'Parabola', description: 'Hand-off your routine data tasks.', url: 'https://parabola.io/', image: 'https://picsum.photos/seed/parabola/600/400', dataAiHint: 'data workflow', pricing: 'Paid' },
            { name: 'Clay', description: 'Find and enrich people and companies.', url: 'https://www.clay.com/', image: 'https://picsum.photos/seed/clay/600/400', dataAiHint: 'data enrichment', pricing: 'Paid' },
            { name: 'Motion', description: 'Uses AI to plan your day.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/motion/600/400', dataAiHint: 'ai calendar', pricing: 'Paid' },
            { name: 'Reclaim.ai', description: 'Smart time blocking for your calendar.', url: 'https://reclaim.ai/', image: 'https://picsum.photos/seed/reclaim-ai/600/400', dataAiHint: 'calendar automation', pricing: 'Freemium' },
            { name: 'OneTask', description: 'AI-powered to-do list that automates your tasks.', url: 'https://onetask.ai/', image: 'https://picsum.photos/seed/onetask/600/400', dataAiHint: 'ai task', pricing: 'Paid' },
            { name: 'Magical AI', description: 'AI-powered text expander and automation.', url: 'https://www.getmagical.com/', image: 'https://picsum.photos/seed/magical-ai/600/400', dataAiHint: 'text expander', pricing: 'Free' },
            { name: 'Levity', description: 'No-code AI workflow automation.', url: 'https://levity.ai/', image: 'https://picsum.photos/seed/levity/600/400', dataAiHint: 'no-code ai', pricing: 'Paid' },
            { name: 'Kadoa', description: 'Web scraping powered by AI.', url: 'https://www.kadoa.com/', image: 'https://picsum.photos/seed/kadoa/600/400', dataAiHint: 'ai scraping', pricing: 'Paid' },
            { name: 'Superflows', description: 'AI that completes actions for you.', url: 'https://www.superflows.ai/', image: 'https://picsum.photos/seed/superflows/600/400', dataAiHint: 'ai actions', pricing: 'Paid' },
            { name: 'Nanonets', description: 'Intelligent document processing.', url: 'https://nanonets.com/', image: 'https://picsum.photos/seed/nanonets/600/400', dataAiHint: 'ocr automation', pricing: 'Paid' },
            { name: 'Rossum', description: 'AI-powered document data capture.', url: 'https://rossum.ai/', image: 'https://picsum.photos/seed/rossum/600/400', dataAiHint: 'document processing', pricing: 'Paid' },
            { name: 'Kofax', description: 'Intelligent automation software platform.', url: 'https://www.kofax.com/', image: 'https://picsum.photos/seed/kofax/600/400', dataAiHint: 'digital workflow', pricing: 'Paid' },
            { name: 'Formstack', description: 'Versatile online form builder and data collection tool.', url: 'https://www.formstack.com/', image: 'https://picsum.photos/seed/formstack/600/400', dataAiHint: 'form automation', pricing: 'Paid' },
            { name: 'PDF.co', description: 'API platform for PDF and barcode.', url: 'https://pdf.co/', image: 'https://picsum.photos/seed/pdf-co/600/400', dataAiHint: 'pdf automation', pricing: 'Paid' },
            { name: 'ZappySys', description: 'SSIS components for integration.', url: 'https://zappysys.com/', image: 'https://picsum.photos/seed/zappysys/600/400', dataAiHint: 'ssis powerpack', pricing: 'Paid' },
            { name: 'Boomi', description: 'Cloud-native integration platform.', url: 'https://boomi.com/', image: 'https://picsum.photos/seed/boomi/600/400', dataAiHint: 'ipaas platform', pricing: 'Paid' },
            { name: 'Pentaho', description: 'Data integration, business analytics and reporting.', url: 'https://www.hitachivantara.com/en-us/products/pentaho-plus-platform.html', image: 'https://picsum.photos/seed/pentaho/600/400', dataAiHint: 'data integration', pricing: 'Paid' },
            { name: 'RapidMiner', description: 'Data science platform by Altair.', url: 'https://www.rapidminer.com/', image: 'https://picsum.photos/seed/rapidminer/600/400', dataAiHint: 'ml platform', pricing: 'Paid' },
            { name: 'Fivetran', description: 'Automated data movement.', url: 'https://www.fivetran.com/', image: 'https://picsum.photos/seed/fivetran/600/400', dataAiHint: 'elt platform', pricing: 'Paid' },
            { name: 'Hevo Data', description: 'No-code data pipeline.', url: 'https://hevodata.com/', image: 'https://picsum.photos/seed/hevo-data/600/400', dataAiHint: 'data pipeline', pricing: 'Paid' },
            { name: 'Stitch', description: 'A Talend company for data integration.', url: 'https://www.stitchdata.com/', image: 'https://picsum.photos/seed/stitch/600/400', dataAiHint: 'etl service', pricing: 'Paid' },
            { name: 'Talend', description: 'A single, unified platform for data.', url: 'https://www.talend.com/', image: 'https://picsum.photos/seed/talend/600/400', dataAiHint: 'data fabric', pricing: 'Paid' },
            { name: 'SnapLogic', description: 'Intelligent integration and automation.', url: 'https://www.snaplogic.com/', image: 'https://picsum.photos/seed/snaplogic/600/400', dataAiHint: 'integration platform', pricing: 'Paid' },
            { name: 'Qlik Automation', description: 'Automate workflows between Qlik Cloud and SaaS applications.', url: 'https://www.qlik.com/us/products/qlik-application-automation', image: 'https://picsum.photos/seed/qlik-automation/600/400', dataAiHint: 'analytics automation', pricing: 'Paid' },
            { name: 'Supabase Edge Functions', description: 'Serverless functions at the edge.', url: 'https://supabase.com/docs/functions', image: 'https://picsum.photos/seed/supabase-edge-functions/600/400', dataAiHint: 'serverless functions', pricing: 'Freemium' },
            { name: 'Appsmith Automations', description: 'Build internal tools with automations.', url: 'https://www.appsmith.com/', image: 'https://picsum.photos/seed/appsmith-automations/600/400', dataAiHint: 'internal tools', pricing: 'Freemium' },
            { name: 'Retool Workflows', description: 'Automate custom business logic.', url: 'https://retool.com/products/workflows', image: 'https://picsum.photos/seed/retool-workflows/600/400', dataAiHint: 'cron jobs', pricing: 'Paid' },
            { name: 'DronaHQ Automations', description: 'Build internal tools with automation.', url: 'https://www.dronahq.com/', image: 'https://picsum.photos/seed/dronahq-automations/600/400', dataAiHint: 'low-code builder', pricing: 'Paid' },
            { name: 'NocoDB Automations', description: 'Open Source Airtable Alternative with automations.', url: 'https://www.nocodb.com/', image: 'https://picsum.photos/seed/nocodb-automations/600/400', dataAiHint: 'open source', pricing: 'Freemium' },
            { name: 'Backendless Automations', description: 'Visual app development platform.', url: 'https://backendless.com/', image: 'https://picsum.photos/seed/backendless-automations/600/400', dataAiHint: 'no-code backend', pricing: 'Freemium' },
            { name: 'Glide Automations', description: 'Create apps from Google Sheets.', url: 'https://www.glideapps.com/', image: 'https://picsum.photos/seed/glide-automations/600/400', dataAiHint: 'app builder', pricing: 'Freemium' },
            { name: 'Bubble Workflows', description: 'No-code tool to build digital products.', url: 'https://bubble.io/', image: 'https://picsum.photos/seed/bubble-workflows/600/400', dataAiHint: 'no-code web', pricing: 'Freemium' },
            { name: 'WeWeb Automations', description: 'Build production-ready apps.', url: 'https://www.weweb.io/', image: 'https://picsum.photos/seed/weweb-automations/600/400', dataAiHint: 'frontend builder', pricing: 'Freemium' },
            { name: 'Webflow Logic', description: 'Build custom logic for your Webflow site.', url: 'https://webflow.com/logic', image: 'https://picsum.photos/seed/webflow-logic/600/400', dataAiHint: 'site automation', pricing: 'Paid' },
            { name: 'Wized Automations', description: 'Build web apps on Webflow.', url: 'https://www.wized.com/', image: 'https://picsum.photos/seed/wized-automations/600/400', dataAiHint: 'webflow app', pricing: 'Paid' },
            { name: 'Typedream Automations', description: 'Build websites with no-code.', url: 'https://typedream.com/', image: 'https://picsum.photos/seed/typedream-automations/600/400', dataAiHint: 'website builder', pricing: 'Freemium' },
            { name: 'Softr Automations', description: 'Build apps from Airtable.', url: 'https://www.softr.io/', image: 'https://picsum.photos/seed/softr-automations/600/400', dataAiHint: 'no-code apps', pricing: 'Freemium' },
            { name: 'Stacker Automations', description: 'Build apps powered by your data.', url: 'https://www.stacker.app/', image: 'https://picsum.photos/seed/stacker-automations/600/400', dataAiHint: 'data apps', pricing: 'Paid' },
            { name: 'Tally Automations', description: 'The simplest way to build forms.', url: 'https://tally.so/', image: 'https://picsum.photos/seed/tally-automations/600/400', dataAiHint: 'form builder', pricing: 'Freemium' },
            { name: 'Autonomiq', description: 'AI-powered test automation.', url: 'https://autonomiq.io/', image: 'https://picsum.photos/seed/autonomiq/600/400', dataAiHint: 'test automation', pricing: 'Paid' },
            { name: 'Leapwork', description: 'No-code test automation.', url: 'https://www.leapwork.com/', image: 'https://picsum.photos/seed/leapwork/600/400', dataAiHint: 'codeless testing', pricing: 'Paid' },
            { name: 'Prismatic', description: 'The integration platform for B2B SaaS.', url: 'https://prismatic.io/', image: 'https://picsum.photos/seed/prismatic/600/400', dataAiHint: 'embedded ipaas', pricing: 'Paid' },
            { name: 'WorkFusion', description: 'Intelligent automation for enterprise.', url: 'https://www.workfusion.com/', image: 'https://picsum.photos/seed/workfusion/600/400', dataAiHint: 'ai workforce', pricing: 'Paid' },
            { name: 'Airtable Scripts', description: 'Run scripts in your Airtable base.', url: 'https://support.airtable.com/docs/scripting-overview', image: 'https://picsum.photos/seed/airtable-scripts/600/400', dataAiHint: 'javascript scripting', pricing: 'Freemium' },
            { name: 'Automator (Mac)', description: 'Built-in automation tool for macOS.', url: 'https://support.apple.com/guide/automator/welcome/mac', image: 'https://picsum.photos/seed/automator-(mac)/600/400', dataAiHint: 'mac productivity', pricing: 'Free' },
            { name: 'Scriptable', description: 'Automate iOS with JavaScript.', url: 'https://scriptable.app/', image: 'https://picsum.photos/seed/scriptable/600/400', dataAiHint: 'ios automation', pricing: 'Free' },
            { name: 'Prefect', description: 'Workflow orchestration platform.', url: 'https://www.prefect.io/', image: 'https://picsum.photos/seed/prefect/600/400', dataAiHint: 'dataflow automation', pricing: 'Freemium' },
            { name: 'Dagster', description: 'The data asset platform.', url: 'https://dagster.io/', image: 'https://picsum.photos/seed/dagster/600/400', dataAiHint: 'data orchestrator', pricing: 'Free' },
            { name: 'Luigi', description: 'A Python module that helps you build complex pipelines of batch jobs.', url: 'https://luigi.readthedocs.io/en/stable/', image: 'https://picsum.photos/seed/luigi/600/400', dataAiHint: 'python pipelines', pricing: 'Free' },
            { name: 'MLflow Pipelines', description: 'An open source platform for the machine learning lifecycle.', url: 'https://mlflow.org/docs/latest/pipelines.html', image: 'https://picsum.photos/seed/mlflow-pipelines/600/400', dataAiHint: 'ml lifecycle', pricing: 'Free' },
            { name: 'Kubeflow', description: 'The Machine Learning Toolkit for Kubernetes.', url: 'https://www.kubeflow.org/', image: 'https://picsum.photos/seed/kubeflow/600/400', dataAiHint: 'kubernetes ml', pricing: 'Free' },
            { name: 'Vertex AI Workbench', description: 'Jupyter-based development environment for ML.', url: 'https://cloud.google.com/vertex-ai/docs/workbench', image: 'https://picsum.photos/seed/vertex-ai-workbench/600/400', dataAiHint: 'jupyter notebooks', pricing: 'Paid' },
            { name: 'MetaFlow', description: 'A human-friendly Python library for building and managing real-life data science projects.', url: 'https://metaflow.org/', image: 'https://picsum.photos/seed/metaflow/600/400', dataAiHint: 'data science', pricing: 'Free' },
            { name: 'Airbyte', description: 'Open-source data integration platform.', url: 'https://airbyte.com/', image: 'https://picsum.photos/seed/airbyte/600/400', dataAiHint: 'elt data', pricing: 'Freemium' },
            { name: 'Hightouch', description: 'The leading Data Activation platform.', url: 'https://hightouch.com/', image: 'https://picsum.photos/seed/hightouch/600/400', dataAiHint: 'reverse etl', pricing: 'Freemium' },
            { name: 'Census', description: 'The #1 Data Activation platform, built on Reverse ETL.', url: 'https://www.getcensus.com/', image: 'https://picsum.photos/seed/census/600/400', dataAiHint: 'data activation', pricing: 'Freemium' },
            { name: 'Segment Automations', description: 'Customer data platform with workflow automation.', url: 'https://segment.com/', image: 'https://picsum.photos/seed/segment-automations/600/400', dataAiHint: 'cdp platform', pricing: 'Paid' },
            { name: 'Rudderstack', description: 'The composable CDP.', url: 'https://www.rudderstack.com/', image: 'https://picsum.photos/seed/rudderstack/600/400', dataAiHint: 'open source cdp', pricing: 'Freemium' },
            { name: 'Polytomic', description: 'The modern Reverse ETL.', url: 'https://www.polytomic.com/', image: 'https://picsum.photos/seed/polytomic/600/400', dataAiHint: 'data sync', pricing: 'Paid' },
            { name: 'Veryfi', description: 'Real-time data extraction from documents.', url: 'https://www.veryfi.com/', image: 'https://picsum.photos/seed/veryfi/600/400', dataAiHint: 'receipt ocr', pricing: 'Paid' },
            { name: 'Docsumo', description: 'Intelligent document processing solution.', url: 'https://www.docsumo.com/', image: 'https://picsum.photos/seed/docsumo/600/400', dataAiHint: 'idp software', pricing: 'Paid' },
            { name: 'Textract (AWS)', description: 'Extract text, handwriting, and data from any document.', url: 'https://aws.amazon.com/textract/', image: 'https://picsum.photos/seed/textract-(aws)/600/400', dataAiHint: 'aws ocr', pricing: 'Paid' },
            { name: 'Google DocAI', description: 'Automate data capture at scale.', url: 'https://cloud.google.com/document-ai', image: 'https://picsum.photos/seed/google-docai/600/400', dataAiHint: 'document ai', pricing: 'Paid' },
            { name: 'Microsoft Syntex', description: 'Content AI in the Microsoft Cloud.', url: 'https://www.microsoft.com/en-us/microsoft-syntex', image: 'https://picsum.photos/seed/microsoft-syntex/600/400', dataAiHint: 'content ai', pricing: 'Paid' },
            { name: 'Mindee', description: 'Document processing API for developers.', url: 'https://mindee.com/', image: 'https://picsum.photos/seed/mindee/600/400', dataAiHint: 'ocr api', pricing: 'Freemium' },
            { name: 'FormX.ai', description: 'AI-powered data extraction from documents.', url: 'https://www.formx.ai/', image: 'https://picsum.photos/seed/formx-ai/600/400', dataAiHint: 'data extraction', pricing: 'Paid' },
            { name: 'Hypatos', description: 'Deep learning for document processing.', url: 'https://hypatos.ai/', image: 'https://picsum.photos/seed/hypatos/600/400', dataAiHint: 'deep learning', pricing: 'Paid' },
            { name: 'Konfuzio', description: 'Intelligent Document Processing platform.', url: 'https://konfuzio.com/', image: 'https://picsum.photos/seed/konfuzio/600/400', dataAiHint: 'document ai', pricing: 'Paid' },
            { name: 'Extracta AI', description: 'AI-powered document data extraction.', url: 'https://www.extracta.ai/', image: 'https://picsum.photos/seed/extracta-ai/600/400', dataAiHint: 'invoice processing', pricing: 'Paid' },
            { name: 'Botpress', description: 'The building blocks for building chatbots.', url: 'https://botpress.com/', image: 'https://picsum.photos/seed/botpress/600/400', dataAiHint: 'chatbot builder', pricing: 'Freemium' },
            { name: 'Voiceflow', description: 'Design, prototype, and launch voice & chat assistants.', url: 'https://www.voiceflow.com/', image: 'https://picsum.photos/seed/voiceflow/600/400', dataAiHint: 'conversation design', pricing: 'Freemium' },
            { name: 'Dialogflow CX', description: 'Build natural and rich conversational experiences.', url: 'https://cloud.google.com/dialogflow', image: 'https://picsum.photos/seed/dialogflow-cx/600/400', dataAiHint: 'google chatbot', pricing: 'Paid' },
            { name: 'Wit.ai Flows', description: 'Natural language for developers.', url: 'https://wit.ai/', image: 'https://picsum.photos/seed/wit-ai-flows/600/400', dataAiHint: 'nlp api', pricing: 'Free' },
            { name: 'Rasa Workflows', description: 'The open source conversational AI platform.', url: 'https://rasa.com/', image: 'https://picsum.photos/seed/rasa-workflows/600/400', dataAiHint: 'open source chatbot', pricing: 'Free' },
            { name: 'Tiledesk', description: 'Free Live Chat with Chatbots.', url: 'https://tiledesk.com/', image: 'https://picsum.photos/seed/tiledesk/600/400', dataAiHint: 'live chat', pricing: 'Freemium' },
            { name: 'Landbot', description: 'Create conversational experiences.', url: 'https://landbot.io/', image: 'https://picsum.photos/seed/landbot/600/400', dataAiHint: 'chatbot marketing', pricing: 'Freemium' },
            { name: 'Tars', description: 'Create chatbot landing pages.', url: 'https://hellotars.com/', image: 'https://picsum.photos/seed/tars/600/400', dataAiHint: 'chatbot landing', pricing: 'Paid' },
            { name: 'Chatfuel', description: 'Chatbot platform for Facebook Messenger.', url: 'https://chatfuel.com/', image: 'https://picsum.photos/seed/chatfuel/600/400', dataAiHint: 'messenger bot', pricing: 'Freemium' },
            { name: 'ManyChat', description: 'Automate interactive conversations in Instagram Direct Messages, Facebook Messenger, and SMS.', url: 'https://manychat.com/', image: 'https://picsum.photos/seed/manychat/600/400', dataAiHint: 'chat marketing', pricing: 'Freemium' },
            { name: 'Engati', description: 'Build chatbots with our no-code platform.', url: 'https://www.engati.com/', image: 'https://picsum.photos/seed/engati/600/400', dataAiHint: 'chatbot platform', pricing: 'Freemium' },
            { name: 'Botsify', description: 'Create automated chatbots online.', url: 'https://botsify.com/', image: 'https://picsum.photos/seed/botsify/600/400', dataAiHint: 'customer support', pricing: 'Paid' },
            { name: 'FlowXO', description: 'Create a chatbot with our bot building platform.', url: 'https://flowxo.com/', image: 'https://picsum.photos/seed/flowxo/600/400', dataAiHint: 'bot builder', pricing: 'Freemium' },
            { name: 'Smartloop', description: 'Build, train, and deploy chatbots on any platform.', url: 'https://smartloop.ai/', image: 'https://picsum.photos/seed/smartloop/600/400', dataAiHint: 'ai chatbot', pricing: 'Paid' },
            { name: 'Morph.ai', description: 'Chatbot marketing platform.', url: 'https://www.morph.ai/', image: 'https://picsum.photos/seed/morph-ai/600/400', dataAiHint: 'lead generation', pricing: 'Paid' },
            { name: 'Botmakers', description: 'Marketplace to hire chatbot developers.', url: 'https://botmakers.com/', image: 'https://picsum.photos/seed/botmakers/600/400', dataAiHint: 'chatbot developers', pricing: 'Paid' },
            { name: 'Aivo', description: 'AI-powered customer service solutions.', url: 'https://aivo.co/', image: 'https://picsum.photos/seed/aivo/600/400', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'Zendesk Automations', description: 'Customer service software & sales CRM.', url: 'https://www.zendesk.com/', image: 'https://picsum.photos/seed/zendesk-automations/600/400', dataAiHint: 'support automation', pricing: 'Paid' },
            { name: 'Intercom Workflows', description: 'The Customer Communications Platform.', url: 'https://www.intercom.com/', image: 'https://picsum.photos/seed/intercom-workflows/600/400', dataAiHint: 'customer support', pricing: 'Paid' },
            { name: 'Freshchat Workflows', description: 'Modern messaging software for sales and customer engagement teams.', url: 'https://www.freshworks.com/live-chat-software/', image: 'https://picsum.photos/seed/freshchat-workflows/600/400', dataAiHint: 'messaging software', pricing: 'Freemium' },
            { name: 'Crisp Automations', description: 'All-in-one multichannel customer support platform.', url: 'https://crisp.chat/', image: 'https://picsum.photos/seed/crisp-automations/600/400', dataAiHint: 'multichannel support', pricing: 'Freemium' },
            { name: 'Gorgias Automations', description: 'Helpdesk for Ecommerce stores.', url: 'https://www.gorgias.com/', image: 'https://picsum.photos/seed/gorgias-automations/600/400', dataAiHint: 'ecommerce helpdesk', pricing: 'Paid' },
            { name: 'HelpScout Workflows', description: 'A delightfully simple customer service platform.', url: 'https://www.helpscout.com/', image: 'https://picsum.photos/seed/helpscout-workflows/600/400', dataAiHint: 'customer service', pricing: 'Paid' },
            { name: 'LiveChat Automations', description: 'Complete customer service platform.', url: 'https://www.livechat.com/', image: 'https://picsum.photos/seed/livechat-automations/600/400', dataAiHint: 'live chat', pricing: 'Paid' },
            { name: 'Front Automations', description: 'The customer communication hub.', url: 'https://front.com/', image: 'https://picsum.photos/seed/front-automations/600/400', dataAiHint: 'shared inbox', pricing: 'Paid' },
            { name: 'User.com Automations', description: 'A single platform for sales, marketing, and support teams.', url: 'https://user.com/', image: 'https://picsum.photos/seed/user-com-automations/600/400', dataAiHint: 'marketing automation', pricing: 'Paid' },
            { name: 'Customer.io Journeys', description: 'Automated messaging platform.', url: 'https://customer.io/', image: 'https://picsum.photos/seed/customer-io-journeys/600/400', dataAiHint: 'messaging platform', pricing: 'Paid' },
            { name: 'HubSpot Workflows', description: 'Powerful marketing automation software.', url: 'https://www.hubspot.com/products/marketing/marketing-automation', image: 'https://picsum.photos/seed/hubspot-workflows/600/400', dataAiHint: 'marketing automation', pricing: 'Paid' },
            { name: 'Salesforce Flow', description: 'Build process automation with clicks, not code.', url: 'https://www.salesforce.com/products/platform/products/flow/', image: 'https://picsum.photos/seed/salesforce-flow/600/400', dataAiHint: 'process builder', pricing: 'Paid' },
            { name: 'Zoho Flow', description: 'Integration platform that helps you connect your apps.', url: 'https://www.zoho.com/flow/', image: 'https://picsum.photos/seed/zoho-flow/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Zoho Creator Workflows', description: 'Low-code application development platform.', url: 'https://www.zoho.com/creator/', image: 'https://picsum.photos/seed/zoho-creator-workflows/600/400', dataAiHint: 'low-code apps', pricing: 'Freemium' },
            { name: 'Freshworks Automations', description: 'Delight your customers and employees with modern and easy-to-use software.', url: 'https://www.freshworks.com/', image: 'https://picsum.photos/seed/freshworks-automations/600/400', dataAiHint: 'business software', pricing: 'Paid' },
            { name: 'Odoo Automations', description: 'Open source suite of business apps.', url: 'https://www.odoo.com/', image: 'https://picsum.photos/seed/odoo-automations/600/400', dataAiHint: 'erp software', pricing: 'Freemium' },
            { name: 'ServiceNow Workflows', description: 'Deliver digital workflows that create great experiences.', url: 'https://www.servicenow.com/', image: 'https://picsum.photos/seed/servicenow-workflows/600/400', dataAiHint: 'digital workflows', pricing: 'Paid' },
            { name: 'Pipedrive Automations', description: 'Sales CRM & pipeline management software.', url: 'https://www.pipedrive.com/en/features/workflow-automation', image: 'https://picsum.photos/seed/pipedrive-automations/600/400', dataAiHint: 'sales crm', pricing: 'Paid' },
            { name: 'Salesflare Flows', description: 'The intelligent sales CRM that fills out itself.', url: 'https://salesflare.com/', image: 'https://picsum.photos/seed/salesflare-flows/600/400', dataAiHint: 'intelligent crm', pricing: 'Paid' },
            { name: 'Close CRM Automations', description: 'The sales CRM for startups and SMBs.', url: 'https://www.close.com/', image: 'https://picsum.photos/seed/close-crm-automations/600/400', dataAiHint: 'smb crm', pricing: 'Paid' },
            { name: 'Copper CRM Automations', description: 'CRM for Google Workspace.', url: 'https://www.copper.com/', image: 'https://picsum.photos/seed/copper-crm-automations/600/400', dataAiHint: 'google crm', pricing: 'Paid' },
            { name: 'Nutshell Automations', description: 'The CRM that works for you.', url: 'https://www.nutshell.com/', image: 'https://picsum.photos/seed/nutshell-automations/600/400', dataAiHint: 'small business crm', pricing: 'Paid' },
            { name: 'ActiveCampaign Automations', description: 'Customer experience automation platform.', url: 'https://www.activecampaign.com/', image: 'https://picsum.photos/seed/activecampaign-automations/600/400', dataAiHint: 'email marketing', pricing: 'Paid' },
            { name: 'Mailchimp Automations', description: 'Marketing automation and email marketing service.', url: 'https://mailchimp.com/features/marketing-automation/', image: 'https://picsum.photos/seed/mailchimp-automations/600/400', dataAiHint: 'email automation', pricing: 'Freemium' },
            { name: 'Sendinblue Automations', description: 'Now Brevo. All your digital marketing tools in one place.', url: 'https://www.brevo.com/features/automation/', image: 'https://picsum.photos/seed/sendinblue-automations/600/400', dataAiHint: 'marketing platform', pricing: 'Freemium' },
            { name: 'GetResponse Flows', description: 'Powerful, simplified tool to send emails, create pages, and automate your marketing.', url: 'https://www.getresponse.com/', image: 'https://picsum.photos/seed/getresponse-flows/600/400', dataAiHint: 'marketing software', pricing: 'Freemium' },
            { name: 'ConvertKit Automations', description: 'The creator marketing platform.', url: 'https://convertkit.com/', image: 'https://picsum.photos/seed/convertkit-automations/600/400', dataAiHint: 'creator marketing', pricing: 'Freemium' },
            { name: 'Drip Automation', description: 'Marketing automation for Ecommerce.', url: 'https://www.drip.com/', image: 'https://picsum.photos/seed/drip-automation/600/400', dataAiHint: 'ecommerce crm', pricing: 'Paid' },
            { name: 'Brevo Automations', description: 'The platform for all your digital marketing needs.', url: 'https://www.brevo.com/', image: 'https://picsum.photos/seed/brevo-automations/600/400', dataAiHint: 'sales platform', pricing: 'Freemium' },
            { name: 'Omnisend Flows', description: 'Email & SMS marketing automation for Ecommerce.', url: 'https://www.omnisend.com/', image: 'https://picsum.photos/seed/omnisend-flows/600/400', dataAiHint: 'ecommerce marketing', pricing: 'Freemium' },
            { name: 'MoEngage Journeys', description: 'Customer engagement platform.', url: 'https://www.moengage.com/', image: 'https://picsum.photos/seed/moengage-journeys/600/400', dataAiHint: 'customer engagement', pricing: 'Paid' },
            { name: 'CleverTap Automations', description: 'The all-in-one customer engagement platform.', url: 'https://clevertap.com/', image: 'https://picsum.photos/seed/clevertap-automations/600/400', dataAiHint: 'retention platform', pricing: 'Paid' },
            { name: 'Braze Canvas', description: 'Customer engagement platform.', url: 'https://www.braze.com/', image: 'https://picsum.photos/seed/braze-canvas/600/400', dataAiHint: 'customer messaging', pricing: 'Paid' },
            { name: 'Cflow', description: 'No-code workflow automation software.', url: 'https://cflow.com/', image: 'https://picsum.photos/seed/cflow/600/400', dataAiHint: 'bpm software', pricing: 'Paid' },
            { name: 'Quixy', description: 'No-code application development platform.', url: 'https://quixy.com/', image: 'https://picsum.photos/seed/quixy/600/400', dataAiHint: 'no-code platform', pricing: 'Paid' },
            { name: 'Creatio', description: 'A global vendor of one platform to automate workflows and CRM.', url: 'https://www.creatio.com/', image: 'https://picsum.photos/seed/creatio/600/400', dataAiHint: 'low-code crm', pricing: 'Paid' },
            { name: 'Pega Systems', description: 'Build for change.', url: 'https://www.pega.com/', image: 'https://picsum.photos/seed/pega-systems/600/400', dataAiHint: 'digital transformation', pricing: 'Paid' },
            { name: 'Bizagi', description: 'Low-code process automation platform.', url: 'https://www.bizagi.com/', image: 'https://picsum.photos/seed/bizagi/600/400', dataAiHint: 'intelligent automation', pricing: 'Paid' },
            { name: 'Joget', description: 'Open source no-code/low-code platform.', url: 'https://www.joget.org/', image: 'https://picsum.photos/seed/joget/600/400', dataAiHint: 'open source', pricing: 'Freemium' },
            { name: 'BonitaSoft', description: 'Digital process automation platform.', url: 'https://www.bonitasoft.com/', image: 'https://picsum.photos/seed/bonitasoft/600/400', dataAiHint: 'open source bpm', pricing: 'Freemium' },
            { name: 'Weaviate Workflows', description: 'Open-source vector database.', url: 'https://weaviate.io/', image: 'https://picsum.photos/seed/weaviate-workflows/600/400', dataAiHint: 'vector database', pricing: 'Free' },
            { name: 'Metabase Automations', description: 'The easy, open source way for everyone in your company to ask questions and learn from data.', url: 'https://www.metabase.com/', image: 'https://picsum.photos/seed/metabase-automations/600/400', dataAiHint: 'business intelligence', pricing: 'Freemium' },
            { name: 'PocketBase Automations', description: 'Open source backend in 1 file.', url: 'https://pocketbase.io/', image: 'https://picsum.photos/seed/pocketbase-automations/600/400', dataAiHint: 'open source backend', pricing: 'Free' },
            { name: 'AutoFlow', description: 'Automate your workflows with AI.', url: 'https://autoflow.me/', image: 'https://picsum.photos/seed/autoflow/600/400', dataAiHint: 'ai workflow', pricing: 'Paid' },
            { name: 'TimeHero', description: 'AI-powered work & project management.', url: 'https://timehero.com/', image: 'https://picsum.photos/seed/timehero/600/400', dataAiHint: 'project management', pricing: 'Paid' },
            { name: 'Clockwise AI', description: 'The smart calendar assistant.', url: 'https://www.getclockwise.com/', image: 'https://picsum.photos/seed/clockwise-ai/600/400', dataAiHint: 'calendar assistant', pricing: 'Freemium' },
            { name: 'Sunsama Automations', description: 'Daily planner for calm work.', url: 'https://www.sunsama.com/', image: 'https://picsum.photos/seed/sunsama-automations/600/400', dataAiHint: 'daily planner', pricing: 'Paid' },
            { name: 'Height Automations', description: 'The project management tool for everyone.', url: 'https://height.app/', image: 'https://picsum.photos/seed/height-automations/600/400', dataAiHint: 'project tool', pricing: 'Freemium' },
            { name: 'Linear Automations', description: 'The issue tracker you\'ll enjoy using.', url: 'https://linear.app/', image: 'https://picsum.photos/seed/linear-automations/600/400', dataAiHint: 'issue tracker', pricing: 'Freemium' },
            { name: 'Fibery Automations', description: 'The work management platform.', url: 'https://fibery.io/', image: 'https://picsum.photos/seed/fibery-automations/600/400', dataAiHint: 'work platform', pricing: 'Freemium' },
            { name: 'Jira Automation', description: 'Powerful automation engine for Jira.', url: 'https://www.atlassian.com/software/jira/features/automation', image: 'https://picsum.photos/seed/jira-automation/600/400', dataAiHint: 'jira rules', pricing: 'Freemium' },
            { name: 'Confluence Automation', description: 'Automate your Confluence spaces.', url: 'https://marketplace.atlassian.com/apps/1219602/automation-for-confluence', image: 'https://picsum.photos/seed/confluence-automation/600/400', dataAiHint: 'confluence rules', pricing: 'Paid' },
            { name: 'GitHub Actions', description: 'Automate your workflow from idea to production.', url: 'https://github.com/features/actions', image: 'https://picsum.photos/seed/github-actions/600/400', dataAiHint: 'ci cd', pricing: 'Freemium' },
            { name: 'GitLab CI', description: 'Continuous Integration and Delivery.', url: 'https://about.gitlab.com/stages-devops-lifecycle/continuous-integration/', image: 'https://picsum.photos/seed/gitlab-ci/600/400', dataAiHint: 'devops platform', pricing: 'Freemium' },
            { name: 'CircleCI', description: 'The leading platform for CI/CD.', url: 'https://circleci.com/', image: 'https://picsum.photos/seed/circleci/600/400', dataAiHint: 'continuous integration', pricing: 'Freemium' },
            { name: 'Bitrise', description: 'Mobile Continuous Integration and Delivery.', url: 'https://www.bitrise.io/', image: 'https://picsum.photos/seed/bitrise/600/400', dataAiHint: 'mobile ci', pricing: 'Freemium' },
            { name: 'Buddy Works', description: 'The CI/CD platform for developers.', url: 'https://buddy.works/', image: 'https://picsum.photos/seed/buddy-works/600/400', dataAiHint: 'devops automation', pricing: 'Freemium' },
            { name: 'TravisCI', description: 'Test and deploy your code with confidence.', url: 'https://www.travis-ci.com/', image: 'https://picsum.photos/seed/travisci/600/400', dataAiHint: 'ci service', pricing: 'Freemium' },
            { name: 'Buildkite', description: 'CI/CD platform for all your software projects.', url: 'https://buildkite.com/', image: 'https://picsum.photos/seed/buildkite/600/400', dataAiHint: 'hybrid ci', pricing: 'Paid' },
            { name: 'Semaphore CI', description: 'A fast and reliable CI/CD platform.', url: 'https://semaphoreci.com/', image: 'https://picsum.photos/seed/semaphore-ci/600/400', dataAiHint: 'continuous delivery', pricing: 'Paid' },
            { name: 'Drone CI', description: 'A self-service Continuous Integration platform.', url: 'https://www.drone.io/', image: 'https://picsum.photos/seed/drone-ci/600/400', dataAiHint: 'container native', pricing: 'Free' },
            { name: 'Octolis', description: 'The easiest way to sync data between your tools.', url: 'https://www.octolis.com/', image: 'https://picsum.photos/seed/octolis/600/400', dataAiHint: 'data sync', pricing: 'Paid' },
            { name: 'Kubedash', description: 'A dashboard for Kubernetes.', url: 'https://github.com/indeedeng/k8dash', image: 'https://picsum.photos/seed/kubedash/600/400', dataAiHint: 'kubernetes dashboard', pricing: 'Free' },
            { name: 'Quix', description: 'The streaming data platform.', url: 'https://quix.io/', image: 'https://picsum.photos/seed/quix/600/400', dataAiHint: 'streaming data', pricing: 'Paid' },
            { name: 'Actowiz AI', description: 'AI-powered data extraction.', url: 'https://www.actowiz.com/', image: 'https://picsum.photos/seed/actowiz-ai/600/400', dataAiHint: 'web scraping', pricing: 'Paid' },
            { name: 'Mindflow', description: 'Cybersecurity automation.', url: 'https://www.mindflow.io/', image: 'https://picsum.photos/seed/mindflow/600/400', dataAiHint: 'soar platform', pricing: 'Paid' },
            { name: 'API Fuse', description: 'Embedded iPaaS for SaaS companies.', url: 'https://apifuse.com/', image: 'https://picsum.photos/seed/api-fuse/600/400', dataAiHint: 'embedded integrations', pricing: 'Paid' },
            { name: 'Connecteam', description: 'The all-in-one employee app.', url: 'https://connecteam.com/', image: 'https://picsum.photos/seed/connecteam/600/400', dataAiHint: 'employee management', pricing: 'Freemium' },
            { name: 'Routinize', description: 'Scheduling and booking automation.', url: 'https://www.routinize.com/', image: 'https://picsum.photos/seed/routinize/600/400', dataAiHint: 'appointment scheduling', pricing: 'Paid' },
            { name: 'Focal', description: 'Procurement automation platform.', url: 'https://www.focal.so/', image: 'https://picsum.photos/seed/focal/600/400', dataAiHint: 'procurement', pricing: 'Paid' },
            { name: 'Timely AI', description: 'Automatic time tracking software.', url: 'https://timelyapp.com/', image: 'https://picsum.photos/seed/timely-ai/600/400', dataAiHint: 'time tracking', pricing: 'Paid' },
            { name: 'Wized Automations', description: 'Build powerful web applications visually.', url: 'https://www.wized.com/', image: 'https://picsum.photos/seed/wized-automations/600/400', dataAiHint: 'web app builder', pricing: 'Paid' },
            { name: 'Tilda Automations', description: 'Create beautiful websites without any code.', url: 'https://tilda.cc/', image: 'https://picsum.photos/seed/tilda-automations/600/400', dataAiHint: 'website builder', pricing: 'Freemium' },
            { name: 'Wizeline', description: 'Intelligent product strategy and roadmapping.', url: 'https://www.wizeline.com/', image: 'https://picsum.photos/seed/wizeline/600/400', dataAiHint: 'product strategy', pricing: 'Paid' },
            { name: 'Catalytic', description: 'No-code workflow automation platform.', url: 'https://catalytic.com/', image: 'https://picsum.photos/seed/catalytic/600/400', dataAiHint: 'process automation', pricing: 'Paid' },
            { name: 'Tonkean', description: 'The OS for Business Operations.', url: 'https://tonkean.com/', image: 'https://picsum.photos/seed/tonkean/600/400', dataAiHint: 'process orchestration', pricing: 'Paid' },
            { name: 'OpenBots', description: 'Enterprise RPA, free for everyone.', url: 'https://openbots.ai/', image: 'https://picsum.photos/seed/openbots/600/400', dataAiHint: 'free rpa', pricing: 'Free' },
            { name: 'RPA Genie', description: 'RPA and AI platform.', url: 'https://rpagenie.com/', image: 'https://picsum.photos/seed/rpa-genie/600/400', dataAiHint: 'rpa platform', pricing: 'Paid' },
            { name: 'Kompose', description: 'A tool to translate Docker Compose to Kubernetes.', url: 'https://kompose.io/', image: 'https://picsum.photos/seed/kompose/600/400', dataAiHint: 'docker kubernetes', pricing: 'Free' },
            { name: 'Botsync', description: 'Heavy-duty automation for logistics.', url: 'https://www.botsync.co/', image: 'https://picsum.photos/seed/botsync/600/400', dataAiHint: 'logistics automation', pricing: 'Paid' },
            { name: 'Extractify AI', description: 'AI data extraction from documents.', url: 'https://www.extractify.ai/', image: 'https://picsum.photos/seed/extractify-ai/600/400', dataAiHint: 'document extraction', pricing: 'Paid' },
            { name: 'FormSwift Automations', description: 'Create and edit legal documents & agreements.', url: 'https://formswift.com/', image: 'https://picsum.photos/seed/formswift-automations/600/400', dataAiHint: 'document automation', pricing: 'Paid' },
            { name: 'Veryfi OCR Workflows', description: 'Real-time data extraction API for documents.', url: 'https://www.veryfi.com/', image: 'https://picsum.photos/seed/veryfi-ocr-workflows/600/400', dataAiHint: 'ocr api', pricing: 'Paid' },
            { name: 'DocuPhase', description: 'Browser-based document management & process automation software.', url: 'https://www.docuphase.com/', image: 'https://picsum.photos/seed/docuphase/600/400', dataAiHint: 'enterprise automation', pricing: 'Paid' },
            { name: 'Laserfiche Automation', description: 'Intelligent content management and business process automation.', url: 'https://www.laserfiche.com/', image: 'https://picsum.photos/seed/laserfiche-automation/600/400', dataAiHint: 'content management', pricing: 'Paid' },
            { name: 'OnTask Automation', description: 'Workflow automation and eSignature platform.', url: 'https://www.ontask.io/', image: 'https://picsum.photos/seed/ontask-automation/600/400', dataAiHint: 'esignature workflow', pricing: 'Paid' },
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
            { name: 'Tabnine', description: 'AI assistant for software developers.', url: 'https://www.tabnine.com/', image: 'https://picsum.photos/seed/tabnine-prod/600/400', dataAiHint: 'code completion', pricing: 'Freemium' },
            { name: 'Docker', description: 'Securely build, share and run any application, anywhere.', url: 'https://www.docker.com/', image: 'https://picsum.photos/seed/docker-prod/600/400', dataAiHint: 'containerization', pricing: 'Freemium' },
            { name: 'Warp', description: 'A blazingly fast, Rust-based terminal.', url: 'https://www.warp.dev/', image: 'https://picsum.photos/seed/warp/600/400', dataAiHint: 'rust terminal', pricing: 'Free' },
            { name: 'Sentry', description: 'Application monitoring and error tracking software.', url: 'https://sentry.io/', image: 'https://picsum.photos/seed/sentry/600/400', dataAiHint: 'error tracking', pricing: 'Freemium' },
            { name: 'Replit', description: 'A powerful and simple online IDE, compiler, and interpreter.', url: 'https://replit.com/', image: 'https://picsum.photos/seed/replit/600/400', dataAiHint: 'online ide', pricing: 'Freemium' },
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
            { name: 'Hemingway App', description: 'Makes your writing bold and clear.', url: 'https://hemingwayapp.com/', image: 'https://picsum.photos/seed/hemingway-prod/600/400', dataAiHint: 'writing editor', pricing: 'Free' },
            { name: 'QuillBot', description: 'AI-powered paraphrasing tool.', url: 'https://quillbot.com/', image: 'https://picsum.photos/seed/quillbot-prod/600/400', dataAiHint: 'paraphraser', pricing: 'Freemium' },
            { name: 'Scrivener', description: 'The go-to app for writers of all kinds.', url: 'https://www.literatureandlatte.com/scrivener/overview', image: 'https://picsum.photos/seed/scrivener/600/400', dataAiHint: 'writing software', pricing: 'Paid' },
            { name: 'Ulysses', description: 'The ultimate writing app for Mac, iPad, and iPhone.', url: 'https://ulysses.app/', image: 'https://picsum.photos/seed/ulysses/600/400', dataAiHint: 'apple writing', pricing: 'Paid' },
            { name: 'Rytr', description: 'A better, 10x faster way to write.', url: 'https://rytr.me/', image: 'https://picsum.photos/seed/rytr/600/400', dataAiHint: 'ai content', pricing: 'Freemium' },
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
            { name: 'FocusMe', description: 'A powerful app and website blocker for Windows, Mac & Android.', url: 'https://focusme.com/', image: 'https://picsum.photos/seed/focusme-prod/600/400', dataAiHint: 'app blocker', pricing: 'Paid' },
            { name: 'SelfControl', description: 'A free Mac application to help you avoid distracting websites.', url: 'https://selfcontrolapp.com/', image: 'https://picsum.photos/seed/selfcontrol-prod/600/400', dataAiHint: 'mac focus', pricing: 'Free' },
            { name: 'LeechBlock NG', description: 'A simple productivity tool for Firefox and Chrome.', url: 'https://www.proginosko.com/leechblock/', image: 'https://picsum.photos/seed/leechblock/600/400', dataAiHint: 'browser extension', pricing: 'Free' },
            { name: 'StayFocusd', description: 'A productivity extension for Google Chrome that helps you stay focused.', url: 'https://www.stayfocusd.com/', image: 'https://picsum.photos/seed/stayfocusd/600/400', dataAiHint: 'chrome focus', pricing: 'Free' },
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
          { name: 'Personal Capital', description: 'The smart way to track and manage your financial life.', url: 'https://www.personalcapital.com/', image: 'https://picsum.photos/seed/personalcap-prod/600/400', dataAiHint: 'net worth', pricing: 'Free' },
          { name: 'QuickBooks', description: 'Smart, simple accounting software.', url: 'https://quickbooks.intuit.com/', image: 'https://picsum.photos/seed/quickbooks-fin/600/400', dataAiHint: 'small business finance', pricing: 'Paid' },
          { name: 'Expensify', description: 'Expense reports that don\'t suck!', url: 'https://www.expensify.com/', image: 'https://picsum.photos/seed/expensify/600/400', dataAiHint: 'receipt scanning', pricing: 'Freemium' },
        ]
    },
    {
        title: "Team & Business Management",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'HubSpot', description: 'A full platform of marketing, sales, customer service, and CRM software.', url: 'https://www.hubspot.com/', image: 'https://picsum.photos/seed/hubspot-biz-prod/600/400', dataAiHint: 'crm platform', pricing: 'Freemium' },
          { name: 'BambooHR', description: 'HR software with heart.', url: 'https://www.bamboohr.com/', image: 'https://picsum.photos/seed/bamboohr-biz-prod/600/400', dataAiHint: 'hr tools', pricing: 'Paid' },
          { name: 'Time Doctor', description: 'Productivity monitoring and time tracking software.', url: 'https://www.timedoctor.com/', image: 'https://picsum.photos/seed/timedoctor-prod/600/400', dataAiHint: 'employee monitoring', pricing: 'Paid' },
          { name: 'Gusto', description: 'Payroll, benefits, and HR for modern teams.', url: 'https://gusto.com/', image: 'https://picsum.photos/seed/gusto-team-prod/600/400', dataAiHint: 'team payroll', pricing: 'Paid' },
          { name: 'Salesforce', description: 'The world\'s #1 customer relationship management (CRM) platform.', url: 'https://www.salesforce.com/', image: 'https://picsum.photos/seed/salesforce/600/400', dataAiHint: 'crm cloud', pricing: 'Paid' },
          { name: 'Zoho One', description: 'A single, integrated system to transform your business.', url: 'https://www.zoho.com/one/', image: 'https://picsum.photos/seed/zohoone/600/400', dataAiHint: 'business os', pricing: 'Paid' },
          { name: '15Five', description: 'Continuous performance management software.', url: 'https://www.15five.com/', image: 'https://picsum.photos/seed/15five/600/400', dataAiHint: 'employee engagement', pricing: 'Paid' },
        ]
    },
    {
        title: "Learning & Skill Productivity",
        icon: <GraduationCap className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'Coursera', description: 'Build skills with courses, certificates, and degrees online.', url: 'https://www.coursera.org/', image: 'https://picsum.photos/seed/coursera-prod/600/400', dataAiHint: 'online courses', pricing: 'Freemium' },
          { name: 'Anki', description: 'Powerful, intelligent flashcards.', url: 'https://apps.ankiweb.net/', image: 'https://picsum.photos/seed/anki-prod/600/400', dataAiHint: 'flashcards app', pricing: 'Free' },
          { name: 'Brilliant.org', description: 'Build quantitative skills in math, science, and computer science.', url: 'https://brilliant.org/', image: 'https://picsum.photos/seed/brilliant-prod/600/400', dataAiHint: 'mind training', pricing: 'Freemium' },
          { name: 'Khan Academy', description: 'Free online courses, lessons & practice.', url: 'https://www.khanacademy.org/', image: 'https://picsum.photos/seed/khan-prod/600/400', dataAiHint: 'free education', pricing: 'Free' },
          { name: 'Duolingo', description: 'Learn a language for free. Forever.', url: 'https://www.duolingo.com/', image: 'https://picsum.photos/seed/duolingo-prod/600/400', dataAiHint: 'language learning', pricing: 'Freemium' },
          { name: 'Skillshare', description: 'Creative classes online. For creators, by creators.', url: 'https://www.skillshare.com/', image: 'https://picsum.photos/seed/skillshare/600/400', dataAiHint: 'creative learning', pricing: 'Paid' },
          { name: 'Udemy', description: 'A global marketplace for learning and instruction.', url: 'https://www.udemy.com/', image: 'https://picsum.photos/seed/udemy/600/400', dataAiHint: 'online marketplace', pricing: 'Paid' },
          { name: 'edX', description: 'Access 2000 free online courses from 140 leading institutions worldwide.', url: 'https://www.edx.org/', image: 'https://picsum.photos/seed/edx/600/400', dataAiHint: 'university courses', pricing: 'Freemium' },
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
          { name: 'BetterTouchTool', description: 'Customize various input devices on your Mac.', url: 'https://folivora.ai/', image: 'https://picsum.photos/seed/btt-prod/600/400', dataAiHint: 'mac customization', pricing: 'Paid' },
          { name: 'Hazel', description: 'Automated organization for your Mac.', url: 'https://www.noodlesoft.com/', image: 'https://picsum.photos/seed/hazel/600/400', dataAiHint: 'file automation', pricing: 'Paid' },
          { name: 'DropIt', description: 'A tiny, flexible tool to automate sorting and filing.', url: 'http://www.dropitproject.com/', image: 'https://picsum.photos/seed/dropit/600/400', dataAiHint: 'windows automation', pricing: 'Free' },
          { name: 'Ditto', description: 'An extension to the standard windows clipboard.', url: 'https://ditto-cp.sourceforge.io/', image: 'https://picsum.photos/seed/ditto/600/400', dataAiHint: 'clipboard manager', pricing: 'Free' },
        ]
    },
    {
        title: "AI Productivity Tools",
        icon: <Sparkles className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'ChatGPT', description: 'Optimizing Language Models for Dialogue.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-prod/600/400', dataAiHint: 'ai assistant', pricing: 'Freemium' },
          { name: 'Zapier', description: 'AI-powered automation.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-ai-prod/600/400', dataAiHint: 'ai automation', pricing: 'Freemium' },
          { name: 'Perplexity AI', description: 'The answer engine.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-prod/600/400', dataAiHint: 'ai research', pricing: 'Freemium' },
          { name: 'Google Gemini', description: 'Your creative and helpful collaborator.', url: 'https://gemini.google.com/', image: 'https://picsum.photos/seed/bard-prod/600/400', dataAiHint: 'ai productivity bot', pricing: 'Free' },
          { name: 'Scribe', description: 'Automatically create step-by-step guides.', url: 'https://scribehow.com/', image: 'https://picsum.photos/seed/scribe-prod/600/400', dataAiHint: 'documentation ai', pricing: 'Freemium' },
          { name: 'Motion', description: 'Uses AI to plan your day, schedule meetings, and build the perfect to-do list.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/motion-prod/600/400', dataAiHint: 'ai calendar', pricing: 'Paid' },
          { name: 'Mem', description: 'The self-organizing workspace.', url: 'https://mem.ai/', image: 'https://picsum.photos/seed/memai/600/400', dataAiHint: 'ai notes', pricing: 'Freemium' },
          { name: 'x.ai', description: 'An AI scheduling assistant that books meetings for you.', url: 'https://x.ai/', image: 'https://picsum.photos/seed/xai/600/400', dataAiHint: 'ai scheduler', pricing: 'Paid' },
          { name: 'Fireflies.ai', description: 'AI assistant for your meetings.', url: 'https://fireflies.ai/', image: 'https://picsum.photos/seed/fireflies/600/400', dataAiHint: 'meeting notes', pricing: 'Freemium' },
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

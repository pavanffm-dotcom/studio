
'use client';

import React from 'react';
import { 
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
    Sparkles, Search, BookCopy, Laptop
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

export const productivityToolData: ToolCategory[] = [
    {
        title: "AI Personal Assistants",
        icon: <Bot className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Assistant', description: 'Your personal Google, always ready to help.', url: 'https://assistant.google.com/', image: 'https://picsum.photos/seed/google-assistant/600/400', dataAiHint: 'voice assistant', pricing: 'Free' },
            { name: 'Amazon Alexa', description: 'The voice service that powers Echo.', url: 'https://developer.amazon.com/alexa', image: 'https://picsum.photos/seed/alexa-assistant/600/400', dataAiHint: 'smart speaker', pricing: 'Free' },
            { name: 'Siri', description: 'Apple\'s intelligent assistant.', url: 'https://www.apple.com/siri/', image: 'https://picsum.photos/seed/siri-assistant/600/400', dataAiHint: 'apple assistant', pricing: 'Free' },
            { name: 'Microsoft Copilot', description: 'Your everyday AI companion.', url: 'https://copilot.microsoft.com/', image: 'https://picsum.photos/seed/mscopilot-pa/600/400', dataAiHint: 'ai companion', pricing: 'Freemium' },
            { name: 'Hound', description: 'A faster and smarter voice assistant.', url: 'https://soundhound.com/hound/', image: 'https://picsum.photos/seed/hound/600/400', dataAiHint: 'natural language', pricing: 'Free' },
        ]
    },
    {
        title: "AI Task Management Tools",
        icon: <ListChecks className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Todoist', description: 'Organize your work and life.', url: 'https://todoist.com/', image: 'https://picsum.photos/seed/todoist-task/600/400', dataAiHint: 'task manager', pricing: 'Freemium' },
            { name: 'TickTick', description: 'To-do list, calendar, and habit tracker.', url: 'https://ticktick.com/', image: 'https://picsum.photos/seed/ticktick-task/600/400', dataAiHint: 'habit tracker', pricing: 'Freemium' },
            { name: 'Any.do', description: 'To-do list, calendar, planner and reminders.', url: 'https://www.any.do/', image: 'https://picsum.photos/seed/anydo-task/600/400', dataAiHint: 'daily planner', pricing: 'Freemium' },
            { name: 'Microsoft To Do', description: 'Your daily planner app.', url: 'https://todo.microsoft.com/', image: 'https://picsum.photos/seed/mstodo-task/600/400', dataAiHint: 'task list', pricing: 'Free' },
            { name: 'Things', description: 'A delightful and easy to use task manager.', url: 'https://culturedcode.com/things/', image: 'https://picsum.photos/seed/things-task/600/400', dataAiHint: 'mac tasks', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Project Management Tools",
        icon: <ClipboardList className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Motion', description: 'Uses AI to intelligently plan your day.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/motion-pm-prod/600/400', dataAiHint: 'ai planner', pricing: 'Paid' },
            { name: 'ClickUp', description: 'One app to replace them all.', url: 'https://clickup.com/', image: 'https://picsum.photos/seed/clickup-pm-prod/600/400', dataAiHint: 'productivity platform', pricing: 'Freemium' },
            { name: 'Asana', description: 'Work management for teams.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-pm-prod/600/400', dataAiHint: 'team management', pricing: 'Freemium' },
            { name: 'Notion AI', description: 'AI features integrated into Notion workspace.', url: 'https://www.notion.so/product/ai', image: 'https://picsum.photos/seed/notionai-pm-prod/600/400', dataAiHint: 'workspace assistant', pricing: 'Paid' },
            { name: 'Monday.com', description: 'Work OS that powers teams to run projects and workflows.', url: 'https://monday.com/', image: 'https://picsum.photos/seed/monday-pm-prod/600/400', dataAiHint: 'work os', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Workflow Automation",
        icon: <Workflow className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zapier', description: 'Automation for busy people.', url: 'https://zapier.com/', image: 'https://picsum.photos/seed/zapier-workflow-prod/600/400', dataAiHint: 'app integration', pricing: 'Freemium' },
            { name: 'Make', description: 'Visually create, build, and automate.', url: 'https://www.make.com/', image: 'https://picsum.photos/seed/make-workflow-prod/600/400', dataAiHint: 'visual automation', pricing: 'Freemium' },
            { name: 'n8n', description: 'Extendable workflow automation.', url: 'https://n8n.io/', image: 'https://picsum.photos/seed/n8n-workflow-prod/600/400', dataAiHint: 'open source automation', pricing: 'Freemium' },
            { name: 'IFTTT', description: 'Helps your apps and devices work together.', url: 'https://ifttt.com/', image: 'https://picsum.photos/seed/ifttt-workflow/600/400', dataAiHint: 'applets', pricing: 'Freemium' },
            { name: 'Tray.io', description: 'General automation platform.', url: 'https://tray.io/', image: 'https://picsum.photos/seed/tray-workflow/600/400', dataAiHint: 'api integration', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Time Management Tools",
        icon: <Clock className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'RescueTime', description: 'Find your ideal work-life balance.', url: 'https://www.rescuetime.com/', image: 'https://picsum.photos/seed/rescuetime-time/600/400', dataAiHint: 'time tracking', pricing: 'Freemium' },
            { name: 'Toggl Track', description: 'Effortless time tracking and reporting.', url: 'https://toggl.com/track/', image: 'https://picsum.photos/seed/toggl-time/600/400', dataAiHint: 'work timer', pricing: 'Freemium' },
            { name: 'Clockify', description: 'Free time tracker and timesheet app.', url: 'https://clockify.me/', image: 'https://picsum.photos/seed/clockify-time/600/400', dataAiHint: 'team time', pricing: 'Free' },
            { name: 'Timely', description: 'Automatic time tracking software.', url: 'https://timelyapp.com/', image: 'https://picsum.photos/seed/timely-time/600/400', dataAiHint: 'automatic tracking', pricing: 'Paid' },
            { name: 'Harvest', description: 'Simple time tracking, powerful reporting.', url: 'https://www.getharvest.com/', image: 'https://picsum.photos/seed/harvest-time/600/400', dataAiHint: 'invoicing', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Smart Calendars & Scheduling",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Reclaim.ai', description: 'Smart time blocking for your calendar.', url: 'https://reclaim.ai/', image: 'https://picsum.photos/seed/reclaimai-cal/600/400', dataAiHint: 'time blocking', pricing: 'Freemium' },
            { name: 'Calendly', description: 'Simple, beautiful scheduling.', url: 'https://calendly.com/', image: 'https://picsum.photos/seed/calendly/600/400', dataAiHint: 'appointment scheduling', pricing: 'Freemium' },
            { name: 'Clockwise', description: 'The smart calendar assistant.', url: 'https://www.getclockwise.com/', image: 'https://picsum.photos/seed/clockwise/600/400', dataAiHint: 'focus time', pricing: 'Freemium' },
            { name: 'Doodle', description: 'The simplest way to schedule meetings.', url: 'https://doodle.com/', image: 'https://picsum.photos/seed/doodle/600/400', dataAiHint: 'meeting poll', pricing: 'Freemium' },
            { name: 'Motion', description: 'Uses AI to plan your day, tasks and meetings.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/motion-cal/600/400', dataAiHint: 'ai scheduling', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Email Assistants",
        icon: <Mail className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Superhuman', description: 'The fastest email experience ever made.', url: 'https://superhuman.com/', image: 'https://picsum.photos/seed/superhuman-email/600/400', dataAiHint: 'fast email', pricing: 'Paid' },
            { name: 'SaneBox', description: 'Smart email filtering and organization.', url: 'https://www.sanebox.com/', image: 'https://picsum.photos/seed/sanebox-email/600/400', dataAiHint: 'email filter', pricing: 'Paid' },
            { name: 'Lavender', description: 'The #1 AI Sales Email Coach.', url: 'https://www.lavender.ai/', image: 'https://picsum.photos/seed/lavender-email/600/400', dataAiHint: 'email coach', pricing: 'Freemium' },
            { name: 'Boomerang for Gmail', description: 'Schedule emails and track responses.', url: 'https://www.boomeranggmail.com/', image: 'https://picsum.photos/seed/boomerang-email/600/400', dataAiHint: 'gmail extension', pricing: 'Freemium' },
            { name: 'Shortwave', description: 'The intelligent email app.', url: 'https://www.shortwave.com/', image: 'https://picsum.photos/seed/shortwave/600/400', dataAiHint: 'intelligent email', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Inbox Management Tools",
        icon: <Folder className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SaneBox', description: 'Moves unimportant emails from the inbox into a separate folder.', url: 'https://www.sanebox.com/', image: 'https://picsum.photos/seed/sanebox-inbox/600/400', dataAiHint: 'email organization', pricing: 'Paid' },
            { name: 'Clean Email', description: 'Organize and clean your mailbox.', url: 'https://clean.email/', image: 'https://picsum.photos/seed/cleanemail/600/400', dataAiHint: 'inbox cleaner', pricing: 'Paid' },
            { name: 'Unroll.Me', description: 'Instantly see a list of all your subscription emails.', url: 'https://unroll.me/', image: 'https://picsum.photos/seed/unrollme/600/400', dataAiHint: 'unsubscribe', pricing: 'Free' },
            { name: 'Mailstrom', description: 'Clean up your inbox.', url: 'https://mailstrom.co/', image: 'https://picsum.photos/seed/mailstrom/600/400', dataAiHint: 'bulk email delete', pricing: 'Paid' },
            { name: 'Spike', description: 'Conversational email for teams.', url: 'https://www.spikenow.com/', image: 'https://picsum.photos/seed/spike/600/400', dataAiHint: 'chat email', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Meeting Assistants",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Otter.ai', description: 'AI meeting assistant that records audio and writes notes.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otterai-meeting/600/400', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'Fireflies.ai', description: 'AI assistant for your meetings.', url: 'https://fireflies.ai/', image: 'https://picsum.photos/seed/fireflies-meeting/600/400', dataAiHint: 'meeting recorder', pricing: 'Freemium' },
            { name: 'Fathom', description: 'Free AI Notetaker for Zoom meetings.', url: 'https://fathom.video/', image: 'https://picsum.photos/seed/fathom-meeting/600/400', dataAiHint: 'zoom notes', pricing: 'Free' },
            { name: 'Sembly AI', description: 'Turns your meetings into text, summaries, and insights.', url: 'https://www.sembly.ai/', image: 'https://picsum.photos/seed/semblyai-meeting/600/400', dataAiHint: 'meeting insights', pricing: 'Freemium' },
            { name: 'tl;dv', description: 'AI meeting recorder for Google Meet and Zoom.', url: 'https://tldv.io/', image: 'https://picsum.photos/seed/tldv-meeting/600/400', dataAiHint: 'meeting summary', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Meeting Transcription & Notes",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Descript', description: 'All-in-one audio & video editor with transcription.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-notes/600/400', dataAiHint: 'video transcription', pricing: 'Freemium' },
            { name: 'Otter.ai', description: 'Live transcribe your meetings and conversations.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otterai-notes/600/400', dataAiHint: 'live transcription', pricing: 'Freemium' },
            { name: 'Tactiq', description: 'Live transcription for Google Meet, Zoom, and Teams.', url: 'https://tactiq.io/', image: 'https://picsum.photos/seed/tactiq-notes/600/400', dataAiHint: 'meeting transcript', pricing: 'Freemium' },
            { name: 'Happy Scribe', description: 'Transcription & Subtitles Services.', url: 'https://www.happyscribe.com/', image: 'https://picsum.photos/seed/happyscribe/600/400', dataAiHint: 'audio transcription', pricing: 'Paid' },
            { name: 'Trint', description: 'AI audio transcription that makes any audio and video searchable.', url: 'https://trint.com/', image: 'https://picsum.photos/seed/trint/600/400', dataAiHint: 'searchable audio', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Document Writing Tools",
        icon: <PenTool className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jasper', description: 'AI content platform for teams.', url: 'https://www.jasper.ai/', image: 'https://picsum.photos/seed/jasper-writing/600/400', dataAiHint: 'ai writer', pricing: 'Paid' },
            { name: 'Copy.ai', description: 'AI-powered copywriter that generates high-quality copy.', url: 'https://www.copy.ai/', image: 'https://picsum.photos/seed/copyai-writing/600/400', dataAiHint: 'marketing copy', pricing: 'Freemium' },
            { name: 'Writesonic', description: 'AI writer for creating SEO-friendly content.', url: 'https://writesonic.com/', image: 'https://picsum.photos/seed/writesonic-writing/600/400', dataAiHint: 'content generator', pricing: 'Freemium' },
            { name: 'Rytr', description: 'An AI writing assistant that helps you create content.', url: 'https://rytr.me/', image: 'https://picsum.photos/seed/rytr-writing/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Grammarly', description: 'AI-powered writing assistant.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-writing/600/400', dataAiHint: 'grammar check', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Document Summarization",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Scholarcy', description: 'AI-powered article summarizer.', url: 'https://www.scholarcy.com/', image: 'https://picsum.photos/seed/scholarcy-sum/600/400', dataAiHint: 'research paper', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humataai-sum/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'ChatPDF', description: 'Chat with any PDF.', url: 'https://www.chatpdf.com/', image: 'https://picsum.photos/seed/chatpdf-sum/600/400', dataAiHint: 'pdf conversation', pricing: 'Freemium' },
            { name: 'QuillBot Summarizer', description: 'Summarize any text with a click.', url: 'https://quillbot.com/summarize', image: 'https://picsum.photos/seed/quillbot-sum/600/400', dataAiHint: 'text summary', pricing: 'Freemium' },
            { name: 'SMMRY', description: 'Summarize articles, text, and websites.', url: 'https://smmry.com/', image: 'https://picsum.photos/seed/smmry-sum/600/400', dataAiHint: 'article summarizer', pricing: 'Free' },
        ]
    },
    {
        title: "AI Knowledge Management Tools",
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Obsidian', description: 'A powerful knowledge base on top of a local folder.', url: 'https://obsidian.md/', image: 'https://picsum.photos/seed/obsidian-km/600/400', dataAiHint: 'second brain', pricing: 'Free' },
            { name: 'Roam Research', description: 'A note-taking tool for networked thought.', url: 'https://roamresearch.com/', image: 'https://picsum.photos/seed/roam-km/600/400', dataAiHint: 'networked thought', pricing: 'Paid' },
            { name: 'Logseq', description: 'A privacy-first, open-source knowledge base.', url: 'https://logseq.com/', image: 'https://picsum.photos/seed/logseq-km/600/400', dataAiHint: 'open source knowledge', pricing: 'Free' },
            { name: 'Mem.ai', description: 'The self-organizing workspace.', url: 'https://mem.ai/', image: 'https://picsum.photos/seed/memai-km/600/400', dataAiHint: 'ai workspace', pricing: 'Freemium' },
            { name: 'MyMind', description: 'The extension for your mind.', url: 'https://mymind.com/', image: 'https://picsum.photos/seed/mymind-km/600/400', dataAiHint: 'private search', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Note-Taking Tools",
        icon: <StickyNote className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion', description: 'The all-in-one workspace for notes, tasks, wikis.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-notes-prod/600/400', dataAiHint: 'workspace app', pricing: 'Freemium' },
            { name: 'Evernote', description: 'Remember everything important.', url: 'https://evernote.com/', image: 'https://picsum.photos/seed/evernote-notes-prod/600/400', dataAiHint: 'note taking', pricing: 'Freemium' },
            { name: 'GoodNotes', description: 'Digital paper for your notes and ideas.', url: 'https://www.goodnotes.com/', image: 'https://picsum.photos/seed/goodnotes-prod/600/400', dataAiHint: 'handwriting notes', pricing: 'Freemium' },
            { name: 'Notability', description: 'Powerful, yet wonderfully simple note-taking.', url: 'https://notability.com/', image: 'https://picsum.photos/seed/notability-notes-prod/600/400', dataAiHint: 'pdf annotation', pricing: 'Freemium' },
            { name: 'Bear', description: 'A beautiful, flexible writing app for notes and prose.', url: 'https://bear.app/', image: 'https://picsum.photos/seed/bear-notes-prod/600/400', dataAiHint: 'markdown notes', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Research Assistants",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Perplexity AI', description: 'An answer engine for discovering and sharing knowledge.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-research-prod/600/400', dataAiHint: 'knowledge engine', pricing: 'Freemium' },
            { name: 'Elicit', description: 'The AI Research Assistant.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit-prod/600/400', dataAiHint: 'automate research', pricing: 'Freemium' },
            { name: 'Research Rabbit', description: 'Your personal research assistant.', url: 'https://www.researchrabbit.ai/', image: 'https://picsum.photos/seed/researchrabbit-prod/600/400', dataAiHint: 'literature map', pricing: 'Free' },
            { name: 'SciSpace', description: 'Explore, understand, and explain research papers.', url: 'https://typeset.io/', image: 'https://picsum.photos/seed/scispace-prod/600/400', dataAiHint: 'ai for research', pricing: 'Freemium' },
            { name: 'Consensus', description: 'An AI search engine for research.', url: 'https://consensus.app/', image: 'https://picsum.photos/seed/consensus-prod/600/400', dataAiHint: 'evidence-based answers', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Collaboration Tools",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Slack', description: 'Where work happens.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack-collab/600/400', dataAiHint: 'team communication', pricing: 'Freemium' },
            { name: 'Microsoft Teams', description: 'The hub for teamwork in Microsoft 365.', url: 'https://www.microsoft.com/en-us/microsoft-teams', image: 'https://picsum.photos/seed/msteams-collab/600/400', dataAiHint: 'video meetings', pricing: 'Freemium' },
            { name: 'Miro', description: 'The online collaborative whiteboard platform.', url: 'https://miro.com/', image: 'https://picsum.photos/seed/miro-collab/600/400', dataAiHint: 'visual collaboration', pricing: 'Freemium' },
            { name: 'Mural', description: 'A digital workspace for visual collaboration.', url: 'https://www.mural.co/', image: 'https://picsum.photos/seed/mural-collab/600/400', dataAiHint: 'digital workspace', pricing: 'Freemium' },
            { name: 'Figma', description: 'Collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-collab/600/400', dataAiHint: 'design tool', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Team Productivity Tools",
        icon: <Briefcase className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Asana', description: 'Manage your team\'s work, projects, & tasks online.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-team/600/400', dataAiHint: 'work management', pricing: 'Freemium' },
            { name: 'Trello', description: 'A visual collaboration tool for your team.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-team/600/400', dataAiHint: 'kanban board', pricing: 'Freemium' },
            { name: 'Basecamp', description: 'The all-in-one toolkit for working remotely.', url: 'https://basecamp.com/', image: 'https://picsum.photos/seed/basecamp-team/600/400', dataAiHint: 'remote work', pricing: 'Paid' },
            { name: 'Jira', description: 'The #1 software development tool used by agile teams.', url: 'https://www.atlassian.com/software/jira', image: 'https://picsum.photos/seed/jira-team/600/400', dataAiHint: 'agile tool', pricing: 'Freemium' },
            { name: 'Range', description: 'Check-ins for remote and hybrid teams.', url: 'https://www.range.co/', image: 'https://picsum.photos/seed/range-team/600/400', dataAiHint: 'team check-ins', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Remote Work Tools",
        icon: <Laptop className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Krisp', description: 'AI-powered noise cancelling app.', url: 'https://krisp.ai/', image: 'https://picsum.photos/seed/krisp-remote/600/400', dataAiHint: 'noise cancellation', pricing: 'Freemium' },
            { name: 'Timezone.io', description: 'Know what time it is in your remote team\'s city.', url: 'https://timezone.io/', image: 'https://picsum.photos/seed/timezoneio/600/400', dataAiHint: 'team timezones', pricing: 'Free' },
            { name: 'Loom', description: 'Video messaging for work.', url: 'https://www.loom.com/', image: 'https://picsum.photos/seed/loom-remote/600/400', dataAiHint: 'screen recording', pricing: 'Freemium' },
            { name: 'Around', description: 'Video calls designed for energy and collaboration.', url: 'https://www.around.co/', image: 'https://picsum.photos/seed/around-remote/600/400', dataAiHint: 'video calls', pricing: 'Freemium' },
            { name: 'Tandem', description: 'A virtual office for remote teams.', url: 'https://tandem.chat/', image: 'https://picsum.photos/seed/tandem-remote/600/400', dataAiHint: 'virtual office', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Focus & Distraction Blockers",
        icon: <BellOff className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Freedom', description: 'Block distracting websites and apps.', url: 'https://freedom.to/', image: 'https://picsum.photos/seed/freedom-focus/600/400', dataAiHint: 'website blocker', pricing: 'Paid' },
            { name: 'Cold Turkey', description: 'The toughest website and application blocker.', url: 'https://getcoldturkey.com/', image: 'https://picsum.photos/seed/coldturkey-focus/600/400', dataAiHint: 'distraction free', pricing: 'Freemium' },
            { name: 'Forest', description: 'Stay focused, be present.', url: 'https://www.forestapp.cc/', image: 'https://picsum.photos/seed/forest-focus/600/400', dataAiHint: 'focus timer', pricing: 'Freemium' },
            { name: 'Brain.fm', description: 'Functional music to improve focus.', url: 'https://www.brain.fm/', image: 'https://picsum.photos/seed/brainfm-focus/600/400', dataAiHint: 'focus music', pricing: 'Paid' },
            { name: 'Noisli', description: 'Improve focus and boost productivity with background sounds.', url: 'https://www.noisli.com/', image: 'https://picsum.photos/seed/noisli-focus/600/400', dataAiHint: 'background sounds', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Goal Tracking Tools",
        icon: <Goal className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Strides', description: 'Track your goals and habits.', url: 'https://www.stridesapp.com/', image: 'https://picsum.photos/seed/strides-goal/600/400', dataAiHint: 'habit tracker', pricing: 'Freemium' },
            { name: 'Habitica', description: 'Gamify your life.', url: 'https://habitica.com/', image: 'https://picsum.photos/seed/habitica-goal/600/400', dataAiHint: 'gamified tasks', pricing: 'Freemium' },
            { name: 'Goals.com', description: 'The platform for personal growth.', url: 'https://goals.com/', image: 'https://picsum.photos/seed/goalscom/600/400', dataAiHint: 'personal growth', pricing: 'Freemium' },
            { name: 'Weekdone', description: 'OKR software for goal setting and tracking.', url: 'https://weekdone.com/', image: 'https://picsum.photos/seed/weekdone-goal/600/400', dataAiHint: 'okr software', pricing: 'Paid' },
            { name: 'Lattice', description: 'People management platform with goal tracking.', url: 'https://lattice.com/', image: 'https://picsum.photos/seed/lattice-goal/600/400', dataAiHint: 'people management', pricing: 'Paid' },
        ]
    },
    {
        title: "AI File Organization Tools",
        icon: <Folder className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Hazel', description: 'Automated organization for your Mac.', url: 'https://www.noodlesoft.com/', image: 'https://picsum.photos/seed/hazel/600/400', dataAiHint: 'mac automation', pricing: 'Paid' },
            { name: 'DropIt', description: 'A tiny, flexible tool to automate sorting and organizing files.', url: 'http://www.dropitproject.com/', image: 'https://picsum.photos/seed/dropit/600/400', dataAiHint: 'file sorting', pricing: 'Free' },
            { name: 'Digital Assistant', description: 'AI-powered file organization and search.', url: 'https://www.microsoft.com/en-us/research/project/digital-assistant/', image: 'https://picsum.photos/seed/digital-assistant/600/400', dataAiHint: 'file search', pricing: 'Free' },
            { name: 'Adobe Bridge', description: 'Creative asset manager.', url: 'https://www.adobe.com/products/bridge.html', image: 'https://picsum.photos/seed/adobebridge/600/400', dataAiHint: 'asset management', pricing: 'Free' },
            { name: 'Eagle', description: 'A better way to collect, search and organize your image files.', url: 'https://en.eagle.cool/', image: 'https://picsum.photos/seed/eagle-app/600/400', dataAiHint: 'image organizer', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Search & Information Retrieval",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Perplexity AI', description: 'An answer engine that understands questions.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-search/600/400', dataAiHint: 'answer engine', pricing: 'Freemium' },
            { name: 'You.com', description: 'The AI search engine you control.', url: 'https://you.com/', image: 'https://picsum.photos/seed/youcom-search/600/400', dataAiHint: 'customizable search', pricing: 'Freemium' },
            { name: 'Phind', description: 'The AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://picsum.photos/seed/phind-search-prod/600/400', dataAiHint: 'developer search', pricing: 'Free' },
            { name: 'Glean', description: 'The work assistant with the answers you need.', url: 'https://www.glean.com/', image: 'https://picsum.photos/seed/glean-search/600/400', dataAiHint: 'enterprise search', pricing: 'Paid' },
            { name: 'Algolia', description: 'Hosted search API for websites and mobile apps.', url: 'https://www.algolia.com/', image: 'https://picsum.photos/seed/algolia/600/400', dataAiHint: 'search api', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Data Entry & Automation",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Docparser', description: 'Extract data from PDF files & automate your workflow.', url: 'https://docparser.com/', image: 'https://picsum.photos/seed/docparser-data/600/400', dataAiHint: 'pdf parsing', pricing: 'Paid' },
            { name: 'Nanonets', description: 'Intelligent automation for business processes.', url: 'https://nanonets.com/', image: 'https://picsum.photos/seed/nanonets-data/600/400', dataAiHint: 'ocr automation', pricing: 'Paid' },
            { name: 'UiPath', description: 'The leader in enterprise automation and AI.', url: 'https://www.uipath.com/', image: 'https://picsum.photos/seed/uipath-data/600/400', dataAiHint: 'rpa', pricing: 'Paid' },
            { name: 'Automation Anywhere', description: 'The #1 cloud automation platform.', url: 'https://www.automationanywhere.com/', image: 'https://picsum.photos/seed/autoanywhere-data/600/400', dataAiHint: 'cloud automation', pricing: 'Paid' },
            { name: 'Rossum', description: 'AI-powered document processing.', url: 'https://rossum.ai/', image: 'https://picsum.photos/seed/rossum-data/600/400', dataAiHint: 'intelligent document', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Reporting & Dashboard Tools",
        icon: <BarChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tableau', description: 'Leading data visualization and BI software.', url: 'https://www.tableau.com/', image: 'https://picsum.photos/seed/tableau-report/600/400', dataAiHint: 'data visualization', pricing: 'Paid' },
            { name: 'Power BI', description: 'Interactive data visualization BI tools.', url: 'https://powerbi.microsoft.com/', image: 'https://picsum.photos/seed/powerbi-report/600/400', dataAiHint: 'business analytics', pricing: 'Freemium' },
            { name: 'Looker', description: 'Business intelligence and big data analytics platform.', url: 'https://looker.com/', image: 'https://picsum.photos/seed/looker-report/600/400', dataAiHint: 'data platform', pricing: 'Paid' },
            { name: 'Domo', description: 'BI & data apps on a single platform.', url: 'https://www.domo.com/', image: 'https://picsum.photos/seed/domo-report/600/400', dataAiHint: 'data apps', pricing: 'Paid' },
            { name: 'Google Data Studio', description: 'Turn your data into informative dashboards and reports.', url: 'https://datastudio.google.com/', image: 'https://picsum.photos/seed/gds/600/400', dataAiHint: 'looker studio', pricing: 'Free' },
        ]
    },
    {
        title: "AI Decision Support Tools",
        icon: <Brain className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Pecan AI', description: 'The predictive AI platform for business analysts.', url: 'https://pecan.ai/', image: 'https://picsum.photos/seed/pecanai/600/400', dataAiHint: 'predictive analytics', pricing: 'Paid' },
            { name: 'Aviso', description: 'The AI-powered revenue intelligence platform.', url: 'https://www.aviso.com/', image: 'https://picsum.photos/seed/aviso-decision/600/400', dataAiHint: 'revenue intelligence', pricing: 'Paid' },
            { name: 'Pyramid Analytics', description: 'The Decision Intelligence Platform.', url: 'https://www.pyramidanalytics.com/', image: 'https://picsum.photos/seed/pyramid-decision/600/400', dataAiHint: 'decision intelligence', pricing: 'Paid' },
            { name: 'Signal AI', description: 'AI-powered decision augmentation.', url: 'https://www.signal-ai.com/', image: 'https://picsum.photos/seed/signalai/600/400', dataAiHint: 'media monitoring', pricing: 'Paid' },
            { name: 'prooV', description: 'A PoC platform for testing new technologies.', url: 'https://www.proov.io/', image: 'https://picsum.photos/seed/proov/600/400', dataAiHint: 'proof of concept', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Voice Assistants",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Assistant', description: 'Your own personal Google.', url: 'https://assistant.google.com/', image: 'https://picsum.photos/seed/g-assistant-voice/600/400', dataAiHint: 'personal assistant', pricing: 'Free' },
            { name: 'Amazon Alexa', description: 'The voice service that powers smart devices.', url: 'https://www.amazon.com/alexa', image: 'https://picsum.photos/seed/alexa-voice/600/400', dataAiHint: 'smart home', pricing: 'Free' },
            { name: 'Siri', description: 'Apple\'s intelligent personal assistant.', url: 'https://www.apple.com/siri/', image: 'https://picsum.photos/seed/siri-voice/600/400', dataAiHint: 'apple assistant', pricing: 'Free' },
            { name: 'Mycroft', description: 'The open source voice assistant.', url: 'https://mycroft.ai/', image: 'https://picsum.photos/seed/mycroft-voice/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Houndify', description: 'A platform to add a voice AI to your brand.', url: 'https://www.houndify.com/', image: 'https://picsum.photos/seed/houndify/600/400', dataAiHint: 'voice ai', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Multilingual Translation Tools",
        icon: <Globe className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Google Translate', description: 'Free service instantly translates words, phrases, and web pages.', url: 'https://translate.google.com/', image: 'https://picsum.photos/seed/g-translate/600/400', dataAiHint: 'language translation', pricing: 'Free' },
            { name: 'DeepL', description: 'The world\'s most accurate translator.', url: 'https://www.deepl.com/translator', image: 'https://picsum.photos/seed/deepl/600/400', dataAiHint: 'accurate translator', pricing: 'Freemium' },
            { name: 'Microsoft Translator', description: 'Translate text, speech, and images.', url: 'https://www.microsoft.com/en-us/translator/', image: 'https://picsum.photos/seed/ms-translator/600/400', dataAiHint: 'speech translation', pricing: 'Freemium' },
            { name: 'Yandex Translate', description: 'Synchronized translation for 102 languages.', url: 'https://translate.yandex.com/', image: 'https://picsum.photos/seed/yandex-translate/600/400', dataAiHint: 'image translation', pricing: 'Free' },
            { name: 'Reverso', description: 'Translate and learn millions of words and expressions.', url: 'https://www.reverso.net/text_translation.aspx?lang=EN', image: 'https://picsum.photos/seed/reverso/600/400', dataAiHint: 'context translation', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Presentation Builders",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Tome', description: 'The AI-powered storytelling format.', url: 'https://tome.app/', image: 'https://picsum.photos/seed/tome-pres/600/400', dataAiHint: 'ai presentation', pricing: 'Freemium' },
            { name: 'Beautiful.ai', description: 'Presentation software that designs for you.', url: 'https://www.beautiful.ai/', image: 'https://picsum.photos/seed/beautifulai-pres/600/400', dataAiHint: 'design slides', pricing: 'Paid' },
            { name: 'Gamma', description: 'A new medium for presenting ideas.', url: 'https://gamma.app/', image: 'https://picsum.photos/seed/gamma-pres/600/400', dataAiHint: 'ai slides', pricing: 'Freemium' },
            { name: 'SlidesAI.io', description: 'Create presentation slides with AI in seconds.', url: 'https://www.slidesai.io/', image: 'https://picsum.photos/seed/slidesai-pres/600/400', dataAiHint: 'google slides ai', pricing: 'Freemium' },
            { name: 'Pitch', description: 'Collaborative presentation software for modern teams.', url: 'https://pitch.com/', image: 'https://picsum.photos/seed/pitch-pres/600/400', dataAiHint: 'team presentations', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Smart Reminders",
        icon: <CalendarPlus className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Any.do', description: 'Set reminders that work for you.', url: 'https://www.any.do/', image: 'https://picsum.photos/seed/anydo-remind/600/400', dataAiHint: 'location reminders', pricing: 'Freemium' },
            { name: 'Todoist Reminders', description: 'Get reminded anywhere, on any device.', url: 'https://todoist.com/features/reminders', image: 'https://picsum.photos/seed/todoist-remind/600/400', dataAiHint: 'smart reminders', pricing: 'Freemium' },
            { name: 'Google Keep', description: 'Set time-based or location-based reminders.', url: 'https://keep.google.com/', image: 'https://picsum.photos/seed/gkeep-remind/600/400', dataAiHint: 'note reminders', pricing: 'Free' },
            { name: 'Due', description: 'The super-fast reminder app for iPhone & iPad.', url: 'https://www.dueapp.com/', image: 'https://picsum.photos/seed/dueapp/600/400', dataAiHint: 'persistent reminders', pricing: 'Paid' },
            { name: 'Microsoft To Do', description: 'Add due dates and reminders to your tasks.', url: 'https://todo.microsoft.com/', image: 'https://picsum.photos/seed/mstodo-remind/600/400', dataAiHint: 'daily planner', pricing: 'Free' },
        ]
    },
    {
        title: "AI Productivity Analytics Tools",
        icon: <LayoutDashboard className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'RescueTime', description: 'Understand your time and attention.', url: 'https://www.rescuetime.com/', image: 'https://picsum.photos/seed/rescuetime-analytics/600/400', dataAiHint: 'time analytics', pricing: 'Freemium' },
            { name: 'Clockwise', description: 'Helps you visualize how you spend your time.', url: 'https://www.getclockwise.com/', image: 'https://picsum.photos/seed/clockwise-analytics/600/400', dataAiHint: 'calendar analytics', pricing: 'Freemium' },
            { name: 'Domo', description: 'BI platform to analyze business productivity.', url: 'https://www.domo.com/', image: 'https://picsum.photos/seed/domo-analytics/600/400', dataAiHint: 'business intelligence', pricing: 'Paid' },
            { name: 'Prodoscore', description: 'Employee visibility and productivity software.', url: 'https://www.prodoscore.com/', image: 'https://picsum.photos/seed/prodoscore/600/400', dataAiHint: 'employee monitoring', pricing: 'Paid' },
            { name: 'ActivTrak', description: 'Workforce analytics & productivity platform.', url: 'https://www.activtrak.com/', image: 'https://picsum.photos/seed/activtrak/600/400', dataAiHint: 'workforce analytics', pricing: 'Freemium' },
        ]
    }
];

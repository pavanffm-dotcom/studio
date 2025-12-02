
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
    Sparkles, Search, BookCopy, Heart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useUserPreferences } from '@/context/user-preferences-context';
import { type Tool, type ToolCategory } from '@/lib/tools-data.tsx';

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
            { name: 'Redbooth', description: 'Project management software for busy teams.', url: 'https://redbooth.com/', image: 'https://picsum.photos/seed/redbooth/600/400', dataAiHint: 'team collaboration', pricing: 'Paid' },
            { name: 'GanttPRO', description: 'Online Gantt chart software for project management.', url: 'https://ganttpro.com/', image: 'https://picsum.photos/seed/ganttpro/600/400', dataAiHint: 'gantt chart', pricing: 'Paid' },
            { name: 'Freedcamp', description: 'An intelligent project management and collaboration tool for teams.', url: 'https://freedcamp.com/', image: 'https://picsum.photos/seed/freedcamp/600/400', dataAiHint: 'free project', pricing: 'Freemium' },
            { name: 'Hive', description: 'The productivity platform for fast-moving teams.', url: 'https://hive.com/', image: 'https://picsum.photos/seed/hive/600/400', dataAiHint: 'productivity platform', pricing: 'Paid' },
            { name: 'LiquidPlanner', description: 'Predictive project management for modern business.', url: 'https://www.liquidplanner.com/', image: 'https://picsum.photos/seed/liquidplanner/600/400', dataAiHint: 'predictive planning', pricing: 'Paid' },
            { name: 'Taskworld', description: 'A visual task management & project planning app.', url: 'https://taskworld.com/', image: 'https://picsum.photos/seed/taskworld/600/400', dataAiHint: 'visual tasks', pricing: 'Paid' },
            { name: 'Podio', description: 'A work management solution from Citrix.', url: 'https://www.citrix.com/products/podio.html', image: 'https://picsum.photos/seed/podio/600/400', dataAiHint: 'work management', pricing: 'Freemium' },
            { name: 'Scoro', description: 'A comprehensive work management software.', url: 'https://www.scoro.com/', image: 'https://picsum.photos/seed/scoro/600/400', dataAiHint: 'business management', pricing: 'Paid' },
            { name: 'Celoxis', description: 'A complete project management software.', url: 'https://www.celoxis.com/', image: 'https://picsum.photos/seed/celoxis/600/400', dataAiHint: 'enterprise projects', pricing: 'Paid' },
            { name: 'Microsoft Project', description: 'Project management software from Microsoft.', url: 'https://www.microsoft.com/en-us/microsoft-365/project/project-management-software', image: 'https://picsum.photos/seed/msproject/600/400', dataAiHint: 'microsoft project', pricing: 'Paid' },
            { name: 'GoodDay', description: 'A work management platform for project, task, product, and portfolio management.', url: 'https://www.goodday.work/', image: 'https://picsum.photos/seed/goodday/600/400', dataAiHint: 'work platform', pricing: 'Freemium' },
            { name: 'Bitrix24', description: 'Free online workspace with CRM, tasks, projects, documents.', url: 'https://www.bitrix24.com/', image: 'https://picsum.photos/seed/bitrix24/600/400', dataAiHint: 'online workspace', pricing: 'Freemium' },
            { name: 'Zoho Projects', description: 'Online project management software.', url: 'https://www.zoho.com/projects/', image: 'https://picsum.photos/seed/zohoprojects/600/400', dataAiHint: 'zoho projects', pricing: 'Freemium' },
            { name: 'Kanban Tool', description: 'Visual project management for business.', url: 'https://kanbantool.com/', image: 'https://picsum.photos/seed/kanbantool/600/400', dataAiHint: 'visual management', pricing: 'Paid' },
            { name: 'Flow', description: 'Modern project and task management software for teams.', url: 'https://www.getflow.com/', image: 'https://picsum.photos/seed/flow/600/400', dataAiHint: 'team task', pricing: 'Paid' },
            { name: 'Workfront', description: 'Adobe Workfront is a work management tool that helps you manage the entire lifecycle of work in one place.', url: 'https://business.adobe.com/products/workfront/adobe-workfront.html', image: 'https://picsum.photos/seed/workfront/600/400', dataAiHint: 'adobe work', pricing: 'Paid' },
            { name: 'Assembla', description: 'Git, Perforce, and Subversion hosting for software teams.', url: 'https://www.assembla.com/', image: 'https://picsum.photos/seed/assembla/600/400', dataAiHint: 'secure git', pricing: 'Paid' },
            { name: 'Paymo', description: 'Work & project management for small businesses.', url: 'https://www.paymoapp.com/', image: 'https://picsum.photos/seed/paymo/600/400', dataAiHint: 'project billing', pricing: 'Freemium' },
            { name: 'ProWorkflow', description: 'Project management, time tracking and invoicing software.', url: 'https://www.proworkflow.com/', image: 'https://picsum.photos/seed/proworkflow/600/400', dataAiHint: 'workflow management', pricing: 'Paid' },
            { name: 'FunctionFox', description: 'Timesheet and project management for creative teams.', url: 'https://www.functionfox.com/', image: 'https://picsum.photos/seed/functionfox/600/400', dataAiHint: 'creative timesheet', pricing: 'Paid' },
            { name: 'Clarizen', description: 'Enterprise-grade project and portfolio management software.', url: 'https://www.clarizen.com/', image: 'https://picsum.photos/seed/clarizen/600/400', dataAiHint: 'portfolio management', pricing: 'Paid' },
            { name: 'Teamdeck', description: 'Resource management and time tracking software.', url: 'https://teamdeck.io/', image: 'https://picsum.photos/seed/teamdeck/600/400', dataAiHint: 'resource planning', pricing: 'Paid' },
            { name: 'Confluence', description: 'A team workspace where knowledge and collaboration meet.', url: 'https://www.atlassian.com/software/confluence', image: 'https://picsum.photos/seed/confluence-tasks/600/400', dataAiHint: 'team workspace', pricing: 'Freemium' },
            { name: 'Favro', description: 'An agile planning and collaboration app.', url: 'https://www.favro.com/', image: 'https://picsum.photos/seed/favro/600/400', dataAiHint: 'agile planning', pricing: 'Paid' },
            { name: 'Genius Project', description: 'Enterprise project management software.', url: 'https://www.geniusproject.com/', image: 'https://picsum.photos/seed/geniusproject/600/400', dataAiHint: 'enterprise PPM', pricing: 'Paid' },
            { name: 'Kissflow Project', description: 'Project management that’s built for collaboration.', url: 'https://kissflow.com/project/', image: 'https://picsum.photos/seed/kissflow-project/600/400', dataAiHint: 'collaborative project', pricing: 'Paid' },
            { name: 'ProjectManager', description: 'Project and work management for teams.', url: 'https://www.projectmanager.com/', image: 'https://picsum.photos/seed/projectmanager/600/400', dataAiHint: 'hybrid project', pricing: 'Paid' },
            { name: 'ProofHub', description: 'The one place for all your projects, teams and communications.', url: 'https://www.proofhub.com/', image: 'https://picsum.photos/seed/proofhub/600/400', dataAiHint: 'team communication', pricing: 'Paid' },
            { name: 'Sunsama', description: 'A daily planner for calm work.', url: 'https://www.sunsama.com/', image: 'https://picsum.photos/seed/sunsama-tasks/600/400', dataAiHint: 'daily planner', pricing: 'Paid' },
            { name: 'TeuxDeux', description: 'A simple, designy to-do app.', url: 'https://teuxdeux.com/', image: 'https://picsum.photos/seed/teuxdeux/600/400', dataAiHint: 'simple to-do', pricing: 'Paid' },
            { name: 'Any.do', description: 'To-do list, calendar, planner and reminders.', url: 'https://www.any.do/', image: 'https://picsum.photos/seed/anydo/600/400', dataAiHint: 'personal organizer', pricing: 'Freemium' },
            { name: 'Remember The Milk', description: 'The smart to-do app for busy people.', url: 'https://www.rememberthemilk.com/', image: 'https://picsum.photos/seed/rtm/600/400', dataAiHint: 'smart to-do', pricing: 'Freemium' },
            { name: 'OmniFocus', description: 'A powerful task management app for Mac, iPhone, and iPad.', url: 'https://www.omnigroup.com/omnifocus/', image: 'https://picsum.photos/seed/omnifocus/600/400', dataAiHint: 'apple tasks', pricing: 'Paid' },
            { name: 'TickTick', description: 'To-do list app with calendar, Pomodoro, and habit tracker.', url: 'https://ticktick.com/', image: 'https://picsum.photos/seed/ticktick-tasks/600/400', dataAiHint: 'all-in-one app', pricing: 'Freemium' },
        ]
    },
    {
        title: "Note-Taking & Knowledge Management",
        icon: <BookCopy className="w-5 h-5 text-primary"/>,
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
            { name: 'Standard Notes', description: 'A free, open-source, and completely encrypted notes app.', url: 'https://standardnotes.com/', image: 'https://picsum.photos/seed/standardnotes/600/400', dataAiHint: 'encrypted notes', pricing: 'Freemium' },
            { name: 'Typora', description: 'A minimal markdown editor and reader.', url: 'https://typora.io/', image: 'https://picsum.photos/seed/typora/600/400', dataAiHint: 'markdown editor', pricing: 'Paid' },
            { name: 'iA Writer', description: 'The focused writing app.', url: 'https://ia.net/writer', image: 'https://picsum.photos/seed/iawriter/600/400', dataAiHint: 'focused writing', pricing: 'Paid' },
            { name: 'GoodNotes', description: 'Digital paper for your notes and ideas.', url: 'https://www.goodnotes.com/', image: 'https://picsum.photos/seed/goodnotes/600/400', dataAiHint: 'digital ink', pricing: 'Freemium' },
            { name: 'Notability', description: 'Powerful, yet wonderfully simple note-taking and PDF annotation.', url: 'https://notability.com/', image: 'https://picsum.photos/seed/notability/600/400', dataAiHint: 'pdf annotation', pricing: 'Freemium' },
            { name: 'Zotero', description: 'Your personal research assistant.', url: 'https://www.zotero.org/', image: 'https://picsum.photos/seed/zotero/600/400', dataAiHint: 'research assistant', pricing: 'Free' },
            { name: 'Mendeley', description: 'A reference manager that can help you store, organize, note, share and cite references and research data.', url: 'https://www.mendeley.com/', image: 'https://picsum.photos/seed/mendeley/600/400', dataAiHint: 'reference manager', pricing: 'Free' },
            { name: 'TheBrain', description: 'The ultimate digital memory.', url: 'https://www.thebrain.com/', image: 'https://picsum.photos/seed/thebrain/600/400', dataAiHint: 'mind mapping', pricing: 'Freemium' },
            { name: 'MindNode', description: 'Mind mapping for Mac, iPad, and iPhone.', url: 'https://www.mindnode.com/', image: 'https://picsum.photos/seed/mindnode/600/400', dataAiHint: 'visual brainstorming', pricing: 'Freemium' },
            { name: 'XMind', description: 'A full-featured mind mapping and brainstorming tool.', url: 'https://www.xmind.net/', image: 'https://picsum.photos/seed/xmind/600/400', dataAiHint: 'brainstorming tool', pricing: 'Freemium' },
            { name: 'Coggle', description: 'A simple collaborative mind maps & flow charts tool.', url: 'https://coggle.it/', image: 'https://picsum.photos/seed/coggle/600/400', dataAiHint: 'collaborative mindmap', pricing: 'Freemium' },
            { name: 'Miro', description: 'The online collaborative whiteboard platform.', url: 'https://miro.com/', image: 'https://picsum.photos/seed/miro-notes/600/400', dataAiHint: 'visual collaboration', pricing: 'Freemium' },
            { name: 'Mural', description: 'A digital workspace for visual collaboration.', url: 'https://www.mural.co/', image: 'https://picsum.photos/seed/mural/600/400', dataAiHint: 'digital workspace', pricing: 'Freemium' },
            { name: 'Nuclino', description: 'Your team\'s collective brain.', url: 'https://www.nuclino.com/', image: 'https://picsum.photos/seed/nuclino/600/400', dataAiHint: 'team wiki', pricing: 'Freemium' },
            { name: 'Slab', description: 'A knowledge hub for the modern workplace.', url: 'https://slab.com/', image: 'https://picsum.photos/seed/slab/600/400', dataAiHint: 'knowledge hub', pricing: 'Freemium' },
            { name: 'Tettra', description: 'The smart knowledge management system.', url: 'https://tettra.com/', image: 'https://picsum.photos/seed/tettra/600/400', dataAiHint: 'internal knowledge', pricing: 'Freemium' },
            { name: 'Confluence', description: 'A team workspace where knowledge and collaboration meet.', url: 'https://www.atlassian.com/software/confluence', image: 'https://picsum.photos/seed/confluence-notes/600/400', dataAiHint: 'team knowledge', pricing: 'Freemium' },
            { name: 'DokuWiki', description: 'A simple to use and highly versatile Open Source wiki software.', url: 'https://www.dokuwiki.org/', image: 'https://picsum.photos/seed/dokuwiki/600/400', dataAiHint: 'open source wiki', pricing: 'Free' },
            { name: 'BookStack', description: 'A simple & free wiki platform.', url: 'https://www.bookstackapp.com/', image: 'https://picsum.photos/seed/bookstack/600/400', dataAiHint: 'free wiki', pricing: 'Free' },
            { name: 'TiddlyWiki', description: 'A unique non-linear notebook for capturing, organising and sharing complex information.', url: 'https://tiddlywiki.com/', image: 'https://picsum.photos/seed/tiddlywiki/600/400', dataAiHint: 'non-linear notebook', pricing: 'Free' },
            { name: 'Zim', description: 'A graphical text editor used to maintain a collection of wiki pages.', url: 'https://zim-wiki.org/', image: 'https://picsum.photos/seed/zimwiki/600/400', dataAiHint: 'desktop wiki', pricing: 'Free' },
            { name: 'Workflowy', description: 'An organizational tool that makes life easier.', url: 'https://workflowy.com/', image: 'https://picsum.photos/seed/workflowy/600/400', dataAiHint: 'outliner notes', pricing: 'Freemium' },
            { name: 'Dynalist', description: 'The best place for your notes, ideas, and workflows.', url: 'https://dynalist.io/', image: 'https://picsum.photos/seed/dynalist/600/400', dataAiHint: 'outliner tool', pricing: 'Freemium' },
            { name: 'Milanote', description: 'An easy-to-use tool to organize your ideas and projects into visual boards.', url: 'https://milanote.com/', image: 'https://picsum.photos/seed/milanote/600/400', dataAiHint: 'visual board', pricing: 'Freemium' },
            { name: 'Pocket', description: 'Save content from everywhere.', url: 'https://getpocket.com/', image: 'https://picsum.photos/seed/pocket/600/400', dataAiHint: 'read later', pricing: 'Freemium' },
            { name: 'Instapaper', description: 'A simple tool to save web pages for reading later.', url: 'https://www.instapaper.com/', image: 'https://picsum.photos/seed/instapaper/600/400', dataAiHint: 'save articles', pricing: 'Freemium' },
            { name: 'Raindrop.io', description: 'All-in-one bookmark manager.', url: 'https://raindrop.io/', image: 'https://picsum.photos/seed/raindrop/600/400', dataAiHint: 'bookmark manager', pricing: 'Freemium' },
            { name: 'MyMind', description: 'The extension for your mind.', url: 'https://mymind.com/', image: 'https://picsum.photos/seed/mymind/600/400', dataAiHint: 'private notes', pricing: 'Paid' },
            { name: 'Mem.ai', description: 'The self-organizing workspace.', url: 'https://mem.ai/', image: 'https://picsum.photos/seed/memai-notes/600/400', dataAiHint: 'ai workspace', pricing: 'Freemium' },
            { name: 'Reflect', description: 'A note-taking tool for networked thought.', url: 'https://reflect.app/', image: 'https://picsum.photos/seed/reflect/600/400', dataAiHint: 'networked notes', pricing: 'Paid' },
            { name: 'Capacities', description: 'A studio for your mind.', url: 'https://capacities.io/', image: 'https://picsum.photos/seed/capacities/600/400', dataAiHint: 'object based notes', pricing: 'Freemium' },
            { name: 'Hypernotes', description: 'A knowledge management system by Zenkit.', url: 'https://zenkit.com/en/hypernotes/', image: 'https://picsum.photos/seed/hypernotes/600/400', dataAiHint: 'bi-directional linking', pricing: 'Freemium' },
            { name: 'Heptabase', description: 'A visual note-taking tool for learning complex topics.', url: 'https://heptabase.com/', image: 'https://picsum.photos/seed/heptabase/600/400', dataAiHint: 'visual learning', pricing: 'Paid' },
            { name: 'Scrintal', description: 'A visual note-taking tool & mind mapper.', url: 'https://www.scrintal.com/', image: 'https://picsum.photos/seed/scrintal/600/400', dataAiHint: 'visual notes', pricing: 'Paid' },
            { name: 'AmpleNote', description: 'The all-in-one productivity app.', url: 'https://www.amplenote.com/', image: 'https://picsum.photos/seed/amplenote/600/400', dataAiHint: 'notes tasks calendar', pricing: 'Freemium' },
            { name: 'Taskade', description: 'Your second brain for teams.', url: 'https://www.taskade.com/', image: 'https://picsum.photos/seed/taskade/600/400', dataAiHint: 'team brain', pricing: 'Freemium' },
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
            { name: 'Calendly', description: 'Automated scheduling software.', url: 'https://calendly.com/', image: 'https://picsum.photos/seed/calendly-time/600/400', dataAiHint: 'meeting scheduler', pricing: 'Freemium' },
            { name: 'Sunsama', description: 'A daily planner for calm work.', url: 'https://www.sunsama.com/', image: 'https://picsum.photos/seed/sunsama-time/600/400', dataAiHint: 'daily ritual', pricing: 'Paid' },
            { name: 'Motion', description: 'Uses AI to plan your day.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/motion-time/600/400', dataAiHint: 'ai planner', pricing: 'Paid' },
            { name: 'Reclaim.ai', description: 'Smart time blocking for your calendar.', url: 'https://reclaim.ai/', image: 'https://picsum.photos/seed/reclaim-time/600/400', dataAiHint: 'calendar automation', pricing: 'Freemium' },
            { name: 'Akiflow', description: 'Consolidate all your tools in one place and block time for your tasks in your calendar.', url: 'https://akiflow.com/', image: 'https://picsum.photos/seed/akiflow/600/400', dataAiHint: 'time blocking', pricing: 'Paid' },
            { name: 'Clockwise', description: 'The smart calendar assistant that frees up your time.', url: 'https://www.getclockwise.com/', image: 'https://picsum.photos/seed/clockwise/600/400', dataAiHint: 'calendar assistant', pricing: 'Freemium' },
            { name: 'DeskTime', description: 'Automatic time tracking and productivity app.', url: 'https://desktime.com/', image: 'https://picsum.photos/seed/desktime/600/400', dataAiHint: 'employee productivity', pricing: 'Freemium' },
            { name: 'TimeCamp', description: 'Free automatic time tracking software.', url: 'https://www.timecamp.com/', image: 'https://picsum.photos/seed/timecamp/600/400', dataAiHint: 'project time', pricing: 'Freemium' },
            { name: 'Hubstaff', description: 'Time tracking and workforce management.', url: 'https://hubstaff.com/', image: 'https://picsum.photos/seed/hubstaff/600/400', dataAiHint: 'workforce management', pricing: 'Freemium' },
            { name: 'TMetric', description: 'A time tracker for businesses and freelancers.', url: 'https://tmetric.com/', image: 'https://picsum.photos/seed/tmetric/600/400', dataAiHint: 'freelancer time', pricing: 'Freemium' },
            { name: 'Focus To-Do', description: 'Pomodoro Timer & To Do List.', url: 'https://www.focustodo.cn/', image: 'https://picsum.photos/seed/focustodo/600/400', dataAiHint: 'pomodoro app', pricing: 'Freemium' },
            { name: 'Marinara Timer', description: 'A simple web-based Pomodoro timer.', url: 'https://www.marinaratimer.com/', image: 'https://picsum.photos/seed/marinara/600/400', dataAiHint: 'web pomodoro', pricing: 'Free' },
            { name: 'Be Focused', description: 'Focus timer for Mac, iPhone, and iPad.', url: 'https://www.xwavesoft.com/be-focused-pro-for-iphone-ipad-mac.html', image: 'https://picsum.photos/seed/befocused/600/400', dataAiHint: 'apple focus', pricing: 'Freemium' },
            { name: 'Flow', description: 'A minimalist Pomodoro timer.', url: 'https://flowapp.info/', image: 'https://picsum.photos/seed/flow-timer/600/400', dataAiHint: 'minimalist timer', pricing: 'Freemium' },
            { name: 'Streaks', description: 'The to-do list that helps you form good habits.', url: 'https://streaksapp.com/', image: 'https://picsum.photos/seed/streaks/600/400', dataAiHint: 'habit tracker', pricing: 'Paid' },
            { name: 'Habitica', description: 'Gamify Your Life.', url: 'https://habitica.com/', image: 'https://picsum.photos/seed/habitica/600/400', dataAiHint: 'gamified tasks', pricing: 'Freemium' },
            { name: 'Loop Habit Tracker', description: 'An open-source habit tracker for Android.', url: 'https://github.com/iSoron/uhabits', image: 'https://picsum.photos/seed/loop-habit/600/400', dataAiHint: 'android habits', pricing: 'Free' },
            { name: 'Productive', description: 'Your personal habit tracker.', url: 'https://productive.io/', image: 'https://picsum.photos/seed/productive-habit/600/400', dataAiHint: 'ios habits', pricing: 'Freemium' },
            { name: 'SavvyCal', description: 'Scheduling software that helps you and your recipients find the best time to meet.', url: 'https://savvycal.com/', image: 'https://picsum.photos/seed/savvycal/600/400', dataAiHint: 'smart scheduling', pricing: 'Paid' },
            { name: 'Doodle', description: 'The simplest way to schedule meetings.', url: 'https://doodle.com/', image: 'https://picsum.photos/seed/doodle/600/400', dataAiHint: 'group scheduling', pricing: 'Freemium' },
            { name: 'When2meet', description: 'A free and simple tool to find the best time for a group to meet.', url: 'https://www.when2meet.com/', image: 'https://picsum.photos/seed/when2meet/600/400', dataAiHint: 'meeting poll', pricing: 'Free' },
            { name: 'Google Calendar', description: 'Get organized and stay on top of your schedule.', url: 'https://calendar.google.com/', image: 'https://picsum.photos/seed/gcal/600/400', dataAiHint: 'online calendar', pricing: 'Free' },
            { name: 'Fantastical', description: 'The calendar and tasks app you won\'t be able to live without.', url: 'https://flexibits.com/fantastical', image: 'https://picsum.photos/seed/fantastical/600/400', dataAiHint: 'apple calendar', pricing: 'Freemium' },
            { name: 'Cron', description: 'The next-generation calendar for professionals and teams.', url: 'https://cron.com/', image: 'https://picsum.photos/seed/cron/600/400', dataAiHint: 'notion calendar', pricing: 'Free' },
            { name: 'Morgen', description: 'Consolidate all your calendars, to-do lists, and productivity apps in one place.', url: 'https://www.morgen.so/', image: 'https://picsum.photos/seed/morgen/600/400', dataAiHint: 'unified calendar', pricing: 'Freemium' },
            { name: 'HourStack', description: 'A transparent, collaborative time management tool.', url: 'https://hourstack.com/', image: 'https://picsum.photos/seed/hourstack/600/400', dataAiHint: 'time blocking', pricing: 'Paid' },
            { name: 'Plan', description: 'Your work life in one place. Calendar, projects, and tasks.', url: 'https://getplan.co/', image: 'https://picsum.photos/seed/plan/600/400', dataAiHint: 'work planner', pricing: 'Paid' },
            { name: 'Timing', description: 'Automatic time tracking for Mac.', url: 'https://timingapp.com/', image: 'https://picsum.photos/seed/timing-app/600/400', dataAiHint: 'mac time tracking', pricing: 'Paid' },
            { name: 'Memorigi', description: 'A to-do list, task manager, calendar, and reminder app.', url: 'https://memorigi.com/', image: 'https://picsum.photos/seed/memorigi/600/400', dataAiHint: 'android productivity', pricing: 'Freemium' },
            { name: 'Sorted^3', description: 'Hyper-scheduling to build your perfect day.', url: 'https://www.sortedapp.com/', image: 'https://picsum.photos/seed/sorted3/600/400', dataAiHint: 'hyper scheduling', pricing: 'Paid' },
            { name: 'Amazing Marvin', description: 'A customizable task manager built on behavioral psychology.', url: 'https://www.amazingmarvin.com/', image: 'https://picsum.photos/seed/amazingmarvin/600/400', dataAiHint: 'behavioral psychology', pricing: 'Paid' },
            { name: 'Toggl Plan', description: 'Beautifully simple project and resource planning.', url: 'https://toggl.com/plan/', image: 'https://picsum.photos/seed/togglplan/600/400', dataAiHint: 'team planning', pricing: 'Freemium' },
            { name: 'Freedcamp', description: 'A free project management and collaboration tool.', url: 'https://freedcamp.com/', image: 'https://picsum.photos/seed/freedcamp-time/600/400', dataAiHint: 'free time tracking', pricing: 'Freemium' },
            { name: 'ClickUp', description: 'One app to replace them all, with time tracking.', url: 'https://clickup.com/features/time-tracking', image: 'https://picsum.photos/seed/clickup-time/600/400', dataAiHint: 'time tracking app', pricing: 'Freemium' },
            { name: 'Asana', description: 'Track time to see where your team’s hours are going.', url: 'https://asana.com/apps/time-tracking', image: 'https://picsum.photos/seed/asana-time/600/400', dataAiHint: 'work time', pricing: 'Paid' },
            { name: 'Everhour', description: 'Time tracking and project management software.', url: 'https://everhour.com/', image: 'https://picsum.photos/seed/everhour/600/400', dataAiHint: 'team timesheet', pricing: 'Paid' },
            { name: 'Timely', description: 'Automatic time tracking software.', url: 'https://timelyapp.com/', image: 'https://picsum.photos/seed/timely-time/600/400', dataAiHint: 'ai time tracking', pricing: 'Paid' },
            { name: 'actiTIME', description: 'Time tracking software for businesses.', url: 'https://www.actitime.com/', image: 'https://picsum.photos/seed/actitime/600/400', dataAiHint: 'business time', pricing: 'Freemium' },
            { name: 'TimeHero', description: 'AI-powered work & project management.', url: 'https://timehero.com/', image: 'https://picsum.photos/seed/timehero/600/400', dataAiHint: 'ai work', pricing: 'Paid' },
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
            { name: 'MEGA', description: 'Secure cloud storage and communication.', url: 'https://mega.io/', image: 'https://picsum.photos/seed/mega/600/400', dataAiHint: 'encrypted storage', pricing: 'Freemium' },
            { name: 'Sync.com', description: 'Secure cloud storage that protects your privacy.', url: 'https://www.sync.com/', image: 'https://picsum.photos/seed/synccom/600/400', dataAiHint: 'private cloud', pricing: 'Paid' },
            { name: 'Icedrive', description: 'Next-generation cloud storage.', url: 'https://icedrive.net/', image: 'https://picsum.photos/seed/icedrive/600/400', dataAiHint: 'cloud drive', pricing: 'Freemium' },
            { name: 'Microsoft Office 365', description: 'Your productivity cloud across work and life.', url: 'https://www.microsoft.com/en-us/microsoft-365', image: 'https://picsum.photos/seed/office365/600/400', dataAiHint: 'office suite', pricing: 'Paid' },
            { name: 'LibreOffice', description: 'Free and open source office suite.', url: 'https://www.libreoffice.org/', image: 'https://picsum.photos/seed/libreoffice/600/400', dataAiHint: 'open source office', pricing: 'Free' },
            { name: 'Adobe Acrobat', description: 'The original PDF solution.', url: 'https://acrobat.adobe.com/', image: 'https://picsum.photos/seed/acrobat/600/400', dataAiHint: 'pdf editor', pricing: 'Paid' },
            { name: 'PDF Expert', description: 'The go-to PDF editor for Mac, iPhone and iPad.', url: 'https://pdfexpert.com/', image: 'https://picsum.photos/seed/pdfexpert/600/400', dataAiHint: 'apple pdf', pricing: 'Paid' },
            { name: 'Nitro PDF', description: 'PDF editor, converter, and eSignature software.', url: 'https://www.gonitro.com/', image: 'https://picsum.photos/seed/nitropdf/600/400', dataAiHint: 'document workflow', pricing: 'Paid' },
            { name: 'Foxit PDF Editor', description: 'A powerful and easy to use PDF editor.', url: 'https://www.foxit.com/pdf-editor/', image: 'https://picsum.photos/seed/foxit/600/400', dataAiHint: 'pdf solution', pricing: 'Freemium' },
            { name: 'File-Converter-Online.com', description: 'Convert files online for free.', url: 'https://file-converter-online.com/', image: 'https://picsum.photos/seed/fileconverter/600/400', dataAiHint: 'file conversion', pricing: 'Free' },
            { name: 'Zamzar', description: 'File conversion, made easy.', url: 'https://www.zamzar.com/', image: 'https://picsum.photos/seed/zamzar/600/400', dataAiHint: 'online converter', pricing: 'Freemium' },
            { name: 'CloudConvert', description: 'Online file converter.', url: 'https://cloudconvert.com/', image: 'https://picsum.photos/seed/cloudconvert/600/400', dataAiHint: '200+ formats', pricing: 'Freemium' },
            { name: 'FileZilla', description: 'The free FTP solution.', url: 'https://filezilla-project.org/', image: 'https://picsum.photos/seed/filezilla/600/400', dataAiHint: 'ftp client', pricing: 'Free' },
            { name: 'Cyberduck', description: 'Cloud storage browser for Mac and Windows.', url: 'https://cyberduck.io/', image: 'https://picsum.photos/seed/cyberduck/600/400', dataAiHint: 's3 browser', pricing: 'Freemium' },
            { name: 'WinRAR', description: 'The powerful archiver and archive manager.', url: 'https://www.win-rar.com/', image: 'https://picsum.photos/seed/winrar/600/400', dataAiHint: 'file compression', pricing: 'Freemium' },
            { name: '7-Zip', description: 'A file archiver with a high compression ratio.', url: 'https://www.7-zip.org/', image: 'https://picsum.photos/seed/7zip/600/400', dataAiHint: 'open source archiver', pricing: 'Free' },
            { name: 'Notion', description: 'The all-in-one workspace for docs and projects.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-docs/600/400', dataAiHint: 'team docs', pricing: 'Freemium' },
            { name: 'Coda', description: 'A new doc that brings words, data, and teams together.', url: 'https://coda.io/', image: 'https://picsum.photos/seed/coda-docs/600/400', dataAiHint: 'all-in-one doc', pricing: 'Freemium' },
            { name: 'HelloSign', description: 'The easiest way to eSign documents.', url: 'https://www.hellosign.com/', image: 'https://picsum.photos/seed/hellosign/600/400', dataAiHint: 'electronic signature', pricing: 'Freemium' },
            { name: 'PandaDoc', description: 'Create, send, and eSign proposals and contracts.', url: 'https://www.pandadoc.com/', image: 'https://picsum.photos/seed/pandadoc/600/400', dataAiHint: 'document automation', pricing: 'Freemium' },
            { name: 'Paperless', description: 'Turn your paper documents into digital files.', url: 'https://paperless.marinersoftware.com/', image: 'https://picsum.photos/seed/paperless-mariner/600/400', dataAiHint: 'document scanner', pricing: 'Paid' },
            { name: 'Paperless-ngx', description: 'An open source document management system.', url: 'https://paperless-ngx.com/', image: 'https://picsum.photos/seed/paperless-ngx/600/400', dataAiHint: 'self-hosted dms', pricing: 'Free' },
            { name: 'DocuWare', description: 'Cloud document management and workflow automation.', url: 'https://www.docuware.com/', image: 'https://picsum.photos/seed/docuware/600/400', dataAiHint: 'workflow automation', pricing: 'Paid' },
            { name: 'M-Files', description: 'Intelligent information management.', url: 'https://www.m-files.com/', image: 'https://picsum.photos/seed/mfiles/600/400', dataAiHint: 'information management', pricing: 'Paid' },
            { name: 'eFileCabinet', description: 'Document management software for business.', url: 'https://www.efilecabinet.com/', image: 'https://picsum.photos/seed/efilecabinet/600/400', dataAiHint: 'business dms', pricing: 'Paid' },
            { name: 'Templafy', description: 'The content enablement platform that aligns workforces.', url: 'https://www.templafy.com/', image: 'https://picsum.photos/seed/templafy/600/400', dataAiHint: 'content enablement', pricing: 'Paid' },
            { name: 'SendSpace', description: 'Send, receive, track and share your big files.', url: 'https://www.sendspace.com/', image: 'https://picsum.photos/seed/sendspace/600/400', dataAiHint: 'large file transfer', pricing: 'Freemium' },
            { name: 'Smash', description: 'The simplest way to send big files.', url: 'https://fromsmash.com/', image: 'https://picsum.photos/seed/smash/600/400', dataAiHint: 'big files', pricing: 'Freemium' },
            { name: 'Hightail', description: 'The best way to share files and collaborate.', url: 'https://www.hightail.com/', image: 'https://picsum.photos/seed/hightail/600/400', dataAiHint: 'creative collaboration', pricing: 'Freemium' },
            { name: 'ownCloud', description: 'The open platform for more productivity and security in digital collaboration.', url: 'https://owncloud.com/', image: 'https://picsum.photos/seed/owncloud/600/400', dataAiHint: 'self-hosted cloud', pricing: 'Freemium' },
            { name: 'Nextcloud', description: 'The self-hosted productivity platform.', url: 'https://nextcloud.com/', image: 'https://picsum.photos/seed/nextcloud/600/400', dataAiHint: 'private cloud', pricing: 'Free' },
            { name: 'Tresorit', description: 'End-to-end encrypted file sync & sharing.', url: 'https://tresorit.com/', image: 'https://picsum.photos/seed/tresorit/600/400', dataAiHint: 'encrypted cloud', pricing: 'Paid' },
            { name: 'Cryptomator', description: 'Free client-side encryption for your cloud files.', url: 'https://cryptomator.org/', image: 'https://picsum.photos/seed/cryptomator/600/400', dataAiHint: 'client-side encryption', pricing: 'Free' },
            { name: 'Yandex.Disk', description: 'Cloud storage from Yandex.', url: 'https://disk.yandex.com/', image: 'https://picsum.photos/seed/yandexdisk/600/400', dataAiHint: 'russian cloud', pricing: 'Freemium' },
            { name: 'Lumin PDF', description: 'Edit, sign and share PDFs online.', url: 'https://www.luminpdf.com/', image: 'https://picsum.photos/seed/luminpdf/600/400', dataAiHint: 'online pdf', pricing: 'Freemium' },
            { name: 'PDFescape', description: 'Free PDF editor & form filler.', url: 'https://www.pdfescape.com/', image: 'https://picsum.photos/seed/pdfescape/600/400', dataAiHint: 'pdf form', pricing: 'Freemium' },
            { name: 'Sejda', description: 'Easy, pleasant and productive PDF editor.', url: 'https://www.sejda.com/', image: 'https://picsum.photos/seed/sejda/600/400', dataAiHint: 'pleasant pdf', pricing: 'Freemium' },
            { name: 'ApowerPDF', description: 'One-stop solution for PDF files.', url: 'https://www.apowersoft.com/pdf-editor', image: 'https://picsum.photos/seed/apowerpdf/600/400', dataAiHint: 'pdf solution', pricing: 'Paid' },
            { name: 'Able2Extract', description: 'Convert, Create, and Edit PDF Documents.', url: 'https://www.investintech.com/able2extract/', image: 'https://picsum.photos/seed/able2extract/600/400', dataAiHint: 'pdf converter', pricing: 'Paid' },
            { name: 'DocFly', description: 'Online PDF editor.', url: 'https://docfly.com/', image: 'https://picsum.photos/seed/docfly/600/400', dataAiHint: 'edit pdf online', pricing: 'Freemium' },
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
            { name: 'Google Meet', description: 'Secure video meetings for everyone.', url: 'https://meet.google.com/', image: 'https://picsum.photos/seed/gmeet/600/400', dataAiHint: 'google meeting', pricing: 'Free' },
            { name: 'Skype', description: 'Free video and audio calls over the internet.', url: 'https://www.skype.com/', image: 'https://picsum.photos/seed/skype/600/400', dataAiHint: 'internet calls', pricing: 'Free' },
            { name: 'WhatsApp', description: 'Simple. Secure. Reliable messaging.', url: 'https://www.whatsapp.com/', image: 'https://picsum.photos/seed/whatsapp/600/400', dataAiHint: 'mobile messaging', pricing: 'Free' },
            { name: 'Signal', description: 'Say anything. State-of-the-art end-to-end encryption.', url: 'https://signal.org/', image: 'https://picsum.photos/seed/signal/600/400', dataAiHint: 'private messenger', pricing: 'Free' },
            { name: 'Whereby', description: 'Easy video meetings with no login for guests.', url: 'https://whereby.com/', image: 'https://picsum.photos/seed/whereby/600/400', dataAiHint: 'simple video', pricing: 'Freemium' },
            { name: 'Jitsi Meet', description: 'Secure, Simple and Scalable Video Conferences.', url: 'https://meet.jit.si/', image: 'https://picsum.photos/seed/jitsi/600/400', dataAiHint: 'open source video', pricing: 'Free' },
            { name: 'Mural', description: 'A digital workspace for visual collaboration.', url: 'https://www.mural.co/', image: 'https://picsum.photos/seed/mural-collab/600/400', dataAiHint: 'visual workspace', pricing: 'Freemium' },
            { name: 'Figma', description: 'The collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-collab/600/400', dataAiHint: 'design collaboration', pricing: 'Freemium' },
            { name: 'InVision Freehand', description: 'The intelligent whiteboard.', url: 'https://www.invisionapp.com/freehand', image: 'https://picsum.photos/seed/invision-freehand/600/400', dataAiHint: 'intelligent whiteboard', pricing: 'Freemium' },
            { name: 'Conceptboard', description: 'The collaborative online whiteboard for teams.', url: 'https://conceptboard.com/', image: 'https://picsum.photos/seed/conceptboard/600/400', dataAiHint: 'team whiteboard', pricing: 'Freemium' },
            { name: 'Stormboard', description: 'Digital workspace for remote teams.', url: 'https://stormboard.com/', image: 'https://picsum.photos/seed/stormboard/600/400', dataAiHint: 'remote collaboration', pricing: 'Freemium' },
            { name: 'Ryver', description: 'Team Communication and Task Management.', url: 'https://ryver.com/', image: 'https://picsum.photos/seed/ryver/600/400', dataAiHint: 'team tasks', pricing: 'Paid' },
            { name: 'Flock', description: 'The communication app for teams.', url: 'https://www.flock.com/', image: 'https://picsum.photos/seed/flock/600/400', dataAiHint: 'team communication', pricing: 'Freemium' },
            { name: 'Chanty', description: 'Simple AI-powered team chat.', url: 'https://www.chanty.com/', image: 'https://picsum.photos/seed/chanty/600/400', dataAiHint: 'ai chat', pricing: 'Freemium' },
            { name: 'Front', description: 'The customer communication hub.', url: 'https://front.com/', image: 'https://picsum.photos/seed/front/600/400', dataAiHint: 'shared inbox', pricing: 'Paid' },
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
            { name: 'Nanonets', description: 'Intelligent automation for business processes.', url: 'https://nanonets.com/', image: 'https://picsum.photos/seed/nanonets/600/400', dataAiHint: 'ocr automation', pricing: 'Paid' },
            { name: 'Rossum', description: 'AI-powered document processing.', url: 'https://rossum.ai/', image: 'https://picsum.photos/seed/rossum/600/400', dataAiHint: 'intelligent document', pricing: 'Paid' },
            { name: 'Kofax', description: 'Intelligent automation software platform.', url: 'https://www.kofax.com/', image: 'https://picsum.photos/seed/kofax/600/400', dataAiHint: 'digital transformation', pricing: 'Paid' },
            { name: 'Formstack', description: 'Workplace productivity platform.', url: 'https://www.formstack.com/', image: 'https://picsum.photos/seed/formstack/600/400', dataAiHint: 'online forms', pricing: 'Paid' },
            { name: 'PDF.co', description: 'PDF and barcode tools for developers.', url: 'https://pdf.co/', image: 'https://picsum.photos/seed/pdfco/600/400', dataAiHint: 'pdf api', pricing: 'Freemium' },
            { name: 'ZappySys', description: 'SSIS components for data integration.', url: 'https://zappysys.com/', image: 'https://picsum.photos/seed/zappysys/600/400', dataAiHint: 'ssis powerpack', pricing: 'Paid' },
            { name: 'Boomi', description: 'The integration platform as a service (iPaaS).', url: 'https://boomi.com/', image: 'https://picsum.photos/seed/boomi/600/400', dataAiHint: 'ipaas platform', pricing: 'Paid' },
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
            { name: 'IntelliJ IDEA', description: 'The most intelligent Java IDE.', url: 'https://www.jetbrains.com/idea/', image: 'https://picsum.photos/seed/intellij-idea/600/400', dataAiHint: 'java ide', pricing: 'Freemium' },
            { name: 'Sublime Text', description: 'A sophisticated text editor for code, markup and prose.', url: 'https://www.sublimetext.com/', image: 'https://picsum.photos/seed/sublime-text/600/400', dataAiHint: 'text editor', pricing: 'Freemium' },
            { name: 'GitHub', description: 'The complete developer platform.', url: 'https://github.com/', image: 'https://picsum.photos/seed/github/600/400', dataAiHint: 'code hosting', pricing: 'Freemium' },
            { name: 'GitLab', description: 'The DevSecOps Platform.', url: 'https://about.gitlab.com/', image: 'https://picsum.photos/seed/gitlab/600/400', dataAiHint: 'devsecops', pricing: 'Freemium' },
            { name: 'Sourcetree', description: 'A free Git client for Windows and Mac.', url: 'https://www.sourcetreeapp.com/', image: 'https://picsum.photos/seed/sourcetree/600/400', dataAiHint: 'git gui', pricing: 'Free' },
            { name: 'iTerm2', description: 'A terminal emulator for macOS.', url: 'https://iterm2.com/', image: 'https://picsum.photos/seed/iterm2/600/400', dataAiHint: 'mac terminal', pricing: 'Free' },
            { name: 'Hyper', description: 'A terminal built on web technologies.', url: 'https://hyper.is/', image: 'https://picsum.photos/seed/hyper-term/600/400', dataAiHint: 'electron terminal', pricing: 'Free' },
            { name: 'Oh My Zsh', description: 'A delightful community-driven framework for managing your zsh configuration.', url: 'https://ohmyz.sh/', image: 'https://picsum.photos/seed/ohmyzsh/600/400', dataAiHint: 'zsh framework', pricing: 'Free' },
            { name: 'Prettier', description: 'An opinionated code formatter.', url: 'https://prettier.io/', image: 'https://picsum.photos/seed/prettier/600/400', dataAiHint: 'code formatter', pricing: 'Free' },
            { name: 'ESLint', description: 'Find and fix problems in your JavaScript code.', url: 'https://eslint.org/', image: 'https://picsum.photos/seed/eslint/600/400', dataAiHint: 'javascript linter', pricing: 'Free' },
            { name: 'Insomnia', description: 'The open source API client.', url: 'https://insomnia.rest/', image: 'https://picsum.photos/seed/insomnia/600/400', dataAiHint: 'api design', pricing: 'Freemium' },
            { name: 'CodeSandbox', description: 'An instant IDE and prototyping tool for rapid web development.', url: 'https://codesandbox.io/', image: 'https://picsum.photos/seed/codesandbox/600/400', dataAiHint: 'online ide', pricing: 'Freemium' },
            { name: 'StackBlitz', description: 'The instant dev environment.', url: 'https://stackblitz.com/', image: 'https://picsum.photos/seed/stackblitz/600/400', dataAiHint: 'web ide', pricing: 'Freemium' },
            { name: 'Figma', description: 'The collaborative interface design tool.', url: 'https://www.figma.com/', image: 'https://picsum.photos/seed/figma-dev/600/400', dataAiHint: 'design tool', pricing: 'Freemium' },
            { name: 'Zeplin', description: 'The better way to share, organize and collaborate on designs.', url: 'https://zeplin.io/', image: 'https://picsum.photos/seed/zeplin/600/400', dataAiHint: 'design handoff', pricing: 'Freemium' },
            { name: 'Jira', description: 'The #1 software development tool used by agile teams.', url: 'https://www.atlassian.com/software/jira', image: 'https://picsum.photos/seed/jira-dev/600/400', dataAiHint: 'issue tracking', pricing: 'Freemium' },
            { name: 'Notion', description: 'The all-in-one workspace for your notes, tasks, wikis, and databases.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-dev/600/400', dataAiHint: 'dev docs', pricing: 'Freemium' },
            { name: 'Cacher', description: 'Code snippet organizer for professional developers.', url: 'https://www.cacher.io/', image: 'https://picsum.photos/seed/cacher/600/400', dataAiHint: 'snippet manager', pricing: 'Freemium' },
            { name: 'CodeStream', description: 'Discuss, review, and understand code in your IDE.', url: 'https://www.codestream.com/', image: 'https://picsum.photos/seed/codestream/600/400', dataAiHint: 'code collaboration', pricing: 'Free' },
            { name: 'CodePen', description: 'The best place to build, test, and discover front-end code.', url: 'https://codepen.io/', image: 'https://picsum.photos/seed/codepen/600/400', dataAiHint: 'frontend playground', pricing: 'Freemium' },
            { name: 'JSFiddle', description: 'Test your JavaScript, CSS, HTML or CoffeeScript online.', url: 'https://jsfiddle.net/', image: 'https://picsum.photos/seed/jsfiddle/600/400', dataAiHint: 'online editor', pricing: 'Free' },
            { name: 'Sourcegraph', description: 'Universal Code Search.', url: 'https://sourcegraph.com/', image: 'https://picsum.photos/seed/sourcegraph/600/400', dataAiHint: 'code search', pricing: 'Freemium' },
            { name: 'Snyk', description: 'Developer security that finds and fixes vulnerabilities.', url: 'https://snyk.io/', image: 'https://picsum.photos/seed/snyk/600/400', dataAiHint: 'code security', pricing: 'Freemium' },
            { name: 'SonarQube', description: 'Continuous Code Quality.', url: 'https://www.sonarqube.org/', image: 'https://picsum.photos/seed/sonarqube/600/400', dataAiHint: 'code analysis', pricing: 'Free' },
            { name: 'Ray', description: 'A delightful way to debug.', url: 'https://myray.app/', image: 'https://picsum.photos/seed/ray/600/400', dataAiHint: 'debugging app', pricing: 'Paid' },
            { name: 'Dash', description: 'An API Documentation Browser and Code Snippet Manager.', url: 'https://kapeli.com/dash', image: 'https://picsum.photos/seed/dash/600/400', dataAiHint: 'api docs', pricing: 'Paid' },
            { name: 'Vercel', description: 'The platform for frontend developers.', url: 'https://vercel.com/', image: 'https://picsum.photos/seed/vercel/600/400', dataAiHint: 'hosting platform', pricing: 'Freemium' },
            { name: 'Netlify', description: 'Build, deploy, and scale modern web projects.', url: 'https://www.netlify.com/', image: 'https://picsum.photos/seed/netlify/600/400', dataAiHint: 'jamstack hosting', pricing: 'Freemium' },
            { name: 'LogRocket', description: 'Session replay and product analytics.', url: 'https://logrocket.com/', image: 'https://picsum.photos/seed/logrocket/600/400', dataAiHint: 'frontend monitoring', pricing: 'Freemium' },
            { name: 'BrowserStack', description: 'App & Browser Testing Platform.', url: 'https://www.browserstack.com/', image: 'https://picsum.photos/seed/browserstack/600/400', dataAiHint: 'cross-browser testing', pricing: 'Paid' },
            { name: 'Cypress', description: 'Fast, easy and reliable testing for anything that runs in a browser.', url: 'https://www.cypress.io/', image: 'https://picsum.photos/seed/cypress-dev/600/400', dataAiHint: 'e2e testing', pricing: 'Freemium' },
            { name: 'Jest', description: 'Delightful JavaScript Testing.', url: 'https://jestjs.io/', image: 'https://picsum.photos/seed/jest-dev/600/400', dataAiHint: 'unit testing', pricing: 'Free' },
            { name: 'Storybook', description: 'Build UIs in isolation.', url: 'https://storybook.js.org/', image: 'https://picsum.photos/seed/storybook-dev/600/400', dataAiHint: 'component library', pricing: 'Free' },
            { name: 'Code Climate', description: 'Automated Code Review.', url: 'https://codeclimate.com/', image: 'https://picsum.photos/seed/codeclimate/600/400', dataAiHint: 'code quality', pricing: 'Freemium' },
            { name: 'CircleCI', description: 'Continuous Integration and Delivery.', url: 'https://circleci.com/', image: 'https://picsum.photos/seed/circleci-dev/600/400', dataAiHint: 'ci cd', pricing: 'Freemium' },
            { name: 'TravisCI', description: 'Test and Deploy with Confidence.', url: 'https://www.travis-ci.com/', image: 'https://picsum.photos/seed/travisci-dev/600/400', dataAiHint: 'continuous integration', pricing: 'Freemium' },
            { name: 'Jenkins', description: 'The leading open source automation server.', url: 'https://www.jenkins.io/', image: 'https://picsum.photos/seed/jenkins-dev/600/400', dataAiHint: 'automation server', pricing: 'Free' },
            { name: 'Terraform', description: 'Infrastructure as Code.', url: 'https://www.terraform.io/', image: 'https://picsum.photos/seed/terraform-dev/600/400', dataAiHint: 'iac tool', pricing: 'Free' },
            { name: 'Ansible', description: 'Simple, agentless IT automation.', url: 'https://www.ansible.com/', image: 'https://picsum.photos/seed/ansible/600/400', dataAiHint: 'it automation', pricing: 'Free' },
            { name: 'Vagrant', description: 'Development environments made easy.', url: 'https://www.vagrantup.com/', image: 'https://picsum.photos/seed/vagrant/600/400', dataAiHint: 'dev environments', pricing: 'Free' },
            { name: 'Lens', description: 'The Kubernetes IDE.', url: 'https://k8slens.dev/', image: 'https://picsum.photos/seed/lens-k8s/600/400', dataAiHint: 'kubernetes ide', pricing: 'Freemium' },
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
            { name: 'ProWritingAid', description: 'A grammar checker, style editor, and writing mentor.', url: 'https://prowritingaid.com/', image: 'https://picsum.photos/seed/prowritingaid/600/400', dataAiHint: 'style editor', pricing: 'Freemium' },
            { name: 'Frase', description: 'AI for SEO. Research, write, and optimize high-quality SEO content.', url: 'https://www.frase.io/', image: 'https://picsum.photos/seed/frase/600/400', dataAiHint: 'seo content', pricing: 'Paid' },
            { name: 'Surfer SEO', description: 'Content intelligence tool that merges content strategy, creation, and optimization.', url: 'https://surferseo.com/', image: 'https://picsum.photos/seed/surferseo/600/400', dataAiHint: 'seo optimization', pricing: 'Paid' },
            { name: 'Canva', description: 'Design anything. Publish anywhere.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-content/600/400', dataAiHint: 'graphic design', pricing: 'Freemium' },
            { name: 'Loomly', description: 'The Brand Success Platform for marketing teams.', url: 'https://www.loomly.com/', image: 'https://picsum.photos/seed/loomly/600/400', dataAiHint: 'social media planning', pricing: 'Paid' },
            { name: 'Hootsuite', description: 'Manage all your social media in one place.', url: 'https://www.hootsuite.com/', image: 'https://picsum.photos/seed/hootsuite/600/400', dataAiHint: 'social management', pricing: 'Paid' },
            { name: 'Sprout Social', description: 'A social media management platform.', url: 'https://sproutsocial.com/', image: 'https://picsum.photos/seed/sproutsocial/600/400', dataAiHint: 'social analytics', pricing: 'Paid' },
            { name: 'CoSchedule', description: 'The marketing calendar for everything.', url: 'https://coschedule.com/', image: 'https://picsum.photos/seed/coschedule/600/400', dataAiHint: 'marketing calendar', pricing: 'Freemium' },
            { name: 'Airstory', description: 'The writing software for researchers.', url: 'https://www.airstory.co/', image: 'https://picsum.photos/seed/airstory/600/400', dataAiHint: 'research writing', pricing: 'Paid' },
            { name: 'Final Draft', description: 'The number-one selling screenwriting software in the world.', url: 'https://www.finaldraft.com/', image: 'https://picsum.photos/seed/finaldraft/600/400', dataAiHint: 'screenwriting', pricing: 'Paid' },
            { name: 'iA Writer', description: 'The focused writing app.', url: 'https://ia.net/writer', image: 'https://picsum.photos/seed/iawriter-prod/600/400', dataAiHint: 'minimalist editor', pricing: 'Paid' },
            { name: 'Byword', description: 'Simple and efficient text editing for Mac, iPhone and iPad.', url: 'https://bywordapp.com/', image: 'https://picsum.photos/seed/byword/600/400', dataAiHint: 'markdown app', pricing: 'Paid' },
            { name: 'Vellum', description: 'Create beautiful books.', url: 'https://vellum.pub/', image: 'https://picsum.photos/seed/vellum/600/400', dataAiHint: 'ebook formatting', pricing: 'Paid' },
            { name: 'Atticus', description: 'An all-in-one writing and formatting tool for authors.', url: 'https://www.atticus.io/', image: 'https://picsum.photos/seed/atticus/600/400', dataAiHint: 'author software', pricing: 'Paid' },
            { name: 'Storyist', description: 'A powerful writing environment for novelists and screenwriters.', url: 'https://storyist.com/', image: 'https://picsum.photos/seed/storyist/600/400', dataAiHint: 'novel writing', pricing: 'Paid' },
            { name: 'Campfire', description: 'Write better stories, faster.', url: 'https://www.campfirewriting.com/', image: 'https://picsum.photos/seed/campfire/600/400', dataAiHint: 'story planning', pricing: 'Freemium' },
            { name: 'World Anvil', description: 'Worldbuilding tools, writing software, and RPG campaign manager.', url: 'https://www.worldanvil.com/', image: 'https://picsum.photos/seed/worldanvil/600/400', dataAiHint: 'worldbuilding', pricing: 'Freemium' },
            { name: 'Plottr', description: 'Visually plot your books.', url: 'https://plottr.com/', image: 'https://picsum.photos/seed/plottr/600/400', dataAiHint: 'book outlining', pricing: 'Paid' },
            { name: 'BuzzSumo', description: 'Find what content is popular by topic or on any website.', url: 'https://buzzsumo.com/', image: 'https://picsum.photos/seed/buzzsumo/600/400', dataAiHint: 'content analysis', pricing: 'Freemium' },
            { name: 'AnswerThePublic', description: 'Free visual keyword research & content ideas tool.', url: 'https://answerthepublic.com/', image: 'https://picsum.photos/seed/answerthepublic/600/400', dataAiHint: 'keyword ideas', pricing: 'Freemium' },
            { name: 'Headline Studio', description: 'Write better headlines that will boost your traffic.', url: 'https://coschedule.com/headline-studio', image: 'https://picsum.photos/seed/headlinestudio/600/400', dataAiHint: 'headline analyzer', pricing: 'Freemium' },
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
            { name: 'Forest', description: 'Stay focused, be present. Grow a virtual tree.', url: 'https://www.forestapp.cc/', image: 'https://picsum.photos/seed/forest-focus/600/400', dataAiHint: 'gamified focus', pricing: 'Freemium' },
            { name: 'HazeOver', description: 'Distraction dimmer for Mac.', url: 'https://hazeover.com/', image: 'https://picsum.photos/seed/hazeover/600/400', dataAiHint: 'mac dimmer', pricing: 'Paid' },
            { name: 'Serene', description: 'A Mac app for laser focus.', url: 'https://sereneapp.com/', image: 'https://picsum.photos/seed/serene/600/400', dataAiHint: 'laser focus', pricing: 'Paid' },
            { name: 'Mindful Browsing', description: 'A browser extension to help you be more mindful online.', url: 'https://mindfulbrowsing.org/', image: 'https://picsum.photos/seed/mindfulbrowsing/600/400', dataAiHint: 'mindful web', pricing: 'Free' },
            { name: 'Focus', description: 'The best website blocker for macOS.', url: 'https://heyfocus.com/', image: 'https://picsum.photos/seed/focus-mac/600/400', dataAiHint: 'mac blocker', pricing: 'Paid' },
            { name: 'Pluckeye', description: 'A media filter for porn addicts.', url: 'https://www.pluckeye.net/', image: 'https://picsum.photos/seed/pluckeye/600/400', dataAiHint: 'content filter', pricing: 'Freemium' },
            { name: 'Noisli', description: 'Improve focus and boost productivity with background sounds.', url: 'https://www.noisli.com/', image: 'https://picsum.photos/seed/noisli/600/400', dataAiHint: 'background sounds', pricing: 'Freemium' },
            { name: 'myNoise', description: 'The noise machine for your ears.', url: 'https://mynoise.net/', image: 'https://picsum.photos/seed/mynoise/600/400', dataAiHint: 'sound generator', pricing: 'Free' },
            { name: 'FocalFilter', description: 'A free program that helps you focus by temporarily blocking distracting websites.', url: 'https://www.focalfilter.com/', image: 'https://picsum.photos/seed/focalfilter/600/400', dataAiHint: 'windows blocker', pricing: 'Free' },
            { name: 'Offtime', description: '(Un)plug and focus. The app to balance your digital life.', url: 'https://offtime.app/', image: 'https://picsum.photos/seed/offtime/600/400', dataAiHint: 'digital detox', pricing: 'Freemium' },
            { name: 'AppBlock', description: 'Block distracting apps & websites, stay focused.', url: 'https://www.appblock.app/', image: 'https://picsum.photos/seed/appblock/600/400', dataAiHint: 'mobile focus', pricing: 'Freemium' },
            { name: 'Space', description: 'Break your phone addiction.', url: 'https://findyourphonelifebalance.com/', image: 'https://picsum.photos/seed/space-app/600/400', dataAiHint: 'phone balance', pricing: 'Freemium' },
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
            { name: 'FreshBooks', description: 'Accounting software built for owners.', url: 'https://www.freshbooks.com/', image: 'https://picsum.photos/seed/freshbooks-fin/600/400', dataAiHint: 'small business', pricing: 'Paid' },
            { name: 'Xero', description: 'Online accounting software for your small business.', url: 'https://www.xero.com/', image: 'https://picsum.photos/seed/xero-fin/600/400', dataAiHint: 'online accounting', pricing: 'Paid' },
            { name: 'Zoho Books', description: 'Powerful financial platform for your business.', url: 'https://www.zoho.com/books/', image: 'https://picsum.photos/seed/zohobooks-fin/600/400', dataAiHint: 'finance platform', pricing: 'Freemium' },
            { name: 'Stripe', description: 'Payments infrastructure for the internet.', url: 'https://stripe.com/', image: 'https://picsum.photos/seed/stripe-fin/600/400', dataAiHint: 'payment processing', pricing: 'Paid' },
            { name: 'PayPal', description: 'A simpler, safer way to pay and get paid.', url: 'https://www.paypal.com/', image: 'https://picsum.photos/seed/paypal-fin/600/400', dataAiHint: 'online payments', pricing: 'Freemium' },
            { name: 'Square', description: 'Tools to run and grow your business.', url: 'https://squareup.com/', image: 'https://picsum.photos/seed/square-fin/600/400', dataAiHint: 'pos system', pricing: 'Paid' },
            { name: 'Rippling', description: 'Manage HR, IT, and Finance in one platform.', url: 'https://www.rippling.com/', image: 'https://picsum.photos/seed/rippling-fin/600/400', dataAiHint: 'workforce platform', pricing: 'Paid' },
            { name: 'Bill.com', description: 'AP/AR automation that simplifies business payments.', url: 'https://www.bill.com/', image: 'https://picsum.photos/seed/billcom/600/400', dataAiHint: 'payment automation', pricing: 'Paid' },
            { name: 'Melio', description: 'A free way to pay and get paid for small businesses.', url: 'https://www.melio.com/', image: 'https://picsum.photos/seed/melio/600/400', dataAiHint: 'business payments', pricing: 'Free' },
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
            { name: 'Lattice', description: 'The people management platform.', url: 'https://lattice.com/', image: 'https://picsum.photos/seed/lattice/600/400', dataAiHint: 'performance management', pricing: 'Paid' },
            { name: 'Culture Amp', description: 'The employee experience platform.', url: 'https://www.cultureamp.com/', image: 'https://picsum.photos/seed/cultureamp/600/400', dataAiHint: 'employee experience', pricing: 'Paid' },
            { name: 'Greenhouse', description: 'Hiring software for ambitious companies.', url: 'https://www.greenhouse.io/', image: 'https://picsum.photos/seed/greenhouse/600/400', dataAiHint: 'recruiting software', pricing: 'Paid' },
            { name: 'Lever', description: 'A modern talent acquisition suite.', url: 'https://www.lever.co/', image: 'https://picsum.photos/seed/lever/600/400', dataAiHint: 'talent acquisition', pricing: 'Paid' },
            { name: 'Asana', description: 'Manage your team’s work, projects, & tasks online.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-biz/600/400', dataAiHint: 'team projects', pricing: 'Freemium' },
            { name: 'Monday.com', description: 'Work OS that powers teams.', url: 'https://monday.com/', image: 'https://picsum.photos/seed/monday-biz/600/400', dataAiHint: 'team workflow', pricing: 'Paid' },
            { name: 'Notion', description: 'The all-in-one workspace.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-biz/600/400', dataAiHint: 'team wiki', pricing: 'Freemium' },
            { name: 'Slack', description: 'Where work happens.', url: 'https://slack.com/', image: 'https://picsum.photos/seed/slack-biz/600/400', dataAiHint: 'team communication', pricing: 'Freemium' },
            { name: 'Microsoft Teams', description: 'The hub for teamwork in Microsoft 365.', url: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software', image: 'https://picsum.photos/seed/teams-biz/600/400', dataAiHint: 'business chat', pricing: 'Freemium' },
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
            { name: 'LinkedIn Learning', description: 'Online courses for creative, technical and business skills.', url: 'https://www.linkedin.com/learning/', image: 'https://picsum.photos/seed/linkedin-learning/600/400', dataAiHint: 'professional skills', pricing: 'Paid' },
            { name: 'MasterClass', description: 'Learn from the world\'s best.', url: 'https://www.masterclass.com/', image: 'https://picsum.photos/seed/masterclass/600/400', dataAiHint: 'expert classes', pricing: 'Paid' },
            { name: 'Codecademy', description: 'Learn to code interactively, for free.', url: 'https://www.codecademy.com/', image: 'https://picsum.photos/seed/codecademy/600/400', dataAiHint: 'learn coding', pricing: 'Freemium' },
            { name: 'freeCodeCamp', description: 'Learn to code for free. Build projects. Earn certifications.', url: 'https://www.freecodecamp.org/', image: 'https://picsum.photos/seed/freecodecamp/600/400', dataAiHint: 'coding bootcamp', pricing: 'Free' },
            { name: 'Memrise', description: 'The fastest way to learn a language.', url: 'https://www.memrise.com/', image: 'https://picsum.photos/seed/memrise/600/400', dataAiHint: 'language app', pricing: 'Freemium' },
            { name: 'Babbel', description: 'Language for life.', url: 'https://www.babbel.com/', image: 'https://picsum.photos/seed/babbel/600/400', dataAiHint: 'conversational language', pricing: 'Paid' },
            { name: 'Quizlet', description: 'The world’s largest student and teacher online learning community.', url: 'https://quizlet.com/', image: 'https://picsum.photos/seed/quizlet/600/400', dataAiHint: 'study flashcards', pricing: 'Freemium' },
            { name: 'Chegg', description: 'Textbook solutions and expert Q&A.', url: 'https://www.chegg.com/', image: 'https://picsum.photos/seed/chegg/600/400', dataAiHint: 'homework help', pricing: 'Paid' },
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
            { name: 'LaunchBar', description: 'An intelligent file and app launcher for Mac.', url: 'https://www.obdev.at/products/launchbar/index.html', image: 'https://picsum.photos/seed/launchbar/600/400', dataAiHint: 'mac launcher', pricing: 'Paid' },
            { name: 'TextExpander', description: 'Smarter typing for busy people.', url: 'https://textexpander.com/', image: 'https://picsum.photos/seed/textexpander/600/400', dataAiHint: 'snippet expander', pricing: 'Paid' },
            { name: 'aText', description: 'A typing accelerator.', url: 'https://www.trankynam.com/atext/', image: 'https://picsum.photos/seed/atext/600/400', dataAiHint: 'typing macro', pricing: 'Paid' },
            { name: 'Keyboard Maestro', description: 'Automate your Mac.', url: 'https://www.keyboardmaestro.com/', image: 'https://picsum.photos/seed/keyboardmaestro/600/400', dataAiHint: 'mac automation', pricing: 'Paid' },
            { name: 'Magnet', description: 'A window manager for Mac.', url: 'https://magnet.crowdcafe.com/', image: 'https://picsum.photos/seed/magnet/600/400', dataAiHint: 'window manager', pricing: 'Paid' },
            { name: 'Rectangle', description: 'Move and resize windows in macOS with keyboard shortcuts.', url: 'https://rectangleapp.com/', image: 'https://picsum.photos/seed/rectangle/600/400', dataAiHint: 'mac window', pricing: 'Free' },
            { name: 'Bartender', description: 'Organize your menu bar apps on macOS.', url: 'https://www.macbartender.com/', image: 'https://picsum.photos/seed/bartender/600/400', dataAiHint: 'menu bar', pricing: 'Paid' },
            { name: 'CopyQ', description: 'Advanced clipboard manager with editing and scripting features.', url: 'https://hluk.github.io/CopyQ/', image: 'https://picsum.photos/seed/copyq/600/400', dataAiHint: 'clipboard scripting', pricing: 'Free' },
            { name: 'Paste', description: 'A smart clipboard history manager for Mac.', url: 'https://pasteapp.io/', image: 'https://picsum.photos/seed/pasteapp/600/400', dataAiHint: 'mac clipboard', pricing: 'Paid' },
            { name: 'f.lux', description: 'Adapts the color of your computer\'s display to the time of day.', url: 'https://justgetflux.com/', image: 'https://picsum.photos/seed/flux/600/400', dataAiHint: 'screen color', pricing: 'Free' },
            { name: 'Resilio Sync', description: 'Fast, reliable, and simple file sync and share solution.', url: 'https://www.resilio.com/individuals/', image: 'https://picsum.photos/seed/resiliosync/600/400', dataAiHint: 'p2p sync', pricing: 'Freemium' },
            { name: 'OnyX', description: 'A multifunction utility for macOS.', url: 'https://www.titanium-software.fr/en/onyx.html', image: 'https://picsum.photos/seed/onyx/600/400', dataAiHint: 'mac utility', pricing: 'Free' },
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
            { name: 'Otter.ai', description: 'AI-powered transcription service.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otterai/600/400', dataAiHint: 'ai transcription', pricing: 'Freemium' },
            { name: 'Glean', description: 'The work assistant with the answers you need.', url: 'https://www.glean.com/', image: 'https://picsum.photos/seed/glean/600/400', dataAiHint: 'enterprise search', pricing: 'Paid' },
            { name: 'Textio', description: 'Augmented writing platform.', url: 'https://textio.com/', image: 'https://picsum.photos/seed/textio/600/400', dataAiHint: 'augmented writing', pricing: 'Paid' },
            { name: 'Beautiful.ai', description: 'Presentation software that designs for you.', url: 'https://www.beautiful.ai/', image: 'https://picsum.photos/seed/beautifulai/600/400', dataAiHint: 'ai presentation', pricing: 'Freemium' },
            { name: 'Tome', description: 'The AI-powered storytelling format.', url: 'https://tome.app/', image: 'https://picsum.photos/seed/tome/600/400', dataAiHint: 'ai storytelling', pricing: 'Freemium' },
            { name: 'Runway', description: 'AI creative tools.', url: 'https://runwayml.com/', image: 'https://picsum.photos/seed/runway-ai/600/400', dataAiHint: 'ai video editing', pricing: 'Freemium' },
            { name: 'Descript', description: 'All-in-one audio & video editing, as easy as a doc.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-ai/600/400', dataAiHint: 'ai audio', pricing: 'Freemium' },
        ]
    }
];

export default function ProductivityToolsPage() {
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
                    <Zap className="w-6 h-6 text-foreground" />
                    <h1 className="text-2xl font-bold text-foreground">
                    Productivity Tools
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

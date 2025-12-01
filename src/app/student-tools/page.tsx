'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Youtube, MessageSquare, BookOpen, FileText, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, GraduationCap, Filter
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
        title: "YouTube Summarizer",
        icon: <Youtube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Eightify AI', description: 'Summarize YouTube videos with AI.', url: 'https://eightify.app/', image: 'https://picsum.photos/seed/eightify/600/400', dataAiHint: 'youtube summary', pricing: 'Freemium' },
            { name: 'Glarity', description: 'Summarize Google search results and YouTube videos.', url: 'https://glarity.app/', image: 'https://picsum.photos/seed/glarity/600/400', dataAiHint: 'video transcript', pricing: 'Free' },
            { name: 'YouTube Transcript Extractor', description: 'Get transcripts from any YouTube video.', url: 'https://youtubetranscript.com/', image: 'https://picsum.photos/seed/youtubetranscript/600/400', dataAiHint: 'video text', pricing: 'Free' },
            { name: 'VidSummize', description: 'AI-powered video summarization.', url: 'https://vidsummize.com/', image: 'https://picsum.photos/seed/vidsummize/600/400', dataAiHint: 'video recap', pricing: 'Freemium' },
            { name: 'Recall.ai', description: 'Capture and search insights from video calls.', url: 'https://www.recall.ai/', image: 'https://picsum.photos/seed/recallai/600/400', dataAiHint: 'meeting summary', pricing: 'Paid' },
            { name: 'Summarize.tech', description: 'AI-powered summaries of long YouTube videos.', url: 'https://www.summarize.tech/', image: 'https://picsum.photos/seed/summarizetech/600/400', dataAiHint: 'lecture summary', pricing: 'Freemium' },
            { name: 'Mindgrasp', description: 'AI learning assistant that creates notes and answers questions from any material.', url: 'https://mindgrasp.ai/', image: 'https://picsum.photos/seed/mindgrasp/600/400', dataAiHint: 'ai learning', pricing: 'Paid' },
            { name: 'Clipnote', description: 'Take timestamped notes on YouTube videos.', url: 'https://clipnote.io/', image: 'https://picsum.photos/seed/clipnote/600/400', dataAiHint: 'video notes', pricing: 'Freemium' },
            { name: 'TubeNoter', description: 'Note-taking app for YouTube.', url: 'https://chrome.google.com/webstore/detail/youtube-notes-take-notes/pfnjccjbgihhbgpbeljcpdmbpkpchgke', image: 'https://picsum.photos/seed/tubenoter/600/400', dataAiHint: 'youtube notes', pricing: 'Free' },
            { name: 'ReClipped', description: 'Take notes, create summaries and discover ideas from videos.', url: 'https://www.reclipped.com/', image: 'https://picsum.photos/seed/reclipped/600/400', dataAiHint: 'video annotation', pricing: 'Freemium' },
            { name: 'Glasp', description: 'Social web highlighter for learners.', url: 'https://glasp.co/', image: 'https://picsum.photos/seed/glasp/600/400', dataAiHint: 'web highlighter', pricing: 'Free' },
            { name: 'VideoKen', description: 'AI-powered video learning platform.', url: 'https://videoken.com/', image: 'https://picsum.photos/seed/videoken/600/400', dataAiHint: 'video learning', pricing: 'Paid' },
            { name: 'Timely', description: 'Bookmark and share specific moments in YouTube videos.', url: 'https://timely.video/', image: 'https://picsum.photos/seed/timelyvideo/600/400', dataAiHint: 'video timestamp', pricing: 'Free' },
            { name: 'YTSummary', description: 'Summarize YouTube videos online.', url: 'https://www.ytsummary.com/', image: 'https://picsum.photos/seed/ytsummary/600/400', dataAiHint: 'online summary', pricing: 'Free' },
            { name: 'Video Notebook', description: 'Take notes on online videos.', url: 'https://videonotebook.com/', image: 'https://picsum.photos/seed/videonotebook/600/400', dataAiHint: 'online notes', pricing: 'Freemium' },
            { name: 'VideoNotes', description: 'Take notes in sync with videos.', url: 'https://www.videonotes.io/', image: 'https://picsum.photos/seed/videonotesio/600/400', dataAiHint: 'sync notes', pricing: 'Freemium' },
            { name: 'TubeTLDR', description: 'Too long; didn\'t read for YouTube.', url: 'https://www.tubetldr.com/', image: 'https://picsum.photos/seed/tubetldr/600/400', dataAiHint: 'video tldr', pricing: 'Freemium' },
            { name: 'Scrivvy', description: 'Transcribe and summarize YouTube videos.', url: 'https://scrivvy.ai/', image: 'https://picsum.photos/seed/scrivvy/600/400', dataAiHint: 'ai scribe', pricing: 'Paid' },
            { name: 'Skipit.ai', description: 'Summarize videos, text, and more.', url: 'https://skipit.ai/', image: 'https://picsum.photos/seed/skipit/600/400', dataAiHint: 'content summary', pricing: 'Freemium' },
            { name: 'Upword', description: 'AI-powered research platform.', url: 'https://www.upword.ai/', image: 'https://picsum.photos/seed/upword/600/400', dataAiHint: 'research platform', pricing: 'Paid' },
            { name: 'Notta', description: 'Real-time transcription for audio and video.', url: 'https://www.notta.ai/', image: 'https://picsum.photos/seed/notta/600/400', dataAiHint: 'real-time transcription', pricing: 'Freemium' },
            { name: 'Tactiq', description: 'Transcribe meetings from Google Meet, Zoom, and MS Teams.', url: 'https://tactiq.io/', image: 'https://picsum.photos/seed/tactiq/600/400', dataAiHint: 'meeting transcription', pricing: 'Freemium' },
            { name: 'Otter.ai', description: 'AI meeting assistant that records audio, writes notes.', url: 'https://otter.ai/', image: 'https://picsum.photos/seed/otterai/600/400', dataAiHint: 'meeting assistant', pricing: 'Freemium' },
            { name: 'Fireflies.ai', description: 'AI assistant for your meetings.', url: 'https://fireflies.ai/', image: 'https://picsum.photos/seed/fireflies/600/400', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'AssemblyAI', description: 'AI models for speech-to-text, summarization, and more.', url: 'https://www.assemblyai.com/', image: 'https://picsum.photos/seed/assemblyai/600/400', dataAiHint: 'speech to text', pricing: 'Paid' },
            { name: 'Deepgram', description: 'Automated speech recognition.', url: 'https://deepgram.com/', image: 'https://picsum.photos/seed/deepgram/600/400', dataAiHint: 'voice recognition', pricing: 'Paid' },
            { name: 'Voicera', description: 'AI for your meetings.', url: 'https://www.voicera.com/', image: 'https://picsum.photos/seed/voicera/600/400', dataAiHint: 'meeting ai', pricing: 'Paid' },
            { name: 'Sembly AI', description: 'Smart meeting assistant.', url: 'https://www.sembly.ai/', image: 'https://picsum.photos/seed/semblyai/600/400', dataAiHint: 'smart assistant', pricing: 'Freemium' },
            { name: 'Fathom', description: 'AI notetaker for your meetings.', url: 'https://fathom.video/', image: 'https://picsum.photos/seed/fathom/600/400', dataAiHint: 'ai notetaker', pricing: 'Free' },
            { name: 'Avoma', description: 'Conversation intelligence platform.', url: 'https://www.avoma.com/', image: 'https://picsum.photos/seed/avoma/600/400', dataAiHint: 'conversation intelligence', pricing: 'Freemium' },
            { name: 'Gong', description: 'Revenue intelligence platform.', url: 'https://www.gong.io/', image: 'https://picsum.photos/seed/gong/600/400', dataAiHint: 'revenue intelligence', pricing: 'Paid' },
            { name: 'Chorus.ai', description: 'Conversation intelligence for sales teams.', url: 'https://www.chorus.ai/', image: 'https://picsum.photos/seed/chorusai/600/400', dataAiHint: 'sales teams', pricing: 'Paid' },
            { name: 'tl;dv', description: 'AI meeting recorder for Google Meet and Zoom.', url: 'https://tldv.io/', image: 'https://picsum.photos/seed/tldv-youtube/600/400', dataAiHint: 'meeting recorder', pricing: 'Freemium' },
            { name: 'You-tldr', description: 'Summarize YouTube videos.', url: 'https://you-tldr.com/', image: 'https://picsum.photos/seed/youtldr/600/400', dataAiHint: 'youtube summarizer', pricing: 'Free' },
            { name: 'NoteGPT', description: 'AI-powered summary for YouTube videos.', url: 'https://notegpt.io/', image: 'https://picsum.photos/seed/notegpt/600/400', dataAiHint: 'ai summary', pricing: 'Freemium' },
            { name: 'SummarizeYT', description: 'Summarize any YouTube video.', url: 'https://www.summarizeyt.com/', image: 'https://picsum.photos/seed/summarizeyt/600/400', dataAiHint: 'video summary', pricing: 'Free' },
            { name: 'YT Summary', description: 'YouTube video summarizer.', url: 'https://yt-summary.com/', image: 'https://picsum.photos/seed/ytsummary-tool/600/400', dataAiHint: 'yt summary', pricing: 'Free' },
            { name: 'YT Scribe', description: 'Transcribe and summarize YouTube videos.', url: 'https://ytscribe.com/', image: 'https://picsum.photos/seed/ytscribe/600/400', dataAiHint: 'video scribe', pricing: 'Free' },
            { name: 'Video Highlight', description: 'Highlight and annotate YouTube videos.', url: 'https://www.videohighlight.com/', image: 'https://picsum.photos/seed/videohighlight/600/400', dataAiHint: 'video highlight', pricing: 'Free' },
            { name: 'PocketTube', description: 'Subscription manager for YouTube.', url: 'https://pockettube.io/', image: 'https://picsum.photos/seed/pockettube/600/400', dataAiHint: 'youtube manager', pricing: 'Freemium' },
            { name: 'Enhancer for YouTube', description: 'Browser extension to improve your YouTube experience.', url: 'https://www.mrfdev.com/enhancer-for-youtube', image: 'https://picsum.photos/seed/enhancer-youtube/600/400', dataAiHint: 'youtube extension', pricing: 'Free' },
            { name: 'SponsorBlock', description: 'Skip sponsorships, intros, and other annoying parts of YouTube videos.', url: 'https://sponsor.ajay.app/', image: 'https://picsum.photos/seed/sponsorblock/600/400', dataAiHint: 'skip sponsor', pricing: 'Free' },
            { name: 'Unhook', description: 'Remove YouTube recommended videos, comments, and more.', url: 'https://unhook.app/', image: 'https://picsum.photos/seed/unhook/600/400', dataAiHint: 'focus youtube', pricing: 'Free' },
            { name: 'DF Tube', description: 'Distraction-Free for YouTube.', url: 'https://chrome.google.com/webstore/detail/df-tube-distraction-free/mjdepdfmejnoghkhlfgipscpaeimjiod', image: 'https://picsum.photos/seed/dftube/600/400', dataAiHint: 'distraction free', pricing: 'Free' },
            { name: 'YouTube Rabbit Hole', description: 'Browser extension to reduce distractions on YouTube.', url: 'https://chrome.google.com/webstore/detail/youtube-rabbit-hole/nldinofelgdeckmickokocbikalibeq', image: 'https://picsum.photos/seed/youtuberabbithole/600/400', dataAiHint: 'reduce distractions', pricing: 'Free' },
            { name: 'vidIQ', description: 'Helps YouTube creators grow their channels.', url: 'https://vidiq.com/', image: 'https://picsum.photos/seed/vidiq-study/600/400', dataAiHint: 'youtube seo', pricing: 'Freemium' },
            { name: 'TubeBuddy', description: 'The best friend of every YouTube creator.', url: 'https://www.tubebuddy.com/', image: 'https://picsum.photos/seed/tubebuddy-study/600/400', dataAiHint: 'youtube tool', pricing: 'Freemium' },
            { name: 'Opus Clip', description: 'Turn long videos into viral short clips with AI.', url: 'https://www.opus.pro/', image: 'https://picsum.photos/seed/opusclip/600/400', dataAiHint: 'video clips', pricing: 'Freemium' },
            { name: 'Vizard', description: 'AI video editor for content creators.', url: 'https://vizard.ai/', image: 'https://picsum.photos/seed/vizard/600/400', dataAiHint: 'ai video editor', pricing: 'Freemium' },
            { name: 'ClipMaker', description: 'AI tool to find the best moments in your videos.', url: 'https://clipmaker.ai/', image: 'https://picsum.photos/seed/clipmaker/600/400', dataAiHint: 'video moments', pricing: 'Paid' },
            { name: 'Veed.io', description: 'Online video editing.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veedio-study/600/400', dataAiHint: 'online editing', pricing: 'Freemium' },
            { name: 'Descript', description: 'All-in-one audio & video editor.', url: 'https://www.descript.com/', image: 'https://picsum.photos/seed/descript-study/600/400', dataAiHint: 'audio video', pricing: 'Freemium' },
        ]
    },
    {
        title: "Chatbox / Study Assistant Tools",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatGPT', description: 'Conversational AI for instant answers.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-study/600/400', dataAiHint: 'ai assistant', pricing: 'Freemium' },
            { name: 'Perplexity AI', description: 'An answer engine for complex questions.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-study/600/400', dataAiHint: 'research tool', pricing: 'Freemium' },
            { name: 'Notion AI', description: 'AI features integrated into Notion workspace.', url: 'https://www.notion.so/product/ai', image: 'https://picsum.photos/seed/notionai-study/600/400', dataAiHint: 'workspace assistant', pricing: 'Paid' },
            { name: 'Gemini', description: 'Google\'s creative and helpful AI collaborator.', url: 'https://gemini.google.com/', image: 'https://picsum.photos/seed/gemini-study/600/400', dataAiHint: 'google ai', pricing: 'Free' },
            { name: 'HIX.AI Study Mode', description: 'An all-in-one AI writing copilot.', url: 'https://hix.ai/', image: 'https://picsum.photos/seed/hixai-study/600/400', dataAiHint: 'writing copilot', pricing: 'Freemium' },
            { name: 'Claude', description: 'A next-generation AI assistant.', url: 'https://claude.ai/', image: 'https://picsum.photos/seed/claude/600/400', dataAiHint: 'anthropic ai', pricing: 'Freemium' },
            { name: 'Poe by Quora', description: 'Fast, helpful AI chat.', url: 'https://poe.com/', image: 'https://picsum.photos/seed/poe-quora/600/400', dataAiHint: 'ai chat', pricing: 'Free' },
            { name: 'Microsoft Copilot', description: 'Your everyday AI companion.', url: 'https://copilot.microsoft.com/', image: 'https://picsum.photos/seed/mscopilot/600/400', dataAiHint: 'bing chat', pricing: 'Free' },
            { name: 'Character.ai', description: 'Create and talk to AI characters.', url: 'https://character.ai/', image: 'https://picsum.photos/seed/characterai/600/400', dataAiHint: 'ai characters', pricing: 'Freemium' },
            { name: 'Socratic by Google', description: 'Learning app to help with homework.', url: 'https://socratic.org/', image: 'https://picsum.photos/seed/socratic/600/400', dataAiHint: 'homework help', pricing: 'Free' },
            { name: 'Brainly', description: 'For students, by students.', url: 'https://brainly.com/', image: 'https://picsum.photos/seed/brainly/600/400', dataAiHint: 'student community', pricing: 'Freemium' },
            { name: 'Chegg Study', description: 'Get homework help and textbook solutions.', url: 'https://www.chegg.com/study', image: 'https://picsum.photos/seed/chegg-study/600/400', dataAiHint: 'textbook solutions', pricing: 'Paid' },
            { name: 'Quizlet Q-Chat', description: 'AI tutor to help you learn.', url: 'https://quizlet.com/q-chat', image: 'https://picsum.photos/seed/quizlet-qchat/600/400', dataAiHint: 'ai tutor', pricing: 'Paid' },
            { name: 'Course Hero', description: 'Access to study resources.', url: 'https://www.coursehero.com/', image: 'https://picsum.photos/seed/coursehero/600/400', dataAiHint: 'study resources', pricing: 'Paid' },
            { name: 'StudyPool', description: 'Online tutoring marketplace.', url: 'https://www.studypool.com/', image: 'https://picsum.photos/seed/studypool/600/400', dataAiHint: 'online tutoring', pricing: 'Paid' },
            { name: 'Tutor.com', description: 'The Princeton Review\'s tutoring service.', url: 'https://www.tutor.com/', image: 'https://picsum.photos/seed/tutordotcom/600/400', dataAiHint: 'tutoring service', pricing: 'Paid' },
            { name: 'Bartleby', description: 'Homework help and textbook solutions.', url: 'https://www.bartleby.com/', image: 'https://picsum.photos/seed/bartleby/600/400', dataAiHint: 'homework solutions', pricing: 'Paid' },
            { name: 'Wyzant', description: 'Find private tutors.', url: 'https://www.wyzant.com/', image: 'https://picsum.photos/seed/wyzant/600/400', dataAiHint: 'private tutors', pricing: 'Paid' },
            { name: 'Skooli', description: 'Online tutoring for math, English, and more.', url: 'https://www.skooli.com/', image: 'https://picsum.photos/seed/skooli/600/400', dataAiHint: 'math tutoring', pricing: 'Paid' },
            { name: 'Preply', description: 'Language tutors and more.', url: 'https://preply.com/', image: 'https://picsum.photos/seed/preply/600/400', dataAiHint: 'language tutors', pricing: 'Paid' },
            { name: 'iTalki', description: 'Learn a language with a native speaker.', url: 'https://www.italki.com/', image: 'https://picsum.photos/seed/italki/600/400', dataAiHint: 'native speakers', pricing: 'Paid' },
            { name: 'Cambly', description: 'English tutors available 24/7.', url: 'https://www.cambly.com/', image: 'https://picsum.photos/seed/cambly/600/400', dataAiHint: 'english tutors', pricing: 'Paid' },
            { name: 'Verbling', description: 'Language learning with professional teachers.', url: 'https://www.verbling.com/', image: 'https://picsum.photos/seed/verbling/600/400', dataAiHint: 'professional teachers', pricing: 'Paid' },
            { name: 'Khanmigo', description: 'Khan Academy\'s AI-powered tutor and teaching assistant.', url: 'https://www.khanacademy.org/khan-labs', image: 'https://picsum.photos/seed/khanmigo/600/400', dataAiHint: 'ai teaching', pricing: 'Paid' },
            { name: 'You.com', description: 'The AI search engine you control.', url: 'https://you.com/', image: 'https://picsum.photos/seed/youcom/600/400', dataAiHint: 'ai search', pricing: 'Freemium' },
            { name: 'Phind', description: 'The AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://picsum.photos/seed/phind/600/400', dataAiHint: 'developer search', pricing: 'Free' },
            { name: 'Blackbox AI', description: 'AI code generation, explanation, and search.', url: 'https://www.blackbox.ai/', image: 'https://picsum.photos/seed/blackboxai/600/400', dataAiHint: 'code generation', pricing: 'Freemium' },
            { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: 'https://picsum.photos/seed/gh-copilot/600/400', dataAiHint: 'ai programmer', pricing: 'Paid' },
            { name: 'Tabnine', description: 'AI assistant for software developers.', url: 'https://www.tabnine.com/', image: 'https://picsum.photos/seed/tabnine/600/400', dataAiHint: 'code completion', pricing: 'Freemium' },
            { name: 'Replit Ghostwriter', description: 'The AI-powered coding assistant.', url: 'https://replit.com/ghostwriter', image: 'https://picsum.photos/seed/replit-ghost/600/400', dataAiHint: 'coding assistant', pricing: 'Paid' },
            { name: 'Amazon CodeWhisperer', description: 'Build applications faster with the AI coding companion.', url: 'https://aws.amazon.com/codewhisperer/', image: 'https://picsum.photos/seed/codewhisperer/600/400', dataAiHint: 'ai coding', pricing: 'Free' },
            { name: 'CodiumAI', description: 'AI-powered code integrity.', url: 'https://www.codium.ai/', image: 'https://picsum.photos/seed/codiumai/600/400', dataAiHint: 'code integrity', pricing: 'Freemium' },
            { name: 'MutableAI', description: 'AI accelerated software development.', url: 'https://mutable.ai/', image: 'https://picsum.photos/seed/mutableai/600/400', dataAiHint: 'software development', pricing: 'Paid' },
            { name: 'Bito AI', description: 'The AI assistant that understands your code.', url: 'https://bito.ai/', image: 'https://picsum.photos/seed/bitoai/600/400', dataAiHint: 'understand code', pricing: 'Freemium' },
            { name: 'OpenAI Playground', description: 'Experiment with OpenAI models.', url: 'https://platform.openai.com/playground', image: 'https://picsum.photos/seed/openai-playground/600/400', dataAiHint: 'openai models', pricing: 'Paid' },
            { name: 'Hugging Face', description: 'The AI community building the future.', url: 'https://huggingface.co/', image: 'https://picsum.photos/seed/huggingface-study/600/400', dataAiHint: 'ai community', pricing: 'Freemium' },
            { name: 'Replika', description: 'The AI companion who cares.', url: 'https://replika.com/', image: 'https://picsum.photos/seed/replika/600/400', dataAiHint: 'ai companion', pricing: 'Freemium' },
            { name: 'Kuki', description: 'An embodied AI being to talk to.', url: 'https://www.kuki.ai/', image: 'https://picsum.photos/seed/kuki/600/400', dataAiHint: 'embodied ai', pricing: 'Free' },
            { name: 'Chai', description: 'Chat with AI bots.', url: 'https://www.chai-research.com/', image: 'https://picsum.photos/seed/chai/600/400', dataAiHint: 'ai bots', pricing: 'Freemium' },
            { name: 'Janitor AI', description: 'Chat with your favorite characters.', url: 'https://www.janitorai.com/', image: 'https://picsum.photos/seed/janitorai/600/400', dataAiHint: 'character chat', pricing: 'Free' },
            { name: 'TavernAI', description: 'Chat with AI characters.', url: 'https://tavernai.net/', image: 'https://picsum.photos/seed/tavernai/600/400', dataAiHint: 'ai roleplay', pricing: 'Free' },
            { name: 'Cleverbot', description: 'Chat with an AI.', url: 'https://www.cleverbot.com/', image: 'https://picsum.photos/seed/cleverbot/600/400', dataAiHint: 'classic chatbot', pricing: 'Free' },
            { name: 'Evi', description: 'An AI that knows about the world.', url: 'https://www.evi.com/', image: 'https://picsum.photos/seed/evi/600/400', dataAiHint: 'knowledge ai', pricing: 'Free' },
            { name: '20Q', description: 'The twenty questions game.', url: 'https://20q.net/', image: 'https://picsum.photos/seed/20q/600/400', dataAiHint: 'question game', pricing: 'Free' },
            { name: 'Akinator', description: 'The web genie.', url: 'https://en.akinator.com/', image: 'https://picsum.photos/seed/akinator/600/400', dataAiHint: 'web genie', pricing: 'Free' },
            { name: 'Eliza', description: 'A classic chatbot.', url: 'http://psych.fullerton.edu/mbirnbaum/psych101/Eliza.htm', image: 'https://picsum.photos/seed/eliza/600/400', dataAiHint: 'rogers chatbot', pricing: 'Free' },
            { name: 'Boibot', description: 'Chat with an AI.', url: 'https://www.boibot.com/', image: 'https://picsum.photos/seed/boibot/600/400', dataAiHint: 'ai conversation', pricing: 'Free' },
            { name: 'Eviebot', description: 'Chat with an AI.', url: 'https://www.eviebot.com/', image: 'https://picsum.photos/seed/eviebot/600/400', dataAiHint: 'ai chat', pricing: 'Free' },
            { name: 'Mitsuku', description: 'Award-winning conversational AI.', url: 'https://www.pandorabots.com/mitsuku/', image: 'https://picsum.photos/seed/mitsuku/600/400', dataAiHint: 'pandorabot', pricing: 'Free' },
            { name: 'Rose', description: 'A chatbot with a personality.', url: 'https://www.personalityforge.com/chatbot-rose.php', image: 'https://picsum.photos/seed/rosebot/600/400', dataAiHint: 'chatbot personality', pricing: 'Free' },
        ]
    },
    {
        title: "Notes Making & Summarising Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion', description: 'The all-in-one workspace for notes and tasks.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-notes/600/400', dataAiHint: 'digital notebook', pricing: 'Freemium' },
            { name: 'Obsidian', description: 'A powerful knowledge base on top of a local folder.', url: 'https://obsidian.md/', image: 'https://picsum.photos/seed/obsidian-notes/600/400', dataAiHint: 'second brain', pricing: 'Free' },
            { name: 'TLDV', description: 'Record, transcribe, and summarize meetings.', url: 'https://tldv.io/', image: 'https://picsum.photos/seed/tldv/600/400', dataAiHint: 'meeting notes', pricing: 'Freemium' },
            { name: 'UpNote', description: 'A most elegant and powerful note-taking app.', url: 'https://upnote.me/', image: 'https://picsum.photos/seed/upnote/600/400', dataAiHint: 'note app', pricing: 'Freemium' },
            { name: 'Scribbl', description: 'AI-powered meeting notes.', url: 'https://scribbl.co/', image: 'https://picsum.photos/seed/scribbl/600/400', dataAiHint: 'meeting assistant', pricing: 'Paid' },
            { name: 'Evernote', description: 'Remember everything.', url: 'https://evernote.com/', image: 'https://picsum.photos/seed/evernote-notes/600/400', dataAiHint: 'note taking', pricing: 'Freemium' },
            { name: 'Roam Research', description: 'A note-taking tool for networked thought.', url: 'https://roamresearch.com/', image: 'https://picsum.photos/seed/roam-notes/600/400', dataAiHint: 'networked thought', pricing: 'Paid' },
            { name: 'Logseq', description: 'A privacy-first, open-source knowledge base.', url: 'https://logseq.com/', image: 'https://picsum.photos/seed/logseq-notes/600/400', dataAiHint: 'knowledge management', pricing: 'Free' },
            { name: 'Microsoft OneNote', description: 'Your digital notebook.', url: 'https://www.onenote.com/', image: 'https://picsum.photos/seed/onenote-notes/600/400', dataAiHint: 'digital notebook', pricing: 'Free' },
            { name: 'Google Keep', description: 'Quickly capture what\'s on your mind.', url: 'https://keep.google.com/', image: 'https://picsum.photos/seed/gkeep-notes/600/400', dataAiHint: 'sticky notes', pricing: 'Free' },
            { name: 'Bear', description: 'A beautiful, flexible writing app.', url: 'https://bear.app/', image: 'https://picsum.photos/seed/bear-notes/600/400', dataAiHint: 'writing app', pricing: 'Freemium' },
            { name: 'GoodNotes', description: 'Digital paper for your notes and ideas.', url: 'https://www.goodnotes.com/', image: 'https://picsum.photos/seed/goodnotes/600/400', dataAiHint: 'digital ink', pricing: 'Freemium' },
            { name: 'Notability', description: 'Powerful, yet wonderfully simple note-taking.', url: 'https://notability.com/', image: 'https://picsum.photos/seed/notability-notes/600/400', dataAiHint: 'pdf annotation', pricing: 'Freemium' },
            { name: 'Simplenote', description: 'The simplest way to keep notes.', url: 'https://simplenote.com/', image: 'https://picsum.photos/seed/simplenote/600/400', dataAiHint: 'lightweight notes', pricing: 'Free' },
            { name: 'Joplin', description: 'An open source note taking and to-do application.', url: 'https://joplinapp.org/', image: 'https://picsum.photos/seed/joplin-notes/600/400', dataAiHint: 'open source notes', pricing: 'Free' },
            { name: 'Standard Notes', description: 'A free, open-source, and encrypted notes app.', url: 'https://standardnotes.com/', image: 'https://picsum.photos/seed/standardnotes/600/400', dataAiHint: 'encrypted notes', pricing: 'Freemium' },
            { name: 'Craft', description: 'A new take on documents.', url: 'https://www.craft.do/', image: 'https://picsum.photos/seed/craft-notes/600/400', dataAiHint: 'document editor', pricing: 'Freemium' },
            { name: 'Coda', description: 'A new doc that brings words, data, and teams together.', url: 'https://coda.io/', image: 'https://picsum.photos/seed/coda-notes/600/400', dataAiHint: 'all-in-one doc', pricing: 'Freemium' },
            { name: 'Slite', description: 'The fastest way to share knowledge in your team.', url: 'https://slite.com/', image: 'https://picsum.photos/seed/slite-notes/600/400', dataAiHint: 'team knowledge', pricing: 'Freemium' },
            { name: 'Typora', description: 'A minimal markdown editor.', url: 'https://typora.io/', image: 'https://picsum.photos/seed/typora-notes/600/400', dataAiHint: 'markdown editor', pricing: 'Paid' },
            { name: 'iA Writer', description: 'The focused writing app.', url: 'https://ia.net/writer', image: 'https://picsum.photos/seed/iawriter-notes/600/400', dataAiHint: 'focused writing', pricing: 'Paid' },
            { name: 'Zotero', description: 'Your personal research assistant.', url: 'https://www.zotero.org/', image: 'https://picsum.photos/seed/zotero-notes/600/400', dataAiHint: 'research assistant', pricing: 'Free' },
            { name: 'Mendeley', description: 'Reference manager.', url: 'https://www.mendeley.com/', image: 'https://picsum.photos/seed/mendeley-notes/600/400', dataAiHint: 'reference manager', pricing: 'Free' },
            { name: 'TheBrain', description: 'The ultimate digital memory.', url: 'https://www.thebrain.com/', image: 'https://picsum.photos/seed/thebrain-notes/600/400', dataAiHint: 'mind mapping', pricing: 'Freemium' },
            { name: 'MindNode', description: 'Mind mapping for Mac and iOS.', url: 'https://www.mindnode.com/', image: 'https://picsum.photos/seed/mindnode-notes/600/400', dataAiHint: 'visual brainstorming', pricing: 'Freemium' },
            { name: 'XMind', description: 'Full-featured mind mapping and brainstorming tool.', url: 'https://www.xmind.net/', image: 'https://picsum.photos/seed/xmind-notes/600/400', dataAiHint: 'brainstorming tool', pricing: 'Freemium' },
            { name: 'Coggle', description: 'Simple collaborative mind maps.', url: 'https://coggle.it/', image: 'https://picsum.photos/seed/coggle-notes/600/400', dataAiHint: 'collaborative mindmap', pricing: 'Freemium' },
            { name: 'Miro', description: 'The online collaborative whiteboard platform.', url: 'https://miro.com/', image: 'https://picsum.photos/seed/miro-notes/600/400', dataAiHint: 'visual collaboration', pricing: 'Freemium' },
            { name: 'Mural', description: 'A digital workspace for visual collaboration.', url: 'https://www.mural.co/', image: 'https://picsum.photos/seed/mural-notes/600/400', dataAiHint: 'digital workspace', pricing: 'Freemium' },
            { name: 'Nuclino', description: 'Your team\'s collective brain.', url: 'https://www.nuclino.com/', image: 'https://picsum.photos/seed/nuclino-notes/600/400', dataAiHint: 'team wiki', pricing: 'Freemium' },
            { name: 'Slab', description: 'A knowledge hub for the modern workplace.', url: 'https://slab.com/', image: 'https://picsum.photos/seed/slab-notes/600/400', dataAiHint: 'knowledge hub', pricing: 'Freemium' },
            { name: 'Tettra', description: 'The smart knowledge management system.', url: 'https://tettra.com/', image: 'https://picsum.photos/seed/tettra-notes/600/400', dataAiHint: 'internal knowledge', pricing: 'Freemium' },
            { name: 'Confluence', description: 'A team workspace where knowledge and collaboration meet.', url: 'https://www.atlassian.com/software/confluence', image: 'https://picsum.photos/seed/confluence-notes/600/400', dataAiHint: 'team workspace', pricing: 'Freemium' },
            { name: 'DokuWiki', description: 'A simple to use and versatile Open Source wiki software.', url: 'https://www.dokuwiki.org/', image: 'https://picsum.photos/seed/dokuwiki-notes/600/400', dataAiHint: 'open source wiki', pricing: 'Free' },
            { name: 'BookStack', description: 'A simple & free wiki platform.', url: 'https://www.bookstackapp.com/', image: 'https://picsum.photos/seed/bookstack-notes/600/400', dataAiHint: 'free wiki', pricing: 'Free' },
            { name: 'TiddlyWiki', description: 'A unique non-linear notebook.', url: 'https://tiddlywiki.com/', image: 'https://picsum.photos/seed/tiddlywiki-notes/600/400', dataAiHint: 'non-linear notebook', pricing: 'Free' },
            { name: 'Zim', description: 'A graphical text editor used to maintain a collection of wiki pages.', url: 'https://zim-wiki.org/', image: 'https://picsum.photos/seed/zimwiki-notes/600/400', dataAiHint: 'desktop wiki', pricing: 'Free' },
            { name: 'Workflowy', description: 'An organizational tool that makes life easier.', url: 'https://workflowy.com/', image: 'https://picsum.photos/seed/workflowy-notes/600/400', dataAiHint: 'outliner notes', pricing: 'Freemium' },
            { name: 'Dynalist', description: 'The best place for your notes, ideas, and workflows.', url: 'https://dynalist.io/', image: 'https://picsum.photos/seed/dynalist-notes/600/400', dataAiHint: 'outliner tool', pricing: 'Freemium' },
            { name: 'Milanote', description: 'An easy-to-use tool to organize your ideas and projects into visual boards.', url: 'https://milanote.com/', image: 'https://picsum.photos/seed/milanote-notes/600/400', dataAiHint: 'visual board', pricing: 'Freemium' },
            { name: 'Pocket', description: 'Save content from everywhere.', url: 'https://getpocket.com/', image: 'https://picsum.photos/seed/pocket-notes/600/400', dataAiHint: 'read later', pricing: 'Freemium' },
            { name: 'Instapaper', description: 'A simple tool to save web pages for reading later.', url: 'https://www.instapaper.com/', image: 'https://picsum.photos/seed/instapaper-notes/600/400', dataAiHint: 'save articles', pricing: 'Freemium' },
            { name: 'Raindrop.io', description: 'All-in-one bookmark manager.', url: 'https://raindrop.io/', image: 'https://picsum.photos/seed/raindrop-notes/600/400', dataAiHint: 'bookmark manager', pricing: 'Freemium' },
            { name: 'MyMind', description: 'The extension for your mind.', url: 'https://mymind.com/', image: 'https://picsum.photos/seed/mymind-notes/600/400', dataAiHint: 'private notes', pricing: 'Paid' },
            { name: 'Mem.ai', description: 'The self-organizing workspace.', url: 'https://mem.ai/', image: 'https://picsum.photos/seed/memai-notes/600/400', dataAiHint: 'ai workspace', pricing: 'Freemium' },
            { name: 'Reflect', description: 'A note-taking tool for networked thought.', url: 'https://reflect.app/', image: 'https://picsum.photos/seed/reflect-notes/600/400', dataAiHint: 'networked notes', pricing: 'Paid' },
            { name: 'Capacities', description: 'A studio for your mind.', url: 'https://capacities.io/', image: 'https://picsum.photos/seed/capacities-notes/600/400', dataAiHint: 'object based notes', pricing: 'Freemium' },
            { name: 'Hypernotes', description: 'A knowledge management system by Zenkit.', url: 'https://zenkit.com/en/hypernotes/', image: 'https://picsum.photos/seed/hypernotes/600/400', dataAiHint: 'bi-directional linking', pricing: 'Freemium' },
            { name: 'Heptabase', description: 'A visual note-taking tool for learning complex topics.', url: 'https://heptabase.com/', image: 'https://picsum.photos/seed/heptabase-notes/600/400', dataAiHint: 'visual learning', pricing: 'Paid' },
            { name: 'Scrintal', description: 'A visual note-taking tool & mind mapper.', url: 'https://www.scrintal.com/', image: 'https://picsum.photos/seed/scrintal-notes/600/400', dataAiHint: 'visual notes', pricing: 'Paid' },
            { name: 'AmpleNote', description: 'The all-in-one productivity app.', url: 'https://www.amplenote.com/', image: 'https://picsum.photos/seed/amplenote-notes/600/400', dataAiHint: 'notes tasks calendar', pricing: 'Freemium' },
            { name: 'Taskade', description: 'Your second brain for teams.', url: 'https://www.taskade.com/', image: 'https://picsum.photos/seed/taskade-notes/600/400', dataAiHint: 'team brain', pricing: 'Freemium' },
        ]
    },
    {
        title: "Text-to-Notes Converter Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Scholarcy', description: 'AI-powered article summarizer.', url: 'https://www.scholarcy.com/', image: 'https://picsum.photos/seed/scholarcy/600/400', dataAiHint: 'research paper', pricing: 'Freemium' },
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humataai/600/400', dataAiHint: 'document ai', pricing: 'Freemium' },
            { name: 'PDFgear AI', description: 'Free PDF editor with AI features.', url: 'https://www.pdfgear.com/', image: 'https://picsum.photos/seed/pdfgear/600/400', dataAiHint: 'pdf chat', pricing: 'Free' },
            { name: 'ExplainThis PDF', description: 'Upload a PDF and ask questions.', url: 'https://www.explainthis.io/pdf', image: 'https://picsum.photos/seed/explainthispdf/600/400', dataAiHint: 'pdf questions', pricing: 'Free' },
            { name: 'Split & Merge PDF', description: 'Combine and split PDF files easily.', url: 'https://www.ilovepdf.com/split_pdf', image: 'https://picsum.photos/seed/splitmerge/600/400', dataAiHint: 'pdf utility', pricing: 'Freemium' },
            { name: 'ChatPDF', description: 'Chat with any PDF.', url: 'https://www.chatpdf.com/', image: 'https://picsum.photos/seed/chatpdf-notes/600/400', dataAiHint: 'pdf conversation', pricing: 'Freemium' },
            { name: 'PDF.ai', description: 'Chat with your documents.', url: 'https://pdf.ai/', image: 'https://picsum.photos/seed/pdfai-notes/600/400', dataAiHint: 'document chat', pricing: 'Freemium' },
            { name: 'LightPDF', description: 'AI for PDFs. Chat, summarize, and analyze.', url: 'https://lightpdf.com/', image: 'https://picsum.photos/seed/lightpdf-notes/600/400', dataAiHint: 'ai pdf tools', pricing: 'Freemium' },
            { name: 'AskYourPDF', description: 'The best PDF AI communication app.', url: 'https://askyourpdf.com/', image: 'https://picsum.photos/seed/askyourpdf-notes/600/400', dataAiHint: 'pdf app', pricing: 'Freemium' },
            { name: 'Sharly AI', description: 'AI document analysis.', url: 'https://sharly.ai/', image: 'https://picsum.photos/seed/sharlyai/600/400', dataAiHint: 'document analysis', pricing: 'Paid' },
            { name: 'File-Converter-Online.com', description: 'Convert files online for free.', url: 'https://file-converter-online.com/', image: 'https://picsum.photos/seed/fileconverter-notes/600/400', dataAiHint: 'file conversion', pricing: 'Free' },
            { name: 'Zamzar', description: 'File conversion, made easy.', url: 'https://www.zamzar.com/', image: 'https://picsum.photos/seed/zamzar-notes/600/400', dataAiHint: 'online converter', pricing: 'Freemium' },
            { name: 'CloudConvert', description: 'Online file converter.', url: 'https://cloudconvert.com/', image: 'https://picsum.photos/seed/cloudconvert-notes/600/400', dataAiHint: '200+ formats', pricing: 'Freemium' },
            { name: 'Adobe Acrobat', description: 'The original PDF solution.', url: 'https://acrobat.adobe.com/', image: 'https://picsum.photos/seed/acrobat-notes/600/400', dataAiHint: 'pdf editor', pricing: 'Paid' },
            { name: 'PDF Expert', description: 'The go-to PDF editor for Mac, iPhone and iPad.', url: 'https://pdfexpert.com/', image: 'https://picsum.photos/seed/pdfexpert-notes/600/400', dataAiHint: 'apple pdf', pricing: 'Paid' },
            { name: 'Nitro PDF', description: 'PDF editor, converter, and eSignature software.', url: 'https://www.gonitro.com/', image: 'https://picsum.photos/seed/nitropdf-notes/600/400', dataAiHint: 'document workflow', pricing: 'Paid' },
            { name: 'Foxit PDF Editor', description: 'A powerful and easy to use PDF editor.', url: 'https://www.foxit.com/pdf-editor/', image: 'https://picsum.photos/seed/foxit-notes/600/400', dataAiHint: 'pdf solution', pricing: 'Freemium' },
            { name: 'PDFelement', description: 'Smart PDF editor.', url: 'https://pdf.wondershare.com/', image: 'https://picsum.photos/seed/pdfelement-notes/600/400', dataAiHint: 'smart editor', pricing: 'Paid' },
            { name: 'Sejda', description: 'Easy, pleasant and productive PDF editor.', url: 'https://www.sejda.com/', image: 'https://picsum.photos/seed/sejda-notes/600/400', dataAiHint: 'pleasant pdf', pricing: 'Freemium' },
            { name: 'PDFescape', description: 'Free PDF editor & form filler.', url: 'https://www.pdfescape.com/', image: 'https://picsum.photos/seed/pdfescape-notes/600/400', dataAiHint: 'pdf form', pricing: 'Freemium' },
            { name: 'DocFly', description: 'Online PDF editor.', url: 'https://docfly.com/', image: 'https://picsum.photos/seed/docfly-notes/600/400', dataAiHint: 'edit pdf online', pricing: 'Freemium' },
            { name: 'Lumin PDF', description: 'Edit, sign and share PDFs online.', url: 'https://www.luminpdf.com/', image: 'https://picsum.photos/seed/luminpdf-notes/600/400', dataAiHint: 'online pdf', pricing: 'Freemium' },
            { name: 'ApowerPDF', description: 'One-stop solution for PDF files.', url: 'https://www.apowersoft.com/pdf-editor', image: 'https://picsum.photos/seed/apowerpdf-notes/600/400', dataAiHint: 'pdf solution', pricing: 'Paid' },
            { name: 'Able2Extract', description: 'Convert, Create, and Edit PDF Documents.', url: 'https://www.investintech.com/able2extract/', image: 'https://picsum.photos/seed/able2extract-notes/600/400', dataAiHint: 'pdf converter', pricing: 'Paid' },
            { name: 'Doxie', description: 'The smart scanner that goes where you go.', url: 'https://www.getdoxie.com/', image: 'https://picsum.photos/seed/doxie-notes/600/400', dataAiHint: 'portable scanner', pricing: 'Paid' },
            { name: 'Scanbot SDK', description: 'Document scanning and data capture for mobile apps.', url: 'https://scanbot.io/', image: 'https://picsum.photos/seed/scanbot-notes/600/400', dataAiHint: 'mobile scanning', pricing: 'Paid' },
            { name: 'Text-compare.com', description: 'Online diff tool.', url: 'https://www.text-compare.com/', image: 'https://picsum.photos/seed/textcompare-notes/600/400', dataAiHint: 'diff tool', pricing: 'Free' },
            { name: 'Copyleaks', description: 'AI-based plagiarism and content detection.', url: 'https://copyleaks.com/', image: 'https://picsum.photos/seed/copyleaks-notes/600/400', dataAiHint: 'plagiarism checker', pricing: 'Freemium' },
            { name: 'Nanonets', description: 'Intelligent automation for business processes.', url: 'https://nanonets.com/', image: 'https://picsum.photos/seed/nanonets-notes/600/400', dataAiHint: 'ocr automation', pricing: 'Paid' },
            { name: 'Rossum', description: 'AI-powered document processing.', url: 'https://rossum.ai/', image: 'https://picsum.photos/seed/rossum-notes/600/400', dataAiHint: 'intelligent document', pricing: 'Paid' },
            { name: 'Kofax', description: 'Intelligent automation software platform.', url: 'https://www.kofax.com/', image: 'https://picsum.photos/seed/kofax-notes/600/400', dataAiHint: 'digital transformation', pricing: 'Paid' },
            { name: 'ABBYY', description: 'Digital intelligence for your business.', url: 'https://www.abbyy.com/', image: 'https://picsum.photos/seed/abbyy-notes/600/400', dataAiHint: 'ocr software', pricing: 'Paid' },
            { name: 'Tesseract OCR', description: 'An open-source OCR engine.', url: 'https://github.com/tesseract-ocr/tesseract', image: 'https://picsum.photos/seed/tesseract-notes/600/400', dataAiHint: 'open source ocr', pricing: 'Free' },
            { name: 'Google Cloud Vision AI', description: 'Derive insights from your images.', url: 'https://cloud.google.com/vision', image: 'https://picsum.photos/seed/gvision-notes/600/400', dataAiHint: 'image analysis', pricing: 'Paid' },
            { name: 'Amazon Textract', description: 'Extract text, handwriting, and data from any document.', url: 'https://aws.amazon.com/textract/', image: 'https://picsum.photos/seed/textract-notes/600/400', dataAiHint: 'document extraction', pricing: 'Paid' },
            { name: 'Microsoft Azure Form Recognizer', description: 'AI-powered document extraction.', url: 'https://azure.microsoft.com/en-us/products/ai-services/ai-form-recognizer/', image: 'https://picsum.photos/seed/azureform-notes/600/400', dataAiHint: 'form recognition', pricing: 'Paid' },
            { name: 'Docparser', description: 'Convert PDF files to Excel, JSON, or other formats.', url: 'https://docparser.com/', image: 'https://picsum.photos/seed/docparser-notes/600/400', dataAiHint: 'pdf parsing', pricing: 'Paid' },
            { name: 'Parseur', description: 'Automated data entry software.', url: 'https://parseur.com/', image: 'https://picsum.photos/seed/parseur-notes/600/400', dataAiHint: 'email parsing', pricing: 'Paid' },
            { name: 'Hypatos', description: 'Deep learning for document processing.', url: 'https://hypatos.ai/', image: 'https://picsum.photos/seed/hypatos-notes/600/400', dataAiHint: 'deep learning', pricing: 'Paid' },
            { name: 'Konfuzio', description: 'AI-based data extraction from documents.', url: 'https://konfuzio.com/', image: 'https://picsum.photos/seed/konfuzio-notes/600/400', dataAiHint: 'data extraction', pricing: 'Paid' },
            { name: 'Extracta.ai', description: 'AI-powered data extraction.', url: 'https://www.extracta.ai/', image: 'https://picsum.photos/seed/extracta-notes/600/400', dataAiHint: 'ai extraction', pricing: 'Paid' },
            { name: 'Paper-pile', description: 'Reference management made easy.', url: 'https://paperpile.com/', image: 'https://picsum.photos/seed/paperpile-notes/600/400', dataAiHint: 'citation manager', pricing: 'Paid' },
            { name: 'SMMRY', description: 'Summarize articles, text, and websites.', url: 'https://smmry.com/', image: 'https://picsum.photos/seed/smmry-notes/600/400', dataAiHint: 'text summarizer', pricing: 'Free' },
            { name: 'TLDR This', description: 'Free online text summarizing tool.', url: 'https://tldrthis.com/', image: 'https://picsum.photos/seed/tldrthis-notes/600/400', dataAiHint: 'article summarizer', pricing: 'Freemium' },
            { name: 'Resoomer', description: 'Online text summarizer.', url: 'https://resoomer.com/', image: 'https://picsum.photos/seed/resoomer-notes/600/400', dataAiHint: 'academic summarizer', pricing: 'Freemium' },
            { name: 'Genei', description: 'AI-powered research and summarization tool.', url: 'https://www.genei.io/', image: 'https://picsum.photos/seed/genei-notes/600/400', dataAiHint: 'ai research', pricing: 'Paid' },
            { name: 'QuillBot Summarizer', description: 'Summarize any text with a click.', url: 'https://quillbot.com/summarize', image: 'https://picsum.photos/seed/quillbot-summary/600/400', dataAiHint: 'text summary', pricing: 'Freemium' },
            { name: 'Summarizer.org', description: 'Free online summarizing tool.', url: 'https://www.summarizer.org/', image: 'https://picsum.photos/seed/summarizerorg/600/400', dataAiHint: 'online summarizer', pricing: 'Free' },
            { name: 'Text-Compactor', description: 'Free online automatic text summarization tool.', url: 'http://textcompactor.com/', image: 'https://picsum.photos/seed/textcompactor/600/400', dataAiHint: 'automatic summary', pricing: 'Free' },
            { name: 'Paper Digest', description: 'Automatically summarize research papers.', url: 'https://www.paper-digest.com/', image: 'https://picsum.photos/seed/paperdigest/600/400', dataAiHint: 'paper summary', pricing: 'Paid' },
        ]
    },
    {
        title: "Question Solving Tools",
        icon: <HelpCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Photomath', description: 'Scan and solve math problems.', url: 'https://photomath.com/', image: 'https://picsum.photos/seed/photomath/600/400', dataAiHint: 'math solver', pricing: 'Freemium' },
            { name: 'Mathway', description: 'Step-by-step algebra, calculus, and more.', url: 'https://www.mathway.com/', image: 'https://picsum.photos/seed/mathway/600/400', dataAiHint: 'algebra solver', pricing: 'Freemium' },
            { name: 'Symbolab', description: 'Math solver with step-by-step solutions.', url: 'https://www.symbolab.com/', image: 'https://picsum.photos/seed/symbolab/600/400', dataAiHint: 'calculus solver', pricing: 'Freemium' },
            { name: 'Wolfram Alpha', description: 'Computational intelligence for any field.', url: 'https://www.wolframalpha.com/', image: 'https://picsum.photos/seed/wolframalpha/600/400', dataAiHint: 'computational engine', pricing: 'Freemium' },
            { name: 'Doubtnut', description: 'Get video solutions for math doubts.', url: 'https://www.doubtnut.com/', image: 'https://picsum.photos/seed/doubtnut/600/400', dataAiHint: 'video solutions', pricing: 'Free' },
            { name: 'Cymath', description: 'A math problem solver.', url: 'https://www.cymath.com/', image: 'https://picsum.photos/seed/cymath/600/400', dataAiHint: 'problem solver', pricing: 'Free' },
            { name: 'QuickMath', description: 'Automatic math problem solver.', url: 'https://quickmath.com/', image: 'https://picsum.photos/seed/quickmath/600/400', dataAiHint: 'automatic solver', pricing: 'Free' },
            { name: 'Desmos', description: 'Graphing calculator.', url: 'https://www.desmos.com/calculator', image: 'https://picsum.photos/seed/desmos/600/400', dataAiHint: 'graphing calculator', pricing: 'Free' },
            { name: 'GeoGebra', description: 'Graphing, geometry, algebra, and more.', url: 'https://www.geogebra.org/', image: 'https://picsum.photos/seed/geogebra/600/400', dataAiHint: 'geometry tool', pricing: 'Free' },
            { name: 'Microsoft Math Solver', description: 'Get step-by-step solutions to your math problems.', url: 'https://math.microsoft.com/en', image: 'https://picsum.photos/seed/msmath/600/400', dataAiHint: 'microsoft math', pricing: 'Free' },
            { name: 'Chegg Math Solver', description: 'Step-by-step math solver.', url: 'https://www.chegg.com/math-solver', image: 'https://picsum.photos/seed/cheggmath/600/400', dataAiHint: 'chegg math', pricing: 'Paid' },
            { name: 'MyScript Calculator', description: 'Write calculations naturally.', url: 'https://www.myscript.com/calculator/', image: 'https://picsum.photos/seed/myscriptcalc/600/400', dataAiHint: 'handwriting calculator', pricing: 'Paid' },
            { name: 'Brainly', description: 'For students, by students.', url: 'https://brainly.com/', image: 'https://picsum.photos/seed/brainly-qs/600/400', dataAiHint: 'homework community', pricing: 'Freemium' },
            { name: 'Socratic', description: 'The learning app from Google.', url: 'https://socratic.org/', image: 'https://picsum.photos/seed/socratic-qs/600/400', dataAiHint: 'google learning', pricing: 'Free' },
            { name: 'Slader', description: 'Homework answers and textbook solutions.', url: 'https://www.slader.com/', image: 'https://picsum.photos/seed/slader/600/400', dataAiHint: 'textbook answers', pricing: 'Paid' },
            { name: 'Numerade', description: 'Video solutions for STEM education.', url: 'https://www.numerade.com/', image: 'https://picsum.photos/seed/numerade/600/400', dataAiHint: 'stem videos', pricing: 'Paid' },
            { name: 'Kunduz', description: '24/7 unlimited homework help.', url: 'https://kunduz.com/en/', image: 'https://picsum.photos/seed/kunduz/600/400', dataAiHint: '24/7 help', pricing: 'Paid' },
            { name: 'Toppr Answr', description: 'Instant answers for your questions.', url: 'https://www.toppr.com/ask/', image: 'https://picsum.photos/seed/toppr/600/400', dataAiHint: 'instant answers', pricing: 'Freemium' },
            { name: 'BYJU\'S', description: 'Comprehensive learning app.', url: 'https://byjus.com/', image: 'https://picsum.photos/seed/byjus/600/400', dataAiHint: 'learning app', pricing: 'Paid' },
            { name: 'Vedantu', description: 'Live online tutoring.', url: 'https://www.vedantu.com/', image: 'https://picsum.photos/seed/vedantu/600/400', dataAiHint: 'online tutoring', pricing: 'Paid' },
            { name: 'Quora', description: 'A place to share knowledge.', url: 'https://www.quora.com/', image: 'https://picsum.photos/seed/quora-qs/600/400', dataAiHint: 'knowledge sharing', pricing: 'Free' },
            { name: 'Stack Exchange', description: 'A network of question-and-answer websites.', url: 'https://stackexchange.com/', image: 'https://picsum.photos/seed/stackexchange/600/400', dataAiHint: 'q&a network', pricing: 'Free' },
            { name: 'Reddit (r/learnmath, etc.)', description: 'Communities for learning.', url: 'https://www.reddit.com/', image: 'https://picsum.photos/seed/reddit-qs/600/400', dataAiHint: 'learning communities', pricing: 'Free' },
            { name: 'Integral Calculator', description: 'Online integral solver.', url: 'https://www.integral-calculator.com/', image: 'https://picsum.photos/seed/integralcalc/600/400', dataAiHint: 'integral solver', pricing: 'Free' },
            { name: 'Derivative Calculator', description: 'Online derivative solver.', url: 'https://www.derivative-calculator.net/', image: 'https://picsum.photos/seed/derivativecalc/600/400', dataAiHint: 'derivative solver', pricing: 'Free' },
            { name: 'Matrix Calculator', description: 'Online matrix solver.', url: 'https://matrixcalc.org/', image: 'https://picsum.photos/seed/matrixcalc/600/400', dataAiHint: 'matrix solver', pricing: 'Free' },
            { name: 'Equation Solver', description: 'Solve algebraic equations.', url: 'https://www.mathpapa.com/equation-solver/', image: 'https://picsum.photos/seed/equationsolver/600/400', dataAiHint: 'algebra solver', pricing: 'Free' },
            { name: 'Chemistry-Reference.com', description: 'Chemistry tools and data.', url: 'http://www.chemistry-reference.com/', image: 'https://picsum.photos/seed/chemref/600/400', dataAiHint: 'chemistry tools', pricing: 'Free' },
            { name: 'WebQC', description: 'Online chemistry tools.', url: 'https://www.webqc.org/', image: 'https://picsum.photos/seed/webqc/600/400', dataAiHint: 'chemical balancing', pricing: 'Free' },
            { name: 'Physics Classroom', description: 'Physics tutorials and interactives.', url: 'https://www.physicsclassroom.com/', image: 'https://picsum.photos/seed/physicsclassroom/600/400', dataAiHint: 'physics tutorials', pricing: 'Free' },
            { name: 'HyperPhysics', description: 'Exploration in physics.', url: 'http://hyperphysics.phy-astr.gsu.edu/hbase/index.html', image: 'https://picsum.photos/seed/hyperphysics/600/400', dataAiHint: 'physics concepts', pricing: 'Free' },
            { name: 'e-Bug', description: 'A biology resource for students.', url: 'https://www.e-bug.eu/', image: 'https://picsum.photos/seed/ebug/600/400', dataAiHint: 'biology resource', pricing: 'Free' },
            { name: 'Biology Dictionary', description: 'The source for biology definitions.', url: 'https://biologydictionary.net/', image: 'https://picsum.photos/seed/bioldict/600/400', dataAiHint: 'biology definitions', pricing: 'Free' },
            { name: 'Z-Library', description: 'The world\'s largest ebook library.', url: 'https://z-lib.is/', image: 'https://picsum.photos/seed/zlibrary/600/400', dataAiHint: 'ebook library', pricing: 'Free' },
            { name: 'Library Genesis', description: 'A file-sharing based shadow library.', url: 'https://libgen.is/', image: 'https://picsum.photos/seed/libgen/600/400', dataAiHint: 'shadow library', pricing: 'Free' },
            { name: 'Sci-Hub', description: 'The first pirate website to provide mass and public access to research papers.', url: 'https://sci-hub.se/', image: 'https://picsum.photos/seed/scihub/600/400', dataAiHint: 'research papers', pricing: 'Free' },
            { name: 'ChatGPT', description: 'AI assistant for explaining concepts.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-qs/600/400', dataAiHint: 'concept explainer', pricing: 'Freemium' },
            { name: 'Gemini', description: 'Google\'s AI for learning.', url: 'https://gemini.google.com/', image: 'https://picsum.photos/seed/gemini-qs/600/400', dataAiHint: 'learning ai', pricing: 'Free' },
            { name: 'Perplexity AI', description: 'AI search and answer engine.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-qs/600/400', dataAiHint: 'answer engine', pricing: 'Freemium' },
            { name: 'Paper-Brain', description: 'A platform to understand research papers.', url: 'https://www.paperbrain.study/', image: 'https://picsum.photos/seed/paperbrain/600/400', dataAiHint: 'understand papers', pricing: 'Paid' },
            { name: 'Gauthmath', description: 'Instant math homework helper.', url: 'https://www.gauthmath.com/', image: 'https://picsum.photos/seed/gauthmath/600/400', dataAiHint: 'math helper', pricing: 'Freemium' },
            { name: 'Math AI', description: 'AI-powered math tutor.', url: 'https://mathai.com/', image: 'https://picsum.photos/seed/mathai/600/400', dataAiHint: 'ai math', pricing: 'Paid' },
            { name: 'ScanMath', description: 'Scan and solve math problems.', url: 'https://www.scanmath.com/', image: 'https://picsum.photos/seed/scanmath/600/400', dataAiHint: 'scan math', pricing: 'Freemium' },
            { name: 'AirMath', description: 'AI-powered math solver.', url: 'https://airmath.ai/', image: 'https://picsum.photos/seed/airmath/600/400', dataAiHint: 'math solver', pricing: 'Freemium' },
            { name: 'CameraMath', description: 'Solve math problems with your camera.', url: 'https://www.cameramath.com/', image: 'https://picsum.photos/seed/cameramath/600/400', dataAiHint: 'camera math', pricing: 'Freemium' },
            { name: 'TutorEva', description: 'AI math tutor.', url: 'https://www.tutoreva.com/', image: 'https://picsum.photos/seed/tutoreva/600/400', dataAiHint: 'eva tutor', pricing: 'Freemium' },
            { name: 'Question.AI', description: 'AI homework helper.', url: 'https://www.question.ai/', image: 'https://picsum.photos/seed/questionai/600/400', dataAiHint: 'homework ai', pricing: 'Free' },
            { name: 'Homeworkify', description: 'Free homework answers.', url: 'https://homeworkify.net/', image: 'https://picsum.photos/seed/homeworkify/600/400', dataAiHint: 'free answers', pricing: 'Free' },
            { name: 'Study.com', description: 'Online courses and study tools.', url: 'https://study.com/', image: 'https://picsum.photos/seed/studycom/600/400', dataAiHint: 'study tools', pricing: 'Paid' },
            { name: 'Yup', description: 'Math tutoring app.', url: 'https://www.yup.com/', image: 'https://picsum.photos/seed/yup/600/400', dataAiHint: 'tutoring app', pricing: 'Paid' },
            { name: 'TutorMe', description: 'On-demand tutoring.', url: 'https://tutorme.com/', image: 'https://picsum.photos/seed/tutorme/600/400', dataAiHint: 'on-demand tutoring', pricing: 'Paid' },
        ]
    },
    {
        title: "Exam Revision Tools",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Quizlet', description: 'Learn with flashcards, games, and more.', url: 'https://quizlet.com/', image: 'https://picsum.photos/seed/quizlet/600/400', dataAiHint: 'study sets', pricing: 'Freemium' },
            { name: 'Anki', description: 'Powerful, intelligent flashcards.', url: 'https://apps.ankiweb.net/', image: 'https://picsum.photos/seed/anki/600/400', dataAiHint: 'spaced repetition', pricing: 'Free' },
            { name: 'StudySmarter', description: 'All-in-one learning platform.', url: 'https://www.studysmarter.us/', image: 'https://picsum.photos/seed/studysmarter/600/400', dataAiHint: 'learning platform', pricing: 'Free' },
            { name: 'GoConqr', description: 'Create, share, and discover learning resources.', url: 'https://www.goconqr.com/', image: 'https://picsum.photos/seed/goconqr/600/400', dataAiHint: 'mind maps', pricing: 'Freemium' },
            { name: 'MindMeister', description: 'Online mind mapping and brainstorming.', url: 'https://www.mindmeister.com/', image: 'https://picsum.photos/seed/mindmeister-study/600/400', dataAiHint: 'visual learning', pricing: 'Freemium' },
            { name: 'Cram', description: 'Create and share online flashcards.', url: 'https://www.cram.com/', image: 'https://picsum.photos/seed/cram/600/400', dataAiHint: 'online flashcards', pricing: 'Free' },
            { name: 'Brainscape', description: 'The world\'s smartest flashcards.', url: 'https://www.brainscape.com/', image: 'https://picsum.photos/seed/brainscape/600/400', dataAiHint: 'smart flashcards', pricing: 'Freemium' },
            { name: 'Memrise', description: 'The fastest way to learn a language.', url: 'https://www.memrise.com/', image: 'https://picsum.photos/seed/memrise-revision/600/400', dataAiHint: 'language learning', pricing: 'Freemium' },
            { name: 'SuperMemo', description: 'Spaced repetition software.', url: 'https://supermemo.com/', image: 'https://picsum.photos/seed/supermemo/600/400', dataAiHint: 'learning software', pricing: 'Paid' },
            { name: 'Knowt', description: 'Free Quizlet alternative with AI flashcards.', url: 'https://knowt.com/', image: 'https://picsum.photos/seed/knowt/600/400', dataAiHint: 'ai flashcards', pricing: 'Freemium' },
            { name: 'Seneca Learning', description: 'Free homework and revision for GCSE & A-Level.', url: 'https://senecalearning.com/', image: 'https://picsum.photos/seed/seneca/600/400', dataAiHint: 'gcse revision', pricing: 'Freemium' },
            { name: 'Save My Exams', description: 'Revision notes, past papers, and topic questions.', url: 'https://www.savemyexams.com/', image: 'https://picsum.photos/seed/savemyexams/600/400', dataAiHint: 'past papers', pricing: 'Paid' },
            { name: 'Physics and Maths Tutor', description: 'Revision for a range of subjects.', url: 'https://www.physicsandmathstutor.com/', image: 'https://picsum.photos/seed/pmt/600/400', dataAiHint: 'maths revision', pricing: 'Free' },
            { name: 'Get Revising', description: 'Revision tools and resources.', url: 'https://getrevising.co.uk/', image: 'https://picsum.photos/seed/getrevising/600/400', dataAiHint: 'revision resources', pricing: 'Free' },
            { name: 'The Student Room', description: 'The UK\'s largest student community.', url: 'https://www.thestudentroom.co.uk/', image: 'https://picsum.photos/seed/tsr/600/400', dataAiHint: 'student community', pricing: 'Free' },
            { name: 'S-cool', description: 'GCSE and A-level revision.', url: 'https://www.s-cool.co.uk/', image: 'https://picsum.photos/seed/scool/600/400', dataAiHint: 'a-level revision', pricing: 'Free' },
            { name: 'BBC Bitesize', description: 'Free learning resources for students.', url: 'https://www.bbc.co.uk/bitesize', image: 'https://picsum.photos/seed/bitesize/600/400', dataAiHint: 'bbc learning', pricing: 'Free' },
            { name: 'Revision World', description: 'GCSE & A-Level revision.', url: 'https://revisionworld.com/', image: 'https://picsum.photos/seed/revisionworld/600/400', dataAiHint: 'revision website', pricing: 'Free' },
            { name: 'Examtime', description: 'Now GoConqr.', url: 'https://www.goconqr.com/', image: 'https://picsum.photos/seed/examtime/600/400', dataAiHint: 'online learning', pricing: 'Freemium' },
            { name: 'Coggle', description: 'Simple collaborative mind maps.', url: 'https://coggle.it/', image: 'https://picsum.photos/seed/coggle-revision/600/400', dataAiHint: 'mind mapping', pricing: 'Freemium' },
            { name: 'XMind', description: 'Full-featured mind mapping tool.', url: 'https://www.xmind.net/', image: 'https://picsum.photos/seed/xmind-revision/600/400', dataAiHint: 'brainstorming', pricing: 'Freemium' },
            { name: 'SimpleMind', description: 'Mind mapping for brainstorming and organizing ideas.', url: 'https://simplemind.eu/', image: 'https://picsum.photos/seed/simplemind/600/400', dataAiHint: 'idea organization', pricing: 'Freemium' },
            { name: 'FreeMind', description: 'A free mind-mapping software.', url: 'http://freemind.sourceforge.net/wiki/index.php/Main_Page', image: 'https://picsum.photos/seed/freemind/600/400', dataAiHint: 'open source', pricing: 'Free' },
            { name: 'Kahoot!', description: 'Create and play learning games.', url: 'https://kahoot.com/', image: 'https://picsum.photos/seed/kahoot/600/400', dataAiHint: 'learning games', pricing: 'Freemium' },
            { name: 'Gimkit', description: 'A game show for the classroom.', url: 'https://www.gimkit.com/', image: 'https://picsum.photos/seed/gimkit/600/400', dataAiHint: 'classroom game', pricing: 'Freemium' },
            { name: 'Blooket', description: 'A new take on trivia and review games.', url: 'https://www.blooket.com/', image: 'https://picsum.photos/seed/blooket/600/400', dataAiHint: 'review games', pricing: 'Free' },
            { name: 'Quizizz', description: 'Interactive quizzes for every classroom.', url: 'https://quizizz.com/', image: 'https://picsum.photos/seed/quizizz/600/400', dataAiHint: 'interactive quizzes', pricing: 'Freemium' },
            { name: 'Edpuzzle', description: 'Make any video your lesson.', url: 'https://edpuzzle.com/', image: 'https://picsum.photos/seed/edpuzzle/600/400', dataAiHint: 'video lesson', pricing: 'Freemium' },
            { name: 'Nearpod', description: 'Interactive lessons.', url: 'https://nearpod.com/', image: 'https://picsum.photos/seed/nearpod/600/400', dataAiHint: 'interactive slides', pricing: 'Freemium' },
            { name: 'Pear Deck', description: 'Interactive presentations for Google Slides and PowerPoint.', url: 'https://www.peardeck.com/', image: 'https://picsum.photos/seed/peardeck/600/400', dataAiHint: 'google slides', pricing: 'Freemium' },
            { name: 'NoRedInk', description: 'Build better writers.', url: 'https://www.noredink.com/', image: 'https://picsum.photos/seed/noredink/600/400', dataAiHint: 'writing practice', pricing: 'Freemium' },
            { name: 'IXL', description: 'Personalized learning.', url: 'https://www.ixl.com/', image: 'https://picsum.photos/seed/ixl/600/400', dataAiHint: 'personalized learning', pricing: 'Paid' },
            { name: 'CommonLit', description: 'Free reading passages and literacy resources.', url: 'https://www.commonlit.org/', image: 'https://picsum.photos/seed/commonlit/600/400', dataAiHint: 'reading passages', pricing: 'Free' },
            { name: 'Actively Learn', description: 'Reading for depth.', url: 'https://www.activelylearn.com/', image: 'https://picsum.photos/seed/activelylearn/600/400', dataAiHint: 'deep reading', pricing: 'Freemium' },
            { name: 'ReadWorks', description: 'The solution to reading comprehension.', url: 'https://www.readworks.org/', image: 'https://picsum.photos/seed/readworks/600/400', dataAiHint: 'reading comprehension', pricing: 'Free' },
            { name: 'Newsela', description: 'Instructional Content Platform.', url: 'https://newsela.com/', image: 'https://picsum.photos/seed/newsela/600/400', dataAiHint: 'content platform', pricing: 'Paid' },
            { name: 'Flocabulary', description: 'Educational hip-hop videos.', url: 'https://www.flocabulary.com/', image: 'https://picsum.photos/seed/flocabulary/600/400', dataAiHint: 'hip-hop learning', pricing: 'Paid' },
            { name: 'StudyBlue', description: 'Online flashcards, notes and study guides.', url: 'https://www.chegg.com/flashcards', image: 'https://picsum.photos/seed/studyblue/600/400', dataAiHint: 'study guides', pricing: 'Paid' },
            { name: 'Tinycards', description: 'Flashcards by Duolingo (discontinued).', url: 'https://tinycards.duolingo.com/', image: 'https://picsum.photos/seed/tinycards/600/400', dataAiHint: 'duolingo flashcards', pricing: 'Free' },
            { name: 'Quizalize', description: 'The fun quiz platform.', url: 'https://www.quizalize.com/', image: 'https://picsum.photos/seed/quizalize/600/400', dataAiHint: 'fun quizzes', pricing: 'Freemium' },
            { name: 'Wordwall', description: 'Create custom activities for your classroom.', url: 'https://wordwall.net/', image: 'https://picsum.photos/seed/wordwall/600/400', dataAiHint: 'custom activities', pricing: 'Freemium' },
            { name: 'Flippity', description: 'Easily turn a Google Spreadsheet into a set of online flashcards.', url: 'https://www.flippity.net/', image: 'https://picsum.photos/seed/flippity/600/400', dataAiHint: 'google sheets', pricing: 'Free' },
            { name: 'StudyStack', description: 'Online flashcards and study tools.', url: 'https://www.studystack.com/', image: 'https://picsum.photos/seed/studystack/600/400', dataAiHint: 'study tools', pricing: 'Free' },
            { name: 'Cobocards', description: 'Create and learn flashcards online.', url: 'https://cobocards.com/', image: 'https://picsum.photos/seed/cobocards/600/400', dataAiHint: 'learn flashcards', pricing: 'Freemium' },
            { name: 'Flashcard Machine', description: 'Create, study and share online flashcards.', url: 'https://www.flashcardmachine.com/', image: 'https://picsum.photos/seed/flashcardmachine/600/400', dataAiHint: 'share flashcards', pricing: 'Free' },
            { name: 'StudyLib', description: 'Online flashcards & notes.', url: 'https://studylib.net/', image: 'https://picsum.photos/seed/studylib/600/400', dataAiHint: 'online notes', pricing: 'Free' },
            { name: 'iDoRecall', description: 'The only app that uses spaced repetition with your notes.', url: 'https://www.idorecall.com/', image: 'https://picsum.photos/seed/idorecall/600/400', dataAiHint: 'notes repetition', pricing: 'Paid' },
            { name: 'Remnote', description: 'The all-in-one tool for thinking and learning.', url: 'https://www.remnote.com/', image: 'https://picsum.photos/seed/remnote/600/400', dataAiHint: 'thinking tool', pricing: 'Freemium' },
            { name: 'Polar', description: 'An integrated reading environment.', url: 'https://getpolarized.io/', image: 'https://picsum.photos/seed/polar/600/400', dataAiHint: 'reading environment', pricing: 'Freemium' },
            { name: 'MarginNote', description: 'A powerful reading tool for learners.', url: 'https://www.marginnote.com/', image: 'https://picsum.photos/seed/marginnote/600/400', dataAiHint: 'reading tool', pricing: 'Paid' },
            { name: 'LiquidText', description: 'A revolutionary tool for active reading.', url: 'https://www.liquidtext.net/', image: 'https://picsum.photos/seed/liquidtext/600/400', dataAiHint: 'active reading', pricing: 'Freemium' },
        ]
    },
    {
        title: "Productivity & Focus Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Forest', description: 'Stay focused, be present.', url: 'https://www.forestapp.cc/', image: 'https://picsum.photos/seed/forest-app/600/400', dataAiHint: 'focus timer', pricing: 'Freemium' },
            { name: 'Focus To-Do', description: 'Pomodoro Timer & To Do List.', url: 'https://www.focustodo.cn/', image: 'https://picsum.photos/seed/focustodo/600/400', dataAiHint: 'pomodoro technique', pricing: 'Freemium' },
            { name: 'Study Bunny', description: 'A motivating study timer app.', url: 'https://superbyte.site/studybunny', image: 'https://picsum.photos/seed/studybunny/600/400', dataAiHint: 'cute timer', pricing: 'Free' },
            { name: 'StayFree', description: 'Screen time tracker & app usage limiter.', url: 'https://www.stayfreeapps.com/', image: 'https://picsum.photos/seed/stayfree/600/400', dataAiHint: 'digital detox', pricing: 'Freemium' },
            { name: 'Freedom App', description: 'Block websites, apps, and the internet.', url: 'https://freedom.to/', image: 'https://picsum.photos/seed/freedom-app/600/400', dataAiHint: 'distraction blocker', pricing: 'Paid' },
            { name: 'Cold Turkey', description: 'The toughest website blocker.', url: 'https://getcoldturkey.com/', image: 'https://picsum.photos/seed/coldturkey/600/400', dataAiHint: 'website blocker', pricing: 'Freemium' },
            { name: 'SelfControl', description: 'A free Mac application to help you avoid distracting websites.', url: 'https://selfcontrolapp.com/', image: 'https://picsum.photos/seed/selfcontrol/600/400', dataAiHint: 'mac focus', pricing: 'Free' },
            { name: 'LeechBlock NG', description: 'A simple productivity tool for browsers.', url: 'https://www.proginosko.com/leechblock/', image: 'https://picsum.photos/seed/leechblock/600/400', dataAiHint: 'browser extension', pricing: 'Free' },
            { name: 'StayFocusd', description: 'A productivity extension for Google Chrome.', url: 'https://www.stayfocusd.com/', image: 'https://picsum.photos/seed/stayfocusd/600/400', dataAiHint: 'chrome focus', pricing: 'Free' },
            { name: 'RescueTime', description: 'Automated time-tracking and productivity tool.', url: 'https://www.rescuetime.com/', image: 'https://picsum.photos/seed/rescuetime-focus/600/400', dataAiHint: 'time tracking', pricing: 'Freemium' },
            { name: 'Toggl Track', description: 'Effortless time tracking.', url: 'https://toggl.com/track/', image: 'https://picsum.photos/seed/toggl-focus/600/400', dataAiHint: 'work timer', pricing: 'Freemium' },
            { name: 'Clockify', description: 'Free time tracker for teams.', url: 'https://clockify.me/', image: 'https://picsum.photos/seed/clockify-focus/600/400', dataAiHint: 'team time', pricing: 'Free' },
            { name: 'Noisli', description: 'Improve focus and boost productivity with background sounds.', url: 'https://www.noisli.com/', image: 'https://picsum.photos/seed/noisli/600/400', dataAiHint: 'background sounds', pricing: 'Freemium' },
            { name: 'myNoise', description: 'The noise machine for your ears.', url: 'https://mynoise.net/', image: 'https://picsum.photos/seed/mynoise/600/400', dataAiHint: 'sound generator', pricing: 'Free' },
            { name: 'Brain.fm', description: 'Functional music to improve focus.', url: 'https://www.brain.fm/', image: 'https://picsum.photos/seed/brainfm/600/400', dataAiHint: 'focus music', pricing: 'Paid' },
            { name: 'Focus@Will', description: 'Music scientifically optimized for focus.', url: 'https://www.focusatwill.com/', image: 'https://picsum.photos/seed/focusatwill/600/400', dataAiHint: 'science music', pricing: 'Paid' },
            { name: 'Krisp', description: 'AI-powered noise cancelling app.', url: 'https://krisp.ai/', image: 'https://picsum.photos/seed/krisp/600/400', dataAiHint: 'noise cancellation', pricing: 'Freemium' },
            { name: 'HazeOver', description: 'Distraction dimmer for Mac.', url: 'https://hazeover.com/', image: 'https://picsum.photos/seed/hazeover/600/400', dataAiHint: 'mac dimmer', pricing: 'Paid' },
            { name: 'Serene', description: 'A Mac app for laser focus.', url: 'https://sereneapp.com/', image: 'https://picsum.photos/seed/serene/600/400', dataAiHint: 'laser focus', pricing: 'Paid' },
            { name: 'FocusMe', description: 'A powerful app and website blocker.', url: 'https://focusme.com/', image: 'https://picsum.photos/seed/focusme/600/400', dataAiHint: 'app blocker', pricing: 'Paid' },
            { name: 'AppBlock', description: 'Block distracting apps & websites.', url: 'https://www.appblock.app/', image: 'https://picsum.photos/seed/appblock/600/400', dataAiHint: 'mobile focus', pricing: 'Freemium' },
            { name: 'Offtime', description: '(Un)plug and focus.', url: 'https://offtime.app/', image: 'https://picsum.photos/seed/offtime/600/400', dataAiHint: 'digital balance', pricing: 'Freemium' },
            { name: 'Space', description: 'Break your phone addiction.', url: 'https://findyourphonelifebalance.com/', image: 'https://picsum.photos/seed/space-app/600/400', dataAiHint: 'phone balance', pricing: 'Freemium' },
            { name: 'Moment', description: 'Screen Time Tracker.', url: 'https://inthemoment.io/', image: 'https://picsum.photos/seed/momentapp/600/400', dataAiHint: 'screen time', pricing: 'Paid' },
            { name: 'Flipd', description: 'The focus & study app.', url: 'https://www.flipdapp.co/', image: 'https://picsum.photos/seed/flipd/600/400', dataAiHint: 'study app', pricing: 'Freemium' },
            { name: 'Focus Keeper', description: 'Time management app.', url: 'https://apps.apple.com/us/app/focus-keeper-time-management/id867374917', image: 'https://picsum.photos/seed/focuskeeper/600/400', dataAiHint: 'time management', pricing: 'Freemium' },
            { name: 'Marinara Timer', description: 'A simple web-based Pomodoro timer.', url: 'https://www.marinaratimer.com/', image: 'https://picsum.photos/seed/marinara-focus/600/400', dataAiHint: 'web pomodoro', pricing: 'Free' },
            { name: 'Be Focused', description: 'Focus timer for Mac, iPhone, and iPad.', url: 'https://www.xwavesoft.com/be-focused-pro-for-iphone-ipad-mac.html', image: 'https://picsum.photos/seed/befocused-focus/600/400', dataAiHint: 'apple focus', pricing: 'Freemium' },
            { name: 'Tide', description: 'Sleep, focus, relax.', url: 'https://tide.fm/', image: 'https://picsum.photos/seed/tide/600/400', dataAiHint: 'sleep app', pricing: 'Freemium' },
            { name: 'Endel', description: 'Personalized soundscapes to help you focus, relax, and sleep.', url: 'https://endel.io/', image: 'https://picsum.photos/seed/endel/600/400', dataAiHint: 'soundscapes', pricing: 'Paid' },
            { name: 'Calm', description: 'The #1 app for sleep and meditation.', url: 'https://www.calm.com/', image: 'https://picsum.photos/seed/calm/600/400', dataAiHint: 'meditation app', pricing: 'Paid' },
            { name: 'Headspace', description: 'Meditation and sleep made simple.', url: 'https://www.headspace.com/', image: 'https://picsum.photos/seed/headspace/600/400', dataAiHint: 'sleep simple', pricing: 'Paid' },
            { name: 'Simple Habit', description: 'Meditation for busy people.', url: 'https://www.simplehabit.com/', image: 'https://picsum.photos/seed/simplehabit/600/400', dataAiHint: 'busy people', pricing: 'Paid' },
            { name: 'Insight Timer', description: 'Free meditation app.', url: 'https://insighttimer.com/', image: 'https://picsum.photos/seed/insighttimer/600/400', dataAiHint: 'free meditation', pricing: 'Freemium' },
            { name: 'Waking Up', description: 'A new operating system for your mind.', url: 'https://www.wakingup.com/', image: 'https://picsum.photos/seed/wakingup/600/400', dataAiHint: 'mind os', pricing: 'Paid' },
            { name: 'Ten Percent Happier', description: 'Meditation for a happier you.', url: 'https://www.tenpercent.com/', image: 'https://picsum.photos/seed/tenpercent/600/400', dataAiHint: 'happier you', pricing: 'Paid' },
            { name: 'Balance', description: 'Personalized meditation.', url: 'https://www.balanceapp.com/', image: 'https://picsum.photos/seed/balanceapp/600/400', dataAiHint: 'personalized', pricing: 'Paid' },
            { name: 'Aura', description: 'Relieve stress & anxiety.', url: 'https://www.aurahealth.io/', image: 'https://picsum.photos/seed/aurahealth/600/400', dataAiHint: 'relieve stress', pricing: 'Paid' },
            { name: 'Breethe', description: 'Meditation & sleep app.', url: 'https://breethe.com/', image: 'https://picsum.photos/seed/breethe/600/400', dataAiHint: 'sleep app', pricing: 'Paid' },
            { name: 'MindFi', description: 'Mental fitness for teams.', url: 'https://www.mindfi.co/', image: 'https://picsum.photos/seed/mindfi/600/400', dataAiHint: 'mental fitness', pricing: 'Paid' },
            { name: 'Pzizz', description: 'The world\'s most advanced sleep and power nap system.', url: 'https://pzizz.com/', image: 'https://picsum.photos/seed/pzizz/600/400', dataAiHint: 'power nap', pricing: 'Paid' },
            { name: 'Sleep Cycle', description: 'Smart alarm clock.', url: 'https://www.sleepcycle.com/', image: 'https://picsum.photos/seed/sleepcycle/600/400', dataAiHint: 'smart alarm', pricing: 'Freemium' },
            { name: 'Pillow', description: 'Sleep tracking & analysis.', url: 'https://pillow.app/', image: 'https://picsum.photos/seed/pillowapp/600/400', dataAiHint: 'sleep tracking', pricing: 'Freemium' },
            { name: 'AutoSleep', description: 'Automatically track your sleep.', url: 'https://autosleep.tantsissa.com/', image: 'https://picsum.photos/seed/autosleep/600/400', dataAiHint: 'apple watch', pricing: 'Paid' },
            { name: 'f.lux', description: 'Adapts the color of your computer\'s display.', url: 'https://justgetflux.com/', image: 'https://picsum.photos/seed/flux-focus/600/400', dataAiHint: 'screen color', pricing: 'Free' },
            { name: 'Twilight', description: 'Makes your device screen adaptable to the time of the day.', url: 'https://play.google.com/store/apps/details?id=com.urbandroid.lux', image: 'https://picsum.photos/seed/twilightapp/600/400', dataAiHint: 'android screen', pricing: 'Free' },
            { name: 'Alfred', description: 'Productivity app for macOS.', url: 'https://www.alfredapp.com/', image: 'https://picsum.photos/seed/alfred-focus/600/400', dataAiHint: 'app launcher', pricing: 'Freemium' },
            { name: 'Raycast', description: 'A blazingly fast, totally extendable launcher.', url: 'https://www.raycast.com/', image: 'https://picsum.photos/seed/raycast-focus/600/400', dataAiHint: 'mac launcher', pricing: 'Free' },
            { name: 'TextExpander', description: 'Smarter typing for busy people.', url: 'https://textexpander.com/', image: 'https://picsum.photos/seed/textexpander-focus/600/400', dataAiHint: 'snippet expander', pricing: 'Paid' },
            { name: 'Keyboard Maestro', description: 'Automate your Mac.', url: 'https://www.keyboardmaestro.com/', image: 'https://picsum.photos/seed/keyboardmaestro/600/400', dataAiHint: 'mac automation', pricing: 'Paid' },
        ]
    },
    {
        title: "Study Planner / Time Table Tools",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion Templates', description: 'Customizable templates for study planning.', url: 'https://www.notion.so/templates', image: 'https://picsum.photos/seed/notion-templates/600/400', dataAiHint: 'student planner', pricing: 'Freemium' },
            { name: 'Google Calendar', description: 'Organize your schedule and share events.', url: 'https://calendar.google.com/', image: 'https://picsum.photos/seed/google-calendar/600/400', dataAiHint: 'digital calendar', pricing: 'Free' },
            { name: 'Todoist', description: 'Organize your work and life.', url: 'https://todoist.com/', image: 'https://picsum.photos/seed/todoist-study/600/400', dataAiHint: 'task manager', pricing: 'Freemium' },
            { name: 'TickTick', description: 'To-do list, calendar, and habit tracker.', url: 'https://ticktick.com/', image: 'https://picsum.photos/seed/ticktick-study/600/400', dataAiHint: 'habit tracker', pricing: 'Freemium' },
            { name: 'Motion', description: 'Uses AI to plan your day.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/motion-study/600/400', dataAiHint: 'ai scheduler', pricing: 'Paid' },
            { name: 'Sunsama', description: 'A daily planner for calm work.', url: 'https://www.sunsama.com/', image: 'https://picsum.photos/seed/sunsama/600/400', dataAiHint: 'daily planner', pricing: 'Paid' },
            { name: 'Reclaim.ai', description: 'Smart time blocking for your calendar.', url: 'https://reclaim.ai/', image: 'https://picsum.photos/seed/reclaimai-planner/600/400', dataAiHint: 'time blocking', pricing: 'Freemium' },
            { name: 'Akiflow', description: 'Consolidate all your tools in one place.', url: 'https://akiflow.com/', image: 'https://picsum.photos/seed/akiflow/600/400', dataAiHint: 'task consolidation', pricing: 'Paid' },
            { name: 'Morgen', description: 'Unified calendar and productivity app.', url: 'https://www.morgen.so/', image: 'https://picsum.photos/seed/morgen/600/400', dataAiHint: 'unified calendar', pricing: 'Freemium' },
            { name: 'Fantastical', description: 'The calendar and tasks app you won\'t be able to live without.', url: 'https://flexibits.com/fantastical', image: 'https://picsum.photos/seed/fantastical-planner/600/400', dataAiHint: 'apple calendar', pricing: 'Freemium' },
            { name: 'Cron', description: 'The next-generation calendar for professionals and teams.', url: 'https://cron.com/', image: 'https://picsum.photos/seed/cron-planner/600/400', dataAiHint: 'notion calendar', pricing: 'Free' },
            { name: 'MyStudyLife', description: 'A cross-platform planner for students.', url: 'https://www.mystudylife.com/', image: 'https://picsum.photos/seed/mystudylife/600/400', dataAiHint: 'student planner', pricing: 'Free' },
            { name: 'Schooltraq', description: 'A simple student planner.', url: 'https://schooltraq.com/', image: 'https://picsum.photos/seed/schooltraq/600/400', dataAiHint: 'simple planner', pricing: 'Free' },
            { name: 'Power Planner', description: 'The ultimate student planner.', url: 'https://www.powerplanner.net/', image: 'https://picsum.photos/seed/powerplanner/600/400', dataAiHint: 'windows planner', pricing: 'Freemium' },
            { name: 'Chipper', description: 'Study planner and focus timer.', url: 'https://www.getchipper.com/', image: 'https://picsum.photos/seed/chipper/600/400', dataAiHint: 'focus timer', pricing: 'Freemium' },
            { name: 'Egenda', description: 'A student planner for your phone.', url: 'https://egenda.app/', image: 'https://picsum.photos/seed/egenda/600/400', dataAiHint: 'phone planner', pricing: 'Free' },
            { name: 'Todait', description: 'Smart study planner.', url: 'https://www.todait.com/', image: 'https://picsum.photos/seed/todait/600/400', dataAiHint: 'smart planner', pricing: 'Freemium' },
            { name: 'iStudiez Pro', description: 'A smart planner for students.', url: 'https://istudentpro.com/', image: 'https://picsum.photos/seed/istudiez/600/400', dataAiHint: 'mac student', pricing: 'Paid' },
            { name: 'Shovel', description: 'The study planner that actually helps you study.', url: 'https://www.shovelapp.com/', image: 'https://picsum.photos/seed/shovel/600/400', dataAiHint: 'college planner', pricing: 'Paid' },
            { name: 'Class Timetable', description: 'The perfect companion for school and college.', url: 'https://play.google.com/store/apps/details?id=com.iceton.timetabler', image: 'https://picsum.photos/seed/classtimetable/600/400', dataAiHint: 'school companion', pricing: 'Free' },
            { name: 'Timetable', description: 'The simple and intuitive timetable app.', url: 'https://play.google.com/store/apps/details?id=com.gabrielittner.timetable', image: 'https://picsum.photos/seed/timetableapp/600/400', dataAiHint: 'intuitive timetable', pricing: 'Free' },
            { name: 'TimeTree', description: 'Shared calendar app.', url: 'https://timetreeapp.com/', image: 'https://picsum.photos/seed/timetree/600/400', dataAiHint: 'shared calendar', pricing: 'Free' },
            { name: 'Trello', description: 'Visual collaboration tool for planning.', url: 'https://trello.com/', image: 'https://picsum.photos/seed/trello-planner/600/400', dataAiHint: 'kanban planner', pricing: 'Freemium' },
            { name: 'Asana', description: 'Work management for teams.', url: 'https://asana.com/', image: 'https://picsum.photos/seed/asana-planner/600/400', dataAiHint: 'project planner', pricing: 'Freemium' },
            { name: 'ClickUp', description: 'One app to replace them all.', url: 'https://clickup.com/', image: 'https://picsum.photos/seed/clickup-planner/600/400', dataAiHint: 'productivity platform', pricing: 'Freemium' },
            { name: 'Airtable', description: 'A powerful database for flexible planning.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-planner/600/400', dataAiHint: 'flexible planner', pricing: 'Freemium' },
            { name: 'Plan', description: 'Your work life in one place.', url: 'https://getplan.co/', image: 'https://picsum.photos/seed/plan-planner/600/400', dataAiHint: 'work planner', pricing: 'Paid' },
            { name: 'HourStack', description: 'A transparent, collaborative time management tool.', url: 'https://hourstack.com/', image: 'https://picsum.photos/seed/hourstack/600/400', dataAiHint: 'collaborative time', pricing: 'Paid' },
            { name: 'Planyway', description: 'Calendar and timeline for Trello.', url: 'https://planyway.com/', image: 'https://picsum.photos/seed/planyway/600/400', dataAiHint: 'trello calendar', pricing: 'Freemium' },
            { name: 'Toggl Plan', description: 'Beautifully simple project and resource planning.', url: 'https://toggl.com/plan/', image: 'https://picsum.photos/seed/togglplan/600/400', dataAiHint: 'team planning', pricing: 'Freemium' },
            { name: 'GanttPRO', description: 'Online Gantt chart software.', url: 'https://ganttpro.com/', image: 'https://picsum.photos/seed/ganttpro-planner/600/400', dataAiHint: 'gantt chart', pricing: 'Paid' },
            { name: 'TeamGantt', description: 'The easiest way for teams to plan projects.', url: 'https://www.teamgantt.com/', image: 'https://picsum.photos/seed/teamgantt-planner/600/400', dataAiHint: 'project planning', pricing: 'Freemium' },
            { name: 'Any.do', description: 'To-do list, calendar, planner and reminders.', url: 'https://www.any.do/', image: 'https://picsum.photos/seed/anydo-planner/600/400', dataAiHint: 'personal organizer', pricing: 'Freemium' },
            { name: 'Remember The Milk', description: 'The smart to-do app for busy people.', url: 'https://www.rememberthemilk.com/', image: 'https://picsum.photos/seed/rtm-planner/600/400', dataAiHint: 'smart to-do', pricing: 'Freemium' },
            { name: 'OmniFocus', description: 'A powerful task management app for Mac and iOS.', url: 'https://www.omnigroup.com/omnifocus/', image: 'https://picsum.photos/seed/omnifocus-planner/600/400', dataAiHint: 'apple tasks', pricing: 'Paid' },
            { name: 'Sorted^3', description: 'Hyper-scheduling to build your perfect day.', url: 'https://www.sortedapp.com/', image: 'https://picsum.photos/seed/sorted3/600/400', dataAiHint: 'hyper scheduling', pricing: 'Paid' },
            { name: 'Amazing Marvin', description: 'A customizable task manager.', url: 'https://www.amazingmarvin.com/', image: 'https://picsum.photos/seed/amazingmarvin/600/400', dataAiHint: 'behavioral psychology', pricing: 'Paid' },
            { name: 'Week Plan', description: 'An OKR based weekly planner.', url: 'https://weekplan.net/', image: 'https://picsum.photos/seed/weekplan/600/400', dataAiHint: 'weekly planner', pricing: 'Paid' },
            { name: 'Planny', description: 'The intelligent to do list.', url: 'https://planny.co/', image: 'https://picsum.photos/seed/planny/600/400', dataAiHint: 'intelligent list', pricing: 'Freemium' },
            { name: 'ZenDay', description: 'Your personal time organzier.', url: 'https://zenday-app.com/', image: 'https://picsum.photos/seed/zenday/600/400', dataAiHint: 'time organzier', pricing: 'Freemium' },
            { name: 'Doit.im', description: 'GTD app for your devices.', url: 'https://doit.im/', image: 'https://picsum.photos/seed/doitim/600/400', dataAiHint: 'gtd app', pricing: 'Freemium' },
            { name: 'Firefly', description: 'A new way to plan your future.', url: 'https://firefly.ai/', image: 'https://picsum.photos/seed/fireflyplanner/600/400', dataAiHint: 'future planner', pricing: 'Paid' },
            { name: 'TeuxDeux', description: 'A simple, designy to-do app.', url: 'https://teuxdeux.com/', image: 'https://picsum.photos/seed/teuxdeux-planner/600/400', dataAiHint: 'simple to-do', pricing: 'Paid' },
            { name: 'Habitica', description: 'Gamify Your Life.', url: 'https://habitica.com/', image: 'https://picsum.photos/seed/habitica-planner/600/400', dataAiHint: 'gamified tasks', pricing: 'Freemium' },
            { name: 'Streaks', description: 'The to-do list that helps you form good habits.', url: 'https://streaksapp.com/', image: 'https://picsum.photos/seed/streaks-planner/600/400', dataAiHint: 'habit tracker', pricing: 'Paid' },
            { name: 'Microsoft To Do', description: 'Your daily planner.', url: 'https://todo.microsoft.com/', image: 'https://picsum.photos/seed/msto-do/600/400', dataAiHint: 'daily planner', pricing: 'Free' },
            { name: 'Google Tasks', description: 'Get more done with the Google Tasks app.', url: 'https://mail.google.com/tasks/canvas', image: 'https://picsum.photos/seed/gtasks/600/400', dataAiHint: 'google tasks', pricing: 'Free' },
            { name: 'Taskade', description: 'Your second brain for teams.', url: 'https://www.taskade.com/', image: 'https://picsum.photos/seed/taskade-planner/600/400', dataAiHint: 'team brain', pricing: 'Freemium' },
            { name: 'Focuster', description: 'Focus on what matters.', url: 'https://www.focuster.com/', image: 'https://picsum.photos/seed/focuster/600/400', dataAiHint: 'focus app', pricing: 'Paid' },
            { name: 'SkedPal', description: 'An intelligent calendar.', url: 'https://skedpal.com/', image: 'https://picsum.photos/seed/skedpal/600/400', dataAiHint: 'intelligent calendar', pricing: 'Paid' },
            { name: 'TimeTune', description: 'Schedule your routine and time block.', url: 'https://timetune.app/', image: 'https://picsum.photos/seed/timetune/600/400', dataAiHint: 'routine scheduler', pricing: 'Freemium' },
        ]
    },
    {
        title: "Memory Booster Tools",
        icon: <Brain className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Anki', description: 'Intelligent flashcards for effective memorization.', url: 'https://apps.ankiweb.net/', image: 'https://picsum.photos/seed/anki-memory/600/400', dataAiHint: 'spaced repetition', pricing: 'Free' },
            { name: 'Memrise', description: 'The fastest way to learn a language.', url: 'https://www.memrise.com/', image: 'https://picsum.photos/seed/memrise/600/400', dataAiHint: 'language learning', pricing: 'Freemium' },
            { name: 'ChatGPT Mnemonic Mode', description: 'Use AI to create memory aids.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-mnemonic/600/400', dataAiHint: 'memory palace', pricing: 'Freemium' },
            { name: 'SuperMemo', description: 'Spaced repetition software for learning.', url: 'https://supermemo.com/', image: 'https://picsum.photos/seed/supermemo/600/400', dataAiHint: 'learning software', pricing: 'Paid' },
            { name: 'Brainscape', description: 'The world\'s smartest flashcards.', url: 'https://www.brainscape.com/', image: 'https://picsum.photos/seed/brainscape-memory/600/400', dataAiHint: 'smart flashcards', pricing: 'Freemium' },
            { name: 'Quizlet', description: 'Learn with flashcards, games, and more.', url: 'https://quizlet.com/', image: 'https://picsum.photos/seed/quizlet-memory/600/400', dataAiHint: 'study sets', pricing: 'Freemium' },
            { name: 'Knowt', description: 'AI-powered learning assistant.', url: 'https://knowt.com/', image: 'https://picsum.photos/seed/knowt-memory/600/400', dataAiHint: 'ai flashcards', pricing: 'Freemium' },
            { name: 'Mochi', description: 'A simple spaced repetition app.', url: 'https://mochi.cards/', image: 'https://picsum.photos/seed/mochi-memory/600/400', dataAiHint: 'simple srs', pricing: 'Freemium' },
            { name: 'Remnote', description: 'The all-in-one tool for thinking and learning.', url: 'https://www.remnote.com/', image: 'https://picsum.photos/seed/remnote-memory/600/400', dataAiHint: 'learning tool', pricing: 'Freemium' },
            { name: 'iDoRecall', description: 'Spaced repetition with your notes and files.', url: 'https://www.idorecall.com/', image: 'https://picsum.photos/seed/idorecall-memory/600/400', dataAiHint: 'notes repetition', pricing: 'Paid' },
            { name: 'Readwise', description: 'Get the most out of what you read.', url: 'https://readwise.io/', image: 'https://picsum.photos/seed/readwise-memory/600/400', dataAiHint: 'reading highlights', pricing: 'Paid' },
            { name: 'Cerego', description: 'Adaptive learning platform.', url: 'https://www.cerego.com/', image: 'https://picsum.photos/seed/cerego/600/400', dataAiHint: 'adaptive learning', pricing: 'Paid' },
            { name: 'NeuraCache', description: 'Spaced repetition for your notes.', url: 'https://neuracache.com/', image: 'https://picsum.photos/seed/neuracache/600/400', dataAiHint: 'evernote srs', pricing: 'Paid' },
            { name: 'Lumosity', description: 'Brain training games.', url: 'https://www.lumosity.com/', image: 'https://picsum.photos/seed/lumosity/600/400', dataAiHint: 'brain games', pricing: 'Paid' },
            { name: 'Elevate', description: 'Brain training app.', url: 'https://www.elevateapp.com/', image: 'https://picsum.photos/seed/elevate/600/400', dataAiHint: 'brain training', pricing: 'Paid' },
            { name: 'Peak', description: 'Brain training games.', url: 'https://www.peak.net/', image: 'https://picsum.photos/seed/peak/600/400', dataAiHint: 'cognitive skills', pricing: 'Paid' },
            { name: 'CogniFit', description: 'Brain training and cognitive assessment.', url: 'https://www.cognifit.com/', image: 'https://picsum.photos/seed/cognifit/600/400', dataAiHint: 'cognitive assessment', pricing: 'Freemium' },
            { name: 'Brilliant.org', description: 'Build quantitative skills.', url: 'https://brilliant.org/', image: 'https://picsum.photos/seed/brilliant-memory/600/400', dataAiHint: 'math science', pricing: 'Freemium' },
            { name: 'Mnemosyne', description: 'A spaced repetition flashcard program.', url: 'https://mnemosyne-proj.org/', image: 'https://picsum.photos/seed/mnemosyne/600/400', dataAiHint: 'open source srs', pricing: 'Free' },
            { name: 'Mem-x', description: 'Create and use mnemonics.', url: 'https://apps.apple.com/us/app/mem-x/id1530931349', image: 'https://picsum.photos/seed/memx/600/400', dataAiHint: 'mnemonics', pricing: 'Freemium' },
            { name: 'Memory Palace', description: 'Techniques and software for memory palaces.', url: 'https://memory-palace.com/', image: 'https://picsum.photos/seed/memorypalace/600/400', dataAiHint: 'locus method', pricing: 'Free' },
            { name: 'Art of Memory', description: 'Memory techniques, mnemonics, and more.', url: 'https://artofmemory.com/', image: 'https://picsum.photos/seed/artofmemory/600/400', dataAiHint: 'memory techniques', pricing: 'Free' },
            { name: 'Rememberg', description: 'Visual learning with spaced repetition.', url: 'https://rememberg.com/', image: 'https://picsum.photos/seed/rememberg/600/400', dataAiHint: 'visual learning', pricing: 'Free' },
            { name: 'Anymemo', description: 'A spaced repetition flashcard software.', url: 'http://anymemo.org/', image: 'https://picsum.photos/seed/anymemo/600/400', dataAiHint: 'flashcard software', pricing: 'Free' },
            { name: 'FreshMemory', description: 'A spaced repetition flashcard program.', url: 'https://freshmemory.sourceforge.io/', image: 'https://picsum.photos/seed/freshmemory/600/400', dataAiHint: 'srs program', pricing: 'Free' },
            { name: 'Pauker', description: 'A generic spaced repetition flashcard program.', url: 'https://pauker.sourceforge.net/', image: 'https://picsum.photos/seed/pauker/600/400', dataAiHint: 'java flashcards', pricing: 'Free' },
            { name: 'StudySmarter', description: 'The all-in-one learning platform.', url: 'https://www.studysmarter.us/', image: 'https://picsum.photos/seed/studysmarter-memory/600/400', dataAiHint: 'learning app', pricing: 'Free' },
            { name: 'MindMeister', description: 'Online mind mapping.', url: 'https://www.mindmeister.com/', image: 'https://picsum.photos/seed/mindmeister-memory/600/400', dataAiHint: 'mind mapping', pricing: 'Freemium' },
            { name: 'TheBrain', description: 'A digital memory.', url: 'https://www.thebrain.com/', image: 'https://picsum.photos/seed/thebrain-memory/600/400', dataAiHint: 'digital memory', pricing: 'Freemium' },
            { name: 'OneNote', description: 'Digital note-taking app.', url: 'https://www.onenote.com/', image: 'https://picsum.photos/seed/onenote-memory/600/400', dataAiHint: 'digital notes', pricing: 'Free' },
            { name: 'Evernote', description: 'Your second brain.', url: 'https://evernote.com/', image: 'https://picsum.photos/seed/evernote-memory/600/400', dataAiHint: 'second brain', pricing: 'Freemium' },
            { name: 'Notion', description: 'The all-in-one workspace.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-memory/600/400', dataAiHint: 'workspace app', pricing: 'Freemium' },
            { name: 'Cerebrum', description: 'A spaced repetition app for iOS.', url: 'https://apps.apple.com/us/app/cerebrum-srs/id1453995878', image: 'https://picsum.photos/seed/cerebrum/600/400', dataAiHint: 'ios srs', pricing: 'Paid' },
            { name: 'Flashcards Deluxe', description: 'A powerful flashcard app.', url: 'https://www.flashcardsdeluxe.com/', image: 'https://picsum.photos/seed/flashcardsdeluxe/600/400', dataAiHint: 'powerful flashcards', pricing: 'Paid' },
            { name: 'Chegg Flashcards', description: 'Create and study flashcards.', url: 'https://www.chegg.com/flashcards', image: 'https://picsum.photos/seed/chegg-flashcards/600/400', dataAiHint: 'study flashcards', pricing: 'Paid' },
            { name: 'GoConqr', description: 'Learning resources.', url: 'https://www.goconqr.com/', image: 'https://picsum.photos/seed/goconqr-memory/600/400', dataAiHint: 'learning resources', pricing: 'Freemium' },
            { name: 'StudyStack', description: 'Flashcards and study tools.', url: 'https://www.studystack.com/', image: 'https://picsum.photos/seed/studystack-memory/600/400', dataAiHint: 'study tools', pricing: 'Free' },
            { name: 'Tinycards', description: 'Flashcards by Duolingo (discontinued).', url: 'https://tinycards.duolingo.com/', image: 'https://picsum.photos/seed/tinycards-memory/600/400', dataAiHint: 'duolingo flashcards', pricing: 'Free' },
            { name: 'Deckademy', description: 'Spaced repetition for teams.', url: 'https://deckademy.com/', image: 'https://picsum.photos/seed/deckademy/600/400', dataAiHint: 'team srs', pricing: 'Paid' },
            { name: 'Traverse', description: 'A new way to learn.', url: 'https://traverse.link/', image: 'https://picsum.photos/seed/traverse/600/400', dataAiHint: 'learning tool', pricing: 'Freemium' },
            { name: 'Ulangi', description: 'Spaced repetition app.', url: 'https://ulangi.com/', image: 'https://picsum.photos/seed/ulangi/600/400', dataAiHint: 'language srs', pricing: 'Free' },
            { name: 'LingoDeer', description: 'Learn languages smarter, not harder.', url: 'https://www.lingodeer.com/', image: 'https://picsum.photos/seed/lingodeer/600/400', dataAiHint: 'smart language', pricing: 'Paid' },
            { name: 'Clozemaster', description: 'Language learning through gamification.', url: 'https://www.clozemaster.com/', image: 'https://picsum.photos/seed/clozemaster/600/400', dataAiHint: 'gamified learning', pricing: 'Freemium' },
            { name: 'Babbel', description: 'Language for life.', url: 'https://www.babbel.com/', image: 'https://picsum.photos/seed/babbel-memory/600/400', dataAiHint: 'language app', pricing: 'Paid' },
            { name: 'Duolingo', description: 'Learn a language for free.', url: 'https://www.duolingo.com/', image: 'https://picsum.photos/seed/duolingo-memory/600/400', dataAiHint: 'free language', pricing: 'Freemium' },
            { name: 'Rosetta Stone', description: 'The gold standard of language learning.', url: 'https://www.rosettastone.com/', image: 'https://picsum.photos/seed/rosettastone-memory/600/400', dataAiHint: 'language learning', pricing: 'Paid' },
            { name: 'Busuu', description: 'Learn a language in 10 minutes a day.', url: 'https://www.busuu.com/', image: 'https://picsum.photos/seed/busuu-memory/600/400', dataAiHint: '10-minute learning', pricing: 'Paid' },
            { name: 'Pimsleur', description: 'The Pimsleur Method.', url: 'https://www.pimsleur.com/', image: 'https://picsum.photos/seed/pimsleur-memory/600/400', dataAiHint: 'audio learning', pricing: 'Paid' },
            { name: 'Michel Thomas Method', description: 'The natural way to learn a language.', url: 'https://www.michelthomas.com/', image: 'https://picsum.photos/seed/michelthomas/600/400', dataAiHint: 'natural learning', pricing: 'Paid' },
            { name: 'Glossika', description: 'Spaced repetition for language learning.', url: 'https://glossika.com/', image: 'https://picsum.photos/seed/glossika/600/400', dataAiHint: 'language fluency', pricing: 'Paid' },
            { name: 'FluentU', description: 'Learn a language with real-world videos.', url: 'https://www.fluentu.com/', image: 'https://picsum.photos/seed/fluentu/600/400', dataAiHint: 'video learning', pricing: 'Paid' },
        ]
    },
    {
        title: "Research / Information Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Perplexity AI', description: 'An answer engine for discovering and sharing knowledge.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-research/600/400', dataAiHint: 'knowledge engine', pricing: 'Freemium' },
            { name: 'Google Scholar', description: 'Provides a simple way to broadly search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://picsum.photos/seed/googlescholar/600/400', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Research Rabbit', description: 'Your personal research assistant.', url: 'https://www.researchrabbit.ai/', image: 'https://picsum.photos/seed/researchrabbit/600/400', dataAiHint: 'literature map', pricing: 'Free' },
            { name: 'SciSpace', description: 'Explore, understand, and explain research papers.', url: 'https://typeset.io/', image: 'https://picsum.photos/seed/scispace/600/400', dataAiHint: 'ai for research', pricing: 'Freemium' },
            { name: 'Wikipedia Pro Search', description: 'Advanced search for Wikipedia content.', url: 'https://en.wikipedia.org/wiki/Special:Search', image: 'https://picsum.photos/seed/wikipediasearch/600/400', dataAiHint: 'encyclopedia search', pricing: 'Free' },
            { name: 'Elicit', description: 'The AI Research Assistant.', url: 'https://elicit.org/', image: 'https://picsum.photos/seed/elicit/600/400', dataAiHint: 'research assistant', pricing: 'Freemium' },
            { name: 'Connected Papers', description: 'A visual tool to find and explore academic papers.', url: 'https://www.connectedpapers.com/', image: 'https://picsum.photos/seed/connectedpapers/600/400', dataAiHint: 'visual explorer', pricing: 'Free' },
            { name: 'Scite', description: 'See how research has been cited.', url: 'https://scite.ai/', image: 'https://picsum.photos/seed/scite/600/400', dataAiHint: 'smart citations', pricing: 'Freemium' },
            { name: 'Iris.ai', description: 'The AI-powered science assistant.', url: 'https://iris.ai/', image: 'https://picsum.photos/seed/irisai/600/400', dataAiHint: 'science assistant', pricing: 'Paid' },
            { name: 'Inciteful', description: 'Build a graph of academic papers.', url: 'https://inciteful.xyz/', image: 'https://picsum.photos/seed/inciteful/600/400', dataAiHint: 'paper graph', pricing: 'Free' },
            { name: 'Raxter', description: 'AI research assistant for scientists.', url: 'https://raxter.io/', image: 'https://picsum.photos/seed/raxter/600/400', dataAiHint: 'scientist assistant', pricing: 'Paid' },
            { name: 'Consensus', description: 'An AI search engine for research.', url: 'https://consensus.app/', image: 'https://picsum.photos/seed/consensus/600/400', dataAiHint: 'ai search', pricing: 'Freemium' },
            { name: 'Litmaps', description: 'Create literature maps for your research.', url: 'https://www.litmaps.com/', image: 'https://picsum.photos/seed/litmaps/600/400', dataAiHint: 'literature maps', pricing: 'Freemium' },
            { name: 'Semantic Scholar', description: 'AI-powered research tool for scientific literature.', url: 'https://www.semanticscholar.org/', image: 'https://picsum.photos/seed/semanticscholar/600/400', dataAiHint: 'scientific literature', pricing: 'Free' },
            { name: 'Dimensions', description: 'The world’s largest linked research database.', url: 'https://www.dimensions.ai/', image: 'https://picsum.photos/seed/dimensions/600/400', dataAiHint: 'research database', pricing: 'Freemium' },
            { name: 'JSTOR', description: 'A digital library of academic journals, books, and primary sources.', url: 'https://www.jstor.org/', image: 'https://picsum.photos/seed/jstor/600/400', dataAiHint: 'digital library', pricing: 'Paid' },
            { name: 'ProQuest', description: 'A vast collection of content.', url: 'https://www.proquest.com/', image: 'https://picsum.photos/seed/proquest/600/400', dataAiHint: 'research content', pricing: 'Paid' },
            { name: 'Web of Science', description: 'The world\'s most trusted publisher-independent global citation database.', url: 'https://clarivate.com/webofsciencegroup/solutions/web-of-science/', image: 'https://picsum.photos/seed/webofscience/600/400', dataAiHint: 'citation database', pricing: 'Paid' },
            { name: 'Scopus', description: 'The largest abstract and citation database of peer-reviewed literature.', url: 'https://www.scopus.com/', image: 'https://picsum.photos/seed/scopus/600/400', dataAiHint: 'peer-reviewed', pricing: 'Paid' },
            { name: 'PubMed', description: 'Comprises more than 33 million citations for biomedical literature.', url: 'https://pubmed.ncbi.nlm.nih.gov/', image: 'https://picsum.photos/seed/pubmed/600/400', dataAiHint: 'biomedical literature', pricing: 'Free' },
            { name: 'arXiv', description: 'Open access to scientific articles.', url: 'https://arxiv.org/', image: 'https://picsum.photos/seed/arxiv/600/400', dataAiHint: 'open access', pricing: 'Free' },
            { name: 'bioRxiv', description: 'The preprint server for biology.', url: 'https://www.biorxiv.org/', image: 'https://picsum.photos/seed/biorxiv/600/400', dataAiHint: 'biology preprint', pricing: 'Free' },
            { name: 'medRxiv', description: 'The preprint server for health sciences.', url: 'https://www.medrxiv.org/', image: 'https://picsum.photos/seed/medrxiv/600/400', dataAiHint: 'health sciences', pricing: 'Free' },
            { name: 'ChemRxiv', description: 'The preprint server for chemistry.', url: 'https://chemrxiv.org/', image: 'https://picsum.photos/seed/chemrxiv/600/400', dataAiHint: 'chemistry preprint', pricing: 'Free' },
            { name: 'SSRN', description: 'Social Science Research Network.', url: 'https://www.ssrn.com/', image: 'https://picsum.photos/seed/ssrn/600/400', dataAiHint: 'social science', pricing: 'Free' },
            { name: 'ResearchGate', description: 'The professional network for scientists.', url: 'https://www.researchgate.net/', image: 'https://picsum.photos/seed/researchgate/600/400', dataAiHint: 'scientist network', pricing: 'Free' },
            { name: 'Academia.edu', description: 'Share research.', url: 'https://www.academia.edu/', image: 'https://picsum.photos/seed/academiaedu/600/400', dataAiHint: 'share research', pricing: 'Free' },
            { name: 'Zotero', description: 'Your personal research assistant.', url: 'https://www.zotero.org/', image: 'https://picsum.photos/seed/zotero-research/600/400', dataAiHint: 'reference manager', pricing: 'Free' },
            { name: 'Mendeley', description: 'Reference management software.', url: 'https://www.mendeley.com/', image: 'https://picsum.photos/seed/mendeley-research/600/400', dataAiHint: 'citation tool', pricing: 'Free' },
            { name: 'EndNote', description: 'Smarter reference management.', url: 'https://endnote.com/', image: 'https://picsum.photos/seed/endnote/600/400', dataAiHint: 'bibliography tool', pricing: 'Paid' },
            { name: 'Paperpile', description: 'Reference management for the web.', url: 'https://paperpile.com/', image: 'https://picsum.photos/seed/paperpile-research/600/400', dataAiHint: 'google docs', pricing: 'Paid' },
            { name: 'ReadCube', description: 'For researchers, by researchers.', url: 'https://www.readcube.com/', image: 'https://picsum.photos/seed/readcube/600/400', dataAiHint: 'enhanced pdf', pricing: 'Paid' },
            { name: 'F1000Prime', description: 'Article recommendations.', url: 'https://f1000.com/prime', image: 'https://picsum.photos/seed/f1000/600/400', dataAiHint: 'article recommendations', pricing: 'Paid' },
            { name: 'Papers', description: 'Your personal library of research.', url: 'https://www.papersapp.com/', image: 'https://picsum.photos/seed/papersapp/600/400', dataAiHint: 'research library', pricing: 'Paid' },
            { name: 'Qiqqa', description: 'Free research manager.', url: 'http://www.qiqqa.com/', image: 'https://picsum.photos/seed/qiqqa/600/400', dataAiHint: 'research manager', pricing: 'Free' },
            { name: 'JabRef', description: 'An open-source bibliography reference manager.', url: 'https://www.jabref.org/', image: 'https://picsum.photos/seed/jabref/600/400', dataAiHint: 'bibtex manager', pricing: 'Free' },
            { name: 'Citavi', description: 'Reference management and knowledge organization.', url: 'https://www.citavi.com/', image: 'https://picsum.photos/seed/citavi/600/400', dataAiHint: 'knowledge organization', pricing: 'Paid' },
            { name: 'Docear', description: 'The academic literature suite.', url: 'https://www.docear.org/', image: 'https://picsum.photos/seed/docear/600/400', dataAiHint: 'mind mapping', pricing: 'Paid' },
            { name: 'RefWorks', description: 'A web-based reference management service.', url: 'https://refworks.proquest.com/', image: 'https://picsum.photos/seed/refworks/600/400', dataAiHint: 'reference service', pricing: 'Paid' },
            { name: 'Wizdom.ai', description: 'The AI-powered research assistant.', url: 'https://www.wizdom.ai/', image: 'https://picsum.photos/seed/wizdomai/600/400', dataAiHint: 'ai assistant', pricing: 'Paid' },
            { name: 'Keenious', description: 'The AI that helps you find relevant research.', url: 'https://keenious.com/', image: 'https://picsum.photos/seed/keenious/600/400', dataAiHint: 'relevant research', pricing: 'Freemium' },
            { name: 'Scinapse', description: 'AI-powered search engine for academic papers.', url: 'https://scinapse.io/', image: 'https://picsum.photos/seed/scinapse/600/400', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'CORE', description: 'The world\'s largest collection of open access research papers.', url: 'https://core.ac.uk/', image: 'https://picsum.photos/seed/coreacuk/600/400', dataAiHint: 'open access', pricing: 'Free' },
            { name: 'BASE', description: 'Bielefeld Academic Search Engine.', url: 'https://www.base-search.net/', image: 'https://picsum.photos/seed/base-search/600/400', dataAiHint: 'academic search', pricing: 'Free' },
            { name: 'Microsoft Academic', description: 'Semantic search for academic papers (discontinued).', url: 'https://academic.microsoft.com/', image: 'https://picsum.photos/seed/msacademic/600/400', dataAiHint: 'semantic search', pricing: 'Free' },
            { name: 'Google Dataset Search', description: 'Find datasets across the web.', url: 'https://datasetsearch.research.google.com/', image: 'https://picsum.photos/seed/gdataset/600/400', dataAiHint: 'dataset search', pricing: 'Free' },
            { name: 'Kaggle', description: 'The home of data science and machine learning.', url: 'https://www.kaggle.com/', image: 'https://picsum.photos/seed/kaggle/600/400', dataAiHint: 'data science', pricing: 'Free' },
            { name: 'Wolfram Alpha', description: 'Computational intelligence.', url: 'https://www.wolframalpha.com/', image: 'https://picsum.photos/seed/wolfram-research/600/400', dataAiHint: 'computational', pricing: 'Freemium' },
            { name: 'Zenodo', description: 'A general-purpose open-access repository.', url: 'https://zenodo.org/', image: 'https://picsum.photos/seed/zenodo/600/400', dataAiHint: 'open repository', pricing: 'Free' },
            { name: 'Figshare', description: 'A repository where users can make all of their research outputs available.', url: 'https://figshare.com/', image: 'https://picsum.photos/seed/figshare/600/400', dataAiHint: 'research outputs', pricing: 'Freemium' },
            { name: 'Dryad', description: 'A general-purpose home for a wide diversity of datatypes.', url: 'https://datadryad.org/', image: 'https://picsum.photos/seed/dryad/600/400', dataAiHint: 'data repository', pricing: 'Free' },
        ]
    },
    {
        title: "English Grammar & Writing Tools",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Grammarly', description: 'Your AI-powered writing assistant.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-write/600/400', dataAiHint: 'grammar check', pricing: 'Freemium' },
            { name: 'QuillBot', description: 'AI-powered paraphrasing tool.', url: 'https://quillbot.com/', image: 'https://picsum.photos/seed/quillbot-write/600/400', dataAiHint: 'sentence rewriter', pricing: 'Freemium' },
            { name: 'Hemingway Editor', description: 'Makes your writing bold and clear.', url: 'https://hemingwayapp.com/', image: 'https://picsum.photos/seed/hemingway-write/600/400', dataAiHint: 'readability tool', pricing: 'Free' },
            { name: 'LanguageTool', description: 'Multilingual grammar, style, and spell checker.', url: 'https://languagetool.org/', image: 'https://picsum.photos/seed/languagetool/600/400', dataAiHint: 'spell check', pricing: 'Freemium' },
            { name: 'WordTune', description: 'Your personal writing companion.', url: 'https://www.wordtune.com/', image: 'https://picsum.photos/seed/wordtune/600/400', dataAiHint: 'ai writing', pricing: 'Freemium' },
            { name: 'ProWritingAid', description: 'A grammar checker, style editor, and writing mentor.', url: 'https://prowritingaid.com/', image: 'https://picsum.photos/seed/prowritingaid/600/400', dataAiHint: 'style editor', pricing: 'Paid' },
            { name: 'Ginger Software', description: 'Grammar checker and writing assistant.', url: 'https://www.gingersoftware.com/', image: 'https://picsum.photos/seed/gingersoftware/600/400', dataAiHint: 'writing assistant', pricing: 'Freemium' },
            { name: 'Slick Write', description: 'A powerful, free tool for writers.', url: 'https://www.slickwrite.com/', image: 'https://picsum.photos/seed/slickwrite/600/400', dataAiHint: 'free writing tool', pricing: 'Free' },
            { name: 'WhiteSmoke', description: 'Grammar, spelling, style, and punctuation checker.', url: 'https://www.whitesmoke.com/', image: 'https://picsum.photos/seed/whitesmoke/600/400', dataAiHint: 'punctuation checker', pricing: 'Paid' },
            { name: 'PaperRater', description: 'Online proofreader.', url: 'https://www.paperrater.com/', image: 'https://picsum.photos/seed/paperrater/600/400', dataAiHint: 'online proofreader', pricing: 'Free' },
            { name: 'Reverso', description: 'Translation, dictionary, grammar.', url: 'https://www.reverso.net/', image: 'https://picsum.photos/seed/reverso/600/400', dataAiHint: 'translation tool', pricing: 'Free' },
            { name: 'Readable', description: 'Readability test tool.', url: 'https://readable.com/', image: 'https://picsum.photos/seed/readable/600/400', dataAiHint: 'readability score', pricing: 'Paid' },
            { name: 'Writer.com', description: 'AI writing platform for teams.', url: 'https://writer.com/', image: 'https://picsum.photos/seed/writercom/600/400', dataAiHint: 'team writing', pricing: 'Paid' },
            { name: 'Ludwig', description: 'Sentence search engine.', url: 'https://ludwig.guru/', image: 'https://picsum.photos/seed/ludwig/600/400', dataAiHint: 'sentence search', pricing: 'Freemium' },
            { name: 'Text-cortex', description: 'AI writing assistant.', url: 'https://textcortex.com/', image: 'https://picsum.photos/seed/textcortex-write/600/400', dataAiHint: 'content creation', pricing: 'Freemium' },
            { name: 'Sapling', description: 'AI messaging assistant for customer-facing teams.', url: 'https://sapling.ai/', image: 'https://picsum.photos/seed/sapling/600/400', dataAiHint: 'messaging assistant', pricing: 'Freemium' },
            { name: 'Trinka AI', description: 'AI-powered grammar checker and language enhancement tool.', url: 'https://www.trinka.ai/', image: 'https://picsum.photos/seed/trinka/600/400', dataAiHint: 'academic writing', pricing: 'Freemium' },
            { name: 'Writefull', description: 'AI-based language feedback.', url: 'https://www.writefull.com/', image: 'https://picsum.photos/seed/writefull/600/400', dataAiHint: 'language feedback', pricing: 'Freemium' },
            { name: 'Paperpal', description: 'The AI academic writing assistant.', url: 'https://paperpal.com/', image: 'https://picsum.photos/seed/paperpal/600/400', dataAiHint: 'scientific writing', pricing: 'Freemium' },
            { name: 'Antidote', description: 'A powerful corrector, dictionary, and guide suite.', url: 'https://www.antidote.info/', image: 'https://picsum.photos/seed/antidote/600/400', dataAiHint: 'writing suite', pricing: 'Paid' },
            { name: 'StyleWriter', description: 'Plain English editing software.', url: 'https://editorsoftware.com/', image: 'https://picsum.photos/seed/stylewriter/600/400', dataAiHint: 'plain english', pricing: 'Paid' },
            { name: 'Atomic Reach', description: 'Content intelligence platform.', url: 'https://www.atomicreach.com/', image: 'https://picsum.photos/seed/atomicreach/600/400', dataAiHint: 'content intelligence', pricing: 'Paid' },
            { name: 'Zoho Writer', description: 'A powerful word processor.', url: 'https://www.zoho.com/writer/', image: 'https://picsum.photos/seed/zohowriter/600/400', dataAiHint: 'word processor', pricing: 'Free' },
            { name: 'Google Docs', description: 'Online document editor.', url: 'https://www.google.com/docs/about/', image: 'https://picsum.photos/seed/gdocs-write/600/400', dataAiHint: 'online editor', pricing: 'Free' },
            { name: 'Microsoft Word', description: 'Word processing software.', url: 'https://www.microsoft.com/en-us/microsoft-365/word', image: 'https://picsum.photos/seed/msword-write/600/400', dataAiHint: 'word software', pricing: 'Paid' },
            { name: 'Scrivener', description: 'The go-to app for writers.', url: 'https://www.literatureandlatte.com/scrivener/overview', image: 'https://picsum.photos/seed/scrivener-write/600/400', dataAiHint: 'writers app', pricing: 'Paid' },
            { name: 'Ulysses', description: 'The ultimate writing app for Mac, iPad, and iPhone.', url: 'https://ulysses.app/', image: 'https://picsum.photos/seed/ulysses-write/600/400', dataAiHint: 'apple writing', pricing: 'Paid' },
            { name: 'iA Writer', description: 'The focused writing app.', url: 'https://ia.net/writer', image: 'https://picsum.photos/seed/iawriter-write/600/400', dataAiHint: 'focused app', pricing: 'Paid' },
            { name: 'Byword', description: 'Simple and efficient text editing.', url: 'https://bywordapp.com/', image: 'https://picsum.photos/seed/byword/600/400', dataAiHint: 'text editing', pricing: 'Paid' },
            { name: 'FocusWriter', description: 'A simple, distraction-free writing environment.', url: 'https://gottcode.org/focuswriter/', image: 'https://picsum.photos/seed/focuswriter/600/400', dataAiHint: 'distraction free', pricing: 'Free' },
            { name: 'Calmly Writer', description: 'A professional text editor.', url: 'https://www.calmlywriter.com/', image: 'https://picsum.photos/seed/calmlywriter/600/400', dataAiHint: 'focus mode', pricing: 'Freemium' },
            { name: 'OmmWriter', description: 'A tool for writers, a place for your thoughts.', url: 'https://ommwriter.com/', image: 'https://picsum.photos/seed/ommwriter/600/400', dataAiHint: 'writing thoughts', pricing: 'Paid' },
            { name: 'Typely', description: 'Free online proofreading.', url: 'https://typely.com/', image: 'https://picsum.photos/seed/typely-write/600/400', dataAiHint: 'online proofreading', pricing: 'Free' },
            { name: 'GrammarCheck', description: 'Free grammar and spelling checker.', url: 'https://www.grammarcheck.net/', image: 'https://picsum.photos/seed/grammarcheck/600/400', dataAiHint: 'free checker', pricing: 'Free' },
            { name: 'OnlineCorrection.com', description: 'Free online spelling and grammar checker.', url: 'https://www.onlinecorrection.com/', image: 'https://picsum.photos/seed/onlinecorrection/600/400', dataAiHint: 'spelling checker', pricing: 'Free' },
            { name: 'SpellCheckPlus', description: 'Free online spell and grammar checker.', url: 'https://spellcheckplus.com/', image: 'https://picsum.photos/seed/spellcheckplus/600/400', dataAiHint: 'grammar checker', pricing: 'Free' },
            { name: 'After the Deadline', description: 'Grammar and spelling checker.', url: 'https://www.afterthedeadline.com/', image: 'https://picsum.photos/seed/afterthedeadline/600/400', dataAiHint: 'polish writing', pricing: 'Free' },
            { name: 'AutoCrit', description: 'Editing software for fiction writers.', url: 'https://www.autocrit.com/', image: 'https://picsum.photos/seed/autocrit/600/400', dataAiHint: 'fiction editing', pricing: 'Paid' },
            { name: 'SmartEdit', description: 'Editing software for novelists.', url: 'https://www.smart-edit.com/', image: 'https://picsum.photos/seed/smartedit/600/400', dataAiHint: 'novelists software', pricing: 'Paid' },
            { name: 'Thesaurus.com', description: 'Find synonyms and antonyms.', url: 'https://www.thesaurus.com/', image: 'https://picsum.photos/seed/thesaurus/600/400', dataAiHint: 'synonyms', pricing: 'Free' },
            { name: 'Power Thesaurus', description: 'Crowdsourced thesaurus.', url: 'https://www.powerthesaurus.org/', image: 'https://picsum.photos/seed/powerthesaurus/600/400', dataAiHint: 'crowdsourced', pricing: 'Free' },
            { name: 'OneLook', description: 'A dictionary search engine.', url: 'https://www.onelook.com/', image: 'https://picsum.photos/seed/onelook/600/400', dataAiHint: 'dictionary search', pricing: 'Free' },
            { name: 'Etymonline', description: 'Online etymology dictionary.', url: 'https://www.etymonline.com/', image: 'https://picsum.photos/seed/etymonline/600/400', dataAiHint: 'etymology', pricing: 'Free' },
            { name: 'WordHippo', description: 'A multi-purpose word tool.', url: 'https://www.wordhippo.com/', image: 'https://picsum.photos/seed/wordhippo/600/400', dataAiHint: 'word tool', pricing: 'Free' },
            { name: 'Cliché Finder', description: 'Find clichés in your text.', url: 'https://cliche.theinfo.org/', image: 'https://picsum.photos/seed/clichefinder/600/400', dataAiHint: 'find cliches', pricing: 'Free' },
            { name: 'Wordcounter', description: 'Word count and text statistics.', url: 'https://wordcounter.net/', image: 'https://picsum.photos/seed/wordcounter/600/400', dataAiHint: 'word count', pricing: 'Free' },
            { name: 'Copyscape', description: 'Plagiarism checker.', url: 'https://www.copyscape.com/', image: 'https://picsum.photos/seed/copyscape/600/400', dataAiHint: 'plagiarism checker', pricing: 'Paid' },
            { name: 'Plagscan', description: 'Plagiarism checker.', url: 'https://www.plagscan.com/', image: 'https://picsum.photos/seed/plagscan/600/400', dataAiHint: 'check plagiarism', pricing: 'Paid' },
            { name: 'Unicheck', description: 'Plagiarism checker.', url: 'https://unicheck.com/', image: 'https://picsum.photos/seed/unicheck/600/400', dataAiHint: 'similarity checker', pricing: 'Paid' },
            { name: 'Scribbr', description: 'Your path to academic success.', url: 'https://www.scribbr.com/', image: 'https://picsum.photos/seed/scribbr-write/600/400', dataAiHint: 'academic success', pricing: 'Paid' },
            { name: 'Citation Machine', description: 'Citation generator.', url: 'https://www.citationmachine.net/', image: 'https://picsum.photos/seed/citationmachine/600/400', dataAiHint: 'apa mla', pricing: 'Free' },
            { name: 'EasyBib', description: 'Citation generator.', url: 'https://www.easybib.com/', image: 'https://picsum.photos/seed/easybib/600/400', dataAiHint: 'bibliography', pricing: 'Free' },
        ]
    },
    {
        title: "Presentation & Assignment Maker Tools",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Design presentations, documents, and more.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-present/600/400', dataAiHint: 'design platform', pricing: 'Freemium' },
            { name: 'Gamma App', description: 'A new medium for presenting ideas.', url: 'https://gamma.app/', image: 'https://picsum.photos/seed/gamma-app/600/400', dataAiHint: 'ai presentation', pricing: 'Freemium' },
            { name: 'Beautiful.ai', description: 'Presentation software that designs for you.', url: 'https://www.beautiful.ai/', image: 'https://picsum.photos/seed/beautifulai/600/400', dataAiHint: 'slide design', pricing: 'Paid' },
            { name: 'Tome AI', description: 'The AI-powered storytelling format.', url: 'https://tome.app/', image: 'https://picsum.photos/seed/tome-ai/600/400', dataAiHint: 'storytelling', pricing: 'Freemium' },
            { name: 'SlidesGo', description: 'Free Google Slides and PowerPoint templates.', url: 'https://slidesgo.com/', image: 'https://picsum.photos/seed/slidesgo/600/400', dataAiHint: 'presentation templates', pricing: 'Free' },
            { name: 'Prezi', description: 'Conversational presenting.', url: 'https://prezi.com/', image: 'https://picsum.photos/seed/prezi/600/400', dataAiHint: 'zooming presentation', pricing: 'Freemium' },
            { name: 'Google Slides', description: 'Create and edit presentations online.', url: 'https://www.google.com/slides/about/', image: 'https://picsum.photos/seed/googleslides/600/400', dataAiHint: 'online slides', pricing: 'Free' },
            { name: 'Microsoft PowerPoint', description: 'Presentation software.', url: 'https://www.microsoft.com/en-us/microsoft-365/powerpoint', image: 'https://picsum.photos/seed/powerpoint/600/400', dataAiHint: 'presentation software', pricing: 'Paid' },
            { name: 'Keynote', description: 'Beautiful presentations for everyone.', url: 'https://www.apple.com/keynote/', image: 'https://picsum.photos/seed/keynote/600/400', dataAiHint: 'apple presentation', pricing: 'Free' },
            { name: 'Visme', description: 'Create presentations, infographics, and more.', url: 'https://www.visme.co/', image: 'https://picsum.photos/seed/visme-present/600/400', dataAiHint: 'visual content', pricing: 'Freemium' },
            { name: 'Piktochart', description: 'Infographic and presentation maker.', url: 'https://piktochart.com/', image: 'https://picsum.photos/seed/piktochart-present/600/400', dataAiHint: 'infographics', pricing: 'Freemium' },
            { name: 'Genially', description: 'The tool for creating interactive content.', url: 'https://genial.ly/', image: 'https://picsum.photos/seed/genially/600/400', dataAiHint: 'interactive content', pricing: 'Freemium' },
            { name: 'DeckRobot', description: 'AI for PowerPoint presentations.', url: 'https://www.deckrobot.com/', image: 'https://picsum.photos/seed/deckrobot/600/400', dataAiHint: 'powerpoint ai', pricing: 'Paid' },
            { name: 'SlidesAI.io', description: 'Create presentation slides with AI in seconds.', url: 'https://www.slidesai.io/', image: 'https://picsum.photos/seed/slidesai/600/400', dataAiHint: 'ai slides', pricing: 'Freemium' },
            { name: 'Presentations.AI', description: 'Your AI presentation assistant.', url: 'https://presentations.ai/', image: 'https://picsum.photos/seed/presentationsai/600/400', dataAiHint: 'presentation assistant', pricing: 'Freemium' },
            { name: 'Mentimeter', description: 'Interactive presentation software.', url: 'https://www.mentimeter.com/', image: 'https://picsum.photos/seed/mentimeter/600/400', dataAiHint: 'audience interaction', pricing: 'Freemium' },
            { name: 'AhaSlides', description: 'Interactive presentation software.', url: 'https://ahaslides.com/', image: 'https://picsum.photos/seed/ahaslides/600/400', dataAiHint: 'live polls', pricing: 'Freemium' },
            { name: 'Slidebean', description: 'Presentation design services and software.', url: 'https://slidebean.com/', image: 'https://picsum.photos/seed/slidebean/600/400', dataAiHint: 'pitch decks', pricing: 'Paid' },
            { name: 'Pitch', description: 'Collaborative presentation software.', url: 'https://pitch.com/', image: 'https://picsum.photos/seed/pitch/600/400', dataAiHint: 'collaborative slides', pricing: 'Freemium' },
            { name: 'Haiku Deck', description: 'The fastest way to create a beautiful presentation.', url: 'https://www.haikudeck.com/', image: 'https://picsum.photos/seed/haikudeck/600/400', dataAiHint: 'simple presentation', pricing: 'Freemium' },
            { name: 'Emaze', description: 'Create, share, and analyze presentations.', url: 'https://www.emaze.com/', image: 'https://picsum.photos/seed/emaze/600/400', dataAiHint: '3d presentations', pricing: 'Freemium' },
            { name: 'Zoho Show', description: 'Online presentation tool.', url: 'https://www.zoho.com/show/', image: 'https://picsum.photos/seed/zohoshow/600/400', dataAiHint: 'zoho presentation', pricing: 'Freemium' },
            { name: 'Powtoon', description: 'Animated presentations and videos.', url: 'https://www.powtoon.com/', image: 'https://picsum.photos/seed/powtoon-present/600/400', dataAiHint: 'animated video', pricing: 'Freemium' },
            { name: 'Renderforest', description: 'Online video, logo, and website maker.', url: 'https://www.renderforest.com/', image: 'https://picsum.photos/seed/renderforest-present/600/400', dataAiHint: 'video maker', pricing: 'Freemium' },
            { name: 'InVideo', description: 'Online video editor.', url: 'https://invideo.io/', image: 'https://picsum.photos/seed/invideo-present/600/400', dataAiHint: 'ai video', pricing: 'Freemium' },
            { name: 'Lumen5', description: 'Video creation platform.', url: 'https://lumen5.com/', image: 'https://picsum.photos/seed/lumen5-present/600/400', dataAiHint: 'social media video', pricing: 'Freemium' },
            { name: 'VEED.IO', description: 'Online video editor.', url: 'https://www.veed.io/', image: 'https://picsum.photos/seed/veed-present/600/400', dataAiHint: 'video suite', pricing: 'Freemium' },
            { name: 'Wideo', description: 'Animated video maker.', url: 'https://wideo.co/', image: 'https://picsum.photos/seed/wideo-present/600/400', dataAiHint: 'marketing videos', pricing: 'Freemium' },
            { name: 'Moovly', description: 'Online video creator.', url: 'https://www.moovly.com/', image: 'https://picsum.photos/seed/moovly-present/600/400', dataAiHint: 'video creator', pricing: 'Freemium' },
            { name: 'Vyond', description: 'Animated video software.', url: 'https://www.vyond.com/', image: 'https://picsum.photos/seed/vyond-present/600/400', dataAiHint: 'business animation', pricing: 'Paid' },
            { name: 'Animaker', description: 'DIY animated video maker.', url: 'https://www.animaker.com/', image: 'https://picsum.photos/seed/animaker-present/600/400', dataAiHint: 'diy animation', pricing: 'Freemium' },
            { name: 'Biteable', description: 'Create studio-quality videos.', url: 'https://biteable.com/', image: 'https://picsum.photos/seed/biteable-present/600/400', dataAiHint: 'studio video', pricing: 'Freemium' },
            { name: 'FlexClip', description: 'Free online video editor.', url: 'https://www.flexclip.com/', image: 'https://picsum.photos/seed/flexclip-present/600/400', dataAiHint: 'free editor', pricing: 'Freemium' },
            { name: 'Crello (VistaCreate)', description: 'Free design tool.', url: 'https://create.vista.com/', image: 'https://picsum.photos/seed/crello-present/600/400', dataAiHint: 'visual editor', pricing: 'Freemium' },
            { name: 'Fotor', description: 'Online photo editor and design maker.', url: 'https://www.fotor.com/', image: 'https://picsum.photos/seed/fotor-present/600/400', dataAiHint: 'design maker', pricing: 'Freemium' },
            { name: 'Snappa', description: 'Create online graphics in a snap.', url: 'https://snappa.com/', image: 'https://picsum.photos/seed/snappa-present/600/400', dataAiHint: 'online graphics', pricing: 'Freemium' },
            { name: 'DesignCap', description: 'Free online graphic designer.', url: 'https://www.designcap.com/', image: 'https://picsum.photos/seed/designcap/600/400', dataAiHint: 'graphic designer', pricing: 'Free' },
            { name: 'PosterMyWall', description: 'Create amazing posters and social media graphics.', url: 'https://www.postermywall.com/', image: 'https://picsum.photos/seed/postermywall-present/600/400', dataAiHint: 'social graphics', pricing: 'Freemium' },
            { name: 'Venngage', description: 'Infographic maker.', url: 'https://venngage.com/', image: 'https://picsum.photos/seed/venngage-present/600/400', dataAiHint: 'infographic maker', pricing: 'Freemium' },
            { name: 'Infogram', description: 'Create engaging infographics and reports.', url: 'https://infogram.com/', image: 'https://picsum.photos/seed/infogram/600/400', dataAiHint: 'data visualization', pricing: 'Freemium' },
            { name: 'Easel.ly', description: 'Simple infographic maker.', url: 'https://www.easel.ly/', image: 'https://picsum.photos/seed/easelly/600/400', dataAiHint: 'infographic tool', pricing: 'Freemium' },
            { name: 'Glogster', description: 'Multimedia posters.', url: 'https://edu.glogster.com/', image: 'https://picsum.photos/seed/glogster/600/400', dataAiHint: 'interactive posters', pricing: 'Freemium' },
            { name: 'Buncee', description: 'Creation and communication tool.', url: 'https://www.buncee.com/', image: 'https://picsum.photos/seed/buncee/600/400', dataAiHint: 'student creations', pricing: 'Paid' },
            { name: 'Sway', description: 'Create and share interactive reports, presentations.', url: 'https://sway.office.com/', image: 'https://picsum.photos/seed/sway/600/400', dataAiHint: 'microsoft sway', pricing: 'Free' },
        ]
    },
    {
        title: "Formula & Concept Explainer Tools",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Khan Academy', description: 'Free online courses, lessons, and practice.', url: 'https://www.khanacademy.org/', image: 'https://picsum.photos/seed/khanacademy/600/400', dataAiHint: 'online learning', pricing: 'Free' },
            { name: 'PhET Simulations', description: 'Interactive simulations for science and math.', url: 'https://phet.colorado.edu/', image: 'https://picsum.photos/seed/phet/600/400', dataAiHint: 'science simulation', pricing: 'Free' },
            { name: 'ChemGuide', description: 'Helping you to understand Chemistry.', url: 'https://www.chemguide.co.uk/', image: 'https://picsum.photos/seed/chemguide/600/400', dataAiHint: 'chemistry help', pricing: 'Free' },
            { name: 'BioRender', description: 'Create professional science figures in minutes.', url: 'https://biorender.com/', image: 'https://picsum.photos/seed/biorender/600/400', dataAiHint: 'science illustration', pricing: 'Freemium' },
            { name: 'TeachMe', description: 'AI-powered learning companion.', url: 'https://www.teachme.ai/', image: 'https://picsum.photos/seed/teachme/600/400', dataAiHint: 'learning ai', pricing: 'Paid' },
            { name: 'Wolfram Alpha', description: 'Computational intelligence.', url: 'https://www.wolframalpha.com/', image: 'https://picsum.photos/seed/wolfram-concept/600/400', dataAiHint: 'computational', pricing: 'Freemium' },
            { name: 'Symbolab', description: 'Math solver with step-by-step solutions.', url: 'https://www.symbolab.com/', image: 'https://picsum.photos/seed/symbolab-concept/600/400', dataAiHint: 'math steps', pricing: 'Freemium' },
            { name: 'Mathway', description: 'Step-by-step math problem solver.', url: 'https://www.mathway.com/', image: 'https://picsum.photos/seed/mathway-concept/600/400', dataAiHint: 'problem solver', pricing: 'Freemium' },
            { name: 'Desmos', description: 'Graphing calculator.', url: 'https://www.desmos.com/calculator', image: 'https://picsum.photos/seed/desmos-concept/600/400', dataAiHint: 'graphing tool', pricing: 'Free' },
            { name: 'GeoGebra', description: 'Graphing, geometry, algebra, and more.', url: 'https://www.geogebra.org/', image: 'https://picsum.photos/seed/geogebra-concept/600/400', dataAiHint: 'math tool', pricing: 'Free' },
            { name: 'Physics Classroom', description: 'Physics tutorials and interactives.', url: 'https://www.physicsclassroom.com/', image: 'https://picsum.photos/seed/physicsclassroom-concept/600/400', dataAiHint: 'physics tutorials', pricing: 'Free' },
            { name: 'HyperPhysics', description: 'Exploration in physics.', url: 'http://hyperphysics.phy-astr.gsu.edu/hbase/index.html', image: 'https://picsum.photos/seed/hyperphysics-concept/600/400', dataAiHint: 'physics concepts', pricing: 'Free' },
            { name: 'ChemDoodle', description: 'Chemical drawing software.', url: 'https://www.chemdoodle.com/', image: 'https://picsum.photos/seed/chemdoodle/600/400', dataAiHint: 'chemical drawing', pricing: 'Paid' },
            { name: 'MolView', description: 'Online molecular modeling.', url: 'https://molview.org/', image: 'https://picsum.photos/seed/molview/600/400', dataAiHint: 'molecular model', pricing: 'Free' },
            { name: 'The Algorithmic Beauty of Plants', description: 'Book on plant modeling.', url: 'http://algorithmicbotany.org/papers/', image: 'https://picsum.photos/seed/plantalgo/600/400', dataAiHint: 'plant modeling', pricing: 'Free' },
            { name: 'Brilliant.org', description: 'Build quantitative skills.', url: 'https://brilliant.org/', image: 'https://picsum.photos/seed/brilliant-concept/600/400', dataAiHint: 'quantitative skills', pricing: 'Freemium' },
            { name: '3Blue1Brown', description: 'Math lessons with a focus on intuition.', url: 'https://www.3blue1brown.com/', image: 'https://picsum.photos/seed/3b1b/600/400', dataAiHint: 'math intuition', pricing: 'Free' },
            { name: 'Numberphile', description: 'Videos about numbers.', url: 'https://www.numberphile.com/', image: 'https://picsum.photos/seed/numberphile/600/400', dataAiHint: 'number videos', pricing: 'Free' },
            { name: 'Socratic', description: 'Learning app from Google.', url: 'https://socratic.org/', image: 'https://picsum.photos/seed/socratic-concept/600/400', dataAiHint: 'google learning', pricing: 'Free' },
            { name: 'Course Hero', description: 'Study resources.', url: 'https://www.coursehero.com/', image: 'https://picsum.photos/seed/coursehero-concept/600/400', dataAiHint: 'study resources', pricing: 'Paid' },
            { name: 'Chegg', description: 'Homework help.', url: 'https://www.chegg.com/study', image: 'https://picsum.photos/seed/chegg-concept/600/400', dataAiHint: 'homework help', pricing: 'Paid' },
            { name: 'Explain That Stuff', description: 'Easy-to-understand explanations of how things work.', url: 'https://www.explainthatstuff.com/', image: 'https://picsum.photos/seed/explainthatstuff/600/400', dataAiHint: 'how things work', pricing: 'Free' },
            { name: 'HowStuffWorks', description: 'Explains thousands of topics.', url: 'https://www.howstuffworks.com/', image: 'https://picsum.photos/seed/howstuffworks/600/400', dataAiHint: 'topic explanations', pricing: 'Free' },
            { name: 'Simple English Wikipedia', description: 'Wikipedia in Simple English.', url: 'https://simple.wikipedia.org/wiki/Main_Page', image: 'https://picsum.photos/seed/simplewiki/600/400', dataAiHint: 'simple english', pricing: 'Free' },
            { name: 'ELI5', description: 'Explain Like I\'m 5.', url: 'https://www.reddit.com/r/explainlikeimfive/', image: 'https://picsum.photos/seed/eli5/600/400', dataAiHint: 'simple explanations', pricing: 'Free' },
            { name: 'ChatGPT', description: 'AI assistant for explaining concepts.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-concept/600/400', dataAiHint: 'ai explainer', pricing: 'Freemium' },
            { name: 'Gemini', description: 'Google\'s AI for explanations.', url: 'https://gemini.google.com/', image: 'https://picsum.photos/seed/gemini-concept/600/400', dataAiHint: 'google explainer', pricing: 'Free' },
            { name: 'Perplexity AI', description: 'Answer engine for complex topics.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-concept/600/400', dataAiHint: 'answer engine', pricing: 'Freemium' },
            { name: 'The Feynman Technique', description: 'A mental model for learning.', url: 'https://fs.blog/feynman-technique/', image: 'https://picsum.photos/seed/feynman/600/400', dataAiHint: 'learning technique', pricing: 'Free' },
            { name: 'In a Nutshell – Kurzgesagt', description: 'Animated educational videos.', url: 'https://www.youtube.com/c/inanutshell', image: 'https://picsum.photos/seed/kurzgesagt/600/400', dataAiHint: 'animated videos', pricing: 'Free' },
            { name: 'TED-Ed', description: 'Lessons worth sharing.', url: 'https://ed.ted.com/', image: 'https://picsum.photos/seed/teded/600/400', dataAiHint: 'educational lessons', pricing: 'Free' },
            { name: 'Crash Course', description: 'Educational YouTube channel.', url: 'https://www.youtube.com/c/crashcourse', image: 'https://picsum.photos/seed/crashcourse/600/400', dataAiHint: 'youtube education', pricing: 'Free' },
            { name: 'SmarterEveryDay', description: 'Exploring the world using science.', url: 'https://www.youtube.com/c/smartereveryday', image: 'https://picsum.photos/seed/smartereveryday/600/400', dataAiHint: 'science exploration', pricing: 'Free' },
            { name: 'Veritasium', description: 'An element of truth.', url: 'https://www.youtube.com/c/veritasium', image: 'https://picsum.photos/seed/veritasium/600/400', dataAiHint: 'science channel', pricing: 'Free' },
            { name: 'MinutePhysics', description: 'Simply explained physics and other science.', url: 'https://www.youtube.com/c/minutephysics', image: 'https://picsum.photos/seed/minutephysics/600/400', dataAiHint: 'physics explained', pricing: 'Free' },
            { name: 'Vsauce', description: 'Educational YouTube channels.', url: 'https://www.youtube.com/c/vsauce1', image: 'https://picsum.photos/seed/vsauce/600/400', dataAiHint: 'youtube science', pricing: 'Free' },
            { name: 'Mark Rober', description: 'Science and engineering videos.', url: 'https://www.youtube.com/c/markrober', image: 'https://picsum.photos/seed/markrober/600/400', dataAiHint: 'engineering videos', pricing: 'Free' },
            { name: 'OverSimplified', description: 'Animated history videos.', url: 'https://www.youtube.com/c/OverSimplified', image: 'https://picsum.photos/seed/oversimplified/600/400', dataAiHint: 'animated history', pricing: 'Free' },
            { name: 'CGP Grey', description: 'Complex things explained.', url: 'https://www.youtube.com/c/CGPGrey', image: 'https://picsum.photos/seed/cgpgrey/600/400', dataAiHint: 'complex explanations', pricing: 'Free' },
            { name: 'BetterExplained', description: 'Math lessons for lasting insight.', url: 'https://betterexplained.com/', image: 'https://picsum.photos/seed/betterexplained/600/400', dataAiHint: 'math insight', pricing: 'Free' },
            { name: 'Wait But Why', description: 'A popular long-form, stick-figure-illustrated blog.', url: 'https://waitbutwhy.com/', image: 'https://picsum.photos/seed/waitbutwhy/600/400', dataAiHint: 'long-form blog', pricing: 'Free' },
            { name: 'LessWrong', description: 'A community blog devoted to refining the art of human rationality.', url: 'https://www.lesswrong.com/', image: 'https://picsum.photos/seed/lesswrong/600/400', dataAiHint: 'rationality', pricing: 'Free' },
            { name: 'Farnam Street', description: 'Mastering the best of what other people have already figured out.', url: 'https://fs.blog/', image: 'https://picsum.photos/seed/farnamstreet/600/400', dataAiHint: 'mental models', pricing: 'Free' },
            { name: 'Distill.pub', description: 'Technical journal for machine learning.', url: 'https://distill.pub/', image: 'https://picsum.photos/seed/distillpub/600/400', dataAiHint: 'machine learning', pricing: 'Free' },
            { name: 'Excalidraw', description: 'Virtual whiteboard for sketching hand-drawn like diagrams.', url: 'https://excalidraw.com/', image: 'https://picsum.photos/seed/excalidraw/600/400', dataAiHint: 'virtual whiteboard', pricing: 'Free' },
            { name: 'tldraw', description: 'A tiny little drawing app.', url: 'https://www.tldraw.com/', image: 'https://picsum.photos/seed/tldraw/600/400', dataAiHint: 'drawing app', pricing: 'Free' },
            { name: 'Diagrams.net (draw.io)', description: 'Free online diagram software.', url: 'https://app.diagrams.net/', image: 'https://picsum.photos/seed/drawio/600/400', dataAiHint: 'diagram software', pricing: 'Free' },
            { name: 'Mermaid Live Editor', description: 'Create diagrams from text.', url: 'https://mermaid.live/', image: 'https://picsum.photos/seed/mermaidlive/600/400', dataAiHint: 'text to diagram', pricing: 'Free' },
            { name: 'PlantUML', description: 'Create UML diagrams from a simple text language.', url: 'https://plantuml.com/', image: 'https://picsum.photos/seed/plantuml/600/400', dataAiHint: 'uml diagrams', pricing: 'Free' },
            { name: 'Notion', description: 'Formulas and database features for calculations.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-formula/600/400', dataAiHint: 'notion formulas', pricing: 'Freemium' },
            { name: 'Airtable', description: 'Formulas for spreadsheet-like calculations.', url: 'https://www.airtable.com/', image: 'https://picsum.photos/seed/airtable-formula/600/400', dataAiHint: 'airtable formulas', pricing: 'Freemium' },
            { name: 'Coda', description: 'Formulas and automations in docs.', url: 'https://coda.io/', image: 'https://picsum.photos/seed/coda-formula/600/400', dataAiHint: 'coda formulas', pricing: 'Freemium' },
        ]
    },
    {
        title: "Audio Learning Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Speechify', description: 'The #1 text-to-speech reader.', url: 'https://speechify.com/', image: 'https://picsum.photos/seed/speechify-audio/600/400', dataAiHint: 'text reader', pricing: 'Freemium' },
            { name: 'NaturalReader', description: 'AI text to speech solution.', url: 'https://www.naturalreaders.com/', image: 'https://picsum.photos/seed/naturalreader/600/400', dataAiHint: 'tts software', pricing: 'Freemium' },
            { name: 'TTSReader', description: 'Reads text out loud for you.', url: 'https://ttsreader.com/', image: 'https://picsum.photos/seed/ttsreader/600/400', dataAiHint: 'web reader', pricing: 'Free' },
            { name: 'VoiceAloud', description: 'Read aloud web pages and documents.', url: 'https://play.google.com/store/apps/details?id=com.hyperionics.fbreader.plugin.tts_plus', image: 'https://picsum.photos/seed/voicealoud/600/400', dataAiHint: 'android tts', pricing: 'Free' },
            { name: 'Read Aloud Extension', description: 'A Text to Speech voice reader.', url: 'https://chrome.google.com/webstore/detail/read-aloud-a-text-to-spee/hdhinadidafjejdhmfkjgnolgimiaplp', image: 'https://picsum.photos/seed/readaloud/600/400', dataAiHint: 'chrome extension', pricing: 'Free' },
            { name: 'Audible', description: 'Audiobooks and podcasts.', url: 'https://www.audible.com/', image: 'https://picsum.photos/seed/audible/600/400', dataAiHint: 'audiobooks', pricing: 'Paid' },
            { name: 'LibriVox', description: 'Free public domain audiobooks.', url: 'https://librivox.org/', image: 'https://picsum.photos/seed/librivox/600/400', dataAiHint: 'free audiobooks', pricing: 'Free' },
            { name: 'Blinkist', description: 'Get the key ideas from bestselling nonfiction.', url: 'https://www.blinkist.com/', image: 'https://picsum.photos/seed/blinkist/600/400', dataAiHint: 'book summaries', pricing: 'Paid' },
            { name: 'getAbstract', description: 'Summaries of business books, articles, and video talks.', url: 'https://www.getabstract.com/', image: 'https://picsum.photos/seed/getabstract/600/400', dataAiHint: 'business summaries', pricing: 'Paid' },
            { name: 'Umano', description: 'Listen to articles from top publications (discontinued).', url: 'https://play.google.com/store/apps/details?id=com.sothree.umano&hl=en_US&gl=US', image: 'https://picsum.photos/seed/umano/600/400', dataAiHint: 'article audio', pricing: 'Free' },
            { name: 'Audm', description: 'Listen to long-form journalism.', url: 'https://www.audm.com/', image: 'https://picsum.photos/seed/audm/600/400', dataAiHint: 'long-form audio', pricing: 'Paid' },
            { name: 'Noa', description: 'Listen to opinion journalism from the world\'s best publishers.', url: 'https://www.newsoveraudio.com/', image: 'https://picsum.photos/seed/noa/600/400', dataAiHint: 'opinion audio', pricing: 'Freemium' },
            { name: 'Curio', description: 'Listen to the world\'s best journalism.', url: 'https://curio.io/', image: 'https://picsum.photos/seed/curio/600/400', dataAiHint: 'journalism audio', pricing: 'Paid' },
            { name: 'Spotify', description: 'Music and podcasts.', url: 'https://www.spotify.com/', image: 'https://picsum.photos/seed/spotify-audio/600/400', dataAiHint: 'podcasts', pricing: 'Freemium' },
            { name: 'Apple Podcasts', description: 'Millions of shows, free.', url: 'https://www.apple.com/apple-podcasts/', image: 'https://picsum.photos/seed/applepodcasts/600/400', dataAiHint: 'free podcasts', pricing: 'Free' },
            { name: 'Google Podcasts', description: 'A new way to discover podcasts.', url: 'https://podcasts.google.com/', image: 'https://picsum.photos/seed/googlepodcasts/600/400', dataAiHint: 'discover podcasts', pricing: 'Free' },
            { name: 'Overcast', description: 'A powerful yet simple podcast player.', url: 'https://overcast.fm/', image: 'https://picsum.photos/seed/overcast/600/400', dataAiHint: 'podcast player', pricing: 'Freemium' },
            { name: 'Pocket Casts', description: 'The world\'s most powerful podcast platform.', url: 'https://www.pocketcasts.com/', image: 'https://picsum.photos/seed/pocketcasts/600/400', dataAiHint: 'podcast platform', pricing: 'Freemium' },
            { name: 'Castro', description: 'A podcast player that helps you manage your listening.', url: 'https://castro.fm/', image: 'https://picsum.photos/seed/castro/600/400', dataAiHint: 'podcast queue', pricing: 'Freemium' },
            { name: 'Podcast Addict', description: 'The #1 podcast app on Android.', url: 'https://podcastaddict.com/', image: 'https://picsum.photos/seed/podcastaddict/600/400', dataAiHint: 'android podcast', pricing: 'Freemium' },
            { name: 'Stitcher', description: 'Listen to your favorite podcasts.', url: 'https://www.stitcher.com/', image: 'https://picsum.photos/seed/stitcher/600/400', dataAiHint: 'favorite podcasts', pricing: 'Freemium' },
            { name: 'The Podcast App', description: 'A free podcast app.', url: 'https://podcast.app/', image: 'https://picsum.photos/seed/thepodcastapp/600/400', dataAiHint: 'free podcast', pricing: 'Free' },
            { name: 'Castbox', description: 'The best free podcast app.', url: 'https://castbox.fm/', image: 'https://picsum.photos/seed/castbox/600/400', dataAiHint: 'free app', pricing: 'Freemium' },
            { name: 'Scribd', description: 'The world’s largest digital library.', url: 'https://www.scribd.com/', image: 'https://picsum.photos/seed/scribd-audio/600/400', dataAiHint: 'digital library', pricing: 'Paid' },
            { name: 'Pimsleur', description: 'The Pimsleur Method for language learning.', url: 'https://www.pimsleur.com/', image: 'https://picsum.photos/seed/pimsleur-audio/600/400', dataAiHint: 'language method', pricing: 'Paid' },
            { name: 'Michel Thomas Method', description: 'The natural way to learn a language.', url: 'https://www.michelthomas.com/', image: 'https://picsum.photos/seed/michelthomas-audio/600/400', dataAiHint: 'natural learning', pricing: 'Paid' },
            { name: 'Duolingo Podcasts', description: 'Podcasts for language learners.', url: 'https://podcast.duolingo.com/', image: 'https://picsum.photos/seed/duolingo-podcasts/600/400', dataAiHint: 'language podcasts', pricing: 'Free' },
            { name: 'Coffee Break Languages', description: 'Learn a language on your coffee break.', url: 'https://coffeebreaklanguages.com/', image: 'https://picsum.photos/seed/coffeebreak/600/400', dataAiHint: 'coffee break', pricing: 'Freemium' },
            { name: 'Loyal Books', description: 'Free Public Domain Audiobooks & eBook Downloads.', url: 'http://www.loyalbooks.com/', image: 'https://picsum.photos/seed/loyalbooks/600/400', dataAiHint: 'public domain audio', pricing: 'Free' },
            { name: 'Storynory', description: 'Free audio stories for kids.', url: 'https://www.storynory.com/', image: 'https://picsum.photos/seed/storynory/600/400', dataAiHint: 'kids audio stories', pricing: 'Free' },
            { name: 'Project Gutenberg', description: 'Free ebooks and audiobooks.', url: 'https://www.gutenberg.org/', image: 'https://picsum.photos/seed/gutenberg-audio/600/400', dataAiHint: 'free ebooks', pricing: 'Free' },
            { name: 'Podiobooks', description: 'Free serialized audiobooks.', url: 'https://podiobooks.com/', image: 'https://picsum.photos/seed/podiobooks/600/400', dataAiHint: 'serialized audiobooks', pricing: 'Free' },
            { name: 'Libro.fm', description: 'Support local bookstores with your audiobook purchases.', url: 'https://libro.fm/', image: 'https://picsum.photos/seed/librofm/600/400', dataAiHint: 'local bookstore', pricing: 'Paid' },
            { name: 'Chirp Audiobooks', description: 'Limited-time deals on audiobooks.', url: 'https://www.chirpbooks.com/', image: 'https://picsum.photos/seed/chirp-audio/600/400', dataAiHint: 'audiobook deals', pricing: 'Paid' },
            { name: 'Downpour', description: 'Digital audiobooks and rentals.', url: 'https://www.downpour.com/', image: 'https://picsum.photos/seed/downpour/600/400', dataAiHint: 'audiobook rentals', pricing: 'Paid' },
            { name: 'Audiobooks.com', description: 'Get audiobooks for your commute.', url: 'https://www.audiobooks.com/', image: 'https://picsum.photos/seed/audiobookscom/600/400', dataAiHint: 'commute audio', pricing: 'Paid' },
            { name: 'Kobo Audiobooks', description: 'Listen to audiobooks on the go.', url: 'https://www.kobo.com/audiobooks', image: 'https://picsum.photos/seed/kobo-audio/600/400', dataAiHint: 'kobo audio', pricing: 'Paid' },
            { name: 'Google Play Books', description: 'Audiobooks on Google Play.', url: 'https://play.google.com/store/books/category/audiobooks', image: 'https://picsum.photos/seed/gplay-audio/600/400', dataAiHint: 'google audiobooks', pricing: 'Paid' },
            { name: 'Nook Audiobooks', description: 'Audiobooks from Barnes & Noble.', url: 'https://www.barnesandnoble.com/b/nook-audiobooks/_/N-2ori', image: 'https://picsum.photos/seed/nook-audio/600/400', dataAiHint: 'barnes and noble', pricing: 'Paid' },
            { name: 'Hoopla', description: 'Digital media service offered by your local public library.', url: 'https://www.hoopladigital.com/', image: 'https://picsum.photos/seed/hoopla/600/400', dataAiHint: 'library audiobooks', pricing: 'Free' },
            { name: 'Libby', description: 'Borrow ebooks and audiobooks from your library.', url: 'https://www.overdrive.com/apps/libby/', image: 'https://picsum.photos/seed/libby/600/400', dataAiHint: 'library app', pricing: 'Free' },
            { name: 'Audible Plus', description: 'A catalog of thousands of audiobooks, podcasts, and originals.', url: 'https://www.audible.com/ep/audible-plus-member-benefit', image: 'https://picsum.photos/seed/audibleplus/600/400', dataAiHint: 'audible originals', pricing: 'Paid' },
            { name: 'SoundCloud', description: 'Audio platform that lets you listen to what you love and share the sounds you create.', url: 'https://soundcloud.com/', image: 'https://picsum.photos/seed/soundcloud-audio/600/400', dataAiHint: 'audio platform', pricing: 'Freemium' },
            { name: 'TuneIn Radio', description: 'Live sports, news, music, and podcasts.', url: 'https://tunein.com/', image: 'https://picsum.photos/seed/tunein/600/400', dataAiHint: 'internet radio', pricing: 'Freemium' },
            { name: 'iHeartRadio', description: 'Radio, music, and podcasts.', url: 'https://www.iheart.com/', image: 'https://picsum.photos/seed/iheartradio/600/400', dataAiHint: 'live radio', pricing: 'Free' },
            { name: 'BBC Sounds', description: 'The best of BBC radio, music, and podcasts.', url: 'https://www.bbc.co.uk/sounds', image: 'https://picsum.photos/seed/bbcsounds/600/400', dataAiHint: 'bbc audio', pricing: 'Free' },
            { name: 'Luminol', description: 'Podcast app with a focus on discovery.', url: 'https://luminol.fm/', image: 'https://picsum.photos/seed/luminol/600/400', dataAiHint: 'podcast discovery', pricing: 'Freemium' },
            { name: 'Goodpods', description: 'Podcast app where you can follow your friends.', url: 'https://www.goodpods.com/', image: 'https://picsum.photos/seed/goodpods/600/400', dataAiHint: 'social podcast', pricing: 'Free' },
            { name: 'Podchaser', description: 'The podcast database.', url: 'https://www.podchaser.com/', image: 'https://picsum.photos/seed/podchaser/600/400', dataAiHint: 'podcast imdb', pricing: 'Free' },
            { name: 'Listen Notes', description: 'The podcast search engine.', url: 'https://www.listennotes.com/', image: 'https://picsum.photos/seed/listennotes/600/400', dataAiHint: 'podcast search', pricing: 'Free' },
        ]
    },
    {
        title: "File Convert / PDF Tools",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'iLovePDF', description: 'Every tool you need to work with PDFs.', url: 'https://www.ilovepdf.com/', image: 'https://picsum.photos/seed/ilovepdf-file/600/400', dataAiHint: 'pdf editor', pricing: 'Freemium' },
            { name: 'SmallPDF', description: 'We make PDF easy.', url: 'https://smallpdf.com/', image: 'https://picsum.photos/seed/smallpdf-file/600/400', dataAiHint: 'pdf converter', pricing: 'Freemium' },
            { name: 'PDF24', description: 'Free and online PDF tools.', url: 'https://tools.pdf24.org/en/', image: 'https://picsum.photos/seed/pdf24/600/400', dataAiHint: 'online pdf', pricing: 'Free' },
            { name: 'CloudConvert', description: 'Online file converter.', url: 'https://cloudconvert.com/', image: 'https://picsum.photos/seed/cloudconvert-file/600/400', dataAiHint: 'file format', pricing: 'Freemium' },
            { name: 'DocTranslator', description: 'Translate documents online.', url: 'https://www.onlinedoctranslator.com/', image: 'https://picsum.photos/seed/doctranslator/600/400', dataAiHint: 'document translation', pricing: 'Free' },
            { name: 'Adobe Acrobat', description: 'The original PDF solution.', url: 'https://acrobat.adobe.com/', image: 'https://picsum.photos/seed/acrobat-file/600/400', dataAiHint: 'pdf solution', pricing: 'Paid' },
            { name: 'Nitro PDF', description: 'PDF editor, converter, and eSignature software.', url: 'https://www.gonitro.com/', image: 'https://picsum.photos/seed/nitropdf-file/600/400', dataAiHint: 'esignature software', pricing: 'Paid' },
            { name: 'Foxit PDF Editor', description: 'A powerful and easy to use PDF editor.', url: 'https://www.foxit.com/pdf-editor/', image: 'https://picsum.photos/seed/foxit-file/600/400', dataAiHint: 'powerful pdf', pricing: 'Freemium' },
            { name: 'PDFelement', description: 'Smart PDF editor.', url: 'https://pdf.wondershare.com/', image: 'https://picsum.photos/seed/pdfelement-file/600/400', dataAiHint: 'smart editor', pricing: 'Paid' },
            { name: 'Sejda', description: 'Easy, pleasant and productive PDF editor.', url: 'https://www.sejda.com/', image: 'https://picsum.photos/seed/sejda-file/600/400', dataAiHint: 'productive pdf', pricing: 'Freemium' },
            { name: 'PDFescape', description: 'Free PDF editor & form filler.', url: 'https://www.pdfescape.com/', image: 'https://picsum.photos/seed/pdfescape-file/600/400', dataAiHint: 'form filler', pricing: 'Freemium' },
            { name: 'PDF Expert', description: 'The go-to PDF editor for Mac and iOS.', url: 'https://pdfexpert.com/', image: 'https://picsum.photos/seed/pdfexpert-file/600/400', dataAiHint: 'apple pdf', pricing: 'Paid' },
            { name: 'PDF-XChange Editor', description: 'The smallest, fastest, most feature-rich PDF editor.', url: 'https://www.tracker-software.com/product/pdf-xchange-editor', image: 'https://picsum.photos/seed/pdfxchange/600/400', dataAiHint: 'feature rich', pricing: 'Freemium' },
            { name: 'Soda PDF', description: 'Easy-to-use PDF tools.', url: 'https://www.sodapdf.com/', image: 'https://picsum.photos/seed/sodapdf/600/400', dataAiHint: 'easy pdf', pricing: 'Paid' },
            { name: 'Master PDF Editor', description: 'Complete solution for editing PDF files.', url: 'https://code-industry.net/masterpdfeditor/', image: 'https://picsum.photos/seed/masterpdf/600/400', dataAiHint: 'complete solution', pricing: 'Paid' },
            { name: 'Able2Extract Professional', description: 'Convert, Create, and Edit PDF Documents.', url: 'https://www.investintech.com/able2extract/', image: 'https://picsum.photos/seed/able2extract-file/600/400', dataAiHint: 'create pdf', pricing: 'Paid' },
            { name: 'DocFly', description: 'Online PDF editor.', url: 'https://docfly.com/', image: 'https://picsum.photos/seed/docfly-file/600/400', dataAiHint: 'online editor', pricing: 'Freemium' },
            { name: 'Lumin PDF', description: 'Edit, sign and share PDFs online.', url: 'https://www.luminpdf.com/', image: 'https://picsum.photos/seed/luminpdf-file/600/400', dataAiHint: 'share pdf', pricing: 'Freemium' },
            { name: 'ApowerPDF', description: 'One-stop solution for PDF files.', url: 'https://www.apowersoft.com/pdf-editor', image: 'https://picsum.photos/seed/apowerpdf-file/600/400', dataAiHint: 'one-stop solution', pricing: 'Paid' },
            { name: 'PDFpen', description: 'Powerful PDF editing on the Mac.', url: 'https://pdfpen.com/', image: 'https://picsum.photos/seed/pdfpen/600/400', dataAiHint: 'mac pdf', pricing: 'Paid' },
            { name: 'PDFsam', description: 'PDF Split and Merge.', url: 'https://pdfsam.org/', image: 'https://picsum.photos/seed/pdfsam/600/400', dataAiHint: 'pdf split', pricing: 'Freemium' },
            { name: 'Zamzar', description: 'File conversion, made easy.', url: 'https://www.zamzar.com/', image: 'https://picsum.photos/seed/zamzar-file/600/400', dataAiHint: 'easy conversion', pricing: 'Freemium' },
            { name: 'Convertio', description: 'Convert your files to any format.', url: 'https://convertio.co/', image: 'https://picsum.photos/seed/convertio/600/400', dataAiHint: 'any format', pricing: 'Freemium' },
            { name: 'Online-Convert.com', description: 'Convert files like images, video, documents, and more.', url: 'https://www.online-convert.com/', image: 'https://picsum.photos/seed/onlineconvert/600/400', dataAiHint: 'document conversion', pricing: 'Free' },
            { name: 'FreeConvert', description: 'Free online file converter.', url: 'https://www.freeconvert.com/', image: 'https://picsum.photos/seed/freeconvert/600/400', dataAiHint: 'free converter', pricing: 'Free' },
            { name: 'AnyConv', description: 'Online file converter.', url: 'https://anyconv.com/', image: 'https://picsum.photos/seed/anyconv/600/400', dataAiHint: 'online converter', pricing: 'Free' },
            { name: 'File-Converter-Online.com', description: 'Convert files online for free.', url: 'https://file-converter-online.com/', image: 'https://picsum.photos/seed/fileconverter-file/600/400', dataAiHint: 'free online', pricing: 'Free' },
            { name: 'Aconvert', description: 'Convert all kinds of documents, images, videos online for free.', url: 'https://www.aconvert.com/', image: 'https://picsum.photos/seed/aconvert/600/400', dataAiHint: 'all kinds', pricing: 'Free' },
            { name: 'PDFtoGO', description: 'A free online PDF editor and converter.', url: 'https://www.pdftogo.com/', image: 'https://picsum.photos/seed/pdftogo/600/400', dataAiHint: 'pdf to go', pricing: 'Free' },
            { name: 'Cometdocs', description: 'Free online document conversion.', url: 'https://www.cometdocs.com/', image: 'https://picsum.photos/seed/cometdocs/600/400', dataAiHint: 'document conversion', pricing: 'Free' },
            { name: 'Online OCR', description: 'Free online OCR service.', url: 'https://www.onlineocr.net/', image: 'https://picsum.photos/seed/onlineocr/600/400', dataAiHint: 'ocr service', pricing: 'Free' },
            { name: 'NewOCR', description: 'Free online OCR.', url: 'https://www.newocr.com/', image: 'https://picsum.photos/seed/newocr/600/400', dataAiHint: 'free ocr', pricing: 'Free' },
            { name: 'i2OCR', description: 'Free online Optical Character Recognition.', url: 'https://www.i2ocr.com/', image: 'https://picsum.photos/seed/i2ocr/600/400', dataAiHint: 'optical character', pricing: 'Free' },
            { name: 'ScanWritr', description: 'Online editor, converter, and form filler.', url: 'https://www.scanwritr.com/', image: 'https://picsum.photos/seed/scanwritr/600/400', dataAiHint: 'online editor', pricing: 'Free' },
            { name: 'PDF Candy', description: 'Edit PDF for free.', url: 'https://pdfcandy.com/', image: 'https://picsum.photos/seed/pdfcandy/600/400', dataAiHint: 'pdf candy', pricing: 'Free' },
            { name: 'PDF Online', description: 'Convert PDF to Word for free.', url: 'https://www.pdfonline.com/', image: 'https://picsum.photos/seed/pdfonline/600/400', dataAiHint: 'pdf to word', pricing: 'Free' },
            { name: 'Go4Convert', description: 'Online file converter.', url: 'https://www.go4convert.com/', image: 'https://picsum.photos/seed/go4convert/600/400', dataAiHint: 'file converter', pricing: 'Free' },
            { name: 'ConvertFiles', description: 'Convert any document, archive file, spreadsheet, and more.', url: 'https://www.convertfiles.com/', image: 'https://picsum.photos/seed/convertfiles/600/400', dataAiHint: 'archive file', pricing: 'Free' },
            { name: 'The Online Converter', description: 'Convert videos, images, audio, and documents for free.', url: 'https://theonlineconverter.com/', image: 'https://picsum.photos/seed/theonlineconverter/600/400', dataAiHint: 'video image', pricing: 'Free' },
            { name: 'To PDF', description: 'Free PDF converter.', url: 'https://topdf.com/', image: 'https://picsum.photos/seed/topdf/600/400', dataAiHint: 'free pdf', pricing: 'Free' },
            { name: 'FreeFileConvert', description: 'Convert files online.', url: 'https://www.freefileconvert.com/', image: 'https://picsum.photos/seed/freefileconvert/600/400', dataAiHint: 'convert online', pricing: 'Free' },
            { name: 'FileZigZag', description: 'Free online converter.', url: 'https://www.filezigzag.com/', image: 'https://picsum.photos/seed/filezigzag/600/400', dataAiHint: 'online converter', pricing: 'Free' },
            { name: 'Office Converter', description: 'Convert videos, documents, and more online.', url: 'https://www.office-converter.com/', image: 'https://picsum.photos/seed/officeconverter/600/400', dataAiHint: 'office converter', pricing: 'Free' },
            { name: 'Hipdf', description: 'All-in-one online PDF solution.', url: 'https://www.hipdf.com/', image: 'https://picsum.photos/seed/hipdf/600/400', dataAiHint: 'online pdf', pricing: 'Freemium' },
            { name: 'PDF Converter', description: 'Convert to and from PDF.', url: 'https://www.freepdfconvert.com/', image: 'https://picsum.photos/seed/pdfconverter/600/400', dataAiHint: 'convert to pdf', pricing: 'Free' },
            { name: 'PDF2DOC', description: 'Convert PDF to DOC online.', url: 'https://pdf2doc.com/', image: 'https://picsum.photos/seed/pdf2doc/600/400', dataAiHint: 'pdf to doc', pricing: 'Free' },
            { name: 'Online2PDF', description: 'Free online PDF converter.', url: 'https://online2pdf.com/', image: 'https://picsum.photos/seed/online2pdf/600/400', dataAiHint: 'free online', pricing: 'Free' },
            { name: 'Simply PDF', description: 'Online PDF editor and converter.', url: 'https://simplypdf.com/', image: 'https://picsum.photos/seed/simplypdf/600/400', dataAiHint: 'simply pdf', pricing: 'Free' },
            { name: 'DocuPub', description: 'Free online PDF converter.', url: 'https://www.docupub.com/pdfconvert/', image: 'https://picsum.photos/seed/docupub/600/400', dataAiHint: 'pdf convert', pricing: 'Free' },
            { name: 'Investintech Online PDF Tools', description: 'Free online PDF tools.', url: 'https://www.investintech.com/resources/freetools/', image: 'https://picsum.photos/seed/investintech-tools/600/400', dataAiHint: 'free tools', pricing: 'Free' },
            { name: 'EasePDF', description: 'Online PDF converter and editor.', url: 'https://www.easepdf.com/', image: 'https://picsum.photos/seed/easepdf/600/400', dataAiHint: 'ease pdf', pricing: 'Free' },
        ]
    }
];

export default function StudentToolsPage() {
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
                    <GraduationCap className="w-6 h-6 text-foreground" />
                    <h1 className="text-2xl font-bold text-foreground">
                        Student Tools
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


'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Star, Share2, Youtube, MessageSquare, BookOpen, FileText, HelpCircle, Book, Zap, Calendar, Brain, Search, Type, Presentation, Wand2, Mic, File, GraduationCap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useFavourites } from '@/context/favourites-context';

type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
};

type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

const toolData: ToolCategory[] = [
    {
        title: "YouTube Study Support Tools",
        icon: <Youtube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Eightify AI', description: 'Summarize YouTube videos with AI.', url: 'https://eightify.app/', image: 'https://picsum.photos/seed/eightify/600/400', dataAiHint: 'youtube summary' },
            { name: 'Glarity', description: 'Summarize Google search results and YouTube videos.', url: 'https://glarity.app/', image: 'https://picsum.photos/seed/glarity/600/400', dataAiHint: 'video transcript' },
            { name: 'YouTube Transcript Extractor', description: 'Get transcripts from any YouTube video.', url: 'https://youtubetranscript.com/', image: 'https://picsum.photos/seed/youtubetranscript/600/400', dataAiHint: 'video text' },
            { name: 'VidSummize', description: 'AI-powered video summarization.', url: 'https://vidsummize.com/', image: 'https://picsum.photos/seed/vidsummize/600/400', dataAiHint: 'video recap' },
            { name: 'Recall.ai', description: 'Capture and search insights from video calls.', url: 'https://www.recall.ai/', image: 'https://picsum.photos/seed/recallai/600/400', dataAiHint: 'meeting summary' },
        ]
    },
    {
        title: "Chatbox / Study Assistant Tools",
        icon: <MessageSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'ChatGPT', description: 'Conversational AI for instant answers.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-study/600/400', dataAiHint: 'ai assistant' },
            { name: 'Perplexity AI', description: 'An answer engine for complex questions.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-study/600/400', dataAiHint: 'research tool' },
            { name: 'Notion AI', description: 'AI features integrated into Notion workspace.', url: 'https://www.notion.so/product/ai', image: 'https://picsum.photos/seed/notionai-study/600/400', dataAiHint: 'workspace assistant' },
            { name: 'Gemini', description: 'Google\'s creative and helpful AI collaborator.', url: 'https://gemini.google.com/', image: 'https://picsum.photos/seed/gemini-study/600/400', dataAiHint: 'google ai' },
            { name: 'HIX.AI Study Mode', description: 'An all-in-one AI writing copilot.', url: 'https://hix.ai/', image: 'https://picsum.photos/seed/hixai-study/600/400', dataAiHint: 'writing copilot' },
        ]
    },
    {
        title: "Notes Making & Summarising Tools",
        icon: <BookOpen className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion', description: 'The all-in-one workspace for notes and tasks.', url: 'https://www.notion.so/', image: 'https://picsum.photos/seed/notion-notes/600/400', dataAiHint: 'digital notebook' },
            { name: 'Obsidian', description: 'A powerful knowledge base on top of a local folder.', url: 'https://obsidian.md/', image: 'https://picsum.photos/seed/obsidian-notes/600/400', dataAiHint: 'second brain' },
            { name: 'TLDV', description: 'Record, transcribe, and summarize meetings.', url: 'https://tldv.io/', image: 'https://picsum.photos/seed/tldv/600/400', dataAiHint: 'meeting notes' },
            { name: 'UpNote', description: 'A most elegant and powerful note-taking app.', url: 'https://upnote.me/', image: 'https://picsum.photos/seed/upnote/600/400', dataAiHint: 'note app' },
            { name: 'Scribbl', description: 'AI-powered meeting notes.', url: 'https://scribbl.co/', image: 'https://picsum.photos/seed/scribbl/600/400', dataAiHint: 'meeting assistant' },
        ]
    },
    {
        title: "Text-to-Notes Converter Tools",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Scholarcy', description: 'AI-powered article summarizer.', url: 'https://www.scholarcy.com/', image: 'https://picsum.photos/seed/scholarcy/600/400', dataAiHint: 'research paper' },
            { name: 'Humata AI', description: 'Your AI for files. Ask questions, get answers.', url: 'https://www.humata.ai/', image: 'https://picsum.photos/seed/humataai/600/400', dataAiHint: 'document ai' },
            { name: 'PDFgear AI', description: 'Free PDF editor with AI features.', url: 'https://www.pdfgear.com/', image: 'https://picsum.photos/seed/pdfgear/600/400', dataAiHint: 'pdf chat' },
            { name: 'ExplainThis PDF', description: 'Upload a PDF and ask questions.', url: 'https://www.explainthis.io/pdf', image: 'https://picsum.photos/seed/explainthispdf/600/400', dataAiHint: 'pdf questions' },
            { name: 'Split & Merge PDF', description: 'Combine and split PDF files easily.', url: 'https://www.ilovepdf.com/split_pdf', image: 'https://picsum.photos/seed/splitmerge/600/400', dataAiHint: 'pdf utility' },
        ]
    },
    {
        title: "Question Solving Tools",
        icon: <HelpCircle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Photomath', description: 'Scan and solve math problems.', url: 'https://photomath.com/', image: 'https://picsum.photos/seed/photomath/600/400', dataAiHint: 'math solver' },
            { name: 'Mathway', description: 'Step-by-step algebra, calculus, and more.', url: 'https://www.mathway.com/', image: 'https://picsum.photos/seed/mathway/600/400', dataAiHint: 'algebra solver' },
            { name: 'Symbolab', description: 'Math solver with step-by-step solutions.', url: 'https://www.symbolab.com/', image: 'https://picsum.photos/seed/symbolab/600/400', dataAiHint: 'calculus solver' },
            { name: 'Wolfram Alpha', description: 'Computational intelligence for any field.', url: 'https://www.wolframalpha.com/', image: 'https://picsum.photos/seed/wolframalpha/600/400', dataAiHint: 'computational engine' },
            { name: 'Doubtnut', description: 'Get video solutions for math doubts.', url: 'https://www.doubtnut.com/', image: 'https://picsum.photos/seed/doubtnut/600/400', dataAiHint: 'video solutions' },
        ]
    },
    {
        title: "Exam Revision Tools",
        icon: <Book className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Quizlet', description: 'Learn with flashcards, games, and more.', url: 'https://quizlet.com/', image: 'https://picsum.photos/seed/quizlet/600/400', dataAiHint: 'study sets' },
            { name: 'Anki', description: 'Powerful, intelligent flashcards.', url: 'https://apps.ankiweb.net/', image: 'https://picsum.photos/seed/anki/600/400', dataAiHint: 'spaced repetition' },
            { name: 'StudySmarter', description: 'All-in-one learning platform.', url: 'https://www.studysmarter.us/', image: 'https://picsum.photos/seed/studysmarter/600/400', dataAiHint: 'learning platform' },
            { name: 'GoConqr', description: 'Create, share, and discover learning resources.', url: 'https://www.goconqr.com/', image: 'https://picsum.photos/seed/goconqr/600/400', dataAiHint: 'mind maps' },
            { name: 'MindMeister', description: 'Online mind mapping and brainstorming.', url: 'https://www.mindmeister.com/', image: 'https://picsum.photos/seed/mindmeister-study/600/400', dataAiHint: 'visual learning' },
        ]
    },
    {
        title: "Productivity & Focus Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Forest', description: 'Stay focused, be present.', url: 'https://www.forestapp.cc/', image: 'https://picsum.photos/seed/forest-app/600/400', dataAiHint: 'focus timer' },
            { name: 'Focus To-Do', description: 'Pomodoro Timer & To Do List.', url: 'https://www.focustodo.cn/', image: 'https://picsum.photos/seed/focustodo/600/400', dataAiHint: 'pomodoro technique' },
            { name: 'Study Bunny', description: 'A motivating study timer app.', url: 'https://superbyte.site/studybunny', image: 'https://picsum.photos/seed/studybunny/600/400', dataAiHint: 'cute timer' },
            { name: 'StayFree', description: 'Screen time tracker & app usage limiter.', url: 'https://www.stayfreeapps.com/', image: 'https://picsum.photos/seed/stayfree/600/400', dataAiHint: 'digital detox' },
            { name: 'Freedom App', description: 'Block websites, apps, and the internet.', url: 'https://freedom.to/', image: 'https://picsum.photos/seed/freedom-app/600/400', dataAiHint: 'distraction blocker' },
        ]
    },
    {
        title: "Study Planner / Time Table Tools",
        icon: <Calendar className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Notion Templates', description: 'Customizable templates for study planning.', url: 'https://www.notion.so/templates', image: 'https://picsum.photos/seed/notion-templates/600/400', dataAiHint: 'student planner' },
            { name: 'Google Calendar', description: 'Organize your schedule and share events.', url: 'https://calendar.google.com/', image: 'https://picsum.photos/seed/google-calendar/600/400', dataAiHint: 'digital calendar' },
            { name: 'Todoist', description: 'Organize your work and life.', url: 'https://todoist.com/', image: 'https://picsum.photos/seed/todoist-study/600/400', dataAiHint: 'task manager' },
            { name: 'TickTick', description: 'To-do list, calendar, and habit tracker.', url: 'https://ticktick.com/', image: 'https://picsum.photos/seed/ticktick-study/600/400', dataAiHint: 'habit tracker' },
            { name: 'Motion', description: 'Uses AI to plan your day.', url: 'https://www.usemotion.com/', image: 'https://picsum.photos/seed/motion-study/600/400', dataAiHint: 'ai scheduler' },
        ]
    },
    {
        title: "Memory Booster Tools",
        icon: <Brain className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Anki', description: 'Intelligent flashcards for effective memorization.', url: 'https://apps.ankiweb.net/', image: 'https://picsum.photos/seed/anki-memory/600/400', dataAiHint: 'spaced repetition' },
            { name: 'Memrise', description: 'The fastest way to learn a language.', url: 'https://www.memrise.com/', image: 'https://picsum.photos/seed/memrise/600/400', dataAiHint: 'language learning' },
            { name: 'ChatGPT Mnemonic Mode', description: 'Use AI to create memory aids.', url: 'https://chat.openai.com/', image: 'https://picsum.photos/seed/chatgpt-mnemonic/600/400', dataAiHint: 'memory palace' },
            { name: 'SuperMemo', description: 'Spaced repetition software for learning.', url: 'https://supermemo.com/', image: 'https://picsum.photos/seed/supermemo/600/400', dataAiHint: 'learning software' },
        ]
    },
    {
        title: "Research / Information Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Perplexity AI', description: 'An answer engine for discovering and sharing knowledge.', url: 'https://www.perplexity.ai/', image: 'https://picsum.photos/seed/perplexity-research/600/400', dataAiHint: 'knowledge engine' },
            { name: 'Google Scholar', description: 'Provides a simple way to broadly search for scholarly literature.', url: 'https://scholar.google.com/', image: 'https://picsum.photos/seed/googlescholar/600/400', dataAiHint: 'academic search' },
            { name: 'Research Rabbit', description: 'Your personal research assistant.', url: 'https://www.researchrabbit.ai/', image: 'https://picsum.photos/seed/researchrabbit/600/400', dataAiHint: 'literature map' },
            { name: 'SciSpace', description: 'Explore, understand, and explain research papers.', url: 'https://typeset.io/', image: 'https://picsum.photos/seed/scispace/600/400', dataAiHint: 'ai for research' },
            { name: 'Wikipedia Pro Search', description: 'Advanced search for Wikipedia content.', url: 'https://en.wikipedia.org/wiki/Special:Search', image: 'https://picsum.photos/seed/wikipediasearch/600/400', dataAiHint: 'encyclopedia search' },
        ]
    },
    {
        title: "English Grammar & Writing Tools",
        icon: <Type className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Grammarly', description: 'Your AI-powered writing assistant.', url: 'https://www.grammarly.com/', image: 'https://picsum.photos/seed/grammarly-write/600/400', dataAiHint: 'grammar check' },
            { name: 'QuillBot', description: 'AI-powered paraphrasing tool.', url: 'https://quillbot.com/', image: 'https://picsum.photos/seed/quillbot-write/600/400', dataAiHint: 'sentence rewriter' },
            { name: 'Hemingway Editor', description: 'Makes your writing bold and clear.', url: 'https://hemingwayapp.com/', image: 'https://picsum.photos/seed/hemingway-write/600/400', dataAiHint: 'readability tool' },
            { name: 'LanguageTool', description: 'Multilingual grammar, style, and spell checker.', url: 'https://languagetool.org/', image: 'https://picsum.photos/seed/languagetool/600/400', dataAiHint: 'spell check' },
            { name: 'WordTune', description: 'Your personal writing companion.', url: 'https://www.wordtune.com/', image: 'https://picsum.photos/seed/wordtune/600/400', dataAiHint: 'ai writing' },
        ]
    },
    {
        title: "Presentation & Assignment Maker Tools",
        icon: <Presentation className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Canva', description: 'Design presentations, documents, and more.', url: 'https://www.canva.com/', image: 'https://picsum.photos/seed/canva-present/600/400', dataAiHint: 'design platform' },
            { name: 'Gamma App', description: 'A new medium for presenting ideas.', url: 'https://gamma.app/', image: 'https://picsum.photos/seed/gamma-app/600/400', dataAiHint: 'ai presentation' },
            { name: 'Beautiful.ai', description: 'Presentation software that designs for you.', url: 'https://www.beautiful.ai/', image: 'https://picsum.photos/seed/beautifulai/600/400', dataAiHint: 'slide design' },
            { name: 'Tome AI', description: 'The AI-powered storytelling format.', url: 'https://tome.app/', image: 'https://picsum.photos/seed/tome-ai/600/400', dataAiHint: 'storytelling' },
            { name: 'SlidesGo', description: 'Free Google Slides and PowerPoint templates.', url: 'https://slidesgo.com/', image: 'https://picsum.photos/seed/slidesgo/600/400', dataAiHint: 'presentation templates' },
        ]
    },
    {
        title: "Formula & Concept Explainer Tools",
        icon: <Wand2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Khan Academy', description: 'Free online courses, lessons, and practice.', url: 'https://www.khanacademy.org/', image: 'https://picsum.photos/seed/khanacademy/600/400', dataAiHint: 'online learning' },
            { name: 'PhET Simulations', description: 'Interactive simulations for science and math.', url: 'https://phet.colorado.edu/', image: 'https://picsum.photos/seed/phet/600/400', dataAiHint: 'science simulation' },
            { name: 'ChemGuide', description: 'Helping you to understand Chemistry.', url: 'https://www.chemguide.co.uk/', image: 'https://picsum.photos/seed/chemguide/600/400', dataAiHint: 'chemistry help' },
            { name: 'BioRender', description: 'Create professional science figures in minutes.', url: 'https://biorender.com/', image: 'https://picsum.photos/seed/biorender/600/400', dataAiHint: 'science illustration' },
            { name: 'TeachMe', description: 'AI-powered learning companion.', url: '#', image: 'https://picsum.photos/seed/teachme/600/400', dataAiHint: 'learning ai' },
        ]
    },
    {
        title: "Audio Learning Tools",
        icon: <Mic className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Speechify', description: 'The #1 text-to-speech reader.', url: 'https://speechify.com/', image: 'https://picsum.photos/seed/speechify-audio/600/400', dataAiHint: 'text reader' },
            { name: 'NaturalReader', description: 'AI text to speech solution.', url: 'https://www.naturalreaders.com/', image: 'https://picsum.photos/seed/naturalreader/600/400', dataAiHint: 'tts software' },
            { name: 'TTSReader', description: 'Reads text out loud for you.', url: 'https://ttsreader.com/', image: 'https://picsum.photos/seed/ttsreader/600/400', dataAiHint: 'web reader' },
            { name: 'VoiceAloud', description: 'Read aloud web pages and documents.', url: 'https://play.google.com/store/apps/details?id=com.hyperionics.fbreader.plugin.tts_plus', image: 'https://picsum.photos/seed/voicealoud/600/400', dataAiHint: 'android tts' },
            { name: 'Read Aloud Extension', description: 'A Text to Speech voice reader.', url: 'https://chrome.google.com/webstore/detail/read-aloud-a-text-to-spee/hdhinadidafjejdhmfkjgnolgimiaplp', image: 'https://picsum.photos/seed/readaloud/600/400', dataAiHint: 'chrome extension' },
        ]
    },
    {
        title: "File Convert / PDF Tools",
        icon: <File className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'iLovePDF', description: 'Every tool you need to work with PDFs.', url: 'https://www.ilovepdf.com/', image: 'https://picsum.photos/seed/ilovepdf/600/400', dataAiHint: 'pdf editor' },
            { name: 'SmallPDF', description: 'We make PDF easy.', url: 'https://smallpdf.com/', image: 'https://picsum.photos/seed/smallpdf/600/400', dataAiHint: 'pdf converter' },
            { name: 'PDF24', description: 'Free and online PDF tools.', url: 'https://tools.pdf24.org/', image: 'https://picsum.photos/seed/pdf24/600/400', dataAiHint: 'online pdf' },
            { name: 'CloudConvert', description: 'Online file converter for 200+ formats.', url: 'https://cloudconvert.com/', image: 'https://picsum.photos/seed/cloudconvert/600/400', dataAiHint: 'file format' },
            { name: 'DocTranslator', description: 'Translate any document.', url: 'https://www.onlinedoctranslator.com/', image: 'https://picsum.photos/seed/doctranslator/600/400', dataAiHint: 'document translation' },
        ]
    }
];

export default function StudentToolsPage() {
    const { toast } = useToast();
    const { favouritedTools, handleFavouriteToggle } = useFavourites();

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
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-8">
            {toolData.map((category, index) => {
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

    
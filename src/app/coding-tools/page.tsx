'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ArrowLeft, ExternalLink, Code, Star, Share2, Terminal, Braces, Server, Database, Link2, CloudCog, GitBranch, Bug, Paintbrush, Box, Bot, TerminalSquare, PackageCheck, Shield, Smartphone, Gamepad2, BrainCircuit, Gauge, ChevronRight
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
        title: "Code Editors / IDEs",
        icon: <Terminal className="w-5 h-5 text-primary"/>,
        tools: [
          { name: 'VS Code', description: 'Free. Built on open source. Runs everywhere.', url: 'https://code.visualstudio.com/', image: 'https://picsum.photos/seed/vscode/600/400', dataAiHint: 'code editor' },
          { name: 'Sublime Text', description: 'A sophisticated text editor for code, markup and prose.', url: 'https://www.sublimetext.com/', image: 'https://picsum.photos/seed/sublime/600/400', dataAiHint: 'text editor' },
          { name: 'WebStorm', description: 'The smartest JavaScript IDE by JetBrains.', url: 'https://www.jetbrains.com/webstorm/', image: 'https://picsum.photos/seed/webstorm/600/400', dataAiHint: 'javascript ide' },
          { name: 'IntelliJ IDEA', description: 'Capable and ergonomic IDE for JVM.', url: 'https://www.jetbrains.com/idea/', image: 'https://picsum.photos/seed/intellij/600/400', dataAiHint: 'java ide' },
          { name: 'Vim', description: 'The ubiquitous text editor.', url: 'https://www.vim.org/', image: 'https://picsum.photos/seed/vim/600/400', dataAiHint: 'terminal editor' },
          { name: 'Neovim', description: 'Vim-fork focused on extensibility and usability.', url: 'https://neovim.io/', image: 'https://picsum.photos/seed/neovim/600/400', dataAiHint: 'modern vim' },
          { name: 'Atom', description: 'A hackable text editor for the 21st Century.', url: 'https://github.blog/2022-06-08-sunsetting-atom/', image: 'https://picsum.photos/seed/atom/600/400', dataAiHint: 'github editor' },
          { name: 'PyCharm', description: 'Python IDE for professional developers.', url: 'https://www.jetbrains.com/pycharm/', image: 'https://picsum.photos/seed/pycharm/600/400', dataAiHint: 'python ide' },
        ]
    },
    {
        title: "Frontend Frameworks & Libraries",
        icon: <Braces className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'React', description: 'The library for web and native user interfaces.', url: 'https://react.dev/', image: 'https://picsum.photos/seed/react/600/400', dataAiHint: 'javascript library' },
            { name: 'Vue.js', description: 'The Progressive JavaScript Framework.', url: 'https://vuejs.org/', image: 'https://picsum.photos/seed/vuejs/600/400', dataAiHint: 'frontend framework' },
            { name: 'Angular', description: 'The web development framework for building the future.', url: 'https://angular.io/', image: 'https://picsum.photos/seed/angular/600/400', dataAiHint: 'web components' },
            { name: 'Svelte', description: 'Cybernetically enhanced web apps.', url: 'https://svelte.dev/', image: 'https://picsum.photos/seed/svelte/600/400', dataAiHint: 'compiler framework' },
            { name: 'Next.js', description: 'The React Framework for the Web.', url: 'https://nextjs.org/', image: 'https://picsum.photos/seed/nextjs/600/400', dataAiHint: 'react framework' },
            { name: 'Vite', description: 'Next Generation Frontend Tooling.', url: 'https://vitejs.dev/', image: 'https://picsum.photos/seed/vite/600/400', dataAiHint: 'build tool' },
            { name: 'Tailwind CSS', description: 'A utility-first CSS framework.', url: 'https://tailwindcss.com/', image: 'https://picsum.photos/seed/tailwind/600/400', dataAiHint: 'css framework' },
            { name: 'Storybook', description: 'Build UIs in isolation.', url: 'https://storybook.js.org/', image: 'https://picsum.photos/seed/storybook/600/400', dataAiHint: 'ui components' },
        ]
    },
    {
        title: "Backend Frameworks & Libraries",
        icon: <Server className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 engine.', url: 'https://nodejs.org/', image: 'https://picsum.photos/seed/nodejs/600/400', dataAiHint: 'javascript runtime' },
            { name: 'Express.js', description: 'Fast, unopinionated, minimalist web framework for Node.js.', url: 'https://expressjs.com/', image: 'https://picsum.photos/seed/expressjs/600/400', dataAiHint: 'node framework' },
            { name: 'Django', description: 'The web framework for perfectionists with deadlines.', url: 'https://www.djangoproject.com/', image: 'https://picsum.photos/seed/django/600/400', dataAiHint: 'python framework' },
            { name: 'Ruby on Rails', description: 'A web-application framework for programmer happiness.', url: 'https://rubyonrails.org/', image: 'https://picsum.photos/seed/rails/600/400', dataAiHint: 'web framework' },
            { name: 'Laravel', description: 'The PHP Framework for Web Artisans.', url: 'https://laravel.com/', image: 'https://picsum.photos/seed/laravel/600/400', dataAiHint: 'php framework' },
            { name: 'Go', description: 'An open-source programming language that makes it easy to build simple, reliable, and efficient software.', url: 'https://go.dev/', image: 'https://picsum.photos/seed/golang/600/400', dataAiHint: 'programming language' },
            { name: 'Spring Boot', description: 'Makes it easy to create stand-alone, production-grade Spring based Applications.', url: 'https://spring.io/projects/spring-boot', image: 'https://picsum.photos/seed/springboot/600/400', dataAiHint: 'java framework' },
        ]
    },
    {
        title: "Database Tools",
        icon: <Database className="w-5 h-5 text-primary" />,
        tools: [
            { name: "PostgreSQL", description: "The World's Most Advanced Open Source Relational Database.", url: "https://www.postgresql.org/", image: "https://picsum.photos/seed/postgres/600/400", dataAiHint: "sql database" },
            { name: "MongoDB", description: "The developer data platform.", url: "https://www.mongodb.com/", image: "https://picsum.photos/seed/mongodb/600/400", dataAiHint: "nosql database" },
            { name: "Redis", description: "An in-memory data structure store, used as a database, cache, and message broker.", url: "https://redis.io/", image: "https://picsum.photos/seed/redis/600/400", dataAiHint: "in-memory cache" },
            { name: "MySQL", description: "The world's most popular open source database.", url: "https://www.mysql.com/", image: "https://picsum.photos/seed/mysql/600/400", dataAiHint: "relational database" },
            { name: "DBeaver", description: "Free multi-platform database tool for developers.", url: "https://dbeaver.io/", image: "https://picsum.photos/seed/dbeaver/600/400", dataAiHint: "database client" }
        ]
    },
    {
        title: "APIs & Integration Tools",
        icon: <Link2 className="w-5 h-5 text-primary" />,
        tools: [
            { name: "Postman", description: "The collaboration platform for API development.", url: "https://www.postman.com/", image: "https://picsum.photos/seed/postman/600/400", dataAiHint: "api client" },
            { name: "Zapier", description: "Easy automation for busy people.", url: "https://zapier.com/", image: "https://picsum.photos/seed/zapier/600/400", dataAiHint: "workflow automation" },
            { name: "Insomnia", description: "The open source API client.", url: "https://insomnia.rest/", image: "https://picsum.photos/seed/insomnia/600/400", dataAiHint: "api testing" },
            { name: "RapidAPI", description: "The world's largest API Hub.", url: "https://rapidapi.com/", image: "https://picsum.photos/seed/rapidapi/600/400", dataAiHint: "api marketplace" }
        ]
    },
    {
        title: "Cloud & DevOps",
        icon: <CloudCog className="w-5 h-5 text-primary" />,
        tools: [
            { name: "Docker", description: "Securely build, share and run any application, anywhere.", url: "https://www.docker.com/", image: "https://picsum.photos/seed/docker/600/400", dataAiHint: "containerization" },
            { name: "Kubernetes", description: "Production-Grade Container Orchestration.", url: "https://kubernetes.io/", image: "https://picsum.photos/seed/kubernetes/600/400", dataAiHint: "container orchestration" },
            { name: "Terraform", description: "Use Infrastructure as Code to provision and manage any cloud, infrastructure, or service.", url: "https://www.terraform.io/", image: "https://picsum.photos/seed/terraform/600/400", dataAiHint: "infrastructure as code" },
            { name: "Jenkins", description: "The leading open source automation server.", url: "https://www.jenkins.io/", image: "https://picsum.photos/seed/jenkins/600/400", dataAiHint: "ci cd" }
        ]
    },
    {
        title: "Version Control",
        icon: <GitBranch className="w-5 h-5 text-primary" />,
        tools: [
            { name: "Git", description: "A free and open source distributed version control system.", url: "https://git-scm.com/", image: "https://picsum.photos/seed/git/600/400", dataAiHint: "vcs" },
            { name: "GitHub", description: "The complete developer platform to build, scale, and deliver secure software.", url: "https://github.com/", image: "https://picsum.photos/seed/github/600/400", dataAiHint: "code hosting" },
            { name: "GitLab", description: "The most comprehensive AI-powered DevSecOps Platform.", url: "https://about.gitlab.com/", image: "https://picsum.photos/seed/gitlab/600/400", dataAiHint: "devops platform" },
            { name: "Sourcetree", description: "A free Git client for Windows and Mac.", url: "https://www.sourcetreeapp.com/", image: "https://picsum.photos/seed/sourcetree/600/400", dataAiHint: "git gui" }
        ]
    },
    {
        title: "Testing & Debugging",
        icon: <Bug className="w-5 h-5 text-primary" />,
        tools: [
            { name: "Jest", description: "Delightful JavaScript Testing.", url: "https://jestjs.io/", image: "https://picsum.photos/seed/jest/600/400", dataAiHint: "javascript testing" },
            { name: "Cypress", description: "Fast, easy and reliable testing for anything that runs in a browser.", url: "https://www.cypress.io/", image: "https://picsum.photos/seed/cypress/600/400", dataAiHint: "e2e testing" },
            { name: "Sentry", description: "Application monitoring and error tracking software.", url: "https://sentry.io/", image: "https://picsum.photos/seed/sentry/600/400", dataAiHint: "error tracking" },
            { name: "Chrome DevTools", description: "A set of web developer tools built directly into the Google Chrome browser.", url: "https://developer.chrome.com/docs/devtools", image: "https://picsum.photos/seed/devtools/600/400", dataAiHint: "browser tools" }
        ]
    },
    {
        title: "Design & Prototyping",
        icon: <Paintbrush className="w-5 h-5 text-primary" />,
        tools: [
            { name: "Figma", description: "The collaborative interface design tool.", url: "https://www.figma.com/", image: "https://picsum.photos/seed/figma/600/400", dataAiHint: "ui design" },
            { name: "Sketch", description: "The design toolkit for creating your best work.", url: "https://www.sketch.com/", image: "https://picsum.photos/seed/sketch/600/400", dataAiHint: "vector design" },
            { name: "Adobe XD", description: "Design, prototype, and share user experiences.", url: "https://www.adobe.com/products/xd.html", image: "https://picsum.photos/seed/adobexd/600/400", dataAiHint: "ux design" },
            { name: "InVision", description: "Digital product design and development platform.", url: "https://www.invisionapp.com/", image: "https://picsum.photos/seed/invision/600/400", dataAiHint: "prototyping" }
        ]
    },
    {
        title: "Static Site Generators",
        icon: <Box className="w-5 h-5 text-primary" />,
        tools: [
            { name: "Next.js", description: "The React Framework for the Web.", url: "https://nextjs.org/", image: "https://picsum.photos/seed/nextjs-ssg/600/400", dataAiHint: "react framework" },
            { name: "Gatsby", description: "The fastest frontend for the headless web.", url: "https://www.gatsbyjs.com/", image: "https://picsum.photos/seed/gatsby/600/400", dataAiHint: "react ssg" },
            { name: "Hugo", description: "The world’s fastest framework for building websites.", url: "https://gohugo.io/", image: "https://picsum.photos/seed/hugo/600/400", dataAiHint: "go framework" },
            { name: "Jekyll", description: "A simple, blog-aware, static site generator for personal, project, or organization sites.", url: "https://jekyllrb.com/", image: "https://picsum.photos/seed/jekyll/600/400", dataAiHint: "ruby ssg" }
        ]
    },
    {
        title: "AI & Machine Learning",
        icon: <Bot className="w-5 h-5 text-primary" />,
        tools: [
            { name: "TensorFlow", description: "An end-to-end open source platform for machine learning.", url: "https://www.tensorflow.org/", image: "https://picsum.photos/seed/tensorflow/600/400", dataAiHint: "machine learning" },
            { name: "PyTorch", description: "An open source machine learning framework that accelerates the path from research prototyping to production deployment.", url: "https://pytorch.org/", image: "https://picsum.photos/seed/pytorch/600/400", dataAiHint: "deep learning" },
            { name: "Hugging Face", description: "The AI community building the future.", url: "https://huggingface.co/", image: "https://picsum.photos/seed/huggingface/600/400", dataAiHint: "nlp models" },
            { name: "OpenAI", description: "Discover our research and AI products.", url: "https://openai.com/", image: "https://picsum.photos/seed/openai/600/400", dataAiHint: "ai research" }
        ]
    },
    {
        title: "Code Generation",
        icon: <TerminalSquare className="w-5 h-5 text-primary" />,
        tools: [
            { name: "GitHub Copilot", description: "Your AI pair programmer.", url: "https://github.com/features/copilot", image: "https://picsum.photos/seed/copilot/600/400", dataAiHint: "ai code" },
            { name: "Tabnine", description: "AI assistant for software developers.", url: "https://www.tabnine.com/", image: "https://picsum.photos/seed/tabnine/600/400", dataAiHint: "code completion" },
            { name: "Replit Ghostwriter", description: "The AI-powered coding assistant inside Replit.", url: "https://replit.com/ghostwriter", image: "https://picsum.photos/seed/replit/600/400", dataAiHint: "online ide" },
            { name: "CodeWhisperer", description: "Build applications faster with the AI coding companion from AWS.", url: "https://aws.amazon.com/codewhisperer/", image: "https://picsum.photos/seed/codewhisperer/600/400", dataAiHint: "aws ai" }
        ]
    },
    {
        title: "Package Managers",
        icon: <PackageCheck className="w-5 h-5 text-primary" />,
        tools: [
            { name: "npm", description: "The package manager for JavaScript.", url: "https://www.npmjs.com/", image: "https://picsum.photos/seed/npm/600/400", dataAiHint: "javascript packages" },
            { name: "Yarn", description: "Fast, reliable, and secure dependency management.", url: "https://yarnpkg.com/", image: "https://picsum.photos/seed/yarn/600/400", dataAiHint: "dependency manager" },
            { name: "pnpm", description: "Fast, disk space efficient package manager.", url: "https://pnpm.io/", image: "https://picsum.photos/seed/pnpm/600/400", dataAiHint: "fast package manager" },
            { name: "pip", description: "The package installer for Python.", url: "https://pypi.org/project/pip/", image: "https://picsum.photos/seed/pip/600/400", dataAiHint: "python packages" }
        ]
    },
    {
        title: "Code Security",
        icon: <Shield className="w-5 h-5 text-primary" />,
        tools: [
            { name: "Snyk", description: "Developer security that finds and fixes vulnerabilities.", url: "https://snyk.io/", image: "https://picsum.photos/seed/snyk/600/400", dataAiHint: "dev security" },
            { name: "Dependabot", description: "Automated dependency updates from GitHub.", url: "https://github.com/dependabot", image: "https://picsum.photos/seed/dependabot/600/400", dataAiHint: "dependency scanner" },
            { name: "ESLint", description: "Find and fix problems in your JavaScript code.", url: "https://eslint.org/", image: "https://picsum.photos/seed/eslint/600/400", dataAiHint: "code linter" },
            { name: "Prettier", description: "An opinionated code formatter.", url: "https://prettier.io/", image: "https://picsum.photos/seed/prettier/600/400", dataAiHint: "code formatter" }
        ]
    },
    {
        title: "Mobile Development",
        icon: <Smartphone className="w-5 h-5 text-primary" />,
        tools: [
            { name: "React Native", description: "Learn once, write anywhere.", url: "https://reactnative.dev/", image: "https://picsum.photos/seed/reactnative-mob/600/400", dataAiHint: "mobile framework" },
            { name: "Flutter", description: "Build apps for any screen.", url: "https://flutter.dev/", image: "https://picsum.photos/seed/flutter-mob/600/400", dataAiHint: "cross-platform" },
            { name: "Swift", description: "A powerful and intuitive programming language for all Apple platforms.", url: "https://developer.apple.com/swift/", image: "https://picsum.photos/seed/swift/600/400", dataAiHint: "ios language" },
            { name: "Kotlin", description: "A modern programming language that makes developers happier.", url: "https://kotlinlang.org/", image: "https://picsum.photos/seed/kotlin/600/400", dataAiHint: "android language" }
        ]
    },
    {
        title: "Game Development",
        icon: <Gamepad2 className="w-5 h-5 text-primary" />,
        tools: [
            { name: "Unity", description: "The world’s leading platform for creating and operating real-time 3D (RT3D) content.", url: "https://unity.com/", image: "https://picsum.photos/seed/unity/600/400", dataAiHint: "game engine" },
            { name: "Unreal Engine", description: "The world's most open and advanced real-time 3D creation tool.", url: "https://www.unrealengine.com/", image: "https://picsum.photos/seed/unreal/600/400", dataAiHint: "3d creation" },
            { name: "Godot Engine", description: "Free and open source 2D and 3D game engine.", url: "https://godotengine.org/", image: "https://picsum.photos/seed/godot/600/400", dataAiHint: "open source engine" },
            { name: "Blender", description: "Free and open source 3D creation suite.", url: "https://www.blender.org/", image: "https://picsum.photos/seed/blender-game/600/400", dataAiHint: "3d modeling" }
        ]
    },
    {
        title: "Data Science & Analysis",
        icon: <BrainCircuit className="w-5 h-5 text-primary" />,
        tools: [
            { name: "Jupyter", description: "Web-based interactive development environment for notebooks, code, and data.", url: "https://jupyter.org/", image: "https://picsum.photos/seed/jupyter/600/400", dataAiHint: "data notebook" },
            { name: "pandas", description: "A fast, powerful, flexible and easy to use open source data analysis and manipulation tool.", url: "https://pandas.pydata.org/", image: "https://picsum.photos/seed/pandas/600/400", dataAiHint: "python data" },
            { name: "NumPy", description: "The fundamental package for scientific computing with Python.", url: "https://numpy.org/", image: "https://picsum.photos/seed/numpy/600/400", dataAiHint: "python computing" },
            { name: "Tableau", description: "A visual analytics platform transforming the way we use data to solve problems.", url: "https://www.tableau.com/", image: "https://picsum.photos/seed/tableau/600/400", dataAiHint: "data visualization" }
        ]
    },
    {
        title: "Performance & Monitoring",
        icon: <Gauge className="w-5 h-5 text-primary" />,
        tools: [
            { name: "Lighthouse", description: "An open-source, automated tool for improving the quality of web pages.", url: "https://developer.chrome.com/docs/lighthouse/overview", image: "https://picsum.photos/seed/lighthouse/600/400", dataAiHint: "web performance" },
            { name: "Sentry", description: "Application monitoring, error tracking, and performance analysis.", url: "https://sentry.io/", image: "https://picsum.photos/seed/sentry-perf/600/400", dataAiHint: "error monitoring" },
            { name: "Datadog", description: "See inside any stack, any app, at any scale, anywhere.", url: "https://www.datadoghq.com/", image: "https://picsum.photos/seed/datadog/600/400", dataAiHint: "cloud monitoring" },
            { name: "New Relic", description: "Empower your digital business with a single, unified data platform.", url: "https://newrelic.com/", image: "https://picsum.photos/seed/newrelic/600/400", dataAiHint: "observability" }
        ]
    }
];

export default function CodingToolsPage() {
    const { toast } = useToast();
    const { favouritedTools, handleFavouriteToggle } = useFavourites();

    const handleFavouriteClick = (e: React.MouseEvent, toolName: string) => {
        e.preventDefault();
        e.stopPropagation();
        handleFavouriteToggle(toolName);
    };

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
        <header className="flex items-center gap-4">
          <Link href="/" passHref>
            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/50 backdrop-blur-sm">
              <ArrowLeft />
            </Button>
          </Link>
          <div className='flex items-center gap-2'>
            <Code className="w-6 h-6 text-foreground" />
            <h1 className="text-2xl font-bold text-foreground">
              Coding & Dev Tools
            </h1>
          </div>
        </header>
      </div>

      <main className="relative z-10 w-full max-w-sm flex-1 bg-card/80 backdrop-blur-3xl rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-0 border-t-2 border-white/50 soft-shadow mt-6">
        <div className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-8">
            {toolData.map((category, index) => (
              <section key={index}>
                  <div className="flex justify-between items-center mb-3 px-2">
                      <h2 className="font-semibold text-xl flex items-center gap-2">
                          {category.icon}
                          {category.title}
                      </h2>
                  </div>
                  <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-4 px-4">
                      {category.tools.map((tool, toolIndex) => (
                        <ToolCard tool={tool} key={`${category.title}-${tool.name}-${toolIndex}`}/>
                      ))}
                  </div>
              </section>
            ))}
        </div>
      </main>
    </div>
  );
}

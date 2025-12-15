
'use client';

import React from 'react';
import { 
    Cpu, Code, Bug, GitBranch, RefreshCw, Zap, Server, CloudCog, Database, TestTube,
    Shield, Key, FileText, Search, GitCommit, LineChart, Code2, Link2, Braces, BrainCircuit,
    Layers, Puzzle, GanttChartSquare, Route, MessageSquare, BookCopy, Users, Network, Lock,
    Terminal
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

export const codingToolData: ToolCategory[] = [
    {
        title: "AI Code Generators",
        icon: <Cpu className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: 'https://picsum.photos/seed/copilot-gen/600/400', dataAiHint: 'ai programmer', pricing: 'Paid' },
            { name: 'Tabnine', description: 'AI assistant for software developers.', url: 'https://www.tabnine.com/', image: 'https://picsum.photos/seed/tabnine-gen/600/400', dataAiHint: 'code completion', pricing: 'Freemium' },
            { name: 'Amazon CodeWhisperer', description: 'AI coding companion.', url: 'https://aws.amazon.com/codewhisperer/', image: 'https://picsum.photos/seed/codewhisperer-gen/600/400', dataAiHint: 'aws ai', pricing: 'Free' },
            { name: 'Replit Ghostwriter', description: 'The AI-powered coding assistant.', url: 'https://replit.com/ghostwriter', image: 'https://picsum.photos/seed/replit-gen/600/400', dataAiHint: 'coding assistant', pricing: 'Paid' },
            { name: 'Codeium', description: 'The modern coding superpower.', url: 'https://codeium.com/', image: 'https://picsum.photos/seed/codeium-gen/600/400', dataAiHint: 'free ai code', pricing: 'Free' },
        ]
    },
    {
        title: "AI Code Completion Tools",
        icon: <Code className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'IntelliCode', description: 'AI-assisted development in Visual Studio.', url: 'https://visualstudio.microsoft.com/services/intellicode/', image: 'https://picsum.photos/seed/intellicode/600/400', dataAiHint: 'visual studio', pricing: 'Free' },
            { name: 'Kite', description: 'AI code completion (discontinued, but influential).', url: 'https://www.kite.com/', image: 'https://picsum.photos/seed/kite-complete/600/400', dataAiHint: 'python code', pricing: 'Free' },
            { name: 'Codiga', description: 'Code analysis and automated code reviews.', url: 'https://www.codiga.io/', image: 'https://picsum.photos/seed/codiga-complete/600/400', dataAiHint: 'code analysis', pricing: 'Freemium' },
            { name: 'FauxPilot', description: 'A self-hosted GitHub Copilot alternative.', url: 'https://github.com/fauxpilot/fauxpilot', image: 'https://picsum.photos/seed/fauxpilot/600/400', dataAiHint: 'self-hosted', pricing: 'Free' },
            { name: 'Captain Stack', description: 'Code completion using Stack Overflow.', url: 'https://github.com/hieunc229/copilot-clone', image: 'https://picsum.photos/seed/captainstack/600/400', dataAiHint: 'stack overflow', pricing: 'Free' },
        ]
    },
    {
        title: "AI Debugging Tools",
        icon: <Bug className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sentry', description: 'Application monitoring and error tracking.', url: 'https://sentry.io/', image: 'https://picsum.photos/seed/sentry-debug/600/400', dataAiHint: 'error tracking', pricing: 'Freemium' },
            { name: 'Rollbar', description: 'Real-time error monitoring and debugging.', url: 'https://rollbar.com/', image: 'https://picsum.photos/seed/rollbar-debug/600/400', dataAiHint: 'real-time error', pricing: 'Freemium' },
            { name: 'Bugsnag', description: 'Monitor application stability.', url: 'https://www.bugsnag.com/', image: 'https://picsum.photos/seed/bugsnag-debug/600/400', dataAiHint: 'app stability', pricing: 'Freemium' },
            { name: 'Jam', description: 'Developer-friendly bug reports in 1-click.', url: 'https://jam.dev/', image: 'https://picsum.photos/seed/jam-debug/600/400', dataAiHint: 'bug reports', pricing: 'Freemium' },
            { name: 'DebugBear', description: 'Website and API monitoring.', url: 'https://www.debugbear.com/', image: 'https://picsum.photos/seed/debugbear/600/400', dataAiHint: 'website monitoring', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Code Review Tools",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'CodeScene', description: 'A behavioral code analysis tool.', url: 'https://codescene.com/', image: 'https://picsum.photos/seed/codescene/600/400', dataAiHint: 'code analysis', pricing: 'Freemium' },
            { name: 'DeepSource', description: 'Fast and reliable static analysis.', url: 'https://deepsource.io/', image: 'https://picsum.photos/seed/deepsource-review/600/400', dataAiHint: 'static analysis', pricing: 'Freemium' },
            { name: 'SonarQube', description: 'Continuous Code Quality.', url: 'https://www.sonarqube.org/', image: 'https://picsum.photos/seed/sonarqube-review/600/400', dataAiHint: 'code quality', pricing: 'Free' },
            { name: 'CodiumAI', description: 'AI-powered code integrity.', url: 'https://www.codium.ai/', image: 'https://picsum.photos/seed/codiumai-review/600/400', dataAiHint: 'code integrity', pricing: 'Freemium' },
            { name: 'Bito AI', description: 'Generate amazing code, 10x faster.', url: 'https://bito.ai/', image: 'https://picsum.photos/seed/bito-review/600/400', dataAiHint: 'ai code', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Refactoring Tools",
        icon: <RefreshCw className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'MutableAI', description: 'AI Accelerated Software Development.', url: 'https://mutable.ai/', image: 'https://picsum.photos/seed/mutable-refactor/600/400', dataAiHint: 'code acceleration', pricing: 'Paid' },
            { name: 'Sourcery', description: 'Your AI-powered junior programmer.', url: 'https://sourcery.ai/', image: 'https://picsum.photos/seed/sourcery/600/400', dataAiHint: 'ai programmer', pricing: 'Freemium' },
            { name: 'Copilot Labs', description: 'Experimental features for GitHub Copilot.', url: 'https://github.com/github/copilot-labs', image: 'https://picsum.photos/seed/copilot-labs/600/400', dataAiHint: 'experimental code', pricing: 'Free' },
            { name: 'JetBrains AI Assistant', description: 'AI features in JetBrains IDEs.', url: 'https://www.jetbrains.com/ai/', image: 'https://picsum.photos/seed/jetbrains-ai/600/400', dataAiHint: 'ide ai', pricing: 'Paid' },
            { name: 'CodeSquire', description: 'AI Code Writing Assistant for Data Scientists.', url: 'https://codesquire.ai/', image: 'https://picsum.photos/seed/codesquire/600/400', dataAiHint: 'data science', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Pair Programming Assistants",
        icon: <Users className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GitHub Copilot', description: 'Your AI pair programmer.', url: 'https://github.com/features/copilot', image: 'https://picsum.photos/seed/copilot-pair/600/400', dataAiHint: 'ai programmer', pricing: 'Paid' },
            { name: 'Amazon CodeWhisperer', description: 'Build applications faster with the AI coding companion.', url: 'https://aws.amazon.com/codewhisperer/', image: 'https://picsum.photos/seed/codewhisperer-pair/600/400', dataAiHint: 'aws ai', pricing: 'Free' },
            { name: 'Tabnine', description: 'AI assistant for software developers.', url: 'https://www.tabnine.com/', image: 'https://picsum.photos/seed/tabnine-pair/600/400', dataAiHint: 'code completion', pricing: 'Freemium' },
            { name: 'Replit Ghostwriter', description: 'The AI-powered coding assistant.', url: 'https://replit.com/ghostwriter', image: 'https://picsum.photos/seed/replit-pair/600/400', dataAiHint: 'coding assistant', pricing: 'Paid' },
            { name: 'Codeium', description: 'The modern coding superpower.', url: 'https://codeium.com/', image: 'https://picsum.photos/seed/codeium-pair/600/400', dataAiHint: 'free ai code', pricing: 'Free' },
        ]
    },
     {
        title: "AI Test Case Generation",
        icon: <TestTube className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Diffblue', description: 'Reinforcement learning for Java unit tests.', url: 'https://www.diffblue.com/', image: 'https://picsum.photos/seed/diffblue/600/400', dataAiHint: 'java tests', pricing: 'Paid' },
            { name: 'Mabl', description: 'Intelligent test automation for quality engineering.', url: 'https://www.mabl.com/', image: 'https://picsum.photos/seed/mabl-test/600/400', dataAiHint: 'test automation', pricing: 'Paid' },
            { name: 'Applitools', description: 'Next generation test automation platform.', url: 'https://applitools.com/', image: 'https://picsum.photos/seed/applitools-test/600/400', dataAiHint: 'visual testing', pricing: 'Paid' },
            { name: 'Testim', description: 'AI-based test automation.', url: 'https://www.testim.io/', image: 'https://picsum.photos/seed/testim/600/400', dataAiHint: 'stable tests', pricing: 'Paid' },
            { name: 'CodiumAI', description: 'Meaningful tests for busy devs.', url: 'https://www.codium.ai/', image: 'https://picsum.photos/seed/codium-test/600/400', dataAiHint: 'code integrity', pricing: 'Freemium' },
        ]
    },
    {
        title: "Automated Testing AI",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Selenium', description: 'Open-source browser automation.', url: 'https://www.selenium.dev/', image: 'https://picsum.photos/seed/selenium-auto/600/400', dataAiHint: 'browser automation', pricing: 'Free' },
            { name: 'Cypress', description: 'Fast, easy and reliable testing for anything that runs in a browser.', url: 'https://www.cypress.io/', image: 'https://picsum.photos/seed/cypress-auto/600/400', dataAiHint: 'web testing', pricing: 'Freemium' },
            { name: 'Playwright', description: 'A framework for Web Testing and Automation.', url: 'https://playwright.dev/', image: 'https://picsum.photos/seed/playwright-auto/600/400', dataAiHint: 'microsoft test', pricing: 'Free' },
            { name: 'Puppeteer', description: 'Headless Chrome Node.js API.', url: 'https://pptr.dev/', image: 'https://picsum.photos/seed/puppeteer-auto/600/400', dataAiHint: 'headless chrome', pricing: 'Free' },
            { name: 'Appium', description: 'An open source test automation framework for mobile apps.', url: 'https://appium.io/', image: 'https://picsum.photos/seed/appium-auto/600/400', dataAiHint: 'mobile testing', pricing: 'Free' },
        ]
    },
    {
        title: "AI Bug Tracking & Fixing",
        icon: <Bug className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Jam', description: 'Developer-friendly bug reports in 1-click.', url: 'https://jam.dev/', image: 'https://picsum.photos/seed/jam-bug/600/400', dataAiHint: 'bug report', pricing: 'Freemium' },
            { name: 'Sentry', description: 'Application monitoring and error tracking.', url: 'https://sentry.io/', image: 'https://picsum.photos/seed/sentry-bug/600/400', dataAiHint: 'error tracking', pricing: 'Freemium' },
            { name: 'Bugsnag', description: 'Monitor application stability.', url: 'https://www.bugsnag.com/', image: 'https://picsum.photos/seed/bugsnag-bug/600/400', dataAiHint: 'app stability', pricing: 'Freemium' },
            { name: 'Jira', description: 'Project management tool for agile teams.', url: 'https://www.atlassian.com/software/jira', image: 'https://picsum.photos/seed/jira-bug/600/400', dataAiHint: 'issue tracking', pricing: 'Freemium' },
            { name: 'Linear', description: 'The issue tracking tool you\'ll enjoy using.', url: 'https://linear.app/', image: 'https://picsum.photos/seed/linear-bug/600/400', dataAiHint: 'modern tracking', pricing: 'Freemium' },
        ]
    },
    {
        title: "Static Code Analysis AI",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'SonarQube', description: 'Continuous Code Quality.', url: 'https://www.sonarqube.org/', image: 'https://picsum.photos/seed/sonarqube-static/600/400', dataAiHint: 'code quality', pricing: 'Free' },
            { name: 'DeepSource', description: 'Fast and reliable static analysis.', url: 'https://deepsource.io/', image: 'https://picsum.photos/seed/deepsource-static/600/400', dataAiHint: 'static analysis', pricing: 'Freemium' },
            { name: 'Veracode', description: 'Automated application security.', url: 'https://www.veracode.com/', image: 'https://picsum.photos/seed/veracode-static/600/400', dataAiHint: 'appsec', pricing: 'Paid' },
            { name: 'Checkmarx', description: 'Application security testing.', url: 'https://checkmarx.com/', image: 'https://picsum.photos/seed/checkmarx-static/600/400', dataAiHint: 'sast', pricing: 'Paid' },
            { name: 'ESLint', description: 'Find and fix problems in your JavaScript code.', url: 'https://eslint.org/', image: 'https://picsum.photos/seed/eslint-static/600/400', dataAiHint: 'javascript linter', pricing: 'Free' },
        ]
    },
    {
        title: "DevOps AI Tools",
        icon: <CloudCog className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Harness', description: 'Modern software delivery platform.', url: 'https://harness.io/', image: 'https://picsum.photos/seed/harness-devops/600/400', dataAiHint: 'ci/cd', pricing: 'Freemium' },
            { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: 'https://picsum.photos/seed/datadog-devops/600/400', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
            { name: 'New Relic', description: 'Observability platform for all your telemetry data.', url: 'https://newrelic.com/', image: 'https://picsum.photos/seed/newrelic-devops/600/400', dataAiHint: 'observability', pricing: 'Freemium' },
            { name: 'CircleCI', description: 'Continuous integration and delivery platform.', url: 'https://circleci.com/', image: 'https://picsum.photos/seed/circleci-devops/600/400', dataAiHint: 'ci/cd platform', pricing: 'Freemium' },
            { name: 'Jenkins', description: 'Open source automation server.', url: 'https://www.jenkins.io/', image: 'https://picsum.photos/seed/jenkins-devops/600/400', dataAiHint: 'automation server', pricing: 'Free' },
        ]
    },
    {
        title: "CI/CD Automation AI",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GitHub Actions', description: 'Automate your workflow from idea to production.', url: 'https://github.com/features/actions', image: 'https://picsum.photos/seed/gh-actions/600/400', dataAiHint: 'workflow automation', pricing: 'Freemium' },
            { name: 'GitLab CI/CD', description: 'Automate the building, testing, and deployment of your applications.', url: 'https://docs.gitlab.com/ee/ci/', image: 'https://picsum.photos/seed/gitlab-ci/600/400', dataAiHint: 'devops platform', pricing: 'Freemium' },
            { name: 'Jenkins', description: 'Open source automation server.', url: 'https://www.jenkins.io/', image: 'https://picsum.photos/seed/jenkins-cicd/600/400', dataAiHint: 'automation server', pricing: 'Free' },
            { name: 'CircleCI', description: 'Continuous integration and delivery platform.', url: 'https://circleci.com/', image: 'https://picsum.photos/seed/circleci-cicd/600/400', dataAiHint: 'ci/cd platform', pricing: 'Freemium' },
            { name: 'Travis CI', description: 'A hosted continuous integration service.', url: 'https://www.travis-ci.com/', image: 'https://picsum.photos/seed/travis-ci/600/400', dataAiHint: 'continuous integration', pricing: 'Freemium' },
        ]
    },
     {
        title: "Cloud Optimization AI",
        icon: <CloudCog className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Spot by NetApp', description: 'Cloud automation and optimization.', url: 'https://spot.io/', image: 'https://picsum.photos/seed/spot-io/600/400', dataAiHint: 'cloud cost', pricing: 'Paid' },
            { name: 'Cloudability', description: 'The cloud financial management platform.', url: 'https://www.cloudability.com/', image: 'https://picsum.photos/seed/cloudability/600/400', dataAiHint: 'finops', pricing: 'Paid' },
            { name: 'CloudHealth', description: 'Cloud management platform.', url: 'https://www.cloudhealthtech.com/', image: 'https://picsum.photos/seed/cloudhealth/600/400', dataAiHint: 'vmware cloud', pricing: 'Paid' },
            { name: 'Densify', description: 'Cloud and container resource management.', url: 'https://www.densify.com/', image: 'https://picsum.photos/seed/densify/600/400', dataAiHint: 'resource management', pricing: 'Paid' },
            { name: 'ParkMyCloud', description: 'Automated cost savings for cloud.', url: 'https://www.parkmycloud.com/', image: 'https://picsum.photos/seed/parkmycloud/600/400', dataAiHint: 'cost savings', pricing: 'Paid' },
        ]
    },
    {
        title: "Infrastructure as Code (IaC) AI",
        icon: <Server className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Terraform', description: 'Build, change, and version infrastructure safely and efficiently.', url: 'https://www.terraform.io/', image: 'https://picsum.photos/seed/terraform/600/400', dataAiHint: 'iac tool', pricing: 'Free' },
            { name: 'Pulumi', description: 'Infrastructure as code in any language.', url: 'https://www.pulumi.com/', image: 'https://picsum.photos/seed/pulumi/600/400', dataAiHint: 'cloud engineering', pricing: 'Freemium' },
            { name: 'AWS CloudFormation', description: 'Model and provision all your cloud infrastructure resources.', url: 'https://aws.amazon.com/cloudformation/', image: 'https://picsum.photos/seed/cloudformation/600/400', dataAiHint: 'aws iac', pricing: 'Paid' },
            { name: 'Ansible', description: 'Simple, agentless IT automation.', url: 'https://www.ansible.com/', image: 'https://picsum.photos/seed/ansible/600/400', dataAiHint: 'it automation', pricing: 'Free' },
            { name: 'Chef', description: 'Automate infrastructure and application delivery.', url: 'https://www.chef.io/', image: 'https://picsum.photos/seed/chef/600/400', dataAiHint: 'devsecops', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Monitoring & Observability",
        icon: <LineChart className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Datadog', description: 'Monitoring and security platform for cloud applications.', url: 'https://www.datadoghq.com/', image: 'https://picsum.photos/seed/datadog-monitor/600/400', dataAiHint: 'cloud monitoring', pricing: 'Paid' },
            { name: 'New Relic', description: 'Observability platform for all your telemetry data.', url: 'https://newrelic.com/', image: 'https://picsum.photos/seed/newrelic-monitor/600/400', dataAiHint: 'observability', pricing: 'Freemium' },
            { name: 'Dynatrace', description: 'Software intelligence for the enterprise cloud.', url: 'https://www.dynatrace.com/', image: 'https://picsum.photos/seed/dynatrace/600/400', dataAiHint: 'software intelligence', pricing: 'Paid' },
            { name: 'Splunk', description: 'The Data-to-Everything Platform.', url: 'https://www.splunk.com/', image: 'https://picsum.photos/seed/splunk/600/400', dataAiHint: 'data platform', pricing: 'Freemium' },
            { name: 'Prometheus', description: 'An open-source monitoring system.', url: 'https://prometheus.io/', image: 'https://picsum.photos/seed/prometheus/600/400', dataAiHint: 'open source', pricing: 'Free' },
        ]
    },
    {
        title: "API Development AI",
        icon: <Link2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Postman', description: 'The collaboration platform for API development.', url: 'https://www.postman.com/', image: 'https://picsum.photos/seed/postman-dev/600/400', dataAiHint: 'api platform', pricing: 'Freemium' },
            { name: 'Insomnia', description: 'The open-source API design and testing platform.', url: 'https://insomnia.rest/', image: 'https://picsum.photos/seed/insomnia-dev/600/400', dataAiHint: 'api design', pricing: 'Freemium' },
            { name: 'Stoplight', description: 'The API design, development, and documentation platform.', url: 'https://stoplight.io/', image: 'https://picsum.photos/seed/stoplight-dev/600/400', dataAiHint: 'api documentation', pricing: 'Freemium' },
            { name: 'Swagger', description: 'API development tools for the OpenAPI Specification.', url: 'https://swagger.io/', image: 'https://picsum.photos/seed/swagger-dev/600/400', dataAiHint: 'openapi', pricing: 'Freemium' },
            { name: 'RapidAPI', description: 'The world\'s largest API Hub.', url: 'https://rapidapi.com/', image: 'https://picsum.photos/seed/rapidapi-dev/600/400', dataAiHint: 'api hub', pricing: 'Freemium' },
        ]
    },
    {
        title: "Backend Development AI",
        icon: <Server className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Node.js', description: 'A JavaScript runtime built on Chrome\'s V8 engine.', url: 'https://nodejs.org/', image: 'https://picsum.photos/seed/nodejs-backend/600/400', dataAiHint: 'javascript runtime', pricing: 'Free' },
            { name: 'Django', description: 'A high-level Python Web framework.', url: 'https://www.djangoproject.com/', image: 'https://picsum.photos/seed/django-backend/600/400', dataAiHint: 'python web', pricing: 'Free' },
            { name: 'Ruby on Rails', description: 'A web-application framework.', url: 'https://rubyonrails.org/', image: 'https://picsum.photos/seed/rails-backend/600/400', dataAiHint: 'ruby framework', pricing: 'Free' },
            { name: 'Spring Boot', description: 'Create stand-alone, production-grade Spring based Applications.', url: 'https://spring.io/projects/spring-boot', image: 'https://picsum.photos/seed/springboot-backend/600/400', dataAiHint: 'java framework', pricing: 'Free' },
            { name: 'Express.js', description: 'Fast, unopinionated, minimalist web framework for Node.js.', url: 'https://expressjs.com/', image: 'https://picsum.photos/seed/express-backend/600/400', dataAiHint: 'node framework', pricing: 'Free' },
        ]
    },
    {
        title: "Frontend Development AI",
        icon: <Code2 className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'React', description: 'A JavaScript library for building user interfaces.', url: 'https://reactjs.org/', image: 'https://picsum.photos/seed/react-frontend/600/400', dataAiHint: 'javascript library', pricing: 'Free' },
            { name: 'Vue.js', description: 'The Progressive JavaScript Framework.', url: 'https://vuejs.org/', image: 'https://picsum.photos/seed/vue-frontend/600/400', dataAiHint: 'javascript framework', pricing: 'Free' },
            { name: 'Angular', description: 'A platform for building mobile and desktop web applications.', url: 'https://angular.io/', image: 'https://picsum.photos/seed/angular-frontend/600/400', dataAiHint: 'web applications', pricing: 'Free' },
            { name: 'Svelte', description: 'Cybernetically enhanced web apps.', url: 'https://svelte.dev/', image: 'https://picsum.photos/seed/svelte-frontend/600/400', dataAiHint: 'web apps', pricing: 'Free' },
            { name: 'Next.js', description: 'The React Framework for Production.', url: 'https://nextjs.org/', image: 'https://picsum.photos/seed/nextjs-frontend/600/400', dataAiHint: 'react framework', pricing: 'Free' },
        ]
    },
    {
        title: "Full-Stack AI Development Tools",
        icon: <Layers className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Firebase', description: 'An app development platform.', url: 'https://firebase.google.com/', image: 'https://picsum.photos/seed/firebase-fullstack/600/400', dataAiHint: 'app platform', pricing: 'Freemium' },
            { name: 'Supabase', description: 'The open source Firebase alternative.', url: 'https://supabase.com/', image: 'https://picsum.photos/seed/supabase-fullstack/600/400', dataAiHint: 'open source', pricing: 'Freemium' },
            { name: 'Amplify', description: 'Build fullstack web and mobile apps.', url: 'https://aws.amazon.com/amplify/', image: 'https://picsum.photos/seed/amplify-fullstack/600/400', dataAiHint: 'aws apps', pricing: 'Freemium' },
            { name: 'Netlify', description: 'The fastest way to build the best sites.', url: 'https://www.netlify.com/', image: 'https://picsum.photos/seed/netlify-fullstack/600/400', dataAiHint: 'web hosting', pricing: 'Freemium' },
            { name: 'Vercel', description: 'Develop, Preview, Ship.', url: 'https://vercel.com/', image: 'https://picsum.photos/seed/vercel-fullstack/600/400', dataAiHint: 'frontend cloud', pricing: 'Freemium' },
        ]
    },
    {
        title: "Low-Code / No-Code AI Platforms",
        icon: <Puzzle className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Bubble', description: 'Build production-ready web apps without code.', url: 'https://bubble.io/', image: 'https://picsum.photos/seed/bubble-nocode/600/400', dataAiHint: 'web apps', pricing: 'Freemium' },
            { name: 'Webflow', description: 'Build responsive websites visually.', url: 'https://webflow.com/', image: 'https://picsum.photos/seed/webflow-nocode/600/400', dataAiHint: 'visual websites', pricing: 'Freemium' },
            { name: 'Adalo', description: 'Build custom web & mobile apps without code.', url: 'https://www.adalo.com/', image: 'https://picsum.photos/seed/adalo-nocode/600/400', dataAiHint: 'mobile apps', pricing: 'Freemium' },
            { name: 'Glide', description: 'Create apps from Google Sheets.', url: 'https://www.glideapps.com/', image: 'https://picsum.photos/seed/glide-nocode/600/400', dataAiHint: 'google sheets', pricing: 'Freemium' },
            { name: 'AppGyver', description: 'Professional no-code platform.', url: 'https://www.appgyver.com/', image: 'https://picsum.photos/seed/appgyver-nocode/600/400', dataAiHint: 'sap platform', pricing: 'Free' },
        ]
    },
     {
        title: "AI Database Management Tools",
        icon: <Database className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'DataGrip', description: 'A multi-engine database environment.', url: 'https://www.jetbrains.com/datagrip/', image: 'https://picsum.photos/seed/datagrip/600/400', dataAiHint: 'database ide', pricing: 'Paid' },
            { name: 'DBeaver', description: 'Free multi-platform database tool.', url: 'https://dbeaver.io/', image: 'https://picsum.photos/seed/dbeaver/600/400', dataAiHint: 'database tool', pricing: 'Free' },
            { name: 'TablePlus', description: 'Modern, native tool for database management.', url: 'https://tableplus.com/', image: 'https://picsum.photos/seed/tableplus/600/400', dataAiHint: 'database gui', pricing: 'Freemium' },
            { name: 'EverSQL', description: 'The #1 SQL query optimizer for developers.', url: 'https://www.eversql.com/', image: 'https://picsum.photos/seed/eversql/600/400', dataAiHint: 'sql optimizer', pricing: 'Freemium' },
            { name: 'OtterTune', description: 'Automated database tuning.', url: 'https://ottertune.com/', image: 'https://picsum.photos/seed/ottertune/600/400', dataAiHint: 'database tuning', pricing: 'Paid' },
        ]
    },
    {
        title: "Query Optimization AI",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'EverSQL', description: 'The #1 SQL query optimizer for developers.', url: 'https://www.eversql.com/', image: 'https://picsum.photos/seed/eversql-query/600/400', dataAiHint: 'sql optimizer', pricing: 'Freemium' },
            { name: 'Plan Explorer', description: 'Free query plan analysis tool.', url: 'https://www.sentryone.com/plan-explorer', image: 'https://picsum.photos/seed/planexplorer/600/400', dataAiHint: 'query plan', pricing: 'Free' },
            { name: 'Tosska SQL Tuning', description: 'SQL tuning for Oracle, SQL Server, MySQL, PostgreSQL.', url: 'https://www.tosska.com/', image: 'https://picsum.photos/seed/tosska/600/400', dataAiHint: 'sql tuning', pricing: 'Paid' },
            { name: 'Datasparc', description: 'Database tool for developers.', url: 'https://www.datasparc.com/', image: 'https://picsum.photos/seed/datasparc/600/400', dataAiHint: 'database tool', pricing: 'Paid' },
            { name: 'Neptune', description: 'The MLOps platform for experiment tracking.', url: 'https://neptune.ai/', image: 'https://picsum.photos/seed/neptune-ml/600/400', dataAiHint: 'mlops platform', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Data Engineering Tools",
        icon: <GanttChartSquare className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Databricks', description: 'The Data and AI Company.', url: 'https://www.databricks.com/', image: 'https://picsum.photos/seed/databricks-eng/600/400', dataAiHint: 'data ai', pricing: 'Paid' },
            { name: 'Snowflake', description: 'The Data Cloud.', url: 'https://www.snowflake.com/', image: 'https://picsum.photos/seed/snowflake-eng/600/400', dataAiHint: 'data cloud', pricing: 'Paid' },
            { name: 'dbt', description: 'The transformation layer in the modern data stack.', url: 'https://www.getdbt.com/', image: 'https://picsum.photos/seed/dbt-eng/600/400', dataAiHint: 'data stack', pricing: 'Freemium' },
            { name: 'Fivetran', description: 'Automated data integration.', url: 'https://www.fivetran.com/', image: 'https://picsum.photos/seed/fivetran-eng/600/400', dataAiHint: 'data integration', pricing: 'Paid' },
            { name: 'Airflow', description: 'A platform to programmatically author, schedule, and monitor workflows.', url: 'https://airflow.apache.org/', image: 'https://picsum.photos/seed/airflow-eng/600/400', dataAiHint: 'workflow platform', pricing: 'Free' },
        ]
    },
    {
        title: "AI Security & Vulnerability Scanners",
        icon: <Shield className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Snyk', description: 'Developer security platform.', url: 'https://snyk.io/', image: 'https://picsum.photos/seed/snyk-sec/600/400', dataAiHint: 'developer security', pricing: 'Freemium' },
            { name: 'Veracode', description: 'Automated application security.', url: 'https://www.veracode.com/', image: 'https://picsum.photos/seed/veracode-sec/600/400', dataAiHint: 'appsec', pricing: 'Paid' },
            { name: 'Checkmarx', description: 'Application security testing.', url: 'https://checkmarx.com/', image: 'https://picsum.photos/seed/checkmarx-sec/600/400', dataAiHint: 'sast', pricing: 'Paid' },
            { name: 'Trivy', description: 'A simple and comprehensive vulnerability scanner.', url: 'https://github.com/aquasecurity/trivy', image: 'https://picsum.photos/seed/trivy/600/400', dataAiHint: 'vulnerability scanner', pricing: 'Free' },
            { name: 'OWASP ZAP', description: 'The world’s most popular free web security tool.', url: 'https://www.zaproxy.org/', image: 'https://picsum.photos/seed/zap-sec/600/400', dataAiHint: 'web security', pricing: 'Free' },
        ]
    },
    {
        title: "AI Authentication & Access Control",
        icon: <Lock className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Auth0', description: 'Identity platform for developers.', url: 'https://auth0.com/', image: 'https://picsum.photos/seed/auth0-auth/600/400', dataAiHint: 'identity platform', pricing: 'Freemium' },
            { name: 'Okta', description: 'The World\'s #1 Identity Platform.', url: 'https://www.okta.com/', image: 'https://picsum.photos/seed/okta-auth/600/400', dataAiHint: 'identity cloud', pricing: 'Paid' },
            { name: 'Firebase Authentication', description: 'Simple, free, multi-platform sign-in.', url: 'https://firebase.google.com/docs/auth', image: 'https://picsum.photos/seed/firebase-auth/600/400', dataAiHint: 'firebase auth', pricing: 'Free' },
            { name: 'Clerk', description: 'The most complete user management platform.', url: 'https://clerk.com/', image: 'https://picsum.photos/seed/clerk-auth/600/400', dataAiHint: 'user management', pricing: 'Freemium' },
            { name: 'SuperTokens', description: 'Open source user authentication.', url: 'https://supertokens.com/', image: 'https://picsum.photos/seed/supertokens/600/400', dataAiHint: 'open source auth', pricing: 'Free' },
        ]
    },
     {
        title: "AI Documentation Generators",
        icon: <FileText className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Mintlify', description: 'Beautiful documentation that writes itself.', url: 'https://mintlify.com/', image: 'https://picsum.photos/seed/mintlify/600/400', dataAiHint: 'documentation', pricing: 'Freemium' },
            { name: 'ReadMe', description: 'Beautiful and interactive documentation.', url: 'https://readme.com/', image: 'https://picsum.photos/seed/readme-doc/600/400', dataAiHint: 'api docs', pricing: 'Freemium' },
            { name: 'Docusaurus', description: 'Build optimized websites quickly.', url: 'https://docusaurus.io/', image: 'https://picsum.photos/seed/docusaurus/600/400', dataAiHint: 'static site', pricing: 'Free' },
            { name: 'GitBook', description: 'Documentation, made easy.', url: 'https://www.gitbook.com/', image: 'https://picsum.photos/seed/gitbook-doc/600/400', dataAiHint: 'knowledge base', pricing: 'Freemium' },
            { name: 'Swimm', description: 'Documentation that’s coupled with your code.', url: 'https://swimm.io/', image: 'https://picsum.photos/seed/swimm/600/400', dataAiHint: 'code docs', pricing: 'Freemium' },
        ]
    },
    {
        title: "AI Code Search Tools",
        icon: <Search className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Sourcegraph', description: 'Understand and fix code faster.', url: 'https://about.sourcegraph.com/', image: 'https://picsum.photos/seed/sourcegraph/600/400', dataAiHint: 'code search', pricing: 'Freemium' },
            { name: 'Grep.app', description: 'Search across a half million git repositories.', url: 'https://grep.app/', image: 'https://picsum.photos/seed/grep-app/600/400', dataAiHint: 'git search', pricing: 'Free' },
            { name: 'CodeGrep', description: 'Semantic code search for teams.', url: 'https://www.codegrep.com/', image: 'https://picsum.photos/seed/codegrep/600/400', dataAiHint: 'semantic search', pricing: 'Paid' },
            { name: 'Phind', description: 'The AI search engine for developers.', url: 'https://www.phind.com/', image: 'https://picsum.photos/seed/phind-search/600/400', dataAiHint: 'developer search', pricing: 'Free' },
            { name: 'Blackbox AI', description: 'AI code generation, explanation, and search.', url: 'https://www.blackbox.ai/', image: 'https://picsum.photos/seed/blackbox-search/600/400', dataAiHint: 'code search', pricing: 'Freemium' },
        ]
    },
    {
        title: "Version Control AI",
        icon: <GitBranch className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'GitHub', description: 'The complete developer platform.', url: 'https://github.com/', image: 'https://picsum.photos/seed/github-vcs/600/400', dataAiHint: 'git hosting', pricing: 'Freemium' },
            { name: 'GitLab', description: 'The One DevOps Platform.', url: 'https://about.gitlab.com/', image: 'https://picsum.photos/seed/gitlab-vcs/600/400', dataAiHint: 'devops platform', pricing: 'Freemium' },
            { name: 'Bitbucket', description: 'Code &amp; CI/CD, built for teams using Jira.', url: 'https://bitbucket.org/', image: 'https://picsum.photos/seed/bitbucket-vcs/600/400', dataAiHint: 'atlassian git', pricing: 'Freemium' },
            { name: 'Graphite', description: 'Code review for fast-moving teams.', url: 'https://graphite.dev/', image: 'https://picsum.photos/seed/graphite/600/400', dataAiHint: 'stacking diffs', pricing: 'Freemium' },
            { name: 'Tower', description: 'The most powerful Git client for Mac and Windows.', url: 'https://www.git-tower.com/', image: 'https://picsum.photos/seed/tower-vcs/600/400', dataAiHint: 'git client', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Performance Optimization Tools",
        icon: <Zap className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Granulate', description: 'Autonomous, continuous optimization for cloud costs.', url: 'https://granulate.io/', image: 'https://picsum.photos/seed/granulate/600/400', dataAiHint: 'cloud cost', pricing: 'Paid' },
            { name: 'Datadog APM', description: 'End-to-end distributed tracing and performance monitoring.', url: 'https://www.datadoghq.com/product/apm/', image: 'https://picsum.photos/seed/datadog-apm/600/400', dataAiHint: 'apm', pricing: 'Paid' },
            { name: 'Lightrun', description: 'Add logs, metrics, and traces to live applications.', url: 'https://www.lightrun.com/', image: 'https://picsum.photos/seed/lightrun/600/400', dataAiHint: 'dynamic observability', pricing: 'Freemium' },
            { name: 'CodeLogic', description: 'Continuous software intelligence.', url: 'https://www.codelogic.com/', image: 'https://picsum.photos/seed/codelogic-perf/600/400', dataAiHint: 'software intelligence', pricing: 'Paid' },
            { name: 'Plandek', description: 'Agile delivery and engineering metrics.', url: 'https://plandek.com/', image: 'https://picsum.photos/seed/plandek/600/400', dataAiHint: 'delivery metrics', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Software Architecture Tools",
        icon: <Network className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Terrastruct', description: 'A diagramming tool for software architecture.', url: 'https://terrastruct.com/', image: 'https://picsum.photos/seed/terrastruct/600/400', dataAiHint: 'architecture diagram', pricing: 'Freemium' },
            { name: 'Structurizr', description: 'Modelling software architecture.', url: 'https://structurizr.com/', image: 'https://picsum.photos/seed/structurizr/600/400', dataAiHint: 'c4 model', pricing: 'Freemium' },
            { name: 'IcePanel', description: 'Collaborative C4 modelling for agile teams.', url: 'https://icepanel.io/', image: 'https://picsum.photos/seed/icepanel/600/400', dataAiHint: 'c4 agile', pricing: 'Freemium' },
            { name: 'Ardoq', description: 'Enterprise Architecture tool for today\'s digital enterprise.', url: 'https://www.ardoq.com/', image: 'https://picsum.photos/seed/ardoq/600/400', dataAiHint: 'enterprise architecture', pricing: 'Paid' },
            { name: 'Lucidscale', description: 'Cloud visualization solution.', url: 'https://www.lucidchart.com/pages/solutions/lucidscale', image: 'https://picsum.photos/seed/lucidscale/600/400', dataAiHint: 'cloud diagram', pricing: 'Paid' },
        ]
    }
]

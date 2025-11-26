import type { AITool, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { CategoryIcons } from '@/components/icons';

export const categories: Category[] = [
  'video',
  'photo',
  'text',
  'voice',
  'editing',
  'productivity',
  'business',
  'coding',
  'other',
];

export const categoryDetails: Record<
  Category,
  { name: string; icon: JSX.Element }
> = {
  video: { name: 'Video', icon: CategoryIcons.video },
  photo: { name: 'Photo', icon: CategoryIcons.photo },
  text: { name: 'Text', icon: CategoryIcons.text },
  voice: { name: 'Voice', icon: CategoryIcons.voice },
  editing: { name: 'Editing', icon: CategoryIcons.editing },
  productivity: { name: 'Productivity', icon: CategoryIcons.productivity },
  business: { name: 'Business', icon: CategoryIcons.business },
  coding: { name: 'Coding', icon: CategoryIcons.coding },
  other: { name: 'Other', icon: CategoryIcons.other },
};

export const tools: AITool[] = [
  {
    id: '1',
    name: 'VidGen AI',
    description: 'Create stunning videos from text prompts in minutes. Perfect for marketers and content creators.',
    link: 'https://example.com/vidgen',
    category: 'video',
    image: PlaceHolderImages.find((img) => img.id === 'vidgen-ai')!,
    reviews: [
      { id: '1', rating: 5, comment: 'Incredible tool!', author: 'Jane D.' },
      { id: '2', rating: 4, comment: 'Very useful for my projects.', author: 'John S.' },
    ],
  },
  {
    id: '2',
    name: 'Pixel Perfect',
    description: 'Enhance and upscale your images with AI. Remove noise, improve clarity, and restore old photos.',
    link: 'https://example.com/pixelperfect',
    category: 'photo',
    image: PlaceHolderImages.find((img) => img.id === 'pixel-perfect')!,
    reviews: [{ id: '1', rating: 4.5, comment: 'My photos have never looked better.', author: 'Alex R.' }],
  },
  {
    id: '3',
    name: 'Scribe AI',
    description: 'An advanced AI writing assistant that helps you write faster and better. From emails to novels.',
    link: 'https://example.com/scribeai',
    category: 'text',
    image: PlaceHolderImages.find((img) => img.id === 'scribe-ai')!,
    reviews: [{ id: '1', rating: 4, comment: 'Great for overcoming writer\'s block.', author: 'Sam T.' }],
  },
  {
    id: '4',
    name: 'EchoVoice',
    description: 'Generate realistic voiceovers and clone your own voice with our cutting-edge voice synthesis AI.',
    link: 'https://example.com/echovoice',
    category: 'voice',
    image: PlaceHolderImages.find((img) => img.id === 'echo-voice')!,
    reviews: [{ id: '1', rating: 5, comment: 'The voice cloning is unbelievably realistic.', author: 'Maria G.' }],
  },
  {
    id: '5',
    name: 'EditFlow',
    description: 'A smart video editing tool that automates cuts, color grading, and transitions.',
    link: 'https://example.com/editflow',
    category: 'editing',
    image: PlaceHolderImages.find((img) => img.id === 'edit-flow')!,
    reviews: [{ id: '1', rating: 4, comment: 'Saves me hours of editing time.', author: 'Chris P.' }],
  },
  {
    id: '6',
    name: 'TaskMaster',
    description: 'Organize your life and work with an AI that prioritizes tasks and manages your schedule.',
    link: 'https://example.com/taskmaster',
    category: 'productivity',
    image: PlaceHolderImages.find((img) => img.id === 'task-master')!,
    reviews: [{ id: '1', rating: 5, comment: 'I\'m so much more organized now.', author: 'Emily W.' }],
  },
  {
    id: '7',
    name: 'BizWizard',
    description: 'AI-powered business intelligence platform for data analysis and market trend prediction.',
    link: 'https://example.com/bizwizard',
    category: 'business',
    image: PlaceHolderImages.find((img) => img.id === 'biz-wizard')!,
    reviews: [{ id: '1', rating: 4.5, comment: 'Provides invaluable insights for our strategy.', author: 'David L.' }],
  },
  {
    id: '8',
    name: 'DevDuo',
    description: 'Your AI pair programmer. Get code suggestions, bug fixes, and learn new languages faster.',
    link: 'https://example.com/devduo',
    category: 'coding',
    image: PlaceHolderImages.find((img) => img.id === 'dev-duo')!,
    reviews: [{ id: '1', rating: 5, comment: 'A game-changer for my development workflow.', author: 'Kevin C.' }],
  },
  {
    id: '9',
    name: 'Cut Pro AI',
    description: 'AI-powered video editing software that suggests creative cuts and effects.',
    link: 'https://example.com/cutpro',
    category: 'video',
    image: PlaceHolderImages.find((img) => img.id === 'cut-pro')!,
    reviews: [{ id: '1', rating: 4, comment: 'Really speeds up the rough cut process.', author: 'Tina F.' }],
  },
];

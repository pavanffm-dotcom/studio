import type { ImagePlaceholder } from './placeholder-images';

export type Category =
  | 'video'
  | 'photo'
  | 'text'
  | 'voice'
  | 'editing'
  | 'productivity'
  | 'business'
  | 'coding'
  | 'other';

export interface Review {
  id: string;
  rating: number; // 1-5
  comment: string;
  author: string;
}

export interface AITool {
  id: string;
  name: string;
  description: string;
  link: string;
  category: Category;
  image: ImagePlaceholder;
  reviews: Review[];
}

export const CATEGORIES: Category[] = [
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

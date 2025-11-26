'use server';

/**
 * @fileOverview AI tool category suggestion flow.
 *
 * This file exports:
 * - `suggestAiCategory`: An asynchronous function that suggests the most appropriate category for an AI tool based on its description.
 * - `SuggestAiCategoryInput`: The input type for the `suggestAiCategory` function.
 * - `SuggestAiCategoryOutput`: The output type for the `suggestAiCategory` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestAiCategoryInputSchema = z.object({
  description: z
    .string()
    .describe('The detailed description of the AI tool.'),
});
export type SuggestAiCategoryInput = z.infer<typeof SuggestAiCategoryInputSchema>;

const SuggestAiCategoryOutputSchema = z.object({
  category: z
    .string()
    .describe(
      'The suggested category for the AI tool. The category must be one of the categories in the CATEGORIES constant. If the tool does not fit into any of these categories, return `other`'
    ),
});
export type SuggestAiCategoryOutput = z.infer<typeof SuggestAiCategoryOutputSchema>;

const CATEGORIES = [
  'video',
  'photo',
  'text',
  'voice',
  'editing',
  'productivity',
  'business',
  'coding',
  'other',
] as const;

export async function suggestAiCategory(input: SuggestAiCategoryInput): Promise<SuggestAiCategoryOutput> {
  return suggestAiCategoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAiCategoryPrompt',
  input: {schema: SuggestAiCategoryInputSchema},
  output: {schema: SuggestAiCategoryOutputSchema},
  prompt: `You are an expert AI tool categorizer. Given the description of an AI tool, you will determine the most appropriate category for it. The category must be one of the following: video, photo, text, voice, editing, productivity, business, coding, other.

Description: {{{description}}}

Category:`, // Ensure proper Handlebars syntax
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const suggestAiCategoryFlow = ai.defineFlow(
  {
    name: 'suggestAiCategoryFlow',
    inputSchema: SuggestAiCategoryInputSchema,
    outputSchema: SuggestAiCategoryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    if (!CATEGORIES.includes(output?.category as any)) {
      output!.category = 'other';
    }
    return output!;
  }
);

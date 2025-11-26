'use server';
/**
 * @fileOverview Ek AI flow jo user ke query ke basis par AI tool suggest karta hai.
 *
 * - suggestAiTool - User ke text input ke liye ek AI tool suggest karne wala function.
 * - SuggestAiToolInput - suggestAiTool function ke liye input type.
 * - SuggestAiToolOutput - suggestAiTool function ke liye return type.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const SuggestAiToolInputSchema = z.object({
  query: z.string().describe('The user\'s request for an AI tool.'),
});
export type SuggestAiToolInput = z.infer<typeof SuggestAiToolInputSchema>;

const SuggestAiToolOutputSchema = z.object({
  toolName: z.string().describe('The name of the suggested AI tool.'),
  url: z.string().url().describe('The official URL of the suggested AI tool.'),
  reason: z.string().describe('A brief reason why this tool was suggested.'),
});
export type SuggestAiToolOutput = z.infer<typeof SuggestAiToolOutputSchema>;

export async function suggestAiTool(
  input: SuggestAiToolInput
): Promise<SuggestAiToolOutput> {
  return suggestAiToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestAiToolPrompt',
  input: { schema: SuggestAiToolInputSchema },
  output: { schema: SuggestAiToolOutputSchema },
  prompt: `You are an expert AI tool recommender. Based on the user's query, find the single best and most relevant AI tool.

  User query: {{{query}}}
  
  Provide the official name of the tool, its official URL, and a brief, friendly reason for the recommendation. Ensure the URL is the correct, official homepage for the tool.`,
});

const suggestAiToolFlow = ai.defineFlow(
  {
    name: 'suggestAiToolFlow',
    inputSchema: SuggestAiToolInputSchema,
    outputSchema: SuggestAiToolOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);

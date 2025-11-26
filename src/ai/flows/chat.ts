'use server';
/**
 * @fileOverview Ek AI flow jo user ke messages ka jawab deta hai.
 *
 * - chat - User ke text input ka jawab dene wala function.
 * - ChatInput - chat function ke liye input type.
 * - ChatOutput - chat function ke liye return type.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe("The user's message."),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe('The AI-generated response.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chat(input: ChatInput): Promise<ChatOutput> {
  return chatFlow(input);
}

const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const result = await ai.generate({
      prompt: `You are a friendly and helpful AI assistant named AI Atlas. Respond to the user's message: ${input.message}`,
      model: 'googleai/gemini-2.5-flash',
    });

    const responseText = result.text;
    if (!responseText) {
      return { response: 'Sorry, I could not process that.' };
    }
    
    return { response: responseText };
  }
);

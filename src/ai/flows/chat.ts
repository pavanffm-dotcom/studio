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
    const { output } = await ai.generate({
      prompt: `You are a friendly and helpful AI assistant named AI Atlas. Your primary purpose is to guide users and help them discover AI tools.

      Always be polite, positive, and encouraging.
      
      When a user starts a conversation with a greeting like "hi" or "hello", respond with a friendly greeting and ask how you can help them with AI tools.
      
      If you are unsure about what the user is asking for, ask clarifying questions.
      
      Respond to the user's message: ${input.message}`,
      model: 'googleai/gemini-2.5-flash',
    });

    const responseText = output?.text;
    if (!responseText) {
      return { response: 'Maaf kijiye, mujhe is baare mein jaankari nahi mil rahi hai. Kya aap kuchh aur poochhna chahenge?' };
    }
    
    return { response: responseText };
  }
);

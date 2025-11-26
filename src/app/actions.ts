'use server';

import { suggestAiCategory } from '@/ai/flows/suggest-ai-category';
import type { SuggestAiCategoryInput, SuggestAiCategoryOutput } from '@/ai/flows/suggest-ai-category';

export async function getCategorySuggestionAction(
  input: SuggestAiCategoryInput
): Promise<SuggestAiCategoryOutput | { error: string }> {
  if (!input.description || input.description.length < 10) {
    return { error: 'Please provide a description of at least 10 characters.' };
  }
  
  try {
    const result = await suggestAiCategory(input);
    if (result.category) {
      return { category: result.category };
    }
    return { error: 'Could not suggest a category.' };
  } catch (e) {
    console.error('Error getting category suggestion:', e);
    return { error: 'An unexpected error occurred while getting a suggestion.' };
  }
}

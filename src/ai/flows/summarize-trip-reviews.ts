'use server';

/**
 * @fileOverview Summarizes trip reviews to provide users with a quick understanding of traveler experiences.
 *
 * - summarizeTripReviews - A function that summarizes trip reviews.
 * - SummarizeTripReviewsInput - The input type for the summarizeTripReviews function.
 * - SummarizeTripReviewsOutput - The return type for the summarizeTripReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTripReviewsInputSchema = z.object({
  reviews: z
    .string()
    .describe('A string containing multiple reviews for a specific trip.'),
});

export type SummarizeTripReviewsInput = z.infer<typeof SummarizeTripReviewsInputSchema>;

const SummarizeTripReviewsOutputSchema = z.object({
  summary: z.string().describe('A summary of the reviews, highlighting common themes.'),
});

export type SummarizeTripReviewsOutput = z.infer<typeof SummarizeTripReviewsOutputSchema>;

export async function summarizeTripReviews(input: SummarizeTripReviewsInput): Promise<SummarizeTripReviewsOutput> {
  return summarizeTripReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTripReviewsPrompt',
  input: {schema: SummarizeTripReviewsInputSchema},
  output: {schema: SummarizeTripReviewsOutputSchema},
  prompt: `You are an AI assistant designed to provide summaries of trip reviews.

  Given the following reviews for a trip, create a concise summary that highlights the common themes, both positive and negative, that appear in the reviews. Focus on aspects that would be most useful for potential travelers.
  \n  Reviews: {{{reviews}}}
  \n  Summary: `,
});

const summarizeTripReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeTripReviewsFlow',
    inputSchema: SummarizeTripReviewsInputSchema,
    outputSchema: SummarizeTripReviewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

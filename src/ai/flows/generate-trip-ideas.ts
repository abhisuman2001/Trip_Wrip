'use server';

/**
 * @fileOverview An AI agent for generating personalized trip ideas based on user preferences.
 *
 * - generateTripIdeas - A function that takes user preferences and returns personalized trip ideas.
 * - GenerateTripIdeasInput - The input type for the generateTripIdeas function.
 * - GenerateTripIdeasOutput - The return type for the generateTripIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTripIdeasInputSchema = z.object({
  activityType: z.string().describe('The type of activity the user is interested in (e.g., hiking, beach vacation, city exploration).'),
  region: z.string().describe('The region the user wants to travel to (e.g., Europe, Asia, South America).'),
  budget: z.string().describe('The user budget for the trip (e.g., low, medium, high).'),
  duration: z.string().describe('The desired duration of the trip (e.g., 3 days, 1 week, 2 weeks).'),
});
export type GenerateTripIdeasInput = z.infer<typeof GenerateTripIdeasInputSchema>;

const GenerateTripIdeasOutputSchema = z.object({
  destinations: z.array(
    z.object({
      name: z.string().describe('The name of the destination.'),
      description: z.string().describe('A brief description of the destination.'),
      activities: z.array(z.string()).describe('A list of activities to do in the destination.'),
      estimatedPrice: z.string().describe('The estimated price for the trip to this destination.'),
    })
  ).describe('A list of destinations that match the user preferences.'),
});
export type GenerateTripIdeasOutput = z.infer<typeof GenerateTripIdeasOutputSchema>;

export async function generateTripIdeas(input: GenerateTripIdeasInput): Promise<GenerateTripIdeasOutput> {
  return generateTripIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTripIdeasPrompt',
  input: {schema: GenerateTripIdeasInputSchema},
  output: {schema: GenerateTripIdeasOutputSchema},
  prompt: `You are a travel expert who provides personalized trip ideas based on user preferences.

  Based on the following preferences, suggest a few destinations and activities:

  Activity Type: {{{activityType}}}
  Region: {{{region}}}
  Budget: {{{budget}}}
  Duration: {{{duration}}}

  Provide a list of destinations with a brief description, a list of activities, and an estimated price.
  `,
});

const generateTripIdeasFlow = ai.defineFlow(
  {
    name: 'generateTripIdeasFlow',
    inputSchema: GenerateTripIdeasInputSchema,
    outputSchema: GenerateTripIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

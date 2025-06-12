'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateTripIdeas, type GenerateTripIdeasInput, type GenerateTripIdeasOutput } from '@/ai/flows/generate-trip-ideas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2, MapPin, ListChecks, DollarSignIcon } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import {getActivityTypes, getRegions, getBudgets, getDurations} from '@/lib/data';

const formSchema = z.object({
  activityType: z.string().min(1, 'Activity type is required'),
  region: z.string().min(1, 'Region is required'),
  budget: z.string().min(1, 'Budget is required'),
  duration: z.string().min(1, 'Duration is required'),
});

type FormData = GenerateTripIdeasInput;

export default function AiTripGuider() {
  const [isLoading, setIsLoading] = useState(false);
  const [tripIdeas, setTripIdeas] = useState<GenerateTripIdeasOutput['destinations'] | null>(null);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      activityType: '',
      region: '',
      budget: '',
      duration: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setTripIdeas(null);
    try {
      const result = await generateTripIdeas(data);
      setTripIdeas(result.destinations);
      if (result.destinations.length === 0) {
        toast({
          title: "No trips found",
          description: "Try adjusting your preferences for more results.",
          variant: "default",
        });
      }
    } catch (error) {
      console.error('Error generating trip ideas:', error);
      toast({
        title: "Error",
        description: "Failed to generate trip ideas. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const activityTypes = getActivityTypes();
  const regions = getRegions();
  const budgets = getBudgets();
  const durations = getDurations();


  return (
    <div className="space-y-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 bg-card rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="activityType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an activity type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {activityTypes.map(type => <SelectItem key={type} value={type}>{type}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Region</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a region" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {regions.map(region => <SelectItem key={region} value={region}>{region}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Budget</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your budget" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {budgets.map(budget => <SelectItem key={budget} value={budget}>{budget}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Trip Duration</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trip duration" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {durations.map(duration => <SelectItem key={duration} value={duration}>{duration}</SelectItem>)}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Generate Trip Ideas
          </Button>
        </form>
      </Form>

      {isLoading && (
        <div className="text-center">
          <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
          <p className="mt-2 font-body">Finding your next adventure...</p>
        </div>
      )}

      {tripIdeas && tripIdeas.length > 0 && (
        <div className="mt-8">
          <h3 className="font-headline text-2xl font-semibold mb-6 text-center">Your Personalized Trip Ideas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tripIdeas.map((idea, index) => (
              <Card key={index} className="flex flex-col shadow-lg rounded-lg overflow-hidden">
                <CardHeader>
                  <CardTitle className="font-headline text-xl flex items-center gap-2">
                    <MapPin className="text-primary" size={20}/> {idea.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  <p className="font-body text-sm text-muted-foreground">{idea.description}</p>
                  <div>
                    <h4 className="font-body font-semibold text-sm mb-1 flex items-center gap-1"><ListChecks className="text-primary" size={16}/> Activities:</h4>
                    <ul className="list-disc list-inside pl-1 space-y-1">
                      {idea.activities.map((activity, i) => (
                        <li key={i} className="font-body text-xs text-foreground/80">{activity}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="bg-secondary/30 p-4">
                  <p className="font-body text-sm font-semibold flex items-center gap-1">
                    <DollarSignIcon className="text-green-600" size={16}/> Estimated Price: {idea.estimatedPrice}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
      {tripIdeas && tripIdeas.length === 0 && !isLoading && (
         <p className="text-center font-body text-muted-foreground mt-8">No specific trip ideas found for your criteria. Try broadening your search!</p>
      )}
    </div>
  );
}

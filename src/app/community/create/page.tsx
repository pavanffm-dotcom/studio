
'use client';

import React, { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ClubHeader } from '@/components/club-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ArrowRight, Bot, Brush, Check, ChevronsUpDown, Tv, Users } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useUser } from '@/firebase';

const categories = ["AI", "Design", "Coding", "Video", "Writing", "Productivity", "Gaming", "Tools"] as const;

const clubFormSchema = z.object({
  clubName: z.string().min(3, { message: "Club name must be at least 3 characters." }),
  clubDescription: z.string().max(500, { message: "Description cannot exceed 500 characters." }),
  category: z.enum(categories),
  visibility: z.enum(["public", "private", "unlisted"]).default("public"),
  allowMembersToAddTools: z.boolean().default(true),
  tags: z.array(z.string()).optional(),
});

type ClubFormValues = z.infer<typeof clubFormSchema>;

const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { name: "Details", icon: Users },
    { name: "Tools", icon: Bot },
    { name: "Chat", icon: Tv },
    { name: "Design", icon: Brush },
  ];

  return (
    <div className="flex justify-between items-center mb-8">
      {steps.map((step, index) => (
        <React.Fragment key={step.name}>
          <div className="flex flex-col items-center">
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300", 
              index === currentStep ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
            )}>
              <step.icon className="w-6 h-6" />
            </div>
            <p className={cn("mt-2 text-sm font-medium", index === currentStep ? 'text-primary' : 'text-muted-foreground')}>{step.name}</p>
          </div>
          {index < steps.length - 1 && <div className="flex-1 h-0.5 bg-border" />}
        </React.Fragment>
      ))}
    </div>
  );
}

function Step1_BasicDetails() {
  const form = useFormContext<ClubFormValues>();

  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="clubName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Club Name</FormLabel>
            <FormControl>
              <Input placeholder="e.g., AI Tools for Students" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="clubDescription"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Club Description</FormLabel>
            <FormControl>
              <Textarea placeholder="What is your club about?" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>Category</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between",
                      !field.value && "text-muted-foreground"
                    )}
                  >
                    {field.value
                      ? categories.find(
                          (category) => category === field.value
                        )
                      : "Select category"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                <Command>
                  <CommandInput placeholder="Search category..." />
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    <CommandList>
                      {categories.map((category) => (
                        <CommandItem
                          value={category}
                          key={category}
                          onSelect={() => {
                            form.setValue("category", category)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              category === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {category}
                        </CommandItem>
                      ))}
                    </CommandList>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="visibility"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Visibility</FormLabel>
             <FormControl>
                <div className="grid grid-cols-3 gap-2">
                    {(["public", "private", "unlisted"] as const).map((v) => (
                        <Button
                            key={v}
                            type="button"
                            variant={field.value === v ? "default" : "outline"}
                            onClick={() => form.setValue('visibility', v)}
                            className="capitalize"
                        >
                            {v}
                        </Button>
                    ))}
                </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="allowMembersToAddTools"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">
                Allow Members to Add Tools
              </FormLabel>
              <FormDescription>
                Can members suggest new tools for the club?
              </FormDescription>
            </div>
            <FormControl>
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}

function Step2_ToolsBuilder() {
    return <p className="text-center text-muted-foreground p-8">Step 2: Tool List Builder UI will be built here.</p>
}
function Step3_ChatSettings() {
    return <p className="text-center text-muted-foreground p-8">Step 3: Community Chat Settings UI will be built here.</p>
}
function Step4_DesignAndPublish() {
    return <p className="text-center text-muted-foreground p-8">Step 4: Design & Publish UI will be built here.</p>
}

export default function CreateClubPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const { user } = useUser();

    const methods = useForm<ClubFormValues>({
        resolver: zodResolver(clubFormSchema),
        defaultValues: {
            clubName: '',
            clubDescription: '',
            visibility: 'public',
            allowMembersToAddTools: true,
            tags: [],
        },
    });

    const onSubmit = (data: ClubFormValues) => {
        console.log('Submitting club data:', data);
        // Here we'll eventually save to Firestore
    };
    
    const nextStep = () => setCurrentStep(prev => (prev < 3 ? prev + 1 : prev));
    const prevStep = () => setCurrentStep(prev => (prev > 0 ? prev - 1 : prev));

    const steps = [
        <Step1_BasicDetails key="step1" />,
        <Step2_ToolsBuilder key="step2" />,
        <Step3_ChatSettings key="step3" />,
        <Step4_DesignAndPublish key="step4" />,
    ];

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
            </div>
            <div className="relative z-10 w-full max-w-2xl p-6">
                <ClubHeader title="Create a New Club" showBackButton />
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <Card className="mt-6 bg-card/80 backdrop-blur-sm soft-shadow">
                            <CardHeader>
                                <StepIndicator currentStep={currentStep} />
                            </CardHeader>
                            <Separator />
                            <CardContent className="p-6">
                                {steps[currentStep]}
                            </CardContent>
                        </Card>
                        <div className="flex justify-between mt-8">
                            <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 0}>
                                <ArrowLeft className="mr-2" /> Previous
                            </Button>
                            {currentStep < 3 ? (
                                <Button type="button" onClick={nextStep}>
                                    Next Step <ArrowRight className="ml-2" />
                                </Button>
                            ) : (
                                <Button type="submit">
                                    Publish Club
                                </Button>
                            )}
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}

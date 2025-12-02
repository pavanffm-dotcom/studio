
'use client';

import React, { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ClubHeader } from '@/components/club-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, ArrowRight, Bot, Check, ChevronsUpDown, Users, Plus, Search } from 'lucide-react';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { useUser, useFirestore } from '@/firebase';
import Image from 'next/image';
import { ScrollArea } from '@/components/ui/scroll-area';
import { allTools, Tool } from '@/lib/tools-data';
import { addDoc, collection, serverTimestamp, doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';


const categories = [
    "AI Art & Design", 
    "Writing & Content", 
    "Development & Code", 
    "Productivity & Tools",
    "Video & Audio",
    "Gaming & Fun",
    "Business & Startups",
    "Marketing & Sales",
    "Education & Learning",
    "Health & Fitness",
    "Just for Fun"
] as const;

const clubFormSchema = z.object({
  clubName: z.string().min(3, { message: "Club name must be at least 3 characters." }),
  clubDescription: z.string().max(500, { message: "Description cannot exceed 500 characters." }),
  category: z.string({
    required_error: "Please select a category.",
  }),
  visibility: z.enum(["public", "private", "unlisted"]).default("public"),
  allowMembersToAddTools: z.boolean().default(true),
  tags: z.array(z.string()).optional(),
  tools: z.array(z.string()).default([]),
});

type ClubFormValues = z.infer<typeof clubFormSchema>;

const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  const steps = [
    { name: "Details", icon: Users },
    { name: "Tools", icon: Bot },
  ];

  return (
    <div className="flex justify-between items-center mb-8 max-w-xs mx-auto">
      {steps.map((step, index) => (
        <React.Fragment key={step.name}>
          <div className="flex flex-col items-center">
            <div className={cn("w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300", 
              index <= currentStep ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
            )}>
              <step.icon className="w-6 h-6" />
            </div>
            <p className={cn("mt-2 text-sm font-medium", index <= currentStep ? 'text-primary' : 'text-muted-foreground')}>{step.name}</p>
          </div>
          {index < steps.length - 1 && <div className="flex-1 h-0.5 bg-border mx-4" />}
        </React.Fragment>
      ))}
    </div>
  );
}

function Step1_BasicDetails() {
  const form = useFormContext<ClubFormValues>();
  const [open, setOpen] = useState(false)

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
            <Popover open={open} onOpenChange={setOpen}>
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
                  <CommandList>
                    <CommandEmpty>No category found.</CommandEmpty>
                    <CommandGroup>
                        {categories.map((category) => (
                          <CommandItem
                            value={category}
                            key={category}
                            onSelect={() => {
                              form.setValue("category", category)
                              setOpen(false)
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
                    </CommandGroup>
                  </CommandList>
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
    const form = useFormContext<ClubFormValues>();
    const [searchTerm, setSearchTerm] = useState('');

    const selectedTools = new Set(form.watch('tools'));

    const handleToggleTool = (toolName: string) => {
        const currentTools = new Set(form.getValues('tools'));
        if (currentTools.has(toolName)) {
            currentTools.delete(toolName);
        } else {
            currentTools.add(toolName);
        }
        form.setValue('tools', Array.from(currentTools));
    };

    const filteredTools = allTools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-4">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                    placeholder="Search for a tool to add..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <p className="text-sm text-muted-foreground">{selectedTools.size} tool(s) selected.</p>
            <ScrollArea className="h-72 rounded-md border p-2">
                <div className="space-y-2">
                    {filteredTools.map((tool) => {
                        const isSelected = selectedTools.has(tool.name);
                        return (
                            <div key={tool.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-secondary">
                                <div className="flex items-center gap-3">
                                    <Image src={tool.image} alt={tool.name} width={40} height={40} className="rounded-md" data-ai-hint={tool.dataAiHint}/>
                                    <div>
                                        <p className="font-semibold">{tool.name}</p>
                                        <p className="text-xs text-muted-foreground">{tool.category}</p>
                                    </div>
                                </div>
                                <Button
                                    variant={isSelected ? 'secondary' : 'outline'}
                                    size="sm"
                                    onClick={() => handleToggleTool(tool.name)}
                                >
                                    {isSelected ? <Check className="w-4 h-4 mr-2" /> : <Plus className="w-4 h-4 mr-2" />}
                                    {isSelected ? 'Added' : 'Add'}
                                </Button>
                            </div>
                        )
                    })}
                </div>
            </ScrollArea>
        </div>
    );
}

export default function CreateClubPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const { user } = useUser();
    const firestore = useFirestore();
    const router = useRouter();
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const methods = useForm<ClubFormValues>({
        resolver: zodResolver(clubFormSchema),
        defaultValues: {
            clubName: '',
            clubDescription: '',
            visibility: 'public',
            allowMembersToAddTools: true,
            tags: [],
            tools: [],
        },
    });

    const onSubmit = async (data: ClubFormValues) => {
        if (!user || !firestore) {
          toast({
            variant: 'destructive',
            title: 'You must be logged in to create a club.',
          });
          return;
        }
    
        setIsSubmitting(true);
    
        try {
          // 1. Create the main group document
          const groupRef = await addDoc(collection(firestore, 'groups'), {
            name: data.clubName,
            description: data.clubDescription,
            category: data.category,
            isPublic: data.visibility === 'public',
            ownerId: user.uid,
            createdAt: serverTimestamp(),
            memberCount: 1,
            avatar: `https://picsum.photos/seed/${data.clubName.replace(/\s/g, '-')}/40/40`
          });
    
          const groupId = groupRef.id;
    
          // 2. Add the creator as the owner in the members subcollection
          const memberRef = doc(firestore, 'groups', groupId, 'members', user.uid);
          await setDoc(memberRef, {
            userId: user.uid,
            joinedAt: serverTimestamp(),
            role: 'owner',
          });
    
          // 3. Add the selected tools to the tools subcollection
          const toolsCollectionRef = collection(firestore, 'groups', groupId, 'tools');
          for (const toolName of data.tools) {
            const toolData = allTools.find(t => t.name === toolName);
            if (toolData) {
              await addDoc(toolsCollectionRef, {
                toolName: toolData.name,
                toolUrl: toolData.url,
                toolDescription: toolData.description,
                addedBy: user.uid,
                addedAt: serverTimestamp(),
                upvotes: 0,
              });
            }
          }
    
          toast({
            title: 'Club Created!',
            description: `Your club "${data.clubName}" is now live.`,
          });
    
          router.push(`/community/${groupId}`);
    
        } catch (error) {
          console.error("Error creating club:", error);
          toast({
            variant: 'destructive',
            title: 'Error creating club',
            description: 'Something went wrong. Please try again.',
          });
        } finally {
          setIsSubmitting(false);
        }
      };
    
    const nextStep = () => setCurrentStep(prev => (prev < 1 ? prev + 1 : prev));
    const prevStep = () => setCurrentStep(prev => (prev > 0 ? prev - 1 : prev));

    const steps = [
        <Step1_BasicDetails key="step1" />,
        <Step2_ToolsBuilder key="step2" />,
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
                            {currentStep < 1 ? (
                                <Button type="button" onClick={nextStep}>
                                    Next Step <ArrowRight className="ml-2" />
                                </Button>
                            ) : (
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Publishing...' : 'Publish Club'}
                                </Button>
                            )}
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}

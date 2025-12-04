
'use client';

import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ClubHeader } from '@/components/club-header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useUser, useFirestore } from '@/firebase';
import { addDoc, collection, serverTimestamp, doc, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';


const clubFormSchema = z.object({
  clubName: z.string().min(3, { message: "Club name must be at least 3 characters." }),
  clubDescription: z.string().max(500, { message: "Description cannot exceed 500 characters." }),
  visibility: z.enum(["public", "private"]).default("public"),
  allowMembersToAddTools: z.boolean().default(true),
});

type ClubFormValues = z.infer<typeof clubFormSchema>;

export default function CreateClubPage() {
    const { user, firebaseApp } = useUser();
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
        },
    });

    const onSubmit = async (data: ClubFormValues) => {
        if (!user || !firestore || !firebaseApp) {
          toast({
            variant: 'destructive',
            title: 'You must be logged in to create a club.',
          });
          return;
        }
    
        setIsSubmitting(true);
    
        try {
          const avatarUrl = `https://picsum.photos/seed/${data.clubName.replace(/\s/g, '-')}/400/400`;

          const groupData = {
            name: data.clubName,
            description: data.clubDescription,
            isPublic: data.visibility === 'public',
            ownerId: user.uid,
            createdAt: serverTimestamp(),
            memberCount: 1,
            avatar: avatarUrl,
          };

          const groupRef = await addDoc(collection(firestore, 'groups'), groupData);
          const groupId = groupRef.id;
    
          const memberRef = doc(firestore, 'groups', groupId, 'members', user.uid);
          await setDoc(memberRef, {
            userId: user.uid,
            joinedAt: serverTimestamp(),
            role: 'owner',
            displayName: user.displayName || 'Anonymous',
            photoURL: user.photoURL || '',
          });
    
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
                               <CardTitle>Club Details</CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-6">
                                <FormField
                                    control={methods.control}
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
                                    control={methods.control}
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
                                    control={methods.control}
                                    name="visibility"
                                    render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Visibility</FormLabel>
                                        <FormControl>
                                            <div className="grid grid-cols-2 gap-2">
                                                {(["public", "private"] as const).map((v) => (
                                                    <Button
                                                        key={v}
                                                        type="button"
                                                        variant={field.value === v ? "default" : "outline"}
                                                        onClick={() => methods.setValue('visibility', v)}
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
                                    control={methods.control}
                                    name="allowMembersToAddTools"
                                    render={({ field }) => (
                                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                        <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            Allow Members to Add Tools
                                        </FormLabel>
                                        <p className="text-sm text-muted-foreground">
                                            Can members suggest new tools for the club?
                                        </p>
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
                            </CardContent>
                        </Card>
                        <div className="flex justify-end mt-8">
                            <Button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Publishing...' : 'Publish Club'}
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
}

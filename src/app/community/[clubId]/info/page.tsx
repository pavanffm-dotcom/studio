'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useFirestore, useDoc, useCollection, useUser, useMemoFirebase } from '@/firebase';
import { doc, collection, query, orderBy, Timestamp } from 'firebase/firestore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bell, Search, Users, Image as ImageIcon, Link2, FileText, Lock, BadgeCheck } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

interface Group {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    avatar: string;
    isPublic: boolean;
    ownerId: string;
}

interface GroupMember {
    userId: string;
    joinedAt: Timestamp;
    role: 'member' | 'admin' | 'owner';
    displayName?: string; 
    photoURL?: string;
}

export default function GroupInfoPage({ params }: { params: { clubId: string } }) {
    const clubId = params.clubId;
    const router = useRouter();
    const firestore = useFirestore();
    const { user } = useUser();

    // Fetch Group Data
    const groupRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return doc(firestore, 'groups', clubId);
    }, [firestore, clubId]);
    const { data: clubData, isLoading: groupLoading } = useDoc<Group>(groupRef);

    // Fetch Members
    const membersRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'groups', clubId, 'members');
    }, [firestore, clubId]);
    const membersQuery = useMemoFirebase(() => {
        if (!membersRef) return null;
        return query(membersRef, orderBy('role'));
    }, [membersRef]);
    const { data: members, isLoading: membersLoading } = useCollection<GroupMember>(membersRef);

    const handleBack = () => {
        router.back();
    };

    const InfoCardSkeleton = () => (
        <div className="flex flex-col items-center p-6 bg-card/80 backdrop-blur-3xl rounded-b-3xl soft-shadow">
            <Skeleton className="h-28 w-28 rounded-full" />
            <Skeleton className="h-8 w-48 mt-4" />
            <Skeleton className="h-4 w-32 mt-2" />
            <div className="flex gap-8 mt-6">
                <Skeleton className="h-10 w-20" />
                <Skeleton className="h-10 w-20" />
            </div>
        </div>
    );
    
    const MemberListSkeleton = () => (
        <div className='p-4 space-y-4'>
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="flex-grow space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-3 w-1/2" />
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
            </div>

            <div className="relative z-10 w-full max-w-lg">
                <header className="absolute top-0 left-0 right-0 p-2 flex justify-between items-center z-20">
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-black/20 text-white backdrop-blur-sm" onClick={handleBack}>
                        <ArrowLeft />
                    </Button>
                </header>

                {groupLoading ? <InfoCardSkeleton /> : (
                    <div className="flex flex-col items-center p-6 pt-20 bg-card/80 backdrop-blur-3xl rounded-b-3xl soft-shadow text-center">
                        <Avatar className='h-28 w-28 border-4 border-white shadow-lg'>
                            <AvatarImage src={clubData?.avatar} alt={clubData?.name} />
                            <AvatarFallback>{clubData?.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h1 className="text-3xl font-bold mt-4">{clubData?.name}</h1>
                        <p className="text-muted-foreground mt-1">Group · {clubData?.memberCount} members</p>
                        <div className="flex gap-8 mt-6">
                            <div className="flex flex-col items-center gap-1">
                                <Button variant="secondary" size="icon" className="w-12 h-12 rounded-full"><Users /></Button>
                                <span className="text-xs text-muted-foreground">Community</span>
                            </div>
                             <div className="flex flex-col items-center gap-1">
                                <Button variant="secondary" size="icon" className="w-12 h-12 rounded-full"><Search /></Button>
                                <span className="text-xs text-muted-foreground">Search</span>
                            </div>
                        </div>
                    </div>
                )}
                
                <main className="p-4 space-y-4 mt-4">
                    <div className='bg-card/80 backdrop-blur-sm rounded-2xl soft-shadow p-4'>
                        <h3 className="text-muted-foreground font-semibold mb-2">Media, links, and docs</h3>
                         <div className="flex justify-between items-center">
                            <p>11</p>
                            <ChevronRight className="w-5 h-5 text-muted-foreground"/>
                        </div>
                        <div className="grid grid-cols-4 gap-2 mt-2">
                            <Skeleton className="w-full aspect-square rounded-lg" />
                            <Skeleton className="w-full aspect-square rounded-lg" />
                            <Skeleton className="w-full aspect-square rounded-lg" />
                            <Skeleton className="w-full aspect-square rounded-lg bg-secondary flex items-center justify-center text-primary font-bold">11+</Skeleton>
                        </div>
                    </div>

                    <div className='bg-card/80 backdrop-blur-sm rounded-2xl soft-shadow p-2'>
                        <div className="flex items-center justify-between p-2">
                           <div className='flex items-center gap-4'>
                             <Bell className="w-5 h-5 text-muted-foreground"/>
                             <span>Notifications</span>
                           </div>
                           <span className="text-muted-foreground">On</span>
                        </div>
                         <Separator/>
                         <div className="flex items-center justify-between p-2">
                           <div className='flex items-center gap-4'>
                             <ImageIcon className="w-5 h-5 text-muted-foreground"/>
                             <span>Media visibility</span>
                           </div>
                           <span className="text-muted-foreground">Default</span>
                        </div>
                    </div>

                     <div className='bg-card/80 backdrop-blur-sm rounded-2xl soft-shadow p-2'>
                        <div className="flex items-center p-2">
                           <div className='flex items-center gap-4'>
                             <Lock className="w-5 h-5 text-muted-foreground"/>
                             <div>
                                <span>Encryption</span>
                                <p className='text-xs text-muted-foreground'>Messages and calls are end-to-end encrypted. Tap to learn more.</p>
                             </div>
                           </div>
                        </div>
                    </div>

                    <div className='bg-card/80 backdrop-blur-sm rounded-2xl soft-shadow p-4'>
                        <div className="flex justify-between items-center mb-2">
                             <h3 className="text-muted-foreground font-semibold">{clubData?.memberCount} members</h3>
                             <Button variant="ghost" size="icon"><Search/></Button>
                        </div>
                        <div className="space-y-4">
                            {membersLoading ? <MemberListSkeleton /> : members?.map((member) => (
                                <div key={member.userId} className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <Avatar className='h-12 w-12'>
                                            <AvatarImage src={member.photoURL} />
                                            <AvatarFallback>{member.displayName?.charAt(0) || 'U'}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold">{member.userId === user?.uid ? 'You' : member.displayName || 'Community Member'}</p>
                                            {member.role === 'owner' && <p className='text-xs text-muted-foreground'>Group Creator</p>}
                                        </div>
                                    </div>
                                    {member.role === 'admin' && <Badge variant="secondary" className='bg-green-100 text-green-800'>Admin</Badge>}
                                    {member.role === 'owner' && <Badge variant="secondary" className='bg-green-100 text-green-800'>Admin</Badge>}
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

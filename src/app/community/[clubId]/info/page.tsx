
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useFirestore, useDoc, useCollection, useUser, useMemoFirebase } from '@/firebase';
import { doc, collection, query, orderBy, Timestamp } from 'firebase/firestore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bell, Search, Users, Image as ImageIcon, Link2, FileText, Lock, BadgeCheck, Phone, MoreHorizontal } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

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
    const resolvedParams = React.use(params);
    const clubId = resolvedParams.clubId;
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

    const InfoPageSkeleton = () => (
        <div className="flex flex-col">
            <div className="relative h-72 bg-muted">
                <Skeleton className="h-full w-full" />
            </div>
            <div className="p-4 space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <div className="flex justify-around">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <Skeleton className="h-4 w-12" />
                        </div>
                    ))}
                </div>
                 <Skeleton className="h-20 w-full" />
                 <Skeleton className="h-20 w-full" />
                 <Skeleton className="h-20 w-full" />
            </div>
        </div>
    );

    if (groupLoading) {
        return (
            <div className="bg-background min-h-screen">
                <InfoPageSkeleton />
            </div>
        );
    }
    
    return (
        <div className="bg-background min-h-screen font-body">
            <div className="relative">
                <div className="relative h-72">
                    <Image
                        src={clubData?.avatar || "https://picsum.photos/seed/default-group/800/600"}
                        alt={clubData?.name || "Group"}
                        layout="fill"
                        objectFit="cover"
                        className="bg-muted"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <Button variant="ghost" size="icon" className="absolute top-4 left-4 w-12 h-12 rounded-full bg-black/20 text-white backdrop-blur-sm" onClick={handleBack}>
                        <ArrowLeft />
                    </Button>
                </div>
                <div className="p-4 bg-background rounded-t-3xl -mt-6 relative z-10">
                    <h1 className="text-3xl font-bold">{clubData?.name}</h1>
                    <p className="text-muted-foreground">Active</p>

                    <div className="flex justify-around my-6">
                        <div className="flex flex-col items-center gap-1 text-primary">
                            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-primary/10"><Phone/></Button>
                            <span className="text-xs">Audio call</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-primary">
                            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-primary/10"><Video/></Button>
                            <span className="text-xs">Video call</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-muted-foreground">
                            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-secondary"><BellOff/></Button>
                            <span className="text-xs">Mute</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-muted-foreground">
                            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-secondary"><MoreHorizontal/></Button>
                            <span className="text-xs">More</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Card className="p-4 rounded-2xl bg-card/80">
                            <p className="text-muted-foreground text-sm">About</p>
                            <p className="font-semibold">{clubData?.description}</p>
                        </Card>
                        
                        <div className='bg-card/80 rounded-2xl'>
                            <div className="p-4">
                                <h3 className="text-muted-foreground font-semibold mb-2">Media, links, and docs</h3>
                                <div className="grid grid-cols-4 gap-2 mt-2">
                                    <Skeleton className="w-full aspect-square rounded-lg" />
                                    <Skeleton className="w-full aspect-square rounded-lg" />
                                    <Skeleton className="w-full aspect-square rounded-lg" />
                                    <Skeleton className="w-full aspect-square rounded-lg bg-secondary flex items-center justify-center text-primary font-bold">11+</Skeleton>
                                </div>
                            </div>
                            <Separator />
                             <div className="flex items-center justify-between p-4">
                               <div className='flex items-center gap-4'>
                                 <Star className="w-5 h-5 text-muted-foreground"/>
                                 <span>Starred Messages</span>
                               </div>
                               <ChevronRight className="w-5 h-5 text-muted-foreground"/>
                            </div>
                            <Separator/>
                             <div className="flex items-center justify-between p-4">
                               <div className='flex items-center gap-4'>
                                 <Bell className="w-5 h-5 text-muted-foreground"/>
                                 <span>Notifications</span>
                               </div>
                               <span className="text-muted-foreground">On</span>
                            </div>
                        </div>

                         <div className='bg-card/80 rounded-2xl p-4'>
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
                                        {member.role === 'owner' && <BadgeCheck className='text-green-500' />}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const MemberListSkeleton = () => (
    <div className='space-y-4'>
        {[...Array(3)].map((_, i) => (
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


const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
);

const Video = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m22 8-6 4 6 4V8Z"></path>
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
    </svg>
);

const BellOff = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8.7 3A6.4 6.4 0 0 1 12 2c2 0 3.7.8 5 2.1l-1.4.9A3.6 3.6 0 0 0 12 4a3.6 3.6 0 0 0-3.3 2.8"></path>
        <path d="M19.3 14.8A6.4 6.4 0 0 1 12 22a6.4 6.4 0 0 1-7.3-7.2"></path>
        <path d="M2 2l20 20"></path>
        <path d="M10.2 6.1a3.6 3.6 0 0 1 3.6-1.3l-2.9 2.9"></path>
        <path d="M16 17a3 3 0 0 0-3-3"></path>
        <path d="M12 8a3 3 0 0 0-3 3"></path>
    </svg>
);

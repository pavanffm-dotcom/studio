
'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useFirestore, useDoc, useCollection, useUser, useMemoFirebase } from '@/firebase';
import { doc, collection, query, orderBy, Timestamp, addDoc, serverTimestamp } from 'firebase/firestore';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bell, Search, Users, Image as ImageIcon, Link2, FileText, Lock, BadgeCheck, Phone, MoreVertical, Video, Star, BellOff, Edit, UserPlus, Plus } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { allTools, Tool } from '@/lib/tools-data';
import { useToast } from '@/hooks/use-toast';
import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';

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

interface GroupTool {
    id?: string;
    toolName: string;
    toolUrl: string;
    toolDescription?: string;
    addedBy: string;
    addedAt: Timestamp;
    upvotes: number;
}


export default function GroupInfoPage({ params }: { params: { clubId: string } }) {
    const resolvedParams = React.use(params);
    const clubId = resolvedParams.clubId;
    const router = useRouter();
    const firestore = useFirestore();
    const { user } = useUser();
    const { toast } = useToast();
    const [searchTerm, setSearchTerm] = useState('');
    const [isAddToolOpen, setIsAddToolOpen] = useState(false);

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
    const { data: members, isLoading: membersLoading } = useCollection<GroupMember>(query(membersRef, orderBy('role')));

    // Fetch Tools
    const toolsRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'groups', clubId, 'tools');
    }, [firestore, clubId]);
    const { data: groupTools, isLoading: toolsLoading } = useCollection<GroupTool>(query(toolsRef, orderBy('addedAt', 'desc')));


    const handleBack = () => {
        router.back();
    };

    const filteredTools = useMemo(() => {
        return allTools.filter(tool => tool.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm]);

    const handleAddTool = async (tool: Tool) => {
        if (!user || !firestore || !toolsRef) return;

        const newTool: GroupTool = {
            toolName: tool.name,
            toolUrl: tool.url,
            toolDescription: tool.description || '',
            addedBy: user.uid,
            addedAt: Timestamp.now(),
            upvotes: 0,
        };

        try {
            await addDoc(toolsRef, newTool);
            toast({
                title: "Tool Added!",
                description: `${tool.name} has been added to the club.`,
            });
        } catch (error) {
            console.error("Error adding tool:", error);
            toast({
                variant: 'destructive',
                title: "Error",
                description: "Could not add the tool. Please try again.",
            });
        }
    };


    const InfoPageSkeleton = () => (
        <div className="flex flex-col">
            <div className="relative h-72 bg-muted">
                <Skeleton className="h-full w-full" />
            </div>
            <div className="p-4 space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <div className="flex justify-around">
                    {[...Array(3)].map((_, i) => (
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
                    <div className="absolute top-4 right-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-black/20 text-white backdrop-blur-sm">
                                    <MoreVertical />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Edit className="mr-2 h-4 w-4" />
                                    <span>Edit Group</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <UserPlus className="mr-2 h-4 w-4" />
                                    <span>Add Members</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="p-4 bg-background rounded-t-3xl -mt-6 relative z-10">
                    <h1 className="text-3xl font-bold">{clubData?.name}</h1>
                    <p className="text-muted-foreground">Active</p>

                    <div className="flex justify-around my-6">
                        <div className="flex flex-col items-center gap-1 text-primary">
                            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-primary/10"><Users /></Button>
                            <span className="text-xs">Community</span>
                        </div>
                         <div className="flex flex-col items-center gap-1 text-muted-foreground">
                            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-secondary"><Search/></Button>
                            <span className="text-xs">Search</span>
                        </div>
                        <div className="flex flex-col items-center gap-1 text-muted-foreground">
                            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-secondary"><BellOff/></Button>
                            <span className="text-xs">Mute</span>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Card className="p-4 rounded-2xl bg-card/80">
                            <p className="text-muted-foreground text-sm">About</p>
                            <p className="font-semibold">{clubData?.description}</p>
                        </Card>

                        <Dialog open={isAddToolOpen} onOpenChange={setIsAddToolOpen}>
                            <Card className="p-4 rounded-2xl bg-card/80">
                                <h3 className="text-muted-foreground font-semibold mb-2">Add AI Tools</h3>
                                <p className="text-sm text-muted-foreground mb-4">Share your favorite AI tools with the community.</p>
                                <DialogTrigger asChild>
                                    <Button className="w-full">
                                        <Plus className="mr-2 h-4 w-4"/>
                                        Add Tool
                                    </Button>
                                </DialogTrigger>
                            </Card>
                            <DialogContent className="max-w-sm h-[80vh] flex flex-col">
                                <DialogHeader>
                                    <DialogTitle>Add a Tool</DialogTitle>
                                </DialogHeader>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"/>
                                    <Input placeholder="Search tools..." className="pl-10" value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
                                </div>
                                <div className="flex-grow overflow-y-auto -mx-6 px-6">
                                    <div className='space-y-2'>
                                        {filteredTools.map(tool => (
                                            <div key={tool.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent">
                                                <Image src={tool.image} alt={tool.name} width={40} height={40} className="rounded-md" />
                                                <div className="flex-grow">
                                                    <p className="font-semibold">{tool.name}</p>
                                                </div>
                                                <Button size="sm" onClick={() => handleAddTool(tool)}>Add</Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                        
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

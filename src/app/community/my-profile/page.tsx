
'use client';

import React from 'react';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, query, where, Timestamp } from 'firebase/firestore';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Star, MoreVertical, Edit } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { ClubHeader } from '@/components/club-header';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ProfileDetails } from '@/components/profile-details';

interface Group {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    avatar: string;
    createdAt: Timestamp;
    ownerId: string;
}

const MyProfileSkeleton = () => (
    <div className="p-6">
        <div className="flex items-center gap-4">
            <Skeleton className="h-20 w-20 rounded-full" />
            <div className="space-y-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-64" />
            </div>
        </div>
        <Skeleton className="h-8 w-32 mt-8 mb-4" />
        <div className="space-y-3">
            {[...Array(3)].map((_, i) => (
                <Card key={i} className="p-4 flex items-center gap-4">
                    <Skeleton className="h-14 w-14 rounded-full" />
                    <div className="flex-grow space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </Card>
            ))}
        </div>
    </div>
);

export default function MyProfilePage() {
    const { user, isUserLoading } = useUser();
    const firestore = useFirestore();
    const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);


    const groupsRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'groups');
    }, [firestore]);

    const ownedGroupsQuery = useMemoFirebase(() => {
        if (!groupsRef || !user) return null;
        return query(groupsRef, where('ownerId', '==', user.uid));
    }, [groupsRef, user]);

    const { data: ownedClubs, isLoading: areClubsLoading } = useCollection<Group>(ownedGroupsQuery);

    if (isUserLoading || areClubsLoading) {
        return (
             <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-start font-body relative">
                <div className="absolute inset-0 z-0 opacity-50">
                    <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
                </div>
                <div className="relative z-10 w-full max-w-lg p-0 md:p-6">
                     <div className="bg-card/80 backdrop-blur-3xl md:rounded-[2.5rem] shadow-2xl flex flex-col min-h-screen md:min-h-0 md:max-h-[calc(100vh-3rem)] border-t-2 border-white/50 soft-shadow">
                        <div className="p-4 border-b">
                            <ClubHeader title="My Profile" showBackButton />
                        </div>
                        <MyProfileSkeleton />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-start font-body relative">
            <div className="absolute inset-0 z-0 opacity-50">
                <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
            </div>

            <div className="relative z-10 w-full max-w-lg p-0 md:p-6">
                <div className="bg-card/80 backdrop-blur-3xl md:rounded-[2.5rem] shadow-2xl flex flex-col min-h-screen md:min-h-0 md:max-h-[calc(100vh-3rem)] border-t-2 border-white/50 soft-shadow">
                    <div className="p-4 border-b flex justify-between items-center">
                        <ClubHeader title="My Profile" showBackButton />
                         <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
                                        <MoreVertical className="w-6 h-6"/>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DialogTrigger asChild>
                                        <DropdownMenuItem>
                                            <Edit className="mr-2 h-4 w-4" />
                                            <span>Edit Profile</span>
                                        </DropdownMenuItem>
                                    </DialogTrigger>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <DialogContent>
                                <DialogHeader>
                                <DialogTitle>Edit Profile</DialogTitle>
                                </DialogHeader>
                                <ProfileDetails />
                            </DialogContent>
                        </Dialog>
                    </div>

                    <main className="flex-grow overflow-y-auto no-scrollbar p-6">
                        <div className="flex items-center gap-4 mb-8">
                            <Avatar className="h-20 w-20 border-4 border-white shadow-lg">
                                <AvatarImage src={user?.photoURL || undefined} alt={user?.displayName || 'User'} />
                                <AvatarFallback>{user?.displayName?.charAt(0) || user?.email?.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <h1 className="text-2xl font-bold">{user?.displayName || 'Community Member'}</h1>
                                <p className="text-muted-foreground">{user?.email}</p>
                            </div>
                        </div>

                        <h2 className="text-xl font-semibold mb-4">My Created Groups</h2>
                        
                        <div className="space-y-3">
                            {ownedClubs && ownedClubs.length > 0 ? (
                                ownedClubs.map((club) => (
                                    <Link href={`/community/${club.id}`} key={club.id} className="block group">
                                        <Card className="p-4 flex items-center gap-4 hover:bg-accent/50 transition-colors duration-200 soft-shadow">
                                            <Avatar className="h-14 w-14 border-2 border-white">
                                                <AvatarImage src={club.avatar} alt={club.name} />
                                                <AvatarFallback>{club.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-grow overflow-hidden">
                                                <h3 className="font-semibold truncate text-lg">{club.name}</h3>
                                                <p className="text-sm text-muted-foreground truncate">{club.description}</p>
                                            </div>
                                            <div className="flex items-center text-sm text-muted-foreground">
                                                <Users className="w-4 h-4 mr-1" />
                                                <span>{club.memberCount}</span>
                                            </div>
                                        </Card>
                                    </Link>
                                ))
                            ) : (
                                <div className="text-center py-16 text-muted-foreground border-2 border-dashed rounded-2xl">
                                    <p className="font-semibold">You haven't created any groups yet.</p>
                                    <p className="text-sm mt-1">Why not start a new community?</p>
                                    <Link href="/community/create">
                                        <Button className="mt-4">Create a Group</Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}


'use client';

import React, { useState } from 'react';
import { ClubHeader } from '@/components/club-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Users, Star } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy, Timestamp } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';


interface Group {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    avatar: string;
    createdAt: Timestamp;
}

export default function CommunityPage() {
    const firestore = useFirestore();
    const [searchTerm, setSearchTerm] = useState('');

    const groupsRef = useMemoFirebase(() => {
        if (!firestore) return null;
        return collection(firestore, 'groups');
    }, [firestore]);

    const groupsQuery = useMemoFirebase(() => {
        if (!groupsRef) return null;
        return query(groupsRef, orderBy('createdAt', 'desc'));
    }, [groupsRef]);

    const { data: clubs, isLoading } = useCollection<Group>(groupsQuery);

    const filteredClubs = React.useMemo(() => {
        if (!clubs) return [];
        if (!searchTerm) return clubs;
        return clubs.filter(club => 
            club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            club.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [clubs, searchTerm]);

    const ClubListSkeleton = () => (
        <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
                <Card key={i} className="p-4 flex items-center gap-4">
                    <Skeleton className="h-14 w-14 rounded-full" />
                    <div className="flex-grow space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </Card>
            ))}
        </div>
    );

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-start font-body relative">
       <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg p-0 md:p-6">
        <div className="bg-card/80 backdrop-blur-3xl md:rounded-[2.5rem] shadow-2xl flex flex-col min-h-screen md:min-h-0 md:max-h-[calc(100vh-3rem)] border-t-2 border-white/50 soft-shadow">

            <div className="p-4 border-b">
                <ClubHeader title="Community" showCreateButton showProfileButton showBackButton />
            </div>

            <div className="p-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input 
                        placeholder="Search clubs..."
                        className="pl-10 bg-background/50 rounded-full h-12"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <main className="flex-grow overflow-y-auto no-scrollbar p-4 pt-0 space-y-3">
              {isLoading ? (
                  <ClubListSkeleton />
              ) : filteredClubs.length > 0 ? (
                filteredClubs.map((club) => (
                    <Link href={`/community/${club.id}`} key={club.id} className="block group">
                    <Card className="p-4 flex items-center gap-4 hover:bg-accent/50 transition-colors duration-200 soft-shadow">
                        <Avatar className="h-14 w-14 border-2 border-white">
                        <AvatarImage src={club.avatar} alt={club.name} />
                        <AvatarFallback>{club.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-grow overflow-hidden">
                            <h2 className="font-semibold truncate text-lg">{club.name}</h2>
                            <p className="text-sm text-muted-foreground truncate">{club.description}</p>
                        </div>
                        <div className="flex flex-col items-center shrink-0">
                        <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="w-4 h-4 mr-1" />
                            <span>{club.memberCount > 999 ? `${(club.memberCount/1000).toFixed(1)}k` : club.memberCount}</span>
                        </div>
                        <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                            <Star className="w-5 h-5 text-muted-foreground" />
                        </Button>
                        </div>
                    </Card>
                    </Link>
                ))
              ) : (
                <div className="text-center py-16 text-muted-foreground">
                    <p className="font-semibold">No clubs found</p>
                    <p className="text-sm mt-1">Try a different search or create a new club!</p>
                </div>
              )}
            </main>
        </div>
      </div>
    </div>
  );
}

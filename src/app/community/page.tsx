'use client';

import { ClubHeader } from '@/components/club-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, PenSquare, Filter, Menu, Users, Star } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';

// Dummy data for clubs, will be replaced with Firestore data
const clubs = [
  { id: '1', name: 'AI for Designers', description: 'Discussing the future of creative AI.', members: 1200, unread: 3, avatar: 'https://picsum.photos/seed/design-club/40/40' },
  { id: '2', name: 'Prompt Masters', description: 'Sharing the best prompts for generative AI.', members: 874, unread: 87, avatar: 'https://picsum.photos/seed/prompt-club/40/40' },
  { id: '3', name: 'Indie Hacker AI', description: 'Building SaaS with AI tools.', members: 2300, unread: 146, avatar: 'https://picsum.photos/seed/hacker-club/40/40' },
  { id: '4', name: 'Video Creation Nerds', description: 'From text-to-video to editing tricks.', members: 560, unread: 0, avatar: 'https://picsum.photos/seed/video-club/40/40' },
  { id: '5', name: 'Future of Audio AI', description: 'Voice cloning, music generation, and more.', members: 980, unread: 6, avatar: 'https://picsum.photos/seed/audio-club/40/40' },
  { id: '6', name: 'AI News & Trends', description: 'The latest in the world of AI.', members: 12030, unread: 18791, avatar: 'https://picsum.photos/seed/news-club/40/40' },
];

export default function CommunityPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center justify-start font-body relative">
       <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>

      <div className="relative z-10 w-full max-w-lg p-0 md:p-6">

        <div className="bg-card/80 backdrop-blur-3xl md:rounded-[2.5rem] shadow-2xl flex flex-col min-h-screen md:min-h-0 md:max-h-[calc(100vh-3rem)] border-t-2 border-white/50 soft-shadow">

            <div className="p-4 border-b">
                <ClubHeader title="Community" showCreateButton />
            </div>

            <main className="flex-grow overflow-y-auto no-scrollbar p-4 space-y-3">
              {clubs.map((club) => (
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
                        <span>{club.members > 999 ? `${(club.members/1000).toFixed(1)}k` : club.members}</span>
                      </div>
                      <Button variant="ghost" size="icon" className="w-8 h-8 rounded-full">
                        <Star className="w-5 h-5 text-muted-foreground" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              ))}
            </main>
        </div>
      </div>
    </div>
  );
}
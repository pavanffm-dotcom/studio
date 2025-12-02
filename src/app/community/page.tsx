'use client';

import { ClubHeader } from '@/components/club-header';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';

// Dummy data for clubs, will be replaced with Firestore data
const clubs = [
  { id: '1', name: 'AI for Designers', description: 'A place to discuss how AI is changing the design world.', members: 1200 },
  { id: '2', name: 'Prompt Masters', description: 'Share your best prompts and discover new techniques.', members: 874 },
  { id: '3', name: 'Indie Hacker AI', description: 'Building businesses with the power of AI tools.', members: 2300 },
  { id: '4', name: 'Video Creation Nerds', description: 'From text-to-video to AI editing, let\'s talk video.', members: 560 },
  { id: '5', name: 'Future of Audio AI', description: 'Voice cloning, text-to-speech, and AI music generation.', members: 980 },
];


export default function CommunityPage() {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-md p-6">
        <ClubHeader title="Community Clubs" showCreateButton />

        <main className="mt-6 space-y-4">
          {clubs.map((club) => (
            <Link href={`/community/${club.id}`} key={club.id} className="block group">
              <Card className="bg-card/80 backdrop-blur-sm soft-shadow hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{club.name}</CardTitle>
                  <CardDescription>{club.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    {club.members.toLocaleString()} members
                  </div>
                  <Button variant="ghost" size="icon" className="group-hover:translate-x-1 transition-transform">
                    <ArrowRight />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
}

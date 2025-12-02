'use client';

import { ClubHeader } from '@/components/club-header';
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Heart, MessageCircle, Star, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Dummy data for a single club, to be replaced with Firestore data
const club = { id: '1', name: 'AI for Designers', description: 'A place to discuss how AI is changing the design world.', members: 1200 };
const tools = [
  { name: 'Midjourney', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-club/300/200', dataAiHint: 'generative art', votes: 123 },
  { name: 'Framer AI', url: 'https://www.framer.com/ai', image: 'https://picsum.photos/seed/framer-club/300/200', dataAiHint: 'website builder', votes: 98 },
  { name: 'Galileo AI', url: 'https://www.usegalileo.ai/', image: 'https://picsum.photos/seed/galileo-club/300/200', dataAiHint: 'ui design', votes: 85 },
  { name: 'Khroma', url: 'http://khroma.co/', image: 'https://picsum.photos/seed/khroma-club/300/200', dataAiHint: 'color palette', votes: 72 },
];


export default function ClubDetailsPage({ params }: { params: { clubId: string } }) {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-md p-6">
        <ClubHeader title={club.name} showBackButton />

        <div className="my-4 p-4 bg-card/70 rounded-2xl soft-shadow">
            <p className='text-muted-foreground'>{club.description}</p>
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2" />
                    {club.members.toLocaleString()} members
                </div>
                <Button>Join Club</Button>
            </div>
        </div>

        <main className="mt-6 space-y-4">
          <h2 className="text-xl font-bold text-foreground">Tools Shared in this Club</h2>
          {tools.sort((a,b) => b.votes - a.votes).map((tool) => (
            <Card key={tool.name} className="bg-card/80 p-4 flex gap-4 items-center soft-shadow">
                <div className="flex flex-col items-center gap-1">
                    <Button variant="ghost" size="icon"><Heart className="w-5 h-5 text-muted-foreground" /></Button>
                    <span className="font-bold text-foreground">{tool.votes}</span>
                </div>
                <Image src={tool.image} alt={tool.name} width={80} height={60} className="rounded-lg aspect-[4/3] object-cover" />
                <div className="flex-grow">
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground gap-4 mt-1">
                        <div className="flex items-center gap-1">
                           <MessageCircle className="w-4 h-4" />
                           <span>3 comments</span>
                        </div>
                        <Link href={tool.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
                            <ExternalLink className="w-4 h-4" />
                            <span>Visit</span>
                        </Link>
                    </div>
                </div>
                <Button variant="ghost" size="icon">
                    <Star className="w-5 h-5 text-muted-foreground" />
                </Button>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
}

'use client';

import { ClubHeader } from '@/components/club-header';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Heart, MessageCircle, Star, ThumbsUp, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

// Dummy data for a single club, to be replaced with Firestore data
const club = { id: '1', name: 'AI for Designers', description: 'A place to discuss how AI is changing the design world.', members: 1200, isPublic: true };
const tools = [
  { name: 'Midjourney', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-club/300/200', dataAiHint: 'generative art', upvotes: 123, comments: 12, addedBy: 'Jane Doe' },
  { name: 'Framer AI', url: 'https://www.framer.com/ai', image: 'https://picsum.photos/seed/framer-club/300/200', dataAiHint: 'website builder', upvotes: 98, comments: 8, addedBy: 'John Smith' },
  { name: 'Galileo AI', url: 'https://www.usegalileo.ai/', image: 'https://picsum.photos/seed/galileo-club/300/200', dataAiHint: 'ui design', upvotes: 85, comments: 5, addedBy: 'Alex Ray' },
  { name: 'Khroma', url: 'http://khroma.co/', image: 'https://picsum.photos/seed/khroma-club/300/200', dataAiHint: 'color palette', upvotes: 72, comments: 3, addedBy: 'Sarah Lee' },
];


export default function ClubDetailsPage({ params }: { params: { clubId: string } }) {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-lg p-0 md:p-6">
        <div className="bg-card/80 backdrop-blur-3xl md:rounded-t-[2.5rem] shadow-2xl flex flex-col min-h-screen md:min-h-0 md:max-h-[calc(100vh-3rem)] border-t-2 border-white/50 soft-shadow">
          <div className="p-4 border-b">
            <ClubHeader title={club.name} showBackButton />
          </div>
          
          <div className='flex-grow overflow-y-auto no-scrollbar'>
            <div className="p-4">
                <p className='text-muted-foreground text-center'>{club.description}</p>
                <div className="flex justify-center items-center mt-4 gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {club.members.toLocaleString()} members
                    </div>
                    <Button>Join Club</Button>
                </div>
            </div>

            <Separator />

            <main className="p-4 space-y-4">
              <h2 className="text-xl font-bold text-foreground">Tools Shared in this Club</h2>
              {tools.sort((a,b) => b.upvotes - a.upvotes).map((tool) => (
                <Card key={tool.name} className="bg-background/50 p-4 flex gap-4 items-center soft-shadow">
                    <div className="flex flex-col items-center gap-1">
                        <Button variant="ghost" size="icon" className='h-8 w-8'><ThumbsUp className="w-5 h-5 text-muted-foreground" /></Button>
                        <span className="font-bold text-sm text-foreground">{tool.upvotes}</span>
                    </div>
                    <Image src={tool.image} alt={tool.name} width={80} height={60} className="rounded-lg aspect-[4/3] object-cover" />
                    <div className="flex-grow">
                        <CardTitle className="text-lg">{tool.name}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground gap-4 mt-1">
                            <div className="flex items-center gap-1">
                               <MessageCircle className="w-4 h-4" />
                               <span>{tool.comments} comments</span>
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
      </div>
    </div>
  );
}

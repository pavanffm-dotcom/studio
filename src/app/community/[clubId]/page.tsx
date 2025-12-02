'use client';

import { ClubHeader } from '@/components/club-header';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink, Heart, MessageCircle, Star, ThumbsUp, Users, Send } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';

// Dummy data for a single club, to be replaced with Firestore data
const club = { id: '1', name: 'AI for Designers', description: 'A place to discuss how AI is changing the design world.', members: 1200, isPublic: true };
const tools = [
  { name: 'Midjourney', url: 'https://www.midjourney.com/', image: 'https://picsum.photos/seed/midjourney-club/300/200', dataAiHint: 'generative art', upvotes: 123, comments: 12, addedBy: 'Jane Doe' },
  { name: 'Framer AI', url: 'https://www.framer.com/ai', image: 'https://picsum.photos/seed/framer-club/300/200', dataAiHint: 'website builder', upvotes: 98, comments: 8, addedBy: 'John Smith' },
  { name: 'Galileo AI', url: 'https://www.usegalileo.ai/', image: 'https://picsum.photos/seed/galileo-club/300/200', dataAiHint: 'ui design', upvotes: 85, comments: 5, addedBy: 'Alex Ray' },
  { name: 'Khroma', url: 'http://khroma.co/', image: 'https://picsum.photos/seed/khroma-club/300/200', dataAiHint: 'color palette', upvotes: 72, comments: 3, addedBy: 'Sarah Lee' },
];
const messages = [
    { user: 'Jane Doe', text: 'Hey everyone! 👋 Just joined. So excited to talk about AI in design.', avatar: 'https://i.pravatar.cc/150?u=jane' },
    { user: 'Alex Ray', text: 'Welcome Jane! Has anyone tried out the new Galileo AI update? Looks promising for UI generation.', avatar: 'https://i.pravatar.cc/150?u=alex' },
    { user: 'You', text: 'I have! The component generation is crazy fast. Still a bit buggy though.', avatar: 'https://i.pravatar.cc/150?u=you' },
    { user: 'Sarah Lee', text: 'Totally agree. Great for initial mockups but not for production-ready code yet.', avatar: 'https://i.pravatar.cc/150?u=sarah' },
]


export default function ClubDetailsPage({ params }: { params: { clubId: string } }) {
  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-lg p-0 md:p-6">
        <div className="bg-card/80 backdrop-blur-3xl md:rounded-[2.5rem] shadow-2xl flex flex-col min-h-screen md:min-h-0 md:max-h-[calc(100vh-3rem)] border-t-2 border-white/50 soft-shadow">
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
            
            <div className="p-4 text-center">
                 <h2 className="text-xl font-bold text-foreground">Community Chat</h2>
            </div>
            
            {/* Chat Messages */}
            <div className="px-4 space-y-4 flex-grow">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-3 ${msg.user === 'You' ? 'flex-row-reverse' : ''}`}>
                        <Image src={msg.avatar} alt={msg.user} width={40} height={40} className="rounded-full" />
                        <div className={`p-3 rounded-2xl max-w-xs ${msg.user === 'You' ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-secondary rounded-bl-none'}`}>
                            {msg.user !== 'You' && <p className="font-semibold text-sm text-primary">{msg.user}</p>}
                            <p>{msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>

          </div>
          {/* Chat Input */}
            <div className="p-4 bg-background/50 border-t mt-auto">
                <div className="relative">
                    <Input placeholder="Type a message..." className="rounded-full h-12 pr-12" />
                    <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-9 h-9">
                        <Send className="w-5 h-5"/>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

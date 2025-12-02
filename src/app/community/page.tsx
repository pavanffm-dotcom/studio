'use client';

import { ClubHeader } from '@/components/club-header';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, PenSquare, Filter, Menu } from 'lucide-react';
import Link from 'next/link';

// Dummy data for clubs, will be replaced with Firestore data
const clubs = [
  { id: '1', name: 'AI for Designers', lastMessage: 'Jane: Check out this new design tool!', members: 12, unread: 3, timestamp: '11:02 AM', avatar: 'https://picsum.photos/seed/design-club/40/40' },
  { id: '2', name: 'Prompt Masters', lastMessage: 'Alex: Anyone have a good prompt for...', members: 874, unread: 87, timestamp: '10:58 AM', avatar: 'https://picsum.photos/seed/prompt-club/40/40' },
  { id: '3', name: 'Indie Hacker AI', lastMessage: 'Live: Building a SaaS with AI...', members: 2300, unread: 146, timestamp: '10:45 AM', avatar: 'https://picsum.photos/seed/hacker-club/40/40' },
  { id: '4', name: 'Video Creation Nerds', lastMessage: 'Sam pinned a message', members: 560, unread: 0, timestamp: 'Yesterday', avatar: 'https://picsum.photos/seed/video-club/40/40' },
  { id: '5', name: 'Future of Audio AI', lastMessage: 'Mike: Voice cloning is getting scary good.', members: 980, unread: 6, timestamp: 'Yesterday', avatar: 'https://picsum.photos/seed/audio-club/40/40' },
  { id: '6', name: 'AI News & Trends', lastMessage: 'Sarah: New model released by OpenAI!', members: 12030, unread: 18791, timestamp: '3:07 PM', avatar: 'https://picsum.photos/seed/news-club/40/40' },
  { id: '7', name: 'Art Generation', lastMessage: 'Emily: My latest Midjourney creation...', members: 532, unread: 0, timestamp: '2:55 PM', avatar: 'https://picsum.photos/seed/art-club/40/40' },
];

export default function CommunityPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <header className="bg-card/95 backdrop-blur-sm sticky top-0 z-10 flex items-center justify-between p-3 border-b soft-shadow">
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
        <h1 className="text-xl font-bold">Community</h1>
        <Button variant="ghost" size="icon">
          <Search className="w-6 h-6" />
        </Button>
      </header>
      
      <div className="flex border-b overflow-x-auto no-scrollbar">
        <Button variant="ghost" className="px-4 py-3 text-base rounded-none border-b-2 border-primary text-primary">All Clubs</Button>
        <Button variant="ghost" className="px-4 py-3 text-base text-muted-foreground rounded-none">Joined</Button>
        <Button variant="ghost" className="px-4 py-3 text-base text-muted-foreground rounded-none">Unread</Button>
      </div>

      <main className="flex-grow overflow-y-auto">
        <div className="divide-y">
          {clubs.map((club) => (
            <Link href={`/community/${club.id}`} key={club.id} className="block group hover:bg-accent/50">
              <div className="flex items-center gap-4 p-3">
                <Avatar className="h-14 w-14">
                  <AvatarImage src={club.avatar} alt={club.name} />
                  <AvatarFallback>{club.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-grow overflow-hidden">
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold truncate">{club.name}</h2>
                    <p className="text-xs text-muted-foreground shrink-0 ml-2">{club.timestamp}</p>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-muted-foreground truncate">{club.lastMessage}</p>
                    {club.unread > 0 && (
                      <Badge className="bg-primary text-primary-foreground rounded-full shrink-0">
                        {club.unread > 999 ? `${Math.floor(club.unread / 1000)}k` : club.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Link href="/community/create" passHref>
        <Button className="absolute bottom-6 right-6 h-14 w-14 rounded-full shadow-lg glow-shadow">
          <PenSquare className="w-7 h-7" />
        </Button>
      </Link>
    </div>
  );
}

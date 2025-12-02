'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ClubHeader } from '@/components/club-header';
import { Button } from '@/components/ui/button';
import { Send, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { useUser, useFirestore, useCollection, useMemoFirebase } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, Timestamp } from 'firebase/firestore';

interface Message {
  id: string;
  text: string;
  userId: string;
  userName: string;
  userAvatar: string;
  createdAt: Timestamp;
}

// Dummy data for a single club, to be replaced with Firestore data
const club = { id: '1', name: 'AI for Designers', description: 'A place to discuss how AI is changing the design world.', members: 1200, isPublic: true };

export default function ClubDetailsPage({ params: { clubId } }: { params: { clubId: string } }) {
  const { user } = useUser();
  const firestore = useFirestore();
  const [newMessage, setNewMessage] = useState('');

  const messagesRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'groups', clubId, 'messages');
  }, [firestore, clubId]);

  const messagesQuery = useMemoFirebase(() => {
    if (!messagesRef) return null;
    return query(messagesRef, orderBy('createdAt', 'asc'));
  }, [messagesRef]);

  const { data: messages, isLoading: messagesLoading } = useCollection<Message>(messagesQuery);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !firestore || !newMessage.trim() || !messagesRef) return;

    await addDoc(messagesRef, {
      text: newMessage,
      userId: user.uid,
      userName: user.displayName || 'Anonymous',
      userAvatar: user.photoURL || `https://i.pravatar.cc/150?u=${user.uid}`,
      createdAt: serverTimestamp(),
    });

    setNewMessage('');
  };

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
                {messagesLoading && <p>Loading chat...</p>}
                {messages?.map((msg) => (
                    <div key={msg.id} className={`flex items-start gap-3 ${msg.userId === user?.uid ? 'flex-row-reverse' : ''}`}>
                        <Image src={msg.userAvatar} alt={msg.userName} width={40} height={40} className="rounded-full" />
                        <div className={`p-3 rounded-2xl max-w-xs ${msg.userId === user?.uid ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-secondary rounded-bl-none'}`}>
                            {msg.userId !== user?.uid && <p className="font-semibold text-sm text-primary">{msg.userName}</p>}
                            <p>{msg.text}</p>
                        </div>
                    </div>
                ))}
            </div>
          </div>
          
          {/* Chat Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-background/50 border-t mt-auto">
              <div className="relative">
                  <Input 
                      placeholder="Type a message..." 
                      className="rounded-full h-12 pr-12" 
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      disabled={!user}
                  />
                  <Button type="submit" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-9 h-9" disabled={!user || !newMessage.trim()}>
                      <Send className="w-5 h-5"/>
                  </Button>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

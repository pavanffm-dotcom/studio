'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ClubHeader } from '@/components/club-header';
import { Button } from '@/components/ui/button';
import { Send, Users, ShieldCheck, ArrowDown } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { useUser, useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, Timestamp, doc, setDoc } from 'firebase/firestore';
import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';

interface Message {
  id: string;
  text: string;
  userId: string;
  userName: string;
  userAvatar: string;
  createdAt: Timestamp;
}

interface GroupMember {
    userId: string;
    joinedAt: Timestamp;
    role: 'member' | 'admin' | 'owner';
}

// Dummy data for a single club, to be replaced with Firestore data
const club = { id: '1', name: 'AI for Designers', description: 'A place to discuss how AI is changing the design world.', members: 1200, isPublic: true };

export default function ClubDetailsPage({ params }: { params: { clubId: string } }) {
  const resolvedParams = React.use(params);
  const clubId = resolvedParams.clubId;
  
  const { user } = useUser();
  const firestore = useFirestore();
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = React.useRef<HTMLDivElement>(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);


  const memberRef = useMemoFirebase(() => {
    if (!firestore || !user) return null;
    return doc(firestore, 'groups', clubId, 'members', user.uid);
  }, [firestore, clubId, user]);
  
  const { data: memberData, isLoading: memberLoading } = useDoc<GroupMember>(memberRef);
  const isMember = !!memberData;

  const messagesRef = useMemoFirebase(() => {
    if (!firestore || !isMember) return null; // Only fetch if member
    return collection(firestore, 'groups', clubId, 'messages');
  }, [firestore, clubId, isMember]);

  const messagesQuery = useMemoFirebase(() => {
    if (!messagesRef) return null;
    return query(messagesRef, orderBy('createdAt', 'asc'));
  }, [messagesRef]);

  const { data: messages, isLoading: messagesLoading } = useCollection<Message>(messagesQuery);
  
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !firestore || !newMessage.trim() || !messagesRef || !isMember) return;

    try {
        await addDoc(messagesRef, {
        text: newMessage,
        userId: user.uid,
        userName: user.displayName || 'Anonymous',
        userAvatar: user.photoURL || `https://i.pravatar.cc/150?u=${user.uid}`,
        createdAt: serverTimestamp(),
        });
        setNewMessage('');
    } catch (error) {
        console.error("Error sending message:", error);
    }
  };
  
  useEffect(() => {
    const chatEl = chatContainerRef.current;
    if (chatEl) {
        const handleScroll = () => {
            const isScrolledToBottom = chatEl.scrollHeight - chatEl.scrollTop <= chatEl.clientHeight + 100;
            setShowScrollToBottom(!isScrolledToBottom);
        };
        chatEl.addEventListener('scroll', handleScroll);
        return () => chatEl.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  const scrollToBottom = () => {
    chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
  }

  useEffect(() => {
    if (chatContainerRef.current) {
        const isScrolledToBottom = chatContainerRef.current.scrollHeight - chatContainerRef.current.scrollTop <= chatContainerRef.current.clientHeight + 200;
        if(isScrolledToBottom) {
             setTimeout(() => scrollToBottom(), 100);
        }
    }
  }, [messages]);


  const handleJoinClub = async () => {
    if (!user || !firestore || !memberRef) return;
    const memberData: GroupMember = {
        userId: user.uid,
        joinedAt: Timestamp.now(),
        role: 'member'
    };
    setDocumentNonBlocking(memberRef, memberData, { merge: true });
  }

  const ChatSkeleton = () => (
    <div className="px-4 space-y-4 flex-grow">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`flex items-start gap-3 ${i % 2 ? 'flex-row-reverse' : ''}`}>
          <Skeleton className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <Skeleton className="h-6 w-1/2 mb-2" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
      ))}
    </div>
  );

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
          
          <div className='flex-grow overflow-y-auto no-scrollbar' ref={chatContainerRef}>
            <div className="p-4">
                <p className='text-muted-foreground text-center'>{club.description}</p>
                <div className="flex justify-center items-center mt-4 gap-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="w-4 h-4 mr-2" />
                        {club.members.toLocaleString()} members
                    </div>
                    {!memberLoading && (
                        isMember ? (
                            <Button variant="secondary" disabled>
                                <ShieldCheck className="w-4 h-4 mr-2" />
                                Joined
                            </Button>
                        ) : (
                            <Button onClick={handleJoinClub} disabled={!user}>Join Club</Button>
                        )
                    )}
                </div>
            </div>

            <Separator />
            
            {/* Chat Area */}
            {isMember ? (
                <div className="p-4 space-y-2 flex-grow">
                    {messagesLoading && <ChatSkeleton />}
                    {messages?.map((msg, index) => {
                      const showAvatarAndName = index === 0 || messages[index-1].userId !== msg.userId;
                      return (
                        <div key={msg.id} className={`flex items-end gap-3 ${msg.userId === user?.uid ? 'flex-row-reverse' : ''}`}>
                            <div className="w-10">
                                {showAvatarAndName && msg.userId !== user?.uid && (
                                    <Image src={msg.userAvatar} alt={msg.userName} width={40} height={40} className="rounded-full"/>
                                )}
                            </div>
                            
                            <div className={`relative max-w-xs md:max-w-md ${msg.userId === user?.uid ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`} style={{
                                borderRadius: '1.25rem',
                                borderBottomRightRadius: msg.userId === user?.uid ? '0.25rem' : '1.25rem',
                                borderBottomLeftRadius: msg.userId !== user?.uid ? '0.25rem' : '1.25rem',
                            }}>
                                <div className="px-4 py-2">
                                  {showAvatarAndName && msg.userId !== user?.uid && (
                                      <p className="font-semibold text-sm text-primary mb-1">{msg.userName}</p>
                                  )}
                                  <p className="break-words">{msg.text}</p>
                                  <p className="text-xs opacity-70 mt-1 text-right">
                                    {msg.createdAt ? format(msg.createdAt.toDate(), 'p') : '...'}
                                  </p>
                                </div>
                            </div>
                        </div>
                      )
                    })}
                </div>
            ) : (
                <div className="text-center text-muted-foreground p-8">
                    <p>You must join the club to see and send messages.</p>
                </div>
            )}
          </div>
          
           {showScrollToBottom && (
              <div className="absolute bottom-24 right-6 z-20">
                <Button size="icon" className="rounded-full shadow-lg" onClick={scrollToBottom}>
                  <ArrowDown className="w-5 h-5"/>
                </Button>
              </div>
            )}
            
          {/* Chat Input */}
          {isMember && (
            <form onSubmit={handleSendMessage} className="p-4 bg-background/50 border-t mt-auto">
                <div className="relative">
                    <Input 
                        placeholder="Type a message..." 
                        className="rounded-full h-12 pr-12 bg-background" 
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        disabled={!user || messagesLoading}
                    />
                    <Button type="submit" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-9 h-9" disabled={!user || !newMessage.trim() || messagesLoading}>
                        <Send className="w-5 h-5"/>
                    </Button>
                </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

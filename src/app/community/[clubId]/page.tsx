
'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Users, ShieldCheck, ArrowDown, MoreVertical, Phone, Search, ArrowLeft, ExternalLink } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { useUser, useFirestore, useCollection, useDoc, useMemoFirebase } from '@/firebase';
import { collection, addDoc, serverTimestamp, query, orderBy, Timestamp, doc, setDoc } from 'firebase/firestore';
import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { allTools } from '@/lib/tools-data';
import { ToolIcon } from '@/lib/tool-icons';

interface Message {
  id: string;
  text: string;
  userId: string;
  userName: string;
  createdAt: Timestamp;
}

interface Group {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    avatar: string;
    isPublic: boolean;
}

interface GroupMember {
    userId: string;
    joinedAt: Timestamp;
    role: 'member' | 'admin' | 'owner';
}

interface GroupTool {
    id?: string;
    toolName: string;
    toolUrl: string;
    toolDescription?: string;
    addedBy: string;
    addedAt: Timestamp;
    upvotes: number;
}

const ToolCard = ({ tool }: { tool: GroupTool }) => {
    const fullTool = useMemo(() => allTools.find(t => t.name === tool.toolName), [tool.toolName]);
    
    return (
        <a href={tool.toolUrl} target="_blank" rel="noopener noreferrer">
            <Card className="p-2 w-28 h-28 flex flex-col items-center justify-center gap-2 shrink-0 group hover:bg-accent transition-colors">
                <div className='w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center'>
                    {fullTool?.icon ? <ToolIcon name={fullTool.icon} className="w-6 h-6 text-primary" /> : <Users className="w-6 h-6 text-primary"/>}
                </div>
                <p className="text-xs font-semibold text-center line-clamp-2">{tool.toolName}</p>
                <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                </div>
            </Card>
        </a>
    );
};


export default function ClubDetailsPage({ params }: { params: { clubId: string } }) {
  const resolvedParams = React.use(params);
  const clubId = resolvedParams.clubId;
  const router = useRouter();
  const { user } = useUser();
  const firestore = useFirestore();
  const [newMessage, setNewMessage] = useState('');
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);

  // Fetch Group Data
  const groupRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return doc(firestore, 'groups', clubId);
  }, [firestore, clubId]);
  const { data: clubData, isLoading: groupLoading } = useDoc<Group>(groupRef);
  
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
  
  // Fetch Tools
  const toolsRef = useMemoFirebase(() => {
    if (!firestore) return null;
    return collection(firestore, 'groups', clubId, 'tools');
  }, [firestore, clubId]);
  const toolsQuery = useMemoFirebase(() => {
      if (!toolsRef) return null;
      return query(toolsRef, orderBy('addedAt', 'desc'));
  }, [toolsRef]);
  const { data: groupTools, isLoading: toolsLoading } = useCollection<GroupTool>(toolsQuery);


  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !firestore || !newMessage.trim() || !messagesRef || !isMember) return;

    try {
        await addDoc(messagesRef, {
        text: newMessage,
        userId: user.uid,
        userName: user.displayName || 'Anonymous',
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

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/community');
    }
  };

  return (
    <div className="bg-background min-h-screen flex flex-col items-center justify-start font-body relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-soft-blue via-lavender to-baby-pink"></div>
      </div>
      <div className="relative z-10 w-full max-w-lg p-0 md:p-6">
        <div className="bg-card/80 backdrop-blur-3xl md:rounded-[2.5rem] shadow-2xl flex flex-col min-h-screen md:min-h-0 md:max-h-[calc(100vh-3rem)] border-t-2 border-white/50 soft-shadow">
          
          <header className="flex-shrink-0">
            <div className="flex justify-between items-center p-2 border-b">
                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full" onClick={handleBack}>
                        <ArrowLeft />
                    </Button>
                    <Link href={`/community/${clubId}/info`} className="flex items-center gap-3">
                        <Avatar className='h-10 w-10'>
                            <AvatarImage src={clubData?.avatar} alt={clubData?.name} />
                            <AvatarFallback>{clubData?.name?.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="font-semibold text-lg line-clamp-1">{clubData?.name || <Skeleton className="h-5 w-32" />}</h1>
                            <div className='text-sm text-muted-foreground'>{groupLoading ? <Skeleton className="h-4 w-24" /> : `${clubData?.memberCount || '...'} members`}</div>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Button variant="ghost" size="icon" className="rounded-full"><Search /></Button>
                    <Button variant="ghost" size="icon" className="rounded-full"><MoreVertical /></Button>
                </div>
            </div>

            {groupTools && groupTools.length > 0 && (
                <div className="p-4 border-b">
                    <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-4 px-4">
                        {groupTools.map(tool => (
                            <ToolCard key={tool.id} tool={tool} />
                        ))}
                    </div>
                </div>
            )}

          </header>
          
          <div className='flex-grow overflow-y-auto no-scrollbar' ref={chatContainerRef}>
            {/* Chat Area */}
            {isMember ? (
                <div className="p-4 space-y-1 flex-grow">
                    {messagesLoading && <ChatSkeleton />}
                    {messages?.map((msg) => (
                      <div key={msg.id} className={`flex items-end gap-2 ${msg.userId === user?.uid ? 'justify-end' : 'justify-start'}`}>
                        <div className={`p-3 rounded-2xl max-w-[70%] relative ${msg.userId === user?.uid ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-secondary rounded-bl-none'}`}>
                            {msg.userId !== user?.uid && <p className="font-semibold text-sm mb-1 text-primary">{msg.userName}</p>}
                            <p className="break-words">{msg.text}</p>
                            <p className="text-xs opacity-70 mt-1 text-right">
                              {msg.createdAt ? format(msg.createdAt.toDate(), 'p') : '...'}
                            </p>
                        </div>
                      </div>
                    ))}
                </div>
            ) : (
                <div className="text-center text-muted-foreground p-8 flex flex-col items-center gap-4">
                    <p className='text-lg font-medium'>You are not a member of this club.</p>
                    {clubData?.description && <p>{clubData.description}</p>}
                    <Button onClick={handleJoinClub} disabled={!user || memberLoading}>Join Club</Button>
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
            <form onSubmit={handleSendMessage} className="p-4 bg-background/50 border-t mt-auto flex-shrink-0">
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

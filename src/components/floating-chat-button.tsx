'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { MessageSquare, Send, X } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type FloatingChatButtonProps = {
  onSendMessage: (message: string) => void;
  isGenerating: boolean;
  onButtonClick: () => void;
  showInput: boolean;
};

export function FloatingChatButton({ onSendMessage, isGenerating, onButtonClick, showInput }: FloatingChatButtonProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showInput) {
      inputRef.current?.focus();
    }
  }, [showInput]);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !isGenerating) {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className={cn("relative transition-all duration-300 ease-in-out", showInput ? 'w-80' : 'w-16')}>
        <div className={cn(
            "absolute bottom-0 right-0 transition-all duration-300 ease-in-out",
            showInput ? 'w-full' : 'w-16 h-16'
        )}>
            {showInput && (
                <div className="relative w-full">
                <Input
                    ref={inputRef}
                    placeholder="Message your assistant..."
                    className="bg-background rounded-full h-14 text-base pl-5 pr-14 border-2 border-primary/20 shadow-lg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={isGenerating}
                />
                <Button 
                    size="icon" 
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full w-10 h-10 bg-gradient-to-br from-cute-purple to-lavender glow-shadow"
                    onClick={handleSend}
                    disabled={isGenerating}
                >
                    <Send className="w-5 h-5"/>
                </Button>
                </div>
            )}
        </div>
        
        <Button
            size="icon"
            className={cn(
                "rounded-full w-16 h-16 bg-gradient-to-br from-cute-purple to-lavender glow-shadow absolute bottom-0 right-0 transition-transform duration-300 ease-in-out",
                showInput && 'rotate-90 scale-0'
            )}
            onClick={onButtonClick}
            style={{ transformOrigin: 'center' }}
            >
            <MessageSquare className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useMemo } from 'react';
import type { AITool, Category } from '@/lib/types';
import { tools as allTools, categories, categoryDetails } from '@/lib/data';
import { AppHeader } from '@/components/header';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ToolCard } from '@/components/tool-card';
import { Search } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  const filteredTools = useMemo(() => {
    return allTools.filter((tool) => {
      const matchesCategory =
        selectedCategory === 'all' || tool.category === selectedCategory;
      const matchesSearch =
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const groupedTools = useMemo(() => {
    const groupOrder = selectedCategory === 'all' ? categories : [selectedCategory];
    
    const initialGroups = groupOrder.reduce((acc, category) => {
      acc[category] = [];
      return acc;
    }, {} as Record<Category, AITool[]>);


    return filteredTools.reduce((acc, tool) => {
      if(acc[tool.category]) {
        acc[tool.category].push(tool);
      }
      return acc;
    }, initialGroups);
  }, [filteredTools, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-2">
              Discover the World of AI
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Your global hub for every AI application and tool. Explore,
              compare, and find the perfect AI solution for your needs.
            </p>
          </div>

          <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm py-4 mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for an AI tool..."
                className="w-full pl-10 h-12 rounded-full shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search for an AI tool"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                className="rounded-full"
                onClick={() => setSelectedCategory('all')}
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className="rounded-full capitalize"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {Object.entries(groupedTools).map(([category, tools]) => {
            if (tools.length === 0) return null;
            const details = categoryDetails[category as Category];
            return (
              <section key={category} className="mb-12" id={category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-primary/10 text-primary p-2 rounded-lg">
                     {details.icon}
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight capitalize">{category}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {tools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))}
                </div>
              </section>
            );
          })}

          {filteredTools.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl font-semibold text-muted-foreground">No tools found</p>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filter.</p>
            </div>
          )}

        </div>
      </main>
      <footer className="bg-secondary/50">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground text-sm">
          <p>AI Atlas &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import type { AITool } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StarRating } from '@/components/star-rating';
import { ArrowUpRight } from 'lucide-react';

interface ToolCardProps {
  tool: AITool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const averageRating =
    tool.reviews.reduce((acc, review) => acc + review.rating, 0) /
    tool.reviews.length;

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={tool.image.imageUrl}
            alt={tool.name}
            fill
            className="object-cover"
            data-ai-hint={tool.image.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="pt-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-lg font-bold leading-tight">{tool.name}</CardTitle>
          <Badge variant="secondary" className="capitalize shrink-0">{tool.category}</Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {tool.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <StarRating rating={averageRating} size={16} />
          <span className="text-xs text-muted-foreground">({tool.reviews.length})</span>
        </div>
        <Button asChild variant="ghost" size="sm" className="text-primary">
          <Link href={tool.link} target="_blank" rel="noopener noreferrer">
            Visit
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

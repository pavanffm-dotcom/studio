"use client";

import { Star, StarHalf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  totalStars?: number;
  className?: string;
  size?: number;
}

export function StarRating({
  rating,
  totalStars = 5,
  className,
  size = 16,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = totalStars - fullStars - halfStar;

  return (
    <div className={cn('flex items-center gap-0.5 text-amber-400', className)}>
      {Array.from({ length: fullStars }).map((_, i) => (
        <Star key={`full_${i}`} fill="currentColor" style={{ width: size, height: size }} />
      ))}
      {halfStar === 1 && <StarHalf fill="currentColor" style={{ width: size, height: size }} />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <Star key={`empty_${i}`} className="text-gray-300" fill="currentColor" style={{ width: size, height: size }} />
      ))}
    </div>
  );
}

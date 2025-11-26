import {
  Clapperboard,
  Camera,
  Type,
  Mic,
  Scissors,
  Zap,
  Briefcase,
  Code2,
  MoreHorizontal,
} from 'lucide-react';

export const CategoryIcons = {
  video: <Clapperboard className="w-full h-full" />,
  photo: <Camera className="w-full h-full" />,
  text: <Type className="w-full h-full" />,
  voice: <Mic className="w-full h-full" />,
  editing: <Scissors className="w-full h-full" />,
  productivity: <Zap className="w-full h-full" />,
  business: <Briefcase className="w-full h-full" />,
  coding: <Code2 className="w-full h-full" />,
  other: <MoreHorizontal className="w-full h-full" />,
};

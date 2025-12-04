import React from 'react';
import {
  Clapperboard,
  Heart,
  ImageIcon,
  Mic,
  Bot,
  Wand2,
  Search,
  LayoutGrid,
  Video,
  Type,
  Star,
  TrendingUp,
  Sparkles,
  ChevronRight,
  History,
  Voicemail,
  Text,
  UserSquare,
  Share2,
  BookOpen,
  BrainCircuit,
  Presentation,
  Feather,
  GraduationCap,
  Scissors,
  Youtube,
  Paintbrush,
  ExternalLink,
  X,
  MessageSquare,
  ImageDown,
  Send,
  LucideProps,
  Briefcase,
  DollarSign,
  UserCog,
  Contact,
  Megaphone,
  BarChart,
  GitBranch,
  ListChecks,
  Users,
} from 'lucide-react';

const iconMap: { [key: string]: React.FC<LucideProps> } = {
  Video,
  Clapperboard,
  Mic,
  UserSquare,
  ImageIcon,
  LayoutGrid,
  Text,
  Voicemail,
  ImageDown,
  Briefcase,
  DollarSign,
  UserCog,
  Contact,
  Megaphone,
  BarChart,
  GitBranch,
  ListChecks,
  Users,
  // Add other icons here as needed
};

interface ToolIconProps extends LucideProps {
  name: string;
}

export const ToolIcon: React.FC<ToolIconProps> = ({ name, ...props }) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    // Return a default icon or null if the name is not found
    return null; 
  }

  return <IconComponent {...props} />;
};

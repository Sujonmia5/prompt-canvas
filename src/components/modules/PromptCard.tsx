"use client";

import { motion } from "framer-motion";
import { Heart, Bookmark, Copy, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface PromptCardProps {
  image: string;
  title: string;
  prompt: string;
  creator: {
    name: string;
    avatar: string;
    username: string;
  };
  likes: number;
}

export const PromptCard = ({ image, title, prompt, creator, likes }: PromptCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt);
    // Add toast notification here if available
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GlassCard className="p-0 overflow-hidden border-white/5 hover:border-white/20 transition-all duration-500">
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
            <div className="flex justify-end gap-2">
              <button className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors">
                <Bookmark className="w-5 h-5 text-white" />
              </button>
              <button 
                onClick={copyPrompt}
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Copy className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-white text-sm line-clamp-3 font-medium leading-relaxed italic">
                "{prompt}"
              </p>
              <Link href={`/prompts/${title.toLowerCase().replace(/ /g, "-")}`}>
                <NeonButton className="w-full h-10 text-xs">
                  View Details <ExternalLink className="w-3 h-3 ml-2" />
                </NeonButton>
              </Link>
            </div>
          </div>
        </div>

        {/* Card Footer */}
        <div className="p-4 flex items-center justify-between bg-white/5 backdrop-blur-md">
          <Link href={`/creator/${creator.username}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-full border border-white/20 overflow-hidden bg-white/10 relative">
              <Image src={creator.avatar} alt={creator.name} fill className="object-cover" />
            </div>
            <span className="text-xs font-semibold text-white/90">{creator.name}</span>
          </Link>
          
          <button className="flex items-center gap-1.5 text-white/60 hover:text-red-500 transition-colors group/like">
            <Heart className="w-4 h-4 group-hover/like:fill-current" />
            <span className="text-xs font-medium">{likes}</span>
          </button>
        </div>
      </GlassCard>
    </motion.div>
  );
};

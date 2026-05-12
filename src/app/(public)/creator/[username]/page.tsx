"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import { PromptCard } from "@/components/modules/PromptCard";
import { Globe, Twitter, Github, MapPin, Calendar, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

export default function CreatorProfilePage({ params }: { params: { username: string } }) {
  return (
    <div className="space-y-12">
      {/* Profile Header */}
      <GlassCard className="p-8 relative overflow-hidden">
        {/* Cover Pattern */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 blur-3xl -z-10" />
        
        <div className="flex flex-col md:flex-row items-center md:items-end gap-8">
          <div className="w-32 h-32 rounded-3xl border-4 border-background overflow-hidden relative shadow-2xl">
            <Image src="https://i.pravatar.cc/300?u=arivers" alt="Creator" fill className="object-cover" />
          </div>
          
          <div className="flex-grow text-center md:text-left space-y-2">
            <h1 className="text-3xl font-bold">Alex Rivers</h1>
            <p className="text-neon-cyan font-medium">@arivers</p>
            <p className="text-white/60 max-w-xl text-sm leading-relaxed">
              Digital artist and AI explorer. Specializing in cyberpunk cityscapes and 
              surreal abstract environments. Using Midjourney and Stable Diffusion.
            </p>
          </div>

          <div className="flex gap-3">
             <NeonButton variant="primary" className="px-8">Follow</NeonButton>
             <NeonButton variant="outline" className="px-4"><Globe className="w-4 h-4" /></NeonButton>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-8 justify-center md:justify-start">
          <div className="text-center md:text-left">
            <p className="text-xl font-bold">128</p>
            <p className="text-xs text-white/40 uppercase tracking-widest">Prompts</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xl font-bold">2.4k</p>
            <p className="text-xs text-white/40 uppercase tracking-widest">Followers</p>
          </div>
          <div className="text-center md:text-left">
            <p className="text-xl font-bold">452</p>
            <p className="text-xs text-white/40 uppercase tracking-widest">Following</p>
          </div>
          <div className="hidden md:flex items-center gap-6 ml-auto text-white/40 text-xs font-medium">
             <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Tokyo, JP</span>
             <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> Joined May 2024</span>
          </div>
        </div>
      </GlassCard>

      {/* Profile Content Tabs */}
      <div className="space-y-8">
        <div className="flex border-b border-white/5">
          {["Prompts", "Collections", "Liked"].map((tab, i) => (
            <button 
              key={tab} 
              className={cn(
                "px-8 py-4 text-sm font-bold transition-all relative",
                i === 0 ? "text-neon-purple" : "text-white/40 hover:text-white"
              )}
            >
              {tab}
              {i === 0 && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-purple shadow-[0_0_10px_rgba(168,85,247,1)]" />}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <PromptCard
              key={i}
              image={`https://images.unsplash.com/photo-${1675000000000 + i}?q=80&w=800&auto=format&fit=crop`}
              title={`Cyberpunk Art #${i}`}
              prompt="A stunning cyberpunk visual created with advanced AI techniques..."
              creator={{ name: "Alex Rivers", username: "arivers", avatar: "https://i.pravatar.cc/150?u=arivers" }}
              likes={Math.floor(Math.random() * 1000) + 500}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

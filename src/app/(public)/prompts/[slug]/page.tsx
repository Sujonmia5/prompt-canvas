"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";
import { Copy, Heart, Bookmark, Share2, Info, UserPlus, Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PromptDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-8 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Image Container */}
        <div className="lg:col-span-7">
          <GlassCard className="p-0 overflow-hidden border-white/10 shadow-2xl">
            <div className="relative aspect-[4/5] w-full">
              <Image 
                src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=1200&auto=format&fit=crop" 
                alt="Cyberpunk City" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 flex items-center justify-between bg-white/[0.02]">
               <div className="flex items-center gap-6 text-sm text-white/40">
                  <span className="flex items-center gap-2"><Eye className="w-4 h-4" /> 12.4k views</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 2 days ago</span>
               </div>
               <div className="flex gap-2">
                  <NeonButton variant="outline" className="h-9 px-3"><Share2 className="w-4 h-4" /></NeonButton>
               </div>
            </div>
          </GlassCard>
        </div>

        {/* Right: Details & Actions */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Cyberpunk City: The Aftermath</h1>
            <div className="flex items-center justify-between">
              <Link href="/creator/arivers" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden relative">
                  <Image src="https://i.pravatar.cc/150?u=arivers" alt="Creator" fill />
                </div>
                <div>
                  <p className="text-sm font-bold text-white group-hover:text-neon-purple transition-colors">Alex Rivers</p>
                  <p className="text-xs text-white/40">@arivers • 2.4k followers</p>
                </div>
              </Link>
              <NeonButton variant="outline" className="h-10 text-xs font-bold border-neon-purple/20 text-neon-purple hover:bg-neon-purple/10">
                <UserPlus className="w-4 h-4 mr-2" /> Follow
              </NeonButton>
            </div>
          </div>

          <GlassCard className="p-6 space-y-6 bg-white/[0.03]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60">Prompt</h3>
                <button className="flex items-center gap-2 text-xs font-bold text-neon-cyan hover:brightness-125 transition-all">
                  <Copy className="w-3.5 h-3.5" /> Copy Prompt
                </button>
              </div>
              <p className="text-lg leading-relaxed font-medium italic text-white/90">
                "Cyberpunk city at night, rain-slicked streets, neon signs reflecting in puddles, cinematic lighting, 8k resolution, photorealistic, cinematic atmosphere, hyper-detailed textures, volumetric fog."
              </p>
            </div>

            <div className="h-px bg-white/10 w-full" />

            <div className="grid grid-cols-2 gap-y-4 text-sm">
              <div>
                <p className="text-white/40 mb-1">Model</p>
                <p className="font-semibold">Midjourney v6.0</p>
              </div>
              <div>
                <p className="text-white/40 mb-1">Aspect Ratio</p>
                <p className="font-semibold">4:5</p>
              </div>
              <div>
                <p className="text-white/40 mb-1">Steps</p>
                <p className="font-semibold">50</p>
              </div>
              <div>
                <p className="text-white/40 mb-1">CFG Scale</p>
                <p className="font-semibold">7.5</p>
              </div>
            </div>
          </GlassCard>

          <div className="flex gap-4">
            <NeonButton variant="primary" className="flex-1 h-14 text-lg">
              <Heart className="w-5 h-5 mr-2" /> Like (1.2k)
            </NeonButton>
            <NeonButton variant="outline" className="h-14 px-6">
              <Bookmark className="w-5 h-5" />
            </NeonButton>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/60 flex items-center gap-2">
              <Info className="w-4 h-4" /> Technical Parameters
            </h3>
            <GlassCard className="p-4 text-xs font-mono text-white/50 bg-black/40">
              --seed 4281920 --v 6.0 --stylize 250 --chaos 5 --tile
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { TrendingUp, Users, Heart, Eye, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { name: "Total Views", value: "24.5k", icon: Eye, trend: "+12.5%", color: "text-blue-400" },
  { name: "Total Likes", value: "1,240", icon: Heart, trend: "+8.2%", color: "text-pink-400" },
  { name: "Followers", value: "852", icon: Users, trend: "+14.1%", color: "text-purple-400" },
  { name: "Prompt Saves", value: "423", icon: TrendingUp, trend: "+5.4%", color: "text-cyan-400" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold">Welcome back, Sujon</h1>
        <p className="text-white/40 text-sm mt-1">Here's what's happening with your prompts today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <GlassCard className="p-5 hover:bg-white/[0.08] transition-all cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className={cn("p-2 rounded-lg bg-white/5", stat.color)}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
                  {stat.trend} <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-white/40 text-xs uppercase tracking-wider font-semibold">{stat.name}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Charts / Activity Placeholder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <GlassCard className="lg:col-span-2 min-h-[400px] flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold">Engagement Over Time</h3>
            <div className="flex gap-2">
              {['7D', '30D', '90D'].map((t) => (
                <button key={t} className="px-3 py-1 rounded-md text-[10px] font-bold bg-white/5 hover:bg-white/10 transition-colors">
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-grow flex items-end gap-2 px-2">
             {[40, 70, 45, 90, 65, 85, 100, 80, 50, 75, 60, 95].map((h, i) => (
               <motion.div 
                 key={i} 
                 initial={{ height: 0 }}
                 animate={{ height: `${h}%` }}
                 transition={{ delay: i * 0.05, duration: 0.8 }}
                 className="flex-1 bg-gradient-to-t from-neon-purple/80 to-neon-blue/40 rounded-t-sm" 
               />
             ))}
          </div>
          <div className="flex justify-between mt-4 px-2 text-[10px] text-white/20 font-medium">
            <span>Jan 01</span>
            <span>Jan 15</span>
            <span>Jan 30</span>
          </div>
        </GlassCard>

        <GlassCard className="lg:col-span-1">
          <h3 className="font-bold mb-6">Top Performing Prompts</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-lg bg-white/5 overflow-hidden relative border border-white/10">
                   <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/20 to-transparent" />
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-medium group-hover:text-neon-purple transition-colors">Cyberpunk City v{i}</h4>
                  <p className="text-[10px] text-white/40">Midjourney • 2.4k views</p>
                </div>
                <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
              </div>
            ))}
          </div>
          <button className="w-full mt-10 py-2 rounded-xl border border-white/5 text-xs text-white/40 hover:text-white hover:bg-white/5 transition-all">
            View All Performance
          </button>
        </GlassCard>
      </div>
    </div>
  );
}

// Helper to handle class merging
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

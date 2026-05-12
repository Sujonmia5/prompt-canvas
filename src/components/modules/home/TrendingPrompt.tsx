"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Copy, Heart, Eye } from "lucide-react";

const MOCK_TRENDING_PROMPTS = [
  {
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop",
    title: "Cyberpunk Tokyo Street Scene",
    model: "Midjourney v6",
    creator: { name: "Zraatat Wamia", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" },
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    title: "Cyberpunk Tokyo Stree Idue",
    model: "Midjourney v6",
    creator: { name: "Creator folfo", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop" },
  },
  {
    image: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?q=80&w=800&auto=format&fit=crop",
    title: "Prompt Title Spnse High Forum",
    model: "Midjourney v6",
    creator: { name: "Zrester Romfia", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
  }
];

export const TrendingPrompt = () => {
  return (
    <section className="relative">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white/90">Trending Prompts Section</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_TRENDING_PROMPTS.map((prompt, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group glass-card rounded-2xl overflow-hidden border border-white/5 bg-[#0a0d14]/80 hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)] transition-all duration-300 flex flex-col"
          >
            {/* Image Area */}
            <div className="aspect-[4/3] w-full relative overflow-hidden">
              <Image 
                src={prompt.image}
                alt={prompt.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Area */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-bold text-white/90 mb-3">{prompt.title}</h3>
              
              <div className="mb-4">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/5">
                  {prompt.model}
                </span>
              </div>

              <button className="flex items-center gap-2 w-max px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-white text-sm font-semibold shadow-lg hover:shadow-purple-500/25 hover:opacity-90 transition-all">
                <Copy className="w-4 h-4" />
                Copy Prompt
              </button>

              <div className="flex items-center gap-4 mt-6 text-white/50 text-xs font-medium">
                <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Heart className="w-4 h-4" />
                  <span>Likes</span>
                </button>
                <div className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4" />
                  <span>Views</span>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/5">
                <div className="w-6 h-6 rounded-full overflow-hidden relative">
                  <Image src={prompt.creator.avatar} alt={prompt.creator.name} fill className="object-cover" />
                </div>
                <span className="text-xs font-medium text-white/60">{prompt.creator.name}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Heart, MessageSquare, Star, Bookmark, ChevronDown, ChevronRight } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";

const CATEGORIES = ["All Prompts", "ChatGPT", "Midjourney", "DALL-E", "Stable Diffusion", "Claude", "Productivity", "Code", "Marketing"];

const MOCK_PROMPTS = [
  {
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop",
    model: "ChatGPT",
    title: "Ultimate Content Calendar Generator",
    description: "Generate a full content calendar for any niche with post ideas, captions, hashtags, and best posting times.",
    tags: ["Productivity", "Marketing", "Content"],
    creator: { name: "@prompt_master", avatar: "https://i.pravatar.cc/150?u=1", time: "2 days ago" },
    stats: { likes: "2.1K", comments: 45, rating: "92%" },
    featured: true
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    model: "Midjourney",
    title: "Cinematic Landscape Photography",
    description: "Ultra-realistic landscape photo of mountains at sunset, dramatic clouds, golden hour, 8k resolution.",
    tags: ["Photography", "Landscape", "Realistic"],
    creator: { name: "@creative_ai", avatar: "https://i.pravatar.cc/150?u=2", time: "5 hours ago" },
    stats: { likes: "1.8K", comments: 32, rating: "89%" },
    featured: false
  },
  {
    image: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?q=80&w=800&auto=format&fit=crop",
    model: "DALL-E",
    title: "3D Character Mascot Design",
    description: "Create cute 3D Pixar-style character mascots for your brand or app with simple descriptions.",
    tags: ["Design", "3D", "Character"],
    creator: { name: "@designmind", avatar: "https://i.pravatar.cc/150?u=3", time: "1 day ago" },
    stats: { likes: "1.2K", comments: 18, rating: "95%" },
    featured: false
  },
    {
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop",
    model: "ChatGPT",
    title: "Ultimate Content Calendar Generator",
    description: "Generate a full content calendar for any niche with post ideas, captions, hashtags, and best posting times.",
    tags: ["Productivity", "Marketing", "Content"],
    creator: { name: "@prompt_master", avatar: "https://i.pravatar.cc/150?u=1", time: "2 days ago" },
    stats: { likes: "2.1K", comments: 45, rating: "92%" },
    featured: true
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    model: "Midjourney",
    title: "Cinematic Landscape Photography",
    description: "Ultra-realistic landscape photo of mountains at sunset, dramatic clouds, golden hour, 8k resolution.",
    tags: ["Photography", "Landscape", "Realistic"],
    creator: { name: "@creative_ai", avatar: "https://i.pravatar.cc/150?u=2", time: "5 hours ago" },
    stats: { likes: "1.8K", comments: 32, rating: "89%" },
    featured: false
  },
    {
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop",
    model: "ChatGPT",
    title: "Ultimate Content Calendar Generator",
    description: "Generate a full content calendar for any niche with post ideas, captions, hashtags, and best posting times.",
    tags: ["Productivity", "Marketing", "Content"],
    creator: { name: "@prompt_master", avatar: "https://i.pravatar.cc/150?u=1", time: "2 days ago" },
    stats: { likes: "2.1K", comments: 45, rating: "92%" },
    featured: true
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    model: "Midjourney",
    title: "Cinematic Landscape Photography",
    description: "Ultra-realistic landscape photo of mountains at sunset, dramatic clouds, golden hour, 8k resolution.",
    tags: ["Photography", "Landscape", "Realistic"],
    creator: { name: "@creative_ai", avatar: "https://i.pravatar.cc/150?u=2", time: "5 hours ago" },
    stats: { likes: "1.8K", comments: 32, rating: "89%" },
    featured: false
  },
  {
    image: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?q=80&w=800&auto=format&fit=crop",
    model: "DALL-E",
    title: "3D Character Mascot Design",
    description: "Create cute 3D Pixar-style character mascots for your brand or app with simple descriptions.",
    tags: ["Design", "3D", "Character"],
    creator: { name: "@designmind", avatar: "https://i.pravatar.cc/150?u=3", time: "1 day ago" },
    stats: { likes: "1.2K", comments: 18, rating: "95%" },
    featured: false
  },
    {
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop",
    model: "ChatGPT",
    title: "Ultimate Content Calendar Generator",
    description: "Generate a full content calendar for any niche with post ideas, captions, hashtags, and best posting times.",
    tags: ["Productivity", "Marketing", "Content"],
    creator: { name: "@prompt_master", avatar: "https://i.pravatar.cc/150?u=1", time: "2 days ago" },
    stats: { likes: "2.1K", comments: 45, rating: "92%" },
    featured: true
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    model: "Midjourney",
    title: "Cinematic Landscape Photography",
    description: "Ultra-realistic landscape photo of mountains at sunset, dramatic clouds, golden hour, 8k resolution.",
    tags: ["Photography", "Landscape", "Realistic"],
    creator: { name: "@creative_ai", avatar: "https://i.pravatar.cc/150?u=2", time: "5 hours ago" },
    stats: { likes: "1.8K", comments: 32, rating: "89%" },
    featured: false
  },

];

const TOP_CREATORS = [
  { name: "@prompt_master", prompts: "12.4K prompts", earned: "$2,450 earned", avatar: "https://i.pravatar.cc/150?u=1" },
  { name: "@creative_ai", prompts: "8.7K prompts", earned: "$1,890 earned", avatar: "https://i.pravatar.cc/150?u=2" },
  { name: "@designmind", prompts: "6.3K prompts", earned: "$1,230 earned", avatar: "https://i.pravatar.cc/150?u=3" },
  { name: "@ai_artist", prompts: "5.1K prompts", earned: "$980 earned", avatar: "https://i.pravatar.cc/150?u=4" },
  { name: "@marketing_pro", prompts: "4.8K prompts", earned: "$870 earned", avatar: "https://i.pravatar.cc/150?u=5" },
];

export const PromptFeedLayout = () => {
  const [activeCategory, setActiveCategory] = useState("All Prompts");

  return (
    <section className="flex flex-col gap-6 w-full ">
      {/* Top Filter Bar - Sticky */}
      <div className="sticky top-0 z-30 bg-[#161618]/90 backdrop-blur-xl -mx-4 px-5 sm:mx-0 sm:px-1 py-4 mb-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide w-full md:w-auto">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                ? "bg-purple-600 text-white shadow-[0_0_15px_-3px_rgba(147,51,234,0.5)]" 
                : "bg-slate-800/50 text-white/70 hover:bg-slate-700/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
          <button className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium bg-slate-800/50 text-white/70 hover:bg-slate-700/50 flex items-center gap-1">
            More <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <button className="shrink-0 px-4 py-2 rounded-lg text-sm font-medium bg-slate-800/50 text-white/90 hover:bg-slate-700/50 flex items-center gap-2 border border-white/5">
          Latest <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Side: Prompts List */}
        <div className="lg:col-span-2 space-y-4">
          <AnimatePresence mode="popLayout">
            {MOCK_PROMPTS.map((prompt, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex flex-col md:flex-row p-4 rounded-2xl border border-white/5 gap-6 hover:border-white/10 transition-colors glass-card bg-[#0a0d14]/80 shadow-2xl" 
              >
                {/* Image */}
                <div className="relative w-full md:w-64 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
                  <Image 
                    src={prompt.image}
                    alt={prompt.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between py-1">
                  
                  {/* Top Row: Tags & Badges */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${
                      prompt.model === 'ChatGPT' ? 'bg-emerald-500/20 text-emerald-400' :
                      prompt.model === 'Midjourney' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {prompt.model}
                    </span>

                    {prompt.featured && (
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-600 text-white text-xs font-bold shadow-[0_0_10px_-2px_rgba(147,51,234,0.6)]">
                        <Star className="w-3.5 h-3.5 fill-white" /> Featured
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white/95 mb-2">{prompt.title}</h3>
                    <p className="text-sm text-white/60 line-clamp-2 leading-relaxed">
                      {prompt.description}
                    </p>
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {prompt.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-md bg-slate-800/60 text-white/50 text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Row: Creator & Stats */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="relative w-7 h-7 rounded-full overflow-hidden">
                        <Image src={prompt.creator.avatar} alt={prompt.creator.name} fill className="object-cover" />
                      </div>
                      <span className="text-sm text-white/60 font-medium">{prompt.creator.name}</span>
                      <span className="text-xs text-white/30">{prompt.creator.time}</span>
                    </div>

                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm font-medium">{prompt.stats.likes}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-sm font-medium">{prompt.stats.comments}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <Star className="w-4 h-4" />
                        <span className="text-sm font-medium">{prompt.stats.rating}</span>
                      </div>
                      <button className="text-white/40 hover:text-white transition-colors ml-2">
                        <Bookmark className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: MOCK_PROMPTS.length * 0.1 }}
            className="flex items-center justify-center mt-8">
            <button className="px-6 py-3 rounded-xl text-sm font-bold bg-purple-600 text-white hover:bg-purple-500 shadow-[0_0_15px_-3px_rgba(147,51,234,0.6)] transition-all">
              Load More
            </button>
          </motion.div>
        </div>

        {/* Right Sidebar: Widgets - Sticky Column */}
        <div className="lg:col-span-1 space-y-6 sticky top-24 self-start">
          
          {/* 1. Top Creators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="rounded-2xl border border-white/5 p-6 shadow-xl glass-card bg-[#0a0d14]/80"
          >
            <h3 className="text-lg font-bold text-white/95 mb-6">Top Creators</h3>
            
            <div className="space-y-6">
              {TOP_CREATORS.slice(0, 4).map((creator, index) => (
                <div key={index} className="flex items-center gap-4 group cursor-pointer">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 group-hover:border-purple-500/50 transition-colors">
                    <Image src={creator.avatar} alt={creator.name} fill className="object-cover" />
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-white/90 group-hover:text-purple-400 transition-colors">
                      {creator.name}
                    </span>
                    <span className="text-xs text-white/50 mt-0.5">
                      {creator.prompts}
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-emerald-400 ml-auto">
                    {creator.earned}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full flex items-center justify-center gap-2 mt-6 pt-6 border-t border-white/5 text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
              View all creators <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* 2. Recent Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="rounded-2xl border border-white/5 p-6 shadow-xl glass-card bg-[#0a0d14]/80"
          >
            <h3 className="text-lg font-bold text-white/95 mb-6">Recent Prompts</h3>
            <div className="space-y-4">
              {[
                { title: "UI/UX App Design Concept", time: "2 hours ago", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop" },
                { title: "Fantasy Character Concept", time: "5 hours ago", img: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?w=100&h=100&fit=crop" },
                { title: "Minimalist Logo Pack", time: "8 hours ago", img: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?w=100&h=100&fit=crop" }
              ].map((post, i) => (
                <div key={i} className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 rounded-xl overflow-hidden relative border border-white/5 group-hover:border-purple-500/30 transition-colors shrink-0">
                     <Image src={post.img} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-sm font-semibold text-white/90 truncate group-hover:text-purple-400 transition-colors">{post.title}</h4>
                    <p className="text-xs text-white/40 mt-1">{post.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. Ad Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="rounded-2xl p-1 relative overflow-hidden border border-white/5 bg-[#0a0d14]/80 shadow-2xl group"
          >
             <div className="absolute top-4 right-4 z-10 text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold bg-black/50 px-2 py-1 rounded-md backdrop-blur-md">Ad</div>
             
             <div className="rounded-xl overflow-hidden relative aspect-[4/3] w-full bg-gradient-to-br from-[#1a1438] to-[#0a0d14]">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                   <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-blue-500 flex items-center justify-center mb-4 shadow-[0_0_30px_-5px_rgba(168,85,247,0.5)]">
                     <span className="text-xl font-black text-white tracking-tighter">PRO</span>
                   </div>
                   <h4 className="text-xl font-bold text-white mb-2">Unlock Pro</h4>
                   <p className="text-xs text-white/70 mb-6 leading-relaxed">Access premium AI models and exclusive prompt templates.</p>
                   <button className="w-full py-2.5 px-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors shadow-xl text-sm">
                     Upgrade Now
                   </button>
                </div>
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/20 rounded-full blur-[48px] group-hover:bg-purple-500/30 transition-colors duration-700"></div>
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-[48px] group-hover:bg-blue-500/30 transition-colors duration-700"></div>
             </div>
          </motion.div>

          {/* 4. Subscribe Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="rounded-2xl border border-white/5 p-6 shadow-xl glass-card bg-gradient-to-b from-[#0a0d14]/90 to-[#150a21]/90 relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                  <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white/95">Newsletter</h3>
              </div>
              <p className="text-sm text-white/60 mb-5 leading-relaxed">Get the best AI prompts delivered directly to your inbox every week.</p>
              
              <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all placeholder:text-white/30"
                  required
                />
                <NeonButton variant="primary" className="w-full py-3 h-auto text-sm">
                  Subscribe
                </NeonButton>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Clock, 
  ArrowRight, 
  Calendar, 
  User, 
  ChevronRight,
  TrendingUp,
  Mail,
  Sparkles
} from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";

const CATEGORIES = ["All Articles", "Midjourney", "ChatGPT", "DALL-E", "Stable Diffusion", "Prompt Engineering", "Tutorials", "AI Trends"];

const MOCK_BLOGS = [
  {
    id: 1,
    title: "Mastering Cinematic Lighting in Midjourney v6: A Complete Guide",
    excerpt: "Discover the secret keywords and lighting techniques that will transform your AI generated images into cinematic masterpieces. From volumetric fog to rim lighting, we cover it all.",
    category: "Midjourney",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    author: { name: "Alex Rivera", avatar: "https://i.pravatar.cc/150?u=1" },
    date: "May 12, 2026",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "10 ChatGPT Prompts for Next.js Developers to Boost Productivity",
    excerpt: "Supercharge your development workflow with these curated ChatGPT prompts. Learn how to generate boilerplate, debug complex logic, and optimize your React components effortlessly.",
    category: "ChatGPT",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    author: { name: "Sarah Chen", avatar: "https://i.pravatar.cc/150?u=2" },
    date: "May 10, 2026",
    readTime: "5 min read",
  },
  {
    id: 3,
    title: "The Rise of Flux.1: Why It's Changing the AI Art Landscape",
    excerpt: "A deep dive into the architecture and capabilities of the new Flux.1 model. See how it compares to Midjourney and Stable Diffusion in terms of realism and prompt adherence.",
    category: "AI Trends",
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop",
    author: { name: "Marco Rossi", avatar: "https://i.pravatar.cc/150?u=3" },
    date: "May 08, 2026",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "How to Build a Custom GPT for Your SaaS Product",
    excerpt: "Learn the step-by-step process of creating a custom GPT that understands your product's documentation and helps your users solve problems in real-time.",
    category: "Tutorials",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    author: { name: "Emily Watson", avatar: "https://i.pravatar.cc/150?u=4" },
    date: "May 05, 2026",
    readTime: "12 min read",
  },
  {
    id: 5,
    title: "Stable Diffusion 3: First Impressions and Best Practices",
    excerpt: "We put Stable Diffusion 3 to the test. Discover our findings on text rendering, anatomy accuracy, and the best settings for high-resolution outputs.",
    category: "Stable Diffusion",
    image: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?q=80&w=800&auto=format&fit=crop",
    author: { name: "James Wilson", avatar: "https://i.pravatar.cc/150?u=5" },
    date: "May 03, 2026",
    readTime: "7 min read",
  },
  {
    id: 6,
    title: "Advanced Prompt Engineering: The Power of Chain of Thought",
    excerpt: "Move beyond simple instructions. Learn how to use Chain of Thought prompting to help LLMs solve complex reasoning problems with higher accuracy.",
    category: "Prompt Engineering",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop",
    author: { name: "Alex Rivera", avatar: "https://i.pravatar.cc/150?u=1" },
    date: "May 01, 2026",
    readTime: "10 min read",
  },
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const featuredBlog = MOCK_BLOGS.find(b => b.featured) || MOCK_BLOGS[0];
  const regularBlogs = MOCK_BLOGS.filter(b => !b.featured);

  return (
    <div className="space-y-12 pb-20">
      {/* Featured Hero Section */}
      <section className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] group cursor-pointer h-[500px] lg:h-[600px]">
        <Image 
          src={featuredBlog.image}
          alt={featuredBlog.title}
          fill
          className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020205] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020205]/80 via-transparent to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-16 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-neon-purple text-white text-xs font-bold shadow-[0_0_20px_-5px_rgba(168,85,247,0.5)]">
                Featured Article
              </span>
              <span className="text-white/60 text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {featuredBlog.date}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-6 leading-tight group-hover:text-neon-purple transition-colors">
              {featuredBlog.title}
            </h1>
            
            <p className="text-lg text-white/60 mb-8 line-clamp-3 leading-relaxed">
              {featuredBlog.excerpt}
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                  <Image src={featuredBlog.author.avatar} alt={featuredBlog.author.name} fill className="object-cover" />
                </div>
                <span className="text-white font-medium">{featuredBlog.author.name}</span>
              </div>
              <div className="h-4 w-px bg-white/20" />
              <div className="flex items-center text-white/60 text-sm gap-2">
                <Clock className="w-4 h-4" />
                {featuredBlog.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Category Bar */}
      <div className="sticky top-[78px] z-30 bg-[#020205]/60 backdrop-blur-xl -mx-4 px-5 sm:mx-0 sm:px-1 py-4 mb-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === category 
                ? "bg-neon-purple text-white shadow-[0_0_15px_-3px_rgba(168,85,247,0.5)]" 
                : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content: Blog Feed */}
        <div className="lg:col-span-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col bg-[#0a0d14]/80 rounded-2xl border border-white/5 overflow-hidden hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-neon-purple/5"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-neon-purple text-xs font-bold border border-neon-purple/30">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-white/40 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {blog.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h3>
                  
                  <p className="text-sm text-white/60 line-clamp-3 mb-6 flex-1">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10">
                        <Image src={blog.author.avatar} alt={blog.author.name} fill className="object-cover" />
                      </div>
                      <span className="text-xs text-white/80 font-medium">{blog.author.name}</span>
                    </div>
                    <NeonButton variant="ghost" className="px-0 py-0 text-neon-purple flex items-center gap-1 text-xs">
                      Read More <ArrowRight className="w-3 h-3" />
                    </NeonButton>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Pagination/Load More */}
          <div className="flex justify-center pt-8">
            <NeonButton variant="outline" className="px-8 border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10">
              Load More Articles
            </NeonButton>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-4 space-y-10">
          <div className="sticky top-[150px] space-y-10">
            {/* Search Widget */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
              <input 
                type="text"
                placeholder="Search articles..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
              />
            </div>

            {/* Trending Section */}
            <div className="rounded-2xl border border-white/5 p-6 bg-[#0a0d14]/80 shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-5 h-5 text-neon-purple" />
                <h3 className="text-lg font-bold text-white">Trending Now</h3>
              </div>
              <div className="space-y-6">
                {MOCK_BLOGS.slice(0, 3).map((post, i) => (
                  <div key={i} className="group flex gap-4 cursor-pointer">
                    <span className="text-2xl font-black text-white/10 group-hover:text-neon-purple/20 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white/90 group-hover:text-neon-purple transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-xs text-white/40">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Widget */}
            <div className="rounded-2xl border border-white/5 p-8 bg-gradient-to-br from-[#0a0d14] to-[#150a21] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <Mail className="w-8 h-8 text-neon-purple mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Get Prompt Weekly</h3>
                <p className="text-sm text-white/60 mb-6">
                  Join 10,000+ creators and get the best AI prompts and insights delivered to your inbox.
                </p>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all placeholder:text-white/30"
                  />
                  <NeonButton className="w-full">Subscribe Now</NeonButton>
                </form>
              </div>
            </div>

            {/* Tags Widget */}
            <div className="rounded-2xl border border-white/5 p-6 bg-[#0a0d14]/80">
              <h3 className="text-lg font-bold text-white mb-6">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["AI Art", "Photography", "Marketing", "SaaS", "Dev", "UX Design", "Copywriting"].map(tag => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-white/60 hover:text-white hover:border-white/20 cursor-pointer transition-all">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Banner Ad */}
            <div className="rounded-2xl overflow-hidden relative aspect-[4/5] group cursor-pointer border border-white/10">
              <Image 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
                alt="Ad" 
                fill 
                className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute top-4 right-4 text-[10px] text-white/40 uppercase tracking-widest font-bold bg-black/50 px-2 py-1 rounded-md backdrop-blur-md">Ad</div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <Sparkles className="w-8 h-8 text-neon-purple mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Upgrade to Pro</h4>
                <p className="text-sm text-white/60 mb-6">Unlimited access to premium prompt templates.</p>
                <NeonButton variant="primary" className="w-full">Go Pro</NeonButton>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

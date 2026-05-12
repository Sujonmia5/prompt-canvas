"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Clock, 
  Calendar, 
  User, 
  Share2, 
  Heart, 
  Bookmark, 
  ArrowLeft,
  MessageSquare,

  Copy,
  TrendingUp,
  ChevronRight,
  List
} from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";
import ProgressBar from "@/components/utils/ProgressBar";

// Mock data for the blog post
const BLOG_POST = {
  title: "Mastering Cinematic Lighting in Midjourney v6: A Complete Guide",
  subtitle: "Transform your AI generated images into cinematic masterpieces with secret keywords and advanced lighting techniques.",
  category: "Midjourney",
  author: {
    name: "Alex Rivera",
    role: "AI Artist & Prompt Engineer",
    avatar: "https://i.pravatar.cc/150?u=1",
    bio: "Alex is a pioneer in AI-driven digital art, with over 5 years of experience in procedural generation and prompt optimization."
  },
  date: "May 12, 2026",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1200&auto=format&fit=crop",
  content: `
    <p>Artificial Intelligence has revolutionized the way we create visual art. Midjourney v6, in particular, has introduced a level of nuance and control that was previously unthinkable. One of the most critical aspects of creating high-quality AI art is <strong>cinematic lighting</strong>.</p>

    <h2>The Importance of Lighting</h2>
    <p>In traditional cinematography, lighting is everything. It sets the mood, directs the viewer's eye, and gives depth to the scene. The same principles apply to AI generation. Without specific lighting instructions, your images might look flat or "too digital."</p>

    <blockquote>
      "Lighting is the language of photography. It's the paintbrush that defines form, texture, and emotion."
    </blockquote>

    <h2>Key Lighting Terms to Use</h2>
    <p>To achieve a truly cinematic look, you need to use specific terminology that the Midjourney model understands. Here are some of the most effective keywords:</p>
    <ul>
      <li><strong>Volumetric Lighting:</strong> Creates visible beams of light, perfect for adding atmosphere.</li>
      <li><strong>Rim Lighting:</strong> Places a thin line of light around the subject, separating them from the background.</li>
      <li><strong>Chiaroscuro:</strong> High-contrast lighting with deep shadows and bright highlights.</li>
      <li><strong>Golden Hour:</strong> Warm, soft light that creates a magical, inviting feel.</li>
    </ul>

    <h2>Practical Examples</h2>
    <p>Let's look at how adding these keywords changes a prompt. A simple prompt like "a futuristic city" will give you a generic result. But if you change it to:</p>
    <pre><code>/imagine prompt: A futuristic cyberpunk city at night, volumetric neon fog, rain-slicked streets, cinematic wide angle, chiaroscuro lighting, shot on IMAX --v 6.0</code></pre>
    <p>The result will be vastly different, with deep shadows and glowing highlights that feel grounded in reality.</p>

    <div class="my-10 aspect-video relative rounded-2xl overflow-hidden border border-white/10">
      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop" alt="Cinematic Example" class="object-cover w-full h-full" />
    </div>

    <h2>Final Tips for Midjourney v6</h2>
    <p>Experiment with light sources. Mention specifically where the light is coming from (e.g., "overhead lighting," "side-lit from left"). Also, don't forget to specify the camera settings like aperture (f/1.8) and focal length (35mm) as these indirectly affect how light is rendered.</p>
  `,
  tags: ["Midjourney", "AI Art", "Cinematography", "Prompt Engineering"],
};

const RELATED_POSTS = [
  {
    id: 2,
    title: "10 ChatGPT Prompts for Next.js Developers",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop",
    date: "May 10",
  },
  {
    id: 3,
    title: "The Rise of Flux.1: Changing the Art Landscape",
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=400&auto=format&fit=crop",
    date: "May 08",
  },
  {
    id: 4,
    title: "How to Build a Custom GPT for Your SaaS",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
    date: "May 05",
  },
];

export default function BlogDetailsPage() {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="min-h-screen text-white selection:bg-neon-purple/30 selection:text-white">

      <div className="pb-20">
        {/* Back Button */}
        <Link 
          href="/blogs" 
          className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Articles</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <article className="lg:col-span-8">
            {/* Header */}
            <header className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-lg bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-bold uppercase tracking-wider">
                    {BLOG_POST.category}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="text-white/40 text-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {BLOG_POST.date}
                  </span>
                  <div className="h-1 w-1 rounded-full bg-white/20" />
                  <span className="text-white/40 text-sm flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {BLOG_POST.readTime}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tight">
                  {BLOG_POST.title}
                </h1>

                <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-3xl">
                  {BLOG_POST.subtitle}
                </p>

                {/* Author Info (Header) */}
                <div className="flex items-center justify-between py-8 border-y border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 ring-4 ring-neon-purple/5">
                      <Image src={BLOG_POST.author.avatar} alt={BLOG_POST.author.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-white font-bold">{BLOG_POST.author.name}</div>
                      <div className="text-white/40 text-sm">{BLOG_POST.author.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/60 hover:text-white">
                      {/* <Twitter className="w-5 h-5" /> */}
                    </button>
                    <button className="p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all text-white/60 hover:text-white">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </header>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 mb-16 group"
            >
              <Image 
                src={BLOG_POST.image} 
                alt={BLOG_POST.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020205]/40 to-transparent" />
            </motion.div>

            {/* Content Body */}
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: BLOG_POST.content }}
            />

            {/* Tags & Actions */}
            <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap items-center justify-between gap-8">
              <div className="flex flex-wrap gap-2">
                {BLOG_POST.tags.map(tag => (
                  <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-sm text-white/50 hover:text-white hover:border-white/20 transition-all cursor-pointer">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl border transition-all ${
                    isLiked 
                    ? "bg-red-500/10 border-red-500/50 text-red-500 shadow-[0_0_20px_-5px_rgba(239,68,68,0.3)]" 
                    : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
                  <span className="font-bold">1.2k</span>
                </button>
                <button 
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-3 rounded-2xl border transition-all ${
                    isSaved 
                    ? "bg-neon-purple/10 border-neon-purple/50 text-neon-purple shadow-[0_0_20px_-5px_rgba(168,85,247,0.3)]" 
                    : "bg-white/5 border-white/10 text-white/60 hover:text-white hover:border-white/20"
                  }`}
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`} />
                </button>
              </div>
            </div>

            {/* Author Card (Bottom) */}
            <div className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-[#0a0d14] to-[#050505] border border-white/5 flex flex-col md:flex-row gap-8 items-center text-center md:text-left">
              <div className="relative w-24 h-24 rounded-3xl overflow-hidden border border-white/10 shrink-0">
                <Image src={BLOG_POST.author.avatar} alt={BLOG_POST.author.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest text-neon-purple font-black mb-1">About the Author</h4>
                <h3 className="text-2xl font-bold text-white mb-3">{BLOG_POST.author.name}</h3>
                <p className="text-white/60 leading-relaxed mb-6">
                  {BLOG_POST.author.bio}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <NeonButton variant="outline" className="h-10 px-6 text-sm">Follow Author</NeonButton>
                  <button className="text-white/40 hover:text-white transition-colors">
                    {/* <Twitter className="w-5 h-5" /> */}
                  </button>
                  <button className="text-white/40 hover:text-white transition-colors">
                    {/* <Linkedin className="w-5 h-5" /> */}
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 space-y-12">
              {/* Table of Contents */}
              <div className="p-8 rounded-3xl border border-white/5 bg-[#0a0d14]/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <List className="w-5 h-5 text-neon-purple" />
                  <h3 className="text-lg font-bold text-white">Table of Contents</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "The Importance of Lighting",
                    "Key Lighting Terms to Use",
                    "Practical Examples",
                    "Final Tips for Midjourney v6"
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 group cursor-pointer">
                      <span className="text-white/10 group-hover:text-neon-purple/40 font-black transition-colors">0{i+1}</span>
                      <span className="text-white/50 group-hover:text-white transition-colors text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trending Posts */}
              <div className="p-8 rounded-3xl border border-white/5 bg-[#0a0d14]/50 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="w-5 h-5 text-neon-purple" />
                  <h3 className="text-lg font-bold text-white">Related Articles</h3>
                </div>
                <div className="space-y-8">
                  {RELATED_POSTS.map((post) => (
                    <Link key={post.id} href={`/blogs/${post.id}`} className="group flex gap-4">
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden border border-white/5 shrink-0">
                        <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-white group-hover:text-neon-purple transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-[10px] text-white/40 uppercase tracking-widest font-bold">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>5 min read</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                <Link href="/blogs" className="mt-8 flex items-center justify-center gap-2 text-sm font-bold text-neon-purple hover:gap-3 transition-all pt-8 border-t border-white/5">
                  View All Articles <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Newsletter */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-neon-purple/20 to-transparent border border-neon-purple/20 relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-neon-purple/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
                <h3 className="text-xl font-bold text-white mb-3">Newsletter</h3>
                <p className="text-sm text-white/60 mb-6 leading-relaxed">
                  Get the latest AI prompt techniques delivered to your inbox.
                </p>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 mb-4 transition-all"
                />
                <NeonButton className="w-full">Subscribe</NeonButton>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Recommended Section (Bottom) */}
      <section className="border-t border-white/5 bg-[#050505] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black text-white">Recommended for you</h2>
            <Link href="/blogs" className="text-neon-purple hover:underline font-bold">View all</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {RELATED_POSTS.map((post) => (
              <Link key={post.id} href={`/blogs/${post.id}`} className="group">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 mb-6">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-neon-purple transition-colors line-clamp-2 mb-3">
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-white/40 text-sm">
                  <span>May 12, 2026</span>
                  <div className="h-1 w-1 rounded-full bg-white/20" />
                  <span>8 min read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

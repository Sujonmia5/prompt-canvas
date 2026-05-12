import { NeonButton } from "@/components/ui/neon-button";
import Image from "next/image";
import { ArrowRight, Clock, Sparkles } from "lucide-react";

const MOCK_BLOGS = [
  {
    title: "Mastering Cinematic Lighting in Midjourney v6",
    excerpt: "Learn how to use prompt keywords to achieve breathtaking cinematic lighting in your AI generated images.",
    category: "Midjourney",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    readTime: "5 min read",
    date: "May 12, 2026",
  },
  {
    title: "10 ChatGPT Prompts for Next.js Developers",
    excerpt: "Boost your web development workflow with these curated ChatGPT prompts specifically designed for Next.js and React.",
    category: "ChatGPT",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    readTime: "4 min read",
    date: "May 10, 2026",
  },
  {
    title: "Stable Diffusion: Best Checkpoints for Photorealism",
    excerpt: "A comprehensive review of the top Stable Diffusion checkpoints for generating photorealistic portraits and landscapes.",
    category: "Stable Diffusion",
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop",
    readTime: "7 min read",
    date: "May 08, 2026",
  },
  {
    title: "The Art of Negative Prompting",
    excerpt: "Discover how to effectively use negative prompts to remove unwanted artifacts and elements from your AI art.",
    category: "Tutorial",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    readTime: "6 min read",
    date: "May 05, 2026",
  }
];

export function IdeaBlogSection() {
  const featuredBlog = MOCK_BLOGS[0];
  const regularBlogs = MOCK_BLOGS.slice(1);

  return (
    <section>
      <div className="flex items-center justify-between mb-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Prompt Ideas & Insights
            </h2>
          </div>
          <p className="text-white/40 mt-1">Discover guides, trends, and inspiration for your next prompt</p>
        </div>
        <NeonButton variant="ghost" className="text-neon-cyan group">
          View all articles
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </NeonButton>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Featured Post */}
        <div className="lg:col-span-7 group cursor-pointer">
          <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A]">
            <Image 
              src={featuredBlog.image}
              alt={featuredBlog.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30 rounded-full backdrop-blur-md">
                  {featuredBlog.category}
                </span>
                <div className="flex items-center text-white/50 text-xs gap-1">
                  <Clock className="w-3 h-3" />
                  {featuredBlog.readTime}
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                {featuredBlog.title}
              </h3>
              <p className="text-white/60 line-clamp-2 max-w-2xl">
                {featuredBlog.excerpt}
              </p>
            </div>
          </div>
        </div>

        {/* Regular Posts List */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {regularBlogs.map((blog, index) => (
            <div 
              key={index}
              className="group flex gap-4 p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden flex-shrink-0">
                <Image 
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium text-neon-cyan">
                    {blog.category}
                  </span>
                  <span className="text-white/30 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {blog.readTime}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white/90 group-hover:text-white mb-2 line-clamp-2 leading-snug">
                  {blog.title}
                </h4>
                <p className="text-white/40 text-xs line-clamp-2">
                  {blog.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

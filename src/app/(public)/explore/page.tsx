import { MasonryPromptCard } from "@/components/modules/explore/MasonryPromptCard";
import Image from "next/image";

const CATEGORIES = [
  "Product Photography", "Cinematic", "Fashion", "Anime", "Luxury Ads", "Portraits", "Concept Art", "Interior Design", "3D Render"
];

const MOCK_MASONRY_DATA = [
  {
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop",
    title: "Cyberpunk Tokyo Street Scene",
    model: "Midjourney v6",
    creator: { name: "Zraafat Vania", avatar: "https://i.pravatar.cc/150?u=1" },
    stats: { likes: "24k", views: "150k" },
    aspectRatio: "aspect-[4/5]",
  },
  {
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    title: "High-End Product Photography",
    model: "Flux.1",
    creator: { name: "Erester Romfa", avatar: "https://i.pravatar.cc/150?u=2" },
    stats: { likes: "18k", views: "80k" },
    aspectRatio: "aspect-square",
  },
  {
    image: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?q=80&w=800&auto=format&fit=crop",
    title: "Studio Ghibli Style Anime",
    model: "Midjourney v5",
    creator: { name: "B. Imaraat", avatar: "https://i.pravatar.cc/150?u=3" },
    stats: { likes: "32k", views: "200k" },
    aspectRatio: "aspect-[3/4]",
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    title: "Avant-Garde Fashion Editorial",
    model: "Midjourney v6.2",
    creator: { name: "Cenrox Bonvel", avatar: "https://i.pravatar.cc/150?u=4" },
    stats: { likes: "12k", views: "60k" },
    aspectRatio: "aspect-[4/5]",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    title: "Cinematic Portrait Photography",
    model: "Flux.1",
    creator: { name: "Tiamovakoewal", avatar: "https://i.pravatar.cc/150?u=5" },
    stats: { likes: "21k", views: "110k" },
    aspectRatio: "aspect-[3/4]",
  },
  {
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop",
    title: "3D Automotive Concept Art",
    model: "Midjourney v6",
    creator: { name: "Georor Jammel", avatar: "https://i.pravatar.cc/150?u=6" },
    stats: { likes: "8k", views: "45k" },
    aspectRatio: "aspect-video",
  },
    {
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=800&auto=format&fit=crop",
    title: "Cyberpunk Tokyo Street Scene",
    model: "Midjourney v6",
    creator: { name: "Zraafat Vania", avatar: "https://i.pravatar.cc/150?u=1" },
    stats: { likes: "24k", views: "150k" },
    aspectRatio: "aspect-[4/5]",
  },
  {
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    title: "High-End Product Photography",
    model: "Flux.1",
    creator: { name: "Erester Romfa", avatar: "https://i.pravatar.cc/150?u=2" },
    stats: { likes: "18k", views: "80k" },
    aspectRatio: "aspect-square",
  },
  {
    image: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?q=80&w=800&auto=format&fit=crop",
    title: "Studio Ghibli Style Anime",
    model: "Midjourney v5",
    creator: { name: "B. Imaraat", avatar: "https://i.pravatar.cc/150?u=3" },
    stats: { likes: "32k", views: "200k" },
    aspectRatio: "aspect-[3/4]",
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    title: "Avant-Garde Fashion Editorial",
    model: "Midjourney v6.2",
    creator: { name: "Cenrox Bonvel", avatar: "https://i.pravatar.cc/150?u=4" },
    stats: { likes: "12k", views: "60k" },
    aspectRatio: "aspect-[4/5]",
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
    title: "Cinematic Portrait Photography",
    model: "Flux.1",
    creator: { name: "Tiamovakoewal", avatar: "https://i.pravatar.cc/150?u=5" },
    stats: { likes: "21k", views: "110k" },
    aspectRatio: "aspect-[3/4]",
  },
  {
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=800&auto=format&fit=crop",
    title: "3D Automotive Concept Art",
    model: "Midjourney v6",
    creator: { name: "Georor Jammel", avatar: "https://i.pravatar.cc/150?u=6" },
    stats: { likes: "8k", views: "45k" },
    aspectRatio: "aspect-video",
  },
];

export default function ExplorePage() {
  return (
    <div className="space-y-8 pb-20">
      <div>
        <h1 className="text-3xl font-bold text-white mb-6 px-1">Explore & Categories</h1>
        
        {/* Sticky Categories Wrapper */}
        <div className="sticky top-[78px] z-30 bg-[#020205]/60 backdrop-blur-xl -mx-4 px-5 sm:mx-0 sm:px-1 py-4 mb-4">
          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat} 
                className={`whitespace-nowrap px-5 py-2 rounded-full border text-sm font-medium transition-all ${
                  cat === "Cinematic" 
                  ? "border-indigo-500 bg-indigo-500/10 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]" 
                  : "border-white/10 bg-[#0F0F13] text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column: Masonry Grid */}
        <div className="flex-1">
          <div className="columns-2 sm:columns-3 gap-2 space-y-2 sm:gap-4 sm:space-y-2">
            {MOCK_MASONRY_DATA.map((item, i) => (
              <MasonryPromptCard key={i} {...item} />
            ))}
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:w-[320px] shrink-0 space-y-6 sticky top-24 self-start"> 
          {/* Featured Prompts Sidebar-like Block */}
          <div className="p-4 border border-white/10 bg-[#0F0F13] rounded-2xl">
            <h3 className="text-white font-bold text-sm mb-4">Featured Prompts</h3>
            <div className="flex flex-col gap-3">
              {[
                { title: "Surreal Dreamscape", user: "User1" },
                { title: "Macro Nature Shot", user: "User2" },
                { title: "Retro Sci-Fi Poster", user: "User3" }
              ].map((featured, i) => (
                <div key={i} className="flex gap-3 items-center group cursor-pointer">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                    <Image src={`https://images.unsplash.com/photo-${1670000000000 + i * 1000}?q=80&w=200&auto=format&fit=crop`} alt="Thumb" fill className="object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white text-xs font-bold group-hover:text-neon-cyan transition-colors line-clamp-1">{featured.title}</span>
                    <span className="text-white/40 text-[10px]">{featured.user}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tools Ad Block */}
          <div className="p-5 border border-indigo-500/30 bg-gradient-to-b from-[#0F0F13] to-indigo-900/20 rounded-2xl flex flex-col items-center text-center relative overflow-hidden group">
            <div className="relative w-32 h-32 mb-4">
              <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=400&auto=format&fit=crop" alt="AI Brain" fill className="object-cover mix-blend-screen opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 rounded-xl" />
            </div>
            <span className="text-white/40 text-[10px] mb-2 uppercase tracking-wider font-semibold">AI Tools</span>
            <h3 className="text-white font-bold text-sm mb-4 leading-snug">Optimize Prompts with AI Tuner. Enhance your creations.</h3>
            <button className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-500 text-white text-xs font-bold hover:opacity-90 hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all">
              Try Now
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

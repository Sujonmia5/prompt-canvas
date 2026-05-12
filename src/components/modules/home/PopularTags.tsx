import { Hash, Sparkles, Image as ImageIcon, MessageSquare, Camera, Layout, Megaphone, Box, Cpu, PenTool } from "lucide-react";
import Link from "next/link";

const MOCK_TAGS = [
  { name: "Midjourney", count: "2.4k", icon: ImageIcon, color: "group-hover:text-purple-400", bg: "group-hover:bg-purple-400/10", border: "group-hover:border-purple-400/50" },
  { name: "ChatGPT", count: "3.1k", icon: MessageSquare, color: "group-hover:text-green-400", bg: "group-hover:bg-green-400/10", border: "group-hover:border-green-400/50" },
  { name: "Photography", count: "1.8k", icon: Camera, color: "group-hover:text-blue-400", bg: "group-hover:bg-blue-400/10", border: "group-hover:border-blue-400/50" },
  { name: "Web Design", count: "1.2k", icon: Layout, color: "group-hover:text-pink-400", bg: "group-hover:bg-pink-400/10", border: "group-hover:border-pink-400/50" },
  { name: "Marketing", count: "850", icon: Megaphone, color: "group-hover:text-yellow-400", bg: "group-hover:bg-yellow-400/10", border: "group-hover:border-yellow-400/50" },
  { name: "3D Render", count: "1.5k", icon: Box, color: "group-hover:text-cyan-400", bg: "group-hover:bg-cyan-400/10", border: "group-hover:border-cyan-400/50" },
  { name: "Cyberpunk", count: "920", icon: Cpu, color: "group-hover:text-red-400", bg: "group-hover:bg-red-400/10", border: "group-hover:border-red-400/50" },
  { name: "Copywriting", count: "1.1k", icon: PenTool, color: "group-hover:text-orange-400", bg: "group-hover:bg-orange-400/10", border: "group-hover:border-orange-400/50" },
  { name: "Anime", count: "1.9k", icon: Sparkles, color: "group-hover:text-indigo-400", bg: "group-hover:bg-indigo-400/10", border: "group-hover:border-indigo-400/50" },
  { name: "UI/UX", count: "740", icon: Layout, color: "group-hover:text-teal-400", bg: "group-hover:bg-teal-400/10", border: "group-hover:border-teal-400/50" },
];

export function PopularTags() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Hash className="w-5 h-5 text-neon-cyan" />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
              Popular Tags
            </h2>
          </div>
          <p className="text-white/40 mt-1">Explore trending topics and categories</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {MOCK_TAGS.map((tag, index) => {
          const Icon = tag.icon;
          return (
            <Link 
              href={`/tags/${tag.name.toLowerCase()}`}
              key={index}
              className={`group flex items-center gap-3 px-5 py-3 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${tag.border} ${tag.bg}`}
            >
              <div className={`p-2 rounded-lg bg-white/5 transition-colors duration-300 ${tag.color}`}>
                <Icon className="w-4 h-4 text-white/50 group-hover:text-inherit transition-colors duration-300" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors">
                  {tag.name}
                </div>
                <div className="text-xs text-white/40 group-hover:text-white/60 transition-colors">
                  {tag.count} prompts
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

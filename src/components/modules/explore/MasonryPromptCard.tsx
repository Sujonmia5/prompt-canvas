import Image from "next/image";
import { Heart, Eye } from "lucide-react";

interface MasonryPromptCardProps {
  image: string;
  title: string;
  model: string;
  creator: {
    name: string;
    avatar: string;
  };
  stats: {
    likes: string;
    views: string;
  };
  aspectRatio?: string;
}

export function MasonryPromptCard({ 
  image, 
  title, 
  model, 
  creator, 
  stats, 
  aspectRatio = "aspect-[3/4]" 
}: MasonryPromptCardProps) {
  return (
    <div className="sm:p-3 sm:border border-white/10 sm:bg-[#0F0F13] rounded-2xl hover:border-white/20 transition-all duration-300 break-inside-avoid mb-2 sm:mb-6 flex flex-col gap-1 sm:gap-3 group">
      <div className={`relative w-full rounded-xl overflow-hidden ${aspectRatio}`}>
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
      </div>
      
      <div className="hidden sm:flex flex-col gap-1 px-1">
        <h3 className="text-white font-bold text-sm leading-tight group-hover:text-neon-cyan transition-colors">{title}</h3>
        <p className="text-white/40 text-xs">{model}</p>
      </div>

      <div className="hidden sm:flex items-center justify-between px-1 mt-1">
        <div className="flex items-center gap-2">
          <div className="relative w-5 h-5 rounded-full overflow-hidden border border-white/20">
            <Image src={creator.avatar} alt={creator.name} fill className="object-cover" />
          </div>
          <span className="text-white/80 text-xs font-medium">{creator.name}</span>
        </div>
        <div className="flex items-center gap-3 text-white/50 text-xs">
          <div className="flex items-center gap-1 hover:text-red-400 cursor-pointer transition-colors">
            <Heart className="w-3 h-3" /> {stats.likes}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" /> {stats.views}
          </div>
        </div>
      </div>

      <button className="hidden sm:block w-full mt-2 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white text-xs font-bold hover:opacity-90 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-all">
        Copy Prompt
      </button>
    </div>
  );
}

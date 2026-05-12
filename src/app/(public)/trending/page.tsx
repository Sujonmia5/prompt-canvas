import { PromptCard } from "@/components/modules/PromptCard";
import { TrendingUp, Flame } from "lucide-react";

export default function TrendingPage() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 text-xs font-bold uppercase tracking-widest">
          <Flame className="w-3 h-3" />
          <span>Hot Right Now</span>
        </div>
        <h1 className="text-5xl font-bold">Trending Prompts</h1>
        <p className="text-white/40 max-w-xl mx-auto">
          The most liked and saved prompts from the last 24 hours. Updated every hour.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 glass rounded-2xl flex items-center justify-center text-2xl font-black text-white/20 z-10">
              {i}
            </div>
            <PromptCard
              image={`https://images.unsplash.com/photo-${1680000000000 + i}?q=80&w=800&auto=format&fit=crop`}
              title={`Trending Creation #${i}`}
              prompt="Trending prompt with high engagement and beautiful output..."
              creator={{ name: "Elite Creator", username: "elite", avatar: "https://i.pravatar.cc/150" }}
              likes={5000 - (i * 200)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

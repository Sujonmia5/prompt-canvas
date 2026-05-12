import { HeroSection } from "@/components/modules/home/HeroSection";
import { PromptFeedLayout } from "@/components/modules/home/PromptFeedLayout";
import { IdeaBlogSection } from "@/components/modules/home/IdeaBlogSection";
import { PopularTags } from "@/components/modules/home/PopularTags";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Prompts Feed Layout */}
      <PromptFeedLayout />
    
      {/* Popular Tags */}
      <PopularTags />

      {/* Ad section */}
      <div className="w-full">
        <p className="text-center text-white/40 text-sm">Advertisement</p>
      </div>

      {/* Idea Blog Section */}
      <IdeaBlogSection />

      {/* Ad section */}
      <div className="w-full">
        <p className="text-center text-white/40 text-sm">Advertisement</p>
      </div>
    </div>
  );
}
import Navbar from "@/components/shared/navbar/Navbar";
import ProgressBar from "@/components/utils/ProgressBar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="grow container mx-auto px-4 pb-12 max-w-7xl pt-24">
        <ProgressBar />
        {children}
      </main>
      {/* Footer could be added here */}
      <footer className="py-12 border-t border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 mb-4">
                PromptCanvas
              </h3>
              <p className="text-white/50 max-w-xs text-sm leading-relaxed">
                The premium destination for AI prompt creators and enthusiasts. 
                Discover, share, and scale your creative AI workflow.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="/explore" className="hover:text-neon-purple transition-colors">Explore</a></li>
                <li><a href="/trending" className="hover:text-neon-purple transition-colors">Trending</a></li>
                <li><a href="/categories" className="hover:text-neon-purple transition-colors">Categories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="#" className="hover:text-neon-purple transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-neon-purple transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-neon-purple transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
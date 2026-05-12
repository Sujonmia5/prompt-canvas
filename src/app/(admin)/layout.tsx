"use client";

import { GlassCard } from "@/components/ui/glass-card";
import { LayoutDashboard, Image as ImageIcon, Bookmark, Settings, LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Prompts", href: "/dashboard/my-prompts", icon: ImageIcon },
  { name: "Bookmarks", href: "/dashboard/bookmarks", icon: Bookmark },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-white/[0.01] backdrop-blur-xl hidden lg:flex flex-col">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-neon-purple rounded-lg flex items-center justify-center neon-glow">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="font-bold text-xl">PromptCanvas</span>
          </Link>

          <nav className="space-y-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all group",
                  pathname === link.href 
                    ? "bg-neon-purple/10 text-neon-purple border border-neon-purple/20 shadow-[0_0_15px_rgba(168,85,247,0.1)]" 
                    : "text-white/50 hover:text-white hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-3">
                  <link.icon className="w-4 h-4" />
                  {link.name}
                </div>
                {pathname === link.href && <ChevronRight className="w-3 h-3" />}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6 space-y-4">
          <GlassCard className="p-4 bg-gradient-to-br from-neon-purple/20 to-transparent border-neon-purple/20">
            <p className="text-xs font-semibold text-white mb-1">PRO PLAN</p>
            <p className="text-[10px] text-white/50 mb-3">Unlock unlimited uploads & premium models</p>
            <button className="w-full py-1.5 rounded-lg bg-neon-purple text-[10px] font-bold text-white hover:brightness-110 transition-all">
              UPGRADE NOW
            </button>
          </GlassCard>

          <button className="flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/5 w-full rounded-xl transition-all">
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 sticky top-0 bg-background/80 backdrop-blur-md z-30">
          <h2 className="font-semibold text-white/80">Dashboard</h2>
          <div className="flex items-center gap-4">
            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">
              <span className="text-xs">🔔</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-purple to-neon-blue p-[1px]">
               <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-bold">SM</div>
            </div>
          </div>
        </header>
        
        <div className="p-8 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

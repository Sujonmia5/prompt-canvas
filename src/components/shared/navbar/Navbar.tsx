"use client";

import Link from "next/link";
import { Search, Plus, Moon, ChevronDown } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Blogs", href: "/blogs" },
    { name: "Community", href: "/community" },
    { name: "Earn", href: "/earn" },
  ];

  return (
   <div className="fixed top-1 left-0 right-0 z-50 flex items-center justify-between">
     <nav className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto w-full glass-card rounded-lg border border-white/5 bg-[#0a0d14]/80">
      {/* Left section: Logo and Search */}
      <div className="flex items-center gap-8 flex-1">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight flex items-center">
          <span className="text-white">Nex</span>
          <span className="text-[#f472b6]">PromptCanvas</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex relative max-w-xs w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
          <input
            type="text"
            placeholder="Search prompts..."
            className="w-full bg-[#161922] border border-transparent rounded-full py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-neon-purple/50 focus:bg-[#1f232e] transition-all"
          />
        </div>
      </div>

      {/* Right section: Links and Actions */}
      <div className="flex items-center gap-6">
        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-6 mr-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                pathname === link.href ? "text-white" : "text-white/70"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <Link href="/upload" className="hidden sm:block">
            <NeonButton variant="primary" className="h-10 px-5 rounded-full flex items-center gap-2">
              <Plus className="w-4 h-4" />
              <span>Share Prompt</span>
            </NeonButton>
          </Link>
          
          <button className="text-white/70 hover:text-white transition-colors">
            <Moon className="w-5 h-5" />
          </button>
          
          <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors group">
            <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden relative">
              <img src="https://i.pravatar.cc/150?img=11" alt="User Avatar" className="w-full h-full object-cover" />
            </div>
            <ChevronDown className="w-4 h-4 group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </nav>
   </div>
  );
};

export default Navbar;

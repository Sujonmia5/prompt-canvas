"use client";

import { NeonButton } from "@/components/ui/neon-button";
import { Mail, Lock, Github, Chrome } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Welcome back</h2>
        <p className="text-white/40 text-sm">Enter your details to sign in</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-white/70">Password</label>
            <a href="#" className="text-xs text-neon-cyan hover:underline">Forgot password?</a>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="password"
              placeholder="••••••••"
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 focus:bg-white/10 transition-all"
            />
          </div>
        </div>

        <NeonButton className="w-full h-11">Sign In</NeonButton>
      </div>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-transparent px-2 text-white/30">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <NeonButton variant="outline" className="h-11">
          <Chrome className="w-4 h-4 mr-2" /> Google
        </NeonButton>
        <NeonButton variant="outline" className="h-11">
          <Github className="w-4 h-4 mr-2" /> GitHub
        </NeonButton>
      </div>

      <p className="text-center text-sm text-white/40 mt-8">
        Don't have an account?{" "}
        <Link href="/signup" className="text-neon-purple font-medium hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}

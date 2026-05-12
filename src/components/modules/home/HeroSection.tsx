"use client";

import { motion } from "framer-motion";

import { NeonButton } from "@/components/ui/neon-button";

export const HeroSection = () => {
    return (
      <div className="mb-0">
       <section className="relative py-10 grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Background Glow Effects */}
        <div className="fixed top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] pointer-events-none -z-10" />
        <div className="fixed bottom-20 -right-20 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-[128px] pointer-events-none -z-10" />

        {/* Left Side: Content */}
        <div className="flex flex-col items-start text-left col-span-1 sm:col-span-2">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl md:text-2xl font-bold mb-2 text-white/90"
          >
            Share, Discover & Earn
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">AI Prompts</span><br />
            <span className="text-white">Like a Pro.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed"
          >
            Discover powerful AI prompts, share your creativity, and earn money through ads & your amazing content.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto"
          >
            <NeonButton variant="primary" className="h-12 px-8 text-base">
              Explore Prompts
            </NeonButton>
            <NeonButton variant="outline" className="h-12 px-8 text-base border-white/10 bg-white/5">
              Share Your Prompt
            </NeonButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex flex-wrap gap-x-6 md:gap-x-12 gap-y-6 items-center"
          >
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-[#a855f7]">28.4K+</span>
              <span className="text-xs text-white/50 font-medium mt-1">Prompts</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-[#3b82f6]">9.1K+</span>
              <span className="text-xs text-white/50 font-medium mt-1">Creators</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-[#a855f7]">4.2M+</span>
              <span className="text-xs text-white/50 font-medium mt-1">Monthly Views</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-[#3b82f6]">138+</span>
              <span className="text-xs text-white/50 font-medium mt-1">AI Tools</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Cards */}
        
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 relative lg:ml-4 sm:col-span-3"
        >
          {/* Trending Card */}
          <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
           className="glass-card rounded-3xl p-7 lg:p-8 flex flex-col h-full border border-white/5 bg-[#0a0d14]/80 shadow-2xl">
            <h3 className="text-base font-bold mb-7 flex items-center gap-2 text-white/90">
              Trending This Week <span className="text-xl">🔥</span>
            </h3>
            <div className="space-y-6 mb-8 flex-1">
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold">1</div>
                <div className="w-14 h-14 rounded-xl bg-gray-800 overflow-hidden flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1675271591211-126ad94e495d?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white/90 truncate">Midjourney cinematic portrait...</h4>
                  <p className="text-xs text-white/50 truncate mt-1">by @creative_ai</p>
                  <div className="flex items-center gap-3 mt-1.5 text-xs font-medium text-green-400">
                    <span className="flex items-center gap-1">⭐ 1.2K</span>
                    <span className="flex items-center gap-1">📈 90%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-white/10 text-white/70 flex items-center justify-center text-xs font-bold">2</div>
                <div className="w-14 h-14 rounded-xl bg-gray-800/50 overflow-hidden flex-shrink-0 p-2.5 flex items-center justify-center border border-white/5">
                   <div className="w-6 h-6 border-[2.5px] border-emerald-400 rounded-sm relative">
                     <div className="absolute inset-[2.5px] border-[2.5px] border-emerald-400 rounded-sm"></div>
                   </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white/90 truncate">ChatGPT productivity booster...</h4>
                  <p className="text-xs text-white/50 truncate mt-1">by @prompt_master</p>
                  <div className="flex items-center gap-3 mt-1.5 text-xs font-medium text-green-400">
                    <span className="flex items-center gap-1">⭐ 980</span>
                    <span className="flex items-center gap-1">📈 88%</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs font-bold">3</div>
                <div className="w-14 h-14 rounded-xl bg-gray-800 overflow-hidden flex-shrink-0">
                   <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop" className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white/90 truncate">Creative logo design prompt...</h4>
                  <p className="text-xs text-white/50 truncate mt-1">by @designmind</p>
                  <div className="flex items-center gap-3 mt-1.5 text-xs font-medium text-green-400">
                    <span className="flex items-center gap-1">⭐ 870</span>
                    <span className="flex items-center gap-1">📈 85%</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-sm font-medium transition-colors text-white/70">
              View all trending <span className="ml-1 text-neon-purple">→</span>
            </button>
          </motion.div>

          {/* Ad Card */}
          <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
           className="flex flex-col relative h-full mt-8 sm:mt-15">
            <div className="text-xs text-white/40 uppercase tracking-[0.2em] text-center mb-3 font-medium">Advertisement</div>
            <div className="rounded-3xl flex-1 bg-gradient-to-br from-[#4f20b2] to-[#2d0e7a] p-7 lg:p-8 flex flex-col relative overflow-hidden shadow-2xl border border-white/10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl -mr-12 -mt-12"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#4f20b2] font-bold text-base shadow-sm">H</div>
                <span className="font-bold text-white text-xl tracking-tight">Hostinger</span>
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 relative z-10 leading-tight">Web Hosting</h3>
              <p className="text-white/90 text-xl font-medium mb-2 relative z-10">Up to <span className="text-[#facc15] font-bold">75% OFF</span></p>
              <p className="text-white/70 text-sm mb-8 relative z-10">Fast. Secure. Reliable.</p>
              
              <button className="bg-[#a855f7] hover:bg-[#9333ea] border border-white/10 text-white py-3 px-8 rounded-xl text-sm font-semibold w-max transition-colors relative z-10 shadow-lg mb-6">
                Get Started
              </button>
              
              {/* Mockup graphic */}
              <div className="absolute -bottom-10 -right-10 w-72 h-52 bg-[#0a0d14] rounded-2xl shadow-2xl rotate-[-4deg] border border-white/10 p-3 overflow-hidden z-10 flex flex-col">
                 <div className="h-5 border-b border-white/5 flex items-center px-2 gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                    <div className="w-2 h-2 rounded-full bg-white/20"></div>
                 </div>
                 <div className="flex-1 flex gap-3">
                    <div className="w-[30%] bg-white/5 rounded-lg flex flex-col gap-1.5 p-2">
                      <div className="h-2.5 w-full bg-white/10 rounded-sm"></div>
                      <div className="h-2.5 w-3/4 bg-white/10 rounded-sm"></div>
                      <div className="h-2.5 w-5/6 bg-white/10 rounded-sm"></div>
                    </div>
                    <div className="flex-1 flex flex-col gap-3">
                       <div className="h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-white/5 relative overflow-hidden">
                         <div className="absolute right-3 top-2.5 bottom-2.5 w-10 bg-white/10 rounded-sm"></div>
                       </div>
                       <div className="flex-1 bg-white/5 rounded-lg border border-white/5 p-2.5 flex flex-col gap-2">
                          <div className="h-2.5 w-1/3 bg-white/10 rounded-sm"></div>
                          <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5 mt-auto"></div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      
      </section>
      <div className="my-2 h-24 w-full border-white/5 bg-[#0a0d14]/80 text-sm rounded-2xl mx-auto border  text-white flex items-center justify-center">
        advertisement
      </div>
      </div>
    );
};
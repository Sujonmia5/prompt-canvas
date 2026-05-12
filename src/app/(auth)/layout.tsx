import { GlassCard } from "@/components/ui/glass-card";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-blue/20 blur-[120px] rounded-full" />
      
      <div className="w-full max-w-md relative z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-neon-purple rounded-xl flex items-center justify-center neon-glow mb-4">
             <span className="text-white text-2xl font-bold">P</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">PromptCanvas</h1>
        </div>
        
        <GlassCard className="p-8 border-white/10 shadow-2xl backdrop-blur-2xl bg-white/[0.03]">
          {children}
        </GlassCard>
      </div>
    </div>
  );
}

"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { motion } from "framer-motion";

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  glow?: boolean;
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = "primary", glow = true, children, ...props }, ref) => {
    const variants = {
      primary: "bg-neon-purple text-white hover:bg-neon-purple/90",
      secondary: "bg-neon-blue text-white hover:bg-neon-blue/90",
      outline: "border border-white/20 bg-white/5 text-white hover:bg-white/10",
      ghost: "text-white/70 hover:text-white hover:bg-white/5",
    };

    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-purple/50 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          glow && variant === "primary" && "neon-glow",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

NeonButton.displayName = "NeonButton";

export { NeonButton };

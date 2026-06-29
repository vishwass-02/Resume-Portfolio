"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hoverEffect = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-panel rounded-2xl p-6 relative overflow-hidden",
          hoverEffect && "hover:shadow-[0_8px_32px_rgba(0,112,243,0.15)] transition-shadow duration-300",
          className
        )}
        whileHover={hoverEffect ? { y: -5 } : {}}
        {...props}
      >
        {/* Subtle inner glow on top edge */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        {children}
      </motion.div>
    );
  }
);
GlassCard.displayName = "GlassCard";

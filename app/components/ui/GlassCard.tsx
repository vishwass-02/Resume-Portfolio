"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, hoverEffect = true }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "liquid-glass rounded-[1.25rem] p-6 relative overflow-hidden",
          hoverEffect && "hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] transition-shadow duration-300",
          className
        )}
        whileHover={hoverEffect ? { y: -5 } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    );
  }
);
GlassCard.displayName = "GlassCard";

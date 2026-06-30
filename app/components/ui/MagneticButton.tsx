"use client";

import React, { useRef, useState } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, className, variant = "primary", ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = buttonRef.current!.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
      setPosition({ x: 0, y: 0 });
    };

    const variants = {
      primary: "bg-[#0070f3] text-white hover:bg-[#005bb5] border border-transparent shadow-[0_0_15px_rgba(0,112,243,0.3)] hover:shadow-[0_0_25px_rgba(0,112,243,0.6)]",
      secondary: "bg-white text-black hover:bg-gray-200 border border-transparent",
      outline: "bg-transparent text-white border border-white/20 hover:border-white/50",
      ghost: "bg-transparent text-white/70 hover:text-white hover:bg-white/5"
    };

    return (
      <motion.button
        ref={buttonRef}
        onMouseMove={handleMouse}
        onMouseLeave={reset}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className={cn(
          "relative px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden flex items-center justify-center gap-2",
          variants[variant],
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

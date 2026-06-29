import React from "react";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 relative z-10 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm font-medium">
            © {new Date().getFullYear()} Vishwas S. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
            Made with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> by Vishwas S
          </div>
        </div>
      </div>
    </footer>
  );
};

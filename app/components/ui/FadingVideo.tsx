"use client";

import React, { useRef, useState, useEffect } from 'react';

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

export const FadingVideo: React.FC<FadingVideoProps> = ({ src, className, style }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sources = Array.isArray(src) ? src : [src];
  const currentSrc = sources[currentIndex];

  const fadeAnimRef = useRef<number | undefined>(undefined);
  const fadeStateRef = useRef<'in' | 'out' | 'idle'>('idle');

  const setOpacity = (val: number) => {
    if (videoRef.current) {
      videoRef.current.style.opacity = val.toString();
    }
  };

  const animateOpacity = (target: number, duration: number) => {
    if (fadeAnimRef.current) cancelAnimationFrame(fadeAnimRef.current);
    const start = performance.now();
    const initialOpacity = parseFloat(videoRef.current?.style.opacity || '0');

    const animate = (time: number) => {
      const elapsed = time - start;
      const progress = Math.min(elapsed / duration, 1);
      setOpacity(initialOpacity + (target - initialOpacity) * progress);
      if (progress < 1) {
        fadeAnimRef.current = requestAnimationFrame(animate);
      } else {
        fadeStateRef.current = 'idle';
      }
    };
    fadeAnimRef.current = requestAnimationFrame(animate);
  };

  const handleLoadedData = () => {
    fadeStateRef.current = 'in';
    animateOpacity(1, 500);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const { currentTime, duration } = videoRef.current;
    if (duration - currentTime <= 0.55 && fadeStateRef.current !== 'out') {
      fadeStateRef.current = 'out';
      animateOpacity(0, 550);
    }
  };

  const handleEnded = () => {
    if (sources.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % sources.length);
    } else {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        fadeStateRef.current = 'in';
        animateOpacity(1, 500);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (fadeAnimRef.current) cancelAnimationFrame(fadeAnimRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={className}
      style={{ ...style, opacity: 0 }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
};

"use client";

import { useEffect, useState } from "react";

interface AnimatedContentProps {
  children: React.ReactNode;
  className?: string;
  animationType?: "fade-in" | "slide-up" | "scale-in" | "slide-left" | "slide-right";
  delay?: number;
  staggerDelay?: number;
  isVisible?: boolean;
  parentVisible?: boolean;
}

export function AnimatedContent({
  children,
  className = "",
  animationType = "fade-in",
  delay = 0,
  staggerDelay = 100,
  isVisible = true,
  parentVisible = true,
}: AnimatedContentProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (parentVisible) {
      const timer = setTimeout(() => {
        setIsAnimating(true);
      }, 500 + delay * staggerDelay);

      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
    }
  }, [parentVisible, delay, staggerDelay]);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    switch (animationType) {
      case "fade-in":
        return `${baseClasses} ${isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`;
      case "slide-up":
        return `${baseClasses} ${isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`;
      case "scale-in":
        return `${baseClasses} ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-95"}`;
      case "slide-left":
        return `${baseClasses} ${isAnimating ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`;
      case "slide-right":
        return `${baseClasses} ${isAnimating ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`;
      default:
        return `${baseClasses} ${isAnimating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`;
    }
  };

  return (
    <div className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
} 
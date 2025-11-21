"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode | ((isVisible: boolean) => React.ReactNode);
  className?: string;
  animationType?: "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in";
  delay?: number;
  isInitialLoad?: boolean;
}

const animationVariants = {
  "fade-in": {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  "slide-in-left": {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-in-right": {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function AnimatedSection({
  children,
  className = "",
  animationType = "fade-in",
  delay = 0,
  isInitialLoad = false,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "0px 0px -150px 0px",
    amount: 0.15
  });
  const [isInitialVisible, setIsInitialVisible] = useState(false);

  useEffect(() => {
    if (isInitialLoad) {
      const timer = setTimeout(() => {
          setIsInitialVisible(true);
      }, 100 + delay * 30);
      return () => clearTimeout(timer);
    }
  }, [isInitialLoad, delay]);

  const isVisible = isInitialLoad ? isInitialVisible : isInView;
  const variant = animationVariants[animationType];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variant}
      transition={{
        duration: 0.4,
        delay: isInitialLoad ? delay * 0.05 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {typeof children === "function" ? children(isVisible) : children}
    </motion.div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  delay?: number;
  isInitialLoad?: boolean;
}

export function AnimatedSection({
  children,
  className = '',
  animationType = 'fade-in',
  delay = 0,
  isInitialLoad = false,
}: AnimatedSectionProps) {
  const [isInitialVisible, setIsInitialVisible] = useState(false);
  const { elementRef, isVisible: isScrollVisible } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  });

  useEffect(() => {
    if (isInitialLoad) {
      // Trigger initial animation after a small delay
      const timer = setTimeout(() => {
        setIsInitialVisible(true);
      }, 100 + delay * 100);

      return () => clearTimeout(timer);
    }
  }, [isInitialLoad, delay]);

  const isVisible = isInitialLoad ? isInitialVisible : isScrollVisible;
  const delayClass = isInitialLoad ? `fade-in-delay-${Math.min(delay, 10)}` : '';

  return (
    <div
      ref={elementRef as React.Ref<HTMLDivElement>}
      className={`${animationType} ${delayClass} ${className} ${
        isVisible ? 'visible' : ''
      }`}
    >
      {children}
    </div>
  );
} 
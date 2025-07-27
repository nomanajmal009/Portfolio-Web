"use client";

import React, { createContext, useContext, useState } from "react";

interface AnimationContextType {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AnimationContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
} 
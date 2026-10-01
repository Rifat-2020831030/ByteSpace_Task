"use client";

import React, { useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-in" | "scale-up";
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) observer.unobserve(currentRef);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const baseStyles = "transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]";
  
  let animationStyles = "";
  if (!isVisible) {
    if (animation === "fade-up") {
      animationStyles = "opacity-0 translate-y-12";
    } else if (animation === "fade-in") {
      animationStyles = "opacity-0";
    } else if (animation === "scale-up") {
      animationStyles = "opacity-0 scale-95 translate-y-8";
    }
  } else {
    animationStyles = "opacity-100 translate-y-0 scale-100";
  }

  return (
    <div
      ref={ref}
      className={`${baseStyles} ${animationStyles} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

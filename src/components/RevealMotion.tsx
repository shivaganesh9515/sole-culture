"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface RevealMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function RevealMotion({
  children,
  className = "",
  delay = 0,
}: RevealMotionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${
        isVisible ? "animate-on-scroll-visible" : "animate-on-scroll-hidden"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

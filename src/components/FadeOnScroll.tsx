'use client';

import { useRef, useEffect, useState } from "react";

interface FadeOnScrollProps {
  children: React.ReactNode;
  className?: string;
}

export default function FadeOnScroll({ children, className }: FadeOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const threshold = windowH * 0.2; // 20% from top/bottom

      // El elemento es visible si su parte superior o inferior está dentro del rango [threshold, windowH - threshold]
      const isVisible = (
        (rect.top <= windowH - threshold && rect.bottom >= threshold)
      );

      setOpacity(isVisible ? 1 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${opacity === 1 ? "animate-jump" : ""} ${className ?? ""}`}
      style={{
        opacity,
        transition: "opacity 0.8s",
      }}
    >
      {children}
    </div>
  );
}
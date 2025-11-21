'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, delay = 0, immediate = false, direction = 'up' }) {
  const [progress, setProgress] = useState(immediate ? 1 : 0);
  const ref = useRef(null);

  useEffect(() => {
    if (immediate) return;

    const handleScroll = () => {
      if (!ref.current) return;

      const element = ref.current;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start when element is 200px below viewport
      // Complete when element reaches 30% from top of viewport
      const startPoint = windowHeight + 200;
      const endPoint = windowHeight * 0.3;
      
      // Calculate progress (0 to 1)
      let scrollProgress = 0;
      if (rect.top < startPoint) {
        scrollProgress = 1 - ((rect.top - endPoint) / (startPoint - endPoint));
        scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      }
      
      setProgress(scrollProgress);
    };

    handleScroll(); // Initial check
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [immediate]);

  // Apply delay offset to progress
  const delayedProgress = Math.max(0, Math.min(1, (progress - delay * 0.15) / (1 - delay * 0.15)));

  // Calculate animated values based on scroll progress
  const opacity = 0.4 + (delayedProgress * 0.6);
  const grayscale = 0.8 - (delayedProgress * 0.8);
  const saturate = 0.5 + (delayedProgress * 0.5);
  const translateY = direction === 'up' 
    ? 20 - (delayedProgress * 20)
    : -20 + (delayedProgress * 20);

  return (
    <div
      ref={ref}
      style={{
        opacity,
        filter: `grayscale(${grayscale}) saturate(${saturate})`,
        transform: `translateY(${translateY}px)`,
        position: 'relative',
      }}
    >
      {children}
    </div>
  );
}

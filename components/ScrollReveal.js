'use client';

import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, delay = 0, immediate = false, direction = 'up' }) {
  const [isVisible, setIsVisible] = useState(immediate);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const translateValue = direction === 'up' ? 'translateY(20px)' : 'translateY(-20px)';

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0.4,
        filter: isVisible ? 'grayscale(0) saturate(1)' : 'grayscale(0.8) saturate(0.5)',
        transform: isVisible ? 'translateY(0)' : translateValue,
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
        position: 'relative',
        clipPath: 'inset(0)',
      }}
    >
      {/* Animated reveal mask */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: isVisible ? '100%' : '0%',
          background: 'transparent',
          boxShadow: isVisible 
            ? 'inset 0 0 0 0 transparent'
            : 'inset -100vw 0 0 0 rgba(200, 200, 200, 0.5)',
          transition: `width 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s, box-shadow 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${delay}s`,
          pointerEvents: 'none',
          zIndex: 10,
          mixBlendMode: 'multiply'
        }}
      />
      <div style={{ position: 'relative' }}>
        {children}
      </div>
    </div>
  );
}

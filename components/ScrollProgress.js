'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        zIndex: 1001,
        pointerEvents: 'none',
        background: 'transparent'
      }}
    >
      {/* Left side - expands from center to left */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: '50%',
          height: '100%',
          width: `${scrollProgress / 2}%`,
          background: '#1565C0',
          transition: 'width 0.1s ease-out',
          transformOrigin: 'right'
        }}
      />
      {/* Right side - expands from center to right */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          height: '100%',
          width: `${scrollProgress / 2}%`,
          background: '#1565C0',
          transition: 'width 0.1s ease-out',
          transformOrigin: 'left'
        }}
      />
    </div>
  );
}

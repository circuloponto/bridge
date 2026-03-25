'use client';

import { useEffect, useState } from 'react';

function ParallaxBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const colors = ['#1565C0', '#1A3D72', '#B0B8C4', '#F4F6F8'];
  
  const squares = [
    { id: 1, x: 10, y: 15, size: 150, speed: 1.5, mouseSpeed: 0.8, color: colors[0] },
    { id: 2, x: 75, y: 10, size: 120, speed: 0.5, mouseSpeed: 0.3, color: colors[1] },
    { id: 3, x: 30, y: 40, size: 180, speed: 2.2, mouseSpeed: 1.2, color: colors[2] },
    { id: 4, x: 85, y: 35, size: 140, speed: 0.8, mouseSpeed: 0.4, color: colors[3] },
    { id: 5, x: 50, y: 60, size: 160, speed: 1.8, mouseSpeed: 1.0, color: colors[0] },
    { id: 6, x: 15, y: 75, size: 130, speed: 0.6, mouseSpeed: 0.35, color: colors[1] },
    { id: 7, x: 70, y: 70, size: 170, speed: 1.3, mouseSpeed: 0.7, color: colors[2] },
    { id: 8, x: 45, y: 20, size: 110, speed: 0.9, mouseSpeed: 0.5, color: colors[3] },
    { id: 9, x: 60, y: 85, size: 150, speed: 1.6, mouseSpeed: 0.9, color: colors[0] },
    { id: 10, x: 25, y: 55, size: 140, speed: 1.1, mouseSpeed: 0.6, color: colors[1] }
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {squares.map((square) => {
        const scrollOffset = scrollPosition * square.speed * 0.1;
        const mouseOffsetX = (mousePosition.x - 50) * square.mouseSpeed;
        const mouseOffsetY = (mousePosition.y - 50) * square.mouseSpeed;

        return (
          <div
            key={square.id}
            style={{
              position: 'absolute',
              left: `${square.x}%`,
              top: `${square.y}%`,
              width: `${square.size}px`,
              height: `${square.size}px`,
              transform: `translate(-50%, -50%) translate(${mouseOffsetX}px, ${mouseOffsetY + scrollOffset}px)`,
              transition: 'transform 0.3s ease-out',
              borderRadius: '16px',
              background: square.color,
              opacity: 0.08,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)'
            }}
          />
        );
      })}
    </div>
  );
}

export default ParallaxBackground;

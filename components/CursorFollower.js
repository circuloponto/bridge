'use client';

import { useEffect, useState } from 'react';

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'transparent',
        border: '2px solid #e8a05d',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.1s ease-out, top 0.1s ease-out',
        opacity: 1
      }}
    />
  );
}

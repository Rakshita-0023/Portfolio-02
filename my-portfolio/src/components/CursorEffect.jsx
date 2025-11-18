import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: -1,
      overflow: 'hidden'
    }}>
      {[...Array(80)].map((_, i) => {
        const size = 4 + Math.random() * 6;
        const distance = 50 + Math.random() * 150;
        const angle = (i / 80) * Math.PI * 2;
        
        return (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: `${size}px`,
              height: `${size}px`,
              background: `rgba(99, 102, 241, ${0.2 + Math.random() * 0.4})`,
              borderRadius: '50%',
              boxShadow: `0 0 ${size * 2}px rgba(99, 102, 241, 0.3)`
            }}
            animate={{
              x: mousePosition.x + Math.cos(angle) * distance + (Math.random() - 0.5) * 100,
              y: mousePosition.y + Math.sin(angle) * distance + (Math.random() - 0.5) * 100,
            }}
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              mass: 0.5
            }}
          />
        );
      })}
    </div>
  );
}
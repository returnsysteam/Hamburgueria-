import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'image' | 'card'>('default');

  const springConfig = { damping: 28, stiffness: 350, mass: 0.15 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const isTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const clickable = target.closest('button, a, [role="button"], input, select');
      const imageElement = target.closest('img, [data-cursor="image"]');
      const cardElement = target.closest('[data-cursor="card"], .card-interactive');

      if (clickable) {
        setCursorType('pointer');
      } else if (imageElement) {
        setCursorType('image');
      } else if (cardElement) {
        setCursorType('card');
      } else {
        setCursorType('default');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer ambient focus circle */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'pointer' ? 1.6 : cursorType === 'image' ? 2 : cursorType === 'card' ? 1.3 : 1,
          opacity: cursorType === 'default' ? 0.35 : 0.7,
          borderColor:
            cursorType === 'pointer'
              ? 'rgba(229, 169, 60, 0.7)'
              : cursorType === 'image'
              ? 'rgba(243, 199, 117, 0.5)'
              : 'rgba(255, 255, 255, 0.25)',
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="w-7 h-7 rounded-full border border-white/20 fixed top-0 left-0"
      />
      {/* Center pinpoint */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: cursorType === 'pointer' ? 0.5 : 1,
          backgroundColor:
            cursorType === 'pointer' ? '#E5A93C' : '#EDEDEA',
        }}
        transition={{ duration: 0.12 }}
        className="w-1.5 h-1.5 rounded-full fixed top-0 left-0 bg-[#EDEDEA] shadow-[0_0_8px_rgba(229,169,60,0.6)]"
      />
    </div>
  );
};

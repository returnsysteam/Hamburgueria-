import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring } from 'motion/react';

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
  variant = 'primary',
  target,
  rel,
  ariaLabel,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch or reduced motion
    const checkTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsTouchDevice(checkTouch);
  }, []);

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouchDevice || !ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // max 4 to 6px subtle magnetic pull
    const deltaX = (clientX - centerX) * 0.18;
    const deltaY = (clientY - centerY) * 0.18;
    const clampX = Math.max(-6, Math.min(6, deltaX));
    const clampY = Math.max(-6, Math.min(6, deltaY));
    x.set(clampX);
    y.set(clampY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Base visual styles
  const variantStyles = {
    primary:
      'bg-gradient-to-b from-[#F3C775] to-[#E5A93C] text-[#0A0A0B] font-semibold shadow-[0_4px_24px_rgba(229,169,60,0.25)] hover:shadow-[0_8px_32px_rgba(229,169,60,0.4)] border border-[#FDE68A]/30',
    secondary:
      'bg-[#1C1C20] hover:bg-[#25252B] text-[#EDEDEA] border border-white/10 hover:border-white/20 shadow-lg',
    outline:
      'bg-transparent hover:bg-white/[0.04] text-[#EDEDEA] border border-white/15 hover:border-[#E5A93C]/50 hover:text-[#F3C775]',
    ghost:
      'bg-transparent hover:bg-white/[0.05] text-[#A1A1AA] hover:text-[#EDEDEA]',
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className={`relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm tracking-wide transition-all select-none group overflow-hidden cursor-pointer ${variantStyles[variant]} ${className}`}
    >
      {/* Subtle light sweep reflection */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
        aria-hidden="true"
      />
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
      </span>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        aria-label={ariaLabel}
        className="inline-block"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-block bg-transparent p-0 border-0 cursor-pointer"
    >
      {content}
    </button>
  );
};

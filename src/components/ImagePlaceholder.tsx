import React, { useState } from 'react';
import { motion } from 'motion/react';

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectRatioClass?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectRatioClass = 'aspect-[4/3]',
  style,
  loading = 'lazy',
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#121215] ${aspectRatioClass} ${className}`}
      style={style}
    >
      {/* Shimmer skeleton in brand palette (Dark charcoal to amber/gold glow) */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 overflow-hidden bg-[#18181D]">
          {/* Animated Gold/Amber Shimmer Wave */}
          <div
            className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#E5A93C]/12 to-transparent"
            style={{
              animation: 'shimmerSweep 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
            }}
          />
          {/* Subtle Ambient Radial Center Tint */}
          <div className="absolute inset-0 bg-radial-at-c from-[#92400E]/10 via-transparent to-transparent pointer-events-none" />
        </div>
      )}

      {/* Actual Image with smooth opacity transition */}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : loading}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${imgClassName}`}
      />
    </div>
  );
};

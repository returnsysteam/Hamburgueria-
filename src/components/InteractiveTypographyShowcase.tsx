import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';
import { Sparkles, ArrowUpRight, Flame } from 'lucide-react';

interface CraftHighlight {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  image: string;
}

const CRAFT_HIGHLIGHTS: CraftHighlight[] = [
  {
    id: 'smash',
    name: 'SMASH ARTESANAL',
    tagline: 'Duplo blend prensado com crosta crocante e caramelização intensa',
    badge: 'Técnica & Ponto',
    image: '/src/assets/images/visceral_smash_trio_1790520247708.jpg',
  },
  {
    id: 'cheddar',
    name: 'CHEDDAR CREMOSO',
    tagline: 'Fusão homogênea e aveludada que abraça a carne na chapa',
    badge: 'Sabor & Textura',
    image: '/src/assets/images/hero_smash_isolated_1790520265971.jpg',
  },
  {
    id: 'brioche',
    name: 'PÃO BRIOCHE DOURADO',
    tagline: 'Selado na manteiga com maciez que sustenta cada mordida',
    badge: 'Panificação Artesanal',
    image: '/src/assets/images/editorial_burger_cut_1790519126941.jpg',
  },
  {
    id: 'batatas',
    name: 'BATATAS CROCANTES',
    tagline: 'Corte rústico dourado com flor de sal e alecrim fresco',
    badge: 'Acompanhamento',
    image: '/src/assets/images/crispy_rustic_fries_1790519139797.jpg',
  },
];

export const InteractiveTypographyShowcase: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeItem, setActiveItem] = useState<CraftHighlight | null>(CRAFT_HIGHLIGHTS[0]);
  const [hoveredTextId, setHoveredTextId] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative py-28 md:py-36 bg-[#09090B] border-t border-white/[0.07] overflow-hidden">
      {/* Dynamic Background Image Behind Text Hover */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-700 ease-out overflow-hidden">
        {activeItem && (
          <motion.div
            key={activeItem.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.14, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute inset-0"
          >
            <img
              src={activeItem.image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover filter blur-md"
            />
            <div className="absolute inset-0 bg-[#09090B]/85" />
          </motion.div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Editorial Index Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#A1A1AA]">
            <span className="text-[#E5A93C] font-semibold">03</span>
            <span className="text-white/20">/</span>
            <span>Tipografia em Camadas & Interações</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#71717A] hidden sm:inline">
            Experiência Visual Interativa
          </span>
        </div>

        {/* 1. TEXT MASK IMAGE & IMAGE MASKING TYPOGRAPHY HERO BLOCK */}
        <div className="relative mb-24 text-center">
          
          {/* Layered Typography: Outline Giant Background Text */}
          <div className="relative select-none">
            <span
              className="block text-5xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-tighter font-display text-transparent opacity-20 pointer-events-none"
              style={{
                WebkitTextStroke: '1.5px rgba(229,169,60,0.4)',
              }}
            >
              ARTESANAL
            </span>

            {/* Text Mask Image: Burger Photography directly clipped into typography */}
            <motion.h2
              initial={shouldReduceMotion ? {} : { opacity: 0, filter: 'blur(10px)', y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative -mt-10 sm:-mt-16 md:-mt-24 text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight font-display bg-clip-text text-transparent bg-cover bg-center drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
              style={{
                backgroundImage: 'url(/src/assets/images/visceral_smash_trio_1790520247708.jpg)',
                backgroundPosition: 'center 40%',
              }}
            >
              INÊS BURGUER
            </motion.h2>

            <p className="mt-4 text-xs sm:text-sm uppercase tracking-[0.3em] text-[#E5A93C] font-semibold">
              Atibaia Jardim · Sabor Puro · Sem Artifícios
            </p>
          </div>
        </div>

        {/* 2. IMAGE REVEAL ON HOVER & IMAGE BEHIND TEXT INTERACTION */}
        <div
          onMouseMove={handleMouseMove}
          className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: Interactive typography triggers */}
          <div className="lg:col-span-7 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D97706] mb-4 flex items-center gap-2">
              <Flame className="w-4 h-4" />
              <span>Passe o cursor para revelar a gastronomia</span>
            </div>

            {CRAFT_HIGHLIGHTS.map((item, index) => {
              const isHovered = hoveredTextId === item.id || (!hoveredTextId && activeItem?.id === item.id);

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => {
                    setActiveItem(item);
                    setHoveredTextId(item.id);
                  }}
                  onMouseLeave={() => setHoveredTextId(null)}
                  className="group relative py-5 border-b border-white/[0.08] cursor-pointer transition-all duration-300"
                >
                  {/* Subtle Background Glow Line */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#E5A93C]/10 via-transparent to-transparent rounded-lg transition-opacity duration-300 pointer-events-none ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-[#E5A93C]/60 group-hover:text-[#E5A93C] transition-colors">
                        0{index + 1}
                      </span>
                      <h3
                        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-display transition-all duration-300 ${
                          isHovered
                            ? 'text-white translate-x-2'
                            : 'text-[#A1A1AA] group-hover:text-white'
                        }`}
                      >
                        {item.name}
                      </h3>
                    </div>

                    <span className="text-xs uppercase tracking-wider font-semibold text-[#E5A93C] bg-[#E5A93C]/10 px-2.5 py-1 rounded-full self-start sm:self-auto border border-[#E5A93C]/20">
                      {item.badge}
                    </span>
                  </div>

                  {/* Revealing Subtitle */}
                  <p
                    className={`text-xs sm:text-sm text-[#A1A1AA] mt-2 transition-all duration-300 font-light max-w-lg ${
                      isHovered ? 'opacity-100 translate-y-0 text-[#D4D4D8]' : 'opacity-60'
                    }`}
                  >
                    {item.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Container with Smooth Transitions */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-[#141417] shadow-[0_25px_60px_rgba(0,0,0,0.85)] group">
              {activeItem && (
                <motion.div
                  key={activeItem.id}
                  initial={shouldReduceMotion ? {} : { opacity: 0, scale: 1.06 }}
                  animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full relative"
                >
                  <img
                    src={activeItem.image}
                    alt={activeItem.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Ambient Bottom Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-[#0A0A0B]/25 to-transparent pointer-events-none" />

                  {/* Card Description Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0A0A0B]/85 backdrop-blur-md border border-white/15">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#E5A93C] block mb-1">
                      {activeItem.badge}
                    </span>
                    <h4 className="text-base font-bold text-white font-display">
                      {activeItem.name}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] mt-1 font-light">
                      {activeItem.tagline}
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

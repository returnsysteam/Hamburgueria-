import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface GalleryCardProps {
  title: string;
  tag: string;
  src: string;
  alt: string;
  className?: string;
  aspectClass?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  tag,
  src,
  alt,
  className = '',
  aspectClass = 'aspect-[4/3]',
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setIsTouch(
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * -8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-cursor="image"
      className={`group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#141417] shadow-[0_16px_40px_rgba(0,0,0,0.6)] ${className}`}
    >
      <div className={`w-full overflow-hidden ${aspectClass}`}>
        <motion.div
          animate={{
            x: isHovered && !isTouch && !shouldReduceMotion ? mousePos.x : 0,
            y: isHovered && !isTouch && !shouldReduceMotion ? mousePos.y : 0,
            scale: isHovered && !shouldReduceMotion ? 1.05 : 1,
          }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <ImagePlaceholder
            src={src}
            alt={alt}
            aspectRatioClass="w-full h-full"
            imgClassName="transition-transform duration-700 ease-out"
          />
        </motion.div>
      </div>

      {/* Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-[#0A0A0B]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />

      {/* Editorial Caption on hover */}
      <div className="absolute bottom-0 inset-x-0 p-5 md:p-6 transition-transform duration-300 transform translate-y-1 group-hover:translate-y-0">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E5A93C] block mb-1">
          {tag}
        </span>
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight font-display">
          {title}
        </h3>
      </div>
    </div>
  );
};

export const EditorialGallery: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="galeria" className="relative py-24 md:py-32 overflow-hidden border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#E5A93C]/5 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Editorial Chapter Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#A1A1AA]">
            <span className="text-[#E5A93C] font-semibold">04</span>
            <span className="text-white/20">/</span>
            <span>Galeria Editorial</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#71717A] hidden sm:inline">
            Fotografia & Textura
          </span>
        </div>

        {/* Section Title with blur-to-sharp */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, filter: 'blur(8px)', y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EDEDEA] font-display">
            A ARTE DE FAZER BEM FEITO.
          </h2>
          <p className="mt-3 text-[#A1A1AA] text-base font-light">
            Texturas, crocâncias e aromas que definem a identidade gastronômica da Inês Burguer em Atibaia Jardim.
          </p>
        </motion.div>

        {/* Asymmetrical Magazine Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: Large Featured Landscape (Span 7) */}
          <div className="md:col-span-7">
            <GalleryCard
              src="/src/assets/images/visceral_smash_trio_1790520247708.jpg"
              alt="Smash burgers artesanais com queijo derretido e crosta crocante"
              tag="Craft & Ponto"
              title="A Chapa, o Ponto e a Suculência"
              aspectClass="aspect-[16/10] md:aspect-[16/11]"
            />
          </div>

          {/* Card 2: Square Crispy Fries Focus (Span 5) */}
          <div className="md:col-span-5">
            <GalleryCard
              src="/src/assets/images/crispy_rustic_fries_1790519139797.jpg"
              alt="Porção de batatas rústicas douradas e crocantes com alecrim e flor de sal"
              tag="Crocância"
              title="Batatas Rústicas com Alecrim"
              aspectClass="aspect-square md:aspect-[5/4]"
            />
          </div>

          {/* Card 3: Vertical Cut Anatomy (Span 5) */}
          <div className="md:col-span-5">
            <GalleryCard
              src="/src/assets/images/editorial_burger_cut_1790519126941.jpg"
              alt="Corte transversal do hambúrguer artesanal destacando suculência interna"
              tag="Estrutura"
              title="Montagem Precisa em Camadas"
              aspectClass="aspect-[4/5] md:aspect-[3/4]"
            />
          </div>

          {/* Card 4: Horizontal Sizzling Craft Ambiance (Span 7) */}
          <div className="md:col-span-7">
            <GalleryCard
              src="/src/assets/images/cta_smoky_burger_1790519153125.jpg"
              alt="Hambúrguer na frigideira de ferro com brasas e fumaça aromática"
              tag="Grelha & Fumaça"
              title="Aroma Marcante e Selamento Perfeito"
              aspectClass="aspect-[16/10] md:aspect-[16/11]"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

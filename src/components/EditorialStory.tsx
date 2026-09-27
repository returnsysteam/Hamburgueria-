import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';
import { ImagePlaceholder } from './ImagePlaceholder';
import { Star, Flame, Sparkles } from 'lucide-react';

const AnimatedNumber: React.FC<{ value: number; decimals?: number; duration?: number }> = ({
  value,
  decimals = 0,
  duration = 1.4,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = start + (value - start) * easeProgress;

      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(value);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {decimals > 0 ? displayValue.toFixed(decimals).replace('.', ',') : Math.round(displayValue)}
    </span>
  );
};

export const EditorialStory: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experiencia" className="relative py-24 md:py-32 overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D97706]/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Editorial Chapter Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#A1A1AA]">
            <span className="text-[#E5A93C] font-semibold">01</span>
            <span className="text-white/20">/</span>
            <span>Experiência & Identidade</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#71717A] hidden sm:inline">
            Atibaia — São Paulo
          </span>
        </div>

        {/* Magazine-style asymmetric composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Editorial Statement & Counters */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24, filter: 'blur(8px)' }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EDEDEA] leading-[1.08] font-display">
                MAIS DO QUE UM{' '}
                <span className="text-[#E5A93C] inline-block">HAMBÚRGUER.</span>
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-[#E5A93C] to-transparent mt-4" />
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="space-y-4 text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed"
            >
              <p>
                A Inês Burguer nasceu com uma premissa clara: entregar uma experiência marcante a cada mordida. No coração do Atibaia Jardim, combinamos técnicas precisas de chapa, ponto equilibrado e matérias-primas de alta qualidade.
              </p>
              <p className="text-sm sm:text-base text-[#71717A]">
                Nossos hambúrgueres equilibram a crocância da crosta caramelizada com a maciez do pão artesanal e a riqueza dos queijos selecionados. O resultado é um produto pensado nos mínimos detalhes.
              </p>
            </motion.div>

            {/* Editorial Highlight Metrics Box with Animated Counters */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {/* Stat 1: 4,5 Estrelas */}
              <div className="p-6 rounded-2xl bg-[#141417]/80 border border-white/[0.07] backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E5A93C]/10 rounded-full blur-xl group-hover:bg-[#E5A93C]/20 transition-colors" />
                <div className="flex items-center gap-1.5 text-[#E5A93C] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E5A93C]" />
                  ))}
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-[#EDEDEA] tracking-tight">
                  <AnimatedNumber value={RESTAURANT_DATA.rating.score} decimals={1} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-[#A1A1AA] font-medium">
                  Avaliação Google
                </div>
                <div className="text-[11px] text-[#71717A] mt-0.5">
                  Alto índice de satisfação
                </div>
              </div>

              {/* Stat 2: 114 Avaliações Reais */}
              <div className="p-6 rounded-2xl bg-[#141417]/80 border border-white/[0.07] backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-colors" />
                <div className="flex items-center gap-1 text-[#E5A93C] mb-2 text-xs font-semibold tracking-wider uppercase">
                  <Sparkles className="w-4 h-4 text-[#E5A93C]" />
                  <span>Opiniões</span>
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-[#EDEDEA] tracking-tight">
                  <AnimatedNumber value={RESTAURANT_DATA.rating.count} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wider text-[#A1A1AA] font-medium">
                  Avaliações Verificadas
                </div>
                <div className="text-[11px] text-[#71717A] mt-0.5">
                  Clientes em Atibaia
                </div>
              </div>
            </motion.div>

            {/* Pillars / Micro attributes */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-xs text-[#A1A1AA]">
              <span className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-[#E5A93C]" />
                Crosta caramelizada autêntica
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
                Pão brioche dourado na manteiga
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
                Atibaia Jardim · SP
              </span>
            </div>
          </div>

          {/* Right Column: High-End Vertical Photography Spread */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Halos & Depth */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#E5A93C]/15 to-transparent rounded-3xl blur-2xl -z-10" />

              <motion.div
                initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] aspect-[3/4] group bg-[#141417]"
              >
                <ImagePlaceholder
                  src="/src/assets/images/editorial_burger_cut_1790519126941.jpg"
                  alt="Corte transversal do hambúrguer artesanal da Inês Burguer mostrando camadas e suculência"
                  aspectRatioClass="w-full h-full"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Bottom Overlay with factual craftsmanship specs */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/90 via-[#0A0A0B]/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0A0A0B]/85 backdrop-blur-md border border-white/15">
                  <div className="text-xs uppercase tracking-widest text-[#E5A93C] font-semibold mb-1">
                    Padrão Gastronômico
                  </div>
                  <p className="text-sm text-[#EDEDEA] font-medium">
                    Blend bovino fresco prensado na chapa com selagem de alta temperatura, mantendo o interior suculento e a textura irresistível.
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs text-[#71717A] pt-2 border-t border-white/10">
                    <span>Inês Burguer · Atibaia</span>
                    <span>R$ 60–80 / pessoa</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

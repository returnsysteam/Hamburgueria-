import React, { useRef, useState, useEffect } from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';
import { MagneticButton } from './MagneticButton';
import { ArrowUpRight, MessageCircle, Star, MapPin, Clock, Flame } from 'lucide-react';
import burgerCutout from '../assets/images/ines_burger_clean_cutout_1790524003253.jpg';

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLDivElement>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [isHoveredBurger, setIsHoveredBurger] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || shouldReduceMotion || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
    setIsHoveredBurger(false);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const blurSharpVariant: Variants = {
    hidden: {
      opacity: 0,
      filter: shouldReduceMotion ? 'blur(0px)' : 'blur(10px)',
      y: shouldReduceMotion ? 0 : 16,
    },
    show: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.65,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-14 md:py-20 overflow-hidden"
    >
      {/* Fundo gradiente sutil */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#160808] via-[#100606] to-[#0A0A0B]" />
        <div className="absolute top-1/4 right-1/4 w-[500px] lg:w-[850px] h-[500px] lg:h-[850px] rounded-full bg-gradient-to-tr from-[#991B1B]/18 via-[#EA580C]/15 to-[#E5A93C]/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
        
        {/* Kicker bar: Status & Location */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-start gap-2.5 text-xs text-[#D4D4D8] tracking-wide mb-6 sm:mb-8"
        >
          <span className="flex items-center gap-1.5 text-[#FADAA2] font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#E5A93C]" />
            Atibaia Jardim, SP
          </span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#F3C775]" />
            <span className="text-[#EDEDEA]">{RESTAURANT_DATA.schedule.statusNote}</span>
          </span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span className="flex items-center gap-1 text-[#EDEDEA]">
            <Star className="w-3.5 h-3.5 fill-[#E5A93C] text-[#E5A93C]" />
            <strong className="font-semibold text-white">4,5</strong> (114 avaliações reais)
          </span>
        </motion.div>

        {/* 
          ===================================================================
          LAYOUT OBRIGATÓRIO:
          TEXTO GRANDE À ESQUERDA (PRIMEIRA CAMADA - z-10):
          INÊS BURGUER
          SEU HAMBÚRGUER
          FAVORITO.

          HAMBÚRGUER GRANDE À DIREITA DO TEXTO (SEGUNDA CAMADA - z-20):
          - Na MESMA ALTURA do texto
          - COLADO DO LADO DO TÍTULO
          - SOBREPONDO PARCIALMENTE as palavras "HAMBÚRGUER" e "FAVORITO."
          - COBRINDO PARTE DAS ÚLTIMAS LETRAS
          - 100% TRANSPARENTE / SEM FUNDO NENHUM, SEM PLACA, SEM SOMBRA FORTE, SEM CAIXA PRETA
          ===================================================================
        */}
        <div className="relative w-full">
          
          {/* BLOCO DO TÍTULO E HAMBÚRGUER LADO A LADO COM SOBREPOSIÇÃO COLADA */}
          <div className="relative min-h-[610px] sm:min-h-[650px] lg:min-h-[640px]">
            
            {/* PRIMEIRA CAMADA (z-10): TEXTO GRANDE À ESQUERDA */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="relative z-10 w-full lg:w-[72%] xl:w-[74%] select-none pr-0"
            >
              {/* Badge da marca */}
              <motion.div variants={blurSharpVariant} className="mb-2 sm:mb-3">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-[0.26em] text-[#F3C775]">
                  <Flame className="w-4 h-4 text-[#E5A93C]" />
                  Gastronomia Artesanal em Atibaia
                </span>
              </motion.div>

              {/* 1. INÊS BURGUER */}
              <motion.h1
                variants={blurSharpVariant}
                className="text-[2.65rem] sm:text-6xl md:text-7xl lg:text-[5.4rem] xl:text-[6.6rem] font-black uppercase tracking-tight font-display text-white leading-[0.88] whitespace-nowrap"
              >
                INÊS BURGUER
              </motion.h1>

              {/* 2. SEU HAMBÚRGUER (as letras finais 'GUER' ficam sob o hambúrguer) */}
              <motion.div variants={blurSharpVariant} className="leading-[0.92] mt-1 sm:mt-2">
                <span className="block text-[2.2rem] sm:text-5xl md:text-6xl lg:text-[4.6rem] xl:text-[5.6rem] font-black uppercase tracking-tight font-display text-[#FADAA2]/95 whitespace-nowrap">
                  SEU HAMBÚRGUER
                </span>
              </motion.div>

              {/* 3. FAVORITO. (as letras finais 'TO.' ficam sob o hambúrguer) */}
              <motion.div variants={blurSharpVariant} className="leading-[0.92] mt-1 sm:mt-2">
                <span className="block text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.2rem] xl:text-[6.4rem] font-black uppercase tracking-tight font-display italic bg-gradient-to-r from-[#FDE68A] via-[#E5A93C] to-[#EA580C] bg-clip-text text-transparent whitespace-nowrap">
                  FAVORITO.
                </span>
              </motion.div>

              {/* Descrição */}
              <motion.p
                variants={blurSharpVariant}
                className="text-base sm:text-lg text-[#D4D4D8] font-light leading-relaxed max-w-xl pt-4 sm:pt-6"
              >
                Hambúrgueres preparados artesanalmente com cortes nobres selecionados, picles crocantes, queijo cheddar derretido, tomate fresco e pão brioche com gergelim dourado na chapa.
              </motion.p>

              {/* Botões de Ação */}
              <motion.div
                variants={blurSharpVariant}
                className="flex flex-wrap items-center gap-4 pt-4 sm:pt-6"
              >
                <MagneticButton
                  href={RESTAURANT_DATA.ifoodUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  ariaLabel="Ver o cardápio oficial da Inês Burguer no iFood"
                >
                  <span>Ver Cardápio no iFood</span>
                  <ArrowUpRight className="w-4 h-4 text-[#0A0A0B]" />
                </MagneticButton>

                <MagneticButton
                  href={RESTAURANT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  ariaLabel="Fazer pedido pelo WhatsApp da Inês Burguer"
                >
                  <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
                  <span>Pedir no WhatsApp</span>
                </MagneticButton>
              </motion.div>

              {/* Rodapé informativo */}
              <motion.div
                variants={blurSharpVariant}
                className="pt-6 mt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#A1A1AA]"
              >
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5A93C]" />
                  <span>Faixa de preço: <strong className="text-white font-medium">{RESTAURANT_DATA.priceRange}</strong></span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{RESTAURANT_DATA.address.street} · Atibaia Jardim</span>
                </span>
              </motion.div>
            </motion.div>

            {/* 
              SEGUNDA CAMADA (z-20): HAMBÚRGUER GRANDE À DIREITA DO TEXTO
              - Na mesma altura exata de HAMBÚRGUER e FAVORITO.
              - Colado do lado do título e sobrepondo as últimas letras
              - Sem placa, sem caixa preta, sem sombra forte, transparente
            */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.92, x: 20 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 1 }
                  : {
                      opacity: 1,
                      scale: 1,
                      x: mouseOffset.x * 0.7,
                      y: mouseOffset.y * 0.7,
                    }
              }
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              onMouseEnter={() => setIsHoveredBurger(true)}
              onMouseLeave={() => setIsHoveredBurger(false)}
              className="absolute right-[-18%] sm:right-[-10%] md:right-[-5%] lg:right-[-7%] xl:right-[-4%] top-[16%] sm:top-[15%] lg:top-[9%] z-20 w-[245px] sm:w-[360px] md:w-[450px] lg:w-[510px] xl:w-[590px] aspect-[4/5] flex items-center justify-center pointer-events-auto cursor-pointer"
            >
              <span className="absolute inset-[18%] rounded-full bg-[#E5A93C]/16 blur-[70px] animate-pulse-glow" aria-hidden="true" />
              {/* Hambúrguer flutuando com sobreposição direta sobre as letras */}
              <motion.div
                animate={{
                  y: shouldReduceMotion ? 0 : [0, -8, 0],
                  scale: isHoveredBurger && !shouldReduceMotion ? 1.03 : 1,
                }}
                transition={{
                  y: {
                    duration: 4.8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  scale: {
                    duration: 0.25,
                    ease: 'easeOut',
                  },
                }}
                className="relative w-full h-full flex items-center justify-center select-none pointer-events-none"
              >
                <img
                  src={burgerCutout}
                  alt="Hambúrguer artesanal assinatura Inês Burguer com picles, tomate, queijo cheddar derretido e pão de gergelim"
                  className="relative z-10 w-full h-full object-contain select-none pointer-events-none drop-shadow-[0_18px_24px_rgba(0,0,0,0.28)]"
                  loading="eager"
                />
              </motion.div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

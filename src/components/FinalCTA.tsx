import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';
import { MagneticButton } from './MagneticButton';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Background Image with Dark Vignette & Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/cta_smoky_burger_1790519153125.jpg"
          alt="Hambúrguer artesanal na brasa com fumaça e atmosfera cinematográfica"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105"
          loading="lazy"
        />
        {/* Layered Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/85 to-[#0A0A0B]/90" />
        <div className="absolute inset-0 bg-radial-at-c from-transparent via-[#0A0A0B]/60 to-[#0A0A0B]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center">
        
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24, filter: 'blur(8px)' }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#E5A93C] font-semibold block">
            Inês Burguer · Atibaia Jardim
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-[#EDEDEA] font-display leading-[1.02]">
            VAMOS COMER BEM?
          </h2>

          <p className="text-base sm:text-xl text-[#A1A1AA] max-w-2xl mx-auto font-light leading-relaxed">
            Confira o cardápio, conheça a Inês Burguer e venha viver essa experiência.
          </p>

          {/* Action CTAs */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href={RESTAURANT_DATA.ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              ariaLabel="Ver o cardápio completo da Inês Burguer no iFood"
            >
              <span>VER CARDÁPIO</span>
              <ArrowUpRight className="w-4 h-4 text-[#0A0A0B]" />
            </MagneticButton>

            <MagneticButton
              href={RESTAURANT_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              ariaLabel="Falar no WhatsApp da Inês Burguer"
            >
              <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
              <span>FALAR NO WHATSAPP</span>
            </MagneticButton>
          </div>

          {/* Discreet status note */}
          <p className="text-xs text-[#71717A] pt-4">
            {RESTAURANT_DATA.schedule.statusNote} · {RESTAURANT_DATA.address.street}, {RESTAURANT_DATA.address.neighborhood}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

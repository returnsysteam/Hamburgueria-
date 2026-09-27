import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';
import { MagneticButton } from './MagneticButton';
import { ImagePlaceholder } from './ImagePlaceholder';
import { ArrowUpRight, Utensils, Sparkles, MessageCircle } from 'lucide-react';

export const MenuGateway: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="cardapio" className="relative py-24 md:py-32 bg-[#0E0E12] border-t border-white/[0.06] overflow-hidden">
      {/* Ambient warm light reflection */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -bottom-20 right-10 w-[500px] h-[500px] bg-[#E5A93C]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Editorial Section Number */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#A1A1AA]">
            <span className="text-[#E5A93C] font-semibold">02</span>
            <span className="text-white/20">/</span>
            <span>Cardápio & Pedidos</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#71717A] hidden sm:inline">
            Disponível no iFood & WhatsApp
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Big Close-up Food Photography */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.8)] aspect-[4/3] group bg-[#141417]"
            >
              <ImagePlaceholder
                src="/src/assets/images/hero_smash_isolated_1790520265971.jpg"
                alt="Smash cheeseburger artesanal servido na Inês Burguer em Atibaia"
                aspectRatioClass="w-full h-full"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/85 via-transparent to-transparent pointer-events-none" />

              {/* Floating Banner Inside Card */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0A0A0B]/85 backdrop-blur-md border border-white/15 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#E5A93C] font-semibold uppercase tracking-wider">
                    Faixa de Preço
                  </div>
                  <div className="text-base font-bold text-white font-mono">
                    {RESTAURANT_DATA.priceRange}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-[#A1A1AA]">
                    Atualizado no iFood
                  </div>
                  <div className="text-xs text-[#E5A93C] font-medium flex items-center justify-end gap-1">
                    <span>Cardápio Oficial</span>
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Menu Gateway & Conversion */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-8">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E5A93C] font-semibold mb-3">
                <Utensils className="w-3.5 h-3.5" />
                <span>Alta Hamburgueria</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EDEDEA] font-display leading-[1.08]">
                CONHEÇA O CARDÁPIO
              </h2>
              <div className="w-16 h-[2px] bg-[#E5A93C] mt-4" />
            </motion.div>

            <motion.p
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-base sm:text-lg text-[#A1A1AA] font-light leading-relaxed"
            >
              Confira as opções disponíveis e faça seu pedido. Nosso cardápio digital completo conta com fotos, acompanhamentos e disponibilidade em tempo real para a sua comodidade em Atibaia.
            </motion.p>

            {/* Structured categories guide without fake prices or invented items */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-3 pt-2"
            >
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[#EDEDEA]">
                    Hambúrgueres & Smashes Artesanais
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    Blends especiais de carne, ponto preciso e queijo especial.
                  </p>
                </div>
                <span className="text-xs text-[#E5A93C] font-medium whitespace-nowrap pl-2">
                  Ver opções
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[#EDEDEA]">
                    Acompanhamentos & Porções
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    Batatas crocantes e molhos artesanais preparados na casa.
                  </p>
                </div>
                <span className="text-xs text-[#E5A93C] font-medium whitespace-nowrap pl-2">
                  Ver opções
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.07] flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-[#EDEDEA]">
                    Bebidas Geladas
                  </h3>
                  <p className="text-xs text-[#A1A1AA] mt-0.5">
                    Refrigerantes e bebidas para harmonizar com seu burger.
                  </p>
                </div>
                <span className="text-xs text-[#E5A93C] font-medium whitespace-nowrap pl-2">
                  Ver opções
                </span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <MagneticButton
                href={RESTAURANT_DATA.ifoodUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                ariaLabel="Ver cardápio completo da Inês Burguer no iFood"
              >
                <span>VER CARDÁPIO</span>
                <ArrowUpRight className="w-4 h-4 text-[#0A0A0B]" />
              </MagneticButton>

              <MagneticButton
                href={RESTAURANT_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                ariaLabel="Tirar dúvidas pelo WhatsApp da Inês Burguer"
              >
                <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
                <span>Falar no WhatsApp</span>
              </MagneticButton>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

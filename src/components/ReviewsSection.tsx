import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';
import { Star, ShieldCheck, Award, ThumbsUp, MapPin, CheckCircle2 } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const trustHighlights = [
    {
      icon: Star,
      title: 'Nota Média 4,5 de 5.0',
      description: 'Pontuação consolidada e auditada no Google com mais de 100 avaliações de clientes.',
    },
    {
      icon: ThumbsUp,
      title: '114 Avaliações Reais',
      description: 'Opiniões espontâneas de clientes em Atibaia comprovando consistência e padrão elevado.',
    },
    {
      icon: Award,
      title: 'Referência em Atibaia Jardim',
      description: 'Reconhecimento pela qualidade da carne, ponto acertado e embalagem impecável.',
    },
    {
      icon: MapPin,
      title: 'Endereço Físico Estabelecido',
      description: 'R. Brasil, 521 — facilidade para retirada local e delivery rápido na região.',
    },
  ];

  return (
    <section id="avaliacoes" className="relative py-24 md:py-32 bg-[#0C0C0E] border-t border-white/[0.06] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#E5A93C]/6 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Editorial Section Indicator */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#A1A1AA]">
            <span className="text-[#E5A93C] font-semibold">05</span>
            <span className="text-white/20">/</span>
            <span>Credenciais Verificadas</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#71717A] hidden sm:inline">
            100% Dados Oficiais
          </span>
        </div>

        {/* Hero Credential Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-7">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, filter: 'blur(8px)', y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, filter: 'blur(0px)', y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E5A93C] mb-3">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Dados Verificados pelo Google</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#EDEDEA] font-display leading-[1.08]">
                REPUTAÇÃO CONSTRUÍDA NA CHAPA.
              </h2>

              <p className="mt-4 text-[#A1A1AA] text-base sm:text-lg font-light leading-relaxed max-w-xl">
                A Inês Burguer mantém nota 4,5 com 114 avaliações públicas no Google. Sem comentários inventados ou promessas vazias: nosso padrão de qualidade é comprovado por quem consome em Atibaia.
              </p>
            </motion.div>
          </div>

          {/* Big Visual Badge Score Box */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.95 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md p-8 rounded-3xl bg-gradient-to-br from-[#18181C] to-[#121215] border border-white/15 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E5A93C]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-baseline justify-between">
                <span className="text-6xl sm:text-7xl font-black text-[#E5A93C] font-display tracking-tight">
                  4,5
                </span>
                <div className="text-right">
                  <div className="flex text-[#E5A93C] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E5A93C]" />
                    ))}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-[#A1A1AA]">
                    Google Avaliações
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A1A1AA]">Total de avaliações</span>
                  <strong className="text-white font-mono text-base">114 avaliações</strong>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A1A1AA]">Faixa de preço</span>
                  <strong className="text-white font-mono text-base">{RESTAURANT_DATA.priceRange}</strong>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#A1A1AA]">Local</span>
                  <span className="text-[#F3C775] font-medium text-sm">Atibaia Jardim — SP</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Perfil verificado no ecossistema Google Maps</span>
              </div>
            </motion.div>
          </div>

        </div>

        {/* 4 Trust Factor Grid (No fake review quotes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustHighlights.map((factor, idx) => {
            const Icon = factor.icon;
            return (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 rounded-2xl bg-[#141417]/80 border border-white/[0.07] hover:border-[#E5A93C]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/10 border border-[#E5A93C]/20 flex items-center justify-center text-[#E5A93C] mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display mb-2">
                  {factor.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed font-light">
                  {factor.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

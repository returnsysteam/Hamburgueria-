import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { RESTAURANT_DATA } from '../data/restaurant';
import { MagneticButton } from './MagneticButton';
import { MapPin, Phone, MessageCircle, Clock, Navigation, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="localizacao" className="relative py-24 md:py-32 bg-[#0A0A0B] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#E5A93C]/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Editorial Section Indicator */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#A1A1AA]">
            <span className="text-[#E5A93C] font-semibold">06</span>
            <span className="text-white/20">/</span>
            <span>Localização & Atendimento</span>
          </div>
          <span className="text-xs uppercase tracking-widest text-[#71717A] hidden sm:inline">
            Atibaia Jardim · SP
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Contact & Address details */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20, filter: 'blur(8px)' }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EDEDEA] font-display">
                ONDE NOS ENCONTRAR.
              </h2>
              <div className="w-16 h-[2px] bg-[#E5A93C] mt-4" />
            </motion.div>

            <div className="space-y-6">
              
              {/* Address card */}
              <div className="p-6 rounded-2xl bg-[#141417] border border-white/[0.08] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E5A93C]/10 border border-[#E5A93C]/20 flex items-center justify-center shrink-0 text-[#E5A93C]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Endereço Oficial
                  </h3>
                  <p className="text-base text-[#EDEDEA] mt-1 font-medium">
                    {RESTAURANT_DATA.address.street} — {RESTAURANT_DATA.address.neighborhood}
                  </p>
                  <p className="text-sm text-[#A1A1AA]">
                    {RESTAURANT_DATA.address.city} - {RESTAURANT_DATA.address.state}, {RESTAURANT_DATA.address.zip}
                  </p>
                </div>
              </div>

              {/* Status card */}
              <div className="p-6 rounded-2xl bg-[#141417] border border-white/[0.08] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Horário Informado
                  </h3>
                  <p className="text-base text-[#F3C775] mt-1 font-medium">
                    {RESTAURANT_DATA.schedule.statusNote}
                  </p>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    Consulte disponibilidade e pedidos em tempo real no iFood ou WhatsApp.
                  </p>
                </div>
              </div>

              {/* Phone and WhatsApp card */}
              <div className="p-6 rounded-2xl bg-[#141417] border border-white/[0.08] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Telefone & WhatsApp
                  </h3>
                  <p className="text-base text-[#EDEDEA] mt-1 font-medium">
                    {RESTAURANT_DATA.phone.display}
                  </p>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    Canal direto para atendimento rápido e dúvidas sobre entregas.
                  </p>
                </div>
              </div>

            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <MagneticButton
                href={RESTAURANT_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                ariaLabel="Abrir endereço da Inês Burguer no Google Maps"
              >
                <Navigation className="w-4 h-4 text-[#0A0A0B]" />
                <span>Abrir no Google Maps</span>
              </MagneticButton>

              <MagneticButton
                href={RESTAURANT_DATA.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                ariaLabel="Conversar no WhatsApp da Inês Burguer"
              >
                <MessageCircle className="w-4 h-4 text-[#E5A93C]" />
                <span>Conversar no WhatsApp</span>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: Stylized Interactive Map Card */}
          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[#141417] border border-white/[0.08] shadow-2xl relative overflow-hidden group">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#18181C] border border-white/10 flex flex-col items-center justify-center text-center p-8">
                
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `
                      radial-gradient(circle at 50% 50%, rgba(229,169,60,0.15) 0%, transparent 60%),
                      linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
                    `,
                    backgroundSize: '100% 100%, 36px 36px, 36px 36px',
                  }}
                />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-[#E5A93C]/20 animate-ping absolute inset-0" />
                    <div className="w-14 h-14 rounded-full bg-[#E5A93C] text-[#0A0A0B] flex items-center justify-center shadow-[0_0_30px_rgba(229,169,60,0.6)] relative z-10">
                      <MapPin className="w-7 h-7 fill-[#0A0A0B]" />
                    </div>
                  </div>

                  <div className="mt-4 px-4 py-2 rounded-xl bg-[#0A0A0B]/90 backdrop-blur-md border border-white/15 shadow-xl text-center">
                    <p className="text-sm font-bold text-white font-display">
                      INÊS BURGUER
                    </p>
                    <p className="text-xs text-[#A1A1AA]">
                      R. Brasil, 521 · Atibaia Jardim
                    </p>
                  </div>

                  <a
                    href={RESTAURANT_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0A0A0B] bg-[#E5A93C] hover:bg-[#F3C775] rounded-full transition-colors shadow-lg"
                  >
                    <span>Ver rota no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-[#71717A]">
                <span>Atibaia Jardim · Atibaia - SP</span>
                <span>CEP: 12942-210</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

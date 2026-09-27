import React, { useState, useEffect } from 'react';
import { RESTAURANT_DATA } from '../data/restaurant';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A Hamburgueria', href: '#experiencia' },
    { label: 'Cardápio', href: '#cardapio' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0B]/85 backdrop-blur-md py-3.5 border-b border-white/[0.07] shadow-xl'
            : 'bg-[#0A0A0B]/40 backdrop-blur-sm py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg md:text-xl font-extrabold tracking-tight text-[#EDEDEA] hover:text-[#F3C775] transition-colors font-display"
          >
            INÊS BURGUER
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 transition-colors hover:text-[#EDEDEA] group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E5A93C] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={RESTAURANT_DATA.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar no WhatsApp da Inês Burguer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#D4D4D8] hover:text-[#EDEDEA] bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-full transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#E5A93C]" />
              <span>(11) 91967-3776</span>
            </a>

            <a
              href={RESTAURANT_DATA.ifoodUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0A0A0B] bg-gradient-to-r from-[#F3C775] to-[#E5A93C] hover:from-[#FADAA2] hover:to-[#F3C775] rounded-full shadow-[0_2px_12px_rgba(229,169,60,0.25)] hover:shadow-[0_4px_16px_rgba(229,169,60,0.35)] transition-all whitespace-nowrap"
            >
              <span>Ver Cardápio</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
              className="lg:hidden p-2 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/[0.06] transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#0E0E11]/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-medium text-[#EDEDEA] hover:text-[#F3C775] transition-colors py-1.5 border-b border-white/[0.05]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Status and metadata */}
              <div className="pt-2 text-xs text-[#A1A1AA] flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#E5A93C]" />
                  <span className="text-[#EDEDEA]">{RESTAURANT_DATA.schedule.statusNote}</span>
                </div>
                <div>{RESTAURANT_DATA.address.full}</div>
                <div>Faixa de preço: {RESTAURANT_DATA.priceRange}</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={RESTAURANT_DATA.ifoodUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0A0A0B] bg-[#E5A93C] rounded-full shadow-lg"
                >
                  <span>Pedir pelo iFood</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href={RESTAURANT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium text-[#EDEDEA] bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 rounded-full"
                >
                  <Phone className="w-4 h-4 text-[#E5A93C]" />
                  <span>WhatsApp: (11) 91967-3776</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

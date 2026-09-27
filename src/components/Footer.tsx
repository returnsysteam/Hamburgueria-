import React from 'react';
import { RESTAURANT_DATA } from '../data/restaurant';
import { ArrowUpRight, Phone, MapPin, Star } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#070708] border-t border-white/[0.08] pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Section: Large Brand Display & Editorial Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <a
              href="#"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#EDEDEA] hover:text-[#F3C775] transition-colors font-display block"
            >
              INÊS BURGUER
            </a>
            <p className="text-sm text-[#A1A1AA] max-w-md font-light leading-relaxed">
              Hambúrgueres artesanais de alto padrão em Atibaia Jardim. Sabor autêntico, ponto preciso e dedicação a cada preparo.
            </p>

            <div className="flex items-center gap-3 pt-2 text-xs text-[#71717A]">
              <span className="flex items-center gap-1 text-[#E5A93C]">
                <Star className="w-3.5 h-3.5 fill-[#E5A93C]" />
                <strong className="text-white">4,5</strong> no Google
              </span>
              <span>·</span>
              <span>114 avaliações</span>
              <span>·</span>
              <span>{RESTAURANT_DATA.priceRange}</span>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDEDEA] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-sm text-[#A1A1AA]">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#experiencia" className="hover:text-white transition-colors">
                  A Hamburgueria
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-white transition-colors">
                  Cardápio
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-white transition-colors">
                  Avaliações
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#EDEDEA] font-semibold">
              Contato & Pedidos
            </h4>
            <div className="space-y-3 text-sm text-[#A1A1AA]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
                <span>
                  {RESTAURANT_DATA.address.street}
                  <br />
                  {RESTAURANT_DATA.address.neighborhood}
                  <br />
                  Atibaia - SP
                </span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E5A93C] shrink-0" />
                <a
                  href={RESTAURANT_DATA.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {RESTAURANT_DATA.phone.display}
                </a>
              </p>

              <div className="pt-2">
                <a
                  href={RESTAURANT_DATA.ifoodUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5A93C] hover:text-[#F3C775] transition-colors"
                >
                  <span>Pedir no iFood</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Subtle Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52525B]">
          <p>© {new Date().getFullYear()} Inês Burguer. Todos os direitos reservados.</p>
          <p>Atibaia Jardim · Atibaia, São Paulo</p>
        </div>

      </div>
    </footer>
  );
};

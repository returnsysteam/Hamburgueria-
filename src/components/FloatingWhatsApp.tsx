import React, { useState } from 'react';
import { RESTAURANT_DATA } from '../data/restaurant';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <aside aria-label="Atendimento via WhatsApp" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Subtle Tooltip on Desktop */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#141417]/95 backdrop-blur-md border border-white/15 text-xs text-[#EDEDEA] shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Atendimento WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            aria-label="Fechar dica do WhatsApp"
            className="text-white/40 hover:text-white p-0.5 ml-1 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button with subtle breathing */}
      <a
        href={RESTAURANT_DATA.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp com Inês Burguer"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-[0_8px_28px_rgba(16,185,129,0.4)] transition-all duration-300 hover:scale-105 animate-breathing-slow focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0A0A0B]"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
        
        {/* Subtle ping ring */}
        <span
          className="absolute -inset-1 rounded-full bg-emerald-400/25 animate-ping pointer-events-none"
          style={{ animationDuration: '3s' }}
        />
      </a>
    </aside>
  );
};

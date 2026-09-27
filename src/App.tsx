/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialStory } from './components/EditorialStory';
import { MenuGateway } from './components/MenuGateway';
import { InteractiveTypographyShowcase } from './components/InteractiveTypographyShowcase';
import { EditorialGallery } from './components/EditorialGallery';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CustomCursor } from './components/CustomCursor';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0B] text-[#EDEDEA] overflow-x-hidden selection:bg-[#E5A93C]/20 selection:text-[#F3C775] bg-grain">
      {/* Discreet interactive cursor on desktop */}
      <CustomCursor />

      {/* Global Background Ambient Layers */}
      <div className="fixed inset-0 pointer-events-none -z-10" aria-hidden="true">
        {/* Subtle top warm radial halo */}
        <div className="absolute -top-40 right-1/4 w-[700px] h-[700px] bg-gradient-to-b from-[#E5A93C]/8 to-transparent rounded-full blur-[140px]" />
        {/* Mid-page ambient tint */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-gradient-to-r from-[#D97706]/5 to-transparent rounded-full blur-[160px]" />
      </div>

      {/* Top 3-Zone Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main>
        {/* Cinematic Hero with Framer Motion Orchestrated Stagger & Layered Typography */}
        <Hero />

        {/* Section 01: Mais do que um hambúrguer & Animated Numbers */}
        <EditorialStory />

        {/* Section 02: Conheça o Cardápio (iFood direct portal) */}
        <MenuGateway />

        {/* Section 03: Tipografia em Camadas, Image Reveal on Hover & Text Mask Image */}
        <InteractiveTypographyShowcase />

        {/* Section 04: Galeria Editorial Gastronômica */}
        <EditorialGallery />

        {/* Section 05: Credenciais Verificadas (4,5 estrelas · 114 avaliações reais sem comentários inventados) */}
        <ReviewsSection />

        {/* Section 06: Localização e Atendimento com Rota Google Maps */}
        <LocationSection />

        {/* Section 07: CTA Final Cinematográfico */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Progressive Web App Mobile Install Prompt */}
      <PWAInstallPrompt />
    </div>
  );
}

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { generateWaLink } from '../../utils/whatsapp';

/**
 * Floating WhatsApp CTA Button (FR-08) — Light Editorial Theme
 * Fixed to bottom-right across all pages for direct B2B consultation.
 */
export const FloatingWhatsApp = ({
  customMessage = 'Halo PrintingGo, saya ingin berkonsultasi mengenai kebutuhan cetak & packaging perusahaan kami.',
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const waUrl = generateWaLink(customMessage);

  return (
    <aside
      aria-label="Konsultasi WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-3 select-none"
    >
      {/* Contextual hint bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-white text-[#1A1A1A] text-xs py-2 px-3.5 rounded-[4px] border border-[#E4E4E7] shadow-sm">
          <span>Konsultasi Cepat via WhatsApp</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#52525B] hover:text-[#1A1A1A] ml-1"
            aria-label="Tutup pesan bantuan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-md hover:scale-105 active:scale-95 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 focus:ring-offset-white"
        aria-label="Chat WhatsApp dengan tim PrintingGo"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        
        {/* Active ping indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
        </span>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;

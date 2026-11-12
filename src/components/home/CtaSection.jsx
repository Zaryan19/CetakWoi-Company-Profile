import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { generateWaLink } from '../../utils/whatsapp';

/**
 * Editorial Closing CTA — Plain Language, High-Contrast Light Theme
 * Focused purely on direct WhatsApp consultation. No PDF download button.
 */
export const CtaSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const discussUrl = generateWaLink(
    'Halo CetakWoi, saya ingin konsultasi kebutuhan cetak untuk perusahaan/usaha kami. Boleh minta informasi harga dan contoh bahannya?'
  );

  return (
    <section className="bg-white text-[#1A1A1A] py-20 sm:py-28 lg:py-40 border-b border-[#E4E4E7]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl space-y-8 sm:space-y-10"
        >
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.15em] uppercase text-[#52525B] block">
            / 07 — HUBUNGI KAMI
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.03em] leading-[1.08] sm:leading-[1.05] text-[#1A1A1A] break-words">
            Punya rencana cetak dalam jumlah banyak?{' '}
            <span className="font-editorial italic font-normal text-[#1A1A1A]/80 block sm:inline">
              Yuk, kita diskusikan.
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg font-light text-[#52525B] leading-relaxed max-w-2xl">
            Tim kami siap membantu memilihkan bahan terbaik, mengecek file desain Anda, 
            dan menghitungkan biaya yang paling hemat untuk usaha Anda. Respon cepat langsung dari tim produksi kami.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 sm:pt-4">
            <a
              href={discussUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white text-sm font-semibold tracking-tight rounded-[4px] hover:bg-black active:bg-neutral-800 transition-colors duration-200 min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Konsultasi Gratis via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-[#E4E4E7] flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-6 text-xs font-mono text-[#52525B]">
            <span>PABRIK: KAWASAN INDUSTRI PULOGADUNG, JAKARTA TIMUR</span>
            <span className="hidden sm:inline">•</span>
            <span>RESPON CEPAT: SENIN - JUMAT 08:30 - 17:30 WIB</span>
            <span className="hidden sm:inline">•</span>
            <a href="mailto:business@cetakwoi.com" className="hover:text-[#1A1A1A] transition-colors break-all">
              BUSINESS@CETAKWOI.COM
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CtaSection;

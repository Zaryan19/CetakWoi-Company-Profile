import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { generateWaLink } from '../../utils/whatsapp';

/**
 * Editorial Hero Section — Plain Language Edition
 * Clear, everyday Indonesian focused on real business value.
 */
export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const discussUrl = generateWaLink(
    'Halo PrintingGo, saya ingin konsultasi kebutuhan cetak dus kemasan / materi promosi untuk bisnis kami.'
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative bg-white text-[#1A1A1A] pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-36 border-b border-[#E4E4E7]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Editorial Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-mono tracking-[0.15em] uppercase text-[#52525B]">
              / 01 — PERCETAKAN DUS, KEMASAN &amp; MEDIA PROMOSI BISNIS
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="max-w-6xl mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.25rem] font-bold tracking-[-0.03em] leading-[1.08] sm:leading-[1.04] text-[#1A1A1A] break-words">
              Cetak Kemasan Produk &amp; Promosi Bisnis Anda{' '}
              <span className="font-editorial italic font-normal text-[#1A1A1A]/80 tracking-normal block sm:inline">
                dengan hasil rapi
              </span>{' '}
              &amp; tepat waktu.
            </h1>
          </motion.div>

          {/* Subtitle & Actions */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12 lg:mb-20"
          >
            <p className="lg:col-span-7 text-sm sm:text-base lg:text-lg font-light text-[#52525B] leading-relaxed max-w-2xl">
              Bantu produk Anda tampil lebih terpercaya dengan kemasan kokoh, warna tajam, dan potongan presisi. 
              Siap memproduksi puluhan ribu kemasan setiap bulan tanpa repot — kami bantu cek file desain sampai barang sampai di pintu Anda.
            </p>

            <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 lg:justify-end">
              <a
                href={discussUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-white text-sm font-semibold tracking-tight rounded-[4px] hover:bg-black active:bg-neutral-800 transition-colors duration-200 min-h-[48px]"
              >
                <span>Konsultasi Kebutuhan Anda</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent text-[#1A1A1A] text-sm font-medium tracking-tight rounded-[4px] border border-[#E4E4E7] hover:border-[#1A1A1A] hover:bg-[#F4F4F5] transition-all duration-200 min-h-[48px]"
              >
                <span>Lihat Pilihan Layanan</span>
              </Link>
            </div>
          </motion.div>

          {/* Widescreen Industrial Showcase Frame with Real Photo */}
          <motion.div
            variants={itemVariants}
            className="relative w-full aspect-[16/10] sm:aspect-[21/9] min-h-[220px] bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] overflow-hidden flex flex-col justify-between p-5 sm:p-8 group"
          >
            {/* Background Factory / Production Photo */}
            <img
              src="/images/1.png"
              alt="Pabrik PrintingGo di Kawasan Industri Pulogadung"
              className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="eager"
            />
            {/* Editorial Glass Overlay to maintain high contrast readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/70 to-white/40 pointer-events-none" />

            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#1A1A1A] uppercase tracking-wider border-b border-[#E4E4E7]/80 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                <span className="font-semibold">PABRIK SENDIRI / KAWASAN INDUSTRI PULOGADUNG, JAKARTA TIMUR</span>
              </div>
              <span className="hidden sm:inline font-semibold">KAPASITAS: 50.000+ KEMASAN / BULAN</span>
            </div>

            <div className="relative z-10 my-auto py-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#52525B] block mb-2 font-medium">
                STANDAR PRODUKSI
              </span>
              <p className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1A1A] font-sans max-w-3xl drop-shadow-sm">
                Mesin Cetak Cepat 5-Warna &amp; Mesin Spanduk Resolusi Tinggi.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#1A1A1A] border-t border-[#E4E4E7]/80 pt-4 font-medium">
              <span>WARNA PAS &amp; POTONGAN RAPI DI SETIAP LEMBAR</span>
              <span className="flex items-center gap-2">
                <span>LIHAT DI BAWAH</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;

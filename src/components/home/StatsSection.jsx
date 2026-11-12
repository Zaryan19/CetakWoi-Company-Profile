import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { COMPANY_STATS } from '../../data/mockData';
import CountUp from '../common/CountUp';

/**
 * Editorial Statement & Metrics — Plain Language Edition
 * Clear, everyday Indonesian explaining CetakWoi's real benefits for businesses.
 */
export const StatsSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="bg-white text-[#1A1A1A] py-16 sm:py-24 lg:py-36 border-b border-[#E4E4E7]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left 4 Cols: Section Index */}
          <div className="lg:col-span-4">
            <span className="text-xs font-mono tracking-[0.15em] uppercase text-[#52525B] static lg:sticky lg:top-28 block">
              / 02 — KENAPA PRINTINGGO
            </span>
          </div>

          {/* Right 8 Cols: Editorial Statement & Metrics */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-8 space-y-12 lg:space-y-16"
          >
            
            {/* Statement */}
            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-3xl lg:text-[2.5rem] font-light tracking-[-0.02em] leading-snug text-[#1A1A1A]">
                Bukan sekadar tukang cetak — kami adalah mitra kerja yang memastikan setiap dus, 
                buku, dan spanduk Anda selesai dengan hasil rapi, warna tidak belang, dan selalu siap sebelum tanggal promosi dimulai.
              </h2>
              <p className="text-sm sm:text-base font-light text-[#52525B] leading-relaxed max-w-2xl">
                Beroperasi langsung dari pabrik kami seluas 2.500 m² di Kawasan Industri Pulogadung, PrintingGo mendampingi Anda dari merapikan file gambar, memilih bahan yang paling awet dan hemat, mencetak dalam jumlah banyak, hingga mengirimkannya ke alamat kantor atau gudang Anda.
              </p>
            </motion.div>

            {/* Hairline Metrics Strip */}
            <motion.div
              variants={itemVariants}
              className="border-t border-b border-[#E4E4E7] py-6 sm:py-10"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {COMPANY_STATS.map((stat, idx) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A] tabular-nums">
                      <CountUp value={stat.value} />
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] font-sans">
                      {stat.label}
                    </div>
                    <div className="text-[11px] font-mono text-[#52525B] leading-tight">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;

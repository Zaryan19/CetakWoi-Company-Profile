import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SERVICES_DATA } from '../../data/mockData';
import { generateWaLink } from '../../utils/whatsapp';

/**
 * Capabilities Section — Plain Language Edition
 * Clean, understandable services list for any business owner.
 */
export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white text-[#1A1A1A] py-16 sm:py-24 lg:py-36 border-b border-[#E4E4E7]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-[#E4E4E7]"
        >
          <div>
            <span className="text-xs font-mono tracking-[0.15em] uppercase text-[#52525B] block mb-2 sm:mb-3">
              / 03 — LAYANAN UTAMA KAMI
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#1A1A1A]">
              Katalog Layanan Cetak Kami.
            </h2>
          </div>
          <Link
            to="/services"
            className="group text-xs font-mono tracking-wider uppercase text-[#52525B] hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-1.5"
          >
            <span>LIHAT SEMUA PILIHAN LAYANAN</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Horizontal Index List */}
        <div className="border-t border-[#E4E4E7] divide-y divide-[#E4E4E7]">
          {SERVICES_DATA.map((service, index) => {
            const indexStr = String(index + 1).padStart(2, '0');
            const isHovered = hoveredIndex === index;
            const quoteUrl = generateWaLink(
              `Halo CetakWoi, saya ingin tanya harga dan spesifikasi untuk layanan ${service.title}.`
            );

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group py-6 sm:py-8 lg:py-10 px-3 sm:px-6 transition-all duration-200 ${
                  isHovered ? 'bg-[#F4F4F5]' : 'bg-transparent'
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
                  
                  {/* Left: Index & Title */}
                  <div className="flex items-start sm:items-baseline gap-4 sm:gap-8">
                    <span className="text-xs font-mono text-[#52525B] tracking-widest shrink-0 pt-1 sm:pt-0 transition-colors duration-200 group-hover:text-[#1A1A1A]">
                      /{indexStr}
                    </span>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-black transition-colors inline-block"
                      >
                        {service.title}
                      </Link>
                      <p className="text-xs sm:text-sm font-light text-[#52525B] max-w-xl leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Right: Metadata & Actions */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 shrink-0 pt-2 lg:pt-0 pl-7 sm:pl-12 lg:pl-0 border-t border-[#E4E4E7]/60 lg:border-t-0">
                    <div className="text-left sm:text-right">
                      <div className="text-xs font-mono font-medium text-[#1A1A1A]">
                        {service.moq}
                      </div>
                      <div className="text-[11px] font-mono text-[#52525B]">
                        {service.leadTime}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <a
                        href={quoteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[38px] px-3.5 py-1.5 text-xs font-medium bg-white border border-[#E4E4E7] rounded-[4px] text-[#1A1A1A] hover:border-[#1A1A1A] active:bg-neutral-100 transition-colors duration-150 inline-flex items-center"
                      >
                        Tanya Harga
                      </a>
                      <Link
                        to={`/services/${service.slug}`}
                        className="w-9 h-9 min-h-[36px] rounded-[4px] border border-[#E4E4E7] bg-white flex items-center justify-center text-[#52525B] group-hover:text-[#1A1A1A] group-hover:border-[#1A1A1A] active:bg-neutral-100 transition-all duration-200"
                        aria-label={`Lihat detail ${service.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

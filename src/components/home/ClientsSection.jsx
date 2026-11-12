import React, { useState } from 'react';
import { ArrowUpRight, Building2, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { CLIENTS_DATA } from '../../data/mockData';
import { generateWaLink } from '../../utils/whatsapp';

const INDUSTRIES = [
  'Semua Industri',
  'F&B Retail & Franchise',
  'Department Store & Retail',
  'Banking & Financial Services',
  'FMCG & Consumer Goods',
];

/**
 * Our Clients Section — Inspired by semarewards.com/id/brand architecture
 * Rich, minimalist B2B brand cards with industry category chips, solution descriptions,
 * production metrics, and crisp hover micro-interactions.
 */
export const ClientsSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('Semua Industri');
  const shouldReduceMotion = useReducedMotion();

  const filteredClients =
    selectedIndustry === 'Semua Industri'
      ? CLIENTS_DATA
      : CLIENTS_DATA.filter((client) => client.industry === selectedIndustry);

  return (
    <section className="bg-white text-[#1A1A1A] py-16 sm:py-24 lg:py-36 border-b border-[#E4E4E7]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12 pb-6 sm:pb-8 border-b border-[#E4E4E7]"
        >
          <div>
            <span className="text-xs font-mono tracking-[0.15em] uppercase text-[#52525B] block mb-2 sm:mb-3">
              / 05 — TRUSTED BY ENTERPRISES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#1A1A1A]">
              Klien &amp; Mitra Korporat.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-light text-[#52525B] max-w-md leading-relaxed">
            Dipercaya oleh brand nasional dan multinasional untuk produksi kemasan massal, marketing collaterals, dan identitas visual perusahaan.
          </p>
        </motion.div>

        {/* Industry Filter Pills - Horizontal scroll on narrow mobile */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap"
        >
          {INDUSTRIES.map((industry) => {
            const isActive = selectedIndustry === industry;
            return (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`min-h-[36px] whitespace-nowrap px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-150 shrink-0 ${
                  isActive
                    ? 'bg-[#1A1A1A] text-white border border-[#1A1A1A]'
                    : 'bg-white text-[#52525B] border border-[#E4E4E7] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                }`}
              >
                {industry}
              </button>
            );
          })}
        </motion.div>

        {/* Structured Client Cards Grid (semarewards.com/id/brand style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredClients.map((client, index) => {
            const waInquiry = generateWaLink(
              `Halo CetakWoi, saya tertarik dengan solusi produksi cetak seperti yang dikerjakan untuk ${client.name} (${client.scope}).`
            );

            return (
              <motion.article
                key={client.id}
                layout
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{
                  duration: 0.4,
                  delay: shouldReduceMotion ? 0 : (index % 4) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-white border border-[#E4E4E7] rounded-[4px] p-6 flex flex-col justify-between transition-all duration-200 hover:bg-[#F4F4F5] hover:border-[#1A1A1A]"
              >
                {/* Top: Category & Badge */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#F4F4F5] group-hover:bg-white text-[#52525B] group-hover:text-[#1A1A1A] border border-[#E4E4E7] rounded-full transition-colors">
                      {client.industry}
                    </span>
                    <span className="text-[10px] font-mono text-[#52525B]">
                      {client.period}
                    </span>
                  </div>

                  {/* Brand Wordmark & Name */}
                  <div className="mb-4">
                    {client.logo && (
                      <div className="w-full h-12 mb-3 bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] p-2 flex items-center justify-center overflow-hidden">
                        <img
                          src={client.logo}
                          alt={`Logo ${client.name}`}
                          className="max-h-full max-w-full object-contain filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-4 h-4 text-[#52525B] group-hover:text-[#1A1A1A] transition-colors" />
                      <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#1A1A1A]">
                        {client.name}
                      </h3>
                    </div>
                    <span className="text-xs font-mono text-[#114576] font-medium">
                      {client.scope}
                    </span>
                  </div>

                  {/* Solution Summary */}
                  <p className="text-xs sm:text-sm font-light text-[#52525B] leading-relaxed mb-6">
                    {client.solution}
                  </p>
                </div>

                {/* Bottom: Metric Tag & Action Link */}
                <div className="pt-4 border-t border-[#E4E4E7] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#52525B]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{client.metrics}</span>
                  </div>

                  <a
                    href={waInquiry}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#1A1A1A] opacity-70 group-hover:opacity-100 hover:text-[#114576] transition-all"
                    aria-label={`Inquire about ${client.name} solution`}
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* NDA & Bottom Banner */}
        <div className="mt-12 pt-6 border-t border-[#E4E4E7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#52525B]">
          <p>
            * Seluruh referensi produksi diverifikasi di bawah klausul Non-Disclosure Agreement (NDA) klien korporat.
          </p>
          <a
            href={generateWaLink('Halo CetakWoi, saya ingin menjadwalkan konsultasi proyek korporat dengan tim Account Executive Anda.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#1A1A1A] font-semibold hover:underline"
          >
            <span>Konsultasi Proyek Bersama Tim Kami</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ClientsSection;


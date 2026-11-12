import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { SERVICES_DATA } from '../data/mockData';
import { generateWaLink } from '../utils/whatsapp';

/**
 * Services Catalog Page — Light Editorial Theme & Plain Language
 * Full catalog of 6 core printing divisions with plain-language descriptions.
 */
export const Services = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full bg-white text-[#1A1A1A]">
      
      {/* 1. Page Hero */}
      <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-24 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-6"
          >
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#52525B] block">
              / KATALOG LAYANAN CETAK
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] break-words">
              Pilihan Layanan Percetakan untuk Usaha Anda.
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-light text-[#52525B] leading-relaxed max-w-2xl">
              Dari dus kemasan makanan, spanduk toko berukuran besar, buku katalog resmi, hingga perlengkapan kantor. 
              Semua diproduksi langsung di pabrik kami dengan bahan pilihan dan garansi hasil rapi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Services Grid */}
      <section className="py-16 sm:py-20 lg:py-28 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES_DATA.map((service, index) => {
              const quoteUrl = generateWaLink(
                `Halo PrintingGo, saya ingin tanya harga dan konsultasi mengenai layanan ${service.title}.`
              );

              return (
                <motion.article
                  key={service.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group bg-white border border-[#E4E4E7] rounded-[4px] p-8 flex flex-col justify-between transition-all duration-200 hover:bg-[#F4F4F5] hover:border-[#1A1A1A]"
                >
                  <div className="space-y-6">
                    {/* Top Meta */}
                    <div className="flex items-center justify-between text-xs font-mono text-[#52525B] border-b border-[#E4E4E7] pb-3">
                      <span>/{String(index + 1).padStart(2, '0')}</span>
                      <span className="font-medium text-[#1A1A1A]">{service.moq}</span>
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h2 className="text-2xl font-bold tracking-tight text-[#1A1A1A]">
                        {service.title}
                      </h2>
                      <p className="text-sm font-light text-[#52525B] leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Applications Preview */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#52525B] block">
                        COCOK UNTUK:
                      </span>
                      <ul className="space-y-1.5 text-xs font-light text-[#52525B]">
                        {service.applications.slice(0, 3).map((app) => (
                          <li key={app} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="pt-8 mt-8 border-t border-[#E4E4E7] flex items-center justify-between gap-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] font-semibold hover:text-[#114576] inline-flex items-center gap-1 group/btn"
                    >
                      <span>Lihat Spesifikasi</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Link>

                    <a
                      href={quoteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 text-xs font-medium bg-[#1A1A1A] text-white rounded-[4px] hover:bg-black transition-colors"
                    >
                      Tanya Harga
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Bottom Consultation Note */}
      <section className="py-20 lg:py-28 bg-[#F4F4F5]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
            Punya Kebutuhan Cetak di Luar Daftar Ini?
          </h2>
          <p className="text-sm sm:text-base font-light text-[#52525B]">
            Pabrik kami melayani berbagai pesanan cetak custom dengan ukuran, bahan, dan jumlah khusus sesuai permintaan Anda. 
            Konsultasikan langsung dengan tim teknis kami secara gratis.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={generateWaLink('Halo PrintingGo, saya ingin tanya cetak pesanan khusus di luar daftar layanan umum.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-white text-sm font-semibold rounded-[4px] hover:bg-black transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Tanya Pesanan Khusus via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;

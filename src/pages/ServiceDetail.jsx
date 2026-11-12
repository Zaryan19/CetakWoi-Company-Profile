import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, Package, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES_DATA } from '../data/mockData';
import { generateWaLink } from '../utils/whatsapp';

/**
 * Service Detail Page — Light Editorial Theme & Plain Language
 * Deep-dive into a single service category with clear materials, uses, and direct consultation CTA.
 */
export const ServiceDetail = () => {
  const { slug } = useParams();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="w-full bg-white text-[#1A1A1A] py-32 text-center">
        <div className="max-w-md mx-auto px-6 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#52525B]">404 ERROR</span>
          <h1 className="text-3xl font-bold">Layanan Tidak Ditemukan</h1>
          <p className="text-sm font-light text-[#52525B]">
            Layanan yang Anda cari tidak tersedia atau alamat URL salah.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white text-xs font-semibold rounded-[4px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Semua Layanan</span>
          </Link>
        </div>
      </div>
    );
  }

  const quoteUrl = generateWaLink(
    `Halo PrintingGo, saya membaca detail layanan ${service.title} di website. Saya ingin berkonsultasi mengenai spesifikasi, pilihan bahan, dan estimasi biaya cetak untuk usaha kami.`
  );

  return (
    <div className="w-full bg-white text-[#1A1A1A]">
      
      {/* 1. Breadcrumbs & Header */}
      <section className="pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-24 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#52525B] mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap pb-1 scrollbar-none" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#1A1A1A] transition-colors shrink-0">Beranda</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-[#1A1A1A] transition-colors shrink-0">Layanan</Link>
            <span>/</span>
            <span className="text-[#1A1A1A] font-semibold truncate">{service.title}</span>
          </nav>

          <div className="max-w-4xl space-y-5 sm:space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#52525B] block">
              / SPESIFIKASI LAYANAN
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] break-words">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg font-light text-[#52525B] leading-relaxed max-w-2xl">
              {service.fullDescription}
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-6 text-sm font-mono border-t border-[#E4E4E7]">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-[#114576] shrink-0" />
                <span className="text-[#52525B]">Minimal Order:</span>
                <span className="font-semibold text-[#1A1A1A]">{service.moq}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#114576] shrink-0" />
                <span className="text-[#52525B]">Estimasi Waktu:</span>
                <span className="font-semibold text-[#1A1A1A]">{service.leadTime}</span>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <a
                href={quoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-white text-sm font-semibold rounded-[4px] hover:bg-black transition-colors min-h-[48px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Konsultasikan Pesanan Ini via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Detailed Specifications (Plain Language Grid) */}
      <section className="py-16 sm:py-20 lg:py-28 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
          
          {/* Applications */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] mb-6">
              Penggunaan yang Paling Populer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.applications.map((app) => (
                <div
                  key={app}
                  className="p-5 bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm font-light text-[#1A1A1A]">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Materials & Size Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8 border-t border-[#E4E4E7]">
            {/* Materials */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
                Pilihan Bahan Kertas &amp; Material
              </h2>
              <p className="text-xs font-mono text-[#52525B]">
                Pilihan bahan kami jelaskan secara sederhana agar Anda tidak bingung memilih:
              </p>
              <ul className="space-y-3">
                {service.materials.map((mat) => (
                  <li
                    key={mat}
                    className="p-4 border border-[#E4E4E7] rounded-[4px] text-sm font-light text-[#1A1A1A] flex items-center justify-between"
                  >
                    <span>{mat}</span>
                    <span className="text-xs font-mono text-[#52525B]">Bahan Resmi</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Finishing Options */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
                Pilihan Lapisan &amp; Sentuhan Akhir
              </h2>
              <p className="text-xs font-mono text-[#52525B]">
                Bikin cetakan Anda terlihat semakin mewah dan tahan lama:
              </p>
              <ul className="space-y-3">
                {service.finishingOptions.map((fin) => (
                  <li
                    key={fin}
                    className="p-4 border border-[#E4E4E7] rounded-[4px] text-sm font-light text-[#1A1A1A] flex items-center justify-between"
                  >
                    <span>{fin}</span>
                    <span className="text-xs font-mono text-[#114576]">Rapi &amp; Mewah</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sizing & Custom shapes */}
          <div className="p-8 bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] space-y-4">
            <h2 className="text-xl font-bold text-[#1A1A1A]">
              Pilihan Ukuran &amp; Bentuk Khusus
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm font-light text-[#52525B]">
              {service.sizeOptions.map((sz) => (
                <li key={sz} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0 mt-2" />
                  <span>{sz}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Showcase Gallery */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] mb-6">
              Contoh Hasil Produksi Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {(service.gallery || ['/images/14.png', '/images/15.png', '/images/16.png']).map((imgSrc, item) => (
                <div
                  key={item}
                  className="group relative aspect-[4/3] bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] overflow-hidden flex flex-col justify-between p-6 transition-colors hover:border-[#1A1A1A]"
                >
                  <img
                    src={imgSrc}
                    alt={`Dokumentasi ${service.title} #${item + 1}`}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-white/10 group-hover:via-white/30 transition-colors" />

                  <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#1A1A1A]">
                    <span className="font-semibold bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-[2px] border border-[#E4E4E7]">
                      FOTO #{item + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-white/90 px-2 py-0.5 rounded-[2px] text-[#52525B]">
                      HASIL PRODUKSI
                    </span>
                  </div>

                  <div className="relative z-10 pt-4">
                    <p className="text-sm font-bold text-[#1A1A1A] drop-shadow-sm">{service.title}</p>
                    <div className="flex items-center justify-between text-[11px] font-mono text-[#52525B] mt-1">
                      <span>Dokumentasi Nyata</span>
                      <span className="text-emerald-700 font-semibold">Kualitas Terverifikasi ✓</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. Bottom Consultation Box */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#F4F4F5]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
            Ingin Memulai Pesanan {service.title}?
          </h2>
          <p className="text-sm sm:text-base font-light text-[#52525B]">
            Hubungi kami sekarang untuk mendapatkan hitungan biaya yang transparan, konsultasi bahan, dan pembuatan contoh fisik sebelum produksi massal.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-white text-sm font-semibold rounded-[4px] hover:bg-black transition-colors min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Tanya Harga &amp; Kirim File</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#E4E4E7] text-[#1A1A1A] text-sm font-medium rounded-[4px] hover:border-[#1A1A1A] transition-colors min-h-[48px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Semua Layanan</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;

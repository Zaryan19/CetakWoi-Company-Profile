import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MessageCircle, ArrowUpRight, CheckCircle2, ShieldCheck, Clock, Users, Building2 } from 'lucide-react';
import { COMPANY_STATS, FACILITY_SPECS, CORE_VALUES } from '../data/mockData';
import { generateWaLink } from '../utils/whatsapp';

/**
 * About Us Page — Light Editorial Theme & Plain-Language Copy
 * High-contrast #FFFFFF / #1A1A1A / #E4E4E7 with refined framer-motion animations.
 * No PDF download buttons.
 */
export const About = () => {
  const shouldReduceMotion = useReducedMotion();
  const waUrl = generateWaLink(
    'Halo PrintingGo, saya membaca profil perusahaan Anda dan ingin berkonsultasi mengenai kebutuhan cetak perusahaan kami.'
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
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

  const qualityStages = [
    {
      step: '01',
      title: 'Sebelum Dicetak (Cek File & Bentuk)',
      points: [
        'Pengecekan ketajaman resolusi gambar agar tidak pecah/buram',
        'Penyesuaian garis potong dan lipatan agar simetris rapi',
        'Simulasi warna agar hasil cetakan di kertas sesuai ekspektasi Anda',
      ],
    },
    {
      step: '02',
      title: 'Saat Mesin Berjalan (Pantau Warna)',
      points: [
        'Pengawasan warna secara berkala di setiap 500 lembar cetak',
        'Memastikan warna tidak belang atau pudar dari awal hingga akhir',
        'Pengecekan ketebalan tinta agar merata di seluruh bidang cetak',
      ],
    },
    {
      step: '03',
      title: 'Sebelum Dikirim (Pengecekan Akhir)',
      points: [
        'Pemeriksaan kerapian lem, jahit buku, dan potongan sudut',
        'Pengepakan menggunakan plastik pembungkus anti air dan debu',
        'Pelabelan alamat jelas dan pengiriman tepat waktu sesuai janji',
      ],
    },
  ];

  return (
    <div className="w-full bg-white text-[#1A1A1A]">
      
      {/* 1. Page Hero */}
      <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-28 lg:pb-32 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl space-y-6"
          >
            <motion.span variants={itemVariants} className="text-xs font-mono uppercase tracking-[0.15em] text-[#52525B] block">
              / TENTANG KAMI
            </motion.span>
            
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-bold tracking-tight leading-[1.08] sm:leading-[1.05] text-[#1A1A1A] break-words">
              Menghadirkan Cetakan Rapi &amp; Terpercaya untuk Kemajuan Bisnis Anda.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-sm sm:text-base lg:text-lg font-light text-[#52525B] leading-relaxed max-w-2xl">
              Didirikan sejak 2012 di Kawasan Industri Pulogadung, PrintingGo hadir sebagai solusi percetakan terpercaya bagi ratusan brand retail, restoran, dan perusahaan di seluruh Indonesia.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-4 flex flex-wrap gap-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-white text-sm font-semibold rounded-[4px] hover:bg-black active:bg-neutral-800 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Konsultasi Langsung via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Our Story (Sejarah & Perjalanan) */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            <div className="lg:col-span-4">
              <span className="text-xs font-mono tracking-[0.15em] uppercase text-[#52525B] static lg:sticky lg:top-28 block">
                / PERJALANAN KAMI
              </span>
            </div>

            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Berawal dari Sebuah Komitmen Sederhana: Tidak Bikin Klien Kecewa.
              </h2>
              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base font-light text-[#52525B] leading-relaxed">
                <p>
                  Kami memulai usaha pada tahun 2012 dengan satu tekad: memecahkan masalah umum yang sering dihadapi pemilik usaha saat mencetak barang — warna yang tidak sesuai desain, waktu pengerjaan yang molor, dan bahan yang mudah rusak.
                </p>
                <p>
                  Selama lebih dari 12 tahun, kami terus memperbarui mesin-mesin cetak kami dan melatih puluhan tim operator ahli. Kini, dari pabrik seluas 2.500 m² di Pulogadung, kami bangga telah membantu lebih dari 120 perusahaan nasional memproduksi dus kemasan, katalog buku, dan materi promosi dengan standar kualitas terbaik.
                </p>
              </div>

              {/* Stats Highlight */}
              <div className="pt-6 sm:pt-8 border-t border-[#E4E4E7] grid grid-cols-2 sm:grid-cols-4 gap-6">
                {COMPANY_STATS.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-4xl font-bold text-[#1A1A1A] mb-1">{stat.value}</div>
                    <div className="text-xs font-semibold text-[#1A1A1A] mb-1">{stat.label}</div>
                    <div className="text-[11px] font-mono text-[#52525B]">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-[#E4E4E7] bg-[#F4F4F5]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            
            <div className="lg:col-span-4">
              <span className="text-xs font-mono tracking-[0.15em] uppercase text-[#52525B] static lg:sticky lg:top-28 block">
                / VISI &amp; MISI
              </span>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Vision Card */}
              <div className="bg-white border border-[#E4E4E7] rounded-[4px] p-6 sm:p-8 space-y-4 border-l-4 border-l-[#114576]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#114576] font-semibold">
                  VISI KAMI
                </span>
                <h3 className="text-xl font-bold text-[#1A1A1A]">
                  Menjadi Mitra Percetakan Bisnis Paling Terpercaya di Indonesia.
                </h3>
                <p className="text-sm font-light text-[#52525B] leading-relaxed">
                  Menjadi pilihan utama bagi setiap pelaku usaha yang menginginkan kemasan rapi, pelayanan ramah, dan kepastian pengiriman tanpa kekhawatiran.
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white border border-[#E4E4E7] rounded-[4px] p-6 sm:p-8 space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#52525B] font-semibold">
                  MISI KAMI
                </span>
                <ul className="space-y-3 text-sm font-light text-[#52525B]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Menghasilkan cetakan berkualitas tinggi dengan warna tajam dan bahan pilihan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Memberikan penjelasan yang jujur, transparan, dan mudah dipahami tanpa membingungkan klien.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Menjaga komitmen jadwal pengiriman agar bisnis dan promosi klien berjalan lancar.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-[#E4E4E7]">
            <span className="text-xs font-mono tracking-[0.15em] uppercase text-[#52525B] block mb-2 sm:mb-3">
              / NILAI UTAMA KAMI
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              Prinsip yang Kami Pegang dalam Bekerja.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {CORE_VALUES.map((val) => (
              <div
                key={val.title}
                className="bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] p-6 space-y-3 transition-colors hover:border-[#1A1A1A]"
              >
                <h3 className="text-lg font-bold text-[#1A1A1A]">{val.title}</h3>
                <p className="text-sm font-light text-[#52525B] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Production Facility */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-[#E4E4E7] bg-[#F4F4F5]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-10 sm:mb-12 pb-6 border-b border-[#E4E4E7]">
            <span className="text-xs font-mono tracking-[0.15em] uppercase text-[#52525B] block mb-2 sm:mb-3">
              / FASILITAS PABRIK KAMI
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              Pabrik Produksi Sendiri di Pulogadung.
            </h2>
            <p className="text-sm font-light text-[#52525B] mt-2 sm:mt-3">
              Semua pesanan Anda dikerjakan langsung di pabrik kami sendiri tanpa dilempar ke pihak ketiga, sehingga harga lebih hemat dan kualitas selalu terkontrol.
            </p>
          </div>

          <div className="border border-[#E4E4E7] rounded-[4px] overflow-hidden bg-white mb-8 sm:mb-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-[#E4E4E7]">
              {FACILITY_SPECS.map(({ label, value }) => (
                <div key={label} className="p-4 sm:p-6 flex flex-col justify-between">
                  <span className="text-lg sm:text-2xl font-bold text-[#1A1A1A] mb-1 tabular-nums">{value}</span>
                  <span className="text-xs font-mono text-[#52525B]">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Real Facility & Production Team Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative aspect-[16/10] bg-white border border-[#E4E4E7] rounded-[4px] overflow-hidden">
              <img
                src="/images/41.png"
                alt="Pabrik PrintingGo Pulogadung"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 mb-1">
                  PABRIK UTAMA PULOGADUNG
                </span>
                <p className="text-base sm:text-lg font-bold">Fasilitas Produksi Sendiri 2.500 m²</p>
                <p className="text-xs text-neutral-300 font-light mt-1">
                  Kapasitas 50.000+ unit per bulan dengan alur kerja modern dan terpusat.
                </p>
              </div>
            </div>

            <div className="group relative aspect-[16/10] bg-white border border-[#E4E4E7] rounded-[4px] overflow-hidden">
              <img
                src="/images/42.png"
                alt="Tim Produksi dan Operator Ahli PrintingGo"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-mono tracking-wider uppercase text-emerald-400 mb-1">
                  TIM TEKNIS &amp; OPERATOR
                </span>
                <p className="text-base sm:text-lg font-bold">45+ Tenaga Ahli Cetak Berpengalaman</p>
                <p className="text-xs text-neutral-300 font-light mt-1">
                  Pengawasan ketat setiap tahap mulai dari setting warna mesin hingga pemotongan presisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Quality Commitment (3-Stage QC) */}
      <section className="py-16 sm:py-24 lg:py-32 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-[#E4E4E7]">
            <span className="text-xs font-mono tracking-[0.15em] uppercase text-[#52525B] block mb-2 sm:mb-3">
              / JAMINAN KUALITAS KAMI
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              3 Tahap Pengecekan Kualitas Tanpa Kompromi.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {qualityStages.map((stage) => (
              <div
                key={stage.step}
                className="border-t border-[#E4E4E7] pt-6 space-y-4 hover:border-[#1A1A1A] transition-colors"
              >
                <span className="text-xs font-mono text-[#52525B] tracking-widest block">
                  /{stage.step}
                </span>
                <h3 className="text-lg font-bold text-[#1A1A1A]">{stage.title}</h3>
                <ul className="space-y-2.5 text-xs sm:text-sm font-light text-[#52525B]">
                  {stage.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] shrink-0 mt-1.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1A1A1A]">
            Ingin Melihat Contoh Hasil Cetak Kami?
          </h2>
          <p className="text-sm sm:text-base font-light text-[#52525B] leading-relaxed">
            Kunjungi pabrik kami di Pulogadung atau hubungi tim sales kami untuk meminta sampel bahan dan contoh kemasan fisik secara gratis.
          </p>
          <div className="pt-2 sm:pt-4 flex justify-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1A1A1A] text-white text-sm font-semibold rounded-[4px] hover:bg-black transition-colors min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Jadwalkan Konsultasi via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;

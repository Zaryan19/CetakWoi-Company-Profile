import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const STEPS = [
  {
    number: '01',
    title: 'Konsultasi & Tanya Kebutuhan',
    description:
      'Ceritakan barang apa yang ingin Anda cetak, berapa jumlahnya, dan kapan akan dipakai. Tim kami bantu carikan bahan yang pas dan estimasi biayanya.',
  },
  {
    number: '02',
    title: 'Pemeriksaan File Desain',
    description:
      'Kirimkan file desain Anda. Tim desainer kami bantu cek apakah gambarnya sudah tajam, ukurannya pas, dan tidak ada teks yang terpotong saat dicetak.',
  },
  {
    number: '03',
    title: 'Persetujuan Contoh (Proofing)',
    description:
      'Kami berikan contoh tampilan visual atau simulasi bentuk agar Anda bisa memastikan warna dan tulisan sudah 100% sesuai sebelum diproduksi banyak.',
  },
  {
    number: '04',
    title: 'Proses Cetak di Pabrik',
    description:
      'Setelah disetujui, pesanan langsung dicetak di pabrik kami menggunakan mesin modern berkecepatan tinggi oleh tim operator berpengalaman.',
  },
  {
    number: '05',
    title: 'Pengecekan Kerapian Hasil',
    description:
      'Setiap tumpukan hasil cetak diperiksa teliti: warna tidak belang, lipatan lurus rapi, dan lem kuat sebelum dibungkus rapi anti air.',
  },
  {
    number: '06',
    title: 'Pengemasan & Siap Kirim',
    description:
      'Barang dipak aman menggunakan kardus pelindung dan dikirim langsung ke alamat kantor, toko, atau gudang Anda sesuai jadwal yang dijanjikan.',
  },
];

/**
 * Production Workflow — Plain Language Edition
 * 6 simple steps explaining how CetakWoi works with clients from start to finish.
 */
export const ProcessSection = () => {
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
          className="max-w-3xl mb-12 sm:mb-16 pb-6 sm:pb-8 border-b border-[#E4E4E7]"
        >
          <span className="text-xs font-mono tracking-[0.15em] uppercase text-[#52525B] block mb-2 sm:mb-3">
            / 06 — ALUR PENGERJAAN
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#1A1A1A]">
            6 Langkah Mudah Cetak di CetakWoi.
          </h2>
          <p className="text-sm sm:text-base font-light text-[#52525B] mt-3 sm:mt-4 leading-relaxed max-w-xl">
            Proses kerja transparan dan jelas dari konsultasi awal hingga barang sampai di tempat Anda tanpa ribet.
          </p>
        </motion.div>

        {/* 6-Step Hairline Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-8 sm:gap-y-12">
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{
                duration: 0.45,
                delay: shouldReduceMotion ? 0 : idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group border-t border-[#E4E4E7] pt-6 flex flex-col justify-between transition-colors duration-200 hover:border-[#1A1A1A]"
            >
              <div>
                <span className="text-xs font-mono text-[#52525B] tracking-widest block mb-4 transition-colors group-hover:text-[#1A1A1A]">
                  /{step.number}
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#1A1A1A] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm font-light text-[#52525B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;

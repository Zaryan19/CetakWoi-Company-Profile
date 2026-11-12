import React from 'react';
import { Layers, Factory, ScanLine, Truck, Users, FileCheck } from 'lucide-react';
import { FACILITY_SPECS } from '../../data/mockData';

const WHY_US = [
  {
    icon: Layers,
    title: 'Layanan Lengkap Satu Pintu',
    description:
      'Dari bantu cek desain, pilih bahan, cetak massal, finishing, sampai kirim ke alamat Anda — semua diurus satu tempat.',
  },
  {
    icon: Factory,
    title: 'Pabrik Sendiri Kapasitas Besar',
    description:
      'Pabrik seluas 2.500 m² dengan mesin modern yang siap memproduksi lebih dari 50.000 kemasan setiap bulannya.',
  },
  {
    icon: ScanLine,
    title: 'Garansi Warna Pas & Konsisten',
    description:
      'Warna brand Anda kami jaga agar tidak luntur atau belang. Kami sediakan contoh cetak sebelum produksi massal dimulai.',
  },
  {
    icon: Truck,
    title: 'Selesai Tepat Waktu Sesuai Janji',
    description:
      'Kami menghargai jadwal promosi Anda. 97%+ pesanan kami selalu sampai di tangan klien tepat pada waktunya.',
  },
  {
    icon: FileCheck,
    title: 'Komunikasi Ramah & Transparan',
    description:
      'Tidak perlu bingung istilah teknis. Tim kami menjelaskan semuanya dengan bahasa yang mudah dipahami dan memberikan update status pengerjaan.',
  },
  {
    icon: Users,
    title: 'Didukung 45+ Tim Ahli',
    description:
      'Didukung oleh puluhan operator mesin dan teknisi berpengalaman yang memastikan setiap lembar cetakan dipotong rapi.',
  },
];

/**
 * Why Us Section — Plain Language Edition
 * Clear business advantages without jargon.
 */
export const WhyUsSection = () => (
  <section
    aria-labelledby="whyus-heading"
    className="border-b border-[#E4E4E7] bg-white text-[#1A1A1A]"
  >
    <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28">

      {/* Header */}
      <div className="max-w-2xl space-y-3 mb-14">
        <span className="text-xs font-mono uppercase tracking-widest text-[#52525B]">
          / KEUNGGULAN KAMI
        </span>
        <h2
          id="whyus-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]"
        >
          Mengapa Banyak Bisnis Memilih PrintingGo?
        </h2>
        <p className="text-sm font-light text-[#52525B] leading-relaxed">
          Bukan sekadar tukang cetak — kami adalah mitra kerja yang membantu usaha Anda tampil profesional dengan kemasan dan materi promosi berkualitas tinggi.
        </p>
      </div>

      {/* 6-card grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {WHY_US.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] p-6 space-y-4 hover:border-[#1A1A1A] transition-colors duration-150"
          >
            <div className="w-9 h-9 rounded-[4px] bg-white border border-[#E4E4E7] flex items-center justify-center">
              <Icon className="w-4.5 h-4.5 text-[#1A1A1A]" />
            </div>
            <h3 className="text-base font-semibold text-[#1A1A1A]">{title}</h3>
            <p className="text-sm font-light text-[#52525B] leading-relaxed">{description}</p>
          </div>
        ))}
      </div>

      {/* Facility specs bar */}
      <div className="border border-[#E4E4E7] rounded-[4px] overflow-hidden">
        <div className="px-6 py-4 bg-[#F4F4F5] border-b border-[#E4E4E7]">
          <span className="text-xs font-mono uppercase tracking-wider text-[#52525B]">
            Fasilitas Pabrik Cetak — Kawasan Industri Pulogadung, Jakarta Timur
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-[#E4E4E7] bg-white">
          {FACILITY_SPECS.map(({ label, value }) => (
            <div key={label} className="px-5 py-5 flex flex-col gap-1">
              <span className="text-xl font-bold text-[#1A1A1A] tabular-nums">{value}</span>
              <span className="text-[11px] font-mono text-[#52525B]">{label}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default WhyUsSection;

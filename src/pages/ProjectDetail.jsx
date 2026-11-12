import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, MessageCircle, CheckCircle2, Package, Clock } from 'lucide-react';
import { PROJECTS_DATA } from '../data/mockData';
import { generateWaLink } from '../utils/whatsapp';

/**
 * Case Study Detail Page — Light Editorial Theme & Plain Language
 * Story of client need, our straightforward solution, and proven business outcome.
 */
export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="w-full bg-white text-[#1A1A1A] py-32 text-center">
        <div className="max-w-md mx-auto px-6 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-[#52525B]">404 ERROR</span>
          <h1 className="text-3xl font-bold">Proyek Tidak Ditemukan</h1>
          <p className="text-sm font-light text-[#52525B]">
            Studi kasus proyek yang Anda cari tidak tersedia atau tautan sudah berpindah.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white text-xs font-semibold rounded-[4px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Semua Proyek</span>
          </Link>
        </div>
      </div>
    );
  }

  const quoteUrl = generateWaLink(
    `Halo CetakWoi, saya membaca studi kasus proyek "${project.title}" (${project.client}). Kami memiliki kebutuhan serupa dan ingin mendiskusikan kemungkinan kerja sama cetak.`
  );

  return (
    <div className="w-full bg-white text-[#1A1A1A]">
      
      {/* 1. Breadcrumbs & Header */}
      <section className="pt-14 pb-14 sm:pt-16 sm:pb-16 lg:pt-24 lg:pb-24 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <nav className="flex items-center gap-2 text-xs font-mono text-[#52525B] mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap pb-1 scrollbar-none" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#1A1A1A] transition-colors shrink-0">Beranda</Link>
            <span>/</span>
            <Link to="/projects" className="hover:text-[#1A1A1A] transition-colors shrink-0">Proyek</Link>
            <span>/</span>
            <span className="text-[#1A1A1A] font-semibold truncate">{project.client}</span>
          </nav>

          <div className="max-w-4xl space-y-5 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="px-3 py-1 bg-[#F4F4F5] border border-[#E4E4E7] rounded-full text-xs font-mono uppercase tracking-wider text-[#52525B]">
                {project.category}
              </span>
              <span className="text-xs font-mono text-[#52525B]">
                TAHUN {project.year} • KLIEN: {project.client}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] break-words">
              {project.title}
            </h1>

            <p className="text-sm sm:text-base lg:text-lg font-light text-[#52525B] leading-relaxed max-w-2xl">
              {project.summary}
            </p>
          </div>

        </div>
      </section>

      {/* 2. Case Study Story (Challenge, Solution, Outcome) */}
      <section className="py-16 sm:py-20 lg:py-28 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12 sm:space-y-16">
          
          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
            
            {/* Challenge */}
            <div className="p-8 bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#52525B] block font-semibold">
                TANTANGAN YANG DIHADAPI KLIEN
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                Masalah yang Ingin Diselesaikan
              </h2>
              <p className="text-sm font-light text-[#52525B] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="p-8 bg-white border border-[#1A1A1A] rounded-[4px] space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#114576] block font-semibold">
                SOLUSI DARI CETAKWOI
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">
                Langkah Eksekusi Kami
              </h2>
              <p className="text-sm font-light text-[#52525B] leading-relaxed">
                {project.solution}
              </p>
            </div>

          </div>

          {/* Specs Ledger Bar */}
          <div className="border border-[#E4E4E7] rounded-[4px] overflow-hidden bg-white">
            <div className="px-6 py-4 bg-[#F4F4F5] border-b border-[#E4E4E7]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#52525B]">
                RINGKASAN SPESIFIKASI PRODUKSI
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#E4E4E7]">
              <div className="p-6 space-y-1">
                <span className="text-xs font-mono text-[#52525B] block">JUMLAH PESANAN</span>
                <span className="text-lg font-bold text-[#1A1A1A]">{project.quantity}</span>
              </div>
              <div className="p-6 space-y-1">
                <span className="text-xs font-mono text-[#52525B] block">BAHAN YANG DIGUNAKAN</span>
                <span className="text-lg font-bold text-[#1A1A1A]">{project.material}</span>
              </div>
              <div className="p-6 space-y-1">
                <span className="text-xs font-mono text-[#52525B] block">SENTUHAN AKHIR</span>
                <span className="text-lg font-bold text-[#1A1A1A]">{project.finishing}</span>
              </div>
              <div className="p-6 space-y-1">
                <span className="text-xs font-mono text-[#52525B] block">WAKTU PENGERJAAN</span>
                <span className="text-lg font-bold text-[#1A1A1A]">{project.timeline}</span>
              </div>
            </div>
          </div>

          {/* Outcome / Business Benefit */}
          <div className="p-8 border-l-4 border-l-emerald-600 bg-[#F4F4F5] rounded-[4px] space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <h2 className="text-lg font-bold text-[#1A1A1A]">Hasil Nyata &amp; Manfaat bagi Bisnis Klien</h2>
            </div>
            <p className="text-sm font-light text-[#52525B] leading-relaxed pl-7">
              {project.outcome}
            </p>
          </div>

          {/* Real Documentation Photos */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] mb-6">
              Dokumentasi Hasil Cetakan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(project.documentation || ['/images/33.png', '/images/34.png']).map((imgSrc, i) => (
                <div
                  key={i}
                  className="group relative aspect-[16/10] bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] overflow-hidden p-6 flex flex-col justify-between transition-colors hover:border-[#1A1A1A]"
                >
                  <img
                    src={imgSrc}
                    alt={`Dokumentasi ${project.title} #${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-white/10 group-hover:via-white/30 transition-colors" />

                  <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#1A1A1A]">
                    <span className="font-semibold bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-[2px] border border-[#E4E4E7]">
                      DOKUMENTASI #{i + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase bg-white/90 px-2 py-0.5 rounded-[2px] text-[#52525B]">
                      {project.client}
                    </span>
                  </div>

                  <div className="relative z-10 pt-4">
                    <p className="text-base font-bold text-[#1A1A1A] drop-shadow-sm">{project.title}</p>
                    <div className="flex items-center justify-between text-xs font-mono text-[#52525B] mt-1">
                      <span>Dokumentasi Lapangan</span>
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
            Punya Kebutuhan Cetak Serupa untuk Usaha Anda?
          </h2>
          <p className="text-sm sm:text-base font-light text-[#52525B]">
            Ceritakan rencana Anda kepada tim kami. Kami siap menghitungkan estimasi harga dan mengirimkan contoh bahan langsung ke kantor Anda.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1A1A1A] text-white text-sm font-semibold rounded-[4px] hover:bg-black transition-colors min-h-[48px]"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Diskusikan Proyek Anda via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#E4E4E7] text-[#1A1A1A] text-sm font-medium rounded-[4px] hover:border-[#1A1A1A] transition-colors min-h-[48px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Lihat Proyek Lainnya</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;

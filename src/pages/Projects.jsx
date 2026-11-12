import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS_DATA } from '../data/mockData';

const CATEGORIES = [
  { id: 'All', label: 'Semua Kategori' },
  { id: 'Packaging', label: 'Dus & Kemasan' },
  { id: 'Large Format', label: 'Spanduk & Banner' },
  { id: 'Commercial', label: 'Buku & Katalog' },
  { id: 'Marketing', label: 'Materi Promosi' },
];

/**
 * Projects Portfolio Page — Light Editorial Theme & Plain Language
 * Interactive filtering and staggered showcase linking to detailed case studies.
 */
export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-white text-[#1A1A1A]">
      
      {/* 1. Page Hero */}
      <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-24 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-5 sm:space-y-6"
          >
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#52525B] block">
              / PORTOFOLIO &amp; REKAM JEJAK
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] break-words">
              Hasil Nyata untuk Klien &amp; Brand Ternama.
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-light text-[#52525B] leading-relaxed max-w-2xl">
              Lihat bagaimana kami membantu brand kuliner, retail toko, dan perusahaan besar menyelesaikan pesanan cetak mereka dengan hasil rapi dan tepat waktu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Filter & Showcase Grid */}
      <section className="py-16 sm:py-20 lg:py-28 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          
          {/* Filter Pills */}
          <div className="flex items-center gap-2 mb-10 sm:mb-16 overflow-x-auto pb-2 scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-[36px] whitespace-nowrap px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-150 shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#1A1A1A] text-white border border-[#1A1A1A]'
                    : 'bg-white text-[#52525B] border border-[#E4E4E7] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 2-Column Staggered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.5,
                  delay: shouldReduceMotion ? 0 : (idx % 2) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group mt-0 ${idx % 2 === 1 ? 'md:mt-12' : ''}`}
              >
                {/* 16:10 Frame with Real Photo */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="block relative aspect-[16/10] bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] overflow-hidden mb-6 transition-colors duration-200 group-hover:border-[#1A1A1A]"
                >
                  {project.thumbnail && (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/40 group-hover:via-white/70 transition-colors duration-300" />

                  <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A]">
                      <span className="font-semibold">PROYEK #{String(idx + 1).padStart(2, '0')}</span>
                      <span className="px-2.5 py-0.5 bg-white/90 backdrop-blur-sm border border-[#E4E4E7] rounded-full text-[10px] font-medium tracking-wider uppercase text-[#1A1A1A]">
                        {project.category}
                      </span>
                    </div>

                    <div className="my-auto py-4">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#52525B] block mb-1">
                        KLIEN: {project.client}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-black">
                        {project.title}
                      </h2>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-[#52525B] pt-3 border-t border-[#E4E4E7]">
                      <span>JUMLAH: {project.quantity}</span>
                      <span>TAHUN {project.year}</span>
                    </div>
                  </div>
                </Link>

                {/* Metadata */}
                <div className="pt-2 border-t border-[#E4E4E7] flex items-center justify-between text-sm">
                  <p className="font-light text-[#52525B] line-clamp-1 pr-4">
                    {project.summary}
                  </p>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="shrink-0 text-xs font-mono uppercase tracking-wider text-[#1A1A1A] hover:text-[#114576] inline-flex items-center gap-1 group/btn"
                  >
                    <span>Baca Cerita</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default Projects;

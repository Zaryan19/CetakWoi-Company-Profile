import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/mockData';

/**
 * Selected Works — Plain Language Edition
 * Showcase of completed projects linking to individual case study pages.
 */
export const ProjectsSection = () => {
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
              / 04 — CONTOH PROYEK SELESAI
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#1A1A1A]">
              Hasil Karya &amp; Proyek Klien.
            </h2>
          </div>
          <Link
            to="/projects"
            className="group text-xs font-mono tracking-wider uppercase text-[#52525B] hover:text-[#1A1A1A] transition-colors inline-flex items-center gap-1.5"
          >
            <span>LIHAT SEMUA PROYEK</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* 2-Column Staggered Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.55,
                delay: shouldReduceMotion ? 0 : (idx % 2) * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`group mt-0 ${idx % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              {/* 16:10 Showcase Frame with Real Photo & Smooth Zoom */}
              <Link
                to={`/projects/${project.slug}`}
                className="block relative aspect-[16/10] bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] overflow-hidden mb-6 transition-colors duration-200 group-hover:border-[#1A1A1A]"
              >
                {/* Real Project Photo Background */}
                {project.thumbnail && (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                )}
                {/* Editorial Gradient Veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-white/40 group-hover:via-white/70 transition-colors duration-300" />

                <div className="relative z-10 w-full h-full p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A]">
                    <span className="font-semibold">/{String(idx + 1).padStart(2, '0')}</span>
                    <span className="px-2.5 py-0.5 bg-white/90 backdrop-blur-sm border border-[#E4E4E7] rounded-full text-[10px] font-medium tracking-wider uppercase text-[#1A1A1A]">
                      {project.category}
                    </span>
                  </div>

                  <div className="my-auto py-4">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#52525B] block mb-1">
                      KLIEN: {project.client}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-black">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#52525B] pt-3 border-t border-[#E4E4E7]/80">
                    <span>JUMLAH: {project.quantity}</span>
                    <span>TAHUN {project.year}</span>
                  </div>
                </div>
              </Link>

              {/* Minimal Hairline Metadata */}
              <div className="pt-2 border-t border-[#E4E4E7] flex items-center justify-between text-sm">
                <p className="font-light text-[#52525B] line-clamp-1 pr-4">
                  {project.summary}
                </p>
                <Link
                  to={`/projects/${project.slug}`}
                  className="shrink-0 text-xs font-mono uppercase tracking-wider text-[#1A1A1A] hover:text-[#114576] inline-flex items-center gap-1 group/btn"
                >
                  <span>Baca Cerita</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, MessageCircle } from 'lucide-react';
import { NAV_LINKS, SERVICE_CATEGORIES, COMPANY_INFO } from '../../constants/navigation';
import { generateWaLink } from '../../utils/whatsapp';

/**
 * Editorial Corporate Footer — Light Editorial Theme
 * Clean, plain-language business copy without technical jargon or PDF download clutter.
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const waUrl = generateWaLink('Halo CetakWoi, saya ingin konsultasi mengenai kebutuhan cetak perusahaan kami.');

  return (
    <footer className="w-full bg-[#F4F4F5] border-t border-[#E4E4E7] text-[#1A1A1A]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Credibility (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-baseline gap-2.5">
              <span className="text-2xl font-bold tracking-[-0.03em] text-[#1A1A1A]">
                CetakWoi<span className="text-[#114576]">.</span>
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#52525B]">
                / PERCETAKAN BISNIS
              </span>
            </Link>

            <p className="text-sm font-light text-[#52525B] leading-relaxed max-w-sm">
              Mitra percetakan terpercaya untuk ribuan perusahaan, toko, dan brand kuliner. 
              Hasil cetak rapi, warna pas, bahan berkualitas, dan selalu siap tepat waktu.
            </p>

            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A1A1A] bg-white border border-[#E4E4E7] px-4 py-2.5 rounded-[4px] hover:border-[#1A1A1A] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#114576]" />
                <span>Konsultasi Gratis via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Layanan Cetak (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] font-mono">
              Layanan Utama
            </h3>
            <ul className="space-y-2.5">
              {SERVICE_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/services/${cat.slug}`}
                    className="text-sm font-light text-[#52525B] hover:text-[#1A1A1A] transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigasi Halaman (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] font-mono">
              Hubungi &amp; Kunjungi
            </h3>
            <div className="space-y-3 text-xs font-light text-[#52525B]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#1A1A1A]">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#1A1A1A] truncate">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="mt-16 pt-8 border-t border-[#E4E4E7] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-[#52525B]">
          <p>© {currentYear} CetakWoi. Percetakan Berkualitas untuk Usaha &amp; Perusahaan.</p>
          <div className="flex items-center gap-6">
            <span>Garansi Warna &amp; Kerapian Hasil Cetak</span>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#1A1A1A] font-medium hover:underline"
            >
              <span>Tanya Harga Langsung</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

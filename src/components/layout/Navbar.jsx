import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../../constants/navigation';
import { generateWaLink } from '../../utils/whatsapp';

/**
 * Editorial Top Navigation — Light Editorial Theme
 * Single-row (h-20), crisp white canvas with hairline border #E4E4E7.
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const quoteUrl = generateWaLink(
    'Halo PrintingGo, saya ingin berkonsultasi mengenai kebutuhan cetak & produksi korporat.'
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-20 bg-white/95 backdrop-blur-sm border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] h-full mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">

          {/* Brand Wordmark */}
          <NavLink
            to="/"
            className="flex items-baseline gap-2.5 group focus:outline-none"
            aria-label="PrintingGo Homepage"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-[-0.03em] text-[#1A1A1A]">
              PrintingGo<span className="text-[#114576]">.</span>
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm tracking-tight transition-colors duration-150 ${isActive
                    ? 'text-[#1A1A1A] font-semibold'
                    : 'text-[#52525B] hover:text-[#1A1A1A] font-normal'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#1A1A1A] text-white text-xs font-semibold tracking-tight rounded-[4px] hover:bg-black/90 active:bg-neutral-800 transition-colors duration-150"
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#52525B] hover:text-[#1A1A1A] focus:outline-none"
            aria-expanded={isOpen}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer — Rendered outside <header> so backdrop-blur does not trap fixed positioning */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 h-[calc(100dvh-5rem)] z-50 bg-white border-t border-[#E4E4E7] px-6 py-6 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col divide-y divide-[#E4E4E7] border-b border-[#E4E4E7]">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `min-h-[54px] flex items-center justify-between text-base tracking-tight ${
                    isActive ? 'text-[#1A1A1A] font-bold' : 'text-[#52525B] hover:text-[#1A1A1A] font-medium'
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-[#52525B]">→</span>
              </NavLink>
            ))}
          </nav>

          <div className="pt-6 mt-auto space-y-3">
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[50px] flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1A1A1A] text-white text-sm font-semibold rounded-[4px] hover:bg-black active:bg-neutral-800 transition-colors"
            >
              <span>Get a Quote via WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <p className="text-center text-[11px] font-mono text-[#52525B]">
              Respon Cepat: Senin - Jumat 08:30 - 17:30 WIB
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

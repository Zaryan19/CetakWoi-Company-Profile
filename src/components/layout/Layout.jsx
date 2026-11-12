import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '../common/FloatingWhatsApp';

/**
 * Global App Layout Wrapper — Light Editorial Theme
 * Assembles sticky Navbar, dynamic Page outlet, Floating WA button, and Footer on crisp white.
 */
export const Layout = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1A1A] overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 w-full overflow-x-hidden" id="main-content">
        <Outlet />
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};

export default Layout;

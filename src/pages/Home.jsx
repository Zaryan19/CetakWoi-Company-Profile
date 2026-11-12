import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ClientsSection from '../components/home/ClientsSection';
import ProcessSection from '../components/home/ProcessSection';
import CtaSection from '../components/home/CtaSection';

/**
 * Editorial Homepage — Light Editorial Theme with Refined Motion
 * Stark, high-contrast, uncluttered layout with rich B2B client cards.
 */
export const Home = () => (
  <div className="w-full bg-white text-[#1A1A1A]">
    <HeroSection />
    <StatsSection />
    <ServicesSection />
    <ProjectsSection />
    <ClientsSection />
    <ProcessSection />
    <CtaSection />
  </div>
);

export default Home;

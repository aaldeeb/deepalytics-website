import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="pt-16"> {/* Add padding-top to avoid content being hidden behind fixed navbar */}
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Contact />
      </div>
    </main>
  );
}

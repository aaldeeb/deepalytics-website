import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming Button component is available from shadcn/ui
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Empowering the Energy & Utilities Sector with Data-Driven Insights
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
          Deepalytics delivers bespoke analytics consultancy, transforming complex data into actionable strategies for sustainable growth and operational excellence in the energy and utilities landscape.
        </h2>
        <p className="text-lg text-gray-700 mb-10">
          In an industry defined by dynamic shifts, regulatory complexities, and the critical need for efficiency, Deepalytics stands as your dedicated partner. We specialize in unlocking the power of your data, providing the clarity and foresight required to navigate challenges, optimize performance, and drive innovation. Whether you're seeking to enhance grid reliability, optimize resource allocation, predict market trends, or improve customer engagement, our tailored analytical solutions are designed to meet the unique demands of the energy and utilities sector. Let us help you illuminate the path forward.
        </p>
        <div className="space-x-4">
          <Link href="#services" passHref>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Discover Our Solutions
            </Button>
          </Link>
          <Link href="#about" passHref>
            <Button size="lg" variant="outline">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;


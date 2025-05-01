import React from 'react';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Your Expert Partner in Energy & Utilities Analytics
        </h2>
        <div className="text-lg text-gray-700 space-y-4 text-left md:text-center">
          <p>
            Deepalytics was founded on the principle that data holds the key to unlocking significant advancements in the energy and utilities sector. We are a specialized consultancy practice dedicated to helping organizations navigate the complexities of this rapidly evolving industry through the power of advanced analytics and data science.
          </p>
          <p>
            Our mission is to translate complex datasets into clear, actionable insights that drive strategic decision-making, operational efficiency, and sustainable growth. We understand the unique challenges faced by energy providers, utility companies, and related stakeholders – from managing grid stability and integrating renewables to optimizing resource allocation and enhancing customer experiences.
          </p>
          <p>
            With deep domain expertise specifically within the energy and utilities landscape, our team combines analytical rigor with practical industry knowledge. We partner closely with our clients, including decision-makers and recruitment specialists seeking top talent, to develop tailored solutions that address their most pressing needs. At Deepalytics, we are committed to illuminating the path forward, empowering you to not just adapt, but to lead in the future of energy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;


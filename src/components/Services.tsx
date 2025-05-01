import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // Assuming Card components are available

const servicesData = [
  {
    title: 'Predictive Maintenance & Asset Management',
    description: [
      'Utilize sensor data and historical performance records to predict equipment failures before they occur.',
      'Optimize maintenance schedules, reduce downtime, and extend asset lifespan for critical infrastructure like turbines, transformers, and pipelines.',
      'Improve capital planning through data-driven asset health assessments.',
    ],
  },
  {
    title: 'Grid Optimization & Load Forecasting',
    description: [
      'Analyze consumption patterns, weather data, and grid performance to accurately forecast energy demand.',
      'Optimize grid operations, improve stability, and facilitate the integration of renewable energy sources.',
      'Reduce transmission losses and enhance overall grid efficiency.',
    ],
  },
  {
    title: 'Energy Trading & Market Analysis',
    description: [
      'Develop sophisticated models to analyze market trends, predict price fluctuations, and optimize trading strategies.',
      'Provide insights into regulatory impacts and competitor activities.',
      'Support risk management through quantitative analysis of market volatility.',
    ],
  },
  {
    title: 'Customer Analytics & Engagement',
    description: [
      'Analyze customer usage data, demographics, and feedback to understand behavior and preferences.',
      'Develop targeted programs for demand-side management, energy efficiency, and customer retention.',
      'Personalize communication and improve overall customer satisfaction.',
    ],
  },
  {
    title: 'Regulatory Compliance & Reporting',
    description: [
      'Streamline data collection and analysis processes to meet complex regulatory reporting requirements.',
      'Develop dashboards and reports to monitor compliance metrics and identify potential risks.',
      'Ensure data accuracy and transparency for audits and stakeholder communication.',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="min-h-screen flex flex-col items-center justify-center bg-gray-200 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Tailored Analytic Solutions for the Energy & Utilities Sector
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Deepalytics offers a comprehensive suite of data analytics consultancy services specifically designed to address the critical challenges and opportunities within the energy and utilities industry. We leverage advanced analytical techniques and deep sector knowledge to empower your organization with actionable insights.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="text-left">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {service.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-lg text-gray-700 mt-12">
          Partner with Deepalytics to transform your data into a strategic asset. Our tailored solutions provide the clarity needed to navigate the complexities of the energy and utilities market, driving efficiency, innovation, and sustainable success.
        </p>
      </div>
    </section>
  );
};

export default Services;


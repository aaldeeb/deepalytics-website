import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const caseStudiesData = [
  {
    challenge: 'A regional utility provider was facing increasing grid instability due to unpredictable renewable energy integration and aging infrastructure. They needed a way to proactively manage grid load and reduce outage risks.',
    solution: 'Deepalytics developed a predictive analytics model integrating real-time sensor data, weather forecasts, and historical load patterns. The model provided operators with accurate short-term load forecasts and identified potential stress points on the grid.',
    outcome: 'Enabled proactive grid adjustments, reducing outage frequency by 15% and improving the integration efficiency of renewable sources. Provided data-driven insights for targeted infrastructure upgrades.',
  },
  {
    challenge: 'An energy trading company sought to optimize its portfolio strategy in a volatile market, needing better tools to predict price movements and manage risk.',
    solution: 'We implemented a machine learning-based market analysis platform that analyzed historical price data, geopolitical factors, and supply/demand indicators. The platform generated probabilistic price forecasts and risk exposure reports.',
    outcome: 'Improved trading decision accuracy, leading to a 7% increase in portfolio returns within the first year. Enhanced risk management capabilities, reducing exposure during periods of high volatility.',
  },
  {
    challenge: 'A national energy supplier wanted to reduce customer churn and improve satisfaction by better understanding customer needs and addressing issues proactively.',
    solution: 'Deepalytics performed customer segmentation analysis based on usage patterns, interaction history, and demographic data. We identified key drivers of churn and developed a predictive model to flag at-risk customers.',
    outcome: 'Enabled targeted retention campaigns and personalized communication strategies, resulting in a 10% reduction in customer churn rate and a measurable increase in customer satisfaction scores.',
  },
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="min-h-screen flex flex-col items-center justify-center bg-gray-300 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Demonstrating Impact: Our Success Stories
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          We believe in the power of data to drive tangible results. While specific client engagements are confidential, these representative case studies illustrate the types of challenges we solve and the value we deliver within the energy and utilities sector.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study, index) => (
            <Card key={index} className="text-left flex flex-col">
              <CardHeader>
                <CardTitle>Case Study {index + 1}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <h3 className="font-semibold mb-2">Challenge:</h3>
                <p className="text-gray-600 mb-4">{study.challenge}</p>
                <h3 className="font-semibold mb-2">Solution:</h3>
                <p className="text-gray-600 mb-4">{study.solution}</p>
                <h3 className="font-semibold mb-2">Outcome:</h3>
                <p className="text-gray-600">{study.outcome}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Link href="#contact" passHref>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Discuss Your Challenges
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;


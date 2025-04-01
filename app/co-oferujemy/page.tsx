import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Users, MessageSquare, RefreshCw, Settings } from 'lucide-react'; // Adjusted icons

export default function WhatWeOfferPage() {
  const services = [
    {
      title: 'Visionary Consulting',
      description:
        'Redefine your goals and craft breakthrough strategies with the fresh perspectives of our independent Creators.',
      icon: Zap,
    },
    {
      title: 'Collaborative Planning',
      description:
        "Together, we co-create actionable roadmaps, intertwining your business needs with unique Creator insights for a truly tailored approach.",
      icon: Users,
    },
    {
      title: 'Emotive Advertising',
      description:
        "Craft campaigns that don't just reach audiences – they resonate deeply, stir emotions, and inspire meaningful action.",
      icon: MessageSquare,
    },
    {
      title: 'Agile Improvisation',
      description:
        'Continuously adapt and optimize your path forward. We infuse every step with creative energy and refine strategies on the fly.',
      icon: RefreshCw,
    },
    {
      title: 'Holistic Implementation',
      description:
        'Bring your vision to life swiftly and effectively, harnessing the collective passion and expertise of our Creator network.',
      icon: Settings,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-20 md:pt-24 lg:pt-28">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        What We Offer: Your Path to Growth
      </h1>

      <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
        Embark on your growth journey with Spark Leaf's comprehensive support.
        We guide you through each stage, offering tailored solutions designed to
        help your business flourish:
        {/* TODO: Add interactive elements to guide exploration */}
        {/* TODO: Hint at 'Growth Lab' simulator */}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <service.icon className="h-5 w-5 text-primary" />
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-gray-600 dark:text-gray-400 mt-12">
        Each service is a step towards realizing your vision, powered by
        creativity and collaboration.
        {/* TODO: Link to detailed service pages or case studies */}
      </p>
    </div>
  );
}

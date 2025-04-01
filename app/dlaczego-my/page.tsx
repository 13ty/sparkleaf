import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Zap, Handshake, Target } from 'lucide-react'; // Adjusted icons
import { Separator } from '@/components/ui/separator';

export default function WhyChooseSparkLeafPage() {
  const reasons = [
    {
      title: 'Unparalleled Creator Network',
      description:
        'Access diverse, top-tier talent. Our Creators bring fresh perspectives and industry-leading expertise to your challenges.',
      icon: Users,
    },
    {
      title: 'Fearless Creativity',
      description:
        'We thrive on challenges, pushing boundaries to find innovative solutions where others see roadblocks. Expect the unexpected.',
      icon: Zap,
    },
    {
      title: 'Partnership, Not Just Service',
      description:
        "We invest in your vision, committing to a shared journey towards extraordinary success. Your growth is our growth.",
      icon: Handshake,
    },
    {
      title: 'Results-Driven Approach',
      description:
        'Our focus is on tangible, measurable outcomes. We leverage Creator expertise to deliver real impact for your business.',
      icon: Target,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-20 md:pt-24 lg:pt-28">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Why Choose Spark Leaf? Your Growth Partner.
      </h1>

      {/* Why Choose Us Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {reasons.map((reason, index) => (
          <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <reason.icon className="h-7 w-7 text-primary flex-shrink-0" />
                {reason.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {reason.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-3xl mx-auto">
        Choosing Spark Leaf means choosing a partner dedicated to building your
        confidence and achieving remarkable results together.
        {/* TODO: Add social proof (testimonials, logos) */}
      </p>

      <Separator className="my-16" />

      {/* The Spark Leaf Impact Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-primary">
          The Spark Leaf Impact: Building Legacies
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          We go beyond boosting financial metrics. We help create companies that
          inspire loyalty, becoming places where stakeholders feel part of
          something truly special. With Spark Leaf, you're not just growing a
          business; you're nurturing a lasting legacy.
        </p>
        <blockquote className="mt-6 border-l-4 border-primary pl-6 italic text-gray-600 dark:text-gray-400 text-lg">
          "When you aim high with Spark Leaf, you don't just find a path to
          your goal - you build a highway that future generations will travel."
        </blockquote>
        {/* TODO: Link to detailed case studies ('Historie Sukcesu') */}
      </div>
    </div>
  );
}

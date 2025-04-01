import React from 'react';
import { Separator } from '@/components/ui/separator';

export default function WhoWeArePage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20 md:pt-24 lg:pt-28">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Who We Are: An Ecosystem of Growth
      </h1>

      <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-4">
        <p>
          Spark Leaf is not just a company; we're a thriving ecosystem fueled by
          creativity and innovation. Think of us as dedicated gardeners, here to
          nurture your business ambitions into flourishing success stories.
        </p>
        <p>
          We blend learning, fun, and boundless imagination, creating a unique
          environment where potential transforms into performance. Our community
          of diverse Creators, passionate enthusiasts, and forward-thinking
          visionaries collaborates closely, constantly pushing the boundaries of
          what's possible to help you transcend your goals.
        </p>
        {/* TODO: Implement parallax storytelling, team section, history timeline */}
        {/* TODO: Visually represent the 'ecosystem' concept */}
      </div>
    </div>
  );
}

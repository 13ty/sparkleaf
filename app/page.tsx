'use client'; // Needed for potential future client-side interactions/animations

import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Users, BrainCircuit } from 'lucide-react'; // Added more icons
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-56px)] p-4 md:p-8 lg:p-12 overflow-hidden">
      {' '}
      {/* Adjusted min-height */}
      {/* Background Image Section */}
      <div className="absolute inset-0 -z-20">
        <img
          // Placeholder image from Unsplash - Replace with actual high-quality background
          src="https://images.unsplash.com/photo-1530177150301-3c4e1e1a5f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Abstract background representing growth"
          className="object-cover w-full h-full"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50 -z-10"></div>
      </div>
      <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-md animate-fade-in-up">
          Spark Leaf: Igniting Growth, Sparking Emotions
        </h1>

        {/* Subtitle/Description - Enhanced based on User Journey */}
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 dark:text-gray-300 mb-10 max-w-2xl drop-shadow animate-fade-in-up animation-delay-300">
          Step into a thriving ecosystem where creativity meets innovation. We
          blend learning, fun, and boundless imagination to help your business
          transcend its ambitions and embark on an extraordinary growth journey.
        </p>

        {/* Call to Action Button - Enhanced based on User Journey */}
        <Link href="/kontakt" passHref>
          <Button
            size="lg"
            className="animate-fade-in-up animation-delay-600 group shadow-lg text-lg px-8 py-6" // Made button larger
            variant="secondary" // Changed variant for contrast
            asChild
          >
            <a>
              Begin Your Growth Journey
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </a>
          </Button>
        </Link>

        {/* Subtle Visual Element/Separator */}
        <div className="mt-16 flex space-x-6 text-gray-300 dark:text-gray-400 animate-fade-in-up animation-delay-900">
          <Zap className="h-6 w-6 opacity-70" />
          <Users className="h-6 w-6 opacity-70" />
          <BrainCircuit className="h-6 w-6 opacity-70" />
        </div>
      </div>
      {/* TODO: Add subtle animations/icons, easter eggs */}
      {/* TODO: Add 'growth fortune cookie' concept */}
      {/* TODO: Implement three.js scene here based on user journey concept */}
    </div>
  );
}

// Basic fade-in animation definition (can be moved to globals.css)
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0; /* Start hidden */
  }

  .animation-delay-300 {
    animation-delay: 0.3s;
  }

  .animation-delay-600 {
    animation-delay: 0.6s;
  }
  .animation-delay-900 {
    animation-delay: 0.9s; /* Delay for the icons */
  }
`;

// Inject styles - consider moving to globals.css for better organization
if (typeof window !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}

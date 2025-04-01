import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ContactForm } from './ContactForm'; // Import the form component

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8 pt-20 md:pt-24 lg:pt-28">
      {/* Main Call to Action - Enhanced */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
          Ready to Ignite Your Growth Journey?
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          Take the next step. Contact us today, and let's start crafting your
          extraordinary future together. With Spark Leaf, the sky isn't the
          limit - it's just the beginning.
          {/* TODO: Add 'Golden Ticket' surprise element concept */}
        </p>
        {/* Button removed as form is the primary action */}
      </div>

      <Separator className="my-12" />

      {/* Contact Form Section */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
          Starting your journey is simple. Fill out the form below, and one of
          our growth guides will connect with you shortly.
        </p>
        <ContactForm /> {/* Render the form component */}
        <div className="mt-10 text-gray-600 dark:text-gray-400">
          <p>
            Prefer email? Reach us at:{' '}
            <a
              href="mailto:sparktreehere@gmail.com"
              className="text-primary hover:underline"
            >
              sparktreehere@gmail.com
            </a>
          </p>
          {/* TODO: Add consultation scheduling tool */}
          {/* TODO: Add AI chatbot access */}
        </div>
      </div>
    </div>
  );
}

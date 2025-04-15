
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-felom-blue-900 to-felom-blue-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8">
            Let's discuss how Felom's solutions can drive efficiency, reliability, and growth for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-felom-orange-500 hover:bg-felom-orange-600 text-white px-8 py-6 rounded-md font-medium text-lg flex items-center gap-2">
              Get in Touch <ArrowRight size={18} />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 rounded-md font-medium text-lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;

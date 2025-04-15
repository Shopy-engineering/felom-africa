
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, title, company }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 relative">
      <Quote className="text-felom-orange-200 absolute -top-4 -left-4" size={40} />
      <p className="text-gray-700 mb-6 relative z-10">{quote}</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-felom-blue-100 flex items-center justify-center mr-4">
          <span className="text-felom-blue-600 font-bold">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium text-felom-blue-900">{name}</p>
          <p className="text-sm text-gray-500">{title}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

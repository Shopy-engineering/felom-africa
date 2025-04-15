
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 h-full flex flex-col">
      <div className="bg-felom-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        <Icon className="text-felom-blue-600" size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">{title}</h3>
      <p className="text-gray-600 mb-5 flex-grow">{description}</p>
      <Link to={link} className="inline-flex items-center text-felom-blue-600 font-medium hover:text-felom-blue-700 mt-auto transition-colors">
        Learn more <ArrowRight size={16} className="ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;

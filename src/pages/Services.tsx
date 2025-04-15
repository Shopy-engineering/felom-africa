
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Building, Construction, Zap, Wrench, Truck, Leaf, Droplet, Box, Database, FileText, HardDrive, Sofa } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';

const Services = () => {
  const workServices = [
    {
      icon: Building,
      title: "Building & Facility Maintenance",
      description: "Comprehensive maintenance and repair services for buildings and facilities of all sizes. We ensure your spaces remain functional, safe, and efficient.",
      features: [
        "Preventive maintenance programs",
        "Emergency repair services",
        "Facility audits and inspections",
        "Sustainability upgrades"
      ]
    },
    {
      icon: Construction,
      title: "Civil Engineering & Construction",
      description: "Expert construction services for commercial, industrial, and residential projects. From planning to execution, we deliver quality on time and within budget.",
      features: [
        "Building construction",
        "Infrastructure development",
        "Project management",
        "Quality assurance"
      ]
    },
    {
      icon: Leaf,
      title: "Solar & Renewable Energy",
      description: "Sustainable energy solutions designed for Uganda's unique environment. We specialize in solar installations that reduce costs and environmental impact.",
      features: [
        "Solar panel installation",
        "Energy audits",
        "System maintenance",
        "Renewable energy consulting"
      ]
    },
    {
      icon: Zap,
      title: "Electrical & Plumbing Installation",
      description: "Professional installation services for electrical systems and plumbing in domestic, commercial, and industrial settings.",
      features: [
        "Electrical wiring and rewiring",
        "Plumbing installation",
        "System upgrades",
        "Compliance and safety checks"
      ]
    },
    {
      icon: Wrench,
      title: "Equipment Maintenance & Repairs",
      description: "Keep your equipment running at peak performance with our comprehensive maintenance and repair services.",
      features: [
        "Preventive maintenance",
        "Diagnostic services",
        "Repair and replacement",
        "Performance optimization"
      ]
    },
    {
      icon: Truck,
      title: "Motor Vehicle Sales",
      description: "Quality vehicles for commercial and personal use, with flexible financing options and after-sales support.",
      features: [
        "New and used vehicles",
        "Fleet solutions",
        "Financing options",
        "Warranty programs"
      ]
    }
  ];

  const supplyServices = [
    {
      icon: Zap,
      title: "Generators & Solar Equipment",
      description: "Reliable power solutions for businesses and homes, including generators, solar panels, inverters, and accessories."
    },
    {
      icon: Database,
      title: "Laboratory & Scientific Equipment",
      description: "High-quality equipment for research facilities, educational institutions, and medical laboratories."
    },
    {
      icon: HardDrive,
      title: "Medical Supplies & Equipment",
      description: "Essential medical supplies and equipment for healthcare facilities, from basic tools to specialized equipment."
    },
    {
      icon: Sofa,
      title: "Office Furniture & Furnishings",
      description: "Ergonomic and stylish furniture solutions for offices, schools, and public institutions."
    },
    {
      icon: Droplet,
      title: "Plumbing Materials",
      description: "Comprehensive range of plumbing supplies for construction, maintenance, and repair projects."
    },
    {
      icon: Box,
      title: "Relief & Non-relief Items",
      description: "Essential supplies for humanitarian organizations, including relief and non-relief items for various programs."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-felom-blue-900 mb-6">
              Our <span className="text-felom-orange-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Comprehensive solutions to build, maintain, and supply your operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#works" className="btn-primary">Construction & Works</a>
              <a href="#supplies" className="btn-outline">Equipment & Supplies</a>
              <a href="#services" className="btn-outline">Maintenance & Services</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Works & Construction Section */}
      <section id="works" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="section-title">Construction & Works</h2>
            <p className="section-subtitle">
              Building the future of Uganda with quality, innovation, and sustainability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workServices.map((service, index) => (
              <div key={index} className="service-card flex flex-col h-full">
                <div className="bg-felom-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-felom-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">{service.title}</h3>
                <p className="text-gray-600 mb-5">{service.description}</p>
                
                <div className="mt-auto">
                  <h4 className="font-medium text-felom-blue-800 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Supplies Section */}
      <section id="supplies" className="py-20 bg-felom-blue-50">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="section-title">Equipment & Supplies</h2>
            <p className="section-subtitle">
              Quality products sourced and delivered to meet your specific needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplyServices.map((service, index) => (
              <div key={index} className="service-card">
                <div className="bg-felom-orange-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-felom-orange-500" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Need specific equipment or supplies? We can source almost anything for your business.
            </p>
            <Button className="bg-felom-orange-500 hover:bg-felom-orange-600">
              Request Custom Sourcing
            </Button>
          </div>
        </div>
      </section>
      
      {/* Maintenance Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="section-title">Maintenance & Services</h2>
            <p className="section-subtitle">
              Keep your operations running smoothly with our professional maintenance services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col h-full">
              <img 
                src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Maintenance services" 
                className="rounded-xl shadow-md w-full h-64 object-cover mb-6"
              />
              <div className="service-card flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">Electrical Equipment & Machinery</h3>
                <p className="text-gray-600 mb-4">
                  Expert maintenance and repair services for all types of electrical equipment and machinery, ensuring optimal performance and longevity.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Preventive maintenance programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Troubleshooting and diagnostics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Repair and replacement services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Performance optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col h-full">
              <img 
                src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Air conditioning services" 
                className="rounded-xl shadow-md w-full h-64 object-cover mb-6"
              />
              <div className="service-card flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">Air Conditioner Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive maintenance and repair services for air conditioning systems in residential, commercial, and industrial settings.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Regular servicing and cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Refrigerant checks and refills</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">System repairs and part replacements</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Efficiency optimization</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col h-full">
              <img 
                src="https://images.unsplash.com/photo-1542089363-bba089ffaa25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Office supplies" 
                className="rounded-xl shadow-md w-full h-64 object-cover mb-6"
              />
              <div className="service-card flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">Office Equipment & Supplies</h3>
                <p className="text-gray-600 mb-4">
                  Full-service management of office equipment, stationery, and consumables to keep your workplace running efficiently.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Equipment maintenance and repair</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Supplies inventory management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Regular delivery schedules</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Cost optimization strategies</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col h-full">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Well drilling" 
                className="rounded-xl shadow-md w-full h-64 object-cover mb-6"
              />
              <div className="service-card flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">Well Drilling & Construction</h3>
                <p className="text-gray-600 mb-4">
                  Expert well drilling and construction services for residential, agricultural, and industrial water needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Site assessment and planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Well drilling and construction</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Pump installation and maintenance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="text-felom-orange-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span className="text-gray-600">Water quality testing and treatment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Process */}
      <section className="py-20 bg-felom-blue-50">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="section-title">Our Service Process</h2>
            <p className="section-subtitle mx-auto">
              A streamlined approach to delivering quality services and solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="absolute -top-5 -left-5 bg-felom-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-felom-blue-900 mt-4">Consultation</h3>
              <p className="text-gray-600">
                We begin with a detailed consultation to understand your specific needs, challenges, and objectives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="absolute -top-5 -left-5 bg-felom-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-felom-blue-900 mt-4">Planning</h3>
              <p className="text-gray-600">
                Our team develops a comprehensive plan, including timelines, resources, and deliverables.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="absolute -top-5 -left-5 bg-felom-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-felom-blue-900 mt-4">Execution</h3>
              <p className="text-gray-600">
                We execute the plan with precision, keeping you informed at every stage of the process.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
              <div className="absolute -top-5 -left-5 bg-felom-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 text-felom-blue-900 mt-4">Follow-up</h3>
              <p className="text-gray-600">
                After completion, we follow up to ensure satisfaction and provide ongoing support as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <ContactCTA />
      
      <Footer />
    </div>
  );
};

export default Services;

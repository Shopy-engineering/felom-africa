
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building, Construction, Zap, Wrench, Truck, Leaf } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-felom-blue-900 mb-6">
                Powering Uganda's <span className="text-felom-orange-500">Infrastructure</span> & <span className="text-felom-orange-500">Supply Chain</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-xl">
                Comprehensive construction, maintenance, and supply solutions for businesses and institutions across East Africa.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-felom-blue-600 hover:bg-felom-blue-700 text-lg">
                  Explore Our Services
                </Button>
                <Button variant="outline" size="lg" className="border-felom-blue-600 text-felom-blue-600 hover:bg-felom-blue-50 text-lg">
                  Contact Us
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-4">
                  <div className="w-10 h-10 rounded-full bg-felom-blue-200 flex items-center justify-center border-2 border-white">
                    <span className="text-felom-blue-600 font-bold text-xs">YC</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-felom-orange-200 flex items-center justify-center border-2 border-white">
                    <span className="text-felom-orange-600 font-bold text-xs">UIA</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-felom-blue-200 flex items-center justify-center border-2 border-white">
                    <span className="text-felom-blue-600 font-bold text-xs">UMA</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">Backed by YC & trusted by leading organizations</p>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Felom Project" 
                className="rounded-xl shadow-lg w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md border border-gray-100 max-w-xs hidden md:block">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-green-500 font-medium">97% Projects Delivered On Time</span>
                </div>
                <p className="text-sm text-gray-600">Across construction, maintenance, and supply projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Clients/Partners Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-500 mb-8">Trusted by leading organizations across East Africa</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="h-12 w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
              <div className="text-xl font-bold text-gray-400">COMPANY A</div>
            </div>
            <div className="h-12 w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
              <div className="text-xl font-bold text-gray-400">COMPANY B</div>
            </div>
            <div className="h-12 w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
              <div className="text-xl font-bold text-gray-400">COMPANY C</div>
            </div>
            <div className="h-12 w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
              <div className="text-xl font-bold text-gray-400">COMPANY D</div>
            </div>
            <div className="h-12 w-auto grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
              <div className="text-xl font-bold text-gray-400">COMPANY E</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle mx-auto">
              End-to-end solutions to build, maintain, and supply your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={Building} 
              title="Building & Maintenance" 
              description="Comprehensive building maintenance and repair services for facilities of all sizes."
              link="/services"
            />
            <ServiceCard 
              icon={Construction} 
              title="Civil Engineering" 
              description="Construction of buildings, infrastructure, and specialized structures."
              link="/services"
            />
            <ServiceCard 
              icon={Zap} 
              title="Electrical & Plumbing" 
              description="Installation and maintenance services for domestic, commercial, and industrial buildings."
              link="/services"
            />
            <ServiceCard 
              icon={Wrench} 
              title="Equipment Maintenance" 
              description="Servicing, repair, and maintenance for a wide range of equipment and machinery."
              link="/services"
            />
            <ServiceCard 
              icon={Truck} 
              title="Supply Solutions" 
              description="Sourcing and supply of equipment, materials, furniture, and more."
              link="/services"
            />
            <ServiceCard 
              icon={Leaf} 
              title="Renewable Energy" 
              description="Solar projects, renewable energy solutions, and sustainable construction."
              link="/services"
            />
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" className="border-felom-blue-600 text-felom-blue-600 hover:bg-felom-blue-50">
              <Link to="/services" className="flex items-center">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-felom-blue-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Felom team at work" 
                className="rounded-xl shadow-md w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="section-title">Why Choose Felom?</h2>
              <p className="mb-8 text-gray-600">
                We combine logistical expertise, technical excellence, and local knowledge to deliver reliable solutions across East Africa.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 bg-felom-blue-100 text-felom-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">End-to-End Solutions</h3>
                    <p className="text-gray-600">From construction to maintenance to supply, we provide comprehensive services under one roof.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 bg-felom-blue-100 text-felom-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">Local Expertise</h3>
                    <p className="text-gray-600">Deep understanding of East Africa's business landscape, supply chains, and regulatory environment.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 bg-felom-blue-100 text-felom-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">Quality & Reliability</h3>
                    <p className="text-gray-600">Consistent delivery of high-quality services with a focus on reliability, safety, and customer satisfaction.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 bg-felom-blue-100 text-felom-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">Tech-Enabled Operations</h3>
                    <p className="text-gray-600">Leveraging technology for streamlined processes, enhanced visibility, and improved outcomes.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-felom-blue-600 hover:bg-felom-blue-700">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Felom.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Felom delivered our office renovation project on time and within budget. Their attention to detail and commitment to quality were exceptional."
              name="Sarah Kimani"
              title="Operations Director"
              company="TechHub Uganda"
            />
            <TestimonialCard 
              quote="Their solar installation transformed our energy costs. The team was professional, knowledgeable, and responsive throughout the process."
              name="David Ochieng"
              title="Facility Manager"
              company="Kampala Medical Center"
            />
            <TestimonialCard 
              quote="We've relied on Felom for equipment maintenance for years. Their reliability and expertise have been crucial to keeping our operations running smoothly."
              name="Robert Kagwa"
              title="Production Manager"
              company="East African Breweries"
            />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-felom-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-felom-orange-500 mb-2">250+</div>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-felom-orange-500 mb-2">98%</div>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-felom-orange-500 mb-2">15+</div>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-felom-orange-500 mb-2">50+</div>
              <p className="text-gray-300">Expert Team Members</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recent Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="section-title">Recent Projects</h2>
            <p className="section-subtitle mx-auto">
              A showcase of our recent work across various sectors and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group overflow-hidden rounded-xl shadow-md relative">
              <img 
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Project 1" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-felom-blue-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Solar Installation</h3>
                <p className="text-felom-orange-300">Renewable Energy</p>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-xl shadow-md relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Project 2" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-felom-blue-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Office Complex</h3>
                <p className="text-felom-orange-300">Construction</p>
              </div>
            </div>
            
            <div className="group overflow-hidden rounded-xl shadow-md relative">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Project 3" 
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-felom-blue-900/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Hospital Equipment</h3>
                <p className="text-felom-orange-300">Medical Supplies</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-felom-blue-600 hover:bg-felom-blue-700">
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <ContactCTA />
      
      <Footer />
    </div>
  );
};

export default Index;

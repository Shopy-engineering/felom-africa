
import React from 'react';
import { CheckCircle2, Award, Users, Target, ShieldCheck } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';

const About = () => {
  const teamMembers = [
    {
      name: "John Mukasa",
      position: "Founder & CEO",
      bio: "Over 20 years of experience in construction and logistics across East Africa.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Sarah Namukasa",
      position: "Chief Operations Officer",
      bio: "Former logistics executive with expertise in supply chain optimization.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "David Okello",
      position: "Head of Engineering",
      bio: "Civil engineer with specialization in sustainable construction methods.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Grace Kigozi",
      position: "Supply Chain Director",
      bio: "Expert in procurement and logistics management for complex projects.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
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
              About <span className="text-felom-orange-500">Felom</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Building Uganda's future through innovative construction, maintenance, and supply solutions.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="section-title">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2010, Felom Co. Ltd began as a small construction company with a vision to transform Uganda's infrastructure landscape. Over the years, we've evolved into a comprehensive service provider, offering end-to-end solutions across construction, maintenance, and supply chains.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey has been marked by a commitment to excellence, innovation, and customer satisfaction. As we've grown, we've maintained our core values while expanding our capabilities to meet the diverse needs of our clients.
              </p>
              <p className="text-gray-600">
                Today, as a YC-backed company, we're leveraging technology and our deep local expertise to solve complex challenges and drive efficiency for businesses and institutions across East Africa.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Felom history" 
                className="rounded-xl shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20 bg-felom-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-felom-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="text-felom-blue-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-felom-blue-900">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality, reliable, and innovative construction, maintenance, and supply solutions that drive efficiency and growth for our clients, while contributing to the sustainable development of East Africa.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="bg-felom-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="text-felom-orange-600" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-felom-blue-900">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading integrated service provider in East Africa, known for excellence, innovation, and integrity in every project we undertake, while setting the standard for sustainability and social responsibility in our industry.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle mx-auto">
              The principles that guide our work and relationships.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-felom-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <CheckCircle2 className="text-felom-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, delivering high-quality solutions that exceed expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-felom-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <ShieldCheck className="text-felom-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty, transparency, and ethical practices in all our business dealings.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-felom-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="text-felom-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">Collaboration</h3>
              <p className="text-gray-600">
                We build strong partnerships with clients, suppliers, and communities to achieve shared goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-felom-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="text-felom-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">Innovation</h3>
              <p className="text-gray-600">
                We embrace innovation and technology to improve our processes and deliver better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-20 bg-felom-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Leadership Team</h2>
            <p className="section-subtitle mx-auto">
              Meet the experts guiding Felom's vision and operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-felom-blue-900">{member.name}</h3>
                  <p className="text-felom-orange-600 mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="section-title">Our Achievements</h2>
              <p className="text-gray-600 mb-8">
                We're proud of our track record of success and the recognition we've received for our work.
              </p>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="mr-4 text-felom-orange-500 flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">Best Construction Company 2022</h3>
                    <p className="text-gray-600">Awarded by the Uganda Builders Association for excellence in commercial construction.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-felom-orange-500 flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">Y Combinator Backed 2021</h3>
                    <p className="text-gray-600">Selected for YC's accelerator program, recognizing our innovative approach to construction and logistics.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-felom-orange-500 flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">Sustainable Energy Award 2020</h3>
                    <p className="text-gray-600">For our commitment to renewable energy solutions and sustainable construction practices.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-felom-orange-500 flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">Best Employer 2019</h3>
                    <p className="text-gray-600">Recognized for our employee development programs and positive workplace culture.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Felom achievements" 
                className="rounded-xl shadow-md w-full"
              />
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

export default About;

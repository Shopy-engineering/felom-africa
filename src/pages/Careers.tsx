
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Briefcase, Calendar, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: "Civil Engineer",
      department: "Engineering",
      location: "Kampala, Uganda",
      type: "Full-time",
      posted: "April 8, 2025",
      description: "We're looking for an experienced Civil Engineer to join our construction team and lead projects across Uganda."
    },
    {
      id: 2,
      title: "Supply Chain Manager",
      department: "Logistics",
      location: "Kampala, Uganda",
      type: "Full-time",
      posted: "April 5, 2025",
      description: "Oversee our supply chain operations, optimize logistics processes, and ensure timely delivery of products and materials."
    },
    {
      id: 3,
      title: "Electrical Technician",
      department: "Electrical Services",
      location: "Jinja, Uganda",
      type: "Full-time",
      posted: "April 2, 2025",
      description: "Join our team of skilled technicians providing electrical installation and maintenance services across Eastern Uganda."
    },
    {
      id: 4,
      title: "Solar Installation Specialist",
      department: "Renewable Energy",
      location: "Multiple Locations",
      type: "Full-time",
      posted: "March 30, 2025",
      description: "Help us expand our solar installation services with your expertise in renewable energy systems."
    },
    {
      id: 5,
      title: "Procurement Officer",
      department: "Supply Chain",
      location: "Kampala, Uganda",
      type: "Full-time",
      posted: "March 25, 2025",
      description: "Source and procure quality products and materials for our various projects and supply operations."
    },
    {
      id: 6,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Kampala, Uganda",
      type: "Full-time",
      posted: "March 20, 2025",
      description: "Help us tell the Felom story and connect with clients through strategic marketing initiatives."
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Competitive Compensation",
      description: "We offer competitive salaries and performance-based bonuses to reward your contributions."
    },
    {
      icon: Calendar,
      title: "Generous Leave Policy",
      description: "Enjoy a generous annual leave policy, including paid holidays and personal time off."
    },
    {
      icon: Briefcase,
      title: "Career Development",
      description: "Access training programs, mentorship, and clear paths for advancement within the company."
    },
    {
      icon: CheckCircle2,
      title: "Health Insurance",
      description: "Comprehensive health insurance coverage for you and your family."
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
              Join Our <span className="text-felom-orange-500">Team</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Build your career at Felom and help us shape the future of construction, maintenance, and supply in East Africa.
            </p>
            <Button className="bg-felom-blue-600 hover:bg-felom-blue-700" size="lg">
              <a href="#openings">View Current Openings</a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="section-title">Why Join Felom?</h2>
              <p className="text-gray-600 mb-8">
                At Felom, we're building the future of infrastructure and supply chains in East Africa. Join our team of passionate professionals and be part of our journey.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 bg-felom-blue-100 text-felom-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">Impactful Work</h3>
                    <p className="text-gray-600">Contribute to projects that make a real difference in communities across East Africa.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 bg-felom-blue-100 text-felom-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">Growth Opportunities</h3>
                    <p className="text-gray-600">Develop your skills and advance your career with our commitment to continuous learning and development.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 bg-felom-blue-100 text-felom-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">Innovative Environment</h3>
                    <p className="text-gray-600">Work with the latest technologies and methodologies in a culture that values innovation and fresh thinking.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 bg-felom-blue-100 text-felom-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-felom-blue-900">Collaborative Culture</h3>
                    <p className="text-gray-600">Join a diverse team that values collaboration, respect, and work-life balance.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Felom team" 
                className="rounded-xl shadow-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-felom-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Benefits & Perks</h2>
            <p className="section-subtitle mx-auto">
              We take care of our team with comprehensive benefits and a supportive work environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="bg-felom-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <benefit.icon className="text-felom-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-felom-blue-900">Additional Benefits</h3>
                <p className="text-gray-600 mb-4 md:mb-0">
                  We also offer professional development opportunities, flexible work arrangements, and more.
                </p>
              </div>
              <Button className="bg-felom-orange-500 hover:bg-felom-orange-600">
                Learn More About Benefits
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Current Openings Section */}
      <section id="openings" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Current Openings</h2>
            <p className="section-subtitle mx-auto">
              Explore our current job opportunities and find your perfect role.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full">
                <div className="mb-4">
                  <div className="inline-block px-3 py-1 text-xs font-medium text-felom-blue-600 bg-felom-blue-50 rounded-full">
                    {job.department}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                <div className="mt-auto">
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <MapPin size={14} className="mr-1" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <Briefcase size={14} className="mr-1" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar size={14} className="mr-1" />
                    <span>Posted: {job.posted}</span>
                  </div>
                  
                  <Link to={`/careers/${job.id}`} className="text-felom-blue-600 font-medium hover:text-felom-blue-700 flex items-center">
                    View Job Details <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-felom-blue-50 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold mb-3 text-felom-blue-900">Don't see the right fit?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always on the lookout for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button className="bg-felom-blue-600 hover:bg-felom-blue-700">
              Submit Your Resume
            </Button>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-felom-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Hiring Process</h2>
            <p className="text-xl md:text-2xl font-medium mb-8 text-gray-300 max-w-2xl mx-auto">
              What to expect when you apply for a role at Felom.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-felom-blue-800 p-6 rounded-xl relative">
              <div className="absolute -top-5 -left-5 bg-felom-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">Application</h3>
              <p className="text-gray-300">
                Submit your application through our online portal. We review all applications thoroughly.
              </p>
            </div>
            
            <div className="bg-felom-blue-800 p-6 rounded-xl relative">
              <div className="absolute -top-5 -left-5 bg-felom-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">Initial Screening</h3>
              <p className="text-gray-300">
                Our recruitment team will conduct an initial phone or video interview to learn more about you.
              </p>
            </div>
            
            <div className="bg-felom-blue-800 p-6 rounded-xl relative">
              <div className="absolute -top-5 -left-5 bg-felom-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">In-depth Interview</h3>
              <p className="text-gray-300">
                Meet with the hiring manager and team members for a more detailed discussion about the role.
              </p>
            </div>
            
            <div className="bg-felom-blue-800 p-6 rounded-xl relative">
              <div className="absolute -top-5 -left-5 bg-felom-orange-500 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-4">Offer & Onboarding</h3>
              <p className="text-gray-300">
                If selected, you'll receive an offer and begin our comprehensive onboarding process.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle mx-auto">
              Hear from some of our team members about their experience working at Felom.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Sarah N." 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-felom-blue-900">Sarah N.</h3>
                  <p className="text-felom-orange-600">Civil Engineer</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Working at Felom has given me the opportunity to grow professionally while contributing to meaningful projects that improve lives across Uganda."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Michael O." 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-felom-blue-900">Michael O.</h3>
                  <p className="text-felom-orange-600">Supply Chain Manager</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The collaborative culture at Felom allows us to solve complex challenges together. I appreciate the emphasis on innovation and continuous improvement."
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Grace K." 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-felom-blue-900">Grace K.</h3>
                  <p className="text-felom-orange-600">Solar Specialist</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Being part of Felom's renewable energy team has been incredibly rewarding. We're bringing sustainable solutions to communities that need them most."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-felom-blue-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-felom-blue-900">Ready to Join Our Team?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
              Explore our current openings and take the first step towards a rewarding career at Felom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-felom-blue-600 hover:bg-felom-blue-700 text-white px-8 py-6 rounded-md font-medium text-lg">
                <a href="#openings">View All Openings</a>
              </Button>
              <Button variant="outline" className="border-felom-blue-600 text-felom-blue-600 hover:bg-felom-blue-50 px-8 py-6 rounded-md font-medium text-lg">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Careers;

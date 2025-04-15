
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Felom Completes Major Solar Installation for Rural Healthcare Centers",
      summary: "We've successfully completed a solar power installation project for 10 rural healthcare centers, improving healthcare access across Eastern Uganda.",
      date: "April 10, 2025",
      author: "Communications Team",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Projects",
      featured: true
    },
    {
      id: 2,
      title: "Felom Awarded Major Government Contract for Infrastructure Development",
      summary: "Felom has been selected for a significant government infrastructure development project that will enhance transportation networks in Northern Uganda.",
      date: "March 28, 2025",
      author: "Press Office",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Business"
    },
    {
      id: 3,
      title: "Felom Partners with Leading Medical Equipment Manufacturer",
      summary: "We've established a strategic partnership with a global medical equipment manufacturer to improve healthcare equipment supply chains in East Africa.",
      date: "March 15, 2025",
      author: "Partnerships Team",
      image: "https://images.unsplash.com/photo-1516549655220-e7986066c7ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Partnerships"
    },
    {
      id: 4,
      title: "Felom Launches New Renewable Energy Division",
      summary: "We're expanding our renewable energy capabilities with a dedicated division focused on solar, wind, and sustainable energy solutions.",
      date: "February 22, 2025",
      author: "Executive Office",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Company News"
    },
    {
      id: 5,
      title: "Felom's CEO Named Among Top Business Leaders in Uganda",
      summary: "Our CEO has been recognized as one of Uganda's top business leaders for contributions to infrastructure development and job creation.",
      date: "February 10, 2025",
      author: "Communications Team",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Recognition"
    },
    {
      id: 6,
      title: "Felom Completes Office Complex for International Organization",
      summary: "We've successfully delivered a state-of-the-art office complex for a major international organization in Kampala.",
      date: "January 18, 2025",
      author: "Projects Team",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Projects"
    }
  ];

  const pressReleases = [
    {
      title: "Felom Secures $5M in Funding to Expand Operations",
      date: "March 5, 2025"
    },
    {
      title: "Felom Announces New Board Members",
      date: "February 15, 2025"
    },
    {
      title: "Felom Reports 40% Growth in 2024",
      date: "January 30, 2025"
    },
    {
      title: "Felom Launches Apprenticeship Program",
      date: "January 12, 2025"
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
              News <span className="text-felom-orange-500">Room</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Stay updated with the latest news, announcements, and stories from Felom.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured News */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={newsItems.find(item => item.featured)?.image} 
                  alt="Featured news" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="uppercase tracking-wide text-sm text-felom-orange-500 font-medium mb-1">
                  Featured News
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-felom-blue-900 mb-4">
                  {newsItems.find(item => item.featured)?.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {newsItems.find(item => item.featured)?.summary}
                </p>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar size={16} className="mr-1" />
                    <span>{newsItems.find(item => item.featured)?.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{newsItems.find(item => item.featured)?.author}</span>
                  </div>
                </div>
                <Button className="bg-felom-blue-600 hover:bg-felom-blue-700">
                  Read Full Story
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* News Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-3/4">
              <h2 className="text-2xl font-bold text-felom-blue-900 mb-8">Latest News</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {newsItems.filter(item => !item.featured).map((item) => (
                  <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 text-xs font-medium text-felom-blue-600 bg-felom-blue-50 rounded-full mb-3">
                        {item.category}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.summary}</p>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <div className="flex items-center mr-4">
                          <Calendar size={14} className="mr-1" />
                          <span>{item.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{item.author}</span>
                        </div>
                      </div>
                      <Link to={`/news/${item.id}`} className="text-felom-blue-600 font-medium hover:text-felom-blue-700 flex items-center">
                        Read more <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-felom-blue-600 text-felom-blue-600 hover:bg-felom-blue-50">
                  Load More News
                </Button>
              </div>
            </div>
            
            <div className="md:w-1/4 mt-8 md:mt-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-semibold mb-4 text-felom-blue-900">Press Releases</h3>
                <div className="space-y-4">
                  {pressReleases.map((release, index) => (
                    <div key={index} className="pb-4 border-b border-gray-100 last:border-0">
                      <Link to="#" className="text-felom-blue-900 hover:text-felom-blue-600 font-medium transition-colors">
                        {release.title}
                      </Link>
                      <div className="text-sm text-gray-500 mt-1">
                        <Calendar size={14} className="inline-block mr-1" />
                        {release.date}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link to="#" className="text-felom-blue-600 font-medium hover:text-felom-blue-700 flex items-center">
                    View all press releases <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4 text-felom-blue-900">Media Inquiries</h3>
                <p className="text-gray-600 mb-4">
                  For media inquiries, interview requests, or additional information, please contact our press office.
                </p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Email:</strong> press@felom.co.ug</p>
                  <p><strong>Phone:</strong> +256 700 123456</p>
                </div>
              </div>
              
              <div className="bg-felom-blue-50 rounded-xl p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4 text-felom-blue-900">Newsletter</h3>
                <p className="text-gray-600 mb-4">
                  Subscribe to our newsletter to receive the latest news and updates.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-felom-blue-500"
                  />
                  <Button className="w-full bg-felom-blue-600 hover:bg-felom-blue-700">
                    Subscribe
                  </Button>
                </div>
              </div>
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

export default News;

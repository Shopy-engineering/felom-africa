
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactCTA from '@/components/ContactCTA';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Sustainable Construction in East Africa",
      summary: "Exploring innovative approaches to sustainable construction that are reshaping the industry in East Africa.",
      date: "April 5, 2025",
      author: "David Okello",
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Construction",
      tags: ["Sustainability", "Construction", "Innovation"]
    },
    {
      id: 2,
      title: "How Solar Energy is Transforming Rural Uganda",
      summary: "The impact of solar energy solutions on rural communities and the potential for further growth and development.",
      date: "March 22, 2025",
      author: "Grace Kigozi",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Renewable Energy",
      tags: ["Solar", "Rural Development", "Energy"]
    },
    {
      id: 3,
      title: "Best Practices for Building Maintenance in Tropical Climates",
      summary: "Practical guidance for maintaining buildings and facilities in Uganda's tropical climate to ensure longevity and efficiency.",
      date: "March 10, 2025",
      author: "John Mukasa",
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Maintenance",
      tags: ["Building Maintenance", "Tropical Climate", "Efficiency"]
    },
    {
      id: 4,
      title: "The Role of Technology in Modern Construction Projects",
      summary: "How digital tools and technologies are revolutionizing construction processes and outcomes in Uganda.",
      date: "February 28, 2025",
      author: "Sarah Namukasa",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Technology",
      tags: ["Technology", "Construction", "Digital Transformation"]
    },
    {
      id: 5,
      title: "Optimizing Supply Chains for Medical Equipment in East Africa",
      summary: "Strategies for improving the efficiency and reliability of medical equipment supply chains across East Africa.",
      date: "February 15, 2025",
      author: "Robert Kagwa",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Supply Chain",
      tags: ["Healthcare", "Supply Chain", "Logistics"]
    },
    {
      id: 6,
      title: "Essential Office Equipment for the Modern Workplace",
      summary: "Recommendations for essential office equipment and furnishings to create productive and comfortable work environments.",
      date: "January 30, 2025",
      author: "Esther Namutebi",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Office Solutions",
      tags: ["Office", "Equipment", "Ergonomics"]
    }
  ];

  const categories = [
    "Construction",
    "Renewable Energy",
    "Maintenance",
    "Technology",
    "Supply Chain",
    "Office Solutions"
  ];

  const tags = [
    "Sustainability",
    "Construction",
    "Innovation",
    "Solar",
    "Rural Development",
    "Energy",
    "Building Maintenance",
    "Tropical Climate",
    "Efficiency",
    "Technology",
    "Digital Transformation",
    "Healthcare",
    "Supply Chain",
    "Logistics",
    "Office",
    "Equipment",
    "Ergonomics"
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-felom-blue-900 mb-6">
              Felom <span className="text-felom-orange-500">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Insights, guides, and perspectives on construction, maintenance, and supply chain management.
            </p>
            <div className="w-full max-w-2xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-felom-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            <div className="lg:w-3/4">
              <h2 className="text-2xl font-bold text-felom-blue-900 mb-8">
                {searchQuery ? `Search Results for: "${searchQuery}"` : "Latest Articles"}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 text-xs font-medium text-felom-blue-600 bg-felom-blue-50 rounded-full mb-3">
                        {post.category}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">{post.title}</h3>
                      <p className="text-gray-600 mb-4">{post.summary}</p>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <div className="flex items-center mr-4">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User size={14} className="mr-1" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <Link to={`/blog/${post.id}`} className="text-felom-blue-600 font-medium hover:text-felom-blue-700 flex items-center">
                        Read article <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              {filteredPosts.length === 0 && (
                <div className="bg-felom-blue-50 p-8 rounded-xl text-center">
                  <h3 className="text-xl font-semibold mb-3 text-felom-blue-900">No articles found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any articles matching your search criteria. Please try a different search term.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-felom-blue-600 text-felom-blue-600 hover:bg-felom-blue-50"
                    onClick={() => setSearchQuery('')}
                  >
                    View all articles
                  </Button>
                </div>
              )}
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="border-felom-blue-600 text-felom-blue-600 hover:bg-felom-blue-50">
                  Load More Articles
                </Button>
              </div>
            </div>
            
            <div className="lg:w-1/4 mt-8 lg:mt-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-felom-blue-900">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => setSearchQuery(category)}
                        className="text-gray-600 hover:text-felom-blue-600 transition-colors"
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4 text-felom-blue-900">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(tag)}
                      className="inline-block px-3 py-1 text-sm text-felom-blue-600 bg-felom-blue-50 rounded-full hover:bg-felom-blue-100 transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-felom-blue-900 text-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Subscribe to Updates</h3>
                <p className="mb-4 text-gray-300">
                  Get the latest articles, guides, and insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="w-full px-4 py-2 bg-felom-blue-800 border border-felom-blue-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-felom-orange-500"
                  />
                  <Button className="w-full bg-felom-orange-500 hover:bg-felom-orange-600 text-white">
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

export default Blog;

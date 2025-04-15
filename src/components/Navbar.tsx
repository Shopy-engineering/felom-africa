
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-bold text-2xl text-felom-blue-600">
              Felom<span className="text-felom-orange-500">.</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            <Link to="/" className="text-gray-700 hover:text-felom-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-felom-blue-600 font-medium transition-colors">
              About Us
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-felom-blue-600 font-medium transition-colors">
              Services
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-felom-blue-600 font-medium transition-colors">
              News Room
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-felom-blue-600 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-felom-blue-600 font-medium transition-colors">
              Careers
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-felom-blue-600 hover:bg-felom-blue-700">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-felom-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-felom-blue-600 font-medium px-2 py-1 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-felom-blue-600 font-medium px-2 py-1 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-felom-blue-600 font-medium px-2 py-1 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/news" 
                className="text-gray-700 hover:text-felom-blue-600 font-medium px-2 py-1 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                News Room
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-felom-blue-600 font-medium px-2 py-1 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/careers" 
                className="text-gray-700 hover:text-felom-blue-600 font-medium px-2 py-1 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              <Button className="bg-felom-blue-600 hover:bg-felom-blue-700 w-full">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

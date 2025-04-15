
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-felom-blue-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="font-bold text-2xl mb-4">
              Felom<span className="text-felom-orange-500">.</span>
            </div>
            <p className="text-gray-300 mb-4">
              Felom Co. Ltd is a leading Ugandan company providing comprehensive construction, 
              maintenance, and supply chain solutions across East Africa.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                  News Room
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                <Link to="/services">Construction & Engineering</Link>
              </li>
              <li className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                <Link to="/services">Maintenance & Repairs</Link>
              </li>
              <li className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                <Link to="/services">Solar & Renewable Energy</Link>
              </li>
              <li className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                <Link to="/services">Equipment & Supplies</Link>
              </li>
              <li className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                <Link to="/services">Medical & Laboratory</Link>
              </li>
              <li className="text-gray-300 hover:text-felom-orange-500 transition-colors">
                <Link to="/services">Office & Furniture</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-felom-orange-500 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Plot 123, Kampala Business Park, Uganda
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-felom-orange-500 flex-shrink-0" />
                <p className="text-gray-300">+256 700 123456</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-felom-orange-500 flex-shrink-0" />
                <p className="text-gray-300">info@felom.co.ug</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-felom-blue-800 mt-12 pt-6 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Felom Co. Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-felom-orange-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-felom-orange-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

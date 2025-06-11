import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">RiseGreen</span>
            </div>
            <p className="text-primary-200 mb-4">
              Turning waste into wealth. Premium organic compost for sustainable farming in Nigeria.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-300 hover:text-white transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-primary-200 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/products" className="text-primary-200 hover:text-white transition-colors duration-200">Products</Link></li>
              <li><Link to="/blog" className="text-primary-200 hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link to="/faq" className="text-primary-200 hover:text-white transition-colors duration-200">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-primary-200 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-primary-200 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/contact" className="text-primary-200 hover:text-white transition-colors duration-200">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-400" />
                <span className="text-primary-200">Kano, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400" />
                <span className="text-primary-200">+234 810 343 0083</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400" />
                <span className="text-primary-200">risegreencompost@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-primary-300">
            © 2025 RiseGreen Compost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
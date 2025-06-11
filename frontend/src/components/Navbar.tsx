import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Bot } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/blog', label: 'Blog' },
    { path: '/ai-assistant', label: 'AI Assistant', icon: <Bot className="h-4 w-4" /> },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-primary-900">RiseGreen Compost</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
              >
                {link.icon && <span>{link.icon}</span>}
                <span>{link.label}</span>
              </Link>
            ))}
            <Link
              to="/order"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center space-x-2 ${
                    location.pathname === link.path
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon && <span>{link.icon}</span>}
                  <span>{link.label}</span>
                </Link>
              ))}
              <Link
                to="/order"
                className="block px-3 py-2 text-base font-medium bg-primary-600 text-white rounded-lg mx-3 mt-4 text-center hover:bg-primary-700 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
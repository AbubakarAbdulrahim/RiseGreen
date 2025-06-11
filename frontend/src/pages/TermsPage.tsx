import React from 'react';
import { Shield, FileText, AlertCircle } from 'lucide-react';

const TermsPage = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using the RiseGreen Compost website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.`
    },
    {
      title: '2. Products and Services',
      content: `RiseGreen Compost provides organic compost and fertilizer products for agricultural use. All product descriptions, specifications, and pricing information are subject to change without notice. We reserve the right to discontinue any product at any time.`
    },
    {
      title: '3. Ordering and Payment',
      content: `Orders can be placed through our website, phone, or WhatsApp. Payment terms vary based on location and order size. For Lagos deliveries, cash on delivery is available. All other locations require 50% upfront payment. Prices are in Nigerian Naira and include applicable taxes.`
    },
    {
      title: '4. Delivery Terms',
      content: `Delivery times are estimates and may vary based on location, weather conditions, and product availability. Free delivery is provided within Lagos for orders above ₦50,000. Delivery charges apply to other locations as specified during order placement.`
    },
    {
      title: '5. Product Quality and Returns',
      content: `We guarantee the quality of our organic compost products. If you receive a defective product, please contact us within 7 days of delivery. We will replace the product or provide a full refund. Customer satisfaction is our priority.`
    },
    {
      title: '6. Limitation of Liability',
      content: `RiseGreen Compost shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use of our products. Our liability is limited to the purchase price of the product.`
    },
    {
      title: '7. Intellectual Property',
      content: `All content on this website, including text, graphics, logos, and images, is the property of RiseGreen Compost and is protected by copyright laws. You may not reproduce, distribute, or use any content without our written permission.`
    },
    {
      title: '8. Privacy',
      content: `Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal information when you use our services.`
    },
    {
      title: '9. Changes to Terms',
      content: `We reserve the right to modify these terms at any time. Changes will be posted on this page with the updated date. Your continued use of our services after changes are made constitutes acceptance of the new terms.`
    },
    {
      title: '10. Contact Information',
      content: `If you have any questions about these Terms of Service, please contact us at info@risegreen.ng or call +234 803 123 4567.`
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary-600 p-3 rounded-full">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Terms of Service
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto animate-slide-up">
              Please read these terms carefully before using our services
            </p>
            <div className="mt-6 text-sm text-primary-300">
              Last updated: January 15, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Important Notice */}
          <div className="bg-secondary-50 border-l-4 border-secondary-500 p-6 mb-8 rounded-r-lg animate-fade-in">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-secondary-600 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-secondary-800 mb-2">Important Notice</h3>
                <p className="text-secondary-700">
                  These terms constitute a legally binding agreement between you and RiseGreen Compost. 
                  By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>

          {/* Terms Sections */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h2 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                    <span className="bg-primary-100 text-primary-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {index + 1}
                    </span>
                    {section.title}
                  </h2>
                  <div className="ml-11 text-gray-700 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-primary-900">Consumer Protection</h3>
              </div>
              <p className="text-gray-700 text-sm">
                We are committed to fair business practices and consumer protection. 
                All our terms comply with Nigerian consumer protection laws and regulations.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-primary-600 mr-2" />
                <h3 className="text-lg font-semibold text-primary-900">Questions?</h3>
              </div>
              <p className="text-gray-700 text-sm mb-3">
                Have questions about our terms? We're here to help clarify any concerns you may have.
              </p>
              <a 
                href="/contact" 
                className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
              >
                Contact our support team →
              </a>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className="mt-8 bg-primary-900 text-white rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold mb-2">Acknowledgment</h3>
            <p className="text-primary-200">
              By continuing to use RiseGreen Compost services, you acknowledge that you have read 
              and understood these Terms of Service and agree to be legally bound by them.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
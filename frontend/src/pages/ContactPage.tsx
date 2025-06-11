import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send data to your backend
    console.log('Contact form submitted:', formData);
    
    // For demo purposes, we'll just show a success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Our Location',
      details: ['Kano, Nigeria', 'Serving all 36 states'],
      color: 'text-primary-600'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone Numbers',
      details: ['+234 810 343 0083', '+234 816 992 0252'],
      color: 'text-green-600'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Address',
      details: ['risegreencompost@gmail.com', 'orders@risegreencompost.ng'],
      color: 'text-blue-600'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 4:00 PM'],
      color: 'text-secondary-600'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Product Information',
    'Bulk Orders',
    'Delivery Questions',
    'Technical Support',
    'Partnership Opportunity',
    'Feedback/Complaint',
    'Media Inquiry'
  ];

  const faqs = [
    {
      question: 'What is your minimum order quantity?',
      answer: 'We accept orders starting from 1 bag (50kg). However, bulk orders of 10+ bags qualify for discounted pricing and free delivery within Lagos.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Delivery typically takes 3-5 business days within Lagos and 5-7 business days for other states, depending on location and product availability.'
    },
    {
      question: 'Do you offer payment on delivery?',
      answer: 'Yes, we accept cash on delivery for orders within Lagos. For other locations, we require 50% upfront payment with the balance payable on delivery.'
    },
    {
      question: 'Can I visit your facility?',
      answer: 'Absolutely! We welcome farm visits and facility tours. Please contact us in advance to schedule your visit and ensure our team is available to guide you.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto animate-slide-up">
              Have questions about our products or need expert advice? We're here to help you make the best choices for your farm.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${info.color} mb-4 flex justify-center`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-8 animate-fade-in">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="+234 000 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="youremail@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>{subject}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">Visit Our Location</h3>
                    <p className="text-gray-600">Kano, Nigeria</p>
                    <p className="text-sm text-gray-500 mt-2">Interactive map will be integrated here</p>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <details key={index} className="group">
                      <summary className="flex justify-between items-center cursor-pointer p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors duration-200">
                        <span className="font-medium text-primary-900">{faq.question}</span>
                        <span className="text-primary-600 group-open:rotate-180 transition-transform duration-200">
                          ▼
                        </span>
                      </summary>
                      <div className="p-4 text-gray-700 text-sm leading-relaxed">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Order?
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Don't wait! Get premium organic compost delivered to your farm today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/order"
              className="bg-secondary-500 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 shadow-lg"
            >
              Place Your Order
            </a>
            <a
              href="https://wa.me/+2348103430083?text=Hello! I need more information about RiseGreen Compost products."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
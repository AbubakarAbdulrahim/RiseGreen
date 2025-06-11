import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Leaf, Users, TrendingUp, Shield } from 'lucide-react';

const HomePage = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Cheaper than chemical fertilizers',
      description: 'Save up to 60% on farming costs while improving soil health'
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Safe for soil and health',
      description: '100% organic with no harmful chemicals or synthetic additives'
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: 'Climate-smart solution',
      description: 'Reduces waste and carbon footprint while enhancing sustainability'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Trusted by farmers',
      description: 'Over 100+ satisfied farmers across Nigeria trust our quality'
    }
  ];

  const stats = [
    { number: '20+', label: 'Tons of Waste Recycled' },
    { number: '100+', label: 'Farmers Served' },
    { number: '95%', label: 'Customer Satisfaction' },
    { number: '60%', label: 'Cost Savings' }
  ];

  const testimonials = [
    {
      name: 'Amina Yusuf',
      location: 'Kano State',
      text: 'RiseGreen compost transformed my farm. My tomatoes are bigger and healthier than ever!',
      rating: 5
    },
    {
      name: 'Chidi Okafor',
      location: 'Anambra State',
      text: 'Amazing quality and affordable price. My maize yield increased by 40% this season.',
      rating: 5
    },
    {
      name: 'Fatima Ibrahim',
      location: 'Kaduna State',
      text: 'Best investment I made for my vegetables. The soil is now rich and fertile.',
      rating: 5
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Turning Waste into Wealth — 
                <span className="text-secondary-400"> One Bag at a Time</span>
              </h1>
              <p className="text-xl text-primary-200 mb-8">
                Affordable, Natural and Powerful premium organic compost that transforms your farm and protects our environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/order"
                  className="bg-secondary-500 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 flex items-center justify-center group shadow-lg"
                >
                  Order Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link
                  to="/products"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300 text-center"
                >
                  View Products
                </Link>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="public/images/riseleaves.jpg"
                alt="Organic compost farming"
                className="rounded-md shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Why Choose RiseGreen?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the highest quality organic compost while supporting sustainable farming practices across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary-600 mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              What Our Farmers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from farmers who've transformed their harvests with RiseGreen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-50 p-6 rounded-xl shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-secondary-500 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-primary-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Farm?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied farmers who've boosted their yields and saved money with RiseGreen Compost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/order"
              className="bg-secondary-500 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 shadow-lg"
            >
              Start Your Order
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300"
            >
              Get Expert Advice
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
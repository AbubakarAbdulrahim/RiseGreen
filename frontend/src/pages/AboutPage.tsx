import React from 'react';
import { Leaf, Recycle, Users, Target, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const timeline = [
    {
      year: '2021',
      title: 'Company Founded',
      description: 'Started with a vision to turn agricultural waste into valuable compost'
    },
    {
      year: '2022',
      title: 'First Production Facility',
      description: 'Established our first composting facility in Kano'
    },
    {
      year: '2023',
      title: '100+ Farmers Served',
      description: 'Reached our milestone of serving over 1000 farmers'
    },
    {
      year: '2024',
      title: 'Expansion Across States',
      description: 'Extended operations to cover 10 states across Nigeria'
    },
    {
      year: '2025',
      title: 'Sustainability Leadership',
      description: 'Recognized as a leading sustainable agriculture company'
    }
  ];

  const values = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: 'Sustainability',
      description: 'We believe in creating solutions that benefit both farmers and the environment'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'Supporting local farmers and communities is at the heart of everything we do'
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Quality',
      description: 'We maintain the highest standards in our composting process and products'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Continuously improving our methods to deliver better results for farmers'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              About RiseGreen Compost
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto animate-slide-up">
              We're on a mission to revolutionize farming in Nigeria by transforming organic waste into premium compost that nourishes soil and boosts crop yields.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At RiseGreen, we believe that sustainable farming is the key to Nigeria's agricultural future. Our mission is to provide farmers with high-quality, affordable organic compost that improves soil health, increases crop yields, and protects the environment.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We're committed to creating a circular economy where organic waste becomes a valuable resource, reducing environmental impact while supporting agricultural productivity.
              </p>
              <div className="flex items-center space-x-2 text-primary-600">
                <Recycle className="h-6 w-6" />
                <span className="font-semibold">Waste to Wealth • Soil to Success</span>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://img.freepik.com/free-photo/shovel-inside-soil-bag_23-2148175878.jpg?ga=GA1.1.1866593843.1749747925&semt=ais_hybrid&w=740"
                alt="Sustainable farming"
                style={{ maxWidth: '100%', height: 'auto' }}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Composting Process */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              How We Make Our Compost
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our scientifically-proven composting process ensures maximum nutrient retention and soil health benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Collection</h3>
              <p className="text-gray-700">
                We collect organic waste from farms, markets, and households, ensuring only high-quality materials are used.
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Processing</h3>
              <p className="text-gray-700">
                Through controlled decomposition, we transform organic waste into nutrient-rich compost over 90 days.
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Quality Testing</h3>
              <p className="text-gray-700">
                Every batch is tested for nutrient content, pH levels, and safety before packaging and delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From a small startup to Nigeria's trusted compost supplier
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary-200"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg animate-fade-in" 
                       style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="text-2xl font-bold text-primary-600 mb-2">{item.year}</div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center animate-fade-in" 
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-xl text-primary-200 mb-12">
            Making a difference across Nigeria, one farm at a time
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-secondary-400 mb-2">20+ Tons</div>
              <div className="text-primary-200">Organic Waste Recycled</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-secondary-400 mb-2">100+ Farmers</div>
              <div className="text-primary-200">Lives Transformed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-secondary-400 mb-2">36 States</div>
              <div className="text-primary-200">Across Nigeria</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
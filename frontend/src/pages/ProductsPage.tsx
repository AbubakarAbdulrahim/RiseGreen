import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Leaf, TrendingUp, Shield, Package } from 'lucide-react';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: '100% Natural Compost',
      price: '₦15,000',
      weight: '50kg',
      image: 'https://images.pexels.com/photos/4503735/pexels-photo-4503735.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: [
        'Pure organic matter',
        'Improves soil structure',
        'Increases water retention',
        'Boosts microbial activity',
        'Long-lasting nutrition'
      ],
      description: 'Our premium 100% natural compost is made from carefully selected organic materials through our proprietary composting process. Perfect for organic farming and sustainable agriculture.',
      features: [
        'NPK ratio optimized for Nigerian soils',
        'pH balanced (6.5-7.5)',
        'Rich in humus',
        'Pathogen-free guarantee'
      ]
    },
    {
      id: 2,
      name: 'Compost + Fertilizer Blend',
      price: '₦25,000',
      weight: '50kg',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
      benefits: [
        'Fast-acting nutrients',
        'Enhanced growth boost',
        'Improved crop quality',
        'Higher yield potential',
        'Organic certification safe'
      ],
      description: 'Our premium blend combines our organic compost with carefully selected natural fertilizers in a 3:1 ratio, providing both immediate nutrition and long-term soil health benefits.',
      features: [
        'Balanced 3:1 compost-fertilizer ratio',
        'Quick release nutrients',
        'Organic components only',
        'Suitable for all crop types'
      ]
    }
  ];

  const usageGuide = [
    {
      crop: 'Vegetables',
      application: '2-3 kg per square meter',
      timing: 'Before planting and mid-season'
    },
    {
      crop: 'Cereals',
      application: '1-2 kg per square meter',
      timing: 'During land preparation'
    },
    {
      crop: 'Root Crops',
      application: '2-4 kg per square meter',
      timing: 'Before planting'
    },
    {
      crop: 'Tree Crops',
      application: '5-10 kg per tree',
      timing: 'Beginning of rainy season'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Premium Organic Compost
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto animate-slide-up">
              Choose from our scientifically formulated compost products designed specifically for Nigerian soil and climate conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.weight}
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-primary-900">{product.name}</h3>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-primary-600">{product.price}</div>
                      <div className="text-sm text-gray-500">per {product.weight}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-primary-900 mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Leaf className="h-4 w-4 text-secondary-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/order"
                    state={{ selectedProduct: product }}
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center group"
                  >
                    <Package className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Add to Order
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Application Guide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the best results with our recommended application rates for different crops.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Crop Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Application Rate</th>
                    <th className="px-6 py-4 text-left font-semibold">Best Timing</th>
                  </tr>
                </thead>
                <tbody>
                  {usageGuide.map((guide, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-primary-50 transition-colors duration-200`}>
                      <td className="px-6 py-4 font-semibold text-primary-900">{guide.crop}</td>
                      <td className="px-6 py-4 text-gray-700">{guide.application}</td>
                      <td className="px-6 py-4 text-gray-700">{guide.timing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Quality Guarantee
            </h2>
            <p className="text-xl text-gray-600">
              Every batch meets our strict quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Lab Tested</h3>
              <p className="text-gray-700">
                Every batch is tested for nutrient content, pH levels, and harmful pathogens before packaging.
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">100% Organic</h3>
              <p className="text-gray-700">
                Made from pure organic materials with no synthetic additives or harmful chemicals.
              </p>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-4">Proven Results</h3>
              <p className="text-gray-700">
                Thousands of farmers have seen improved yields and soil health with our products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Harvest?
          </h2>
          <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
            Choose your ideal compost solution and start seeing results in your next growing season.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/order"
              className="bg-secondary-500 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 shadow-lg"
            >
              Order Now
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

export default ProductsPage;
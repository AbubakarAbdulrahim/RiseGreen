import React, { useState } from 'react';
import { Plus, Minus, Search, HelpCircle, Package, Truck, CreditCard, Leaf } from 'lucide-react';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle className="h-4 w-4" />, count: 20 },
    { id: 'products', name: 'Products', icon: <Package className="h-4 w-4" />, count: 6 },
    { id: 'ordering', name: 'Ordering', icon: <CreditCard className="h-4 w-4" />, count: 5 },
    { id: 'delivery', name: 'Delivery', icon: <Truck className="h-4 w-4" />, count: 4 },
    { id: 'usage', name: 'Usage & Application', icon: <Leaf className="h-4 w-4" />, count: 5 }
  ];

  const faqs = [
    {
      id: 1,
      category: 'products',
      question: 'What is the difference between your two main products?',
      answer: 'Our 100% Natural Compost (₦15,000/50kg) is pure organic matter perfect for organic farming and long-term soil health. The Compost + Fertilizer Blend (₦25,000/50kg) combines our compost with natural fertilizers in a 3:1 ratio, providing both immediate nutrition and long-term soil benefits. Choose the blend for faster results or pure compost for organic certification requirements.'
    },
    {
      id: 2,
      category: 'products',
      question: 'How do I know which product is right for my crops?',
      answer: 'For vegetables and crops needing quick growth, choose our Compost + Fertilizer Blend. For organic farming, tree crops, or long-term soil improvement, our 100% Natural Compost is ideal. Contact us at +234 803 123 4567 for personalized recommendations based on your specific crops and soil conditions.'
    },
    {
      id: 3,
      category: 'products',
      question: 'Is your compost certified organic?',
      answer: 'Yes, our 100% Natural Compost is made entirely from organic materials and meets organic farming standards. We provide certification documents upon request. Our Compost + Fertilizer Blend uses only natural fertilizers and is safe for food production, though it may not qualify for strict organic certification due to the added fertilizer component.'
    },
    {
      id: 4,
      category: 'products',
      question: 'What is the NPK ratio of your products?',
      answer: 'Our 100% Natural Compost typically has an NPK ratio of 1.5-1-1.2, optimized for Nigerian soils. The Compost + Fertilizer Blend has a higher NPK ratio of approximately 3-2-2. Both products also contain essential micronutrients and organic matter that chemical fertilizers lack.'
    },
    {
      id: 5,
      category: 'products',
      question: 'How long does compost last in the soil?',
      answer: 'Our organic compost provides benefits for 6-12 months, depending on soil conditions, rainfall, and crop type. Unlike chemical fertilizers that wash away quickly, organic compost continues to release nutrients slowly and improves soil structure long-term. We recommend reapplication every growing season for optimal results.'
    },
    {
      id: 6,
      category: 'products',
      question: 'Can I mix your compost with other fertilizers?',
      answer: 'Yes, our compost is compatible with other organic fertilizers and soil amendments. However, avoid mixing with chemical fertilizers immediately, as this can disrupt the beneficial microorganisms. If you must use chemical fertilizers, apply them 2-3 weeks after compost application.'
    },
    {
      id: 7,
      category: 'ordering',
      question: 'What is your minimum order quantity?',
      answer: 'We accept orders starting from 1 bag (50kg), making our products accessible to smallholder farmers. However, bulk orders of 10+ bags qualify for volume discounts and free delivery within Lagos. Contact us for special pricing on orders above 50 bags.'
    },
    {
      id: 8,
      category: 'ordering',
      question: 'How can I place an order?',
      answer: 'You can order through our website, WhatsApp (+234 803 123 4567), or by calling us directly. We accept orders 24/7 through WhatsApp and our website. For large orders, we recommend calling to discuss pricing and delivery schedules.'
    },
    {
      id: 9,
      category: 'ordering',
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, mobile money, cash on delivery (Lagos only), and mobile payment platforms. For orders outside Lagos, we require 50% upfront payment with the balance payable on delivery. All prices are in Nigerian Naira.'
    },
    {
      id: 10,
      category: 'ordering',
      question: 'Can I cancel or modify my order?',
      answer: 'Yes, you can cancel or modify your order within 24 hours of placement, provided it hasn\'t been dispatched. Contact us immediately at +234 803 123 4567. For orders already in transit, cancellation may incur delivery charges.'
    },
    {
      id: 11,
      category: 'ordering',
      question: 'Do you offer bulk discounts?',
      answer: 'Yes! Orders of 10+ bags receive a 5% discount, 25+ bags get 10% off, and 50+ bags qualify for 15% discount plus free delivery nationwide. Contact us for custom pricing on orders above 100 bags.'
    },
    {
      id: 12,
      category: 'delivery',
      question: 'How long does delivery take?',
      answer: 'Delivery typically takes 3-5 business days within Lagos and 5-7 business days for other states. During peak farming seasons (March-May, September-November), delivery may take 1-2 additional days due to high demand.'
    },
    {
      id: 13,
      category: 'delivery',
      question: 'Do you deliver nationwide?',
      answer: 'Yes, we deliver to all 36 states in Nigeria plus FCT. Delivery charges vary by location and are calculated based on distance and order size. Free delivery is available within Lagos for orders above ₦50,000.'
    },
    {
      id: 14,
      category: 'delivery',
      question: 'What are your delivery charges?',
      answer: 'Lagos: Free for orders ₦50,000+, otherwise ₦2,000-5,000 depending on location. Southwest states: ₦5,000-8,000. Other states: ₦8,000-15,000. Exact charges are provided during order confirmation.'
    },
    {
      id: 15,
      category: 'delivery',
      question: 'Can I track my delivery?',
      answer: 'Yes, once your order is dispatched, you\'ll receive tracking information via SMS and WhatsApp. You can also call our customer service for real-time updates on your delivery status.'
    },
    {
      id: 16,
      category: 'usage',
      question: 'How much compost should I use per hectare?',
      answer: 'For most crops, we recommend 2-4 tons per hectare (4-8 bags per hectare). Vegetables may need 3-5 tons/hectare, while tree crops require 5-10kg per tree. Soil testing can help determine exact requirements for your specific conditions.'
    },
    {
      id: 17,
      category: 'usage',
      question: 'When is the best time to apply compost?',
      answer: 'Apply compost 2-4 weeks before planting to allow nutrients to integrate with soil. For existing crops, apply during the early growth stage. In Nigeria, ideal application times are just before the rainy season (March-April) or during land preparation.'
    },
    {
      id: 18,
      category: 'usage',
      question: 'How do I apply the compost to my farm?',
      answer: 'Spread compost evenly across the soil surface and incorporate into the top 15-20cm using a hoe or tractor. For row crops, apply in furrows. For tree crops, apply in a circle around the base. Water lightly after application if rain is not expected.'
    },
    {
      id: 19,
      category: 'usage',
      question: 'Can I use compost for container gardening?',
      answer: 'Absolutely! Mix our compost with regular soil in a 1:2 ratio for containers. For potted plants, use 1 part compost to 3 parts potting soil. This provides excellent drainage and nutrition for vegetables, herbs, and ornamental plants.'
    },
    {
      id: 20,
      category: 'usage',
      question: 'Will compost attract pests to my farm?',
      answer: 'Our properly composted products are fully decomposed and do not attract pests. In fact, healthy soil from compost use often reduces pest problems by promoting beneficial microorganisms and stronger plant immunity. Avoid fresh, uncomposted organic matter which can attract pests.'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="pt-16 min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary-600 p-3 rounded-full">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto animate-slide-up">
              Find answers to common questions about our organic compost products, ordering, and farming advice.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                <span className={selectedCategory === category.id ? 'text-white' : 'text-primary-600'}>
                  {category.icon}
                </span>
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No questions found</h3>
                <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
              </div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full px-6 py-4 text-left hover:bg-primary-50 transition-colors duration-200 focus:outline-none focus:bg-primary-50"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-primary-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFAQ === faq.id ? (
                          <Minus className="h-5 w-5 text-primary-600" />
                        ) : (
                          <Plus className="h-5 w-5 text-primary-600" />
                        )}
                      </div>
                    </div>
                  </button>
                  
                  {openFAQ === faq.id && (
                    <div className="px-6 pb-4 border-t border-gray-100">
                      <div className="pt-4 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Our farming experts are here to help you make the best decisions for your crops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/ai-assistant"
              className="bg-secondary-500 text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-secondary-400 transition-all duration-300 shadow-lg"
            >
              Ask AI Assistant
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300"
            >
              Contact Expert
            </a>
            <a
              href="https://wa.me/2348103430083?text=Hello! I have a question about RiseGreen Compost products."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
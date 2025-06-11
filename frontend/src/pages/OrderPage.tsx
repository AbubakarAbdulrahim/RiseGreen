import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Package, User, MapPin, Phone, Calculator, CheckCircle } from 'lucide-react';

const OrderPage = () => {
  const location = useLocation();
  const selectedProduct = location.state?.selectedProduct;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    productType: selectedProduct ? selectedProduct.name : '',
    quantity: 1,
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const products = [
    { name: '100% Natural Compost', price: 15000 },
    { name: 'Compost + Fertilizer Blend', price: 25000 }
  ];

  const states = [
    'Kano', 'Lagos', 'Kaduna', 'Anambra', 'Rivers', 'Oyo', 'Imo', 'Ogun', 'Plateau', 'Cross River',
    'Akwa Ibom', 'Delta', 'Sokoto', 'Borno', 'Osun', 'Kwara', 'Edo', 'Abia', 'Adamawa', 'Bauchi',
    'Bayelsa', 'Benue', 'Ebonyi', 'Ekiti', 'Enugu', 'Gombe', 'Jigawa', 'Kebbi', 'Kogi', 'Nasarawa',
    'Niger', 'Ondo', 'Taraba', 'Yobe', 'Zamfara', 'FCT'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const calculateTotal = () => {
    const selectedProd = products.find(p => p.name === formData.productType);
    if (!selectedProd) return 0;
    return selectedProd.price * formData.quantity;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would send data to your backend
    console.log('Order submitted:', formData);
    
    // For demo purposes, we'll just show a success message
    setIsSubmitted(true);
    
    // You would typically send this data to your Django backend here
    // Example:
    // fetch('/api/orders/', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // });
  };

  const handleWhatsAppOrder = () => {
    const total = calculateTotal();
    const message = `Hello! I would like to place an order:
    
Product: ${formData.productType}
Quantity: ${formData.quantity} bags
Total: ₦${total.toLocaleString()}
Name: ${formData.name}
Location: ${formData.location}
Phone: ${formData.phone}

Please confirm availability and delivery details. Thank you!`;
    
    const phoneNumber = '2348031234567';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-primary-50 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-primary-900 mb-4">Order Submitted Successfully!</h1>
            <p className="text-lg text-gray-700 mb-6">
              Thank you for your order! We've received your request and will contact you within 24 hours to confirm details and arrange delivery.
            </p>
            <div className="bg-primary-50 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-primary-900 mb-2">Next Steps:</h3>
              <ul className="text-left text-gray-700 space-y-1">
                <li>• We'll call you to confirm your order</li>
                <li>• Delivery will be arranged within 3-5 business days</li>
                <li>• Payment on delivery or bank transfer</li>
                <li>• You'll receive tracking information</li>
              </ul>
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
            >
              Continue on WhatsApp
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Place Your Order
            </h1>
            <p className="text-xl text-primary-200 animate-slide-up">
              Get premium organic compost delivered to your farm
            </p>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Form */}
              <div className="lg:col-span-2 p-8">
                <h2 className="text-2xl font-bold text-primary-900 mb-6">Order Details</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="h-4 w-4 inline mr-2" />
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
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="h-4 w-4 inline mr-2" />
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
                        placeholder="+234 803 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="h-4 w-4 inline mr-2" />
                      State/Location *
                    </label>
                    <select
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select your state</option>
                      {states.map(state => (
                        <option key={state} value={state}>{state}</option>
                      ))}
                    </select>
                  </div>

                  {/* Product Selection */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-2">
                        <Package className="h-4 w-4 inline mr-2" />
                        Product Type *
                      </label>
                      <select
                        id="productType"
                        name="productType"
                        required
                        value={formData.productType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      >
                        <option value="">Select product</option>
                        {products.map(product => (
                          <option key={product.name} value={product.name}>
                            {product.name} - ₦{product.price.toLocaleString()}/50kg
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                        <Calculator className="h-4 w-4 inline mr-2" />
                        Quantity (bags) *
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        min="1"
                        required
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Number of bags"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Any special requirements or questions?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Submit Order
                  </button>
                </form>
              </div>

              {/* Order Summary */}
              <div className="bg-primary-50 p-8">
                <h3 className="text-xl font-bold text-primary-900 mb-6">Order Summary</h3>
                
                {formData.productType && (
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-primary-900">{formData.productType}</span>
                        <span className="text-primary-600 font-semibold">
                          ₦{products.find(p => p.name === formData.productType)?.price.toLocaleString()}/bag
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">50kg per bag</div>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Quantity:</span>
                      <span className="font-semibold">{formData.quantity} bags</span>
                    </div>
                    
                    <div className="flex justify-between items-center py-2">
                      <span className="text-gray-700">Total Weight:</span>
                      <span className="font-semibold">{formData.quantity * 50}kg</span>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-primary-900">Total:</span>
                        <span className="text-2xl font-bold text-primary-600">
                          ₦{calculateTotal().toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-8 space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-semibold text-primary-900 mb-2">Delivery Information</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Free delivery within Lagos</li>
                      <li>• Delivery charges apply for other states</li>
                      <li>• 3-5 business days delivery time</li>
                      <li>• Payment on delivery available</li>
                    </ul>
                  </div>
                  
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200"
                  >
                    Quick Order via WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
import React from 'react';
import { Shield, Lock, Eye, UserCheck } from 'lucide-react';

const PrivacyPage = () => {
  const sections = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: '1. Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, place an order, or contact us. This includes:
      
      • Personal information (name, email, phone number, address)
      • Order information (products purchased, delivery details)
      • Payment information (processed securely through our payment partners)
      • Communications (messages, feedback, support requests)`
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: '2. How We Use Your Information',
      content: `We use the information we collect for various purposes, including:
      
      • Processing and fulfilling your orders
      • Communicating with you about your orders and our services
      • Providing customer support and responding to inquiries
      • Improving our products and services
      • Sending you marketing communications (with your consent)
      • Complying with legal obligations`
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: '3. Information Sharing',
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
      
      • With delivery partners to fulfill your orders
      • With payment processors to process transactions
      • With service providers who assist us in operating our business
      • When required by law or to protect our rights
      • In connection with a business transfer or merger`
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: '4. Data Security',
      content: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes:
      
      • Encrypted data transmission (SSL/TLS)
      • Secure server infrastructure
      • Limited access to personal information
      • Regular security audits and updates
      • Employee training on data protection`
    },
    {
      title: '5. Your Rights',
      content: `You have certain rights regarding your personal information:
      
      • Access: You can request copies of your personal data
      • Correction: You can request correction of inaccurate information
      • Deletion: You can request deletion of your personal data
      • Portability: You can request transfer of your data
      • Withdraw consent: You can withdraw consent for marketing communications`
    },
    {
      title: '6. Cookies and Tracking',
      content: `Our website uses cookies and similar tracking technologies to:
      
      • Remember your preferences and settings
      • Analyze website traffic and usage patterns
      • Provide personalized content and advertisements
      • Improve website functionality and user experience
      
      You can control cookie settings through your browser preferences.`
    },
    {
      title: '7. Third-Party Services',
      content: `Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external services. We encourage you to review their privacy policies before providing any personal information.`
    },
    {
      title: '8. Data Retention',
      content: `We retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law. Order information is typically retained for 7 years for accounting and tax purposes.`
    },
    {
      title: '9. Children\'s Privacy',
      content: `Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.`
    },
    {
      title: '10. Changes to This Policy',
      content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after changes are made constitutes acceptance of the new policy.`
    }
  ];

  const principles = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Transparency',
      description: 'We are clear about what information we collect and how we use it.'
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: 'Security',
      description: 'We use industry-standard security measures to protect your data.'
    },
    {
      icon: <UserCheck className="h-8 w-8" />,
      title: 'Control',
      description: 'You have control over your personal information and privacy settings.'
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: 'Minimal Collection',
      description: 'We only collect information necessary to provide our services.'
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
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Privacy Policy
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto animate-slide-up">
              Your privacy is important to us. Learn how we protect and use your information.
            </p>
            <div className="mt-6 text-sm text-primary-300">
              Last updated: January 15, 2024
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600">
              We are committed to protecting your privacy through these core principles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div 
                  key={index} 
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h2 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                    {section.icon && (
                      <span className="bg-primary-100 text-primary-600 p-2 rounded-lg mr-3">
                        {section.icon}
                      </span>
                    )}
                    {section.title}
                  </h2>
                  <div className={`text-gray-700 leading-relaxed whitespace-pre-line ${section.icon ? 'ml-12' : ''}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact for Privacy */}
          <div className="mt-8 bg-primary-900 text-white rounded-xl p-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Have Privacy Questions?</h3>
              <p className="text-primary-200 mb-6 max-w-2xl mx-auto">
                If you have any questions about this Privacy Policy or how we handle your personal information, 
                please don't hesitate to contact us. We're here to help and ensure your privacy is protected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
                >
                  Contact Us
                </a>
                <a
                  href="mailto:privacy@risegreen.ng"
                  className="border-2 border-primary-400 text-primary-200 px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 hover:border-primary-300 transition-colors duration-200"
                >
                  Email Privacy Team
                </a>
              </div>
            </div>
          </div>

          {/* Quick Summary */}
          <div className="mt-8 bg-secondary-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-secondary-800 mb-3">Quick Summary</h3>
            <ul className="text-secondary-700 space-y-2 text-sm">
              <li>• We collect only the information necessary to provide our services</li>
              <li>• We do not sell your personal information to third parties</li>
              <li>• We use industry-standard security measures to protect your data</li>
              <li>• You have control over your personal information and can request its deletion</li>
              <li>• We are transparent about our data practices and privacy policies</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
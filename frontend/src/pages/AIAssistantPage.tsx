import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Leaf, Lightbulb, MessageSquare, Sparkles, Clock, TrendingUp } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AIAssistantPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'assistant',
      content: "Hello! I'm your RiseGreen AI farming assistant. I can help you with compost application, crop recommendations, soil health advice, and farming best practices for Nigerian conditions. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    "How much compost for tomatoes?",
    "Best time to apply compost?",
    "Organic vs chemical fertilizer?",
    "Soil pH for vegetables?",
    "Rainy season farming tips?"
  ];

  const farmingTips = [
    {
      icon: <Leaf className="h-5 w-5" />,
      title: "Soil Health",
      tip: "Test your soil pH before applying compost. Most crops thrive in 6.0-7.0 pH range."
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Yield Boost",
      tip: "Apply compost 2-4 weeks before planting for maximum nutrient availability."
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Timing",
      tip: "Best application time in Nigeria is just before the rainy season (March-April)."
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Compost application questions
    if (lowerMessage.includes('how much') || lowerMessage.includes('quantity') || lowerMessage.includes('application rate')) {
      if (lowerMessage.includes('tomato') || lowerMessage.includes('vegetable')) {
        return "For tomatoes and vegetables, I recommend 2-3 kg of RiseGreen compost per square meter. For a hectare, that's about 4-6 bags (200-300kg). Apply 2 weeks before transplanting and side-dress with additional compost during flowering stage for best results.";
      }
      if (lowerMessage.includes('maize') || lowerMessage.includes('corn')) {
        return "For maize, apply 1-2 kg per square meter (2-4 bags per hectare). Mix the compost into the soil during land preparation. Our Compost + Fertilizer Blend works excellently for maize, providing both immediate and long-term nutrition.";
      }
      if (lowerMessage.includes('cassava')) {
        return "Cassava benefits from 1-1.5 kg of compost per square meter. Apply during land preparation and create mounds with compost mixed in. This improves soil structure and provides slow-release nutrients throughout the growing season.";
      }
      return "Application rates depend on your crop type. Generally: Vegetables (2-3 kg/m²), Cereals (1-2 kg/m²), Root crops (2-4 kg/m²), Tree crops (5-10 kg per tree). What specific crop are you growing?";
    }

    // Timing questions
    if (lowerMessage.includes('when') || lowerMessage.includes('time') || lowerMessage.includes('timing')) {
      return "Best timing for compost application in Nigeria: 1) Just before rainy season (March-April) for maximum nutrient integration, 2) During land preparation, 3) 2-4 weeks before planting. Avoid applying during heavy rains to prevent nutrient leaching.";
    }

    // Product comparison
    if (lowerMessage.includes('difference') || lowerMessage.includes('which product') || lowerMessage.includes('choose')) {
      return "RiseGreen offers two main products: 1) 100% Natural Compost (₦15,000/50kg) - Pure organic matter, perfect for organic farming and long-term soil health. 2) Compost + Fertilizer Blend (₦25,000/50kg) - 3:1 ratio providing immediate nutrition plus long-term benefits. Choose the blend for faster results, pure compost for organic certification.";
    }

    // Soil health questions
    if (lowerMessage.includes('soil') || lowerMessage.includes('ph') || lowerMessage.includes('health')) {
      return "Healthy soil is the foundation of successful farming! Our compost improves soil structure, increases water retention, and adds beneficial microorganisms. Ideal soil pH for most crops is 6.0-7.0. Compost naturally buffers pH and provides slow-release nutrients for 6-12 months.";
    }

    // Organic vs chemical
    if (lowerMessage.includes('organic') || lowerMessage.includes('chemical') || lowerMessage.includes('fertilizer')) {
      return "Organic compost vs chemical fertilizers: Compost provides long-term soil health, improves structure, retains moisture, and feeds beneficial microbes. Chemical fertilizers give quick nutrition but can degrade soil over time. Our compost costs 60% less than chemicals while providing superior long-term benefits!";
    }

    // Pest and disease
    if (lowerMessage.includes('pest') || lowerMessage.includes('disease') || lowerMessage.includes('problem')) {
      return "Healthy soil from compost use naturally reduces pest and disease problems! Compost promotes beneficial microorganisms that compete with harmful pathogens. Strong, well-nourished plants are more resistant to pests. Avoid fresh organic matter which can attract pests - our fully composted products are safe.";
    }

    // Weather/season questions
    if (lowerMessage.includes('rain') || lowerMessage.includes('dry') || lowerMessage.includes('season') || lowerMessage.includes('weather')) {
      return "Rainy season tips: Apply compost before heavy rains start to prevent leaching. During dry season, compost helps retain soil moisture. In Nigeria's climate, compost application timing is crucial - March-April is ideal for most regions before the main rains begin.";
    }

    // Default response
    return "That's a great question! For specific farming advice, I recommend: 1) Test your soil first, 2) Consider your crop type and growth stage, 3) Factor in local weather patterns. Would you like me to help with a specific crop or farming challenge? You can also contact our experts at +234 810 343 0083 for personalized advice.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: 'assistant',
        content: generateAIResponse(inputMessage),
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary-600 p-3 rounded-full">
                <Bot className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              AI Farming Assistant
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto animate-slide-up">
              Get instant expert advice on composting, soil health, and farming best practices tailored for Nigerian agriculture.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with Tips */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Questions */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center">
                <Lightbulb className="h-5 w-5 mr-2 text-secondary-500" />
                Quick Questions
              </h3>
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left p-3 rounded-lg bg-primary-50 hover:bg-primary-100 text-primary-800 text-sm transition-colors duration-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Farming Tips 
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-secondary-500" />
                Today's Tips
              </h3>
              <div className="space-y-4">
                {farmingTips.map((tip, index) => (
                  <div key={index} className="border-l-4 border-primary-600 pl-4">
                    <div className="flex items-center mb-2">
                      <span className="text-primary-600 mr-2">{tip.icon}</span>
                      <h4 className="font-semibold text-primary-900 text-sm">{tip.title}</h4>
                    </div>
                    <p className="text-gray-700 text-sm">{tip.tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Expert */}
            <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl shadow-lg p-6 text-primary-900">
              <h3 className="text-lg font-semibold mb-2">Need Human Expert?</h3>
              <p className="text-sm mb-4">For complex farming challenges, speak with our agricultural specialists.</p>
              <a
                href="/contact"
                className="bg-primary-900 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-800 transition-colors duration-200 inline-block"
              >
                Contact Expert
              </a>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="bg-primary-600 text-white p-4 flex items-center">
                <div className="bg-primary-500 p-2 rounded-full mr-3">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold">RiseGreen AI Assistant</h3>
                  <p className="text-primary-200 text-sm">Expert farming advice • Always available</p>
                </div>
                <div className="ml-auto flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                  <span className="text-sm">Online</span>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`flex-shrink-0 ${message.type === 'user' ? 'ml-3' : 'mr-3'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user' ? 'bg-primary-600' : 'bg-secondary-500'
                        }`}>
                          {message.type === 'user' ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-primary-900" />
                          )}
                        </div>
                      </div>
                      <div className={`rounded-2xl px-4 py-3 ${
                        message.type === 'user'
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-2 ${
                          message.type === 'user' ? 'text-primary-200' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex mr-3">
                      <div className="w-8 h-8 rounded-full bg-secondary-500 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-primary-900" />
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex space-x-3">
                  <div className="flex-1">
                    <textarea
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask about compost application, soil health, crop recommendations..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none transition-colors duration-200"
                      rows={2}
                    />
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Press Enter to send • Shift + Enter for new line
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              What Our AI Can Help With
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive farming guidance powered by agricultural expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors duration-200">
              <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Compost Application</h3>
              <p className="text-gray-700 text-sm">Get precise application rates for different crops and soil types</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors duration-200">
              <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Yield Optimization</h3>
              <p className="text-gray-700 text-sm">Learn techniques to maximize your harvest with organic methods</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-primary-50 hover:bg-primary-100 transition-colors duration-200">
              <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Instant Answers</h3>
              <p className="text-gray-700 text-sm">Get immediate responses to your farming questions 24/7</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAssistantPage;
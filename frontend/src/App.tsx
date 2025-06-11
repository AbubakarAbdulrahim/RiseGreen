import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import OrderPage from './pages/OrderPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import FAQPage from './pages/FAQPage';
import AIAssistantPage from './pages/AIAssistantPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/ai-assistant" element={<AIAssistantPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
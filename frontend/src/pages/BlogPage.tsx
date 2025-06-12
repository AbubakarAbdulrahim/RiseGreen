import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Leaf, TrendingUp, Users } from 'lucide-react';

const BlogPage = () => {
  const featuredPost = {
    id: 1,
    title: 'The Ultimate Guide to Organic Composting in Nigeria',
    excerpt: 'Learn everything you need to know about creating and using organic compost for sustainable farming in Nigerian conditions.',
    author: 'Abubakar Abdulrahim',
    date: '2025-01-15',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/4503269/pexels-photo-4503269.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Composting Guide'
  };

  const blogPosts = [
    {
      id: 2,
      title: '5 Signs Your Soil Needs Organic Compost',
      excerpt: 'Discover the key indicators that show when your farmland requires organic matter enrichment.',
      author: 'Fatima Al-Hassan',
      date: '2025-01-10',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/4503735/pexels-photo-4503735.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Soil Health'
    },
    {
      id: 3,
      title: 'Maximizing Crop Yields with Natural Fertilizers',
      excerpt: 'Proven strategies to increase your harvest using organic compost and natural fertilizer blends.',
      author: 'James Okwu',
      date: '2025-01-05',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Farming Tips'
    },
    {
      id: 4,
      title: 'Climate-Smart Agriculture: The Role of Composting',
      excerpt: 'How organic composting contributes to climate change mitigation and sustainable farming.',
      author: 'Dr. Chioma Nwankwo',
      date: '2025-01-01',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Sustainability'
    },
    {
      id: 5,
      title: 'Success Story: From Waste to Wealth in Kano',
      excerpt: 'Meet farmer Musa Ibrahim who transformed his 2-hectare farm using RiseGreen compost.',
      author: 'Sarah Adamu',
      date: '2024-12-28',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/2132075/pexels-photo-2132075.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Success Stories'
    },
    {
      id: 6,
      title: 'Understanding NPK Values in Organic Compost',
      excerpt: 'A comprehensive guide to nutrient ratios and how they benefit different crop types.',
      author: 'Prof. Akin Adebayo',
      date: '2024-12-20',
      readTime: '6 min read',
      image: 'data:image/webp;base64,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',
      category: 'Education'
    },
    {
      id: 7,
      title: 'Seasonal Composting Tips for Nigerian Farmers',
      excerpt: 'Optimize your composting process throughout the dry and rainy seasons.',
      author: 'Ibrahim Yusuf',
      date: '2024-12-15',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/4503266/pexels-photo-4503266.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Seasonal Tips'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 7, icon: <Leaf className="h-4 w-4" /> },
    { name: 'Composting Guide', count: 2, icon: <TrendingUp className="h-4 w-4" /> },
    { name: 'Farming Tips', count: 2, icon: <Users className="h-4 w-4" /> },
    { name: 'Success Stories', count: 1, icon: <Users className="h-4 w-4" /> },
    { name: 'Education', count: 1, icon: <Leaf className="h-4 w-4" /> },
    { name: 'Sustainability', count: 1, icon: <Leaf className="h-4 w-4" /> }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              RiseGreen Blog
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto animate-slide-up">
              Expert insights, farming tips, and success stories to help you make the most of organic composting and sustainable agriculture.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Featured Article</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {featuredPost.category}
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-700 mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center group">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-xl font-bold text-primary-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-primary-50 transition-colors duration-200 text-left group"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-primary-600 group-hover:text-primary-700">
                          {category.icon}
                        </span>
                        <span className="text-gray-700 group-hover:text-primary-900">
                          {category.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-primary-900 mb-4">Latest Articles</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-primary-900 mb-3 hover:text-primary-700 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center group">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Farming Tips
          </h2>
          <p className="text-xl text-primary-200 mb-8">
            Get the latest articles, farming tips, and exclusive offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-secondary-400 focus:outline-none"
            />
            <button className="bg-secondary-500 text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-400 transition-colors duration-200 shadow-lg">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
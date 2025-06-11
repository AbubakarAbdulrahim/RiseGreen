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
      image: 'https://images.pexels.com/photos/1458853/pexels-photo-1458853.jpeg?auto=compress&cs=tinysrgb&w=600',
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
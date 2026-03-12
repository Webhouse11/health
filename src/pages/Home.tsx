import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { POSTS, CATEGORIES } from '../data/posts';
import ArticleCard from '../components/ArticleCard';

export default function Home() {
  const featuredPost = POSTS.find(p => p.featured) || POSTS[0];
  const trendingPosts = POSTS.filter(p => p.trending && p.id !== featuredPost.id);
  const latestPosts = POSTS.filter(p => p.id !== featuredPost.id).slice(0, 6);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-16 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-emerald-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Welcome to FitLife Journal</span>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
              HealthHub Pro – Your Ultimate <br className="hidden md:block" />
              Guide to <span className="text-emerald-600">Health and Wellness.</span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Expert-backed insights, practical guides, and the latest research to help you live your most vibrant life.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ArticleCard post={featuredPost} variant="large" />
          </motion.div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <TrendingUp className="w-5 h-5 text-emerald-600" />
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingPosts.map((post) => (
            <ArticleCard key={post.id} post={post} variant="horizontal" />
          ))}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-gray-600">Dive deep into specific wellness topics curated by our team of experts.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <Link 
                key={category.slug} 
                to={`/category/${category.slug}`}
                className="group relative h-64 overflow-hidden rounded-2xl"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-xs text-gray-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">Fresh Content</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
          </div>
          <Link to="/all-posts" className="text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {latestPosts.map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-[3rem] p-8 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-50" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <BookOpen className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-emerald-100/80 text-lg mb-10">
              Join 50,000+ readers receiving weekly evidence-based health tips and exclusive wellness guides.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition-all"
              />
              <button className="bg-white text-emerald-900 font-bold px-8 py-4 rounded-full hover:bg-emerald-50 transition-colors">
                Join Now
              </button>
            </form>
            <p className="mt-6 text-xs text-emerald-300/60">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { POSTS, CATEGORIES } from '../data/posts';
import ArticleCard from '../components/ArticleCard';
import { Filter, ChevronRight } from 'lucide-react';

export default function CategoryPage() {
  const { slug } = useParams();
  const category = CATEGORIES.find(c => c.slug === slug);
  const posts = POSTS.filter(p => p.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-') === slug);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
        <Link to="/" className="text-emerald-600 font-semibold">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Header */}
      <div className="bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-widest mb-8">
            <Link to="/" className="hover:text-emerald-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-emerald-600">{category.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">{category.name}</h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                {category.description}
              </p>
            </div>
            <div className="hidden lg:block">
              <img 
                src={category.image} 
                className="w-full h-64 object-cover rounded-[2rem] shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12 pb-6 border-b border-gray-100">
          <p className="text-sm font-medium text-gray-500">Showing {posts.length} articles</p>
          <button className="flex items-center gap-2 text-sm font-bold text-gray-900 hover:text-emerald-600 transition-colors">
            <Filter className="w-4 h-4" /> Filter & Sort
          </button>
        </div>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map(post => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No articles found in this category yet. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { POSTS } from '../data/posts';
import { motion, AnimatePresence } from 'motion/react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<typeof POSTS>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 1) {
      const filtered = POSTS.filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl flex flex-col"
        >
          <div className="max-w-4xl mx-auto w-full px-4 py-8 flex flex-col h-full">
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-bold tracking-tight text-gray-900">
                HEALTH<span className="text-emerald-600">BOOST</span>
              </span>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-8 h-8 text-gray-500" />
              </button>
            </div>

            <div className="relative mb-12">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 text-emerald-600" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search articles, topics, or experts..."
                className="w-full bg-transparent border-b-2 border-gray-100 py-6 pl-12 text-3xl md:text-4xl font-light focus:outline-none focus:border-emerald-600 transition-colors placeholder:text-gray-300"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              {results.length > 0 ? (
                <div className="space-y-8">
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-400">Top Results</p>
                  {results.map((post) => (
                    <Link
                      key={post.id}
                      to={`/post/${post.slug}`}
                      onClick={onClose}
                      className="group flex items-center justify-between py-4 border-b border-gray-50 hover:border-emerald-100 transition-colors"
                    >
                      <div>
                        <p className="text-xs font-medium text-emerald-600 mb-1">{post.category}</p>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                      </div>
                      <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-emerald-600 group-hover:translate-x-2 transition-all" />
                    </Link>
                  ))}
                </div>
              ) : query.trim().length > 1 ? (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-500">No articles found for "<span className="font-bold text-gray-900">{query}</span>"</p>
                  <p className="text-sm text-gray-400 mt-2">Try searching for broader terms like "fitness", "nutrition", or "sleep".</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Popular Categories</p>
                    <div className="flex flex-wrap gap-3">
                      {['Fitness', 'Nutrition', 'Mental Health', 'Longevity', 'Sleep'].map(cat => (
                        <button
                          key={cat}
                          onClick={() => setQuery(cat)}
                          className="px-4 py-2 rounded-full bg-gray-50 text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-sm font-medium"
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Trending Now</p>
                    <div className="space-y-4">
                      {POSTS.slice(0, 3).map(post => (
                        <Link
                          key={post.id}
                          to={`/post/${post.slug}`}
                          onClick={onClose}
                          className="block text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
                        >
                          {post.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

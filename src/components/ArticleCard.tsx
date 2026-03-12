import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Post } from '../types';
import { cn } from '../lib/utils';

interface ArticleCardProps {
  post: Post;
  variant?: 'default' | 'horizontal' | 'large';
}

export default function ArticleCard({ post, variant = 'default' }: ArticleCardProps) {
  if (variant === 'horizontal') {
    return (
      <Link to={`/post/${post.slug}`} className="group flex gap-6 items-center">
        <div className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-xl">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2 block">
            {post.category}
          </span>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>
          <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'large') {
    return (
      <Link to={`/post/${post.slug}`} className="group relative block overflow-hidden rounded-3xl aspect-[16/9] md:aspect-[21/9]">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-12 text-white max-w-3xl">
          <span className="inline-block bg-emerald-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            {post.category}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight group-hover:text-emerald-400 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-200 text-sm md:text-lg mb-6 line-clamp-2 opacity-90">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-6 text-sm font-medium">
            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author.name}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/post/${post.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
            {post.category}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors leading-tight mb-3">
        {post.title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <img src={post.author.avatar} className="w-6 h-6 rounded-full" referrerPolicy="no-referrer" />
          <span className="text-xs font-medium text-gray-700">{post.author.name}</span>
        </div>
        <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1 uppercase tracking-tighter">
          <Clock className="w-3 h-3" /> {post.readTime}
        </span>
      </div>
    </Link>
  );
}

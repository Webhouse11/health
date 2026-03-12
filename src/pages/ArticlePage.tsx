import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Clock, User, Calendar, Share2, ChevronRight, MessageCircle } from 'lucide-react';
import { POSTS } from '../data/posts';
import ArticleCard from '../components/ArticleCard';

export default function ArticlePage() {
  const { slug } = useParams();
  const post = POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/" className="text-emerald-600 font-semibold">Return Home</Link>
      </div>
    );
  }

  const relatedPosts = POSTS.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3);

  return (
    <div className="pb-20">
      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-xs font-medium text-gray-500 uppercase tracking-widest mb-8">
          <Link to="/" className="hover:text-emerald-600">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/category/${post.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="hover:text-emerald-600">
            {post.category}
          </Link>
        </nav>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-gray-100 mb-12">
          <div className="flex items-center gap-4">
            <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" referrerPolicy="no-referrer" />
            <div>
              <p className="font-bold text-gray-900">{post.author.name}</p>
              <p className="text-xs text-gray-500">{post.author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
            <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar / TOC */}
          <aside className="hidden lg:block col-span-1">
            <div className="sticky top-32">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Table of Contents</h3>
              <ul className="space-y-3 text-sm font-medium text-gray-600">
                <li className="hover:text-emerald-600 cursor-pointer transition-colors">Introduction</li>
                <li className="hover:text-emerald-600 cursor-pointer transition-colors">Key Benefits</li>
                <li className="hover:text-emerald-600 cursor-pointer transition-colors">Practical Tips</li>
                <li className="hover:text-emerald-600 cursor-pointer transition-colors">Conclusion</li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="col-span-1 lg:col-span-3">
            <div className="prose prose-lg prose-emerald max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            {/* Author Bio */}
            <div className="mt-20 p-8 bg-gray-50 rounded-3xl flex flex-col md:row gap-8 items-center md:items-start">
              <img src={post.author.avatar} className="w-24 h-24 rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <div>
                <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.author.bio}</p>
                <Link to={`/author/${post.author.name.toLowerCase().replace(/ /g, '-')}`} className="text-emerald-600 font-bold text-sm hover:underline">
                  View all posts by {post.author.name}
                </Link>
              </div>
            </div>

            {/* Comments Placeholder */}
            <div className="mt-20">
              <div className="flex items-center gap-2 mb-8">
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <h2 className="text-2xl font-bold">Comments (0)</h2>
              </div>
              <div className="border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center">
                <p className="text-gray-400 font-medium mb-4">Be the first to share your thoughts!</p>
                <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                  Post a Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 mt-32">
          <h2 className="text-3xl font-bold mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedPosts.map(p => (
              <ArticleCard key={p.id} post={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <HeartPulse className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold tracking-tight text-white">
                FitLife<span className="text-emerald-500">Journal</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Empowering your journey to optimal health through evidence-based insights, 
              practical wellness tips, and a community dedicated to holistic living.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-emerald-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Categories</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/category/fitness-exercise" className="hover:text-emerald-500 transition-colors">Fitness & Exercise</Link></li>
              <li><Link to="/category/nutrition-diet" className="hover:text-emerald-500 transition-colors">Nutrition & Diet</Link></li>
              <li><Link to="/category/mental-health" className="hover:text-emerald-500 transition-colors">Mental Wellness</Link></li>
              <li><Link to="/category/medical-updates" className="hover:text-emerald-500 transition-colors">Medical Research</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-emerald-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Newsletter</h3>
            <p className="text-sm mb-4">Get the latest health tips delivered to your inbox.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-xs">
          <p>© 2026 FitLife Journal. All rights reserved.</p>
          <p className="text-gray-500 italic">Medical Disclaimer: The information on this site is for educational purposes only and not a substitute for professional medical advice.</p>
        </div>
      </div>
    </footer>
  );
}

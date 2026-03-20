import React from 'react';
import { motion } from 'motion/react';
import { Mail, CheckCircle, Bell, Star } from 'lucide-react';

export default function Subscribe() {
  const benefits = [
    {
      icon: <Bell className="w-5 h-5 text-emerald-600" />,
      text: "Weekly wellness tips delivered to your inbox"
    },
    {
      icon: <Star className="w-5 h-5 text-emerald-600" />,
      text: "Exclusive access to premium health guides"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-emerald-600" />,
      text: "Early access to new features and community events"
    }
  ];

  return (
    <div className="pb-20">
      <section className="bg-emerald-50 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-6">
              <Mail className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Join the FitLife Community
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Subscribe to our newsletter and get the latest health insights, nutrition guides, and fitness tips delivered straight to your inbox.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="max-w-2xl mx-auto bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 border border-emerald-100/50">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-gray-50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-gray-50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>
            <button className="w-full bg-emerald-600 text-white font-bold px-10 py-5 rounded-xl hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Subscribe Now
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time. By subscribing, you agree to our <a href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</a>.
            </p>
          </form>

          <div className="mt-12 pt-12 border-t border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-6 text-center">What you'll get:</h3>
            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-emerald-50/50 p-4 rounded-2xl">
                  {benefit.icon}
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pb-20">
      <div className="bg-emerald-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question, feedback, or a wellness story to share? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-[2rem] shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                <select className="w-full bg-gray-50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Editorial Feedback</option>
                  <option>Partnership Opportunity</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Your Message</label>
                <textarea 
                  rows={6}
                  className="w-full bg-gray-50 border-none rounded-xl px-6 py-4 focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
              </div>
              <button className="w-full md:w-auto bg-emerald-600 text-white font-bold px-10 py-4 rounded-full hover:bg-emerald-700 transition-all flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-900 text-white rounded-[2rem] p-8 md:p-10">
              <h3 className="text-xl font-bold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600/20 p-3 rounded-xl">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Email</p>
                    <p className="font-medium">contact@fitlifejournal.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600/20 p-3 rounded-xl">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Phone</p>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-600/20 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-1">Office</p>
                    <p className="font-medium">123 Wellness Way, Suite 100<br />San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-600 rounded-[2rem] p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Follow Our Journey</h3>
              <p className="text-emerald-50/80 text-sm mb-6 leading-relaxed">
                Stay updated with daily wellness tips and community stories on our social channels.
              </p>
              <div className="flex gap-4">
                {['Instagram', 'Twitter', 'Facebook', 'LinkedIn'].map(social => (
                  <a key={social} href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-xl transition-colors text-xs font-bold">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

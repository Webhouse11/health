import React from 'react';
import { Heart, ShieldCheck, Users, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />,
      title: "Trustworthy Insights",
      description: "Every article is researched and reviewed by health professionals to ensure medical accuracy and reliability."
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Community Focused",
      description: "We believe wellness is a collective journey. Our platform fosters a supportive environment for everyone."
    },
    {
      icon: <Zap className="w-8 h-8 text-emerald-600" />,
      title: "Actionable Advice",
      description: "We don't just share information; we provide practical steps you can take today to improve your life."
    },
    {
      icon: <Heart className="w-8 h-8 text-emerald-600" />,
      title: "Holistic Approach",
      description: "Health is more than just physical. We cover mental, emotional, and lifestyle factors for complete well-being."
    }
  ];

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1545208393-2160281bd89f?auto=format&fit=crop&q=80&w=2000" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed">
            To empower individuals with the knowledge and tools they need to live their healthiest, most vibrant lives.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-4 block">The FitLife Story</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">Founded on the belief that health is a human right.</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                FitLife Journal started in 2024 as a small newsletter dedicated to simplifying complex medical research for everyday people. We saw a gap in the digital landscape: too much misinformation and not enough actionable, science-backed guidance.
              </p>
              <p>
                Today, we have grown into a global platform reaching millions. Our team consists of doctors, nutritionists, fitness experts, and journalists who share a common goal: making wellness accessible, enjoyable, and sustainable.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-emerald-600 text-white p-10 rounded-[2rem] shadow-xl hidden md:block">
              <p className="text-4xl font-bold mb-1">50k+</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-widest">Active Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Drives Us</h2>
            <p className="text-gray-600">The core principles that guide our editorial and community decisions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

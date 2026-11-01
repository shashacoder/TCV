import React from "react";
import { TESTIMONIALS_DATA } from "../data";
import { Quote, Star } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Titles */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="testimonials-header">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">
            Social Proof
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Validated Trust & Benchmark Metrics
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
            Our commitment to delivering solutions on time and at optimum cost has made us the trusted regulatory counsel for some of India's largest conglomerates and multinationals.
          </p>
        </div>

        {/* Corporate Metrics Banner Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-[#0F172A] text-white rounded-3xl mb-16 shadow-xl relative overflow-hidden" id="testimonials-metrics">
          {/* Subtle graphic line */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600 rounded-full blur-3xl opacity-25" />
          
          <div className="text-center relative z-10 border-r border-slate-800 last:border-0 pr-4">
            <span className="block text-4xl sm:text-5xl font-display font-extrabold text-amber-500 mb-1">
              20+
            </span>
            <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-bold">
              Years Advisory Leadership
            </span>
          </div>

          <div className="text-center relative z-10 border-r border-slate-800 last:border-0 px-4">
            <span className="block text-4xl sm:text-5xl font-display font-extrabold text-amber-500 mb-1">
              150+
            </span>
            <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-bold">
              Corporate Clients Supported
            </span>
          </div>

          <div className="text-center relative z-10 border-r border-slate-800 last:border-0 px-4">
            <span className="block text-4xl sm:text-5xl font-display font-extrabold text-amber-500 mb-1">
              99.8%
            </span>
            <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-bold">
              Compliance Accuracy
            </span>
          </div>

          <div className="text-center relative z-10 last:border-0 pl-4">
            <span className="block text-4xl sm:text-5xl font-display font-extrabold text-amber-500 mb-1">
              15+
            </span>
            <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-bold">
              MNC Associations
            </span>
          </div>
        </div>

        {/* Testimonials Quote Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-quotes-grid">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="p-8 bg-slate-50 border border-slate-200/40 rounded-2xl flex flex-col justify-between hover:bg-amber-50/10 hover:border-amber-200 transition-all duration-300 relative group"
              id={`testimonial-card-${idx}`}
            >
              {/* Decorative Quote Icon */}
              <div className="absolute top-6 right-8 text-slate-200/80 group-hover:text-amber-200/60 transition-colors">
                <Quote size={32} />
              </div>

              <div>
                {/* Stars */}
                <div className="flex gap-1 mb-5" id="stars-row">
                  {[...Array(t.rating)].map((_, sIdx) => (
                    <Star key={sIdx} size={14} className="fill-amber-500 text-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Coordinates */}
              <div className="pt-4 border-t border-slate-200/60 flex flex-col">
                <span className="font-display font-bold text-sm text-slate-900">
                  {t.author}
                </span>
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold mt-0.5">
                  {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

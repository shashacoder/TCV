import React from "react";
import { INDUSTRIES_DATA } from "../data";
import * as Icons from "lucide-react";

export const Industries: React.FC = () => {
  return (
    <section id="industries" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" id="industries-header">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">
              Industrial Expertise
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
              Sectors We Serve
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-500 max-w-md leading-relaxed">
            Our multi-disciplinary team supports a diverse range of industries, delivering optimized financial, legal, and operational solutions.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="industries-grid">
          {INDUSTRIES_DATA.map((industry) => {
            // Dynamically load the icon
            const IconComponent = (Icons as any)[industry.iconName] || Icons.HelpCircle;
            
            return (
              <div
                key={industry.id}
                className="p-6 bg-slate-50 hover:bg-amber-50/20 hover:border-amber-200 border border-slate-100 rounded-2xl transition-all duration-300 group flex flex-col justify-between"
                id={`industry-card-${industry.id}`}
              >
                <div>
                  {/* Icon Indicator */}
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/50 flex items-center justify-center mb-5 group-hover:bg-amber-600 transition-colors shadow-2xs">
                    <IconComponent className="text-slate-700 group-hover:text-white transition-colors" size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-extrabold text-base text-slate-900 mb-2 leading-tight">
                    {industry.name}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-xs text-slate-500 leading-relaxed">
                    {industry.description}
                  </p>
                </div>

                {/* Micro Action link */}
                <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center gap-1.5 text-[10px] font-mono font-bold text-slate-400 group-hover:text-amber-700 transition-colors">
                  <span>DEPLOYED PRACTICE SOLUTIONS</span>
                  <Icons.ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

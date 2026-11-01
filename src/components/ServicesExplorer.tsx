import React, { useState } from "react";
import { SERVICES_DATA } from "../data";
import * as Icons from "lucide-react";

export const ServicesExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(SERVICES_DATA[0].id);
  const [expandedSubService, setExpandedSubService] = useState<string | null>(null);

  // Dynamic Icon loader from lucide-react
  const renderIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className="text-amber-700 group-hover:text-white transition-colors duration-200" size={22} />;
    }
    return <Icons.Activity className="text-amber-700 group-hover:text-white transition-colors duration-200" size={22} />;
  };

  const activeCategoryData = SERVICES_DATA.find((c) => c.id === activeCategory) || SERVICES_DATA[0];

  const handleSubServiceToggle = (subId: string) => {
    if (expandedSubService === subId) {
      setExpandedSubService(null);
    } else {
      setExpandedSubService(subId);
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="services-header">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">
            Practice Jurisdictions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Comprehensive Corporate Offerings
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600 leading-relaxed">
            TCV bridges corporate advocacy and modern engineering. Click through our primary practice segments below to explore detailed compliance and technical capabilities.
          </p>
        </div>

        {/* Desktop Layout: Tabbed Segmented Control & Rich Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="services-explorer-interactive">
          
          {/* Left Vertical Tabs list */}
          <div className="lg:col-span-4 space-y-3" id="services-tabs-panel">
            <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block mb-1 px-2">
              Select Practice Area
            </span>
            {SERVICES_DATA.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setExpandedSubService(null);
                  }}
                  className={`w-full text-left p-4 rounded-xl border font-sans transition-all duration-200 flex items-start gap-4 group cursor-pointer ${
                    isActive
                      ? "bg-[#0F172A] border-[#0F172A] text-white shadow-md shadow-slate-900/10 scale-[1.01]"
                      : "bg-white border-slate-200/60 text-slate-700 hover:bg-white hover:border-amber-300 hover:shadow-sm"
                  }`}
                  id={`tab-btn-${category.id}`}
                >
                  <div
                    className={`p-2.5 rounded-lg shrink-0 transition-colors duration-200 ${
                      isActive ? "bg-amber-600 text-white" : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {/* Render the specific icon */}
                    {React.createElement((Icons as any)[category.iconName] || Icons.Briefcase, {
                      size: 20,
                      className: isActive ? "text-white" : "text-amber-700 group-hover:text-amber-800"
                    })}
                  </div>
                  <div>
                    <span className={`block font-display font-bold text-sm tracking-tight ${isActive ? "text-white" : "text-slate-800"}`}>
                      {category.title}
                    </span>
                    <span className={`text-[11px] block leading-normal mt-0.5 max-w-xs ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                      {category.description.substring(0, 85)}...
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Dynamic Focus Area details panel */}
          <div className="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden" id="services-focus-panel">
            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
              {React.createElement((Icons as any)[activeCategoryData.iconName] || Icons.Briefcase, {
                size: 200,
                className: "text-slate-900"
              })}
            </div>

            <div className="relative z-10">
              {/* Category Header */}
              <div className="pb-6 border-b border-slate-100 mb-6">
                <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-1">
                  Active Domain
                </span>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  {activeCategoryData.title}
                </h3>
                <p className="font-sans text-sm text-slate-500 leading-relaxed">
                  {activeCategoryData.description}
                </p>
              </div>

              {/* Accordion List of Sub-Services */}
              <div className="space-y-4" id="services-accordion-list">
                <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block mb-1">
                  Specific Capabilities & Deliverables
                </span>
                
                {activeCategoryData.services.map((sub, idx) => {
                  const isExpanded = expandedSubService === sub.id || (expandedSubService === null && idx === 0);
                  return (
                    <div
                      key={sub.id}
                      className={`border rounded-xl transition-all ${
                        isExpanded
                          ? "border-amber-200 bg-amber-50/10 shadow-xs"
                          : "border-slate-100 bg-slate-50/40 hover:bg-slate-50/80"
                      }`}
                      id={`accordion-item-${sub.id}`}
                    >
                      {/* Accordion Trigger Button */}
                      <button
                        onClick={() => handleSubServiceToggle(sub.id)}
                        className="w-full text-left px-5 py-4 flex justify-between items-center cursor-pointer font-display"
                        aria-expanded={isExpanded}
                      >
                        <div>
                          <span className="block text-sm font-extrabold text-slate-800 leading-tight">
                            {sub.title}
                          </span>
                          <span className="text-[11px] font-sans text-slate-400 block mt-0.5 leading-normal">
                            {sub.description}
                          </span>
                        </div>
                        <div className="text-slate-400 p-1 bg-white border border-slate-100 rounded-lg shadow-2xs shrink-0">
                          {isExpanded ? <Icons.ChevronUp size={16} className="text-amber-700" /> : <Icons.ChevronDown size={16} />}
                        </div>
                      </button>

                      {/* Accordion Content Panel */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isExpanded ? "max-h-[600px] border-t border-amber-100/60" : "max-h-0 pointer-events-none"
                        }`}
                      >
                        <div className="p-5">
                          {sub.bullets && sub.bullets.length > 0 ? (
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {sub.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2.5 font-sans text-xs text-slate-600 leading-normal">
                                  <Icons.CheckCircle2 className="text-emerald-500 shrink-0 mt-0.5" size={14} />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="font-sans text-xs text-slate-500 italic">
                              Complete advisory support and operational mapping services. Please contact our partners for precise engagement details.
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Support CTA */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-sans text-xs text-slate-500 max-w-sm">
                  Require custom scope definitions or dual compliance-engineering frameworks? Reach out to our specialized partners directly.
                </p>
                <a
                  href="#contact"
                  className="px-5 py-2.5 bg-[#0F172A] hover:bg-slate-800 text-white font-sans font-bold rounded-lg text-xs tracking-wider uppercase transition-all duration-200 text-center shrink-0"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Request Scope Customization
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

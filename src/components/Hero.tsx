import React, { useState } from "react";
import { ArrowUpRight, ShieldCheck, Award, Zap, Calculator, Scale, Users, Cpu } from "lucide-react";

export const Hero: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-36 overflow-hidden bg-[#F8FAFC]"
    >
      {/* Background elegant architectural geometry (SaaS aesthetic inspired by Avalon) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-slate-200/50 rounded-full blur-3xl" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="hero-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Text and Description */}
          <div className="lg:col-span-7 flex flex-col items-start text-left" id="hero-content">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-200/60 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span className="text-xs font-mono font-bold text-amber-800 tracking-wider uppercase">
                Dual Compliance & Engineering Verticals
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Empowering Enterprise, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-600 to-slate-900">
                Securing Compliance.
              </span>
            </h1>

            {/* Subheading */}
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
              The Corporate Vashishtha brings together a distinguished group of <strong className="font-semibold text-slate-800">Advocates, Chartered Accountants, and Industrial Engineers</strong>. We deliver cohesive end-to-end management consultancy, legal tax litigation, robust HR/IR strategy, and advanced mechanical automation solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12">
              <button
                onClick={() => scrollToSection("services")}
                className="px-8 py-4 bg-[#0F172A] hover:bg-slate-800 text-white font-sans font-bold rounded-full tracking-wide shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-services-btn"
              >
                Explore Services
                <ArrowUpRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-sans font-bold rounded-full tracking-wide shadow-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                id="hero-consult-btn"
              >
                Schedule Free Audit
              </button>
            </div>

            {/* Quick trust badges */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200/80 w-full max-w-lg" id="hero-badges">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-amber-600 shrink-0" size={18} />
                <span className="text-xs font-semibold text-slate-700 font-sans">CAG & Bank Empaneled</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-amber-600 shrink-0" size={18} />
                <span className="text-xs font-semibold text-slate-700 font-sans">20+ Yrs Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="text-amber-600 shrink-0" size={18} />
                <span className="text-xs font-semibold text-slate-700 font-sans">Zero-Friction Audits</span>
              </div>
            </div>
          </div>

          {/* Interactive Abstract Visualization Placeholder (SaaS/Avalon look) */}
          <div className="lg:col-span-5 relative" id="hero-visualization">
            <div className="relative w-full max-w-[420px] mx-auto aspect-square bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.06)] border border-slate-100 p-8 flex flex-col justify-between overflow-hidden">
              {/* Subtle visual lines */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-50 rounded-full blur-2xl" />
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

              <div className="relative z-10 flex justify-between items-center pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${hoveredService ? "bg-amber-500 animate-pulse" : "bg-emerald-500"}`} />
                  <span className="text-xs font-mono font-bold text-slate-500 transition-colors duration-300">
                    {hoveredService ? `TCV ENGINE: ${hoveredService.toUpperCase()}` : "TCV INTEGRATION ENGINE"}
                  </span>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold transition-all duration-300 ${
                  hoveredService 
                    ? "bg-amber-100 text-amber-800 animate-pulse" 
                    : "bg-slate-100 text-slate-600"
                }`}>
                  {hoveredService ? "SYNCED" : "ACTIVE"}
                </span>
              </div>

              {/* Dynamic visual representation of services coming together */}
              <div className="relative z-10 my-6 flex-1 flex flex-col justify-center items-center gap-4">
                <div className="grid grid-cols-2 gap-3 w-full">
                  
                  {/* Statutory Audit Card */}
                  <div 
                    onMouseEnter={() => setHoveredService("audit")}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`p-3 bg-white rounded-xl border transition-all duration-300 cursor-pointer group flex gap-3 items-start ${
                      hoveredService === "audit" 
                        ? "border-amber-300 shadow-lg shadow-amber-100/40 -translate-y-0.5 bg-amber-50/20" 
                        : "border-slate-200/60"
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-colors duration-300 shrink-0 ${
                      hoveredService === "audit" 
                        ? "bg-amber-100 text-amber-700" 
                        : "bg-slate-50 text-slate-600 group-hover:bg-amber-50 group-hover:text-amber-700"
                    }`}>
                      <Calculator size={16} />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-display text-slate-800 block group-hover:text-amber-800 transition-colors duration-300">Statutory Audit</span>
                      <span className="text-[10px] text-slate-400 font-mono block">Tax & Companies Act</span>
                    </div>
                  </div>

                  {/* Legal Defense Card */}
                  <div 
                    onMouseEnter={() => setHoveredService("legal")}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`p-3 bg-white rounded-xl border transition-all duration-300 cursor-pointer group flex gap-3 items-start ${
                      hoveredService === "legal" 
                        ? "border-amber-300 shadow-lg shadow-amber-100/40 -translate-y-0.5 bg-amber-50/20" 
                        : "border-slate-200/60"
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-colors duration-300 shrink-0 ${
                      hoveredService === "legal" 
                        ? "bg-amber-100 text-amber-700" 
                        : "bg-slate-50 text-slate-600 group-hover:bg-amber-50 group-hover:text-amber-700"
                    }`}>
                      <Scale size={16} />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-display text-slate-800 block group-hover:text-amber-800 transition-colors duration-300">Legal Defense</span>
                      <span className="text-[10px] text-slate-400 font-mono block">CIT Appeals / ITAT</span>
                    </div>
                  </div>

                  {/* Labour & IR Card */}
                  <div 
                    onMouseEnter={() => setHoveredService("labour")}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`p-3 bg-white rounded-xl border transition-all duration-300 cursor-pointer group flex gap-3 items-start ${
                      hoveredService === "labour" 
                        ? "border-amber-300 shadow-lg shadow-amber-100/40 -translate-y-0.5 bg-amber-50/20" 
                        : "border-slate-200/60"
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-colors duration-300 shrink-0 ${
                      hoveredService === "labour" 
                        ? "bg-amber-100 text-amber-700" 
                        : "bg-slate-50 text-slate-600 group-hover:bg-amber-50 group-hover:text-amber-700"
                    }`}>
                      <Users size={16} />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-display text-slate-800 block group-hover:text-amber-800 transition-colors duration-300">Labour & IR</span>
                      <span className="text-[10px] text-slate-400 font-mono block">Dispute Arbitration</span>
                    </div>
                  </div>

                  {/* Engineering Card */}
                  <div 
                    onMouseEnter={() => setHoveredService("engineering")}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`p-3 bg-white rounded-xl border transition-all duration-300 cursor-pointer group flex gap-3 items-start ${
                      hoveredService === "engineering" 
                        ? "border-amber-300 shadow-lg shadow-amber-100/40 -translate-y-0.5 bg-amber-50/20" 
                        : "border-slate-200/60"
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-colors duration-300 shrink-0 ${
                      hoveredService === "engineering" 
                        ? "bg-amber-100 text-amber-700" 
                        : "bg-slate-50 text-slate-600 group-hover:bg-amber-50 group-hover:text-amber-700"
                    }`}>
                      <Cpu size={16} />
                    </div>
                    <div>
                      <span className="text-xs font-bold font-display text-slate-800 block group-hover:text-amber-800 transition-colors duration-300">Engineering</span>
                      <span className="text-[10px] text-slate-400 font-mono block">Industrial Automation</span>
                    </div>
                  </div>

                </div>

                {/* Central connection line */}
                <div className={`w-full flex items-center justify-center gap-1.5 text-[11px] font-mono font-bold py-2 px-4 rounded-full border transition-all duration-300 ${
                  hoveredService 
                    ? "text-amber-900 bg-amber-100/90 border-amber-300 shadow-md shadow-amber-100/40 scale-[1.03]" 
                    : "text-amber-700 bg-amber-50/80 border-amber-100"
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    hoveredService ? "bg-amber-600 animate-pulse scale-125" : "bg-amber-600 animate-ping"
                  }`} />
                  {hoveredService === "audit" && "Synchronizing Audit & Compliance..."}
                  {hoveredService === "legal" && "Powering Supreme appellate Defense..."}
                  {hoveredService === "labour" && "Mediating Industrial Relations..."}
                  {hoveredService === "engineering" && "Driving Robotic Automation..."}
                  {!hoveredService && "Unified Multi-Disciplinary Counsel"}
                </div>
              </div>

              {/* Live metrics inside card */}
              <div className="relative z-10 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xl font-display font-extrabold text-slate-900 leading-tight">20+ Years</span>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Combined Leadership</span>
                </div>
                <div>
                  <span className="block text-xl font-display font-extrabold text-slate-900 leading-tight">150+</span>
                  <span className="text-[10px] font-mono uppercase text-slate-400">Corporate Clients</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

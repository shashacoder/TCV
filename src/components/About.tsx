import React from "react";
import { ORGANIZATIONAL_PARTNERS } from "../data";
import { Shield, Eye, Flame, Compass, ChevronRight } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Headline & Core Premise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20" id="about-intro-grid">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-3">
              Established Authority
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Unified Collective of Advocates, Accountants, & Industrial Engineers.
            </h2>
            
            {/* Value Pillar Statement */}
            <div className="mt-8 p-6 bg-slate-50 border-l-4 border-[#0F172A] rounded-r-xl">
              <span className="font-mono text-xs font-bold text-amber-700 uppercase block mb-1">Our Philosophy</span>
              <p className="font-sans text-sm font-semibold italic text-slate-700">
                &ldquo;Your Success is our Business. Knowledge is never complete. To earn respect by delivering quality services.&rdquo;
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 font-sans text-slate-600 space-y-6 leading-relaxed text-base" id="about-long-text">
            <p>
              Founded as a high-tier partnership firm, <strong className="text-slate-900">The Corporate Vashishtha (TCV)</strong> was established with a singular objective: to pool the deep expert knowledge of partners across legal, tax, human resource, and finance domains to deliver seamless, cost-optimized client operations.
            </p>
            <p>
              To expand our capabilities and match the complex requirements of modern manufacturing industries, we bifurcated our association into two specialized, synchronized verticals:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-amber-50/40 border border-amber-100 rounded-lg">
                <span className="block font-display font-bold text-slate-900 text-sm mb-1">1. TCV Advisory & Legal</span>
                <span className="block text-xs text-slate-500 font-sans">
                  Directing corporate laws, tax litigation representation (ITAT, GST), statutory/internal audits, and state labour board clearances.
                </span>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-lg">
                <span className="block font-display font-bold text-slate-900 text-sm mb-1">2. TCV Engineering Services</span>
                <span className="block text-xs text-slate-500 font-sans">
                  Incorporated in 2022 to provide comprehensive mechanical maintenance, heavy civil construction, industrial automation, and environmental protection tech.
                </span>
              </div>
            </div>
            <p>
              Headquartered in New Delhi and maintaining extensive operational corridors in Bahadurgarh (Haryana), our multi-disciplinary approach eliminates bureaucratic delays, safeguarding our clients from complex financial audits, taxation disputes, and facility non-compliance.
            </p>
          </div>
        </div>

        {/* Vision, Mission, and Values Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" id="about-vmv-grid">
          
          {/* VISION */}
          <div className="p-8 bg-slate-50 hover:bg-slate-100/50 transition-colors rounded-2xl border border-slate-100 flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-amber-50/50 flex items-center justify-center mb-6">
              <Eye className="text-amber-700" size={24} />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Our Vision</h3>
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              To stand as the industry's prioritized one-stop, end-to-end solution provider, recognized globally for our deeply ethical approach and absolute solution delivery.
            </p>
          </div>

          {/* MISSION */}
          <div className="p-8 bg-slate-50 hover:bg-slate-100/50 transition-colors rounded-2xl border border-slate-100 flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-amber-50/50 flex items-center justify-center mb-6">
              <Compass className="text-amber-700" size={24} />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Our Mission</h3>
            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              Providing highly efficient services exceeding expectations of our business partners, and nurturing relationships that go far beyond commercial transactions.
            </p>
          </div>

          {/* CORE VALUES */}
          <div className="p-8 bg-slate-50 hover:bg-slate-100/50 transition-colors rounded-2xl border border-slate-100 flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-amber-50/50 flex items-center justify-center mb-6">
              <Shield className="text-amber-700" size={24} />
            </div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-3">Core Values</h3>
            <div className="w-full">
              <div className="space-y-3 font-sans text-sm text-slate-600">
                <div className="grid grid-cols-[130px_1fr] items-start gap-x-2">
                  <span className="flex items-center gap-2 font-bold text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                    Integrity
                  </span>
                  <span className="text-slate-600">— Flawless, absolute ethical compliance.</span>
                </div>
                <div className="grid grid-cols-[130px_1fr] items-start gap-x-2">
                  <span className="flex items-center gap-2 font-bold text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                    Business Ethics
                  </span>
                  <span className="text-slate-600">— Transparency above all operations.</span>
                </div>
                <div className="grid grid-cols-[130px_1fr] items-start gap-x-2">
                  <span className="flex items-center gap-2 font-bold text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                    Innovation
                  </span>
                  <span className="text-slate-600">— Combining legal safety with modern automation.</span>
                </div>
                <div className="grid grid-cols-[130px_1fr] items-start gap-x-2">
                  <span className="flex items-center gap-2 font-bold text-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                    Trust
                  </span>
                  <span className="text-slate-600">— Built on years of validated results.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Corporate Associations Panel (Logos Grid) */}
        <div className="bg-slate-50/60 rounded-3xl p-8 md:p-12 border border-slate-100" id="associations-section">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-200/60 pb-6">
            <div>
              <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-1">
                Elite Client Network
              </span>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Key Esteemed Organizational Associations
              </h3>
            </div>
            <p className="font-sans text-xs text-slate-500 max-w-sm md:text-right leading-relaxed">
              We take pride in our track record, supporting household names and multinational giants across diverse heavy sectors.
            </p>
          </div>

          {/* Grid of Partner Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4" id="partners-grid">
            {ORGANIZATIONAL_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="p-4 bg-white hover:bg-slate-50 transition-all duration-200 border border-slate-200/50 rounded-xl flex flex-col justify-center items-center text-center shadow-xs group"
              >
                <span className="font-display font-extrabold text-sm text-slate-700 tracking-tight group-hover:text-amber-700 group-hover:scale-105 transition-all">
                  {partner.name}
                </span>
                {partner.group && (
                  <span className="text-[10px] font-mono text-slate-400 mt-1 block">
                    {partner.group}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

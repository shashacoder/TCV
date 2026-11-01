import React from "react";
import { Logo } from "./Logo";
import { ArrowUp, Mail, Phone, MapPin, Building2, ExternalLink } from "lucide-react";

export const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900 relative overflow-hidden" id="main-footer">
      {/* Background visual highlight */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top section: Logo & Scroll up */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-12 border-b border-slate-900 mb-12">
          {/* Inverse white styled Logo */}
          <div className="brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300">
            <Logo className="h-10" />
          </div>

          <button
            onClick={handleScrollTop}
            className="p-3 bg-slate-900 hover:bg-amber-600 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-colors flex items-center gap-2 text-xs font-mono font-bold cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>SCROLL TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Columns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12" id="footer-cols">
          
          {/* Brief and belief */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
              Unified Corporate Counsel
            </h4>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              The Corporate Vashishtha brings together qualified Advocates, Chartered Accountants, and Industrial Engineers to safeguard corporate operations, audits, taxation, labor relations, and facilities compliance.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <Building2 size={13} className="text-amber-500" />
                Empaneled with C&AG and Banks
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li>
                <a href="#about" className="hover:text-amber-500 transition-colors">About Firm</a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-500 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#industries" className="hover:text-amber-500 transition-colors">Industries Served</a>
              </li>
              <li>
                <a href="#team" className="hover:text-amber-500 transition-colors">Expert Team</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-amber-500 transition-colors">Metrics & Proof</a>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest">
              Practice Domains
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              <li>Statutory, CAG & Tax Audits</li>
              <li>Direct & Indirect Tax Appeals</li>
              <li>GST Advisory & Customs Refunds</li>
              <li>Company Formation & Secretarial</li>
              <li>Labour Cases & Union Settlements</li>
              <li>Mechanical & Automation Solutions</li>
            </ul>
          </div>

          {/* Direct Coordinates */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-slate-300 uppercase tracking-widest">
              Contact Channels
            </h4>
            <ul className="space-y-3 text-xs text-slate-400 font-mono">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-amber-500 shrink-0 mt-0.5" />
                <span className="font-sans">New Delhi / Bahadurgarh Office Hubs</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-amber-500 shrink-0" />
                <a href="tel:+919810360054" className="hover:text-amber-500 transition-colors">+91 98103 60054</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-amber-500 shrink-0" />
                <a href="mailto:brahmp@tcvadvisors.org" className="hover:text-amber-500 transition-colors">brahmp@tcvadvisors.org</a>
              </li>
              <li className="flex items-center gap-2.5 pt-1">
                <ExternalLink size={14} className="text-slate-500 shrink-0" />
                <a href="http://www.tcvadvisors.org" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors font-bold text-[11px]">
                  www.tcvadvisors.org
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-900 text-center flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-slate-500 font-sans">
          <p>© {currentYear} The Corporate Vashishtha. All statutory rights reserved.</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center">
            <span>Corporate Identity vertical established in 2022</span>
            <span>•</span>
            <a href="#contact" className="hover:text-amber-500">Legal Disclaimer</a>
            <span>•</span>
            <a href="#contact" className="hover:text-amber-500">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

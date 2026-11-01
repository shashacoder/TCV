import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X, PhoneCall, Calendar } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Our Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
      id="main-navigation-bar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center cursor-pointer"
            id="nav-logo-link"
          >
            <Logo className="h-10" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8" id="desktop-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.replace("#", ""));
                }}
                className="relative font-sans font-semibold text-slate-600 hover:text-slate-900 transition-colors duration-300 text-sm tracking-wide py-2.5 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </a>
            ))}
          </div>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-6" id="desktop-nav-cta">
            <a
              href="tel:+919810360054"
              className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 hover:text-amber-700 transition-all duration-300 hover:scale-105"
            >
              <PhoneCall size={14} className="text-amber-600 animate-pulse" />
              +91 9810360054
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 bg-[#0F172A] hover:bg-amber-700 text-white text-sm font-bold rounded-full transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-amber-600/20 active:scale-95 cursor-pointer"
              id="cta-schedule-consultation"
            >
              <Calendar size={15} />
              Get in Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2" id="mobile-menu-controls">
            <a
              href="tel:+919810360054"
              className="p-2 text-slate-700 hover:text-amber-700 transition-colors"
              aria-label="Call TCV Advisors"
            >
              <PhoneCall size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-amber-700 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
          isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
        id="mobile-drawer-menu"
      >
        <div className="px-4 pt-4 pb-6 space-y-3 bg-white">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href.replace("#", ""));
              }}
              className="block px-4 py-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-amber-700 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:+919810360054"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-mono font-bold text-slate-700 hover:text-amber-700"
            >
              <PhoneCall size={16} className="text-amber-600" />
              Direct Support: +91 9810360054
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full py-3 bg-[#0F172A] hover:bg-slate-800 text-white font-sans font-bold rounded-lg text-center shadow-lg transition-all"
            >
              Request Free Strategy Call
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

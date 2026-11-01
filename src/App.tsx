import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ServicesExplorer } from "./components/ServicesExplorer";
import { Industries } from "./components/Industries";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-100 selection:text-orange-900 scroll-smooth antialiased">
      {/* Navigation Layer */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10" id="main-content-flow">
        {/* Section 1: Hero Visuals */}
        <Hero />

        {/* Section 2: About & Organizational Affiliations */}
        <About />

        {/* Section 3: Interactive Practice Services Explorer */}
        <ServicesExplorer />

        {/* Section 4: Industry Sectors served */}
        <Industries />

        {/* Section 5: Expert Partner Team bios */}
        <Team />

        {/* Section 6: Trust indicators & Testimonials */}
        <Testimonials />

        {/* Section 7: Consultation Contact Form */}
        <ContactForm />
      </main>

      {/* Footer Details & Copyright coordinates */}
      <Footer />
    </div>
  );
}

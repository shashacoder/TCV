import React, { useState } from "react";
import { Mail, PhoneCall, MapPin, CheckCircle, Send, FileCode2 } from "lucide-react";
import { SERVICES_DATA } from "../data";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    domain: SERVICES_DATA[0].title,
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitHint, setSubmitHint] = useState<string | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [isSimulated, setIsSimulated] = useState(false);
  const [responseWarning, setResponseWarning] = useState<string | null>(null);
  const [responseHint, setResponseHint] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setSubmitError(null);
      setSubmitHint(null);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
          if (data.hint) {
            setSubmitHint(data.hint);
          }
          throw new Error(data.error || "Failed to submit request.");
        }

        setSubmittedEmail(formData.email);
        setIsSimulated(!!data.simulated);
        setResponseWarning(data.warning || null);
        setResponseHint(data.hint || null);
        setIsSubmitted(true);
      } catch (err: any) {
        setSubmitError(err.message || "An unexpected error occurred. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      domain: SERVICES_DATA[0].title,
      message: ""
    });
    setSubmitError(null);
    setSubmitHint(null);
    setIsSimulated(false);
    setResponseWarning(null);
    setResponseHint(null);
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" id="contact-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Side: Text and Office Information */}
          <div className="lg:col-span-5 flex flex-col justify-between" id="contact-info">
            <div>
              <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">
                Get In Touch
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                Ready to Secure Your Operations?
              </h2>
              <p className="font-sans text-sm text-slate-600 leading-relaxed mb-8">
                Request a comprehensive, confidential audit or legal advisory scope formulation today. A managing partner from the respective vertical will coordinate directly with you.
              </p>

              {/* Office Locations */}
              <div className="space-y-6" id="office-locations-list">
                
                {/* Delhi Office */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-slate-900">
                      New Delhi Corporate Office
                    </h4>
                    <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed">
                      A-93, 1st Floor, Malviya Nagar, New Delhi - 110017
                    </p>
                  </div>
                </div>

                {/* Bahadurgarh Office */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-slate-900">
                      Bahadurgarh Industrial Office
                    </h4>
                    <p className="font-sans text-xs text-slate-500 mt-1 leading-relaxed">
                      Plot No.-529, Sector-6, Bahadurgarh, Distt. Jhajjar, Haryana - 124507
                    </p>
                  </div>
                </div>

                {/* Direct Communications */}
                <div className="flex gap-4 pt-4 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-xl bg-[#0F172A] flex items-center justify-center text-white shrink-0">
                    <PhoneCall size={16} />
                  </div>
                  <div className="text-xs font-mono">
                    <h4 className="font-sans font-bold text-slate-900">Direct Partner Support</h4>
                    <a href="mailto:brahmp@tcvadvisors.org" className="block text-slate-500 hover:text-amber-700 transition-colors mt-1 font-semibold">
                      brahmp@tcvadvisors.org
                    </a>
                    <a href="tel:+919810360054" className="block text-slate-700 font-extrabold mt-0.5 hover:text-amber-700">
                      +91 9810360054
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick credentials */}
            <div className="mt-12 p-5 bg-white border border-slate-200/50 rounded-2xl hidden lg:block">
              <span className="text-[10px] font-mono font-bold text-slate-400 block mb-1">
                OPERATIONAL JURISDICTION CERTIFICATION
              </span>
              <p className="font-sans text-[11px] text-slate-500 leading-normal">
                Our associate practice firms are empaneled with the <strong>Comptroller and Auditor General of India (C&AG)</strong> and major public sector commercial banks.
              </p>
            </div>
          </div>

          {/* Right Side: Active Form or Success State Card */}
          <div className="lg:col-span-7 bg-white border border-slate-200/60 rounded-3xl p-6 md:p-10 shadow-sm flex flex-col justify-center" id="contact-form-container">
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5" id="consultation-form">
                <div className="border-b border-slate-100 pb-4">
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Request Strategic Scope Setup
                  </h3>
                  <p className="font-sans text-xs text-slate-500 mt-1">
                    Complete this briefing sheet to initiate high-priority scoping.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. CA Ajay Gupta"
                      className={`w-full px-4 py-2.5 bg-slate-50 border rounded-lg font-sans text-sm focus:outline-none focus:bg-white focus:ring-1 ${
                        errors.name ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-amber-500 focus:border-amber-500"
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-500 font-sans font-semibold">{errors.name}</span>}
                  </div>

                  {/* Company Name */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Flyjac Logistics Pvt. Ltd."
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg font-sans text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. consult@company.com"
                      className={`w-full px-4 py-2.5 bg-slate-50 border rounded-lg font-sans text-sm focus:outline-none focus:bg-white focus:ring-1 ${
                        errors.email ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-amber-500 focus:border-amber-500"
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-500 font-sans font-semibold">{errors.email}</span>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98103 60054"
                      className={`w-full px-4 py-2.5 bg-slate-50 border rounded-lg font-sans text-sm focus:outline-none focus:bg-white focus:ring-1 ${
                        errors.phone ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-amber-500 focus:border-amber-500"
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] text-red-500 font-sans font-semibold">{errors.phone}</span>}
                  </div>
                </div>

                {/* Primary Service Domain Dropdown */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                    Primary Practice Scope Needed
                  </label>
                  <select
                    value={formData.domain}
                    onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg font-sans text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                  >
                    {SERVICES_DATA.map((c) => (
                      <option key={c.id} value={c.title}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Briefing */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider block">
                    Operational Requirements / Message Brief *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current status, requirements, or existing compliance challenges..."
                    className={`w-full px-4 py-2.5 bg-slate-50 border rounded-lg font-sans text-sm focus:outline-none focus:bg-white focus:ring-1 ${
                      errors.message ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-amber-500 focus:border-amber-500"
                    }`}
                  />
                  {errors.message && <span className="text-[10px] text-red-500 font-sans font-semibold">{errors.message}</span>}
                </div>

                {submitError && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-xs font-sans space-y-2.5">
                    <p className="font-semibold">{submitError}</p>
                    {submitHint && (
                      <div className="p-3 bg-white rounded-lg border border-red-100 text-slate-600 font-normal leading-relaxed text-[11px] shadow-sm">
                        <strong className="text-slate-800 font-bold block mb-1">💡 Troubleshooting Step Required:</strong>
                        {submitHint}
                      </div>
                    )}
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 font-sans font-bold rounded-full tracking-wide shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                    isSubmitting 
                      ? "bg-slate-400 text-slate-200 cursor-not-allowed" 
                      : "bg-[#0F172A] hover:bg-slate-800 text-white"
                  }`}
                  id="contact-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Dispatching Scope Request...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Initiate Scoping Protocol
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* High fidelity submission summary screen - NOT showing any input details per instructions */
              <div className="text-center py-8 space-y-6" id="success-scoping-screen">
                <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle size={32} className="animate-pulse" />
                </div>

                <div className="space-y-3">
                  <h3 className="font-display font-extrabold text-2xl text-slate-900">
                    Scoping Request Transmitted
                  </h3>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
                    Your strategic scoping brief has been successfully initiated.
                  </p>
                </div>

                {/* Elegant Delivery Notification Board */}
                <div className="p-6 bg-amber-50/40 rounded-2xl border border-amber-100 max-w-md mx-auto text-left font-sans text-xs text-slate-700 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-amber-200/60">
                    <span className="font-mono font-bold text-amber-800 tracking-wider">SECURE TRANSMISSION RECEIPT</span>
                    {isSimulated ? (
                      <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded-[4px] text-[9px] font-mono font-bold uppercase tracking-wider">SIMULATED (SANDBOX)</span>
                    ) : (
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-[4px] text-[9px] font-mono font-bold uppercase tracking-wider">DISPATCHED</span>
                    )}
                  </div>
                  
                  <p className="leading-relaxed text-slate-600">
                    To comply with confidentiality protocols, your scoping details <strong className="text-slate-800">have not been displayed on this screen</strong>.
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="flex gap-2.5 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <p className="m-0 text-slate-600">
                        {isSimulated ? (
                          <>A comprehensive PDF-styled docket containing your full operational brief was generated for: <strong className="text-slate-900 break-all font-mono">{submittedEmail}</strong> (logged directly to the server terminal console).</>
                        ) : (
                          <>A comprehensive PDF-styled docket containing your full operational brief has been sent to your registered address: <strong className="text-slate-900 break-all font-mono">{submittedEmail}</strong></>
                        )}
                      </p>
                    </div>
                    <div className="flex gap-2.5 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-1.5 shrink-0" />
                      <p className="m-0 text-slate-600">
                        {isSimulated ? (
                          <>A duplicate copy has been generated for the partner desk. In a production environment, this is routed to: <strong className="text-slate-900 font-mono">brahmp@tcvadvisors.org</strong></>
                        ) : (
                          <>A duplicate secure copy has been routed directly to our Managing Partner desk (<strong className="text-slate-900 font-mono">brahmp@tcvadvisors.org</strong>) for direct prioritization.</>
                        )}
                      </p>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-400 text-center font-mono pt-3 border-t border-amber-200/40">
                    CONFIDENTIALITY CLASSIFICATION: CLASS-A TCV BRIEF
                  </p>
                </div>

                {/* SMTP Diagnostic Board if simulated fallback was triggered */}
                {isSimulated && (
                  <div className="p-5 bg-amber-50/70 border border-amber-100 rounded-2xl max-w-md mx-auto text-left font-sans text-xs text-amber-900 space-y-2 shadow-sm" id="smtp-diagnostic-board">
                    <div className="flex items-center gap-2 pb-1.5 border-b border-amber-200/40">
                      <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0 animate-pulse" />
                      <span className="font-mono font-bold tracking-wider text-amber-800 text-[10px]">SANDBOX SIMULATOR GATEWAY</span>
                    </div>
                    <p className="font-sans text-slate-700 leading-normal text-[11px]">
                      {responseWarning || "The scoping brief was simulated successfully in the secure sandbox."}
                    </p>
                    <p className="text-[10px] text-slate-500 leading-normal pt-1 font-sans">
                      Note: Because no active SMTP credentials are set in the environment, the complete HTML briefing docket has been successfully logged directly to the server terminal console.
                    </p>
                  </div>
                )}

                {/* Reset button */}
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#0F172A] hover:bg-slate-800 text-white font-sans font-bold text-xs rounded-full transition-colors cursor-pointer"
                  >
                    Submit Another Briefing
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

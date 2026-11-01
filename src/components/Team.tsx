import React, { useState } from "react";
import { TEAM_MEMBERS } from "../data";
import { TeamMember } from "../types";
import { Award, Mail, Phone, X, Search, Briefcase } from "lucide-react";

export const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [filter, setFilter] = useState<"all" | "legal" | "finance">("all");

  const filteredMembers = TEAM_MEMBERS.filter((m) => {
    if (filter === "legal") {
      return (
        m.role.toLowerCase().includes("legal") ||
        m.role.toLowerCase().includes("hr") ||
        m.specialty.toLowerCase().includes("labour") ||
        m.specialty.toLowerCase().includes("litigation")
      );
    }
    if (filter === "finance") {
      return (
        m.role.toLowerCase().includes("finance") ||
        m.role.toLowerCase().includes("audit") ||
        m.role.toLowerCase().includes("tax") ||
        m.specialty.toLowerCase().includes("taxation") ||
        m.specialty.toLowerCase().includes("valuations")
      );
    }
    return true;
  });

  return (
    <section id="team" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Description */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" id="team-header">
          <div className="max-w-xl">
            <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest block mb-2">
              Our Strength
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-none">
              Expert Partner Counsel
            </h2>
            <p className="font-sans text-xs sm:text-sm text-slate-500 mt-4 leading-relaxed">
              Our partners pool multi-disciplinary expertise to deliver robust compliance audits, litigation representations, and customized industrial solution services.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200/60 rounded-xl" id="team-filter-tabs">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-lg text-xs font-sans font-bold transition-all cursor-pointer ${
                filter === "all"
                  ? "bg-[#0F172A] text-white"
                  : "text-slate-600 hover:text-amber-700"
              }`}
            >
              All Partners
            </button>
            <button
              onClick={() => setFilter("legal")}
              className={`px-4 py-2 rounded-lg text-xs font-sans font-bold transition-all cursor-pointer ${
                filter === "legal"
                  ? "bg-[#0F172A] text-white"
                  : "text-slate-600 hover:text-amber-700"
              }`}
            >
              Legal & HR
            </button>
            <button
              onClick={() => setFilter("finance")}
              className={`px-4 py-2 rounded-lg text-xs font-sans font-bold transition-all cursor-pointer ${
                filter === "finance"
                  ? "bg-[#0F172A] text-white"
                  : "text-slate-600 hover:text-amber-700"
              }`}
            >
              Finance & Audit
            </button>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="team-members-grid">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-slate-200/60 rounded-2xl p-6 shadow-xs hover:shadow-md hover:border-amber-200 hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-between"
              id={`team-card-${member.id}`}
            >
              <div>
                {/* Years Experience Badge & Specialty */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 border border-amber-100 rounded text-[10px] font-mono font-bold text-amber-800">
                    <Award size={10} className="text-amber-600 animate-pulse" />
                    {member.experienceYears}+ Years Exp
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                    {member.specialty.split(",")[0]}
                  </span>
                </div>

                {/* Name & Qualifications */}
                <h3 className="font-display font-extrabold text-lg text-slate-950 leading-tight">
                  {member.name}
                </h3>
                <p className="text-xs font-sans text-amber-700 font-bold mt-1 leading-snug">
                  {member.role}
                </p>
                <p className="text-[11px] font-mono text-slate-500 mt-2 line-clamp-1 border-b border-slate-100 pb-3 font-semibold">
                  {member.qualifications}
                </p>

                {/* Short Bio Snippet */}
                <p className="font-sans text-xs text-slate-600 leading-relaxed mt-4 line-clamp-3">
                  {member.bioLines[0]}
                </p>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <span className="text-[10px] font-mono text-slate-400 font-semibold uppercase">
                  TCV Senior Partner
                </span>
                <button
                  onClick={() => setSelectedMember(member)}
                  className="px-4 py-2 bg-[#0F172A] hover:bg-slate-800 text-white font-sans font-bold text-xs tracking-wide rounded-full transition-colors cursor-pointer"
                  id={`view-bio-btn-${member.id}`}
                >
                  Read Bio
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modern High-End Bio Modal */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
          id="team-bio-modal"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 w-full max-w-2xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Decorative Element */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-600 via-amber-500 to-[#0F172A]" />

            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-5 right-5 p-2 bg-slate-50 hover:bg-slate-100 border border-slate-200/50 rounded-full text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {/* Details Grid */}
            <div className="pt-4">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-amber-50 border border-amber-100 rounded text-[10px] font-mono font-bold text-amber-800 mb-2">
                    {selectedMember.experienceYears}+ Years Industry Leadership
                  </div>
                  <h3 className="font-display font-extrabold text-2xl text-slate-950 tracking-tight leading-tight">
                    {selectedMember.name}
                  </h3>
                  <p className="text-sm font-sans text-amber-700 font-bold mt-1">
                    {selectedMember.role}
                  </p>
                  <p className="text-xs font-mono text-slate-500 mt-2 font-semibold">
                    {selectedMember.qualifications}
                  </p>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="space-y-4 mb-8">
                <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block">
                  Professional Biography & Expert Domain
                </span>
                {selectedMember.bioLines.map((line, lIdx) => (
                  <p key={lIdx} className="font-sans text-sm text-slate-600 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>

              {/* Associations if present */}
              {selectedMember.associations && selectedMember.associations.length > 0 && (
                <div className="mb-8 p-4 bg-slate-50 border border-slate-200/60 rounded-xl">
                  <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block mb-2">
                    Key Historical Associations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.associations.map((assoc, aIdx) => (
                      <span
                        key={aIdx}
                        className="px-2.5 py-1 bg-white border border-slate-200 rounded text-xs font-sans font-medium text-slate-700"
                      >
                        {assoc}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action and Direct Coordinates */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 -mx-6 -mb-6 p-6 mt-4 md:-mx-8 md:-mb-8 md:p-8">
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider uppercase block">
                    Direct Coordinates
                  </span>
                  <div className="flex flex-col gap-1.5 font-mono text-xs text-slate-700">
                    <a href={`mailto:${selectedMember.email}`} className="flex items-center gap-2 hover:text-amber-700 transition-colors font-bold">
                      <Mail size={12} className="text-amber-700" />
                      {selectedMember.email}
                    </a>
                    {selectedMember.phone && (
                      <a href={`tel:${selectedMember.phone.replace(/[\s+]/g, "")}`} className="flex items-center gap-2 hover:text-amber-700 transition-colors font-bold">
                        <Phone size={12} className="text-amber-700" />
                        {selectedMember.phone}
                      </a>
                    )}
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setSelectedMember(null);
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-5 py-3 bg-[#0F172A] hover:bg-slate-800 text-white font-sans font-bold text-xs tracking-wider uppercase rounded-full transition-colors shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Briefcase size={14} />
                  Book Consult with Partner
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

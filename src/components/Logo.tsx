import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "h-10", iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`} id="tcv-logo-container">
      {/* Handcrafted high-resolution SVG matching the TCV Logo exactly */}
      <svg
        viewBox="150 60 500 510"
        className="h-full w-auto select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="The Corporate Vashishtha Logo"
      >
        <g id="tcv-figures">
          {/* Outer-Left Figure (Charcoal) */}
          <path
            d="M 400 560 C 255 450, 195 270, 195 270 C 195 270, 235 285, 275 255 C 275 255, 305 390, 400 560 Z"
            fill="#374151"
            className="transition-all duration-300 hover:opacity-90"
          />
          <circle cx="230" cy="210" r="34" fill="#374151" />

          {/* Inner-Left Figure (Orange) */}
          <path
            d="M 400 560 C 335 380, 305 160, 305 160 C 305 160, 345 175, 380 150 C 380 150, 395 280, 400 560 Z"
            fill="#F47A00"
            className="transition-all duration-300 hover:opacity-90"
          />
          <circle cx="340" cy="100" r="34" fill="#F47A00" />

          {/* Inner-Right Figure (Charcoal) */}
          <path
            d="M 400 560 C 405 280, 420 150, 420 150 C 420 150, 455 175, 495 160 C 495 160, 465 380, 400 560 Z"
            fill="#374151"
            className="transition-all duration-300 hover:opacity-90"
          />
          <circle cx="460" cy="100" r="34" fill="#374151" />

          {/* Outer-Right Figure (Orange) */}
          <path
            d="M 400 560 C 495 390, 525 255, 525 255 C 525 255, 565 285, 605 270 C 605 270, 545 450, 400 560 Z"
            fill="#F47A00"
            className="transition-all duration-300 hover:opacity-90"
          />
          <circle cx="570" cy="210" r="34" fill="#F47A00" />
        </g>
      </svg>
      
      {!iconOnly && (
        <div className="flex flex-col select-none" id="tcv-brand-text">
          <span className="font-display font-bold text-lg tracking-tight text-slate-900 leading-none">
            THE CORPORATE
          </span>
          <span className="font-display font-extrabold text-xl tracking-wider text-orange-600 leading-none">
            VASHISHTHA
          </span>
          <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase font-semibold">
            Advisors & Engineers
          </span>
        </div>
      )}
    </div>
  );
};

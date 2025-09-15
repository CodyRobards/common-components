import React from "react";

interface DefaultProps {
  width?: string;
  height?: number;
}

export function WavelengthDefaultIcon({ width = "180", height = 140 }: DefaultProps) {
  return (
    <div>
      <svg width={width} height={height} viewBox="0 0 185 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width={width} height={height} fill="#7A7A7A" />
        <path
          d="M63.5 14.618L77.2811 57.0319L77.3934 57.3774H77.7566H122.353L86.2738 83.5906L85.9799 83.8042L86.0922 84.1497L99.8733 126.564L63.7939 100.35L63.5 100.137L63.2061 100.35L27.1267 126.564L40.9078 84.1497L41.0201 83.8042L40.7262 83.5906L4.64675 57.3774H49.2434H49.6066L49.7189 57.0319L63.5 14.618Z"
          fill="url(#paint0_linear_3571_2148)"
          fillOpacity=".0.5"
          stroke="#6B6B6B"
        />
        <rect x="102" y="16" width="70" height="115" fill="#4A4A4A" />
        <line x1="112" y1="24.5" x2="142" y2="24.5" stroke="#D9D9D9" strokeWidth="3" />
        <line x1="112" y1="41.5" x2="160" y2="41.5" stroke="#D9D9D9" strokeWidth="3" />
        <line x1="112" y1="51.5" x2="160" y2="51.5" stroke="#D9D9D9" strokeWidth="3" />
        <line x1="112" y1="61.5" x2="160" y2="61.5" stroke="#D9D9D9" strokeWidth="3" />
        <line x1="112" y1="71.5" x2="160" y2="71.5" stroke="#D9D9D9" strokeWidth="3" />
        <line x1="112" y1="81.5" x2="160" y2="81.5" stroke="#D9D9D9" strokeWidth="3" />
        <circle cx="48" cy="44" r="28" fill="#D9D9D9" fillOpacity="0.5" />
        <path d="M76 44.2478C76 59.5749 63.4645 72 48.0011 72C48.0011 72 49 19.5 49 16C49 16 20 16 20 44.2478C35.4634 44.2478 76 44.2478 76 44.2478Z" fill="#D9D9D9" fillOpacity="0.5" />
        <rect x="20" y="83" width="56" height="15" rx="4" fill="#D9D9D9" />
        <rect x="20" y="107" width="56" height="15" rx="4" fill="#ABABAB" />
        <defs>
          <linearGradient id="paint0_linear_3571_2148" x1="63.5" y1="13" x2="63.5" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A1A1A1" />
            <stop offset="1" stopColor="#606060" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

WavelengthDefaultIcon.displayName = "WavelengthDefaultIcon";

export default WavelengthDefaultIcon;

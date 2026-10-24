/**
 * Original illustration for the Management Solutions banner:
 * a registration certificate with an approval seal, plus a project timeline card.
 * Drawn in the brand colours; no external image needed.
 */
export default function RegistrationArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 320" className={className} role="img" aria-label="Illustration of an approved registration certificate and a project timeline">
      {/* faint maze lines from the logo */}
      <g fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="10" strokeLinecap="square">
        <path d="M18 40 V300 H300" />
        <path d="M40 18 H462 V220" />
        <path d="M440 40 V198" />
      </g>

      {/* back sheet */}
      <g transform="rotate(-7 190 175)">
        <rect x="88" y="62" width="200" height="230" rx="12" fill="#3A2690" />
      </g>

      {/* certificate */}
      <g transform="rotate(3 200 170)">
        <rect x="104" y="48" width="210" height="244" rx="12" fill="#FFFFFF" />
        <rect x="104" y="48" width="210" height="46" rx="12" fill="#1C095A" />
        <rect x="104" y="80" width="210" height="14" fill="#1C095A" />
        <rect x="124" y="64" width="78" height="8" rx="4" fill="#FFFFFF" />
        <rect x="124" y="78" width="46" height="6" rx="3" fill="#C9C3E6" />
        <rect x="104" y="94" width="210" height="4" fill="#E1041C" />
        {/* text lines */}
        <rect x="124" y="118" width="150" height="8" rx="4" fill="#1C095A" />
        <rect x="124" y="136" width="170" height="6" rx="3" fill="#E6E3F4" />
        <rect x="124" y="150" width="160" height="6" rx="3" fill="#E6E3F4" />
        <rect x="124" y="164" width="120" height="6" rx="3" fill="#E6E3F4" />
        {/* checklist */}
        {[192, 214, 236].map((y) => (
          <g key={y}>
            <rect x="124" y={y} width="14" height="14" rx="3" fill="#F3F2FA" stroke="#1C095A" strokeWidth="1.5" />
            <path d={`M127 ${y + 7} l3 3 l6 -6`} fill="none" stroke="#E1041C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="146" y={y + 4} width={y === 214 ? 70 : 90} height="6" rx="3" fill="#C9C3E6" />
          </g>
        ))}
        {/* signature */}
        <path d="M124 274 c10 -14 18 6 26 -6 s14 -10 22 2" fill="none" stroke="#1C095A" strokeWidth="2" strokeLinecap="round" />
        <rect x="124" y="280" width="64" height="2" fill="#C9C3E6" />
      </g>

      {/* approval seal */}
      <g transform="translate(296 246)">
        <circle r="36" fill="#E1041C" />
        <circle r="28" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 4" />
        <path d="M-12 1 l8 8 l17 -18" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* project timeline card */}
      <g transform="translate(320 46)">
        <rect width="140" height="128" rx="12" fill="#FFFFFF" />
        <rect x="16" y="16" width="62" height="7" rx="3.5" fill="#1C095A" />
        <rect x="16" y="29" width="40" height="5" rx="2.5" fill="#C9C3E6" />
        {/* gantt rows */}
        <rect x="16" y="50" width="108" height="1" fill="#E4E3EE" />
        <rect x="16" y="56" width="56" height="10" rx="5" fill="#1C095A" />
        <rect x="40" y="74" width="62" height="10" rx="5" fill="#3A2690" />
        <rect x="66" y="92" width="58" height="10" rx="5" fill="#E1041C" />
        <circle cx="124" cy="112" r="0" />
        <rect x="16" y="110" width="108" height="1" fill="#E4E3EE" />
      </g>

      {/* small building badge */}
      <g transform="translate(372 196)">
        <rect width="64" height="64" rx="14" fill="#FFFFFF" fillOpacity="0.12" />
        <path d="M18 48 V22 l14 -8 l14 8 V48 Z" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M26 30 h4 M34 30 h4 M26 38 h4 M34 38 h4 M14 48 h36" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

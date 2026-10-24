/**
 * Large line drawing of the Fidinda "F" maze mark.
 * Strokes draw themselves in once on page load (disabled for reduced motion).
 */
const indigo = [
  "M10 10 V190 H190 V60",
  "M30 30 V170 H170 V60",
  "M50 110 V150 H150 V110",
  "M90 110 V130 H130",
];
const red = ["M30 10 H190", "M50 30 H170", "M50 30 V90", "M50 60 H120", "M150 60 V90"];

export default function Mark({
  className = "",
  animate = true,
  tone = "dark",
}: {
  className?: string;
  animate?: boolean;
  tone?: "dark" | "light";
}) {
  const lineColor = tone === "dark" ? "rgba(255,255,255,0.9)" : "#1C095A";
  const path = (d: string, color: string, i: number) => (
    <path
      key={d}
      d={d}
      stroke={color}
      pathLength={1}
      strokeDasharray={animate ? 1 : undefined}
      strokeDashoffset={animate ? 1 : undefined}
      className={animate ? "animate-draw" : undefined}
      style={animate ? { animationDelay: `${150 + i * 110}ms` } : undefined}
    />
  );
  return (
    <svg viewBox="0 0 200 200" fill="none" strokeWidth={7} strokeLinecap="square" className={className} aria-hidden="true">
      {indigo.map((d, i) => path(d, lineColor, i))}
      {red.map((d, i) => path(d, "#E1041C", i + indigo.length))}
    </svg>
  );
}

import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

/**
 * Full horizontal logo.
 * variant="auto": colour logo in light theme, white logo in dark theme.
 * variant="white": always white (for navy backgrounds).
 */
export default function Logo({ variant = "auto", className = "" }: { variant?: "auto" | "color" | "white"; className?: string }) {
  const img = "h-10 w-auto sm:h-12";
  return (
    <Link href="/" aria-label={`${site.name} home`} className={`inline-flex shrink-0 ${className}`}>
      {variant === "white" ? (
        <Image src="/logo-white.png" alt={site.name} width={620} height={126} className={img} />
      ) : variant === "color" ? (
        <Image src="/logo.png" alt={site.name} width={620} height={126} priority className={img} />
      ) : (
        <>
          <Image src="/logo.png" alt={site.name} width={620} height={126} priority className={`${img} dark:hidden`} />
          <Image src="/logo-white.png" alt="" aria-hidden="true" width={620} height={126} priority className={`${img} hidden dark:block`} />
        </>
      )}
    </Link>
  );
}

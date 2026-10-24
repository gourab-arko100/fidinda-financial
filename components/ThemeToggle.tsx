"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./Icons";

/** Switches between light and dark. The choice is saved in this browser. */
export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
    setDark(next);
  }

  const label = dark ? "Switch to light theme" : "Switch to dark theme";
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`relative flex h-11 w-11 items-center justify-center rounded-full border border-line text-heading transition-colors hover:border-heading ${className}`}
    >
      <SunIcon className={`absolute h-5 w-5 transition-all duration-300 ${dark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"}`} />
      <MoonIcon className={`absolute h-5 w-5 transition-all duration-300 ${dark ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
    </button>
  );
}

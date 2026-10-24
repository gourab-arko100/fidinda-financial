"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav } from "@/data/site";
import Logo from "./Logo";
import TopBar from "./TopBar";
import ThemeToggle from "./ThemeToggle";
import { ChevronDown, CloseIcon, MenuIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    setOpen(false);
    setDropdown(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && (setDropdown(false), setOpen(false));
    const onClick = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropdown(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      <TopBar />
      <div className={`border-b bg-surface/95 backdrop-blur transition-shadow ${scrolled ? "border-line shadow-[0_6px_24px_-12px_rgba(28,9,90,0.25)]" : "border-line"}`}>
        <div className="container flex h-[76px] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) =>
                item.children ? (
                  <li key={item.href} ref={dropRef} className="relative" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
                    <button
                      type="button"
                      aria-expanded={dropdown}
                      aria-haspopup="true"
                      onClick={() => setDropdown((v) => !v)}
                      className={`nav-link flex items-center gap-1 ${isActive(item.href) ? "nav-link-active" : ""}`}
                    >
                      {item.label} <ChevronDown className={`h-4 w-4 transition-transform ${dropdown ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`absolute left-0 top-full pt-2 transition ${dropdown ? "visible opacity-100" : "invisible opacity-0"}`}>
                      <ul className="w-60 rounded-lg border border-line bg-surface p-2 shadow-[0_18px_40px_-16px_rgba(28,9,90,0.35)]">
                        <li>
                          <Link href={item.href} className="block rounded-md px-3 py-2 text-sm font-semibold text-heading hover:bg-paper">
                            All services
                          </Link>
                        </li>
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link href={c.href} className={`block rounded-md px-3 py-2 text-sm hover:bg-paper ${pathname === c.href ? "text-accent-ink" : "text-heading/80"}`}>
                              {c.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Link href="/request-quotation" className="btn-red hidden sm:inline-flex">
              Request a Quote
            </Link>
            <button
              type="button"
              className="rounded-lg p-2 text-heading hover:bg-paper lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className={`overflow-hidden border-t border-line bg-surface transition-[max-height] duration-300 lg:hidden ${open ? "max-h-[80vh]" : "max-h-0 border-t-0"}`}>
          <nav aria-label="Mobile" className="container py-4">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`block rounded-lg px-3 py-2.5 font-medium ${isActive(item.href) ? "bg-paper text-heading" : "text-heading/80"}`}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-4 mt-1 space-y-1 border-l-2 border-accent-600/70 pl-3">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} className={`block rounded-lg px-3 py-2 text-sm ${pathname === c.href ? "text-accent-ink" : "text-muted"}`}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/request-quotation" className="btn-red mt-4 w-full">Request a Quote</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

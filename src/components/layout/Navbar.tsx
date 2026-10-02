"use client";

/**
 * Navbar — sticky, accessible, responsive.
 * Desktop: logo + nav links + CTA button.
 * Mobile: hamburger toggles a slide-down drawer.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "@/../public/logo.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[oklch(0.99_0.003_240/0.90)] backdrop-blur-md border-b border-[oklch(0.88_0.01_250)]">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight text-[oklch(0.15_0.02_260)]">
          {/* Geometric brand mark */}
          <span aria-hidden className="flex items-center justify-center w-7 h-7">
            <Image src={Logo} alt="Logo" width={20} height={20} className="size-5" />            
          </span>
          XYLEXIS
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "relative py-1 transition-colors",
                  pathname === href
                    ? "text-[oklch(0.55_0.22_255)] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-[oklch(0.55_0.22_255)]"
                    : "text-[oklch(0.50_0.02_260)] hover:text-[oklch(0.15_0.02_260)]"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex">
          <Link
            href="/contact"
            className="rounded-full bg-[oklch(0.55_0.22_255)] px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-[oklch(0.48_0.22_255)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[oklch(0.55_0.22_255)]"
          >
            Get Started →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md text-[oklch(0.50_0.02_260)] hover:text-[oklch(0.15_0.02_260)]"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-[oklch(0.88_0.01_250)] bg-[oklch(0.99_0.003_240)] px-4 pb-6 pt-4"
        >
          <ul className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block py-1",
                    pathname === href
                      ? "text-[oklch(0.55_0.22_255)] font-semibold"
                      : "text-[oklch(0.50_0.02_260)]"
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block w-full rounded-full bg-[oklch(0.55_0.22_255)] px-5 py-3 text-center font-semibold text-white"
              >
                Get Started →
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

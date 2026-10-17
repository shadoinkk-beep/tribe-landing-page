// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Dynamic links
  const links = [
    { name: "Home", href: "/" },
    { name: "Our Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
  ];
  const forceSolidNav = pathname === "/projects";
  const solidNav = scrolled || forceSolidNav;

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-[100] transition-all duration-500 ease-out ${
          solidNav
            ? "bg-light/95 backdrop-blur-md border-b border-dark/15 shadow-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo — always visible */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/tribe-logo-dark.png"
              alt="Tribe Logo"
              width={189}
              height={64}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-dark">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative ${
                  pathname === link.href || (link.href === "/projects" && pathname.startsWith("/projects/"))
                    ? "text-brown-deep after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-brown-deep"
                    : "text-brown hover:text-brown-deep"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#contact"
              className="rounded-lg border border-dark bg-dark px-4 py-2 text-sm font-semibold text-light transition hover:bg-brown-deep"
            >
              Know More
            </Link>
            <Link
              href="/#contact"
              className="rounded-lg border border-dark bg-transparent px-4 py-2 text-sm font-semibold text-dark transition hover:bg-dark hover:text-light"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-dark"
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <FiMenu className="h-7 w-7" />
          </button>
        </nav>
      </header>

      {/* Mobile Fullscreen Menu with Splash Animation */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[999] flex flex-col items-center justify-center space-y-8 bg-light text-xl font-medium transform transition-all duration-500 ease-in-out origin-top ${
          isOpen ? "scale-100 opacity-100 pointer-events-auto" : "scale-95 opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Close Button */}
        <button
          type="button"
          className="absolute top-4 right-4 p-2 text-dark"
          onClick={() => setIsOpen(false)}
          aria-label="Close menu"
        >
          <FiX className="h-7 w-7" />
        </button>

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`transition-opacity duration-300 ${
              pathname === link.href || (link.href === "/projects" && pathname.startsWith("/projects/"))
                ? "text-brown-deep font-semibold"
                : "text-brown hover:text-brown-deep"
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile Buttons */}
        <div className="flex flex-col gap-4 w-3/4">
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="button_black_bg text-center"
          >
            Know More
          </Link>
          <Link
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="button_white_bg text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

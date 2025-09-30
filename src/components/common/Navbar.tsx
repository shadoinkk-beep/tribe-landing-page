// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic links
  const links = [
    { name: "Home", href: "/" },
    { name: "Our Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="border-b fixed bg-[#FBF0D9] left-0 right-0 border-black text-black z-20">
      <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/Tribe_logo_text.png"
            alt="Tribe Logo"
            className="h-8"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative ${
                pathname === link.href
                  ? "text-gray-900 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-gray-900"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="#contact" className="button_black_bg">
            Get a Quote
          </Link>
          <Link href="#contact" className="button_white_bg">
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu className="h-7 w-7" />
        </button>
      </nav>

      {/* Mobile Fullscreen Menu with Splash Animation */}
      <div
        className={`fixed inset-0 bg-[#FBF0D9] z-50 flex flex-col items-center justify-center space-y-8 text-xl font-medium transform transition-all duration-500 ease-in-out origin-top ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 p-2"
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
              pathname === link.href
                ? "text-black font-semibold"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {link.name}
          </Link>
        ))}

        {/* Mobile Buttons */}
        <div className="flex flex-col gap-4 w-3/4">
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="button_black_bg text-center"
          >
            Get a Quote
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="button_white_bg text-center"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

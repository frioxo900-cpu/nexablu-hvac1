"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Brands", href: "/brands" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-700 text-white text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
          <div>
            📍 Plot No.312, Shop No.5-B, Near Kurla Court, LBS Marg, Kurla West,
            Mumbai – 400070
          </div>

          <div className="hidden md:flex gap-6">
            <a href="tel:7977709400">📞 7977709400</a>
            <a href="tel:8928167041">📞 8928167041</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-bold text-blue-700"
          >
            NEXABLU
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-8 font-medium">

            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-blue-700 transition"
              >
                {item.name}
              </Link>
            ))}

          </nav>

          {/* Quote Button */}
          <Link
            href="/contact"
            className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Request Quote
          </Link>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="flex flex-col px-6 py-4 gap-4">

              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

            </div>
          </div>
        )}
      </header>
    </>
  );
}

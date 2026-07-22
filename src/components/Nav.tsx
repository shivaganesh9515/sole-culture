"use client";

import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand-white border-b-2 border-brand-black">
      <nav className="max-w-[1920px] mx-auto flex justify-between items-center h-16 pl-6 pr-2">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center text-brand-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 fill-white">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">SOLE CULTURE</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center h-full">
          <a href="#" className="h-full flex items-center px-6 hover:bg-brand-lime border-l-2 border-brand-black font-bold text-sm uppercase transition-colors">New Collection</a>
          <a href="#" className="h-full flex items-center px-6 hover:bg-brand-lime border-l-2 border-brand-black font-bold text-sm uppercase transition-colors">Catalog</a>
          <a href="#" className="h-full flex items-center px-6 hover:bg-brand-lime border-l-2 border-brand-black font-bold text-sm uppercase transition-colors">About Brand</a>
          <a href="#" className="h-full flex items-center px-6 hover:bg-brand-lime border-l-2 border-brand-black font-bold text-sm uppercase transition-colors">Blog</a>
          <a href="#" className="h-full flex items-center px-6 hover:bg-brand-lime border-l-2 border-brand-black font-bold text-sm uppercase transition-colors">Contact Us</a>
          <a href="#" className="h-full flex items-center px-6 hover:bg-brand-lime border-l-2 border-brand-black font-bold text-sm uppercase transition-colors">Cart (0)</a>
          <button className="h-full bg-brand-black text-brand-white px-8 font-bold uppercase hover:bg-brand-lime hover:text-brand-black transition-colors border-l-2 border-brand-black">
            Shop All New
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-4" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-brand-white border-b-2 border-brand-black absolute w-full left-0 top-16 shadow-brutal-lg z-40">
          {["New Collection", "Catalog", "About Brand", "Blog", "Contact Us", "Cart (0)"].map((item) => (
            <a key={item} href="#" className="block p-4 border-t border-brand-gray font-bold uppercase hover:bg-brand-lime">
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

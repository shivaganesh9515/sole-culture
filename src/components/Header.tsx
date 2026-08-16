'use client';
import { useState } from 'react';
import { Menu, Star } from 'lucide-react';

const navLinks = ['New Collection', 'Catalog', 'About Brand', 'Blog', 'Contact Us', 'Cart (0)'];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-brand-white border-b-2 border-brand-black">
      <nav className="max-w-[1920px] mx-auto flex justify-between items-center h-16 pl-6 pr-2">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-black rounded-full flex items-center justify-center text-brand-white">
            <Star className="w-4 h-4 fill-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase italic">SOLE CULTURE</span>
        </a>

        <div className="hidden md:flex items-center h-full">
          {navLinks.map((link) => (
            <a key={link} href="#" className="h-full flex items-center px-6 hover:bg-brand-lime border-l-2 border-brand-black font-bold text-sm uppercase transition-colors">
              {link}
            </a>
          ))}
          <button className="h-full bg-brand-black text-brand-white px-8 font-bold uppercase hover:bg-brand-lime hover:text-brand-black transition-colors border-l-2 border-brand-black ml-0">
            Shop All New
          </button>
        </div>

        <button className="md:hidden p-4" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-brand-white border-b-2 border-brand-black absolute w-full left-0 top-16 shadow-brutal-lg z-40">
          {navLinks.map((link) => (
            <a key={link} href="#" className="block p-4 border-t border-brand-gray font-bold uppercase hover:bg-brand-lime">
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

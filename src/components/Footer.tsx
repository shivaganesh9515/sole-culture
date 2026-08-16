'use client';
import { Star, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-lime py-12 border-t-2 border-white">
      <div className="max-w-[1920px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center text-brand-black">
              <Star className="w-4 h-4 fill-black" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic text-white">SOLE CULTURE</span>
          </div>
          <p className="text-sm text-gray-400 font-mono">
            &copy; 2026 Sole Culture Inc.<br />Designed for the bold.
          </p>
        </div>

        <div>
          <h4 className="font-bold uppercase text-white mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-gray-400 font-mono">
            {['New Arrivals', 'Best Sellers', 'Collaborations', 'Sale'].map((item) => (
              <li key={item} className="hover:text-brand-lime cursor-pointer transition-colors">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400 font-mono">
            {['Help Center', 'Returns', 'Size Guide', 'Contact Us'].map((item) => (
              <li key={item} className="hover:text-brand-lime cursor-pointer transition-colors">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase text-white mb-4">Newsletter</h4>
          <div className="flex">
            <input type="email" placeholder="ENTER EMAIL" className="bg-transparent border border-brand-lime p-2 text-white w-full font-mono focus:outline-none placeholder:text-gray-600" />
            <button className="bg-brand-lime text-brand-black px-4 font-bold hover:bg-brand-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

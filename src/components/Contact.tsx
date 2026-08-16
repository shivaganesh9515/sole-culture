'use client';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="relative bg-brand-lime min-h-screen border-b-2 border-brand-black overflow-hidden p-4 md:p-12">
      {/* Decorative vertical text */}
      <div className="absolute right-0 top-0 h-full w-12 bg-white/50 border-l-2 border-brand-black hidden xl:flex items-center justify-center z-0">
        <span className="writing-vertical-rl rotate-180 font-bold tracking-widest text-xs opacity-50 whitespace-nowrap">
          E-COMMERCE WEBSITE DESIGN • E-COMMERCE WEBSITE DESIGN • E-COMMERCE WEBSITE DESIGN
        </span>
      </div>

      {/* Chain decoration */}
      <svg className="absolute right-20 bottom-0 w-48 h-full z-0 opacity-20 pointer-events-none" viewBox="0 0 100 400" preserveAspectRatio="none">
        <path d="M50,0 Q60,50 40,100 T60,200 T40,300 T60,400" stroke="black" strokeWidth="10" fill="none" />
        <path d="M50,0 Q60,50 40,100 T60,200 T40,300 T60,400" stroke="white" strokeWidth="2" fill="none" />
      </svg>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
        {/* Left Text Block */}
        <div className="md:col-span-5 flex flex-col justify-center space-y-6 pt-12">
          <div className="uppercase font-bold text-xs tracking-widest border-b border-brand-black w-fit pb-1">Contact</div>
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter">
            Stay Tuned <br /> To Our New <br /> Drops and Updates
          </h2>
          <p className="text-sm md:text-base font-mono leading-relaxed max-w-md">
            Consumers no longer follow a unified standard of what is considered &quot;fashionable&quot; or &quot;beautiful&quot;.
            We believe that the clothes we wear reflect our personalities and we want to empower everyone to
            explore and express their individuality.
          </p>
          <button className="w-fit bg-brand-white px-8 py-3 border-2 border-brand-black font-bold uppercase text-sm shadow-brutal hover:bg-brand-black hover:text-brand-white transition-colors flex items-center gap-2">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </button>

          {/* Model Image */}
          <div className="relative mt-12 w-full max-w-sm">
            <div className="absolute -top-6 -left-6 text-4xl">✨</div>
            <img src="https://images.pexels.com/photos/5095238/pexels-photo-5095238.jpeg?w=800&auto=format&fit=crop" alt="Model" className="w-full h-[400px] object-cover border-2 border-brand-black shadow-brutal-lg grayscale hover:grayscale-0 transition-all duration-500" />
          </div>
        </div>

        {/* Right Collage Block */}
        <div className="md:col-span-7 relative h-full min-h-[800px]">
          {/* Polaroid 1 */}
          <div className="absolute top-0 right-0 md:right-10 w-64 md:w-80 bg-white p-4 pb-12 border-2 border-brand-black shadow-brutal-lg rotate-3 hover:rotate-0 transition-all z-20 hover:z-50">
            <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
              <span>Sole Culture</span><span>Summer 2026</span>
            </div>
            <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?w=800&auto=format&fit=crop" alt="Group" className="w-full aspect-[4/5] object-cover border border-brand-gray" />
          </div>

          {/* Polaroid 2 */}
          <div className="absolute top-[300px] left-0 md:left-10 w-56 bg-white p-3 pb-8 border-2 border-brand-black shadow-brutal-lg -rotate-6 hover:rotate-0 transition-all z-30 hover:z-50">
            <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
              <span>Sole Culture</span><span>Limited</span>
            </div>
            <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=800&auto=format&fit=crop" alt="Green Shoe" className="w-full aspect-square object-cover" />
          </div>

          {/* Polaroid 3 */}
          <div className="absolute bottom-20 left-10 md:left-32 w-60 bg-white p-3 pb-8 border-2 border-brand-black shadow-brutal-lg rotate-2 hover:rotate-0 transition-all z-10 hover:z-50">
            <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
              <span>Sole Culture</span><span>Unisex</span>
            </div>
            <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop" alt="Purple Shoe" className="w-full aspect-square object-cover" />
          </div>

          {/* Polaroid 4 */}
          <div className="absolute bottom-0 right-0 md:right-20 w-64 bg-white p-3 pb-8 border-2 border-brand-black shadow-brutal-lg -rotate-3 hover:rotate-0 transition-all z-20 hover:z-50">
            <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
              <span>Sole Culture</span><span>Platform</span>
            </div>
            <img src="https://images.unsplash.com/photo-1562183241-b937e95585b6?q=80&w=800&auto=format&fit=crop" alt="Pink Shoe" className="w-full aspect-square object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

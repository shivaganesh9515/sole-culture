"use client";

import RevealMotion from "./RevealMotion";

const hotspots = [
  { left: "30%", top: "40%", num: 1, label: "Breathable Mesh Upper" },
  { left: "60%", top: "25%", num: 2, label: "Customizable Lace Loops" },
  { left: "80%", top: "60%", num: 3, label: "Impact Absorbing Sole" },
  { left: "45%", top: "80%", num: 4, label: "Arch Support Technology" },
];

export default function HeroSection() {
  return (
    <section className="relative border-b-2 border-brand-black overflow-hidden">
      {/* Background Clouds */}
      <div
        className="absolute inset-0 z-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1594492215849-f554425dd943?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px] relative z-10">
        {/* Left: Customization Form */}
        <div className="p-8 md:p-16 flex flex-col justify-center border-r-2 border-brand-black bg-white/80 backdrop-blur-sm lg:bg-transparent lg:backdrop-blur-none">
          <RevealMotion>
            <h1 className="text-5xl md:text-7xl font-black leading-[0.9] mb-12 uppercase tracking-tighter">
              Create your first <br />
              customizable{" "}
              <span className="text-stroke-black text-transparent bg-clip-text bg-brand-black">
                Sneakers
              </span>
            </h1>
          </RevealMotion>

          <RevealMotion delay={100}>
            <form className="space-y-6 max-w-md relative z-20">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    className="w-full border-2 border-brand-black p-3 bg-white font-mono text-sm focus:outline-none focus:ring-4 focus:ring-brand-lime"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    className="w-full border-2 border-brand-black p-3 bg-white font-mono text-sm focus:outline-none focus:ring-4 focus:ring-brand-lime"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider">
                  Tell us about your wishes
                </label>
                <textarea
                  rows={4}
                  placeholder="YOUR WISHES"
                  className="w-full border-2 border-brand-black p-3 bg-white font-mono text-sm focus:outline-none focus:ring-4 focus:ring-brand-lime resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full bg-brand-black text-brand-white py-4 font-bold uppercase tracking-widest hover:bg-brand-lime hover:text-brand-black transition-all border-2 border-brand-black shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
              >
                Send Message
              </button>
            </form>
          </RevealMotion>
        </div>

        {/* Right: Product Showcase */}
        <div className="relative flex items-center justify-center min-h-[400px] bg-brand-sky/30 overflow-hidden">
          {/* Big Background Text */}
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white opacity-40 select-none italic -rotate-12 pointer-events-none whitespace-nowrap">
            FUTURE
          </h2>

          {/* Main Shoe Image */}
          <div className="relative w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500 p-6">
            <img
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop"
              alt="White Sneaker"
              className="w-full h-auto drop-shadow-2xl relative z-10 rotate-[-15deg] block"
            />

            {/* Hotspots */}
            {hotspots.map((h) => (
              <div
                key={h.num}
                className="absolute z-20 group"
                style={{ left: h.left, top: h.top }}
              >
                <div className="w-8 h-8 bg-brand-lime rounded-full border-2 border-brand-black flex items-center justify-center font-bold cursor-pointer hover:scale-125 transition-transform shadow-md">
                  {h.num}
                </div>
                <div className="absolute left-10 top-0 w-48 bg-white border-2 border-brand-black p-2 text-xs font-bold uppercase transition-opacity duration-200 pointer-events-none opacity-0 group-hover:opacity-100">
                  {h.label}
                </div>
                <div className="absolute right-full top-1/2 h-0.5 bg-brand-black transition-all duration-200 w-0 group-hover:w-8" />
              </div>
            ))}
          </div>

          {/* Floating text bubbles */}
          <div className="absolute top-10 left-10 bg-white border-2 border-brand-black p-3 max-w-[200px] shadow-brutal rotate-[-2deg] hidden md:block">
            <p className="text-xs font-mono">
              Create{"\u2122"}: the lightweight foam resin that isn&apos;t rubber,
              isn&apos;t plastic.
            </p>
          </div>
          <div className="absolute bottom-20 right-10 bg-white border-2 border-brand-black p-3 max-w-[200px] shadow-brutal rotate-[3deg] hidden md:block">
            <p className="text-xs font-mono">
              Heel strap keeps this thing on your feet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

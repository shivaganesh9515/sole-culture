"use client";

import RevealMotion from "./RevealMotion";

const products = [
  {
    title: "Vortex Runner",
    color: "Carbon / Neon",
    price: "$185",
    badge: "New",
    img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop",
    badgeClass: "bg-brand-lime border-2 border-brand-black text-black",
  },
  {
    title: "Air Glider",
    color: "Triple White",
    price: "$210",
    badge: null,
    img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Court High",
    color: "Mustard / Black",
    price: "$150",
    badge: "Hot",
    img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=800&auto=format&fit=crop",
    badgeClass: "bg-brand-black text-brand-lime border-2 border-brand-white text-white",
  },
  {
    title: "Urban Trek",
    color: "Cloud Gray",
    price: "$195",
    badge: null,
    img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TrendingSection() {
  return (
    <section className="py-24 px-6 border-b-2 border-brand-black bg-brand-gray/30">
      <div className="max-w-[1920px] mx-auto">
        <RevealMotion>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Trending <br />
              <span className="text-brand-lime bg-brand-black px-4 inline-block transform -rotate-2">
                Heat
              </span>
            </h2>
            <div className="flex items-center gap-4">
              <p className="font-mono text-sm max-w-xs text-right hidden md:block">
                Our most requested silhouettes. <br />
                Limited stock available for immediate shipping.
              </p>
              <a
                href="#"
                className="bg-brand-white border-2 border-brand-black px-6 py-3 font-bold uppercase text-sm hover:bg-brand-lime transition-colors shadow-brutal"
              >
                View All
              </a>
            </div>
          </div>
        </RevealMotion>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={p.title} className="group">
              <RevealMotion delay={i * 100}>
                <div className="relative bg-white border-2 border-brand-black mb-4 overflow-hidden aspect-[4/5] shadow-brutal group-hover:shadow-brutal-lg group-hover:-translate-y-1 transition-all duration-300">
                  {p.badge && (
                    <span
                      className={`absolute top-3 left-3 px-2 py-1 text-xs font-bold z-10 uppercase tracking-widest ${p.badgeClass}`}
                    >
                      {p.badge}
                    </span>
                  )}
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button className="absolute bottom-0 left-0 w-full bg-brand-black text-white py-4 font-bold uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-brand-lime hover:text-brand-black border-t-2 border-brand-black">
                    <span>Add to Bag</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </button>
                </div>
              </RevealMotion>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold uppercase text-xl leading-tight group-hover:text-brand-lime bg-brand-black text-white px-1 inline-block transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-mono mt-1 uppercase">
                    {p.color}
                  </p>
                </div>
                <span className="font-mono font-bold text-lg border-b-2 border-brand-lime">
                  {p.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

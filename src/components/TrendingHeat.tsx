'use client';
import { ShoppingBag } from 'lucide-react';

const products = [
  { name: 'Vortex Runner', color: 'Carbon / Neon', price: '$185', image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?q=80&w=800&auto=format&fit=crop', badge: 'New', badgeStyle: 'bg-brand-lime border-brand-black text-brand-black' },
  { name: 'Air Glider', color: 'Triple White', price: '$210', image: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Court High', color: 'Mustard / Black', price: '$150', image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=800&auto=format&fit=crop', badge: 'Hot', badgeStyle: 'bg-brand-black text-brand-lime border-white' },
  { name: 'Urban Trek', color: 'Cloud Gray', price: '$195', image: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=800&auto=format&fit=crop' },
];

export default function TrendingHeat() {
  return (
    <section className="py-24 px-6 border-b-2 border-brand-black bg-brand-gray/30">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Trending <br /><span className="text-brand-lime bg-brand-black px-4 inline-block transform -rotate-2">Heat</span>
          </h2>
          <div className="flex items-center gap-4">
            <p className="font-mono text-sm max-w-xs text-right hidden md:block">
              Our most requested silhouettes. <br />Limited stock available for immediate shipping.
            </p>
            <a href="#" className="bg-brand-white border-2 border-brand-black px-6 py-3 font-bold uppercase text-sm hover:bg-brand-lime transition-colors shadow-brutal">
              View All
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="relative bg-white border-2 border-brand-black mb-4 overflow-hidden aspect-[4/5] shadow-brutal group-hover:shadow-brutal-lg group-hover:-translate-y-1 transition-all duration-300">
                {p.badge && (
                  <span className={`absolute top-3 left-3 border-2 px-2 py-1 text-xs font-bold z-10 uppercase tracking-widest ${p.badgeStyle}`}>
                    {p.badge}
                  </span>
                )}
                <img src={p.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={p.name} />
                <button className="absolute bottom-0 left-0 w-full bg-brand-black text-white py-4 font-bold uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2 hover:bg-brand-lime hover:text-brand-black border-t-2 border-brand-black">
                  Add to Bag <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold uppercase text-xl leading-tight group-hover:text-brand-lime bg-brand-black text-white px-1 inline-block transition-colors">{p.name}</h3>
                  <p className="text-xs text-gray-500 font-mono mt-1 uppercase">{p.color}</p>
                </div>
                <span className="font-mono font-bold text-lg border-b-2 border-brand-lime">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

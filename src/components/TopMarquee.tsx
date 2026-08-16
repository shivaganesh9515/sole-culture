'use client';

export default function TopMarquee() {
  return (
    <div className="bg-brand-lime text-brand-black overflow-hidden py-2 whitespace-nowrap relative border-b-2 border-brand-black z-50">
      <div className="inline-block animate-marquee-left font-bold uppercase tracking-wider text-sm md:text-base">
        {[...Array(8)].map((_, i) => (
          <span key={i} className="mx-4">+++ OPEN FOR NEW COLLECTION +++ NEW DROPS AVAILABLE NOW</span>
        ))}
      </div>
    </div>
  );
}

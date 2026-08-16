'use client';

const steps = [
  { num: '1', title: 'Select Base', desc: 'Choose from our 4 signature silhouettes designed for specific movement profiles and aesthetic preferences.', circleBg: 'bg-brand-lime border-white text-brand-black', shadow: 'shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]' },
  { num: '2', title: 'Customize', desc: 'Upload your art, pick your materials, and define your color palette using our 3D builder.', circleBg: 'bg-brand-black border-white text-brand-lime', shadow: 'shadow-[8px_8px_0px_0px_rgba(210,248,0,1)]' },
  { num: '3', title: 'Flex It', desc: 'Receive your 1-of-1 pair in 2 weeks. Wear them, tag us, get featured on our homepage.', circleBg: 'bg-brand-white border-brand-lime text-brand-black', shadow: 'shadow-[8px_8px_0px_0px_rgba(100,100,100,1)]' },
];

export default function Process() {
  return (
    <section className="bg-brand-black text-brand-white py-24 px-6 border-b-2 border-brand-black overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <p className="text-brand-lime font-mono uppercase tracking-widest mb-4">/// Made For You</p>
          <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-transparent text-stroke-white">
            The Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-brand-lime border-y border-white -z-10" style={{ backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(0,0,0,1) 50%)', backgroundSize: '20px 20px' }} />

          {steps.map((step, i) => (
            <div key={i} className="relative group">
              <div className={`w-24 h-24 border-4 flex items-center justify-center text-4xl font-black rounded-full mx-auto mb-8 ${step.circleBg} ${step.shadow} group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all`}>
                {step.num}
              </div>
              <h3 className="text-3xl font-black uppercase text-center mb-4 italic">{step.title}</h3>
              <p className="text-center font-mono text-gray-400 text-sm leading-relaxed px-4">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <button className="bg-brand-lime text-brand-black px-12 py-5 font-black uppercase tracking-widest text-lg hover:bg-white transition-colors border-2 border-white shadow-[8px_8px_0px_0px_#ffffff]">
            Start Customizing
          </button>
        </div>
      </div>
    </section>
  );
}

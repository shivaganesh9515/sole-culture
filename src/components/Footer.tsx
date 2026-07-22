export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-lime py-12 border-t-2 border-white">
      <div className="max-w-[1920px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-lime rounded-full flex items-center justify-center text-brand-black">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 fill-black"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic text-white">
              SOLE CULTURE
            </span>
          </div>
          <p className="text-sm text-gray-400 font-mono">
            {`\u00A9`} 2026 Sole Culture Inc.
            <br />
            Designed for the bold.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-bold uppercase text-white mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-gray-400 font-mono">
            {["New Arrivals", "Best Sellers", "Collaborations", "Sale"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-brand-lime cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-bold uppercase text-white mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400 font-mono">
            {["Help Center", "Returns", "Size Guide", "Contact Us"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-brand-lime cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold uppercase text-white mb-4">Newsletter</h4>
          <div className="flex">
            <input
              type="email"
              placeholder="ENTER EMAIL"
              className="bg-transparent border border-brand-lime p-2 text-white w-full font-mono focus:outline-none placeholder:text-gray-600"
            />
            <button className="bg-brand-lime text-brand-black px-4 font-bold hover:bg-brand-white transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';

export default function TradeExport() {
  return (
    <section className="relative w-full bg-[#1c1c1c] py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-[#dfa63a] text-xs font-bold tracking-[0.4em] uppercase mb-8">Export Solutions</span>
        <h2 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase mb-12">
          Out of <span className="italic text-[#dfa63a]">Ghana.</span>
        </h2>
        <p className="max-w-2xl text-white/60 font-mono text-sm md:text-lg leading-relaxed mb-16">
          From raw commodities to artisanal finished goods &mdash; we facilitate the legal and seamless export of Ghanaian excellence to global markets. We handle the logistics, you provide the product.
        </p>
        <div className="w-full h-[1px] bg-white/10 mb-16"></div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full">
           <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#dfa63a] uppercase tracking-widest mb-2">01</span>
              <span className="text-white font-serif italic">Legality Check</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#dfa63a] uppercase tracking-widest mb-2">02</span>
              <span className="text-white font-serif italic">Logistics Prep</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#dfa63a] uppercase tracking-widest mb-2">03</span>
              <span className="text-white font-serif italic">Quality Audit</span>
           </div>
           <div className="flex flex-col">
              <span className="text-[10px] font-bold text-[#dfa63a] uppercase tracking-widest mb-2">04</span>
              <span className="text-white font-serif italic">Global Delivery</span>
           </div>
        </div>
      </div>
    </section>
  );
}

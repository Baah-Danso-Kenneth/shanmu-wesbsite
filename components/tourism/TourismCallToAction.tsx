import React from 'react';

export default function TourismCallToAction() {
  return (
    <section className="relative w-full bg-[#dfa63a] py-20 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-[#1c1c1c] mb-8 leading-tight">
          Ready for your next <br /> <span className="italic">global journey?</span>
        </h2>
        <p className="text-sm md:text-base font-mono text-[#1c1c1c]/80 uppercase tracking-widest mb-12">
          Join our exclusive network of global travelers and business leaders.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="/contact" className="px-8 py-4 border-2 border-[#1c1c1c] text-[10px] font-bold tracking-widest uppercase hover:bg-[#1c1c1c] hover:text-[#dfa63a] transition-all duration-300">
            Contact an Advisor
          </a>
          <a href="/about" className="px-8 py-4 bg-[#1c1c1c] text-white text-[10px] font-bold tracking-widest uppercase hover:bg-[#1c1c1c]/90 transition-all duration-300">
            Learn More About Shanmu
          </a>
        </div>
      </div>
    </section>
  );
}

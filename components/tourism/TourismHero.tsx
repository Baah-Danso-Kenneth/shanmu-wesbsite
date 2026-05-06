import React from 'react';

export default function TourismHero() {
  return (
    <section className="relative w-full bg-[#dfa63a] flex flex-col justify-center items-center text-center px-6 py-20 md:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[28px] md:text-[36px] lg:text-[48px] font-serif leading-[1.2] text-[#1c1c1c] tracking-tight uppercase font-black">
          Premier Destinations <br /> Across <span className="italic">Ghana & China.</span>
        </h1>
        <p className="mt-8 text-sm md:text-base font-mono tracking-widest text-[#1c1c1c]/80 uppercase">
          Curated Travel for Global Visionaries
        </p>
      </div>
    </section>
  );
}

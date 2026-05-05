import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative w-full bg-[#F5F3ED] flex flex-col justify-center items-center text-center px-6 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-[22px] md:text-[26px] lg:text-[32px] font-serif leading-[1.6] text-[#1c1c1c] tracking-wide">
          Hi! We&apos;re Shanmu. We&apos;re a global company <br className="hidden md:block" />
          on a mission to cultivate meaningful <br className="hidden md:block" />
          relationships that <span className="italic">propel international trade forward.</span>
        </h1>
      </div>
    </section>
  );
}

import React from 'react';

export default function AboutWelcome() {
  return (
    <section className="relative w-full bg-[#9ea692] text-[#1c1c1c] py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Left Side: Circular Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shrink-0 bg-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Global Network"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight max-w-lg text-[#1c1c1c]">
            Welcome to the Global Network
          </h2>
          <p className="font-mono text-sm md:text-base leading-relaxed max-w-md opacity-90 text-[#1c1c1c]">
            At Shanmu, we believe that cultivating meaningful connections across borders is transformative. Seeing the world through diverse perspectives makes us wiser. It opens us up. When we trade, travel, learn, laugh and authentically share with our global partners &mdash; <span className="font-bold">we amplify one another.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

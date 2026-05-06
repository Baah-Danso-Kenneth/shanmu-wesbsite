import React from 'react';

export default function TourismExperience() {
  return (
    <section className="relative w-full bg-[#9ea692] text-[#1c1c1c] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
        
        {/* Left Side: Circular Image */}
        <div className="w-full md:w-1/2 flex justify-center">
           <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-8 border-[#F5F3ED]/30">
              <img 
                src="/images/tourism-2.jpeg" 
                alt="Bespoke Experience"
                className="w-full h-full object-cover"
              />
           </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight text-[#1c1c1c]">
            Bespoke <br /> Itineraries
          </h2>
          <p className="font-mono text-sm md:text-base leading-relaxed max-w-md opacity-90 mb-10">
            Our network ensures that every trip is more than just a visit; it is a seamless experience tailored to your unique requirements. From exclusive business networking in Accra to guided luxury tours in Shanghai, we handle every detail with absolute precision.
          </p>
          <a href="#" className="inline-block bg-[#1c1c1c] text-white px-10 py-4 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-[#dfa63a] hover:text-[#1c1c1c] transition-all duration-300">
            Request an Itinerary
          </a>
        </div>

      </div>
    </section>
  );
}

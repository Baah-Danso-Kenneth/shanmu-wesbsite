import React from "react";

const images = [
  {
    src: "https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Global Shipping",
  },
  {
    src: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Beautiful Destination",
  },
  {
    src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Strategic Consultancy",
  },
  {
    src: "https://images.pexels.com/photos/163726/pexels-photo-163726.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Logistics",
  },
  {
    src: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Luxury Resort",
  },
  {
    src: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Modern Office",
  },
  {
    src: "https://images.pexels.com/photos/2862070/pexels-photo-2862070.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Coastal Destination",
  },
  {
    src: "https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Cargo Containers",
  },
  {
    src: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Global Consulting Team",
  },
];

export default function MissionSection() {
  return (
    <section id="mission-section" className="relative w-full bg-[#F5F3ED] text-[#1c1c1c] py-24 md:py-32 px-6">
      
      {/* Image Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 px-4 md:px-8 mb-16 md:mb-24 mt-8 md:mt-12">
        {images.map((img, idx) => (
          <div key={idx} className="relative aspect-[3/2] overflow-hidden group bg-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Text Content */}
      <div className="max-w-4xl mx-auto text-center px-4 pb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1c1c1c] mb-10 leading-tight">
          In the business of unlocking <span className="italic">global potential.</span>
        </h2>
        
        <p className="text-sm md:text-base font-mono text-[#1c1c1c]/80 leading-relaxed mb-12 max-w-3xl mx-auto tracking-wide">
          We specialize in bespoke international trade, exclusive travel experiences, and high-level consultancy. If you are inspired by seamless global operations and making meaningful connections that cross borders, Shanmu is for you.
        </p>
        
        <a 
          href="#" 
          className="inline-block border-2 border-[#1c1c1c] px-8 py-4 text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-[#1c1c1c] hover:text-[#F5F3ED] transition-colors duration-300"
        >
          More About Us
        </a>
      </div>

    </section>
  );
}

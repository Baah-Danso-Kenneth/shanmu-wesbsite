import React from 'react';

const tradeServices = [
  { title: "Work Permit & Visa", img: "/images/bus-1.jpeg" },
  { title: "Mini Importation Course", img: "/images/bus-2.jpeg" },
  { title: "Trade Consultation", img: "/images/consult-1.jpeg" }
];

export default function ConsultancyTrade() {
  return (
    <section className="relative w-full bg-[#dfa63a] py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#1c1c1c] leading-none uppercase italic font-black">
            Global Trade <br /> & Mobility
          </h2>
          <p className="max-w-xs font-mono text-[10px] md:text-xs uppercase tracking-widest text-[#1c1c1c]/80 text-right">
            Streamlining border operations and empowering local businesses with global knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {tradeServices.map((service, idx) => (
            <div key={idx} className="relative group aspect-[4/5] overflow-hidden bg-[#1c1c1c]">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 grayscale group-hover:grayscale-0" 
              />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                 <span className="text-[10px] font-bold text-white tracking-widest uppercase">0{idx + 1}</span>
                 <h3 className="text-xl md:text-2xl font-serif text-white leading-tight uppercase">{service.title}</h3>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

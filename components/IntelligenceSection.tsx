import React from "react";

const stats = [
  {
    number: "15+",
    label: "YEARS EXPERIENCE",
    description: "Global market analysis and strategic business planning.",
  },
  {
    number: "50+",
    label: "COUNTRIES",
    description: "Unmatched expertise in international trade and cross-border operations.",
  },
  {
    number: "99%",
    label: "SUCCESS RATE",
    description: "Dedicated to delivering excellence in every consultancy project.",
  },
];

export default function IntelligenceSection() {
  return (
    <section id="intelligence-section" className="relative w-full min-h-screen bg-[#F0EDE3] text-[#1a1a1a] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-[1800px] w-full mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 pl-0 md:pl-8">
          <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase block mb-4 text-[#1a1a1a]/70">
            FILE: 003/CONSULTANCY
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase">
            STRATEGIC INSIGHTS
          </h2>
        </div>

        {/* Stats Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="flex flex-col border-l border-[#1a1a1a]/10 pl-6 md:pl-10 pr-4 md:pr-10 py-8 md:py-4 overflow-hidden"
            >
              <div className="text-6xl md:text-7xl lg:text-8xl xl:text-[6rem] font-black tracking-tighter leading-none mb-6">
                {stat.number}
              </div>
              <div className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase border-b border-[#1a1a1a]/10 pb-4 mb-6">
                {stat.label}
              </div>
              <p className="text-sm md:text-base font-serif leading-relaxed text-[#1a1a1a]/90">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

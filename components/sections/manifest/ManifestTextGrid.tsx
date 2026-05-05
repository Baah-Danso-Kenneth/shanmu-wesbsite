import React from "react";

const textBlocks = [
  {
    category: "IMPORT & EXPORT",
    description: "Seamless global sourcing and distribution of high-value commodities.",
  },
  {
    category: "EXCLUSIVE TOURISM",
    description: "Bespoke travel experiences and curated international tours.",
  },
  {
    category: "STRATEGIC CONSULTANCY",
    description: "Expert advisory on international markets and business expansion.",
  },
];

export default function ManifestTextGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full pl-0 md:pl-24 pr-4 md:pr-12 mt-8 md:mt-12 pb-24">
      {textBlocks.map((block, i) => (
        <div key={i} className="flex flex-col border-t border-white/20 pt-6">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-white/70 uppercase mb-4">
            {block.category}
          </span>
          <p className="text-xl md:text-2xl font-serif text-white/90 leading-snug">
            {block.description}
          </p>
        </div>
      ))}
    </div>
  );
}

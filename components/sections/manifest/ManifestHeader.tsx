import React from "react";

export default function ManifestHeader() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mb-12 lg:mb-20 pl-0 md:pl-24 pr-4 md:pr-12">
      <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase">
        Our Expertise
      </h2>
      <div className="text-[9px] md:text-[10px] font-bold tracking-widest text-white/80 uppercase text-right mt-4 md:mt-0">
        Global Operations<br />
        Logistics & Advisory
      </div>
    </div>
  );
}

import React from "react";

const images = [
  {
    ref: "REF: IX-4401",
    src: "https://images.pexels.com/photos/163726/pexels-photo-163726.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Shipping Port",
  },
  {
    ref: "REF: IX-4402",
    src: "https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Kyoto Pagoda",
  },
  {
    ref: "REF: IX-4403",
    src: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Vehicle",
  },
];

export default function ManifestImages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full pl-0 md:pl-24 pr-4 md:pr-12">
      {images.map((img, i) => (
        <div key={i} className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] w-full overflow-hidden group">
          <div className="absolute top-0 left-0 bg-white text-black text-[9px] md:text-[10px] font-bold px-2 py-1 z-10 tracking-widest uppercase">
            {img.ref}
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

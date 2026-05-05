"use client";
import React, { useState, useEffect } from "react";

const carouselItems = [
  {
    image: "https://images.pexels.com/photos/163726/pexels-photo-163726.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
    subtitle: "Global Logistics & Trade",
    title: "UNBOUNDED REACH",
    description: "Seamless sourcing and distribution of high-value commodities across 142 active ports worldwide.",
    buttonText: "Explore Logistics",
  },
  {
    image: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
    subtitle: "Exclusive Tourism",
    title: "BEYOND BORDERS",
    description: "Bespoke itineraries and immersive travel experiences to the world's most breathtaking destinations.",
    buttonText: "View Experiences",
  },
  {
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80",
    subtitle: "Strategic Consultancy",
    title: "EXPERT FORESIGHT",
    description: "Unmatched advisory on international markets, strategic growth, and cross-border expansion.",
    buttonText: "Consult With Us",
  }
];

export default function CoreValuesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
      {/* Background Images */}
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Bottom gradient to blend smoothly if needed */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] via-transparent to-transparent opacity-80"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Placeholder Shield/Logo mimicking the reference image */}
        <div className="w-10 h-14 border-2 border-white rounded-b-full flex items-center justify-center mb-8 bg-transparent">
          <span className="font-bold text-[10px] tracking-widest uppercase">SM</span>
        </div>

        {/* Subtitle */}
        <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 opacity-90 transition-all duration-500">
          Shanmu • {carouselItems[currentIndex].subtitle}
        </span>
        
        {/* Main Title */}
        <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase leading-none mb-6 drop-shadow-lg transition-all duration-500 text-white">
          {carouselItems[currentIndex].title}
        </h2>
        
        {/* Description */}
        <p className="text-sm md:text-base lg:text-lg font-serif italic opacity-90 mb-10 max-w-2xl transition-all duration-500">
          {carouselItems[currentIndex].description}
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="inline-block px-8 py-3 border border-white text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 mb-16"
        >
          {carouselItems[currentIndex].buttonText}
        </a>

        {/* Dots Indicator */}
        <div className="flex gap-3 mt-4">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

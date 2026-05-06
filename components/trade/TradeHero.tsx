"use client";
import React, { useState, useRef } from 'react';

export default function TradeHero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-cargo-ship-sailing-in-the-ocean-11756-large.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-24 pb-20 md:pb-32">
        <h1 className="text-[12vw] md:text-[10vw] font-black text-white leading-none tracking-tighter uppercase">
          New <br /> Arrivals.
        </h1>
        <p className="mt-6 max-w-md text-white/80 font-mono text-sm md:text-base leading-relaxed">
          From high-performance vehicles to luxury fashion &mdash; we source and deliver exactly what you need, when you need it.
        </p>
        <div className="mt-10 flex gap-6">
          <button className="border-b-2 border-white text-white text-xs font-bold tracking-widest uppercase pb-1 hover:opacity-70 transition-opacity">
            Shop Imports
          </button>
          <button className="border-b-2 border-white text-white text-xs font-bold tracking-widest uppercase pb-1 hover:opacity-70 transition-opacity">
            Export Inquiry
          </button>
        </div>
      </div>

      {/* Play/Pause Control */}
      <button 
        onClick={togglePlay}
        className="absolute bottom-10 right-10 z-20 w-12 h-12 flex items-center justify-center rounded-full border border-white/30 text-white hover:bg-white hover:text-black transition-all"
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        )}
      </button>
    </section>
  );
}

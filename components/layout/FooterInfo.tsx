"use client";
import React from "react";

export default function FooterInfo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-[#1c1c1c] text-white px-6 md:px-12 lg:px-24 py-24 min-h-[60vh] flex flex-col justify-between z-10">
      <div className="max-w-[1800px] w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 flex-1">

        {/* Left Side: Big Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase leading-none mb-8">
            INITIATE<br />CONTACT
          </h2>
          <div className="w-24 md:w-32 h-2 md:h-3 bg-[#dfa63a]"></div>
        </div>

        {/* Right Side: Links and Info */}
        <div className="flex flex-col justify-center lg:pl-16 xl:pl-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20 md:mb-24 mt-12 lg:mt-0">
            {/* Headquarters */}
            <div className="flex flex-col">
              <span className="text-[#dfa63a] text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-6">
                HEADQUARTERS
              </span>
              <div className="flex flex-col gap-3 text-sm md:text-base font-sans text-white/90">
                <p>Quai du Seujet 24</p>
                <p>1201 Genève</p>
                <p>Switzerland</p>
              </div>
            </div>

            {/* Channels */}
            <div className="flex flex-col">
              <span className="text-[#dfa63a] text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-6">
                CHANNELS
              </span>
              <div className="flex flex-col gap-4 text-lg md:text-xl font-serif text-white/90">
                <a href="#" className="hover:opacity-70 transition-opacity">Import/Export Logistics</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Tourism & Travel</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Business Consultancy</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Company Insights</a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col">
              <span className="text-[#dfa63a] text-[9px] md:text-[10px] font-bold tracking-widest uppercase mb-6">
                SOCIALS
              </span>
              <div className="flex gap-5 text-white/90">
                {/* X / Twitter */}
                <a href="#" className="hover:opacity-70 transition-opacity" aria-label="X (Twitter)">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
                {/* Telegram */}
                <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Telegram">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.96-.64-.34-.99.22-1.58.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.18-.08-.05-.19-.02-.27 0-.12.03-1.98 1.25-5.58 3.69-.53.36-1 .54-1.43.53-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.36-.49.98-.75 3.84-1.67 6.4-2.78 7.68-3.32 3.65-1.53 4.41-1.8 4.9-1.81.11 0 .35.03.48.14.11.09.14.22.15.31-.01.07-.01.19-.02.3z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Right Border & Copyright */}
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase text-white/60">
              @2026 SHANMU ALL RIGHTS RESERVED
            </span>
            <div className="text-[8px] md:text-[9px] font-bold tracking-widest uppercase text-[#dfa63a]">
              BUILT WITH LOVE BY A GEE
            </div>
          </div>
        </div>

      </div>

      {/* Absolute Bottom Left Text */}
      {/* <div className="absolute bottom-6 left-6 md:bottom-10 md:left-12 lg:left-24">
        <span className="text-[9px] md:text-[10px] font-bold tracking-widest uppercase text-white/70">
          EST. 1982 / GENEVA
        </span>
      </div> */}

      {/* Scroll to Top Button */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 lg:right-24">
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 hover:bg-white hover:text-[#1c1c1c] transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <svg
            width="20" height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform group-hover:-translate-y-1 transition-transform duration-300"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </button>
      </div>
    </footer>
  );
}

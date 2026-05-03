"use client";
import React, { useState, useEffect } from "react";

const navItems = [
  { label: "ABOUT US", href: "#" },
  { label: "LOGISTICS", href: "#" },
  { label: "TOURISM", href: "#" },
  { label: "CONSULTING", href: "#" },
];

export default function SideNav() {
  const [isDarkText, setIsDarkText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find the IntelligenceSection by ID
      const intelligenceSection = document.getElementById("intelligence-section");
      
      if (intelligenceSection) {
        const rect = intelligenceSection.getBoundingClientRect();
        // Check if the intelligence section is overlapping where the SideNav is positioned (roughly top 20% to 80% of screen)
        if (rect.top <= window.innerHeight * 0.8 && rect.bottom >= window.innerHeight * 0.2) {
          setIsDarkText(true);
        } else {
          setIsDarkText(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed right-0 top-[15%] md:top-[20%] w-12 md:w-20 flex flex-col items-center z-50 bg-transparent mt-10 md:mt-20">
      <ul className="flex flex-col gap-6 md:gap-8 items-center w-full">
        {navItems.map((item) => (
          <li key={item.label} className="w-full flex justify-center">
            <a
              href={item.href}
              className={`text-[9px] md:text-[10px] font-bold tracking-widest transition-colors duration-500 hover:opacity-70 ${
                isDarkText ? "text-[#1a1a1a]" : "text-white"
              }`}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

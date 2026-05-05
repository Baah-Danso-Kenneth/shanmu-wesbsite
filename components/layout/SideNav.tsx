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
      const lightSections = [
        document.getElementById("intelligence-section"),
        document.getElementById("mission-section")
      ];
      
      let isOverLightSection = false;

      for (const section of lightSections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          // The SideNav is fixed around the top 20% to 60% of the screen.
          // Therefore, the light section overlaps the nav if its top is above 60% of the viewport
          // and its bottom is below 20% of the viewport.
          if (rect.top <= window.innerHeight * 0.6 && rect.bottom >= window.innerHeight * 0.2) {
            isOverLightSection = true;
            break;
          }
        }
      }

      setIsDarkText(isOverLightSection);
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

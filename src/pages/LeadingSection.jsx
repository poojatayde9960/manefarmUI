import React from "react";
import { TiStarburst } from "react-icons/ti";

const navItems = [
  "Dashboard",
  "Calculator",
  "Book Visit",
  "Gallery",
  "Blog",
  "Contact",
];

const LeadingSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white overflow-hidden">
      {/* ================= HEADER ================= */}
      <div className="px-5 sm:px-8 md:px-16 pt-16 sm:pt-20 md:pt-32 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
          {/* LEFT HEADING */}
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-7xl leading-tight text-[#2D461D]">
              <span className="text-[#A9FF67]">You will </span>
              have Quick <br />
              <span className="text-black">Access </span>
              <span className="text-[#A9FF67]">To</span>
            </h1>
          </div>

          {/* RIGHT TEXT */}
          <div className="flex-1 md:pl-20">
            <p className="text-sm sm:text-base md:text-lg text-[#011E0A] leading-relaxed font-manrope max-w-md">
              The Smarter Way to Grow Your Wealth <br />
              Through Ethical Farming
            </p>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      {/* ================= FEATURES ================= */}
      <div className="w-full relative mt-14 sm:mt-20 xl:mt-72 px-5 sm:px-8 xl:px-16">
        {/* MOBILE + TABLET + NEST HUB MAX */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 xl:hidden">
          {[
            ["Full Ownership Documentation", "light"],
            ["Real, Tangible Assets", "dark"],
            ["Expert Farm Management", "light"],
            ["Insured & Secured Investment", "dark"],
            ["High-Yield Livestock Returns", "light"],
            ["Sustainable & Ethical Farming", "dark"],
            ["Transparent Payouts", "dark"],
          ].map(([text, type], i) => (
            <span
              key={i}
              className={`${type === "light"
                  ? "bg-[#A9FF67] text-[#011E0A]"
                  : "bg-[#2D461D] text-[#A9FF67]"
                } px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium text-center`}
            >
              {text}
            </span>
          ))}
        </div>

        {/* ================= DESKTOP ONLY (UNCHANGED DESIGN) ================= */}
        <span className="hidden xl:block bg-[#A9FF67] absolute bottom-42 left-[600px] text-[#011E0A] px-6 py-3 rounded-full text-base font-medium transform rotate-[-26deg]">
          Full Ownership Documentation
        </span>

        <span className="hidden xl:block bg-[#2D461D] text-[#A9FF67] absolute bottom-10 left-[110px] px-10 py-4 rounded-full text-base font-medium transform rotate-[-30deg]">
          Real, Tangible Assets
        </span>

        <span className="hidden xl:block bg-[#A9FF67] text-[#011E0A] absolute bottom-10 left-88 px-10 py-4 rounded-full text-base font-medium transform rotate-[24deg]">
          Expert Farm Management
        </span>

        <span className="hidden xl:block bg-[#2D461D] text-[#A9FF67] absolute bottom-15 left-[550px] px-10 py-4 rounded-full text-base font-medium">
          Insured & Secured Investment
        </span>

        <span className="hidden xl:block bg-[#A9FF67] text-[#011E0A] absolute bottom-1 left-[750px] px-10 py-4 rounded-full text-base font-medium">
          High-Yield Livestock Returns
        </span>

        <span className="hidden xl:block bg-[#2D461D] text-[#A9FF67] absolute bottom-22 left-[860px] px-10 py-4 rounded-full text-base font-medium transform rotate-[-12deg]">
          Live Portfolio Tracking
        </span>

        <span className="hidden xl:block bg-[#2D461D] text-[#A9FF67] absolute bottom-10 left-[1090px] px-10 py-4 rounded-full text-base font-medium transform rotate-[19deg]">
          Sustainable & Ethical Farming
        </span>

        <span className="hidden xl:block bg-[#2D461D] text-[#A9FF67] absolute bottom-0 left-[240px] px-10 py-4 rounded-full text-base font-medium">
          Transparent Payouts
        </span>
      </div>

      {/* ================= NAV SLIDER ================= */}
      <div className="bg-[#A9FF67] w-full mt-16 md:mt-0 py-3 sm:py-4 md:py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-slide">
          {navItems.concat(navItems).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 sm:gap-6 mx-6 sm:mx-10"
            >
              <TiStarburst size={30} className="sm:hidden" />
              <TiStarburst size={45} className="hidden sm:block" />
              <span className="text-black text-base sm:text-xl md:text-3xl">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadingSection;

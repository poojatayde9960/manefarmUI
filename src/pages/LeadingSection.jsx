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
    <div className="w-full min-h-screen flex justify-center flex-col bg-white">
      {/* Header Section */}
      {/* Header Section */}
      <div className="px-6 md:px-16 pt-20 md:pt-32 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-start">
          {/* LEFT HEADING */}
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#2D461D]">
              <span className="text-[#A9FF67]">You will </span>have Quick <br />
              <span className="text-black">Access </span>
            <span className="text-[#A9FF67]">To</span>
            </h1>
          </div>

          {/* RIGHT SMALL TEXT */}
          <div className="flex-1 mt-6 md:mt-4 md:pl-20">
            <p className="text-base md:text-lg text-[#011E0A] leading-relaxed">
              The Smarter Way to Grow Your Wealth <br />
              Through Ethical Farming
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div
        className="
        w-full relative mt-16 md:mt-72 
        flex flex-wrap justify-center gap-4
        md:block md:justify-start md:gap-6
        px-6 md:px-16
      "
      >
        {/* MOBILE VERSION (stacked) */}
        <div className="flex flex-wrap justify-center gap-3 md:hidden">
          <span className="bg-[#A9FF67] text-[#011E0A] px-6 py-3 rounded-full text-sm font-medium">
            Full Ownership Documentation
          </span>
          <span className="bg-[#2D461D] text-[#A9FF67] px-6 py-3 rounded-full text-sm font-medium">
            Real, Tangible Assets
          </span>
          <span className="bg-[#A9FF67] text-[#011E0A] px-6 py-3 rounded-full text-sm font-medium">
            Expert Farm Management
          </span>
          <span className="bg-[#2D461D] text-[#A9FF67] px-6 py-3 rounded-full text-sm font-medium">
            Insured & Secured Investment
          </span>
          <span className="bg-[#A9FF67] text-[#011E0A] px-6 py-3 rounded-full text-sm font-medium">
            High-Yield Livestock Returns
          </span>
          <span className="bg-[#2D461D] text-[#A9FF67] px-6 py-3 rounded-full text-sm font-medium">
            Sustainable & Ethical Farming
          </span>
          <span className="bg-[#2D461D] text-[#A9FF67] px-6 py-3 rounded-full text-sm font-medium">
            Transparent Payouts
          </span>
        </div>

        {/* DESKTOP VERSION — untouched */}
        <span className="hidden md:block bg-[#A9FF67] absolute bottom-42 left-[600px] text-[#011E0A] px-6 py-3 rounded-full text-base font-medium transform rotate-[-26deg]">
          Full Ownership Documentation
        </span>
        <span className="hidden md:block bg-[#2D461D] text-[#A9FF67] absolute bottom-10 left-[110px] px-10 py-4 rounded-full text-base font-medium transform rotate-[-30deg]">
          Real, Tangible Assets
        </span>
        <span className="hidden md:block bg-[#A9FF67] text-[#011E0A] absolute bottom-10 left-88 px-10 py-4 rounded-full text-base font-medium transform rotate-[24deg]">
          Expert Farm Management
        </span>
        <span className="hidden md:block bg-[#2D461D] text-[#A9FF67] absolute bottom-15 left-[550px] px-10 py-4 rounded-full text-base font-medium">
          Insured & Secured Investment
        </span>
        <span className="hidden md:block bg-[#A9FF67] text-[#011E0A] absolute bottom-1 left-[750px] px-10 py-4 rounded-full text-base font-medium">
          High-Yield Livestock Returns
        </span>
        <span className="hidden md:block bg-[#2D461D] text-[#A9FF67] absolute bottom-22 left-[860px] px-10 py-4 rounded-full text-base font-medium transform rotate-[-12deg]">
          Live Portfolio Tracking
        </span>
        <span className="hidden md:block bg-[#2D461D] text-[#A9FF67] absolute bottom-10 left-[1090px] px-10 py-4 rounded-full text-base font-medium transform rotate-[19deg]">
          Sustainable & Ethical Farming
        </span>
        <span className="hidden md:block bg-[#2D461D] text-[#A9FF67] absolute bottom-0 left-[240px] px-10 py-4 rounded-full text-base font-medium">
          Transparent Payouts
        </span>
      </div>

      {/* Navigation Section */}
      <div className="bg-[#A9FF67] w-full mt-20 md:mt-0 py-4 md:py-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-slide">
          {navItems.concat(navItems).map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-6 mx-10 cursor-pointer"
            >
              <TiStarburst size={45} />
              <span className="text-black text-lg md:text-3xl">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadingSection;

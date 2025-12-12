import React from "react";

const TrustedInvestors = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-evenly p-8 bg-white">
      {/* Left Section */}
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h2 className="md:text-6xl text-2xl font-semibold text-[#011E0A]">
        <span className="text-[#A9FF67]">Trusted</span> by <br />
          Early Investors
        </h2>
        <p className="mt-4 text-black md:text-lg">
          Our farms combine traditional animal husbandry<br /> with modern farm
          management. Vet-supervised<br /> care, documented ownership, and monthly<br />
          transparency reports give investors peace of mind.
        </p>
        <button className="mt-6 px-18 py-3 bg-[#2D461D] text-white font-medium rounded-full  transition shadow-[0_0_20px_#A9FF67] hover:shadow-[0_0_20px_#A9FF67]">
          Invest Now
        </button>
      </div>

   

      <img  src="/Group 5.png" className="md:h-[650px] md:w-[700px]"/>
    </div>
  );
};

export default TrustedInvestors;

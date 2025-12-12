import React from "react";
import { Play, TrendingUp } from "lucide-react";

const Home = () => {
    const buffaloes = "/buffaloes.png";

    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center relative overflow-hidden font-outfit">

            <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] px-4 pt-10">

                {/* ===================== TOP BADGES ===================== */}
                <div className="flex w-full justify-between items-start mt-4 max-w-[1100px] px-4 md:px-10 z-30 md:mt-10
                max-md:flex-col max-md:items-center max-md:gap-3">

                    {/* Left Badge */}
                    <div className="pointer-events-auto flex items-center gap-3 bg-[#B8FF70] pl-2 pr-6 py-2 rounded-full shadow-md 
                    -translate-y-4 max-md:-translate-y-0">
                        <div className="w-10 h-10 rounded-full bg-[#1e3314] flex items-center justify-center">
                            <TrendingUp className="text-[#B8FF70] w-5 h-5" />
                        </div>
                        <span className="text-[#1A2C15] font-semibold text-sm md:text-base whitespace-nowrap">
                            Insured & Secured
                        </span>
                    </div>

                    {/* Right Badge */}
                    <div className="pointer-events-auto flex items-center gap-3 bg-[#B8FF70] pl-6 pr-2 py-2 rounded-full shadow-md 
                    -translate-y-4 max-md:-translate-y-0">
                        <span className="text-[#1A2C15] font-semibold text-sm md:text-base whitespace-nowrap">
                            Stable Monthly Returns
                        </span>
                        <div className="w-10 h-10 rounded-full bg-[#1e3314] flex items-center justify-center">
                            <TrendingUp className="text-[#B8FF70] w-5 h-5" />
                        </div>
                    </div>
                </div>

                {/* ===================== ORBIT + RINGS ===================== */}
                <div className="relative w-full flex flex-col items-center mt-[-60px]">

                    {/* Orbit Arc */}
                    <div className="absolute mt-10 w-[930px] pointer-events-none z-0 
                    max-md:w-[600px] max-sm:w-[420px]">
                        <svg viewBox="0 0 800 720" className="w-full h-full overflow-visible">
                            <defs>
                                <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="0%" y2="170%">
                                    <stop offset="1.93%" stopColor="#A9FF67" />
                                    <stop offset="61.56%" stopColor="#65993E" stopOpacity="0" />
                                </linearGradient>
                            </defs>

                            <path
                                d="M 50,350 A 350,350 0 0,1 750,350"
                                fill="none"
                                stroke="url(#orbitGradient)"
                                strokeWidth="1.5"
                            />

                            <circle cx="60" cy="270" r="6" fill="#A9FF67" />
                            <circle cx="190" cy="70" r="6" fill="#A9FF67" />
                            <circle cx="400" cy="120" r="5" fill="#A9FF67" />
                            <circle cx="650" cy="105" r="5" fill="#A9FF67" />
                            <circle cx="740" cy="260" r="7" fill="#A9FF67" />
                        </svg>
                    </div>

                    {/* Rings & Buffalo */}
                    <div className="relative flex justify-center items-center z-10 top-[150px]
                    max-md:top-[100px] max-sm:top-[70px]">

                        {/* Glow */}
                        <div className="absolute w-[650px] h-[550px] rounded-full bg-[#B8FF70] opacity-20 blur-xl
                        max-md:w-[450px] max-md:h-[350px] max-sm:w-[320px] max-sm:h-[260px]"></div>

                        {/* Main Ring */}
                        <div className="absolute w-[500px] h-[500px] rounded-full border-[60px] border-[#B8FF70]
                        max-md:w-[350px] max-md:h-[350px] max-md:border-[35px]
                        max-sm:w-[250px] max-sm:h-[250px] max-sm:border-[25px]"></div>

                        {/* Center Glow */}
                        <div className="absolute w-[130px] h-[130px] rounded-full bg-gradient-to-br from-white to-[#efffd6] shadow-[0_0_50px_rgba(184,255,112,0.8)]
                        max-md:w-[90px] max-md:h-[90px]
                        max-sm:w-[70px] max-sm:h-[70px]"></div>

                        {/* Buffalo Image */}
                        <img
                            src={buffaloes}
                            alt="Buffalo"
                            className="relative z-20 h-60 w-[320px] mb-[70%] ml-16 object-contain drop-shadow-2xl
                            max-md:h-48 max-md:w-[260px] max-md:ml-8 max-sm:h-40 max-sm:w-[200px] max-sm:ml-4"
                        />
                    </div>

                    {/* Title & Text */}
                    <div className="relative z-30 mt-[-140px] text-center space-y-4 max-w-5xl font-goodly
                    max-md:mt-[-100px] max-sm:mt-[-70px]">

                        <h1 className="text-5xl md:text-7xl text-[#0D1F13] leading-[1.1] font-goodly
                        max-sm:text-3xl">
                            Invest in High-Yield Buffaloes <br className="hidden md:block" />
                            & Grow Your Dairy Income
                        </h1>

                        <p className="text-[#1A2C15] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed pt-4 font-medium font-manrope
                        max-sm:text-base">
                            Our farm-raised buffaloes offer stable, long-term returns through high milk production.
                        </p>
                    </div>
                </div>

                {/* ===================== CTA BUTTONS ===================== */}
                <div className="flex items-center gap-3 mt-20 pb-20 z-30
                max-sm:flex-col max-sm:gap-6">

                    {/* Invest Button */}
                    <button
                        className="
                            text-white text-lg font-semibold px-14 py-4 rounded-full transition-all 
                            hover:scale-105 hover:shadow-xl
                            max-sm:px-10 max-sm:text-base
                        "
                        style={{
                            background: "linear-gradient(90deg, #273e1b 0%, #3a5c28 100%)",
                            boxShadow: "0px 1px 12.8px 0px #A9FF67 inset"
                        }}
                    >
                        Invest Now
                    </button>

                    {/* Play Button */}

                    <div className="relative w-[90px] h-[90px]  flex items-center">

                        {/* LEFT HALF CIRCLE ARC */}
                        <svg
                            className="absolute left-0 top-1/2 -translate-y-1/2"
                            width="90"
                            height="90"
                            viewBox="0 0 150 150"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="78"
                                cy="78"
                                r="49"                   // radius smaller
                                stroke="#273e1b"
                                strokeWidth="8"         // stroke thinner
                                strokeLinecap="round"
                                strokeDasharray="170 500"
                                transform="rotate(75 75 70)"
                            />
                        </svg>

                        {/* CENTER PLAY BUTTON */}
                        <button className="w-12 h-12 rounded-full bg-[#273e1b] flex items-center justify-center ml-[18px]">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="#A9FF67"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-[2px]"
                            >
                                <path d="M8 5v14l11-7-11-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

import React from "react";
import { Play, TrendingUp } from "lucide-react";
import { Icon } from "@iconify/react";
const Home = () => {
    const buffaloess = "/buffaloess.png";
    const round = "/round.png";

    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center relative overflow-hidden font-outfit">

            <div className="relative z-10 flex flex-col items-center w-full max-w-[1400px] px-4 pt-5">

                {/* ===================== TOP BADGES ===================== */}
                <div className="flex w-full justify-between items-start max-w-[1100px] px-4 md:px-10 z-30 mt-10
                max-md:flex-col max-md:items-center max-md:gap-3">

                    {/* Left Badge */}
                    <div className="relative pointer-events-auto
flex items-center gap-3
bg-[#B8FF70] pl-12 pr-6 py-4
rounded-full shadow-md
-translate-y-4 max-md:-translate-y-0
ml-6 max-md:ml-0">


                        {/* Icon – OUTSIDE left */}
                        <div className="absolute -left-14
    w-12 h-12 rounded-full bg-[#1e3314]
    flex items-center justify-center shadow-md">
                            <Icon icon="famicons:analytics" className="text-[#A9FF67] text-3xl" />
                        </div>

                        <span className="text-[#1A2C15] font-manrope  font-medium text-sm -ml-2">
                            Insured & Secured
                        </span>

                    </div>

                    {/* Right Badge */}
                    <div className="relative pointer-events-auto
flex items-center gap-3
bg-[#B8FF70] pl-12 pr-6 py-4
rounded-full shadow-md
-translate-y-4 max-md:-translate-y-0
ml-6 max-md:ml-0">


                        {/* Icon – OUTSIDE left */}
                        <div className="absolute -left-14
    w-12 h-12 rounded-full bg-[#1e3314]
    flex items-center justify-center shadow-md">
                            <Icon icon="famicons:analytics" className="text-[#A9FF67] text-3xl" />
                        </div>

                        <span className="text-[#1A2C15] font-manrope font-medium  text-sm -ml-2">
                            Stable Monthly Returns
                        </span>

                    </div>
                </div>

                {/* ===================== ORBIT + RINGS ===================== */}
                <div className="relative w-full flex flex-col items-center mt-[-60px]">

                    {/* Orbit Arc */}
                    <div className="absolute mt-8 w-[930px] pointer-events-none z-0 
                    max-md:w-[600px] max-sm:w-[420px] ">
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
                            <circle cx="650" cy="105" r="5" fill="#A9FF67" />
                            <circle cx="740" cy="260" r="7" fill="#A9FF67" />
                            <circle cx="300" cy="15" r="7" fill="#A9FF67" />
                            <circle cx="520" cy="20" r="4" fill="#A9FF67" />

                        </svg>
                    </div>

                    {/* Rings & Buffalo */}
                    <div className="relative flex justify-center  items-center z-10 top-[100px]
                    max-md:top-[100px] max-sm:top-[70px]">

                        {/* Glow */}
                        <div className="absolute w-[650px] h-[550px] rounded-full bg-[#A9FF67] opacity-20 blur-xl
                        max-md:w-[450px] max-md:h-[350px] max-sm:w-[320px] max-sm:h-[260px]"></div>

                        {/* Main Ring */}
                        <div className="absolute w-[500px] h-[500px] rounded-full border-[60px] border-[#B8FF70]
                        max-md:w-[350px] max-md:h-[350px] max-md:border-[35px]
                        max-sm:w-[250px] max-sm:h-[250px] max-sm:border-[25px]"></div>

                        {/* Center Glow */}
                        <div className="absolute w-[280px] h-[280px] rounded-full 
     
   
    overflow-hidden
    max-md:w-[90px] max-md:h-[90px]
    max-sm:w-[70px] max-sm:h-[70px]"
                        >
                            <img
                                src={round}   // <-- tuzi image
                                alt="circle"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>


                        {/* Buffalo Image */}
                        <img
                            src={buffaloess}
                            alt="Buffalo"
                            className="relative z-20 h-70 w-[350px] mb-[70%] ml-14   object-contain drop-shadow-2xl
                            max-md:h-48 max-md:w-[260px] max-md:ml-8 max-sm:h-40 max-sm:w-[200px] max-sm:ml-4"
                        />
                    </div>

                    {/* Title & Text */}
                    <div className="relative z-30 mt-[-190px] text-center space-y-4 max-w-5xl font-goodly
                    max-md:mt-[-100px] max-sm:mt-[-70px]">

                        <h1 className="text-5xl md:text-6xl text-[#0D1F13] font-medium leading-[1.1] font-goodly
                        max-sm:text-3xl">
                            Invest in Buffalo Dairy Assets & <br className="hidden md:block" />
                            Earn 11–13% Annual Returns.
                        </h1>

                        <p className="text-[#1A2C15] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed pt-4 font-manrope font-medium font-manrope
                        max-sm:text-base">
                            Our farm-raised buffaloes offer stable, long-term returns through high <br /> milk production, verified health, and consistent daily output.
                            {/* Our farm-raised buffaloes offer stable, long-term returns through <br /> high milk production. */}
                        </p>
                    </div>
                </div>

                {/* ===================== CTA BUTTONS ===================== */}
                <div className="flex items-center gap-3 mt-12 pb-20 z-30
                max-sm:flex-col max-sm:gap-6">

                    {/* Invest Button */}
                    <button
                        className="
                            text-[#A9FF67] text-lg  font-manrope px-14 py-4 rounded-full transition-all 
                            hover:scale-105 hover:shadow-xl
                            max-sm:px-10 max-sm:text-base
                        "
                        style={{
                            background: "linear-gradient(90deg, #273e1b 0%, #3a5c28 100%)",
                            boxShadow: "0px 1px 12.8px 0px #A9FF67 inset"
                        }}
                    >
                        Book a Call
                    </button>

                    {/* Play Button */}

                    <div className="relative w-[90px] h-[90px] flex items-center">

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

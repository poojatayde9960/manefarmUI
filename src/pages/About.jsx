import React from "react";
import { Icon } from "@iconify/react";
import graph from "/graph.png";
const About = () => {
    const graph = "/graph.png";
    return (
        <div className="w-full  md:-mt-0 -mt-44 py-10 md:py-20 px-4 md:px-16 font-outfit relative">

            {/* LEFT GRAPH + FLOATING CARDS (Desktop Only) */}
            <div className="absolute left-0 top-6 w-[55%] mt-16 h-[500px] hidden lg:block">

                {/* Grid Lines */}
                {/* <Icon icon="bxs:right-arrow" className="text-[#2D461D] text-1xl" /> */}
                <img
                    src={graph}
                    alt="Graph background"
                    className="absolute inset-0 w-[80%] h-full object-cover rounded-4xl"
                />





                {/* Float Cards */}
                <div className="absolute -top-15 left-50 bg-[#2D461D] text-white rounded-4xl p-6 w-[335px] shadow-xl hover:-translate-y-3 transition flex">
                    {/* Vertical line */}
                    <div className="w-2 h-12  bg-[#A9FF67] rounded mr-4"></div>
                    <div>
                        <p className="text-lg text-[#A9FF67] font-goodly">Full Transparency</p>
                        <p className="text-sm mt-1 font-manrope font-semibold text-[#FEFAE5] opacity-80">
                            Every investment, every buffalo, every payout fully documented and visible <br /> to our investors.
                        </p>
                    </div>
                </div>

                <div
                    className="absolute top-[220px] left-[480px] rounded-4xl p-6 w-[340px] shadow-xl text-white hover:-translate-y-3 transition flex"
                    style={{
                        background: "linear-gradient(150.63deg, #2D461D 44.77%, #6FAC47 121.42%)",
                    }}
                >
                    {/* Vertical line */}
                    <div className=" w-2 h-12  bg-[#A9FF67] rounded mr-4"></div>
                    <div>
                        <p className="text-lg font-semibold">Animal Welfare</p>
                        <p className="text-sm mt-1 font-manrope font-semibold text-[#FEFAE5] opacity-80">
                            Expert veterinary care, quality nutrition, and humane treatment <br /> for every animal in our care.
                        </p>
                    </div>
                </div>


                <div className="absolute mt-[60%] left-60 rounded-4xl p-6 w-[270px] bg-[#2D461D] text-white shadow-xl hover:-translate-y-3 transition">
                    <Icon icon="famicons:analytics" className="text-[#A9FF67] text-3xl mb-1" />
                    <p className="text-4xl font-goodly text-[#A9FF67]">12–25%</p>
                    <p className="text-xl opacity-80 font-goodly text-[#FEFAE5]">Income P.a</p>

                    <svg viewBox="0 0 300 80" className="mt-3" fill="none">
                        <defs>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#A9FF67" floodOpacity="0.7" />
                            </filter>
                        </defs>
                        <path
                            d="M10 60 C60 40, 120 50, 180 30 C240 10, 260 20, 290 8"
                            stroke="#A9FF67"
                            strokeWidth="4"
                            strokeLinecap="round"
                            filter="url(#glow)"
                        />
                    </svg>

                </div>
            </div>

            {/* RIGHT TEXT SECTION */}
            <div className="ml-auto lg:w-[45%] lg:ml-[60%] w-full mt-20 lg:mt-0 text-center lg:text-left">

                <h2 className="text-[48px] md:text-[72px] font-goodly text-[#A9FF67] leading-tight">
                    About Us <span className="text-black">– Mane farms</span>
                </h2>

                <p className="mt-6 text-[#0D1F13] text-lg leading-relaxed max-w-[420px] mx-auto lg:mx-0">
                    We believe dairy farming can be a high-impact rural enterprise and a reliable
                    investment model when done with honesty and scientific care.
                </p>

                {/* Buttons */}
                <div className="flex items-center justify-center lg:justify-start  mt-10">
                    <button
                        className="px-10 py-4 text-[#A9FF67] font-manrope  rounded-full shadow-inner transition hover:shadow-none"
                        style={{
                            background: "#2D461D",
                            boxShadow: "0px 0px 4px 2px #A9FF67 inset",
                        }}
                    >
                        Read More
                    </button>

                    <button className="w-12 h-12 border-2 border-[#2D461D] rounded-full flex items-center justify-center hover:border-[#4ADE80] transition">
                        <Icon icon="bxs:right-arrow" className="text-[#2D461D] text-1xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;

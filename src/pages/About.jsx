import React from "react";
import { Icon } from "@iconify/react";

const About = () => {
    return (
        <div className="w-full  md:-mt-0 -mt-44 py-10 md:py-20 px-4 md:px-16 font-outfit relative">

            {/* LEFT GRAPH + FLOATING CARDS (Desktop Only) */}
            <div className="absolute left-0 top-6 w-[55%] h-[500px] hidden lg:block">

                {/* Grid Lines */}
                <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%">
                        {[...Array(6)].map((_, i) => (
                            <line
                                key={i}
                                x1={`${i * 20}%`}
                                y1="0"
                                x2={`${i * 20}%`}
                                y2="100%"
                                stroke="#C0C0C0"
                                strokeWidth="1"
                            />
                        ))}
                        {[...Array(6)].map((_, i) => (
                            <line
                                key={i}
                                x1="0"
                                y1={`${i * 20}%`}
                                x2="100%"
                                y2={`${i * 20}%`}
                                stroke="#C0C0C0"
                                strokeWidth="1"
                            />
                        ))}
                    </svg>
                </div>

                {/* Graph Line */}
                <svg
                    className="absolute -mt-16 inset-0"
                    viewBox="0 0 600 400"
                    fill="none"
                    strokeWidth="2"
                >
                    <defs>
                        <linearGradient id="graphGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#A9FF67" />
                            <stop offset="50%" stopColor="#6FAC47" />
                            <stop offset="100%" stopColor="#000502" />
                        </linearGradient>
                    </defs>

                    <path
                        d="M10 250 
            C60 180, 120 200, 180 260 
            C220 300, 260 280, 300 230 
            C340 180, 340 200, 420 250
            C460 300, 500 280, 540 220
            C580 170, 600 160, 600 170"
                        stroke="url(#graphGradient)"
                        strokeLinecap="round"
                    />
                </svg>

                {/* Graph Dots */}
                {[80, 200, 260, 380, 500].map((x, i) => {
                    if (i === 2) return null;

                    return (
                        <div
                            key={i}
                            className="absolute w-12 h-12  rounded-full flex items-center justify-center transition-transform duration-300 hover:-translate-y-2"
                            style={{
                                top: `${i === 0 ? 201 : i === 1 ? 300 : i === 3 ? 260 : 140 + i * 20}px`,
                                left: `${i === 1 ? x + 70 : i === 3 ? x + 310 : x}px`,
                                background: "conic-gradient(from 180deg at 50% 50%, #A9FF67 0%, #65993E 100%)",
                                boxShadow: "0 4px 20px rgba(101, 153, 62, 0.5)",
                            }}
                        >
                            <div className="w-8 h-8 rounded-full bg-[#A9FF67]" />
                        </div>
                    );
                })}

                {/* Float Cards */}
                <div className="absolute top-0 left-50 bg-[#2D461D] text-white rounded-4xl p-6 w-[335px] shadow-xl hover:-translate-y-3 transition">
                    <p className="text-lg text-[#A9FF67] font-goodly">Full Transparency</p>
                    <p className="text-sm mt-1 font-manrope opacity-80">
                        Every investment, every buffalo, every payout fully documented.
                    </p>
                </div>

                <div
                    className="absolute top-[330px] left-[480px] rounded-4xl p-6 w-[340px] shadow-xl text-white hover:-translate-y-3 transition"
                    style={{
                        background: "linear-gradient(150.63deg, #2D461D 44.77%, #6FAC47 121.42%)",
                    }}
                >
                    <p className="text-lg font-semibold">Animal Welfare</p>
                    <p className="text-sm mt-1 opacity-80">
                        Expert veterinary care and humane treatment for every animal.
                    </p>
                </div>

                <div className="absolute mt-[60%] left-60 rounded-4xl p-6 w-[270px] bg-[#2D461D] text-white shadow-xl hover:-translate-y-3 transition">
                    <p className="text-4xl font-goodly text-[#A9FF67]">12–25%</p>
                    <p className="text-xl opacity-80 font-goodly text-[#FEFAE5]">Income P.a</p>

                    <svg viewBox="0 0 300 80" className="mt-3" fill="none" stroke="#4ADE80" strokeWidth="4">
                        <path
                            d="M10 60 C60 40, 120 50, 180 30 C240 10, 260 20, 290 10"
                            strokeLinecap="round"
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
                <div className="flex items-center justify-center lg:justify-start gap-4 mt-10">
                    <button
                        className="px-10 py-4 text-[#A9FF67] rounded-full shadow-inner transition hover:shadow-none"
                        style={{
                            background: "#2D461D",
                            boxShadow: "0px 0px 4px 2px #A9FF67 inset",
                        }}
                    >
                        Visit Our Farm
                    </button>

                    <button className="w-12 h-12 border-2 border-[#2D461D] rounded-full flex items-center justify-center hover:border-[#4ADE80] transition">
                        <Icon icon="bxs:right-arrow" className="text-[#2D461D] text-3xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;

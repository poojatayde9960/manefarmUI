import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <div
            className="w-full text-white  font-outfit rounded-2xl mt-20 pt-10 "
            style={{
                background: "linear-gradient(244.35deg, #2D461D 72.7%, #6FAC47 171.75%)",
            }}
        >
            {/* =================== TOP WHITE CARD =================== */}
            <div className="w-[95%] mx-auto bg-white rounded-3xl py-12 px-6 md:px-16 shadow-lg text-center relative">
                <h2 className="text-3xl md:text-5xl font-goodly text-[#1E3A22]">
                    Ready to <span className="text-[#A9FF67] font-goodly">start your</span> investment?
                </h2>

                <p className="text-[#1E3A22]/70 mt-4 max-w-2xl mx-auto text-sm md:text-base">
                    We bring modern, ethical, and transparent buffalo farming to investors. Our mission
                    is to provide secure, profitable, and sustainable livestock investment opportunities
                    with complete care and expert farm management.
                </p>

                {/* Button */}
                <div className="flex flex-col sm:flex-row md:ml-[40%] items-center justify-center sm:justify-start mt-8 gap-4 sm:gap-2 md:gap-4">
                    <button className="px-8 sm:px-10 md:px-12 py-3 font-manrope rounded-full bg-[#2D461D] text-[#A9FF67] flex items-center justify-center shadow-md hover:bg-[#b8ff7f] transition-all duration-300">
                        Invest Now
                    </button>
                    <span className="w-10 h-10 sm:w-11 md:w-12 flex items-center justify-center border border-[#1E3A22] rounded-full">

                        <Icon icon="solar:arrow-right-linear" className="text-[#2D461D] text-2xl sm:text-3xl md:text-2xl" />
                    </span>
                </div>

            </div>

            {/* =================== FOOTER BODY =================== */}
            <div className="w-[95%] mx-auto py-16 relative">
                {/* Big Background Text */}
                <h1 className="absolute bottom-20 left-0 text-[80px] sm:text-[120px] md:text-[200px] font-bold text-white/5 select-none pointer-events-none">
                    MANE FARMS
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 relative z-10">
                    {/* Left Quote - spans full on mobile, 5 columns on md+ */}
                    <div className="md:col-span-5">
                        <p className="text-lg sm:text-2xl font-semibold mt-10 ml-8 text-[#FEFAE5] leading-relaxed max-w-lg">
                            “Invest in nature’s strength. Grow <br /> wealth with trust, transparency, and <br /> ethical farming.”
                        </p>
                    </div>

                    {/* Right side: Quick Links + Contact + Social (aligned to left) */}
                    <div className="md:col-span-7 flex flex-col sm:flex-row gap-10 md:gap-16">
                        {/* Quick Links */}
                        <div className="min-w-[140px]">
                            <h3 className="font-manrope text-[#FEFAE5] mb-4">Quick Links</h3>
                            <ul className="space-y-2 text-[#A9FF67]">
                                <li className="font-manrope">Home</li>
                                <li className="font-manrope">About Us</li>
                                <li className="font-manrope">Why Choose</li>
                                <li className="font-manrope">Investment Plans</li>
                                <li className="font-manrope">Contact Us</li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="min-w-[180px]">
                            <h3 className="font-manrope  text-[#FEFAE5] mb-4">Contact</h3>
                            <ul className="space-y-2 text-[#A9FF67] text-sm sm:text-base">
                                <li className="font-manrope ">+91 8585 666 322</li>
                                <li className="font-manrope ">manetfarms@gmail.com</li>
                                <li className="font-manrope ">Golden City Center,<br />Chhatrapati Sambhajinagar 431001</li>
                            </ul>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h3 className="font-manrope  text-[#FEFAE5] mb-4">Social Media</h3>
                            <ul className="space-y-2 text-[#A9FF67] text-sm sm:text-base">
                                <li className="font-manrope ">Whatsapp</li>
                                <li className="font-manrope ">Facebook</li>
                                <li className="font-manrope ">Instagram</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className="w-full h-[1px] bg-[#A9FF67] mt-16"></div>

                {/* Bottom Text */}
                <div className="flex flex-col md:flex-row items-center md:justify-between text-sm text-white/70 mt-6 gap-3 ">
                    <p>©2025 All Rights Reserved</p>
                    <p className="flex items-center gap-2">
                        Developed By
                        <span className="flex items-center gap-1 text-[#A9FF67] font-semibold">
                            <img src="/tech-surya-logo.png" alt="logo" className="w-5 h-5" />
                            TECH SURYA
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

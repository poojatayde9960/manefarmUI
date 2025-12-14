import React from "react";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
    const buffaloes = "/buffaloes.png";
    return (
        <div className="w-full min-h-screen flex items-center justify-center px-0 sm:px-6 md:px-10 py-4 font-outfit">

            <div className="w-full max-w-7xl bg-gradient-to-r from-[#203D18] to-[#4B8230] 
    rounded-3xl px-0 sm:px-6 md:px-10 py-6 flex flex-col md:flex-row 
    gap-6 sm:gap-8 md:gap-10 relative overflow-hidden">

                {/* LEFT FORM SECTION */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start px-0">
                    <div
                        className="w-full p-4 sm:p-6 md:p-6 rounded-3xl backdrop-blur-md"
                        style={{
                            border: "2px solid",
                            borderImageSource:
                                "linear-gradient(235.78deg, #A9FF67 -0.19%, rgba(197,253,144,0) 27.48%, rgba(210,253,163,0) 71.72%, #FEFAE5 101.31%)",
                            borderImageSlice: 1,
                            background: "#97FF4712",
                        }}
                    >

                        <label className="text-[#A9FF67] text-sm">Name</label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            className="w-full p-3 sm:p-4 mt-1 mb-4 rounded-xl text-white placeholder-gray-300 outline-none"
                            style={{
                                background: "linear-gradient(90deg, rgba(254,250,229,0.12) 0%, rgba(169,255,103,0.12) 100%)"
                            }}
                        />

                        <label className="text-[#A9FF67] text-sm">Email / Contact </label>
                        <input
                            type="text"
                            placeholder="Enter"
                            className="w-full p-3 sm:p-4 mt-1 mb-4 rounded-xl text-white placeholder-gray-300 outline-none"
                            style={{
                                background: "linear-gradient(90deg, rgba(254,250,229,0.12) 0%, rgba(169,255,103,0.12) 100%)"
                            }}
                        />

                        <label className="text-[#A9FF67] text-sm">Message</label>
                        <textarea
                            rows={4}
                            placeholder="Enter"
                            className="w-full p-3 sm:p-4 mt-1 mb-4 rounded-xl text-white placeholder-gray-300 outline-none resize-none"
                            style={{
                                background: "linear-gradient(90deg, rgba(254,250,229,0.12) 0%, rgba(169,255,103,0.12) 100%)"
                            }}
                        />

                        {/* BUTTON */}
                        <button className="mt-4 sm:mt-6  bg-[#A9FF67] text-[#1E3A22]
 w-[40%] py-1 rounded-4xl 
flex items-center justify-between
hover:bg-[#C4FF8A] transition shadow-lg ">

                            <span className="pl-16 font-manrope">Submit</span>

                            <span className="w-10 h-10 mr-2 text-end rounded-full border border-[#1E3A22] 
    flex items-center justify-center">
                                <ArrowUpRight size={22} />
                            </span>
                        </button>

                    </div>
                </div>

                {/* RIGHT IMAGE + TAGS SECTION */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-center justify-center relative p-4 sm:p-6">
                    <div className="w-[220px] md:mr-20 sm:w-[280px] md:w-[420px]">
                        <img
                            src={buffaloes}
                            alt="buffalo"
                            className="w-full  object-contain drop-shadow-xl"
                        />
                    </div>

                    <div className="mt-4 sm:mt-6  md:mt-8 grid grid-cols-3 gap-2 sm:gap-9 max-w-fit mx-auto md:mx-0">

                        <span className="inline-flex items-center justify-center
min-w-[191px]
px-4 py-2 whitespace-nowrap  font-manrope
bg-[#FFFFFF1C]/60 text-white rounded-full
border border-[#A9FF67]/40
text-xs sm:text-[15px]
leading-none text-center">
                            Stable Monthly Returns
                        </span>
                        <span className="inline-flex items-center justify-center
min-w-[191px] ml-5
px-4 py-3 whitespace-nowrap
bg-[#FFFFFF1C]/60 text-white rounded-full  font-manrope
border border-[#A9FF67]/40
text-xs sm:text-[15px]
leading-none text-center">
                            Insured & Secured
                        </span>


                        {/* <span className="px- sm:px-4 py-1 whitespace-nowrap
    bg-[#FFFFFF1C]/60 text-white rounded-full
    border border-[#A9FF67]/40
    text-xs sm:text-sm md:text-base
    leading-none text-center">
                            Insured & Secured
                        </span> */}
                        <span className="inline-flex items-center justify-center
min-w-[151px] ml-9
px-4 py-3 whitespace-nowrap
bg-[#FFFFFF1C]/60 text-white rounded-full  font-manrope
border border-[#A9FF67]/40
text-xs sm:text-[15px]
leading-none text-center">
                            Tangible Assets
                        </span>




                        <span className="inline-flex items-center justify-center
min-w-[209px] 
px-4 py-3 whitespace-nowrap
bg-[#FFFFFF1C]/60 text-white rounded-full  font-manrope
border border-[#A9FF67]/40
text-xs sm:text-[15px]
leading-none text-center">
                            Fully Managed Investment
                        </span>

                        <span className="inline-flex items-center justify-center
min-w-[209px]  ml-9
px-4 py-3 whitespace-nowrap
bg-[#FFFFFF1C]/60 text-white rounded-full  font-manrope
border border-[#A9FF67]/40
text-xs sm:text-[15px]
leading-none text-center">
                            Complete Transparency
                        </span>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Contact;

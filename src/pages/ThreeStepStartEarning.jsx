import React from "react";

const ThreeStepStartEarning = () => {
    return (
        <div className="w-full py-16 flex flex-col items-center bg-white px-4 sm:px-6 md:px-10">

            {/* Heading */}
            <h2 className="text-center text-2xl sm:text-3xl md:text-7xl text-gray-900 mb-20">
                <span className="text-[#A9FF67]">Three simple</span> steps to start <br />
                earning from <span className="text-[#A9FF67]">buffalo</span> farming
            </h2>

            <div className="w-full max-w-7xl flex flex-col md:flex-row items-start md:items-end">

                {/* STEP 01 */}
                <div className="relative w-full md:w-1/3 p-8 rounded-t-xl border border-[#A9FF67]/90
                    bg-white text-black min-h-[250px] flex flex-col items-start">
                    <span className="text-4xl mb-2 text-[#2D461D]">01.</span>
                    <h3 className="text-xl mb-3 text-[#2D461D]">Choose a Plan</h3>
                    <p className="text-base font-manrope text-[#378E00]">
                        Pick 1, 5, or 10 buffalo units <br /> based on your investment <br /> capacity.
                    </p>
                </div>

                {/* STEP 02 – Highlighted */}
                <div className="relative w-full md:w-1/3 p-8 rounded-t-xl border
                    bg-gradient-to-b from-[#2D461D] to-[#4B8230]
                    text-white -mt-12 z-10 border-[#A9FF67]/40 min-h-[330px]
                    flex flex-col items-start">
                    <span className="text-4xl mb-2 text-[#A9FF67]">02.</span>
                    <h3 className="text-xl mb-3 text-[#A9FF67]">Invest Securely</h3>
                    <p className="text-base font-manrope text-white/90">
                        Funds are used to raise and <br /> maintain your buffalo herd <br /> with expert care.
                    </p>
                </div>

                {/* STEP 03 */}
                <div className="relative w-full md:w-1/3 p-8 rounded-t-xl border border-[#A9FF67]/90
                    bg-white text-black min-h-[250px] flex flex-col items-start">
                    <span className="text-4xl mb-2 text-[#2D461D]">03.</span>
                    <h3 className="text-xl mb-3 text-[#2D461D]">Get Payouts</h3>
                    <p className="text-base font-manrope text-[#378E00]">
                        Monthly payouts into your <br /> account with full <br /> transparency and reporting.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ThreeStepStartEarning;

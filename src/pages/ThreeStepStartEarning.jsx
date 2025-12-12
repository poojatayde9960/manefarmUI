import React from "react";

const ThreeStepStartEarning = () => {
    const steps = [
        {
            id: "01.",
            title: "Choose a Plan",
            description: "Pick 1, 5, or 10 buffalo units based on your investment capacity.",
        },
        {
            id: "02.",
            title: "Invest Securely",
            description: "Funds are used to raise and maintain your buffalo herd with expert care.",
        },
        {
            id: "03.",
            title: "Get Payouts",
            description: "Monthly payouts into your account with full transparency and reporting.",
        },
    ];

    return (
        <div className="w-full py-16 flex flex-col items-center bg-white px-4 sm:px-6 md:px-10">
            <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-12">
                <span className="text-[#A9FF67]">Three simple</span> steps to start <br /> earning from <span className="text-[#A9FF67]">buffalo</span> farming
            </h2>
            <div className="w-full max-w-7xl flex flex-col md:mt-9 md:flex-row items-start md:items-end">

                {/* <div className="w-full max-w-5xl flex flex-col md:mt-9 md:flex-row items-start md:items-end"> */}
                {steps.map((step, index) => (
                    <div
                        key={step.id}
                        className={`
    relative w-full md:w-1/3 p-8 rounded-t-xl border

              ${index === 1
                                ? "bg-gradient-to-b from-[#2D461D] to-[#4B8230] text-white -mt-12 z-10 border-[#A9FF67]/40 min-h-[330px]"
                                : "bg-white text-black   border-[#A9FF67]/90 min-h-[250px]"
                            }

                flex flex-col items-start transition-all duration-300
            `}
                    >
                        <span className={`text-2xl  mb-2 ${index === 1 ? "text-[#A9FF67]" : "text-[#2D461D]"}`}>
                            {step.id}
                        </span>

                        <h3 className={`text-xl  mb-3 ${index === 1 ? "text-[#A9FF67]" : "text-[#2D461D]"}`}>
                            {step.title}
                        </h3>

                        <p className={`text-base ${index === 1 ? "text-white/90" : "text-[#378E00]"}`}>
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ThreeStepStartEarning;

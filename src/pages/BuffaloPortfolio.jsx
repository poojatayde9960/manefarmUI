import React from "react";
import { Icon } from "@iconify/react";
import { ArrowRight } from "lucide-react";

const BuffaloPortfolio = () => {
    return (
        <div className="w-full py-16 px-4 sm:px-6 md:px-10 flex flex-col items-center bg-white font-sans">
            <div className="text-center mb-12 max-w-4xl">
                <span className="text-xs inline-block bg-[#2D461D] text-white px-3 py-1 rounded-full mb-3">
                    Investment Plans
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                    <span className="text-[#A9FF67]">Choose</span> Your Buffalo{" "}
                    <span className="text-[#A9FF67]">Portfolio</span>
                </h2>
                <p className="text-gray-700 mt-3 text-sm sm:text-base">
                    Transparent, scalable investment options with documented ownership and monthly returns.
                </p>
            </div>

            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-stretch justify-center">

                {/* Card 1 */}
                <div className="flex-1 min-w-[320px] max-w-lg bg-[#C9FF9F66] rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-md">
                    <div>
                        <h3 className="text-[#2D461D] text-2xl font-goodly">1 Buffalo</h3>
                        <p className="text-sm text-[#2D461D] mt-1">Perfect for first-time agri-investors</p>

                        <div className="mt-4">
                            <p className="text-2xl text-[#2D461D] font-semibold">₹1,50,000</p>
                            <p className="text-md mt-1 text-[#2D461D]">11 % P.A</p>
                        </div>

                        <div className="mt-4 bg-[#2D461D] text-[#FEFAE5] rounded-2xl h-[80%] p-4 space-y-2">
                            {/* features same as before */}
                            {["Monthly payouts", "Individual animal tracking", "Individual animal tracking", "Monthly Health Reports", "Full Ownership Documentation", "Farm Visit Access"].map((f, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm">
                                    <span className="w-4 h-4 bg-[#A9FF67] flex items-center justify-center rounded-full">
                                        <h1 className="text-[#2D461D] text-sm">✓</h1>
                                    </span>
                                    <span>{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-8 md:mt-32">
                        <button className="flex-1 h-12 bg-[#2D461D] text-[#A9FF67] rounded-full font-medium hover:bg-[#3F6324] transition-colors flex items-center justify-center gap-2">
                            Invest Now <ArrowRight size={18} />
                        </button>
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-[#2D461D] rounded-full">
                            <Icon icon="solar:arrow-right-linear" className="text-[#2D461D] text-2xl" style={{ transform: "rotate(-30deg)" }} />
                        </span>
                    </div>

                </div>

                {/* Card 2 - 5 Buffalo (मध्याचा, थोडा मोठा दिसेल) */}
                <div className="flex-1 min-w-[320px] max-w-lg bg-[#C9FF9F66] rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-md">
                    <div>
                        <h3 className="text-[#2D461D] text-2xl font-goodly">5 Buffalo</h3>
                        <p className="text-sm text-[#2D461D] mt-1">Best For Small or growing Investors</p>

                        <div className="mt-4">
                            <p className="text-2xl text-[#2D461D] font-semibold">₹7,50,000</p>
                            <p className="text-md mt-1 text-[#2D461D]">12 % P.A</p>
                        </div>

                        <div className="mt-4 bg-[#2D461D] text-[#FEFAE5] rounded-2xl h-[80%] p-4 space-y-2">
                            {["Monthly payouts", "Portfolio Dashboard access", "Bi-weekly health reports", "Priority Farm visit scheduling", "Dedicated support contact", "Full Ownership Documentation"].map((f, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm">
                                    <span className="w-4 h-4 bg-[#A9FF67] flex items-center justify-center rounded-full">
                                        <h1 className="text-[#2D461D] text-sm">✓</h1>
                                    </span>
                                    <span>{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-8">
                        <button className="flex-1 h-12 bg-[#2D461D] text-[#A9FF67] rounded-full font-medium hover:bg-[#3F6324] transition-colors flex items-center justify-center gap-2">
                            Invest Now <ArrowRight size={18} />
                        </button>
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-[#2D461D] rounded-full">
                            <Icon icon="solar:arrow-right-linear" className="text-[#2D461D] text-2xl" style={{ transform: "rotate(-30deg)" }} />
                        </span>
                    </div>
                </div>

                {/* Card 3 - 10 Buffalo */}
                <div className="flex-1 min-w-[320px] max-w-lg bg-[#C9FF9F66] rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-md">
                    <div>
                        <h3 className="text-[#2D461D] text-2xl font-goodly">10 Buffalo</h3>
                        <p className="text-sm text-[#2D461D] mt-1">Perfect for serious agri-investors</p>

                        <div className="mt-4">
                            <p className="text-2xl text-[#2D461D] font-semibold">₹15,00,000</p>
                            <p className="text-md mt-1 text-[#2D461D]">13 % P.A</p>
                        </div>

                        <div className="mt-4 bg-[#2D461D] text-[#FEFAE5] rounded-2xl h-[80%] p-4 space-y-2">
                            {["Monthly payouts", "Premium Portfolio dashboard", "Weekly health updates", "Full Ownership Documentation", "Unlimited Farm Visits", "Dedicated Account Manager"].map((f, i) => (
                                <div key={i} className="flex items-center gap-2 text-sm">
                                    <span className="w-4 h-4 bg-[#A9FF67] flex items-center justify-center rounded-full">
                                        <h1 className="text-[#2D461D] text-sm">✓</h1>
                                    </span>
                                    <span>{f}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-3 mt-8">
                        <button className="flex-1 h-12 bg-[#2D461D] text-[#A9FF67] rounded-full font-medium hover:bg-[#3F6324] transition-colors flex items-center justify-center gap-2">
                            Invest Now <ArrowRight size={18} />
                        </button>
                        <span className="w-10 h-10 flex items-center justify-center border-2 border-[#2D461D] rounded-full">
                            <Icon icon="solar:arrow-right-linear" className="text-[#2D461D] text-2xl" style={{ transform: "rotate(-30deg)" }} />
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BuffaloPortfolio;
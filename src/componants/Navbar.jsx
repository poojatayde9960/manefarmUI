import React, { useState } from "react";
import logo from "/logo.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="w-full px-4 sm:px-6 md:px-1  md:py-4  py-3 flex items-center justify-between font-manrope bg-white relative">

                {/* Logo */}
                <img
                    src={logo}
                    alt="logo"
                    className="w-14 h-14 ml-5 sm:w-20 sm:h-20 object-contain"
                />


                {/* Desktop Center Nav */}
                <div
                    className="hidden md:flex flex-nowrap ml-[13%]  justify-center items-center gap-10 px-4 py-2 w-[29%] rounded-xl"
                    style={{
                        background: "#2D461D",
                        boxShadow: "0px 0px 6.1px 1px rgba(169,255,103,0.3) inset",
                    }}
                >
                    <button
                        className="px-5 py-1  text-left rounded-md text-sm font-medium"
                        style={{ background: "#A9FF67", color: "#2D461D" }}
                    >
                        Home
                    </button>

                    {["Benefits", "Plans", "About", "Gallery"].map((item) => (
                        <button
                            key={item}
                            className="text-[#A9FF67]  text-sm font-font-manrope hover:opacity-80 transition"
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* Desktop Right Buttons */}
                <div className="hidden md:flex  items-center gap-3 mr-14">
                    <button
                        className="px-10 py-3 rounded-xl text-sm text-[#A9FF67] font-medium"
                        style={{
                            background: "rgba(45,70,29,0.8)",
                            boxShadow: "0px 0px 6.1px 1px #A9FF67 inset",
                        }}
                    >
                        Login
                    </button>

                    <button
                        className="px-6 py-3 rounded-xl text-sm text-[#2D461D] font-medium"
                        style={{ background: "#A9FF67" }}
                    >
                        Contact Us
                    </button>
                </div>

                {/* Hamburger Icon – Small Screen */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-[#2D461D] text-3xl"
                >
                    {open ? <HiX /> : <HiMenu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div
                    className="md:hidden w-full bg-[#2D461D] text-[#A9FF67] flex flex-col items-center gap-4 py-6 rounded-b-2xl shadow-lg animate-fadeIn"
                    style={{
                        boxShadow: "0px 0px 6.1px 1px rgba(169,255,103,0.3) inset",
                    }}
                >
                    {/* Home Button */}
                    <button
                        className="px-4 py-2 rounded-md text-sm font-medium w-32"
                        style={{ background: "#A9FF67", color: "#2D461D" }}
                    >
                        Home
                    </button>

                    {["Benefits", "Plans", "About", "Gallery"].map((item) => (
                        <button
                            key={item}
                            className="text-sm font-medium hover:opacity-80 transition"
                        >
                            {item}
                        </button>
                    ))}

                    {/* Buttons */}
                    <button
                        className="px-10 py-2 rounded-xl text-sm text-[#A9FF67] font-medium w-40"
                        style={{
                            background: "rgba(45,70,29,0.8)",
                            boxShadow: "0px 0px 6.1px 1px #A9FF67 inset",
                        }}
                    >
                        Login
                    </button>

                    <button
                        className="px-6 py-2 rounded-xl text-sm text-[#2D461D] font-medium w-40"
                        style={{ background: "#A9FF67" }}
                    >
                        Contact Us
                    </button>
                </div>
            )}
        </>
    );
};

export default Navbar;
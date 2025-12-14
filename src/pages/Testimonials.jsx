import React from "react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoCaretForwardOutline, IoCaretBack } from "react-icons/io5";

const testimonials = [
  {
    name: "Priya Khandekar",
    message:
      "I actually visited the farm before investing. The buffaloes are well cared for, the team is professional, and everything is documented. Truly a modern way to invest in dairy farming.",
    rating: 5,
  },
  {
    name: "Priya Khandekar",
    message:
      "I actually visited the farm before investing. The buffaloes are well cared for, the team is professional, and everything is documented. Truly a modern way to invest in dairy farming.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div
    className="
      bg-[#2D461D] text-white rounded-xl 
      p-6 shadow-md 
      flex flex-col items-center 
      w-full sm:w-[320px] md:w-[350px]
      relative flex-shrink-0
    "
  >
    {/* Quote icon */}
    <div
      className="
        bg-[#A9FF67] text-[#2D461D] rounded-full 
        w-14 h-14 md:w-16 md:h-16 
        flex items-center justify-center 
        absolute -top-6 md:-top-10
      "
    >
      <RiDoubleQuotesL size={30} />
    </div>

    <div className="flex flex-col items-center mt-10 font-manrope">
      <h3 className="font-semibold text-base md:text-lg mb-2 text-[#A9FF67]">
        {testimonial.name}
      </h3>

      <p className="text-xs sm:text-sm text-center leading-relaxed mb-4">
        {testimonial.message}
      </p>

      <div className="flex mt-3">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FaStar key={i} size={22} className="text-yellow-400 mr-1" />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-16 bg-[#E8FFD694] overflow-hidden">
      {/* Heading */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-7xl text-[#2D461D] leading-snug">
          <span className="text-[#A9FF67]">Real experiences</span> from people{" "}
          <br className="hidden md:block" />
          who trust <span className="text-[#A9FF67]">Mane Farms</span>
        </h2>

        <p className="text-sm sm:text-base md:text-xl text-[#2D461D] mt-4 font-manrope">
          Experiences That Reflect Our Commitment to
          <br className="hidden md:block" /> Quality, Care & Investor
          Satisfaction
        </p>
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center">
        {/* World map (desktop only – unchanged) */}

        <div className="hidden md:block absolute -left-20 -bottom-24 z-0">
          {/* Green shadow BEHIND map */}
          <div className="absolute inset-0 bg-[#A9FF67] opacity-20 blur-3xl rounded-full scale-125 z-0"></div>

          {/* Map image */}
          <img
            src="/world-map.png"
            alt="World map"
            className="relative h-[550px] w-[450px] opacity-20 z-10"
          />
        </div>

        {/* Cards */}
        <div
          className="
            flex gap-6 
            w-full 
            overflow-x-auto md:overflow-visible
            px-2 md:px-0
            justify-start md:justify-center
            scrollbar-hide
          "
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Arrows */}
        <div
          className="
            flex gap-4 mt-8 md:mt-0
            md:absolute md:right-20 md:top-1/2 md:-translate-y-1/2
          "
        >
          <button className="bg-white border border-[#2D461D] p-3 md:p-4 rounded-full shadow hover:bg-green-50">
            <IoCaretBack className="text-[#2D461D]" size={30} />
          </button>

          <button className="bg-[#A9FF67] p-3 md:p-4 rounded-full shadow hover:bg-green-500">
            <IoCaretForwardOutline className="text-[#2D461D]" size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import { RiPlayReverseLargeFill } from "react-icons/ri";

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
      h-auto md:h-72 p-6 shadow-md 
      flex flex-col items-center 
      max-w-sm w-full md:w-auto 
      relative
    "
  >
    {/* Quote icon */}
    <div
      className="
        bg-[#A9FF67] text-[#2D461D] rounded-full 
        w-16 h-16 flex items-center justify-center text-2xl mb-4 
        absolute 
        md:bottom-60 md:left-48 
        left-1/2 -translate-x-1/2 md:-top-10 -top-2
      "
    >
      <RiDoubleQuotesL size={35} />
    </div>

    <div className="flex flex-col items-center mt-10">
      <h3 className="font-semibold text-lg mb-2">{testimonial.name}</h3>
      <p className="text-sm mb-4 text-center">{testimonial.message}</p>

      <div className="flex mt-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FaStar key={i} size={30} className="text-yellow-400 mr-2" />
        ))}
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 px-4  md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-6xl font-semibold text-[#A9FF67] leading-snug">
          Real experiences{" "}
          <span className="text-[#2D461D]">
            from people
            <br className="md:hidden" />
          </span>{" "}
          who trust <span className="text-[#2D461D]">Mane Farms</span>
        </h2>

        <p className="text-sm md:text-base text-gray-700 mt-2 leading-relaxed">
          Experiences That Reflect Our Commitment to
          <br className="hidden md:block" /> Quality, Care & Investor Satisfaction
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center items-center gap-6 relative">
        {/* World map (desktop only) */}
        <img
          src="/world-map.png"
          alt="World map"
          className="hidden md:block absolute -left-15 -bottom-24 h-[550px] w-[450px] opacity-20"
        />

        {/* Testimonials */}
        <div
          className="
            flex flex-col md:flex-row 
            gap-6 
            overflow-x-auto md:overflow-visible 
            w-full md:w-auto 
            px-2 md:px-0
          "
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>

        {/* Carousel Arrows */}
        <div
          className="
            absolute 
            md:right-20 md:top-1/2 md:-translate-y-1/2 
            flex space-x-3 
            bottom-[-70px] md:bottom-auto
          "
        >
          <button
            className="bg-white border border-[#2D461D] p-4 md:p-5 rounded-full shadow hover:bg-green-50"
          >
            <FaPlay className="text-[#2D461D]" size={25} />
          </button>

          <button
            className="bg-[#A9FF67] p-4 md:p-5 rounded-full shadow hover:bg-green-500"
          >
            <RiPlayReverseLargeFill className="text-[#2D461D]" size={30} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

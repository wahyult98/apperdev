/* eslint-disable no-unused-vars */
import React from "react";
import imgBanner from "/rocket.png";

function Banner() {
  return (
    <div className="w-full h-screen flex flex-col justify-end lg:px-[72px] px-4">
      <div className="max-w-[450px] md:max-w-[500px] lg:max-w-[600px] sm:ml-10 ml-4">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          className="font-bold text-2xl lg:text-[20px] text-white"
        >
          GET A BETTER ADVICE
        </h1>
      </div>

      <div className="my-12">
        <h1
          data-aos="fade-right"
          data-aos-duration="600"
          className="text-[20px] md:text-[40px] lg:text-[60px] sm:ms-20 lg:ms-60 px-4 sm:px-10 font-semibold text-white"
        >
          Where UX Drives Innovation, Empowering Businesses with Creativity and
          Excellence
        </h1>
      </div>
    </div>
  );
}

export default Banner;

/* eslint-disable no-unused-vars */
import React from "react";
import imgBanner from "/rocket.png";
export default function About() {
  return (
    <div className="w-full h-[260px] top-[92px] left-[164px] bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-center px-4 sm:px-10 lg:px-20">
        <div className="w-full lg:w-1/2 my-4 lg:my-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] mb-4 lg:mb-8 font-extrabold leading-loose">
            Featured
            <span className="block mb-4 lg:mb-10"></span> Collaborations
          </h2>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="text-base sm:text-lg md:text-xl text-justify">
            We pride ourselves on forging powerful collaborations that push the
            boundaries of user experience and digital innovation. Our featured
            partnerships showcase how we&aps;ve worked hand-in-hand with
            industry leaders and visionary startups alike to create
            transformative digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

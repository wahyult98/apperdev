/* eslint-disable no-unused-vars */
import React from "react";
import imgBanner1 from "/Elevate-min.png";
import imgBanner2 from "/Horror-min.png";
import imgBanner3 from "/Cockpit-min.png";
import imgBanner4 from "/Elevate-min.png";
import { FaArrowRight } from "react-icons/fa6";

export default function Content() {
  return (
    <div className="w-full bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 mx-4 sm:mx-8 md:mx-20 p-4 sm:p-10">
        <div className="relative mt-12 transform transition duration-300 hover:-translate-y-4 z-10">
          <img src={imgBanner1} alt="Logo" className="w-full" />
          <div className="my-6 text-xl">
            <h2 className="font-bold">
              Elevate Workplace Engagement and Well-being
            </h2>
            <p className="break-words">
              Our innovative employee activities platform is designed to
              transform company culture and boost workforce satisfaction.
            </p>
            <button className="bg-fuchsia-500 text-black py-3 px-3 rounded-md outline-none flex items-center font-bold mt-3 transition-transform duration-300 transform hover:scale-105 hover:text-white">
              Get in touch <FaArrowRight className="ms-2" />
            </button>
          </div>
        </div>
        <div className="relative transform transition duration-300 hover:-translate-y-4 z-10">
          <img src={imgBanner2} alt="Logo" className="w-full" />
          <div className="my-6 text-xl">
            <h2 className="font-bold">Horror themed quiz</h2>
            <p className="break-words text-justify">
              A dynamic and engaging horror-themed quiz journey that takes users
              through a series of interactive steps, including pop-ups and
              animations. The project showcases a high level of creativity and
              technical skill in web development.
            </p>
            <button className="bg-fuchsia-500 text-black py-3 px-3 rounded-md outline-none flex items-center font-bold mt-3 transition-transform duration-300 transform hover:scale-105 hover:text-white">
              Get in touch <FaArrowRight className="ms-2" />
            </button>
          </div>
        </div>
        <div className="relative mt-12 transform transition duration-300 hover:-translate-y-4 z-10">
          <img src={imgBanner3} alt="Logo" className="w-full" />
          <div className="my-6 text-xl">
            <h2 className="font-bold">
              Revolutionizing Cockpit Creation, A Platform Redesign for
              Accelerated Adoption
            </h2>
            <p className="break-words text-justify">
              With the Ori dashboard, making informed strategic decisions
              through BI-driven Jira analytics reporting becomes a reality.
            </p>
            <button className="bg-fuchsia-500 text-black py-3 px-3 rounded-md outline-none flex items-center font-bold mt-3 transition-transform duration-300 transform hover:scale-105 hover:text-white">
              Get in touch <FaArrowRight className="ms-2" />
            </button>
          </div>
        </div>
        <div className="relative transform transition duration-300 hover:-translate-y-4 z-10">
          <img src={imgBanner4} alt="Logo" className="w-full" />
          <div className="my-6 text-xl">
            <h2 className="font-bold">Invite your colleague to the event</h2>
            <p className="break-words">
              The SDS Manager is a B2B tool designed to manage the chemical
              library for factories or companies. The new government regulations
              require companies to regularly update.
            </p>
            <button className="bg-fuchsia-500 text-black py-3 px-3 rounded-md outline-none flex items-center font-bold mt-3 transition-transform duration-300 transform hover:scale-105 hover:text-white">
              Get in touch <FaArrowRight className="ms-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

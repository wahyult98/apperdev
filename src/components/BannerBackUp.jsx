/* eslint-disable no-unused-vars */
import React from "react";
import imgBanner from "/rocket.png";

function Banner() {
  return (
    <div className="absolute w-[1162px] h-[598px] top-[92px] left-[164px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-1/2">
          <div className="text-4xl mb-8  text-white flex">
            <h1 className="">
              {" "}
              <span className="font-bold">Apper</span> Studio
            </h1>
          </div>
          <div className="text-5xl mb-8 font-extrabold text-white">
            Find you dream job
          </div>
          <div className="text-xl mb-10 font-normal text-white">
            Where UX Drives Innovation, Empowering Businesses with <br />
            User-Centric Solutions.
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={imgBanner}
            alt="Img Banner"
            className="w-[553px] h-[598px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;

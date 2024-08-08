/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "/apperDev.png";
import { useEffect, useState } from "react";
import { navLink } from "../data/dummy";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const handlerScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);
  return (
    <nav className="flex justify-center h-[100px]">
      <div className="w-[1200px] flex items-center">
        <div className="">
          <img src={Logo} className="w-[30px] h-[30px]" />
        </div>
        <div className="flex ml-auto">
          {navLink.map((item) => {
            return (
              <a
                key={item.id}
                to={item.id}
                className={`${
                  isScroll ? "text-[14px]" : "text-[18px]"
                }  hover:text-orange transition duration-300 ease-in-out hover:cursor-pointer hover:font-bold text-white ml-12`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

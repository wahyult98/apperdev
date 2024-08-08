import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Logo from "/apperDev.png";
import { navLink } from "../data/dummy";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScroll ? "bg-[#fefefe] h-[60px] lg:-top-[60px]" : "h-[80px]"
      } lg:px-[72px] px-5 w-full z-[10] fixed transition-all duration-300 ease-in-out flex items-center`}
    >
      <div className="w-[103px] h-[25px]">
        <img src={Logo} alt="Logo" className="w-[30px] h-[30px]" />
      </div>
      <div className="flex items-center gap-x-3 ml-auto">
        <ul className="hidden md:flex gap-5">
          {navLink.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                href={item.href}
                className={`${
                  isScroll ? "text-[14px]" : "text-[18px]"
                } hover:text-orange transition duration-300 ease-in-out cursor-pointer hover:font-bold text-white`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-fuchsia-500 text-white py-1 px-4 rounded-sm outline-none ml-5">
          Sign In
        </button>
        <FiMenu
          size={24}
          className="block md:hidden cursor-pointer text-white"
          onClick={() => setNav((prev) => !prev)}
        />
      </div>

      <div
        className={`${
          nav ? "right-0" : "-right-full"
        } w-full md:w-[50%] bg-white h-screen absolute top-0 p-10 md:hidden transition-all duration-300 ease-in-out`}
      >
        <AiOutlineClose
          className="text-2xl mb-3 cursor-pointer"
          onClick={() => setNav((prev) => !prev)}
        />
        <ul className="flex flex-col gap-5">
          {navLink.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                className="text-[18px] py-2 hover:text-orange transition duration-300 ease-in-out border-b-2"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

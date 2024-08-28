import { FaRegArrowAltCircleRight } from "react-icons/fa";

import logo_horizontal from "../assets/logo-text-horizontal.svg";

function Navbar() {
  return (
    <>
      <div className="z-10 fixed top-0 w-full h-[10vh] grid grid-cols-2 items-center bg-primary backdrop-blur-md">
        <img src={logo_horizontal} alt="logo" className="h-14 ml-4" />
        <ul className="h-14 flex flex-row justify-self-end mr-4 items-center space-x-8">
          <li>
            <a className="hidden sm:flex text-lg hover:underline" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hidden sm:flex text-lg hover:underline" href="#about">
              About
            </a>
          </li>
          <li>
            <button className="flex flex-row items-center h-12 bg-white rounded-xl px-4">
              Get Started
              <FaRegArrowAltCircleRight className="ml-2" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

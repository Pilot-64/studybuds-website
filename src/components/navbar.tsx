import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import logo_horizontal from "../assets/logo-text-horizontal.svg";

function Navbar() {
  return (
    <>
      <div className="z-10 px-4 fixed top-0 w-full h-[10vh] flex flex-row justify-between items-center bg-primary backdrop-blur-md">
        <a className="w-[200px] sm:w-[300px]" href="/">
          <img src={logo_horizontal} alt="logo" />
        </a>
        <ul className="h-14 hidden sm:flex flex-row justify-self-end mr-4 items-center space-x-8">
          <li>
            <a className="flex text-lg hover:underline" href="/#home">
              Home
            </a>
          </li>
          <li>
            <a className="flex text-lg hover:underline" href="/#about">
              About
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="flex flex-row items-center h-12 bg-white rounded-xl px-4"
            >
              Login
            </a>
          </li>
        </ul>
        <a
          className="sm:hidden border p-1 rounded-xl border-gray-300"
          href="dashboard"
        >
          <RxHamburgerMenu size={"35px"} />
        </a>
      </div>
    </>
  );
}

export default Navbar;

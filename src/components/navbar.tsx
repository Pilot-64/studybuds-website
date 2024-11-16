import axios from "axios";
import { useAuth } from "../provider/authProvider";
import { useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies(null, { path: "/" });

import { BsDiscord } from "react-icons/bs";
import {
  IoLogOutOutline,
  IoSettingsOutline,
  IoChevronUpOutline,
  IoChevronDownOutline,
} from "react-icons/io5";

import logo_horizontal from "../assets/logo-text-horizontal.svg";

function timeout(delay: number) {
  return new Promise((res) => setTimeout(res, delay));
}

function Navbar() {
  const { isAuthenticated /*, loading*/ } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false); // Add state for dropdown

  let cachedData = null;
  try {
    const storedData = localStorage.getItem("apiResponse");
    cachedData = storedData ? JSON.parse(storedData) : {};
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    cachedData = {}; // Fallback to an empty object if parsing fails
  }

  return (
    <>
      <div className="z-10 px-[1.5vw] sticky top-0 w-full h-[80px] mb-[-80px] flex flex-row justify-between items-center bg-primary backdrop-blur-md">
        <a className="w-[200px] sm:w-[300px]" href="/">
          <img src={logo_horizontal} alt="logo" />
        </a>
        {!isAuthenticated ? (
          <ul className="h-14 flex flex-row justify-self-end items-center space-x-8">
            <li>
              <a
                className="hidden md:flex font-medium text-lg hover:underline"
                href="/#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hidden md:flex font-medium text-lg hover:underline"
                href="/#about"
              >
                About
              </a>
            </li>
            <li>
              <button
                onClick={async () => {
                  const response = await axios.get(`/api/auth/discord/login`);
                  console.log(response);
                  window.location.href = response.data;
                }}
                className="flex flex-row items-center h-12 bg-[#5865F2] shadow-md hover:shadow-xl text-white font-medium rounded-xl px-4"
              >
                <BsDiscord className="mr-3" size={"25px"} />
                Login with Discord
              </button>
            </li>
          </ul>
        ) : (
          <ul className="h-14 flex flex-row justify-self-end items-center space-x-8">
            <li>
              <a
                className="hidden md:flex text-lg font-medium hover:underline"
                href="/"
              >
                Dashboard
              </a>
            </li>
            <li className="relative">
              <button
                className="flex flex-row items-center p-2 bg-gray-200 rounded-full"
                onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
              >
                <img
                  src={
                    "https://cdn.discordapp.com/avatars/" +
                    cachedData.response.user.id +
                    "/" +
                    cachedData.response.user.avatarURL +
                    ".webp?size=40"
                  }
                  className="rounded-full"
                />
                <p className="mx-4">{cachedData.response.user.name}</p>
                {dropdownOpen ? (
                  <IoChevronUpOutline size={"20px"} />
                ) : (
                  <IoChevronDownOutline size={"20px"} />
                )}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                  <a
                    href="/profile"
                    className="flex flex-row items-center px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </a>
                  <a
                    href="/settings"
                    className="flex flex-row items-center px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
                  >
                    <IoSettingsOutline className="mr-1" />
                    Settings
                  </a>
                  <div className="bg-black h-[1px] w-full" />
                  <button
                    onClick={async () => {
                      timeout(500);
                      localStorage.removeItem("apiResponse");
                      cookies.remove("token");
                      window.location.href = "/";
                    }}
                    className="flex flex-row items-center w-full text-left text-lg px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    <IoLogOutOutline className="mr-1" />
                    Logout
                  </button>
                </div>
              )}
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;

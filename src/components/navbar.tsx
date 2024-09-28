import { BsDiscord } from "react-icons/bs";
import axios from "axios";
import { useAuth } from "../provider/authProvider";

import logo_horizontal from "../assets/logo-text-horizontal.svg";

function Navbar() {
  const { isAuthenticated /*, loading*/ } = useAuth();

  return (
    <>
      <div className="z-10 px-[1.5vw] fixed top-0 w-full h-[10vh] flex flex-row justify-between items-center bg-primary backdrop-blur-md">
        <a className="w-[200px] sm:w-[300px]" href="/">
          <img src={logo_horizontal} alt="logo" />
        </a>
        {!isAuthenticated ? (
          <ul className="h-14 flex flex-row justify-self-end mr-4 items-center space-x-8">
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
                  const response = await axios.get(
                    `http://localhost:4000/auth/discord/login`,
                  );
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
          <ul className="h-14 flex flex-row justify-self-end mr-4 items-center space-x-8">
            <li>
              <a
                className="hidden md:flex text-lg font-medium hover:underline"
                href="/"
              >
                Dashboard
              </a>
            </li>
            <li>
              <button
                onClick={async () => {
                  window.location.href = "/";
                }}
                className="flex flex-row bg-white items-center h-12 shadow-md hover:shadow-xl text-black font-medium rounded-xl px-4"
              >
                Profile
              </button>
            </li>
            <li>
              <button
                onClick={async () => {
                  window.location.href = "/";
                }}
                className="flex flex-row items-center h-12 bg-[#5865F2] shadow-md hover:shadow-xl text-white font-medium rounded-xl px-4"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </>
  );
}

export default Navbar;

import logo_horizontal from "../assets/logo-text-horizontal.svg";

function Navbar() {
  return (
    <>
      <div className="z-10 fixed w-full h-[10vh] grid grid-cols-2 bg-primary border-b-2 border-zinc-200">
        <img
          src={logo_horizontal}
          alt="logo"
          className="h-14 justify-self-start"
        />
        <ul className="h-14 flex flex-row justify-self-end space-x-5">
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
            <button className="h-12 bg-gray-200 rounded-xl px-4">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;

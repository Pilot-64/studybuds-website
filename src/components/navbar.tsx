import logo_horizontal from "../assets/logo-text-horizontal.svg";

function Navbar() {
  return (
    <>
      <div className="w-full h-20 grid grid-cols-3 place-items-center bg-primary border-b-2 border-zinc-200">
        <ul className="h-14">
          <li>Home</li>
          <li>About</li>
        </ul>
        <img src={logo_horizontal} alt="logo" className="h-14" />
        <button className="h-12 bg-gray-200 rounded-xl px-4">
          Get Started
        </button>
      </div>
    </>
  );
}

export default Navbar;

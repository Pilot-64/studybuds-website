import { BsMouse } from "react-icons/bs";
import scribbleicon1 from "../assets/scribbleicons/scribbleicon1.svg";

function LandingScreen() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <div className="snap-center grid md:grid-cols-2 gap-2 place-items-center mt-[10vh] h-[80vh] bg-primary">
          <ol className="list-decimal list-inside space-y-5">
            <li className="text-6xl font-semibold">Connect,</li>
            <li className="text-6xl font-semibold">Study,</li>
            <li className="text-6xl italic">Succeed!</li>
          </ol>
          <img
            className="p-20"
            src={scribbleicon1}
            alt="thought bubble in scribble"
          />
        </div>
        <div className="flex flex-col col-span-2 items-center justify-center w-full h-[10vh] bg-primary">
          <BsMouse className="animate-bounce w-10 h-10" />
          <h1>About</h1>
        </div>
        <div
          id="about"
          className="snap-center flex flex-col h-[90vh] justify-center items-center bg-white"
        >
          <ol className="list-decimal">
            <h1>Simply sign up by:</h1>
          </ol>
        </div>
      </div>
    </>
  );
}

export default LandingScreen;

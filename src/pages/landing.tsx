import { BsMouse } from "react-icons/bs";

function LandingScreen() {
  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <div className="snap-center grid md:grid-cols-2 gap-2 place-items-center pt-[10vh] h-[90vh] bg-primary">
          <ol className="list-decimal list-inside space-y-5">
            <li className="text-6xl font-semibold">Connect,</li>
            <li className="text-6xl font-semibold">Study,</li>
            <li className="text-6xl italic">Succeed!</li>
          </ol>
          <img />
        </div>
        <div className="flex flex-col col-span-2 items-center justify-center w-full h-[10vh] bg-primary">
          <BsMouse className="animate-bounce w-10 h-10" />
        </div>
        <div
          id="about"
          className="snap-center flex flex-col pt-[10vh] h-dvh justify-center items-center bg-white"
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

import { BsDiscord, BsMouse } from "react-icons/bs";

function LandingScreen() {
  return (
    <>
      <div className="h-[93vh] space-y-8 snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        <div
          id="home"
          className="snap-center flex flex-col justify-center items-center h-[93vh] bg-primary"
        >
          <div className="flex flex-col items-center justify-center space-y-5">
            <h2 className="text-6xl font-semibold text-center px-3">
              Discover educational{" "}
              <p className="xl:inline block mx-4 font-black">
                <BsDiscord className="inline" /> Discord
              </p>
              communities
            </h2>
            <h2 className="text-4xl text-center">
              Join and create study communities
            </h2>
            <div className="flex flex-row space-x-8">
              <div className="flex flex-row space-x-1 items-center">
                <div className="bg-green-400 w-2 h-2 rounded-full animate-pulse" />
                <p className="font-medium text-2xl">121 Students</p>
                <p className="text-2xl">in</p>
                <p className="font-medium text-2xl">12 Servers</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col col-span-2 items-center justify-center w-full bg-primary">
            <BsMouse className="animate-bounce w-10 h-10" />
            <h1>About</h1>
          </div>
        </div>
        <div
          id="about"
          className="snap-center flex flex-col h-[93vh] border-t-4 justify-start items-center bg-white"
        >
          <h2 className="text-6xl">
            Made by highschoolers, for highschoolers.
          </h2>
          <h2 className="text-4xl">
            We get it. Studying is hard. But it doesn't have to be.
          </h2>
          <div className="">
            <div className="flex flex-col space-y-5 w-[50vw]">
              <p>
                Hi there! I'm Oliver Nederal, currently a high school student
                just like you. School can be tough, and sometimes online
                resources and YouTube aren't exactly of help. That's where peer
                support comes in—working together makes learning more fun and
                effective! Being a student myself, I understand the challenges
                of balancing assignments, tests, and extracurriculars.
              </p>
              <p>
                I put my sweat, blood, and tears into making StudyBuds with the
                belief that no one should feel lost or alone in their studies.
                By connecting with others, we can all improve, grow, and
                succeed.
              </p>
              <p>
                To do this, education has to be accessible. I, personally,
                pledge that StudyBuds will always be free to use, and will rely
                on charitable donations to solely cover the operations cost of
                hosting it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingScreen;

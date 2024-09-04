import { IoStar, IoStarHalf } from "react-icons/io5";
import { MdOutlineFavorite, MdFavorite } from "react-icons/md";

export function ServerCard() {
  return (
    <>
      <div className="flex flex-col w-full bg-zinc-50 shadow-xl rounded-xl">
        <div className="flex flex-row w-full h-[100px]">
          <div className="flex row-span-4 place-items-center">
            <img
              className="object-contain w-36 p-2 rounded-2xl"
              src={"https://placehold.co/200"}
            />
          </div>
          <div className="grid w-full grid-cols-1 grid-rows-3 gap-2">
            <div className="row-span-2">
              <h1 className="text-xl text-wrap font-medium">Class Name</h1>
            </div>
            <div className="flex flex-row justify-between row-start-3 bg-blue-200">
              <div className="flex flex-row items-center">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStarHalf />
              </div>
              <div className="flex flex-row items-center space-x-2">
                <div className="bg-green-400 w-2 h-2 rounded-full" />
                <h2>215 Online</h2>
              </div>
            </div>
          </div>
        </div>
        <p className="break-all text-wrap">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          venenatis eros vitae porttitor maximus. Donec tempus dignissim
          hendrerit. Nullam vestibulum consectetur risus, a vulputate augue
          suscipit et. Morbi bibendum imperdiet ornare. Ut condimentum purus
          orci, eu tristique neque facilisis et. Vivamus aliquet consectetur
          porttitor.
        </p>
        <div className="grid h-16 p-2 grid-rows-1 gap-2 grid-cols-5">
          <button className="col-span-4 bg-primary rounded-xl">Join</button>
          <button className="flex bg-primary rounded-xl justify-center items-center">
            <MdFavorite size={"20px"} />
          </button>
        </div>
      </div>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <h1 className="mt-[10vh]">Dashboard</h1>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mx-4">
        <ServerCard />
        <ServerCard />
        <ServerCard />
        <ServerCard />
        <ServerCard />
      </div>
    </>
  );
}

export default Dashboard;

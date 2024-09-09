import { useState } from "react";

import { IoThumbsDown, IoThumbsUp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";

function ServerCard({ server }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <>
      <div className="flex justify-between flex-col w-full bg-zinc-50 shadow-xl rounded-xl">
        <div className="flex flex-col justify-start">
          <div className="flex flex-row w-full h-[100px]">
            <div className="flex row-span-4 place-items-center">
              <img
                className="object-contain w-36 p-2 rounded-2xl"
                src={"https://placehold.co/200"}
              />
            </div>
            <div className="grid w-full grid-cols-1 grid-rows-3 gap-2">
              <div className="h-full row-span-3 flex place-items-center">
                <h1 className="text-xl text-wrap font-medium">{server.name}</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between px-2 row-start-3">
            <div className="flex flex-row items-center space-x-1 border rounded-xl p-1">
              <IoThumbsUp />
              <p>{server.likes}</p>
              <RxDividerVertical />
              <IoThumbsDown />
              <p>{server.dislikes}</p>
            </div>
            <div className="flex flex-row items-center space-x-1">
              <div className="bg-green-400 w-2 h-2 rounded-full" />
              <h2>{server.membercount}</h2>
              <h2>Members</h2>
            </div>
          </div>
          <p className="text-wrap px-2">{server.description}</p>
        </div>
        <div className="grid h-16 p-2 grid-rows-1 gap-2 grid-cols-5">
          <a
            href={server.invitelink}
            target={"_blank"}
            className="flex justify-center items-center col-span-4 bg-primary rounded-xl"
          >
            Join
          </a>
          <button
            onClick={() => setFavorite(!favorite)}
            className="flex rounded-xl border justify-center items-center"
          >
            <FaHeart
              className="transition-all"
              color={favorite ? "red" : "gray"}
              size={"20px"}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default ServerCard;

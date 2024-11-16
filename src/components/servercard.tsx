import { useState, useEffect, useMemo } from "react";
import { FaRegStar, FaStar, FaBookmark } from "react-icons/fa";
import axios from "axios";

interface Server {
  name: string;
  description: string;
  inviteLink: string;
  rating: number;
}

interface ServerInfo {
  membercount: number;
  icon: string;
  splash: string;
}

async function getServerInfo(invite: string): Promise<any | null> {
  try {
    const response = await axios.get(`/api/servers/serverinfo/${invite}`);
    return response;
  } catch (error) {
    console.error("Error fetching serverlist info:", (error as Error).message);
    return null;
  }
}

function ServerCard({ server }: { server: Server }) {
  const [favorite, setFavorite] = useState(false);
  const [serverState, setServerState] = useState<{
    info: ServerInfo | null;
    loading: boolean;
  }>({
    info: null,
    loading: true,
  });

  useEffect(() => {
    async function fetchServerInfo() {
      let info = await getServerInfo(server.inviteLink);
      info = info.data;
      setServerState({ info, loading: false });
    }
    fetchServerInfo();
  }, [server.inviteLink]);

  const starRating = useMemo(() => {
    const fullStars = Math.floor(server.rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {Array(fullStars).fill(<FaStar color="gold" />)}
        {Array(emptyStars).fill(<FaRegStar color="gold" />)}
      </>
    );
  }, [server.rating]);

  return (
    <div className="flex justify-between flex-col w-full bg-zinc-50 shadow-xl rounded-xl">
      <div className="flex flex-col justify-start">
        <div className="flex flex-row w-full h-[100px] px-2">
          <div className="flex row-span-4 place-items-center">
            {serverState.loading ? (
              <div className="w-20 h-20 rounded-2xl border-2 bg-gray-200 animate-pulse" />
            ) : (
              <img
                className="object-contain w-24 rounded-2xl border-2"
                src={serverState.info?.icon}
                alt="Server Logo"
              />
            )}
          </div>
          <div className="grid w-full grid-cols-1 grid-rows-3 gap-2">
            <div className="h-full ml-2 row-span-3 flex place-items-center">
              <h1 className="text-xl text-wrap font-medium">{server.name}</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 row-start-3">
          <div className="flex flex-row items-center space-x-1">
            {starRating}
            <p>{server.rating}/5</p>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <div className="bg-green-400 w-2 h-2 rounded-full" />
            <h2>
              {serverState.loading
                ? "Loading..."
                : serverState.info?.membercount || "N/A"}{" "}
              Members
            </h2>
          </div>
        </div>
        <p className="text-wrap px-2">{server.description}</p>
      </div>
      <div className="grid h-16 p-2 grid-rows-1 gap-2 grid-cols-5">
        <a
          href={"https://discord.com/invite/" + server.inviteLink}
          target={"_blank"}
          rel="noreferrer"
          className="flex justify-center items-center col-span-4 bg-primary rounded-xl"
        >
          Join
        </a>
        <button
          onClick={() => setFavorite(!favorite)}
          className="flex rounded-xl border justify-center items-center"
        >
          <FaBookmark
            className="transition-all"
            color={favorite ? "black" : "gray"}
            size={"20px"}
          />
        </button>
      </div>
    </div>
  );
}

export default ServerCard;

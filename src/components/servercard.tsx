import { useState, useEffect } from "react";

import { FaRegStar, FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

import axios from "axios";

interface Server {
  name: string;
  description: string;
  invitelink: string;
}

async function getServerInfo(invite: string): Promise<any | null> {
  try {
    const response = await axios.get(
      `https://discord.com/api/v9/invites/${invite}?with_counts=true`,
    );
    return response.data; // Return the entire data object
  } catch (error) {
    console.error("Error fetching server info:", error.message || error);
    return null;
  }
}

interface Server {
  name: string;
  description: string;
  inviteLink: string;
  rating: number;
}

interface ServerInfo {
  approximate_member_count: number;
}

function ServerCard({ server }: { server: Server }) {
  const [favorite, setFavorite] = useState(false);
  const [serverInfo, setServerInfo] = useState<ServerInfo | null>(null); // Store the full server info
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch the server information when the component mounts
  useEffect(() => {
    async function fetchServerInfo() {
      const info = await getServerInfo(server.inviteLink);
      console.log(info);
      setServerInfo(info); // Set the entire server info object
      setLoading(false); // Mark loading as complete
    }

    fetchServerInfo();
  }, []);

  return (
    <div className="flex justify-between flex-col w-full bg-zinc-50 shadow-xl rounded-xl">
      <div className="flex flex-col justify-start">
        <div className="flex flex-row w-full h-[100px]">
          <div className="flex row-span-4 place-items-center">
            <img
              className="object-contain w-36 p-2 rounded-2xl"
              src={"https://placehold.co/200"}
              alt="Server Logo"
            />
          </div>
          <div className="grid w-full grid-cols-1 grid-rows-3 gap-2">
            <div className="h-full row-span-3 flex place-items-center">
              <h1 className="text-xl text-wrap font-medium">{server.name}</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 row-start-3">
          <div className="flex flex-row items-center space-x-1">
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaStar color="gold" />
            <FaRegStar color="gold" />
            <p>{server.rating}/5</p>
          </div>
          <div className="flex flex-row items-center space-x-1">
            <div className="bg-green-400 w-2 h-2 rounded-full" />
            <h2>
              {loading
                ? "Loading..."
                : serverInfo?.approximate_member_count !== undefined
                  ? serverInfo.approximate_member_count
                  : "N/A"}
            </h2>
            <h2>Members</h2>
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

import { useEffect, useState } from "react";
import { FaTrophy, FaSearch, FaFilter } from "react-icons/fa";
import { PiKeyReturn } from "react-icons/pi";

import ServerCard from "../components/servercard";

function Dashboard() {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const fetchServers = async () => {
      const response = await fetch(
        `http://${import.meta.env.VITE_KOA_SERVER_IP}:${import.meta.env.VITE_KOA_SERVER_PORT}/servers/getservers`,
      ); // Replace with actual API URL
      console.log(response);
      const data = await response.json();
      setServers(data);
    };

    fetchServers();
  }, []);

  let cachedData = null;
  try {
    const storedData = localStorage.getItem("apiResponse");
    cachedData = storedData ? JSON.parse(storedData) : {};
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    cachedData = {}; // Fallback to an empty object if parsing fails
  }

  return (
    <>
      <div className="flex flex-col w-full justify-between space-y-5 lg:flex-row p-10 bg-blue-50">
        <h1 className="flex place-items-center lg:text-3xl text-2xl line-clamp-1 w-fit">
          Good afternoon, {cachedData.response.user.name}!
        </h1>
        <div className="lg:w-[70%] lg:max-w-[700px] flex justify-center lg:justify-end items-center space-x-4">
          <div className="w-full relative">
            <input
              type="text"
              className="border border-gray-300 h-10 rounded-md w-full pl-10"
              placeholder="Search"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-primary text-white h-8 rounded-md ml-2">
              <div className="flex flex-row justify-center items-center p-1 space-x-1 rounded-md">
                <p className="text-black">Enter</p>
                <PiKeyReturn className="text-black w-full h-full" />
              </div>
            </button>
          </div>
          <button className="p-3 rounded-md bg-gray-200">
            <FaFilter />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center space-x-2 pt-8">
        <FaTrophy />
        <h2 className="text-xl">Trending Servers</h2>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 p-8">
        {servers.map((server, index) => (
          <ServerCard key={index} server={server} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;

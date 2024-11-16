import { useEffect, useState } from "react";
import { FaTrophy, FaSearch, FaFilter } from "react-icons/fa";
import { PiKeyReturn } from "react-icons/pi";
import axios from "axios";
import ServerCard from "../components/servercard";

function Dashboard() {
  const [servers, setServers] = useState([
    {
      name: "",
      description: "",
      inviteLink: "",
      rating: 0,
    },
  ]);
  const [quote, setQuote] = useState({
    q: "",
    a: "",
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const response = await axios.get(`/api/servers/getservers`);
        const quoteResponse = await axios.get(`/quote/random`);

        const data = response.data; // No need to await here, response.data is synchronous
        let quoteData = quoteResponse.data;
        quoteData =
          Array.isArray(quoteData) && quoteData.length > 0
            ? quoteData[0]
            : { q: "", a: "" };

        console.log(quoteData);

        setServers(data || []); // Ensure data is at least an empty array
        setQuote(quoteData); // Ensure quoteData is a valid object
      } catch (error) {
        console.error("Error fetching data:", error);
        setServers([]); // Fallback to an empty array
        setQuote({ q: "Unable to fetch quote", a: "Server" }); // Fallback message
      }
    };

    fetchAll();
  }, []);

  let cachedData = null;
  try {
    const storedData = localStorage.getItem("apiResponse");
    cachedData = storedData ? JSON.parse(storedData) : {};
  } catch (error) {
    console.error("Error parsing JSON from localStorage:", error);
    cachedData = {}; // Fallback to an empty object if parsing fails
  }

  // Filter servers based on the search query
  const filteredServers = servers.filter(
    (server) =>
      server.name?.toLowerCase().includes(searchQuery.toLowerCase()) || // Use optional chaining in case name is undefined
      server.description?.toLowerCase().includes(searchQuery.toLowerCase()), // Use optional chaining for description
  );

  return (
    <>
      <div className="mt-[80px] flex flex-col w-full justify-between items-center space-y-5 lg:flex-row p-10 bg-blue-50">
        <div className="flex flex-col">
          <h1 className="flex place-items-center lg:text-3xl text-2xl line-clamp-1 w-fit">
            Good afternoon, {cachedData.response?.user?.name || "User"}!
          </h1>
          <h2 className="text-sm italic">"{quote.q}"</h2>
          <h3 className="text-sm">- {quote.a}</h3>
        </div>
        <div className="lg:w-[70%] lg:max-w-[700px] flex justify-center lg:justify-end items-center space-x-4">
          <div className="w-full relative">
            <input
              type="text"
              className="border border-gray-300 h-10 rounded-md w-full pl-10"
              placeholder="Search"
              value={searchQuery} // Bind input value to searchQuery
              onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
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
        {filteredServers.map((server, index) => (
          <ServerCard key={index} server={server} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;

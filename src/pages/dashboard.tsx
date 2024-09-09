import { useEffect, useState } from "react";

import ServerCard from "../components/servercard";

function Dashboard() {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    const fetchServers = async () => {
      const response = await fetch("http://localhost:8000/getservers"); // Replace with actual API URL
      console.log(response);
      const data = await response.json();
      setServers(data);
    };

    fetchServers();
  }, []);

  return (
    <>
      <h1 className="mt-[10vh]">Dashboard</h1>
      {
        // if response is error, show error message instead of server cards}
      }
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 mx-4">
        {servers.map((server, index) => (
          <ServerCard key={index} server={server} />
        ))}
      </div>
    </>
  );
}

export default Dashboard;

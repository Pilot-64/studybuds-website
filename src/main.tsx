import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AuthProvider from "./provider/authProvider";
import Routes from "./routes/index";

import Navbar from "./components/navbar";
import "./index.css";

const App = () => {
  return (
    <StrictMode>
      <AuthProvider>
        <div style={{ height: "calc(100vh - 100px)" }}>
          <Navbar />
          <Routes />
        </div>
      </AuthProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById("root")!).render(<App />);

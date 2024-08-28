import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

//pages
import LandingScreen from "./pages/landing.tsx";

//components
import Navbar from "./components/navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <LandingScreen />
  </StrictMode>,
);

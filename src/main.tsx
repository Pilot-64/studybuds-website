import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import "./index.css";

//pages
import LandingScreen from "./pages/landing.tsx";
import Dashboard from "./pages/dashboard.tsx";

//components
import Navbar from "./components/navbar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

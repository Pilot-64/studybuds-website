import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import "./index.css";

//pages
import LandingScreen from "./pages/landing.tsx";
import Dashboard from "./pages/dashboard.tsx";
import SignUp from "./pages/signup.tsx";

import { RequireToken } from "./components/auth.tsx";

//components
import Navbar from "./components/navbar.tsx";
const user = null;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

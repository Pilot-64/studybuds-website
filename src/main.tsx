import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

//pages
import App from "./App.tsx";

//components
import Navbar from "./components/Navbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>,
);

import { useLocation, Navigate } from "react-router-dom";

// Set the token in localStorage
export const setToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    console.error("Token must be provided to setToken");
  }
};

// Fetch the token from localStorage
export const fetchToken = () => {
  return localStorage.getItem("token") || null;
};

// A component to wrap around protected routes to require a valid token
export function RequireToken({ children }) {
  const token = fetchToken();
  const location = useLocation();

  // If there's no token, redirect to the home page or login
  if (!token) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  // If the token exists, render the child components
  return children;
}

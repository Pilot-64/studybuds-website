import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import Dashboard from "../pages/dashboard";
import LandingScreen from "../pages/landing";

export const ProtectedRoute = ({ authBool = false }) => {
  console.log(authBool);
  return authBool ? <Outlet /> : <Navigate to="/" />;
};

const Routes: React.FC = () => {
  const { isAuthenticated /*, loading*/ } = useAuth();
  //console.log(isAuthenticated, loading);

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute authBool={isAuthenticated} />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "logout",
          element: <div>Logout</div>,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <LandingScreen />, // Adjust the homepage for unauthenticated users
    },
    {
      path: "login",
      element: <div>Login</div>,
    },
  ];

  /* logging
  console.log(
    "Routes for authenticated users:",
    isAuthenticated
      ? routesForAuthenticatedOnly
      : routesForNotAuthenticatedOnly,
  );
  */

  const router = createBrowserRouter([
    ...(isAuthenticated
      ? routesForAuthenticatedOnly
      : routesForNotAuthenticatedOnly),
    {
      path: "*",
      element: <Navigate to="/loading" />, // Fallback for unmatched routes
    },
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;

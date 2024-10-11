import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  Outlet,
} from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import Dashboard from "../pages/dashboard";
import LandingScreen from "../pages/landing";

import AuthCallback from "../provider/callback";
import Loading from "../pages/loading";
import AdminPage from "../pages/admin";

export const ProtectedRoute = ({ authBool = false, loading = false }) => {
  console.log(authBool);

  if (loading) {
    return <Loading />;
  }

  return authBool ? <Outlet /> : <Navigate to="/" />;
};

const Routes: React.FC = () => {
  const { isAuthenticated, loading } = useAuth();
  //console.log(isAuthenticated, loading);

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute authBool={isAuthenticated} loading={loading} />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "logout",
          element: <div>Logout</div>,
        },
        {
          path: "admin",
          element: <AdminPage />,
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
    {
      path: "auth/callback",
      element: <AuthCallback />,
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
      element: <Loading />, // Fallback for unmatched routes
    },
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;

import axios, { AxiosError } from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import Cookies from "universal-cookie";

// Create a cookies instance
const cookies = new Cookies(null, { path: "/" });

// Define the type for the context value
interface AuthContextType {
  isAuthenticated: boolean;
  loading: boolean;
}

//get local storage data
const CACHE_EXPIRATION_TIME = 10 * 60 * 1000;
function getCachedResponse() {
  const cachedData = localStorage.getItem("apiResponse");
  const parsedData = cachedData ? JSON.parse(cachedData) : null;

  const now = new Date().getTime();

  if (cachedData && now - parsedData.timestamp < CACHE_EXPIRATION_TIME) {
    return parsedData.response;
  } else {
    localStorage.removeItem("apiResponse");
  }
  return null;
}

// Create an authentication context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Authentication provider component
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkAuth = async () => {
      const result = await validateToken();
      setIsAuthenticated(result); // Set authentication status
      setLoading(false); // Set loading to false after check
    };

    checkAuth(); // Run the validation function when the component mounts
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo<AuthContextType>(
    () => ({
      isAuthenticated,
      loading,
    }),
    [isAuthenticated, loading],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// Function to validate the token
const validateToken = async () => {
  const cachedResponse = getCachedResponse();
  if (cachedResponse) {
    return true;
  }

  const token = cookies.get("token");
  if (!token) {
    console.log("No token found in cookies.");
    return false;
  }

  try {
    const response = await axios.get(
      `http://${import.meta.env.VITE_KOA_SERVER_IP}:${import.meta.env.VITE_KOA_SERVER_PORT}/auth/${token}`,
    );
    console.log("Token validation response:", response.data);

    localStorage.setItem(
      "apiResponse",
      JSON.stringify({
        response: response.data,
        timestamp: new Date().getTime(),
      }),
    );

    return true; // Token is valid
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      "Error validating token:",
      axiosError.response ? axiosError.response.data : axiosError.message,
    );
    return false; // Token is invalid
  }
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Function to set the cookie
interface cookieProps {
  token: string;
}
export const setCookie = ({ token }: cookieProps): void => {
  cookies.set("token", token);
  console.log("Cookie set successfully!");
  return;
};

export default AuthProvider;

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

// Create an authentication context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Function to validate the token
const validateToken = async () => {
  const token = cookies.get("token");
  if (!token) {
    console.log("No token found in cookies.");
    return false;
  }

  try {
    const response = await axios.get(`http://localhost:4000/auth/${token}`);
    console.log("Token validation response:", response.data);
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

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Export the AuthProvider component
export default AuthProvider;

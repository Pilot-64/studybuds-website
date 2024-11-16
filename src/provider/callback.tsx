import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { setCookie } from "./authProvider";

const AuthCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract the token from the URL query parameters
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    console.log(token);

    if (token) {
      setCookie({ token });
      navigate("/");
    }
  }, [location, navigate]);

  return <div>Redirecting...</div>;
};

export default AuthCallback;

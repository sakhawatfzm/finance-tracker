import {
  createContext,
  useEffect,
  useState,
} from "react";

import api from "../services/api";

export const AuthContext =
  createContext();

export const AuthProvider = ({
  children,
}) => {

  const [user, setUser] =
    useState(null);

  const [authLoading,
    setAuthLoading] =
    useState(true);

  // Verify session
  const verifyUser = async () => {

    try {

      const token =
        localStorage.getItem("token");

      if (!token) {
        setAuthLoading(false);
        return;
      }

      const response =
        await api.get("/users/me");

      setUser(
        response.data.user
      );

    } catch (error) {

      console.error(error);

      // Invalid token
      localStorage.removeItem("token");

      localStorage.removeItem("user");

      setUser(null);

    } finally {

      setAuthLoading(false);
    }
  };

 useEffect(() => {

  const checkAuth = async () => {
    await verifyUser();
  };

  checkAuth();

}, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        authLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


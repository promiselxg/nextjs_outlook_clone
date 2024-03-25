"use client";

import { account } from "@/lib/appwrite";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

// Create a provider component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getAccount = async () => {
      setUser(await account.get());
    };
    getAccount();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

// Custom hook to use the context
const useAccount = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAccount must be used within a Use AuthProvider");
  }
  return context;
};

export { AuthProvider, useAccount };

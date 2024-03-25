"use client";

import { account } from "@/lib/appwrite";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

// Create a provider component
const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getAccount = async () => {
      if (user) {
        setUser(await account.get());
      }
    };
    getAccount();
  }, [user, router]);

  const logout = async () => {
    const response = await account.deleteSession("current");
    console.log(response);
    if (!user) {
      router.push("/");
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
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

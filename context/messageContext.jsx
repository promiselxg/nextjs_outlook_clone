"use client";

import { createContext, useContext, useState } from "react";

const MessageContext = createContext();

// Create a provider component
const MessageProvider = ({ children }) => {
  const [isToggled, setIsToggled] = useState(true);

  const toggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  return (
    <MessageContext.Provider value={{ isToggled, toggle }}>
      {children}
    </MessageContext.Provider>
  );
};

// Custom hook to use the context
const useToggle = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
};

export { MessageProvider, useToggle };

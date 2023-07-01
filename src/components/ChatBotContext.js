import React, { createContext, useState, useEffect } from "react";

export const ChatBotContext = createContext();

export const ChatBotProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    // console.log("Adding message:", message);
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  const contextValue = {
    messages,
    addMessage,
    clearMessages,
  };

  useEffect(() => {
    // console.log(messages); // Add this line to check the messages array
  }, [messages]);

  return (
    <ChatBotContext.Provider value={contextValue}>
      {children}
    </ChatBotContext.Provider>
  );
};

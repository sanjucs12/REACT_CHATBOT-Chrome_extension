import React from "react";
import { useState } from "react";
import ChatBotForChrome from "./components/ChatBotForChrome";
import { ChatBotProvider } from "./components/ChatBotContext";

function App() {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="flex justify-center h-screen bg-blue-200">
      <div className="flex flex-col items-center">
        <button
          className={`relative inline-block mt-10 w-25 h-6 transition-colors duration-200 ease-in-out rounded-full ${
            isActive ? "bg-blue-500" : "bg-gray-300"
          }`}
          onClick={toggleButton}
        >
          <span
            className={`inline-block w-16 h-6 transition-transform duration-200 ease-in-out transform rounded-full ${
              isActive ? "translate-x-4 bg-white" : "translate-x-0 bg-gray-500"
            }`}
          >
            {isActive ? "ON" : "OFF"}
          </span>
        </button>

        <div className="mt-4">
          <p className="text-lg font-bold">ChatGPT</p>
        </div>
        {/* <ChatBotProvider> {isActive && <ChatBotForChrome />}</ChatBotProvider> */}
        {isActive && (
          <ChatBotProvider>
            <ChatBotForChrome />
          </ChatBotProvider>
        )}
      </div>
    </div>
  );
}

export default App;

import React, { useContext, useEffect, useState } from "react";
import { ChatBotContext } from "./ChatBotContext";

const ChatBotForChrome = () => {
  const { messages, addMessage, clearMessages } = useContext(ChatBotContext);
  const [inputMessage, setInputMessage] = useState("");

  const handleMessageSubmit = async (event) => {
    event.preventDefault();

    const userMessage = inputMessage.trim();
    if (userMessage !== "") {
      addMessage({ sender: "user", text: userMessage });
      setInputMessage("");

      // Make POST request to the API
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: userMessage }),
          }
        );

        if (response.ok) {
          const responseData = await response.json();
          const botMessage = responseData.message;

          // Delay before receiving bot's response
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Add bot's response
          addMessage({ sender: "bot", text: `ChatGPT: ${botMessage}` });
          // Error handling
        } else {
          throw new Error("Request failed with status " + response.status);
        }
      } catch (error) {
        alert("Error: SOMETHING WENT WRONG", error.message);
      }
    }
  };

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  // Load messages from localStorage when the component mounts
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatbotMessages");
    if (storedMessages) {
      const parsedMessages = JSON.parse(storedMessages);
      parsedMessages.forEach((message) => addMessage(message));
    }
  }, []);

  // Save messages to localStorage when the messages state changes
  useEffect(() => {
    localStorage.setItem("chatbotMessages", JSON.stringify(messages));
  }, [messages]);

  return (
    <div className="w-96 p-4 m-4  bg-gray-800 border-t rounded-lg border-solid border-4 border-blue-600">
      <div className="flex items-center mb-2 border-dotted border-4 border-blue-600 p-2 rounded-full">
        <div className="w-6 h-6 rounded-full bg-green-300" />
        <p className="ml-2 font-medium text-white">ChatGPT Online</p>
      </div>
      {/* MESSAGE CONTAINER */}
      <div className="flex flex-col space-y-2 h-[380px] overflow-y-auto">
        {/* {console.log(messages)} */}
        {messages.map((message, index) => (
          <div
            key={`message-${index}`}
            className={`inline-block py-2 px-4 rounded-lg text-white ${
              message.sender === "user"
                ? "bg-blue-500 text-right w-auto ml-auto"
                : "bg-gray-700 text-left w-auto mr-auto"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* FORM CONTAINER */}
      <div className="form-container mt-5">
        <form onSubmit={handleMessageSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              name="message"
              value={inputMessage}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatBotForChrome;

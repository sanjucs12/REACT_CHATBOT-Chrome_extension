import React, { useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    const userMessage = event.target.elements.message.value;
    if (userMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userMessage },
      ]);
      event.target.reset();

      // Delay before receiving bot's response
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Add bot's response
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: `ChatGPT: ${userMessage}` },
      ]);
    }
  };

  return (
    <div className="fixed bottom-0 right-0 w-96 p-4 bg-gray-800 border-t border-gray-300">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 rounded-full bg-green-300" />
        <p className="ml-2 font-medium text-white">ChatGPT Online</p>
      </div>
      <div className="flex flex-col space-y-2 w-auto">
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

        <form onSubmit={handleMessageSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              name="message"
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

export default ChatBot;

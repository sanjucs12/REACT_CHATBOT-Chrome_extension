import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = async (event) => {
    event.preventDefault();
    const userMessage = event.target.elements.message.value;
    if (userMessage.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: userMessage },
        { sender: 'bot', text: `Received: ${userMessage}` },
      ]);
      event.target.reset();

      // Simulate 1-second delay before bot response
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  };

  return (
    <div className="fixed bottom-0 right-0 p-4 bg-gray-800 border-t border-gray-300">
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 rounded-full bg-gray-300" />
        <p className="ml-2 font-medium text-white">Chat Bot</p>
      </div>
      <div className="flex flex-col space-y-2">
        {messages.map((message, index) => (
          <div
            key={`message-${index}`}
            className={`py-2 px-3 rounded-lg text-white ${
              message.sender === 'user' ? 'bg-blue-500 text-right' : 'bg-gray-700 text-left'
            }`}
          >
            <p>{message.text}</p>
          </div>
        ))}
        <form onSubmit={handleMessageSubmit}>
          <input
            type="text"
            name="message"
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-2"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;

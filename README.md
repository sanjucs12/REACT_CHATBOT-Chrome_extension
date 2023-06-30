Simple CHAT BOT which echos our messages

Diploy details: https://simple-echo-chat-bot.netlify.app/


Project Title: ECHO-CHAT-BOT a Chrome Extension

- ECHO CHATBOT is a simple chat bot which replicates our messages back.
- The user can enter his messages in the chat-box and can send by clicking the send button.
- When he clicks on send button, POST request is made to the API end point, and after the delay of one second, same message will revert back as a reply.
- This application can also be used as a chrome extension which can be used in all the web pages.

Technologies Used:

React: A JavaScript library for building user interfaces.
React Tailwind CSS: A UI library that provides pre-designed components and styles.
HTML/CSS: Used for structuring and styling the web pages.
API: Used to POST the message as JSON object. {https://jsonplaceholder.typicode.com/posts}
JavaScript: Used for client-side scripting and interactivity.


Installation and Usage:

- Clone the project repository from GitHub.
- Install the required dependencies using npm or yarn.
  - npm install
  - npm install -D tailwindcss
- Run the application locally using the development server command. --> npm start

Project Structure:

src/components: Contains the React components used in the application.
src/App.js: The main component that renders the Chat-Bot application.
src/ChatBotForChrome.js: The component responsible for chat bot UI and functionality.

INSTALLATION OF CHROME EXTENSION

- run npm build in the terminal
- copy the build folder.
- open google chrome--> goto --> chrome://extensions/ 
- make sure the developer mode is ON and click on the Load unpacked.
- choose the build folder ond click ok.
- Now the extension will be installed in your chrome and you can select the extension in extension bar.


# Collaborative Document App
This project is a full-stack application built using React for the front end and Node.js for the back end. It allows multiple users to collaborate on a document in real time.

## Demo

## Running the Application

1) Clone the Repository:
git clone https://github.com/itznasrullah/CollabDocsAssign.git

2) Install Dependencies:
// Navigate to the server directory
cd collaborative-document/server
npm install

// Navigate to the client directory
cd ../client
npm install

3) Start the Development Servers:
// Start the server (backend)
cd ../server
npm run dev

// Start the client (frontend)
cd ../client
npm start

4) Access the Application:
Once the servers run, you can access the application at http://localhost:3000 in your web browser.

### Backend (Server)
The backend is built with Node.js and utilizes Express.js as the web framework. It also uses MongoDB as the database, managed through Mongoose. Socket.io is implemented for real-time communication between clients.

#### Dependencies
express: Fast, unopinionated, minimalist web framework for Node.js.
mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
cors: Middleware for enabling Cross-Origin Resource Sharing (CORS).
socket.io: Library that enables real-time, bidirectional, and event-based communication between web clients and servers.
Scripts
npm start: Starts the server.
npm run dev: Starts the server using nodemon for automatic reloading during development.

### Frontend (Client)
The frontend is developed using React.js, providing a responsive and interactive user interface for the collaborative document application.

#### Dependencies
react: JavaScript library for building user interfaces.
react-router-dom: DOM bindings for React Router, enabling declarative routing for React applications.
socket.io-client: Client-side library for Socket.io to enable real-time communication with the server.

#### Scripts
npm start: Starts the development server.
npm run build: Builds the application for production to the build folder.

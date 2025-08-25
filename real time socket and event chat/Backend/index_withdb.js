const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { timeStamp } = require("console");

const app = express(); 
const server = http.createServer(app); // HTTP is needed for Socket.IO handshake
app.use(cors());

let userDetails = {}; // key = client.id, value = username
let chatHistoryArray= [] //which stores the chat chatobj which stores the chatobj---->chatHistory

// Initialize socket.io server with CORS settings
const io = new Server(server, {
  cors: {
    origin: ["http://127.0.0.1:5500", "http://localhost:5500"],
    methods: ["GET", "POST"],
  },
});


io.on("connection", (client) => {
  console.log("Client connected:", client.id);

  
  client.on("registerUser", (username) => {
    userDetails[client.id] = username;
    console.log(`${username} client registered`);
    console.log("Current users:", userDetails);
    io.emit("chat_History",chatHistoryArray) ///client
    io.emit("user_List", Object.values(userDetails))
  });
  client.on("sendmessage", (message) => {
    console.log("Message received:", message);
    client.emit("response", "Thanks for chatting!");

    let chatobj = {
        from:userDetails[client.id],
        message:message,
        timeStamp:new Date()
    }
    chatHistoryArray.push(chatobj)
    console.log(chatHistoryArray)
    io.emit("chat_History", chatHistoryArray);

  });
    client.on("disconnect", () => {
    console.log("Client disconnected:", client.id);
    delete userDetails[client.id];
    console.log("Remaining users:", userDetails);
    io.emit("user_List", Object.values(userDetails));
  });
});


server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

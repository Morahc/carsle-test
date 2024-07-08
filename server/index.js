const express = require("express")
const http = require('http')
const cors = require("cors")
const { Server } = require("socket.io");
const roomHandler = require('./room');

const app = express();
app.use(cors)
const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
});


io.on("connection", (socket) => {
  console.log("User is connected")

  roomHandler(socket);

  socket.on("disconnect", () => {
    console.log("User is disconnected")
  })
})

server.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
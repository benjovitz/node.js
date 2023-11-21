import express from "express";
const app = express();

app.use(express.static("public"));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    console.log("A socket connected", socket.id);
    
    socket.on("client-chose-color", (data) => {
        console.log(data)
        socket.emit("client-chose-color", data)
    })
    
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => console.log("Server is running on port", PORT));  
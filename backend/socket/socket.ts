import express from "express";
import { Server } from "socket.io";
import http from "http";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId: string) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {};

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  if (typeof userId === "string") {
    userSocketMap[userId] = socket.id;
  }

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    if (typeof userId === "string") {
      delete userSocketMap[userId];
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { app, io, server };

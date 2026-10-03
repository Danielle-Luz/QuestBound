import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(process.env.databaseUrl, {
    bufferCommands: true,
    maxPoolSize: 20,
    serverSelectionTimeoutMS: process.env.databaseTimeout,
  })
  .then(() => console.log("Database connected."))
  .catch((error) => console.log("Error when connecting to database: ", error));

const server = express();

server.listen(8080, () => console.log("Server started."));

export default server;

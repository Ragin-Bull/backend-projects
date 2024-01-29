import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/index.js";
const app = express();
dotenv.config({
  path: "./.env",
});
console.log(process.env.MONGODB_URI);
connectDB();
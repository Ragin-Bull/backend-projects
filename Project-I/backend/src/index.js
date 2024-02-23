import connectDB from "./db/index.js";
import express from "express";
const app = express();

console.log(process.env.MONGODB_URIs);
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });

// Run node --env-file=.env index.js

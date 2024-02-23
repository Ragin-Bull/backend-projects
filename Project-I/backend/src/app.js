import express from "express";
const app = express();
import cors from "cors";
// Cookie parser is for performing CRUD operations on Cookies
import cookieParser from "cookie-parser";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "16kb",
  })
);

// To purify the URLs that we get
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

// For storing in static images and icons for the website
app.use(express.static("public"));

// For performing CRUD Operations with Cookies
app.use(cookieParser());

export default app;

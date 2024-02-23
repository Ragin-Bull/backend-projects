import connectDB from "./db/index.js";
import app from "./app.js";

// This will return a promise
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB Connection failed !!!", err);
  });

// Run node --env-file=.env index.js

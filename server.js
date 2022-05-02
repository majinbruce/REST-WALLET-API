import mongoose from "mongoose";
import app from "./app.js";
import "dotenv/config";

const port = process.env.PORT || 3000;
const MongoDB_URL = process.env.MongoDB_URL;

mongoose
  .connect(MongoDB_URL)
  .then((connection) => {
    app.listen(port);
    console.log(`Server started at Port ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });

import express from "express";
import bodyParser from "body-parser";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import transactionRoutes from "./routes/transactionRoutes.js";

import failureResponse from "./helpers/failureResponse.js";

const app = express();

app.use(bodyParser.json());

//headers to prevent CORS 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/user", userRoutes);
app.use("/transaction", transactionRoutes);

//error handler
app.use((error, req, res, next) => {
  console.log(error);
  failureResponse(res, 500, "eroorrrrrrr")
});

export default app;
import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

import morgan from "morgan";

import connectDB from "./db/connect.js";

import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleWare from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js";


if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send("Welcome ! ");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();

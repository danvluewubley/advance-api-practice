import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import limiter from "./config/rateLimiter.js";
import apiRouter from "./routes/index.js";
import globalErrorHandler from "./middlewares/globalError.js";

//This is your server
const app = express();
app.use(express.json());
app.use(cookieParser());

app.use(morgan("tiny"));
app.use(helmet());

const corsOptions = {
  origin: "http://localhost:3001",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(limiter);

app.use("/api", apiRouter);
app.use(globalErrorHandler);

app.listen(3002, () => {
  console.log("Connected to server on port 3002");
});

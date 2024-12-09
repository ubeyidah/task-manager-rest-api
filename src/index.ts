import express from "express";
import "dotenv/config";
import { userRoute } from "./routes/user.route";
import { taskRoute } from "./routes/task.route";
import { errorHandler } from "./middlewares/errors";
import { PrismaClient } from "@prisma/client";

const app = express();
export const prisma = new PrismaClient();
app.use(express.json());

// add routes
app.use("/api/v1", userRoute);
app.use("/api/v1", taskRoute);

// error handler
app.use(errorHandler);

const port = process.env.PORT || 7070;
app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`);
});

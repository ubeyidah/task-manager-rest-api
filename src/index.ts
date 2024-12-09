import express from "express";
import "dotenv/config";

const app = express();

const port = process.env.PORT || 7070;
app.listen(port, () => {
  console.log(`server start on => http://localhost:${port}`);
});

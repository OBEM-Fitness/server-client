import "dotenv/config";
import express from "express";
import { connectMySQL } from "./db";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (_req, res) => {
  res.send("Express Server");
});

connectMySQL();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

import express from "express";
import "dotenv/config";
import cors from "cors"
import bodyParser from "body-parser";
import aiRoutes from "./routes/aiRoutes.js";

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:5174",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

// Routes
app.use("/api/ai", aiRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to AI Modal");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

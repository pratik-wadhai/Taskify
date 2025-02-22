import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
connectDB();
dotenv.config();
import taskRoutes from "./routes/taskRoutes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Taskify API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

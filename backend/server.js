import "dotenv/config";
import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contactRoutes.js";


const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }));
app.use(express.json());

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
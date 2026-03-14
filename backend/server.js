import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chat.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5173",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};
app.use(cors(corsOptions));

// JSON body parser
app.use(express.json({ limit: "1mb" }));

// TODO: Add rate limiting for production (e.g., express-rate-limit)
// Example: app.use('/api/', rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "Sehat-Saathi Backend",
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use("/api/chat", chatRoutes);

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handling middleware
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err.message);
  res.status(err.status || 500).json({
    error: "Internal server error",
    message:
      process.env.NODE_ENV === "development" ? err.message : "Something went wrong",
  });
});

app.listen(PORT, () => {
  console.log(`Sehat-Saathi backend running on port ${PORT}`);
});

export default app;

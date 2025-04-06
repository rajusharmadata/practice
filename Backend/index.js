const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 8080;

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json()); // JSON Parsing Middleware
app.use(express.urlencoded({ extended: true })); // Form Data Middleware

// Serve static frontend files (if needed)
app.use(express.static(path.join(__dirname, "Frontend")));

// Sample GET API
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from the server!" });
});

// Sample POST API to receive form data
const formDataStore = []; // Temporary array to store data (replace with database in future)
app.post("/api/data", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required!" });
  }

  // Save data in temporary array
  formDataStore.push({ name, email });

  console.log("Received Data:", { name, email });

  res.json({ message: "Data received successfully!", data: { name, email } });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

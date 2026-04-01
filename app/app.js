const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello from DevOps Project 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
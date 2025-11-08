import express from "express";

const PORT = 8000;

const app = express();
app.get("/", (req, res) => {
  res.json();
});
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000, () => console.log("The server is running under port 8000"));

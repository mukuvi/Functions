import express from "express";

const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page");
});
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

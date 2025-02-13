import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/users", (req, res) => {
  res.send("user list");
});
app.get("/users/new", (req, res) => {
  res.send("user new form");
});

app.listen(8000, () => console.log("The server is running under port 8000"));

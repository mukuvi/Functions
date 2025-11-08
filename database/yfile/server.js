import express from "express";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static("public"));

app.get("/api/", (req, res) => {
  res.send("welcome user");
});

app.post("/api/user", (req, res) => {
  const { name, email } = req.body;
  res.json({
    message: `User name ${name} and email ${email} created successfully`,
  });
});
app.put("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  res.json({
    message: `User ${userId} updated to ${name}, ${email}`,
  });
});
app.delete("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  res.json({
    message: `User ${userId} deleted successfully`,
  });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

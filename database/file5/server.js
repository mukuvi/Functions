import express from "express";
const PORT = 8000;
import { apiRouter } from "./routes/apiRouter.js";
let app = express();

app.use("/", apiRouter);
app.use("/", (req, res) => {
  res.status(404).json({ message: "page not found" });
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

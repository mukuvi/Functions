import express from "express";
import { apiRouter } from "./routes/apiRouter.js";
import cors from "cors";

const PORT = 8800;
const app = express();
app.use(cors());
app.use((req, res) => {
  res.status(404).json({
    message: "Endpoint not found. Please check the API documentation.",
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

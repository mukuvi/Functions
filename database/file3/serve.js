import express from "express";
import { startups } from "./data/data.js";
const PORT = 8888;

const app = express();

app.get("/api", (req, res) => {
  let ourfilteredData = startups;
  const { country, continent, industry } = req.query;
  if (country) {
    ourfilteredData = ourfilteredData.filter(
      (startup) => startup.country.toLowerCase() === country.toLowerCase()
    );
  }
  res.json(ourfilteredData);
});
app.get("/api/:field/:term", (req, res) => {
  const { field, term } = req.params;

  const paramsData = startups.filter(
    (startup) => startup[field].toLowerCase() === term.toLowerCase()
  );

  res.json(paramsData);
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

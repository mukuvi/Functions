const express = require("express");
const app = express();
const PORT = 8383;
let data = ["james"];

//middleware
app.use(express.json());

// CRUD-method      Create-post    Read-get Update-put      Delete-delete

app.get("/", (req, res) => {
  res.send(`<body><h1>DATA</h1><p>${JSON.stringify(data)}</p> 
  <a href="/dashboard">Dashboard</a>
  </body>`);
});
app.get("/dashboard", (req, res) => {
  res.send(`
    <body>
    <a href="/">Home</a>
    </body>
    `);
});

app.get("/api/data", (req, res) => {
  res.send(data);
});

app.post("/api/data", (req, res) => {
  const newEntry = req.body;
  console.log(newEntry);
  data.push(newEntry.name);
  res.sendStatus(201);
});

app.delete("/api/data", (req, res) => {
  data.pop();
  console.log("Deleted the element at the end of the array");
  res.sendStatus(203);
});

app.listen(PORT, () => console.log(`server has started on port: ${PORT}`));

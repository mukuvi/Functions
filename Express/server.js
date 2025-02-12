const express = require("express");
const path = require("path");

const app = express();

//setup static folder
app.use(express.static(path.join(__dirname, "public")));
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

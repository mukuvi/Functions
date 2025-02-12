import { error } from "console";
import fs from "fs";

//readFile - callback
fs.readFile("./test.txt", "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);
});

//readFileSync -synchronous

import fs from "fs/promises";

//writeFile

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "node being writen");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
//readFile
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
readFile();

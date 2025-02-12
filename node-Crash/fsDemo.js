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
//appendFile

const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\n Appending new node modules");
  } catch (error) {
    console.log(error);
  }
};
appendFile();
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

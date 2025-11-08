import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";
import { abductionsData } from "./abductionsData.js";

async function createTable() {
  const db = await open({
    filename: path.join("mytable.db"),
    driver: sqlite3.Database,
  });
  try {
    await db.exec(`CREATE TABLE IF NOT EXISTS abduction(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    location TEXT NOT NULL,
    details TEXT NOT NULL
    
    )`);

    await db.exec("BEGIN TRANSACTION");
    for (const { location, details } of abductionsData) {
      await db.run(
        `INSERT INTO abduction(location,details)
            VALUES
            (?,?)`,
        [location, details]
      );
    }
    console.log("All records inserted ");
    await db.exec("COMMIT");
  } catch (err) {
    await db.exec("ROLLBACK");
    console.log("An error occurred", err.message);
  } finally {
    await db.close();
    console.log("connection closed");
  }
}
createTable();

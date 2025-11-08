import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";

async function createTable() {
  const db = await open({
    filename: path.join("tadabase.db"),
    driver: sqlite3.Database,
  });
  await db.exec(`
        CREATE TABLE IF NOT EXISTS cafesynca(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        country TEXT,
        price REAL
        )
        `);
  await db.run(`
            INSERT INTO cafesynca(name,country,price)
            VALUES
            ("arabica","ethiopia",760),
            ("robuster","kenya",500),
            ("colombian","colombia",990)
            `);
  await db.close();
  console.log("Database created");
}
createTable();

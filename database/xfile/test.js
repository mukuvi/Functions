import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";
import { create } from "node:domain";

async function createTable() {
  const db = await open({
    filename: path.join("tadabase.db"),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS vehicles(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price INTEGER)`);
  await db.run(`
        INSERT INTO vehicles(id,name, price)
        VALUES
        ("1","Mercedes Benz","8"),
        ("2","Toyota Hilux", "6"),
        ("3","Cardillac Suv","20")`);

  await db.close();
  console.log("Table created");
}
createTable();

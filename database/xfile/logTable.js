import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "node:path";

export async function viewAllProducts() {
  const db = await open({
    filename: path.join("database.db"),
    driver: sqlite3.Database,
  });

  try {
    const abductions = await db.all("SELECT * FROM abductions");
    console.table(abductions);
  } catch (err) {
    console.error("Error fetching products:", err.message);
  } finally {
    await db.close();
  }
}

viewAllProducts();

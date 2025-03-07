import { DB } from "https://deno.land/x/sqlite/mod.ts";

// Open or create the SQLite database
const db = new DB("Database/db.sqlite");

// Create the 'users' table if it doesn't exist
db.query(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    isAdmin INTEGER CHECK (isAdmin IN (0, 1)), -- Enforces boolean-like values
    username TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  )
`);

export function AddUser(username: string, email: string, password: string, isAdmin?: boolean) {
  isAdmin = isAdmin ?? false; // If undefined, default to false
  try {
    db.query("INSERT INTO users (isAdmin, username, email, password) VALUES (?, ?, ?, ?)", 
      [isAdmin ? 1 : 0, username, email, password]);
    console.log(`User '${username}' added.`);
  } catch (error) {
    console.error(`Failed to add user '${username}':`, error.message);
  }
}

// Query data to verify the insertions
export function getUsers(): any[] {
  return db.query("SELECT * FROM users");
}

AddUser(true, "test", "e", "123")
AddUser("eta", "1345", "w45t")

for (const obj of getUsers()) {
  console.log(obj);
}

// Close the database connection
export function closeDB() {
  db.close();
}


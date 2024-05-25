const mysql = require('mysql2/promise');

export async function initializeDatabase() {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });

  db.on('error', (err) => {
    console.log('- STATS Mysql2 connection died:', err);
  });

  return db;
}

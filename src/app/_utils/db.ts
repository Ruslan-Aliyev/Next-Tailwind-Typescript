const mysql = require('mysql2/promise');

const db = await mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
});
db.on('error', (err) => {
	console.log('- STATS Mysql2 connection died:', err);
});


export default db;
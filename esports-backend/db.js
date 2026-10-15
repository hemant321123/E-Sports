const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "esports_db",
    password: "postgres@123",
    port: 5432,
});

pool.connect()
    .then(() => {
        console.log("PostgreSQL connected successfully!");
    })
    .catch((error) => {
        console.log("Database connection error:", error.message);
    });

module.exports = pool;
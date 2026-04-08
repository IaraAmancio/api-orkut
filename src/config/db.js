const {Pool} = require("pg");
const { ssl } = require("pg/lib/defaults");

module.exports = new Pool({
    connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        }
});


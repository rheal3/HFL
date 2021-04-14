const Pool = require('pg').Pool;

const pool = new Pool({
    user: "hfl_admin",
    password: "squigglechickendroppings",
    host: "localhost",
    port: 5432,
    database: "hfl_database"
});

module.exports = pool;
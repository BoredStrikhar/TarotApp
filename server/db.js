const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "09032002",
    host: "localhost",
    port: "5432",
    database: "tarot",
})


module.exports = pool
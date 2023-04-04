const mysql = require("mysql");
require("dotenv").config();

const poolConnection = mysql.createPool({
        port: process.env.MYSQL_PORT,
        password: process.env.MYSQL_PASSWORD,
        user: process.env.MYSQL_USERNAME,
        host: process.env.MYSQL_HOSTNAME,
        database: process.env.MYSQL_DBNAME
});

module.exports = poolConnection;

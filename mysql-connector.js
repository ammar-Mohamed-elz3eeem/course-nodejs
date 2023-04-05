const mysql = require("mysql2");
require("dotenv").config();

const poolConnection = mysql.createPool({
        port: process.env.MYSQL_PORT,
        password: process.env.MYSQL_PASSWORD,
        user: process.env.MYSQL_USERNAME,
        host: process.env.MYSQL_HOSTNAME,
        database: process.env.MYSQL_DBNAME
});

const promiseConnection = poolConnection.promise();

module.exports = promiseConnection;

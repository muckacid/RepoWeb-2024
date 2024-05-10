require('dotenv').config();

module.exports = {
    app: {
        port: process.env.PORT || 3000,
    },
    mysql: {
        host: process.env.MYSQL_HOST || "localhost",
        user: process.env.MYSQL_USER || "root",
        password: process.env.MYSQL_PASS || "",
        database: process.env.MYSQL_DATABASE || "backend"
    }
}
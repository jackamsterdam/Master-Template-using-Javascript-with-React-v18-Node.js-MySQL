const mysql = require('mysql')
const config = require('../01-utils/config')

// Create a pool of connections for connecting to MySQL database:
const connection = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
})

function execute(sql, values) {
    // Promisify sql access:
    return new Promise((resolve, reject) => {
        // Execute SQL query:
        connection.query(sql, values, (err, result) => {

            if (err) {
                reject(err)
                return
            }
            resolve(result)
        })
    })
}

module.exports = {
    execute
}

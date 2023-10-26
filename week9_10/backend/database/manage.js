const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ub_01_02_js"
})

connection.connect((error) => {
    if (error)
        throw error;
    console.log("Connected to the database");
})

function addUser(username, hash, callback) {
    const sqlQuery = "INSERT INTO users (username,password) VALUES (?,?)";
    connection.query(sqlQuery, [username, hash], (error, results) => {
        if (error)
            console.log(error);
        else {
            console.log("User is added");
        }
        callback(error);
    })
}

function getUser(username, callback) {
    const sqlQuery = "SELECT * FROM users WHERE username = ?";
    connection.query(sqlQuery, [username], (error, results) => {
        let userExist = false;
        // if (results[0] !== undefined) {
        const passhash = results[0].password;
        callback(passhash);
        // }

    })
}

module.exports = { addUser,getUser }
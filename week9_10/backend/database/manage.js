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

function connect(){

}
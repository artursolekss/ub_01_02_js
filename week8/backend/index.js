// const http = require("http");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get("/file", (req, res) => {
    const filename = req.query.filename;
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.send({ status: 404, "error": err, "response": "File not found!" });
        }
        else {
            res.send({ status: 200, "error": null, "response": data });
        }
    });
})

app.post("/add-person", (req, res) => {
    const person = {
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    fs.readFile("persons.json", (err, data) => {
        if (err) {
            res.send({ status: 500, "error": err, "response": "Error" });
        }
        else {
            const persons = JSON.parse(data);
            persons.push(person);
            fs.writeFile("persons.json", JSON.stringify(persons), err => {
                if (err) {
                    res.send({ status: 500, "error": err, "response": "Error" });
                }
                else {
                    res.send({ status: 200, "error": null, "response": "Person added!" });
                }
            });
        }
    });
})

app.get("/get-all-persons", (req, res) => {
    fs.readFile("persons.json", "utf8", (err, data) => {
        if (err) {
            res.send({ status: 500, "error": err, "response": "Error" });
        }
        else {
            res.send({ status: 200, "error": null, "response": data });
        }
    });
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});


// const server = http.createServer((req, res) => {
//     // res.writeHead(200, { "Content-Type": "text/plain" });
//     const filename = req.url.substring(1);//remove the first character
//     fs.readFile(filename, (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.end("File not found");
//         }
//         else {
//             res.writeHead(200, { "Content-Type": "text/plain" });
//             res.end(data);
//         }

//     })
//     //   res.end(req.url);
// });

// server.listen(3000, "127.0.0.1", () => {
//     console.log("Server listening on port 3000");
// });
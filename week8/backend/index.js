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
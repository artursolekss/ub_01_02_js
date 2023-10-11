// const http = require("http");
const fs = require("fs").promises;
const axios = require('axios');
const cors = require("cors");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require('dotenv').config()
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

app.get("/get-all-persons", async (req, res) => {
    // fs.readFile("persons.json", "utf8", (err, data) => {
    //     if (err) {
    //         res.send({ status: 500, "error": err, "response": "Error" });
    //     }
    //     else {
    //         res.send({ status: 200, "error": null, "response": data });
    //     }
    // });
    try {
        const data = await readFile("persons.json");
        res.send({ status: 200, "error": null, "response": data });
        // throw Error; if throw is called, it goes to the closest catch
    }
    catch (error) {
        res.send({ status: 500, "error": error, "response": "Error" });
        console.log(error.stack);
    }
});

async function readFile(filepath) {

    const data = await fs.readFile(filepath, "utf8");
    return data;
}


app.get("/get-html-template", async (req, res) => {
    try {
        const templ_head = await readFile("bootstraptemplhead.html");
        const templ_body = await readFile("bootstraptemplbody.html");
        res.send({ status: 200, "error": null, "response": { head: templ_head, body: templ_body } });

    }
    catch (error) {
        res.send({ status: 500, "error": error, "response": "Error" });
        console.log(error.stack);
    }
})

app.get("/get-weather-forecast", async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
            q: req.query.city,
            days: '3'
        },
        headers: {
            'X-RapidAPI-Key': process.env.WEATHER_API_KEY,
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    try {
        const response_full = await axios.request(options);

        const response = response_full.data;
        const response_form = {};
        const current = response.current;
        const current_temp = current.temp_c;
        response_form.current_temp = { temp: current_temp, icon: current.condition.icon };
        const forecast_days = [];
        for (let i = 0; i < response.forecast.forecastday.length; i++) {
            let day = response.forecast.forecastday[i];
            forecast_days.push({
                date: day.date,
                avg_temp: day.day.avgtemp_c,
                icon: day.day.condition.icon
            })
        }
        response_form.forecast = forecast_days;
        res.send({ status: 200, "error": null, "response": response_form });
        // console.log(response.data);
    } catch (error) {
        console.log(error);
        res.send({ status: 500, "error": error, "response": "Error" });
    }
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
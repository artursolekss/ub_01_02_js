// const http = require("http");
const fs = require("fs");
const axios = require('axios');
const cors = require("cors");
const express = require("express");
const pass_manag = require("./utilities/password_manager");
const db_manage = require("./database/manage");
const customers_controller = require("./Controllers/customers_controller");

const app = express();

require('dotenv').config()
app.use(cors());
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


// Start - 26/10/2023
app.post("/create-user", (req, res) => {
    const uname = req.body.uname;
    const password = req.body.pass;
    pass_manag.cryptPassword(password, (err, hash) => {
        if (err) {
            res.send({ status: 500, "error": err });
            return;
        }

        db_manage.addUser(uname, hash, (error) => {
            if (error) {
                if (error.code === 'ER_DUP_ENTRY')
                    res.send({ status: 500, "error": "The user already exists" });
            }
            else {
                res.send({ status: 200, "error": null });
            }
        });
    })
})

app.post("/validate-user", (req, res) => {
    const uname = req.body.user;
    const password = req.body.password;
    db_manage.getUser(uname, (hashpassword) => {
        if (hashpassword === null) {
            res.send({ status: 400, "error": "User does not exist" })
            return;
        }
        pass_manag.comparePassword(password, hashpassword, (error, passmatch) => {
            if (error) {
                res.send({ status: 500, "error": error })
            }
            else if (passmatch) {
                res.send({ status: 200, "error": null })
            }
            else {
                res.send({ status: 400, "error": "Password doesn't match" })
            }
        })
    })
})
// End - 26/10/2023


// app.post("/validate-user", (req, res) => {
//     fs.readFile("userlist.json", (err, users_cont) => {
//         const users = JSON.parse(users_cont);
//         const user_name = req.body.user;
//         const password = req.body.password;
//         if (users.find((user_entry) => user_entry.user == user_name &&
//             user_entry.password == password) !== undefined) {
//             res.send({ status: 200, "error": null, user_exists: true })
//         }
//         else {
//             res.send({ status: 200, "error": null, user_exists: false })
//         }
//     });
// })

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

app.get("/all-customers", (req, res) => {
    customers_controller.getCustomers(db_manage, (err, results) => {
        if (err) {
            res.send({ status: 500, "error": err, "response": "Error" });
        }
        else {
            res.send({ status: 200, "error": null, "response": results });
        }
    })
})

app.listen(3800, () => {
    console.log("Server listening on port 3800");
});
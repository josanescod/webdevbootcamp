const express = require("express");
const path = require('path');
const bmi = require("./modules/bmi.js");
require("dotenv").config();

const app = express();

app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {

    console.log(req.body.num1);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send(`the result of the calculation is: ${result}<br><a href="${process.env.URL}">Back</a>`);
})

app.get("/bmicalculator", (req, res) => {

    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", (req, res) => {

    console.log(req.body);
    let weight = parseFloat(req.body.weight);
    let height = parseFloat(req.body.height);
    let result = bmi.bmiCalculator(weight, height);
    res.send(`${result}<br><a href="${process.env.URL}/bmicalculator">Back</a>`);
})

app.listen(process.env.PORT, () => {
    console.log(`app listening at http://localhost:${process.env.PORT}`);
})
const express = require("express");
require("dotenv").config();
const path = require('path');
//const bodyParser = require('body-parser');

const app = express();

//static folder css etc...
app.use('/static', express.static(path.join(__dirname, 'public')));

//post form action
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    //res.send("calculator app");
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
})



app.post("/", (req, res) => {
    console.log(req.body.num1);
    let num1 = parseInt(req.body.num1);
    let num2 = parseInt(req.body.num2);
    let sum = num1 + num2;
    res.send(`sum is: ${sum}<br><a href="${process.env.URL}">Back</a>`);
})

app.listen(process.env.PORT, () => {
    console.log(`app listening at http://localhost:${process.env.PORT}`);
})
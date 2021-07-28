const express = require("express");
const ejs = require("ejs");
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get("/", function (req, res) {
    res.render("home");
})

app.get("/login", function (req, res) {
    res.render("login");
})

app.get("/register", function (req, res) {
    res.render("register");
})


app.listen(process.env.PORT, function () {
    console.log(`Server started on port ${process.env.PORT}`);
});
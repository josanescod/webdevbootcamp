const express = require("express");
const app = express();
require('dotenv').config()
let items = ["Buy Food","Cook Food","Eat Food"];


app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));//POST

app.get("/", function (req, res) {
   
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day = today.toLocaleDateString("en-US",options);    
    res.render("list", { kindOfDay: day, newListItems: items});
});

app.listen(process.env.PORT, function () {
    console.log(`Server started on port ${process.env.PORT}`);
})


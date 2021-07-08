const express = require("express");
const app = express();
require('dotenv').config()
const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
const date = require("./date");


app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));//POST

app.get("/", function (req, res) {

    const day = date.getDate();
    res.render("list", { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {

    let item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item)
        res.redirect("/work");

    } else {
        items.push(item);
        res.redirect("/");

    }
})

app.get("/work", function (req, res) {

    res.render("list", { listTitle: "Work List", newListItems: workItems });

})

app.get("/about", function (req, res) {

    res.render("about");
})



app.listen(process.env.PORT, function () {

    console.log(`Server started on port ${process.env.PORT}`);
})


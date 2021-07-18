const express = require("express");
const date = require(__dirname + "/date.js");
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

//create new database
mongoose.connect(`${process.env.MONGODB}`,{useNewUrlParser: true})

//create new Schema
const itemsSchema = new mongoose.Schema({
  name: String
});

//create Model name of collection in singular and Schema
const Item = moongose.model("Item", itemsSchema)

//create three new documents
const run10km = {
  name: "Run 10 km"

}

const studyJS = {
  name: "Study JS 1 hour"

}

const feedCat = {
  name: "Feed the cat"

}

run10km.save();
studyJS.save();
feedCat.save();


app.get("/", function(req, res) {

  res.render("list", {listTitle: "Today", newListItems: items});

});

app.post("/", function(req, res){

  const item = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(process.env.PORT, function() {
  console.log(`Server started on port ${process.env.PORT}`);
});

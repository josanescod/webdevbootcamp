const express = require("express");
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//create new database
mongoose.connect(`${process.env.MONGODB}`, { useNewUrlParser: true, useUnifiedTopology: true });

//create new Schema
const itemsSchema = new mongoose.Schema({
  name: String
});

//create Model name of collection in singular and Schema
const Item = mongoose.model("Item", itemsSchema)

//create three new documents
const item1 = new Item({
  name: "Welcome to your todolist!"

});

const item2 = new Item({
  name: "Hit the + button to add a new item."

})

const item3 = new Item({
  name: "<-- Hit this to delete an item."

})

const defaultItems = [item1, item2, item3];



app.get("/", function (req, res) {

  //read querys
  Item.find(function (err, foundItems) {

    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function (err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Succesfuly saved default items to DB.")
        }
      });
      res.redirect("/")

    } else {
      res.render("list", { listTitle: "Today", newListItems: foundItems });
    }
  })
});

app.post("/", function (req, res) {

  const itemName = req.body.newItem;

  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {    
    const item = new Item({
      name: itemName    
    });
    item.save();
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/delete",function(req,res){
  const checkbox = req.body

  console.log(checkbox);
  


});

app.listen(process.env.PORT, function () {
  console.log(`Server started on port ${process.env.PORT}`);
});

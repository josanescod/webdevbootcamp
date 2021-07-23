const express = require("express");
const mongoose = require('mongoose');
const _ = require("lodash");
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

//new Schema
const listSchema = new mongoose.Schema({
  name: String,
  items: [itemsSchema]
});

//new Model
const List = mongoose.model("List", listSchema);


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
  });
});

app.post("/", function (req, res) {
  const itemName = req.body.newItem;
  const listName = req.body.list;
  const item = new Item({
    name: itemName
  });

  if (listName === "Today") {
    item.save();
    res.redirect("/");

  } else {
    List.findOne({ name: listName }, function (err, foundList) {
      if (err) { console.log(err) }
      foundList.items.push(item);
      foundList.save();
      res.redirect("/" + listName);
    })
  }



});

//creating custom lists using express route parameters

app.get("/:customListName", function (req, res) {
  const customListName = _.capitalize(req.params.customListName);

  List.findOne({ name: customListName }, function (err, foundList) {
    if (err) {
      console.log(err);
    }
    if (foundList) {
      console.log("list exists");
      res.render("list", { listTitle: foundList.name, newListItems: foundList.items });

    } else {
      console.log("list doesn't exists")
      //new list documents
      const list = new List({
        name: customListName,
        items: defaultItems
      });
      list.save();
      res.redirect("/" + customListName);
    }
  })
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.post("/delete", function (req, res) {
  const checkItemId = req.body.checkbox
  const listName = req.body.listName;
  console.log(checkItemId, listName);
  //console.log(checkItemId)


  if (listName === "Today") {
    Item.deleteOne({ _id: `${checkItemId}` }, function (err) {
      if (!err) {
        console.log("Succesfuly deleted checked item to DB.");
        res.redirect("/");
      }
    });

  } else {

    List.findOneAndUpdate({ name: listName }, { $pull: { items: { _id: checkItemId } } }, function (err, foundList) {
      if (!err) {
        res.redirect("/" + listName);
      }

    })

  }

});




let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log(`Server has started Successfully`);
});

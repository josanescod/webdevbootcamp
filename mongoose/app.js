const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});


//create new schema o blueprint o structure
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String,
});

//create Model name of collection in singular and Schema
const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: "7",
    review: "Pretty solid as a fruit."
});
//fruit.save(); //save this document inside Fruit(s) collections in fruitsDB

//new collection People
const peopleSchema = new mongoose.Schema({
    name: String
    
})

//Model
const People = mongoose.model("People",peopleSchema);

const people = new People ({
    name: "people1"
})

//people.save();
 
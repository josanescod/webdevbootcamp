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

//create new document inside collection
const fruit = new Fruit ({
    name: "Apple",
    rating: "7",
    review: "Pretty solid as a fruit."
});
fruit.save(); //save this document inside Fruit(s) collections in fruitsDB

//new collection People
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
    
})

//create Model name of collection in singular and Schema
const Person = mongoose.model("Person",personSchema);

//create new document inside collection
const person = new Person ({
    name: "Jhon",
    age: 37
})

//save this document inside Fruit(s) collections in fruitsDB
person.save();
 

//save multiple fruits
const kiwi = new Fruit({
    name: "Kiwi",
    rating: 8,
    review: "The best fruit!"
});

const orange = new Fruit({
    name: "Orange",
    rating: 4,
    review: "Too sour for me"
});

const banana = new Fruit ({
    name:"Banana",
    rating : 3,
    review: "Weird texture"
})

const fruitsArray = [kiwi,orange,banana];
Fruit.insertMany(fruitsArray)
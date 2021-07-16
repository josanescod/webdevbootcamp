const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});


/*
create new schema o blueprint o structure
data validation moongose has built-in validators 

*/
const fruitSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please check your data entry, no name specified"]
    },
    //validation
    rating: {
        
        type: Number,
        min: 1,
        max: 10
    
    },
    review: String,
});

//create Model name of collection in singular and Schema
const Fruit = mongoose.model("Fruit",fruitSchema);

//create new document inside collection
const peach = new Fruit ({
    name: "Peach",
    rating: "9",
    review: "Delicious fruit"
});
//peach.save(); //save this document inside Fruit(s) collections in fruitsDB

//new collection person
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
    
})

//create Model name of collection in singular and Schema
const Person = mongoose.model("Person",personSchema);

//create new document inside collection
const person = new Person ({
    name: "Josh",
    age: 37
})

//save this document inside Fruit(s) collections in fruitsDB

person.save();
 

//save multiple fruits
/* const kiwi = new Fruit({
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

const fruitsArray = [apple,kiwi,orange,banana];
 Fruit.insertMany(fruitsArray, function(err) {
    if (err) {
        console.log(err);
    }else {
        console.log("Successfuly saved all the fruits")
    }
}) */

//read, querys 
Fruit.find(function(err,fruits){
    if (err) {
        console.log(err);
    }else{
        console.log(fruits);
        
        

        fruits.forEach( function(fruit){
            console.log(fruit.name,fruit.rating);
        });
       
    }    
    mongoose.connection.close();
})


//update
Fruit.updateOne({_id: "60f004d33f06e82210a5cf40"},{rating: 2},
function (err){
    if (err){
        console.log(err);
    }else {
        console.log("Successfully updated the document.")
    }
    
});

//delete 
Fruit.deleteOne({name:"Peach"},function (err){
    if (err){
        console.log(err);
    }else {
        console.log("Successfully deleted the document.")
    }
    });

//deleteMany
Person.deleteMany({name:"Jhon"},function (err){
    if (err){
        console.log(err);
    }else {
        console.log("Successfully deleted all documents.")
    }
    });

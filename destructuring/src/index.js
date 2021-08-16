import React from "react";
import ReactDOM from "react-dom";
import animals, { useAnimals } from "./data";
import cars from "./practice";

/*console.log(animals)
destructuring array of animals
const [cat, dog] = animals;
console.log(cat);
console.log(dog.name, dog.sound)
destructuring an object
const { name, sound } = cat; //name and sound have match with cat properties
console.log(name, sound)
we can change name of object properties
const { name: catName, sound: catSound } = cat;
console.log('catName, catSound: ', catName, catSound)
set by default if propertie is undefined
const { name = "Fluffy", sound = "Purr" } = cat;
console.log("new default properties: ", name, sound
destructuring nested array
const { name, sound, feedingRequirements } = cat;
console.log(feedingRequirements);
const { food, water } = feedingRequirements;
const { name, sound, feedingRequirements: { food, water } } = cat;
console.log(name, sound, food, water);
useAnimals(cat)
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();*/
const [honda, tesla] = cars;
const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;
const { coloursByPopularity: [hondaTopColour] } = honda;
const { coloursByPopularity: [teslaTopColour] } = tesla;



ReactDOM.render(
    <table>
        <tr>
            <th>Brand</th>
            <th>Top Speed</th>
        </tr>
        <tr>
            <td>{tesla.model}</td>
            <td>{teslaTopSpeed}</td>
            <td>{teslaTopColour}</td>
        </tr>
        <tr>
            <td>{honda.model}</td>
            <td>{hondaTopSpeed}</td>
            <td>{hondaTopColour}</td>
        </tr>
    </table>,
    document.getElementById("root")
);

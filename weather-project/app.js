const express = require("express");
require("dotenv").config();
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.APIKEY}&q=Barcelona&aqi=no`;
    https.get(url,function(response){
        //console.log(response.statusCode);
        response.on("data", function(data){
            //console.log(data);
            //pass hexadecimal data to JSON
            const weatherData = JSON.parse(data)
            //console.log(weatherData);
            /*sample stringify
            const user = {
                name:"Shinosuke",
                favouriteFood: "Ramen"
            }
            console.log(JSON.stringify(user));*/
            const location = weatherData.location.name;
            const currentCondition = weatherData.current.condition.text
            console.log( location + " " + currentCondition);
        })
    })
    res.send("Server is up and running.");
});

app.listen(process.env.PORT,function(){
    console.log(`Server listening on port ${process.env.PORT}`);
});


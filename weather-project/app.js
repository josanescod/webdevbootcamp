const express = require("express");
require("dotenv").config();
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.APIKEY}&q=London&aqi=no`;
    https.get(url,function(response){       
        response.on("data", function(data){          
            const weatherData = JSON.parse(data)   
            console.log(weatherData);      
            const location = weatherData.location.name;
            const condition = weatherData.current.condition.text
            const temp = weatherData.current.temp_c;
            const imgURL = weatherData.current.condition.icon;
            res.write("<h1>The wheather in mi city</h1><br>")
            res.write(`<p>the temperature in ${location} is: ${temp} degrees Celsius and the condition is ${condition}</p>`);
            res.write(`<img src='${imgURL}' alt="weather icon">`);
            res.send();
        })
    })
   
});

app.listen(process.env.PORT,function(){
    console.log(`Server listening on port ${process.env.PORT}`);
});


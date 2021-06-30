const express = require("express");
require("dotenv").config();
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.APIKEY}&q=Barcelona&aqi=no`;
    https.get(url,function(response){       
        response.on("data", function(data){          
            const weatherData = JSON.parse(data)   
            console.log(weatherData);      
                         
            const location = weatherData.location.name;
            const condition = weatherData.current.condition.text
            const temp = weatherData.current.temp_c;
            
            res.send(`the temperature in ${location} is: ${temp} C and the condition is ${condition}`);
        })
    })
   // res.send("Server is up and running.");
});

app.listen(process.env.PORT,function(){
    console.log(`Server listening on port ${process.env.PORT}`);
});


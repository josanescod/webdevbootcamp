const express = require("express");
require("dotenv").config();
const https = require("https");
const path = require('path');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'assets')));

app.use(express.urlencoded({ extended: true }));//POST


app.get("/", function(req, res){
    
    res.sendFile(__dirname + "/index.html");

   
});

app.post("/",function (req,res) {

    console.log("Post request recieved");
    console.log(req.body.cityName);
    const city = req.body.cityName
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.APIKEY}&q=${city}&aqi=no`;
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
            res.write(`<a href="${process.env.URL}">Back</a>`)
            res.send();
        })
    })
});

app.listen(process.env.PORT,function(){
    console.log(`Server listening on port ${process.env.PORT}`);
});


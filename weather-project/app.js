const express = require("express");
require("dotenv").config();
const https = require("https");

const app = express();

app.get("/", function(req, res){
    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.APIKEY}&q=Barcelona&aqi=no`;
    https.get(url,function(response){
        console.log(response.statusCode);
    })




    res.send("Server is up and running.");
});

app.listen(process.env.PORT,function(){
    console.log(`Server listening on port ${process.env.PORT}`);
});


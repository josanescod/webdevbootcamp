const express = require("express");
require("dotenv").config();
const path = require('path');
const https = require("https");

const app = express();
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));//POST
app.get("/", function(req, res){       
         
        res.sendFile(__dirname + "/signup.html");
    });

app.post("/",function(req,res){
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    console.log(firstname,lastname,email);

    var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname,
                }   
            }   
        ]
    }

    const jsonData = JSON.stringify(data);// to send json to string 

    const url = `https://us6.api.mailchimp.com/3.0/lists/${process.env.LISTID}`
    const options = {
        method: "POST",
        auth: `sothvondeaqui:${process.env.APIKEY}`,
    }
    const request = https.request(url, options ,function(response){
        response.on("data",function(data){
            console.log(JSON.parse(data));
        })

    })

    request.write(jsonData);
    request.end();

})

app.listen(process.env.PORT,function(){
    console.log(`Server listening on port ${process.env.PORT}`);
})
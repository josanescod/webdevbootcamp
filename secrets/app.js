const express = require("express");
const ejs = require("ejs");
require('dotenv').config();
const mongoose = require ("mongoose");
const encrypt = require ("mongoose-encryption");


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

mongoose.connect(`${process.env.MONGODB}`, { useNewUrlParser: true, useUnifiedTopology: true });

//new Schema changed to mongooSchema

const userSchema = new mongoose.Schema ({
    email: String,
    password: String
});

//secret
userSchema.plugin(encrypt, { secret:process.env.SECRET , encryptedFields: ['password'] });

 

//new model
const User = new mongoose.model("User", userSchema);



app.get("/", function (req, res) {
    res.render("home");
})

app.get("/login", function (req, res) {
    res.render("login");
})

app.get("/register", function (req, res) {
    res.render("register");
})

app.post("/register", function(req,res){
    const newUser = new User({
        email: req.body.username ,
        password: req.body.password
    });

    newUser.save(function(err){
        if(err){
            console.log(err)
        }else {
            res.render("secrets"); //if email and password are ok, render secrets page
        }
    });
});

app.post("/login",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({email: username},function(err,foundUser){
        if (err){
            console.log(err);
        }else{
            if (foundUser){
                if (foundUser.password === password){
                    res.render("secrets");
                }
            }
            
        }
    })

});

app.get("/logout",function(req,res){
    res.redirect("/");
})

app.listen(process.env.PORT, function () {
    console.log(`Server started on port ${process.env.PORT}`);
});
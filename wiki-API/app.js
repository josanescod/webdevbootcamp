const express = require("express");
const mongoose = require('mongoose');
const ejs = require("ejs");
require('dotenv').config();


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

//create new database
mongoose.connect(`${process.env.MONGODB}`, { useNewUrlParser: true, useUnifiedTopology: true });

//new schema
const articleSchema = new mongoose.Schema({
    title: String,
    content: String

});

//new model
const Article = mongoose.model("Article", articleSchema);



app.listen(process.env.PORT, function () {
    console.log(`Server started on port ${process.env.PORT}`);
});
/*
RESTful
http verbs: GET, POST, PUT, PATCH, DELETE
*/

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

//RESTFUL verbs
//refactor with app.route()
app.route("/articles")

    .get(function (req, res) {
        Article.find(function (err, foundArticles) {
            if (!err) {
                res.send(foundArticles);
            } else {
                res.send(err);
            }
        });
    })
    .post(function (req, res) {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        newArticle.save(function (err) {
            if (!err) {
                res.send("Succesfully added a new article.");
            } else {
                res.send(err);
            }
        });
    })
    .delete(function (req, res) {
        Article.deleteMany(function (err) {
            if (!err) {
                res.send("Succesfully deleted all articles.");
            } else {
                res.send(err);
            }
        })
    });

app.listen(process.env.PORT, function () {
    console.log(`Server started on port ${process.env.PORT}`);
});
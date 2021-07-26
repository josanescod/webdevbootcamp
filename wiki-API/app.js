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

app.route("/articles/:articleTitle")

    .get(function (req, res) {
        Article.findOne({ title: req.params.articleTitle }, function (err, foundArticle) {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("No articles matching that title was found.");
            }
        });
    })
    .put(function(req,res){       
        Article.updateOne(
            {title: req.params.articleTitle },
            {$set: {title: req.body.title, content: req.body.content}},{overwrite: true}, 
            function(err){
                if (!err) {
                    res.send("Successfully updated article.");
                } 
        });

    })

    .patch(function(req,res){        
        Article.updateOne(
            {title: req.params.articleTitle },
            {$set: req.body}, 
            function(err){
                if (!err) {
                    res.send("Successfully updated article.");
                } else{
                    res.send(err);
                }
        });

    })
    .delete(function(req,res){
        Article.deleteOne({ title: req.params.articleTitle }, function (err) {
            if (!err) {
                res.send("Succesfully deleted article.");
            } else {
                res.send(err);
            }
        });

    });


app.listen(process.env.PORT, function () {
    console.log(`Server started on port ${process.env.PORT}`);
});
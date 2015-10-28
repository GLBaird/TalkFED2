var express = require("express");
var bodyParser = require("body-parser");

var greeting = require("./slug");

greeting.update("WOW!!");
greeting.doGreeting();

var users = require("./data/users");


// make my server
var app = express();

app.get("/users", function(req, res) {
    res.json(users);
});

app.get("/users/:name", function(req, res) {
    var search = req.params.name;

    var foundData = users.filter(function(user){
        return user.name == search;
    });

    res.json(foundData);
});

app.use("/users", bodyParser.urlencoded({ extended: false }));

app.use("/users", bodyParser.json());

app.post("/users", function(req, res) {
    users.push(req.body);
    res.end("Added");
});

app.use(express.static("./public"));

app.use("*", function(req, res) {
    res.status(404).send("<h1>Server Error 404</h1><p>File not found!</p>");
});


// start listening
app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});

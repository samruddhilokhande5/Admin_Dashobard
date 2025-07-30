var express = require("express");
var route = express.Router();

var movies = [
    {id: 101, name: "Hum Sath Sath Hai", year: 1999, rating: 8.1},
    {id: 102, name: "Lost", year: 2010, rating: 8.7},
    {id: 103, name: "Jawaan", year: 2008, rating: 9},
    {id: 104, name: "Angry Young Man", year: 1957, rating: 8.9}
];
route.get("/", function (req, res) {
    res.json(movies);
});

module.exports = route;
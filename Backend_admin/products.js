
var express = require("express");
var router = express.Router();
var mysql = require("mysql2");


var app = express()





/* var con = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"Samubaby@0503",
    database:"cart_app",
    insecureAuth : true
});
 */
/* var movies = [
    {id: 101, name: "Hum Sath Sath Hai", year: 1999, rating: 8.1},
    {id: 102, name: "Lost", year: 2010, rating: 8.7},
    {id: 103, name: "Jawaan", year: 2008, rating: 9},
    {id: 104, name: "Angry Young Man", year: 1957, rating: 8.9}
]; */

router.get('/', function(req , res){
    var con = mysql.createConnection({
     host : "localhost",
       user : "root",
       password : "Samubaby@0503",
       database : "cart_app",
       insecureAuth : true
    });
    con.connect(function(err){
        if(err) throw err;
        con.query("SELECT * FROM products", function(err, result, fields){
            if(err) throw err;
            console.log(result);
           res.json(result);
        });
    });
   
});

module.exports = router;
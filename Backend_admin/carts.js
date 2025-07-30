var express = require('express');
var router = express.Router();
var mysql = require('mysql2');

/* var cors = require('cors') */
var app = express();

/* var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
} */



router.get('/', function(req , res) {
    var con = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "Samubaby@0503",
        database : "cart_app",
        insecureAuth: true,
    });
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM carts", function(err, result, fields){
        if (err) throw err;
        console.log(result);
        res.json(result);
    })
})
})

module.exports = router;
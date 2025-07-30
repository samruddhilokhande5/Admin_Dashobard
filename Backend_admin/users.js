var express = require("express");
var router = express.Router();
var mysql = require("mysql2");

var app = express();



router.get('/', function (req, res) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Samubaby@0503",
        database: "cart_app",
        insecureAuth: true
    });
    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM users", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            res.json(result);
        });
    });

});

router.post('/', function (req, res) {
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Samubaby@0503",
        database: "cart_app",
        insecureAuth: true,
    });
    console.log(req.body);

    const user = req.body;

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected");
        var sql =
            `INSERT INTO users (username,password,email,first_name,last_name) 
       VALUES ('${user.username}' ,
       ' ${user.password} ',
      '  ${user.email} ', 
       ' ${user.first_name} ',
       ' ${user.last_name}')`
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted ");
            res.json({ message: "1 record inserted" });
        })
    });

    /*  con.connect(function (err) {
         if (err) throw err;
         con.query("SELECT * FROM users", function (err, result, fields) {
             if (err) throw err;
             console.log(result);
             res.json(result);
         });
     }); */
});

module.exports = router;
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cookieParser = require('cookie-parser');
var app = express();
var cors = require('cors');


app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(cors());
/* app.options('*',cors()); */


//Require the Router we defined in movies.js
var movies = require('./movies.js');
var users = require('./users.js');
var products = require('./products.js');
var carts = require('./carts.js');

//Use the Router on the sub route /movies
app.use('/movies', movies);
app.use('/users', users);
app.use('/products', products);
app.use('/carts', carts);
 


var corsOptions = {
    origin: 'http://localhost:3004/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.listen(3004);


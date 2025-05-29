var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
// parser
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

//views
app.set('views',path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

require('./model/moviemodel');

mongoose.connect('mongodb://127.0.0.1:27017/newDB',{useNewUrlParser:true},{useUnifiedTopology:true});
const db = mongoose.connection;
db.once('open', function(){
    console.log("We are connected...")
});

const moviecontroler = require('./controler/moviecontroler');
app.get('/movie', moviecontroler.getallmovies);

app.listen('3000');





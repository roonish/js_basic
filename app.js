//import necessary package
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

//import model and controller
const orderModel = require('./models/ordermodel');
const orderController = require('./controllers/orderController');

//initialize express
var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('views',path.join(__dirname,'views'));
//set view engine to ejs
app.set('view engine','ejs');

//connect to mongo db
mongoose.connect('mongodb://localhost:27017/ronish');
mongoose.connection;

//add route to diff view 
app.get('/orders',orderController.getallorder);
app.get('/orders/searchbydate',orderController.getorderbydate);
app.get('/orders/searchbyid',orderController.getorderbyid);
app.post('/orders/addorder',orderController.create);
app.get('/orders', function (req,res) {
    res.render('customerorder.ejs');
})

//listen to port number 3000
app.listen(3000);
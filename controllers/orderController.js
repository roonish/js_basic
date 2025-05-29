const mongoose = require('mongoose');
const ejs = require('ejs');

//importing model
const orderModel = require('../models/ordermodel');

module.exports = {
    //to get all the stored order from db
    getallorder: async function (req,res) {
       var result =await orderModel.find();
       //render it to orderlist view and display all orders.
        res.render('orderlist.ejs',{orderlist:result});
    },


    //search order by id
    getorderbyid: async function (req,res) {
        //get id from url query
        var id = req.query.id;
        //search into database from the given id 
        var result =await orderModel.find({orderId:id});
        if(result==null){
            res.error('The order id was not found in database');
        }
        else{
        //render it to orderlist view and display all orders.
        res.render('orderlist.ejs',{orderlist:result});
        }
       
     },


    //search order by date
    getorderbydate: async function (req,res) {
        //get date from url query
        var date = req.query.date;
        //search into database from the given date 
        var result =await orderModel.find({date:date});
        //render it to orderlist view and display all orders.
         res.render('orderlist.ejs',{orderlist:result});
     },


    //to create a db with all order detail
    create : async function (req,res) {

        var orderDetail = {
            orderId: req.body.orderId,
            customerName:req.body.customerName,
            quantity:req.body.quantity,
            price:req.body.price,
            foodOrdered:req.body.foodOrdered,
            date:req.body.date,
            totalPrice : req.body.price*req.body.quantity,
        };

        //create db
       await orderModel.create(orderDetail);
       res.redirect('/orders');
        
    }
}
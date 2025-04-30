//need mongoose to add model into database
const mongoose = require('mongoose');

const modelSchema = mongoose.Schema({
    orderId:{type:Number},
    customerName:{type:String},
    quantity:{type:Number},
    unitprice:{type:Number},
    foodOrdered:{type:String},
    date:{type:Number},
    //total price quanity*price
    totalprice:{type:Number},

});

//adding to db and render to other page
module.exports=mongoose.model('OrderDB',modelSchema);
var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema(
    {
        name :{type:String},
        director:{type:String},
        year_released:{type:Number}
    }
);

module.exports= mongoose.model('movie',movieSchema);
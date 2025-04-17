var mongoose = require('mongoose');
const moviemodel = require('../model/moviemodel');

module.exports ={getallmovies: async function (req,res){
    console.log("we are inside the all movies");
    const result = await moviemodel.find();

    res.render('movielist.ejs', 'allthemovies:result');

    }
}
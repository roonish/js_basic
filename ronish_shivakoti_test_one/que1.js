// In this test, you are requested to perform the following:
// 1 - Develop a weather web-service using Node.js with following functionalities:
// -	getWeather: Enquire about weather for a specific city, for instance: getWeather(“Toronto”)

// -	updateCity: Update the weather of a specific city, for instance: updateCity(“Toronto”, “Sunny  40.0 C, Humidity 45%”)

// -	addCity: Enter new city to the database. For instance: addCity(“Vancouver” , “Cloudy   20.0 C, Humidity 52%”)

// -	removeCity: Removing a city from database by providing the city name.

// -	displayAllWeather: Display the weather for all cities in the database: displayAllWeather()
// Each city is represented by:
// -	Longitude & Latitude
// -	State & Country
// -	Weather
// -	Temperature
// -	Humidity
// -	Wind Speed & direction
// So, for each city in the database, you are requested to store the above-mentioned information. Use JSON to keep the date in the database and use ‘express’ library in JavaScript.



const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 5000;

// list of city weather inside json format
const weathers = [
    {name:"Toronto",longitude:10, latitude:20,country:"Canada",state:"Ontario",weather:"Cloudy",temp:10,humidity:20,windspeed:30},
    {name:"Vancouver",longitude:20, latitude:60,country:"Canada",state:"BC",weather:"Sunny",temp:4,humidity:10,windspeed:80},
    {name:"North Bay",longitude:50, latitude:20,country:"Canada",state:"Ontario",weather:"Cloudy",temp:70,humidity:20,windspeed:30},

];

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Test
app.get('/',function(req,res){
    res.send("Running success");
});


//display all weather
app.get('/api/weather',function(req,res){
    res.send(weathers);
});

//Enquire about weather for a specific city, for instance: getWeather(“Toronto”)
app.get('/api/weather/:name',function(req,res){
    //validation
    const weather = weathers.find(a=>a.name===req.params.name);
    //error check
    if(!weather)
        res.status(400).send("Invalid city name");
    res.send(weather);
});

// -	addCity: Enter new city to the database. For instance: addCity(“Vancouver” , “Cloudy   20.0 C, Humidity 52%”)

app.post('/api/weather',function(req,res){
    //validation
    if(!req.body.name || req.body.name<3)
        res.status(400).send("Invalid city name");

    // Json data inside body to test in postman
    const weather =     {
        name:req.body.name,
        longitude:req.body.longitude,
         latitude:req.body.latitude,
         country:req.body.country,
         state:req.body.state,
         weather:req.body.weather,
         temp:req.body.temp,
         humidity:req.body.humidity,
         windspeed:req.body.windspeed};
weathers.push(weather);
res.send(weather);
});

// -	updateCity: Update the weather of a specific city, for instance: updateCity(“Toronto”, “Sunny  40.0 C, Humidity 45%”)
app.put('/api/weather/:name',function(req,res){
    //validation
    const weather = weathers.find(a=>a.name===req.params.name);
    if(!weather)
        res.status(400).send("Invalid city name");

    weather.name = req.body.name,
    weather.longitude = req.body.longitude,
    weather.latitude=req.body.latitude,
    weather.country = req.body.country,
    weather.state=req.body.state,
    weather.temp=req.body.temp,
    weather.windspeed=req.body.windspeed
    weather.weather = req.body.weather,
    weather.humidity = req.body.humidity,

    res.send(weather);
});

// -	removeCity: Removing a city from database by providing the city name.
app.delete('/api/weather/:name',function(req,res){
    //validation
    const weather = weathers.find(a=>a.name===req.params.name);
    //error check
    if(!weather)
        res.status(400).send("Invalid city name");
    const index = weathers.indexOf(weather);
    weathers.splice(index,1);

    res.send(weather);
});

app.listen(port,function(){
    console.log(`Running on ${port}`);
})
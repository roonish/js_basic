var express = require('express');  // Import Express framework
var mongoose = require('mongoose');  // Import Mongoose for MongoDB interaction
var bodyParser = require('body-parser');  // Middleware for parsing request bodies
var path = require('path');  // Import Path module for handling file paths

var app = express();  // Initialize Express app

// Middleware for parsing URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up view engine and views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  // Use EJS as the template engine

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/studentMongoDB', {
    useNewUrlParser: true,  // Use the new URL parser
    useUnifiedTopology: true  // Use the new Server Discovery and Monitoring engine
});

const db = mongoose.connection;
db.once('open', function () {
    console.log("Connected to MongoDB...");  // Log successful connection
});

// Import controllers for handling routes
const studentController = require('./controllers/studentController');
const courseController = require('./controllers/courseController');

// Student Routes
app.get('/student', studentController.getAllStudents);  // Fetch all students
app.post('/student', studentController.addStudent);  // Add a new student
app.delete('/student/:id', studentController.removeStudent);  // Remove a student by ID
app.put('/student/:id', studentController.modifyStudent);  // Modify student details by ID

// Course Routes
app.put('/course/:code', courseController.modifyCourse);  // Modify course details by course code

// Start the server on port 8000
app.listen(8000, () => {
    console.log("Server is running on http://localhost:8000");  // Log the server URL
});

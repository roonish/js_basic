var mongoose = require('mongoose');  // Import Mongoose for MongoDB schema creation

// Define the Student schema
var studentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },  // First name of the student (Required)
    lastName: { type: String, required: true },  // Last name of the student (Required)
    studentId: { type: String, required: true, unique: true },  // Unique student ID (Required)
    semester: { type: Number, required: true },  // Semester the student is currently in (Required)
    
    // Array of courses the student is enrolled in (References Course model)
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

// Export the Student model to use in other parts of the application
module.exports = mongoose.model('Student', studentSchema);

var mongoose = require('mongoose'); 

var courseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    courseCode: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Course', courseSchema);

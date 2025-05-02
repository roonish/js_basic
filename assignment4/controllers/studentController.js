var Student = require('../models/studentModel');

module.exports = {
    // Retrieve and display all students
    getAllStudents: async function (req, res) {
        try {
            console.log("Fetching all students...");
            const students = await Student.find(); // Get all students from the database
            res.render('studentList', { allStudents: students }); // Pass data to the view
        } catch (error) {
            res.status(500).send("Failed to retrieve students"); // Error handling
        }
    },

    // Add a new student to the database
    addStudent: async function (req, res) {
        try {
            let newStudent = new Student(req.body); // Create a new student object
            await newStudent.save(); // Save student record in the database
            res.send("Student added successfully!"); // Success response
        } catch (error) {
            res.status(500).send("Failed to add student"); // Error handling
        }
    },

    // Delete a student by student ID
    removeStudent: async function (req, res) {
        try {
            await Student.findOneAndDelete({ studentId: req.params.id }); // Delete student record
            res.send("Student removed successfully!"); // Success response
        } catch (error) {
            res.status(500).send("Failed to remove student"); // Error handling
        }
    },

    // Update an existing student's information
    modifyStudent: async function (req, res) {
        try {
            await Student.findOneAndUpdate({ studentId: req.params.id }, req.body); // Update student record
            res.send("Student updated successfully!"); // Success response
        } catch (error) {
            res.status(500).send("Failed to update student"); // Error handling
        }
    }
};

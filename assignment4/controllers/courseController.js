const Course = require('../models/courseModel');

module.exports = {
    // Update an existing course based on the course code
    modifyCourse: async (req, res) => {
        try {
            // Find a course by its course code and update it with the new data from the request
            await Course.findOneAndUpdate({ courseCode: req.params.code }, req.body);
            res.send("Course updated successfully"); // Success response
        } catch (err) {
            res.status(500).send(err); // Handle errors and send a failure response
        }
    }
};

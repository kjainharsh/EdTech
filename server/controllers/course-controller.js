const Course = require("../models/course-models");

const courses = async (req, res) => {
    try {
        const response = await Course.find();
        if (!response) {
            // Handle the case where no document was found
            res.status(404).json({ msg: "No service found" });
            return;
        }
        res.status(200).json({ msg: response });
    } catch (error) {
        console.log(`services error: ${error}`);

    }
};
module.exports = courses;
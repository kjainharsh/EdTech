const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
    instructor: { type: String, required: true },
    duration: { type: Number, required: true }, // in weeks
    maxStudents: { type: Number, required: true },
    enrolledStudents: { type: [String], default: [] },
    videos: { type: [String], default: [] }, // Array of video URLs
});

const Course = model("Course", courseSchema);

module.exports = Course;

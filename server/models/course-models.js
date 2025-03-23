const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
    courseId: { type: String, required: true },
    courseName: { type: String, required: true },
    instructor: { type: String, required: true },
    duration: { type: Number, required: true }, // in weeks
    maxStudents: { type: Number, required: true },
    enrolledStudents: { type: Number, default: 0 },
    videos: { type: String, default: "" }, // Videos as a single string (URL or comma-separated)
    description: { type: String, default: "" }, // Change from [String] to String
    price: { type: String, required: true } // Add price field as string
});

const Course = model("Course", courseSchema);

module.exports = Course;

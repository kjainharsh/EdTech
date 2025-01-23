const Course = require("../models/course-models");
const EdTechUser = require("../models/user_models");

const getAllUsers = async (req, res, next) => {
    try {
        const users = await EdTechUser.find({}, { password: 0 });
        if (!users || users.length == 0) {
            return res.status(404).json({ message: "No Users Found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

const deleteUserByID = async (req, res, next) => {
    try {
        const id = req.params.id;
        await EdTechUser.deleteOne({ _id: id });
        return res.status(200).json({ message: "User Delete Successfully" });
    } catch (error) {
        next(error);
    }
}
const deleteCourseByID = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Course.deleteOne({ _id: id });
        return res.status(200).json({ message: "Course Delete Successfully" });
    } catch (error) {
        next(error);
    }
}

const getUserByID = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await EdTechUser.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);
    } catch (error) {
        next(error)
    }
}

const updateUserById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedUserData = req.body;
        const updatedData = await EdTechUser.updateOne({ _id: id }, {
            $set: updatedUserData,
        });
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}

const getAllCourses = async (req, res, next) => {
    try {
        const courses = await Course.find({}, { password: 0 });
        if (!courses || courses.length == 0) {
            return res.status(404).json({ message: "No Courses Found" });
        }
        return res.status(200).json(cachesourses);
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllUsers, getAllCourses, deleteUserByID, getUserByID, updateUserById, deleteCourseByID };
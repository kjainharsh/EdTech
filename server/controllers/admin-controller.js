const EdTechContact = require("../models/contact-models");
const course = require("../models/course-models");
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
const deleteContactByID = async (req, res, next) => {
    try {
        const id = req.params.id;
        await EdTechContact.deleteOne({ _id: id });
        return res.status(200).json({ message: "Contact Delete Successfully" });
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

const getAllContact = async (req, res, next) => {
    try {
        const contacts = await EdTechContact.find({}, { password: 0 });
        console.log(contacts);
        
        if (!contacts || contacts.length == 0) {
            return res.status(404).json({ message: "No contacts Found" });
        }
        return res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
}
const getAllCourse = async (req, res, next) => {
    try {
        const courses = await course.find({});
        console.log(courses);
        
        if (!courses || courses.length == 0) {
            return res.status(404).json({ message: "No courses Found" });
        }
        return res.status(200).json(courses);
    } catch (error) {
        next(error);
    }
}
const deleteCourseByID = async (req, res, next) => {
    try {
        const id = req.params.id;
        await course.deleteOne({ _id: id });
        return res.status(200).json({ message: "Course Delete Successfully" });
    } catch (error) {
        next(error);
    }
}

const updateCourseById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedCourseData = req.body;
        const updatedData = await course.updateOne({ _id: id }, {
            $set: updatedCourseData,
        });
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}

const insertCourse = async (req, res, next) => {
    try {
        const newCourseData = req.body;
        const insertedCourse = await course.create(newCourseData);
        return res.status(201).json(insertedCourse);
    } catch (error) {
        next(error);
    }
}

const getCourseByID = async (req, res, next) => {
    try {
        const id = req.params.id;
        const data = await course.findOne({ _id: id });
        return res.status(200).json(data);
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllUsers, getAllContact, getCourseByID, insertCourse, updateCourseById,deleteCourseByID, getAllCourse, deleteUserByID, getUserByID, updateUserById, deleteContactByID };
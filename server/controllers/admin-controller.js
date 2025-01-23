const EdTechContact = require("../models/contact-models");
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

module.exports = { getAllUsers, getAllContact, deleteUserByID, getUserByID, updateUserById, deleteContactByID };
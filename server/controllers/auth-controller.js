const EdTechUser = require("../models/user_models");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome hello");
    } catch (error) {
        console.log(error);
        res.status(500).send("Server error");
    }
};

const register = async (req, res,next) => {
    try {
        const { username, email, phone, password } = req.body;

        const UserExist = await EdTechUser.findOne({ email: email });
        if (UserExist) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const data = await EdTechUser.create({ username, email, phone, password });
        res.status(200).json({ msg: "Registration Successfully Done "});
    } catch (error) {
        res.status(500).json({ message: "Server error" });
        next(error);
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await EdTechUser.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }
        //const user = await bcrypt.compare(password, userExist.password);
        // const user = await userExist.comparePassword(password);
        if (userExist) {
            res.status(200).json({ msg: "Login Successfully Done "});
        }
        else {
            res.status(401).json({ message: "Invalid Login Credentials" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {  home,register,login };

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
        const { username, email, password } = req.body;

        const UserExist = await EdTechUser.findOne({ email: email });
        if (UserExist) {
            return res.status(400).json({ message: "Email already exists" });
        }
        const data = await EdTechUser.create({ username, email, password });
        res.status(200).json({ msg: "Registration Successfully Done ", token: await data.generateToken(), userId: data._id.toString()});
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
            res.status(200).json({ msg: "Login Successfully Done ", token: await userExist.generateToken(), userId: userExist._id.toString() });
        }
        else {
            res.status(401).json({ message: "Invalid Login Credentials" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);

        return res.status(200).json({ userData });

    } catch (error) {
        console.log(`error from the user route ${error}`);
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
        delete updatedUserData.email; 
        const updatedData = await EdTechUser.updateOne({ _id: id }, {
            $set: updatedUserData,
        });
        return res.status(200).json(updatedData);
    } catch (error) {
        next(error);
    }
}
module.exports = { home, register, login, user, getUserByID, updateUserById };

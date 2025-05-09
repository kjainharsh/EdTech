const { Schema, model } = require("mongoose");

const contactSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const EdTechContact = model("EdTechContact", contactSchema);
module.exports = EdTechContact;
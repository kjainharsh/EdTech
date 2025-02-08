const { Schema, model } = require("mongoose");

const notificationSchema = new Schema({
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    date: { type: Date, default: Date.now } // Add date field to store the creation time
});

const Notification = model("Notification", notificationSchema);

module.exports = Notification;

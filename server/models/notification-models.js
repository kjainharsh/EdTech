const { Schema, model } = require("mongoose");

const notificationSchema = new Schema({
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Notification = model("Notification", notificationSchema);

module.exports = Notification;

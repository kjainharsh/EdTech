const express = require("express");
const { getNotifications } = require("../controllers/notify-controller");

const router = express.Router();

router.get("/notifications", getNotifications);

module.exports = router;

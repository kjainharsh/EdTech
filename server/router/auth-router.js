const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const authenticate = require("../middleware/authenticate"); // Middleware for token verification

router.route("/").get(authcontrollers.home);
router.route("/register").post(authcontrollers.register);
// router.route("/login").post(authcontrollers.login);
// router.route("/user").get(authcontrollers.user);

module.exports = router;

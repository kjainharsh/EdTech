const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller"); 
const validate = require("../middleware/validate-middleware");
const { signUpSchema, loginSchema } = require("../validators/auth-validators");
const authMiddleware = require("../middleware/auth-middleware");

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signUpSchema),authcontrollers.register);
router.route("/login").post(validate(loginSchema) ,authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user);
router.route('/users/:id').get(authMiddleware,authcontrollers.getUserByID);
router.route('/users/update/:id').patch(authMiddleware, authcontrollers.updateUserById);

module.exports = router;

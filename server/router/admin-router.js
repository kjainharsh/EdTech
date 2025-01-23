const express = require("express");
const adminController = require("../controllers/admin-controller");
// const authMiddleware = require("../middlewares/auth-middleware");
// const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.route('/users').get(  adminController.getAllUsers);
router.route('/courses').get(  adminController.getAllCourses);
router.route('/users/delete/:id').delete(  adminController.deleteUserByID);
router.route('/courses/delete/:id').delete(  adminController.deleteCourseByID);
router.route('/users/:id').get(  adminController.getUserByID);
router.route('/users/update/:id').patch(  adminController.updateUserById);

module.exports = router;
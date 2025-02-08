const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");
const router = express.Router();

router.route('/users').get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route('/contacts').get(authMiddleware, adminMiddleware, adminController.getAllContact);
router.route('/courses').get(authMiddleware, adminMiddleware, adminController.getAllCourse);
router.route('/users/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteUserByID);
router.route('/courses/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteCourseByID);
router.route('/contacts/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteContactByID);
router.route('/users/:id').get(authMiddleware, adminMiddleware, adminController.getUserByID);
router.route('/courses/:id').get(authMiddleware, adminMiddleware, adminController.getCourseByID);
router.route('/users/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateUserById);
router.route('/courses/update/:id').patch(authMiddleware, adminMiddleware, adminController.updateCourseById);
router.route('/courses/insert').post(authMiddleware, adminMiddleware, adminController.insertCourse);
router.route('/notifications').get(authMiddleware, adminMiddleware, adminController.getAllNotifications);
router.route('/notifications/insert').post(authMiddleware, adminMiddleware, adminController.insertNotification);
router.route('/notifications/delete/:id').delete(authMiddleware, adminMiddleware, adminController.deleteNotificationByID);

module.exports = router;
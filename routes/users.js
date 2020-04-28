const router = require("express").Router();
const passport = require("../config/passport");
const usersController = require("../controllers/usersController");
const db = require("../models");

router.route("/api/signup").post(usersController.createUser);

router.post(
  "/api/login",
  passport.authenticate("local"),
  usersController.findOne
);

router.route("/api/announcement").post(usersController.createAnnouncement);

router.route("/api/announcement").get(usersController.getAnnouncements);

router
  .route("/api/announcement/:id")
  .delete(usersController.deleteAnnouncement);

router.route("/api/bulletin").post(usersController.createBulletin);

router.route("/api/bulletin").get(usersController.getBulletins);

router.route("/api/bulletin/:id").delete(usersController.deleteBulletin);

router.route("/api/notification").post(usersController.createNotification);

router.route("/api/notification").get(usersController.getNotifications);

router
  .route("/api/notification/:userId")
  .get(usersController.getMyNotifications);

router
  .route("/api/notification/:id")
  .put(usersController.markNotificationAsRead);
router
  .route("/api/notification/:id")
  .delete(usersController.deleteNotification);

router.route("/api/users").get(usersController.getAllUsers);

router.route("/api/allusers").get(usersController.getAll);
router.route("/api/receiver/:aptNum").get(usersController.findIdByApt);

router.route("/api/profile").put(usersController.updateProfile);

router.route("/api/user/:id").get(usersController.refreshCurrentUser);

router
  .route("/api/closenotification/:id")
  .put(usersController.markNotificationAsClosed);

router.route("/api/message").post(usersController.createMessage);

router.route("/api/sentmessages/:id").get(usersController.getSentMessages);
module.exports = router;

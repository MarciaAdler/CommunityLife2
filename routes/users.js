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

router.route("/api/announcement/:id").get(usersController.getAnnouncements);

router
  .route("/api/announcement/:id")
  .delete(usersController.deleteAnnouncement);

router.route("/api/bulletin").post(usersController.createBulletin);

router.route("/api/bulletin/:id").get(usersController.getBulletins);

router.route("/api/bulletin/:id").delete(usersController.deleteBulletin);

router.route("/api/notification").post(usersController.createNotification);

router.route("/api/notification/:id").get(usersController.getNotifications);

router
  .route("/api/getmynotification/:userId")
  .get(usersController.getMyNotifications);

router
  .route("/api/notification/:id")
  .put(usersController.markNotificationAsRead);
router
  .route("/api/notification/:id")
  .delete(usersController.deleteNotification);

router.route("/api/users/:id").get(usersController.getAllUsers);

router.route("/api/allusers/:id").get(usersController.getAll);
router.route("/api/receiver/:id/:PropertyId").get(usersController.findIdByApt);

router.route("/api/profile").put(usersController.updateProfile);

router.route("/api/user/:id").get(usersController.refreshCurrentUser);

router
  .route("/api/closenotification/:id")
  .put(usersController.markNotificationAsClosed);

router.route("/api/message").post(usersController.createMessage);

router.route("/api/sentmessages/:id").get(usersController.getSentMessages);

router
  .route("/api/receivedmessages/:id")
  .get(usersController.getReceivedMessages);

router.route("/api/hidenotification/:id").put(usersController.hideNotification);

router.route("/api/hidemessage/:id").put(usersController.hideMessage);

router.route("/api/readmessage/:id").put(usersController.markMessageAsRead);

router.route("/api/inboxhidemessage/:id").put(usersController.inboxHideMessage);

router.route("/api/user/:id").put(usersController.inactiveUser);

router.route("/api/userbyname/:username").get(usersController.findIdByUsername);

router.route("/api/reset").put(usersController.resetPassword);

// router.route("/api/instructions").put(usersController.updateInstructions);

router.route("/api/fileupload").post(usersController.fileUpload);

router.route("/api/fileupload/:id").get(usersController.getFiles);

// router.route("/api/uploadimage").post(usersController.uploadImage);

// router.route("/api/uploadimage/:id").get(usersController.getImage);

router.route("/api/fileupload/:id").delete(usersController.deleteFile);

router.route("/api/propertyname/:id").get(usersController.getPropertyName);

router.route("/api/maintenancerequest").post(usersController.createRequest);

router
  .route("/api/getmyopenrequests/:id")
  .get(usersController.getMyOpenRequests);

router
  .route("/api/getmyclosedrequests/:id")
  .get(usersController.getMyClosedRequests);

router
  .route("/api/getpropertyopenrequests/:id")
  .get(usersController.getPropertyOpenRequests);

router.route("/api/closerequest/:id").put(usersController.markRequestClosed);

router
  .route("/api/getpropertyclosedrequests/:id")
  .get(usersController.getPropertyClosedRequests);

router.route("/api/request/:id").get(usersController.findRequest);

router.route("/api/addnote/:id/:note").put(usersController.addNote);

router.route("/api/getrequest/:id").get(usersController.getRequest);
module.exports = router;

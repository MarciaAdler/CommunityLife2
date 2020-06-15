const axios = require("axios");
export default {
  createUser: function (req) {
    return axios.post("/api/signup", req);
  },
  getUser: function (req) {
    return axios.post("/api/login", req);
  },
  createAnnouncement: function (req) {
    console.log(req);
    return axios.post("/api/announcement", req);
  },
  getAnnouncements: function (req) {
    console.log(req);
    return axios.get("/api/announcement/" + req);
  },
  createBulletin: function (req) {
    return axios.post("/api/bulletin", req);
  },
  getBulletins: function () {
    return axios.get("/api/bulletin");
  },
  deleteBulletin: function (bulletin) {
    return axios.delete("/api/bulletin/" + bulletin);
  },
  deleteAnnouncement: function (announcement) {
    return axios.delete("/api/announcement/" + announcement);
  },

  getNotifications: function (req) {
    console.log("notifications", req);
    return axios.get("/api/notification/" + req);
  },
  deleteNotification: function (notification) {
    return axios.delete("/api/notification/" + notification);
  },
  getAllUsers: function (req) {
    return axios.get("/api/users/" + req);
  },
  getMyNotifications: function (req) {
    return axios.get("/api/notification/" + req);
  },
  markAsRead: function (req) {
    return axios.put("/api/notification/" + req);
  },
  getAll: function (req) {
    console.log(req);
    return axios.get("/api/allusers/" + req);
  },
  findIdByApt: function (user) {
    return axios.get("/api/receiver/" + user);
  },

  createNotification: function (req) {
    console.log(req);
    return axios.post("/api/notification", req);
  },
  updateProfile: function (req) {
    return axios.put("/api/profile", req);
  },
  refreshCurrentUser: function (req) {
    return axios.get("/api/user/" + req);
  },
  markAsClosed: function (req) {
    return axios.put("/api/closenotification/" + req);
  },
  createMessage: function (req) {
    return axios.post("/api/message", req);
  },
  getSentMessages: function (req) {
    return axios.get("/api/sentmessages/" + req);
  },
  getReceivedMessages: function (req) {
    return axios.get("/api/receivedmessages/" + req);
  },
  hideNotification: function (req) {
    return axios.put("/api/hidenotification/" + req);
  },
  hideMessage: function (message) {
    return axios.put("/api/hidemessage/" + message);
  },
  markMessageAsRead: function (message) {
    return axios.put("/api/readmessage/" + message);
  },
  inboxHide: function (message) {
    return axios.put("/api/inboxhidemessage/" + message);
  },
  inactiveUser: function (user) {
    return axios.put("/api/user/" + user);
  },
  getIdByUsername: function (user) {
    return axios.get("/api/userbyname/" + user.username);
  },
  resetPassword: function (req) {
    return axios.put("/api/reset", req);
  },
  // updateInstructions: function (req) {
  //   return axios.put("/api/instructions", req);
  // },
  uploadFile: function (data) {
    return axios.post("/api/upload", data);
  },
  // uploadImage: function (data) {
  //   return axios.post("/api/uploadimage", data);
  // },

  // getImage: function (image) {
  //   console.log(image);
  //   return axios.get("/api/uploadimage/" + image.UserId);
  // },

  uploadPdfFile: function (data) {
    return axios.post("/api/pdfupload", data);
  },
  fileUpload: function (file) {
    return axios.post("/api/fileupload", file);
  },
  getFiles: function (req) {
    console.log(req.currentproperty);
    return axios.get("/api/fileupload/" + req.currentproperty);
  },
  deleteImage: function (image) {
    return axios.delete("api/upload", image);
  },
  deleteFile: function (file) {
    console.log("API", file);
    return axios.delete("/api/fileupload/" + file);
  },
};

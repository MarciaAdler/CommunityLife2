const axios = require("axios");
export default {
  createUser: function (req) {
    return axios.post("/api/signup", req);
  },
  getUser: function (req) {
    return axios.post("/api/login", req);
  },
  createAnnouncement: function (req) {
    return axios.post("/api/announcement", req);
  },
  getAnnouncements: function (req) {
    return axios.get("/api/announcement/" + req);
  },
  createBulletin: function (req) {
    return axios.post("/api/bulletin", req);
  },
  getBulletins: function (req) {
    return axios.get("/api/bulletin/" + req);
  },
  deleteBulletin: function (bulletin) {
    return axios.delete("/api/bulletin/" + bulletin);
  },
  deleteAnnouncement: function (announcement) {
    return axios.delete("/api/announcement/" + announcement);
  },

  getNotifications: function (req) {
    return axios.get("/api/notification/" + req);
  },
  deleteNotification: function (notification) {
    return axios.delete("/api/notification/" + notification);
  },
  getAllUsers: function (req) {
    return axios.get("/api/users/" + req);
  },
  getMyNotifications: function (req) {
    console.log(req);
    return axios.get("/api/getmynotification/" + req);
  },
  markAsRead: function (req) {
    return axios.put("/api/notification/" + req);
  },
  getAll: function (req) {
    return axios.get("/api/allusers/" + req);
  },
  findIdByApt: function (user) {
    return axios.get("/api/receiver/" + user.id + "/" + user.PropertyId);
  },
  createNotification: function (req) {
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

  uploadPdfFile: function (file) {
    console.log(file);
    return axios.post("/api/pdfupload", file);
  },
  fileUpload: function (file) {
    return axios.post("/api/fileupload", file);
  },
  getFiles: function (req) {
    return axios.get("/api/fileupload/" + req);
  },
  deleteImage: function (image) {
    return axios.delete("api/upload", image);
  },
  deleteFile: function (file) {
    return axios.delete("/api/fileupload/" + file);
  },
  getPropertyName: function (req) {
    return axios.get("/api/propertyname/" + req);
  },
  getMyRequests: function (req) {
    return axios.get("/api/myrequests/" + req);
  },
  createRequest: function (request) {
    return axios.post("/api/maintenancerequest", request);
  },
  getMyOpenRequests: function (user) {
    return axios.get("/api/getmyopenrequests/" + user);
  },
  getMyClosedRequests: function (user) {
    return axios.get("/api/getmyclosedrequests/" + user);
  },
  getPropertyOpenRequests: function (property) {
    return axios.get("/api/getpropertyopenrequests/" + property);
  },
  markRequestAsClosed: function (request) {
    return axios.put("/api/closerequest/" + request);
  },
  getPropertyClosedRequests: function (property) {
    return axios.get("/api/getpropertyclosedrequests/" + property);
  },
  addNote: function (request) {
    console.log(request);
    return axios.put("/api/addnote/" + request.id + "/" + request.notes);
  },
  getRequestFromURL: function (req, res) {
    console.log(req);
    return axios.get("/api/request/" + req);
  },
  getRequest: function (req, res) {
    console.log(req);
    return axios.get("/api/getrequest/" + req);
  },
};

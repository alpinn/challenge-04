const checkCar = require("./checkCarMiddleware.js");
const imgUploader = require("./imgMemoryMiddleware.js");
const cloudinaryUpload = require("./cloudinaryUpMiddleware.js");
const cloudinaryDelete = require("./cloudinaryDelMiddleware.js");

module.exports = {
  checkCar,
  imgUploader,
  cloudinaryUpload,
  cloudinaryDelete,
};
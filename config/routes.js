const router = require("express").Router();
const controller = require("../app/controllers");
const middeware = require("../app/middleware");

router.get("/", (req, res) => {
  try {
    res.render("pages/createCar", {
      saveMsg: "Data Berhasil Disimpan",
      deleteMsg: null,
    });
    // res.render("pages/createCar", {
    //   saveMsg: null,
    //   deleteMsg: "Data Berhasil Dihapus",
    // });
  } catch (error) {
    console.log(error.message);
  }
});
router.post(
  "/car",
  middeware.imgUploader,
  middeware.cloudinaryUpload,
  controller.createCar
);
router.get("/car", controller.getAllCar);
router.get("/car/:id", middeware.checkCar, controller.getCarById);
router.delete("/car/:id ", middeware.checkCar, controller.deleteCar);
router.put("/car/:id", middeware.checkCar, controller.updateCar);

module.exports = router;
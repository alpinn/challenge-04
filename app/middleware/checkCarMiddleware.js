const Car = require("../models/car.js");

//method kaya controller
//middeware perlu next kalo bentukannya ngambil url input
const checkCar = (req, res, next) => {
  const car = Car.find(req.params.id); //params, query, body
  if (!car) {
    res.status(404).json({
      error: "Car not found!",
    });

    return;
  }

  req.car = car;
  next();
};

module.exports = checkCar;
const Car = require("../models/car.js");

exports.createCar = (req, res) => {
  try {
    const data = req.body;
    Car.create(data);
    res.status(200).json({
      message: "Success create data",
      data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAllCar = (req, res) => {
  try {
    const data = Car.list();
    res.status(200).json({
      message: "Success get all data",
      data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getCarById = (req, res) => {
  try {
    const car = req.car;
    res.status(200).json({
      message: "Success get car",
      data: car,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteCar = (req, res) => {
  try {
    const car = req.car;
    Car.delete(car.id);
    res.status(200).json({
      message: "Success Delete car",
      data: car,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateCar = (req, res) => {
  try {
    const data = req.body;
    const car = req.car;
    const templateObj = {
      name: data.name || car.name,
      category: data.category || car.category,
      rentPerDay: data.rentPerDay || car.rentPerDay,
      imgUrl: data.imgUrl || car.imgUrl,
    };
    Car.update(car.id, templateObj);
    res.status(200).json({
      message: "Success Update car",
      data: car,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const { save } = require("../../db/cars.js");
const carsJson = require("../../db/cars.js");

class Car {
  static listCar = carsJson;

  constructor(params) {
    this.id = this.#generateId();
    this.name = params.name;
    this.category = params.category;
    this.rentPerDay = Number(params.rentPerDay);
    this.imgUrl = params.imgUrl;
    this.createdAt = new Date();
  }

  #generateId = () => {
    let lastListCarId =
      this.constructor.listCar[this.constructor.listCar.length - 1]?.id || 0;
    return lastListCarId + 1;
  };

  static delete = (id) => {
    this.listCar = this.listCar.filter((i) => i.id !== id);
    save(this.listCar);
  };

  static update = (id, params) => {
    this.listCar = this.listCar.map((car) =>
      car.id === Number(id)
        ? {
            ...car,
            name: params.name || car.name,
            category: params.category || car.category,
            rentPerDay: Number(params.rentPerDay) || car.rentPerDay,
            imgUrl: params.imgUrl,
            createdAt: new Date(),
          }
        : car
    );

    save(this.listCar);
  };

  static create = (params) => {
    try {
      let cars = new this(params); //object class

      this.listCar.push(cars); //masukin ke list

      save(this.listCar); //overwrite file
    } catch (error) {
      console.log(error.message);
    }
  };

  static find(id) {
    const car = this.listCar.find((i) => i.id === Number(id));
    if (!car) return null;

    return car;
  }

  static list = () => {
    return this.listCar;
  };
}

module.exports = Car;
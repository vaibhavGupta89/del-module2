class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
    return this;
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speeds) {
    this.speed = speeds * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(charge) {
    this.#charge = charge;
    return this;
  }

  brake() {
    super.brake();
    console.log(
      `${this.make} is going at ${this.speed} km/hr, with a charge of ${
        this.#charge
      } %`
    );
  }
}
const goEV = new EVCl("tesla", 300, 70);

goEV.accelerate().chargeBattery(75).brake();

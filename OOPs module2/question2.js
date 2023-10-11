class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
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

const carA = new CarCl("Hyundai", 100);
carA.accelerate();
carA.brake();
carA.speed = carA.speedUS;
console.log(`it is ${carA.speed} in mph`);
carA.speedUS = 120;
console.log(`${carA.make} is now going at ${carA.speed} km/hr`);

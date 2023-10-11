function Car(make, speed) {
  this.make = make;
  this.speed = speed;
  this.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  };
}
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/hr`);
};
const carA = new Car("Hyundai", 100);
carA.accelerate();
carA.brake();

const carB = new Car("BMW", 200);
carB.accelerate();
carB.brake();

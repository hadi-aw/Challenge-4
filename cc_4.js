// U51313007

// Task 1: Implement EV Class

//  Base Car class

class Car {
constructor(make, speed) {
    this.make = make;
    this.speed = speed; 
    }

// Method to accelerate

accelerate() {
this.speed += 10;
console.log(`${this.make} going at ${this.speed} km/h`);
    }

// Method to brake 

brake() {
    this.speed -= 5; 
    console.log(`${this.make} going at ${this.speed} km/h`);
    }

}

// EV class extending Car class

class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed); // Call parent class constructor
        this.charge = charge; // Additional property for EV class
    }

// Task 2: Charge Battery Method

chargeBattery(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} battery charged to ${this.charge}%`);
    }

// Task 3: Customize Accelerate Method:

accelerate() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

// Task 4: Testing EV Class

// Test Data: A `Tesla` starting at 120 km/h, with a charge of 23%
const myTesla = new EV (`Tesla`, 120, 23);

// Test accelerate method 
myTesla.accelerate(); // Tesla going at 140 km/h, with a charge of 22%
myTesla.accelerate(); // Tesla going at 160 km/h, with a charge of 21%

// Test brake method 
myTesla.brake(); // Tesla going at 155 km/h

// Test chargeBattery method
myTesla.chargeBattery(50); // Tesla battery charged to 50%

// Test accelerate method after charging
myTesla.accelerate(); // Tesla going at 175 km/h, with a charge of 49%



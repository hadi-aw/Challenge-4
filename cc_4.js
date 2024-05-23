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



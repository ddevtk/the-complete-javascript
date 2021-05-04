'use strict';

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);
// console.log(jonas.birthYear);
// console.log(jonas.firstName);

// const duong = new Person('Duong', 2000);
// console.log(duong, jonas);

// const mia = {};

// console.log(jonas instanceof Person);
// console.log(mia instanceof Person);

// Person.hey = function () {
//   console.log('Hey there 👋👋👋');
//   console.log(this);
// };

// Person.hey();

// // prototypes
// Person.prototype.calcAge = function () {
//   console.log(2020 - this.birthYear);
// };

// console.log(Person.prototype);
// console.log(Person.__proto__);
// console.log(jonas.__proto__);
// duong.calcAge();
// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(jonas.__proto__.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas, duong);

// console.log(duong.hasOwnProperty('firstName'));
// console.log(duong.hasOwnProperty('species'));

// console.log(jonas.__proto__.__proto__);

// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

// const arr = [3, 6, 9, 3, 6, 1];
// console.log(arr.__proto__);
// console.log(Array.prototype.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// console.dir(x => x + 1);

/* // CHALLENGE #1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};


Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 90);
console.log(bmw);
console.log(mercedes);

bmw.accelerate();
bmw.accelerate();
bmw.brake()
bmw.brake()
bmw.accelerate(); */

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2020 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2021 - this.birthYear;
//   }

//   // SET A PROPERTY THAT ALREADY EXISTS
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   // STATIC METHOD
//   static hey = function () {
//     console.log('Hey there 👋👋👋');
//     console.log(this);
//   };
// }

// PersonCl.hey();
// const jessica = new PersonCl('Jessica David', 1999);
// console.log(jessica);

// const bond = new PersonCl('Bond Jame', 1989);

// jessica.calcAge();
// jessica.greet();
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);

// const account = {
//   owner: 'Jonas',
//   movements: [100, 123, 200, 150],

//   get latest() {
//     return this.movements.slice().pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// account.latest = 350;
// console.log(account.movements);
// console.log(account.latest);
// console.log(account.movements);

/* const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steve = Object.create(PersonProto);
console.log(steve);
steve.name = 'Steve';
steve.birthYear = 2000;
steve.calcAge();

const sarah = Object.create(PersonProto);

sarah.init('Sarah', 1979);
sarah.calcAge();
 */
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };

/* class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}`);
  }
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();

ford.speedUS = 50;
console.log(ford);
console.log(ford.speedUS);
 */

/* const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

const student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

student.prototype = Object.create(Person.prototype);
// student.prototype = Person.prototype;

student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName}, and I study ${this.course}`);
};

const mike = new student('Mike', 1990, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof student);
console.log(mike instanceof Person);

student.prototype.constructor = student;
console.dir(student.prototype.constructor); */

///////////////////////////////////
/////// CODING CHALLENGE #3 ///////
///////////////////////////////////

/* const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// LINK THE PROTOTYPES
EV.prototype = Object.create(Car.prototype);

EV.prototype.changeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed}, with a chrge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.changeBattery(95);
console.log(tesla);
tesla.accelerate()
 */

/* class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2020 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  // SET A PROPERTY THAT ALREADY EXISTS
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  get fullName() {
    return this._fullName;
  }

  // STATIC METHOD
  static hey = function () {
    console.log('Hey there 👋👋👋');
  };
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2021 - this.birthYear
      } years old, but as a student I feel more like ${
        2021 - this.birthYear + 3
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 1998, 'Computer Science');
martha.introduce();
martha.calcAge();
 */

/* const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};


const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const steven = Object.create(PersonProto);

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
StudentProto.calcAge = function () {
  console.log(`I'm ${2021 - this.birthYear} years old`);
};
const jay = Object.create(StudentProto);

jay.init('Jay', 2002, 'IT-E6');
jay.introduce();
jay.calcAge(); */

/* class Account {
  // Public Field
  locale = navigator.language;
  // Private Field
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1.#movements.push(250);
// acc1.#movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// Chaining
 */

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/


class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);


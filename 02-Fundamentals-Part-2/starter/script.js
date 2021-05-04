
// // // // // // // // // // // // /*'use strict';

// // // // // // // // // // // // let hasDriversLicense = false;
// // // // // // // // // // // // const passTest = true;

// // // // // // // // // // // // if (passTest) {
// // // // // // // // // // // //     hasDriversLicense= true
// // // // // // // // // // // // }
// // // // // // // // // // // // if (hasDriversLicense) console.log('I can drive :D');

// // // // // // // // // // // //  const interface = 'Audio'

// // // // // // // // // // // //  */

// // // // // // // // // // // //  function logger() {
// // // // // // // // // // // //      console.log('My name is Duong');
// // // // // // // // // // // //  }
// // // // // // // // // // // // logger();
// // // // // // // // // // // // logger();
// // // // // // // // // // // // logger();

// // // // // // // // // // // // function fruitProcessor (apples, oranges) {
// // // // // // // // // // // //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// // // // // // // // // // // //     return juice;
// // // // // // // // // // // // }
// // // // // // // // // // // // const applesJuice = fruitProcessor(5,0)
// // // // // // // // // // // // console.log(applesJuice);

// // // // // // // // // // // // const applesOrangesJuice = fruitProcessor(2,9);
// // // // // // // // // // // // console.log(applesOrangesJuice);
// // // // // // // // // // // // console.log(fruitProcessor(2,5));
// // // // // // // // // // // // function calcAgel(birthYear) {
// // // // // // // // // // // //     return 2020 - birthYear;
// // // // // // // // // // // // }
// // // // // // // // // // // // const age1= calcAgel(2000)
// // // // // // // // // // // // console.log(age1);

// // // // // // // // // // // // const calcAge2 = function (birthYear) {
// // // // // // // // // // // //     return 2021 - birthYear;
// // // // // // // // // // // // }
// // // // // // // // // // // // age2 = calcAge2(1999)
// // // // // // // // // // // // console.log(age1, calcAge2(1999));

// // // // // // // // // // // function cutFruitPieces1(fruit1){
// // // // // // // // // // //     return fruit1 * 4 ;
// // // // // // // // // // // }
// // // // // // // // // // // function cutFruitPieces2(fruit2){
// // // // // // // // // // //     return fruit2 * 3 ;
// // // // // // // // // // // }

// // // // // // // // // // // function fruitProcessor (apples, oranges) {
// // // // // // // // // // //     const applePieces = cutFruitPieces1(apples);
// // // // // // // // // // //     const orangePieces = cutFruitPieces2(oranges);
// // // // // // // // // // //     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
// // // // // // // // // // //     return juice;
// // // // // // // // // // // }
// // // // // // // // // // // console.log(fruitProcessor(2,4));

// // // // // // // // // // const calAge3 = birthYear => 2020 - birthYear;
// // // // // // // // // // const age3 = calAge3(1999);
// // // // // // // // // // console.log(calAge3(1999), age3);

// // // // // // // // // // const yearsUntilRetirement = (birthYear,firstName) => {
// // // // // // // // // //     const age = calAge3(birthYear);
// // // // // // // // // //     const retirement = 65 - age ;
// // // // // // // // // //     if (retirement > 0){
// // // // // // // // // //         console.log(`${firstName} will retire in ${retirement} years`);
// // // // // // // // // //         return retirement;
// // // // // // // // // //     } else {
// // // // // // // // // //         console.log(`${firstName} has already retired`);
// // // // // // // // // //         return -1;
// // // // // // // // // //     }
    
// // // // // // // // // // }
// // // // // // // // // // console.log(yearsUntilRetirement(2000,'Linh'));
// // // // // // // // // // console.log(yearsUntilRetirement(1950,'Duong'));

// // // // // // // // // // const calcAverage = (a,b,c) => (a+b+c) / 3;
// // // // // // // // // // console.log(calcAverage(3,4,5));

// // // // // // // // // // let scoreDolphins = calcAverage(33,23,1000);
// // // // // // // // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // // // // // // // console.log(scoreDolphins, scoreKoalas);

// // // // // // // // // // const checkWinner = function(avgDolphins, avgKoalas){
// // // // // // // // // //     if (avgDolphins >= 2*avgKoalas) {
// // // // // // // // // //         console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
// // // // // // // // // //     } else if (avgKoalas >= 2 * avgDolphins) {
// // // // // // // // // //         console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
// // // // // // // // // //     } else {
// // // // // // // // // //         console.log("No team win ...");
// // // // // // // // // //     }
// // // // // // // // // // }

// // // // // // // // // // checkWinner(scoreDolphins, scoreKoalas);

// // // // // // // // // //  scoreDolphins = calcAverage(85,54,41);
// // // // // // // // // //  scoreKoalas = calcAverage(23, 34, 27);
// // // // // // // // // // console.log(scoreDolphins, scoreKoalas);
// // // // // // // // // // checkWinner(scoreDolphins, scoreKoalas);   
// // // // // // // // //  use = 'strict';
// // // // // // // // // const friend1 = 'Michael';
// // // // // // // // // const friend2 = 'Steven';
// // // // // // // // // const friend3 = 'Peter';

// // // // // // // // // const friends = ['Michael', 'Steven', 'Peter']
// // // // // // // // // console.log(friends);

// // // // // // // // // // const years = new Array(1991, 12313,14141,1414)

// // // // // // // // // console.log(friends[0]);
// // // // // // // // // console.log(friends[0],friends[1],friends[2]);

// // // // // // // // // console.log(friends.length);
// // // // // // // // // console.log(friends[friends.length - 1]);

// // // // // // // // // const firstName = 'Duong';
// // // // // // // // // const jonas = [ firstName, 'Bui', 2021-2000, friends]
// // // // // // // // // console.log(jonas);

// // // // // // // // // const caclAge = function (birthYeah) {
// // // // // // // // //     return 2021 - birthYeah;
// // // // // // // // // }
// // // // // // // // // const years = [1990, 2002, 2010, 2018];

// // // // // // // // //  const age1 = caclAge(years[0]);
// // // // // // // // //  const age2 = caclAge(years[1]);
// // // // // // // // //  const age3 = caclAge(years[2]);
// // // // // // // // //  const age4 = caclAge(years[3]);
// // // // // // // // //  console.log(age1);
// // // // // // // // //  console.log(age2);
// // // // // // // // //  console.log(age3);
// // // // // // // // //  console.log(age4);

// // // // // // // // //  const ages = [caclAge(years[0]), caclAge(years[1]), caclAge(years[2]), caclAge(years[3])];
// // // // // // // // //  console.log(ages);

// // // // // // // //  const friends = ['Michael','Steven','Peter'];
// // // // // // // //  const newLength = friends.push('Jay');
// // // // // // // //  console.log(friends);
// // // // // // // //  console.log(newLength);
// // // // // // // //  friends.unshift('John');
// // // // // // // //  console.log(friends);

// // // // // // // //  friends.pop();
// // // // // // // //  const popped = friends.pop();
// // // // // // // //  console.log(friends);

// // // // // // // //  friends.shift();
// // // // // // // //  console.log(friends);

// // // // // // // //  console.log(friends.indexOf('Steven'));

// // // // // // // //  if (friends.includes('Linh')) {
// // // // // // // //      console.log('You have a beautiful girlfriend called Thuy Linh');
// // // // // // // //  } else {
// // // // // // // //      console.log('You need to come to her and says: "I Love U ♥"');
// // // // // // // //  }

// // // // // // // //  const calcTip = function(bill){
// // // // // // // //      return bill >= 50 && bill<= 300 ? bill * 0.15 : bill * 0.2;
// // // // // // // //  }
// // // // // // // //  const bills = [125, 555, 44];
// // // // // // // //  const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// // // // // // // //  const tatals = [bills[0] + tips[0], bills[0] + tips[1], bills[1] + tips[2]]
// // // // // // // //  console.log(bills, tips, tatals);

// // // // // // // // const jonasArray = [
// // // // // // // //     'Jonas',
// // // // // // // //     'Schmedtmann',
// // // // // // // //     2021-2000,
// // // // // // // //     'teacher',
// // // // // // // //     ['Michael','Peter','Steven']
    
// // // // // // // // ];

// // // // // // // const jonas = {
// // // // // // //     firstName: 'Jonas',
// // // // // // //     lastName: 'Schmedtman',
// // // // // // //     age: 2021-2000,
// // // // // // //     job: 'teacher',
// // // // // // //     friend: ['Michael','Peter','Steven']
// // // // // // // };
// // // // // // // console.log(jonas);
// // // // // // // console.log(jonas.lastName);
// // // // // // // console.log(jonas['lastName']);

// // // // // // // const nameKey = 'Name';
// // // // // // // console.log(jonas['first' + nameKey]);
// // // // // // // console.log(jonas['last' + nameKey]);

// // // // // // // const interestedIn = prompt('What do you want to know about Jonas ? Choose between firstName,lastName, age, job, and friends  ');
// // // // // // // console.log(jonas[interestedIn]);

// // // // // // // if (jonas[interestedIn]) {
// // // // // // //     console.log(jonas[interestedIn]);
// // // // // // // } else {
// // // // // // //     console.log('Wrong request! Choose between firstName, lastName, age, job, and friends !!!');
// // // // // // // }

// // // // // // // jonas.location = 'CongHien';
// // // // // // // jonas['facebook'] = 'duong.bd';
// // // // // // // console.log(jonas);

// // // // // // const jonas = {
// // // // // //     firstName: 'Jonas',
// // // // // //     lastName: 'Schmedtman',
// // // // // //     birthYeah: 2000,
// // // // // //     job: 'teacher',
// // // // // //     friend: ['Michael','Peter','Steven'],
// // // // // //     hasDriversLicense: false,

// // // // // //     calcAge: function () {
// // // // // //         this.age = 2021 - this.birthYeah;
// // // // // //         return this.age;
// // // // // //     },

// // // // // //     getSummary: function(){
// // // // // //         return `${this.firstName} is a ${this.calcAge()}_years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no' } driver's liscense.`
// // // // // //     }
// // // // // // };
// // // // // // console.log(jonas.calcAge());
// // // // // // console.log(jonas.age);
// // // // // // console.log(jonas.age);
// // // // // // console.log(jonas.age);

// // // // // // console.log(jonas.age);

// // // // // // console.log(jonas.getSummary());
// // // // // // // console.log(jonas['calcAge'](2000));

// // // // // const duong = {
// // // // //     fullName : 'Bui Duong',
// // // // //     mass: 58,
// // // // //     height: 1.75,
// // // // //     calcBMI: function(){
// // // // //         this.bmi = this.mass / this.height **2;
// // // // //         return this.bmi
// // // // //     }
// // // // // }

// // // // // const linh = {
// // // // //     fullName : 'Thuy Linh',
// // // // //     mass: 45,
// // // // //     height: 1.60,
// // // // //     calcBMI: function(){
// // // // //         this.bmi = this.mass / this.height **2;
// // // // //         return this.bmi
// // // // //     }
// // // // // }

// // // // // duong.calcBMI();
// // // // // linh.calcBMI();

// // // // // console.log(linh.bmi);
// // // // // console.log(duong.bmi);

// // // // // if (duong.bmi > linh.bmi) {
// // // // //     console.log(`${duong.fullName}'s BMI (${duong.bmi}) is higher than ${linh.fullName}'s BMI (${linh.bmi})`);
// // // // // } else if (linh.bmi > duong.bmi) {
// // // // //     console.log(`${duong.fullName}'s BMI (${duong.bmi}) is higher than ${linh.fullName}'s BMI (${linh.bmi})`);
// // // // // }

// // // // console.log('Lifting weights repetition 1 ');
// // // // console.log('Lifting weights repetition 2 ');
// // // // console.log('Lifting weights repetition 3 ');
// // // // console.log('Lifting weights repetition 4 ');
// // // // console.log('Lifting weights repetition 5 ');
// // // // console.log('Lifting weights repetition 6 ');
// // // // console.log('Lifting weights repetition 7 ');
// // // // console.log('Lifting weights repetition 8 ');
// // // // console.log('Lifting weights repetition 9 ');
// // // // console.log('Lifting weights repetition 10 ');

// // // // for (let rep = 0; rep <= 9; rep++) {
// // // //     console.log(`Lifting weights repetition ${rep+1}`);
// // // // }

// // // const jonasArray = [
// // //     'Jonas',
// // //     'Schmedtmann',
// // //     2021-2000,
// // //     'teacher',
// // //     ['Michael','Peter','Steven']
    
// // // ];

// // // const types = [];

// // // for (let i = 0; i < jonasArray.length ;i++) {
// // //     console.log(jonasArray[i], typeof jonasArray[i]);

// // //     types.push(jonasArray[i]);
// // // }
// // // console.log(types);

// // // for (let i = 0; i < jonasArray.length ;i++) {
// // //     if (typeof jonasArray[i] !== 'string') continue;

// // //     console.log(jonasArray[i], typeof jonasArray[i]);
// // // }

// // // for (let i = 0; i < jonasArray.length ;i++) {
// // //     if (typeof jonasArray[i] === 'object') break;

// // //     console.log(jonasArray[i], typeof jonasArray[i]);
// // // }

// // // const jonasArray = [
// // //     'Jonas',
// // //     'Schmedtmann',
// // //     2021-2000,
// // //     'teacher',
// // //     ['Michael','Peter','Steven']
    
// // // ];

// // // for (let rep = 0; rep < 10; rep++) {
// // //     console.log(`Lifting weights repetition ${rep}`);
// // // }

// // // let rep = 1;

// // // while (rep <= 10) {
// // //     console.log(`Lifting weights repetition ${rep}`);
// // //     rep++;
// // // }

// // let dice = Math.trunc(Math.random() * 6) + 1 ;
// // while (dice!==6) {
// //     console.log(`You rolled a ${dice}`);
// //     dice = Math.trunc(Math.random() * 6) + 1;
// //     if (dice === 6) {
// //         console.log('Congra');
// //     }
// // }


// const calcTip = function(bill){
//     return bill >= 50 && bill<= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [22, 342, 343 , 3434,232, 2424,256,6365]
// const tips = [];
// const total = [];
// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i]);
//     tips.push(tip);
//     total.push(tip + bills[i]);
// }

// console.log(bills, tips, total);

// const calcAverage = function(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage([2,4,6]));
// console.log(calcAverage(total));
// console.log(calcAverage(tips));
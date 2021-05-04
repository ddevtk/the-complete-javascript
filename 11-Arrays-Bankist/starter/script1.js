'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Bui Duc Duong',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Bui Thu Thuy Linh',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Nguyen Dinh Thien',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Bui Thai Hung',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
// console.log(accounts);
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//Display movement
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const mov = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;
  mov.forEach((mov, i) => {
    const type = mov >= 0 ? 'deposit' : 'withdrawal';
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${mov} €</div>
      </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

//Display balance
const displayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = acc.balance;
};

//Display Sum In And Sum Out And Interest
const displaySumInOutAndInterest = function (acc) {
  const sumIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${sumIn} €`;

  const sumOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(sumOut)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter(mov => mov >= 1)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = interest;
};

const creatUsername = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
creatUsername(accounts);
const updateUI = function (currentAcc) {
  // Display movements
  displayMovements(currentAcc);
  // Display balance
  displayBalance(currentAcc);
  //Display sum
  displaySumInOutAndInterest(currentAcc);
};

let currentAcc;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAcc = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAcc?.pin === Number(inputLoginPin.value)) {
    // Display UI
    const currentAccLabel = currentAcc.owner.split(' ');
    labelWelcome.textContent = `Welcome back, ${currentAccLabel.slice(
      currentAccLabel.length - 1
    )} ${currentAccLabel.slice(0, 1)}`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    updateUI(currentAcc);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferTo.blur();

  if (
    amount > 0 &&
    amount <= currentAcc.balance &&
    receiverAcc &&
    receiverAcc.username !== currentAcc.username
  ) {
    currentAcc.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAcc);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAcc.movements.some(mov => mov >= amount * 0.1)) {
    currentAcc.movements.push(amount);
    updateUI(currentAcc);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAcc.username &&
    Number(inputClosePin.value) === currentAcc.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAcc.username
    );
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAcc, !sorted);
  sorted = !sorted;
});
//////////////////////////////////////////////////////////////////////////////////////////////////LECTURES

// const movements = [200, 450, -400, 3000, -650, -130];

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2, -2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1));
// console.log([...arr]);

// // SPLICE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['i','j','h','g','f']
// console.log(arr2.reverse());
// console.log(arr2);

// //CONCAT
// const letter = arr.concat(arr2.splice(2,4));
// console.log(letter);
// console.log(letter.join(' - '));

// const movements = [200, 450, -400, 3000, -650, -130];

// for (const [i, mov] of movements.entries()) {
//   if (mov > 0) {
//     console.log(`Movement ${i}: You deposited ${mov}`);
//   } else console.log(`Movement ${i}: You withdrew ${Math.abs(mov)}`);
// }

// console.log('================');

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i}: You deposited ${mov}`);
//   } else console.log(`Movement ${i}: You withdrew ${Math.abs(mov)}`);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// console.log(currencies);
// currencies.forEach(function (val, i, arr) {
//   console.log(`${i} : ${val}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);

// for (const [i, val] of currenciesUnique) {
//   console.log(`${i} : ${val}`);
// }

// currenciesUnique.forEach((val, i, arr) => {
//   console.log(`${val} : ${val}`);
// });

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice();
//   dogsJuliaCorrected.splice(0, 1);
//   dogsJuliaCorrected.splice(-2);

//   const dogs = dogsJuliaCorrected.concat(dogsKate);
//   dogs.forEach((dog, i) => {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adults, and is ${dog} year old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy, and is ${dog} years old`);
//     }
//   });

//   console.log(dogsJuliaCorrected);
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// const movements = [200, 450, -400, 3000, -650, -130];
// const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

/* const movementsUSD = movements.map(mov => mov * eurToUsd);
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);

const movDescrip = movements.map((mov, i, arr) => {
  return `Movement ${i + 1} : You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } ${Math.abs(mov)}`;
});
console.log(movDescrip); */

/* const movements = [200, 450, -400, 3000, -650, -130];

const deposits = movements.filter(mov => mov > 0);
console.log(deposits);

const depositFor = [];
for (const mov of movements) {
  if (mov > 0) {
    depositFor.push(mov);
  }
}
console.log(depositFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); */
// const movements = [200, 450, -400, 3000, -650, -130];
// console.log(movements);

// const balance = movements.reduce((acc, mov, i) => {
//   console.log(`Iteration ${i} : ${acc}`);
//   return acc + Math.abs(mov);
// }, 0);
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) {
//   balance2 += Math.abs(mov);
// }
// console.log(balance2);

// const calcAverageHumanAge = function (agesArr) {
//   const humnanAges = agesArr.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults  = humnanAges.filter(age => age >= 18);
//   console.log(humnanAges);
//   console.log(adults);

//   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   return average;

// };
// const average = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(average);

// const movements = [200, 450, -400, 3000, -650, -130];
// const eurToUsd = 1.1;

// const totalDepositUSD = movements
//   .filter(mov => mov >= 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositUSD);

// const movements = [200, 450, -400, 3000, -650, -130];

// const firtsWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firtsWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => (acc.owner = 'Bui Duc Duong'));
// console.log(account);

// const movements = [200, 450, -400, 3000, -650, -130];

// const deposit = mov => mov > 0;
// console.log(deposit);
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const arrDeep = [
//   [1, 2, [3, 4]],
//   [[5, 6], 7],
//   [8, 9],
// ];
// console.log(arr);
// console.log(arrDeep);

// console.log(arr.flat());
// console.log(arrDeep.flat(2));

// const accMovements = accounts.map(acc => acc.movements);
// console.log(accMovements);
// const allMovements = accMovements.flat();
// console.log(allMovements);
// console.log(allMovements.reduce((acc, mov) => acc + mov, 0));

// const overalMovement = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalMovement);

// const overalMovement1 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalMovement1);

const movements = [200, 450, -400, 3000, -650, -130];

// movements.sort((a, b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });
// console.log(movements);

// movements.sort((a, b) => b - a);
// console.log(movements);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);

// const x = new Array(7);
// console.log(x);
// x.fill(1, 3, 7);
// console.log(x);

// arr.fill(23, 2, 6);
// console.log(arr);

// const y = Array.from({ length: 7 }, () => 'Linh');
// console.log(y);

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movementsUI2.map(el => el.textContent.replace('€', '')));
// });

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4."Matilda and Alice and Bob's dogs eat too much!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little`);

// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogSort = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogSort);

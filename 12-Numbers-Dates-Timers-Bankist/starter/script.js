'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2021-03-07T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

// const formatMovementDate = function (date, locale) {
//   const calcDayPassed = (date1, date2) =>
//     Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

//   const dayPassed = calcDayPassed(date, new Date());
//   if (dayPassed === 0) return `Today`;
//   if (dayPassed === 1) return `Yesterday`;
//   if (dayPassed <= 7) return `${dayPassed} days ago`;
//   else {
//     return new Intl.DateTimeFormat(locale).format(date);
//   }
// };

const formatMovementDate = (date, locale) => {
  const calcDayPassed = (date1, date2) =>
    Math.round((date2 - date1) / (1000 * 60 * 60 * 24));

  const dayPassed = calcDayPassed(date, new Date());
  if (dayPassed === 0) return 'Today';
  if (dayPassed === 1) return 'Yesterday';
  if (dayPassed <= 7) return `${daypPassed} days ago`;
  return new Intl.DateTimeFormat(locale).format(date);
};

// Create FormatCurrency Function
// const formatCur = function (locale, currency, val) {
//   return new Intl.NumberFormat(locale, {
//     style: 'currency',
//     currency: currency,
//   }).format(val);
// };

const formatCur = (locale, currency, val) =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(val);

// Display Momement Function
// const displayMovements = function (acc, sort = false) {
//   containerMovements.innerHTML = '';

//   const movs = sort
//     ? acc.movements.slice().sort((a, b) => a - b)
//     : acc.movements;

//   movs.forEach(function (mov, i) {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';

//     const date = new Date(acc.movementsDates[i]);

//     const displayDate = formatMovementDate(date, acc.locale);

//     const formattedMov = formatCur(acc.locale, acc.currency, mov);

//     const html = `
//       <div class="movements__row">
//         <div class="movements__type movements__type--${type}">${
//       i + 1
//     } ${type}</div>
//         <div class="movements__date">${displayDate}</div>
//         <div class="movements__value">${formattedMov}</div>
//       </div>
//     `;

//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);

    const displayCur = formatCur(acc.locale, acc.currency, mov);

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__date">${displayDate}</div>
      <div class="movements__value">${displayCur}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// const calcDisplayBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

//   labelBalance.textContent = formatCur(acc.locale, acc.currency, acc.balance);
// };

// Dipslay Balance FUNCTION
const displayBalance = acc => {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.locale, acc.currency, acc.balance);
};

// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = formatCur(acc.locale, acc.currency, incomes);

//   const out = acc.movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = formatCur(acc.locale, acc.currency, Math.abs(out));

//   const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => {
//       // console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = formatCur(acc.locale, acc.currency, interest);
// };

// DISPLAY SUMMARY, INTEREST FUNCTION
const displaySum = acc => {
  // Sum In
  const sumIn = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(acc.locale, acc.currency, sumIn);

  // Sum out
  const sumOut = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(acc.locale, acc.currency, sumOut);

  // Interest
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(acc.locale, acc.currency, interest);
};

// Create Username
// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsernames(accounts);

// Create Username FUNCTION
const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

// Update UI FUNCTION
const updateUI = acc => {
  displayMovements(acc);
  displayBalance(acc);
  displaySum(acc);
};

// const startLogOutTimer = function () {
//   const tick = function () {
//     const min = String(Math.trunc(time / 60)).padStart(2, 0);
//     const sec = String(time % 60).padStart(2, 0);

//     labelTimer.textContent = `${min}:${sec}`;

//     if (time === 0) {
//       clearInterval(timer);
//       labelWelcome.textContent = 'Login to start';
//       containerApp.style.opacity = 0;
//     }
//     time--;
//   };
//   let time = 120;

//   tick();
//   const timer = setInterval(tick, 1000);
//   return timer;
// };
// Log out Timer FUNCTION
const startLogOutTimer = () => {
  const tick = () => {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }
    time--;
  };
  let time = 10;

  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timerSet;

// Login

// btnLogin.addEventListener('click', function (e) {
//   // Prevent form from submitting
//   e.preventDefault();

//   currentAccount = accounts.find(
//     acc => acc.username === inputLoginUsername.value
//   );
//   console.log(currentAccount);

//   if (currentAccount?.pin === Number(inputLoginPin.value)) {
//     // Display UI and message
//     labelWelcome.textContent = `Welcome back, ${
//       currentAccount.owner.split(' ')[0]
//     }`;
//     containerApp.style.opacity = 100;

//     // Clear input fields
//     inputLoginUsername.value = inputLoginPin.value = '';
//     inputLoginPin.blur();

//     // Dislay current date and time
//     const now = new Date();
//     const option = {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric',
//       // weekday: 'long',
//       hour: 'numeric',
//       minute: 'numeric',
//     };
//     labelDate.textContent = new Intl.DateTimeFormat(
//       currentAccount.locale,
//       option
//     ).format(now);

//     // Timer
//     if (timerSet) clearInterval(timerSet);
//     timerSet = startLogOutTimer();

//     // Update UI
//     updateUI(currentAccount);
//   }
// });

// //Fake
// currentAccount = account1;
// containerApp.style.opacity = 100;
// LOGIN EVENT
btnLogin.addEventListener('click', e => {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    // Display current date and time
    const now = new Date();
    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    if (timerSet) clearInterval(timerSet);
    timerSet = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value
//   );
//   inputTransferAmount.value = inputTransferTo.value = '';

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc?.username !== currentAccount.username
//   ) {
//     // Doing the transfer
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);
//     // Update transfer date
//     currentAccount.movementsDates.push(new Date().toISOString());
//     receiverAcc.movementsDates.push(new Date().toISOString());

//     // Update UI
//     updateUI(currentAccount);

//     // Reset timer
//     clearInterval(timerSet);
//     timerSet = startLogOutTimer();
//   }
// });

// TRANSFER EVENT
btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);
    // Reset timer
    clearInterval(timerSet);
    timerSet = startLogOutTimer();
  }
});

// btnLoan.addEventListener('click', function (e) {
//   e.preventDefault();

//   const amount = Math.floor(inputLoanAmount.value);

//   if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
//     setTimeout(function () {
//       // Add movement
//       currentAccount.movements.push(amount);
//       //Add request loan date
//       currentAccount.movementsDates.push(new Date().toISOString());

//       // Update UI
//       updateUI(currentAccount);
//     }, 3000);
//   }
//   // Reset timer
//   clearInterval(timerSet);
//   timerSet = startLogOutTimer();

//   inputLoanAmount.value = '';
// });

// Loan EVENT
btnLoan.addEventListener('click', e => {
  e.preventDefault();
  const amount = Math.floor(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);
      // Add request loan date
      currentAccount.movementsDates.push(new Date().toISOString());
      // update UI
      updateUI(currentAccount);
    }, 3000);
  }

  clearInterval(timerSet);
  timerSet = startLogOutTimer();

  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});

// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );
//     console.log(index);

//     // Delete account
//     accounts.splice(index, 1);

//     // Hide UI
//     containerApp.style.opacity = 0;
//   }

//   inputCloseUsername.value = inputClosePin.value = '';
// });

// Close account EVENT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    +inputClosePin.value === currentAccount.pin &&
    inputCloseUsername.value === currentAccount.username
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );

    // DELETE ACCOUNT
    accounts.splice(index, 1);

    // Hide Ui
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();
  labelWelcome.textContent = 'Log in to get started';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(23 === 23.0);
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);

// console.log(Number('23'));
// console.log(-'23');

// // Parsing
// console.log(Number.parseInt('30_px'));
// console.log(Number.parseInt('e30'));

// console.log(Number.parseInt('2.5rem'));
// console.log(Number.parseFloat('2.5   rem'));

// console.log(Number.isNaN(23));
// console.log(Number.isNaN('20'));
// console.log(Number.isNaN(+'29x'));
// console.log(Number.isNaN(23 / 0));

// console.log(Number.isFinite(20));
// console.log(Number.isFinite('23'));
// console.log(Number.isFinite(+'23'));
// console.log(Number.isFinite(23 / 0));

// console.log(Number.isInteger(23/23));
// console.log(Number.isInteger(23.0));

// console.log(Math.sqrt(23));
// console.log(23 ** (1 / 4));

// console.log(Math.max(12, 34, 23, 23));

// console.log(Math.PI * parseFloat('10x') ** 2);
// console.log(Math.trunc(Math.random() * 6));

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(5, 10));

// console.log(Math.floor(23.4));
// console.log(Math.trunc(23.4));

// console.log(Math.floor(-23.4));
// console.log(Math.trunc(-23.4));
// console.log(Math.ceil(-23.4));

// console.log(+(2.5).toFixed(0));
// console.log((2.738).toFixed(3));

// console.log(5 % 2);
// console.log(5 / 2);

// const isEven = n => n % 2 === 0;
// console.log(isEven(12));
// console.log(isEven(1231));

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered'; else row.style.backgroundColor = ' pink'
//   });
// });

// console.log(123124214124124284204020402n);
// console.log(BigInt(123141));

// console.log(typeof 29n);

// const now = new Date();
// console.log(now);

// console.log(new Date(' 2021'));

// console.log(new Date(account1.movementsDates[0]));
// console.log(new Date(2021, 3, 6));

// console.log(new Date(0));

// const future = new Date(2020, 3, 8, 12, 12, 12);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());

// console.log(Date.now());

// console.log(+new Date());

// const future = new Date(2021, 2, 7);
// const calcDayPass = (date1, date2) => {
//   console.log(date2 - date1);
//   return date2 - date1;
// };

// console.log(calcDayPass(new Date(2021, 2, 7), new Date(2021, 2, 12)));

// console.log(+new Date());
// console.log(+new Date(2021, 2, 6));

// const calcDayPass = (date1, date2) => Math.round(date2 - date1);
// console.log(calcDayPass(new Date(2021, 2, 6), new Date()));

// console.log(new Date().toISOString());

// const num = 1231313.213;

// const option = {
//   style: 'currency',
//   unit: 'mile-per-hour',
//   currency: 'USD',
// };

// console.log(
//   'VN : ',
//   new Intl.NumberFormat(navigator.language, option).format(num)
// );

// console.log('VN : ', new Intl.NumberFormat('en-en', option).format(num));

// const ingredients = ['olives', 'spinach'];
// const setTime = setTimeout(
//   (ing1, ing2) => {
//     console.log(`Here is a pizza with ${ing1} and ${ing2}`);
//   },
//   3000,
//   ...ingredients
// );

// console.log('Start after 3s');
// setTimeout(() => {
//   console.log('1');
// }, 1000);

// setTimeout(() => {
//   console.log('2');
// }, 2000);

// if (ingredients.includes('spinach')) {
//   clearTimeout(setTime);
// }

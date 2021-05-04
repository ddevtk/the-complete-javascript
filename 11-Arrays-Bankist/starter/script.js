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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${acc.balance} €`;
};
// calcDisplayBalance(account1);
// console.log(account1);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov, i, arr) => {
      // console.log(arr);
      // console.log(acc + mov);
      return acc + mov;
    }, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov, i, arr) => {
      // console.log(arr);
      // console.log(acc + mov);
      return acc + mov;
    }, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumInterest.textContent = `${interest}€`;
};
// calcDisplaySummary(account1.movements);
// console.log(calcDisplaySummary(account1.movements));

const createUsernames = function (accs) {
  for (const val of accs) {
    val.username = val.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  }
};
createUsernames(accounts);

// UPDATE UI
const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);

  //Display balance
  calcDisplayBalance(acc);

  //Display summary
  calcDisplaySummary(acc);
};

// Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log('LOGIN');
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[
        currentAccount.owner.split(' ').length - 1
      ]
    }`;
    containerApp.style.opacity = 100;

    // Clear inputLogin&Pin fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  // Clear InputTranfer fields
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferTo.blur();

  // CHECK amount and receiverAcc
  if (
    amount > 0 &&
    // receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // console.log('Transfer valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

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
// console.log(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/* let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(-2));
console.log(arr.slice(-4, -1));
console.log(arr.slice());
console.log([...arr]);

// const arr2 = arr.slice();
// console.log([...arr2]);

// SPLICE
console.log(arr);
// console.log(arr.slice(-3));
// console.log(arr.splice(2, 3));
arr.splice(2, 3);
console.log(arr);

// REVERSE

arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN

console.log(letters.join(' - ')); */

/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('========= FOR EACH ==========');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
}); */

/* 
 // MAP 
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (val, i, map) {
  console.log(`\n${i}: ${val}`);
});

// SET
const currenciesUnique = new Set(['USD', 'GBP', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${_}`);
});
 */
///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Julia và Kate đang thực hiện một nghiên cứu trên chó. Vì vậy, mỗi người trong số họ hỏi 5 chủ sở hữu chó về tuổi con chó của họ và lưu trữ dữ liệu vào một mảng (mỗi mảng một mảng). Hiện tại, họ chỉ quan tâm đến việc biết một con chó đã trưởng thành hay một con chó con. Một con chó trưởng thành nếu nó ít nhất 3 tuổi, và một con chó con nếu nó dưới 3 tuổi.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
Tạo một hàm 'checkDogs', chấp nhận 2 mảng tuổi của chó ('dogJulia' và 'dogKate') và thực hiện những việc sau:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
1. Julia phát hiện ra rằng chủ nhân của hai con chó ĐẦU TIÊN và CUỐI CÙNG thực sự là mèo chứ không phải chó! Vì vậy, hãy tạo một bản sao nông của mảng của Julia và xóa các tuổi mèo khỏi mảng đã sao chép đó (vì việc thay đổi các tham số hàm là một thói quen xấu)
2. Create an array with both Julia's (corrected) and Kate's data
2. Tạo một mảng với cả dữ liệu của Julia (đã sửa) và của Kate
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
3. Đối với mỗi con chó còn lại, hãy đăng nhập vào bảng điều khiển cho dù đó là người lớn ("Con chó số 1 đã trưởng thành và 5 tuổi") hay một con chó con ("Con chó số 2 vẫn là một con chó con 🐶"
4. Run the function for both test datasets
4. Chạy chức năng cho cả hai tập dữ liệu thử nghiệm

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(1, 4);
  console.log(dogsJuliaCorrected);

  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  // "Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶"

  dogs.forEach(function (val, i) {
    if (val >= 3) {
      console.log(`Dog number ${i + 1} is an adult 🐕, and is ${val} years old`);
    } else if (val < 3) {
      console.log(`Dog number ${i + 1} is still a puppy 🐶, and is ${val} years old`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]); */

/////////////////// MAP METHOD /////////////
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(`${mov * eurToUsd}`);
}
console.log(movementsUSDfor);

const movDescriptions = movements.map(
  (val, i) =>
    `Movement ${i + 1}: You ${val > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      val
    )}`
);
console.log(movDescriptions); */

//////////// FILTER METHOD ///////////////////
/* const deposits = movements.filter(function (val) {
  return val > 0;
});
console.log(deposits);

// const depositsMap = movements.map(val => val>0)
// console.log(depositsMap);

const depositsFor = [];
for (const val of movements) {
  if (val > 0) {
    depositsFor.push(val);
  }
}
console.log(depositsFor);

const withdrawals = movements.filter(val => val < 0);
console.log(withdrawals); */

//////////////// REDUCE METHOD //////////////
/* const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const balance = movements.reduce((acc, cur, i, arr) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

console.log(movements);
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, 200);

const max = movements.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, movements[0]);
console.log(max); */

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:
848 / 5000
Hãy quay lại nghiên cứu của Julia và Kate về loài chó. Lần này, họ muốn chuyển đổi tuổi chó sang tuổi người và tính tuổi trung bình của những con chó trong nghiên cứu của họ.

Tạo một hàm 'calcAverageHumanAge', hàm này chấp nhận một mảng tuổi của con chó ('age') và thực hiện những việc sau theo thứ tự:


1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
1. Tính tuổi chó theo năm của con người bằng công thức sau: nếu chó <= 2 tuổi, thì humanAge = 2 * dogAge. Nếu chó> 2 tuổi, humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
2. Loại trừ tất cả những con chó dưới 18 tuổi của con người (cũng giống như nuôi những con chó từ 18 tuổi trở lên)

3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
3. Tính tuổi trung bình của con người của tất cả các con chó trưởng thành (bạn nên biết từ các thử thách khác cách chúng tôi tính trung bình 😉)

4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/* const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  // console.log(humanAge);
  // return humanAge;

  const adults = humanAge.filter(age => age >= 18);
  // return adults;
  // console.log(adults);

  const average = adults.reduce((acc, cur) => acc + cur, 0) / adults.length;
  return `${humanAge} \n${adults} \n${average}\n`;
};
const age1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const age2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(age1, age2);
 */

// const eurToUsd = 1.1;
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/* const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else return mov;
}, movements[0]);
console.log(max); */

/* const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd;
  })
  .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);
const account = accounts.find(acc => acc.owner === 'Bui Thu Thuy Linh');
console.log(account);
 */
 
'use strict';
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  //   console.log(Object.entries(booking));
  bookings.push(booking);
};

createBooking('LH3120');
createBooking('LH2120', 2, 400);
createBooking('AIR1120', 2);
createBooking('AIR1120', 3);
createBooking('AIR1120', 4);
createBooking('AIR1120', undefined, 4000);

 */

/* const flight = 'AIR234';
const duong = {
  name: 'Duong Bui',
  passport: 31200007744,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'AIR999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 31200007744) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, duong);
// console.log(flight);
// console.log(duong);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};
newPassport(duong);
checkIn(flight, duong); */

/* const oneWord = function (str) {
  return str.replace(/ /g, '').toUpperCase();
};

const capitalizeName = function (str) {
  const names = str.split(' ');
  const namesUpperCase = [];

  for (const word of names) {
    // namesUpperCase.push(word[0].toUpperCase() + word.slice(1));
    namesUpperCase.push(word.replace(word[0], word[0].toUpperCase()));
  }
  return namesUpperCase.join(' ');
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    const abc = [first,  ...others];
    return [abc[0].replace(abc[0][0], abc[0][0].toUpperCase()), ...others].join(' ');

};

// Higher-order function

const tranformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

tranformer('linh is so beautiful 💘💘💘', upperFirstWord);
tranformer('linh is so beautiful 💘💘💘', oneWord);
tranformer('linh is so beautiful 💘💘💘', capitalizeName);

// JS users callbacks all the time
const high5 = function() {
    console.log('👋');
}
document.body.addEventListener('click', high5);

['Duong','Linh','DuongLinh'].forEach(high5) */

// const str = 'linh is so beautiful';

// const abc = str.split(' ');
// console.log(abc);
// for (let i = 0; i < (abc.length -(abc.length -1)) ; i++) {
//   abc[i] = abc[i].replace(abc[i][0], abc[i][0].toUpperCase());
// }
// console.log(abc.join(' '));

/* const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Linh');
greeterHey('Duong');

greet('Hello')('🥂Linh👩')

// Challenge

const greetArr = greeting => name=> console.log(`${greeting} ${name}`);;
greetArr('Hello')('LinhXih') */

/* const lufthansa = {
  airline: 'Lufthansa',
  code: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.code}${flightNum}`,
      name: `${name}`,
    });
  },
};
lufthansa.book(239, 'Duong Bui');
lufthansa.book(239, 'Thuy Linh');

const eurowings = {
  airline: 'Eurowings',
  code: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// console.log(book);

// Does NOT work
// book(23, 'Linh');

// book method
book.call(eurowings, 23, 'Thuy Linh and her husband');
book.call(eurowings, 24, 'Thuy Linh and her husband');
console.log(eurowings);

book.call(lufthansa, 241, 'Duong and his wife');
console.log(lufthansa);

const vnAirline = {
  airline: 'VietNam AirLines',
  code: 'VNA',
  bookings: [],
};

book.call(vnAirline, 234, 'Bui Duong');
console.log(vnAirline);

// Apply method
const flightData = [456, 'Bui Linh'];
book.apply(vnAirline, flightData);

book.call(vnAirline, ...flightData);

// Bind method

const bookEW = book.bind(eurowings);
const bookVNA = book.bind(vnAirline);

bookEW(23, 'Thuy Linh');

const bookVNA23 = book.bind(vnAirline, 246);
bookVNA23('Bui Duc Duong');
bookVNA23('Bui Thu Thuy Linh');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partital application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.1);
console.log(addVAT(100));
 */

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Hãy xây dựng một ứng dụng bình chọn đơn giản!

Một cuộc thăm dò có một câu hỏi, một loạt các tùy chọn mà mọi người có thể chọn và một mảng có số câu trả lời cho mỗi tùy chọn. Dữ liệu này được lưu trữ trong đối tượng khởi động bên dưới.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

  1. Tạo một phương thức có tên 'registerNewAnswer' trên đối tượng 'thăm dò ý kiến'. Phương pháp thực hiện 2 điều:
  1.1. Hiển thị cửa sổ nhắc người dùng nhập số của tùy chọn đã chọn. Lời nhắc sẽ giống như sau:
        Ngôn ngữ lập trình yêu thích của bạn là gì?
        0: JavaScript
        1: Python
        2: Gỉ sét
        3: C ++
        (Viết số tùy chọn)
  
  1.2. Dựa trên số đầu vào, cập nhật mảng câu trả lời. Ví dụ: nếu tùy chọn là 3, hãy tăng giá trị TẠI VỊ TRÍ 3 của mảng lên 1. Đảm bảo kiểm tra xem đầu vào có phải là số không và số đó có hợp lý không (ví dụ: câu trả lời 52 sẽ không hợp lý, phải không?)

2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

2. Gọi phương thức này bất cứ khi nào người dùng nhấp vào nút "Trả lời thăm dò ý kiến".
3. Tạo một phương thức 'displayResults' để hiển thị kết quả cuộc thăm dò. Phương thức nhận một chuỗi làm đầu vào (được gọi là 'kiểu'), có thể là 'chuỗi' hoặc 'mảng'. Nếu kiểu là 'mảng', chỉ cần hiển thị mảng kết quả như nó vốn có, bằng cách sử dụng console.log (). Đây sẽ là tùy chọn mặc định. Nếu loại là 'string', hãy hiển thị một chuỗi như "Kết quả cuộc thăm dò là 13, 2, 4, 1".
4. Chạy phương thức 'displayResults' ở cuối mỗi lần gọi phương thức 'registerNewAnswer'.

GỢI Ý: Sử dụng nhiều công cụ bạn đã học trong phần này và phần cuối cùng 😉

THƯỞNG: Sử dụng phương thức 'displayResults' để hiển thị 2 mảng trong dữ liệu thử nghiệm. Sử dụng cả tùy chọn 'mảng' và 'chuỗi'. KHÔNG đặt các mảng trong đối tượng thăm dò! Vậy từ khóa này trông như thế nào trong tình huống này?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer
    typeof answer === 'number' &&
      answer < this.options.length &&
      this.answers[answer]++;

    // console.log(this.answers);
    // console.log(this);

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};
// poll.registerNewAnswer();
// // console.log(poll.answers);

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
 */

/* const runOne = function () {
  console.log('This will never run again');
};
runOne();

//IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will ALSO never run agian'))();
 */

/* const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(passengerCount);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker); */

// Example 1
/* let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

h();
f();
 */

// Example 2
// const boardPassenger = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each group with ${perGroup}`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// const perGroup = 1000;
// boardPassenger(180, 3);

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/* (function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})(); */

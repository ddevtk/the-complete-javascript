'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time} `
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
 

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

/* document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  console.log(rows);
  // console.log(rows);
  // const abc = [...rows.entries()];
  // console.log(abc);
  for (const [i, row] of rows.entries()) {
    // console.log(i, row);
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log(first, second);
    // const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
    // console.log(output);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'🙆🏻‍'.repeat(i+1)}`);
  }
}); */

console.log('linh+that+su+rat+cute'.split('+'));
const [firstName,lastName]= 'Bui Duong'.split(' ');

const newName = ['Mr.','Duong'.toUpperCase(),'Linh'.toUpperCase()].join(' ');
console.log(newName);

const captitalizeName = function(name) {
  const names= name.split(' ')
  console.log(names);
  const namesUpperCase= [];

  for (const word of names) {
    namesUpperCase.push(word[0].toUpperCase() + word.slice(1));
    // namesUpperCase.push(word.replace(word[0],word[0].toUpperCase()));
  }
  console.log(namesUpperCase);
  console.log(namesUpperCase.join(' '));
}
captitalizeName('bui thu thuy linh');
captitalizeName('bui duc duong')

// Padding
const message = 'Linh 💘💏💑❤💌 Duong';
console.log(message.length);
console.log(message.toUpperCase().padStart(26,'♥-').padEnd(32,'-♥'));

const maskCreditCard = function(number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}
console.log(maskCreditCard(1256543415365233));

// Repeat 
const message2 = 'Bad weather ... All Departues Delayed ...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
}
planesInLine(1)
planesInLine(2)
planesInLine(3)
planesInLine(4)
planesInLine(5)

/* const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitaliztion in name
const passenger = 'dUoNg';
const passengerLower = passenger.toLowerCase();
console.log(passengerLower.toLowerCase());
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing  email
const email = 'hello@gmail.com';
const loginEmail = '   HeLLo@GMAil.com  \n';

const lowerTrimmedEmail = loginEmail.toLowerCase().trim();
console.log(lowerTrimmedEmail);

console.log(email === lowerTrimmedEmail);

// repalacing
const printA = '288,97$';
const printB = printA.replace('$', '@').replace(',', '.');
console.log(printB);

const announment = 'All passengers come to boarding door 23, Boarding door 23!';

console.log(announment.replace('door', 'gate'));
console.log(announment.replaceAll('door', 'gate'));
console.log(announment.replace(/door/g, 'gate'));

// Boolean
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Airbus'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
} */

/* // Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
 */
/* const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'E' || s === 'B') {
    console.log('You got the middle seat 😊');
  } else {
    console.log('You got lucky 😎');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('19E'); */

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
Hãy tiếp tục với ứng dụng cá cược bóng đá của chúng tôi! Lần này, chúng tôi có một bản đồ với nhật ký các sự kiện đã xảy ra trong trò chơi. Các giá trị là bản thân các sự kiện và chìa khóa là số phút mà mỗi sự kiện đã xảy ra (một trận bóng đá có 90 phút cộng với một số hiệp phụ).

1. Create an array 'events' of the different game events that happened (no duplicates)
1. Tạo một mảng 'sự kiện' của các sự kiện trò chơi khác nhau đã xảy ra (không trùng lặp)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
2. Sau khi trận đấu kết thúc, nhận thấy thẻ vàng từ phút 64 là không công bằng. Vì vậy, hãy xóa sự kiện này khỏi nhật ký sự kiện trò chơi.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
3. In chuỗi sau vào bảng điều khiển: "Trung bình, một sự kiện đã xảy ra, cứ sau 9 phút" (hãy nhớ rằng một trò chơi có 90 phút)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
4. Lặp lại các sự kiện và đăng nhập chúng vào bảng điều khiển, đánh dấu xem đó là trong nửa đầu hay nửa sau (sau 45 phút) của trò chơi, như sau:
      [FIRST HALF] 17: ⚽️ GOAL

      

GOOD LUCK 😀
*/

/* const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🟨 Yellow card'],
  [69, '🟥 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🟨 Yellow card'],
]);

// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// 4.
for (const [key, value] of gameEvents) {
  const half = key <=45 ? 'FIRST' : 'SECOND'
  console.log(`[${half} HALF] ${key}: ${value}`);
} */

/* const question = new Map([
  ['question', 'what is the best programming language in the world ???'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['Correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again !'],
]);
console.log(question);

// Convert object to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('Correct') === answer));

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]); */

/* const rest = new Map();
rest.set('name', 'Classico Italiano');
console.log(rest.set(1, 'Firenze Italy'));
console.log(rest.set(2, 'Lisbon Portugal'));
console.log(rest);

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 12)
  .set('close', 24)
  .set(true, 'We are open :D')
  .set(false, 'We are closed');

console.log(rest.get('categories'));

const time = 14;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest);
console.log(rest.get(arr)); */

// rest.delete(2);
// console.log(rest);
// rest.set(2, 'Lisbon Portugal');
// console.log(rest);
// console.log(rest.size);
// rest.clear();
// console.log(rest);

//////////////////////////////////////
// Sets
/* console.log(ordersSet);
const ordersSet = new Set([
  'Pasta',
  'Pasta',
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Risotto',
  'Risotto',
  'Risotto',
]);
console.log(new Set('DuongLinh'));
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Breadcum'));

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('BuiDucDuong')); */

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

// GOOD LUCK 😜
*/

/*
// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers = {};
for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
*/

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

/* 
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

//Properties Value
const values = Object.values(openingHours);
console.log(values);

// Entries
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
} */

// OPTIONAL CHAINING
/* if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  const close = restaurant.openingHours[day]?.close || 'closed';
  console.log(`On ${day}, we open at ${open}`);
  console.log(`On ${day}, we open at ${close}`);
}

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Duong', email: 'buiducduong2342000@gmail.com' }];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) {
  console.log(users[0].email);
} else console.log('User array empty'); */

/* const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(...menu.entries()); */

// Use ANY data type, return ANY data type, short-circuiting
/* console.log(3 || 'linh ');
console.log('' || 'Linh');
console.log(true || 0);
console.log(undefined || null); */

/* restaurant.numGuests = 0;
/* const guestS1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guestS1); */

/* const guestS2 = restaurant.numGuests || 10;
console.log(guestS2);

// Nullish: Null or undefined(NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');  */

/*---------------------------------------------- */
/*-------------- Default values -----------------*/
/*-----------------------------------------------*/
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

/* const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: [['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'], 'Linh'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1)
const [players1, players2] = game.players;
console.log(players1, players2);

// 2)
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// 3)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4)
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);

// 5)
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(game.odds.team1, game.odds.x, game.odds.team2);
console.log(team1, draw, team2);

// 6)
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller', 'Lewandowski');
printGoals(...game.scored[0], game.scored[1]);

// 7)
team1 < team2 && console.log('Team 1 is more likely to wwin');
team1 > team2 && console.log('Team 2 is more likely to wwin'); */

/* const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [Pizza, Pasta, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Pasta, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3, 4, 5);
add(2, 11, 43, 43, 3, 4, 5);
add(2, 3, 4, 5, 1, 8, 9, 0);

const x = [23, 4, 5];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach'); */

/*--------------------------------------------------- */
/*---------------- The Spread Operator ---------------*/
/*----------------------------------------------------*/

/* const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(...badNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy arr
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterrables: Array, strings, maps, sets, NOT objects
const str = 'Linh';
const letters = [...str, ' ', 'S.'];
console.log(letters);

console.log(...str);

const ingredients = [
  // prompt('Ingredient 1'),
  // prompt('Ingredient 2'),
  // prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { founderIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Home's Linh and Duong";
console.log(restaurant.name);
console.log(restaurantCopy.name); */

/* restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 13 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */

/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(`${starter} and ${mainCourse}`);

const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k); */

/*---------------------------------------------- */
/*-------------- Default values -----------------*/
/*-----------------------------------------------*/

/* const [p, q, r] = [8, 9];
console.log(p, q, r ); */

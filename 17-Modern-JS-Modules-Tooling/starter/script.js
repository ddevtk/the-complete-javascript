// 'use strick';
// Importing module

// import './shoppingCart.js';
// import { addToCard, totalPrice, totalQuantity } from './shoppingCart.js';

// addToCard('milk', 12);

// console.log(totalPrice, totalQuantity);

// import * as shoppingCart from './shoppingCart.js';

// shoppingCart.addToCard('milk', 12);
// console.log(shoppingCart.totalQuantity, shoppingCart.totalPrice);

console.log('Importing module');
import add, { cart } from './shoppingCart.js';

add('pizza', 5);
add('bread', 2);
add('milk', 3);

console.log(cart);

/* const shoppingCart = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

shoppingCart.addToCart('bread', 2);
shoppingCart.addToCart('milk', 3);
console.log(shoppingCart.cart);
 */

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 4 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);

console.log(cart);

console.log(cart.find(el => el.quantity > 2));

// import 'core-js/stable';

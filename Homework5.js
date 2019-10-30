// The cart is an array of objects like this:
var cart=[
  {"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
  {"name":"Monitor", "type":"prime", "category":"tech", "price": 119.99},
  {"name":"Mouse", "type":"prime", "category":"tech", "price": 25.50},
  {"name":"dress", "type":"regular", "category":"clothes", "price": 49.90},
]

function isPrime(item) {
return item.type == "prime";
}

function primeItems(cart) {
  // write your code here
  return cart.filter(b => isPrime(b));
}

// { autofold
module.exports = {
  primeItems: primeItems,
  isPrime: isPrime
};
// }

const _ = require('underscore'); // needed to have support for the reject function
const isPrime = require('./isPrime.js'); // our previous snippet

function notPrimeItems(cart){
  // write your code here
  return _.reject(cart.isPrime,isPrime);
}

// { autofold
module.exports = {
  notPrimeItems: notPrimeItems
};
// }

function applyCoupon(cart) {
  // write your code here
  return cart.map( (x) => {
    if(x.category == 'tech')
  {
      x.price *= 0.8;
      }
      return x;
      }
      );
}

// { autofold
module.exports = {
  applyCoupon: applyCoupon
};
// }

applyCoupon(cart);      // apply the Coupon
cart.map(item => {
  if(item.type != "prime") {
    item.price += 2;
  }
});

function totalCost(cart){
  // write your code here
  return cart.reduce((acc, x) => {
    return acc + x.price;
    },  0);
}

// { autofold
module.exports = {
  totalCost: totalCost
};
// }

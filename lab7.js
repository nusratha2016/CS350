var cart=[
{"name":"Biscuits", "type":"regular", "category":"food", "price": 2.0},
{"name":"Monitor", "type":"prime", "category":"tech", "price": 120},
{"name":"Mouse", "type":"prime", "category":"tech", "price": 25},
{"name":"dress", "type":"regular", "category":"clothes", "price": 50},
{"name":"XL Monitor", "type":"prime", "category":"tech", "price": 160},
{"name":"Cookies", "type":"regular", "category":"food", "price": 16},
]
function isPrime(item) {
    //WRITE THIS FUNCTION
//should return true if the item’s type is “prime” and false otherwise }
return item.type === 'prime';
}

let isNotPrime = item => !isPrime(item);
let applyCoupon = (item) => {
 if (item.category === 'tech')
 item.price -= (item.price / 5);

return item;
};

let applySalesTax = (item) => {
const SALES_TAX = 6.00;
item.price += (item.price / 100 * SALES_TAX);
return item;
};

let applyShippingCost = (item) => {
//WRITE THIS FUNCTION
//it should add a $5 shipping cost to the item’s price
item.price += 5;
return item;
};

function totalCost(cart){
return cart.reduce((accumulator, item) => {
accumulator += item.price;
return accumulator;
  }, 0);
}

let primetotalCost =
totalCost(cart.filter(isPrime).map(applyCoupon).map(applySalesTax));

let nonPrimeTotalCost =
totalCost(cart.filter(isNotPrime).map(applyCoupon).map(applySalesTax).map(applyShippingCost));

let itemPriceNoCouponNoDiscount =
totalCost(cart.map(applySalesTax).map(applyShippingCost));

var itemCost = (2.0 + 120 + 25 + 50 + 160 + 16);
itemCost += (itemCost / 100 * 6.0);
itemCost += 30;

console.log("Prime cost: "+ primetotalCost);
console.log("Non-Prime cost: "+ nonPrimeTotalCost);
console.log("Total cost with no coupon or discount: "+ totalCost);
console.log("Itemcost Cost: "+ itemCost);

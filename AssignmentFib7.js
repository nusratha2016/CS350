function getFibonacciGenerator() {
  let x = 0;
  let y = x + 1;
  let z;

  return function() {
   z = (x + y);
   y = x;
   x = z;
    return x;
  }
}

 var next = getFibonacciGenerator();

console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());
console.log(next());


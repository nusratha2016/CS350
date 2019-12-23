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

// Output

1
1
2
3
5
813
21
34
55
89144
233
377
610

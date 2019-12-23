function getFactorialGenerator() {
  var x = 1;
  var y = x = 1;

  return function() {
    x *= y++;
    return x;
  }
}

var next = getFactorialGenerator();

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
2
6
24
120
7205040
40320
362880
3628800
39916800479001600

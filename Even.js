function getEvenGenerator() {
  var x = -2;

  return function() {
    x += 2;
    return x;
  }
}

var next = getEvenGenerator();

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
0
2
4
6
8
1012
14
16
18
2022
24
26
28

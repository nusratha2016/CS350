function getOddGenerator() {
  var x = - 1;

  return function() {
    x += 2;
    return x;
  }
}
var next = getOddGenerator();

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
3
5
7
9
1113
15
17
19
2123
25
27
29

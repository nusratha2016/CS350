function getPowersOf2Generator() {
  var x = 0;
  var y;

  return function() {
    y = Math.pow(2, x);
    x++;
    return y;
  }
}

var next = getPowersOf2Generator();

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
4
8
16
3264
128
256
512

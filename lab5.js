// Question 1
var square = x => x * x;
console.log(square(5));

// Question 2
var cube = x => x * x * x;
console.log(cube(3));

// Question 3
let perfectSquares = x => each(sequence(x),square);
function each_(A, func, p) {
        for (var i = 0; i < A.length; i++) {
        A[i] = func(A[i], p);
        }
        return A;
}
console.log(perfectSquares(10));
//console.log(each([1,2,3], square));

// Question 4
let perfectCubes = x => each(sequence(x), cube);
console.log(perfectCubes(10));

// Question 5
let perfectPowers = (N,P) => each_(sequence(N), Math.pow, P);
console.log(perfectPowers(2, 5));

function each(A, func) {
for (var i = 0; i < A.length; i++) {
A[i] = func(A[i]);
}
return A;
}

function sequence(N) {
       return Array(N).fill().map((_, idx) => idx + 1)
}
console.log(sequence(5))

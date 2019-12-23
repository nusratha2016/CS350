console.log("1.")
products = [
  {'product':"iPhone 7S", 'price':650}, {'product':"MacBook Pro", 'price':2150},
{'product':"Samsung Galaxy S7", 'price':550},
{'product':"Apple AirPods", 'price':159},
{'product':"Bose SoundSport wireless headphones", 'price':179}
]

# Output
[ { product: 'iPhone 7S', price: 650 },
  { product: 'MacBook Pro', price: 2150 },
  { product: 'Samsung Galaxy S7', price: 550 },
  { product: 'Apple AirPods', price: 159 },
  { product: 'Bose SoundSport wireless headphones', price: 179 } ]

console.log("2.")                         // Python
below_limit = lambda p: p["price"] < 200
print(list(filter(below_limit,products) ))  // Python

const belowlimit = (product)=> product['price'] < 200;   // JavaScript
var less200 = products.filter(belowlimit);              // JavaScript
console.log(less200);                                   // JavaScript

console.log("4.")
names = ["Alex", "Karl", "Lulu", "Andrea", "Malika", "Mike", "Peter", "Noel"]
fooFunction = name => name<"M";
console.log(names.filter(fooFunction));

# Output
[ 'Alex', 'Karl', 'Lulu', 'Andrea' ]

console.log("5.")
names = ["Alex", "Karl", "Lulu", "Andrea", "Malika", "Mike", "Peter", "Noel"]
fooFunction = lambda name:name < "M"
print(list(filter(fooFunction, names) ))


console.log("6.")
function compose(f, g) {
  return (x,y) =>f(g(x,y));
}
sum = (x,y) => x + y;
isEven = x => (x%2)==0;
evenSum = compose(isEven, sum);
console.log(evenSum(2,3));
console.log(evenSum(2,2));

# Output
false
true

console.log("7.")
def compose(f,g):
  return lambda x,y: f(g(x,y))

isEven = lambda x : (x%2)==0
Sum = lambda x,y: x+y

evenSum = compose(isEven, Sum)
//print(evenSum(2,1))
//print(evenSum(2,2))

console.log("8.")
var prices = [350, 200, 160, 80, 500, 10, 300, 20, 90, 120, 44, 66]
console.log(prices.map(price=> price/2));

# Output
[ 175, 100, 80, 40, 250, 5, 150, 10, 45, 60, 22, 33 ]

console.log("9.")
prices = [350, 200, 160, 80, 500, 10, 300, 20,90, 120, 44, 66]
// map function
// print(list(map(lambda price: int(price/2), prices)))
// #list comprehension
// print([int(i/2) for i in prices ])


print("10.")
movies = {
"2018, Bohemian Rhapsody": ["Rami Malek","Ben Hardy","Mike Myers","Lucy Bynton"], "2017, Get Out": ["Daniel Kaluuya", "Allison Williams", "Catherine Keener"],
"2017 Logan": ["Hugh Jackman", "Boyd Holbrook", "Patrick Stewart"],
"2018, Black Panther": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"], "2016, Doctor Strange": ["Benedict Cumberbatch", "Rachel McAdams", "Ch. Ejiofor"], "2016, La La Land": ["Emma Stone", "Ryan Gosling", "John Legend"]
}
newMovies = [m for m in movies if m[0:4]>="2018"]
print (newMovies)

# Output
['2018, Bohemian Rhapsody', '2018, Black Panther']

console.log("11.")
newMovies = (list(filter(lambda move: move[0:4] >= "2018", movies)))
//print(newMovies)

print("12.")
squares = [x ** 2 for x in range(12) if x % 2 == 0]
print (squares)

# Output
[0, 4, 16, 36, 64, 100]

console.log("13.")
print(list(filter(squares) ))

console.log("14.")
console.log(list(filter(squares) ))

print("15.")
foo = [x for x in range(16) if x%2>0]
print (foo)

# Output
[1, 3, 5, 7, 9, 11, 13, 15]

console.log("16.")
GeneratorSquaresOf2 = (x ** 2 for x in range(1000))
for i in range(7):
   print(next(GeneratorSquaresOf2))

console.log("17.")
function Squares(){
 var x = -1;
   return () => {
     x++;
     return Math.pow(x,2)
   }
 }
 let result = Squares();
 for(var i = 0; i < 10; i++){
   console.log(result())
 }

# Output
0 1 4 9 16 25 36 49 64 81

print("18.")
foo = []
for x in range(30):
   if x%2 > 0:
      if x%3 == 0:
         foo.append(x)
print(foo)

# Output
[3, 9, 15, 21, 27]

print("19.")
foo = [x for x in range(30) if (x % 2 > 0 and x % 3 == 0)]
// print(foo)

print("20.")
// new = [x for x in range(30)]
foo = list(filter(lambda x: x % 2 > 0 and x % 3 == 0, [x for x in range(30)]))
// print(foo)

print("21.")
// let foo = () =>{
//   let num = []
//   for(var i=0;i< 30;i++){
//     num.push(i);
//   }
//   return num;
// }
// let result = foo();
// console.log(result.filter(x=> x%2>0 && x%3===0))
// let foo = Array.from(Array(30).keys())
console.log(foo.filter(x => x % 2 > 0 && x % 3 === 0))

print("22.")
foo = [x for x in range(10, 100, 10)]
print (foo)

# Output
[10, 20, 30, 40, 50, 60, 70, 80, 90]

print("23.")
new = list(filter(lambda x: x>=50, foo))
print(new)

# Output
[50, 60, 70, 80, 90]

console.log("24.")
let foo = Array.from(Array(100).keys())
let result = foo.filter(x => x % 10 === 0 && x !== 0)
console.log(result.filter(x => x >= 50))

console.log("25.")
students = [{"name":"Alex", "gpa":3.2}, {"name":"Karl", "gpa": 2.85},
{"name":"Lulu", "gpa":3.6}, {"name":"Andrea", "gpa": 1.4},
{"name":"Malika", "gpa":3.3}, {"name":"Mike", "gpa": 1.7},
{"name":"Peter", "gpa": 2.4}, {"name":"Noel", "gpa":1.8},
{"name":"Mon", "gpa":1.4}, {"name":"Alice", "gpa":3.8},
{"name":"Ben", "gpa":2.9}, {"name":"Saira", "gpa":1.2}]

honors = [x["name"] for x in students if x["gpa"] >= 2.85 ]
print (honors)

# Output
['Alex', 'Karl', 'Lulu', 'Malika', 'Alice', 'Ben']

print("26.")
def zeroes(x):
  if x < 0:
    x = 0
  return x
numbers= [-8, 66, 55, 44, -2, 33, -22, 22, 11, -9]

new_list = list(map(lambda x: zeroes(x), numbers))
print(new_list)

# Output
[0, 66, 55, 44, 0, 33, 0, 22, 11, 0]

console.log("26b.")
numbers = [-8, 66, 55, 44, -2, 33, -22, 22, 11, -9]
 let zeros = x =>{
   if(x < 0){
     x = 0;
   }
   return x
 }
 console.log(numbers.map(zeros))

 # Output
 [ 0, 66, 55, 44, 0, 33, 0, 22, 11, 0 ]

print("27.")
sq= list(map(lambda x: x**2, [x for x in range(1,11)]))
print(sq)

# Output
[1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

console.log("27b.")
let squares = [1,2,3,4,5,6,7,8,9,10]
console.log(squares.map(x => Math.pow(x, 2)))

# Output
[ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]

print("28.")
grades = [73, 45, 65, 66, 99, 100, 72, 60, 66, 67, 95, 50, 90, 99]
def grade(x):
  if x >=65:
    return "Pass"
  return "Fail"
new_list = list(map(lambda x: grade(x) ,grades))
print(new_list)

# Output
['Pass', 'Fail', 'Pass', 'Pass', 'Pass', 'Pass', 'Pass', 'Fail', 'Pass', 'Pass', 'Pass', 'Fail', 'Pass', 'Pass']

console.log("28b.")
let grades = [73, 45, 65, 66, 99, 100, 72, 60, 66, 67, 95, 50, 90, 99]
let passorfail = (x) => {if(x >= 65){x = "Pass"} else {x = "Fail"} return x};
console.log(grades.map(x => passorfail(x)))

# Output
[ 'Pass', 'Fail', 'Pass', 'Pass', 'Pass', 'Pass', 'Pass', 'Fail', 'Pass', 'Pass', 'Pass', 'Fail', 'Pass', 'Pass' ]

print("29.")
cart = [{'name': "popcorn", 'price': 2.99, 'quantity': 3},
{'name': "coke", 'price': 1.99, 'quantity': 3},
{'name': "chocolate", 'price': 3.99, 'quantity': 2},
{'name': "bottled water", 'price': 1.99, 'quantity': 10},
{'name': "bagel", 'price': 1.00, 'quantity': 6},
{'name': "cheesecake", 'price': 9.0, 'quantity': 1},
{'name': "cereal", 'price': 5.0, 'quantity': 2},
{'name': "milk", 'price': 5.99, 'quantity': 1},
{'name': "eggs", 'price': 3.99, 'quantity': 2}
]
def total(x):
  new_cart = {"item":"", "total":0}
  new_cart['item'] = x['name']
  new_cart['total'] = x['price'] * x['quantity']
  return new_cart
new = list(map(lambda x: total(x), cart))
print(new)

# Output
[{'item': 'popcorn', 'total': 8.97},
{'item': 'coke', 'total': 5.97},
{'item': 'chocolate', 'total': 7.98},
{'item': 'bottled water', 'total': 19.9},
{'item': 'bagel', 'total': 6.0},
{'item': 'cheesecake', 'total': 9.0},
{'item': 'cereal', 'total': 10.0},
{'item': 'milk', 'total': 5.99},
{'item': 'eggs','total': 7.98}
]

console.log("29b.")
cart = [{'name': "popcorn", 'price': 2.99, 'quantity': 3},
{'name': "coke", 'price': 1.99, 'quantity': 3},
{'name': "chocolate", 'price': 3.99, 'quantity': 2},
{'name': "bottled water", 'price': 1.99, 'quantity': 10},
{'name': "bagel", 'price': 1.00, 'quantity': 6},
{'name': "cheesecake", 'price': 9.0, 'quantity': 1},
{'name': "cereal", 'price': 5.0, 'quantity': 2},
{'name': "milk", 'price': 5.99, 'quantity': 1},
{'name': "eggs", 'price': 3.99, 'quantity': 2}
]
 let item = (x) => {
   var i = {}
   i.item = x.name
   i.total = x.price * x.quantity
   return i
 }
console.log(cart.map(x=> item(x)))

# Output
[ { item: 'popcorn', total: 8.97 },
  { item: 'coke', total: 5.97 },
  { item: 'chocolate', total: 7.98 },
  { item: 'bottled water', total: 19.9 },
  { item: 'bagel', total: 6 },  { item: 'cheesecake', total: 9 },
  { item: 'cereal', total: 10 },
  { item: 'milk', total: 5.99 },
  { item: 'eggs', total: 7.98 } ]

print("30A.")
cars = [{'make': "Lamborghini", 'model': "Huracan", 'maxSpeed':320, 'stars':5},
{'make': "Lamborghini", 'model': "Aventador", 'maxSpeed':340, 'stars':5},
{'make': "Ferrari", 'model': "Superfast", 'maxSpeed':310, 'stars':3},
{'make': "Porsche", 'model': "Cayman", 'maxSpeed':330, 'stars':5},
{'make': "Lamborghini", 'model': "Urus", 'maxSpeed':300, 'stars':4},
{'make': "Ferrari", 'model': "Spider", 'maxSpeed':320, 'stars':5},
]
isFast = lambda x: x["maxSpeed"] >=320
print(isFast(cars[0]))

# Output
True (A)

# Output (B)
[{'make': 'Lamborghini', 'model': 'Huracan', 'maxSpeed': 320, 'stars': 5},
{'make': 'Lamborghini', 'model': 'Aventador', 'maxSpeed': 340, 'stars': 5},
{'make': 'Porsche', 'model': 'Cayman', 'maxSpeed': 330, 'stars': 5},
{'make': 'Ferrari', 'model': 'Spider', 'maxSpeed': 320, 'stars': 5}
]

# Output (C)
[{'make': 'Ferrari', 'model': 'Superfast', 'maxSpeed': 310, 'stars': 3},
{'make': 'Ferrari', 'model':'Spider', 'maxSpeed': 320, 'stars': 5}]

# Output (D)
[{'make': 'Lamborghini', 'model': 'Huracan', 'maxSpeed': 320, 'stars': 5},
{'make': 'Lamborghini', 'model': 'Aventador', 'maxSpeed': 340, 'stars': 5},
{'make': 'Lamborghini', 'model': 'Urus', 'maxSpeed':300, 'stars': 4}
]

# Output (E)
[100.0, 100.0, 60.0, 100.0, 80.0, 100.0]

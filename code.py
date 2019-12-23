products = [ {'product':"iPhone 7S", 'price':650},{'product':"MacBook Pro", 'price':2150},{'product':"Samsung Galaxy S7", 'price':550},{'product':"Apple AirPods", 'price':159},{'product':"Bose SoundSport wireless headphones", 'price':179} ]
# belowLimit = lambda x : x["price"] <200


# Joel
belowLimit = lambda x: x["price"] < 200
#print(belowLimit(products[-1]))
#This works
limitlist = list(filter(lambda x: belowLimit(x),products))
limitlistfunc = list(filter(lambda x: x["price"]  < 200,products))

#print(*limitlist)

#lakye
names = ["Alex", "Karl", "Lulu", "Andrea", "Malika", "Mike", "Peter", "Noel"]
fooFunction = list(filter(lambda name: name<"M", names))
#print(fooFunction)


#for .7

def compose(f,g):
  return lambda x,y: f(g(x,y))

isEven = lambda x : (x%2)==0
Sum = lambda x,y: x+y

evenSum = compose(isEven, Sum)
# print(evenSum(2,1))
# print(evenSum(2,2))

#num 9

prices = [350, 200, 160, 80, 500, 10, 300, 20,90, 120, 44, 66]
#map function
# print(list(map(lambda price: int(price/2), prices)))
# #list comprehension
# print([int(i/2) for i in prices ])

#num 10

movies = {
 "2018, Bohemian Rhapsody": ["Rami Malek","Ben Hardy","Mike Myers","Lucy Bynton"],
 "2017, Get Out": ["Daniel Kaluuya", "Allison Williams", "Catherine Keener"],
 "2017 Logan": ["Hugh Jackman", "Boyd Holbrook", "Patrick Stewart"],
 "2018, Black Panther": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
 "2016, Doctor Strange": ["Benedict Cumberbatch", "Rachel McAdams", "Ch. Ejiofor"],
 "2016, La La Land": ["Emma Stone", "Ryan Gosling", "John Legend"]
}
# newMovies = [m for m in movies if m[0:4]>="2018"]
# print (newMovies)

# Num 11

newMovies = (list(filter(lambda move: move[0:4] >= "2018", movies)))
# print(newMovies)

# Num 12
squares = [x**2 for x in range(12) if x%2==0]
# print (squares)
# Num 13
sq = list(filter(lambda x: x%2 == 0, squares))
# print(sq)

# # Num 14
# let squares = () =>{
#   var x = [];
#   for(var i=0; i < 12; i++)
#   {
#     if(i%2===0){
#      x.push( Math.pow(i,2))
#     }

#   }
#   return x;
# };

# let result = squares;
# console.log(result())

# Num 15
foo = [x for x in range(16) if x%2>0]
# print (foo)

# Num 16
squaresoftwo = (x**2 for x in range(1000))
# for i in range(6):
  # print(next(squaresoftwo))

# Num 17
# function Squares(){
#   var x = -1;
#   return () => {
#     x++;
#     return Math.pow(x,2)
#   }
# }
# let result = Squares();
# for(var i = 0; i < 10; i++){
#   console.log(result())
# }

# Num18

#  foo = []
# for x in range(30):
#   if x%2 > 0:
#     if x%3 == 0:
#       foo.append(x)
# print(foo)

# Num 19
#  foo = [x for x in range(30) if (x%2>0 and x%3==0)]
# print(foo)

# Num 20
# new = [x for x in range(30)]
foo = list(filter(lambda x: x%2>0 and x%3==0, [x for x in range(30)]))
# print(foo)
# Num 21
#  // let foo = () =>{
# //   let num = []
# //   for(var i=0;i< 30;i++){
# //     num.push(i);
# //   }
# //   return num;
# // }
# // let result = foo();

# // console.log(result.filter(x=> x%2>0 && x%3===0))
# let foo = Array.from(Array(30).keys())
# console.log(foo.filter(x=>x%2>0 && x%3===0))

# Num 22
foo = [x for x in range(10, 100, 10)]
# print (foo)

#Num23
# new = list(filter(lambda x: x>=50, foo))
# print(new)

# Num 24
# let foo = Array.from(Array(100).keys())
# let result = foo.filter(x=> x%10===0 && x !== 0)
# console.log(result.filter(x=> x>=50))

# Num 25
students = [{"name":"Alex", "gpa":3.2}, {"name":"Karl", "gpa": 2.85},
{"name":"Lulu", "gpa":3.6}, {"name":"Andrea", "gpa": 1.4},
{"name":"Malika", "gpa":3.3}, {"name":"Mike", "gpa": 1.7},
{"name":"Peter", "gpa": 2.4}, {"name":"Noel", "gpa":1.8},
{"name":"Mon", "gpa":1.4}, {"name":"Alice", "gpa":3.8},
{"name":"Ben", "gpa":2.9}, {"name":"Saira", "gpa":1.2}]

honors = [x["name"] for x in students if x["gpa"] >= 2.85 ]

# print (honors)

# Num 26
def zeroes(x):
  if x < 0:
    x = 0
  return x
numbers= [-8, 66, 55, 44, -2, 33, -22, 22, 11, -9]

new_list = list(map(lambda x: zeroes(x), numbers))
#print(new_list)

# Part b
# numbers = [-8, 66, 55, 44, -2, 33, -22, 22, 11, -9]
# let zeros = x =>{
#   if(x < 0){
#     x = 0;
#   }
#   return x
# }
# console.log(numbers.map(zeros))

#Num 27
sq= list(map(lambda x: x**2, [x for x in range(1,11)]))
# print(sq)

# Part b
# let squares = [1,2,3,4,5,6,7,8,9,10]
# console.log(squares.map(x=>Math.pow(x,2)))

#Num 28
grades = [73, 45, 65, 66, 99, 100, 72, 60, 66, 67, 95, 50, 90, 99]
new_list = list(map(lambda x: "Pass" x>65 ,grades)
)

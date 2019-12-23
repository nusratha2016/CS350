def perfect_squares(limit):
 value = 1
 while value < limit:
  yield value*value
 value += 1
foo = perfect_squares(1000)
for i in range(6):
 print(next(foo))

 # Output
1
4
9
16
25
36

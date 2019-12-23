# Question 5
print('')
print('5.')

def powerOfThree(x):
  value = 1
  while value < x:
      yield value
      value = value * 3;

for i in powerOfThree(1000):
  print(i)

# Output
1
3
9
27
81
243
729

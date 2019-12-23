x = int(input("Enter your number? "))
for c in range(1, x):
  for b in range(1, c):
    for a in range(1, b):
      if a * a + b * b == c * c:
        print('{}, {}, {}'.format(a,b,c))

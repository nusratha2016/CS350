foo = []
for x in range(20):
 if x%2 == 0 :
  if x%5 == 0:
    foo.append(x)
print(foo)

#Part B
foo = [x for x in range(20) if x%2 == 0 if x%5 == 0]
#foo = (x**2 for x in range(20))
#print(foo)

# Output
[0, 10]
List comprehension:

[0, 10]

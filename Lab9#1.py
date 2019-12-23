numbers = range(12)
new_list = []
for n in numbers:
      if n % 2 == 0:
        new_list.append(n ** 2)
print(new_list)

# Output
[0, 4, 16, 36, 64, 100]

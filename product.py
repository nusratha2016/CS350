product = int(input("How many numbers you want to product? "))
inputs = []

for x in range(product):
  inputs.append(int(input("Product: ")))

def product(product):
  total = 1
  for x in product:
    total *= x
  return total

print(inputs)
print("\nThe total Product is:")
print(product(inputs))

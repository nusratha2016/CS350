feet = [128608, 119750, 122375, 124015]
new_list = []
for x in feet:
  if x >= 120000:
    new_list.append(x+1)
  else:
    new_list.append(x+5)
print(new_list)

# Output
[128609, 119755, 122376, 124016]

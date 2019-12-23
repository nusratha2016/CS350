import random

print("Enter five numbers (one at a time between 1 and 44):")

UserNumbers = []

for i in range(5):

    UserNumbers.append(int(input()))

WinningNumbers = []

for j in range(5):

    WinningNumbers.append(random.randint(1, 44))

print("The Winning Numbers are:")

for k in WinningNumbers:
  print(k, end= " ")
print()
win = 0

for x in UserNumbers:
  if(x in WinningNumbers):
    win = 1

if(UserNumbers == WinningNumbers):
    print ("\nCongratulations! YOU WON THE LOTTERY!\n")
    print ("The winning numbers are: ", WinningNumbers, "\n")

else:

    print ("\nSorry, you do not win this time\n")
    print ("The winning lottery numbers are: ", WinningNumbers, "\n")

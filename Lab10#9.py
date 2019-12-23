def getDigit(s):
  result = []
  for x in s:
    if(x.isdigit()):
      result.append(x)
  return result

testString = "Hello 12345 World"
res = getDigit(testString)
for y in res:
  print(y, end = " ")

 # Output
['1', '2', '3', '4', '5']

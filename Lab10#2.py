movies = ["2018, Black Panter", "2018: Bohemian Rhapsody", "2017: Get Out", "2017: Logan", "2016: La La Land", "2016: Doctor Strange"]
new_list = []
for m in movies:
 if m[0:4]=="2016":
  new_list.append("REMOVED FROM LIBRARY - " + m)
 else:
  new_list.append(m)
print(new_list)

movies = (m for m in movies if m[0:4] == "2016")


# Output
[('2016, Doctor Strange', ['Benedict Cumberbatch', 'Rachel McAdams', 'Ch. Ejiofor']),
('2016, La La Land', ['Emma Stone', 'Ryan Gosling', 'John Legend'])]

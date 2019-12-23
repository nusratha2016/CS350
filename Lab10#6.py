movies = {
"2018, Bohemian Rhapsody": ["Rami Malek","Ben Hardy","Mike Myers","Lucy       Bynton"],
"2017, Get Out": ["Daniel Kaluuya", "Allison Williams", "Catherine Keener"],
"2017 Logan": ["Hugh Jackman", "Boyd Holbrook", "Patrick Stewart"],
"2018, Black Panther": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
"2016, Doctor Strange": ["Benedict Cumberbatch", "Rachel McAdams", "Ch. Ejiofor"],
"2016, La La Land": ["Emma Stone", "Ryan Gosling", "John Legend"]
}
for newmovie in movies:
    if newmovie. startswith("2016"):
       print(newmovie + " " + str(movies[newmovie]))

# Output 6a
['2018, Black Panther', '2018: Bohemian Rhapsody', '2017: Get Out', '2017: Logan',
'REMOVED FROM LIBRARY - 2016: La La Land', 'REMOVED FROM LIBRARY - 2016: Doctor Strange']

# Output 6b
['2018, Black Panther', '2018: Bohemian Rhapsody', '2017: Get Out', '2017: Logan',
'Removed from Library -2016: La La Land', 'Removedfrom Library -2016: Doctor Strange']

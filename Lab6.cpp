#include<iostream>
#include<string>
using namespace std;

class Movie
{
private:

   string name;
   int release_year;
   int ratings_count;
   int ratings1;
   int ratings2;
   int ratings3;
   int ratings4;
   int ratings5;

public:
  Movie(string n, int y)
     {
         name = n;
         release_year = y;
         ratings_count = 0;
         ratings1 = 0;
         ratings2 = 0;
         ratings3 = 0;
         ratings4 = 0;
         ratings5 = 0;
     }

  void addRating(int r)
   {
       //increment the ratings_count by 1
       ratings_count = ratings_count + 1;
       switch(r)
       {

       case 1:
           //increment the ratings1 by 1
           ratings1 = ratings1 + 1;
           break;

       case 2:
           //increment the ratings2 by 1
           ratings2 = ratings2 + 1;
           break;

       case 3:
           //increment the ratings3 by 1
           ratings3 = ratings3 + 1;
           break;

       case 4:
           //increment the ratings4 by 1
           ratings4 = ratings4 + 1;
           break;

       case 5:
           //increment the ratings5 by 1
           ratings5 = ratings5 + 1;
           break;
       }
   }

   double averageRating() const
      {
          double avgRating = 0;
          avgRating = (1 * ratings1 + 2 * ratings2 + 3 * ratings3 + 4 *ratings4 + 5 * ratings5) / ratings_count;
          return avgRating;
      }

      friend ostream & operator << (ostream & output, const Movie & M)
      {
          output << M.name << ", " << M.release_year << endl
              << "Avg Rating: " << M.averageRating() << endl
              << "Rated by : " << M.ratings_count << " users" << endl;
          return output;
      }
   };

     int main()
{
//Create Movie objects
Movie lord1("Lord of the Rings: The Fellowship of the Ring", 2001);

Movie lord2("Lord of the Rings: The Return of the King", 2003);

//lord1 RATINGS
//Add 5 ratings of 5 stars to lord1 object
 for (int i = 1; i <= 5; i++)
 lord1.addRating(5);

//Add 15 ratings of 4 stars to lord1 object
 for (int i = 1; i <= 15; i++)
 lord1.addRating(4);

//Add 5 ratings of 3 stars to lord1 object
 for (int i = 1; i <= 5; i++)
 lord1.addRating(3);

//Add 2 ratings of 2 stars to lord1 object
 lord1.addRating(2);
 lord1.addRating(2);

//lord2 RATINGS
//Add 3 ratings of 4 stars to lord2 object
 for (int i = 1; i <= 3; i++)
 lord2.addRating(4);

//Add 1 ratings of 2 stars to lord2 object
 lord2.addRating(2);

//Add 1 ratings of 1 stars to lord2 object
 lord2.addRating(1);

//PRINT MOVIES AND AVERAGE RATINGS
 cout << "FIRST MOVIE" << endl << lord1 << endl << endl;
 cout << "SECOND MOVIE" << endl << lord2 << endl << endl;
}

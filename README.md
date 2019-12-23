###### AUTHOR: Lisa Michael -  ROLE: DEVELOPER
###### HW: WK13 - FriendFinder
###### url: https://lisamichael.github.io/FriendFinder/
###### Heroku URL: https://calm-scrubland-59608.herokuapp.com/

###### Overview
In this activity, I created a compatibility-based "FriendFinder" application. This full-stack site will take in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

The user will need to connect to the url: https://calm-scrubland-59608.herokuapp.com/ and answer 10 questions. They must submit an answer of 1 through 5, where 1 is set to "Strongly Disagree" and 5 is "Strongly Agree" .

The compatibility  logic of the program will compare the answers provided by the end user and compare the answers of users in the Friends Array, to determine who is best suited to be their friend. 

##### Developing the application: 

The local HTTP server is created using the server.js file, which is the file where the HTTP ports are configured. 

The server.js requires the npms: express and path. 

The application will require two route.js files: 

Your htmlRoutes.js file should include two routes:

A GET Route to /survey which should display the survey page.
A default, catch-all route that leads to home.html which displays the home page.

Your apiRoutes.js file should contain two routes:

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

##### Logic to Determine Friend Compatibility: 

Determine the user's most compatible friend using the following as a guide:

The application converts each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
With that done, the application will compare the difference between current user's scores against those from other users, question by question. The results are added up and the differences to calculate the totalDifference.

Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

The app calculates both 5-3 and 3-5 as 2, and so on.
The closest match will be the user with the least amount of difference.


Once the current user's most compatible friend is determined, the application will display the result as a modal pop-up.

The modal displays both the name and picture of the closest match.
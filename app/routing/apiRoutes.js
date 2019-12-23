

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

let friends = require("../data/friends");


// declaring variables




// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends. 

  app.get("/api/friends", function (req, res) {
    res.json(friends);


  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // Then the server saves the data to the friends array)

  //A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {

    // new friend based upon user input 
    var newFriend = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores
    };

    // console.log(newFriend);

   
    // console.log(req)
    res.json(true);

    // console.log(friends);
    // console.log(req.body.scores);

    let friendScores = req.body.scores;
    // console.log(friendScores);

    // create a nested for loop. 
    //The outside loop , we will iterate through the friends in the friends array,
    // and in the inside loop, we will loop through the scores in the friend iteration


    
    //total difference variable used in logic to determine friend compatibility

    let totalDifference = 0; 

    for (let i = 0; i < friends.length; i++) {
      // console.log('friend = ' + JSON.stringify(friends[i]));
       totalDifference = 0;

      for (let j = 0; j < friendScores.length; j++) {

        // Determine the user's most compatible friend using the following as a guide:


        // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).


        console.log(friendScores[j] + " + this is the new friendsscore");
        console.log(parseInt(friends[i].scores[j]) + " this is friend array score");



        // Remember to use the absolute value of the differences.
        // I used Math.abs() so no negative solutions are generated 
        let difference = Math.abs(friendScores[j] - (parseInt(friends[i].scores[j])));
        // The closest match will be the user with the least amount of difference.



        console.log(difference );

         // compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

        totalDifference += difference;
        console.log(totalDifference + " friend " + friendScores[j]);
      }

      
    }

// push the new friend to the friend array 
friends.push(newFriend);

  });

  // console.log(totalDifference + " for friend" + friends[i]);
  // ---------------------------------------------------------------------------
  //  this  code will clear out the survey questions


  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    friends.length = 0;


    res.json({ ok: true });
  });
};

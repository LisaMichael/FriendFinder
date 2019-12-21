

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

let friends = require("../data/friends");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends. 

  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friends);
    console.log(friends);


  });



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friends array)

  //A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

  // ---------------------------------------------------------------------------

  app.post("/api/friends", function (req, res) {


    // Determine the user's most compatible friend using the following as a guide:

    // Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
    // With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
    
    // Example:
    
    // User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    // User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
    
    // Total Difference: 2 + 1 + 2 = 5
    
    
    
    // Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both 5-3 and 3-5 as 2, and so on.
    // The closest match will be the user with the least amount of difference.




    // if (friends.length < 5) {
      friends.push(req.body);
      console.log(req)
      res.json(true);
     
    // }

    console.log(friends);

    // else code is to 
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

  // ---------------------------------------------------------------------------
  //  this  code will clear out the survey questions


  app.post("/api/clear", function (req, res) {
    // Empty out the arrays of data
    friends.length = 0;


    res.json({ ok: true });
  });
};

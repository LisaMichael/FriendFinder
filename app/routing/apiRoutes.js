

// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friends = require("../data/friends");
// var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends. 

  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
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

  app.post("/api/friends", function(req, res) {
    
    
    // req.body is available since we're using the body parsing middleware

      
    if (friends.length < 5) {
      friends.push(req.body);
      res.json(true);
    }

    // else code is to 
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

  // ---------------------------------------------------------------------------
  //  this  code will clear out the survey questions
  

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friends.length = 0;
    

    res.json({ ok: true });
  });
};

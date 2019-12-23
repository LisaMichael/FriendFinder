//a POST routes /api/friends - this handles incoming survey results. will also used to handle the compatibility logic
//Load Data
let friendList = require('../data/friends.js');

module.exports = function(app){
  //a GET route that displays JSON of all possible friends
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
    //grabs the new friend's scores to compare with friends in friendList array
    let newFriendScores = req.body.scores;
    let scoresArray = [];
    let friendCount = 0;
    let bestMatch = 0;

    //use nested forloop to run through all current friends in the array
    for(let i=0; i<friendList.length; i++){
      let scoresDiff = 0;
      //run through scores to compare friends
      for(let j=0; j<newFriendScores.length; j++){
        // use Math.abs() method so values are absolute, and no negative values
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      //push results into scoresArray
      scoresArray.push(scoresDiff);
    }

    //after all friends are compared, find best match
    for(let i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    //return bestMatch data
    let bff = friendList[bestMatch];
    res.json(bff);

    //pushes new friend into the friendsList array
    friendList.push(req.body);
  });

//  this  code will clear out the survey questions


app.post("/api/clear", function (req, res) {
  // Empty out the arrays of data
  friends.length = 0;


  res.json({ ok: true });
});


};


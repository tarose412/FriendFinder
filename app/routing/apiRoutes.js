var friends = require('../data/friends.js');

console.log(friends);

module.exports = function (app) {

    app.get('/api/friends', function (req, res) {

        res.json(friends);
    });

    // Matching logic
    app.post('/api/friends', function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            scoreDifference: 100
        };

        // Take the user's answers from POST and parse it
        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        // This variable calculates the difference between the user's score and the potential
        // profiles to match with
        var totalDifference = 0;

        // Loop through the match possibilities in the database
        for (var i = 0; i < friends.length; i++) {

            totalDifference = 0;

            // Loop through the scores of potential matches
            for (var j = 0; j < friends[i].scores[j]; j++) {
                totalDifference += Math.abs(userScores[j] - friends[i].scores[j]);

                if (totalDifference <= bestMatch.scoreDifference) {
                    // Reset the bestMatch to be the new friend
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.scoreDifference = totalDifference;
                }
            }
        }

        // Save the user's data to the database
        friends.push(userData);

        // Return a JSON with the user's bestMatch
        res.json(bestMatch);

    });
}
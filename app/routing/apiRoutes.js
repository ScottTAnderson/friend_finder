var friends = require("../public/assets/data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var differenceArray = [];
        var numberOfFriends = friends.length;
        friends.push(req.body);
        for (i = 0; i < numberOfFriends; i++) {
            var totalDifference = 0;
            for (j = 0; j < 10; j++) {
                totalDifference += Math.abs(friends[numberOfFriends].scores[j] - friends[i].scores[j]);
            }
            differenceArray.push(totalDifference);
        }
        var closestMatch = Math.min(...differenceArray);
        var position = differenceArray.indexOf(closestMatch)
        res.json(friends[position]);
    });
};
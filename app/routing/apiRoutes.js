//API Routes ----------------------------------------------------------------

module.exports = function (app, data) {

    // API GET Requests at api/friends level returns JSON from friends.js file --------------------------------
    app.get("/api/friends", function (req, res) {
        return res.json(data);
    });

    // API POST Requests posts new user name, profile picture link and compatability score into friends API as JSON data ----
    app.post("/api/friends", function (req, res) {
        const newFriendFinderUser = req.body;
        for (var i = 0; i < newFriendFinderUser.scores.length; i++) {
            var string = newFriendFinderUser.scores[i];
            var int = parseInt(string);
            newFriendFinderUser.scores.splice(i, 1, int);
        }

        data.push(newFriendFinderUser);
        res.json(newFriendFinderUser);
    });
}
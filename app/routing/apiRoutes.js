var friendsData = require("../data/friends");

console.log(friendsData);

module.exports = function apiRoutes(app) {
    //display tables
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newFriend = req.body;
        console.log(newFriend);
        friendsData.push(newFriend);
        res.json(newFriend);
        console.log("_____");
        console.log(friendsData)
        var bestmatch = {
            name: "",
            img: "",
            difference: 20
        };
    });
}

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

    // console.log(newcharacter);

    // characters.push(newcharacter);

    // res.json(newcharacter);



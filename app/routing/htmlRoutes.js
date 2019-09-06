console.log("HTML Route Connected");

var path = require("path");

function htmlRoutes(app){

//Direct user to Survey
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

//Direct user to Home Page
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

}
module.exports = htmlRoutes;
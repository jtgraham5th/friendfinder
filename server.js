var express = require("express");
var path = require("path");
var fs = require("fs");
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var answers = []

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

apiRoutes(app);
htmlRoutes(app);

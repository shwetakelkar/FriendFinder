var express = require("express");
//var bodyParse = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3000;

//app.use(express.bodyParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var htmlRoute = require("./app/routing/htmlRoutes.js");
var apiRoute = require("./app/routing/apiRoutes.js");




app.use(express.static("app"))
app.use("/",htmlRoute);
app.use("/",apiRoute);


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
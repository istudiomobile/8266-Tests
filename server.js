//Import the necessary libraries/declare the necessary objects
var express = require("express");
var myParser = require("body-parser");
var app = express();

app.use(myParser.urlencoded({extended : true}));
app.post("/main", function(request, response) {
    console.log(request.body); //This prints the JSON document received (if it is a JSON document)
});

//Start the server and make it listen for connections on port 1337
var port = process.env.PORT || 1337;
app.listen(port);
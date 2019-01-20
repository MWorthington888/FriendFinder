//Set up dependencies ---------------------------------------------
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");


// Creates express server and sets up a port ---------------------
const app = express();
const PORT = process.env.PORT || 3000;


 //Parse request body as JSON -------------------------------------
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const data = require("./app/data/friends.js");


//Router  - The below points our server to a series of "route" files.
require("./app/routing/apiRoutes")(app, data);
require("./app/routing/htmlRoutes")(app, path);


// Starts the server to begin listening --------------------------
app.listen(PORT, function(){
    console.log("App listening on PORT" + PORT);
})

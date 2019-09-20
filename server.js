// ==============================================================================
// DEPENDENCIES
// Series of npm packages used to give my server useful functionality.
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for my express server.
// ==============================================================================

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port to be used in listener.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// ================================================================================

require("./app/routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" my server.
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

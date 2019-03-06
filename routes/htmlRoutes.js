var db = require("..");
var path = require("path");

module.exports = function(app) {
  // Load index page
  // ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================


// ===============================================================================
// ROUTING
// ===============================================================================

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  app.get("/ingredients", function(req, res) {
    res.sendFile(path.join(__dirname, "../ingredients.html"));
  });

  app.get("/recipes", function(req, res) {
    res.sendFile(path.join(__dirname, "../recipes.html"));
  });


  // If no matching route is found default


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.status(404);
    res.render("404");
  });
};



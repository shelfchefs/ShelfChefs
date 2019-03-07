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

  app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../main.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../login.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../contact.html"));
  });

  app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../about.html"));
  });

  // If no matching route is found default


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.status(404);
    res.render("404");
  });
};



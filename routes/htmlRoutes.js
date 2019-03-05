var db = require("..");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Ingredient.findAll({}).then(function(dbIngredient) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbIngredient
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/ingredient/:id", function(req, res) {
    db.Ingredient.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("login", {
        example: dbIngredient
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

var db = require("../models");

module.exports = function(app) {
  // Get all Ingredients
  app.get("/api/ingredient", function(req, res) {
    db.Ingredient.findAll({}).then(function(dbIngredient) {
      res.json(dbIngredient);
    });
  });

  // Create a new Ingredient
  app.post("/api/ingredient", function(req, res) {
    db.Ingredient.create(req.body).then(function(dbIngredient) {
      res.json(dbIngredient);
    });
  });

  // Delete an Ingredient by id
  app.delete("/api/ingredient/:id", function(req, res) {
    db.Ingredient.destroy({ where: { id: req.params.id } }).then(function(dbIngredient) {
      res.json(dbIngredient);
    });
  });
};

